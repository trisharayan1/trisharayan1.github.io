(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>register</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form>\n        <div class=\"user-ragistration\">\n            <div class=\"container register\">\n                <div class=\"row\">\n                    <div class=\"col-md-3 register-left\">\n                        <!-- <img src=\"https://image.ibb.co/n7oTvU/logo_white.png\" alt=\"\"/> -->\n                        <h3>Already a member?</h3>\n                        <p> login to access your account</p>\n                        <input (click)=\"goToPage('login')\" name=\"\" value=\"Login\" /><br />\n                    </div>\n                    <div class=\"col-md-9 register-right\">\n                        <ul class=\"nav nav-tabs nav-justified\" id=\"myTab\" role=\"tablist\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link active\" id=\"home-tab\" #role data-toggle=\"tab\" href=\"#home\" role=\"tab\"\n                                    aria-controls=\"home\" aria-selected=\"true\">Parent</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\"\n                                    aria-controls=\"profile\" aria-selected=\"false\">Doctor</a>\n                            </li>\n                        </ul>\n                        <div class=\"tab-content\" id=\"myTabContent\">\n                            <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                                <h3 class=\"register-heading\">Apply as a Parent</h3>\n                                <div class=\"row register-form\">\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Father/Mother Name\"\n                                                name=\"user_name\" [(ngModel)]=\"user_name\" value=\"\" />\n                                        </div>\n                                        \n                                        <div class=\"form-group\">\n                                            <input type=\"password\" class=\"form-control\" placeholder=\"Password\"\n                                                name=\"pass\" [(ngModel)]=\"pass\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"National Id\"\n                                                name=\"national_id\" [(ngModel)]=\"national_id\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Address\"\n                                                name=\"address\" [(ngModel)]=\"address\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            Date of birth\n                                            <input type=\"date\" class=\"form-control\" placeholder=\"Date of birth\"\n                                                name=\"dob\" [(ngModel)]=\"dob\" value=\"\" />\n                                        </div>\n                                        \n                                        <!-- <div class=\"form-group\">\n                                            <div class=\"maxl\">\n                                                <label class=\"radio inline\">\n                                                    <input type=\"radio\" name=\"gender\" value=\"male\" [(ngModel)]=\"gender\"\n                                                        checked>\n                                                    <span> Male </span>\n                                                </label>\n                                                <label class=\"radio inline\">\n                                                    <input type=\"radio\" name=\"gender\" [(ngModel)]=\"gender\"\n                                                        value=\"female\">\n                                                    <span>Female </span>\n                                                </label>\n                                            </div>\n                                        </div> -->\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <input type=\"email\" class=\"form-control\" placeholder=\"Your Email\"\n                                                name=\"email\" [(ngModel)]=\"email\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" name=\"city\" class=\"form-control\" [(ngModel)]=\"city\"\n                                                placeholder=\"City\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" name=\"state\" [(ngModel)]=\"state\"\n                                                placeholder=\"State\" value=\"\" />\n                                        </div>\n                                        \n                                        <div class=\"form-group\">\n                                            <select class=\"form-control\" name=\"country\" [(ngModel)]=\"country\">\n                                                <option class=\"hidden\" selected disabled>Please select your country\n                                                </option>\n                                                <option>India</option>\n                                                <option>Nepal</option>\n                                                <option>Mexico</option>\n                                                <option>Costa Rica</option>\n                                                <option>USA</option>\n\n                                            </select>\n                                        </div>\n                                        <input type=\"button\" class=\"btnRegister\" (click)=\"register()\"\n                                            value=\"Register\" />\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"tab-pane fade show\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n                                <h3 class=\"register-heading\">Apply as a Doctor</h3>\n                                <div class=\"row register-form\">\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Name\"\n                                                name=\"name\" [(ngModel)]=\"user_name\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Hospital/Clinic Name\"\n                                                name=\"hospitalName\" [(ngModel)]=\"hospitalName\" value=\"\" />\n                                        </div>\n                                        \n                                        <div class=\"form-group\">\n                                            <input type=\"password\" class=\"form-control\" placeholder=\"Password\"\n                                                name=\"pass\" [(ngModel)]=\"pass\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Doctors License Id\"\n                                                name=\"license_id\" [(ngModel)]=\"license_id\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Address\"\n                                                name=\"address\" [(ngModel)]=\"address\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <div class=\"maxl\">\n                                                <label class=\"radio inline\">\n                                                    <input type=\"radio\" name=\"gender\" value=\"male\" [(ngModel)]=\"gender\"\n                                                        checked>\n                                                    <span> Male </span>\n                                                </label>\n                                                <label class=\"radio inline\">\n                                                    <input type=\"radio\" name=\"gender\" [(ngModel)]=\"gender\"\n                                                        value=\"female\">\n                                                    <span>Female </span>\n                                                </label>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <input type=\"email\" class=\"form-control\" placeholder=\"Your Email \"\n                                                name=\"email\" [(ngModel)]=\"email\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Business National Id \"\n                                                name=\"national_id\" [(ngModel)]=\"bussiness_national_id\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" name=\"city\" class=\"form-control\" [(ngModel)]=\"city\"\n                                                placeholder=\"City\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" name=\"state\" [(ngModel)]=\"state\"\n                                                placeholder=\"State\" value=\"\" />\n                                        </div>\n                                        \n                                        <div class=\"form-group\">\n                                            <select class=\"form-control\" name=\"country\" [(ngModel)]=\"country\">\n                                                <option class=\"hidden\" selected disabled>Please select your country\n                                                </option>\n                                                <option>India</option>\n                                                <option>Nepal</option>\n                                                <option>Mexico</option>\n                                                <option>Costa Rica</option>\n                                                <option>USA</option>\n\n                                            </select>\n                                        </div>\n                                        <input type=\"button\" class=\"btnRegister\" (click)=\"register()\"\n                                            value=\"Register\" />\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/register/register-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register {\n  background: -webkit-gradient(linear, left top, right top, color-stop(0, #3931af), to(#00c6ff));\n  background: linear-gradient(to right, #3931af 0, #00c6ff 100%);\n  margin-top: 3%;\n  padding: 3%;\n  overflow: hidden;\n}\n.register .register-form {\n  padding: 10%;\n  margin-top: 10%;\n}\n@media (max-width: 991px) {\n  .register .register-form {\n    margin-top: 16%;\n  }\n}\n@media (max-width: 667px) {\n  .register .register-form {\n    margin-top: 20%;\n  }\n}\n.register .nav-tabs {\n  margin-top: 3%;\n  border: none;\n  background: #0062cc;\n  border-radius: 1.5rem;\n  width: 28%;\n  float: right;\n}\n@media (max-width: 991px) {\n  .register .nav-tabs {\n    width: 33%;\n    margin-top: 8%;\n  }\n}\n.register .nav-tabs .nav-link {\n  padding: 2%;\n  height: 34px;\n  font-weight: 600;\n  color: #fff;\n  border-top-right-radius: 1.5rem;\n  border-bottom-right-radius: 1.5rem;\n}\n.register .nav-tabs .nav-link:hover {\n  border: none;\n}\n.register .nav-tabs .nav-link.active {\n  width: 100px;\n  color: #0062cc;\n  border: 2px solid #0062cc;\n  border-top-left-radius: 1.5rem;\n  border-bottom-left-radius: 1.5rem;\n}\n.register-left {\n  text-align: center;\n  color: #fff;\n  margin-top: 4%;\n}\n.register-left input {\n  border: none;\n  border-radius: 1.5rem;\n  padding: 2%;\n  width: 60%;\n  background: #f8f9fa;\n  font-weight: bold;\n  color: #383d41;\n  margin-top: 30%;\n  margin-bottom: 3%;\n  cursor: pointer;\n}\n.register-left img {\n  margin-top: 15%;\n  margin-bottom: 5%;\n  width: 25%;\n  -webkit-animation: mover 1s infinite alternate;\n          animation: mover 1s infinite alternate;\n}\n.register-left p {\n  font-weight: lighter;\n  padding: 12%;\n  margin-top: -9%;\n}\n.register-right {\n  background: #f8f9fa;\n  border-top-left-radius: 10% 50%;\n  border-bottom-left-radius: 10% 50%;\n}\n@-webkit-keyframes mover {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n  }\n}\n@keyframes mover {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n  }\n}\n.btnRegister {\n  float: right;\n  margin-top: 10%;\n  border: none;\n  border-radius: 1.5rem;\n  padding: 2%;\n  background: #0062cc;\n  color: #fff;\n  font-weight: 600;\n  width: 50%;\n  cursor: pointer;\n}\n.register-heading {\n  text-align: center;\n  margin-top: 8%;\n  margin-bottom: -15%;\n  color: #495057;\n}\n@media (max-width: 991px) {\n  .register-heading {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFx3aW4xMFxcRGVza3RvcFxcdmFjY2luZS9zcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0MsOEZBQUE7RUFBQSw4REFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNQRDtBRFFDO0VBQ0MsWUFBQTtFQUNBLGVBQUE7QUNORjtBRE9FO0VBSEQ7SUFJRSxlQUFBO0VDSkQ7QUFDRjtBREtFO0VBTkQ7SUFPRSxlQUFBO0VDRkQ7QUFDRjtBRElDO0VBQ0MsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFyQjBCO0VBdUIxQixxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDSEY7QURJRTtFQVJEO0lBU0UsVUFBQTtJQUNFLGNBQUE7RUNESDtBQUNGO0FERUU7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FyQ0s7RUF1Q0wsK0JBQUE7RUFFQSxrQ0FBQTtBQ0ZIO0FER0c7RUFDQyxZQUFBO0FDREo7QURHRztFQUNDLFlBQUE7RUFDQSxjQTVDd0I7RUE2Q3hCLHlCQUFBO0VBRUEsOEJBQUE7RUFFQSxpQ0FBQTtBQ0hKO0FEUUE7RUFDQyxrQkFBQTtFQUNBLFdBM0RPO0VBNERQLGNBQUE7QUNMRDtBRE1DO0VBQ0MsWUFBQTtFQUVBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFsRXVCO0VBbUV2QixpQkFBQTtFQUNBLGNBbkV1QjtFQW9FdkIsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0xGO0FET0M7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ0xGO0FET0M7RUFDQyxvQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDTEY7QURRQTtFQUNDLG1CQXRGd0I7RUF3RnhCLCtCQUFBO0VBRUEsa0NBQUE7QUNQRDtBRFNBO0VBQ0M7SUFFQyxnQ0FBQTtZQUFBLHdCQUFBO0VDUEE7RURTRDtJQUVDLG9DQUFBO1lBQUEsNEJBQUE7RUNSQTtBQUNGO0FEVUE7RUFDQztJQUVDLGdDQUFBO1lBQUEsd0JBQUE7RUNUQTtFRFdEO0lBRUMsb0NBQUE7WUFBQSw0QkFBQTtFQ1ZBO0FBQ0Y7QURZQTtFQUNDLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUVBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQXJIMkI7RUFzSDNCLFdBekhPO0VBMEhQLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNYRDtBRGFBO0VBQ0Msa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQTlIb0I7QUNvSHJCO0FEV0M7RUFMRDtJQU1HLGlCQUFBO0VDUkQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcl9nb3Zlcm5vcl9iYXlfYXBwcm94OiByZ2JhKDU3LDQ5LDE3NSwxKTtcclxuJGNvbG9yX2JyaWdodF90dXJxdW9pc2VfYXBwcm94OiByZ2JhKDAsMTk4LDI1NSwxKTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kY29sb3JfYWxhYmFzdGVyX2FwcHJveDogI2Y4ZjlmYTtcclxuJGNvbG9yX3NoaXBfZ3JheV9hcHByb3g6ICMzODNkNDE7XHJcbiRjb2xvcl9zY2llbmNlX2JsdWVfYXBwcm94OiAjMDA2MmNjO1xyXG4kY29sb3JfYWJiZXlfYXBwcm94OiAjNDk1MDU3O1xyXG5cclxuLnJlZ2lzdGVyIHtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvcl9nb3Zlcm5vcl9iYXlfYXBwcm94IDAsICRjb2xvcl9icmlnaHRfdHVycXVvaXNlX2FwcHJveCAxMDAlKTtcclxuXHRtYXJnaW4tdG9wOiAzJTtcclxuXHRwYWRkaW5nOiAzJTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdC5yZWdpc3Rlci1mb3JtIHtcclxuXHRcdHBhZGRpbmc6IDEwJTtcclxuXHRcdG1hcmdpbi10b3A6IDEwJTtcclxuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCl7XHJcblx0XHRcdG1hcmdpbi10b3A6IDE2JTtcclxuXHRcdH1cclxuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA2NjdweCl7XHJcblx0XHRcdG1hcmdpbi10b3A6IDIwJTtcclxuXHRcdH1cclxuXHR9XHJcblx0Lm5hdi10YWJzIHtcclxuXHRcdG1hcmdpbi10b3A6IDMlO1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0YmFja2dyb3VuZDogJGNvbG9yX3NjaWVuY2VfYmx1ZV9hcHByb3g7XHJcblx0XHQvL0luc3RlYWQgb2YgdGhlIGxpbmUgYmVsb3cgeW91IGNvdWxkIHVzZSBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRyYWRpdXMsICR2ZXJ0aWNhbC1yYWRpdXMpXHJcblx0XHRib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcblx0XHR3aWR0aDogMjglO1xyXG5cdFx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KXtcclxuXHRcdFx0d2lkdGg6IDMzJTtcclxuICAgIFx0bWFyZ2luLXRvcDogOCU7XHJcblx0XHR9XHJcblx0XHQubmF2LWxpbmsge1xyXG5cdFx0XHRwYWRkaW5nOiAyJTtcclxuXHRcdFx0aGVpZ2h0OiAzNHB4O1xyXG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRjb2xvcjogJHdoaXRlO1xyXG5cdFx0XHQvL0luc3RlYWQgb2YgdGhlIGxpbmUgYmVsb3cgeW91IGNvdWxkIHVzZSBAaW5jbHVkZSBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cygkcmFkaXVzKVxyXG5cdFx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMS41cmVtO1xyXG5cdFx0XHQvL0luc3RlYWQgb2YgdGhlIGxpbmUgYmVsb3cgeW91IGNvdWxkIHVzZSBAaW5jbHVkZSBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cygkcmFkaXVzKVxyXG5cdFx0XHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMS41cmVtO1xyXG5cdFx0XHQmOmhvdmVyIHtcclxuXHRcdFx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRcdH1cclxuXHRcdFx0Ji5hY3RpdmUge1xyXG5cdFx0XHRcdHdpZHRoOiAxMDBweDtcclxuXHRcdFx0XHRjb2xvcjogJGNvbG9yX3NjaWVuY2VfYmx1ZV9hcHByb3g7XHJcblx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgJGNvbG9yX3NjaWVuY2VfYmx1ZV9hcHByb3g7XHJcblx0XHRcdFx0Ly9JbnN0ZWFkIG9mIHRoZSBsaW5lIGJlbG93IHlvdSBjb3VsZCB1c2UgQGluY2x1ZGUgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cygkcmFkaXVzKVxyXG5cdFx0XHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEuNXJlbTtcclxuXHRcdFx0XHQvL0luc3RlYWQgb2YgdGhlIGxpbmUgYmVsb3cgeW91IGNvdWxkIHVzZSBAaW5jbHVkZSBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzKCRyYWRpdXMpXHJcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMS41cmVtO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbi5yZWdpc3Rlci1sZWZ0IHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6ICR3aGl0ZTtcclxuXHRtYXJnaW4tdG9wOiA0JTtcclxuXHRpbnB1dCB7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHQvL0luc3RlYWQgb2YgdGhlIGxpbmUgYmVsb3cgeW91IGNvdWxkIHVzZSBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRyYWRpdXMsICR2ZXJ0aWNhbC1yYWRpdXMpXHJcblx0XHRib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcblx0XHRwYWRkaW5nOiAyJTtcclxuXHRcdHdpZHRoOiA2MCU7XHJcblx0XHRiYWNrZ3JvdW5kOiAkY29sb3JfYWxhYmFzdGVyX2FwcHJveDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0Y29sb3I6ICRjb2xvcl9zaGlwX2dyYXlfYXBwcm94O1xyXG5cdFx0bWFyZ2luLXRvcDogMzAlO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMyU7XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0fVxyXG5cdGltZyB7XHJcblx0XHRtYXJnaW4tdG9wOiAxNSU7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA1JTtcclxuXHRcdHdpZHRoOiAyNSU7XHJcblx0XHRhbmltYXRpb246IG1vdmVyIDFzIGluZmluaXRlIGFsdGVybmF0ZTtcclxuXHR9XHJcblx0cCB7XHJcblx0XHRmb250LXdlaWdodDogbGlnaHRlcjtcclxuXHRcdHBhZGRpbmc6IDEyJTtcclxuXHRcdG1hcmdpbi10b3A6IC05JTtcclxuXHR9XHJcbn1cclxuLnJlZ2lzdGVyLXJpZ2h0IHtcclxuXHRiYWNrZ3JvdW5kOiAkY29sb3JfYWxhYmFzdGVyX2FwcHJveDtcclxuXHQvL0luc3RlYWQgb2YgdGhlIGxpbmUgYmVsb3cgeW91IGNvdWxkIHVzZSBAaW5jbHVkZSBib3JkZXItdG9wLWxlZnQtcmFkaXVzKCRyYWRpdXMpXHJcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAlIDUwJTtcclxuXHQvL0luc3RlYWQgb2YgdGhlIGxpbmUgYmVsb3cgeW91IGNvdWxkIHVzZSBAaW5jbHVkZSBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzKCRyYWRpdXMpXHJcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAlIDUwJTtcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZXIge1xyXG5cdDAlIHtcclxuXHRcdC8vSW5zdGVhZCBvZiB0aGUgbGluZSBiZWxvdyB5b3UgY291bGQgdXNlIEBpbmNsdWRlIHRyYW5zZm9ybSgkc2NhbGUsICRyb3RhdGUsICR0cmFuc3gsICR0cmFuc3ksICRza2V3eCwgJHNrZXd5LCAkb3JpZ2lueCwgJG9yaWdpbnkpXHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcblx0fVxyXG5cdDEwMCUge1xyXG5cdFx0Ly9JbnN0ZWFkIG9mIHRoZSBsaW5lIGJlbG93IHlvdSBjb3VsZCB1c2UgQGluY2x1ZGUgdHJhbnNmb3JtKCRzY2FsZSwgJHJvdGF0ZSwgJHRyYW5zeCwgJHRyYW5zeSwgJHNrZXd4LCAkc2tld3ksICRvcmlnaW54LCAkb3JpZ2lueSlcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcblx0fVxyXG59XHJcbkBrZXlmcmFtZXMgbW92ZXIge1xyXG5cdDAlIHtcclxuXHRcdC8vSW5zdGVhZCBvZiB0aGUgbGluZSBiZWxvdyB5b3UgY291bGQgdXNlIEBpbmNsdWRlIHRyYW5zZm9ybSgkc2NhbGUsICRyb3RhdGUsICR0cmFuc3gsICR0cmFuc3ksICRza2V3eCwgJHNrZXd5LCAkb3JpZ2lueCwgJG9yaWdpbnkpXHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcblx0fVxyXG5cdDEwMCUge1xyXG5cdFx0Ly9JbnN0ZWFkIG9mIHRoZSBsaW5lIGJlbG93IHlvdSBjb3VsZCB1c2UgQGluY2x1ZGUgdHJhbnNmb3JtKCRzY2FsZSwgJHJvdGF0ZSwgJHRyYW5zeCwgJHRyYW5zeSwgJHNrZXd4LCAkc2tld3ksICRvcmlnaW54LCAkb3JpZ2lueSlcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcblx0fVxyXG59XHJcbi5idG5SZWdpc3RlciB7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdG1hcmdpbi10b3A6IDEwJTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Ly9JbnN0ZWFkIG9mIHRoZSBsaW5lIGJlbG93IHlvdSBjb3VsZCB1c2UgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcmFkaXVzLCAkdmVydGljYWwtcmFkaXVzKVxyXG5cdGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuXHRwYWRkaW5nOiAyJTtcclxuXHRiYWNrZ3JvdW5kOiAkY29sb3Jfc2NpZW5jZV9ibHVlX2FwcHJveDtcclxuXHRjb2xvcjogJHdoaXRlO1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnJlZ2lzdGVyLWhlYWRpbmcge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW4tdG9wOiA4JTtcclxuXHRtYXJnaW4tYm90dG9tOiAtMTUlO1xyXG5cdGNvbG9yOiAkY29sb3JfYWJiZXlfYXBwcm94O1xyXG5cdEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCl7XHJcblx0XHRcdGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cdFx0fVxyXG59IiwiLnJlZ2lzdGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzkzMWFmIDAsICMwMGM2ZmYgMTAwJSk7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBwYWRkaW5nOiAzJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5yZWdpc3RlciAucmVnaXN0ZXItZm9ybSB7XG4gIHBhZGRpbmc6IDEwJTtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5yZWdpc3RlciAucmVnaXN0ZXItZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogMTYlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjY3cHgpIHtcbiAgLnJlZ2lzdGVyIC5yZWdpc3Rlci1mb3JtIHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gIH1cbn1cbi5yZWdpc3RlciAubmF2LXRhYnMge1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjMDA2MmNjO1xuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gIHdpZHRoOiAyOCU7XG4gIGZsb2F0OiByaWdodDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAucmVnaXN0ZXIgLm5hdi10YWJzIHtcbiAgICB3aWR0aDogMzMlO1xuICAgIG1hcmdpbi10b3A6IDglO1xuICB9XG59XG4ucmVnaXN0ZXIgLm5hdi10YWJzIC5uYXYtbGluayB7XG4gIHBhZGRpbmc6IDIlO1xuICBoZWlnaHQ6IDM0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMS41cmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMS41cmVtO1xufVxuLnJlZ2lzdGVyIC5uYXYtdGFicyAubmF2LWxpbms6aG92ZXIge1xuICBib3JkZXI6IG5vbmU7XG59XG4ucmVnaXN0ZXIgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xuICB3aWR0aDogMTAwcHg7XG4gIGNvbG9yOiAjMDA2MmNjO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDA2MmNjO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxLjVyZW07XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEuNXJlbTtcbn1cblxuLnJlZ2lzdGVyLWxlZnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiA0JTtcbn1cbi5yZWdpc3Rlci1sZWZ0IGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gIHBhZGRpbmc6IDIlO1xuICB3aWR0aDogNjAlO1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzODNkNDE7XG4gIG1hcmdpbi10b3A6IDMwJTtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yZWdpc3Rlci1sZWZ0IGltZyB7XG4gIG1hcmdpbi10b3A6IDE1JTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIHdpZHRoOiAyNSU7XG4gIGFuaW1hdGlvbjogbW92ZXIgMXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLnJlZ2lzdGVyLWxlZnQgcCB7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBwYWRkaW5nOiAxMiU7XG4gIG1hcmdpbi10b3A6IC05JTtcbn1cblxuLnJlZ2lzdGVyLXJpZ2h0IHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAlIDUwJTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAlIDUwJTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmVyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG1vdmVyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICB9XG59XG4uYnRuUmVnaXN0ZXIge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gIHBhZGRpbmc6IDIlO1xuICBiYWNrZ3JvdW5kOiAjMDA2MmNjO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVnaXN0ZXItaGVhZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogOCU7XG4gIG1hcmdpbi1ib3R0b206IC0xNSU7XG4gIGNvbG9yOiAjNDk1MDU3O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5yZWdpc3Rlci1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_service/api.service */ "./src/app/_service/api.service.ts");




let RegisterPage = class RegisterPage {
    constructor(router, api) {
        this.router = router;
        this.api = api;
        this.user_name = "";
        this.pass = "";
        this.national_id = "";
        this.email = "";
        this.gender = "";
        this.city = "";
        this.state = "";
        this.country = "Please select your country";
        this.license_id = "";
        this.bussiness_national_id = "";
        this.hospitalName = "";
        this.address = "";
        this.dob = "";
        this.data = {
            "user_name": "",
            "email_id": "",
            "password": "",
            "national_id": "",
            "address": "",
            "gender": "",
            "role": "",
            "state": "",
            "city": "",
            "country": "",
            "dob": "",
            "license_id": "",
            "bussiness_national_id": "",
            "hospitalName": "",
        };
    }
    goToPage(pageName) {
        this.router.navigate([`${pageName}`]);
    }
    register() {
        this.data.email_id = this.email;
        this.data.user_name = this.user_name;
        this.data.password = this.pass;
        this.data.national_id = this.national_id;
        this.data.gender = this.gender;
        if (this.role.nativeElement.className == "nav-link active") {
            this.data.role = "parent";
        }
        else {
            this.data.role = "doctor";
        }
        this.data.address = this.address;
        this.data.state = this.state;
        this.data.city = this.city;
        this.data.country = this.country;
        this.data.dob = this.dob;
        this.data.license_id = this.license_id;
        this.data.bussiness_national_id = this.bussiness_national_id;
        this.data.hospitalName = this.hospitalName;
        if (this.data.role == "parent") {
            console.log(this.dob);
            if (this.user_name == "" ||
                this.email == "" ||
                this.pass == "" ||
                this.national_id == "" ||
                this.address == "" ||
                this.state == "" ||
                this.city == "" ||
                this.country == "" ||
                this.dob == "") {
                alert("Enter all details");
                return;
            }
        }
        else {
            if (this.user_name == "" ||
                this.email == "" ||
                this.pass == "" ||
                this.address == "" ||
                this.state == "" ||
                this.city == "" ||
                this.country == "" ||
                this.license_id == "" ||
                this.bussiness_national_id == "" ||
                this.hospitalName) {
                alert("Enter all details");
                return;
            }
        }
        this.api.register(this.data).subscribe(data => {
            if (data) {
                this.router.navigate([`/login`]);
            }
        });
    }
    ngOnInit() {
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('role', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], RegisterPage.prototype, "role", void 0);
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map