webpackJsonp([76],{

/***/ "./src/app/showcase/components/support/support-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__support_component__ = __webpack_require__("./src/app/showcase/components/support/support.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SupportRoutingModule = (function () {
    function SupportRoutingModule() {
    }
    return SupportRoutingModule;
}());
SupportRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__support_component__["a" /* SupportComponent */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], SupportRoutingModule);

//# sourceMappingURL=support-routing.module.js.map

/***/ }),

/***/ "./src/app/showcase/components/support/support.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Support</span>\r\n        <span>Professional support for the open source innovation</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section support\">\r\n    <div class=\"support-image\">\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-6\">\r\n                <h3>PrimeNG PRO Support</h3>\r\n                <p>With PrimeNG PRO, it's easy to support, tune and add features to PrimeNG as if it were an in-house framework.</p>\r\n                <a class=\"home-button\" href=\"mailto:primeng@primetek.com.tr\">GET A QUOTE</a>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-6\">\r\n                <img alt=\"PRO\" src=\"assets/showcase/images/home/icon-pro.svg\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <p>PrimeNG PRO is a term based commercial support service. With the exclusive services of Pro account, \r\n                    you no longer need to post your questions in the community forum and your issues to community issue tracker.</p>\r\n                    \r\n    <h4>Standard PRO Services</h4>\r\n    <ul>\r\n        <li>Access to pro.primefaces.org</li>\r\n        <li>Response within 1 business day.</li>\r\n        <li>Defect patches.</li>\r\n        <li>Private branch management in case you need.</li>\r\n        <li>Customized builds.</li>\r\n        <li>Unlimited number of cases.</li>\r\n        <li>Remote desktop connection.</li>\r\n        <li>Conference calls for discussions.</li>\r\n        <li>High priority to your issues.</li>\r\n        <li>Notifications about security updates.</li>\r\n    </ul>\r\n                \r\n    <h4>New Features (Optional)</h4>\t\t\t\r\n                \r\n    <p>New feature and enhancement requests are not available in core services and provided via an hour based model instead.  When you have a feature request we provide an estimate, if you confirm we deliver your request within an estimated timeframe and deduct the amount of work from your hours. These requests can be;</p>\r\n\r\n    <ul>\r\n        <li>New components.</li>\r\n        <li>New functionality to existing components.</li>\r\n        <li>Changing the way a certain functionality is implemented.</li>\r\n        <li>Accessibility improvements.</li>\r\n        <li>Proof of Concept implementations of a use case.</li>\r\n        <li>Code reviews to offer best practices.</li>\r\n    </ul>\r\n    \r\n    <p>You can purchase additional hours along with the subscription and also anytime during your subscription period. If your subscription term ends with unused hours, they will be added to your new subscription term in case you extend.</p>    \r\n\r\n    <h3 style=\"margin-top:0px\">Community Support</h3>\r\n    <p><a href=\"https://forum.primefaces.org/viewforum.php?f=35&sid=45e34922772fa61d6741489375083cde\">Forum</a> is where the community users gather to seek support, post topics and discuss the technology. PrimeTek does not\r\n    guarantee response at forum although it is monitored and maintained by our staff. If you need to secure our response within 4 business hours, you may consider PrimeNG PRO support.</p>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/support/support.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SupportComponent = (function () {
    function SupportComponent() {
    }
    return SupportComponent;
}());
SupportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        template: __webpack_require__("./src/app/showcase/components/support/support.component.html")
    })
], SupportComponent);

//# sourceMappingURL=support.component.js.map

/***/ }),

/***/ "./src/app/showcase/components/support/support.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__support_component__ = __webpack_require__("./src/app/showcase/components/support/support.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__support_routing_module__ = __webpack_require__("./src/app/showcase/components/support/support-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportModule", function() { return SupportModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SupportModule = (function () {
    function SupportModule() {
    }
    return SupportModule;
}());
SupportModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__support_routing_module__["a" /* SupportRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__support_component__["a" /* SupportComponent */]
        ]
    })
], SupportModule);

//# sourceMappingURL=support.module.js.map

/***/ })

});
//# sourceMappingURL=76.chunk.js.map