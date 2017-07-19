webpackJsonp([12],{

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

/***/ "./src/app/components/common/menuitem.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=menuitem.js.map

/***/ }),

/***/ "./src/app/components/common/shared.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrimeTemplate; });
/* unused harmony export TemplateWrapper */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Column; });
/* unused harmony export Row */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return HeaderColumnGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FooterColumnGroup; });
/* unused harmony export ColumnBodyTemplateLoader */
/* unused harmony export ColumnHeaderTemplateLoader */
/* unused harmony export ColumnFooterTemplateLoader */
/* unused harmony export ColumnFilterTemplateLoader */
/* unused harmony export ColumnEditorTemplateLoader */
/* unused harmony export TemplateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Header = (function () {
    function Header() {
    }
    return Header;
}());
Header = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'p-header',
        template: '<ng-content></ng-content>'
    })
], Header);

var Footer = (function () {
    function Footer() {
    }
    return Footer;
}());
Footer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'p-footer',
        template: '<ng-content></ng-content>'
    })
], Footer);

var PrimeTemplate = (function () {
    function PrimeTemplate(template) {
        this.template = template;
    }
    PrimeTemplate.prototype.getType = function () {
        return this.name;
    };
    return PrimeTemplate;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], PrimeTemplate.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('pTemplate'),
    __metadata("design:type", String)
], PrimeTemplate.prototype, "name", void 0);
PrimeTemplate = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[pTemplate]',
        host: {}
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* TemplateRef */]) === "function" && _a || Object])
], PrimeTemplate);

var TemplateWrapper = (function () {
    function TemplateWrapper(viewContainer) {
        this.viewContainer = viewContainer;
    }
    TemplateWrapper.prototype.ngOnInit = function () {
        this.view = this.viewContainer.createEmbeddedView(this.templateRef, {
            '\$implicit': this.item,
            'index': this.index
        });
    };
    TemplateWrapper.prototype.ngOnDestroy = function () {
        this.view.destroy();
    };
    return TemplateWrapper;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], TemplateWrapper.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], TemplateWrapper.prototype, "index", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('pTemplateWrapper'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* TemplateRef */]) === "function" && _b || Object)
], TemplateWrapper.prototype, "templateRef", void 0);
TemplateWrapper = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[pTemplateWrapper]'
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ViewContainerRef */]) === "function" && _c || Object])
], TemplateWrapper);

var Column = (function () {
    function Column() {
        this.filterType = 'text';
        this.sortFunction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    Column.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'header':
                    _this.headerTemplate = item.template;
                    break;
                case 'body':
                    _this.bodyTemplate = item.template;
                    break;
                case 'footer':
                    _this.footerTemplate = item.template;
                    break;
                case 'filter':
                    _this.filterTemplate = item.template;
                    break;
                case 'editor':
                    _this.editorTemplate = item.template;
                    break;
                default:
                    _this.bodyTemplate = item.template;
                    break;
            }
        });
    };
    return Column;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], Column.prototype, "field", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], Column.prototype, "sortField", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], Column.prototype, "header", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], Column.prototype, "footer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], Column.prototype, "sortable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], Column.prototype, "editable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], Column.prototype, "filter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], Column.prototype, "filterMatchMode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], Column.prototype, "filterType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], Column.prototype, "rowspan", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], Column.prototype, "colspan", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], Column.prototype, "style", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], Column.prototype, "styleClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], Column.prototype, "hidden", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], Column.prototype, "expander", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], Column.prototype, "selectionMode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], Column.prototype, "filterPlaceholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], Column.prototype, "filterMaxlength", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], Column.prototype, "frozen", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _d || Object)
], Column.prototype, "sortFunction", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* ContentChildren */])(PrimeTemplate),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* QueryList */]) === "function" && _e || Object)
], Column.prototype, "templates", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* TemplateRef */]),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* TemplateRef */]) === "function" && _f || Object)
], Column.prototype, "template", void 0);
Column = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'p-column',
        template: ""
    })
], Column);

var Row = (function () {
    function Row() {
    }
    return Row;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* ContentChildren */])(Column),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* QueryList */]) === "function" && _g || Object)
], Row.prototype, "columns", void 0);
Row = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'p-row',
        template: ""
    })
], Row);

var HeaderColumnGroup = (function () {
    function HeaderColumnGroup() {
    }
    return HeaderColumnGroup;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* ContentChildren */])(Row),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* QueryList */]) === "function" && _h || Object)
], HeaderColumnGroup.prototype, "rows", void 0);
HeaderColumnGroup = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'p-headerColumnGroup',
        template: ""
    })
], HeaderColumnGroup);

var FooterColumnGroup = (function () {
    function FooterColumnGroup() {
    }
    return FooterColumnGroup;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* ContentChildren */])(Row),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* QueryList */]) === "function" && _j || Object)
], FooterColumnGroup.prototype, "rows", void 0);
FooterColumnGroup = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'p-footerColumnGroup',
        template: ""
    })
], FooterColumnGroup);

var ColumnBodyTemplateLoader = (function () {
    function ColumnBodyTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ColumnBodyTemplateLoader.prototype.ngOnInit = function () {
        this.view = this.viewContainer.createEmbeddedView(this.column.bodyTemplate, {
            '\$implicit': this.column,
            'rowData': this.rowData,
            'rowIndex': this.rowIndex
        });
    };
    ColumnBodyTemplateLoader.prototype.ngOnChanges = function (changes) {
        if (!this.view) {
            return;
        }
        if ('rowIndex' in changes) {
            this.view.context.rowIndex = changes['rowIndex'].currentValue;
        }
    };
    ColumnBodyTemplateLoader.prototype.ngOnDestroy = function () {
        this.view.destroy();
    };
    return ColumnBodyTemplateLoader;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], ColumnBodyTemplateLoader.prototype, "column", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], ColumnBodyTemplateLoader.prototype, "rowData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], ColumnBodyTemplateLoader.prototype, "rowIndex", void 0);
ColumnBodyTemplateLoader = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'p-columnBodyTemplateLoader',
        template: ""
    }),
    __metadata("design:paramtypes", [typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ViewContainerRef */]) === "function" && _k || Object])
], ColumnBodyTemplateLoader);

var ColumnHeaderTemplateLoader = (function () {
    function ColumnHeaderTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ColumnHeaderTemplateLoader.prototype.ngOnInit = function () {
        this.view = this.viewContainer.createEmbeddedView(this.column.headerTemplate, {
            '\$implicit': this.column
        });
    };
    ColumnHeaderTemplateLoader.prototype.ngOnDestroy = function () {
        this.view.destroy();
    };
    return ColumnHeaderTemplateLoader;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], ColumnHeaderTemplateLoader.prototype, "column", void 0);
ColumnHeaderTemplateLoader = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'p-columnHeaderTemplateLoader',
        template: ""
    }),
    __metadata("design:paramtypes", [typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ViewContainerRef */]) === "function" && _l || Object])
], ColumnHeaderTemplateLoader);

var ColumnFooterTemplateLoader = (function () {
    function ColumnFooterTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ColumnFooterTemplateLoader.prototype.ngOnInit = function () {
        this.view = this.viewContainer.createEmbeddedView(this.column.footerTemplate, {
            '\$implicit': this.column
        });
    };
    ColumnFooterTemplateLoader.prototype.ngOnDestroy = function () {
        this.view.destroy();
    };
    return ColumnFooterTemplateLoader;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], ColumnFooterTemplateLoader.prototype, "column", void 0);
ColumnFooterTemplateLoader = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'p-columnFooterTemplateLoader',
        template: ""
    }),
    __metadata("design:paramtypes", [typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ViewContainerRef */]) === "function" && _m || Object])
], ColumnFooterTemplateLoader);

var ColumnFilterTemplateLoader = (function () {
    function ColumnFilterTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ColumnFilterTemplateLoader.prototype.ngOnInit = function () {
        this.view = this.viewContainer.createEmbeddedView(this.column.filterTemplate, {
            '\$implicit': this.column
        });
    };
    ColumnFilterTemplateLoader.prototype.ngOnDestroy = function () {
        this.view.destroy();
    };
    return ColumnFilterTemplateLoader;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], ColumnFilterTemplateLoader.prototype, "column", void 0);
ColumnFilterTemplateLoader = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'p-columnFilterTemplateLoader',
        template: ""
    }),
    __metadata("design:paramtypes", [typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ViewContainerRef */]) === "function" && _o || Object])
], ColumnFilterTemplateLoader);

var ColumnEditorTemplateLoader = (function () {
    function ColumnEditorTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ColumnEditorTemplateLoader.prototype.ngOnInit = function () {
        this.view = this.viewContainer.createEmbeddedView(this.column.editorTemplate, {
            '\$implicit': this.column,
            'rowData': this.rowData,
            'rowIndex': this.rowIndex
        });
    };
    ColumnEditorTemplateLoader.prototype.ngOnDestroy = function () {
        this.view.destroy();
    };
    return ColumnEditorTemplateLoader;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], ColumnEditorTemplateLoader.prototype, "column", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], ColumnEditorTemplateLoader.prototype, "rowData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], ColumnEditorTemplateLoader.prototype, "rowIndex", void 0);
ColumnEditorTemplateLoader = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'p-columnEditorTemplateLoader',
        template: ""
    }),
    __metadata("design:paramtypes", [typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ViewContainerRef */]) === "function" && _p || Object])
], ColumnEditorTemplateLoader);

var TemplateLoader = (function () {
    function TemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    TemplateLoader.prototype.ngOnInit = function () {
        if (this.template) {
            this.view = this.viewContainer.createEmbeddedView(this.template, {
                '\$implicit': this.data
            });
        }
    };
    TemplateLoader.prototype.ngOnDestroy = function () {
        if (this.view)
            this.view.destroy();
    };
    return TemplateLoader;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* TemplateRef */]) === "function" && _q || Object)
], TemplateLoader.prototype, "template", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], TemplateLoader.prototype, "data", void 0);
TemplateLoader = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'p-templateLoader',
        template: ""
    }),
    __metadata("design:paramtypes", [typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ViewContainerRef */]) === "function" && _r || Object])
], TemplateLoader);

var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */]],
        exports: [Header, Footer, Column, TemplateWrapper, ColumnHeaderTemplateLoader, ColumnBodyTemplateLoader, ColumnFooterTemplateLoader, ColumnFilterTemplateLoader, PrimeTemplate, TemplateLoader, Row, HeaderColumnGroup, FooterColumnGroup, ColumnEditorTemplateLoader],
        declarations: [Header, Footer, Column, TemplateWrapper, ColumnHeaderTemplateLoader, ColumnBodyTemplateLoader, ColumnFooterTemplateLoader, ColumnFilterTemplateLoader, PrimeTemplate, TemplateLoader, Row, HeaderColumnGroup, FooterColumnGroup, ColumnEditorTemplateLoader]
    })
], SharedModule);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
//# sourceMappingURL=shared.js.map

/***/ }),

/***/ "./src/app/components/common/treenode.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=treenode.js.map

/***/ }),

/***/ "./src/app/components/contextmenu/contextmenu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__ = __webpack_require__("./src/app/components/dom/domhandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_menuitem__ = __webpack_require__("./src/app/components/common/menuitem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_menuitem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__common_menuitem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* unused harmony export ContextMenuSub */
/* unused harmony export ContextMenu */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextMenuModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ContextMenuSub = (function () {
    function ContextMenuSub(domHandler, contextMenu) {
        this.domHandler = domHandler;
        this.contextMenu = contextMenu;
    }
    ContextMenuSub.prototype.onItemMouseEnter = function (event, item, menuitem) {
        if (menuitem.disabled) {
            return;
        }
        this.activeItem = item;
        var nextElement = item.children[0].nextElementSibling;
        if (nextElement) {
            var sublist = nextElement.children[0];
            sublist.style.zIndex = ++__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */].zindex;
            this.position(sublist, item);
        }
    };
    ContextMenuSub.prototype.onItemMouseLeave = function (event, link) {
        this.activeItem = null;
    };
    ContextMenuSub.prototype.itemClick = function (event, item) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        if (!item.url) {
            event.preventDefault();
        }
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
    };
    ContextMenuSub.prototype.listClick = function (event) {
        this.activeItem = null;
    };
    ContextMenuSub.prototype.position = function (sublist, item) {
        this.containerLeft = this.domHandler.getOffset(item.parentElement);
        var viewport = this.domHandler.getViewport();
        var sublistWidth = sublist.offsetParent ? sublist.offsetWidth : this.domHandler.getHiddenElementOuterWidth(sublist);
        var itemOuterWidth = this.domHandler.getOuterWidth(item.children[0]);
        sublist.style.top = '0px';
        if ((parseInt(this.containerLeft.left) + itemOuterWidth + sublistWidth) > (viewport.width - this.calculateScrollbarWidth())) {
            sublist.style.left = -sublistWidth + 'px';
        }
        else {
            sublist.style.left = itemOuterWidth + 'px';
        }
    };
    ContextMenuSub.prototype.calculateScrollbarWidth = function () {
        var scrollDiv = document.createElement("div");
        scrollDiv.className = "ui-scrollbar-measure";
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    return ContextMenuSub;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__common_menuitem__["MenuItem"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_menuitem__["MenuItem"]) === "function" && _a || Object)
], ContextMenuSub.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], ContextMenuSub.prototype, "root", void 0);
ContextMenuSub = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'p-contextMenuSub',
        template: "\n        <ul [ngClass]=\"{'ui-helper-reset':root, 'ui-widget-content ui-corner-all ui-helper-clearfix ui-menu-child ui-shadow':!root}\" class=\"ui-menu-list\"\n            (click)=\"listClick($event)\">\n            <ng-template ngFor let-child [ngForOf]=\"(root ? item : item.items)\">\n                <li *ngIf=\"child.separator\" class=\"ui-menu-separator ui-widget-content\">\n                <li *ngIf=\"!child.separator\" #item [ngClass]=\"{'ui-menuitem ui-widget ui-corner-all':true,'ui-menu-parent':child.items,'ui-menuitem-active':item==activeItem}\"\n                    (mouseenter)=\"onItemMouseEnter($event,item,child)\" (mouseleave)=\"onItemMouseLeave($event,item)\" [style.display]=\"child.visible === false ? 'none' : 'block'\">\n                    <a *ngIf=\"!child.routerLink\" [href]=\"child.url||'#'\" [attr.target]=\"child.target\" (click)=\"itemClick($event, child)\"\n                        [ngClass]=\"{'ui-menuitem-link ui-corner-all':true,'ui-state-disabled':child.disabled}\" [ngStyle]=\"child.style\" [class]=\"child.styleClass\">\n                        <span class=\"ui-submenu-icon fa fa-fw fa-caret-right\" *ngIf=\"child.items\"></span>\n                        <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"ui-menuitem-text\">{{child.label}}</span>\n                    </a>\n                    <a *ngIf=\"child.routerLink\" [routerLink]=\"child.routerLink\" [routerLinkActive]=\"'ui-state-active'\" [routerLinkActiveOptions]=\"child.routerLinkActiveOptions||{exact:false}\" [attr.target]=\"child.target\"\n                        (click)=\"itemClick($event, child)\" [ngClass]=\"{'ui-menuitem-link ui-corner-all':true,'ui-state-disabled':child.disabled}\" [ngStyle]=\"child.style\" [class]=\"child.styleClass\">\n                        <span class=\"ui-submenu-icon fa fa-fw fa-caret-right\" *ngIf=\"child.items\"></span>\n                        <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"ui-menuitem-text\">{{child.label}}</span>\n                    </a>\n                    <p-contextMenuSub class=\"ui-submenu\" [item]=\"child\" *ngIf=\"child.items\"></p-contextMenuSub>\n                </li>\n            </ng-template>\n        </ul>\n    ",
        providers: [__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Inject */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* forwardRef */])(function () { return ContextMenu; }))),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]) === "function" && _b || Object, ContextMenu])
], ContextMenuSub);

var ContextMenu = (function () {
    function ContextMenu(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
    }
    ContextMenu.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.container = this.containerViewChild.nativeElement;
        this.documentClickListener = this.renderer.listen('document', 'click', function () {
            _this.hide();
        });
        if (this.global) {
            this.rightClickListener = this.renderer.listen('document', 'contextmenu', function (event) {
                _this.show(event);
                event.preventDefault();
            });
        }
        else if (this.target) {
            this.rightClickListener = this.renderer.listen(this.target, 'contextmenu', function (event) {
                _this.show(event);
                event.preventDefault();
                event.stopPropagation();
            });
        }
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.container);
            else
                this.domHandler.appendChild(this.container, this.appendTo);
        }
    };
    ContextMenu.prototype.show = function (event) {
        this.position(event);
        this.visible = true;
        this.domHandler.fadeIn(this.container, 250);
        if (event) {
            event.preventDefault();
        }
    };
    ContextMenu.prototype.hide = function () {
        this.visible = false;
    };
    ContextMenu.prototype.toggle = function (event) {
        if (this.visible)
            this.hide();
        else
            this.show(event);
    };
    ContextMenu.prototype.position = function (event) {
        if (event) {
            var left = event.pageX + 1;
            var top = event.pageY + 1;
            var width = this.container.offsetParent ? this.container.offsetWidth : this.domHandler.getHiddenElementOuterWidth(this.container);
            var height = this.container.offsetParent ? this.container.offsetHeight : this.domHandler.getHiddenElementOuterHeight(this.container);
            var viewport = this.domHandler.getViewport();
            //flip
            if (left + width - document.body.scrollLeft > viewport.width) {
                left -= width;
            }
            //flip
            if (top + height - document.body.scrollTop > viewport.height) {
                top -= height;
            }
            //fit
            if (left < document.body.scrollLeft) {
                left = document.body.scrollLeft;
            }
            //fit
            if (top < document.body.scrollTop) {
                top = document.body.scrollTop;
            }
            this.container.style.left = left + 'px';
            this.container.style.top = top + 'px';
        }
    };
    ContextMenu.prototype.ngOnDestroy = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
        }
        if (this.rightClickListener) {
            this.rightClickListener();
        }
        if (this.appendTo) {
            this.el.nativeElement.appendChild(this.container);
        }
    };
    return ContextMenu;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Array)
], ContextMenu.prototype, "model", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], ContextMenu.prototype, "global", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], ContextMenu.prototype, "target", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], ContextMenu.prototype, "style", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], ContextMenu.prototype, "styleClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], ContextMenu.prototype, "appendTo", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* ViewChild */])('container'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _c || Object)
], ContextMenu.prototype, "containerViewChild", void 0);
ContextMenu = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'p-contextMenu',
        template: "\n        <div #container [ngClass]=\"'ui-contextmenu ui-menu ui-widget ui-widget-content ui-corner-all ui-helper-clearfix ui-menu-dynamic ui-shadow'\" \n            [class]=\"styleClass\" [ngStyle]=\"style\" [style.display]=\"visible ? 'block' : 'none'\">\n            <p-contextMenuSub [item]=\"model\" root=\"root\"></p-contextMenuSub>\n        </div>\n    ",
        providers: [__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Renderer2 */]) === "function" && _f || Object])
], ContextMenu);

var ContextMenuModule = (function () {
    function ContextMenuModule() {
    }
    return ContextMenuModule;
}());
ContextMenuModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]],
        exports: [ContextMenu, __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]],
        declarations: [ContextMenu, ContextMenuSub]
    })
], ContextMenuModule);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=contextmenu.js.map

/***/ }),

/***/ "./src/app/components/dom/domhandler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomHandler; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DomHandler = (function () {
    function DomHandler() {
        this.calculatedScrollbarWidth = null;
    }
    DomHandler.prototype.addClass = function (element, className) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    };
    DomHandler.prototype.addMultipleClasses = function (element, className) {
        if (element.classList) {
            var styles = className.split(' ');
            for (var i = 0; i < styles.length; i++) {
                element.classList.add(styles[i]);
            }
        }
        else {
            var styles = className.split(' ');
            for (var i = 0; i < styles.length; i++) {
                element.className += ' ' + styles[i];
            }
        }
    };
    DomHandler.prototype.removeClass = function (element, className) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    };
    DomHandler.prototype.hasClass = function (element, className) {
        if (element.classList)
            return element.classList.contains(className);
        else
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
    };
    DomHandler.prototype.siblings = function (element) {
        return Array.prototype.filter.call(element.parentNode.children, function (child) {
            return child !== element;
        });
    };
    DomHandler.prototype.find = function (element, selector) {
        return element.querySelectorAll(selector);
    };
    DomHandler.prototype.findSingle = function (element, selector) {
        return element.querySelector(selector);
    };
    DomHandler.prototype.index = function (element) {
        var children = element.parentNode.childNodes;
        var num = 0;
        for (var i = 0; i < children.length; i++) {
            if (children[i] == element)
                return num;
            if (children[i].nodeType == 1)
                num++;
        }
        return -1;
    };
    DomHandler.prototype.relativePosition = function (element, target) {
        var elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
        var targetHeight = target.offsetHeight;
        var targetWidth = target.offsetWidth;
        var targetOffset = target.getBoundingClientRect();
        var windowScrollTop = this.getWindowScrollTop();
        var viewport = this.getViewport();
        var top, left;
        if ((targetOffset.top + targetHeight + elementDimensions.height) > viewport.height) {
            top = -1 * (elementDimensions.height);
            if (targetOffset.top + top < 0) {
                top = 0;
            }
        }
        else {
            top = targetHeight;
        }
        if ((targetOffset.left + elementDimensions.width) > viewport.width)
            left = targetWidth - elementDimensions.width;
        else
            left = 0;
        element.style.top = top + 'px';
        element.style.left = left + 'px';
    };
    DomHandler.prototype.absolutePosition = function (element, target) {
        var elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
        var elementOuterHeight = elementDimensions.height;
        var elementOuterWidth = elementDimensions.width;
        var targetOuterHeight = target.offsetHeight;
        var targetOuterWidth = target.offsetWidth;
        var targetOffset = target.getBoundingClientRect();
        var windowScrollTop = this.getWindowScrollTop();
        var windowScrollLeft = this.getWindowScrollLeft();
        var viewport = this.getViewport();
        var top, left;
        if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
            top = targetOffset.top + windowScrollTop - elementOuterHeight;
            if (top < 0) {
                top = 0 + windowScrollTop;
            }
        }
        else {
            top = targetOuterHeight + targetOffset.top + windowScrollTop;
        }
        if (targetOffset.left + targetOuterWidth + elementOuterWidth > viewport.width)
            left = targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth;
        else
            left = targetOffset.left + windowScrollLeft;
        element.style.top = top + 'px';
        element.style.left = left + 'px';
    };
    DomHandler.prototype.getHiddenElementOuterHeight = function (element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        var elementHeight = element.offsetHeight;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return elementHeight;
    };
    DomHandler.prototype.getHiddenElementOuterWidth = function (element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        var elementWidth = element.offsetWidth;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return elementWidth;
    };
    DomHandler.prototype.getHiddenElementDimensions = function (element) {
        var dimensions = {};
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        dimensions.width = element.offsetWidth;
        dimensions.height = element.offsetHeight;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return dimensions;
    };
    DomHandler.prototype.scrollInView = function (container, item) {
        var borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
        var borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
        var paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
        var paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
        var containerRect = container.getBoundingClientRect();
        var itemRect = item.getBoundingClientRect();
        var offset = (itemRect.top + document.body.scrollTop) - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
        var scroll = container.scrollTop;
        var elementHeight = container.clientHeight;
        var itemHeight = this.getOuterHeight(item);
        if (offset < 0) {
            container.scrollTop = scroll + offset;
        }
        else if ((offset + itemHeight) > elementHeight) {
            container.scrollTop = scroll + offset - elementHeight + itemHeight;
        }
    };
    DomHandler.prototype.fadeIn = function (element, duration) {
        element.style.opacity = 0;
        var last = +new Date();
        var opacity = 0;
        var tick = function () {
            opacity = +element.style.opacity + (new Date().getTime() - last) / duration;
            element.style.opacity = opacity;
            last = +new Date();
            if (+opacity < 1) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
        };
        tick();
    };
    DomHandler.prototype.fadeOut = function (element, ms) {
        var opacity = 1, interval = 50, duration = ms, gap = interval / duration;
        var fading = setInterval(function () {
            opacity = opacity - gap;
            if (opacity <= 0) {
                opacity = 0;
                clearInterval(fading);
            }
            element.style.opacity = opacity;
        }, interval);
    };
    DomHandler.prototype.getWindowScrollTop = function () {
        var doc = document.documentElement;
        return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    };
    DomHandler.prototype.getWindowScrollLeft = function () {
        var doc = document.documentElement;
        return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    };
    DomHandler.prototype.matches = function (element, selector) {
        var p = Element.prototype;
        var f = p['matches'] || p.webkitMatchesSelector || p['mozMatchesSelector'] || p.msMatchesSelector || function (s) {
            return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
        };
        return f.call(element, selector);
    };
    DomHandler.prototype.getOuterWidth = function (el, margin) {
        var width = el.offsetWidth;
        if (margin) {
            var style = getComputedStyle(el);
            width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        }
        return width;
    };
    DomHandler.prototype.getHorizontalPadding = function (el) {
        var style = getComputedStyle(el);
        return parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    };
    DomHandler.prototype.getHorizontalMargin = function (el) {
        var style = getComputedStyle(el);
        return parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    };
    DomHandler.prototype.innerWidth = function (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
    };
    DomHandler.prototype.width = function (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
    };
    DomHandler.prototype.getInnerHeight = function (el) {
        var height = el.offsetHeight;
        var style = getComputedStyle(el);
        height += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
        return height;
    };
    DomHandler.prototype.getOuterHeight = function (el, margin) {
        var height = el.offsetHeight;
        if (margin) {
            var style = getComputedStyle(el);
            height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        }
        return height;
    };
    DomHandler.prototype.getHeight = function (el) {
        var height = el.offsetHeight;
        var style = getComputedStyle(el);
        height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
        return height;
    };
    DomHandler.prototype.getWidth = function (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
        return width;
    };
    DomHandler.prototype.getViewport = function () {
        var win = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0], w = win.innerWidth || e.clientWidth || g.clientWidth, h = win.innerHeight || e.clientHeight || g.clientHeight;
        return { width: w, height: h };
    };
    DomHandler.prototype.getOffset = function (el) {
        var x = el.offsetLeft;
        var y = el.offsetTop;
        while (el = el.offsetParent) {
            x += el.offsetLeft;
            y += el.offsetTop;
        }
        return { left: x, top: y };
    };
    DomHandler.prototype.getUserAgent = function () {
        return navigator.userAgent;
    };
    DomHandler.prototype.isIE = function () {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return true;
        }
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return true;
        }
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return true;
        }
        // other browser
        return false;
    };
    DomHandler.prototype.appendChild = function (element, target) {
        if (this.isElement(target))
            target.appendChild(element);
        else if (target.el && target.el.nativeElement)
            target.el.nativeElement.appendChild(element);
        else
            throw 'Cannot append ' + target + ' to ' + element;
    };
    DomHandler.prototype.removeChild = function (element, target) {
        if (this.isElement(target))
            target.removeChild(element);
        else if (target.el && target.el.nativeElement)
            target.el.nativeElement.removeChild(element);
        else
            throw 'Cannot remove ' + element + ' from ' + target;
    };
    DomHandler.prototype.isElement = function (obj) {
        return (typeof HTMLElement === "object" ? obj instanceof HTMLElement :
            obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string");
    };
    DomHandler.prototype.calculateScrollbarWidth = function () {
        if (this.calculatedScrollbarWidth !== null)
            return this.calculatedScrollbarWidth;
        var scrollDiv = document.createElement("div");
        scrollDiv.className = "ui-scrollbar-measure";
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        this.calculatedScrollbarWidth = scrollbarWidth;
        return scrollbarWidth;
    };
    DomHandler.prototype.invokeElementMethod = function (element, methodName, args) {
        element[methodName].apply(element, args);
    };
    DomHandler.prototype.clearSelection = function () {
        if (window.getSelection) {
            if (window.getSelection().empty) {
                window.getSelection().empty();
            }
            else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
                window.getSelection().removeAllRanges();
            }
        }
        else if (document['selection'] && document['selection'].empty) {
            try {
                document['selection'].empty();
            }
            catch (error) {
                //ignore IE bug
            }
        }
    };
    return DomHandler;
}());
DomHandler.zindex = 1000;
DomHandler = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], DomHandler);

//# sourceMappingURL=domhandler.js.map

/***/ }),

/***/ "./src/app/components/growl/growl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__ = __webpack_require__("./src/app/components/dom/domhandler.ts");
/* unused harmony export Growl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrowlModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Growl = (function () {
    function Growl(el, domHandler, differs) {
        this.el = el;
        this.domHandler = domHandler;
        this.differs = differs;
        this.life = 3000;
        this.immutable = true;
        this.onClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.zIndex = __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */].zindex;
        this.differ = differs.find([]).create(null);
    }
    Growl.prototype.ngAfterViewInit = function () {
        this.container = this.containerViewChild.nativeElement;
        if (this.value && this.value.length) {
            this.clearTrigger();
        }
    };
    Object.defineProperty(Growl.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            if (this.container && this.immutable) {
                this.handleValueChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    Growl.prototype.ngDoCheck = function () {
        if (!this.immutable && this.container) {
            var changes = this.differ.diff(this.value);
            if (changes) {
                this.handleValueChange();
            }
        }
    };
    Growl.prototype.handleValueChange = function () {
        if (this.preventRerender) {
            this.preventRerender = false;
            return;
        }
        this.zIndex = ++__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */].zindex;
        this.domHandler.fadeIn(this.container, 250);
        this.clearTrigger();
    };
    Growl.prototype.clearTrigger = function () {
        var _this = this;
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(function () {
            _this.removeAll();
        }, this.life);
    };
    Growl.prototype.remove = function (index, msgel) {
        var _this = this;
        this.domHandler.fadeOut(msgel, 250);
        setTimeout(function () {
            _this.preventRerender = true;
            _this.onClose.emit({ message: _this.value[index] });
            if (_this.immutable) {
                _this._value = _this.value.filter(function (val, i) { return i != index; });
                _this.valueChange.emit(_this._value);
            }
            else {
                _this._value.splice(index, 1);
            }
        }, 250);
    };
    Growl.prototype.removeAll = function () {
        var _this = this;
        if (this.value && this.value.length) {
            this.domHandler.fadeOut(this.container, 250);
            setTimeout(function () {
                _this.value.forEach(function (msg, index) { return _this.onClose.emit({ message: _this.value[index] }); });
                if (_this.immutable) {
                    _this.value = [];
                    _this.valueChange.emit(_this.value);
                }
                else {
                    _this.value.splice(0, _this.value.length);
                }
            }, 250);
        }
    };
    Growl.prototype.onMessageClick = function (i) {
        this.onClick.emit({ message: this.value[i] });
    };
    Growl.prototype.ngOnDestroy = function () {
        if (!this.sticky) {
            clearTimeout(this.timeout);
        }
    };
    return Growl;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], Growl.prototype, "sticky", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], Growl.prototype, "life", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], Growl.prototype, "style", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], Growl.prototype, "styleClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], Growl.prototype, "immutable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _a || Object)
], Growl.prototype, "onClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _b || Object)
], Growl.prototype, "onClose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _c || Object)
], Growl.prototype, "valueChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* ViewChild */])('container'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _d || Object)
], Growl.prototype, "containerViewChild", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], Growl.prototype, "value", null);
Growl = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'p-growl',
        template: "\n        <div #container [ngClass]=\"'ui-growl ui-widget'\" [style.zIndex]=\"zIndex\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div #msgel *ngFor=\"let msg of value;let i = index\" class=\"ui-growl-item-container ui-state-highlight ui-corner-all ui-shadow\" aria-live=\"polite\"\n                [ngClass]=\"{'ui-growl-message-info':msg.severity == 'info','ui-growl-message-warn':msg.severity == 'warn',\n                    'ui-growl-message-error':msg.severity == 'error','ui-growl-message-success':msg.severity == 'success'}\" (click)=\"onMessageClick(i)\">\n                <div class=\"ui-growl-item\">\n                     <div class=\"ui-growl-icon-close fa fa-close\" (click)=\"remove(i,msgel)\"></div>\n                     <span class=\"ui-growl-image fa fa-2x\"\n                        [ngClass]=\"{'fa-info-circle':msg.severity == 'info','fa-exclamation-circle':msg.severity == 'warn',\n                                'fa-close':msg.severity == 'error','fa-check':msg.severity == 'success'}\"></span>\n                     <div class=\"ui-growl-message\">\n                        <span class=\"ui-growl-title\">{{msg.summary}}</span>\n                        <p [innerHTML]=\"msg.detail\"></p>\n                     </div>\n                     <div style=\"clear: both;\"></div>\n                </div>\n            </div>\n        </div>\n    ",
        providers: [__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* IterableDiffers */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* IterableDiffers */]) === "function" && _g || Object])
], Growl);

var GrowlModule = (function () {
    function GrowlModule() {
    }
    return GrowlModule;
}());
GrowlModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */]],
        exports: [Growl],
        declarations: [Growl]
    })
], GrowlModule);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=growl.js.map

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

/***/ "./src/app/components/treetable/treetable.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_treenode__ = __webpack_require__("./src/app/components/common/treenode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_treenode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__common_treenode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_shared__ = __webpack_require__("./src/app/components/common/shared.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__ = __webpack_require__("./src/app/components/dom/domhandler.ts");
/* unused harmony export UITreeRow */
/* unused harmony export TreeTable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeTableModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var UITreeRow = (function () {
    function UITreeRow(treeTable) {
        this.treeTable = treeTable;
        this.level = 0;
        this.labelExpand = "Expand";
        this.labelCollapse = "Collapse";
    }
    UITreeRow.prototype.ngOnInit = function () {
        this.node.parent = this.parentNode;
    };
    UITreeRow.prototype.toggle = function (event) {
        if (this.node.expanded)
            this.treeTable.onNodeCollapse.emit({ originalEvent: event, node: this.node });
        else
            this.treeTable.onNodeExpand.emit({ originalEvent: event, node: this.node });
        this.node.expanded = !this.node.expanded;
        event.preventDefault();
    };
    UITreeRow.prototype.isLeaf = function () {
        return this.node.leaf == false ? false : !(this.node.children && this.node.children.length);
    };
    UITreeRow.prototype.isSelected = function () {
        return this.treeTable.isSelected(this.node);
    };
    UITreeRow.prototype.onRowClick = function (event) {
        this.treeTable.onRowClick(event, this.node);
    };
    UITreeRow.prototype.onRowRightClick = function (event) {
        this.treeTable.onRowRightClick(event, this.node);
    };
    UITreeRow.prototype.rowDblClick = function (event) {
        this.treeTable.onRowDblclick.emit({ originalEvent: event, node: this.node });
    };
    UITreeRow.prototype.onRowTouchEnd = function () {
        this.treeTable.onRowTouchEnd();
    };
    UITreeRow.prototype.resolveFieldData = function (data, field) {
        if (data && field) {
            if (field.indexOf('.') == -1) {
                return data[field];
            }
            else {
                var fields = field.split('.');
                var value = data;
                for (var i = 0, len = fields.length; i < len; ++i) {
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    };
    return UITreeRow;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_treenode__["TreeNode"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_treenode__["TreeNode"]) === "function" && _a || Object)
], UITreeRow.prototype, "node", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common_treenode__["TreeNode"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_treenode__["TreeNode"]) === "function" && _b || Object)
], UITreeRow.prototype, "parentNode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], UITreeRow.prototype, "level", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], UITreeRow.prototype, "labelExpand", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], UITreeRow.prototype, "labelCollapse", void 0);
UITreeRow = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: '[pTreeRow]',
        template: "\n        <div class=\"ui-treetable-row\" [ngClass]=\"{'ui-state-highlight':isSelected(),'ui-treetable-row-selectable':treeTable.selectionMode && node.selectable !== false}\">\n            <td *ngFor=\"let col of treeTable.columns; let i=index\" [ngStyle]=\"col.style\" [class]=\"col.styleClass\" (click)=\"onRowClick($event)\" (dblclick)=\"rowDblClick($event)\" (touchend)=\"onRowTouchEnd()\" (contextmenu)=\"onRowRightClick($event)\">\n                <a href=\"#\" *ngIf=\"i == treeTable.toggleColumnIndex\" class=\"ui-treetable-toggler fa fa-fw ui-clickable\" [ngClass]=\"{'fa-caret-down':node.expanded,'fa-caret-right':!node.expanded}\"\n                    [ngStyle]=\"{'margin-left':level*16 + 'px','visibility': isLeaf() ? 'hidden' : 'visible'}\"\n                    (click)=\"toggle($event)\"\n                    [title]=\"node.expanded ? labelCollapse : labelExpand\">\n                </a>\n                <div class=\"ui-chkbox ui-treetable-checkbox\" *ngIf=\"treeTable.selectionMode == 'checkbox' && i==0\"><div class=\"ui-chkbox-box ui-widget ui-corner-all ui-state-default\">\n                    <span class=\"ui-chkbox-icon ui-clickable fa\" \n                        [ngClass]=\"{'fa-check':isSelected(),'fa-minus':node.partialSelected}\"></span></div></div\n                ><span *ngIf=\"!col.template\">{{resolveFieldData(node.data,col.field)}}</span>\n                <p-columnBodyTemplateLoader [column]=\"col\" [rowData]=\"node\" *ngIf=\"col.template\"></p-columnBodyTemplateLoader>\n            </td>\n        </div>\n        <div *ngIf=\"node.children && node.expanded\" class=\"ui-treetable-row\" style=\"display:table-row\">\n            <td [attr.colspan]=\"treeTable.columns.length\" class=\"ui-treetable-child-table-container\">\n                <table>\n                    <tbody pTreeRow *ngFor=\"let childNode of node.children\" [node]=\"childNode\" [level]=\"level+1\" [labelExpand]=\"labelExpand\" [labelCollapse]=\"labelCollapse\" [parentNode]=\"node\"></tbody>\n                </table>\n            </td>\n        </div>\n    "
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Inject */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* forwardRef */])(function () { return TreeTable; }))),
    __metadata("design:paramtypes", [TreeTable])
], UITreeRow);

var TreeTable = (function () {
    function TreeTable(el, domHandler, changeDetector, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.changeDetector = changeDetector;
        this.renderer = renderer;
        this.labelExpand = "Expand";
        this.labelCollapse = "Collapse";
        this.metaKeySelection = true;
        this.toggleColumnIndex = 0;
        this.onRowDblclick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.selectionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onNodeSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onNodeUnselect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onNodeExpand = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onNodeCollapse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onContextMenuSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    TreeTable.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.initColumns();
        this.columnsSubscription = this.cols.changes.subscribe(function (_) {
            _this.initColumns();
            _this.changeDetector.markForCheck();
        });
    };
    TreeTable.prototype.initColumns = function () {
        this.columns = this.cols.toArray();
    };
    TreeTable.prototype.onRowClick = function (event, node) {
        var eventTarget = event.target;
        if (eventTarget.className && eventTarget.className.indexOf('ui-treetable-toggler') === 0) {
            return;
        }
        else if (this.selectionMode) {
            if (node.selectable === false) {
                return;
            }
            var metaSelection = this.rowTouched ? false : this.metaKeySelection;
            var index_1 = this.findIndexInSelection(node);
            var selected = (index_1 >= 0);
            if (this.isCheckboxSelectionMode()) {
                if (selected) {
                    this.propagateSelectionDown(node, false);
                    if (node.parent) {
                        this.propagateSelectionUp(node.parent, false);
                    }
                    this.selectionChange.emit(this.selection);
                    this.onNodeUnselect.emit({ originalEvent: event, node: node });
                }
                else {
                    this.propagateSelectionDown(node, true);
                    if (node.parent) {
                        this.propagateSelectionUp(node.parent, true);
                    }
                    this.selectionChange.emit(this.selection);
                    this.onNodeSelect.emit({ originalEvent: event, node: node });
                }
            }
            else {
                if (metaSelection) {
                    var metaKey = (event.metaKey || event.ctrlKey);
                    if (selected && metaKey) {
                        if (this.isSingleSelectionMode()) {
                            this.selectionChange.emit(null);
                        }
                        else {
                            this.selection = this.selection.filter(function (val, i) { return i != index_1; });
                            this.selectionChange.emit(this.selection);
                        }
                        this.onNodeUnselect.emit({ originalEvent: event, node: node });
                    }
                    else {
                        if (this.isSingleSelectionMode()) {
                            this.selectionChange.emit(node);
                        }
                        else if (this.isMultipleSelectionMode()) {
                            this.selection = (!metaKey) ? [] : this.selection || [];
                            this.selection = this.selection.concat([node]);
                            this.selectionChange.emit(this.selection);
                        }
                        this.onNodeSelect.emit({ originalEvent: event, node: node });
                    }
                }
                else {
                    if (this.isSingleSelectionMode()) {
                        if (selected) {
                            this.selection = null;
                            this.onNodeUnselect.emit({ originalEvent: event, node: node });
                        }
                        else {
                            this.selection = node;
                            this.onNodeSelect.emit({ originalEvent: event, node: node });
                        }
                    }
                    else {
                        if (selected) {
                            this.selection = this.selection.filter(function (val, i) { return i != index_1; });
                            this.onNodeUnselect.emit({ originalEvent: event, node: node });
                        }
                        else {
                            this.selection = (this.selection || []).concat([node]);
                            this.onNodeSelect.emit({ originalEvent: event, node: node });
                        }
                    }
                    this.selectionChange.emit(this.selection);
                }
            }
        }
        this.rowTouched = false;
    };
    TreeTable.prototype.onRowTouchEnd = function () {
        this.rowTouched = true;
    };
    TreeTable.prototype.onRowRightClick = function (event, node) {
        if (this.contextMenu) {
            var index = this.findIndexInSelection(node);
            var selected = (index >= 0);
            if (!selected) {
                if (this.isSingleSelectionMode()) {
                    this.selection = node;
                }
                else if (this.isMultipleSelectionMode()) {
                    this.selection = [node];
                    this.selectionChange.emit(this.selection);
                }
                this.selectionChange.emit(this.selection);
            }
            this.contextMenu.show(event);
            this.onContextMenuSelect.emit({ originalEvent: event, node: node });
        }
    };
    TreeTable.prototype.findIndexInSelection = function (node) {
        var index = -1;
        if (this.selectionMode && this.selection) {
            if (this.isSingleSelectionMode()) {
                index = (this.selection == node) ? 0 : -1;
            }
            else {
                for (var i = 0; i < this.selection.length; i++) {
                    if (this.selection[i] == node) {
                        index = i;
                        break;
                    }
                }
            }
        }
        return index;
    };
    TreeTable.prototype.propagateSelectionUp = function (node, select) {
        if (node.children && node.children.length) {
            var selectedCount = 0;
            var childPartialSelected = false;
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (this.isSelected(child)) {
                    selectedCount++;
                }
                else if (child.partialSelected) {
                    childPartialSelected = true;
                }
            }
            if (select && selectedCount == node.children.length) {
                this.selection = (this.selection || []).concat([node]);
                node.partialSelected = false;
            }
            else {
                if (!select) {
                    var index_2 = this.findIndexInSelection(node);
                    if (index_2 >= 0) {
                        this.selection = this.selection.filter(function (val, i) { return i != index_2; });
                    }
                }
                if (childPartialSelected || selectedCount > 0 && selectedCount != node.children.length)
                    node.partialSelected = true;
                else
                    node.partialSelected = false;
            }
        }
        var parent = node.parent;
        if (parent) {
            this.propagateSelectionUp(parent, select);
        }
    };
    TreeTable.prototype.propagateSelectionDown = function (node, select) {
        var index = this.findIndexInSelection(node);
        if (select && index == -1) {
            this.selection = (this.selection || []).concat([node]);
        }
        else if (!select && index > -1) {
            this.selection = this.selection.filter(function (val, i) { return i != index; });
        }
        node.partialSelected = false;
        if (node.children && node.children.length) {
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var child = _a[_i];
                this.propagateSelectionDown(child, select);
            }
        }
    };
    TreeTable.prototype.isSelected = function (node) {
        return this.findIndexInSelection(node) != -1;
    };
    TreeTable.prototype.isSingleSelectionMode = function () {
        return this.selectionMode && this.selectionMode == 'single';
    };
    TreeTable.prototype.isMultipleSelectionMode = function () {
        return this.selectionMode && this.selectionMode == 'multiple';
    };
    TreeTable.prototype.isCheckboxSelectionMode = function () {
        return this.selectionMode && this.selectionMode == 'checkbox';
    };
    TreeTable.prototype.hasFooter = function () {
        if (this.columns) {
            var columnsArr = this.cols.toArray();
            for (var i = 0; i < columnsArr.length; i++) {
                if (columnsArr[i].footer) {
                    return true;
                }
            }
        }
        return false;
    };
    return TreeTable;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Array)
], TreeTable.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], TreeTable.prototype, "selectionMode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], TreeTable.prototype, "selection", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], TreeTable.prototype, "style", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], TreeTable.prototype, "styleClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], TreeTable.prototype, "labelExpand", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], TreeTable.prototype, "labelCollapse", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], TreeTable.prototype, "metaKeySelection", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], TreeTable.prototype, "contextMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], TreeTable.prototype, "toggleColumnIndex", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _c || Object)
], TreeTable.prototype, "onRowDblclick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _d || Object)
], TreeTable.prototype, "selectionChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _e || Object)
], TreeTable.prototype, "onNodeSelect", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _f || Object)
], TreeTable.prototype, "onNodeUnselect", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _g || Object)
], TreeTable.prototype, "onNodeExpand", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _h || Object)
], TreeTable.prototype, "onNodeCollapse", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _j || Object)
], TreeTable.prototype, "onContextMenuSelect", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_3__common_shared__["d" /* Header */]),
    __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__common_shared__["d" /* Header */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_shared__["d" /* Header */]) === "function" && _k || Object)
], TreeTable.prototype, "header", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_3__common_shared__["c" /* Footer */]),
    __metadata("design:type", typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_3__common_shared__["c" /* Footer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_shared__["c" /* Footer */]) === "function" && _l || Object)
], TreeTable.prototype, "footer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_3__common_shared__["e" /* Column */]),
    __metadata("design:type", typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* QueryList */]) === "function" && _m || Object)
], TreeTable.prototype, "cols", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* ViewChild */])('tbl'),
    __metadata("design:type", typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _o || Object)
], TreeTable.prototype, "tableViewChild", void 0);
TreeTable = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'p-treeTable',
        template: "\n        <div [ngClass]=\"'ui-treetable ui-widget'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-treetable-header ui-widget-header\" *ngIf=\"header\">\n                <ng-content select=\"p-header\"></ng-content>\n            </div>\n            <div class=\"ui-treetable-tablewrapper\">\n                <table #tbl class=\"ui-widget-content\">\n                    <thead>\n                        <tr class=\"ui-state-default\">\n                            <th #headerCell *ngFor=\"let col of columns; let lastCol=last \"  [ngStyle]=\"col.style\" [class]=\"col.styleClass\" \n                                [ngClass]=\"'ui-state-default ui-unselectable-text'\">\n                                <span class=\"ui-column-title\" *ngIf=\"!col.headerTemplate\">{{col.header}}</span>\n                                <span class=\"ui-column-title\" *ngIf=\"col.headerTemplate\">\n                                    <p-columnHeaderTemplateLoader [column]=\"col\"></p-columnHeaderTemplateLoader>\n                                </span>\n                            </th>\n                        </tr>\n                    </thead>\n                    <tfoot *ngIf=\"hasFooter()\">\n                        <tr>\n                            <td *ngFor=\"let col of columns\" [ngStyle]=\"col.style\" [class]=\"col.styleClass\" [ngClass]=\"{'ui-state-default':true}\">\n                                <span class=\"ui-column-footer\" *ngIf=\"!col.footerTemplate\">{{col.footer}}</span>\n                                <span class=\"ui-column-footer\" *ngIf=\"col.footerTemplate\">\n                                    <p-columnFooterTemplateLoader [column]=\"col\"></p-columnFooterTemplateLoader>\n                                </span>\n                            </td>\n                        </tr>\n                    </tfoot>\n                    <tbody pTreeRow *ngFor=\"let node of value\" class=\"ui-treetable-data ui-widget-content\" [node]=\"node\" [level]=\"0\" [labelExpand]=\"labelExpand\" [labelCollapse]=\"labelCollapse\"></tbody>\n                </table>\n            </div>\n            \n            <div class=\"ui-treetable-footer ui-widget-header\" *ngIf=\"footer\">\n                <ng-content select=\"p-footer\"></ng-content>\n            </div>\n        </div>\n    ",
        providers: [__WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */]]
    }),
    __metadata("design:paramtypes", [typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ChangeDetectorRef */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Renderer2 */]) === "function" && _s || Object])
], TreeTable);

var TreeTableModule = (function () {
    function TreeTableModule() {
    }
    return TreeTableModule;
}());
TreeTableModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__common_shared__["b" /* SharedModule */]],
        exports: [TreeTable, __WEBPACK_IMPORTED_MODULE_3__common_shared__["b" /* SharedModule */]],
        declarations: [TreeTable, UITreeRow]
    })
], TreeTableModule);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
//# sourceMappingURL=treetable.js.map

/***/ }),

/***/ "./src/app/showcase/components/treetable/treetabledemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__treetabledemo__ = __webpack_require__("./src/app/showcase/components/treetable/treetabledemo.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeTableDemoRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TreeTableDemoRoutingModule = (function () {
    function TreeTableDemoRoutingModule() {
    }
    return TreeTableDemoRoutingModule;
}());
TreeTableDemoRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__treetabledemo__["a" /* TreeTableDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], TreeTableDemoRoutingModule);

//# sourceMappingURL=treetabledemo-routing.module.js.map

/***/ }),

/***/ "./src/app/showcase/components/treetable/treetabledemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">TreeTable</span>\r\n        <span>TreeTable is used to display hierarchical data in tabular format..</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-growl [value]=\"msgs\"></p-growl>\r\n    \r\n    <p-treeTable [value]=\"files1\">\r\n        <p-header>Basic</p-header>\r\n        <p-column field=\"name\" header=\"Name\"></p-column>\r\n        <p-column field=\"size\" header=\"Size\"></p-column>\r\n        <p-column field=\"type\" header=\"Type\"></p-column>\r\n    </p-treeTable>\r\n        \r\n    <p-treeTable [value]=\"files2\" selectionMode=\"single\" [(selection)]=\"selectedFile\"\r\n        (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\" [style]=\"{'margin-top':'50px'}\">\r\n        <p-header>Single Selection</p-header>\r\n        <p-column field=\"name\" header=\"Name\"></p-column>\r\n        <p-column field=\"size\" header=\"Size\"></p-column>\r\n        <p-column field=\"type\" header=\"Type\"></p-column>\r\n    </p-treeTable>\r\n    <p>Selected Node: {{selectedFile ? selectedFile.data.name : 'none'}}</p>\r\n        \r\n    <p-treeTable [value]=\"files3\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles\"\r\n        (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\" [style]=\"{'margin-top':'50px'}\">\r\n        <p-header>Multiple Selection with MetaKey</p-header>\r\n        <p-column field=\"name\" header=\"Name\"></p-column>\r\n        <p-column field=\"size\" header=\"Size\"></p-column>\r\n        <p-column field=\"type\" header=\"Type\"></p-column>\r\n    </p-treeTable>\r\n    <p>Selected Nodes: <span *ngFor=\"let file of selectedFiles\">{{file.data.name}} </span></p>\r\n    \r\n    <p-treeTable [value]=\"files4\" selectionMode=\"checkbox\" [(selection)]=\"selectedFiles2\" [style]=\"{'margin-top':'50px'}\">\r\n        <p-header>Checkbox Selection</p-header>\r\n        <p-column field=\"name\" header=\"Name\"></p-column>\r\n        <p-column field=\"size\" header=\"Size\"></p-column>\r\n        <p-column field=\"type\" header=\"Type\"></p-column>\r\n    </p-treeTable>\r\n    <p>Selected Nodes: <span *ngFor=\"let file of selectedFiles2\">{{file.data.name}} </span></p>\r\n    \r\n    <p-treeTable [value]=\"files5\" [style]=\"{'margin-top':'50px'}\">\r\n        <p-header>Editable Cells with Templating</p-header>\r\n        <p-column field=\"name\" header=\"Name\">\r\n            <ng-template let-node=\"rowData\" pTemplate=\"body\">\r\n                <input type=\"text\" [(ngModel)]=\"node.data.name\" style=\"width:100%;border-width:0px 0px 1px 0px\">\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"size\" header=\"Size\">\r\n            <ng-template let-node=\"rowData\" pTemplate=\"body\">\r\n                <input type=\"text\" [(ngModel)]=\"node.data.size\" style=\"width:100%;border-width:0px 0px 1px 0px\">\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"type\" header=\"Type\">\r\n            <ng-template let-node=\"rowData\" pTemplate=\"body\">\r\n                <input type=\"text\" [(ngModel)]=\"node.data.type\" style=\"width:100%;border-width:0px 0px 1px 0px\">\r\n            </ng-template>\r\n        </p-column>\r\n    </p-treeTable>\r\n    \r\n    <p-treeTable [value]=\"files6\" selectionMode=\"single\" [(selection)]=\"selectedFile2\" [style]=\"{'margin-top':'50px'}\" [contextMenu]=\"cm\">\r\n        <p-header>Context Menu</p-header>\r\n        <p-column field=\"name\" header=\"Name\"></p-column>\r\n        <p-column field=\"size\" header=\"Size\"></p-column>\r\n        <p-column field=\"type\" header=\"Type\"></p-column>\r\n    </p-treeTable>\r\n            \r\n    <p-contextMenu #cm [model]=\"items\"></p-contextMenu>\r\n    \r\n    <p-treeTable [value]=\"lazyFiles\" [style]=\"{'margin-top':'50px'}\"\r\n        (onNodeExpand)=\"nodeExpand($event)\">\r\n        <p-header>Lazy Loading</p-header>\r\n        <p-column field=\"name\" header=\"Name\"></p-column>\r\n        <p-column field=\"size\" header=\"Size\"></p-column>\r\n        <p-column field=\"type\" header=\"Type\"></p-column>\r\n    </p-treeTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;TreeTableModule,TreeNode,SharedModule&#125; from 'primeng/primeng';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>TreeTable component requires an array of TreeNode objects as its value. Let's begin with the TreeNode api.</p>\r\n            \r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>label</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Label of the node.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>data</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Data represented by the node.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>icon</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Icon of the node to display next to content. Not used by TreeTable.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>expandedIcon</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Icon to use in expanded state. Not used by TreeTable.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>collapsedIcon</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Icon to use in collapsed state. Not used by TreeTable.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>children</td>\r\n                            <td>TreeNode[]</td>\r\n                            <td>null</td>\r\n                            <td>An array of treenodes as children.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>leaf</td>\r\n                            <td>boolean</td>\r\n                            <td>null</td>\r\n                            <td>Specifies if the node has children. Used in lazy loading.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the node.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the node.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <p>Most of the time, nodes will be loaded from a remote datasoure, here is an example NodeService that fetches the data from a json file.</p> \r\n<pre>\r\n<code class=\"language-javascript\" pCode ngNonBindable>\r\n@Injectable()\r\nexport class NodeService &#123;\r\n    \r\n    constructor(private http: Http) &#123;&#125;\r\n\r\n    getFilesystem() &#123;\r\n        return this.http.get('showcase/resources/data/filesystem.json')\r\n                    .toPromise()\r\n                    .then(res => &lt;TreeNode[]&gt; res.json().data);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        \r\n        <p>The filesystem.json file consists of sample data. In a real application, this should be a dynamic response generated from the remote call.</p>\r\n<pre>\r\n<code class=\"language-javascript\" pCode ngNonBindable>\r\n&#123;\r\n    \"data\":\r\n    [  \r\n        &#123;  \r\n            \"data\":&#123;  \r\n                \"name\":\"Documents\",\r\n                \"size\":\"75kb\",\r\n                \"type\":\"Folder\"\r\n            &#125;,\r\n            \"children\":[\r\n                &#123;  \r\n                    \"data\":&#123;  \r\n                        \"name\":\"Work\",\r\n                        \"size\":\"55kb\",\r\n                        \"type\":\"Folder\"\r\n                    &#125;,\r\n                    \"children\":[  \r\n                        &#123;  \r\n                            \"data\":&#123;  \r\n                                \"name\":\"Expenses.doc\",\r\n                                \"size\":\"30kb\",\r\n                                \"type\":\"Document\"\r\n                            &#125;\r\n                        &#125;,\r\n                        &#123;  \r\n                            \"data\":&#123;  \r\n                                \"name\":\"Resume.doc\",\r\n                                \"size\":\"25kb\",\r\n                                \"type\":\"Resume\"\r\n                            &#125;\r\n                        &#125;\r\n                    ]\r\n                &#125;,\r\n                &#123;  \r\n                    \"data\":&#123;  \r\n                        \"name\":\"Home\",\r\n                        \"size\":\"20kb\",\r\n                        \"type\":\"Folder\"\r\n                    &#125;,\r\n                    \"children\":[  \r\n                        &#123;  \r\n                            \"data\":&#123;  \r\n                                \"name\":\"Invoices\",\r\n                                \"size\":\"20kb\",\r\n                                \"type\":\"Text\"\r\n                            &#125;\r\n                        &#125;\r\n                    ]\r\n                &#125;\r\n            ]\r\n        &#125;,\r\n        &#123;  \r\n            \"data\":&#123;  \r\n                \"name\":\"Pictures\",\r\n                \"size\":\"150kb\",\r\n                \"type\":\"Folder\"\r\n            &#125;,\r\n            \"children\":[  \r\n                &#123;  \r\n                    \"data\":&#123;  \r\n                        \"name\":\"barcelona.jpg\",\r\n                        \"size\":\"90kb\",\r\n                        \"type\":\"Picture\"\r\n                    &#125;\r\n                &#125;,\r\n                &#123;  \r\n                    \"data\":&#123;  \r\n                        \"name\":\"primeui.png\",\r\n                        \"size\":\"30kb\",\r\n                        \"type\":\"Picture\"\r\n                    &#125;\r\n                &#125;,\r\n                &#123;  \r\n                    \"data\":&#123;  \r\n                        \"name\":\"optimus.jpg\",\r\n                        \"size\":\"30kb\",\r\n                        \"type\":\"Picture\"\r\n                    &#125;\r\n                &#125;\r\n            ]\r\n        &#125;\r\n    ]\r\n&#125;\r\n</code>\r\n</pre>  \r\n\r\n        <p>The component that uses this service makes a call to getFiles() and assigns them back to files property that is bound to the tree.</p>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableDemoComponent implements OnInit &#123;\r\n    \r\n    files: TreeNode[];\r\n\r\n    constructor(private nodeService: NodeService) &#123;&#125;\r\n    \r\n    ngOnInit() &#123;\r\n        this.nodeService.getFileSystem().then(files => this.files = files);\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>         \r\n                  \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\"&gt;\r\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Column Component</h3>\r\n            <p>TreeTable utilizes the following options defined by a column component.</p>\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>field</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Property of a row data.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>header</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Header text of a column.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>footer</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Footer text of a column.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the column.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the column.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n</code>\r\n</pre>\r\n\r\n                <h3>Dynamic Colums</h3>\r\n                <p>Columns can be instantiated using an array as well by iterating with ngFor.</p>\r\n            <pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableDemoComponent implements OnInit &#123;\r\n\r\n    files: TreeNode[];\r\n\r\n    constructor(private nodeService: NodeService) &#123;&#125;\r\n    \r\n    ngOnInit() &#123;\r\n        this.nodeService.getFileSystem().then(files => this.files = files);\r\n\r\n        this.cols = [\r\n                &#123;field: 'name', header: 'Name'&#125;,\r\n                &#123;field: 'size', header: 'Size'&#125;,\r\n                &#123;field: 'type', header: 'Type'&#125;\r\n            ];\r\n        &#125;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"cars\"&gt;\r\n    &lt;p-column *ngFor=\"let col of cols\" [field]=\"col.field\" [header]=\"col.header\"&gt;&lt;/p-column&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Facets</h3>\r\n            <p>Header and Footer are the two sections aka facets that are capable of displaying custom content.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Header&#125; from 'primeng/primeng';\r\nimport &#123;Footer&#125; from 'primeng/primeng';\r\n</code>\r\n</pre>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\"&gt;\r\n    &lt;p-header&gt;List of Files&lt;/p-header&gt;\r\n    &lt;p-footer&gt;Choose from the list.&lt;/p-footer&gt;\r\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Selection</h3>\r\n            <p>TreeTable supports three selection methods, single, multiple and checkbox. Selection is enabled by setting selectionMode property and providing a single TreeNode or\r\n            an array of TreeNodes to reference the selections depending on the selection mode.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableDemoComponent implements OnInit &#123;\r\n    \r\n    files: TreeNode[];\r\n    \r\n    selectedFile: TreeNode;\r\n\r\n    constructor(private nodeService: NodeService) &#123;&#125;\r\n    \r\n    ngOnInit() &#123;\r\n        this.nodeService.getFiles().then(files => this.files = files);\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" selectionMode=\"single\" [(selection)]=\"selectedFile\"&gt;&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n<p>In multiple mode or checkbox mode, selection property should be an array. In multiple mode, items can either be selected\r\nusing metaKey or toggled individually depending on the value of metaKeySelection property value which is true by default. On touch enabled\r\ndevices metaKeySelection is turned off automatically.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n    export class TreeTableDemoComponent implements OnInit &#123;\r\n        \r\n        files: TreeNode[];\r\n        \r\n        selectedFiles: TreeNode[];\r\n\r\n        constructor(private nodeService: NodeService) &#123;&#125;\r\n        \r\n        ngOnInit() &#123;\r\n            this.nodeService.getFiles().then(files => this.files = files);\r\n        &#125;\r\n\r\n    &#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" selectionMode=\"single\" [(selection)]=\"selectedFiles\"&gt;&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>TreeTable provides onNodeSelect and onNodeUnselect options as callbacks for selection feature.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" selectionMode=\"single\" [(selection)]=\"selectedFiles\" (onNodeSelect)=\"nodeSelect($event)\"&gt;&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableDemoComponent implements OnInit &#123;\r\n    \r\n    files: TreeNode[];\r\n    \r\n    selectedFiles: TreeNode[];\r\n\r\n    constructor(private nodeService: NodeService) &#123;&#125;\r\n    \r\n    ngOnInit() &#123;\r\n        this.nodeService.getFiles().then(files => this.files = files);\r\n    &#125;\r\n    \r\n    nodeSelect(event) &#123;\r\n        //event.node = selected node\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>Selection of a particular node can be disabled by setting the selectable property of the node to false.</p>\r\n            \r\n            <h3>ContextMenu</h3>\r\n            <p>TreeTable has exclusive integration with contextmenu component. In order to attach a menu to a treetable, define a local template\r\n            variable for the menu and bind it to the contextMenu property of the treetable. This enables showing the menu whenever a row is right clicked.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" selectionMode=\"single\" [(selection)]=\"selectedFile\" [contextMenu]=\"cm\"&gt;\r\n    &lt;p-header&gt;Context Menu&lt;/p-header&gt;\r\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\r\n&lt;/p-treeTable&gt;\r\n\r\n&lt;p-contextMenu #cm [model]=\"items\"&gt;&lt;/p-contextMenu&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableDemoComponent implements OnInit &#123;\r\n    \r\n    files: TreeNode[];\r\n    \r\n    selectedFile: TreeNode;\r\n\r\n    constructor(private nodeService: NodeService) &#123;&#125;\r\n    \r\n    ngOnInit() &#123;\r\n        this.nodeService.getFiles().then(files => this.files = files);\r\n        \r\n        this.items = [\r\n            &#123;label: 'View', icon: 'fa-search', command: (event) => this.viewNode(this.selectedFile2)&#125;,\r\n            &#123;label: 'Delete', icon: 'fa-close', command: (event) => this.deleteNode(this.selectedFile2)&#125;\r\n        ];\r\n    &#125;\r\n    \r\n    viewNode(node: TreeNode) &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity: 'info', summary: 'Node Selected', detail: node.data.name&#125;);\r\n    &#125;\r\n\r\n    deleteNode(node: TreeNode) &#123;\r\n        node.parent.children = node.parent.children.filter( n => n.data !== node.data);\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity: 'info', summary: 'Node Deleted', detail: node.data.name&#125;);\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n                \r\n            <h3>Templating</h3>\r\n            <p>By default label of a treenode is displayed inside a tree node, in case you need to place custom content define a ng-template inside a column that gets \r\n                the column as an implicit variable and rowData as the node instance. Similarly, custom content can be placed at the header and footer of a column with templating.\r\n                Example below places an input field to create editable treenodes.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3&gt;ng-template&lt;/h3&gt;\r\n&lt;p-treeTable [value]=\"files\"&gt;\r\n    &lt;p:column&gt;\r\n        &lt;ng-template let-col let-node=\"rowData\" pTemplate=\"header\"&gt;\r\n            &lt;button type=\"button\" pButton label=\"Refresh\"&gt;&lt;/button&gt;\r\n        &lt;/ng-template&gt;\r\n        &lt;ng-template let-col let-node=\"rowData\" pTemplate=\"body\"&gt;\r\n            &lt;input [(ngModel)]=\"node.data.name\" type=\"text\" style=\"width:100%\"&gt;\r\n        &lt;/ng-template&gt;\r\n    &lt;/p:column&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Lazy Loading</h3>\r\n            <p>Lazy loading is handy to deal with large datasets. Instead of loading the whole tree, nodes can be loaded at onNodeExpand event.\r\n            Important part of implementing lazy loading is defining leaf property of a node as false, this will instruct tree to display an arrow icon\r\n            to indicate there are children of this node although they are not loaded yet. When the lazy node is expanded, onNodeExpand is called\r\n            and a remote call can be made to add the children to the expanded node.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" (onNodeExpand)=\"loadNode($event)\"&gt;&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableDemoComponent implements OnInit &#123;\r\n    \r\n    files: TreeNode[];\r\n    \r\n    selectedFiles: TreeNode[];\r\n\r\n    constructor(private nodeService: NodeService) &#123;&#125;\r\n    \r\n    ngOnInit() &#123;\r\n        //initial nodes\r\n        this.nodeService.getFiles().then(files => this.files = files);\r\n    &#125;\r\n    \r\n    loadNode(event) &#123;\r\n        if(event.node) &#123;\r\n            //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children\r\n            this.nodeService.getLazyFilesystem().then(nodes => event.node.children = nodes);\r\n        &#125;\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>Assume at ngOnInit treetable is initialized with a data like below that has nodes having no actual children but leaf property is set false.</p>\r\n<pre>\r\n<code class=\"language-javascript\" pCode ngNonBindable>\r\n&#123;\r\n    \"data\":\r\n    [  \r\n        &#123;  \r\n            \"data\":&#123;  \r\n                \"name\":\"Lazy Folder 0\",\r\n                \"size\":\"75kb\",\r\n                \"type\":\"Folder\"\r\n            &#125;,\r\n            \"leaf\": false\r\n        &#125;,\r\n        &#123;  \r\n            \"data\":&#123;  \r\n                \"name\":\"Lazy Folder 1\",\r\n                \"size\":\"150kb\",\r\n                \"type\":\"Folder\"\r\n            &#125;,\r\n            \"leaf\": false\r\n        &#125;\r\n    ]\r\n&#125;\r\n</code>\r\n</pre>  \r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                         <tr>\r\n                            <td>value</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of treenodes.</td>\r\n                        </tr>\r\n                         <tr>\r\n                            <td>labelExpand</td>\r\n                            <td>string</td>\r\n                            <td>Expand</td>\r\n                            <td>Tooltip and screenreader text for expand icon.</td>\r\n                        </tr>\r\n                         <tr>\r\n                            <td>labelCollapse</td>\r\n                            <td>string</td>\r\n                            <td>Collapse</td>\r\n                            <td>Tooltip and screenreader text for collapse icon.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>selectionMode</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Defines the selection mode, valid values \"single\" and \"multiple\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>selection</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>A single treenode instance or an array to refer to the selections.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>metaKeySelection</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item\r\n                            can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>toggleColumnIndex</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Index of the column that contains the toggler element.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onNodeSelect</td>\r\n                            <td>event.originalEvent: browser event <br>\r\n                                event.node: Selected node instance.</td>\r\n                            <td>Callback to invoke when a node is selected.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onNodeUnselect</td>\r\n                            <td>event.originalEvent: browser event <br>\r\n                                event.node: Unselected node instance.</td>\r\n                            <td>Callback to invoke when a node is unselected.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onNodeExpand</td>\r\n                            <td>event.originalEvent: browser event <br>\r\n                                event.node: Expanded node instance.</td>\r\n                            <td>Callback to invoke when a node is expanded.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onNodeCollapse</td>\r\n                            <td>event.originalEvent: browser event <br>\r\n                                event.node: Collapsed node instance.</td>\r\n                            <td>Callback to invoke when a node is collapsed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onContextMenuSelect</td>\r\n                            <td>event.originalEvent: browser event <br>\r\n                                event.node: Selected node instance.</td>\r\n                            <td>Callback to invoke when a node is selected with right click.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onRowDblclick</td>\r\n                            <td>event.originalEvent: Browser event <br>\r\n                                event.node: Selected node instance.</td>\r\n                            <td>Callback to invoke when a row is double clicked.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-treetable</td>\r\n                            <td>Main container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-treetable-header</td>\r\n                            <td>Header element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-treetable-tablewrapper</td>\r\n                            <td>Container of table</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-treetable-footer</td>\r\n                            <td>Footer element</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\r\n\r\n&lt;p-treeTable [value]=\"files1\"&gt;\r\n    &lt;p-header&gt;Basic&lt;/p-header&gt;\r\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\r\n&lt;/p-treeTable&gt;\r\n    \r\n&lt;p-treeTable [value]=\"files2\" selectionMode=\"single\" [(selection)]=\"selectedFile\"\r\n    (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\" [style]=\"&#123;'margin-top':'50px'&#125;\"&gt;\r\n    &lt;p-header&gt;Singe Selection&lt;/p-header&gt;\r\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\r\n&lt;/p-treeTable&gt;\r\n&lt;p&gt;Selected Node: &#123;&#123;selectedFile ? selectedFile.data.name : 'none'&#125;&#125;&lt;/p&gt;\r\n    \r\n&lt;p-treeTable [value]=\"files3\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles\" \r\n    (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\" [style]=\"&#123;'margin-top':'50px'&#125;\"&gt;\r\n    &lt;p-header&gt;Multiple Selection&lt;/p-header&gt;\r\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\r\n&lt;/p-treeTable&gt;\r\n&lt;p&gt;Selected Nodes: &lt;span *ngFor=\"let file of selectedFiles\"&gt;&#123;&#123;file.data.name&#125;&#125; &lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p-treeTable [value]=\"files4\" selectionMode=\"checkbox\" [(selection)]=\"selectedFiles2\" [style]=\"&#123;'margin-top':'50px'&#125;\"&gt;\r\n    &lt;p-header&gt;Checkbox Selection&lt;/p-header&gt;\r\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\r\n&lt;/p-treeTable&gt;\r\n&lt;p&gt;Selected Nodes: &lt;span *ngFor=\"let file of selectedFiles2\"&gt;&#123;&#123;file.data.name&#125;&#125; &lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p-treeTable [value]=\"files5\" [style]=\"&#123;'margin-top':'50px'&#125;\"&gt;\r\n    &lt;p-header&gt;Editable Cells with Templating&lt;/p-header&gt;\r\n    &lt;p-column field=\"name\" header=\"Name\"&gt;\r\n        &lt;ng-template let-node=\"rowData\" pTemplate=\"body\"&gt;\r\n            &lt;input type=\"text\" [(ngModel)]=\"node.data.name\" style=\"width:100%;border-width:0px 0px 1px 0px\"&gt;\r\n        &lt;/ng-template&gt;\r\n    &lt;/p-column&gt;\r\n    &lt;p-column field=\"size\" header=\"Size\"&gt;\r\n        &lt;ng-template let-node=\"rowData\" pTemplate=\"body\"&gt;\r\n            &lt;input type=\"text\" [(ngModel)]=\"node.data.size\" style=\"width:100%;border-width:0px 0px 1px 0px\"&gt;\r\n        &lt;/ng-template&gt;\r\n    &lt;/p-column&gt;\r\n    &lt;p-column field=\"type\" header=\"Type\"&gt;\r\n        &lt;ng-template let-node=\"rowData\" pTemplate=\"body\"&gt;\r\n            &lt;input type=\"text\" [(ngModel)]=\"node.data.type\" style=\"width:100%;border-width:0px 0px 1px 0px\"&gt;\r\n        &lt;/ng-template&gt;\r\n    &lt;/p-column&gt;\r\n&lt;/p-treeTable&gt;\r\n\r\n&lt;p-treeTable [value]=\"files6\" selectionMode=\"single\" [(selection)]=\"selectedFile2\" [style]=\"&#123;'margin-top':'50px'&#125;\" [contextMenu]=\"cm\"&gt;\r\n    &lt;p-header&gt;Context Menu&lt;/p-header&gt;\r\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\r\n&lt;/p-treeTable&gt;\r\n\r\n&lt;p-treeTable [value]=\"lazyFiles\" [style]=\"&#123;'margin-top':'50px'&#125;\"\r\n    (onNodeExpand)=\"nodeExpand($event)\"&gt;\r\n    &lt;p-header&gt;Lazy Loading&lt;/p-header&gt;\r\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableDemo implements OnInit &#123;\r\n    \r\n    msgs: Message[];\r\n    \r\n    files1: TreeNode[];\r\n    \r\n    files2: TreeNode[];\r\n    \r\n    files3: TreeNode[];\r\n    \r\n    files4: TreeNode[];\r\n    \r\n    files5: TreeNode[];\r\n    \r\n    files6: TreeNode[];\r\n            \r\n    lazyFiles: TreeNode[];\r\n        \r\n    selectedFile: TreeNode;\r\n    \r\n    selectedFile2: TreeNode;\r\n    \r\n    selectedFiles: TreeNode[];\r\n    \r\n    selectedFiles2: TreeNode[];\r\n    \r\n    items: MenuItem[];\r\n        \r\n    constructor(private nodeService: NodeService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.nodeService.getFilesystem().then(files => this.files1 = files);\r\n        this.nodeService.getFilesystem().then(files => this.files2 = files);\r\n        this.nodeService.getFilesystem().then(files => this.files3 = files);\r\n        this.nodeService.getFilesystem().then(files => this.files4 = files);\r\n        this.nodeService.getFilesystem().then(files => this.files5 = files);\r\n        this.nodeService.getFilesystem().then(files => this.files6 = files);\r\n        this.nodeService.getLazyFilesystem().then(files => this.lazyFiles = files);\r\n        \r\n        this.items = [\r\n            &#123;label: 'View', icon: 'fa-search', command: (event) => this.viewNode(this.selectedFile2)&#125;,\r\n            &#123;label: 'Delete', icon: 'fa-close', command: (event) => this.deleteNode(this.selectedFile2)&#125;\r\n        ];\r\n    &#125;\r\n    \r\n    nodeSelect(event) &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity: 'info', summary: 'Node Selected', detail: event.node.data.name&#125;);\r\n    &#125;\r\n    \r\n    nodeUnselect(event) &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity: 'info', summary: 'Node Unselected', detail: event.node.data.name&#125;);\r\n    &#125;\r\n    \r\n    nodeExpand(event) &#123;\r\n        if(event.node) &#123;\r\n            //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children\r\n            this.nodeService.getLazyFilesystem().then(nodes => event.node.children = nodes);\r\n        &#125;\r\n    &#125;\r\n    \r\n    viewNode(node: TreeNode) &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity: 'info', summary: 'Node Selected', detail: node.data.name&#125;);\r\n    &#125;\r\n\r\n    deleteNode(node: TreeNode) &#123;\r\n        node.parent.children = node.parent.children.filter( n => n.data !== node.data);\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity: 'info', summary: 'Node Deleted', detail: node.data.name&#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/treetable/treetabledemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__treetabledemo__ = __webpack_require__("./src/app/showcase/components/treetable/treetabledemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__treetabledemo_routing_module__ = __webpack_require__("./src/app/showcase/components/treetable/treetabledemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_treetable_treetable__ = __webpack_require__("./src/app/components/treetable/treetable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_growl_growl__ = __webpack_require__("./src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("./src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_contextmenu_contextmenu__ = __webpack_require__("./src/app/components/contextmenu/contextmenu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_codehighlighter_codehighlighter__ = __webpack_require__("./src/app/components/codehighlighter/codehighlighter.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableDemoModule", function() { return TreeTableDemoModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var TreeTableDemoModule = (function () {
    function TreeTableDemoModule() {
    }
    return TreeTableDemoModule;
}());
TreeTableDemoModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__treetabledemo_routing_module__["a" /* TreeTableDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_treetable_treetable__["a" /* TreeTableModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_growl_growl__["a" /* GrowlModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_8__components_contextmenu_contextmenu__["a" /* ContextMenuModule */],
            __WEBPACK_IMPORTED_MODULE_9__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__treetabledemo__["a" /* TreeTableDemo */]
        ]
    })
], TreeTableDemoModule);

//# sourceMappingURL=treetabledemo.module.js.map

/***/ }),

/***/ "./src/app/showcase/components/treetable/treetabledemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_nodeservice__ = __webpack_require__("./src/app/showcase/service/nodeservice.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeTableDemo; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeTableDemo = (function () {
    function TreeTableDemo(nodeService) {
        this.nodeService = nodeService;
    }
    TreeTableDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.nodeService.getFilesystem().then(function (files) { return _this.files1 = files; });
        this.nodeService.getFilesystem().then(function (files) { return _this.files2 = files; });
        this.nodeService.getFilesystem().then(function (files) { return _this.files3 = files; });
        this.nodeService.getFilesystem().then(function (files) { return _this.files4 = files; });
        this.nodeService.getFilesystem().then(function (files) { return _this.files5 = files; });
        this.nodeService.getFilesystem().then(function (files) { return _this.files6 = files; });
        this.nodeService.getLazyFilesystem().then(function (files) { return _this.lazyFiles = files; });
        this.items = [
            { label: 'View', icon: 'fa-search', command: function (event) { return _this.viewNode(_this.selectedFile2); } },
            { label: 'Delete', icon: 'fa-close', command: function (event) { return _this.deleteNode(_this.selectedFile2); } }
        ];
    };
    TreeTableDemo.prototype.nodeSelect = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
    };
    TreeTableDemo.prototype.nodeUnselect = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Unselected', detail: event.node.data.name });
    };
    TreeTableDemo.prototype.nodeExpand = function (event) {
        if (event.node) {
            //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
            this.nodeService.getLazyFilesystem().then(function (nodes) { return event.node.children = nodes; });
        }
    };
    TreeTableDemo.prototype.viewNode = function (node) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Selected', detail: node.data.name });
    };
    TreeTableDemo.prototype.deleteNode = function (node) {
        node.parent.children = node.parent.children.filter(function (n) { return n.data !== node.data; });
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Deleted', detail: node.data.name });
    };
    return TreeTableDemo;
}());
TreeTableDemo = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        template: __webpack_require__("./src/app/showcase/components/treetable/treetabledemo.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_nodeservice__["a" /* NodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_nodeservice__["a" /* NodeService */]) === "function" && _a || Object])
], TreeTableDemo);

var _a;
//# sourceMappingURL=treetabledemo.js.map

/***/ })

});
//# sourceMappingURL=12.chunk.js.map