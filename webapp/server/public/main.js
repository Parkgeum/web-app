(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n  }\r\n\r\n \r\n html, body { height:100%; overflow:hidden }\r\n\r\n \r\n .h-div {height:96%; border:3px #f99 solid}\r\n\r\n \r\n body {\r\n    background-color: #eee;\r\n  }\r\n\r\n \r\n #wrapper {\r\n    width: 500px;\r\n    height: 50%;\r\n    overflow: hidden;\r\n    border: 0px solid #000;\r\n    margin: 50px auto;\r\n    padding: 10px;\r\n  }\r\n\r\n \r\n .main-content {\r\n    width: 250px;\r\n    height: 80%;\r\n    margin: 5px auto;\r\n    background-color: #fff;\r\n    border: 2px solid #e6e6e6;\r\n    padding: 40px 50px;\r\n  }\r\n\r\n \r\n .header {\r\n    border: 0px solid #000;\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n \r\n .header img {\r\n    height: 80px;\r\n    width: 180px;\r\n    margin: auto;\r\n    position: relative;\r\n    left: 40px;\r\n  }\r\n\r\n \r\n .input-1,\r\n  .input-2 {\r\n    width: 105%;\r\n    height: 40px;\r\n    margin-bottom: 5px;\r\n    padding: 8px 12px;\r\n    border: 1px solid #dbdbdb;\r\n    box-sizing: border-box;\r\n    border-radius: 3px;\r\n  }\r\n\r\n \r\n .overlap-text {\r\n    position: relative;\r\n  }\r\n\r\n \r\n .overlap-text a {\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 10px;\r\n    color: #003569;\r\n    font-size: 14px;\r\n    text-decoration: none;\r\n    font-family: 'Overpass Mono', monospace;\r\n    letter-spacing: -1px;\r\n  }\r\n\r\n \r\n .btn {\r\n    width: 105%;\r\n    height: 40px;\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n \r\n .sub-content {\r\n    width: 250px;\r\n    height: 40%;\r\n    margin: 10px auto;\r\n    border: 1px solid #e6e6e6;\r\n    padding: 20px 50px;\r\n    background-color: #fff;\r\n  }\r\n\r\n \r\n .s-part {\r\n    text-align: center;\r\n    font-family: 'Overpass Mono', monospace;\r\n    word-spacing: -3px;\r\n    letter-spacing: -2px;\r\n    font-weight: normal;\r\n  }\r\n\r\n \r\n .s-part a {\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: #3897f0;\r\n    font-family: 'Overpass Mono', monospace;\r\n    word-spacing: -3px;\r\n    letter-spacing: -2px;\r\n    font-weight: normal;\r\n  }\r\n\r\n \r\n input:focus {\r\n      background-color: yellow;\r\n  }\r\n\r\n \r\n .alert { \r\n        padding: 20px; \r\n        background-color: #f44336; /* Red */ \r\n        color: white; \r\n        /* margin-bottom: 15px;  */\r\n      }\r\n\r\n \r\n .success{ \r\n        padding: 20px; \r\n        background-color:#249424; /* Green */ \r\n        color: white; \r\n        /* margin-bottom: 15px;  */\r\n      }\r\n\r\n \r\n input[type=text]:placeholder { \r\n            color: #cccccc; \r\n         }\r\n\r\n \r\n input[type=text].invalid-textbox,input[type=password].invalid-textbox{ \r\n          border-bottom: 2px solid #3897f0; \r\n         }\r\n\r\n \r\n label.validation-message{ \r\n            color:#ed5558; \r\n          } \r\n           \r\n           \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtHQUNkOzs7Q0FHRixhQUFhLFlBQVksQ0FBQyxlQUFlLEVBQUU7OztDQUMzQyxRQUFRLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQzs7O0NBRXpDO0lBQ0UsdUJBQXVCO0dBQ3hCOzs7Q0FFRDtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsY0FBYztHQUNmOzs7Q0FFRDtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsbUJBQW1CO0dBQ3BCOzs7Q0FFRDtJQUNFLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7OztDQUVEO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7R0FDWjs7O0NBRUQ7O0lBRUUsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsbUJBQW1CO0dBQ3BCOzs7Q0FFRDtJQUNFLG1CQUFtQjtHQUNwQjs7O0NBRUQ7SUFDRSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qix3Q0FBd0M7SUFDeEMscUJBQXFCO0dBQ3RCOzs7Q0FFRDtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0dBQ3BCOzs7Q0FFRDtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsdUJBQXVCO0dBQ3hCOzs7Q0FFRDtJQUNFLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixvQkFBb0I7R0FDckI7OztDQUVEO0lBQ0Usc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysd0NBQXdDO0lBQ3hDLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsb0JBQW9CO0dBQ3JCOzs7Q0FFRDtNQUNJLHlCQUF5QjtHQUM1Qjs7O0NBRUQ7UUFDTSxjQUFjO1FBQ2QsMEJBQTBCLENBQUMsU0FBUztRQUNwQyxhQUFhO1FBQ2IsMkJBQTJCO09BQzVCOzs7Q0FHRDtRQUNFLGNBQWM7UUFDZCx5QkFBeUIsQ0FBQyxXQUFXO1FBQ3JDLGFBQWE7UUFDYiwyQkFBMkI7T0FDNUI7OztDQUVEO1lBQ00sZUFBZTtVQUNqQjs7O0NBR0E7VUFDQSxpQ0FBaUM7VUFDakM7OztDQUdBO1lBQ0UsY0FBYztXQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuXHJcbiBcclxuIGh0bWwsIGJvZHkgeyBoZWlnaHQ6MTAwJTsgb3ZlcmZsb3c6aGlkZGVuIH0gXHJcbiAuaC1kaXYge2hlaWdodDo5NiU7IGJvcmRlcjozcHggI2Y5OSBzb2xpZH0gXHJcblxyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICB9XHJcblxyXG4gICN3cmFwcGVyIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkICMwMDA7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAubWFpbi1jb250ZW50IHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgcGFkZGluZzogNDBweCA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciB7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjMDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciBpbWcge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNDBweDtcclxuICB9XHJcblxyXG4gIC5pbnB1dC0xLFxyXG4gIC5pbnB1dC0yIHtcclxuICAgIHdpZHRoOiAxMDUlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRiO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcblxyXG4gIC5vdmVybGFwLXRleHQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXAtdGV4dCBhIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBjb2xvcjogIzAwMzU2OTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3ZlcnBhc3MgTW9ubycsIG1vbm9zcGFjZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0biB7XHJcbiAgICB3aWR0aDogMTA1JTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODk3ZjA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg5N2YwO1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuXHJcbiAgLnN1Yi1jb250ZW50IHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgcGFkZGluZzogMjBweCA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIC5zLXBhcnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPdmVycGFzcyBNb25vJywgbW9ub3NwYWNlO1xyXG4gICAgd29yZC1zcGFjaW5nOiAtM3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuXHJcbiAgLnMtcGFydCBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjMzg5N2YwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPdmVycGFzcyBNb25vJywgbW9ub3NwYWNlO1xyXG4gICAgd29yZC1zcGFjaW5nOiAtM3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgfVxyXG5cclxuICAuYWxlcnQgeyBcclxuICAgICAgICBwYWRkaW5nOiAyMHB4OyBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2OyAvKiBSZWQgKi8gXHJcbiAgICAgICAgY29sb3I6IHdoaXRlOyBcclxuICAgICAgICAvKiBtYXJnaW4tYm90dG9tOiAxNXB4OyAgKi9cclxuICAgICAgfSBcclxuICAgICAgXHJcbiAgICAgXHJcbiAgICAgIC5zdWNjZXNzeyBcclxuICAgICAgICBwYWRkaW5nOiAyMHB4OyBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyNDk0MjQ7IC8qIEdyZWVuICovIFxyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICAgICAgLyogbWFyZ2luLWJvdHRvbTogMTVweDsgICovXHJcbiAgICAgIH0gXHJcblxyXG4gICAgICBpbnB1dFt0eXBlPXRleHRdOnBsYWNlaG9sZGVyIHsgXHJcbiAgICAgICAgICAgIGNvbG9yOiAjY2NjY2NjOyBcclxuICAgICAgICAgfSBcclxuICAgICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF0uaW52YWxpZC10ZXh0Ym94LGlucHV0W3R5cGU9cGFzc3dvcmRdLmludmFsaWQtdGV4dGJveHsgXHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM4OTdmMDsgXHJcbiAgICAgICAgIH0gXHJcbiAgICAgICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgICBsYWJlbC52YWxpZGF0aW9uLW1lc3NhZ2V7IFxyXG4gICAgICAgICAgICBjb2xvcjojZWQ1NTU4OyBcclxuICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular Page';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _user_changeprofile_changeprofile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/changeprofile/changeprofile.component */ "./src/app/user/changeprofile/changeprofile.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _user_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/userprofile/userprofile.component */ "./src/app/user/userprofile/userprofile.component.ts");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _googlemap_googlemap_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./googlemap/googlemap.component */ "./src/app/googlemap/googlemap.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _shared_upload_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/upload.service */ "./src/app/shared/upload.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _otherprofile_otherprofile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./otherprofile/otherprofile.component */ "./src/app/otherprofile/otherprofile.component.ts");
/* harmony import */ var _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./restaurant/restaurant.component */ "./src/app/restaurant/restaurant.component.ts");
/* harmony import */ var _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./userlist/userlist.component */ "./src/app/userlist/userlist.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//built-in






//component





//routes













// import { Observable } from 'rxjs/Observable';
//other
// import { AuthGuard } from './auth/auth.guard';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
                _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"],
                _user_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_12__["UserprofileComponent"],
                _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_13__["SignInComponent"],
                _upload_upload_component__WEBPACK_IMPORTED_MODULE_15__["UploadComponent"],
                _googlemap_googlemap_component__WEBPACK_IMPORTED_MODULE_16__["GooglemapComponent"],
                _board_board_component__WEBPACK_IMPORTED_MODULE_17__["BoardComponent"],
                // Observable
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__["NavbarComponent"],
                _user_changeprofile_changeprofile_component__WEBPACK_IMPORTED_MODULE_10__["ChangeprofileComponent"],
                _otherprofile_otherprofile_component__WEBPACK_IMPORTED_MODULE_21__["OtherprofileComponent"],
                _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_22__["RestaurantComponent"],
                _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_23__["UserlistComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_11__["appRoutes"]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDLPpUYp-RdW9_j1ijvhN-f28QnVuBH_fQ'
                }),
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_18__["NgFlashMessagesModule"]
            ],
            providers: [_shared_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"], _shared_upload_service__WEBPACK_IMPORTED_MODULE_19__["UploadService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/board/board.component.css":
/*!*******************************************!*\
  !*** ./src/app/board/board.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n      .btn {\r\n        /*width: 3%;*/\r\n        /*height: 20px;*/\r\n        background-color: #3897f0;\r\n        border: 1px solid #3897f0;\r\n        padding: 5px 12px;\r\n        margin-left: 5px;\r\n        color: #fff;\r\n        font-weight: bold;\r\n        cursor: pointer;\r\n        border-radius: 3px;\r\n      }\r\n       .btn1 {\r\n        /*width: 3%;*/\r\n        /*height: 20px;*/\r\n        background-color: #a9a9a9;\r\n        border: 1px solid #a9a9a9;\r\n        padding: 5px 12px;\r\n        margin-left: 35%;\r\n        /*margin-right: : 100px;*/\r\n        color: #fff;\r\n        font-weight: bold;\r\n        cursor: pointer;\r\n        border-radius: 3px;\r\n      }\r\n       .btn2 {\r\n        /*width: 3%;*/\r\n        /*height: 20px;*/\r\n        background-color: #a9a9a9;\r\n        border: 1px solid #a9a9a9;\r\n        padding: 5px 12px;\r\n        /*margin-left: 45%;*/\r\n        /*margin-right: : 100px;*/\r\n        color: #fff;\r\n        font-weight: bold;\r\n        cursor: pointer;\r\n        border-radius: 3px;\r\n      }\r\n       .header {\r\n              height: 90px;\r\n              background-color: white;\r\n              border-bottom: 1px solid slategray;\r\n              position: fixed;\r\n              top: 0px;\r\n              left: 0px;\r\n              right: 0px;\r\n              overflow: hidden;\r\n          }\r\n       #lg1 {\r\n              margin: 5px;\r\n              float: left;\r\n          }\r\n       #lg2 {\r\n              border-left: 1px solid black;\r\n              padding-left: 40px;\r\n              margin: 20px;\r\n              float: left;\r\n          }\r\n       #lg3 {\r\n              margin: 30px;\r\n              float: 0;\r\n          }\r\n       #searchbox {\r\n  \r\n              margin-top: 30px;\r\n              margin-left: 100px;\r\n              float: left;\r\n  \r\n          }\r\n       #searchbtn {\r\n              margin-top: 25px;\r\n              float: center;\r\n  \r\n          }\r\n       .content {\r\n              margin: 0 auto;\r\n              height: auto;\r\n              width: 700px;\r\n              margin-top : 150px;\r\n              border-left : 1px solid black; \r\n              border-right : 1px solid black; \r\n              border-top : 1px solid black; \r\n              font-family: 'Hind Madurai', sans-serif;\r\n              font-weight: bold;\r\n          }\r\n       #userimg {\r\n            border-radius: 100px;\r\n            width: 150px;\r\n            height: 150px;\r\n            border : 2px solid red;\r\n            margin : 10px;\r\n            float:left;\r\n          }\r\n       .user {\r\n             margin-top: 7%;\r\n             font-size: 50px;\r\n             float:left;\r\n          }\r\n       #userphoto {\r\n              width:100%;\r\n              align-content: center;\r\n              /* height: 300px; */\r\n          }\r\n       #instaicon {\r\n              width:100%;\r\n              /* height: 300px; */\r\n          }\r\n       .like {\r\n             margin-left : 10px;\r\n          }\r\n       .comment {\r\n              margin-left: 10px;\r\n              font-size: 13px;\r\n          }\r\n       #commentin{\r\n              border : none;\r\n              width: 85%;\r\n              height : 40px;\r\n              font-size : 15px;\r\n              margin-left : 10px;\r\n          }\r\n       #commentin::-webkit-input-placeholder {\r\n              \r\n              font-size : 15px;\r\n          }\r\n       #menuimg {\r\n            \r\n              width:50px;\r\n              height:40px;\r\n              margin-left : 10px;\r\n             \r\n          }\r\n       .comment2 {\r\n              width: 99%;\r\n              margin : 20px;\r\n              float: left;\r\n          }\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLDBCQUEwQjtRQUMxQiwwQkFBMEI7UUFDMUIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixtQkFBbUI7T0FDcEI7T0FDQTtRQUNDLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsMEJBQTBCO1FBQzFCLDBCQUEwQjtRQUMxQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLDBCQUEwQjtRQUMxQixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixtQkFBbUI7T0FDcEI7T0FDRDtRQUNFLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsMEJBQTBCO1FBQzFCLDBCQUEwQjtRQUMxQixrQkFBa0I7UUFDbEIscUJBQXFCO1FBQ3JCLDBCQUEwQjtRQUMxQixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixtQkFBbUI7T0FDcEI7T0FPRztjQUNJLGFBQWE7Y0FDYix3QkFBd0I7Y0FDeEIsbUNBQW1DO2NBQ25DLGdCQUFnQjtjQUNoQixTQUFTO2NBQ1QsVUFBVTtjQUNWLFdBQVc7Y0FDWCxpQkFBaUI7V0FDcEI7T0FFRDtjQUNJLFlBQVk7Y0FDWixZQUFZO1dBQ2Y7T0FFRDtjQUNJLDZCQUE2QjtjQUM3QixtQkFBbUI7Y0FDbkIsYUFBYTtjQUNiLFlBQVk7V0FDZjtPQUVEO2NBQ0ksYUFBYTtjQUNiLFNBQVM7V0FDWjtPQUVEOztjQUVJLGlCQUFpQjtjQUNqQixtQkFBbUI7Y0FDbkIsWUFBWTs7V0FFZjtPQUVEO2NBQ0ksaUJBQWlCO2NBQ2pCLGNBQWM7O1dBRWpCO09BRUQ7Y0FDSSxlQUFlO2NBQ2YsYUFBYTtjQUNiLGFBQWE7Y0FDYixtQkFBbUI7Y0FDbkIsOEJBQThCO2NBQzlCLCtCQUErQjtjQUMvQiw2QkFBNkI7Y0FDN0Isd0NBQXdDO2NBQ3hDLGtCQUFrQjtXQUNyQjtPQUNEO1lBQ0UscUJBQXFCO1lBQ3JCLGFBQWE7WUFDYixjQUFjO1lBQ2QsdUJBQXVCO1lBQ3ZCLGNBQWM7WUFDZCxXQUFXO1dBQ1o7T0FDRDthQUNHLGVBQWU7YUFDZixnQkFBZ0I7YUFDaEIsV0FBVztXQUNiO09BQ0Q7Y0FDSSxXQUFXO2NBQ1gsc0JBQXNCO2NBQ3RCLG9CQUFvQjtXQUN2QjtPQUNEO2NBQ0ksV0FBVztjQUNYLG9CQUFvQjtXQUN2QjtPQUNEO2FBQ0csbUJBQW1CO1dBQ3JCO09BQ0Q7Y0FDSSxrQkFBa0I7Y0FDbEIsZ0JBQWdCO1dBQ25CO09BQ0Q7Y0FDSSxjQUFjO2NBQ2QsV0FBVztjQUNYLGNBQWM7Y0FDZCxpQkFBaUI7Y0FDakIsbUJBQW1CO1dBQ3RCO09BRUQ7O2NBRUksaUJBQWlCO1dBQ3BCO09BQ0Q7O2NBRUksV0FBVztjQUNYLFlBQVk7Y0FDWixtQkFBbUI7O1dBRXRCO09BQ0Q7Y0FDSSxXQUFXO2NBQ1gsY0FBYztjQUNkLFlBQVk7V0FDZiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgICAgLmJ0biB7XHJcbiAgICAgICAgLyp3aWR0aDogMyU7Ki9cclxuICAgICAgICAvKmhlaWdodDogMjBweDsqL1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODk3ZjA7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzM4OTdmMDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgIH1cclxuICAgICAgIC5idG4xIHtcclxuICAgICAgICAvKndpZHRoOiAzJTsqL1xyXG4gICAgICAgIC8qaGVpZ2h0OiAyMHB4OyovXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E5YTlhOTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYTlhOWE5O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbiAgICAgICAgLyptYXJnaW4tcmlnaHQ6IDogMTAwcHg7Ki9cclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICB9XHJcbiAgICAgIC5idG4yIHtcclxuICAgICAgICAvKndpZHRoOiAzJTsqL1xyXG4gICAgICAgIC8qaGVpZ2h0OiAyMHB4OyovXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E5YTlhOTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYTlhOWE5O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgICAgIC8qbWFyZ2luLWxlZnQ6IDQ1JTsqL1xyXG4gICAgICAgIC8qbWFyZ2luLXJpZ2h0OiA6IDEwMHB4OyovXHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzbGF0ZWdyYXk7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAjbGcxIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICNsZzIge1xyXG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICNsZzMge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgICAgICAgICAgICBmbG9hdDogMDtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICNzZWFyY2hib3gge1xyXG4gIFxyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gIFxyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgI3NlYXJjaGJ0biB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICAgICAgICBmbG9hdDogY2VudGVyO1xyXG4gIFxyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICB3aWR0aDogNzAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcCA6IDE1MHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0IDogMXB4IHNvbGlkIGJsYWNrOyBcclxuICAgICAgICAgICAgICBib3JkZXItcmlnaHQgOiAxcHggc29saWQgYmxhY2s7IFxyXG4gICAgICAgICAgICAgIGJvcmRlci10b3AgOiAxcHggc29saWQgYmxhY2s7IFxyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSGluZCBNYWR1cmFpJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICN1c2VyaW1nIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyIDogMnB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgICAgbWFyZ2luIDogMTBweDtcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC51c2VyIHtcclxuICAgICAgICAgICAgIG1hcmdpbi10b3A6IDclO1xyXG4gICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICN1c2VycGhvdG8ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIC8qIGhlaWdodDogMzAwcHg7ICovXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAjaW5zdGFpY29uIHtcclxuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgIC8qIGhlaWdodDogMzAwcHg7ICovXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGlrZSB7XHJcbiAgICAgICAgICAgICBtYXJnaW4tbGVmdCA6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29tbWVudCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI2NvbW1lbnRpbntcclxuICAgICAgICAgICAgICBib3JkZXIgOiBub25lO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0IDogNDBweDtcclxuICAgICAgICAgICAgICBmb250LXNpemUgOiAxNXB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0IDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICNjb21tZW50aW46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZSA6IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAjbWVudWltZyB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHdpZHRoOjUwcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQgOiAxMHB4O1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29tbWVudDIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA5OSU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luIDogMjBweDtcclxuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIH1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/board/board.component.html":
/*!********************************************!*\
  !*** ./src/app/board/board.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"header\">\r\n\r\n  <img id=\"lg1\" src=\"assets/img/camera.jpg\" style=\"width:7%; height:80%;\">\r\n  <img id=\"lg2\" src=\"assets/img/logom.png\" style=\"width: 12%; height:70%;\">\r\n  <div id=\"searchbox\">\r\n      <input type=\"search\" placeholder=\"\">\r\n  </div>\r\n  <div id=\"searchbtn\">\r\n      <button type=\"submit\" class=\"btn\" (click)=\"Searchbtn()\">검색</button>\r\n      <a routerLink=\"/profile\" class=\"btn1\"> Profile </a>\r\n    <a routerLink=\"/upload\" class=\"btn2\"> Upload </a>\r\n    <a routerLink=\"/login\" class=\"btn2\"> Logout </a>\r\n  </div>\r\n\r\n</div> -->\r\n\r\n<!-- <div class=\"content\">\r\n\r\n  <form #uploadForm=\"ngForm\"> -->\r\n<!-- (ngSubmit)=\"onSubmit(uploadForm)\"> -->\r\n<!-- <div class=\"row\">\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s12\">\r\n          <table>\r\n            <thead>\r\n              <th>id</th>\r\n              <th>text</th>\r\n              <th>time</th>\r\n              \r\n            </thead>\r\n            <tr *ngFor=\"let upload of uploadService.upload\">\r\n              <td>{{upload.username}}</td>\r\n              <td>{{upload.text}}</td>\r\n              <td>{{upload.time}}</td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div> -->\r\n\r\n<!-- <tr *ngFor=\"let post of Post\">\r\n  <div class=\"content\">\r\n\r\n    <img id=\"userimg\" src=\"assets/img/camera.jpg\">\r\n    <p class=\"user\"> seulgiredvelvet </p>\r\n    <img id=\"userphoto\" src=\"assets/img/camera.jpg\">\r\n    <img id=\"instaicon\" src=\"assets/img/camera.jpg\">\r\n    <p class=\"like\">좋아요 293개</p>\r\n    <div class=\"comment\">\r\n      <p>seulgiredvelvet 제목 내용 </p>\r\n      <p style=\"font-size:10px; color:slategray\">13시간 전 </p>\r\n    </div>\r\n    <div class=\"searchbox\">\r\n      <input id=\"commentin\" type=\"text\" placeholder=\"  댓글을 입력해주세요.. \">\r\n      <input type=\"submit\" value=\"확인\" class=\"btn\">\r\n    </div>\r\n\r\n  </div>\r\n</tr> -->\r\n<div class=\"content\">\r\n\r\n  <table *ngFor=\"let posts of post\" style=\"width:100%\">\r\n    <tr class=\"font-2\" >\r\n        <img id=\"userimg\" src=\"assets/img/camera.jpg\">\r\n        <!-- <img id=\"userimg\" src=\"{{posts.image}}\">  -->\r\n        <p class=\"user\"> {{posts.username}} </p>\r\n    </tr>\r\n    <tr>\r\n        <img id=\"userphoto\" src=\"assets/img/camera.jpg\">\r\n    </tr>\r\n    <tr>\r\n      <br>\r\n        <p class=\"like\">좋아요 {{posts.likes.length}}개</p>\r\n        <div class=\"comment\">\r\n          <p style=\"font-size:125%\">{{posts.username}} </p>\r\n          <p style=\"font-size:100%\">{{posts.text}} </p>\r\n          \r\n        </div>\r\n        <div class=\"searchbox\">\r\n            <input id=\"commentin\" type=\"text\" placeholder=\"  댓글을 입력해주세요.. \"> \r\n            <input type=\"submit\" value=\"게시\" class=\"btn\">\r\n          </div>\r\n          <br>\r\n          <p style=\"font-size:15px; color:slategray\">{{posts.time}} </p>\r\n    </tr>\r\n      <!-- <td>\r\n        <br><img id=\"userphoto\" src=\"assets/img/camera.jpg\">\r\n      </td> -->\r\n      <!-- <td>{{posts.username}}</td>\r\n          <td>{{posts.follower.length}}</td>\r\n          <td>{{posts.following.length}}</td> -->\r\n\r\n      <hr style=\"border : 1px solid black;\">\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/board/board.component.ts":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoardComponent = /** @class */ (function () {
    function BoardComponent(router, http) {
        this.router = router;
        this.http = http;
        this.baseUrls = 'http://localhost:3000/boards/follow';
    }
    BoardComponent.prototype.ngOnInit = function () {
        this.refreshPostList();
    };
    BoardComponent.prototype.getPostList = function () {
        return this.http.get(this.baseUrls, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            })
        });
    };
    BoardComponent.prototype.refreshPostList = function () {
        var _this = this;
        this.getPostList().subscribe(function (res) {
            _this.post = res.data;
        });
        if (localStorage.getItem('token') == null) {
            console.log("not logined");
            this.router.navigate(['/login']);
        }
    };
    BoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.css */ "./src/app/board/board.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/googlemap/googlemap.component.css":
/*!***************************************************!*\
  !*** ./src/app/googlemap/googlemap.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* html, body {\r\n    position: absolute;\r\n     height: 100%; \r\n } */\r\n\r\n agm-map {\r\n    width: 100%;\r\n    height: 600px;\r\n  }\r\n\r\n .btn-1 {\r\n    width: 20%;\r\n    /* height: 10%; */\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n    margin: 1%;\r\n  }\r\n\r\n .btns-1 {\r\n    width: 20%;\r\n    height: 30px;\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    margin-left: 1%;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n    margin: 1%;\r\n  }\r\n\r\n .btn {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    margin-left: 5px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n .btn1 {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #a9a9a9;\r\n    border: 1px solid #a9a9a9;\r\n    padding: 5px 12px;\r\n    margin-left: 35%;\r\n    /*margin-right: : 100px;*/\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n .btn2 {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #a9a9a9;\r\n    border: 1px solid #a9a9a9;\r\n    padding: 5px 12px;\r\n    /*margin-left: 45%;*/\r\n    /*margin-right: : 100px;*/\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n .text {\r\n    resize: none;\r\n    width: 70%;\r\n    height: 30px;\r\n    margin: 1%\r\n  }\r\n\r\n .has {\r\n    resize: none;\r\n    width: 70%;\r\n    height: 50px;\r\n    margin: 1%\r\n  }\r\n\r\n .pickimg {\r\n    margin: 1%;\r\n    width: auto;\r\n    height: auto;\r\n  }\r\n\r\n .header {\r\n          height: 12%;\r\n          background-color: white;\r\n          border-bottom: 1px solid slategray;\r\n          position: fixed;\r\n          top: 0px;\r\n          left: 0px;\r\n          right: 0px;\r\n          overflow: hidden;\r\n      }\r\n\r\n #lg1 {\r\n          margin: 5px;\r\n          float: left;\r\n      }\r\n\r\n #lg2 {\r\n          border-left: 1px solid black;\r\n          padding-left: 40px;\r\n          margin: 20px;\r\n          float: left;\r\n      }\r\n\r\n #lg3 {\r\n          margin: 30px;\r\n          float: 0px;\r\n      }\r\n\r\n #searchbox {\r\n\r\n          margin-top: 2%;\r\n          margin-left: 7%;\r\n          float: left;\r\n\r\n      }\r\n\r\n #searchbtn {\r\n          margin-top: 2%;\r\n          float: center;\r\n\r\n      }\r\n\r\n .content {\r\n          margin: 0 auto;\r\n          height: auto;\r\n          width: 700px;\r\n          margin-top : 5%;\r\n          border-left : 1px solid black; \r\n          border-right : 1px solid black; \r\n          border-top : 1px solid black;\r\n          border-bottom : 1px solid black;\r\n          padding: 0.4%;\r\n          font-family: 'Hind Madurai', sans-serif;\r\n          font-weight: bold;\r\n      }\r\n\r\n #userimg {\r\n        border-radius: 100px;\r\n        width: 150px;\r\n        height: 150px;\r\n        border : 2px solid red;\r\n        margin : 10px;\r\n        float:left;\r\n      }\r\n\r\n .user {\r\n         margin-top: 7%;\r\n         font-size: 50px;\r\n         float:left;\r\n      }\r\n\r\n #userphoto {\r\n          width:100%;\r\n      }\r\n\r\n #instaicon {\r\n          width:100%;\r\n      }\r\n\r\n .like {\r\n         margin-left : 10px;\r\n      }\r\n\r\n .comment {\r\n          margin-left: 10px;\r\n          font-size: 13px;\r\n      }\r\n\r\n #commentin{\r\n          border : none;\r\n          width: 70%;\r\n          height : 40px;\r\n          font-size : 15px;\r\n          margin-left : 10px;\r\n      }\r\n\r\n #commentin::-webkit-input-placeholder {\r\n          \r\n          font-size : 15px;\r\n      }\r\n\r\n #menuimg {\r\n        \r\n          width:50px;\r\n          height:40px;\r\n          margin-left : 10px;\r\n         \r\n      }\r\n\r\n .comment2 {\r\n          width: 99%;\r\n          margin : 20px;\r\n          float: left;\r\n      }\r\n\r\n .input-1,\r\n      .input-2 {\r\n        width: 50%;\r\n        height: 40px;\r\n        margin-bottom: 5px;\r\n        margin-left: 20%;\r\n        padding: 8px 12px;\r\n        border: 1px solid #dbdbdb;\r\n        box-sizing: border-box;\r\n        border-radius: 3px;\r\n      }\r\n\r\n .btns {\r\n        /*width: 3%;*/\r\n        /*height: 20px;*/\r\n        background-color: #3897f0;\r\n        border: 1px solid #3897f0;\r\n        padding: 5px 12px;\r\n        margin-left: 5px;\r\n        color: white;\r\n        font-weight: bold;\r\n        cursor: pointer;\r\n        border-radius: 3px;\r\n      }\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29vZ2xlbWFwL2dvb2dsZW1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7S0FHSzs7Q0FFSjtJQUNHLFlBQVk7SUFDWixjQUFjO0dBQ2Y7O0NBR0g7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0dBQ1o7O0NBRUQ7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztHQUNaOztDQUVEO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0dBQ3BCOztDQUNBO0lBQ0MsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtHQUNwQjs7Q0FDRDtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7R0FDcEI7O0NBRUQ7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7SUFDYixVQUFVO0dBQ1g7O0NBQ0Q7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7SUFDYixVQUFVO0dBQ1g7O0NBRUQ7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7R0FDZDs7Q0FHSDtVQUNVLFlBQVk7VUFDWix3QkFBd0I7VUFDeEIsbUNBQW1DO1VBQ25DLGdCQUFnQjtVQUNoQixTQUFTO1VBQ1QsVUFBVTtVQUNWLFdBQVc7VUFDWCxpQkFBaUI7T0FDcEI7O0NBRUQ7VUFDSSxZQUFZO1VBQ1osWUFBWTtPQUNmOztDQUVEO1VBQ0ksNkJBQTZCO1VBQzdCLG1CQUFtQjtVQUNuQixhQUFhO1VBQ2IsWUFBWTtPQUNmOztDQUVEO1VBQ0ksYUFBYTtVQUNiLFdBQVc7T0FDZDs7Q0FFRDs7VUFFSSxlQUFlO1VBQ2YsZ0JBQWdCO1VBQ2hCLFlBQVk7O09BRWY7O0NBRUQ7VUFDSSxlQUFlO1VBQ2YsY0FBYzs7T0FFakI7O0NBRUQ7VUFDSSxlQUFlO1VBQ2YsYUFBYTtVQUNiLGFBQWE7VUFDYixnQkFBZ0I7VUFDaEIsOEJBQThCO1VBQzlCLCtCQUErQjtVQUMvQiw2QkFBNkI7VUFDN0IsZ0NBQWdDO1VBQ2hDLGNBQWM7VUFDZCx3Q0FBd0M7VUFDeEMsa0JBQWtCO09BQ3JCOztDQUNEO1FBQ0UscUJBQXFCO1FBQ3JCLGFBQWE7UUFDYixjQUFjO1FBQ2QsdUJBQXVCO1FBQ3ZCLGNBQWM7UUFDZCxXQUFXO09BQ1o7O0NBQ0Q7U0FDRyxlQUFlO1NBQ2YsZ0JBQWdCO1NBQ2hCLFdBQVc7T0FDYjs7Q0FDRDtVQUNJLFdBQVc7T0FDZDs7Q0FDRDtVQUNJLFdBQVc7T0FDZDs7Q0FDRDtTQUNHLG1CQUFtQjtPQUNyQjs7Q0FDRDtVQUNJLGtCQUFrQjtVQUNsQixnQkFBZ0I7T0FDbkI7O0NBQ0Q7VUFDSSxjQUFjO1VBQ2QsV0FBVztVQUNYLGNBQWM7VUFDZCxpQkFBaUI7VUFDakIsbUJBQW1CO09BQ3RCOztDQUVEOztVQUVJLGlCQUFpQjtPQUNwQjs7Q0FDRDs7VUFFSSxXQUFXO1VBQ1gsWUFBWTtVQUNaLG1CQUFtQjs7T0FFdEI7O0NBQ0Q7VUFDSSxXQUFXO1VBQ1gsY0FBYztVQUNkLFlBQVk7T0FDZjs7Q0FFRDs7UUFFRSxXQUFXO1FBQ1gsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLDBCQUEwQjtRQUMxQix1QkFBdUI7UUFDdkIsbUJBQW1CO09BQ3BCOztDQUVEO1FBQ0UsY0FBYztRQUNkLGlCQUFpQjtRQUNqQiwwQkFBMEI7UUFDMUIsMEJBQTBCO1FBQzFCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsbUJBQW1CO09BQ3BCIiwiZmlsZSI6InNyYy9hcHAvZ29vZ2xlbWFwL2dvb2dsZW1hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaHRtbCwgYm9keSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgaGVpZ2h0OiAxMDAlOyBcclxuIH0gKi9cclxuXHJcbiBhZ20tbWFwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICB9XHJcblxyXG5cclxuLmJ0bi0xIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICAvKiBoZWlnaHQ6IDEwJTsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODk3ZjA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg5N2YwO1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICB9XHJcblxyXG4gIC5idG5zLTEge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODk3ZjA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg5N2YwO1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgLyp3aWR0aDogMyU7Ki9cclxuICAgIC8qaGVpZ2h0OiAyMHB4OyovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg5N2YwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM4OTdmMDtcclxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gICAuYnRuMSB7XHJcbiAgICAvKndpZHRoOiAzJTsqL1xyXG4gICAgLypoZWlnaHQ6IDIwcHg7Ki9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOWE5YTk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTlhOWE5O1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xyXG4gICAgLyptYXJnaW4tcmlnaHQ6IDogMTAwcHg7Ki9cclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gIC5idG4yIHtcclxuICAgIC8qd2lkdGg6IDMlOyovXHJcbiAgICAvKmhlaWdodDogMjBweDsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E5YTlhOTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhOWE5YTk7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgIC8qbWFyZ2luLWxlZnQ6IDQ1JTsqL1xyXG4gICAgLyptYXJnaW4tcmlnaHQ6IDogMTAwcHg7Ki9cclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG5cclxuICAudGV4dCB7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luOiAxJVxyXG4gIH1cclxuICAuaGFzIHtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW46IDElXHJcbiAgfVxyXG5cclxuICAucGlja2ltZyB7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMiU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzbGF0ZWdyYXk7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjbGcxIHtcclxuICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNsZzIge1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjbGczIHtcclxuICAgICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgICAgICAgIGZsb2F0OiAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNzZWFyY2hib3gge1xyXG5cclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDclO1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAjc2VhcmNoYnRuIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgICAgICAgZmxvYXQ6IGNlbnRlcjtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcCA6IDUlO1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQgOiAxcHggc29saWQgYmxhY2s7IFxyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0IDogMXB4IHNvbGlkIGJsYWNrOyBcclxuICAgICAgICAgIGJvcmRlci10b3AgOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tIDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgcGFkZGluZzogMC40JTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSGluZCBNYWR1cmFpJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICAgICN1c2VyaW1nIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBib3JkZXIgOiAycHggc29saWQgcmVkO1xyXG4gICAgICAgIG1hcmdpbiA6IDEwcHg7XHJcbiAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgfVxyXG4gICAgICAudXNlciB7XHJcbiAgICAgICAgIG1hcmdpbi10b3A6IDclO1xyXG4gICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgI3VzZXJwaG90byB7XHJcbiAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgICNpbnN0YWljb24ge1xyXG4gICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgfVxyXG4gICAgICAubGlrZSB7XHJcbiAgICAgICAgIG1hcmdpbi1sZWZ0IDogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAuY29tbWVudCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgfVxyXG4gICAgICAjY29tbWVudGlue1xyXG4gICAgICAgICAgYm9yZGVyIDogbm9uZTtcclxuICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICBoZWlnaHQgOiA0MHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplIDogMTVweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0IDogMTBweDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgICNjb21tZW50aW46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBmb250LXNpemUgOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgICNtZW51aW1nIHtcclxuICAgICAgICBcclxuICAgICAgICAgIHdpZHRoOjUwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0IDogMTBweDtcclxuICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgLmNvbW1lbnQyIHtcclxuICAgICAgICAgIHdpZHRoOiA5OSU7XHJcbiAgICAgICAgICBtYXJnaW4gOiAyMHB4O1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbnB1dC0xLFxyXG4gICAgICAuaW5wdXQtMiB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RiZGJkYjtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJ0bnMge1xyXG4gICAgICAgIC8qd2lkdGg6IDMlOyovXHJcbiAgICAgICAgLypoZWlnaHQ6IDIwcHg7Ki9cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg5N2YwO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODk3ZjA7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgfVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/googlemap/googlemap.component.html":
/*!****************************************************!*\
  !*** ./src/app/googlemap/googlemap.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\r\n<head>\r\n  <script>\r\n      var placeSearch, autocomplete;\r\n      function initAutocomplete() {\r\n        // Create the autocomplete object, restricting the search to geographical\r\n        // location types.\r\n        autocomplete = new google.maps.places.Autocomplete(\r\n          (document.getElementById('autocomplete')), { types: ['geocode'] });\r\n        // When the user selects an address from the dropdown, populate the address\r\n        // fields in the form.\r\n        autocomplete.addListener('place_changed', fillInAddress);\r\n      }\r\n      function fillInAddress() {\r\n        // Get the place details from the autocomplete object.\r\n        var place = autocomplete.getPlace();\r\n        document.getElementById(\"lat\").value = place.geometry.location.lat();\r\n        document.getElementById(\"lng\").value = place.geometry.location.lng();\r\n      }\r\n    </script>\r\n</head>\r\n\r\n\r\n<div class=\"content\">\r\n  <form #searchForm=\"ngForm\" (ngSubmit)=\"searchForm.valid && SearchRestaurant(searchForm)\">\r\n    <input type=\"text\" style=\"margin-left:62%\" autocomplete=\"off\" #restID=\"ngModel\" [(ngModel)]=\"model.restID\" name=\"restID\"\r\n      placeholder=\"맛집 검색\" [ngClass]=\"{ 'invalid-textbox' : searchForm.submitted && !username.valid}\">\r\n    <input type=\"submit\" class=\"btns\" value=\"검색\">\r\n  </form>\r\n\r\n  <!-- 구글맵 부분 -->\r\n  <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=16 (mapClick)=\"onChoseLocation($event)\">\r\n    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" *ngIf=\"locationChosen\">\r\n    </agm-marker>\r\n  </agm-map>\r\n</div>\r\n\r\n<div id=\"locationField\">\r\n  <input id=\"autocomplete\" placeholder=\"Enter your address\" type=\"text\">\r\n</div>\r\n\r\n<input class=\"field\" id=\"lat\" />\r\n<input class=\"field\" id=\"lng\" />\r\n<script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyDLPpUYp-RdW9_j1ijvhN-f28QnVuBH_fQ&libraries=places&callback=initAutocomplete\" async defer></script>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/googlemap/googlemap.component.ts":
/*!**************************************************!*\
  !*** ./src/app/googlemap/googlemap.component.ts ***!
  \**************************************************/
/*! exports provided: GooglemapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GooglemapComponent", function() { return GooglemapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GooglemapComponent = /** @class */ (function () {
    function GooglemapComponent(router, http) {
        this.router = router;
        this.http = http;
        this.model = {
            restID: ''
        };
        this.latitude = 37.588787;
        this.longitude = 127.00432;
        this.locationChosen = false;
    }
    GooglemapComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') == null) {
            console.log("not logined");
            this.router.navigate(['/login']);
        }
    };
    //googlemap 이벤트
    GooglemapComponent.prototype.onChoseLocation = function (event) {
        // console.log(event);
        this.latitude = event.coords.lat;
        this.longitude = event.coords.lng;
        this.locationChosen = true;
        // 이부분 그대로 사용하면 이미지 가져오기 가능 ?
    };
    GooglemapComponent.prototype.restInform = function (restinfo) {
        return this.http.post('http://localhost:3000/restaurant', restinfo);
    };
    GooglemapComponent.prototype.SearchRestaurant = function (form) {
        var _this = this;
        this.restInform(form.value).subscribe(function (res) {
            //response로 받은 것들 information에 저장
            _this.restinfo = res.data;
            if (res != null) {
                localStorage.setItem('resname', "test");
                _this.router.navigate(['/rt']);
                //조건 다시 수정
                if (_this.restinfo.telephone != null) {
                    _this.router.navigate(['/rt']);
                }
            }
        });
    };
    GooglemapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-googlemap',
            template: __webpack_require__(/*! ./googlemap.component.html */ "./src/app/googlemap/googlemap.component.html"),
            styles: [__webpack_require__(/*! ./googlemap.component.css */ "./src/app/googlemap/googlemap.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GooglemapComponent);
    return GooglemapComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#lg1 {\r\n    margin: 15px;\r\n    float: left;\r\n}\r\n\r\n#lg2 {\r\n    border-left: 1px solid black;\r\n    padding-left: 40px;\r\n    margin: 25px;\r\n    float: left;\r\n}\r\n\r\n#lg3 {\r\n    margin: 30px;\r\n    float: 0px;\r\n}\r\n\r\n.menu\r\n{\r\n    color: black;\r\n}\r\n\r\n.us\r\n{\r\n    margin-left: 10%;\r\n}\r\n\r\n.btns {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    margin-left: 5px;\r\n    color: white;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGFBQWE7SUFDYixXQUFXO0NBQ2Q7O0FBRUQ7O0lBRUksYUFBYTtDQUNoQjs7QUFFRDs7SUFFSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7R0FDcEIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbGcxIHtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4jbGcyIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI2xnMyB7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbiAgICBmbG9hdDogMHB4O1xyXG59XHJcblxyXG4ubWVudVxyXG57XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi51c1xyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG59XHJcblxyXG4uYnRucyB7XHJcbiAgICAvKndpZHRoOiAzJTsqL1xyXG4gICAgLypoZWlnaHQ6IDIwcHg7Ki9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODk3ZjA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg5N2YwO1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-white\">\r\n  <img id=\"lg1\" src=\"assets/img/camera.jpg\" style=\"width:7%; height:70px;\">\r\n  <img id=\"lg2\" src=\"assets/img/logom.png\" style=\"width: 12%; height:70px;\">\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample04\" aria-controls=\"navbarsExample04\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <form #searchForm=\"ngForm\" (ngSubmit)=\"searchForm.valid && Search(searchForm)\">\r\n    <!-- model은 ts 파일에 정의한 model -->\r\n\r\n    <!-- <input type=\"search\" class=\"search\" placeholder=\"사용자 검색\"> -->\r\n    <input type=\"text\" autocomplete=\"off\" #username=\"ngModel\" [(ngModel)]=\"model.SearchUser\" name=\"username\" placeholder=\"사용자 검색\" \r\n    [ngClass]=\"{ 'invalid-textbox' : searchForm.submitted && !username.valid}\">\r\n    <input type=\"submit\" class=\"btns\" value=\"검색\">\r\n  </form>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExample04\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n    </ul>\r\n    <ul class=\"navbar-nav navbar-right color-gray\">\r\n      <!-- *ngIf=\"localStorage.getItem('token')!=null\" -->\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/board']\">Main</a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/googlemap']\">Map</a>\r\n      </li>\r\n      <li class=\"menu\">\r\n        <a class=\"nav-link\" (click)=\"onLogoutClick()\">Logout</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { AuthService } from '../../services/auth.service';
// import { NgFlashMessageService } from 'ng-flash-messages';



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(
    // private authService: AuthService,
    router, userserivce, http) {
        this.router = router;
        this.userserivce = userserivce;
        this.http = http;
        this.model = {
            SearchUser: ''
        };
    }
    NavbarComponent.prototype.ngOnInit = function () {
        // this.token[0].tok = localStorage.getItem('token');
        // console.log("aaaa" + this.token[0].tok);
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
        // M.toast({ html: 'LogOut Successfully', classes: 'rounded' });
        // console.log(M);
    };
    NavbarComponent.prototype.otherInfo = function (information) {
        return this.http.post('http://localhost:3000/boards/search/user', information);
    };
    NavbarComponent.prototype.Search = function (form) {
        var _this = this;
        this.otherInfo(form.value).subscribe(function (res) {
            //response로 받은 것들 information에 저장
            _this.information = res;
            if (localStorage.getItem('token') != null) {
                console.log("bbbbb" + _this.information[0].username);
                _this.router.navigate(['/userlist']);
                // console.log(JSON.stringify(this.information));
                localStorage.setItem('username', _this.information[0].username);
            }
        });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")],
            providers: [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/otherprofile/otherprofile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/otherprofile/otherprofile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\r\n    font-size: 10px;\r\n}\r\n\r\n.btn-1 {\r\n    width: 20%;\r\n    /* height: 10%; */\r\n    background-color: #b6c3cf;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n    margin: 1%;\r\n  }\r\n\r\n.btns-1 {\r\n    width: 20%;\r\n    height: 30px;\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    margin-left: 1%;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n    margin: 1%;\r\n  }\r\n\r\n.btns {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    margin-left: 5px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n.btn1 {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #a9a9a9;\r\n    border: 1px solid #a9a9a9;\r\n    padding: 5px 12px;\r\n    margin-left: 35%;\r\n    /*margin-right: : 100px;*/\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n.btn2 {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #a9a9a9;\r\n    border: 1px solid #a9a9a9;\r\n    padding: 5px 12px;\r\n    /*margin-left: 45%;*/\r\n    /*margin-right: : 100px;*/\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: \"Open Sans\", Arial, sans-serif;\r\n    min-height: 100vh;\r\n    background-color: #fafafa;\r\n    color: #262626;\r\n    padding-bottom: 3rem;\r\n}\r\n\r\nimg {\r\n    display: block;\r\n}\r\n\r\nd\r\n\r\n .btns {\r\n      /*width: 3%;*/\r\n      /*height: 20px;*/\r\n      background-color: #3897f0;\r\n      border: 1px solid #3897f0;\r\n      padding: 5px 12px;\r\n      margin-left: 5px;\r\n      color: #fff;\r\n      font-weight: bold;\r\n      cursor: pointer;\r\n      border-radius: 3px;\r\n    }\r\n\r\n.header {\r\n        height: 12%;\r\n        background-color: white;\r\n        border-bottom: 1px solid slategray;\r\n        position: fixed;\r\n        top: 0px;\r\n        left: 0px;\r\n        right: 0px;\r\n        overflow: hidden;\r\n    }\r\n\r\n#lg1 {\r\n        margin: 5px;\r\n        float: left;\r\n    }\r\n\r\n#lg2 {\r\n        border-left: 1px solid black;\r\n        padding-left: 40px;\r\n        margin: 20px;\r\n        float: left;\r\n    }\r\n\r\n#lg3 {\r\n        margin: 30px;\r\n        float: 0px;\r\n    }\r\n\r\n#searchbox {\r\n\r\n        margin-top: 2%;\r\n        margin-left: 7%;\r\n        float: left;\r\n\r\n    }\r\n\r\n#searchbtn {\r\n        margin-top: 2%;\r\n        float: center;\r\n\r\n    }\r\n\r\n.container {\r\n    max-width: 93.5rem;\r\n    margin: 0 auto;\r\n    /*margin-top : 200px;*/\r\n    padding: 0 2rem;\r\n\r\n}\r\n\r\n.container2 {\r\n    max-width: 93.5rem;\r\n    margin: 0 auto;\r\n    margin-top : 100px;\r\n    padding: 0 2rem;\r\n\r\n}\r\n\r\n.btn {\r\n    display: inline-block;\r\n    font: inherit;\r\n    background: none;\r\n    border: none;\r\n    color: inherit;\r\n    padding: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n#searchbtn {\r\n            margin-top: 25px;\r\n            float: center;\r\n\r\n        }\r\n\r\n.btn:focus {\r\n    outline: 0.5rem auto #4d90fe;\r\n}\r\n\r\n.visually-hidden {\r\n    position: absolute !important;\r\n    height: 1px;\r\n    width: 1px;\r\n    overflow: hidden;\r\n    clip: rect(1px, 1px, 1px, 1px);\r\n}\r\n\r\n/* Profile Section */\r\n\r\n.profile {\r\n    padding: 5rem 0;\r\n}\r\n\r\n.profile::after {\r\n    content: \"\";\r\n    display: block;\r\n    clear: both;\r\n}\r\n\r\n.profile-image {\r\n    float: left;\r\n    width: calc(33.333% - 1rem);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-right: 3rem;\r\n}\r\n\r\n.profile-image img {\r\n    border-radius: 50%;\r\n}\r\n\r\n.profile-user-settings,\r\n.profile-stats,\r\n.profile-bio {\r\n    float: left;\r\n    width: calc(66.666% - 2rem);\r\n}\r\n\r\n.profile-user-settings {\r\n    margin-top: 1.1rem;\r\n}\r\n\r\n.profile-user-name {\r\n    display: inline-block;\r\n    font-size: 3.2rem;\r\n    font-weight: 300;\r\n}\r\n\r\n.profile-edit-btn {\r\n    font-size: 1.4rem;\r\n    line-height: 1.8;\r\n    border: 0.1rem solid #dbdbdb;\r\n    border-radius: 0.3rem;\r\n    padding: 0 2.4rem;\r\n    margin-left: 2rem;\r\n}\r\n\r\n.profile-settings-btn {\r\n    font-size: 2rem;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.profile-stats {\r\n    margin-top: 2.3rem;\r\n}\r\n\r\n.profile-stats li {\r\n    display: inline-block;\r\n    font-size: 1.6rem;\r\n    line-height: 1.5;\r\n    margin-right: 4rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.profile-stats li:last-of-type {\r\n    margin-right: 0;\r\n}\r\n\r\n.profile-bio {\r\n    font-size: 1.6rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    margin-top: 2.3rem;\r\n}\r\n\r\n.profile-real-name,\r\n.profile-stat-count,\r\n.profile-edit-btn {\r\n    font-weight: 600;\r\n}\r\n\r\n/* Gallery Section */\r\n\r\n.gallery {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin: -1rem -1rem;\r\n    padding-bottom: 3rem;\r\n}\r\n\r\n.gallery-item {\r\n    position: relative;\r\n    flex: 1 0 22rem;\r\n    margin: 1rem;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n.gallery-item:hover .gallery-item-info,\r\n.gallery-item:focus .gallery-item-info {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 80%;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.gallery-item-info {\r\n    display: none;\r\n}\r\n\r\n.gallery-item-info li {\r\n    display: inline-block;\r\n    font-size: 1.7rem;\r\n    font-weight: 600;\r\n}\r\n\r\n.gallery-item-likes {\r\n    margin-right: 2.2rem;\r\n}\r\n\r\n.gallery-item-type {\r\n    position: absolute;\r\n    top: 1rem;\r\n    right: 1rem;\r\n    font-size: 2.5rem;\r\n    text-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.fa-clone,\r\n.fa-comment {\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n}\r\n\r\n.gallery-image {\r\n    width: 100%;\r\n    height: 80%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n/* Loader */\r\n\r\n.loader {\r\n    width: 5rem;\r\n    height: 5rem;\r\n    border: 0.6rem solid #999;\r\n    border-bottom-color: transparent;\r\n    border-radius: 50%;\r\n    margin: 0 auto;\r\n    -webkit-animation: loader 500ms linear infinite;\r\n            animation: loader 500ms linear infinite;\r\n}\r\n\r\n/* Media Query */\r\n\r\n@media screen and (max-width: 40rem) {\r\n    .profile {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        padding: 4rem 0;\r\n    }\r\n\r\n    .profile::after {\r\n        display: none;\r\n    }\r\n\r\n    .profile-image,\r\n    .profile-user-settings,\r\n    .profile-bio,\r\n    .profile-stats {\r\n        float: none;\r\n        width: auto;\r\n    }\r\n\r\n    .profile-image img {\r\n        width: 7.7rem;\r\n    }\r\n\r\n    .profile-user-settings {\r\n        flex-basis: calc(100% - 10.7rem);\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    .profile-user-name {\r\n        font-size: 2.2rem;\r\n    }\r\n\r\n    .profile-edit-btn {\r\n        order: 1;\r\n        padding: 0;\r\n        text-align: center;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    .profile-edit-btn {\r\n        margin-left: 0;\r\n    }\r\n\r\n    .profile-bio {\r\n        font-size: 1.4rem;\r\n        margin-top: 1.5rem;\r\n    }\r\n\r\n    .profile-edit-btn,\r\n    .profile-bio,\r\n    .profile-stats {\r\n        flex-basis: 100%;\r\n    }\r\n\r\n    .profile-stats {\r\n        order: 1;\r\n        margin-top: 1.5rem;\r\n    }\r\n\r\n    .profile-stats ul {\r\n        display: flex;\r\n        text-align: center;\r\n        padding: 1.2rem 0;\r\n        border-top: 0.1rem solid #dadada;\r\n        border-bottom: 0.1rem solid #dadada;\r\n    }\r\n\r\n    .profile-stats li {\r\n        font-size: 1.4rem;\r\n        flex: 1;\r\n        margin: 0;\r\n    }\r\n\r\n    .profile-stat-count {\r\n        display: block;\r\n    }\r\n}\r\n\r\n/* Spinner Animation */\r\n\r\n@-webkit-keyframes loader {\r\n    to {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes loader {\r\n    to {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3RoZXJwcm9maWxlL290aGVycHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztHQUNaOztBQUVEO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7R0FDWjs7QUFFRDtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtHQUNwQjs7QUFDQTtJQUNDLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7R0FDcEI7O0FBQ0Q7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0dBQ3BCOztBQUVIOzs7SUFHSSx1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YscUJBQXFCO0NBQ3hCOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFBQTs7O01BR0ssY0FBYztNQUNkLGlCQUFpQjtNQUNqQiwwQkFBMEI7TUFDMUIsMEJBQTBCO01BQzFCLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsbUJBQW1CO0tBQ3BCOztBQUVEO1FBQ0ksWUFBWTtRQUNaLHdCQUF3QjtRQUN4QixtQ0FBbUM7UUFDbkMsZ0JBQWdCO1FBQ2hCLFNBQVM7UUFDVCxVQUFVO1FBQ1YsV0FBVztRQUNYLGlCQUFpQjtLQUNwQjs7QUFFRDtRQUNJLFlBQVk7UUFDWixZQUFZO0tBQ2Y7O0FBRUQ7UUFDSSw2QkFBNkI7UUFDN0IsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixZQUFZO0tBQ2Y7O0FBRUQ7UUFDSSxhQUFhO1FBQ2IsV0FBVztLQUNkOztBQUVEOztRQUVJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsWUFBWTs7S0FFZjs7QUFFRDtRQUNJLGVBQWU7UUFDZixjQUFjOztLQUVqQjs7QUFFTDtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGdCQUFnQjs7Q0FFbkI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7O0NBRW5COztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0NBQ25COztBQUVEO1lBQ1ksaUJBQWlCO1lBQ2pCLGNBQWM7O1NBRWpCOztBQUVUO0lBQ0ksNkJBQTZCO0NBQ2hDOztBQUVEO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLCtCQUErQjtDQUNsQzs7QUFFRCxxQkFBcUI7O0FBRXJCO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDs7O0lBR0ksWUFBWTtJQUNaLDRCQUE0QjtDQUMvQjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUN0Qjs7QUFFRDs7O0lBR0ksaUJBQWlCO0NBQ3BCOztBQUVELHFCQUFxQjs7QUFFckI7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0NBQ25COztBQUVEOztJQUVJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsWUFBWTtJQUNaLFlBQVk7SUFDWixxQ0FBcUM7Q0FDeEM7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscURBQXFEO0NBQ3hEOztBQUVEOztJQUVJLG1DQUEyQjtZQUEzQiwyQkFBMkI7Q0FDOUI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFrQjtPQUFsQixrQkFBa0I7Q0FDckI7O0FBRUQsWUFBWTs7QUFFWjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdEQUF3QztZQUF4Qyx3Q0FBd0M7Q0FDM0M7O0FBRUQsaUJBQWlCOztBQUVqQjtJQUNJO1FBQ0ksY0FBYztRQUNkLGdCQUFnQjtRQUNoQixnQkFBZ0I7S0FDbkI7O0lBRUQ7UUFDSSxjQUFjO0tBQ2pCOztJQUVEOzs7O1FBSUksWUFBWTtRQUNaLFlBQVk7S0FDZjs7SUFFRDtRQUNJLGNBQWM7S0FDakI7O0lBRUQ7UUFDSSxpQ0FBaUM7UUFDakMsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixpQkFBaUI7S0FDcEI7O0lBRUQ7UUFDSSxrQkFBa0I7S0FDckI7O0lBRUQ7UUFDSSxTQUFTO1FBQ1QsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixpQkFBaUI7S0FDcEI7O0lBRUQ7UUFDSSxlQUFlO0tBQ2xCOztJQUVEO1FBQ0ksa0JBQWtCO1FBQ2xCLG1CQUFtQjtLQUN0Qjs7SUFFRDs7O1FBR0ksaUJBQWlCO0tBQ3BCOztJQUVEO1FBQ0ksU0FBUztRQUNULG1CQUFtQjtLQUN0Qjs7SUFFRDtRQUNJLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGlDQUFpQztRQUNqQyxvQ0FBb0M7S0FDdkM7O0lBRUQ7UUFDSSxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFVBQVU7S0FDYjs7SUFFRDtRQUNJLGVBQWU7S0FDbEI7Q0FDSjs7QUFFRCx1QkFBdUI7O0FBRXZCO0lBQ0k7UUFDSSxrQ0FBMEI7Z0JBQTFCLDBCQUEwQjtLQUM3QjtDQUNKOztBQUpEO0lBQ0k7UUFDSSxrQ0FBMEI7Z0JBQTFCLDBCQUEwQjtLQUM3QjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvb3RoZXJwcm9maWxlL290aGVycHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uYnRuLTEge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIC8qIGhlaWdodDogMTAlOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I2YzNjZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODk3ZjA7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gIH1cclxuXHJcbiAgLmJ0bnMtMSB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4OTdmMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODk3ZjA7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gIH1cclxuXHJcbiAgLmJ0bnMge1xyXG4gICAgLyp3aWR0aDogMyU7Ki9cclxuICAgIC8qaGVpZ2h0OiAyMHB4OyovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg5N2YwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM4OTdmMDtcclxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gICAuYnRuMSB7XHJcbiAgICAvKndpZHRoOiAzJTsqL1xyXG4gICAgLypoZWlnaHQ6IDIwcHg7Ki9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOWE5YTk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTlhOWE5O1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xyXG4gICAgLyptYXJnaW4tcmlnaHQ6IDogMTAwcHg7Ki9cclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gIC5idG4yIHtcclxuICAgIC8qd2lkdGg6IDMlOyovXHJcbiAgICAvKmhlaWdodDogMjBweDsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E5YTlhOTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhOWE5YTk7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgIC8qbWFyZ2luLWxlZnQ6IDQ1JTsqL1xyXG4gICAgLyptYXJnaW4tcmlnaHQ6IDogMTAwcHg7Ki9cclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG5cclxuKixcclxuKjo6YmVmb3JlLFxyXG4qOjphZnRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIGNvbG9yOiAjMjYyNjI2O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufWRcclxuXHJcbiAuYnRucyB7XHJcbiAgICAgIC8qd2lkdGg6IDMlOyovXHJcbiAgICAgIC8qaGVpZ2h0OiAyMHB4OyovXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODk3ZjA7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODk3ZjA7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogMTIlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzbGF0ZWdyYXk7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgI2xnMSB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgI2xnMiB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgICNsZzMge1xyXG4gICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgICAgICBmbG9hdDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNzZWFyY2hib3gge1xyXG5cclxuICAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICNzZWFyY2hidG4ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgICAgIGZsb2F0OiBjZW50ZXI7XHJcblxyXG4gICAgfVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDkzLjVyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIC8qbWFyZ2luLXRvcCA6IDIwMHB4OyovXHJcbiAgICBwYWRkaW5nOiAwIDJyZW07XHJcblxyXG59XHJcblxyXG4uY29udGFpbmVyMiB7XHJcbiAgICBtYXgtd2lkdGg6IDkzLjVyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3AgOiAxMDBweDtcclxuICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuXHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNzZWFyY2hidG4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgICAgICBmbG9hdDogY2VudGVyO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4uYnRuOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDAuNXJlbSBhdXRvICM0ZDkwZmU7XHJcbn1cclxuXHJcbi52aXN1YWxseS1oaWRkZW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xyXG59XHJcblxyXG4vKiBQcm9maWxlIFNlY3Rpb24gKi9cclxuXHJcbi5wcm9maWxlIHtcclxuICAgIHBhZGRpbmc6IDVyZW0gMDtcclxufVxyXG5cclxuLnByb2ZpbGU6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbWFnZSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiBjYWxjKDMzLjMzMyUgLSAxcmVtKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XHJcbn1cclxuXHJcbi5wcm9maWxlLWltYWdlIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5wcm9maWxlLXVzZXItc2V0dGluZ3MsXHJcbi5wcm9maWxlLXN0YXRzLFxyXG4ucHJvZmlsZS1iaW8ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogY2FsYyg2Ni42NjYlIC0gMnJlbSk7XHJcbn1cclxuXHJcbi5wcm9maWxlLXVzZXItc2V0dGluZ3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMS4xcmVtO1xyXG59XHJcblxyXG4ucHJvZmlsZS11c2VyLW5hbWUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzLjJyZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4ucHJvZmlsZS1lZGl0LWJ0biB7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjZGJkYmRiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG4gICAgcGFkZGluZzogMCAyLjRyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxufVxyXG5cclxuLnByb2ZpbGUtc2V0dGluZ3MtYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4ucHJvZmlsZS1zdGF0cyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjNyZW07XHJcbn1cclxuXHJcbi5wcm9maWxlLXN0YXRzIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIG1hcmdpbi1yaWdodDogNHJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByb2ZpbGUtc3RhdHMgbGk6bGFzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLnByb2ZpbGUtYmlvIHtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjNyZW07XHJcbn1cclxuXHJcbi5wcm9maWxlLXJlYWwtbmFtZSxcclxuLnByb2ZpbGUtc3RhdC1jb3VudCxcclxuLnByb2ZpbGUtZWRpdC1idG4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLyogR2FsbGVyeSBTZWN0aW9uICovXHJcblxyXG4uZ2FsbGVyeSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luOiAtMXJlbSAtMXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG4uZ2FsbGVyeS1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXg6IDEgMCAyMnJlbTtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZ2FsbGVyeS1pdGVtOmhvdmVyIC5nYWxsZXJ5LWl0ZW0taW5mbyxcclxuLmdhbGxlcnktaXRlbTpmb2N1cyAuZ2FsbGVyeS1pdGVtLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5nYWxsZXJ5LWl0ZW0taW5mbyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZ2FsbGVyeS1pdGVtLWluZm8gbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uZ2FsbGVyeS1pdGVtLWxpa2VzIHtcclxuICAgIG1hcmdpbi1yaWdodDogMi4ycmVtO1xyXG59XHJcblxyXG4uZ2FsbGVyeS1pdGVtLXR5cGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxcmVtO1xyXG4gICAgcmlnaHQ6IDFyZW07XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIHRleHQtc2hhZG93OiAwLjJyZW0gMC4ycmVtIDAuMnJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5mYS1jbG9uZSxcclxuLmZhLWNvbW1lbnQge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5nYWxsZXJ5LWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLyogTG9hZGVyICovXHJcblxyXG4ubG9hZGVyIHtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgYm9yZGVyOiAwLjZyZW0gc29saWQgIzk5OTtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBhbmltYXRpb246IGxvYWRlciA1MDBtcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi8qIE1lZGlhIFF1ZXJ5ICovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MHJlbSkge1xyXG4gICAgLnByb2ZpbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIHBhZGRpbmc6IDRyZW0gMDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZTo6YWZ0ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtaW1hZ2UsXHJcbiAgICAucHJvZmlsZS11c2VyLXNldHRpbmdzLFxyXG4gICAgLnByb2ZpbGUtYmlvLFxyXG4gICAgLnByb2ZpbGUtc3RhdHMge1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLWltYWdlIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDcuN3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS11c2VyLXNldHRpbmdzIHtcclxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLSAxMC43cmVtKTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLXVzZXItbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtZWRpdC1idG4ge1xyXG4gICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtZWRpdC1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLWJpbyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLWVkaXQtYnRuLFxyXG4gICAgLnByb2ZpbGUtYmlvLFxyXG4gICAgLnByb2ZpbGUtc3RhdHMge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtc3RhdHMge1xyXG4gICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1zdGF0cyB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMS4ycmVtIDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMC4xcmVtIHNvbGlkICNkYWRhZGE7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkICNkYWRhZGE7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtc3RhdHMgbGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLXN0YXQtY291bnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBTcGlubmVyIEFuaW1hdGlvbiAqL1xyXG5cclxuQGtleWZyYW1lcyBsb2FkZXIge1xyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/otherprofile/otherprofile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/otherprofile/otherprofile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"header\">\n\n  <img id=\"lg1\" src=\"assets/img/camera.jpg\" style=\"width:7%; height:80%;\">\n  <img id=\"lg2\" src=\"assets/img/logom.png\" style=\"width: 12%; height:70%;\">\n  <div id=\"searchbox\">\n    <input type=\"search\" placeholder=\"\">\n  </div>\n  <div id=\"searchbtn\">\n    <button type=\"submit\" class=\"btns\" (click)=\"Searchbtn()\">검색</button>\n    <a routerLink=\"/board\" class=\"btn1\"> Main </a>\n    <a routerLink=\"/upload\" class=\"btn2\"> Upload </a>\n    <a routerLink=\"/login\" class=\"btn2\"> Logout </a>\n  </div>\n</div> -->\n\n<br><br><br><br>\n<div style=\"overflow:scroll; width:100%; height:auto;\">\n  <div class=\"container\">\n\n    <!-- <div class=\"profile\"></div> -->\n\n    <div class=\"profile-image\">\n\n      <img src=\"assets/img/mains.jpg\" alt=\"\">\n\n    </div>\n\n    <div class=\"profile-user-settings\">\n\n      <h1 class=\"profile-user-name\">{{this.id}}</h1>\n\n      <button class=\"btn profile-edit-btn\" (click)=\"userfollowing()\"> 팔로잉 </button>\n\n      <button class=\"btn profile-settings-btn\" aria-label=\"profile settings\"><i class=\"fas fa-cog\" aria-hidden=\"true\"></i></button>\n\n    \n    \n\n  </div>\n    <div class=\"profile-stats\">\n      <ul>\n        <li>게시물 <span class=\"profile-stat-count\">{{this.posts}}</span> </li>\n        <li>팔로워 <span class=\"profile-stat-count\" >{{this.follower}}</span> </li>\n        <li>팔로잉 <span class=\"profile-stat-count\">{{this.followings}}</span> </li>\n      </ul>\n    </div>\n    <div class=\"profile-bio\">\n\n      <p><span class=\"profile-real-name\">{{this.username}}</span> </p>\n\n    </div>\n\n  </div>\n\n\n</div>\n\n\n\n\n<div class=\"container\">\n\n  <div class=\"gallery\">\n\n    <div class=\"gallery-item\" tabindex=\"0\">\n\n      <img src=\"https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop\" class=\"gallery-image\"\n        alt=\"\">\n\n      <div class=\"gallery-item-info\">\n        <ul>\n          <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\" aria-hidden=\"true\"></i>\n            56</li>\n          <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\n              aria-hidden=\"true\"></i> 2</li>\n        </ul>\n      </div>\n\n    </div>\n\n    <div class=\"gallery-item\" tabindex=\"0\">\n\n      <img src=\"https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop\" class=\"gallery-image\"\n        alt=\"\">\n\n      <div class=\"gallery-item-info\">\n\n        <ul>\n          <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\" aria-hidden=\"true\"></i>\n            89</li>\n          <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\n              aria-hidden=\"true\"></i> 5</li>\n        </ul>\n\n      </div>\n\n    </div>\n\n    <div class=\"gallery-item\" tabindex=\"0\">\n\n      <img src=\"https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop\" class=\"gallery-image\"\n        alt=\"\">\n\n      <div class=\"gallery-item-type\">\n\n        <span class=\"visually-hidden\">Gallery</span><i class=\"fas fa-clone\" aria-hidden=\"true\"></i>\n\n      </div>\n\n      <div class=\"gallery-item-info\">\n\n        <ul>\n          <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\" aria-hidden=\"true\"></i>\n            42</li>\n          <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\n              aria-hidden=\"true\"></i> 1</li>\n        </ul>\n\n      </div>\n\n    </div>\n\n    <div class=\"gallery-item\" tabindex=\"0\">\n\n      <img src=\"https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop\" class=\"gallery-image\"\n        alt=\"\">\n\n      <div class=\"gallery-item-type\">\n\n        <span class=\"visually-hidden\">Video</span><i class=\"fas fa-video\" aria-hidden=\"true\"></i>\n\n      </div>\n\n      <div class=\"gallery-item-info\">\n\n        <ul>\n          <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\" aria-hidden=\"true\"></i>\n            38</li>\n          <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\n              aria-hidden=\"true\"></i> 0</li>\n        </ul>\n\n      </div>\n\n    </div>\n\n    <div class=\"gallery-item\" tabindex=\"0\">\n\n      <img src=\"https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop\" class=\"gallery-image\"\n        alt=\"\">\n\n      <div class=\"gallery-item-type\">\n\n        <span class=\"visually-hidden\">Gallery</span><i class=\"fas fa-clone\" aria-hidden=\"true\"></i>\n\n      </div>\n\n      <div class=\"gallery-item-info\">\n\n        <ul>\n          <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\" aria-hidden=\"true\"></i>\n            47</li>\n          <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\n              aria-hidden=\"true\"></i> 1</li>\n        </ul>\n\n      </div>\n\n    </div>\n\n    <div class=\"gallery-item\" tabindex=\"0\">\n\n      <img src=\"https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop\" class=\"gallery-image\"\n        alt=\"\">\n\n      <div class=\"gallery-item-info\">\n\n        <ul>\n          <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\" aria-hidden=\"true\"></i>\n            94</li>\n          <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\n              aria-hidden=\"true\"></i> 3</li>\n        </ul>\n\n      </div>\n\n    </div>\n\n    <!-- <div class=\"gallery-item\" tabindex=\"0\">7\n\n        <img src=\"https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop\" class=\"gallery-image\"\n          alt=\"\">\n\n        <div class=\"gallery-item-type\">\n\n          <span class=\"visually-hidden\">Gallery</span><i class=\"fas fa-clone\" aria-hidden=\"true\"></i>\n\n        </div>\n\n        <div class=\"gallery-item-info\">\n\n          <ul>\n            <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\"\n                aria-hidden=\"true\"></i> 52</li>\n            <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\n                aria-hidden=\"true\"></i> 4</li>\n          </ul>\n\n        </div>\n\n      </div>  -->\n\n    <!-- <div class=\"gallery-item\" tabindex=\"0\">8\n\n        <img src=\"https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop\" class=\"gallery-image\"\n          alt=\"\">\n\n        <div class=\"gallery-item-info\">\n\n          <ul>\n            <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\"\n                aria-hidden=\"true\"></i> 66</li>\n            <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\n                aria-hidden=\"true\"></i> 2</li>\n          </ul>\n\n        </div>\n\n      </div> \n\n\n\n\n\n\n    </div>\n    \n   <div class=\"loader\"></div> -->\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/otherprofile/otherprofile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/otherprofile/otherprofile.component.ts ***!
  \********************************************************/
/*! exports provided: OtherprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherprofileComponent", function() { return OtherprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OtherprofileComponent = /** @class */ (function () {
    function OtherprofileComponent(router, http, userService) {
        this.router = router;
        this.http = http;
        this.userService = userService;
    }
    OtherprofileComponent.prototype.ngOnInit = function () {
        this.otherInfo();
    };
    OtherprofileComponent.prototype.otherInfo = function () {
        var _this = this;
        localStorage.setItem('othername', 'jaeminwoo');
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .append("id", localStorage.getItem('users'));
        console.log(httpParams);
        this.http.post('http://localhost:3000/member/userbyid', httpParams).subscribe(function (res) {
            _this.information = res.data;
            _this.follower = _this.information.follower.length;
            _this.followings = _this.information.following.length;
            _this.posts = _this.information.posts.length;
            _this.id = _this.information.id;
            _this.username = _this.information.username;
            console.log(_this.information);
        });
    };
    OtherprofileComponent.prototype.userfollowing = function () {
        var httpParamss = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .append("followuser", localStorage.getItem('username'))
            .append("state", "On");
        var followuser = localStorage.getItem('othername');
        var state = "On";
        return this.http.post('http://localhost:3000/member/addfollowing', {
            "followuser": followuser,
            "state": state
        }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            })
        });
    };
    OtherprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-otherprofile',
            template: __webpack_require__(/*! ./otherprofile.component.html */ "./src/app/otherprofile/otherprofile.component.html"),
            styles: [__webpack_require__(/*! ./otherprofile.component.css */ "./src/app/otherprofile/otherprofile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], OtherprofileComponent);
    return OtherprofileComponent;
}());



/***/ }),

/***/ "./src/app/restaurant/restaurant.component.css":
/*!*****************************************************!*\
  !*** ./src/app/restaurant/restaurant.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\r\n    font-size: 10px;\r\n}\r\n\r\n.btn-1 {\r\n    width: 20%;\r\n    /* height: 10%; */\r\n    background-color: #b6c3cf;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n    margin: 1%;\r\n  }\r\n\r\n.btns-1 {\r\n    width: 20%;\r\n    height: 30px;\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    margin-left: 1%;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n    margin: 1%;\r\n  }\r\n\r\n.btns {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    margin-left: 5px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n.btn1 {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #a9a9a9;\r\n    border: 1px solid #a9a9a9;\r\n    padding: 5px 12px;\r\n    margin-left: 35%;\r\n    /*margin-right: : 100px;*/\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n.btn2 {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #a9a9a9;\r\n    border: 1px solid #a9a9a9;\r\n    padding: 5px 12px;\r\n    /*margin-left: 45%;*/\r\n    /*margin-right: : 100px;*/\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: \"Open Sans\", Arial, sans-serif;\r\n    min-height: 100vh;\r\n    background-color: #fafafa;\r\n    color: #262626;\r\n    padding-bottom: 3rem;\r\n}\r\n\r\nimg {\r\n    display: block;\r\n}\r\n\r\nd\r\n\r\n .btns {\r\n      /*width: 3%;*/\r\n      /*height: 20px;*/\r\n      background-color: #3897f0;\r\n      border: 1px solid #3897f0;\r\n      padding: 5px 12px;\r\n      margin-left: 5px;\r\n      color: #fff;\r\n      font-weight: bold;\r\n      cursor: pointer;\r\n      border-radius: 3px;\r\n    }\r\n\r\n.header {\r\n        height: 12%;\r\n        background-color: white;\r\n        border-bottom: 1px solid slategray;\r\n        position: fixed;\r\n        top: 0px;\r\n        left: 0px;\r\n        right: 0px;\r\n        overflow: hidden;\r\n    }\r\n\r\n#lg1 {\r\n        margin: 5px;\r\n        float: left;\r\n    }\r\n\r\n#lg2 {\r\n        border-left: 1px solid black;\r\n        padding-left: 40px;\r\n        margin: 20px;\r\n        float: left;\r\n    }\r\n\r\n#lg3 {\r\n        margin: 30px;\r\n        float: 0px;\r\n    }\r\n\r\n#searchbox {\r\n\r\n        margin-top: 2%;\r\n        margin-left: 7%;\r\n        float: left;\r\n\r\n    }\r\n\r\n#searchbtn {\r\n        margin-top: 2%;\r\n        float: center;\r\n\r\n    }\r\n\r\n.container {\r\n    max-width: 93.5rem;\r\n    margin: 0 auto;\r\n    /*margin-top : 200px;*/\r\n    padding: 0 2rem;\r\n\r\n}\r\n\r\n.container2 {\r\n    max-width: 93.5rem;\r\n    margin: 0 auto;\r\n    margin-top : 100px;\r\n    padding: 0 2rem;\r\n\r\n}\r\n\r\n.btn {\r\n    display: inline-block;\r\n    font: inherit;\r\n    background: none;\r\n    border: none;\r\n    color: inherit;\r\n    padding: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n#searchbtn {\r\n            margin-top: 25px;\r\n            float: center;\r\n\r\n        }\r\n\r\n.btn:focus {\r\n    outline: 0.5rem auto #4d90fe;\r\n}\r\n\r\n.visually-hidden {\r\n    position: absolute !important;\r\n    height: 1px;\r\n    width: 1px;\r\n    overflow: hidden;\r\n    clip: rect(1px, 1px, 1px, 1px);\r\n}\r\n\r\n/* Profile Section */\r\n\r\n.profile {\r\n    padding: 5rem 0;\r\n}\r\n\r\n.profile::after {\r\n    content: \"\";\r\n    display: block;\r\n    clear: both;\r\n}\r\n\r\n.profile-image {\r\n    float: left;\r\n    width: calc(33.333% - 1rem);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-right: 3rem;\r\n}\r\n\r\n.profile-image img {\r\n    border-radius: 50%;\r\n}\r\n\r\n.profile-user-settings,\r\n.profile-stats,\r\n.profile-bio {\r\n    float: left;\r\n    width: calc(66.666% - 2rem);\r\n}\r\n\r\n.profile-user-settings {\r\n    margin-top: 1.1rem;\r\n}\r\n\r\n.profile-user-name {\r\n    display: inline-block;\r\n    font-size: 3.2rem;\r\n    font-weight: 300;\r\n}\r\n\r\n.profile-edit-btn {\r\n    font-size: 1.4rem;\r\n    line-height: 1.8;\r\n    border: 0.1rem solid #dbdbdb;\r\n    border-radius: 0.3rem;\r\n    padding: 0 2.4rem;\r\n    margin-left: 2rem;\r\n}\r\n\r\n.profile-settings-btn {\r\n    font-size: 2rem;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.profile-stats {\r\n    margin-top: 2.3rem;\r\n}\r\n\r\n.profile-stats li {\r\n    display: inline-block;\r\n    font-size: 1.6rem;\r\n    line-height: 1.5;\r\n    margin-right: 4rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.profile-stats li:last-of-type {\r\n    margin-right: 0;\r\n}\r\n\r\n.profile-bio {\r\n    font-size: 1.6rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    margin-top: 2.3rem;\r\n}\r\n\r\n.profile-real-name,\r\n.profile-stat-count,\r\n.profile-edit-btn {\r\n    font-size: 20px;\r\n    font-weight: 450;\r\n}\r\n\r\n.profile-real-name,\r\n.profile-stat-count,\r\n.profile-edit-btn {\r\n    font-size: 20px;\r\n    font-weight: 450;\r\n}\r\n\r\n/* Gallery Section */\r\n\r\n.gallery {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin: -1rem -1rem;\r\n    padding-bottom: 3rem;\r\n}\r\n\r\n.gallery-item {\r\n    position: relative;\r\n    flex: 1 0 22rem;\r\n    margin: 1rem;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n.gallery-item:hover .gallery-item-info,\r\n.gallery-item:focus .gallery-item-info {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 80%;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.gallery-item-info {\r\n    display: none;\r\n}\r\n\r\n.gallery-item-info li {\r\n    display: inline-block;\r\n    font-size: 1.7rem;\r\n    font-weight: 600;\r\n}\r\n\r\n.gallery-item-likes {\r\n    margin-right: 2.2rem;\r\n}\r\n\r\n.gallery-item-type {\r\n    position: absolute;\r\n    top: 1rem;\r\n    right: 1rem;\r\n    font-size: 2.5rem;\r\n    text-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.fa-clone,\r\n.fa-comment {\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n}\r\n\r\n.gallery-image {\r\n    width: 100%;\r\n    height: 80%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n/* Loader */\r\n\r\n.loader {\r\n    width: 5rem;\r\n    height: 5rem;\r\n    border: 0.6rem solid #999;\r\n    border-bottom-color: transparent;\r\n    border-radius: 50%;\r\n    margin: 0 auto;\r\n    -webkit-animation: loader 500ms linear infinite;\r\n            animation: loader 500ms linear infinite;\r\n}\r\n\r\n/* Media Query */\r\n\r\n@media screen and (max-width: 40rem) {\r\n    .profile {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        padding: 4rem 0;\r\n    }\r\n\r\n    .profile::after {\r\n        display: none;\r\n    }\r\n\r\n    .profile-image,\r\n    .profile-user-settings,\r\n    .profile-bio,\r\n    .profile-stats {\r\n        float: none;\r\n        width: auto;\r\n    }\r\n\r\n    .profile-image img {\r\n        width: 7.7rem;\r\n    }\r\n\r\n    .profile-user-settings {\r\n        flex-basis: calc(100% - 10.7rem);\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    .profile-user-name {\r\n        font-size: 2.2rem;\r\n    }\r\n\r\n    .profile-edit-btn {\r\n        order: 1;\r\n        padding: 0;\r\n        text-align: center;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    .profile-edit-btn {\r\n        margin-left: 0;\r\n    }\r\n\r\n    .profile-bio {\r\n        font-size: 1.5rem;\r\n        margin-top: 1.2rem;\r\n    }\r\n\r\n    .profile-edit-btn,\r\n    .profile-bio,\r\n    .profile-stats {\r\n        flex-basis: 100%;\r\n    }\r\n\r\n    .profile-stats {\r\n        order: 1;\r\n        margin-top: 1.5rem;\r\n    }\r\n\r\n    .profile-stats ul {\r\n        display: flex;\r\n        text-align: center;\r\n        padding: 1.2rem 0;\r\n        border-top: 0.1rem solid #dadada;\r\n        border-bottom: 0.1rem solid #dadada;\r\n    }\r\n\r\n    .profile-stats li {\r\n        font-size: 1.4rem;\r\n        flex: 1;\r\n        margin: 0;\r\n    }\r\n\r\n    .profile-stat-count {\r\n        display: block;\r\n    }\r\n}\r\n\r\n/* Spinner Animation */\r\n\r\n@-webkit-keyframes loader {\r\n    to {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes loader {\r\n    to {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudC9yZXN0YXVyYW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0dBQ1o7O0FBRUQ7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztHQUNaOztBQUVEO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0dBQ3BCOztBQUNBO0lBQ0MsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtHQUNwQjs7QUFDRDtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7R0FDcEI7O0FBRUg7OztJQUdJLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxlQUFlO0NBQ2xCOztBQUFBOzs7TUFHSyxjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLDBCQUEwQjtNQUMxQiwwQkFBMEI7TUFDMUIsa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixtQkFBbUI7S0FDcEI7O0FBRUQ7UUFDSSxZQUFZO1FBQ1osd0JBQXdCO1FBQ3hCLG1DQUFtQztRQUNuQyxnQkFBZ0I7UUFDaEIsU0FBUztRQUNULFVBQVU7UUFDVixXQUFXO1FBQ1gsaUJBQWlCO0tBQ3BCOztBQUVEO1FBQ0ksWUFBWTtRQUNaLFlBQVk7S0FDZjs7QUFFRDtRQUNJLDZCQUE2QjtRQUM3QixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLFlBQVk7S0FDZjs7QUFFRDtRQUNJLGFBQWE7UUFDYixXQUFXO0tBQ2Q7O0FBRUQ7O1FBRUksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixZQUFZOztLQUVmOztBQUVEO1FBQ0ksZUFBZTtRQUNmLGNBQWM7O0tBRWpCOztBQUVMO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZ0JBQWdCOztDQUVuQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjs7Q0FFbkI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7Q0FDbkI7O0FBRUQ7WUFDWSxpQkFBaUI7WUFDakIsY0FBYzs7U0FFakI7O0FBRVQ7SUFDSSw2QkFBNkI7Q0FDaEM7O0FBRUQ7SUFDSSw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsK0JBQStCO0NBQ2xDOztBQUVELHFCQUFxQjs7QUFFckI7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEOzs7SUFHSSxZQUFZO0lBQ1osNEJBQTRCO0NBQy9COztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCOztBQUVEOzs7SUFHSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0NBQ3BCOztBQUVEOzs7SUFHSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0NBQ3BCOztBQUdELHFCQUFxQjs7QUFFckI7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0NBQ25COztBQUVEOztJQUVJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsWUFBWTtJQUNaLFlBQVk7SUFDWixxQ0FBcUM7Q0FDeEM7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscURBQXFEO0NBQ3hEOztBQUVEOztJQUVJLG1DQUEyQjtZQUEzQiwyQkFBMkI7Q0FDOUI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFrQjtPQUFsQixrQkFBa0I7Q0FDckI7O0FBRUQsWUFBWTs7QUFFWjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdEQUF3QztZQUF4Qyx3Q0FBd0M7Q0FDM0M7O0FBRUQsaUJBQWlCOztBQUVqQjtJQUNJO1FBQ0ksY0FBYztRQUNkLGdCQUFnQjtRQUNoQixnQkFBZ0I7S0FDbkI7O0lBRUQ7UUFDSSxjQUFjO0tBQ2pCOztJQUVEOzs7O1FBSUksWUFBWTtRQUNaLFlBQVk7S0FDZjs7SUFFRDtRQUNJLGNBQWM7S0FDakI7O0lBRUQ7UUFDSSxpQ0FBaUM7UUFDakMsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixpQkFBaUI7S0FDcEI7O0lBRUQ7UUFDSSxrQkFBa0I7S0FDckI7O0lBRUQ7UUFDSSxTQUFTO1FBQ1QsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixpQkFBaUI7S0FDcEI7O0lBRUQ7UUFDSSxlQUFlO0tBQ2xCOztJQUVEO1FBQ0ksa0JBQWtCO1FBQ2xCLG1CQUFtQjtLQUN0Qjs7SUFFRDs7O1FBR0ksaUJBQWlCO0tBQ3BCOztJQUVEO1FBQ0ksU0FBUztRQUNULG1CQUFtQjtLQUN0Qjs7SUFFRDtRQUNJLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGlDQUFpQztRQUNqQyxvQ0FBb0M7S0FDdkM7O0lBRUQ7UUFDSSxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFVBQVU7S0FDYjs7SUFFRDtRQUNJLGVBQWU7S0FDbEI7Q0FDSjs7QUFFRCx1QkFBdUI7O0FBRXZCO0lBQ0k7UUFDSSxrQ0FBMEI7Z0JBQTFCLDBCQUEwQjtLQUM3QjtDQUNKOztBQUpEO0lBQ0k7UUFDSSxrQ0FBMEI7Z0JBQTFCLDBCQUEwQjtLQUM3QjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvcmVzdGF1cmFudC9yZXN0YXVyYW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4tMSB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgLyogaGVpZ2h0OiAxMCU7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZjM2NmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM4OTdmMDtcclxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgfVxyXG5cclxuICAuYnRucy0xIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg5N2YwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM4OTdmMDtcclxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgfVxyXG5cclxuICAuYnRucyB7XHJcbiAgICAvKndpZHRoOiAzJTsqL1xyXG4gICAgLypoZWlnaHQ6IDIwcHg7Ki9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODk3ZjA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg5N2YwO1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcbiAgIC5idG4xIHtcclxuICAgIC8qd2lkdGg6IDMlOyovXHJcbiAgICAvKmhlaWdodDogMjBweDsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E5YTlhOTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhOWE5YTk7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbiAgICAvKm1hcmdpbi1yaWdodDogOiAxMDBweDsqL1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcbiAgLmJ0bjIge1xyXG4gICAgLyp3aWR0aDogMyU7Ki9cclxuICAgIC8qaGVpZ2h0OiAyMHB4OyovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTlhOWE5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2E5YTlhOTtcclxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgLyptYXJnaW4tbGVmdDogNDUlOyovXHJcbiAgICAvKm1hcmdpbi1yaWdodDogOiAxMDBweDsqL1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcblxyXG4qLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgY29sb3I6ICMyNjI2MjY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59ZFxyXG5cclxuIC5idG5zIHtcclxuICAgICAgLyp3aWR0aDogMyU7Ki9cclxuICAgICAgLypoZWlnaHQ6IDIwcHg7Ki9cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4OTdmMDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzM4OTdmMDtcclxuICAgICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMiU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNsYXRlZ3JheTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICAjbGcxIHtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAjbGcyIHtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgI2xnMyB7XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgICAgIGZsb2F0OiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3NlYXJjaGJveCB7XHJcblxyXG4gICAgICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3JTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgI3NlYXJjaGJ0biB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAgICAgZmxvYXQ6IGNlbnRlcjtcclxuXHJcbiAgICB9XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogOTMuNXJlbTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgLyptYXJnaW4tdG9wIDogMjAwcHg7Ki9cclxuICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuXHJcbn1cclxuXHJcbi5jb250YWluZXIyIHtcclxuICAgIG1heC13aWR0aDogOTMuNXJlbTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcCA6IDEwMHB4O1xyXG4gICAgcGFkZGluZzogMCAycmVtO1xyXG5cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250OiBpbmhlcml0O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI3NlYXJjaGJ0biB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbi5idG46Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMC41cmVtIGF1dG8gIzRkOTBmZTtcclxufVxyXG5cclxuLnZpc3VhbGx5LWhpZGRlbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XHJcbn1cclxuXHJcbi8qIFByb2ZpbGUgU2VjdGlvbiAqL1xyXG5cclxuLnByb2ZpbGUge1xyXG4gICAgcGFkZGluZzogNXJlbSAwO1xyXG59XHJcblxyXG4ucHJvZmlsZTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5wcm9maWxlLWltYWdlIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IGNhbGMoMzMuMzMzJSAtIDFyZW0pO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcclxufVxyXG5cclxuLnByb2ZpbGUtaW1hZ2UgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnByb2ZpbGUtdXNlci1zZXR0aW5ncyxcclxuLnByb2ZpbGUtc3RhdHMsXHJcbi5wcm9maWxlLWJpbyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiBjYWxjKDY2LjY2NiUgLSAycmVtKTtcclxufVxyXG5cclxuLnByb2ZpbGUtdXNlci1zZXR0aW5ncyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjFyZW07XHJcbn1cclxuXHJcbi5wcm9maWxlLXVzZXItbmFtZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDMuMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5wcm9maWxlLWVkaXQtYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcclxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICNkYmRiZGI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgICBwYWRkaW5nOiAwIDIuNHJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4ucHJvZmlsZS1zZXR0aW5ncy1idG4ge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5wcm9maWxlLXN0YXRzIHtcclxuICAgIG1hcmdpbi10b3A6IDIuM3JlbTtcclxufVxyXG5cclxuLnByb2ZpbGUtc3RhdHMgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucHJvZmlsZS1zdGF0cyBsaTpsYXN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4ucHJvZmlsZS1iaW8ge1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIG1hcmdpbi10b3A6IDIuM3JlbTtcclxufVxyXG5cclxuLnByb2ZpbGUtcmVhbC1uYW1lLFxyXG4ucHJvZmlsZS1zdGF0LWNvdW50LFxyXG4ucHJvZmlsZS1lZGl0LWJ0biB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDUwO1xyXG59XHJcblxyXG4ucHJvZmlsZS1yZWFsLW5hbWUsXHJcbi5wcm9maWxlLXN0YXQtY291bnQsXHJcbi5wcm9maWxlLWVkaXQtYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0NTA7XHJcbn1cclxuXHJcblxyXG4vKiBHYWxsZXJ5IFNlY3Rpb24gKi9cclxuXHJcbi5nYWxsZXJ5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW46IC0xcmVtIC0xcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbn1cclxuXHJcbi5nYWxsZXJ5LWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleDogMSAwIDIycmVtO1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5nYWxsZXJ5LWl0ZW06aG92ZXIgLmdhbGxlcnktaXRlbS1pbmZvLFxyXG4uZ2FsbGVyeS1pdGVtOmZvY3VzIC5nYWxsZXJ5LWl0ZW0taW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLmdhbGxlcnktaXRlbS1pbmZvIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5nYWxsZXJ5LWl0ZW0taW5mbyBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5nYWxsZXJ5LWl0ZW0tbGlrZXMge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyLjJyZW07XHJcbn1cclxuXHJcbi5nYWxsZXJ5LWl0ZW0tdHlwZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDFyZW07XHJcbiAgICByaWdodDogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAuMnJlbSAwLjJyZW0gMC4ycmVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmZhLWNsb25lLFxyXG4uZmEtY29tbWVudCB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxufVxyXG5cclxuLmdhbGxlcnktaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4vKiBMb2FkZXIgKi9cclxuXHJcbi5sb2FkZXIge1xyXG4gICAgd2lkdGg6IDVyZW07XHJcbiAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICBib3JkZXI6IDAuNnJlbSBzb2xpZCAjOTk5O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGFuaW1hdGlvbjogbG9hZGVyIDUwMG1zIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuLyogTWVkaWEgUXVlcnkgKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwcmVtKSB7XHJcbiAgICAucHJvZmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgcGFkZGluZzogNHJlbSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlOjphZnRlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1pbWFnZSxcclxuICAgIC5wcm9maWxlLXVzZXItc2V0dGluZ3MsXHJcbiAgICAucHJvZmlsZS1iaW8sXHJcbiAgICAucHJvZmlsZS1zdGF0cyB7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtaW1hZ2UgaW1nIHtcclxuICAgICAgICB3aWR0aDogNy43cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLXVzZXItc2V0dGluZ3Mge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMTAwJSAtIDEwLjdyZW0pO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtdXNlci1uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1lZGl0LWJ0biB7XHJcbiAgICAgICAgb3JkZXI6IDE7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1lZGl0LWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtYmlvIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxLjJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtZWRpdC1idG4sXHJcbiAgICAucHJvZmlsZS1iaW8sXHJcbiAgICAucHJvZmlsZS1zdGF0cyB7XHJcbiAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1zdGF0cyB7XHJcbiAgICAgICAgb3JkZXI6IDE7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLXN0YXRzIHVsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxLjJyZW0gMDtcclxuICAgICAgICBib3JkZXItdG9wOiAwLjFyZW0gc29saWQgI2RhZGFkYTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgI2RhZGFkYTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1zdGF0cyBsaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtc3RhdC1jb3VudCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIFNwaW5uZXIgQW5pbWF0aW9uICovXHJcblxyXG5Aa2V5ZnJhbWVzIGxvYWRlciB7XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/restaurant/restaurant.component.html":
/*!******************************************************!*\
  !*** ./src/app/restaurant/restaurant.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"header\">\n\n  <img id=\"lg1\" src=\"assets/img/camera.jpg\" style=\"width:7%; height:80%;\">\n  <img id=\"lg2\" src=\"assets/img/logom.png\" style=\"width: 12%; height:70%;\">\n  <div id=\"searchbox\">\n    <input type=\"search\" placeholder=\"\">\n  </div>\n  <div id=\"searchbtn\">\n    <button type=\"submit\" class=\"btns\" (click)=\"Searchbtn()\">검색</button>\n    <a routerLink=\"/board\" class=\"btn1\"> Main </a>\n    <a routerLink=\"/upload\" class=\"btn2\"> Upload </a>\n    <a routerLink=\"/login\" class=\"btn2\"> Logout </a>\n  </div>\n</div> -->\n\n<br><br><br><br>\n<div style=\"overflow:scroll; width:100%; height:auto;\">\n  <div class=\"container\">\n\n    <!-- <div class=\"profile\"></div> -->\n\n    <div class=\"profile-image\">\n\n      <img src=\"assets/img/mains.jpg\" alt=\"\">\n\n    </div>\n\n    <div class=\"profile-user-settings\">\n\n      <!-- 맛집 이름 -->\n      <h2 class=\"profile-user-name\">레스토랑 테스트{{this.name}}</h2>\n\n      <button class=\"btn profile-settings-btn\" aria-label=\"profile settings\"><i class=\"fas fa-cog\" aria-hidden=\"true\"></i></button>\n    </div>\n\n    <!-- 식당 소개\n    <div class=\"profile-stats\">\n      <ul>\n        주소, 전화번호, 영업시간, 브레이크타임\n        <li> 주소 <span class=\"profile-stat-count\">{{this.posts}}</span></li>\n        <li> 전화번호 <span class=\"profile-stat-count\">{{this.follower}}</span></li>\n        <li> 전화번호 <span class=\"profile-stat-count\">{{this.follower}}</span></li>\n        <li> 브레이크 타임 <span class=\"profile-stat-count\">{{this.following}}</span></li>\n      </ul>\n    </div> -->\n\n    <div class=\"profile-bio\">\n\n      <p> address : <span class=\"profile-real-name\"> ㅁㅁ{{this.address}}</span></p>\n      <p> telephone : <span class=\"profile-real-name\"> ㅁㅁ{{this.telephone}}</span></p>\n      <p> business_hours : <span class=\"profile-real-name\"> ㅁㅁ{{this.business_hours}}</span></p>\n      <p> breake_time : <span class=\"profile-real-name\"> ㅁㅁ{{this.breake_time}}</span></p>\n    </div>\n  </div>\n</div>\n\n\n<!-- ngfor문으로 사진 출력 -->\n\n\n<div class=\"container\">\n\n  <div class=\"gallery\">\n\n    <div class=\"gallery-item\" tabindex=\"0\">\n\n      <img src=\"https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop\" class=\"gallery-image\"\n        alt=\"\">\n\n      <div class=\"gallery-item-info\">\n        <ul>\n          <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\" aria-hidden=\"true\"></i>\n            56</li>\n          <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\n              aria-hidden=\"true\"></i> 2</li>\n        </ul>\n      </div>\n\n    </div>\n\n    <div class=\"gallery-item\" tabindex=\"0\">\n\n      <img src=\"https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop\" class=\"gallery-image\"\n        alt=\"\">\n\n      <div class=\"gallery-item-info\">\n\n        <ul>\n          <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\" aria-hidden=\"true\"></i>\n            89</li>\n          <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\n              aria-hidden=\"true\"></i> 5</li>\n        </ul>\n\n      </div>\n\n    </div>\n\n    <div class=\"gallery-item\" tabindex=\"0\">\n\n      <img src=\"https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop\" class=\"gallery-image\"\n        alt=\"\">\n\n      <div class=\"gallery-item-type\">\n\n        <span class=\"visually-hidden\">Gallery</span><i class=\"fas fa-clone\" aria-hidden=\"true\"></i>\n\n      </div>\n\n      <div class=\"gallery-item-info\">\n\n        <ul>\n          <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\" aria-hidden=\"true\"></i>\n            42</li>\n          <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\n              aria-hidden=\"true\"></i> 1</li>\n        </ul>\n\n      </div>\n\n    </div>\n\n    <div class=\"gallery-item\" tabindex=\"0\">\n\n      <img src=\"https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop\" class=\"gallery-image\"\n        alt=\"\">\n\n      <div class=\"gallery-item-type\">\n\n        <span class=\"visually-hidden\">Video</span><i class=\"fas fa-video\" aria-hidden=\"true\"></i>\n\n      </div>\n\n      <div class=\"gallery-item-info\">\n\n        <ul>\n          <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\" aria-hidden=\"true\"></i>\n            38</li>\n          <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\n              aria-hidden=\"true\"></i> 0</li>\n        </ul>\n\n      </div>\n\n    </div>\n\n    <div class=\"gallery-item\" tabindex=\"0\">\n\n      <img src=\"https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop\" class=\"gallery-image\"\n        alt=\"\">\n\n      <div class=\"gallery-item-type\">\n\n        <span class=\"visually-hidden\">Gallery</span><i class=\"fas fa-clone\" aria-hidden=\"true\"></i>\n\n      </div>\n\n      <div class=\"gallery-item-info\">\n\n        <ul>\n          <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\" aria-hidden=\"true\"></i>\n            47</li>\n          <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\n              aria-hidden=\"true\"></i> 1</li>\n        </ul>\n\n      </div>\n\n    </div>\n\n    <div class=\"gallery-item\" tabindex=\"0\">\n\n      <img src=\"https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop\" class=\"gallery-image\"\n        alt=\"\">\n\n      <div class=\"gallery-item-info\">\n\n        <ul>\n          <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\" aria-hidden=\"true\"></i>\n            94</li>\n          <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\n              aria-hidden=\"true\"></i> 3</li>\n        </ul>\n\n      </div>\n\n    </div>\n\n\n    </div>\n    \n   <div class=\"loader\"></div> -->\n\n  </div>"

/***/ }),

/***/ "./src/app/restaurant/restaurant.component.ts":
/*!****************************************************!*\
  !*** ./src/app/restaurant/restaurant.component.ts ***!
  \****************************************************/
/*! exports provided: RestaurantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantComponent", function() { return RestaurantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestaurantComponent = /** @class */ (function () {
    function RestaurantComponent(http) {
        this.http = http;
    }
    RestaurantComponent.prototype.ngOnInit = function () {
        this.restInform();
    };
    RestaurantComponent.prototype.restInform = function () {
        var _this = this;
        var name = localStorage.getItem('resname');
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .append("restID", name);
        this.http.post('http://localhost:3000/restaurant', httpParams).subscribe(function (res) {
            _this.restinfo = res.data;
            _this.name = _this.restinfo.restaurant;
            _this.address = _this.restinfo.address;
            _this.telephone = _this.restinfo.telephone;
            _this.business_hours = _this.restinfo.business_hours;
            _this.breake_time = _this.restinfo.breake_time;
        });
    };
    RestaurantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-restaurant',
            template: __webpack_require__(/*! ./restaurant.component.html */ "./src/app/restaurant/restaurant.component.html"),
            styles: [__webpack_require__(/*! ./restaurant.component.css */ "./src/app/restaurant/restaurant.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestaurantComponent);
    return RestaurantComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _user_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/userprofile/userprofile.component */ "./src/app/user/userprofile/userprofile.component.ts");
/* harmony import */ var _googlemap_googlemap_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./googlemap/googlemap.component */ "./src/app/googlemap/googlemap.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _user_changeprofile_changeprofile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/changeprofile/changeprofile.component */ "./src/app/user/changeprofile/changeprofile.component.ts");
/* harmony import */ var _otherprofile_otherprofile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./otherprofile/otherprofile.component */ "./src/app/otherprofile/otherprofile.component.ts");
/* harmony import */ var _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./restaurant/restaurant.component */ "./src/app/restaurant/restaurant.component.ts");
/* harmony import */ var _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./userlist/userlist.component */ "./src/app/userlist/userlist.component.ts");



//Sign in을 위해








// import { AuthGuard } from './auth/auth.guard';
var appRoutes = [
    {
        path: 'signup', component: _user_user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"],
        children: [{ path: '', component: _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__["SignUpComponent"] }]
    },
    {
        path: 'login', component: _user_user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"],
        children: [{ path: '', component: _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"] }]
    },
    {
        path: 'profile', component: _user_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_4__["UserprofileComponent"]
    },
    {
        path: 'upload', component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_2__["UploadComponent"]
    },
    {
        path: 'googlemap', component: _googlemap_googlemap_component__WEBPACK_IMPORTED_MODULE_5__["GooglemapComponent"]
    },
    {
        path: 'board', component: _board_board_component__WEBPACK_IMPORTED_MODULE_6__["BoardComponent"]
    },
    {
        path: 'change', component: _user_changeprofile_changeprofile_component__WEBPACK_IMPORTED_MODULE_7__["ChangeprofileComponent"]
    },
    {
        path: 'other', component: _otherprofile_otherprofile_component__WEBPACK_IMPORTED_MODULE_8__["OtherprofileComponent"]
    },
    {
        path: 'rt', component: _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_9__["RestaurantComponent"]
    },
    {
        path: 'userlist', component: _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_10__["UserlistComponent"]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];


/***/ }),

/***/ "./src/app/shared/upload.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/upload.service.ts ***!
  \******************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var UploadService = /** @class */ (function () {
    // readonly baseUrls = 'http://localhost:3000/member/info';
    function UploadService(http) {
        this.http = http;
        //보내줄 base주소 설정해줌
        this.baseURL = 'http://localhost:3000/posts/upload';
    }
    // this.getUser
    UploadService.prototype.postUpload = function (uld) {
        return this.http.post(this.baseURL, uld, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            })
        });
    };
    UploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/shared/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/shared/user.model.ts ***!
  \**************************************/
/*! exports provided: User, usermodels, Change */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usermodels", function() { return usermodels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Change", function() { return Change; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var usermodels = /** @class */ (function () {
    function usermodels() {
    }
    return usermodels;
}());

var Change = /** @class */ (function () {
    function Change() {
    }
    return Change;
}());



/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    //HttpMethods
    // environment에 있는 apiBaseUrl를 매칭시켜주는 코드
    UserService.prototype.postUser = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/member/signup', user);
    };
    UserService.prototype.login = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/member/login', user);
    };
    UserService.prototype.Searcn = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/boards/search/user', user);
    };
    UserService.prototype.changepass = function (change) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/member/updatePass', change, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            })
        });
    };
    UserService.prototype.changeInfo = function (change) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/member/update', change, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            })
        });
    };
    UserService.prototype.checkuser = function () {
        var token = true;
        if (localStorage.getItem('token') == null) {
            return false;
        }
        else if (localStorage.getItem('token') != null) {
            return token;
        }
    };
    UserService.prototype.otherInfo = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/member/userinfo', user);
    };
    UserService.prototype.getUserList = function () {
        return this.http.get('http://localhost:3000/member/info');
    };
    UserService.prototype.profile = function () {
        return this.http.get('http://localhost:3000/me', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            })
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/upload/upload.component.css":
/*!*********************************************!*\
  !*** ./src/app/upload/upload.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* html, body {\r\n    position: absolute;\r\n     height: 100%; \r\n } */\r\n\r\n agm-map {\r\n    width: 100%;\r\n    height: 300px;\r\n  }\r\n\r\n .btn-1 {\r\n    width: 20%;\r\n    /* height: 10%; */\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n    margin: 1%;\r\n  }\r\n\r\n .btns-1 {\r\n    width: 20%;\r\n    height: 30px;\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    margin-left: 1%;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n    margin: 1%;\r\n  }\r\n\r\n .btn {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    margin-left: 5px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n .btn1 {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #a9a9a9;\r\n    border: 1px solid #a9a9a9;\r\n    padding: 5px 12px;\r\n    margin-left: 35%;\r\n    /*margin-right: : 100px;*/\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n .btn2 {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #a9a9a9;\r\n    border: 1px solid #a9a9a9;\r\n    padding: 5px 12px;\r\n    /*margin-left: 45%;*/\r\n    /*margin-right: : 100px;*/\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n .text {\r\n    resize: none;\r\n    width: 70%;\r\n    height: 30px;\r\n    margin: 1%\r\n  }\r\n\r\n .has {\r\n    resize: none;\r\n    width: 70%;\r\n    height: 50px;\r\n    margin: 1%\r\n  }\r\n\r\n .pickimg {\r\n    margin: 1%;\r\n    width: auto;\r\n    height: auto;\r\n  }\r\n\r\n .header {\r\n    height: 12%;\r\n    background-color: white;\r\n    border-bottom: 1px solid slategray;\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    right: 0px;\r\n    overflow: hidden;\r\n}\r\n\r\n #lg1 {\r\n    margin: 5px;\r\n    float: left;\r\n}\r\n\r\n #lg2 {\r\n    border-left: 1px solid black;\r\n    padding-left: 40px;\r\n    margin: 20px;\r\n    float: left;\r\n}\r\n\r\n #lg3 {\r\n    margin: 30px;\r\n    float: 0px;\r\n}\r\n\r\n #searchbox {\r\n\r\n    margin-top: 2%;\r\n    margin-left: 7%;\r\n    float: left;\r\n\r\n}\r\n\r\n #searchbtn {\r\n    margin-top: 2%;\r\n    float: center;\r\n\r\n}\r\n\r\n .content {\r\n          margin: 0 auto;\r\n          height: auto;\r\n          width: 700px;\r\n          margin-top : 10%;\r\n          border-left : 1px solid black; \r\n          border-right : 1px solid black; \r\n          border-top : 1px solid black;\r\n          border-bottom : 1px solid black;\r\n          padding: 0.8%;\r\n          font-family: 'Hind Madurai', sans-serif;\r\n          font-weight: bold;\r\n      }\r\n\r\n #userimg {\r\n        border-radius: 100px;\r\n        width: 150px;\r\n        height: 150px;\r\n        border : 2px solid red;\r\n        margin : 10px;\r\n        float:left;\r\n      }\r\n\r\n .user {\r\n         margin-top: 7%;\r\n         font-size: 50px;\r\n         float:left;\r\n      }\r\n\r\n #userphoto {\r\n          width:100%;\r\n      }\r\n\r\n #instaicon {\r\n          width:100%;\r\n      }\r\n\r\n .like {\r\n         margin-left : 10px;\r\n      }\r\n\r\n .comment {\r\n          margin-left: 10px;\r\n          font-size: 13px;\r\n      }\r\n\r\n #commentin{\r\n          border : none;\r\n          width: 70%;\r\n          height : 40px;\r\n          font-size : 15px;\r\n          margin-left : 10px;\r\n      }\r\n\r\n #commentin::-webkit-input-placeholder {\r\n          \r\n          font-size : 15px;\r\n      }\r\n\r\n #menuimg {\r\n        \r\n          width:50px;\r\n          height:40px;\r\n          margin-left : 10px;\r\n         \r\n      }\r\n\r\n .comment2 {\r\n          width: 99%;\r\n          margin : 20px;\r\n          float: left;\r\n      }\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7S0FHSzs7Q0FFSjtJQUNHLFlBQVk7SUFDWixjQUFjO0dBQ2Y7O0NBR0g7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0dBQ1o7O0NBRUQ7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztHQUNaOztDQUVEO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0dBQ3BCOztDQUNBO0lBQ0MsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtHQUNwQjs7Q0FDRDtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7R0FDcEI7O0NBRUQ7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7SUFDYixVQUFVO0dBQ1g7O0NBQ0Q7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7SUFDYixVQUFVO0dBQ1g7O0NBRUQ7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7R0FDZDs7Q0FHRDtJQUNFLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7Q0FDcEI7O0NBRUQ7SUFDSSxZQUFZO0lBQ1osWUFBWTtDQUNmOztDQUVEO0lBQ0ksNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtDQUNmOztDQUVEO0lBQ0ksYUFBYTtJQUNiLFdBQVc7Q0FDZDs7Q0FFRDs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7O0NBRWY7O0NBRUQ7SUFDSSxlQUFlO0lBQ2YsY0FBYzs7Q0FFakI7O0NBRUs7VUFDSSxlQUFlO1VBQ2YsYUFBYTtVQUNiLGFBQWE7VUFDYixpQkFBaUI7VUFDakIsOEJBQThCO1VBQzlCLCtCQUErQjtVQUMvQiw2QkFBNkI7VUFDN0IsZ0NBQWdDO1VBQ2hDLGNBQWM7VUFDZCx3Q0FBd0M7VUFDeEMsa0JBQWtCO09BQ3JCOztDQUNEO1FBQ0UscUJBQXFCO1FBQ3JCLGFBQWE7UUFDYixjQUFjO1FBQ2QsdUJBQXVCO1FBQ3ZCLGNBQWM7UUFDZCxXQUFXO09BQ1o7O0NBQ0Q7U0FDRyxlQUFlO1NBQ2YsZ0JBQWdCO1NBQ2hCLFdBQVc7T0FDYjs7Q0FDRDtVQUNJLFdBQVc7T0FDZDs7Q0FDRDtVQUNJLFdBQVc7T0FDZDs7Q0FDRDtTQUNHLG1CQUFtQjtPQUNyQjs7Q0FDRDtVQUNJLGtCQUFrQjtVQUNsQixnQkFBZ0I7T0FDbkI7O0NBQ0Q7VUFDSSxjQUFjO1VBQ2QsV0FBVztVQUNYLGNBQWM7VUFDZCxpQkFBaUI7VUFDakIsbUJBQW1CO09BQ3RCOztDQUVEOztVQUVJLGlCQUFpQjtPQUNwQjs7Q0FDRDs7VUFFSSxXQUFXO1VBQ1gsWUFBWTtVQUNaLG1CQUFtQjs7T0FFdEI7O0NBQ0Q7VUFDSSxXQUFXO1VBQ1gsY0FBYztVQUNkLFlBQVk7T0FDZiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGh0bWwsIGJvZHkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIGhlaWdodDogMTAwJTsgXHJcbiB9ICovXHJcblxyXG4gYWdtLW1hcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG5cclxuXHJcbi5idG4tMSB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgLyogaGVpZ2h0OiAxMCU7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg5N2YwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM4OTdmMDtcclxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgfVxyXG5cclxuICAuYnRucy0xIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg5N2YwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM4OTdmMDtcclxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgfVxyXG5cclxuICAuYnRuIHtcclxuICAgIC8qd2lkdGg6IDMlOyovXHJcbiAgICAvKmhlaWdodDogMjBweDsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4OTdmMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODk3ZjA7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuICAgLmJ0bjEge1xyXG4gICAgLyp3aWR0aDogMyU7Ki9cclxuICAgIC8qaGVpZ2h0OiAyMHB4OyovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTlhOWE5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2E5YTlhOTtcclxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcclxuICAgIC8qbWFyZ2luLXJpZ2h0OiA6IDEwMHB4OyovXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuICAuYnRuMiB7XHJcbiAgICAvKndpZHRoOiAzJTsqL1xyXG4gICAgLypoZWlnaHQ6IDIwcHg7Ki9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOWE5YTk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTlhOWE5O1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICAvKm1hcmdpbi1sZWZ0OiA0NSU7Ki9cclxuICAgIC8qbWFyZ2luLXJpZ2h0OiA6IDEwMHB4OyovXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuXHJcbiAgLnRleHQge1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbjogMSVcclxuICB9XHJcbiAgLmhhcyB7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOiAxJVxyXG4gIH1cclxuXHJcbiAgLnBpY2tpbWcge1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcblxyXG4gIC5oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiAxMiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzbGF0ZWdyYXk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4jbGcxIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNsZzIge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4jbGczIHtcclxuICAgIG1hcmdpbjogMzBweDtcclxuICAgIGZsb2F0OiAwcHg7XHJcbn1cclxuXHJcbiNzZWFyY2hib3gge1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG59XHJcblxyXG4jc2VhcmNoYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgZmxvYXQ6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcCA6IDEwJTtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0IDogMXB4IHNvbGlkIGJsYWNrOyBcclxuICAgICAgICAgIGJvcmRlci1yaWdodCA6IDFweCBzb2xpZCBibGFjazsgXHJcbiAgICAgICAgICBib3JkZXItdG9wIDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbSA6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgIHBhZGRpbmc6IDAuOCU7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0hpbmQgTWFkdXJhaScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgICAjdXNlcmltZyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgYm9yZGVyIDogMnB4IHNvbGlkIHJlZDtcclxuICAgICAgICBtYXJnaW4gOiAxMHB4O1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgLnVzZXIge1xyXG4gICAgICAgICBtYXJnaW4tdG9wOiA3JTtcclxuICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICB9XHJcbiAgICAgICN1c2VycGhvdG8ge1xyXG4gICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgfVxyXG4gICAgICAjaW5zdGFpY29uIHtcclxuICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLmxpa2Uge1xyXG4gICAgICAgICBtYXJnaW4tbGVmdCA6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbW1lbnQge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIH1cclxuICAgICAgI2NvbW1lbnRpbntcclxuICAgICAgICAgIGJvcmRlciA6IG5vbmU7XHJcbiAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgaGVpZ2h0IDogNDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZSA6IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdCA6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAjY29tbWVudGluOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgZm9udC1zaXplIDogMTVweDtcclxuICAgICAgfVxyXG4gICAgICAjbWVudWltZyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICB3aWR0aDo1MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdCA6IDEwcHg7XHJcbiAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC5jb21tZW50MiB7XHJcbiAgICAgICAgICB3aWR0aDogOTklO1xyXG4gICAgICAgICAgbWFyZ2luIDogMjBweDtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICB9XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/upload/upload.component.html":
/*!**********************************************!*\
  !*** ./src/app/upload/upload.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"content\">\r\n\r\n    <form #uploadForm=\"ngForm\">\r\n        <!-- (ngSubmit)=\"onSubmit(uploadForm)\"> -->\r\n        <div class=\"row\">\r\n            <div class=\"row\">\r\n                <div class=\"input-field col s12\">\r\n                    <!-- <textarea id=\"textarea1\" class=\"materialize-textarea\"></textarea>\r\n                  <label for=\"textarea1\">Textarea</label>\r\n                  <br> -->\r\n                    <h2> 게시물 업로드 페이지 </h2>\r\n                    <!-- Pick file시 이쪽에 불려진 이미지 전달하기 -->\r\n                    <script>\r\n                        function image_check() {\r\n                            // var path = \"path\";\r\n                            var imgSource = document.targetImg;\r\n                            // imgSource.src = path;\r\n\r\n                        }\r\n                    </script>\r\n                    <!-- <img src=\"assets/img/logom.png\"  class=\"pickimg\"><br> -->\r\n                    <img [src]=\"imageUrl\" style=\"width: 250px; height: 150px\">\r\n                    <br>\r\n                    <input type=\"file\" #Image accept=\"image/*\"  (change)=\"handleFileInput($event.target.files)\">\r\n                    <button type=\"submit\" class=\"btn-1\" (click)=\"onUpload(uploadForm)\"> Submit</button>\r\n                    <!-- <input style=\"display: none\" type=\"file\" (change)=\"onFileSelected($event)\" #fileInput> -->\r\n                    <!-- <button type=\"submit\" class=\"btn-1\" (click)=\"fileInput.click()\" required> Pick File </button> -->\r\n                    <!-- <button type=\"button\" class=\"btns-1\" (click)=\"onUpload()\"> Upload </button>\r\n                    <button type=\"button\" class=\"btns-1\" (click)=\"reset(uploadForm)\"> Reset </button> -->\r\n                    <br><br>\r\n                    <label> 사용자 Text </label>\r\n                    <br>\r\n                    <input type=\"text\" class=\"text\" name=\"text\" #name=\"ngModel\" [(ngModel)]=\"uploadService.selectedUpload.text\"\r\n                        placeholder=\"Input text\">\r\n                    <br><br>\r\n                    <label> Hashtag </label>\r\n                    <br>\r\n                    <input type=\"text\" class=\"text\" name=\"hastag\" #name=\"ngModel\" [(ngModel)]=\"uploadService.selectedUpload.hastag\"\r\n                        placeholder=\"Input text\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/upload/upload.component.ts":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_upload_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/upload.service */ "./src/app/shared/upload.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadComponent = /** @class */ (function () {
    // const fd = new FormData();
    // fd.append('image', this.selectedFile, this.selectedFile.name);
    // this.http.post('', fd, {
    //   reportProgress: true,
    //   observe: 'events'
    // })
    // // db url 적어주기
    // .subscribe(event => {
    //   if (event.type === HttpEventType.UploadProgress){
    //     console.log('Upload Progress: '+ Math.round(event.loaded / event.total * 100) + '%')
    //   } else if (event.type ===HttpEventType.Response) {
    //   console.log(event);
    //   }
    // })
    // constructor() {}
    function UploadComponent(uploadService, http, router) {
        this.uploadService = uploadService;
        this.http = http;
        this.router = router;
        this.selectedFile = null;
        this.imageUrl = "assets/img/logom.png";
        this.fileToUpload = null;
    }
    //이미지 미리 보기를 위해
    UploadComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        this.fileToUpload = file.item(0);
        // show image preview
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.fileToUpload);
        console.log(this.fileToUpload);
    };
    //파일 선택시 이벤트
    UploadComponent.prototype.onFileSelected = function (event) {
        console.log(event);
        this.selectedFile = event.target.files[0];
        // this.imgurl = event.target.value;
    };
    //reset 이벤트
    UploadComponent.prototype.reset = function (form) {
        if (form)
            form.reset();
        this.uploadService.selectedUpload = {
            username: "",
            text: "",
            image: "",
            hashtag: "",
            time: null
        };
    };
    //upload.service에서 설정한 주소로 파라메터 전달?
    UploadComponent.prototype.onUpload = function (form) {
        var _this = this;
        this.uploadService.postUpload(form.value).subscribe(function (res) {
            _this.reset(form);
            M.toast({ html: 'Upload Successfully', classes: 'rounded' });
        });
    };
    UploadComponent.prototype.ngOnInit = function () {
        this.reset();
    };
    UploadComponent.prototype.Searchbtn = function () {
        this.router.navigateByUrl('/googlemap');
    };
    UploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.css */ "./src/app/upload/upload.component.css")],
            providers: [_shared_upload_service__WEBPACK_IMPORTED_MODULE_1__["UploadService"]]
        }),
        __metadata("design:paramtypes", [_shared_upload_service__WEBPACK_IMPORTED_MODULE_1__["UploadService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/user/changeprofile/changeprofile.component.css":
/*!****************************************************************!*\
  !*** ./src/app/user/changeprofile/changeprofile.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n  }\r\n\r\n  body {\r\n    background-color: #eee;\r\n  }\r\n\r\n  #wrapper {\r\n    width: 40%;\r\n    height: 90%;\r\n    overflow: hidden;\r\n    border: 0px solid #000;\r\n    margin: 50px auto;\r\n    padding: 10px;\r\n  }\r\n\r\n  .main-content {\r\n    width: 50%;\r\n    height: 50%;\r\n    margin: 5px auto;\r\n    background-color: #fff;\r\n    border: 2px solid #e6e6e6;\r\n    padding: 40px 50px;\r\n  }\r\n\r\n  .header {\r\n    border: 0px solid #000;\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  .header img {\r\n    height: 80px;\r\n    width: 180px;\r\n    margin: auto;\r\n    position: relative;\r\n    left: 40px;\r\n  }\r\n\r\n  .input-1,\r\n  .input-2 {\r\n    width: 105%;\r\n    height: 40px;\r\n    margin-bottom: 5px;\r\n    padding: 8px 12px;\r\n    border: 1px solid #dbdbdb;\r\n    box-sizing: border-box;\r\n    border-radius: 3px;\r\n  }\r\n\r\n  .overlap-text {\r\n    position: relative;\r\n  }\r\n\r\n  .overlap-text a {\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 10px;\r\n    color: #003569;\r\n    font-size: 14px;\r\n    text-decoration: none;\r\n    font-family: 'Overpass Mono', monospace;\r\n    letter-spacing: -1px;\r\n  }\r\n\r\n  .btn {\r\n    width: 105%;\r\n    height: 40px;\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n  .sub-content {\r\n    width: 105%;\r\n    height: 8%;\r\n    margin: 5px auto;\r\n    border: 1px solid #e6e6e6;\r\n    padding: 30px 30px;\r\n    background-color: #fff;\r\n    text-align: center;\r\n  }\r\n\r\n  .s-part {\r\n    text-align: left;\r\n    font-family: 'Overpass Mono', monospace;\r\n    word-spacing: -3px;\r\n    letter-spacing: -2px;\r\n    font-weight: normal;\r\n  }\r\n\r\n  .errorm {\r\n    text-align: center;\r\n  }\r\n\r\n  .s-part a {\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: #3897f0;\r\n    font-family: 'Overpass Mono', monospace;\r\n    word-spacing: -3px;\r\n    letter-spacing: -2px;\r\n    font-weight: normal;\r\n  }\r\n\r\n  input:focus {\r\n      background-color: yellow;\r\n  }\r\n\r\n  .alert { \r\n        padding: 20px;\r\n        text-align: center; \r\n        background-color: #f44336; \r\n        color: white; \r\n      }\r\n\r\n  .success{ \r\n        padding: 20px; \r\n        text-align: center;\r\n        background-color:#249424; \r\n        color: white; \r\n        \r\n      }\r\n\r\n  input[type=text]:placeholder { \r\n            color: #cccccc; \r\n         }\r\n\r\n  input[type=text].invalid-textbox,input[type=password].invalid-textbox{ \r\n          border-bottom: 2px solid #3897f0; \r\n         }\r\n\r\n  label.validation-message{ \r\n            color:#ed5558; \r\n          } \r\n\r\n    \r\n           \r\n           \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jaGFuZ2Vwcm9maWxlL2NoYW5nZXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtHQUNkOztFQUVEO0lBQ0UsdUJBQXVCO0dBQ3hCOztFQUVEO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixjQUFjO0dBQ2Y7O0VBRUQ7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7O0VBRUQ7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztHQUNaOztFQUVEOztJQUVFLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHdDQUF3QztJQUN4QyxxQkFBcUI7R0FDdEI7O0VBRUQ7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLGlCQUFpQjtJQUNqQix3Q0FBd0M7SUFDeEMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixvQkFBb0I7R0FDckI7O0VBRUQ7SUFDRSxtQkFBbUI7R0FDcEI7O0VBRUQ7SUFDRSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix3Q0FBd0M7SUFDeEMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixvQkFBb0I7R0FDckI7O0VBRUQ7TUFDSSx5QkFBeUI7R0FDNUI7O0VBRUQ7UUFDTSxjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLDBCQUEwQjtRQUMxQixhQUFhO09BQ2Q7O0VBR0Q7UUFDRSxjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6QixhQUFhOztPQUVkOztFQUVEO1lBQ00sZUFBZTtVQUNqQjs7RUFHQTtVQUNBLGlDQUFpQztVQUNqQzs7RUFHQTtZQUNFLGNBQWM7V0FDZiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY2hhbmdlcHJvZmlsZS9jaGFuZ2Vwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcblxyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICB9XHJcblxyXG4gICN3cmFwcGVyIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjMDAwO1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW4tY29udGVudCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDUwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkICMwMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIGltZyB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LTEsXHJcbiAgLmlucHV0LTIge1xyXG4gICAgd2lkdGg6IDEwNSU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYmRiZGI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXAtdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAub3ZlcmxhcC10ZXh0IGEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGNvbG9yOiAjMDAzNTY5O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPdmVycGFzcyBNb25vJywgbW9ub3NwYWNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgfVxyXG5cclxuICAuYnRuIHtcclxuICAgIHdpZHRoOiAxMDUlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4OTdmMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODk3ZjA7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG5cclxuICAuc3ViLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwNSU7XHJcbiAgICBoZWlnaHQ6IDglO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnMtcGFydCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPdmVycGFzcyBNb25vJywgbW9ub3NwYWNlO1xyXG4gICAgd29yZC1zcGFjaW5nOiAtM3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuXHJcbiAgLmVycm9ybSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAucy1wYXJ0IGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICMzODk3ZjA7XHJcbiAgICBmb250LWZhbWlseTogJ092ZXJwYXNzIE1vbm8nLCBtb25vc3BhY2U7XHJcbiAgICB3b3JkLXNwYWNpbmc6IC0zcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICBpbnB1dDpmb2N1cyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICB9XHJcblxyXG4gIC5hbGVydCB7IFxyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2OyBcclxuICAgICAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgICB9IFxyXG4gICAgICBcclxuXHJcbiAgICAgIC5zdWNjZXNzeyBcclxuICAgICAgICBwYWRkaW5nOiAyMHB4OyBcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMjQ5NDI0OyBcclxuICAgICAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgICAgIFxyXG4gICAgICB9IFxyXG5cclxuICAgICAgaW5wdXRbdHlwZT10ZXh0XTpwbGFjZWhvbGRlciB7IFxyXG4gICAgICAgICAgICBjb2xvcjogI2NjY2NjYzsgXHJcbiAgICAgICAgIH0gXHJcbiAgICAgICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgICBpbnB1dFt0eXBlPXRleHRdLmludmFsaWQtdGV4dGJveCxpbnB1dFt0eXBlPXBhc3N3b3JkXS5pbnZhbGlkLXRleHRib3h7IFxyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzODk3ZjA7IFxyXG4gICAgICAgICB9IFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgbGFiZWwudmFsaWRhdGlvbi1tZXNzYWdleyBcclxuICAgICAgICAgICAgY29sb3I6I2VkNTU1ODsgXHJcbiAgICAgICAgICB9IFxyXG5cclxuICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/user/changeprofile/changeprofile.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/user/changeprofile/changeprofile.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <div class=\"main-content\">\n    <div class=\"header\">\n      <img src=\"assets/img/logom.png\" />\n    </div>\n    <div class=\"l-part\">\n      <form #chagneForm=\"ngForm\" (ngSubmit)=\"chagneForm.valid && onSubmit(chagneForm)\">\n        <input type=\"text\" autocomplete=\"off\" #id=\"ngModel\" [(ngModel)]=\"model.id\" name=\"id\" placeholder=\"id\" class=\"input-1\"\n          required [ngClass]=\"{ 'invalid-textbox' : chagneForm.submitted && !id.valid}\">\n\n        <div *ngIf=\"chagneForm.submitted && id.errors?.minlength\">\n          <label class=\"validation-message\"> Minimum 2 characters. </label>\n        </div>\n\n\n        <input type=\"password\" name=\"pre_password\" #password=\"ngModel\" [(ngModel)]=\"model.pre_password\" placeholder=\"pre_password\"\n          required minlength=\"4\" class=\"input-1\" [ngClass]=\"{'invalid-textbox' : chagneForm.submitted && !pre_password.valid }\">\n\n        <div *ngIf=\"chagneForm.submitted && pre_password.errors?.minlength\">\n          <label class=\"validation-message\"> Minimum 4 characters. </label>\n        </div>\n\n        <input type=\"password\" name=\"new_password\" #password=\"ngModel\" [(ngModel)]=\"model.new__password\" placeholder=\"new_password\"\n          required minlength=\"4\" class=\"input-1\" [ngClass]=\"{'invalid-textbox' : chagneForm.submitted && !new_password.valid }\">\n\n        <div *ngIf=\"chagneForm.submitted && new_password.errors?.minlength\">\n          <label class=\"validation-message\"> Minimum 4 characters. </label>\n        </div>\n\n        <input type=\"submit\" value=\"Change Password\" class=\"btn\">\n      </form>\n\n\n    </div>\n    <br>\n    <hr style=\"border: solid 1px red;\">\n    <br>\n    <div class=\"l-part\">\n      <form #changeInForm=\"ngForm\" (ngSubmit)=\"changeInForm.valid && onInSubmit(changeInForm)\">\n        <!-- model은 ts 파일에 정의한 model -->\n        <input type=\"text\" autocomplete=\"off\" #id=\"ngModel\" [(ngModel)]=\"model_.id\" name=\"id\" placeholder=\"id\" class=\"input-1\"\n          required [ngClass]=\"{ 'invalid-textbox' : changeInForm.submitted && !id.valid}\">\n\n        <div *ngIf=\"changeInForm.submitted && id.errors?.minlength\">\n        </div>\n\n\n        <input type=\"text\" name=\"username\" #password=\"ngModel\" [(ngModel)]=\"model_.username\" placeholder=\"username\"\n          required minlength=\"2\" class=\"input-1\" [ngClass]=\"{'invalid-textbox' : changeInForm.submitted && !username.valid }\">\n\n        <div *ngIf=\"changeInForm.submitted && username.errors?.minlength\">\n          <label class=\"validation-message\"> Minimum 2 characters. </label>\n        </div>\n\n        <input type=\"text\" autocomplete=\"off\" #email=\"ngModel\" [(ngModel)]=\"model_.email\" name=\"email\" placeholder=\"Email\"\n          class=\"input-1\" required [pattern]=\"emailRegex\" [ngClass]=\"{ 'invalid-textbox' : changeInForm.submitted && !email.valid}\">\n        <!-- 위에서 email 검증 후에 검증되지 않으면 아래에서 에러 문구 발생 -->\n        <div *ngIf=\"changeInForm.submitted && email.errors\">\n          <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">Invaild email address. </label>\n        </div>\n\n        <input type=\"submit\" value=\"Change Inform\" class=\"btn\">\n      </form>\n    </div>\n    <br>\n\n\n\n\n    <div class=\"sub-content\">\n      <!-- <div class=\"s-part\"> -->\n      <a routerLink=\"/profile\"> 프로필로 돌아가기 </a>\n      <!-- </div> -->\n    </div>\n\n\n\n    <!-- form을 사용하기 위해 app.module.ts에 선언해줌 -->\n\n    <!-- sign-in.component.ts에 들어갈 에러 문구 -->\n    <div class=\"errorm\" *ngIf=\"serverErrorMessages\">\n      Error : {{serverErrorMessages}}\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/changeprofile/changeprofile.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/changeprofile/changeprofile.component.ts ***!
  \***************************************************************/
/*! exports provided: ChangeprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeprofileComponent", function() { return ChangeprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangeprofileComponent = /** @class */ (function () {
    function ChangeprofileComponent(userService, _router, _route) {
        this.userService = userService;
        this._router = _router;
        this._route = _route;
        this.emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.model = {
            id: '',
            pre_password: '',
            new_password: ''
        };
        this.model_ = {
            id: '',
            username: '',
            email: ''
        };
    }
    ChangeprofileComponent.prototype.ngOnInit = function () {
    };
    ChangeprofileComponent.prototype.onSubmit = function (form) {
        var _this = this;
        //user.service.ts와 매칭
        this.userService.changepass(form.value).subscribe(
        // success or error function
        function (res) {
            _this.showSucessMessage = true;
            // 메세지 노출 시간
            console.log("Change is  Success");
            setTimeout(function () { return _this.showSucessMessage = false; }, 3000);
            _this.resetForm(form);
        }, function (err) {
            if (err.status == 422) {
                _this.serverErrorMessages = err.error.join('<br/>');
            }
            else
                _this.serverErrorMessages = 'Something went wrong. Please contact admin';
        });
    };
    ChangeprofileComponent.prototype.onInSubmit = function (form) {
        var _this = this;
        //user.service.ts와 매칭
        this.userService.changeInfo(form.value).subscribe(
        // success or error function
        function (res) {
            _this.showSucessMessage = true;
            // 메세지 노출 시간
            console.log("Change is  Success");
            setTimeout(function () { return _this.showSucessMessage = false; }, 3000);
            _this.resetForm(form);
        }, function (err) {
            if (err.status == 422) {
                _this.serverErrorMessages = err.error.join('<br/>');
            }
            else
                _this.serverErrorMessages = 'Something went wrong. Please contact admin';
        });
    };
    //성공적으로 전달이 완료 될 경우
    ChangeprofileComponent.prototype.resetForm = function (form) {
        // this.model ={
        // };
        form.resetForm();
        this.serverErrorMessages = '';
        this._router.navigate(['/profile']);
    };
    ChangeprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-changeprofile',
            template: __webpack_require__(/*! ./changeprofile.component.html */ "./src/app/user/changeprofile/changeprofile.component.html"),
            styles: [__webpack_require__(/*! ./changeprofile.component.css */ "./src/app/user/changeprofile/changeprofile.component.css")],
            providers: [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ChangeprofileComponent);
    return ChangeprofileComponent;
}());



/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n  }\r\n\r\n  body {\r\n    background-color: #eee;\r\n  }\r\n\r\n  #wrapper {\r\n    width: 40%;\r\n    height: 90%;\r\n    overflow: hidden;\r\n    border: 0px solid #000;\r\n    margin: 50px auto;\r\n    margin-top: 8%;\r\n    padding: 10px;\r\n  }\r\n\r\n  .main-content {\r\n    width: 50%;\r\n    height: 50%;\r\n    margin: 5px auto;\r\n    background-color: #fff;\r\n    border: 2px solid #e6e6e6;\r\n    padding: 40px 50px;\r\n  }\r\n\r\n  .header {\r\n    border: 0px solid #000;\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  .header img {\r\n    height: 80px;\r\n    width: 180px;\r\n    margin: auto;\r\n    position: relative;\r\n    left: 40px;\r\n  }\r\n\r\n  .input-1,\r\n  .input-2 {\r\n    width: 105%;\r\n    height: 40px;\r\n    margin-bottom: 5px;\r\n    padding: 8px 12px;\r\n    border: 1px solid #dbdbdb;\r\n    box-sizing: border-box;\r\n    border-radius: 3px;\r\n  }\r\n\r\n  .overlap-text {\r\n    position: relative;\r\n  }\r\n\r\n  .overlap-text a {\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 10px;\r\n    color: #003569;\r\n    font-size: 14px;\r\n    text-decoration: none;\r\n    font-family: 'Overpass Mono', monospace;\r\n    letter-spacing: -1px;\r\n  }\r\n\r\n  .btn {\r\n    width: 105%;\r\n    height: 40px;\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n  .sub-content {\r\n    width: 105%;\r\n    height: 8%;\r\n    margin: 5px auto;\r\n    border: 1px solid #e6e6e6;\r\n    padding: 30px 30px;\r\n    background-color: #fff;\r\n  }\r\n\r\n  .s-part {\r\n    text-align: left;\r\n    font-family: 'Overpass Mono', monospace;\r\n    word-spacing: -3px;\r\n    letter-spacing: -2px;\r\n    font-weight: normal;\r\n  }\r\n\r\n  .errorm {\r\n    text-align: center;\r\n  }\r\n\r\n  .s-part a {\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: #3897f0;\r\n    font-family: 'Overpass Mono', monospace;\r\n    word-spacing: -3px;\r\n    letter-spacing: -2px;\r\n    font-weight: normal;\r\n  }\r\n\r\n  input:focus {\r\n      background-color: yellow;\r\n  }\r\n\r\n  .alert { \r\n        padding: 20px;\r\n        text-align: center; \r\n        background-color: #f44336; \r\n        color: white; \r\n      }\r\n\r\n  .success{ \r\n        padding: 20px; \r\n        text-align: center;\r\n        background-color:#249424; \r\n        color: white; \r\n        \r\n      }\r\n\r\n  input[type=text]:placeholder { \r\n            color: #cccccc; \r\n         }\r\n\r\n  input[type=text].invalid-textbox,input[type=password].invalid-textbox{ \r\n          border-bottom: 2px solid #3897f0; \r\n         }\r\n\r\n  label.validation-message{ \r\n            color:#ed5558; \r\n          } \r\n\r\n    \r\n           \r\n           \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtHQUNkOztFQUVEO0lBQ0UsdUJBQXVCO0dBQ3hCOztFQUVEO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztHQUNmOztFQUVEO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixtQkFBbUI7R0FDcEI7O0VBRUQ7SUFDRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0dBQ3BCOztFQUVEO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7R0FDWjs7RUFFRDs7SUFFRSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7O0VBRUQ7SUFDRSxtQkFBbUI7R0FDcEI7O0VBRUQ7SUFDRSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qix3Q0FBd0M7SUFDeEMscUJBQXFCO0dBQ3RCOztFQUVEO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7R0FDcEI7O0VBRUQ7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLHVCQUF1QjtHQUN4Qjs7RUFFRDtJQUNFLGlCQUFpQjtJQUNqQix3Q0FBd0M7SUFDeEMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixvQkFBb0I7R0FDckI7O0VBRUQ7SUFDRSxtQkFBbUI7R0FDcEI7O0VBRUQ7SUFDRSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix3Q0FBd0M7SUFDeEMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixvQkFBb0I7R0FDckI7O0VBRUQ7TUFDSSx5QkFBeUI7R0FDNUI7O0VBRUQ7UUFDTSxjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLDBCQUEwQjtRQUMxQixhQUFhO09BQ2Q7O0VBR0Q7UUFDRSxjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6QixhQUFhOztPQUVkOztFQUVEO1lBQ00sZUFBZTtVQUNqQjs7RUFHQTtVQUNBLGlDQUFpQztVQUNqQzs7RUFHQTtZQUNFLGNBQWM7V0FDZiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcblxyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICB9XHJcblxyXG4gICN3cmFwcGVyIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjMDAwO1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA4JTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAubWFpbi1jb250ZW50IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2U2ZTZlNjtcclxuICAgIHBhZGRpbmc6IDQwcHggNTBweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXIge1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgIzAwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXIgaW1nIHtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtMSxcclxuICAuaW5wdXQtMiB7XHJcbiAgICB3aWR0aDogMTA1JTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RiZGJkYjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG5cclxuICAub3ZlcmxhcC10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5vdmVybGFwLXRleHQgYSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgY29sb3I6ICMwMDM1Njk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogJ092ZXJwYXNzIE1vbm8nLCBtb25vc3BhY2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgd2lkdGg6IDEwNSU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg5N2YwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM4OTdmMDtcclxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcblxyXG4gIC5zdWItY29udGVudCB7XHJcbiAgICB3aWR0aDogMTA1JTtcclxuICAgIGhlaWdodDogOCU7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcclxuICAgIHBhZGRpbmc6IDMwcHggMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAucy1wYXJ0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LWZhbWlseTogJ092ZXJwYXNzIE1vbm8nLCBtb25vc3BhY2U7XHJcbiAgICB3b3JkLXNwYWNpbmc6IC0zcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICAuZXJyb3JtIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5zLXBhcnQgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzM4OTdmMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3ZlcnBhc3MgTW9ubycsIG1vbm9zcGFjZTtcclxuICAgIHdvcmQtc3BhY2luZzogLTNweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcblxyXG4gIGlucHV0OmZvY3VzIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gIH1cclxuXHJcbiAgLmFsZXJ0IHsgXHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7IFxyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICAgIH0gXHJcbiAgICAgIFxyXG5cclxuICAgICAgLnN1Y2Nlc3N7IFxyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7IFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyNDk0MjQ7IFxyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICAgICAgXHJcbiAgICAgIH0gXHJcblxyXG4gICAgICBpbnB1dFt0eXBlPXRleHRdOnBsYWNlaG9sZGVyIHsgXHJcbiAgICAgICAgICAgIGNvbG9yOiAjY2NjY2NjOyBcclxuICAgICAgICAgfSBcclxuICAgICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF0uaW52YWxpZC10ZXh0Ym94LGlucHV0W3R5cGU9cGFzc3dvcmRdLmludmFsaWQtdGV4dGJveHsgXHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM4OTdmMDsgXHJcbiAgICAgICAgIH0gXHJcbiAgICAgICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgICBsYWJlbC52YWxpZGF0aW9uLW1lc3NhZ2V7IFxyXG4gICAgICAgICAgICBjb2xvcjojZWQ1NTU4OyBcclxuICAgICAgICAgIH0gXHJcblxyXG4gICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIl19 */"

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <div class=\"main-content\">\r\n    <div class=\"header\">\r\n      <img src=\"assets/img/logom.png\" style=\"width:75%\"/>\r\n    </div>\r\n    <div class=\"l-part\">\r\n      <form #signInForm=\"ngForm\" (ngSubmit)=\"signInForm.valid && onSubmit(signInForm)\">\r\n        <!-- model은 ts 파일에 정의한 model -->\r\n        <!-- <input type=\"text\" name=\"id\" #email=\"ngModel\" [(ngModel)]=\"model.email\" placeholder=\"Email\" class=\"input-1\"\r\n          [pattern]=\"emailRegex\" required [ngClass]=\"{'invalid-textbox' :signInForm.submitted && !email.valid }\"> -->\r\n        <input type=\"text\" autocomplete=\"off\" #id=\"ngModel\" [(ngModel)]=\"model.id\" name=\"id\" placeholder=\"id\" class=\"input-1\"\r\n          required [ngClass]=\"{ 'invalid-textbox' : signInForm.submitted && !id.valid}\">\r\n\r\n        <div *ngIf=\"signInForm.submitted && id.errors?.minlength\">\r\n          <label class=\"validation-message\"> Minimum 2 characters. </label>\r\n        </div>\r\n\r\n\r\n        <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"model.password\" placeholder=\"Password\"\r\n          required minlength=\"4\" class=\"input-1\" [ngClass]=\"{'invalid-textbox' : signInForm.submitted && !password.valid }\">\r\n\r\n        <div *ngIf=\"signInForm.submitted && password.errors?.minlength\">\r\n          <label class=\"validation-message\"> Minimum 4 characters. </label>\r\n        </div>\r\n\r\n        <input type=\"submit\" value=\"Sign In\" class=\"btn\">\r\n      </form>\r\n    </div>\r\n    <br>\r\n\r\n\r\n    <div class=\"sub-content\">\r\n      <!-- <div class=\"s-part\"> -->\r\n        계정이 없으신가요?  <a routerLink=\"/signup\"> 회원가입 </a>\r\n      <!-- </div> -->\r\n    </div>\r\n\r\n\r\n\r\n    <!-- form을 사용하기 위해 app.module.ts에 선언해줌 -->\r\n\r\n    <!-- sign-in.component.ts에 들어갈 에러 문구 -->\r\n    <div class=\"errorm\" *ngIf=\"serverErrorMessages\">\r\n      Error : {{serverErrorMessages}}\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.ts ***!
  \***************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignInComponent = /** @class */ (function () {
    //생성자 왜 만들어줌? part2 19:00
    function SignInComponent(http, userService, router, _route) {
        this.http = http;
        this.userService = userService;
        this.router = router;
        this._route = _route;
        this.baseUrls = 'http://localhost:3000/member/info';
        this.model = {
            id: '',
            password: ''
        };
        this.emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    SignInComponent.prototype.ngOnInit = function () {
        localStorage.clear();
        this.refreshUserList();
    };
    SignInComponent.prototype.getUserList = function () {
        return this.http.get(this.baseUrls);
    };
    SignInComponent.prototype.refreshUserList = function () {
        var _this = this;
        this.getUserList().subscribe(function (res) {
            _this.user = res;
            // console.log("refresh"+this.user.indexOf);  
        });
    };
    SignInComponent.prototype.onSubmit = function (form) {
        //subscribe의 callback 함수 res,err
        var _this = this;
        this.userService.login(form.value).subscribe(function (res) {
            var num = "0";
            var i = parseInt(num);
            // form 전달시 id와 password를 비교해서 일치할 경우 userprofile로 전달
            for (i; i < _this.user.length; i++) {
                if (_this.user[i].id == form.value.id) {
                    if (_this.user[i].password == form.value.password) {
                        localStorage.setItem('token', _this.user[i].jsonWebToken);
                        localStorage.setItem('profile', _this.user[i]._id);
                        _this.router.navigateByUrl('/board');
                    }
                }
            }
        }, function (err) {
            _this.serverErrorMessages = err.error.message;
        });
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/user/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/user/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n* {\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\nbody {\r\n  background-color: #eee;\r\n}\r\n\r\n#wrapper {\r\n  width: 40%;\r\n  height: 90%;\r\n  overflow: hidden;\r\n  border: 0px solid #000;\r\n  margin: 50px auto;\r\n  margin-top: 8%;\r\n  padding: 10px;\r\n}\r\n\r\n.main-content {\r\n  width: 50%;\r\n  height: 50%;\r\n  margin: 5px auto;\r\n  background-color: #fff;\r\n  border: 2px solid #e6e6e6;\r\n  padding: 40px 50px;\r\n}\r\n\r\n.header {\r\n  border: 0px solid #000;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.header img {\r\n  height: 80px;\r\n  width: 180px;\r\n  margin: auto;\r\n  position: relative;\r\n  left: 40px;\r\n}\r\n\r\n.input-1,\r\n.input-2 {\r\n  width: 105%;\r\n  height: 40px;\r\n  margin-bottom: 5px;\r\n  padding: 8px 12px;\r\n  border: 1px solid #dbdbdb;\r\n  box-sizing: border-box;\r\n  border-radius: 3px;\r\n}\r\n\r\n.overlap-text {\r\n  position: relative;\r\n}\r\n\r\n.overlap-text a {\r\n  position: absolute;\r\n  top: 8px;\r\n  right: 10px;\r\n  color: #003569;\r\n  font-size: 14px;\r\n  text-decoration: none;\r\n  font-family: 'Overpass Mono', monospace;\r\n  letter-spacing: -1px;\r\n}\r\n\r\n.btn {\r\n  width: 105%;\r\n  height: 40px;\r\n  background-color: #3897f0;\r\n  border: 1px solid #3897f0;\r\n  padding: 5px 12px;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  border-radius: 3px;\r\n}\r\n\r\n.sub-content {\r\n  width: 105%;\r\n  height: 8%;\r\n  margin: 5px auto;\r\n  border: 1px solid #e6e6e6;\r\n  padding: 30px 30px;\r\n  background-color: #fff;\r\n}\r\n\r\n.s-part {\r\n  text-align: left;\r\n  font-family: 'Overpass Mono', monospace;\r\n  word-spacing: -3px;\r\n  letter-spacing: -2px;\r\n  font-weight: normal;\r\n}\r\n\r\n.errorm {\r\n  text-align: center;\r\n}\r\n\r\n.s-part a {\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  color: #3897f0;\r\n  font-family: 'Overpass Mono', monospace;\r\n  word-spacing: -3px;\r\n  letter-spacing: -2px;\r\n  font-weight: normal;\r\n}\r\n\r\ninput:focus {\r\n    background-color: yellow;\r\n}\r\n\r\n.alert { \r\n      padding: 20px;\r\n      text-align: center; \r\n      background-color: #f44336; \r\n      color: white; \r\n    }\r\n\r\n.success{ \r\n      padding: 20px; \r\n      text-align: center;\r\n      background-color:#249424; \r\n      color: white; \r\n      \r\n    }\r\n\r\ninput[type=text]:placeholder { \r\n          color: #cccccc; \r\n       }\r\n\r\ninput[type=text].invalid-textbox,input[type=password].invalid-textbox{ \r\n        border-bottom: 2px solid #3897f0; \r\n       }\r\n\r\nlabel.validation-message{ \r\n          color:#ed5558; \r\n        } \r\n\r\n  \r\n         \r\n         \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtDQUNkOztBQUVEO0VBQ0UsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztDQUNmOztBQUVEO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7Q0FDWjs7QUFFRDs7RUFFRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix3Q0FBd0M7RUFDeEMscUJBQXFCO0NBQ3RCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixvQkFBb0I7Q0FDckI7O0FBRUQ7SUFDSSx5QkFBeUI7Q0FDNUI7O0FBRUQ7TUFDTSxjQUFjO01BQ2QsbUJBQW1CO01BQ25CLDBCQUEwQjtNQUMxQixhQUFhO0tBQ2Q7O0FBR0Q7TUFDRSxjQUFjO01BQ2QsbUJBQW1CO01BQ25CLHlCQUF5QjtNQUN6QixhQUFhOztLQUVkOztBQUVEO1VBQ00sZUFBZTtRQUNqQjs7QUFHQTtRQUNBLGlDQUFpQztRQUNqQzs7QUFHQTtVQUNFLGNBQWM7U0FDZiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKiB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG59XHJcblxyXG4jd3JhcHBlciB7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBoZWlnaHQ6IDkwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkICMwMDA7XHJcbiAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogOCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBtYXJnaW46IDVweCBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2U2ZTZlNjtcclxuICBwYWRkaW5nOiA0MHB4IDUwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkICMwMDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyIGltZyB7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDQwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC0xLFxyXG4uaW5wdXQtMiB7XHJcbiAgd2lkdGg6IDEwNSU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRiO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4ub3ZlcmxhcC10ZXh0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5vdmVybGFwLXRleHQgYSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogOHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGNvbG9yOiAjMDAzNTY5O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6ICdPdmVycGFzcyBNb25vJywgbW9ub3NwYWNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICB3aWR0aDogMTA1JTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4OTdmMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMzg5N2YwO1xyXG4gIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5zdWItY29udGVudCB7XHJcbiAgd2lkdGg6IDEwNSU7XHJcbiAgaGVpZ2h0OiA4JTtcclxuICBtYXJnaW46IDVweCBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgcGFkZGluZzogMzBweCAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zLXBhcnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1mYW1pbHk6ICdPdmVycGFzcyBNb25vJywgbW9ub3NwYWNlO1xyXG4gIHdvcmQtc3BhY2luZzogLTNweDtcclxuICBsZXR0ZXItc3BhY2luZzogLTJweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uZXJyb3JtIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zLXBhcnQgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzM4OTdmMDtcclxuICBmb250LWZhbWlseTogJ092ZXJwYXNzIE1vbm8nLCBtb25vc3BhY2U7XHJcbiAgd29yZC1zcGFjaW5nOiAtM3B4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxufVxyXG5cclxuLmFsZXJ0IHsgXHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7IFxyXG4gICAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgfSBcclxuICAgIFxyXG5cclxuICAgIC5zdWNjZXNzeyBcclxuICAgICAgcGFkZGluZzogMjBweDsgXHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojMjQ5NDI0OyBcclxuICAgICAgY29sb3I6IHdoaXRlOyBcclxuICAgICAgXHJcbiAgICB9IFxyXG5cclxuICAgIGlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIgeyBcclxuICAgICAgICAgIGNvbG9yOiAjY2NjY2NjOyBcclxuICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICBpbnB1dFt0eXBlPXRleHRdLmludmFsaWQtdGV4dGJveCxpbnB1dFt0eXBlPXBhc3N3b3JkXS5pbnZhbGlkLXRleHRib3h7IFxyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzg5N2YwOyBcclxuICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICBsYWJlbC52YWxpZGF0aW9uLW1lc3NhZ2V7IFxyXG4gICAgICAgICAgY29sb3I6I2VkNTU1ODsgXHJcbiAgICAgICAgfSBcclxuXHJcbiAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAiXX0= */"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <div class=\"main-content\">\r\n    <div class=\"header\">\r\n      <img src=\"assets/img/logom.png\" style=\"width:75%\" />\r\n    </div>\r\n    <div class=\"l-part\">\r\n      <form #signUpForm=\"ngForm\" (ngSubmit)=\"signUpForm.valid && onSubmit(signUpForm)\">\r\n\r\n        <input type=\"text\" autocomplete=\"off\" #id=\"ngModel\" [(ngModel)]=\"model.id\" name=\"id\"\r\n          placeholder=\"id\" class=\"input-1\" required [ngClass]=\"{ 'invalid-textbox' : signUpForm.submitted && !id.valid}\">\r\n\r\n        <!-- 위에서 id 검증 후에 검증되지 않으면 아래에서 에러 문구 발생 -->\r\n        <div *ngIf=\"signUpForm.submitted && !id.valid\">\r\n          <label class=\"validation-message\">This field is requied. </label>\r\n        </div>\r\n\r\n\r\n        <input type=\"text\" autocomplete=\"off\" #username=\"ngModel\" [(ngModel)]=\"model.username\" name=\"username\"\r\n          placeholder=\"UserName\" class=\"input-1\" required [ngClass]=\"{ 'invalid-textbox' : signUpForm.submitted && !username.valid}\">\r\n        <!-- 위에서 name 검증 후에 검증되지 않으면 아래에서 에러 문구 발생 -->\r\n        <div *ngIf=\"signUpForm.submitted && !username.valid\">\r\n          <label class=\"validation-message\">This field is requied. </label>\r\n        </div>\r\n\r\n\r\n        <input type=\"text\" autocomplete=\"off\" #email=\"ngModel\" [(ngModel)]=\"model.email\" name=\"email\"\r\n          placeholder=\"Email\" class=\"input-1\" required [pattern]=\"emailRegex\" [ngClass]=\"{ 'invalid-textbox' : signUpForm.submitted && !email.valid}\">\r\n        <!-- 위에서 email 검증 후에 검증되지 않으면 아래에서 에러 문구 발생 -->\r\n        <div *ngIf=\"signUpForm.submitted && email.errors\">\r\n          <label *ngIf=\"email.errors.required\" class=\"validation-message\">This field is requied. </label>\r\n          <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">Invaild email address. </label>\r\n        </div>\r\n\r\n\r\n        <div class=\"overlap-text\">\r\n          <input type=\"password\" autocomplete=\"off\" #password=\"ngModel\" [(ngModel)]=\"model.password\"\r\n            name=\"password\" placeholder=\"password\" class=\"input-1\" minlength=\"4\" required [ngClass]=\"{ 'invalid-textbox' : signUpForm.submitted && !password.valid}\">\r\n          <div *ngIf=\"signUpForm.submitted && password.errors\">\r\n            <label *ngIf=\"password.errors.required\" class=\"validation-message\">This field is requied. </label>\r\n            <label *ngIf=\"password.errors.minlength\" class=\"validation-message\">Enter atleast 4 characters. </label>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- <input type=\"submit\" value=\"회원가입\" class=\"btn\"> -->\r\n        <input type=\"submit\" class=\"btn\">\r\n        <!-- <a routerLink=\"/login\" class=\"btn\"> 회원가입 </a> -->\r\n      </form>\r\n    </div>\r\n    <br>\r\n\r\n    <div class=\"sub-content\">\r\n      <!-- <div class=\"s-part\"> -->\r\n        계정이 있으신가요?  <a routerLink=\"/login\"> 로그인 </a>\r\n      <!-- </div> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- success message -->\r\n<div class=\"success\" *ngIf=\"showSucessMessage\">\r\n  Sign up is successfully\r\n</div>\r\n\r\n<!-- error message -->\r\n<div class=\"alert\" *ngIf=\"serverErrorMessages\">\r\n  {{serverErrorMessages}}\r\n</div>"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(userService, _router, _route) {
        this.userService = userService;
        this._router = _router;
        this._route = _route;
        this.emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.model = {
            id: '',
            username: '',
            email: '',
            password: ''
        };
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.onSubmit = function (form) {
        var _this = this;
        //user.service.ts와 매칭
        this.userService.postUser(form.value).subscribe(
        // success or error function
        function (res) {
            _this.showSucessMessage = true;
            // 메세지 노출 시간
            setTimeout(function () { return _this.showSucessMessage = false; }, 3000);
            _this.resetForm(form);
        }, function (err) {
            if (err.status == 422) {
                _this.serverErrorMessages = err.error.join('<br/>');
            }
            else
                _this.serverErrorMessages = 'Something went wrong. Please contact admin';
        });
    };
    //성공적으로 전달이 완료 될 경우
    SignUpComponent.prototype.resetForm = function (form) {
        // this.model ={
        // };
        form.resetForm();
        this.serverErrorMessages = '';
        this._router.navigate(['/login']);
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/user/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/user/sign-up/sign-up.component.css")],
            providers: [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n  }\r\n\r\n  body {\r\n    background-color: #eee;\r\n  }\r\n\r\n  #wrapper {\r\n    width: 500px;\r\n    height: 50%;\r\n    overflow: hidden;\r\n    border: 0px solid #000;\r\n    margin: 50px auto;\r\n    padding: 10px;\r\n  }\r\n\r\n  .main-content {\r\n    width: 250px;\r\n    height: 80%;\r\n    margin: 5px auto;\r\n    background-color: #fff;\r\n    border: 2px solid #e6e6e6;\r\n    padding: 40px 50px;\r\n  }\r\n\r\n  .header {\r\n    border: 0px solid #000;\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  .header img {\r\n    height: 80px;\r\n    width: 180px;\r\n    margin: auto;\r\n    position: relative;\r\n    left: 40px;\r\n  }\r\n\r\n  .input-1,\r\n  .input-2 {\r\n    width: 105%;\r\n    height: 40px;\r\n    margin-bottom: 5px;\r\n    padding: 8px 12px;\r\n    border: 1px solid #dbdbdb;\r\n    box-sizing: border-box;\r\n    border-radius: 3px;\r\n  }\r\n\r\n  .overlap-text {\r\n    position: relative;\r\n  }\r\n\r\n  .overlap-text a {\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 10px;\r\n    color: #003569;\r\n    font-size: 14px;\r\n    text-decoration: none;\r\n    font-family: 'Overpass Mono', monospace;\r\n    letter-spacing: -1px;\r\n  }\r\n\r\n  .btn {\r\n    width: 105%;\r\n    height: 40px;\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n  .sub-content {\r\n    width: 250px;\r\n    height: 40%;\r\n    margin: 10px auto;\r\n    border: 1px solid #e6e6e6;\r\n    padding: 20px 50px;\r\n    background-color: #fff;\r\n  }\r\n\r\n  .s-part {\r\n    text-align: center;\r\n    font-family: 'Overpass Mono', monospace;\r\n    word-spacing: -3px;\r\n    letter-spacing: -2px;\r\n    font-weight: normal;\r\n  }\r\n\r\n  .s-part a {\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: #3897f0;\r\n    font-family: 'Overpass Mono', monospace;\r\n    word-spacing: -3px;\r\n    letter-spacing: -2px;\r\n    font-weight: normal;\r\n  }\r\n\r\n  input:focus {\r\n      background-color: yellow;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtHQUNkOztFQUVEO0lBQ0UsdUJBQXVCO0dBQ3hCOztFQUVEO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixjQUFjO0dBQ2Y7O0VBRUQ7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7O0VBRUQ7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztHQUNaOztFQUVEOztJQUVFLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHdDQUF3QztJQUN4QyxxQkFBcUI7R0FDdEI7O0VBRUQ7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsdUJBQXVCO0dBQ3hCOztFQUVEO0lBQ0UsbUJBQW1CO0lBQ25CLHdDQUF3QztJQUN4QyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLG9CQUFvQjtHQUNyQjs7RUFFRDtJQUNFLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHdDQUF3QztJQUN4QyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLG9CQUFvQjtHQUNyQjs7RUFFRDtNQUNJLHlCQUF5QjtHQUM1QiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcblxyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICB9XHJcblxyXG4gICN3cmFwcGVyIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkICMwMDA7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAubWFpbi1jb250ZW50IHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgcGFkZGluZzogNDBweCA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciB7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjMDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciBpbWcge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNDBweDtcclxuICB9XHJcblxyXG4gIC5pbnB1dC0xLFxyXG4gIC5pbnB1dC0yIHtcclxuICAgIHdpZHRoOiAxMDUlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRiO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcblxyXG4gIC5vdmVybGFwLXRleHQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXAtdGV4dCBhIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBjb2xvcjogIzAwMzU2OTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3ZlcnBhc3MgTW9ubycsIG1vbm9zcGFjZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0biB7XHJcbiAgICB3aWR0aDogMTA1JTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODk3ZjA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg5N2YwO1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuXHJcbiAgLnN1Yi1jb250ZW50IHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgcGFkZGluZzogMjBweCA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIC5zLXBhcnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPdmVycGFzcyBNb25vJywgbW9ub3NwYWNlO1xyXG4gICAgd29yZC1zcGFjaW5nOiAtM3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuXHJcbiAgLnMtcGFydCBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjMzg5N2YwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPdmVycGFzcyBNb25vJywgbW9ub3NwYWNlO1xyXG4gICAgd29yZC1zcGFjaW5nOiAtM3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/userprofile/userprofile.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/userprofile/userprofile.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\r\n    font-size: 10px;\r\n}\r\n\r\n.btn-1 {\r\n    width: 20%;\r\n    /* height: 10%; */\r\n    background-color: #b6c3cf;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n    margin: 1%;\r\n  }\r\n\r\n.btns-1 {\r\n    width: 20%;\r\n    height: 30px;\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    margin-left: 1%;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n    margin: 1%;\r\n  }\r\n\r\n.btns {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    margin-left: 5px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n.btn1 {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #a9a9a9;\r\n    border: 1px solid #a9a9a9;\r\n    padding: 5px 12px;\r\n    margin-left: 35%;\r\n    /*margin-right: : 100px;*/\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n.btn2 {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #a9a9a9;\r\n    border: 1px solid #a9a9a9;\r\n    padding: 5px 12px;\r\n    /*margin-left: 45%;*/\r\n    /*margin-right: : 100px;*/\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: \"Open Sans\", Arial, sans-serif;\r\n    min-height: 100vh;\r\n    background-color: #fafafa;\r\n    color: #262626;\r\n    padding-bottom: 3rem;\r\n}\r\n\r\nimg {\r\n    display: block;\r\n}\r\n\r\nd\r\n\r\n .btns {\r\n      /*width: 3%;*/\r\n      /*height: 20px;*/\r\n      background-color: #3897f0;\r\n      border: 1px solid #3897f0;\r\n      padding: 5px 12px;\r\n      margin-left: 5px;\r\n      color: #fff;\r\n      font-weight: bold;\r\n      cursor: pointer;\r\n      border-radius: 3px;\r\n    }\r\n\r\n.header {\r\n        height: 12%;\r\n        background-color: white;\r\n        border-bottom: 1px solid slategray;\r\n        position: fixed;\r\n        top: 0px;\r\n        left: 0px;\r\n        right: 0px;\r\n        overflow: hidden;\r\n    }\r\n\r\n#lg1 {\r\n        margin: 5px;\r\n        float: left;\r\n    }\r\n\r\n#lg2 {\r\n        border-left: 1px solid black;\r\n        padding-left: 40px;\r\n        margin: 20px;\r\n        float: left;\r\n    }\r\n\r\n#lg3 {\r\n        margin: 30px;\r\n        float: 0px;\r\n    }\r\n\r\n#searchbox {\r\n\r\n        margin-top: 2%;\r\n        margin-left: 7%;\r\n        float: left;\r\n\r\n    }\r\n\r\n#searchbtn {\r\n        margin-top: 2%;\r\n        float: center;\r\n\r\n    }\r\n\r\n.container {\r\n    max-width: 93.5rem;\r\n    margin: 0 auto;\r\n    /*margin-top : 200px;*/\r\n    padding: 0 2rem;\r\n\r\n}\r\n\r\n.container2 {\r\n    max-width: 93.5rem;\r\n    margin: 0 auto;\r\n    margin-top : 100px;\r\n    padding: 0 2rem;\r\n\r\n}\r\n\r\n.btn {\r\n    display: inline-block;\r\n    font: inherit;\r\n    background: none;\r\n    border: none;\r\n    color: inherit;\r\n    padding: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n#searchbtn {\r\n            margin-top: 25px;\r\n            float: center;\r\n\r\n        }\r\n\r\n.btn:focus {\r\n    outline: 0.5rem auto #4d90fe;\r\n}\r\n\r\n.visually-hidden {\r\n    position: absolute !important;\r\n    height: 1px;\r\n    width: 1px;\r\n    overflow: hidden;\r\n    clip: rect(1px, 1px, 1px, 1px);\r\n}\r\n\r\n/* Profile Section */\r\n\r\n.profile {\r\n    padding: 5rem 0;\r\n}\r\n\r\n.profile::after {\r\n    content: \"\";\r\n    display: block;\r\n    clear: both;\r\n}\r\n\r\n.profile-image {\r\n    float: left;\r\n    width: calc(33.333% - 1rem);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-right: 3rem;\r\n}\r\n\r\n.profile-image img {\r\n    border-radius: 50%;\r\n}\r\n\r\n.profile-user-settings,\r\n.profile-stats,\r\n.profile-bio {\r\n    float: left;\r\n    width: calc(66.666% - 2rem);\r\n}\r\n\r\n.profile-user-settings {\r\n    margin-top: 1.1rem;\r\n}\r\n\r\n.profile-user-name {\r\n    display: inline-block;\r\n    font-size: 3.2rem;\r\n    font-weight: 300;\r\n}\r\n\r\n.profile-edit-btn {\r\n    font-size: 1.4rem;\r\n    line-height: 1.8;\r\n    border: 0.1rem solid #dbdbdb;\r\n    border-radius: 0.3rem;\r\n    padding: 0 2.4rem;\r\n    margin-left: 2rem;\r\n}\r\n\r\n.profile-settings-btn {\r\n    font-size: 2rem;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.profile-stats {\r\n    margin-top: 2.3rem;\r\n}\r\n\r\n.profile-stats li {\r\n    display: inline-block;\r\n    font-size: 1.6rem;\r\n    line-height: 1.5;\r\n    margin-right: 4rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.profile-stats li:last-of-type {\r\n    margin-right: 0;\r\n}\r\n\r\n.profile-bio {\r\n    font-size: 1.6rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    margin-top: 2.3rem;\r\n}\r\n\r\n.profile-real-name,\r\n.profile-stat-count,\r\n.profile-edit-btn {\r\n    font-weight: 600;\r\n}\r\n\r\n/* Gallery Section */\r\n\r\n.gallery {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin: -1rem -1rem;\r\n    padding-bottom: 3rem;\r\n}\r\n\r\n.gallery-item {\r\n    position: relative;\r\n    flex: 1 0 22rem;\r\n    margin: 1rem;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n.gallery-item:hover .gallery-item-info,\r\n.gallery-item:focus .gallery-item-info {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 80%;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.gallery-item-info {\r\n    display: none;\r\n}\r\n\r\n.gallery-item-info li {\r\n    display: inline-block;\r\n    font-size: 1.7rem;\r\n    font-weight: 600;\r\n}\r\n\r\n.gallery-item-likes {\r\n    margin-right: 2.2rem;\r\n}\r\n\r\n.gallery-item-type {\r\n    position: absolute;\r\n    top: 1rem;\r\n    right: 1rem;\r\n    font-size: 2.5rem;\r\n    text-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.fa-clone,\r\n.fa-comment {\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n}\r\n\r\n.gallery-image {\r\n    width: 100%;\r\n    height: 80%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n/* Loader */\r\n\r\n.loader {\r\n    width: 5rem;\r\n    height: 5rem;\r\n    border: 0.6rem solid #999;\r\n    border-bottom-color: transparent;\r\n    border-radius: 50%;\r\n    margin: 0 auto;\r\n    -webkit-animation: loader 500ms linear infinite;\r\n            animation: loader 500ms linear infinite;\r\n}\r\n\r\n/* Media Query */\r\n\r\n@media screen and (max-width: 40rem) {\r\n    .profile {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        padding: 4rem 0;\r\n    }\r\n\r\n    .profile::after {\r\n        display: none;\r\n    }\r\n\r\n    .profile-image,\r\n    .profile-user-settings,\r\n    .profile-bio,\r\n    .profile-stats {\r\n        float: none;\r\n        width: auto;\r\n    }\r\n\r\n    .profile-image img {\r\n        width: 7.7rem;\r\n    }\r\n\r\n    .profile-user-settings {\r\n        flex-basis: calc(100% - 10.7rem);\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    .profile-user-name {\r\n        font-size: 2.2rem;\r\n    }\r\n\r\n    .profile-edit-btn {\r\n        order: 1;\r\n        padding: 0;\r\n        text-align: center;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    .profile-edit-btn {\r\n        margin-left: 0;\r\n    }\r\n\r\n    .profile-bio {\r\n        font-size: 1.4rem;\r\n        margin-top: 1.5rem;\r\n    }\r\n\r\n    .profile-edit-btn,\r\n    .profile-bio,\r\n    .profile-stats {\r\n        flex-basis: 100%;\r\n    }\r\n\r\n    .profile-stats {\r\n        order: 1;\r\n        margin-top: 1.5rem;\r\n    }\r\n\r\n    .profile-stats ul {\r\n        display: flex;\r\n        text-align: center;\r\n        padding: 1.2rem 0;\r\n        border-top: 0.1rem solid #dadada;\r\n        border-bottom: 0.1rem solid #dadada;\r\n    }\r\n\r\n    .profile-stats li {\r\n        font-size: 1.4rem;\r\n        flex: 1;\r\n        margin: 0;\r\n    }\r\n\r\n    .profile-stat-count {\r\n        display: block;\r\n    }\r\n}\r\n\r\n/* Spinner Animation */\r\n\r\n@-webkit-keyframes loader {\r\n    to {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes loader {\r\n    to {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VycHJvZmlsZS91c2VycHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztHQUNaOztBQUVEO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7R0FDWjs7QUFFRDtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtHQUNwQjs7QUFDQTtJQUNDLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7R0FDcEI7O0FBQ0Q7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0dBQ3BCOztBQUVIOzs7SUFHSSx1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YscUJBQXFCO0NBQ3hCOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFBQTs7O01BR0ssY0FBYztNQUNkLGlCQUFpQjtNQUNqQiwwQkFBMEI7TUFDMUIsMEJBQTBCO01BQzFCLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsbUJBQW1CO0tBQ3BCOztBQUVEO1FBQ0ksWUFBWTtRQUNaLHdCQUF3QjtRQUN4QixtQ0FBbUM7UUFDbkMsZ0JBQWdCO1FBQ2hCLFNBQVM7UUFDVCxVQUFVO1FBQ1YsV0FBVztRQUNYLGlCQUFpQjtLQUNwQjs7QUFFRDtRQUNJLFlBQVk7UUFDWixZQUFZO0tBQ2Y7O0FBRUQ7UUFDSSw2QkFBNkI7UUFDN0IsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixZQUFZO0tBQ2Y7O0FBRUQ7UUFDSSxhQUFhO1FBQ2IsV0FBVztLQUNkOztBQUVEOztRQUVJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsWUFBWTs7S0FFZjs7QUFFRDtRQUNJLGVBQWU7UUFDZixjQUFjOztLQUVqQjs7QUFFTDtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGdCQUFnQjs7Q0FFbkI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7O0NBRW5COztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0NBQ25COztBQUVEO1lBQ1ksaUJBQWlCO1lBQ2pCLGNBQWM7O1NBRWpCOztBQUVUO0lBQ0ksNkJBQTZCO0NBQ2hDOztBQUVEO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLCtCQUErQjtDQUNsQzs7QUFFRCxxQkFBcUI7O0FBRXJCO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDs7O0lBR0ksWUFBWTtJQUNaLDRCQUE0QjtDQUMvQjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUN0Qjs7QUFFRDs7O0lBR0ksaUJBQWlCO0NBQ3BCOztBQUVELHFCQUFxQjs7QUFFckI7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0NBQ25COztBQUVEOztJQUVJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsWUFBWTtJQUNaLFlBQVk7SUFDWixxQ0FBcUM7Q0FDeEM7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscURBQXFEO0NBQ3hEOztBQUVEOztJQUVJLG1DQUEyQjtZQUEzQiwyQkFBMkI7Q0FDOUI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFrQjtPQUFsQixrQkFBa0I7Q0FDckI7O0FBRUQsWUFBWTs7QUFFWjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdEQUF3QztZQUF4Qyx3Q0FBd0M7Q0FDM0M7O0FBRUQsaUJBQWlCOztBQUVqQjtJQUNJO1FBQ0ksY0FBYztRQUNkLGdCQUFnQjtRQUNoQixnQkFBZ0I7S0FDbkI7O0lBRUQ7UUFDSSxjQUFjO0tBQ2pCOztJQUVEOzs7O1FBSUksWUFBWTtRQUNaLFlBQVk7S0FDZjs7SUFFRDtRQUNJLGNBQWM7S0FDakI7O0lBRUQ7UUFDSSxpQ0FBaUM7UUFDakMsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixpQkFBaUI7S0FDcEI7O0lBRUQ7UUFDSSxrQkFBa0I7S0FDckI7O0lBRUQ7UUFDSSxTQUFTO1FBQ1QsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixpQkFBaUI7S0FDcEI7O0lBRUQ7UUFDSSxlQUFlO0tBQ2xCOztJQUVEO1FBQ0ksa0JBQWtCO1FBQ2xCLG1CQUFtQjtLQUN0Qjs7SUFFRDs7O1FBR0ksaUJBQWlCO0tBQ3BCOztJQUVEO1FBQ0ksU0FBUztRQUNULG1CQUFtQjtLQUN0Qjs7SUFFRDtRQUNJLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGlDQUFpQztRQUNqQyxvQ0FBb0M7S0FDdkM7O0lBRUQ7UUFDSSxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFVBQVU7S0FDYjs7SUFFRDtRQUNJLGVBQWU7S0FDbEI7Q0FDSjs7QUFFRCx1QkFBdUI7O0FBRXZCO0lBQ0k7UUFDSSxrQ0FBMEI7Z0JBQTFCLDBCQUEwQjtLQUM3QjtDQUNKOztBQUpEO0lBQ0k7UUFDSSxrQ0FBMEI7Z0JBQTFCLDBCQUEwQjtLQUM3QjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VycHJvZmlsZS91c2VycHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uYnRuLTEge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIC8qIGhlaWdodDogMTAlOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I2YzNjZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODk3ZjA7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gIH1cclxuXHJcbiAgLmJ0bnMtMSB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4OTdmMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODk3ZjA7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gIH1cclxuXHJcbiAgLmJ0bnMge1xyXG4gICAgLyp3aWR0aDogMyU7Ki9cclxuICAgIC8qaGVpZ2h0OiAyMHB4OyovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg5N2YwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM4OTdmMDtcclxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gICAuYnRuMSB7XHJcbiAgICAvKndpZHRoOiAzJTsqL1xyXG4gICAgLypoZWlnaHQ6IDIwcHg7Ki9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOWE5YTk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTlhOWE5O1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xyXG4gICAgLyptYXJnaW4tcmlnaHQ6IDogMTAwcHg7Ki9cclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gIC5idG4yIHtcclxuICAgIC8qd2lkdGg6IDMlOyovXHJcbiAgICAvKmhlaWdodDogMjBweDsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E5YTlhOTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhOWE5YTk7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgIC8qbWFyZ2luLWxlZnQ6IDQ1JTsqL1xyXG4gICAgLyptYXJnaW4tcmlnaHQ6IDogMTAwcHg7Ki9cclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG5cclxuKixcclxuKjo6YmVmb3JlLFxyXG4qOjphZnRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIGNvbG9yOiAjMjYyNjI2O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufWRcclxuXHJcbiAuYnRucyB7XHJcbiAgICAgIC8qd2lkdGg6IDMlOyovXHJcbiAgICAgIC8qaGVpZ2h0OiAyMHB4OyovXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODk3ZjA7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODk3ZjA7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogMTIlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzbGF0ZWdyYXk7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgI2xnMSB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgI2xnMiB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgICNsZzMge1xyXG4gICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgICAgICBmbG9hdDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNzZWFyY2hib3gge1xyXG5cclxuICAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICNzZWFyY2hidG4ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgICAgIGZsb2F0OiBjZW50ZXI7XHJcblxyXG4gICAgfVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDkzLjVyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIC8qbWFyZ2luLXRvcCA6IDIwMHB4OyovXHJcbiAgICBwYWRkaW5nOiAwIDJyZW07XHJcblxyXG59XHJcblxyXG4uY29udGFpbmVyMiB7XHJcbiAgICBtYXgtd2lkdGg6IDkzLjVyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3AgOiAxMDBweDtcclxuICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuXHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNzZWFyY2hidG4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgICAgICBmbG9hdDogY2VudGVyO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4uYnRuOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDAuNXJlbSBhdXRvICM0ZDkwZmU7XHJcbn1cclxuXHJcbi52aXN1YWxseS1oaWRkZW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xyXG59XHJcblxyXG4vKiBQcm9maWxlIFNlY3Rpb24gKi9cclxuXHJcbi5wcm9maWxlIHtcclxuICAgIHBhZGRpbmc6IDVyZW0gMDtcclxufVxyXG5cclxuLnByb2ZpbGU6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbWFnZSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiBjYWxjKDMzLjMzMyUgLSAxcmVtKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XHJcbn1cclxuXHJcbi5wcm9maWxlLWltYWdlIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5wcm9maWxlLXVzZXItc2V0dGluZ3MsXHJcbi5wcm9maWxlLXN0YXRzLFxyXG4ucHJvZmlsZS1iaW8ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogY2FsYyg2Ni42NjYlIC0gMnJlbSk7XHJcbn1cclxuXHJcbi5wcm9maWxlLXVzZXItc2V0dGluZ3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMS4xcmVtO1xyXG59XHJcblxyXG4ucHJvZmlsZS11c2VyLW5hbWUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzLjJyZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4ucHJvZmlsZS1lZGl0LWJ0biB7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjZGJkYmRiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG4gICAgcGFkZGluZzogMCAyLjRyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxufVxyXG5cclxuLnByb2ZpbGUtc2V0dGluZ3MtYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4ucHJvZmlsZS1zdGF0cyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjNyZW07XHJcbn1cclxuXHJcbi5wcm9maWxlLXN0YXRzIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIG1hcmdpbi1yaWdodDogNHJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByb2ZpbGUtc3RhdHMgbGk6bGFzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLnByb2ZpbGUtYmlvIHtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjNyZW07XHJcbn1cclxuXHJcbi5wcm9maWxlLXJlYWwtbmFtZSxcclxuLnByb2ZpbGUtc3RhdC1jb3VudCxcclxuLnByb2ZpbGUtZWRpdC1idG4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLyogR2FsbGVyeSBTZWN0aW9uICovXHJcblxyXG4uZ2FsbGVyeSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luOiAtMXJlbSAtMXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG4uZ2FsbGVyeS1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXg6IDEgMCAyMnJlbTtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZ2FsbGVyeS1pdGVtOmhvdmVyIC5nYWxsZXJ5LWl0ZW0taW5mbyxcclxuLmdhbGxlcnktaXRlbTpmb2N1cyAuZ2FsbGVyeS1pdGVtLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5nYWxsZXJ5LWl0ZW0taW5mbyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZ2FsbGVyeS1pdGVtLWluZm8gbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uZ2FsbGVyeS1pdGVtLWxpa2VzIHtcclxuICAgIG1hcmdpbi1yaWdodDogMi4ycmVtO1xyXG59XHJcblxyXG4uZ2FsbGVyeS1pdGVtLXR5cGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxcmVtO1xyXG4gICAgcmlnaHQ6IDFyZW07XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIHRleHQtc2hhZG93OiAwLjJyZW0gMC4ycmVtIDAuMnJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5mYS1jbG9uZSxcclxuLmZhLWNvbW1lbnQge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5nYWxsZXJ5LWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLyogTG9hZGVyICovXHJcblxyXG4ubG9hZGVyIHtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgYm9yZGVyOiAwLjZyZW0gc29saWQgIzk5OTtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBhbmltYXRpb246IGxvYWRlciA1MDBtcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi8qIE1lZGlhIFF1ZXJ5ICovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MHJlbSkge1xyXG4gICAgLnByb2ZpbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIHBhZGRpbmc6IDRyZW0gMDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZTo6YWZ0ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtaW1hZ2UsXHJcbiAgICAucHJvZmlsZS11c2VyLXNldHRpbmdzLFxyXG4gICAgLnByb2ZpbGUtYmlvLFxyXG4gICAgLnByb2ZpbGUtc3RhdHMge1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLWltYWdlIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDcuN3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS11c2VyLXNldHRpbmdzIHtcclxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLSAxMC43cmVtKTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLXVzZXItbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtZWRpdC1idG4ge1xyXG4gICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtZWRpdC1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLWJpbyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLWVkaXQtYnRuLFxyXG4gICAgLnByb2ZpbGUtYmlvLFxyXG4gICAgLnByb2ZpbGUtc3RhdHMge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtc3RhdHMge1xyXG4gICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1zdGF0cyB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMS4ycmVtIDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMC4xcmVtIHNvbGlkICNkYWRhZGE7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkICNkYWRhZGE7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtc3RhdHMgbGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLXN0YXQtY291bnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBTcGlubmVyIEFuaW1hdGlvbiAqL1xyXG5cclxuQGtleWZyYW1lcyBsb2FkZXIge1xyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/userprofile/userprofile.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user/userprofile/userprofile.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"header\">\r\n\r\n  <img id=\"lg1\" src=\"assets/img/camera.jpg\" style=\"width:7%; height:80%;\">\r\n  <img id=\"lg2\" src=\"assets/img/logom.png\" style=\"width: 12%; height:70%;\">\r\n  <div id=\"searchbox\">\r\n    <input type=\"search\" placeholder=\"\">\r\n  </div>\r\n  <div id=\"searchbtn\">\r\n    <button type=\"submit\" class=\"btns\" (click)=\"Searchbtn()\">검색</button>\r\n    <a routerLink=\"/board\" class=\"btn1\"> Main </a>\r\n    <a routerLink=\"/upload\" class=\"btn2\"> Upload </a>\r\n    <a routerLink=\"/login\" class=\"btn2\"> Logout </a>\r\n  </div>\r\n</div> -->\r\n\r\n<br><br><br><br>\r\n<div style=\"overflow:scroll; width:100%; height:auto;\">\r\n  <div class=\"container\">\r\n\r\n    <!-- <div class=\"profile\"></div> -->\r\n\r\n    <div class=\"profile-image\">\r\n\r\n      <img src=\"assets/img/mains.jpg\" alt=\"\">\r\n\r\n    </div>\r\n\r\n    <div class=\"profile-user-settings\">\r\n\r\n      <h1 class=\"profile-user-name\">{{this.id}}</h1>\r\n\r\n      <button class=\"btn profile-edit-btn\" (click)=\"editprofile()\"> Edit Profile </button>\r\n\r\n      <button class=\"btn profile-settings-btn\" aria-label=\"profile settings\"><i class=\"fas fa-cog\" aria-hidden=\"true\"></i></button>\r\n\r\n    \r\n    \r\n\r\n  </div>\r\n    <div class=\"profile-stats\">\r\n      <ul>\r\n        <li> 게시물 <span class=\"profile-stat-count\">{{this.posts}}</span></li>\r\n        <li> 팔로워 <span class=\"profile-stat-count\">{{this.follower}}</span></li>\r\n        <li> 팔로잉<span class=\"profile-stat-count\">{{this.following}}</span></li>\r\n      </ul>\r\n\r\n      <!-- <table *ngFor=\"let users of proinfo\">\r\n          <ul>\r\n              <li> 게시물 <span class=\"profile-stat-count\">{{users.posts}}</span></li>\r\n              <li> 팔로워 <span class=\"profile-stat-count\">{{users.follower}}</span></li>\r\n              <li> 팔로잉<span class=\"profile-stat-count\">{{users.following}}</span></li>\r\n            </ul>\r\n      </table> -->\r\n    </div>\r\n\r\n    <div class=\"profile-bio\">\r\n\r\n      <p><span class=\"profile-real-name\">{{this.username}}</span> </p>\r\n\r\n      <!-- <table>\r\n        <thead>\r\n          <th>post</th>\r\n          <th>follower</th>\r\n          <th>follower</th>\r\n        </thead>\r\n        <tr>\r\n          <td>{{this.proinfo[0].posts.length}}</td>\r\n          <td>{{this.proinfo[0].follower.length}}</td>\r\n          <td>{{this.proinfo[0].following.length}}</td>\r\n        </tr>\r\n      </table> -->\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"container\">\r\n\r\n  <div class=\"gallery\">\r\n\r\n    <div class=\"gallery-item\" tabindex=\"0\">\r\n\r\n      <img src=\"https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop\" class=\"gallery-image\"\r\n        alt=\"\">\r\n\r\n      <div class=\"gallery-item-info\">\r\n        <ul>\r\n          <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\" aria-hidden=\"true\"></i>\r\n            56</li>\r\n          <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\r\n              aria-hidden=\"true\"></i> 2</li>\r\n        </ul>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"gallery-item\" tabindex=\"0\">\r\n\r\n      <img src=\"https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop\" class=\"gallery-image\"\r\n        alt=\"\">\r\n\r\n      <div class=\"gallery-item-info\">\r\n\r\n        <ul>\r\n          <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\" aria-hidden=\"true\"></i>\r\n            89</li>\r\n          <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\r\n              aria-hidden=\"true\"></i> 5</li>\r\n        </ul>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"gallery-item\" tabindex=\"0\">\r\n\r\n      <img src=\"https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop\" class=\"gallery-image\"\r\n        alt=\"\">\r\n\r\n      <div class=\"gallery-item-type\">\r\n\r\n        <span class=\"visually-hidden\">Gallery</span><i class=\"fas fa-clone\" aria-hidden=\"true\"></i>\r\n\r\n      </div>\r\n\r\n      <div class=\"gallery-item-info\">\r\n\r\n        <ul>\r\n          <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\" aria-hidden=\"true\"></i>\r\n            42</li>\r\n          <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\r\n              aria-hidden=\"true\"></i> 1</li>\r\n        </ul>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"gallery-item\" tabindex=\"0\">\r\n\r\n      <img src=\"https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop\" class=\"gallery-image\"\r\n        alt=\"\">\r\n\r\n      <div class=\"gallery-item-type\">\r\n\r\n        <span class=\"visually-hidden\">Video</span><i class=\"fas fa-video\" aria-hidden=\"true\"></i>\r\n\r\n      </div>\r\n\r\n      <div class=\"gallery-item-info\">\r\n\r\n        <ul>\r\n          <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\" aria-hidden=\"true\"></i>\r\n            38</li>\r\n          <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\r\n              aria-hidden=\"true\"></i> 0</li>\r\n        </ul>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"gallery-item\" tabindex=\"0\">\r\n\r\n      <img src=\"https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop\" class=\"gallery-image\"\r\n        alt=\"\">\r\n\r\n      <div class=\"gallery-item-type\">\r\n\r\n        <span class=\"visually-hidden\">Gallery</span><i class=\"fas fa-clone\" aria-hidden=\"true\"></i>\r\n\r\n      </div>\r\n\r\n      <div class=\"gallery-item-info\">\r\n\r\n        <ul>\r\n          <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\" aria-hidden=\"true\"></i>\r\n            47</li>\r\n          <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\r\n              aria-hidden=\"true\"></i> 1</li>\r\n        </ul>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"gallery-item\" tabindex=\"0\">\r\n\r\n      <img src=\"https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop\" class=\"gallery-image\"\r\n        alt=\"\">\r\n\r\n      <div class=\"gallery-item-info\">\r\n\r\n        <ul>\r\n          <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\" aria-hidden=\"true\"></i>\r\n            94</li>\r\n          <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\r\n              aria-hidden=\"true\"></i> 3</li>\r\n        </ul>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n   \r\n\r\n    <!-- <div class=\"gallery-item\" tabindex=\"0\">8\r\n\r\n        <img src=\"https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop\" class=\"gallery-image\"\r\n          alt=\"\">\r\n\r\n        <div class=\"gallery-item-info\">\r\n\r\n          <ul>\r\n            <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\"\r\n                aria-hidden=\"true\"></i> 66</li>\r\n            <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\r\n                aria-hidden=\"true\"></i> 2</li>\r\n          </ul>\r\n\r\n        </div>\r\n\r\n      </div>  -->\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/userprofile/userprofile.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/userprofile/userprofile.component.ts ***!
  \***********************************************************/
/*! exports provided: UserprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function() { return UserprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/user.model */ "./src/app/shared/user.model.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserprofileComponent = /** @class */ (function () {
    function UserprofileComponent(router, http, userService) {
        this.router = router;
        this.http = http;
        this.userService = userService;
        this.baseUrls = 'http://localhost:3000/member/info';
    }
    UserprofileComponent.prototype.ngOnInit = function () {
        this.profilevalue();
    };
    UserprofileComponent.prototype.profilereturn = function () {
        return this.http.get('http://localhost:3000/me', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            })
        });
    };
    UserprofileComponent.prototype.profilevalue = function () {
        var _this = this;
        if (localStorage.getItem('token') == null) {
            console.log("not logined");
            this.router.navigate(['/login']);
        }
        this.profilereturn().subscribe(function (res) {
            _this.proinfo = res.data;
            // console.log(JSON.stringify(this.proinfo));
            _this.id = _this.proinfo.id;
            _this.posts = _this.proinfo.posts.length;
            _this.follower = _this.proinfo.follower.length;
            _this.following = _this.proinfo.following.length;
            _this.username = _this.proinfo.username;
        });
    };
    UserprofileComponent.prototype.profile1 = function () {
        // var check = localStorage.getItem('profile')
        // // console.log( this.baseUrls + "/pro" + `/${check}`);
        // this.http.get(this.baseUrls + "/pro" + `/${check}`).subscribe((res: any) => {
        //   // console.log( JSON.stringify(res));
        //   this.proinfo = res;
        //   this.follower = this.proinfo.follower.length;
        //   this.following = this.proinfo.following.length;
        //   this.posts = this.proinfo.posts.length;
        //   this.id = this.proinfo.id;
        //   this.username = this.proinfo.username;
        //   this.tok = this.proinfo.jsonWebToken;
        // })
    };
    UserprofileComponent.prototype.editprofile = function () {
        if (localStorage.getItem('token') == this.proinfo.jsonWebToken) {
            this.router.navigate(['/change']);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('userinfo'),
        __metadata("design:type", _shared_user_model__WEBPACK_IMPORTED_MODULE_1__["usermodels"])
    ], UserprofileComponent.prototype, "userObj", void 0);
    UserprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userprofile',
            template: __webpack_require__(/*! ./userprofile.component.html */ "./src/app/user/userprofile/userprofile.component.html"),
            styles: [__webpack_require__(/*! ./userprofile.component.css */ "./src/app/user/userprofile/userprofile.component.css")],
            providers: [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserprofileComponent);
    return UserprofileComponent;
}());



/***/ }),

/***/ "./src/app/userlist/userlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/userlist/userlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* html, body {\r\n    position: absolute;\r\n     height: 100%; \r\n } */\r\n\r\n agm-map {\r\n    width: 100%;\r\n    height: 300px;\r\n  }\r\n\r\n .font-1 {\r\n    font-weight: bold;\r\n    font-size: 165%;\r\n    width: 30%;\r\n    text-align: center;\r\n  }\r\n\r\n .font-2 {\r\n    font-size: 125%;\r\n    text-align: center;\r\n  }\r\n\r\n .btn-1 {\r\n    width: 40%;\r\n    height: 20px;\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n    margin: 1%;\r\n  }\r\n\r\n .btns-1 {\r\n    width: 20%;\r\n    height: 30px;\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    margin-left: 1%;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n    margin: 1%;\r\n  }\r\n\r\n .btn {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    margin-left: 5px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n .btn1 {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #a9a9a9;\r\n    border: 1px solid #a9a9a9;\r\n    padding: 5px 12px;\r\n    margin-left: 35%;\r\n    /*margin-right: : 100px;*/\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n .btn2 {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #a9a9a9;\r\n    border: 1px solid #a9a9a9;\r\n    padding: 5px 12px;\r\n    /*margin-left: 45%;*/\r\n    /*margin-right: : 100px;*/\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n .text {\r\n    resize: none;\r\n    width: 70%;\r\n    height: 30px;\r\n    margin: 1%\r\n  }\r\n\r\n .has {\r\n    resize: none;\r\n    width: 70%;\r\n    height: 50px;\r\n    margin: 1%\r\n  }\r\n\r\n .pickimg {\r\n    margin: 1%;\r\n    width: auto;\r\n    height: auto;\r\n  }\r\n\r\n .header {\r\n    height: 12%;\r\n    background-color: white;\r\n    border-bottom: 1px solid slategray;\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    right: 0px;\r\n    overflow: hidden;\r\n}\r\n\r\n #lg1 {\r\n    margin: 5px;\r\n    float: left;\r\n}\r\n\r\n #lg2 {\r\n    border-left: 1px solid black;\r\n    padding-left: 40px;\r\n    margin: 20px;\r\n    float: left;\r\n}\r\n\r\n #lg3 {\r\n    margin: 30px;\r\n    float: 0px;\r\n}\r\n\r\n #searchbox {\r\n\r\n    margin-top: 2%;\r\n    margin-left: 7%;\r\n    float: left;\r\n\r\n}\r\n\r\n #searchbtn {\r\n    margin-top: 2%;\r\n    float: center;\r\n\r\n}\r\n\r\n .content {\r\n          margin: 0 auto;\r\n          height: auto;\r\n          width: 50%;\r\n          margin-top : 10%;\r\n          /* border-left : 1px solid black; \r\n          border-right : 1px solid black; \r\n          border-top : 1px solid black;\r\n          border-bottom : 1px solid black; */\r\n          background-color: #eee;\r\n          background-color: white;\r\n          padding: 0.8%;\r\n          font-family: 'Hind Madurai', sans-serif;\r\n          font-weight: bold;\r\n      }\r\n\r\n #userimg {\r\n        border-radius: 100px;\r\n        width: 150px;\r\n        height: 150px;\r\n        border : 2px solid red;\r\n        margin : 10px;\r\n        float:left;\r\n      }\r\n\r\n .user {\r\n         margin-top: 7%;\r\n         font-size: 50px;\r\n         float:left;\r\n      }\r\n\r\n #userphoto {\r\n          width:100%;\r\n      }\r\n\r\n #instaicon {\r\n          width:100%;\r\n      }\r\n\r\n .like {\r\n         margin-left : 10px;\r\n      }\r\n\r\n .comment {\r\n          margin-left: 10px;\r\n          font-size: 13px;\r\n      }\r\n\r\n #commentin{\r\n          border : none;\r\n          width: 70%;\r\n          height : 40px;\r\n          font-size : 15px;\r\n          margin-left : 10px;\r\n      }\r\n\r\n #commentin::-webkit-input-placeholder {\r\n          \r\n          font-size : 15px;\r\n      }\r\n\r\n #menuimg {\r\n        \r\n          width:50px;\r\n          height:40px;\r\n          margin-left : 10px;\r\n         \r\n      }\r\n\r\n .comment2 {\r\n          width: 99%;\r\n          margin : 20px;\r\n          float: left;\r\n      }\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmxpc3QvdXNlcmxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0tBR0s7O0NBRUo7SUFDRyxZQUFZO0lBQ1osY0FBYztHQUNmOztDQUVEO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsbUJBQW1CO0dBQ3BCOztDQUVEO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtHQUNwQjs7Q0FFSDtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7R0FDWjs7Q0FFRDtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0dBQ1o7O0NBRUQ7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7R0FDcEI7O0NBQ0E7SUFDQyxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0dBQ3BCOztDQUNEO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtHQUNwQjs7Q0FFRDtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLFVBQVU7R0FDWDs7Q0FDRDtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLFVBQVU7R0FDWDs7Q0FFRDtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtHQUNkOztDQUdEO0lBQ0UsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixtQ0FBbUM7SUFDbkMsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtDQUNwQjs7Q0FFRDtJQUNJLFlBQVk7SUFDWixZQUFZO0NBQ2Y7O0NBRUQ7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0NBQ2Y7O0NBRUQ7SUFDSSxhQUFhO0lBQ2IsV0FBVztDQUNkOztDQUVEOztJQUVJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTs7Q0FFZjs7Q0FFRDtJQUNJLGVBQWU7SUFDZixjQUFjOztDQUVqQjs7Q0FFSztVQUNJLGVBQWU7VUFDZixhQUFhO1VBQ2IsV0FBVztVQUNYLGlCQUFpQjtVQUNqQjs7OzZDQUdtQztVQUNuQyx1QkFBdUI7VUFDdkIsd0JBQXdCO1VBQ3hCLGNBQWM7VUFDZCx3Q0FBd0M7VUFDeEMsa0JBQWtCO09BQ3JCOztDQUNEO1FBQ0UscUJBQXFCO1FBQ3JCLGFBQWE7UUFDYixjQUFjO1FBQ2QsdUJBQXVCO1FBQ3ZCLGNBQWM7UUFDZCxXQUFXO09BQ1o7O0NBQ0Q7U0FDRyxlQUFlO1NBQ2YsZ0JBQWdCO1NBQ2hCLFdBQVc7T0FDYjs7Q0FDRDtVQUNJLFdBQVc7T0FDZDs7Q0FDRDtVQUNJLFdBQVc7T0FDZDs7Q0FDRDtTQUNHLG1CQUFtQjtPQUNyQjs7Q0FDRDtVQUNJLGtCQUFrQjtVQUNsQixnQkFBZ0I7T0FDbkI7O0NBQ0Q7VUFDSSxjQUFjO1VBQ2QsV0FBVztVQUNYLGNBQWM7VUFDZCxpQkFBaUI7VUFDakIsbUJBQW1CO09BQ3RCOztDQUVEOztVQUVJLGlCQUFpQjtPQUNwQjs7Q0FDRDs7VUFFSSxXQUFXO1VBQ1gsWUFBWTtVQUNaLG1CQUFtQjs7T0FFdEI7O0NBQ0Q7VUFDSSxXQUFXO1VBQ1gsY0FBYztVQUNkLFlBQVk7T0FDZiIsImZpbGUiOiJzcmMvYXBwL3VzZXJsaXN0L3VzZXJsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBodG1sLCBib2R5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gfSAqL1xyXG5cclxuIGFnbS1tYXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZvbnQtMSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTY1JTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZm9udC0yIHtcclxuICAgIGZvbnQtc2l6ZTogMTI1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4uYnRuLTEge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODk3ZjA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg5N2YwO1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICB9XHJcblxyXG4gIC5idG5zLTEge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODk3ZjA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg5N2YwO1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgLyp3aWR0aDogMyU7Ki9cclxuICAgIC8qaGVpZ2h0OiAyMHB4OyovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg5N2YwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM4OTdmMDtcclxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gICAuYnRuMSB7XHJcbiAgICAvKndpZHRoOiAzJTsqL1xyXG4gICAgLypoZWlnaHQ6IDIwcHg7Ki9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOWE5YTk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTlhOWE5O1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xyXG4gICAgLyptYXJnaW4tcmlnaHQ6IDogMTAwcHg7Ki9cclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gIC5idG4yIHtcclxuICAgIC8qd2lkdGg6IDMlOyovXHJcbiAgICAvKmhlaWdodDogMjBweDsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E5YTlhOTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhOWE5YTk7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgIC8qbWFyZ2luLWxlZnQ6IDQ1JTsqL1xyXG4gICAgLyptYXJnaW4tcmlnaHQ6IDogMTAwcHg7Ki9cclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG5cclxuICAudGV4dCB7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luOiAxJVxyXG4gIH1cclxuICAuaGFzIHtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW46IDElXHJcbiAgfVxyXG5cclxuICAucGlja2ltZyB7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuXHJcbiAgLmhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDEyJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNsYXRlZ3JheTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiNsZzEge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI2xnMiB7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNsZzMge1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgZmxvYXQ6IDBweDtcclxufVxyXG5cclxuI3NlYXJjaGJveCB7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuXHJcbn1cclxuXHJcbiNzZWFyY2hidG4ge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBmbG9hdDogY2VudGVyO1xyXG5cclxufVxyXG5cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcCA6IDEwJTtcclxuICAgICAgICAgIC8qIGJvcmRlci1sZWZ0IDogMXB4IHNvbGlkIGJsYWNrOyBcclxuICAgICAgICAgIGJvcmRlci1yaWdodCA6IDFweCBzb2xpZCBibGFjazsgXHJcbiAgICAgICAgICBib3JkZXItdG9wIDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbSA6IDFweCBzb2xpZCBibGFjazsgKi9cclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuOCU7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0hpbmQgTWFkdXJhaScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgICAjdXNlcmltZyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgYm9yZGVyIDogMnB4IHNvbGlkIHJlZDtcclxuICAgICAgICBtYXJnaW4gOiAxMHB4O1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgLnVzZXIge1xyXG4gICAgICAgICBtYXJnaW4tdG9wOiA3JTtcclxuICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICB9XHJcbiAgICAgICN1c2VycGhvdG8ge1xyXG4gICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgfVxyXG4gICAgICAjaW5zdGFpY29uIHtcclxuICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLmxpa2Uge1xyXG4gICAgICAgICBtYXJnaW4tbGVmdCA6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbW1lbnQge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIH1cclxuICAgICAgI2NvbW1lbnRpbntcclxuICAgICAgICAgIGJvcmRlciA6IG5vbmU7XHJcbiAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgaGVpZ2h0IDogNDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZSA6IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdCA6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAjY29tbWVudGluOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgZm9udC1zaXplIDogMTVweDtcclxuICAgICAgfVxyXG4gICAgICAjbWVudWltZyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICB3aWR0aDo1MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdCA6IDEwcHg7XHJcbiAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC5jb21tZW50MiB7XHJcbiAgICAgICAgICB3aWR0aDogOTklO1xyXG4gICAgICAgICAgbWFyZ2luIDogMjBweDtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICB9XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/userlist/userlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/userlist/userlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <!-- <link rel=\"stylesheet\" href=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css\"> -->\n</head>\n\n<body>\n  <div class=\"content\">\n\n    <form #uploadForm=\"ngForm\">\n      <!-- (ngSubmit)=\"onSubmit(uploadForm)\"> -->\n      <div class=\"row\">\n        <div class=\"row\">\n          <div class=\"input-field col s7\">\n            <!-- <table>\n            <thead>\n              <th>id</th>\n              <th>text</th>\n              <th>time</th>\n              \n            </thead>\n            <tr *ngFor=\"let upload of uploadService.upload\">\n              <td>{{upload.username}}</td>\n              <td>{{upload.text}}</td>\n              <td>{{upload.time}}</td>\n            </tr>\n          </table> -->\n            <table style=\"width: 200%\">\n              <thead>\n                <tr class=\"font-1\">\n                  <th style=\"width: 20%\">ID</th>\n                  <th style=\"width: 20%\">UserName</th>\n                  <th style=\"width: 20%\">Follower</th>\n                  <th style=\"width: 20%\">Following</th>\n                  <th style=\"width: 25%\">Profile</th>\n                </tr>\n              </thead>\n              <br>\n              <tr class=\"font-2\" *ngFor=\"let user of information\">\n                <td>{{user.id}}</td>\n                <td>{{user.username}}</td>\n                <td>{{user.follower.length}}</td>\n                <td>{{user.following.length}}</td>\n                <td>\n                  <button class=\"btn-1\" (click)=\"onEdit(user)\"></button>\n                </td>\n              </tr>\n            </table>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/userlist/userlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/userlist/userlist.component.ts ***!
  \************************************************/
/*! exports provided: UserlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistComponent", function() { return UserlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserlistComponent = /** @class */ (function () {
    function UserlistComponent(router, http) {
        this.router = router;
        this.http = http;
        this.baseUrls = 'http://localhost:3000/member/findbyusername';
    }
    UserlistComponent.prototype.ngOnInit = function () {
        this.userInform();
    };
    UserlistComponent.prototype.userInform = function () {
        var _this = this;
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .append("username", localStorage.getItem('username'));
        this.http.post(this.baseUrls, httpParams).subscribe(function (res) {
            _this.information = res.data;
        });
    };
    UserlistComponent.prototype.onEdit = function (user) {
        this.information = user;
        localStorage.setItem('users', this.information.id);
        if (this.information.jsonWebToken == localStorage.getItem('token')) {
            this.router.navigate(['/profile']);
        }
        else if (this.information.jsonWebToken != localStorage.getItem('token')) {
            this.router.navigate(['/other']);
        }
        // local
    };
    UserlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userlist',
            template: __webpack_require__(/*! ./userlist.component.html */ "./src/app/userlist/userlist.component.html"),
            styles: [__webpack_require__(/*! ./userlist.component.css */ "./src/app/userlist/userlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserlistComponent);
    return UserlistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiBaseUrl: 'http://localhost:3000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\project\HelloJavaproject\webapp\mjt_web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map