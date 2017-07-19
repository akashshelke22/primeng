webpackJsonp([71],{

/***/ "./src/app/components/codehighlighter/codehighlighter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* unused harmony export CodeHighlighter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeHighlighterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CodeHighlighter = (function () {
    function CodeHighlighter(el) {
        this.el = el;
    }
    CodeHighlighter.prototype.ngOnInit = function () {
        Prism.highlightElement(this.el.nativeElement);
    };
    return CodeHighlighter;
}());
CodeHighlighter = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[pCode]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _a || Object])
], CodeHighlighter);

var CodeHighlighterModule = (function () {
    function CodeHighlighterModule() {
    }
    return CodeHighlighterModule;
}());
CodeHighlighterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */]],
        exports: [CodeHighlighter],
        declarations: [CodeHighlighter]
    })
], CodeHighlighterModule);

var _a;
//# sourceMappingURL=codehighlighter.js.map

/***/ }),

/***/ "./src/app/components/tabview/tabview.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* unused harmony export TabViewNav */
/* unused harmony export TabPanel */
/* unused harmony export TabView */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabViewNav = (function () {
    function TabViewNav() {
        this.orientation = 'top';
        this.onTabClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onTabCloseClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    TabViewNav.prototype.getDefaultHeaderClass = function (tab) {
        var styleClass = 'ui-state-default ui-corner-' + this.orientation;
        if (tab.headerStyleClass) {
            styleClass = styleClass + " " + tab.headerStyleClass;
        }
        return styleClass;
    };
    TabViewNav.prototype.clickTab = function (event, tab) {
        this.onTabClick.emit({
            originalEvent: event,
            tab: tab
        });
    };
    TabViewNav.prototype.clickClose = function (event, tab) {
        this.onTabCloseClick.emit({
            originalEvent: event,
            tab: tab
        });
    };
    return TabViewNav;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Array)
], TabViewNav.prototype, "tabs", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], TabViewNav.prototype, "orientation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _a || Object)
], TabViewNav.prototype, "onTabClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _b || Object)
], TabViewNav.prototype, "onTabCloseClick", void 0);
TabViewNav = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: '[p-tabViewNav]',
        host: {
            '[class.ui-tabview-nav]': 'true',
            '[class.ui-helper-reset]': 'true',
            '[class.ui-helper-clearfix]': 'true',
            '[class.ui-widget-header]': 'true',
            '[class.ui-corner-all]': 'true'
        },
        template: "\n        <ng-template ngFor let-tab [ngForOf]=\"tabs\">\n            <li [class]=\"getDefaultHeaderClass(tab)\" [ngStyle]=\"tab.headerStyle\" role=\"tab\"\n                [ngClass]=\"{'ui-tabview-selected ui-state-active': tab.selected, 'ui-state-disabled': tab.disabled}\"\n                (click)=\"clickTab($event,tab)\" *ngIf=\"!tab.closed\"\n                [attr.aria-expanded]=\"tab.selected\" [attr.aria-selected]=\"tab.selected\">\n                <a href=\"#\">\n                    <span class=\"ui-tabview-left-icon fa\" [ngClass]=\"tab.leftIcon\" *ngIf=\"tab.leftIcon\"></span>\n                    <span class=\"ui-tabview-title\">{{tab.header}}</span>\n                    <span class=\"ui-tabview-right-icon fa\" [ngClass]=\"tab.rightIcon\" *ngIf=\"tab.rightIcon\"></span>\n                </a>\n                <span *ngIf=\"tab.closable\" class=\"ui-tabview-close fa fa-close\" (click)=\"clickClose($event,tab)\"></span>\n            </li>\n        </ng-template>\n    ",
    })
], TabViewNav);

var TabPanel = (function () {
    function TabPanel() {
    }
    return TabPanel;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], TabPanel.prototype, "header", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], TabPanel.prototype, "selected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], TabPanel.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], TabPanel.prototype, "closable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], TabPanel.prototype, "headerStyle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], TabPanel.prototype, "headerStyleClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], TabPanel.prototype, "leftIcon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], TabPanel.prototype, "rightIcon", void 0);
TabPanel = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'p-tabPanel',
        template: "\n        <div class=\"ui-tabview-panel ui-widget-content\" [style.display]=\"selected ? 'block' : 'none'\" \n            role=\"tabpanel\" [attr.aria-hidden]=\"!selected\" *ngIf=\"closed ? false :\u00A0(lazy ? selected : true)\">\n            <ng-content></ng-content>\n        </div>\n    "
    })
], TabPanel);

var TabView = (function () {
    function TabView(el) {
        this.el = el;
        this.orientation = 'top';
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    TabView.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.initTabs();
        this.tabPanels.changes.subscribe(function (_) {
            _this.initTabs();
        });
    };
    TabView.prototype.initTabs = function () {
        this.tabs = this.tabPanels.toArray();
        for (var _i = 0, _a = this.tabs; _i < _a.length; _i++) {
            var tab = _a[_i];
            tab.lazy = this.lazy;
        }
        var selectedTab = this.findSelectedTab();
        if (!selectedTab && this.tabs.length) {
            if (this.activeIndex != null && this.tabs.length > this.activeIndex)
                this.tabs[this.activeIndex].selected = true;
            else
                this.tabs[0].selected = true;
        }
    };
    TabView.prototype.open = function (event, tab) {
        if (tab.disabled) {
            if (event) {
                event.preventDefault();
            }
            return;
        }
        if (!tab.selected) {
            var selectedTab = this.findSelectedTab();
            if (selectedTab) {
                selectedTab.selected = false;
            }
            tab.selected = true;
            this.onChange.emit({ originalEvent: event, index: this.findTabIndex(tab) });
        }
        if (event) {
            event.preventDefault();
        }
    };
    TabView.prototype.close = function (event, tab) {
        var _this = this;
        if (this.controlClose) {
            this.onClose.emit({
                originalEvent: event,
                index: this.findTabIndex(tab),
                close: function () {
                    _this.closeTab(tab);
                }
            });
        }
        else {
            this.closeTab(tab);
            this.onClose.emit({
                originalEvent: event,
                index: this.findTabIndex(tab)
            });
        }
        event.stopPropagation();
    };
    TabView.prototype.closeTab = function (tab) {
        if (tab.selected) {
            tab.selected = false;
            for (var i = 0; i < this.tabs.length; i++) {
                var tabPanel = this.tabs[i];
                if (!tabPanel.closed && !tab.disabled) {
                    tabPanel.selected = true;
                    break;
                }
            }
        }
        tab.closed = true;
    };
    TabView.prototype.findSelectedTab = function () {
        for (var i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i].selected) {
                return this.tabs[i];
            }
        }
        return null;
    };
    TabView.prototype.findTabIndex = function (tab) {
        var index = -1;
        for (var i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i] == tab) {
                index = i;
                break;
            }
        }
        return index;
    };
    TabView.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    Object.defineProperty(TabView.prototype, "activeIndex", {
        get: function () {
            return this._activeIndex;
        },
        set: function (val) {
            this._activeIndex = val;
            if (this.tabs && this.tabs.length && this._activeIndex != null) {
                this.findSelectedTab().selected = false;
                this.tabs[this._activeIndex].selected = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    return TabView;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], TabView.prototype, "orientation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], TabView.prototype, "style", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], TabView.prototype, "styleClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], TabView.prototype, "controlClose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], TabView.prototype, "lazy", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* ContentChildren */])(TabPanel),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* QueryList */]) === "function" && _c || Object)
], TabView.prototype, "tabPanels", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _d || Object)
], TabView.prototype, "onChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _e || Object)
], TabView.prototype, "onClose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], TabView.prototype, "activeIndex", null);
TabView = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'p-tabView',
        template: "\n        <div [ngClass]=\"'ui-tabview ui-widget ui-widget-content ui-corner-all ui-tabview-' + orientation\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <ul p-tabViewNav role=\"tablist\" *ngIf=\"orientation!='bottom'\" [tabs]=\"tabs\" [orientation]=\"orientation\" \n                (onTabClick)=\"open($event.originalEvent, $event.tab)\" (onTabCloseClick)=\"close($event.originalEvent, $event.tab)\"></ul>\n            <div class=\"ui-tabview-panels\">\n                <ng-content></ng-content>\n            </div>\n            <ul p-tabViewNav role=\"tablist\" *ngIf=\"orientation=='bottom'\" [tabs]=\"tabs\" [orientation]=\"orientation\"\n                (onTabClick)=\"open($event.originalEvent, $event.tab)\" (onTabCloseClick)=\"close($event.originalEvent, $event.tab)\"></ul>\n        </div>\n    ",
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _f || Object])
], TabView);

var TabViewModule = (function () {
    function TabViewModule() {
    }
    return TabViewModule;
}());
TabViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */]],
        exports: [TabView, TabPanel, TabViewNav],
        declarations: [TabView, TabPanel, TabViewNav]
    })
], TabViewModule);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=tabview.js.map

/***/ }),

/***/ "./src/app/showcase/components/grid/griddemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__griddemo__ = __webpack_require__("./src/app/showcase/components/grid/griddemo.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridDemoRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GridDemoRoutingModule = (function () {
    function GridDemoRoutingModule() {
    }
    return GridDemoRoutingModule;
}());
GridDemoRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__griddemo__["a" /* GridDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], GridDemoRoutingModule);

//# sourceMappingURL=griddemo-routing.module.js.map

/***/ }),

/***/ "./src/app/showcase/components/grid/griddemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Grid CSS</span>\r\n        <span>Grid CSS is a lightweight responsive and fluid layout utility optimized for mobile devices, tablets and desktops. \r\n            Grid CSS is used internally in PrimeNG components and can be used as standalone as well.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation GridDemo\">\r\n    <h3 class=\"first\">Basic</h3>\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-1\">1</div>\r\n        <div class=\"ui-g-1\">1</div>\r\n        <div class=\"ui-g-1\">1</div>\r\n        <div class=\"ui-g-1\">1</div>\r\n        <div class=\"ui-g-1\">1</div>\r\n        <div class=\"ui-g-1\">1</div>\r\n        <div class=\"ui-g-1\">1</div>\r\n        <div class=\"ui-g-1\">1</div>\r\n        <div class=\"ui-g-1\">1</div>\r\n        <div class=\"ui-g-1\">1</div>\r\n        <div class=\"ui-g-1\">1</div>\r\n        <div class=\"ui-g-1\">1</div>\r\n    </div>\r\n\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-2\">2</div>\r\n        <div class=\"ui-g-2\">2</div>\r\n        <div class=\"ui-g-2\">2</div>\r\n        <div class=\"ui-g-2\">2</div>\r\n        <div class=\"ui-g-2\">2</div>\r\n        <div class=\"ui-g-2\">2</div>\r\n    </div>\r\n\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-3\">3</div>\r\n        <div class=\"ui-g-3\">3</div>\r\n        <div class=\"ui-g-3\">3</div>\r\n        <div class=\"ui-g-3\">3</div>\r\n    </div>\r\n\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-4\">4</div>\r\n        <div class=\"ui-g-4\">4</div>\r\n        <div class=\"ui-g-4\">4</div>\r\n    </div>\r\n\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-6\">6</div>\r\n        <div class=\"ui-g-6\">6</div>\r\n    </div>\r\n\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12\">12</div>\r\n    </div>\r\n\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-4\">4</div>\r\n        <div class=\"ui-g-8\">8</div>\r\n    </div>\r\n\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-3\">3</div>\r\n        <div class=\"ui-g-9\">9</div>\r\n    </div>\r\n\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-3\">3</div>\r\n        <div class=\"ui-g-5\">5</div>\r\n        <div class=\"ui-g-4\">4</div>\r\n    </div>\r\n\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-4\">4</div>\r\n        <div class=\"ui-g-2\">2</div>\r\n        <div class=\"ui-g-2\">2</div>\r\n        <div class=\"ui-g-3\">3</div>\r\n        <div class=\"ui-g-1\">1</div>\r\n    </div>\r\n    \r\n    <h3>Responsive</h3>\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-6 ui-lg-3\">ui-g-12 ui-md-6 ui-lg-3</div>\r\n        <div class=\"ui-g-12 ui-md-6 ui-lg-3\">ui-g-12 ui-md-6 ui-lg-3</div>\r\n        <div class=\"ui-g-12 ui-md-6 ui-lg-3\">ui-g-12 ui-md-6 ui-lg-3</div>\r\n        <div class=\"ui-g-12 ui-md-6 ui-lg-3\">ui-g-12 ui-md-6 ui-lg-3</div>\r\n    </div>\r\n    \r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-6 ui-lg-4\">ui-g-12 ui-md-6 ui-lg-4</div>\r\n        <div class=\"ui-g-12 ui-md-6 ui-lg-4\">ui-g-12 ui-md-6 ui-lg-4</div>\r\n        <div class=\"ui-g-12 ui-lg-4\">ui-g-12 ui-lg-4</div>\r\n    </div>\r\n    \r\n    <h3>Nested</h3>\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-8 ui-g-nopad\">\r\n            <div class=\"ui-g-6\">6</div>\r\n            <div class=\"ui-g-6\">6</div>\r\n            <div class=\"ui-g-12\">12</div>\r\n        </div>\r\n        <div class=\"ui-g-4\">4</div>\r\n    </div>\r\n    \r\n    <h3>Sample Layout</h3>\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-2\">Menu</div>\r\n        <div class=\"ui-g-12 ui-md-10 ui-g-nopad\">\r\n            <div class=\"ui-g-12\">\r\n                Bar\r\n            </div>\r\n            <div class=\"ui-g-12 ui-g-nopad\">\r\n                <div class=\"ui-g\">\r\n                    <div class=\"ui-g-12 ui-md-4\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, orci nec dictum convallis, ligula mauris vestibulum turpis, nec varius tortor quam at diam. Nullam a viverra nibh. In tincidunt tempor lectus quis vulputate. Pellentesque nec dui aliquam, lobortis est in, lobortis ante</div>\r\n                    <div class=\"ui-g-12 ui-md-4\">Maecenas vel nisi aliquet, vulputate tortor id, laoreet massa. Maecenas mattis tristique bibendum. Suspendisse vel mi dictum, vestibulum lacus quis, pulvinar quam. Proin vulputate, nibh at finibus varius, leo eros lacinia elit, nec blandit odio tellus a justo. Donec nec ex auctor, tristique nulla nec, rutrum sapien.</div>\r\n                    <div class=\"ui-g-12 ui-md-4\">Proin efficitur in leo eget ornare. Nam vestibulum neque sed velit sagittis sodales. Sed scelerisque hendrerit magna a hendrerit. Cras tempor sem at justo pharetra convallis. Curabitur vel sodales purus. Vestibulum interdum facilisis nulla imperdiet suscipit. Quisque lectus felis, condimentum eget hendrerit sit amet.</div>\r\n                </div>\r\n                \r\n                <div class=\"ui-g\">\r\n                    <div class=\"ui-g-6 ui-md-3\"><img src=\"assets/showcase/images/demo/galleria/galleria1.jpg\" style=\"width:100%\"></div>  \r\n                    <div class=\"ui-g-6 ui-md-3\"><img src=\"assets/showcase/images/demo/galleria/galleria2.jpg\" style=\"width:100%\"></div> \r\n                    <div class=\"ui-g-6 ui-md-3\"><img src=\"assets/showcase/images/demo/galleria/galleria3.jpg\" style=\"width:100%\"></div>    \r\n                    <div class=\"ui-g-6 ui-md-3\"><img src=\"assets/showcase/images/demo/galleria/galleria4.jpg\" style=\"width:100%\"></div>      \r\n                </div>\r\n                \r\n                <div class=\"ui-g\">\r\n                    <div class=\"ui-g-12 ui-md-6\">Phasellus faucibus purus volutpat mauris lacinia sodales. Ut sit amet sapien facilisis, commodo dui non, fringilla tellus. Quisque tempus facilisis nisi sodales finibus. Pellentesque neque orci, ullamcorper vitae ligula quis, dignissim euismod augue.</div>\r\n                    <div class=\"ui-g-12 ui-md-6\">Fusce ullamcorper congue massa, eget ullamcorper nunc lobortis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices dui eget dolor feugiat dapibus. Aliquam pretium leo et egestas luctus. Nunc facilisis gravida tellus.</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            Footer\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Getting Started</h3>\r\n            <p>Grid CSS is based on a 12 column layout. Columns are prefixed with <i>ui-g-*</i> and they should be a descendant of a container having <i>ui-g</i> class.\r\n                 A simple 3 column layout can be defined as;</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-4\"&gt;Col1&lt;/div&gt;\r\n    &lt;div class=\"ui-g-4\"&gt;Col2&lt;/div&gt;\r\n    &lt;div class=\"ui-g-4\"&gt;Col3&lt;/div&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-4\">Col1</div>\r\n    <div class=\"ui-g-4\">Col2</div>\r\n    <div class=\"ui-g-4\">Col3</div>\r\n</div>\r\n        \r\n        <h3>Multi Line</h3>\r\n            <p>When the number of columns exceed 12, columns wrap to a new line.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-6\"&gt;Col1&lt;/div&gt;\r\n    &lt;div class=\"ui-g-6\"&gt;Col2&lt;/div&gt;\r\n    &lt;div class=\"ui-g-6\"&gt;Col3&lt;/div&gt;\r\n    &lt;div class=\"ui-g-6\"&gt;Col4&lt;/div&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-6\">Col1</div>\r\n    <div class=\"ui-g-6\">Col2</div>\r\n    <div class=\"ui-g-6\">Col3</div>\r\n    <div class=\"ui-g-6\">Col3</div>\r\n</div>\r\n\r\n        <p>Same can also be achieved by having two <i>ui-g</i> containers to semantically define a row.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-6\"&gt;Col1&lt;/div&gt;\r\n    &lt;div class=\"ui-g-6\"&gt;Col2&lt;/div&gt;\r\n&lt;/div&gt;\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-6\"&gt;Col3&lt;/div&gt;\r\n    &lt;div class=\"ui-g-6\"&gt;Col4&lt;/div&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-6\">Col1</div>\r\n    <div class=\"ui-g-6\">Col2</div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-6\">Col3</div>\r\n    <div class=\"ui-g-6\">Col4</div>\r\n</div>\r\n\r\n        <h3>Nested</h3>\r\n        <p>Columns can be nested to create more complex layouts.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-8 ui-g-nopad\"&gt;\r\n        &lt;div class=\"ui-g-6\"&gt;6&lt;/div&gt;\r\n        &lt;div class=\"ui-g-6\"&gt;6&lt;/div&gt;\r\n        &lt;div class=\"ui-g-12\"&gt;12&lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-4\"&gt;4&lt;/div&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-8 ui-g-nopad\">\r\n        <div class=\"ui-g-6\">6</div>\r\n        <div class=\"ui-g-6\">6</div>\r\n        <div class=\"ui-g-12\">12</div>\r\n    </div>\r\n    <div class=\"ui-g-4\">4</div>\r\n</div>\r\n\r\n        <p>Direct children of <i>ui-g</i> has the same height automatically, in example above if the inside columns is likely to have different height with different content.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-8 ui-g-nopad\"&gt;\r\n        &lt;div class=\"ui-g-6\"&gt;6 &lt;br /&gt;&lt;br /&gt;&lt;br /&gt; Content &lt;/div&gt;\r\n        &lt;div class=\"ui-g-6\"&gt;6&lt;/div&gt;\r\n        &lt;div class=\"ui-g-12\"&gt;12&lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-4\"&gt;4&lt;/div&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-8 ui-g-nopad\">\r\n        <div class=\"ui-g-6\">6 <br /><br /><br /> Content </div>\r\n        <div class=\"ui-g-6\">6</div>\r\n        <div class=\"ui-g-12\">12</div>\r\n    </div>\r\n    <div class=\"ui-g-4\">4</div>\r\n</div>\r\n\r\n        <p>Solution is wrapping the internal divs inside a ui-g as well.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-8 ui-g-nopad\"&gt;\r\n        &lt;div class=\"ui-g\"&gt;\r\n            &lt;div class=\"ui-g-6\"&gt;6 &lt;br /&gt;&lt;br /&gt;&lt;br /&gt; Content &lt;/div&gt;\r\n            &lt;div class=\"ui-g-6\"&gt;6&lt;/div&gt;\r\n            &lt;div class=\"ui-g-12\"&gt;12&lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-4\"&gt;4&lt;/div&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-8 ui-g-nopad\">\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-6\">6 <br /><br /><br /> Content </div>\r\n            <div class=\"ui-g-6\">6</div>\r\n            <div class=\"ui-g-12\">12</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-4\">4</div>\r\n</div>\r\n\r\n        <h3>Responsive</h3>\r\n        <p>Responsive layout is achieved by applying additional classes to the columns whereas <i>ui-g-*</i> define the default behavior. Four screen sizes are supported\r\n        with different breakpoints.</p>\r\n        \r\n        <div class=\"doc-tablewrapper\">\r\n            <table class=\"doc-table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Prefix</th>\r\n                        <th>Devices</th>\r\n                        <th>Media Query</th>\r\n                        <th>Example</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td>ui-sm-*</td>\r\n                        <td>Small devices like phones</td>\r\n                        <td>max-width: 40em (640px)</td>\r\n                        <td>ui-sm-6, ui-sm-4</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-md-*</td>\r\n                        <td>Medium sized devices such as tablets</td>\r\n                        <td>min-width: 40.063em (641px)</td>\r\n                        <td>ui-md-2, ui-sm-8</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-lg-*</td>\r\n                        <td>Devices with large screen like desktops</td>\r\n                        <td>min-width: 64.063em (1025px)</td>\r\n                        <td>ui-lg-6, ui-sm-12</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-xl-*</td>\r\n                        <td>Big screen monitors</td>\r\n                        <td>min-width: 90.063em (1441px)</td>\r\n                        <td>ui-xl-2, ui-sm-10</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        \r\n        <p>Most of the time, ui-md-* styles are used with default ui-g-* classes, to customize small or large screens apply ui-sm, ui-lg and ui-xl can be utilized.</p>\r\n        \r\n        <p>In example below, large screens display 4 columns, medium screens display 2 columns in 2 rows and default behavior gets only displayed in a mobile phone\r\n        where each column is rendered in a separate row.</p>\r\n        \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-6 ui-lg-3\"&gt;ui-g-12 ui-md-6 ui-lg-3&lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-6 ui-lg-3\"&gt;ui-g-12 ui-md-6 ui-lg-3&lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-6 ui-lg-3\"&gt;ui-g-12 ui-md-6 ui-lg-3&lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-6 ui-lg-3\"&gt;ui-g-12 ui-md-6 ui-lg-3&lt;/div&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">ui-g-12 ui-md-6 ui-lg-3</div>\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">ui-g-12 ui-md-6 ui-lg-3</div>\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">ui-g-12 ui-md-6 ui-lg-3</div>\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">ui-g-12 ui-md-6 ui-lg-3</div>\r\n</div>\r\n\r\n    <p>In this second example below, 3 columns are displayed in large screens and in medium screens first two columns are placed side by side where the last column displayed\r\n    below them. In a mobile phone, they all get displayed in a separate row.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-6 ui-lg-4\"&gt;ui-g-12 ui-md-6 ui-lg-4&lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-6 ui-lg-4\"&gt;ui-g-12 ui-md-6 ui-lg-4&lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-lg-4\"&gt;ui-g-12 ui-lg-4&lt;/div&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-4\">ui-g-12 ui-md-6 ui-lg-4</div>\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-4\">ui-g-12 ui-md-6 ui-lg-4</div>\r\n    <div class=\"ui-g-12 ui-lg-4\">ui-g-12 ui-lg-4</div>\r\n</div>\r\n\r\n        <h3>Padding</h3>\r\n        <p>A column has a default padding by default, to remove it you may apply <i>ui-g-nopad</i> style class.</p>\r\n\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/grid\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-1\"&gt;1&lt;/div&gt;\r\n    &lt;div class=\"ui-g-1\"&gt;1&lt;/div&gt;\r\n    &lt;div class=\"ui-g-1\"&gt;1&lt;/div&gt;\r\n    &lt;div class=\"ui-g-1\"&gt;1&lt;/div&gt;\r\n    &lt;div class=\"ui-g-1\"&gt;1&lt;/div&gt;\r\n    &lt;div class=\"ui-g-1\"&gt;1&lt;/div&gt;\r\n    &lt;div class=\"ui-g-1\"&gt;1&lt;/div&gt;\r\n    &lt;div class=\"ui-g-1\"&gt;1&lt;/div&gt;\r\n    &lt;div class=\"ui-g-1\"&gt;1&lt;/div&gt;\r\n    &lt;div class=\"ui-g-1\"&gt;1&lt;/div&gt;\r\n    &lt;div class=\"ui-g-1\"&gt;1&lt;/div&gt;\r\n    &lt;div class=\"ui-g-1\"&gt;1&lt;/div&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-2\"&gt;2&lt;/div&gt;\r\n    &lt;div class=\"ui-g-2\"&gt;2&lt;/div&gt;\r\n    &lt;div class=\"ui-g-2\"&gt;2&lt;/div&gt;\r\n    &lt;div class=\"ui-g-2\"&gt;2&lt;/div&gt;\r\n    &lt;div class=\"ui-g-2\"&gt;2&lt;/div&gt;\r\n    &lt;div class=\"ui-g-2\"&gt;2&lt;/div&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-3\"&gt;3&lt;/div&gt;\r\n    &lt;div class=\"ui-g-3\"&gt;3&lt;/div&gt;\r\n    &lt;div class=\"ui-g-3\"&gt;3&lt;/div&gt;\r\n    &lt;div class=\"ui-g-3\"&gt;3&lt;/div&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-4\"&gt;4&lt;/div&gt;\r\n    &lt;div class=\"ui-g-4\"&gt;4&lt;/div&gt;\r\n    &lt;div class=\"ui-g-4\"&gt;4&lt;/div&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-6\"&gt;6&lt;/div&gt;\r\n    &lt;div class=\"ui-g-6\"&gt;6&lt;/div&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-12\"&gt;12&lt;/div&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-4\"&gt;4&lt;/div&gt;\r\n    &lt;div class=\"ui-g-8\"&gt;8&lt;/div&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-3\"&gt;3&lt;/div&gt;\r\n    &lt;div class=\"ui-g-9\"&gt;9&lt;/div&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-3\"&gt;3&lt;/div&gt;\r\n    &lt;div class=\"ui-g-5\"&gt;5&lt;/div&gt;\r\n    &lt;div class=\"ui-g-4\"&gt;4&lt;/div&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-4\"&gt;4&lt;/div&gt;\r\n    &lt;div class=\"ui-g-2\"&gt;2&lt;/div&gt;\r\n    &lt;div class=\"ui-g-2\"&gt;2&lt;/div&gt;\r\n    &lt;div class=\"ui-g-3\"&gt;3&lt;/div&gt;\r\n    &lt;div class=\"ui-g-1\"&gt;1&lt;/div&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;h3&gt;Responsive&lt;/h3&gt;\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-6 ui-lg-3\"&gt;ui-g-12 ui-md-6 ui-lg-3&lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-6 ui-lg-3\"&gt;ui-g-12 ui-md-6 ui-lg-3&lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-6 ui-lg-3\"&gt;ui-g-12 ui-md-6 ui-lg-3&lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-6 ui-lg-3\"&gt;ui-g-12 ui-md-6 ui-lg-3&lt;/div&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-6 ui-lg-4\"&gt;ui-g-12 ui-md-6 ui-lg-4&lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-6 ui-lg-4\"&gt;ui-g-12 ui-md-6 ui-lg-4&lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-lg-4\"&gt;ui-g-12 ui-lg-4&lt;/div&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;h3&gt;Nested&lt;/h3&gt;\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-8 ui-g-nopad\"&gt;\r\n        &lt;div class=\"ui-g-6\"&gt;6&lt;/div&gt;\r\n        &lt;div class=\"ui-g-6\"&gt;6&lt;/div&gt;\r\n        &lt;div class=\"ui-g-12\"&gt;12&lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-4\"&gt;4&lt;/div&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;h3&gt;Sample Layout&lt;/h3&gt;\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-2\"&gt;Menu&lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-10 ui-g-nopad\"&gt;\r\n        &lt;div class=\"ui-g-12\"&gt;\r\n            Bar\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-g-12 ui-g-nopad\"&gt;\r\n            &lt;div class=\"ui-g\"&gt;\r\n                &lt;div class=\"ui-g-12 ui-md-4\"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, orci nec dictum convallis, ligula mauris vestibulum turpis, nec varius tortor quam at diam. Nullam a viverra nibh. In tincidunt tempor lectus quis vulputate. Pellentesque nec dui aliquam, lobortis est in, lobortis ante&lt;/div&gt;\r\n                &lt;div class=\"ui-g-12 ui-md-4\"&gt;Maecenas vel nisi aliquet, vulputate tortor id, laoreet massa. Maecenas mattis tristique bibendum. Suspendisse vel mi dictum, vestibulum lacus quis, pulvinar quam. Proin vulputate, nibh at finibus varius, leo eros lacinia elit, nec blandit odio tellus a justo. Donec nec ex auctor, tristique nulla nec, rutrum sapien.&lt;/div&gt;\r\n                &lt;div class=\"ui-g-12 ui-md-4\"&gt;Proin efficitur in leo eget ornare. Nam vestibulum neque sed velit sagittis sodales. Sed scelerisque hendrerit magna a hendrerit. Cras tempor sem at justo pharetra convallis. Curabitur vel sodales purus. Vestibulum interdum facilisis nulla imperdiet suscipit. Quisque lectus felis, condimentum eget hendrerit sit amet.&lt;/div&gt;\r\n            &lt;/div&gt;\r\n            \r\n            &lt;div class=\"ui-g\"&gt;\r\n                &lt;div class=\"ui-g-6 ui-md-3\"&gt;&lt;img src=\"assets/showcase/images/demo/galleria/galleria1.jpg\" style=\"width:100%\"&gt;&lt;/div&gt;  \r\n                &lt;div class=\"ui-g-6 ui-md-3\"&gt;&lt;img src=\"assets/showcase/images/demo/galleria/galleria1.jpg\" style=\"width:100%\"&gt;&lt;/div&gt; \r\n                &lt;div class=\"ui-g-6 ui-md-3\"&gt;&lt;img src=\"assets/showcase/images/demo/galleria/galleria1.jpg\" style=\"width:100%\"&gt;&lt;/div&gt;    \r\n                &lt;div class=\"ui-g-6 ui-md-3\"&gt;&lt;img src=\"assets/showcase/images/demo/galleria/galleria1.jpg\" style=\"width:100%\"&gt;&lt;/div&gt;      \r\n            &lt;/div&gt;\r\n            \r\n            &lt;div class=\"ui-g\"&gt;\r\n                &lt;div class=\"ui-g-12 ui-md-6\"&gt;Phasellus faucibus purus volutpat mauris lacinia sodales. Ut sit amet sapien facilisis, commodo dui non, fringilla tellus. Quisque tempus facilisis nisi sodales finibus. Pellentesque neque orci, ullamcorper vitae ligula quis, dignissim euismod augue.&lt;/div&gt;\r\n                &lt;div class=\"ui-g-12 ui-md-6\"&gt;Fusce ullamcorper congue massa, eget ullamcorper nunc lobortis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices dui eget dolor feugiat dapibus. Aliquam pretium leo et egestas luctus. Nunc facilisis gravida tellus.&lt;/div&gt;\r\n            &lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12\"&gt;\r\n        Footer\r\n    &lt;/div&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/showcase/components/grid/griddemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__griddemo__ = __webpack_require__("./src/app/showcase/components/grid/griddemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__griddemo_routing_module__ = __webpack_require__("./src/app/showcase/components/grid/griddemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_tabview_tabview__ = __webpack_require__("./src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_codehighlighter_codehighlighter__ = __webpack_require__("./src/app/components/codehighlighter/codehighlighter.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridDemoModule", function() { return GridDemoModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var GridDemoModule = (function () {
    function GridDemoModule() {
    }
    return GridDemoModule;
}());
GridDemoModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__griddemo_routing_module__["a" /* GridDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__griddemo__["a" /* GridDemo */]
        ]
    })
], GridDemoModule);

//# sourceMappingURL=griddemo.module.js.map

/***/ }),

/***/ "./src/app/showcase/components/grid/griddemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridDemo; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GridDemo = (function () {
    function GridDemo() {
    }
    return GridDemo;
}());
GridDemo = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        styles: ["\n        .ui-g div {\n            background-color: #ededed;\n            text-align: center;\n            border: 1px solid #fafafa;\n        }\n    "],
        template: __webpack_require__("./src/app/showcase/components/grid/griddemo.html")
    })
], GridDemo);

//# sourceMappingURL=griddemo.js.map

/***/ })

});
//# sourceMappingURL=71.chunk.js.map