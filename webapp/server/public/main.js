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

module.exports = "<!-- <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\"> </agm-map> -->\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _user_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/userprofile/userprofile.component */ "./src/app/user/userprofile/userprofile.component.ts");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _googlemap_googlemap_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./googlemap/googlemap.component */ "./src/app/googlemap/googlemap.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//built-in






//component




//routes







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
                _user_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_11__["UserprofileComponent"],
                _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_12__["SignInComponent"],
                _upload_upload_component__WEBPACK_IMPORTED_MODULE_14__["UploadComponent"],
                _googlemap_googlemap_component__WEBPACK_IMPORTED_MODULE_15__["GooglemapComponent"],
                _board_board_component__WEBPACK_IMPORTED_MODULE_16__["BoardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_10__["appRoutes"]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyApX1bT78XX5t8JYZOkMMYUOo8vxfZtObQ'
                })
            ],
            providers: [_shared_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"]],
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

module.exports = "/* html, body {\r\n    position: absolute;\r\n     height: 100%; \r\n } */\r\n\r\n agm-map {\r\n    width: 100%;\r\n    height: 300px;\r\n  }\r\n\r\n .btn-1 {\r\n    width: 20%;\r\n    /* height: 10%; */\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n    margin: 1%;\r\n  }\r\n\r\n .btns-1 {\r\n    width: 20%;\r\n    height: 30px;\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    margin-left: 1%;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n    margin: 1%;\r\n  }\r\n\r\n .btn {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    margin-left: 5px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n .btn1 {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #a9a9a9;\r\n    border: 1px solid #a9a9a9;\r\n    padding: 5px 12px;\r\n    margin-left: 35%;\r\n    /*margin-right: : 100px;*/\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n .btn2 {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #a9a9a9;\r\n    border: 1px solid #a9a9a9;\r\n    padding: 5px 12px;\r\n    /*margin-left: 45%;*/\r\n    /*margin-right: : 100px;*/\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n .text {\r\n    resize: none;\r\n    width: 70%;\r\n    height: 30px;\r\n    margin: 1%\r\n  }\r\n\r\n .has {\r\n    resize: none;\r\n    width: 70%;\r\n    height: 50px;\r\n    margin: 1%\r\n  }\r\n\r\n .pickimg {\r\n    margin: 1%;\r\n    width: auto;\r\n    height: auto;\r\n  }\r\n\r\n .header {\r\n    height: 12%;\r\n    background-color: white;\r\n    border-bottom: 1px solid slategray;\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    right: 0px;\r\n    overflow: hidden;\r\n}\r\n\r\n #lg1 {\r\n    margin: 5px;\r\n    float: left;\r\n}\r\n\r\n #lg2 {\r\n    border-left: 1px solid black;\r\n    padding-left: 40px;\r\n    margin: 20px;\r\n    float: left;\r\n}\r\n\r\n #lg3 {\r\n    margin: 30px;\r\n    float: 0px;\r\n}\r\n\r\n #searchbox {\r\n\r\n    margin-top: 2%;\r\n    margin-left: 7%;\r\n    float: left;\r\n\r\n}\r\n\r\n #searchbtn {\r\n    margin-top: 2%;\r\n    float: center;\r\n\r\n}\r\n\r\n .content {\r\n          margin: 0 auto;\r\n          height: auto;\r\n          width: 700px;\r\n          margin-top : 10%;\r\n          border-left : 1px solid black; \r\n          border-right : 1px solid black; \r\n          border-top : 1px solid black;\r\n          border-bottom : 1px solid black;\r\n          padding: 0.8%;\r\n          font-family: 'Hind Madurai', sans-serif;\r\n          font-weight: bold;\r\n      }\r\n\r\n #userimg {\r\n        border-radius: 100px;\r\n        width: 150px;\r\n        height: 150px;\r\n        border : 2px solid red;\r\n        margin : 10px;\r\n        float:left;\r\n      }\r\n\r\n .user {\r\n         margin-top: 7%;\r\n         font-size: 50px;\r\n         float:left;\r\n      }\r\n\r\n #userphoto {\r\n          width:100%;\r\n      }\r\n\r\n #instaicon {\r\n          width:100%;\r\n      }\r\n\r\n .like {\r\n         margin-left : 10px;\r\n      }\r\n\r\n .comment {\r\n          margin-left: 10px;\r\n          font-size: 13px;\r\n      }\r\n\r\n #commentin{\r\n          border : none;\r\n          width: 70%;\r\n          height : 40px;\r\n          font-size : 15px;\r\n          margin-left : 10px;\r\n      }\r\n\r\n #commentin::-webkit-input-placeholder {\r\n          \r\n          font-size : 15px;\r\n      }\r\n\r\n #menuimg {\r\n        \r\n          width:50px;\r\n          height:40px;\r\n          margin-left : 10px;\r\n         \r\n      }\r\n\r\n .comment2 {\r\n          width: 99%;\r\n          margin : 20px;\r\n          float: left;\r\n      }\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0tBR0s7O0NBRUo7SUFDRyxZQUFZO0lBQ1osY0FBYztHQUNmOztDQUdIO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztHQUNaOztDQUVEO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7R0FDWjs7Q0FFRDtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtHQUNwQjs7Q0FDQTtJQUNDLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7R0FDcEI7O0NBQ0Q7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0dBQ3BCOztDQUVEO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2IsVUFBVTtHQUNYOztDQUNEO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2IsVUFBVTtHQUNYOztDQUVEO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0dBQ2Q7O0NBR0Q7SUFDRSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLG1DQUFtQztJQUNuQyxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0NBQ3BCOztDQUVEO0lBQ0ksWUFBWTtJQUNaLFlBQVk7Q0FDZjs7Q0FFRDtJQUNJLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7Q0FDZjs7Q0FFRDtJQUNJLGFBQWE7SUFDYixXQUFXO0NBQ2Q7O0NBRUQ7O0lBRUksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZOztDQUVmOztDQUVEO0lBQ0ksZUFBZTtJQUNmLGNBQWM7O0NBRWpCOztDQUVLO1VBQ0ksZUFBZTtVQUNmLGFBQWE7VUFDYixhQUFhO1VBQ2IsaUJBQWlCO1VBQ2pCLDhCQUE4QjtVQUM5QiwrQkFBK0I7VUFDL0IsNkJBQTZCO1VBQzdCLGdDQUFnQztVQUNoQyxjQUFjO1VBQ2Qsd0NBQXdDO1VBQ3hDLGtCQUFrQjtPQUNyQjs7Q0FDRDtRQUNFLHFCQUFxQjtRQUNyQixhQUFhO1FBQ2IsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixjQUFjO1FBQ2QsV0FBVztPQUNaOztDQUNEO1NBQ0csZUFBZTtTQUNmLGdCQUFnQjtTQUNoQixXQUFXO09BQ2I7O0NBQ0Q7VUFDSSxXQUFXO09BQ2Q7O0NBQ0Q7VUFDSSxXQUFXO09BQ2Q7O0NBQ0Q7U0FDRyxtQkFBbUI7T0FDckI7O0NBQ0Q7VUFDSSxrQkFBa0I7VUFDbEIsZ0JBQWdCO09BQ25COztDQUNEO1VBQ0ksY0FBYztVQUNkLFdBQVc7VUFDWCxjQUFjO1VBQ2QsaUJBQWlCO1VBQ2pCLG1CQUFtQjtPQUN0Qjs7Q0FFRDs7VUFFSSxpQkFBaUI7T0FDcEI7O0NBQ0Q7O1VBRUksV0FBVztVQUNYLFlBQVk7VUFDWixtQkFBbUI7O09BRXRCOztDQUNEO1VBQ0ksV0FBVztVQUNYLGNBQWM7VUFDZCxZQUFZO09BQ2YiLCJmaWxlIjoic3JjL2FwcC9ib2FyZC9ib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaHRtbCwgYm9keSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgaGVpZ2h0OiAxMDAlOyBcclxuIH0gKi9cclxuXHJcbiBhZ20tbWFwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcblxyXG5cclxuLmJ0bi0xIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICAvKiBoZWlnaHQ6IDEwJTsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODk3ZjA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg5N2YwO1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICB9XHJcblxyXG4gIC5idG5zLTEge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODk3ZjA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg5N2YwO1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgLyp3aWR0aDogMyU7Ki9cclxuICAgIC8qaGVpZ2h0OiAyMHB4OyovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg5N2YwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM4OTdmMDtcclxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gICAuYnRuMSB7XHJcbiAgICAvKndpZHRoOiAzJTsqL1xyXG4gICAgLypoZWlnaHQ6IDIwcHg7Ki9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOWE5YTk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTlhOWE5O1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xyXG4gICAgLyptYXJnaW4tcmlnaHQ6IDogMTAwcHg7Ki9cclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gIC5idG4yIHtcclxuICAgIC8qd2lkdGg6IDMlOyovXHJcbiAgICAvKmhlaWdodDogMjBweDsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E5YTlhOTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhOWE5YTk7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgIC8qbWFyZ2luLWxlZnQ6IDQ1JTsqL1xyXG4gICAgLyptYXJnaW4tcmlnaHQ6IDogMTAwcHg7Ki9cclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG5cclxuICAudGV4dCB7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luOiAxJVxyXG4gIH1cclxuICAuaGFzIHtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW46IDElXHJcbiAgfVxyXG5cclxuICAucGlja2ltZyB7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuXHJcbiAgLmhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDEyJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNsYXRlZ3JheTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiNsZzEge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI2xnMiB7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNsZzMge1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgZmxvYXQ6IDBweDtcclxufVxyXG5cclxuI3NlYXJjaGJveCB7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuXHJcbn1cclxuXHJcbiNzZWFyY2hidG4ge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBmbG9hdDogY2VudGVyO1xyXG5cclxufVxyXG5cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogNzAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wIDogMTAlO1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQgOiAxcHggc29saWQgYmxhY2s7IFxyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0IDogMXB4IHNvbGlkIGJsYWNrOyBcclxuICAgICAgICAgIGJvcmRlci10b3AgOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tIDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgcGFkZGluZzogMC44JTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSGluZCBNYWR1cmFpJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICAgICN1c2VyaW1nIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBib3JkZXIgOiAycHggc29saWQgcmVkO1xyXG4gICAgICAgIG1hcmdpbiA6IDEwcHg7XHJcbiAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgfVxyXG4gICAgICAudXNlciB7XHJcbiAgICAgICAgIG1hcmdpbi10b3A6IDclO1xyXG4gICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgI3VzZXJwaG90byB7XHJcbiAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgICNpbnN0YWljb24ge1xyXG4gICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgfVxyXG4gICAgICAubGlrZSB7XHJcbiAgICAgICAgIG1hcmdpbi1sZWZ0IDogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAuY29tbWVudCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgfVxyXG4gICAgICAjY29tbWVudGlue1xyXG4gICAgICAgICAgYm9yZGVyIDogbm9uZTtcclxuICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICBoZWlnaHQgOiA0MHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplIDogMTVweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0IDogMTBweDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgICNjb21tZW50aW46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBmb250LXNpemUgOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgICNtZW51aW1nIHtcclxuICAgICAgICBcclxuICAgICAgICAgIHdpZHRoOjUwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0IDogMTBweDtcclxuICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgLmNvbW1lbnQyIHtcclxuICAgICAgICAgIHdpZHRoOiA5OSU7XHJcbiAgICAgICAgICBtYXJnaW4gOiAyMHB4O1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIH1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/board/board.component.html":
/*!********************************************!*\
  !*** ./src/app/board/board.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n\n  <img id=\"lg1\" src=\"assets/img/camera.jpg\" style=\"width:7%; height:80%;\">\n  <img id=\"lg2\" src=\"assets/img/logom.png\" style=\"width: 12%; height:70%;\">\n  <div id=\"searchbox\">\n      <input type=\"search\" placeholder=\"\">\n  </div>\n  <div id=\"searchbtn\">\n      <button type=\"submit\" class=\"btn\" (click)=\"Searchbtn()\">검색</button>\n      <a routerLink=\"/profile\" class=\"btn1\"> Profile </a>\n    <a routerLink=\"/upload\" class=\"btn2\"> Upload </a>\n    <a routerLink=\"/login\" class=\"btn2\"> Logout </a>\n  </div>\n\n</div>\n\n<div class=\"content\">\n\n  <form #uploadForm=\"ngForm\">\n      <!-- (ngSubmit)=\"onSubmit(uploadForm)\"> -->\n      <div class=\"row\">\n          <div class=\"row\">\n              <div class=\"input-field col s12\">\n                 \n              </div>\n          </div>\n      </div>\n  </form>\n</div>"

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
    function BoardComponent() {
    }
    BoardComponent.prototype.ngOnInit = function () {
    };
    BoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.css */ "./src/app/board/board.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "/* html, body {\r\n    position: absolute;\r\n     height: 100%; \r\n } */\r\n\r\n agm-map {\r\n    width: 100%;\r\n    height: 600px;\r\n  }\r\n\r\n .btn-1 {\r\n    width: 20%;\r\n    /* height: 10%; */\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n    margin: 1%;\r\n  }\r\n\r\n .btns-1 {\r\n    width: 20%;\r\n    height: 30px;\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    margin-left: 1%;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n    margin: 1%;\r\n  }\r\n\r\n .btn {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    margin-left: 5px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n .btn1 {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #a9a9a9;\r\n    border: 1px solid #a9a9a9;\r\n    padding: 5px 12px;\r\n    margin-left: 35%;\r\n    /*margin-right: : 100px;*/\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n .btn2 {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #a9a9a9;\r\n    border: 1px solid #a9a9a9;\r\n    padding: 5px 12px;\r\n    /*margin-left: 45%;*/\r\n    /*margin-right: : 100px;*/\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n .text {\r\n    resize: none;\r\n    width: 70%;\r\n    height: 30px;\r\n    margin: 1%\r\n  }\r\n\r\n .has {\r\n    resize: none;\r\n    width: 70%;\r\n    height: 50px;\r\n    margin: 1%\r\n  }\r\n\r\n .pickimg {\r\n    margin: 1%;\r\n    width: auto;\r\n    height: auto;\r\n  }\r\n\r\n .header {\r\n          height: 12%;\r\n          background-color: white;\r\n          border-bottom: 1px solid slategray;\r\n          position: fixed;\r\n          top: 0px;\r\n          left: 0px;\r\n          right: 0px;\r\n          overflow: hidden;\r\n      }\r\n\r\n #lg1 {\r\n          margin: 5px;\r\n          float: left;\r\n      }\r\n\r\n #lg2 {\r\n          border-left: 1px solid black;\r\n          padding-left: 40px;\r\n          margin: 20px;\r\n          float: left;\r\n      }\r\n\r\n #lg3 {\r\n          margin: 30px;\r\n          float: 0px;\r\n      }\r\n\r\n #searchbox {\r\n\r\n          margin-top: 2%;\r\n          margin-left: 7%;\r\n          float: left;\r\n\r\n      }\r\n\r\n #searchbtn {\r\n          margin-top: 2%;\r\n          float: center;\r\n\r\n      }\r\n\r\n .content {\r\n          margin: 0 auto;\r\n          height: auto;\r\n          width: 700px;\r\n          margin-top : 10%;\r\n          border-left : 1px solid black; \r\n          border-right : 1px solid black; \r\n          border-top : 1px solid black;\r\n          border-bottom : 1px solid black;\r\n          padding: 0.8%;\r\n          font-family: 'Hind Madurai', sans-serif;\r\n          font-weight: bold;\r\n      }\r\n\r\n #userimg {\r\n        border-radius: 100px;\r\n        width: 150px;\r\n        height: 150px;\r\n        border : 2px solid red;\r\n        margin : 10px;\r\n        float:left;\r\n      }\r\n\r\n .user {\r\n         margin-top: 7%;\r\n         font-size: 50px;\r\n         float:left;\r\n      }\r\n\r\n #userphoto {\r\n          width:100%;\r\n      }\r\n\r\n #instaicon {\r\n          width:100%;\r\n      }\r\n\r\n .like {\r\n         margin-left : 10px;\r\n      }\r\n\r\n .comment {\r\n          margin-left: 10px;\r\n          font-size: 13px;\r\n      }\r\n\r\n #commentin{\r\n          border : none;\r\n          width: 70%;\r\n          height : 40px;\r\n          font-size : 15px;\r\n          margin-left : 10px;\r\n      }\r\n\r\n #commentin::-webkit-input-placeholder {\r\n          \r\n          font-size : 15px;\r\n      }\r\n\r\n #menuimg {\r\n        \r\n          width:50px;\r\n          height:40px;\r\n          margin-left : 10px;\r\n         \r\n      }\r\n\r\n .comment2 {\r\n          width: 99%;\r\n          margin : 20px;\r\n          float: left;\r\n      }\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29vZ2xlbWFwL2dvb2dsZW1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7S0FHSzs7Q0FFSjtJQUNHLFlBQVk7SUFDWixjQUFjO0dBQ2Y7O0NBR0g7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0dBQ1o7O0NBRUQ7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztHQUNaOztDQUVEO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0dBQ3BCOztDQUNBO0lBQ0MsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtHQUNwQjs7Q0FDRDtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7R0FDcEI7O0NBRUQ7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7SUFDYixVQUFVO0dBQ1g7O0NBQ0Q7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7SUFDYixVQUFVO0dBQ1g7O0NBRUQ7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7R0FDZDs7Q0FHSDtVQUNVLFlBQVk7VUFDWix3QkFBd0I7VUFDeEIsbUNBQW1DO1VBQ25DLGdCQUFnQjtVQUNoQixTQUFTO1VBQ1QsVUFBVTtVQUNWLFdBQVc7VUFDWCxpQkFBaUI7T0FDcEI7O0NBRUQ7VUFDSSxZQUFZO1VBQ1osWUFBWTtPQUNmOztDQUVEO1VBQ0ksNkJBQTZCO1VBQzdCLG1CQUFtQjtVQUNuQixhQUFhO1VBQ2IsWUFBWTtPQUNmOztDQUVEO1VBQ0ksYUFBYTtVQUNiLFdBQVc7T0FDZDs7Q0FFRDs7VUFFSSxlQUFlO1VBQ2YsZ0JBQWdCO1VBQ2hCLFlBQVk7O09BRWY7O0NBRUQ7VUFDSSxlQUFlO1VBQ2YsY0FBYzs7T0FFakI7O0NBRUQ7VUFDSSxlQUFlO1VBQ2YsYUFBYTtVQUNiLGFBQWE7VUFDYixpQkFBaUI7VUFDakIsOEJBQThCO1VBQzlCLCtCQUErQjtVQUMvQiw2QkFBNkI7VUFDN0IsZ0NBQWdDO1VBQ2hDLGNBQWM7VUFDZCx3Q0FBd0M7VUFDeEMsa0JBQWtCO09BQ3JCOztDQUNEO1FBQ0UscUJBQXFCO1FBQ3JCLGFBQWE7UUFDYixjQUFjO1FBQ2QsdUJBQXVCO1FBQ3ZCLGNBQWM7UUFDZCxXQUFXO09BQ1o7O0NBQ0Q7U0FDRyxlQUFlO1NBQ2YsZ0JBQWdCO1NBQ2hCLFdBQVc7T0FDYjs7Q0FDRDtVQUNJLFdBQVc7T0FDZDs7Q0FDRDtVQUNJLFdBQVc7T0FDZDs7Q0FDRDtTQUNHLG1CQUFtQjtPQUNyQjs7Q0FDRDtVQUNJLGtCQUFrQjtVQUNsQixnQkFBZ0I7T0FDbkI7O0NBQ0Q7VUFDSSxjQUFjO1VBQ2QsV0FBVztVQUNYLGNBQWM7VUFDZCxpQkFBaUI7VUFDakIsbUJBQW1CO09BQ3RCOztDQUVEOztVQUVJLGlCQUFpQjtPQUNwQjs7Q0FDRDs7VUFFSSxXQUFXO1VBQ1gsWUFBWTtVQUNaLG1CQUFtQjs7T0FFdEI7O0NBQ0Q7VUFDSSxXQUFXO1VBQ1gsY0FBYztVQUNkLFlBQVk7T0FDZiIsImZpbGUiOiJzcmMvYXBwL2dvb2dsZW1hcC9nb29nbGVtYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGh0bWwsIGJvZHkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIGhlaWdodDogMTAwJTsgXHJcbiB9ICovXHJcblxyXG4gYWdtLW1hcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgfVxyXG5cclxuXHJcbi5idG4tMSB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgLyogaGVpZ2h0OiAxMCU7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg5N2YwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM4OTdmMDtcclxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgfVxyXG5cclxuICAuYnRucy0xIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg5N2YwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM4OTdmMDtcclxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgfVxyXG5cclxuICAuYnRuIHtcclxuICAgIC8qd2lkdGg6IDMlOyovXHJcbiAgICAvKmhlaWdodDogMjBweDsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4OTdmMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODk3ZjA7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuICAgLmJ0bjEge1xyXG4gICAgLyp3aWR0aDogMyU7Ki9cclxuICAgIC8qaGVpZ2h0OiAyMHB4OyovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTlhOWE5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2E5YTlhOTtcclxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcclxuICAgIC8qbWFyZ2luLXJpZ2h0OiA6IDEwMHB4OyovXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuICAuYnRuMiB7XHJcbiAgICAvKndpZHRoOiAzJTsqL1xyXG4gICAgLypoZWlnaHQ6IDIwcHg7Ki9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOWE5YTk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTlhOWE5O1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICAvKm1hcmdpbi1sZWZ0OiA0NSU7Ki9cclxuICAgIC8qbWFyZ2luLXJpZ2h0OiA6IDEwMHB4OyovXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuXHJcbiAgLnRleHQge1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbjogMSVcclxuICB9XHJcbiAgLmhhcyB7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOiAxJVxyXG4gIH1cclxuXHJcbiAgLnBpY2tpbWcge1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcblxyXG4uaGVhZGVyIHtcclxuICAgICAgICAgIGhlaWdodDogMTIlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgc2xhdGVncmF5O1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgI2xnMSB7XHJcbiAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjbGcyIHtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgI2xnMyB7XHJcbiAgICAgICAgICBtYXJnaW46IDMwcHg7XHJcbiAgICAgICAgICBmbG9hdDogMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjc2VhcmNoYm94IHtcclxuXHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3JTtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgI3NlYXJjaGJ0biB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgICAgICAgIGZsb2F0OiBjZW50ZXI7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIHdpZHRoOiA3MDBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3AgOiAxMCU7XHJcbiAgICAgICAgICBib3JkZXItbGVmdCA6IDFweCBzb2xpZCBibGFjazsgXHJcbiAgICAgICAgICBib3JkZXItcmlnaHQgOiAxcHggc29saWQgYmxhY2s7IFxyXG4gICAgICAgICAgYm9yZGVyLXRvcCA6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgIGJvcmRlci1ib3R0b20gOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjglO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdIaW5kIE1hZHVyYWknLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgICAgI3VzZXJpbWcge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGJvcmRlciA6IDJweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgbWFyZ2luIDogMTBweDtcclxuICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICB9XHJcbiAgICAgIC51c2VyIHtcclxuICAgICAgICAgbWFyZ2luLXRvcDogNyU7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgfVxyXG4gICAgICAjdXNlcnBob3RvIHtcclxuICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgI2luc3RhaWNvbiB7XHJcbiAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5saWtlIHtcclxuICAgICAgICAgbWFyZ2luLWxlZnQgOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jb21tZW50IHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICB9XHJcbiAgICAgICNjb21tZW50aW57XHJcbiAgICAgICAgICBib3JkZXIgOiBub25lO1xyXG4gICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgIGhlaWdodCA6IDQwcHg7XHJcbiAgICAgICAgICBmb250LXNpemUgOiAxNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQgOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgI2NvbW1lbnRpbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGZvbnQtc2l6ZSA6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgICAgI21lbnVpbWcge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgd2lkdGg6NTBweDtcclxuICAgICAgICAgIGhlaWdodDo0MHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQgOiAxMHB4O1xyXG4gICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAuY29tbWVudDIge1xyXG4gICAgICAgICAgd2lkdGg6IDk5JTtcclxuICAgICAgICAgIG1hcmdpbiA6IDIwcHg7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgfVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/googlemap/googlemap.component.html":
/*!****************************************************!*\
  !*** ./src/app/googlemap/googlemap.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n\n  <img id=\"lg1\" src=\"assets/img/camera.jpg\" style=\"width:7%; height:80%;\">\n  <img id=\"lg2\" src=\"assets/img/logom.png\" style=\"width: 12%; height:70%;\">\n  <div id=\"searchbox\">\n    <input type=\"search\" placeholder=\"\">\n  </div>\n  <div id=\"searchbtn\">\n    <button type=\"submit\" class=\"btn\" (click)=\"Searchbtn()\">검색</button>\n    <a routerLink=\"/board\" class=\"btn1\"> Main </a>\n    <a routerLink=\"/upload\" class=\"btn2\"> Upload </a>\n    <a routerLink=\"/login\" class=\"btn2\"> Logout </a>\n  </div>\n\n</div>\n\n<div class=\"content\">\n\n  <!-- 구글맵 부분 -->\n  <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=15 (mapClick)=\"onChoseLocation($event)\">\n    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" *ngIf=\"locationChosen\">\n    </agm-marker>\n  </agm-map>\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function GooglemapComponent(router) {
        this.router = router;
        this.latitude = 37.588787;
        this.longitude = 127.00432;
        this.locationChosen = false;
    }
    GooglemapComponent.prototype.ngOnInit = function () {
    };
    //googlemap 이벤트
    GooglemapComponent.prototype.onChoseLocation = function (event) {
        // console.log(event);
        this.latitude = event.coords.lat;
        this.longitude = event.coords.lng;
        this.locationChosen = true;
        // 이부분 그대로 사용하면 이미지 가져오기 가능 ?
    };
    GooglemapComponent.prototype.Searchbtn = function () {
        this.router.navigateByUrl('/googlemap');
    };
    GooglemapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-googlemap',
            template: __webpack_require__(/*! ./googlemap.component.html */ "./src/app/googlemap/googlemap.component.html"),
            styles: [__webpack_require__(/*! ./googlemap.component.css */ "./src/app/googlemap/googlemap.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], GooglemapComponent);
    return GooglemapComponent;
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {ma[]}
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/toPromise'
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
        // selectedUser: User;
        // user: User[];
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
    UserService.prototype.getUserList = function () {
        return this.http.get('http://localhost:3000/member/info');
    };
    UserService.prototype.profile = function () {
        return this.http.get('http://localhost:3000/me');
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

module.exports = "<div class=\"header\">\r\n\r\n    <img id=\"lg1\" src=\"assets/img/camera.jpg\" style=\"width:7%; height:80%;\">\r\n    <img id=\"lg2\" src=\"assets/img/logom.png\" style=\"width: 12%; height:70%;\">\r\n    <div id=\"searchbox\">\r\n        <input type=\"search\" placeholder=\"\">\r\n    </div>\r\n    <div id=\"searchbtn\">\r\n        <button type=\"submit\" class=\"btn\" (click)=\"Searchbtn()\">검색</button>\r\n        <a routerLink=\"/board\" class=\"btn1\"> Main </a>\r\n      <a routerLink=\"/upload\" class=\"btn2\"> Upload </a>\r\n      <a routerLink=\"/login\" class=\"btn2\"> Logout </a>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"content\">\r\n\r\n    <form #uploadForm=\"ngForm\">\r\n        <!-- (ngSubmit)=\"onSubmit(uploadForm)\"> -->\r\n        <div class=\"row\">\r\n            <div class=\"row\">\r\n                <div class=\"input-field col s12\">\r\n                    <!-- <textarea id=\"textarea1\" class=\"materialize-textarea\"></textarea>\r\n                  <label for=\"textarea1\">Textarea</label>\r\n                  <br> -->\r\n                    <h2> 게시물 업로드 페이지 </h2>\r\n                    <!-- Pick file시 이쪽에 불려진 이미지 전달하기 -->\r\n                    <script>\r\n                        function image_check() {\r\n                            // var path = \"path\";\r\n                            var imgSource = document.targetImg;\r\n                            // imgSource.src = path;\r\n\r\n                        }\r\n                    </script>\r\n                    <!-- <img src=\"assets/img/logom.png\"  class=\"pickimg\"><br> -->\r\n                    <img [src]=\"imageUrl\" style=\"width: 250px; height: 150px\">\r\n                    <br>\r\n                    <input type=\"file\" #Image accept=\"image/*\"  (change)=\"handleFileInput($event.target.files)\">\r\n                    <button type=\"submit\" class=\"btn-1\" (click)=\"onUpload(uploadForm)\"> Submit</button>\r\n                    <!-- <input style=\"display: none\" type=\"file\" (change)=\"onFileSelected($event)\" #fileInput> -->\r\n                    <!-- <button type=\"submit\" class=\"btn-1\" (click)=\"fileInput.click()\" required> Pick File </button> -->\r\n                    <!-- <button type=\"button\" class=\"btns-1\" (click)=\"onUpload()\"> Upload </button>\r\n                    <button type=\"button\" class=\"btns-1\" (click)=\"reset(uploadForm)\"> Reset </button> -->\r\n                    <br><br>\r\n                    <label> 사용자 Text </label>\r\n                    <br>\r\n                    <input type=\"text\" class=\"text\" name=\"text\" #name=\"ngModel\" [(ngModel)]=\"uploadService.selectedUpload.text\"\r\n                        placeholder=\"Input text\">\r\n                    <br><br>\r\n                    <label> Hashtag </label>\r\n                    <br>\r\n                    <input type=\"text\" class=\"text\" name=\"hastag\" #name=\"ngModel\" [(ngModel)]=\"uploadService.selectedUpload.hastag\"\r\n                        placeholder=\"Input text\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

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
            _id: "",
            text: "",
            image: "",
            hashtag: "",
        };
    };
    //upload.service에서 설정한 주소로 파라메터 전달?
    UploadComponent.prototype.onUpload = function (form) {
        var _this = this;
        this.uploadService.postUpload(form.value).subscribe(function (res) {
            _this.reset(form);
            console.log("test upload");
            M.toast({ html: 'Upload successfully', classes: 'rounded' });
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

/***/ "./src/app/user/sign-in/sign-in.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n  }\r\n\r\n  body {\r\n    background-color: #eee;\r\n  }\r\n\r\n  #wrapper {\r\n    width: 500px;\r\n    height: 90%;\r\n    overflow: hidden;\r\n    border: 0px solid #000;\r\n    margin: 50px auto;\r\n    padding: 10px;\r\n  }\r\n\r\n  .main-content {\r\n    width: 270px;\r\n    height: 50%;\r\n    margin: 5px auto;\r\n    background-color: #fff;\r\n    border: 2px solid #e6e6e6;\r\n    padding: 40px 50px;\r\n  }\r\n\r\n  .header {\r\n    border: 0px solid #000;\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  .header img {\r\n    height: 80px;\r\n    width: 180px;\r\n    margin: auto;\r\n    position: relative;\r\n    left: 40px;\r\n  }\r\n\r\n  .input-1,\r\n  .input-2 {\r\n    width: 105%;\r\n    height: 40px;\r\n    margin-bottom: 5px;\r\n    padding: 8px 12px;\r\n    border: 1px solid #dbdbdb;\r\n    box-sizing: border-box;\r\n    border-radius: 3px;\r\n  }\r\n\r\n  .overlap-text {\r\n    position: relative;\r\n  }\r\n\r\n  .overlap-text a {\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 10px;\r\n    color: #003569;\r\n    font-size: 14px;\r\n    text-decoration: none;\r\n    font-family: 'Overpass Mono', monospace;\r\n    letter-spacing: -1px;\r\n  }\r\n\r\n  .btn {\r\n    width: 105%;\r\n    height: 40px;\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n  .sub-content {\r\n    width: 68%;\r\n    height: 18px;\r\n    margin: 5px auto;\r\n    border: 1px solid #e6e6e6;\r\n    padding: 20px 50px;\r\n    background-color: #fff;\r\n  }\r\n\r\n  .s-part {\r\n    text-align: left;\r\n    font-family: 'Overpass Mono', monospace;\r\n    word-spacing: -3px;\r\n    letter-spacing: -2px;\r\n    font-weight: normal;\r\n  }\r\n\r\n  .errorm {\r\n    text-align: center;\r\n  }\r\n\r\n  .s-part a {\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: #3897f0;\r\n    font-family: 'Overpass Mono', monospace;\r\n    word-spacing: -3px;\r\n    letter-spacing: -2px;\r\n    font-weight: normal;\r\n  }\r\n\r\n  input:focus {\r\n      background-color: yellow;\r\n  }\r\n\r\n  .alert { \r\n        padding: 20px;\r\n        text-align: center; \r\n        background-color: #f44336; \r\n        color: white; \r\n      }\r\n\r\n  .success{ \r\n        padding: 20px; \r\n        text-align: center;\r\n        background-color:#249424; \r\n        color: white; \r\n        \r\n      }\r\n\r\n  input[type=text]:placeholder { \r\n            color: #cccccc; \r\n         }\r\n\r\n  input[type=text].invalid-textbox,input[type=password].invalid-textbox{ \r\n          border-bottom: 2px solid #3897f0; \r\n         }\r\n\r\n  label.validation-message{ \r\n            color:#ed5558; \r\n          } \r\n\r\n    \r\n           \r\n           \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtHQUNkOztFQUVEO0lBQ0UsdUJBQXVCO0dBQ3hCOztFQUVEO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixjQUFjO0dBQ2Y7O0VBRUQ7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7O0VBRUQ7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztHQUNaOztFQUVEOztJQUVFLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHdDQUF3QztJQUN4QyxxQkFBcUI7R0FDdEI7O0VBRUQ7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsdUJBQXVCO0dBQ3hCOztFQUVEO0lBQ0UsaUJBQWlCO0lBQ2pCLHdDQUF3QztJQUN4QyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLG9CQUFvQjtHQUNyQjs7RUFFRDtJQUNFLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHdDQUF3QztJQUN4QyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLG9CQUFvQjtHQUNyQjs7RUFFRDtNQUNJLHlCQUF5QjtHQUM1Qjs7RUFFRDtRQUNNLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsMEJBQTBCO1FBQzFCLGFBQWE7T0FDZDs7RUFHRDtRQUNFLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLGFBQWE7O09BRWQ7O0VBRUQ7WUFDTSxlQUFlO1VBQ2pCOztFQUdBO1VBQ0EsaUNBQWlDO1VBQ2pDOztFQUdBO1lBQ0UsY0FBYztXQUNmIiwiZmlsZSI6InNyYy9hcHAvdXNlci9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4qIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuXHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIH1cclxuXHJcbiAgI3dyYXBwZXIge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgIzAwMDtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4gIC5tYWluLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDI3MHB4O1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDUwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkICMwMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIGltZyB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LTEsXHJcbiAgLmlucHV0LTIge1xyXG4gICAgd2lkdGg6IDEwNSU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYmRiZGI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXAtdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAub3ZlcmxhcC10ZXh0IGEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGNvbG9yOiAjMDAzNTY5O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPdmVycGFzcyBNb25vJywgbW9ub3NwYWNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgfVxyXG5cclxuICAuYnRuIHtcclxuICAgIHdpZHRoOiAxMDUlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4OTdmMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODk3ZjA7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG5cclxuICAuc3ViLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDY4JTtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgcGFkZGluZzogMjBweCA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIC5zLXBhcnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3ZlcnBhc3MgTW9ubycsIG1vbm9zcGFjZTtcclxuICAgIHdvcmQtc3BhY2luZzogLTNweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcblxyXG4gIC5lcnJvcm0ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnMtcGFydCBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjMzg5N2YwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPdmVycGFzcyBNb25vJywgbW9ub3NwYWNlO1xyXG4gICAgd29yZC1zcGFjaW5nOiAtM3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgfVxyXG5cclxuICAuYWxlcnQgeyBcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjsgXHJcbiAgICAgICAgY29sb3I6IHdoaXRlOyBcclxuICAgICAgfSBcclxuICAgICAgXHJcblxyXG4gICAgICAuc3VjY2Vzc3sgXHJcbiAgICAgICAgcGFkZGluZzogMjBweDsgXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IzI0OTQyNDsgXHJcbiAgICAgICAgY29sb3I6IHdoaXRlOyBcclxuICAgICAgICBcclxuICAgICAgfSBcclxuXHJcbiAgICAgIGlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIgeyBcclxuICAgICAgICAgICAgY29sb3I6ICNjY2NjY2M7IFxyXG4gICAgICAgICB9IFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgaW5wdXRbdHlwZT10ZXh0XS5pbnZhbGlkLXRleHRib3gsaW5wdXRbdHlwZT1wYXNzd29yZF0uaW52YWxpZC10ZXh0Ym94eyBcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzg5N2YwOyBcclxuICAgICAgICAgfSBcclxuICAgICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICAgIGxhYmVsLnZhbGlkYXRpb24tbWVzc2FnZXsgXHJcbiAgICAgICAgICAgIGNvbG9yOiNlZDU1NTg7IFxyXG4gICAgICAgICAgfSBcclxuXHJcbiAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAiXX0= */"

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <div class=\"main-content\">\r\n    <div class=\"header\">\r\n      <img src=\"assets/img/logom.png\" />\r\n    </div>\r\n    <div class=\"l-part\">\r\n      <form #signInForm=\"ngForm\" (ngSubmit)=\"signInForm.valid && onSubmit(signInForm)\">\r\n        <!-- model은 ts 파일에 정의한 model -->\r\n        <!-- <input type=\"text\" name=\"id\" #email=\"ngModel\" [(ngModel)]=\"model.email\" placeholder=\"Email\" class=\"input-1\"\r\n          [pattern]=\"emailRegex\" required [ngClass]=\"{'invalid-textbox' :signInForm.submitted && !email.valid }\"> -->\r\n        <input type=\"text\" autocomplete=\"off\" #id=\"ngModel\" [(ngModel)]=\"model.id\" name=\"id\" placeholder=\"id\" class=\"input-1\"\r\n          required [ngClass]=\"{ 'invalid-textbox' : signInForm.submitted && !id.valid}\">\r\n\r\n        <div *ngIf=\"signInForm.submitted && id.errors?.minlength\">\r\n          <label class=\"validation-message\"> Minimum 2 characters. </label>\r\n        </div>\r\n\r\n\r\n        <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"model.password\" placeholder=\"Password\"\r\n          required minlength=\"4\" class=\"input-1\" [ngClass]=\"{'invalid-textbox' : signInForm.submitted && !password.valid }\">\r\n\r\n        <div *ngIf=\"signInForm.submitted && password.errors?.minlength\">\r\n          <label class=\"validation-message\"> Minimum 4 characters. </label>\r\n        </div>\r\n\r\n        <input type=\"submit\" value=\"Sign In\" class=\"btn\">\r\n      </form>\r\n    </div>\r\n    <br>\r\n\r\n\r\n    <div class=\"sub-content\">\r\n      <div class=\"s-part\">\r\n        계정이 없으신가요? <a routerLink=\"/signup\"> 회원가입 </a>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <!-- form을 사용하기 위해 app.module.ts에 선언해줌 -->\r\n\r\n    <!-- sign-in.component.ts에 들어갈 에러 문구 -->\r\n    <div class=\"errorm\" *ngIf=\"serverErrorMessages\">\r\n      Error : {{serverErrorMessages}}\r\n    </div>\r\n  </div>"

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
                        console.log(_this.user[i].id + "1" + _this.user[i].password + "2" + _this.user[i].jsonWebToken);
                        localStorage.setItem('token', _this.user[i].jsonWebToken);
                        console.log("client" + localStorage.getItem("token"));
                        _this.router.navigateByUrl('/profile');
                        // this.userService.profile().subscribe(
                        // success or error function
                        // res => {
                        //   console.log(form.value.id)
                        // }
                        // err => {
                        //   if (err.status == 422) {
                        //     this.serverErrorMessages = err.error.join('<br/>');
                        //   }
                        //   else
                        //     this.serverErrorMessages = 'Something went wrong. Please contact admin';
                        // );
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

module.exports = "\r\n* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n  }\r\n\r\n  body {\r\n    background-color: #eee;\r\n  }\r\n\r\n  #wrapper {\r\n    width: 500px;\r\n    height: 110%;\r\n    overflow: hidden;\r\n    border: 0px solid #000;\r\n    margin: 50px auto;\r\n    padding: 10px;\r\n  }\r\n\r\n  .main-content {\r\n    width: 270px;\r\n    height: 50%;\r\n    margin: 5px auto;\r\n    background-color: #fff;\r\n    border: 2px solid #e6e6e6;\r\n    padding: 40px 50px;\r\n  }\r\n\r\n  .header {\r\n    border: 0px solid #000;\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  .header img {\r\n    height: 80px;\r\n    width: 180px;\r\n    margin: auto;\r\n    position: relative;\r\n    left: 40px;\r\n  }\r\n\r\n  .input-1,\r\n  .input-2 {\r\n    width: 105%;\r\n    height: 40px;\r\n    margin-bottom: 5px;\r\n    padding: 8px 12px;\r\n    border: 1px solid #dbdbdb;\r\n    box-sizing: border-box;\r\n    border-radius: 3px;\r\n  }\r\n\r\n  .overlap-text {\r\n    position: relative;\r\n  }\r\n\r\n  .overlap-text a {\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 10px;\r\n    color: #003569;\r\n    font-size: 14px;\r\n    text-decoration: none;\r\n    font-family: 'Overpass Mono', monospace;\r\n    letter-spacing: -1px;\r\n  }\r\n\r\n  .btn {\r\n    width: 105%;\r\n    height: 40px;\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n  .sub-content {\r\n    width: 68%;\r\n    height: 18px;\r\n    margin: 5px auto;\r\n    border: 1px solid #e6e6e6;\r\n    padding: 20px 50px;\r\n    background-color: #fff;\r\n  }\r\n\r\n  .s-part {\r\n    text-align: left;\r\n    font-family: 'Overpass Mono', monospace;\r\n    word-spacing: -3px;\r\n    letter-spacing: -2px;\r\n    font-weight: normal;\r\n  }\r\n\r\n  .s-part a {\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: #3897f0;\r\n    font-family: 'Overpass Mono', monospace;\r\n    word-spacing: -3px;\r\n    letter-spacing: -2px;\r\n    font-weight: normal;\r\n  }\r\n\r\n  input:focus {\r\n      background-color: yellow;\r\n  }\r\n\r\n  .alert { \r\n        padding: 20px;\r\n        text-align: center; \r\n        background-color: #f44336; \r\n        color: white; \r\n      }\r\n\r\n  .success{ \r\n        padding: 20px; \r\n        text-align: center;\r\n        background-color:#249424; \r\n        color: white; \r\n        \r\n      }\r\n\r\n  input[type=text]:placeholder { \r\n            color: #cccccc; \r\n         }\r\n\r\n  input[type=text].invalid-textbox,input[type=password].invalid-textbox{ \r\n          border-bottom: 2px solid #3897f0; \r\n         }\r\n\r\n  label.validation-message{ \r\n            color:#ed5558; \r\n          } \r\n\r\n    \r\n           \r\n           \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtHQUNkOztFQUVEO0lBQ0UsdUJBQXVCO0dBQ3hCOztFQUVEO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixjQUFjO0dBQ2Y7O0VBRUQ7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7O0VBRUQ7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztHQUNaOztFQUVEOztJQUVFLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHdDQUF3QztJQUN4QyxxQkFBcUI7R0FDdEI7O0VBRUQ7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsdUJBQXVCO0dBQ3hCOztFQUVEO0lBQ0UsaUJBQWlCO0lBQ2pCLHdDQUF3QztJQUN4QyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLG9CQUFvQjtHQUNyQjs7RUFFRDtJQUNFLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHdDQUF3QztJQUN4QyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLG9CQUFvQjtHQUNyQjs7RUFFRDtNQUNJLHlCQUF5QjtHQUM1Qjs7RUFFRDtRQUNNLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsMEJBQTBCO1FBQzFCLGFBQWE7T0FDZDs7RUFHRDtRQUNFLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLGFBQWE7O09BRWQ7O0VBRUQ7WUFDTSxlQUFlO1VBQ2pCOztFQUdBO1VBQ0EsaUNBQWlDO1VBQ2pDOztFQUdBO1lBQ0UsY0FBYztXQUNmIiwiZmlsZSI6InNyYy9hcHAvdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4qIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuXHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIH1cclxuXHJcbiAgI3dyYXBwZXIge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkICMwMDA7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAubWFpbi1jb250ZW50IHtcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgcGFkZGluZzogNDBweCA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciB7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjMDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciBpbWcge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNDBweDtcclxuICB9XHJcblxyXG4gIC5pbnB1dC0xLFxyXG4gIC5pbnB1dC0yIHtcclxuICAgIHdpZHRoOiAxMDUlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRiO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcblxyXG4gIC5vdmVybGFwLXRleHQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXAtdGV4dCBhIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBjb2xvcjogIzAwMzU2OTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3ZlcnBhc3MgTW9ubycsIG1vbm9zcGFjZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0biB7XHJcbiAgICB3aWR0aDogMTA1JTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODk3ZjA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg5N2YwO1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuXHJcbiAgLnN1Yi1jb250ZW50IHtcclxuICAgIHdpZHRoOiA2OCU7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcclxuICAgIHBhZGRpbmc6IDIwcHggNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAucy1wYXJ0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LWZhbWlseTogJ092ZXJwYXNzIE1vbm8nLCBtb25vc3BhY2U7XHJcbiAgICB3b3JkLXNwYWNpbmc6IC0zcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICAucy1wYXJ0IGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICMzODk3ZjA7XHJcbiAgICBmb250LWZhbWlseTogJ092ZXJwYXNzIE1vbm8nLCBtb25vc3BhY2U7XHJcbiAgICB3b3JkLXNwYWNpbmc6IC0zcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICBpbnB1dDpmb2N1cyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICB9XHJcblxyXG4gIC5hbGVydCB7IFxyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2OyBcclxuICAgICAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgICB9IFxyXG4gICAgICBcclxuXHJcbiAgICAgIC5zdWNjZXNzeyBcclxuICAgICAgICBwYWRkaW5nOiAyMHB4OyBcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMjQ5NDI0OyBcclxuICAgICAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgICAgIFxyXG4gICAgICB9IFxyXG5cclxuICAgICAgaW5wdXRbdHlwZT10ZXh0XTpwbGFjZWhvbGRlciB7IFxyXG4gICAgICAgICAgICBjb2xvcjogI2NjY2NjYzsgXHJcbiAgICAgICAgIH0gXHJcbiAgICAgICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgICBpbnB1dFt0eXBlPXRleHRdLmludmFsaWQtdGV4dGJveCxpbnB1dFt0eXBlPXBhc3N3b3JkXS5pbnZhbGlkLXRleHRib3h7IFxyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzODk3ZjA7IFxyXG4gICAgICAgICB9IFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgbGFiZWwudmFsaWRhdGlvbi1tZXNzYWdleyBcclxuICAgICAgICAgICAgY29sb3I6I2VkNTU1ODsgXHJcbiAgICAgICAgICB9IFxyXG5cclxuICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- aaaaa -->\r\n\r\n<div id=\"wrapper\">\r\n  <div class=\"main-content\">\r\n    <div class=\"header\">\r\n      <img src=\"assets/img/logom.png\" />\r\n    </div>\r\n    <div class=\"l-part\">\r\n      <form #signUpForm=\"ngForm\" (ngSubmit)=\"signUpForm.valid && onSubmit(signUpForm)\">\r\n\r\n        <input type=\"text\" autocomplete=\"off\" #id=\"ngModel\" [(ngModel)]=\"model.id\" name=\"id\"\r\n          placeholder=\"id\" class=\"input-1\" required [ngClass]=\"{ 'invalid-textbox' : signUpForm.submitted && !id.valid}\">\r\n\r\n        <!-- 위에서 id 검증 후에 검증되지 않으면 아래에서 에러 문구 발생 -->\r\n        <div *ngIf=\"signUpForm.submitted && !id.valid\">\r\n          <label class=\"validation-message\">This field is requied. </label>\r\n        </div>\r\n\r\n\r\n        <input type=\"text\" autocomplete=\"off\" #username=\"ngModel\" [(ngModel)]=\"model.username\" name=\"username\"\r\n          placeholder=\"UserName\" class=\"input-1\" required [ngClass]=\"{ 'invalid-textbox' : signUpForm.submitted && !username.valid}\">\r\n        <!-- 위에서 name 검증 후에 검증되지 않으면 아래에서 에러 문구 발생 -->\r\n        <div *ngIf=\"signUpForm.submitted && !username.valid\">\r\n          <label class=\"validation-message\">This field is requied. </label>\r\n        </div>\r\n\r\n\r\n        <input type=\"text\" autocomplete=\"off\" #email=\"ngModel\" [(ngModel)]=\"model.email\" name=\"email\"\r\n          placeholder=\"Email\" class=\"input-1\" required [pattern]=\"emailRegex\" [ngClass]=\"{ 'invalid-textbox' : signUpForm.submitted && !email.valid}\">\r\n        <!-- 위에서 email 검증 후에 검증되지 않으면 아래에서 에러 문구 발생 -->\r\n        <div *ngIf=\"signUpForm.submitted && email.errors\">\r\n          <label *ngIf=\"email.errors.required\" class=\"validation-message\">This field is requied. </label>\r\n          <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">Invaild email address. </label>\r\n        </div>\r\n\r\n\r\n        <div class=\"overlap-text\">\r\n          <input type=\"password\" autocomplete=\"off\" #password=\"ngModel\" [(ngModel)]=\"model.password\"\r\n            name=\"password\" placeholder=\"password\" class=\"input-1\" minlength=\"4\" required [ngClass]=\"{ 'invalid-textbox' : signUpForm.submitted && !password.valid}\">\r\n          <div *ngIf=\"signUpForm.submitted && password.errors\">\r\n            <label *ngIf=\"password.errors.required\" class=\"validation-message\">This field is requied. </label>\r\n            <label *ngIf=\"password.errors.minlength\" class=\"validation-message\">Enter atleast 4 characters. </label>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- <input type=\"submit\" value=\"회원가입\" class=\"btn\"> -->\r\n        <input type=\"submit\" class=\"btn\">\r\n        <!-- <a routerLink=\"/login\" class=\"btn\"> 회원가입 </a> -->\r\n      </form>\r\n    </div>\r\n    <br>\r\n\r\n    <div class=\"sub-content\">\r\n      <div class=\"s-part\">\r\n        계정이 있으신가요? <a routerLink=\"/login\"> 로그인 </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- success message -->\r\n<div class=\"success\" *ngIf=\"showSucessMessage\">\r\n  Sign up is successfully\r\n</div>\r\n\r\n<!-- error message -->\r\n<div class=\"alert\" *ngIf=\"serverErrorMessages\">\r\n  {{serverErrorMessages}}\r\n</div>"

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

module.exports = ":root {\r\n    font-size: 10px;\r\n}\r\n\r\n.btn-1 {\r\n    width: 20%;\r\n    /* height: 10%; */\r\n    background-color: #b6c3cf;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n    margin: 1%;\r\n  }\r\n\r\n.btns-1 {\r\n    width: 20%;\r\n    height: 30px;\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    margin-left: 1%;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n    margin: 1%;\r\n  }\r\n\r\n.btns {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #3897f0;\r\n    border: 1px solid #3897f0;\r\n    padding: 5px 12px;\r\n    margin-left: 5px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n.btn1 {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #a9a9a9;\r\n    border: 1px solid #a9a9a9;\r\n    padding: 5px 12px;\r\n    margin-left: 35%;\r\n    /*margin-right: : 100px;*/\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n.btn2 {\r\n    /*width: 3%;*/\r\n    /*height: 20px;*/\r\n    background-color: #a9a9a9;\r\n    border: 1px solid #a9a9a9;\r\n    padding: 5px 12px;\r\n    /*margin-left: 45%;*/\r\n    /*margin-right: : 100px;*/\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n  }\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: \"Open Sans\", Arial, sans-serif;\r\n    min-height: 100vh;\r\n    background-color: #fafafa;\r\n    color: #262626;\r\n    padding-bottom: 3rem;\r\n}\r\n\r\nimg {\r\n    display: block;\r\n}\r\n\r\nd\r\n\r\n .btns {\r\n      /*width: 3%;*/\r\n      /*height: 20px;*/\r\n      background-color: #3897f0;\r\n      border: 1px solid #3897f0;\r\n      padding: 5px 12px;\r\n      margin-left: 5px;\r\n      color: #fff;\r\n      font-weight: bold;\r\n      cursor: pointer;\r\n      border-radius: 3px;\r\n    }\r\n\r\n.header {\r\n        height: 12%;\r\n        background-color: white;\r\n        border-bottom: 1px solid slategray;\r\n        position: fixed;\r\n        top: 0px;\r\n        left: 0px;\r\n        right: 0px;\r\n        overflow: hidden;\r\n    }\r\n\r\n#lg1 {\r\n        margin: 5px;\r\n        float: left;\r\n    }\r\n\r\n#lg2 {\r\n        border-left: 1px solid black;\r\n        padding-left: 40px;\r\n        margin: 20px;\r\n        float: left;\r\n    }\r\n\r\n#lg3 {\r\n        margin: 30px;\r\n        float: 0px;\r\n    }\r\n\r\n#searchbox {\r\n\r\n        margin-top: 2%;\r\n        margin-left: 7%;\r\n        float: left;\r\n\r\n    }\r\n\r\n#searchbtn {\r\n        margin-top: 2%;\r\n        float: center;\r\n\r\n    }\r\n\r\n.container {\r\n    max-width: 93.5rem;\r\n    margin: 0 auto;\r\n    /*margin-top : 200px;*/\r\n    padding: 0 2rem;\r\n\r\n}\r\n\r\n.container2 {\r\n    max-width: 93.5rem;\r\n    margin: 0 auto;\r\n    margin-top : 250px;\r\n    padding: 0 2rem;\r\n\r\n}\r\n\r\n.btn {\r\n    display: inline-block;\r\n    font: inherit;\r\n    background: none;\r\n    border: none;\r\n    color: inherit;\r\n    padding: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n#searchbtn {\r\n            margin-top: 25px;\r\n            float: center;\r\n\r\n        }\r\n\r\n.btn:focus {\r\n    outline: 0.5rem auto #4d90fe;\r\n}\r\n\r\n.visually-hidden {\r\n    position: absolute !important;\r\n    height: 1px;\r\n    width: 1px;\r\n    overflow: hidden;\r\n    clip: rect(1px, 1px, 1px, 1px);\r\n}\r\n\r\n/* Profile Section */\r\n\r\n.profile {\r\n    padding: 5rem 0;\r\n}\r\n\r\n.profile::after {\r\n    content: \"\";\r\n    display: block;\r\n    clear: both;\r\n}\r\n\r\n.profile-image {\r\n    float: left;\r\n    width: calc(33.333% - 1rem);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-right: 3rem;\r\n}\r\n\r\n.profile-image img {\r\n    border-radius: 50%;\r\n}\r\n\r\n.profile-user-settings,\r\n.profile-stats,\r\n.profile-bio {\r\n    float: left;\r\n    width: calc(66.666% - 2rem);\r\n}\r\n\r\n.profile-user-settings {\r\n    margin-top: 1.1rem;\r\n}\r\n\r\n.profile-user-name {\r\n    display: inline-block;\r\n    font-size: 3.2rem;\r\n    font-weight: 300;\r\n}\r\n\r\n.profile-edit-btn {\r\n    font-size: 1.4rem;\r\n    line-height: 1.8;\r\n    border: 0.1rem solid #dbdbdb;\r\n    border-radius: 0.3rem;\r\n    padding: 0 2.4rem;\r\n    margin-left: 2rem;\r\n}\r\n\r\n.profile-settings-btn {\r\n    font-size: 2rem;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.profile-stats {\r\n    margin-top: 2.3rem;\r\n}\r\n\r\n.profile-stats li {\r\n    display: inline-block;\r\n    font-size: 1.6rem;\r\n    line-height: 1.5;\r\n    margin-right: 4rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.profile-stats li:last-of-type {\r\n    margin-right: 0;\r\n}\r\n\r\n.profile-bio {\r\n    font-size: 1.6rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    margin-top: 2.3rem;\r\n}\r\n\r\n.profile-real-name,\r\n.profile-stat-count,\r\n.profile-edit-btn {\r\n    font-weight: 600;\r\n}\r\n\r\n/* Gallery Section */\r\n\r\n.gallery {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin: -1rem -1rem;\r\n    padding-bottom: 3rem;\r\n}\r\n\r\n.gallery-item {\r\n    position: relative;\r\n    flex: 1 0 22rem;\r\n    margin: 1rem;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n.gallery-item:hover .gallery-item-info,\r\n.gallery-item:focus .gallery-item-info {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 80%;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.gallery-item-info {\r\n    display: none;\r\n}\r\n\r\n.gallery-item-info li {\r\n    display: inline-block;\r\n    font-size: 1.7rem;\r\n    font-weight: 600;\r\n}\r\n\r\n.gallery-item-likes {\r\n    margin-right: 2.2rem;\r\n}\r\n\r\n.gallery-item-type {\r\n    position: absolute;\r\n    top: 1rem;\r\n    right: 1rem;\r\n    font-size: 2.5rem;\r\n    text-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.fa-clone,\r\n.fa-comment {\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n}\r\n\r\n.gallery-image {\r\n    width: 100%;\r\n    height: 80%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n/* Loader */\r\n\r\n.loader {\r\n    width: 5rem;\r\n    height: 5rem;\r\n    border: 0.6rem solid #999;\r\n    border-bottom-color: transparent;\r\n    border-radius: 50%;\r\n    margin: 0 auto;\r\n    -webkit-animation: loader 500ms linear infinite;\r\n            animation: loader 500ms linear infinite;\r\n}\r\n\r\n/* Media Query */\r\n\r\n@media screen and (max-width: 40rem) {\r\n    .profile {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        padding: 4rem 0;\r\n    }\r\n\r\n    .profile::after {\r\n        display: none;\r\n    }\r\n\r\n    .profile-image,\r\n    .profile-user-settings,\r\n    .profile-bio,\r\n    .profile-stats {\r\n        float: none;\r\n        width: auto;\r\n    }\r\n\r\n    .profile-image img {\r\n        width: 7.7rem;\r\n    }\r\n\r\n    .profile-user-settings {\r\n        flex-basis: calc(100% - 10.7rem);\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    .profile-user-name {\r\n        font-size: 2.2rem;\r\n    }\r\n\r\n    .profile-edit-btn {\r\n        order: 1;\r\n        padding: 0;\r\n        text-align: center;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    .profile-edit-btn {\r\n        margin-left: 0;\r\n    }\r\n\r\n    .profile-bio {\r\n        font-size: 1.4rem;\r\n        margin-top: 1.5rem;\r\n    }\r\n\r\n    .profile-edit-btn,\r\n    .profile-bio,\r\n    .profile-stats {\r\n        flex-basis: 100%;\r\n    }\r\n\r\n    .profile-stats {\r\n        order: 1;\r\n        margin-top: 1.5rem;\r\n    }\r\n\r\n    .profile-stats ul {\r\n        display: flex;\r\n        text-align: center;\r\n        padding: 1.2rem 0;\r\n        border-top: 0.1rem solid #dadada;\r\n        border-bottom: 0.1rem solid #dadada;\r\n    }\r\n\r\n    .profile-stats li {\r\n        font-size: 1.4rem;\r\n        flex: 1;\r\n        margin: 0;\r\n    }\r\n\r\n    .profile-stat-count {\r\n        display: block;\r\n    }\r\n}\r\n\r\n/* Spinner Animation */\r\n\r\n@-webkit-keyframes loader {\r\n    to {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes loader {\r\n    to {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VycHJvZmlsZS91c2VycHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztHQUNaOztBQUVEO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7R0FDWjs7QUFFRDtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtHQUNwQjs7QUFDQTtJQUNDLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7R0FDcEI7O0FBQ0Q7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0dBQ3BCOztBQUVIOzs7SUFHSSx1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YscUJBQXFCO0NBQ3hCOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFBQTs7O01BR0ssY0FBYztNQUNkLGlCQUFpQjtNQUNqQiwwQkFBMEI7TUFDMUIsMEJBQTBCO01BQzFCLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsbUJBQW1CO0tBQ3BCOztBQUVEO1FBQ0ksWUFBWTtRQUNaLHdCQUF3QjtRQUN4QixtQ0FBbUM7UUFDbkMsZ0JBQWdCO1FBQ2hCLFNBQVM7UUFDVCxVQUFVO1FBQ1YsV0FBVztRQUNYLGlCQUFpQjtLQUNwQjs7QUFFRDtRQUNJLFlBQVk7UUFDWixZQUFZO0tBQ2Y7O0FBRUQ7UUFDSSw2QkFBNkI7UUFDN0IsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixZQUFZO0tBQ2Y7O0FBRUQ7UUFDSSxhQUFhO1FBQ2IsV0FBVztLQUNkOztBQUVEOztRQUVJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsWUFBWTs7S0FFZjs7QUFFRDtRQUNJLGVBQWU7UUFDZixjQUFjOztLQUVqQjs7QUFFTDtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGdCQUFnQjs7Q0FFbkI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7O0NBRW5COztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0NBQ25COztBQUVEO1lBQ1ksaUJBQWlCO1lBQ2pCLGNBQWM7O1NBRWpCOztBQUVUO0lBQ0ksNkJBQTZCO0NBQ2hDOztBQUVEO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLCtCQUErQjtDQUNsQzs7QUFFRCxxQkFBcUI7O0FBRXJCO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDs7O0lBR0ksWUFBWTtJQUNaLDRCQUE0QjtDQUMvQjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUN0Qjs7QUFFRDs7O0lBR0ksaUJBQWlCO0NBQ3BCOztBQUVELHFCQUFxQjs7QUFFckI7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0NBQ25COztBQUVEOztJQUVJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsWUFBWTtJQUNaLFlBQVk7SUFDWixxQ0FBcUM7Q0FDeEM7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscURBQXFEO0NBQ3hEOztBQUVEOztJQUVJLG1DQUEyQjtZQUEzQiwyQkFBMkI7Q0FDOUI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFrQjtPQUFsQixrQkFBa0I7Q0FDckI7O0FBRUQsWUFBWTs7QUFFWjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdEQUF3QztZQUF4Qyx3Q0FBd0M7Q0FDM0M7O0FBRUQsaUJBQWlCOztBQUVqQjtJQUNJO1FBQ0ksY0FBYztRQUNkLGdCQUFnQjtRQUNoQixnQkFBZ0I7S0FDbkI7O0lBRUQ7UUFDSSxjQUFjO0tBQ2pCOztJQUVEOzs7O1FBSUksWUFBWTtRQUNaLFlBQVk7S0FDZjs7SUFFRDtRQUNJLGNBQWM7S0FDakI7O0lBRUQ7UUFDSSxpQ0FBaUM7UUFDakMsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixpQkFBaUI7S0FDcEI7O0lBRUQ7UUFDSSxrQkFBa0I7S0FDckI7O0lBRUQ7UUFDSSxTQUFTO1FBQ1QsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixpQkFBaUI7S0FDcEI7O0lBRUQ7UUFDSSxlQUFlO0tBQ2xCOztJQUVEO1FBQ0ksa0JBQWtCO1FBQ2xCLG1CQUFtQjtLQUN0Qjs7SUFFRDs7O1FBR0ksaUJBQWlCO0tBQ3BCOztJQUVEO1FBQ0ksU0FBUztRQUNULG1CQUFtQjtLQUN0Qjs7SUFFRDtRQUNJLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGlDQUFpQztRQUNqQyxvQ0FBb0M7S0FDdkM7O0lBRUQ7UUFDSSxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFVBQVU7S0FDYjs7SUFFRDtRQUNJLGVBQWU7S0FDbEI7Q0FDSjs7QUFFRCx1QkFBdUI7O0FBRXZCO0lBQ0k7UUFDSSxrQ0FBMEI7Z0JBQTFCLDBCQUEwQjtLQUM3QjtDQUNKOztBQUpEO0lBQ0k7UUFDSSxrQ0FBMEI7Z0JBQTFCLDBCQUEwQjtLQUM3QjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VycHJvZmlsZS91c2VycHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uYnRuLTEge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIC8qIGhlaWdodDogMTAlOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I2YzNjZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODk3ZjA7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gIH1cclxuXHJcbiAgLmJ0bnMtMSB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4OTdmMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODk3ZjA7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gIH1cclxuXHJcbiAgLmJ0bnMge1xyXG4gICAgLyp3aWR0aDogMyU7Ki9cclxuICAgIC8qaGVpZ2h0OiAyMHB4OyovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg5N2YwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM4OTdmMDtcclxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gICAuYnRuMSB7XHJcbiAgICAvKndpZHRoOiAzJTsqL1xyXG4gICAgLypoZWlnaHQ6IDIwcHg7Ki9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOWE5YTk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTlhOWE5O1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xyXG4gICAgLyptYXJnaW4tcmlnaHQ6IDogMTAwcHg7Ki9cclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gIC5idG4yIHtcclxuICAgIC8qd2lkdGg6IDMlOyovXHJcbiAgICAvKmhlaWdodDogMjBweDsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E5YTlhOTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhOWE5YTk7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgIC8qbWFyZ2luLWxlZnQ6IDQ1JTsqL1xyXG4gICAgLyptYXJnaW4tcmlnaHQ6IDogMTAwcHg7Ki9cclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG5cclxuKixcclxuKjo6YmVmb3JlLFxyXG4qOjphZnRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIGNvbG9yOiAjMjYyNjI2O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufWRcclxuXHJcbiAuYnRucyB7XHJcbiAgICAgIC8qd2lkdGg6IDMlOyovXHJcbiAgICAgIC8qaGVpZ2h0OiAyMHB4OyovXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODk3ZjA7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODk3ZjA7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogMTIlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzbGF0ZWdyYXk7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgI2xnMSB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgI2xnMiB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgICNsZzMge1xyXG4gICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgICAgICBmbG9hdDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNzZWFyY2hib3gge1xyXG5cclxuICAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICNzZWFyY2hidG4ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgICAgIGZsb2F0OiBjZW50ZXI7XHJcblxyXG4gICAgfVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDkzLjVyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIC8qbWFyZ2luLXRvcCA6IDIwMHB4OyovXHJcbiAgICBwYWRkaW5nOiAwIDJyZW07XHJcblxyXG59XHJcblxyXG4uY29udGFpbmVyMiB7XHJcbiAgICBtYXgtd2lkdGg6IDkzLjVyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3AgOiAyNTBweDtcclxuICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuXHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNzZWFyY2hidG4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgICAgICBmbG9hdDogY2VudGVyO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4uYnRuOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDAuNXJlbSBhdXRvICM0ZDkwZmU7XHJcbn1cclxuXHJcbi52aXN1YWxseS1oaWRkZW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xyXG59XHJcblxyXG4vKiBQcm9maWxlIFNlY3Rpb24gKi9cclxuXHJcbi5wcm9maWxlIHtcclxuICAgIHBhZGRpbmc6IDVyZW0gMDtcclxufVxyXG5cclxuLnByb2ZpbGU6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbWFnZSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiBjYWxjKDMzLjMzMyUgLSAxcmVtKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XHJcbn1cclxuXHJcbi5wcm9maWxlLWltYWdlIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5wcm9maWxlLXVzZXItc2V0dGluZ3MsXHJcbi5wcm9maWxlLXN0YXRzLFxyXG4ucHJvZmlsZS1iaW8ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogY2FsYyg2Ni42NjYlIC0gMnJlbSk7XHJcbn1cclxuXHJcbi5wcm9maWxlLXVzZXItc2V0dGluZ3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMS4xcmVtO1xyXG59XHJcblxyXG4ucHJvZmlsZS11c2VyLW5hbWUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzLjJyZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4ucHJvZmlsZS1lZGl0LWJ0biB7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjZGJkYmRiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG4gICAgcGFkZGluZzogMCAyLjRyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxufVxyXG5cclxuLnByb2ZpbGUtc2V0dGluZ3MtYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4ucHJvZmlsZS1zdGF0cyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjNyZW07XHJcbn1cclxuXHJcbi5wcm9maWxlLXN0YXRzIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIG1hcmdpbi1yaWdodDogNHJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByb2ZpbGUtc3RhdHMgbGk6bGFzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLnByb2ZpbGUtYmlvIHtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjNyZW07XHJcbn1cclxuXHJcbi5wcm9maWxlLXJlYWwtbmFtZSxcclxuLnByb2ZpbGUtc3RhdC1jb3VudCxcclxuLnByb2ZpbGUtZWRpdC1idG4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLyogR2FsbGVyeSBTZWN0aW9uICovXHJcblxyXG4uZ2FsbGVyeSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luOiAtMXJlbSAtMXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG4uZ2FsbGVyeS1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXg6IDEgMCAyMnJlbTtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZ2FsbGVyeS1pdGVtOmhvdmVyIC5nYWxsZXJ5LWl0ZW0taW5mbyxcclxuLmdhbGxlcnktaXRlbTpmb2N1cyAuZ2FsbGVyeS1pdGVtLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5nYWxsZXJ5LWl0ZW0taW5mbyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZ2FsbGVyeS1pdGVtLWluZm8gbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uZ2FsbGVyeS1pdGVtLWxpa2VzIHtcclxuICAgIG1hcmdpbi1yaWdodDogMi4ycmVtO1xyXG59XHJcblxyXG4uZ2FsbGVyeS1pdGVtLXR5cGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxcmVtO1xyXG4gICAgcmlnaHQ6IDFyZW07XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIHRleHQtc2hhZG93OiAwLjJyZW0gMC4ycmVtIDAuMnJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5mYS1jbG9uZSxcclxuLmZhLWNvbW1lbnQge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5nYWxsZXJ5LWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLyogTG9hZGVyICovXHJcblxyXG4ubG9hZGVyIHtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgYm9yZGVyOiAwLjZyZW0gc29saWQgIzk5OTtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBhbmltYXRpb246IGxvYWRlciA1MDBtcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi8qIE1lZGlhIFF1ZXJ5ICovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MHJlbSkge1xyXG4gICAgLnByb2ZpbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIHBhZGRpbmc6IDRyZW0gMDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZTo6YWZ0ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtaW1hZ2UsXHJcbiAgICAucHJvZmlsZS11c2VyLXNldHRpbmdzLFxyXG4gICAgLnByb2ZpbGUtYmlvLFxyXG4gICAgLnByb2ZpbGUtc3RhdHMge1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLWltYWdlIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDcuN3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS11c2VyLXNldHRpbmdzIHtcclxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLSAxMC43cmVtKTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLXVzZXItbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtZWRpdC1idG4ge1xyXG4gICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtZWRpdC1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLWJpbyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLWVkaXQtYnRuLFxyXG4gICAgLnByb2ZpbGUtYmlvLFxyXG4gICAgLnByb2ZpbGUtc3RhdHMge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtc3RhdHMge1xyXG4gICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1zdGF0cyB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMS4ycmVtIDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMC4xcmVtIHNvbGlkICNkYWRhZGE7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkICNkYWRhZGE7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtc3RhdHMgbGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLXN0YXQtY291bnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBTcGlubmVyIEFuaW1hdGlvbiAqL1xyXG5cclxuQGtleWZyYW1lcyBsb2FkZXIge1xyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/userprofile/userprofile.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user/userprofile/userprofile.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n\n  <img id=\"lg1\" src=\"assets/img/camera.jpg\" style=\"width:7%; height:80%;\">\n  <img id=\"lg2\" src=\"assets/img/logom.png\" style=\"width: 12%; height:70%;\">\n  <div id=\"searchbox\">\n    <input type=\"search\" placeholder=\"\">\n  </div>\n  <div id=\"searchbtn\">\n    <button type=\"submit\" class=\"btns\" (click)=\"Searchbtn()\">검색</button>\n    <a routerLink=\"/board\" class=\"btn1\"> Main </a>\n  <a routerLink=\"/upload\" class=\"btn2\"> Upload </a>\n  <a routerLink=\"/login\" class=\"btn2\"> Logout </a>\n</div>\n</div>\n\n<br><br><br><br>\n<div style=\"overflow:scroll; width:100%; height:auto;\">\n  <div class=\"container\">\n\n    <div class=\"profile\">\n\n      <div class=\"profile-image\">\n\n        <img src=\"assets/img/mains.jpg\" alt=\"\">\n\n      </div>\n\n      <div class=\"profile-user-settings\">\n\n        <h1 class=\"profile-user-name\">seulgiredvelvet</h1>\n\n        <button class=\"btn profile-edit-btn\">Edit Profile</button>\n\n        <button class=\"btn profile-settings-btn\" aria-label=\"profile settings\"><i class=\"fas fa-cog\" aria-hidden=\"true\"></i></button>\n\n      </div>\n\n      <div class=\"profile-stats\">\n\n        <ul>\n          <li><span class=\"profile-stat-count\">164</span> 게시물</li>\n          <li><span class=\"profile-stat-count\">188</span> 팔로워</li>\n          <li><span class=\"profile-stat-count\">206</span> 팔로잉</li>\n        </ul>\n\n      </div>\n\n      <div class=\"profile-bio\">\n\n        <p><span class=\"profile-real-name\">seulgiredvelvet</span> </p>\n\n      </div>\n\n    </div>\n\n\n  </div>\n\n\n\n\n  <div class=\"container\">\n\n    <div class=\"gallery\">\n\n      <div class=\"gallery-item\" tabindex=\"0\">1 -->\n\n        <img src=\"https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop\" class=\"gallery-image\"\n          alt=\"\">\n\n        <div class=\"gallery-item-info\">\n          <ul>\n            <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\"\n                aria-hidden=\"true\"></i> 56</li>\n            <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\n                aria-hidden=\"true\"></i> 2</li>\n          </ul>\n        </div>\n\n      </div>\n\n      <div class=\"gallery-item\" tabindex=\"0\">2\n\n        <img src=\"https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop\" class=\"gallery-image\"\n          alt=\"\">\n\n        <div class=\"gallery-item-info\">\n\n          <ul>\n            <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\"\n                aria-hidden=\"true\"></i> 89</li>\n            <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\n                aria-hidden=\"true\"></i> 5</li>\n          </ul>\n\n        </div>\n\n      </div>\n\n      <div class=\"gallery-item\" tabindex=\"0\">3\n\n        <img src=\"https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop\" class=\"gallery-image\"\n          alt=\"\">\n\n        <div class=\"gallery-item-type\">\n\n          <span class=\"visually-hidden\">Gallery</span><i class=\"fas fa-clone\" aria-hidden=\"true\"></i>\n\n        </div>\n\n        <div class=\"gallery-item-info\">\n\n          <ul>\n            <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\"\n                aria-hidden=\"true\"></i> 42</li>\n            <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\n                aria-hidden=\"true\"></i> 1</li>\n          </ul>\n\n        </div>\n\n      </div>\n\n      <div class=\"gallery-item\" tabindex=\"0\">4\n\n        <img src=\"https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop\" class=\"gallery-image\"\n          alt=\"\">\n\n        <div class=\"gallery-item-type\">\n\n          <span class=\"visually-hidden\">Video</span><i class=\"fas fa-video\" aria-hidden=\"true\"></i>\n\n        </div>\n\n        <div class=\"gallery-item-info\">\n\n          <ul>\n            <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\"\n                aria-hidden=\"true\"></i> 38</li>\n            <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\n                aria-hidden=\"true\"></i> 0</li>\n          </ul>\n\n        </div>\n\n      </div>\n\n      <div class=\"gallery-item\" tabindex=\"0\">5\n\n        <img src=\"https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop\" class=\"gallery-image\"\n          alt=\"\">\n\n        <div class=\"gallery-item-type\">\n\n          <span class=\"visually-hidden\">Gallery</span><i class=\"fas fa-clone\" aria-hidden=\"true\"></i>\n\n        </div>\n\n        <div class=\"gallery-item-info\">\n\n          <ul>\n            <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\"\n                aria-hidden=\"true\"></i> 47</li>\n            <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\n                aria-hidden=\"true\"></i> 1</li>\n          </ul>\n\n        </div>\n\n      </div>\n\n      <div class=\"gallery-item\" tabindex=\"0\">6\n\n        <img src=\"https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop\" class=\"gallery-image\"\n          alt=\"\">\n\n        <div class=\"gallery-item-info\">\n\n          <ul>\n            <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\"\n                aria-hidden=\"true\"></i> 94</li>\n            <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\n                aria-hidden=\"true\"></i> 3</li>\n          </ul>\n\n        </div>\n\n      </div>\n\n      <!-- <div class=\"gallery-item\" tabindex=\"0\">7\n\n        <img src=\"https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop\" class=\"gallery-image\"\n          alt=\"\">\n\n        <div class=\"gallery-item-type\">\n\n          <span class=\"visually-hidden\">Gallery</span><i class=\"fas fa-clone\" aria-hidden=\"true\"></i>\n\n        </div>\n\n        <div class=\"gallery-item-info\">\n\n          <ul>\n            <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\"\n                aria-hidden=\"true\"></i> 52</li>\n            <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\n                aria-hidden=\"true\"></i> 4</li>\n          </ul>\n\n        </div>\n\n      </div>  -->\n\n      <!-- <div class=\"gallery-item\" tabindex=\"0\">8\n\n        <img src=\"https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop\" class=\"gallery-image\"\n          alt=\"\">\n\n        <div class=\"gallery-item-info\">\n\n          <ul>\n            <li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\"\n                aria-hidden=\"true\"></i> 66</li>\n            <li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\"\n                aria-hidden=\"true\"></i> 2</li>\n          </ul>\n\n        </div>\n\n      </div> \n\n\n\n\n\n\n    </div>\n    \n   <div class=\"loader\"></div> -->\n\n    </div>\n  </div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { UserService } from '../../shared/user.service'

var UserprofileComponent = /** @class */ (function () {
    function UserprofileComponent(router) {
        this.router = router;
    }
    UserprofileComponent.prototype.ngOnInit = function () {
    };
    UserprofileComponent.prototype.Searchbtn = function () {
        this.router.navigateByUrl('/googlemap');
    };
    UserprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userprofile',
            template: __webpack_require__(/*! ./userprofile.component.html */ "./src/app/user/userprofile/userprofile.component.html"),
            styles: [__webpack_require__(/*! ./userprofile.component.css */ "./src/app/user/userprofile/userprofile.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserprofileComponent);
    return UserprofileComponent;
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