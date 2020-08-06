(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/list/list.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list/list.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark purple lighten-1\" [containerInside]=\"false\">\n\n  <!-- Navbar brand -->\n  <mdb-navbar-brand><a class=\"navbar-brand\" href=\"#\">Logo</a></mdb-navbar-brand>\n\n  <!-- Collapsible content -->\n  <links>\n\n    <!-- Links -->\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link waves-light\" [routerLink]='[\"/home\"]' mdbWavesEffect>Home<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link waves-light\" [routerLink]='[\"/update\"]'mdbWavesEffect>update</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link waves-light\" [routerLink]='[\"/view\"]'mdbWavesEffect>View</a>\n      </li>\n\n      \n\n    </ul>\n    <!-- Links -->\n\n    <ul class=\"navbar-nav ml-auto nav-flex-icons\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\">1 <mdb-icon fas icon=\"envelope\"></mdb-icon></a>\n      </li>\n      <li class=\"nav-item avatar dropdown\" dropdown>\n        <a dropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\n        </a>\n        <div *dropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown dropdown-primary\" role=\"menu\">\n          <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">My account</a>\n          <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Log out</a>\n        </div>\n      </li>\n    </ul>\n  </links>\n  <!-- Collapsible content -->\n\n</mdb-navbar>\n\n"

/***/ }),

/***/ "./src/app/list/list.module.ts":
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list.page */ "./src/app/list/list.page.ts");








var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBBootstrapModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _list_page__WEBPACK_IMPORTED_MODULE_7__["ListPage"]
                    }
                ])
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_7__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/list/list.page.scss":
/*!*************************************!*\
  !*** ./src/app/list/list.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/list/list.page.ts":
/*!***********************************!*\
  !*** ./src/app/list/list.page.ts ***!
  \***********************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_service/api.service */ "./src/app/_service/api.service.ts");



var ListPage = /** @class */ (function () {
    function ListPage(api) {
        this.api = api;
        this.icons = [
            'flask',
            'wifi',
            'beer',
            'football',
            'basketball',
            'paper-plane',
            'american-football',
            'boat',
            'bluetooth',
            'build'
        ];
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
        this.data = {
            action: "getrecord",
            email_id: sessionStorage.getItem('email_id'),
            password: sessionStorage.getItem('password')
        };
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getRecords(this.data).subscribe(function (res) {
            _this.records = res;
        });
    };
    ListPage.ctorParameters = function () { return [
        { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/list/list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=list-list-module-es5.js.map