webpackJsonp([75],{

/***/ "./src/app/showcase/components/theming/theming-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theming_component__ = __webpack_require__("./src/app/showcase/components/theming/theming.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemingRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ThemingRoutingModule = (function () {
    function ThemingRoutingModule() {
    }
    return ThemingRoutingModule;
}());
ThemingRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__theming_component__["a" /* ThemingComponent */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], ThemingRoutingModule);

//# sourceMappingURL=theming-routing.module.js.map

/***/ }),

/***/ "./src/app/showcase/components/theming/theming.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Theming</span>\r\n        <span>Create your own PrimeNG experience</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <h3 style=\"margin-top:0px\">Structural CSS</h3>\r\n    <p>These style classes define the skeleton of the components and include css properties such as margin, padding, display type, dimensions and positioning.</p>\r\n\r\n    <h3>Skinning CSS</h3>\r\n    <p>Skinning defines the look and feel properties like colors, border colors, background images.</p>\r\n\r\n    <div class=\"doc-tablewrapper\">\r\n        <table class=\"doc-table\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Style Class</th>\r\n                    <th>Applies</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>ui-widget</td>\r\n                    <td>All PrimeNG components</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>ui-widget-header</td>\r\n                    <td>Header section of a component</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>ui-widget-content</td>\r\n                    <td>Content section of a component</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>ui-state-default</td>\r\n                    <td>Default state of a clickable element</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>ui-state-hover</td>\r\n                    <td>Hover state of a clickable element like mouse over</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>ui-state-active</td>\r\n                    <td>Active state of a clickable element like mouse press</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>ui-state-highlight</td>\r\n                    <td>Highlighed elements</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>ui-state-disabled</td>\r\n                    <td>Disabled elements</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>fa</td>\r\n                    <td>Icon elements based on font awesome</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n    <p>These classes are not aware of structural css like margins and paddings, mostly they only define colors. This clean separation brings great flexibility in theming because you don’t need to know each and every skinning selectors of components to change their style.</p>\r\n\r\n    <p>For example Panel component’s header section has the \"ui-panel-titlebar\" structural class, to change the color of a panel header you don’t need to about this class as \"ui-widget-header\" defines colors for panel header.</p>\r\n\r\n    <h3>Free Themes</h3>\r\n    <p>16 free themes are available for PrimeNG, these include the themeroller themes, twitter bootstrap theme and our custom themes. ThemeSwitcher on the top right section\r\n        of the page dynamically changes the theme at demo pages. Themes are distributed along with PrimeNG itself. In addition, <a href=\"https://jqueryui.com/themeroller/\">online ThemeRoller</a> designer allows you to create a PrimeNG theme.</p>\r\n\r\n    <p>Font-size of free themes use em to define the font size of the widgets using .ui-widget class. This is 1em by default and it is suggested to define a base font-size at the body element of your application to adjust the size of\r\n    components.</p>\r\n\r\n    <h3>Premium Layouts and Themes</h3>\r\n    <p>PrimeNG also supports sass based, fully customizable and easy to use <a href=\"http://www.primefaces.org/themes\">premium themes and layouts</a> such as <b>Ultima</b>\r\n        as Angular CLI projects.</p>\r\n\r\n    <a href=\"http://www.primefaces.org/layouts/ultima\">\r\n        <img alt=\"Ultima\" src=\"http://www.primefaces.org/images/market/ultima/ultima_layout_biggest.png\" style=\"width:100%\"/> \r\n    </a>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/theming/theming.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ThemingComponent = (function () {
    function ThemingComponent() {
    }
    return ThemingComponent;
}());
ThemingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        template: __webpack_require__("./src/app/showcase/components/theming/theming.component.html")
    })
], ThemingComponent);

//# sourceMappingURL=theming.component.js.map

/***/ }),

/***/ "./src/app/showcase/components/theming/theming.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theming_component__ = __webpack_require__("./src/app/showcase/components/theming/theming.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theming_routing_module__ = __webpack_require__("./src/app/showcase/components/theming/theming-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemingModule", function() { return ThemingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ThemingModule = (function () {
    function ThemingModule() {
    }
    return ThemingModule;
}());
ThemingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__theming_routing_module__["a" /* ThemingRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__theming_component__["a" /* ThemingComponent */]
        ]
    })
], ThemingModule);

//# sourceMappingURL=theming.module.js.map

/***/ })

});
//# sourceMappingURL=75.chunk.js.map