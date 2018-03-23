webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* This is being used to override a Bento style transform */\r\n.text-none {\r\n\ttext-transform: none !important; \r\n}\r\n\r\n/* I think this is a workaround for the buttons getting styled strangely */\r\n.btn.btn-sm {\r\n\tfont-family: Arial, \"Helvetica Neue\", sans-serif;\r\n\tpadding: 5px;\r\n\tline-height: 0rem;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div id=\"activeFilters\" class=\"card\">\n\t\t<div class=\"card-body\">\n\t\t\t<span class=\"h4\">Active Filters: </span>\n\t\t\t<button *ngFor=\"let item of checkedItems\"\n\t\t\t\t\tclass=\"btn btn-outline-primary btn-sm text-none\"\n\t\t\t\t\t(click)=\"removeFilter(item);\">\n\t\t\t\t<i class=\"small bento-icon-close-x\"></i> {{ item.label }}\n\t\t\t</button>\n\t\t\t<span *ngIf=\"checkedItemsExist()\">\n\t\t\t\t<a href=\"#\" (click)=\"clearFilters()\"> clear all</a>\n\t\t\t</span>\n\t\t\t<span *ngIf=\"checkedItemsExist()\" style=\"float: right;\">\n\t\t\t\t<button class=\"btn btn-primary btn-sm\" (click)=\"modalOpen(copyLink)\">Get Email Link</button>\n\t\t\t\t<button (click)=\"doStupid()\">Do Stupid</button>\n\t\t\t</span>\n\t\t</div>\n\t</div>\n\t<div style=\"float: right; width: 20%;\">\n\t  \n       <select bentoSelect name=\"mySelect\" class=\"form-control\" \n\t           [(ngModel)]=\"courseSortOptionSelected\" (ngModelChange)=\"onOptionSelected($event)\">\n    \t\t<option class='option' *ngFor='let option of courseSortOptions' [ngValue]='option.id'>{{option.value}}</option>\n        </select>\t\n\n    </div>\n\t<div style=\"float: left; width: 20%; min-width: 230px;\">\n\t\t<div>\n\t\t\t<span class=\"h2\">Search Filters</span>\n\t\t\t<span *ngIf=\"checkedItemsExist()\">\n\t\t\t\t<a href=\"#\" (click)=\"clearFilters()\" style=\"padding-left: 25px; vertical-align: baseline;\"> clear all</a>\n\t\t\t</span>\n\t\t</div>\n\t\t<bento-tree\n\t\t\tid=\"Formats\"\n\t\t\t[items]=\"treeDataFmt\"\n\t\t\t[itemIconProp]=\"'icon'\"\n\t\t\t[itemChildrenProp]=\"'items'\"\n\t\t\t[itemLabelProp]=\"'label'\"\n\t\t\t[multiSelect]=\"false\"\n\t\t\t[selectAsCheck]=\"true\"\n\t\t\t[showExpandCollapseAllButtons]=\"false\"\n\t\t\t(itemCheck)=\"onItemCheck($event,1)\">\n\t\t</bento-tree>\n\t\t<bento-tree\n\t\t\tid=\"CreditRange\"\n\t\t\t[items]=\"treeDataCred\"\n\t\t\t[itemIconProp]=\"'icon'\"\n\t\t\t[itemChildrenProp]=\"'items'\"\n\t\t\t[itemLabelProp]=\"'label'\"\n\t\t\t[multiSelect]=\"false\"\n\t\t\t[selectAsCheck]=\"true\"\n\t\t\t[showExpandCollapseAllButtons]=\"false\"\n\t\t\t(itemCheck)=\"onItemCheck($event,2)\">\n\t\t</bento-tree>\n\t\t<bento-tree\n\t\t\tid=\"Designations\"\n\t\t\t[items]=\"treeDataDes\"\n\t\t\t[itemIconProp]=\"'icon'\"\n\t\t\t[itemChildrenProp]=\"'items'\"\n\t\t\t[itemLabelProp]=\"'label'\"\n\t\t\t[multiSelect]=\"false\"\n\t\t\t[selectAsCheck]=\"true\"\n\t\t\t[showExpandCollapseAllButtons]=\"false\"\n\t\t\t(itemCheck)=\"onItemCheck($event,3)\">\n\t\t</bento-tree>\n\t\t<bento-tree\n\t\t\tid=\"FoS\"\n\t\t\t[items]=\"treeDataFos\"\n\t\t\t[itemIconProp]=\"'icon'\"\n\t\t\t[itemChildrenProp]=\"'items'\"\n\t\t\t[itemLabelProp]=\"'label'\"\n\t\t\t[multiSelect]=\"false\"\n\t\t\t[selectAsCheck]=\"true\"\n\t\t\t[showExpandCollapseAllButtons]=\"false\"\n\t\t\t(itemCheck)=\"onItemCheck($event,4)\">\n\t\t</bento-tree>\n\t\t<bento-tree\n\t\t\tid=\"Brand\"\n\t\t\t[items]=\"treeDataBrand\"\n\t\t\t[itemIconProp]=\"'icon'\"\n\t\t\t[itemChildrenProp]=\"'items'\"\n\t\t\t[itemLabelProp]=\"'label'\"\n\t\t\t[multiSelect]=\"false\"\n\t\t\t[selectAsCheck]=\"true\"\n\t\t\t[showExpandCollapseAllButtons]=\"false\"\n\t\t\t(itemCheck)=\"onItemCheck($event,5)\">\n\t\t</bento-tree>\n\n\t\t<div><hr align=\"left\" width=\"80%\"></div>\n\t\t<div>\n\t\t\t<div>\n\t\t\t\t<b>Start Date</b> <a href=\"#dStart\" (click)=\"dStart.navigateTo({year: currentYear, month: currentMonth}); resetDateModel('Start');\"> (reset)</a><br>\n\t\t\t\t<ngb-datepicker name=\"dStart\" [(ngModel)]=\"dpStartModel\" #dStart (click)=\"onDateSelect('Start')\"></ngb-datepicker>\n\t\t\t</div>\n\t\t\t<div><br></div>\n\t\t\t<div>\n\t\t\t\t<b>End Date</b> <a href=\"#dEnd\" (click)=\"dEnd.navigateTo({year: currentYear, month: currentMonth}); resetDateModel('End');\"> (reset)</a><br>\n\t\t\t\t<ngb-datepicker name=\"dEnd\" [(ngModel)]=\"dpEndModel\" #dEnd (click)=\"onDateSelect('End')\"></ngb-datepicker>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div style=\"float: left; width: 80%;\">\n\t\t<h2>Search Results</h2>\n\t\t<div *ngFor=\"let entry of filteredSearchData\">\n\t\t\t<hr>\n\t\t\t<b>Title:</b> {{ entry.Title }}<br/>\n\t\t\t<b>Description:</b> {{ entry.Desc }}<br/>\n\t\t\t<b>FoS:</b> {{ FoS[entry.FoS] }}<br/>\n\t\t\t<b>Format:</b> {{ Formats[entry.Formats] }}<br/>\n\t\t\t<b>Credits:</b> {{ entry.Credits }}<br/>\n\t\t\t<b>Brand:</b> {{ Brand[entry.Brand] }}\n\t\t</div>\n\t</div>\n</div>\n\n<!-- Email Link Modal -->\n<ng-template #copyLink let-c=\"close\" let-d=\"dismiss\">\n\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t<i class=\"bento-icon-close-x\" aria-hidden=\"true\"></i>\n\t</button>\n\t<div class=\"modal-header\">\n\t\tEmail Link\n\t</div>\n<textarea #linkText id=\"linkText\" name=\"linkText\" columns=\"60\" rows=\"4\">\n{{ getEmailLink() }}\n</textarea>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-primary\" [ngxClipboard]=\"linkText\" (click)=\"c('Copy and Close');\">Copy &amp; Dismiss</button>\n\t</div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_circular_json__ = __webpack_require__("../../../../circular-json/build/circular-json.node.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_circular_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_circular_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__searchitem_model__ = __webpack_require__("../../../../../src/app/searchitem.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = (function () {
    function AppComponent(_dataService, _cDetRef, _modalService) {
        this._dataService = _dataService;
        this._cDetRef = _cDetRef;
        this._modalService = _modalService;
        this.searchData = [];
        this.filteredSearchStart = [];
        this.checkedItems = [];
        this.tree1CheckedItems = [];
        this.tree2CheckedItems = [];
        this.tree3CheckedItems = [];
        this.tree4CheckedItems = [];
        this.tree5CheckedItems = [];
        this.treeCount = 5;
        this.currentYear = new Date().getFullYear();
        this.currentMonth = new Date().getMonth() + 1;
        this.locationList = [];
        // Make enums public so template can use them.
        this.Formats = __WEBPACK_IMPORTED_MODULE_6__searchitem_model__["c" /* Formats */];
        this.FoS = __WEBPACK_IMPORTED_MODULE_6__searchitem_model__["b" /* FoS */];
        this.Brand = __WEBPACK_IMPORTED_MODULE_6__searchitem_model__["a" /* Brand */];
        // This is the data to populate the filter trees in the template.
        this.treeDataFmt = this._dataService.getTreeDataFmt();
        this.treeDataCred = this._dataService.getTreeDataCred();
        this.treeDataDes = this._dataService.getTreeDataDes();
        this.treeDataFos = this._dataService.getTreeDataFos();
        this.treeDataBrand = this._dataService.getTreeDataBrand();
        //This is the data to populate for course sort options and the default option is Relevance.
        this.courseSortOptions = [
            { "id": 0, "value": "Relevance" },
            { "id": 1, "value": "Newest to Oldest" },
            { "id": 2, "value": "Oldest to Newest" },
            { "id": 3, "value": "Topic(A - Z)" },
            { "id": 4, "value": "Price - Lowest to Highest" },
            { "id": 5, "value": "Price - Highest to Lowest" },
            { "id": 6, "value": "Credits - Least to Most" },
            { "id": 7, "value": "Credits - Most to Least" }
        ];
        this.courseSortOptionSelected = 0;
    }
    AppComponent.prototype.onItemCheck = function (event, treeIndex) {
        var names = [];
        event.items.forEach(function (item) {
            names.push(item);
        });
        this["tree" + treeIndex + "CheckedItems"] = names;
        this.doFilterTree(treeIndex);
        this.aggregateCheckedItems(this.treeCount);
        this.saveState();
    };
    AppComponent.prototype.aggregateCheckedItems = function (trees) {
        // Put all of the checked filters into one array so that the filter tags display when active.
        // TODO: This is probably going to need a sort. They are currently displayed -- more or less -- in the order activated, by tree.
        this.checkedItems = [];
        for (var x = 1; x <= trees; x++) {
            if (this["tree" + x + "CheckedItems"].length > 0) {
                this.checkedItems = this.checkedItems.concat(this["tree" + x + "CheckedItems"]);
            }
        }
    };
    AppComponent.prototype.doFilter = function (filterBy, tree) {
        if (tree === "CreditRange") {
            // CreditRange matches on calculated range.
            return this.doCredFilter(Number(filterBy));
        }
        else {
            return this.searchData.filter(function (searchItem) {
                if (typeof (searchItem[tree]) === "object") {
                    // Object match
                    return searchItem[tree].indexOf(filterBy) !== -1;
                }
                else {
                    // String match (brand)
                    return (searchItem[tree] === filterBy ? searchItem[tree] : null);
                }
            });
        }
    };
    AppComponent.prototype.doFilterTree = function (treeIndex) {
        var _this = this;
        // If filters in this tree index are checked, activate them and de-dupe the item list.
        // Otherwise, remove all filters from indicated tree.
        var aggArr = [];
        if (this["tree" + treeIndex + "CheckedItems"].length > 0) {
            this["tree" + treeIndex + "CheckedItems"].forEach(function (filter) {
                var temp = _this.doFilter(filter.enumVal, filter.tree);
                aggArr = aggArr.concat(temp);
            });
            // De-dupe.
            this["filteredSearch" + treeIndex] = aggArr.filter(function (item, pos, self) { return self.indexOf(item) === pos; });
        }
        else {
            // No checked items -- Remove filters from indicated filter tree.
            this["filteredSearch" + treeIndex] = this.searchData;
        }
        this.doFilterIntersect();
    };
    AppComponent.prototype.doFilterIntersect = function () {
        // This method reduces filterdSearchData to the intersection of all the filtered datasets.
        this.filteredSearchData = [];
        this.filteredSearchData =
            __WEBPACK_IMPORTED_MODULE_2_underscore__["intersection"](this.filteredSearch1, this.filteredSearch2, this.filteredSearch3, this.filteredSearch4, this.filteredSearch5, this.filteredSearchStart, this.filteredSearchEnd);
    };
    AppComponent.prototype.doCredFilter = function (enumVal) {
        // This is currently the way credit hours are allocated to ranges.
        var gt, lt;
        switch (enumVal) {
            case 1:
                gt = 0;
                lt = 3;
                break;
            case 2:
                gt = 3;
                lt = 6;
                break;
            case 3:
                gt = 6;
                lt = 12;
                break;
            case 4:
                gt = 12;
                lt = 100;
                break;
            default:
                gt = 0;
                lt = 0;
        }
        return this.searchData.filter(function (searchItem) {
            return searchItem.Credits >= gt && searchItem.Credits < lt;
        });
    };
    AppComponent.prototype.clearFilters = function () {
        // Clear all filters (including query params). Clear local storage. Display full dataset.
        for (var x = 1; x <= this.treeCount; x++) {
            this["tree" + x + "CheckedItems"].forEach(function (item) {
                item.$bentoTreeItemOption.setChecked(false, item.tree);
            });
            this["tree" + x + "CheckedItems"] = [];
        }
        this.checkedItems = [];
        this.initData();
        localStorage.clear();
    };
    AppComponent.prototype.removeFilter = function (item) {
        // Used by template to remove filter via filter tag bar.
        item.$bentoTreeItemOption.setChecked(false, item.tree);
        this.checkedItems.splice(this.checkedItems.indexOf(item), 1);
        for (var x = 1; x <= this.treeCount; x++) {
            if (this["tree" + x + "CheckedItems"].indexOf(item) !== -1) {
                this["tree" + x + "CheckedItems"].splice(this["tree" + x + "CheckedItems"].indexOf(item), 1);
                this.doFilterTree(x);
            }
        }
        this.saveState();
    };
    AppComponent.prototype.addFilter = function (item, treeIndex) {
        // Used by presetFilter() and loadState() to set/restore filters.
        // Guard. Dynamically generated item def may no longer exist in current context.
        if (typeof (item) === "undefined") {
            return;
        }
        item.$bentoTreeItemOption.setChecked(true, item.tree);
        this.checkedItems.push(item);
        // De-dupe filter tags.
        this.checkedItems = this.checkedItems.filter(function (thingfish, pos, self) { return self.indexOf(thingfish) === pos; });
        this["tree" + treeIndex + "CheckedItems"].push(item);
        // De-dupe specified checked item tree.
        this["tree" + treeIndex + "CheckedItems"] = this["tree" + treeIndex + "CheckedItems"].filter(function (thing, pos, self) { return self.indexOf(thing) === pos; });
        this.doFilterTree(treeIndex);
    };
    AppComponent.prototype.presetFilter = function (filterName, filterVal) {
        var item;
        // The incoming parameters don't match the labels, so mangle to fit here.
        filterVal = this.mangleFilter(filterVal);
        // Add filter(s) for defined query parameters.
        switch (filterName) {
            case "FoS":
                item = this.treeDataFos[0].items.filter(function (entry) {
                    return entry.label.toLowerCase() === filterVal.toLowerCase();
                });
                this.addFilter(item[0], 4);
                break;
            case "Formats":
                item = this.treeDataFmt[0].items.filter(function (entry) {
                    return entry.label.toLowerCase() === filterVal.toLowerCase();
                });
                this.addFilter(item[0], 1);
                break;
            case "Brand":
                item = this.treeDataBrand[0].items.filter(function (entry) {
                    return entry.label.toLowerCase() === filterVal.toLowerCase();
                });
                this.addFilter(item[0], 5);
                break;
            case "CreditRange":
                item = this.treeDataCred[0].items.filter(function (entry) {
                    return entry.label.toLowerCase() === filterVal.toLowerCase();
                });
                this.addFilter(item[0], 2);
                break;
            case "Designations":
                item = this.treeDataDes[0].items.filter(function (entry) {
                    return entry.label.toLowerCase() === filterVal.toLowerCase();
                });
                this.addFilter(item[0], 3);
                break;
        }
    };
    AppComponent.prototype.mangleFilter = function (filterVal) {
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
    };
    AppComponent.prototype.mangleFilterReverse = function (filterVal) {
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
    };
    AppComponent.prototype.saveState = function () {
        // Put one object per tree in local storage.
        localStorage.clear();
        for (var x = 1; x <= this.treeCount; x++) {
            var treeCook = __WEBPACK_IMPORTED_MODULE_3_circular_json__["stringify"](this["tree" + x + "CheckedItems"]);
            localStorage.setItem("tree" + x, treeCook);
        }
    };
    AppComponent.prototype.loadState = function () {
        var _this = this;
        var syncAfterMatch = false;
        // Need index and label access to data tree objects.
        var treeArray = ["treeDataFmt", "treeDataCred", "treeDataDes", "treeDataFos", "treeDataBrand"];
        var _loop_1 = function (x) {
            var tree = treeArray[x - 1];
            var treeCook = localStorage.getItem("tree" + x);
            if (treeCook !== null) {
                // circular-json doesn't work as well as I'd hoped. Complex properties don't get restored on parse.
                // But it works well enough for this and saves some dev time.
                var ptreeCook = __WEBPACK_IMPORTED_MODULE_3_circular_json__["parse"](treeCook);
                ptreeCook.forEach(function (element) {
                    console.log("Load Test: " + element.label);
                    var item = _this[tree][0].items.filter(function (entry) { return entry.enumVal === element.enumVal; });
                    if (typeof (item[0]) !== "undefined") {
                        console.log("Enum match: " + item[0].label + " matches " + element.label + " based on enumVal.");
                        _this.addFilter(item[0], x);
                    }
                    else {
                        console.log("No match for: " + element.label + " (" + element.enumVal + "). Item no longer exists.");
                        syncAfterMatch = true;
                        console.log("Non-existent item flagged for removal.");
                    }
                });
            }
        };
        for (var x = 1; x <= this.treeCount; x++) {
            _loop_1(x);
        }
        if (syncAfterMatch) {
            this.saveState();
            console.log("Non-existent items removed from persistence.");
        }
    };
    AppComponent.prototype.onDateSelect = function (picker) {
        var _this = this;
        // picker must be "Start" or "End"
        if (picker !== "Start" && picker !== "End") {
            return;
        }
        var intersectTriggered = false;
        if (typeof (this["dp" + picker + "Model"]) === "undefined" || this["dp" + picker + "Model"] === null ||
            !this["dp" + picker + "Model"].day || this["dp" + picker + "Model"].day > 31) {
            return;
        }
        // Clear pre-loaded dataset.
        this["filteredSearch" + picker] = [];
        var compDate = new Date(this["dp" + picker + "Model"].year, this["dp" + picker + "Model"].month, this["dp" + picker + "Model"].day);
        // If there is a Session inside this searchResultItem matching this clause,
        // push it onto the array and call the intersection method.
        this.searchData.forEach(function (item) {
            var it = item.Session.filter(function (ses) {
                if (picker === "Start") {
                    return new Date(ses.StartDateTime) >= compDate;
                }
                else {
                    return new Date(ses.StartDateTime) < compDate;
                }
            });
            if (it.length) {
                _this["filteredSearch" + picker].push(item);
                intersectTriggered = true;
            }
        });
        if (intersectTriggered) {
            this.doFilterIntersect();
        }
    };
    AppComponent.prototype.resetDateModel = function (picker) {
        // picker must be "Start" or "End"
        if (picker !== "Start" && picker !== "End") {
            return;
        }
        // day: 50 is intentionally invalid so that onDateSelect() won't trigger the filter before day is explicitly selected.
        this["dp" + picker + "Model"] = { year: this.currentYear, month: this.currentMonth, day: 50 };
        this["filteredSearch" + picker] = this.searchData;
        this.doFilterIntersect();
    };
    AppComponent.prototype.checkedItemsExist = function () {
        // The template uses this to conditionally display filter-related UI elements.
        var truthy = false;
        if (this.checkedItems.length > 1) {
            truthy = true;
        }
        return truthy;
    };
    AppComponent.prototype.getUrlParam = function (searchParam) {
        var urlFilters = decodeURIComponent(window.location.search.substring(1))
            .split("&")
            .map(function (m) {
            return m.split("=");
        })
            .filter(function (filt) {
            return filt[0] === searchParam;
        });
        if (typeof (urlFilters[0]) === "undefined") {
            return ["undefined"];
        }
        // Split return value so that we can handle an array of values from a single param.
        var splitFilters = urlFilters[0][1].split(",");
        return splitFilters;
    };
    AppComponent.prototype.getUrlParams = function () {
        var _this = this;
        var fos = this.getUrlParam("fos");
        if (fos[0] !== "undefined") {
            fos.forEach(function (f) { return _this.presetFilter("FoS", f); });
        }
        var df = this.getUrlParam("df");
        if (df[0] !== "undefined") {
            df.forEach(function (d) { return _this.presetFilter("Formats", d); });
        }
        var brand = this.getUrlParam("brand");
        if (brand[0] !== "undefined") {
            brand.forEach(function (b) { return _this.presetFilter("Brand", b); });
        }
        var credits = this.getUrlParam("cr");
        if (credits[0] !== "undefined") {
            credits.forEach(function (c) { return _this.presetFilter("CreditRange", c); });
        }
        var desigs = this.getUrlParam("des");
        if (desigs[0] !== "undefined") {
            desigs.forEach(function (ds) { return _this.presetFilter("Designations", ds); });
        }
    };
    AppComponent.prototype.getEmailLink = function () {
        var _this = this;
        var queryParam = "";
        var _loop_2 = function (x) {
            if (this_1["tree" + x + "CheckedItems"].length > 0) {
                switch (this_1["tree" + x + "CheckedItems"][0].tree) {
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
                var queryArr_1 = [];
                this_1["tree" + x + "CheckedItems"].forEach(function (tci) {
                    queryArr_1.push(_this.mangleFilterReverse(tci.label));
                });
                queryParam += queryArr_1.join(",") + "&";
            }
        };
        var this_1 = this;
        for (var x = 1; x <= this.treeCount; x++) {
            _loop_2(x);
        }
        queryParam = queryParam.substring(0, queryParam.length - 1);
        var urlHost = window.location.protocol + "//" + window.location.host + window.location.pathname;
        var emailLink = urlHost + "?" + queryParam;
        // TODO: Send link through bit.ly once hosted in a place where bit.ly will work.
        // Bit.ly requires a URIComponent-encoded Long URL. URI-encoded won't work.
        // emailLink = encodeURIComponent(emailLink);
        return emailLink;
    };
    AppComponent.prototype.modalOpen = function (content) {
        this._modalService.open(content);
    };
    AppComponent.prototype.getLocationList = function () {
        // This is all cities in the dataset. I haven't created a filtered dataset for locations yet.
        var sesLocation = [];
        this.searchData.forEach(function (item) {
            item.Session.filter(function (ses) {
                return typeof (ses.SessionLocation) !== "undefined";
            })
                .forEach(function (sesLoc) {
                sesLoc.SessionLocation.forEach(function (loc) {
                    sesLocation.push(loc.City);
                });
            });
        });
        sesLocation = sesLocation.filter(function (thing, pos, self) { return self.indexOf(thing) === pos; });
        console.log("Location List: " + sesLocation);
        return sesLocation;
    };
    // Yes, it possible to change the properties of items in the checkbox trees during runtime.
    // It also appears to be possible to add new items to the tree. But they won't reload state correctly.
    AppComponent.prototype.doStupid = function () {
        this.treeDataFmt[0].items[0].label = "nonsense label";
        this.treeDataFmt[0].items.push({ label: "Vorvon", tree: "Formats", enumVal: 7 });
    };
    AppComponent.prototype.initData = function () {
        this.filteredSearchData = this.searchData;
        this.filteredSearch1 = this.searchData;
        this.filteredSearch2 = this.searchData;
        this.filteredSearch3 = this.searchData;
        this.filteredSearch4 = this.searchData;
        this.filteredSearch5 = this.searchData;
        this.filteredSearchStart = this.searchData;
        this.filteredSearchEnd = this.searchData;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // These have to be pre-populated and initially matching so that the intersect method will work.
        this._dataService.getData().subscribe(function (searchData) {
            _this.searchData = searchData;
            _this.initData();
        });
        this.locationList = this.getLocationList();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        // Load filter state.
        this.loadState();
        // Load filters from the URL's queryParam component.
        this.getUrlParams();
        // TODO: Place jquery call here.
        __WEBPACK_IMPORTED_MODULE_4_jquery__(document).ready(function () {
            console.log("This is from inside the jquery document call");
        });
        // Loading filter state after view init causes late changes, so detect that, and update lifecycle status here.
        this._cDetRef.detectChanges();
    };
    AppComponent.prototype.onOptionSelected = function (value) {
        this.courseSortOptionSelected = value;
        console.log(this.courseSortOptionSelected);
        if (this.courseSortOptionSelected == 1) {
            //this.filteredSearchData.sort(this.GetSortOrder("Title"));
        }
        else if (this.courseSortOptionSelected == 2) {
            //this.filteredSearchData.sort(this.GetSortOrder("Price"));
        }
        else if (this.courseSortOptionSelected == 3) {
            this.filteredSearchData.sort(this.GetSortOrder("Title", "asc"));
        }
        else if (this.courseSortOptionSelected == 4) {
            this.filteredSearchData.sort(this.GetSortOrder("Price", "asc"));
        }
        else if (this.courseSortOptionSelected == 5) {
            this.filteredSearchData.sort(this.GetSortOrder("Price", "desc"));
        }
        else if (this.courseSortOptionSelected == 6) {
            this.filteredSearchData.sort(this.GetSortOrder("Credits", "asc"));
        }
        else if (this.courseSortOptionSelected == 7) {
            this.filteredSearchData.sort(this.GetSortOrder("Credits", "desc"));
        }
    };
    //Comparer Function  
    AppComponent.prototype.GetSortOrder = function (prop, order) {
        var positiveReturn = 1;
        var negativeReturn = -1;
        if (order == 'desc') {
            positiveReturn = -1;
            negativeReturn = 1;
        }
        return function (a, b) {
            if (a[prop] > b[prop]) {
                return positiveReturn;
            }
            else if (a[prop] < b[prop]) {
                return negativeReturn;
            }
            return 0;
        };
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-root",
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["NgbModal"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bento_ui_bento_ng__ = __webpack_require__("../../../../@bento.ui/bento-ng/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bento_ui_bento_ng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__bento_ui_bento_ng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_clipboard__ = __webpack_require__("../../../../ngx-clipboard/dist/ngx-clipboard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__bento_ui_bento_ng__["BentoModule"],
                __WEBPACK_IMPORTED_MODULE_5_ngx_clipboard__["a" /* ClipboardModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["NgbModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService() {
        this.searchData = [
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
    }
    DataService.prototype.getData = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.searchData);
    };
    DataService.prototype.getTreeDataFmt = function () {
        var treeDataFmt = [{
                label: "Formats",
                $bentoTreeItemOption: {
                    hideCheckbox: true
                },
                items: [
                    { label: "Online and Mobile", tree: "Formats", enumVal: 5 },
                    { label: "Webinars", tree: "Formats", enumVal: 4 },
                    { label: "Seminars and Conferences", tree: "Formats", enumVal: 2 },
                    { label: "Print-based", tree: "Formats", enumVal: 6 },
                    { label: "In-house Training", tree: "Formats", enumVal: 1 }
                ]
            }];
        return treeDataFmt;
    };
    DataService.prototype.getTreeDataCred = function () {
        var treeDataCred = [{
                label: "Credits",
                $bentoTreeItemOption: {
                    hideCheckbox: true,
                    collapsed: true
                },
                items: [
                    { label: "0-3 credits", tree: "CreditRange", enumVal: 1 },
                    { label: "3-6 credits", tree: "CreditRange", enumVal: 2 },
                    { label: "6-12 credits", tree: "CreditRange", enumVal: 3 },
                    { label: "12+ credits", tree: "CreditRange", enumVal: 4 }
                ]
            }];
        return treeDataCred;
    };
    DataService.prototype.getTreeDataDes = function () {
        var treeDataDes = [{
                label: "Designations",
                $bentoTreeItemOption: {
                    hideCheckbox: true,
                    collapsed: true
                },
                items: [
                    { label: "CFP", tree: "Designations", enumVal: "CFP" },
                    { label: "IRS", tree: "Designations", enumVal: "IRS" },
                    { label: "CTEC", tree: "Designations", enumVal: "CTEC" }
                ]
            }];
        return treeDataDes;
    };
    DataService.prototype.getTreeDataFos = function () {
        var treeDataFos = [{
                label: "Topics",
                $bentoTreeItemOption: {
                    hideCheckbox: true,
                    collapsed: true
                },
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
    };
    DataService.prototype.getTreeDataBrand = function () {
        var treeDataBrand = [{
                label: "Brands",
                $bentoTreeItemOption: {
                    hideCheckbox: true,
                    collapsed: true
                },
                items: [
                    { label: "Checkpoint Learning", tree: "Brand", enumVal: 1 },
                    { label: "Gear Up", tree: "Brand", enumVal: 2 },
                    { label: "AuditWatch", tree: "Brand", enumVal: 3 },
                    { label: "EBIA", tree: "Brand", enumVal: 4 }
                ]
            }];
        return treeDataBrand;
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/searchitem.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SearchResultItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Formats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FoS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Brand; });
var SearchResultItem = (function () {
    function SearchResultItem() {
    }
    return SearchResultItem;
}());

var Session = (function () {
    function Session() {
    }
    return Session;
}());
var SessionLocation = (function () {
    function SessionLocation() {
    }
    return SessionLocation;
}());
var Formats;
(function (Formats) {
    Formats[Formats["In-house Training"] = 1] = "In-house Training";
    Formats[Formats["Seminars and Conferences"] = 2] = "Seminars and Conferences";
    Formats[Formats["Webinars"] = 4] = "Webinars";
    Formats[Formats["Online and Mobile"] = 5] = "Online and Mobile";
    Formats[Formats["Print-based"] = 6] = "Print-based"; // media formats: 5, 10, 11, 12, 13, 14, 15, 16, 17, 20, 21, 22
})(Formats || (Formats = {}));
var FoS;
(function (FoS) {
    FoS[FoS["Accounting & Auditing"] = 1] = "Accounting & Auditing";
    FoS[FoS["Consulting Services"] = 2] = "Consulting Services";
    FoS[FoS["Technology"] = 3] = "Technology";
    FoS[FoS["Management"] = 4] = "Management";
    FoS[FoS["Personal Development"] = 5] = "Personal Development";
    FoS[FoS["Specialized Knowledge & Applications"] = 6] = "Specialized Knowledge & Applications";
    FoS[FoS["Taxation"] = 7] = "Taxation";
    FoS[FoS["Ethics"] = 8] = "Ethics";
    FoS[FoS["Yellowbook"] = 9] = "Yellowbook";
})(FoS || (FoS = {}));
var Brand;
(function (Brand) {
    Brand[Brand["Checkpoint Learning"] = 1] = "Checkpoint Learning";
    Brand[Brand["Gear Up"] = 2] = "Gear Up";
    Brand[Brand["AuditWatch"] = 3] = "AuditWatch";
    Brand[Brand["EBIA"] = 4] = "EBIA";
})(Brand || (Brand = {}));
// Need clarification on this.
// In its current state, this does not appear to be implementable.
// export enum ButtonStatus {
// 	"Launch" = 1,
// 	"Register" = 2,
// 	"Registered" = 3,
// 	"Add to Cart" = 4,
// 	"Sold Out" = 5,
// 	"Wait List" = 6,
// 	"Wait Listed" = 7
// }


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map