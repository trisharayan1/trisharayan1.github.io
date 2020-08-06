(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-update-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/update/update.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/update/update.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark purple lighten-1\" [containerInside]=\"false\">\n\n  <mdb-navbar-brand><a class=\"navbar-brand\" href=\"#\">Logo</a></mdb-navbar-brand>\n\n  <links>\n\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link waves-light\" [routerLink]='[\"/home\"]' mdbWavesEffect>Home<span\n            class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link waves-light\" [routerLink]='[\"/update\"]' mdbWavesEffect>update</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link waves-light\" [routerLink]='[\"/view\"]' mdbWavesEffect>View</a>\n      </li>\n\n\n\n    </ul>\n\n    <ul class=\"navbar-nav ml-auto nav-flex-icons\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\">1 <mdb-icon fas icon=\"envelope\"></mdb-icon></a>\n      </li>\n      <li class=\"nav-item avatar dropdown\" dropdown>\n        <a dropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\n        </a>\n        <div *dropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown dropdown-primary\" role=\"menu\">\n          <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">My account</a>\n          <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Log out</a>\n        </div>\n      </li>\n    </ul>\n  </links>\n\n</mdb-navbar>\n\n"

/***/ }),

/***/ "./src/app/update/update-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/update/update-routing.module.ts ***!
  \*************************************************/
/*! exports provided: UpdatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePageRoutingModule", function() { return UpdatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _update_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update.page */ "./src/app/update/update.page.ts");




var routes = [
    {
        path: '',
        component: _update_page__WEBPACK_IMPORTED_MODULE_3__["UpdatePage"]
    }
];
var UpdatePageRoutingModule = /** @class */ (function () {
    function UpdatePageRoutingModule() {
    }
    UpdatePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UpdatePageRoutingModule);
    return UpdatePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/update/update.module.ts":
/*!*****************************************!*\
  !*** ./src/app/update/update.module.ts ***!
  \*****************************************/
/*! exports provided: UpdatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePageModule", function() { return UpdatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _update_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-routing.module */ "./src/app/update/update-routing.module.ts");
/* harmony import */ var _update_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update.page */ "./src/app/update/update.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");








var UpdatePageModule = /** @class */ (function () {
    function UpdatePageModule() {
    }
    UpdatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBBootstrapModule"].forRoot(),
                _update_routing_module__WEBPACK_IMPORTED_MODULE_1__["UpdatePageRoutingModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NO_ERRORS_SCHEMA"]],
            declarations: [_update_page__WEBPACK_IMPORTED_MODULE_2__["UpdatePage"]]
        })
    ], UpdatePageModule);
    return UpdatePageModule;
}());



/***/ }),

/***/ "./src/app/update/update.page.scss":
/*!*****************************************!*\
  !*** ./src/app/update/update.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 30px 10px;\n}\n\n.update {\n  max-width: none !important;\n}\n\nsection {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlL0M6XFxVc2Vyc1xcd2luMTBcXERlc2t0b3BcXHZhY2NpbmUvc3JjXFxhcHBcXHVwZGF0ZVxcdXBkYXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdXBkYXRlL3VwZGF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS91cGRhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogMzBweCAxMHB4O1xyXG59XHJcblxyXG4udXBkYXRle1xyXG4gICAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnNlY3Rpb257XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59IiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMzBweCAxMHB4O1xufVxuXG4udXBkYXRlIHtcbiAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbnNlY3Rpb24ge1xuICBwYWRkaW5nOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/update/update.page.ts":
/*!***************************************!*\
  !*** ./src/app/update/update.page.ts ***!
  \***************************************/
/*! exports provided: UpdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePage", function() { return UpdatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_service/api.service */ "./src/app/_service/api.service.ts");



var UpdatePage = /** @class */ (function () {
    function UpdatePage(api) {
        this.api = api;
        this.appPages = [
            {
                title: 'Home',
                url: '/home',
                icon: 'home'
            },
            {
                title: 'Vaccine List',
                url: '/list',
                icon: 'list'
            },
            {
                title: 'Update Vaccine',
                url: '/update',
                icon: 'list'
            }
        ];
    }
    UpdatePage.prototype.ngOnInit = function () {
    };
    UpdatePage.ctorParameters = function () { return [
        { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    UpdatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! raw-loader!./update.page.html */ "./node_modules/raw-loader/index.js!./src/app/update/update.page.html"),
            styles: [__webpack_require__(/*! ./update.page.scss */ "./src/app/update/update.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], UpdatePage);
    return UpdatePage;
}());



/***/ })

}]);
//# sourceMappingURL=update-update-module-es5.js.map