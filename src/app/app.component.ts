import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BentoTreeItemOption } from "@bento.ui/bento-ng";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import * as _ from "underscore";
import * as cj from "circular-json";
import * as $ from "jquery";

import { DataService } from "./data.service";
import { SearchResultItem, Formats, FoS, Brand } from "./searchitem.model";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})

export class AppComponent implements OnInit, AfterViewInit {
	searchData: SearchResultItem[] = [];
	filteredSearchData: SearchResultItem[];
	filteredSearch1: SearchResultItem[];
	filteredSearch2: SearchResultItem[];
	filteredSearch3: SearchResultItem[];
	filteredSearch4: SearchResultItem[];
	filteredSearch5: SearchResultItem[];
	filteredSearchStart: SearchResultItem[] = [];
	filteredSearchEnd: SearchResultItem[];
	checkedItems: any[] = [];
	tree1CheckedItems: any[] = [];
	tree2CheckedItems: any[] = [];
	tree3CheckedItems: any[] = [];
	tree4CheckedItems: any[] = [];
	tree5CheckedItems: any[] = [];
	treeCount: number = 5;
	dpStartModel: any;
	dpEndModel: any;
	currentYear: number = new Date().getFullYear();
	currentMonth: number = new Date().getMonth() + 1;
	locationList: string[] = [];
	closeResult: string;

	// Make enums public so template can use them.
	Formats = Formats;
	FoS = FoS;
	Brand = Brand;

	// This is the data to populate the filter trees in the template.
	treeDataFmt: any[] = this._dataService.getTreeDataFmt();
	treeDataCred: any[] = this._dataService.getTreeDataCred();
	treeDataDes: any[] = this._dataService.getTreeDataDes();
	treeDataFos: any[] = this._dataService.getTreeDataFos();
	treeDataBrand: any[] = this._dataService.getTreeDataBrand();
    
	//This is the data to populate for course sort options and the default option is Relevance.
	courseSortOptions = [
		{"id":0,"value":"Relevance"},
		{"id":1,"value":"Newest to Oldest"},
		{"id":2,"value":"Oldest to Newest"},
		{"id":3,"value":"Topic(A - Z)"},
		{"id":4,"value":"Price - Lowest to Highest"},
		{"id":5,"value":"Price - Highest to Lowest"},
		{"id":6,"value":"Credits - Least to Most"},
		{"id":7,"value":"Credits - Most to Least"}
	 
	];
    courseSortOptionSelected: Number =0;
	
	constructor(private _dataService: DataService, private _cDetRef: ChangeDetectorRef, private _modalService: NgbModal) {}

	private onItemCheck(event, treeIndex): void {
		const names = [];
		event.items.forEach(item => {
			names.push(item);
		});
		this[`tree${treeIndex}CheckedItems`] = names;
		this.doFilterTree(treeIndex);
		this.aggregateCheckedItems(this.treeCount);
		this.saveState();
	}

	private aggregateCheckedItems(trees: number): void {
		// Put all of the checked filters into one array so that the filter tags display when active.
		// TODO: This is probably going to need a sort. They are currently displayed -- more or less -- in the order activated, by tree.
		this.checkedItems = [];
		for (let x = 1; x <= trees; x++) {
			if (this[`tree${x}CheckedItems`].length > 0) {
				this.checkedItems = this.checkedItems.concat(this[`tree${x}CheckedItems`]);
			}
		}
	}

	private doFilter(filterBy: string, tree: string): SearchResultItem[] {
		if (tree === "CreditRange") {
			// CreditRange matches on calculated range.
			return this.doCredFilter(Number(filterBy));
		} else {
			return this.searchData.filter( (searchItem: any) => {
				if (typeof(searchItem[tree]) === "object") {
					// Object match
					return searchItem[tree].indexOf(filterBy) !== -1;
				} else {
					// String match (brand)
					return (searchItem[tree] === filterBy ? searchItem[tree] : null);
				}
			});
		}
	}

	private doFilterTree(treeIndex: number): void {
		// If filters in this tree index are checked, activate them and de-dupe the item list.
		// Otherwise, remove all filters from indicated tree.
		let aggArr: SearchResultItem[] = [];
		if (this[`tree${treeIndex}CheckedItems`].length > 0) {
			this[`tree${treeIndex}CheckedItems`].forEach(filter => {
				const temp = this.doFilter(filter.enumVal, filter.tree);
				aggArr = aggArr.concat(temp);
			});
			// De-dupe.
			this[`filteredSearch${treeIndex}`] = aggArr.filter(
				(item, pos, self) => self.indexOf(item) === pos);
		} else {
			// No checked items -- Remove filters from indicated filter tree.
			this[`filteredSearch${treeIndex}`] = this.searchData;
		}
		this.doFilterIntersect();
	}

	private doFilterIntersect(): void {
		// This method reduces filterdSearchData to the intersection of all the filtered datasets.
		this.filteredSearchData = [];
		this.filteredSearchData =
			_.intersection(this.filteredSearch1, this.filteredSearch2,
				this.filteredSearch3, this.filteredSearch4, this.filteredSearch5,
				this.filteredSearchStart, this.filteredSearchEnd);
	}

	private doCredFilter(enumVal: number): SearchResultItem[] {
		// This is currently the way credit hours are allocated to ranges.
		let gt: number, lt: number;
		switch (enumVal) {
			case 1:
				gt = 0; lt = 3;
				break;
			case 2:
				gt = 3; lt = 6;
				break;
			case 3:
				gt = 6; lt = 12;
				break;
			case 4:
				gt = 12; lt = 100;
				break;
			default:
				gt = 0; lt = 0;
		}
		return this.searchData.filter( (searchItem: any) => {
			return searchItem.Credits >= gt && searchItem.Credits < lt;
		});
	}

	private clearFilters(): void {
		// Clear all filters (including query params). Clear local storage. Display full dataset.
		for (let x = 1; x <= this.treeCount; x++) {
			this[`tree${x}CheckedItems`].forEach( (item: any) => {
				item.$bentoTreeItemOption.setChecked(false, item.tree);
			});
			this[`tree${x}CheckedItems`] = [];
		}
		this.checkedItems = [];
		this.initData();
		localStorage.clear();
	}

	private removeFilter(item: any): void {
		// Used by template to remove filter via filter tag bar.
		item.$bentoTreeItemOption.setChecked(false, item.tree);
		this.checkedItems.splice(this.checkedItems.indexOf(item), 1);
		for (let x = 1; x <= this.treeCount; x++) {
			if (this[`tree${x}CheckedItems`].indexOf(item) !== -1) {
				this[`tree${x}CheckedItems`].splice(this[`tree${x}CheckedItems`].indexOf(item), 1);
				this.doFilterTree(x);
			}
		}
		this.saveState();
	}

	private addFilter(item: any, treeIndex: number): void {
		// Used by presetFilter() and loadState() to set/restore filters.
		// Guard. Dynamically generated item def may no longer exist in current context.
		if (typeof(item) === "undefined") { return; }
		item.$bentoTreeItemOption.setChecked(true, item.tree);
		this.checkedItems.push(item);
		// De-dupe filter tags.
		this.checkedItems = this.checkedItems.filter(
			(thingfish, pos, self) => self.indexOf(thingfish) === pos);
		this[`tree${treeIndex}CheckedItems`].push(item);
		// De-dupe specified checked item tree.
		this[`tree${treeIndex}CheckedItems`] = this[`tree${treeIndex}CheckedItems`].filter (
			(thing, pos, self) => self.indexOf(thing) === pos);
		this.doFilterTree(treeIndex);
	}

	private presetFilter(filterName: string, filterVal: string): void {
		let item: any[];
		// The incoming parameters don't match the labels, so mangle to fit here.
		filterVal = this.mangleFilter(filterVal);
		// Add filter(s) for defined query parameters.
		switch (filterName) {
			case "FoS":
				item = this.treeDataFos[0].items.filter(entry =>
					entry.label.toLowerCase() === filterVal.toLowerCase());
				this.addFilter(item[0], 4);
				break;
			case "Formats":
				item = this.treeDataFmt[0].items.filter(entry =>
					entry.label.toLowerCase() === filterVal.toLowerCase());
				this.addFilter(item[0], 1);
				break;
			case "Brand":
				item = this.treeDataBrand[0].items.filter(entry =>
					entry.label.toLowerCase() === filterVal.toLowerCase());
				this.addFilter(item[0], 5);
				break;
			case "CreditRange":
				item = this.treeDataCred[0].items.filter(entry =>
					entry.label.toLowerCase() === filterVal.toLowerCase());
				this.addFilter(item[0], 2);
				break;
			case "Designations":
				item = this.treeDataDes[0].items.filter(entry =>
					entry.label.toLowerCase() === filterVal.toLowerCase());
				this.addFilter(item[0], 3);
				break;
		}
	}

	private mangleFilter(filterVal: string): string {
		// Mangle the filterVals from the incoming to the display labels.
		switch (filterVal.toLowerCase()) {
			case "accounting_auditing":
				filterVal = "Accounting & Auditing";
				break;
			case "checkpointlearning":
				filterVal = "Checkpoint Learning";
				break;
			case "gearup":
				filterVal = "Gear Up";
				break;
			case "online_and_mobile_courses":
				filterVal = "Online and Mobile";
				break;
			case "inhouse_training_program":
				filterVal = "In-house Training";
				break;
			case "print_based_courses":
				filterVal = "Print-based";
				break;
			default:
				filterVal = filterVal.replace(/_/g, " ");
		}
		return filterVal;
	}

	private mangleFilterReverse(filterVal: string): string {
		// Mangle the filterVals from the display labels to the original incoming values.
		switch (filterVal.toLowerCase()) {
			case "accounting & auditing":
				filterVal = "accounting_auditing";
				break;
			case "checkpoint learning":
				filterVal = "checkpointlearning";
				break;
			case "gear up":
				filterVal = "gearup";
				break;
			case "online and mobile":
				filterVal = "online_and_mobile_courses";
				break;
			case "in-house training":
				filterVal = "inhouse_training_program";
				break;
			case "print-based":
				filterVal = "print_based_courses";
				break;
			default:
				filterVal = filterVal.replace(/ /g, "_");
		}
		return filterVal;
	}

	private saveState(): void {
		// Put one object per tree in local storage.
		localStorage.clear();
		for (let x = 1; x <= this.treeCount; x++) {
			const treeCook = cj.stringify(this[`tree${x}CheckedItems`]);
			localStorage.setItem(`tree${x}`, treeCook);
		}
	}

	private loadState(): void {
		let syncAfterMatch: boolean = false;
		// Need index and label access to data tree objects.
		const treeArray: string[] = ["treeDataFmt", "treeDataCred", "treeDataDes", "treeDataFos", "treeDataBrand"];
		for (let x = 1; x <= this.treeCount; x++) {
			const tree: string = treeArray[x - 1];
			const treeCook = localStorage.getItem(`tree${x}`);
			if (treeCook !== null) {
				// circular-json doesn't work as well as I'd hoped. Complex properties don't get restored on parse.
				// But it works well enough for this and saves some dev time.
				const ptreeCook = cj.parse(treeCook);
				ptreeCook.forEach(element => {
					console.log("Load Test: " + element.label);
					const item = this[tree][0].items.filter(entry => entry.enumVal === element.enumVal);
					if (typeof(item[0]) !== "undefined") {
						console.log("Enum match: " + item[0].label + " matches " + element.label + " based on enumVal.");
						this.addFilter(item[0], x);
					} else {
						console.log("No match for: " + element.label + " (" + element.enumVal + "). Item no longer exists.");
						syncAfterMatch = true;
						console.log("Non-existent item flagged for removal.");
					}
				});
			}
		}
		if (syncAfterMatch) {
			this.saveState();
			console.log("Non-existent items removed from persistence.");
		}
	}

	private onDateSelect(picker: string): void {
		// picker must be "Start" or "End"
		if (picker !== "Start" && picker !== "End") { return; }
		let intersectTriggered: boolean = false;
		if (typeof(this[`dp${picker}Model`]) === "undefined" || this[`dp${picker}Model`] === null ||
			!this[`dp${picker}Model`].day || this[`dp${picker}Model`].day > 31) {
			return;
		}
		// Clear pre-loaded dataset.
		this[`filteredSearch${picker}`] = [];
		const compDate = new Date(this[`dp${picker}Model`].year, this[`dp${picker}Model`].month, this[`dp${picker}Model`].day);
		// If there is a Session inside this searchResultItem matching this clause,
		// push it onto the array and call the intersection method.
		this.searchData.forEach( item => {
			const it = item.Session.filter(ses => {
				if (picker === "Start") {
					return new Date(ses.StartDateTime) >= compDate;
				} else {
					return new Date(ses.StartDateTime) < compDate;
				}
			});
			if (it.length) {
				this[`filteredSearch${picker}`].push(item);
				intersectTriggered = true;
			}
		});
		if (intersectTriggered) {
			this.doFilterIntersect();
		}
	}

	private resetDateModel(picker: string): void {
		// picker must be "Start" or "End"
		if (picker !== "Start" && picker !== "End") { return; }
		// day: 50 is intentionally invalid so that onDateSelect() won't trigger the filter before day is explicitly selected.
		this[`dp${picker}Model`] = {year: this.currentYear, month: this.currentMonth, day: 50};
		this[`filteredSearch${picker}`] = this.searchData;
		this.doFilterIntersect();
	}

	public checkedItemsExist(): boolean {
		// The template uses this to conditionally display filter-related UI elements.
		let truthy = false;
		if (this.checkedItems.length > 1) {
			truthy = true;
		}
		return truthy;
	}

	private getUrlParam(searchParam: string): string[] {
		const urlFilters = decodeURIComponent(window.location.search.substring(1))
			.split("&")
			.map( m => {
				return m.split("=");
			})
			.filter( filt => {
				return filt[0] === searchParam;
			});
		if (typeof(urlFilters[0]) === "undefined") {
			return ["undefined"];
		}
		// Split return value so that we can handle an array of values from a single param.
		const splitFilters = urlFilters[0][1].split(",");
		return splitFilters;
	}

	private getUrlParams(): void {
		const fos = this.getUrlParam("fos");
		if (fos[0] !== "undefined") {
			fos.forEach(f => this.presetFilter("FoS", f));
		}
		const df = this.getUrlParam("df");
		if (df[0] !== "undefined") {
			df.forEach(d => this.presetFilter("Formats", d));
		}
		const brand = this.getUrlParam("brand");
		if (brand[0] !== "undefined") {
			brand.forEach(b => this.presetFilter("Brand", b));
		}
		const credits = this.getUrlParam("cr");
		if (credits[0] !== "undefined") {
			credits.forEach(c => this.presetFilter("CreditRange", c));
		}
		const desigs = this.getUrlParam("des");
		if (desigs[0] !== "undefined") {
			desigs.forEach(ds => this.presetFilter("Designations", ds));
		}
	}

	public getEmailLink(): string {
		let queryParam = "";
		for (let x = 1; x <= this.treeCount; x++) {
			if (this[`tree${x}CheckedItems`].length > 0) {
				switch (this[`tree${x}CheckedItems`][0].tree) {
					case "Formats":
						queryParam += "df=";
						break;
					case "CreditRange":
						queryParam += "cr=";
						break;
					case "Designations":
						queryParam += "des=";
						break;
					case "FoS":
						queryParam += "fos=";
						break;
					case "Brand":
						queryParam += "brand=";
						break;
				}
				const queryArr: string[] = [];
				this[`tree${x}CheckedItems`].forEach(tci => {
					queryArr.push(this.mangleFilterReverse(tci.label));
				});
				queryParam += queryArr.join(",") + "&";
			}
		}
		queryParam = queryParam.substring(0, queryParam.length - 1);
		const urlHost = window.location.protocol + "//" +  window.location.host + window.location.pathname;
		const emailLink = urlHost + "?" + queryParam;
		// TODO: Send link through bit.ly once hosted in a place where bit.ly will work.
		// Bit.ly requires a URIComponent-encoded Long URL. URI-encoded won't work.
		// emailLink = encodeURIComponent(emailLink);
		return emailLink;
	}

	public modalOpen(content: any): void {
		this._modalService.open(content);
	}

	private getLocationList(): string[] {
		// This is all cities in the dataset. I haven't created a filtered dataset for locations yet.
		let sesLocation: string[] = [];
		this.searchData.forEach(item => {
			item.Session.filter(ses => {
				return typeof(ses.SessionLocation) !== "undefined"; })
				.forEach(sesLoc => {
					sesLoc.SessionLocation.forEach(loc => {
						sesLocation.push(loc.City);
					});
				});
		});
		sesLocation = sesLocation.filter( (thing, pos, self) => self.indexOf(thing) === pos );
		console.log("Location List: " + sesLocation);
		return sesLocation;
	}

	// Yes, it possible to change the properties of items in the checkbox trees during runtime.
	// It also appears to be possible to add new items to the tree. But they won't reload state correctly.
	public doStupid(): void {
		this.treeDataFmt[0].items[0].label = "nonsense label";
		this.treeDataFmt[0].items.push({ label: "Vorvon", tree: "Formats", enumVal: 7 });
	}

	private initData(): void {
		this.filteredSearchData = this.searchData;
		this.filteredSearch1 = this.searchData;
		this.filteredSearch2 = this.searchData;
		this.filteredSearch3 = this.searchData;
		this.filteredSearch4 = this.searchData;
		this.filteredSearch5 = this.searchData;
		this.filteredSearchStart = this.searchData;
		this.filteredSearchEnd = this.searchData;
	}

	ngOnInit(): void {
		// These have to be pre-populated and initially matching so that the intersect method will work.
		this._dataService.getData().subscribe(searchData => {
			this.searchData = searchData;
			this.initData();
		});
		this.locationList = this.getLocationList();
	}

	ngAfterViewInit(): void {
		// Load filter state.
		this.loadState();
		// Load filters from the URL's queryParam component.
		this.getUrlParams();
		// TODO: Place jquery call here.
		$(document).ready(function() {
			console.log("This is from inside the jquery document call");
		});
		// Loading filter state after view init causes late changes, so detect that, and update lifecycle status here.
		this._cDetRef.detectChanges();
	}

	onOptionSelected(value:any):void{
	   this.courseSortOptionSelected=value; 
	   console.log(this.courseSortOptionSelected);
       if(this.courseSortOptionSelected==1){
 			//this.filteredSearchData.sort(this.GetSortOrder("Title"));
	   }else if(this.courseSortOptionSelected==2){
 			//this.filteredSearchData.sort(this.GetSortOrder("Price"));
	   }else if(this.courseSortOptionSelected==3){
 			this.filteredSearchData.sort(this.GetSortOrder("Title","asc"));
	   }else if(this.courseSortOptionSelected==4){
 			this.filteredSearchData.sort(this.GetSortOrder("Price","asc"));
	   }else if(this.courseSortOptionSelected==5){
 			this.filteredSearchData.sort(this.GetSortOrder("Price","desc"));
	   }else if(this.courseSortOptionSelected==6){
 			this.filteredSearchData.sort(this.GetSortOrder("Credits","asc"));
	   }else if(this.courseSortOptionSelected==7){
 			this.filteredSearchData.sort(this.GetSortOrder("Credits","desc"));
	   }
	   
    }

	//Comparer Function  
	GetSortOrder(prop,order):any {
	 
			var positiveReturn:Number=1;
			var negativeReturn:Number=-1;
			if(order=='desc'){
			positiveReturn=-1;
			negativeReturn=1
			} 
			return function(a, b) {  
				if (a[prop] > b[prop]) {  
				  return positiveReturn;  
				} else if (a[prop] < b[prop]) {  
				return negativeReturn;  
				}  
			   return 0;  
			}  
    }  

}
