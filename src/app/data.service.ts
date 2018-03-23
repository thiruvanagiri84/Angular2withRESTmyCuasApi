import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import { BentoTreeItemOption } from "@bento.ui/bento-ng";

import { SearchResultItem } from "./searchitem.model";

@Injectable()
export class DataService {
	searchData: SearchResultItem[] = [
		{
			"Title": "Sample Webinar Title",
			"Desc": "This is a webinar on taxes",
			"Price": 89,
			"Stars": 7,
			"Reviews": 185,
			"Formats": [
				4
			],
			"MediaFormats": [
				8
			],
			"Credits": 2,
			"InBundles": false,
			"Designations": [
				"IRS",
				"CTEC"
			],
			"FoS": [
				1
			],
			"Session": [
				{
					"Id": "123456",
					"StartDateTime": "2018-02-15T14:00:00-06:00",
					"EndDateTime": "2018-02-15T16:00:00-06:00"
				},
				{
					"Id": "564312",
					"StartDateTime": "2018-03-15T13:30:00-06:00",
					"EndDateTime": "2018-03-15T15:30:00-06:00"
				}
			],
			"CourseId": "564381",
			"Version": "1.1",
			"Revision": "N",
			"Acronym": "CFLTX1",
			"Link": "CourseDetails?ID=564381",
			"Published": "2018-01-05",
			"Expires": "2019-12-31",
			"Supplements": [],
			"ButtonStatus": 4,
			"Brand": 1,
			"IsEarlyBird": false
		},
		{
			"Title": "Accounting IV",
			"Desc": "The fourth definitive online accounting course",
			"Price": 25.99,
			"Stars": 9,
			"Reviews": 387,
			"Formats": [
				5
			],
			"MediaFormats": [
				1, 2, 31
			],
			"Credits": 13,
			"InBundles": true,
			"Designations": [],
			"FoS": [
				1
			],
			"Session": [],
			"CourseId": "564396",
			"Version": "2.3",
			"Revision": "N",
			"Acronym": "CFLACCTIV",
			"Link": "CourseDetails?ID=564396",
			"Published": "2018-01-05",
			"Expires": "2019-12-31",
			"Supplements": [],
			"ButtonStatus": 4,
			"Brand": 1,
			"IsEarlyBird": false
		},
		{
			"Title": "Crazy Ethics Seminar",
			"Desc": "This is an example seminar description thing, and these are just extra words I am typing to make the description longer than really necessary.",
			"Price": 249,
			"Stars": 8,
			"Reviews": 237,
			"Formats": [
				2
			],
			"MediaFormats": [
				4
			],
			"Credits": 4,
			"InBundles": false,
			"Designations": [],
			"FoS": [
				8
			],
			"Session": [
				{
					"Id": "123456",
					"StartDateTime": "2018-06-03T00:00:00-06:00",
					"EndDateTime": "2018-06-04T00:00:00-06:00",
					"SessionLocation": [{ "City": "Boise", "State": "Idaho", "ST": "ID", "TimeZone": "-7" }]
				},
				{
					"Id": "564312",
					"StartDateTime": "2018-07-05T00:00:00-06:00",
					"EndDateTime": "2018-07-07T00:00:00-06:00",
					"SessionLocation": [{ "City": "Nampa", "State": "Idaho", "ST": "ID", "TimeZone": "-7" }]
				}
			],
			"CourseId": "16345",
			"Version": "1.0",
			"Revision": "N",
			"Acronym": "CFLTX2",
			"Link": "CourseDetails?ID=16345",
			"Published": "2018-01-05",
			"Expires": "2019-12-31",
			"Supplements": [
				"shortURL"
			],
			"ButtonStatus": 2,
			"Brand": 2,
			"IsEarlyBird": true
		},
		{
			"Title": "Super Duper Conference",
			"Desc": "I laughed. I cried. It was better than Cats.",
			"Price": 599,
			"Stars": 10,
			"Reviews": 78,
			"Formats": [
				2
			],
			"MediaFormats": [
				7
			],
			"Credits": 16,
			"InBundles": false,
			"Designations": [],
			"FoS": [
				8
			],
			"Session": [
				{
					"Id": "72753",
					"StartDateTime": "2018-09-13T00:00:00-06:00",
					"EndDateTime": "2018-09-15T00:00:00-06:00",
					"SessionLocation": [{ "City": "Orlando", "State": "Florida", "ST": "FL", "TimeZone": "-5" }]
				},
				{
					"Id": "96347",
					"StartDateTime": "2018-08-22T00:00:00-06:00",
					"EndDateTime": "2018-08-24T00:00:00-06:00",
					"SessionLocation": [{ "City": "Las Vegas", "State": "Nevada", "ST": "NV", "TimeZone": "-8" }]
				}
			],
			"CourseId": "933768",
			"Version": "3.1",
			"Revision": "N",
			"Acronym": "CFLTX3",
			"Link": "CourseDetails?ID=933768",
			"Published": "2018-01-05",
			"Expires": "2019-12-31",
			"Supplements": [
				"shortURL"
			],
			"ButtonStatus": 2,
			"Brand": 2,
			"IsEarlyBird": true
		}
	];

	constructor() { }

	public getData(): Observable<SearchResultItem[]> {
		return Observable.of(this.searchData);
	}

	public getTreeDataFmt(): any[] {
		const treeDataFmt: any[] = [{
			label: "Formats",
			$bentoTreeItemOption: {
				hideCheckbox: true
			} as BentoTreeItemOption,
			items: [
				{ label: "Online and Mobile", tree: "Formats", enumVal: 5 },
				{ label: "Webinars", tree: "Formats", enumVal: 4 },
				{ label: "Seminars and Conferences", tree: "Formats", enumVal: 2 },
				{ label: "Print-based", tree: "Formats", enumVal: 6 },
				{ label: "In-house Training", tree: "Formats", enumVal: 1 }
			]
		}];
		return treeDataFmt;
	}

	public getTreeDataCred(): any[] {
		const treeDataCred: any[] = [{
			label: "Credits",
			$bentoTreeItemOption: {
				hideCheckbox: true,
				collapsed: true
			} as BentoTreeItemOption,
			items: [
				{ label: "0-3 credits", tree: "CreditRange", enumVal: 1 },
				{ label: "3-6 credits", tree: "CreditRange", enumVal: 2 },
				{ label: "6-12 credits", tree: "CreditRange", enumVal: 3 },
				{ label: "12+ credits", tree: "CreditRange", enumVal: 4 }
			]
		}];
		return treeDataCred;
	}

	public getTreeDataDes(): any[] {
		const treeDataDes: any[] = [{
			label: "Designations",
			$bentoTreeItemOption: {
				hideCheckbox: true,
				collapsed: true
			} as BentoTreeItemOption,
			items: [
				{ label: "CFP", tree: "Designations", enumVal: "CFP" },
				{ label: "IRS", tree: "Designations", enumVal: "IRS" },
				{ label: "CTEC", tree: "Designations", enumVal: "CTEC" }
			]
		}];
		return treeDataDes;
	}

	public getTreeDataFos(): any[] {
		const treeDataFos: any[] = [{
			label: "Topics",
			$bentoTreeItemOption: {
				hideCheckbox: true,
				collapsed: true
			} as BentoTreeItemOption,
			items: [
				{ label: "Accounting & Auditing", tree: "FoS", enumVal: 1 },
				{ label: "Consulting Services", tree: "FoS", enumVal: 2 },
				{ label: "Ethics", tree: "FoS", enumVal: 8 },
				{ label: "Management", tree: "FoS", enumVal: 4 },
				{ label: "Personal Development", tree: "FoS", enumVal: 5 },
				{ label: "Specialized Knowledge", tree: "FoS", enumVal: 6 },
				{ label: "Taxation", tree: "FoS", enumVal: 7 },
				{ label: "Yellowbook", tree: "FoS", enumVal: 9 }
			]
		}];
		return treeDataFos;
	}

	public getTreeDataBrand(): any[] {
		const treeDataBrand: any[] = [{
			label: "Brands",
			$bentoTreeItemOption: {
				hideCheckbox: true,
				collapsed: true
			} as BentoTreeItemOption,
			items: [
				{ label: "Checkpoint Learning", tree: "Brand", enumVal: 1 },
				{ label: "Gear Up", tree: "Brand", enumVal: 2 },
				{ label: "AuditWatch", tree: "Brand", enumVal: 3 },
				{ label: "EBIA", tree: "Brand", enumVal: 4 }
			]
		}];
		return treeDataBrand;
	}

}
