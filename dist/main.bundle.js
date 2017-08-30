webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main view/routes wrapper-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css"), __webpack_require__("../../../../@progress/kendo-theme-default/dist/all.css")],
        // prevent style encapsulation
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ViewEncapsulation */].None
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.helpers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export correctHeight */
/* harmony export (immutable) */ __webpack_exports__["a"] = detectBody;
/* harmony export (immutable) */ __webpack_exports__["b"] = smoothlyMenu;
/*
 * Inspinia js helpers:
 *
 * correctHeight() - fix the height of main wrapper
 * detectBody() - detect windows size
 * smoothlyMenu() - add smooth fade in/out on navigation show/ide
 *
 */
function correctHeight() {
    var pageWrapper = jQuery('#page-wrapper');
    var navbarHeight = jQuery('nav.navbar-default').height();
    var wrapperHeight = pageWrapper.height();
    if (navbarHeight > wrapperHeight) {
        pageWrapper.css("min-height", navbarHeight + "px");
    }
    if (navbarHeight <= wrapperHeight) {
        if (navbarHeight < jQuery(window).height()) {
            pageWrapper.css("min-height", jQuery(window).height() + "px");
        }
        else {
            pageWrapper.css("min-height", navbarHeight + "px");
        }
    }
    if (jQuery('body').hasClass('fixed-nav')) {
        if (navbarHeight > wrapperHeight) {
            pageWrapper.css("min-height", navbarHeight + "px");
        }
        else {
            pageWrapper.css("min-height", jQuery(window).height() - 60 + "px");
        }
    }
}
function detectBody() {
    if (jQuery(document).width() < 769) {
        jQuery('body').addClass('body-small');
    }
    else {
        jQuery('body').removeClass('body-small');
    }
}
function smoothlyMenu() {
    if (!jQuery('body').hasClass('mini-navbar') || jQuery('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        jQuery('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(function () {
            jQuery('#side-menu').fadeIn(400);
        }, 200);
    }
    else if (jQuery('body').hasClass('fixed-sidebar')) {
        jQuery('#side-menu').hide();
        setTimeout(function () {
            jQuery('#side-menu').fadeIn(400);
        }, 100);
    }
    else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        jQuery('#side-menu').removeAttr('style');
    }
}
//# sourceMappingURL=app.helpers.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_appviews_appviews_module__ = __webpack_require__("../../../../../src/app/views/appviews/appviews.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_common_layouts_layouts_module__ = __webpack_require__("../../../../../src/app/components/common/layouts/layouts.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// App views
//import {DashboardsModule} from "./views/dashboards/dashboards.module";

// App modules/components

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            //DashboardsModule,
            __WEBPACK_IMPORTED_MODULE_10__components_common_layouts_layouts_module__["a" /* LayoutsModule */],
            __WEBPACK_IMPORTED_MODULE_9__views_appviews_appviews_module__["a" /* AppviewsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* ROUTES */]),
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* HashLocationStrategy */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_appviews_starterview_component__ = __webpack_require__("../../../../../src/app/views/appviews/starterview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_appviews_login_component__ = __webpack_require__("../../../../../src/app/views/appviews/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_appviews_components_deliverables_deliverables_component__ = __webpack_require__("../../../../../src/app/views/appviews/components/deliverables/deliverables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_common_layouts_blankLayout_component__ = __webpack_require__("../../../../../src/app/components/common/layouts/blankLayout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_common_layouts_basicLayout_component__ = __webpack_require__("../../../../../src/app/components/common/layouts/basicLayout.component.ts");





var ROUTES = [
    // Main redirect
    { path: '', redirectTo: 'starterview', pathMatch: 'full' },
    // App views ------
    {
        path: 'workingProgram', component: __WEBPACK_IMPORTED_MODULE_4__components_common_layouts_basicLayout_component__["a" /* BasicLayoutComponent */],
        children: [
            { path: 'deliverables', component: __WEBPACK_IMPORTED_MODULE_2__views_appviews_components_deliverables_deliverables_component__["a" /* DeliverablesComponent */] },
        ]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_common_layouts_basicLayout_component__["a" /* BasicLayoutComponent */],
        children: [
            { path: 'starterview', component: __WEBPACK_IMPORTED_MODULE_0__views_appviews_starterview_component__["a" /* StarterViewComponent */] }
        ]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_common_layouts_blankLayout_component__["a" /* BlankLayoutComponent */],
        children: [
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__views_appviews_login_component__["a" /* LoginComponent */] },
        ]
    },
    // Handle all other routes
    { path: '**', redirectTo: 'starterview' }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/charts/peity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PeityDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeityModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_peity__ = __webpack_require__("../../../../peity/jquery.peity.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_peity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_peity__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import Peity chart library

var PeityDirective = (function () {
    function PeityDirective(element) {
        this.initFlag = false;
        this.element = element;
    }
    // Initialise
    PeityDirective.prototype.ngOnInit = function () {
        this.initFlag = true;
        if (this.options || this.type) {
            this.build();
        }
    };
    // Build
    PeityDirective.prototype.build = function () {
        // Check if peity is available
        if (typeof jQuery(this.element).peity === 'undefined') {
            throw new Error('Configuration issue: Embedding peity lib is mandatory');
        }
        // Let's build chart
        this.chart = jQuery(this.element.nativeElement).peity(this.type, this.options);
    };
    // Change
    PeityDirective.prototype.ngOnChanges = function () {
        if (this.initFlag) {
            this.build();
        }
    };
    return PeityDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], PeityDirective.prototype, "options", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], PeityDirective.prototype, "type", void 0);
PeityDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: 'span[peity]',
        exportAs: 'peity-chart',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], PeityDirective);

var PeityModule = (function () {
    function PeityModule() {
    }
    return PeityModule;
}());
PeityModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            PeityDirective
        ],
        exports: [
            PeityDirective
        ],
        imports: []
    })
], PeityModule);

var _a;
//# sourceMappingURL=peity.js.map

/***/ }),

/***/ "../../../../../src/app/components/charts/sparkline.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SparklineDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SparklineModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SparklineDirective = (function () {
    function SparklineDirective(element) {
        this.initFlag = false;
        this.element = element.nativeElement;
    }
    // Initialise
    SparklineDirective.prototype.ngOnInit = function () {
        this.initFlag = true;
        if (this.options || this.datasets) {
            this.build();
        }
    };
    // Build
    SparklineDirective.prototype.build = function () {
        // Check if sparkline is available
        if (typeof jQuery(this.element).sparkline() === 'undefined') {
            throw new Error('Configuration issue: Embedding sparkline lib is mandatory');
        }
        // Let's build chart
        this.chart = jQuery(this.element).sparkline(this.datasets, this.options);
    };
    // Change
    SparklineDirective.prototype.ngOnChanges = function () {
        if (this.initFlag) {
            this.build();
        }
    };
    return SparklineDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SparklineDirective.prototype, "options", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SparklineDirective.prototype, "datasets", void 0);
SparklineDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: 'span[sparkline]',
        exportAs: 'sparkline-chart',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], SparklineDirective);

var SparklineModule = (function () {
    function SparklineModule() {
    }
    return SparklineModule;
}());
SparklineModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            SparklineDirective
        ],
        exports: [
            SparklineDirective
        ],
        imports: []
    })
], SparklineModule);

var _a;
//# sourceMappingURL=sparkline.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'footer',
        template: __webpack_require__("../../../../../src/app/components/common/footer/footer.template.html")
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/footer/footer.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <!--<div class=\"pull-right\">-->\n    <!--10GB of <strong>250GB</strong> Free.-->\n  <!--</div>-->\n  <div>\n    <strong>Copyright</strong> © AfDB powered by Kavaa Global Services\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/layouts/basicLayout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers__ = __webpack_require__("../../../../../src/app/app.helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BasicLayoutComponent = (function () {
    function BasicLayoutComponent() {
    }
    BasicLayoutComponent.prototype.ngOnInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["a" /* detectBody */])();
    };
    BasicLayoutComponent.prototype.onResize = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["a" /* detectBody */])();
    };
    return BasicLayoutComponent;
}());
BasicLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'basic',
        template: __webpack_require__("../../../../../src/app/components/common/layouts/basicLayout.template.html"),
        host: {
            '(window:resize)': 'onResize()'
        }
    })
], BasicLayoutComponent);

//# sourceMappingURL=basicLayout.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/layouts/basicLayout.template.html":
/***/ (function(module, exports) {

module.exports = "<!-- Wrapper-->\n<div id=\"wrapper\">\n\n  <!-- Left navigation bar -->\n  <navigation></navigation>\n\n  <!-- Main page wrapper -->\n  <div id=\"page-wrapper\" class=\"gray-bg\">\n\n    <!-- Top navigation -->\n    <topnavbar></topnavbar>\n\n    <!-- Main view/routes wrapper-->\n    <router-outlet></router-outlet>\n\n    <!-- Footer -->\n    <footer></footer>\n\n  </div>\n  <!-- End page wrapper-->\n\n</div>\n<!-- End wrapper-->\n"

/***/ }),

/***/ "../../../../../src/app/components/common/layouts/blankLayout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BlankLayoutComponent = (function () {
    function BlankLayoutComponent() {
    }
    BlankLayoutComponent.prototype.ngAfterViewInit = function () {
        jQuery('body').addClass('gray-bg');
    };
    BlankLayoutComponent.prototype.ngOnDestroy = function () {
        jQuery('body').removeClass('gray-bg');
    };
    return BlankLayoutComponent;
}());
BlankLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'blank',
        template: __webpack_require__("../../../../../src/app/components/common/layouts/blankLayout.template.html")
    })
], BlankLayoutComponent);

//# sourceMappingURL=blankLayout.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/layouts/blankLayout.template.html":
/***/ (function(module, exports) {

module.exports = "<!-- View/routes wrapper-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/layouts/layouts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basicLayout_component__ = __webpack_require__("../../../../../src/app/components/common/layouts/basicLayout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blankLayout_component__ = __webpack_require__("../../../../../src/app/components/common/layouts/blankLayout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__topNavigationlayout_component__ = __webpack_require__("../../../../../src/app/components/common/layouts/topNavigationlayout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/common/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__("../../../../../src/app/components/common/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__topnavbar_topnavbar_component__ = __webpack_require__("../../../../../src/app/components/common/topnavbar/topnavbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__topnavbar_topnavigationnavbar_component__ = __webpack_require__("../../../../../src/app/components/common/topnavbar/topnavigationnavbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var LayoutsModule = (function () {
    function LayoutsModule() {
    }
    return LayoutsModule;
}());
LayoutsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__basicLayout_component__["a" /* BasicLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_5__blankLayout_component__["a" /* BlankLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__topNavigationlayout_component__["a" /* TopNavigationLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__topnavbar_topnavbar_component__["a" /* TopNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__topnavbar_topnavigationnavbar_component__["a" /* TopNavigationNavbarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__basicLayout_component__["a" /* BasicLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_5__blankLayout_component__["a" /* BlankLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__topNavigationlayout_component__["a" /* TopNavigationLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__topnavbar_topnavbar_component__["a" /* TopNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__topnavbar_topnavigationnavbar_component__["a" /* TopNavigationNavbarComponent */]
        ],
    })
], LayoutsModule);

//# sourceMappingURL=layouts.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/layouts/topNavigationlayout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavigationLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers__ = __webpack_require__("../../../../../src/app/app.helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TopNavigationLayoutComponent = (function () {
    function TopNavigationLayoutComponent() {
    }
    TopNavigationLayoutComponent.prototype.ngOnInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["a" /* detectBody */])();
    };
    TopNavigationLayoutComponent.prototype.onResize = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["a" /* detectBody */])();
    };
    return TopNavigationLayoutComponent;
}());
TopNavigationLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'topnavigationlayout',
        template: __webpack_require__("../../../../../src/app/components/common/layouts/topNavigationlayout.template.html"),
        host: {
            '(window:resize)': 'onResize()'
        }
    })
], TopNavigationLayoutComponent);

//# sourceMappingURL=topNavigationlayout.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/layouts/topNavigationlayout.template.html":
/***/ (function(module, exports) {

module.exports = "<!-- Wrapper-->\n<div id=\"wrapper\">\n\n  <!-- Main page wrapper -->\n  <div id=\"page-wrapper\" class=\"gray-bg\">\n\n    <!-- Top navigation -->\n    <topnavigationnavbar></topnavigationnavbar>\n\n    <!-- Main view/routes wrapper-->\n    <router-outlet></router-outlet>\n\n    <!-- Footer -->\n    <footer></footer>\n\n  </div>\n  <!-- End page wrapper-->\n\n</div>\n<!-- End wrapper-->\n"

/***/ }),

/***/ "../../../../../src/app/components/common/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_slimscroll__ = __webpack_require__("../../../../jquery-slimscroll/jquery.slimscroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_slimscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery_slimscroll__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = (function () {
    function NavigationComponent(router) {
        this.router = router;
    }
    NavigationComponent.prototype.ngAfterViewInit = function () {
        jQuery('#side-menu').metisMenu();
        if (jQuery("body").hasClass('fixed-sidebar')) {
            jQuery('.sidebar-collapse').slimscroll({
                height: '100%'
            });
        }
    };
    NavigationComponent.prototype.activeRoute = function (routename) {
        return this.router.url.indexOf(routename) > -1;
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'navigation',
        template: __webpack_require__("../../../../../src/app/components/common/navigation/navigation.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], NavigationComponent);

var _a;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/navigation/navigation.template.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-default navbar-static-side\" role=\"navigation\">\n  <div class=\"sidebar-collapse\">\n    <ul class=\"nav metismenu\" id=\"side-menu\">\n      <li class=\"nav-header\">\n        <div>\n          <img alt=\"image\" class=\"profile-element\" src=\"assets/images/Logo_bad_2.png\" width=\"180px\" height=\"90px\"/>\n\n        </div>\n        <!--<div class=\"profile-element\" dropdown>-->\n          <!--<img alt=\"image\" class=\"img-circle\" src=\"assets/images/profile_small.jpg\">-->\n          <!--<a dropdownToggle>-->\n            <!--<span class=\"block m-t-xs\"> <strong class=\"font-bold\">David Williams</strong> </span>-->\n            <!--<span class=\"text-muted text-xs block\">Non operational <b class=\"caret\"></b> </span>-->\n          <!--</a>-->\n          <!--<ul class=\"animated fadeInRight dropdown-menu\" *dropdownMenu>-->\n            <!--<li><a href=\"#\">Gérer mon profile utilisateur</a></li>-->\n            <!--<li class=\"divider\"></li>-->\n            <!--<li><a href=\"#\">Logout</a></li>-->\n          <!--</ul>-->\n        <!--</div>-->\n        <div class=\"logo-element\">\n          SRAS\n        </div>\n      </li>\n      <li [ngClass]=\"{active: activeRoute('starter')}\">\n        <a [routerLink]=\"['/starterview']\"><i class=\"fa fa-line-chart\"></i> <span class=\"nav-label\">Dashbord</span></a>\n      </li>\n      <li [ngClass]=\"{active: activeRoute('starter')}\">\n        <a [routerLink]=\"['/starterview']\"><i class=\"fa fa-building-o\"></i> <span class=\"nav-label\">Organization</span></a>\n      </li>\n      <li [ngClass]=\"{active: activeRoute('workingProgram')}\">\n        <a href=\"#\"><i class=\"fa fa-calendar-o\"></i> <span class=\"nav-label\">Working program</span> <span class=\"fa arrow\"></span> </a>\n        <ul class=\"nav nav-second-level collapse\" [ngClass]=\"{in: activeRoute('workingProgram')}\">\n          <li [ngClass]=\"{active: activeRoute('deliverables')}\"><a [routerLink]=\"['/workingProgram/deliverables']\">Activities</a></li>\n          <li [ngClass]=\"{active: activeRoute('deliverables')}\"><a [routerLink]=\"['/workingProgram/deliverables']\">Projects</a></li>\n          <li [ngClass]=\"{active: activeRoute('deliverables')}\"><a [routerLink]=\"['/workingProgram/deliverables']\">Deliverables</a></li>\n          <li [ngClass]=\"{active: activeRoute('deliverables')}\"><a [routerLink]=\"['/workingProgram/deliverables']\">Strategic alignment</a></li>\n        </ul>\n      </li>\n\n      <li [ngClass]=\"{active: activeRoute('workingProgram')}\">\n        <a href=\"#\"><i class=\"fa fa-calculator\"></i> <span class=\"nav-label\">Costing</span> <span class=\"fa arrow\"></span> </a>\n        <ul class=\"nav nav-second-level collapse\" [ngClass]=\"{in: activeRoute('workingProgram')}\">\n          <li [ngClass]=\"{active: activeRoute('deliverables')}\"><a [routerLink]=\"['/workingProgram/deliverables']\">Cost Elements</a></li>\n          <!--<li [ngClass]=\"{active: activeRoute('deliverables')}\"><a [routerLink]=\"['/workingProgram/deliverables']\">Strategic alignment</a></li>-->\n        </ul>\n      </li>\n\n\n\n      <!--<li [ngClass]=\"{active: activeRoute('deliverables')}\">-->\n        <!--<a [routerLink]=\"['/deliverables']\"><i class=\"fa fa-th-large\"></i> <span class=\"nav-label\">Deliverables</span></a>-->\n      <!--</li>-->\n      <li [ngClass]=\"{active: activeRoute('login')}\">\n        <a [routerLink]=\"['/login']\"><i class=\"fa fa-cogs\"></i> <span class=\"nav-label\">referential</span></a>\n      </li>\n      <li [ngClass]=\"{active: activeRoute('login')}\">\n        <a [routerLink]=\"['/login']\"><i class=\"fa fa-cog\"></i> <span class=\"nav-label\">Manage SRAS users</span></a>\n      </li>\n      <li [ngClass]=\"{active: activeRoute('login')}\">\n        <a [routerLink]=\"['/login']\"><i class=\"fa fa-th-large\"></i> <span class=\"nav-label\">Login example</span></a>\n      </li>\n    </ul>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/topnavbar/topnavbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers__ = __webpack_require__("../../../../../src/app/app.helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TopNavbarComponent = (function () {
    function TopNavbarComponent() {
    }
    TopNavbarComponent.prototype.toggleNavigation = function () {
        jQuery("body").toggleClass("mini-navbar");
        Object(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["b" /* smoothlyMenu */])();
    };
    return TopNavbarComponent;
}());
TopNavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'topnavbar',
        template: __webpack_require__("../../../../../src/app/components/common/topnavbar/topnavbar.template.html")
    })
], TopNavbarComponent);

//# sourceMappingURL=topnavbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/topnavbar/topnavbar.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row border-bottom\">\n  <nav class=\"navbar navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\n    <div class=\"navbar-header\">\n      <a class=\"minimalize-styl-2 btn btn-primary \" (click)=\"toggleNavigation()\"><i class=\"fa fa-bars\"></i> </a>\n      <form role=\"search\" class=\"navbar-form-custom\" method=\"post\" action=\"#\">\n        <div class=\"form-group\">\n          <br/>\n        </div>\n      </form>\n    </div>\n    <ul class=\"nav navbar-top-links navbar-right\">\n      <li  dropdown>\n        <span dropdownToggle>\n          <span class=\"block m-t-xs\"> <img alt=\"image\" class=\"img-circle\" width=\"50px\" height=\"50px\" src=\"assets/images/Photo-Pro2.jpg\" style=\"margin-bottom: 2px\">\n            Hi <strong class=\"font-bold\">Hicham </strong>, welcome to SRAS  </span>\n          <!--<span class=\"text-muted text-xs block\">Non operational <b class=\"caret\"></b> </span>-->\n        </span>\n        <ul class=\"animated fadeInRight dropdown-menu\" *dropdownMenu>\n          <li><a href=\"#\"> <i class=\"fa fa-user\"></i>  Gérer mon profile utilisateur</a></li>\n          <li class=\"divider\"></li>\n          <li><a href=\"#\"><i class=\"fa fa-sign-out\"></i>  Logout</a></li>\n        </ul>\n      </li>\n      <li class=\"divider\"></li>\n      <li dropdown>\n        <a class=\"count-info\"  dropdownToggle>\n          <i class=\"fa fa-bell\"></i> <span class=\"label label-primary\">8</span>\n        </a>\n        <ul class=\"animated fadeInRight dropdown-menu\" *dropdownMenu style=\"width: 350px;\">\n          <li>\n            <a href=\"#\">\n              <div>\n                <i class=\"fa fa-envelope fa-fw\"></i> Il y a un nouveau livrable qui a été saisie !\n                <span class=\"pull-right text-muted small\">4 minutes ago</span>\n              </div>\n            </a>\n          </li>\n          <li class=\"divider\"></li>\n          <li>\n            <div class=\"text-center link-block\">\n              <a href=\"#\">\n                <strong>See All Alerts</strong>\n                <i class=\"fa fa-angle-right\"></i>\n              </a>\n            </div>\n          </li>\n        </ul>\n      </li>\n    </ul>\n\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/topnavbar/topnavigationnavbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavigationNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers__ = __webpack_require__("../../../../../src/app/app.helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TopNavigationNavbarComponent = (function () {
    function TopNavigationNavbarComponent() {
    }
    TopNavigationNavbarComponent.prototype.toggleNavigation = function () {
        jQuery("body").toggleClass("mini-navbar");
        Object(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["b" /* smoothlyMenu */])();
    };
    return TopNavigationNavbarComponent;
}());
TopNavigationNavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'topnavigationnavbar',
        template: __webpack_require__("../../../../../src/app/components/common/topnavbar/topnavigationnavbar.template.html")
    })
], TopNavigationNavbarComponent);

//# sourceMappingURL=topnavigationnavbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/topnavbar/topnavigationnavbar.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row border-bottom white-bg\">\n  <nav class=\"navbar navbar-static-top\" role=\"navigation\">\n    <div class=\"navbar-header\">\n      <button aria-controls=\"navbar\" aria-expanded=\"false\" data-target=\"#navbar\" data-toggle=\"collapse\" class=\"navbar-toggle collapsed\" type=\"button\">\n        <i class=\"fa fa-reorder\"></i>\n      </button>\n      <a href=\"#\" class=\"navbar-brand\">SRAS</a>\n    </div>\n    <div class=\"navbar-collapse collapse\" id=\"navbar\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a aria-expanded=\"false\" role=\"button\" [routerLink]=\"['/layoutsview']\"> Back to main Layout page</a>\n        </li>\n        <li dropdown>\n          <a aria-expanded=\"false\" role=\"button\"  dropdownToggle> Menu item <span class=\"caret\"></span></a>\n          <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu\">\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n          </ul>\n        </li>\n        <li dropdown>\n          <a aria-expanded=\"false\" role=\"button\" dropdownToggle> Menu item <span class=\"caret\"></span></a>\n          <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu\">\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n          </ul>\n        </li>\n        <li dropdown>\n          <a aria-expanded=\"false\" role=\"button\" dropdownToggle> Menu item <span class=\"caret\"></span></a>\n          <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu\">\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n          </ul>\n        </li>\n        <li dropdown>\n          <a aria-expanded=\"false\" role=\"button\" dropdownToggle> Menu item <span class=\"caret\"></span></a>\n          <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu\">\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n          </ul>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-top-links navbar-right\">\n        <li>\n          <a href=\"login.html\">\n            <i class=\"fa fa-sign-out\"></i> Log out\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/appviews/appviews.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppviewsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_grid__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__starterview_component__ = __webpack_require__("../../../../../src/app/views/appviews/starterview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_component__ = __webpack_require__("../../../../../src/app/views/appviews/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_charts_peity__ = __webpack_require__("../../../../../src/app/components/charts/peity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_charts_sparkline__ = __webpack_require__("../../../../../src/app/components/charts/sparkline.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_deliverables_deliverables_component__ = __webpack_require__("../../../../../src/app/views/appviews/components/deliverables/deliverables.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppviewsModule = (function () {
    function AppviewsModule() {
    }
    return AppviewsModule;
}());
AppviewsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__starterview_component__["a" /* StarterViewComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_deliverables_deliverables_component__["a" /* DeliverablesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_charts_peity__["a" /* PeityModule */],
            __WEBPACK_IMPORTED_MODULE_8__components_charts_sparkline__["a" /* SparklineModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_grid__["a" /* GridModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__starterview_component__["a" /* StarterViewComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_deliverables_deliverables_component__["a" /* DeliverablesComponent */]
        ],
    })
], AppviewsModule);

//# sourceMappingURL=appviews.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/appviews/components/deliverables/deliverables.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/appviews/components/deliverables/deliverables.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row wrapper border-bottom white-bg page-heading\">\n  <div class=\"col-lg-8\">\n    <h2>Deliverables</h2>\n    <ol class=\"breadcrumb\">\n      <li>\n        <a href=\"index.html\">Home</a>\n      </li>\n      <li class=\"active\">\n        <strong>Deliverables</strong>\n      </li>\n    </ol>\n  </div>\n  <div class=\"col-lg-4\">\n      <br/><br/>\n      <button class=\"btn btn-primary btn-lg\">Ajouter</button>\n      <button id=\"costingBtn\" class=\"btn btn-primary btn-lg \" [disabled]=\"!selected\">Costing</button>\n    <button id=\"costingBtn\" class=\"btn btn-primary btn-lg \" [disabled]=\"!selected\">Alignment</button>\n  </div>\n</div>\n\n<div class=\"wrapper wrapper-content animated fadeInRightBig\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"text-center m-t-lg\">\n        <small>\n        </small>\n      </div>\n      <kendo-grid\n        [groupable]=\"true\"\n        [data]=\"gridView\"\n        [group]=\"groups\"\n        (groupChange)=\"groupChange($event)\"\n        (dataStateChange)=\"dataStateChange($event)\"\n        [filterable]=\"true\"\n        [pageSize]=\"state.take\"\n        [skip]=\"state.skip\"\n        [sort]=\"state.sort\"\n        [filter]=\"state.filter\"\n        [sortable]=\"true\"\n        [pageable]=\"true\"\n        [selectable]=\"true\"\n        (selectionChange)=\"selectionChange($event)\"\n      >\n        <kendo-grid-column field=\"DeliverablesID\" title=\"ID\" [width]=\"80\"></kendo-grid-column>\n        <kendo-grid-column field=\"Name\" title=\"Name\" [width]=\"300\"></kendo-grid-column>\n        <kendo-grid-column field=\"SAPCode\" title=\"SAP Code\" [width]=\"120\"></kendo-grid-column>\n        <kendo-grid-column field=\"DeliverablesType.Name\" title=\"Deliverables Type\">\n          <ng-template kendoGridGroupHeaderTemplate let-value=\"value\">\n            Project: {{value}}\n          </ng-template>\n        </kendo-grid-column>\n\n        <kendo-grid-column field=\"Project.Name\" title=\"Project\">\n          <ng-template kendoGridGroupHeaderTemplate let-value=\"value\">\n            Project: {{value}}\n          </ng-template>\n        </kendo-grid-column>\n\n\n      </kendo-grid>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/appviews/components/deliverables/deliverables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliverablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deliverables__ = __webpack_require__("../../../../../src/app/views/appviews/components/deliverables/deliverables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_kendo_data_query__ = __webpack_require__("../../../../@progress/kendo-data-query/dist/es/main.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeliverablesComponent = (function () {
    function DeliverablesComponent() {
        this.selected = false;
        this.state = {
            skip: 0,
            take: 5
        };
        this.groups = [{ field: "Project.Name" }];
        this.gridView = [];
        this.nav = document.querySelector('nav.navbar');
    }
    DeliverablesComponent.prototype.loadDeliverables1 = function () {
        this.gridView = Object(__WEBPACK_IMPORTED_MODULE_2__progress_kendo_data_query__["c" /* process */])(__WEBPACK_IMPORTED_MODULE_1__deliverables__["a" /* deliverables */], { group: this.groups });
    };
    DeliverablesComponent.prototype.loadDeliverables2 = function () {
        this.gridView = Object(__WEBPACK_IMPORTED_MODULE_2__progress_kendo_data_query__["c" /* process */])(__WEBPACK_IMPORTED_MODULE_1__deliverables__["a" /* deliverables */], this.state);
    };
    DeliverablesComponent.prototype.ngOnInit = function () {
        this.nav.className += " white-bg";
        this.loadDeliverables1();
    };
    DeliverablesComponent.prototype.groupChange = function (groups) {
        this.groups = groups;
        this.loadDeliverables1();
    };
    DeliverablesComponent.prototype.dataStateChange = function (state) {
        this.state = state;
        this.loadDeliverables2();
    };
    DeliverablesComponent.prototype.selectionChange = function (selection) {
        console.log("change");
        this.selected = true;
        // var el: HTMLElement = document.getElementById('costingBtn');
        // el.setAttribute("disabled","false");
    };
    return DeliverablesComponent;
}());
DeliverablesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-deliverables',
        template: __webpack_require__("../../../../../src/app/views/appviews/components/deliverables/deliverables.component.html"),
        styles: [__webpack_require__("../../../../../src/app/views/appviews/components/deliverables/deliverables.component.css")],
        styles: ["\n       .k-grid tr.even { background-color: #f45c42; }\n       .k-grid tr.odd { background-color: #41f4df; }\n       .k-icon {background-color: #10c4b2;}\n   "]
    }),
    __metadata("design:paramtypes", [])
], DeliverablesComponent);

//# sourceMappingURL=deliverables.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/appviews/components/deliverables/deliverables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deliverables; });
var deliverables = [
    {
        "DeliverablesID": 1,
        "DeliverablesType": {
            "DeliverablesTypeID": 1,
            "Name": "DeliverablesTypeAAAA"
        },
        "Project": {
            "ProjectID": 1,
            "SAPCOde": "AT887XX88",
            "Name": "Highway Tchad Project"
        },
        "SAPCode": "AT887XX88L1",
        "Name": "Audit"
    },
    {
        "DeliverablesID": 2,
        "DeliverablesType": {
            "DeliverablesTypeID": 1,
            "Name": "DeliverablesTypeBBBB"
        },
        "Project": {
            "ProjectID": 1,
            "SAPCOde": "AT887XX89",
            "Name": "TGV Moroocco Project"
        },
        "SAPCode": "AT887XX89L1",
        "Name": "Supervision"
    },
    {
        "DeliverablesID": 3,
        "DeliverablesType": {
            "DeliverablesTypeID": 1,
            "Name": "DeliverablesTypeBBBB"
        },
        "Project": {
            "ProjectID": 1,
            "SAPCOde": "AT887XX89",
            "Name": "TGV Moroocco Project"
        },
        "SAPCode": "AT887XX89L1",
        "Name": "Supervision"
    },
    {
        "DeliverablesID": 4,
        "DeliverablesType": {
            "DeliverablesTypeID": 1,
            "Name": "DeliverablesTypeBBBB"
        },
        "Project": {
            "ProjectID": 1,
            "SAPCOde": "AT887XX89",
            "Name": "TGV Moroocco Project"
        },
        "SAPCode": "AT887XX89L1",
        "Name": "Meeting"
    },
    {
        "DeliverablesID": 5,
        "DeliverablesType": {
            "DeliverablesTypeID": 1,
            "Name": "DeliverablesTypeBBBB"
        },
        "Project": {
            "ProjectID": 3,
            "SAPCOde": "AT887XX89",
            "Name": "Agriculture zambia north Project"
        },
        "SAPCode": "AT887XX92L1",
        "Name": "Dinner"
    }
];
//# sourceMappingURL=deliverables.js.map

/***/ }),

/***/ "../../../../../src/app/views/appviews/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/views/appviews/login.template.html")
    })
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/appviews/login.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n  <div class=\"middle-box text-center loginscreen  animated fadeInDown\">\n    <div>\n      <div>\n        <h1 class=\"logo-name\"></h1>\n      </div>\n      <h3 >Welcome to <strong>SRAS 2.0</strong></h3>\n      <p>\n      </p>\n      <p>Login in. To see SRAS 2.0 it in action.</p>\n      <form class=\"m-t\" role=\"form\" action=\"#\">\n        <div class=\"form-group\">\n          <input type=\"email\" class=\"form-control\" placeholder=\"Username\" required=\"\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary block full-width m-b\">Login</button>\n\n        <!--<a href=\"#\"><small>Forgot password?</small></a>-->\n        <!--<p class=\"text-muted text-center\"><small>Do not have an account?</small></p>-->\n        <!--<a class=\"btn btn-sm btn-white btn-block\" href=\"#\">Create an account</a>-->\n      </form>\n      <p class=\"m-t\" style=\"color: white\"> <small>copyright &copy; AfDB powered by Kavaa Global Services</small> </p>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/appviews/starter.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n  <div class=\"col-lg-10\">\n    <h2>Dashbord</h2>\n    <ol class=\"breadcrumb\">\n      <li>\n        <a href=\"index.html\">Home</a>\n      </li>\n      <li class=\"active\">\n        <strong>Dashbord</strong>\n      </li>\n    </ol>\n  </div>\n  <div class=\"col-lg-2\">\n\n  </div>\n</div>\n\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"text-center m-t-lg\">\n                <h1>\n                    Welcome to SRAS 2.0, your dashbord is under construction\n                </h1>\n                <small>\n                </small>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/appviews/starterview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarterViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarterViewComponent = (function () {
    function StarterViewComponent() {
        this.nav = document.querySelector('nav.navbar');
    }
    StarterViewComponent.prototype.ngOnInit = function () {
        this.nav.className += " white-bg";
    };
    StarterViewComponent.prototype.ngOnDestroy = function () {
        this.nav.classList.remove("white-bg");
    };
    return StarterViewComponent;
}());
StarterViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'starter',
        template: __webpack_require__("../../../../../src/app/views/appviews/starter.template.html")
    }),
    __metadata("design:paramtypes", [])
], StarterViewComponent);

//# sourceMappingURL=starterview.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map