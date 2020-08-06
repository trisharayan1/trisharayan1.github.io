(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>About</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"about-container\">\n    \n  <div class=\"about-res\">\n    <menu id=\"user\" class=\"dynamicMenu\">\n  \n      <div class=\"user-profile\">\n        <div class=\"profile-pic\">\n          <img src=\"assets/profilepic.png\" alt=\"username here\" />\n        </div>\n  \n        <div class=\"user-info\">\n          <div class=\"username\">\n            <p><strong> Trisha Rayan</strong> </p>\n          </div>\n  \n        </div>\n      </div>\n  \n      <ul class=\"admin-menu\">\n        <li>trisharayan@gmail.com</li>\n        <li>Student</li>\n        <li>\n          Thomas Jefferson HS for Science and Technology, Alexandria VA\n        </li>\n      </ul>\n    </menu>\n  \n    <main>\n      <section>\n        <h2>Little about me</h2>\n  \n        <p>Hi there! I’m Trisha Rayan, a junior at Thomas Jefferson High School for Science and Technology. I am currently\n          pursuing advanced courses in computer science. I love taking the skills I learn and applying them beyond the\n          classroom as passion projects, like this website.\n  \n  \n          <br><br>\n          <h2>About this project</h2>\n  \n          <p>\n            On this website, you will find visualizations, like charts and graphs, of COVID-19 data. The data is being\n            updated live from statistics released by the World Health Organization.\n  \n          </p>\n          <p>I hope you find it helpful!</p>\n  \n          <br><br>\n      </section>\n    </main>\n  </div>\n  </div>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/about/about-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function() { return AboutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.page */ "./src/app/about/about.page.ts");




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/about/about-routing.module.ts");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "./src/app/about/about.page.ts");







let AboutPageModule = class AboutPageModule {
};
AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageRoutingModule"]
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
    })
], AboutPageModule);



/***/ }),

/***/ "./src/app/about/about.page.scss":
/*!***************************************!*\
  !*** ./src/app/about/about.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: 0 25px;\n}\n\nhtml,\nbody {\n  height: 100%;\n  position: relative;\n  background-color: #fbfefc;\n}\n\nheader {\n  position: fixed;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  top: 0;\n  background: #ddd;\n  height: 60px;\n  padding: 12px 0;\n  z-index: 999;\n}\n\n.site-title h1 {\n  margin: 5px 0 0;\n  padding: 0;\n  font-size: 24px;\n  color: #071b0e;\n}\n\nmenu {\n  width: 360px;\n  padding: 50px;\n  z-index: 10;\n  overflow-y: auto;\n  background: rgba(214, 214, 212, 0.2);\n  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);\n  margin: 50px;\n  overflow-y: auto;\n}\n\nmenu ul {\n  clear: both;\n  float: unset;\n}\n\nmenu > div {\n  padding: 10px;\n}\n\n#filter_text {\n  width: 100%;\n  margin: 0;\n}\n\nmenu .admin-menu {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nmenu .admin-menu li:first-child {\n  border-top: 1px solid rgba(210, 162, 112, 0.6);\n}\n\n.top-nav {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  border-bottom: 1px solid grey;\n}\n\n.top-nav h1 {\n  font-size: 25px;\n  margin: 0;\n  padding: 20px 0;\n}\n\n.top-nav .option-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.top-nav .option-container a {\n  font-size: 15px;\n  padding: 0 20px;\n}\n\nmenu .user-profile {\n  padding: 10px;\n  text-align: center;\n  margin-bottom: 5px;\n}\n\nmenu .profile-pic img {\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n  border-radius: 70%;\n  border: 2px solid #d8af83;\n}\n\nmenu .profile-menu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n}\n\nmenu .profile-menu li {\n  padding: 0;\n  margin: 0;\n}\n\nmenu .profile-menu a {\n  padding: 10px;\n  color: #8be5b1;\n}\n\nmenu .profile-menu a:hover,\nmenu .profile-menu a:active {\n  color: #d8af83;\n}\n\nmenu .username {\n  font-size: 20px;\n  color: #071b0e;\n  letter-spacing: 1px;\n}\n\nmenu .filter-form {\n  padding: 10px;\n}\n\nmain {\n  min-height: 100%;\n  height: auto !important;\n  height: 100%;\n  padding: 20px;\n  float: left;\n  padding-bottom: 60px;\n  background: #fbfefc;\n}\n\nsection {\n  padding: 20px;\n  margin: 10px 0;\n}\n\n.about-res {\n  display: -webkit-box;\n  display: flex;\n}\n\n@media screen and (max-width: 600px) {\n  .about-res {\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvQzpcXFVzZXJzXFx3aW4xMFxcRGVza3RvcFxcdmFjY2luZS9zcmNcXGFwcFxcYWJvdXRcXGFib3V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWJvdXQvYWJvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRE9FOztFQUVFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDSko7O0FET0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFoQmM7RUFpQmQsZUFBQTtFQUNBLFlBQUE7QUNKSjs7QURPRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNKSjs7QURPRTtFQUNFLFlBQUE7RUFFQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUVBLFlBQUE7RUFDQSxnQkFBQTtBQ05KOztBRFFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNOTjs7QURTSTtFQUNFLGFBQUE7QUNQTjs7QURXRTtFQUNFLFdBQUE7RUFDQSxTQUFBO0FDUko7O0FEV0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ1RKOztBRFlNO0VBQ0UsOENBQUE7QUNWUjs7QURpQkU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsNkJBQUE7QUNkSjs7QURnQkk7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNkTjs7QURpQkk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDZk47O0FEaUJNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNmUjs7QURxQkU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2xCSjs7QURzQkk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDbkJOOztBRHVCRTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDcEJKOztBRHNCSTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FDcEJOOztBRHVCSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FDckJOOztBRHdCSTs7RUFFRSxjQUFBO0FDdEJOOztBRDBCRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUN2Qko7O0FEMEJFO0VBQ0UsYUFBQTtBQ3ZCSjs7QUQwQkU7RUFHRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBeEpjO0VBeUpkLG1CQUFBO0FDekJKOztBRDRCRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FDekJKOztBRDZCRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQzFCSjs7QUQ4QkU7RUFDRTtJQUNFLGVBQUE7RUMzQko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDAgMjVweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgJHRleHQtY29sb3I6ICM3NDczNzM7XHJcbiAgJGhlYWRlci1oZWlnaHQ6IDYwcHg7XHJcbiAgXHJcbiAgaHRtbCxcclxuICBib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZlZmM7XHJcbiAgfVxyXG4gIFxyXG4gIGhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcclxuICAgIHBhZGRpbmc6IDEycHggMDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICB9XHJcbiAgXHJcbiAgLnNpdGUtdGl0bGUgaDEge1xyXG4gICAgbWFyZ2luOiA1cHggMCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjMDcxYjBlO1xyXG4gIH1cclxuICBcclxuICBtZW51IHtcclxuICAgIHdpZHRoOiAzNjBweDtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCNkNmQ2ZDQsIDAuMik7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMzBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBcclxuICAgIG1hcmdpbjogNTBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgXHJcbiAgICB1bCB7XHJcbiAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICBmbG9hdDogdW5zZXQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICA+ZGl2IHtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgI2ZpbHRlcl90ZXh0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICBtZW51IC5hZG1pbi1tZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIFxyXG4gICAgbGkge1xyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgZGFya2VuKHJnYmEoI2Q4YWY4MywgMC42KSwgNSUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC50b3AtbmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcclxuICBcclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIH1cclxuICBcclxuICAgIC5vcHRpb24tY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICBtZW51IC51c2VyLXByb2ZpbGUge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcbiAgXHJcbiAgbWVudSAucHJvZmlsZS1waWMge1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgYm9yZGVyLXJhZGl1czogNzAlO1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZDhhZjgzO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBtZW51IC5wcm9maWxlLW1lbnUge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgXHJcbiAgICBsaSB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICBcclxuICAgIGEge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBjb2xvcjogIzhiZTViMTtcclxuICAgIH1cclxuICBcclxuICAgIGE6aG92ZXIsXHJcbiAgICBhOmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiAjZDhhZjgzO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBtZW51IC51c2VybmFtZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzA3MWIwZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgfVxyXG4gIFxyXG4gIG1lbnUgLmZpbHRlci1mb3JtIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIG1haW4ge1xyXG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy93aWR0aDogY2FsYygxMDAlIC0gKDI2MHB4ICsgNTBweCkpO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZy1ib3R0b206ICRoZWFkZXItaGVpZ2h0O1xyXG4gICAgYmFja2dyb3VuZDogI2ZiZmVmYztcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5hYm91dC1yZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5hYm91dC1yZXMge1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gICIsIi5hYm91dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDAgMjVweDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmVmYztcbn1cblxuaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG4gIGhlaWdodDogNjBweDtcbiAgcGFkZGluZzogMTJweCAwO1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5zaXRlLXRpdGxlIGgxIHtcbiAgbWFyZ2luOiA1cHggMCAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMDcxYjBlO1xufVxuXG5tZW51IHtcbiAgd2lkdGg6IDM2MHB4O1xuICBwYWRkaW5nOiA1MHB4O1xuICB6LWluZGV4OiAxMDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYmFja2dyb3VuZDogcmdiYSgyMTQsIDIxNCwgMjEyLCAwLjIpO1xuICBib3gtc2hhZG93OiAwIDAgMzBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgbWFyZ2luOiA1MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxubWVudSB1bCB7XG4gIGNsZWFyOiBib3RoO1xuICBmbG9hdDogdW5zZXQ7XG59XG5tZW51ID4gZGl2IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuI2ZpbHRlcl90ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cblxubWVudSAuYWRtaW4tbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbm1lbnUgLmFkbWluLW1lbnUgbGk6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyMTAsIDE2MiwgMTEyLCAwLjYpO1xufVxuXG4udG9wLW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG59XG4udG9wLW5hdiBoMSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG4udG9wLW5hdiAub3B0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udG9wLW5hdiAub3B0aW9uLWNvbnRhaW5lciBhIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbm1lbnUgLnVzZXItcHJvZmlsZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5tZW51IC5wcm9maWxlLXBpYyBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA3MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkOGFmODM7XG59XG5cbm1lbnUgLnByb2ZpbGUtbWVudSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxubWVudSAucHJvZmlsZS1tZW51IGxpIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxubWVudSAucHJvZmlsZS1tZW51IGEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogIzhiZTViMTtcbn1cbm1lbnUgLnByb2ZpbGUtbWVudSBhOmhvdmVyLFxubWVudSAucHJvZmlsZS1tZW51IGE6YWN0aXZlIHtcbiAgY29sb3I6ICNkOGFmODM7XG59XG5cbm1lbnUgLnVzZXJuYW1lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzA3MWIwZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxubWVudSAuZmlsdGVyLWZvcm0ge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5tYWluIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmJmZWZjO1xufVxuXG5zZWN0aW9uIHtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5hYm91dC1yZXMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYWJvdXQtcmVzIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/about/about.page.ts":
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutPage = class AboutPage {
    constructor() { }
    ngOnInit() {
    }
};
AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.page.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.page.html"),
        styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/about/about.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutPage);



/***/ })

}]);
//# sourceMappingURL=about-about-module-es2015.js.map