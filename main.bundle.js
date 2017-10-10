webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/Components/Plant/PlantComponent.html":
/***/ (function(module, exports) {

module.exports = "\r\n <div class=\"panel-inline-group  \">\r\n       \r\n\r\n   <div class=\"col-md-12  panel panel-primary \" style='padding:12px;'>\r\n           \r\n    <!-- display station list -->\r\n        <stations  ></stations>         \r\n   </div>\r\n   <div class=\"row\">  \r\n <div class='chart-panel col-md-12 ' style='padding-right:0 !important' >\r\n\r\n            <!-- Overall Motor Status -->\r\n          <div class=\"  panel panel-primary  status-position \" >              \r\n               <motor-status-chart ></motor-status-chart>              \r\n          </div> \r\n\r\n            <!-- Overall Station Status -->\r\n          <div class=\" panel panel-primary status-position\" >   \r\n                <pi-chart></pi-chart>           \r\n          </div>\r\n\r\n            <!-- Plant Notifications -->\r\n          <div class=\" panel panel-primary  plant-alert status-position\"  >   \r\n                <notifications></notifications>\r\n          </div>\r\n          \r\n      \r\n       <div class=\"col-md-11  panel panel-primary    \"  style='width:98% !important'  >            \r\n                <span class=\"col-md-3 box-content right   \"><small><strong>Risk Index(RI)</strong> scale :1-5</small> </span>  \r\n                 \r\n                <div class=\"col-md-2\">\r\n                <span class=\"circle-small Green  \"></span>  \r\n                <span >Normal</span>  \r\n                </div>\r\n\r\n                <div class=\"col-md-2\">\r\n                <span class=\"circle-small Red \"></span>  \r\n                <span>Critical</span>\r\n                </div>\r\n\r\n                <div class=\"col-md-2\">\r\n                <span class=\"circle-small Amber \"></span>  \r\n                <span>Warning</span>\r\n            </div>\r\n       </div>\r\n\r\n\r\n </div>\r\n   </div>     \r\n      \r\n\r\n\r\n "

/***/ }),

/***/ "../../../../../src/app/Components/Plant/PlantComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlantComponent = (function () {
    function PlantComponent() {
    }
    PlantComponent.prototype.ngOnInit = function () {
    };
    return PlantComponent;
}());
PlantComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'PlantComponent',
        template: __webpack_require__("../../../../../src/app/Components/Plant/PlantComponent.html"),
    })
], PlantComponent);

//# sourceMappingURL=PlantComponent.js.map

/***/ }),

/***/ "../../../../../src/app/Components/Plant/hclplantdashboard.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\n \n  \n \n<!-- <li *ngFor=\" let plant of plantlist\" (click)=\"Onselect(hero)\" [class.selected]=\"hero === selectedHero\">\n    <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n</li>\n--> \n<div >\n  \n    <PlantComponent></PlantComponent>\n   \n    \n   \n     \n</div>\n\n "

/***/ }),

/***/ "../../../../../src/app/Components/Plant/hclplantdashboard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hclplantdashboard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var hclplantdashboard = (function () {
    function hclplantdashboard() {
    }
    hclplantdashboard.prototype.ngOnInit = function () {
    };
    return hclplantdashboard;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], hclplantdashboard.prototype, "currentPlantId", void 0);
hclplantdashboard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'hclplantdashboard',
        template: __webpack_require__("../../../../../src/app/Components/Plant/hclplantdashboard.html")
    }),
    __metadata("design:paramtypes", [])
], hclplantdashboard);

//# sourceMappingURL=hclplantdashboard.js.map

/***/ }),

/***/ "../../../../../src/app/Components/Station/StationComponent.html":
/***/ (function(module, exports) {

module.exports = "  <div>\r\n\r\n    Rajendra\r\n\r\n    <a routerLink=\"/plant\"  >clilck me </a>\r\n\r\n\r\n\r\n    <a  data-toggle=\"popover\" title=\"\" data-placement=\"\" data-content=\"\"> \r\n\r\n        dddddd\r\n    </a>   \r\n        \r\n \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/Components/Station/StationComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_PlantService__ = __webpack_require__("../../../../../src/app/Services/PlantService.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StationComponent = (function () {
    function StationComponent(ps) {
        this.ps = ps;
    }
    StationComponent.prototype.ngOnInit = function () {
        if (this.currentStationId == null) {
            this.currentStationId = 1;
        }
        //  this.GetStationListForPlant();         
    };
    return StationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], StationComponent.prototype, "currentStationId", void 0);
StationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'StationComponent',
        template: __webpack_require__("../../../../../src/app/Components/Station/StationComponent.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_PlantService__["a" /* PlantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_PlantService__["a" /* PlantService */]) === "function" && _a || Object])
], StationComponent);

var _a;
//# sourceMappingURL=StationComponent.js.map

/***/ }),

/***/ "../../../../../src/app/Components/alert/alert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(toastyService, toastyConfig) {
        this.toastyService = toastyService;
        this.toastyConfig = toastyConfig;
        this.toastyConfig.theme = 'default';
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent.prototype.onClick = function () {
        debugger;
        this.toastyService.default({
            title: "Toast It!",
            msg: "Mmmm, tasties...",
            showClose: true,
            timeout: 5000,
            theme: "default"
        });
        // Or create the instance of ToastOptions
        var toastOptions = {
            title: "My title",
            msg: "The message",
            showClose: true,
            timeout: 5000,
            theme: 'default',
            onAdd: function (toast) {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function (toast) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
        // Add see all possible types in one shot
        this.toastyService.info(toastOptions);
        this.toastyService.success(toastOptions);
        this.toastyService.wait(toastOptions);
        this.toastyService.error(toastOptions);
        this.toastyService.warning(toastOptions);
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-alert',
        template: "<button (click)=\"onClick()\">Click</button><ng2-toasty></ng2-toasty>",
        styles: [__webpack_require__("../../../../../src/app/Components/alert/alert.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["b" /* ToastyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["c" /* ToastyConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["c" /* ToastyConfig */]) === "function" && _b || Object])
], AlertComponent);

var _a, _b;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/base-chart/base-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BaseChartComponent = BaseChartComponent_1 = (function () {
    function BaseChartComponent() {
        console.log("Here is GoogleChartComponent");
    }
    BaseChartComponent.prototype.getGoogle = function () {
        return google;
    };
    BaseChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!BaseChartComponent_1.googleLoaded) {
            BaseChartComponent_1.googleLoaded = true;
            google.charts.load('current', { packages: ['corechart', 'bar'] });
        }
        google.charts.setOnLoadCallback(function () { return _this.drawGraph(); });
    };
    BaseChartComponent.prototype.drawGraph = function () {
        console.log("DrawGraph base class!!!! ");
    };
    BaseChartComponent.prototype.createBarChart = function (element) {
        return new google.visualization.PieChart(element);
    };
    BaseChartComponent.prototype.createDataTable = function (array) {
        if (google.visualization != null)
            return google.visualization.arrayToDataTable(array);
        else
            return null;
    };
    return BaseChartComponent;
}());
BaseChartComponent = BaseChartComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'chart',
        template: ""
    }),
    __metadata("design:paramtypes", [])
], BaseChartComponent);

var BaseChartComponent_1;
//# sourceMappingURL=base-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/custom-pipe/custom-pipe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/custom-pipe/custom-pipe.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  custom-pipe works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/Components/custom-pipe/custom-pipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomPipeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CustomPipeComponent = (function () {
    function CustomPipeComponent() {
    }
    CustomPipeComponent.prototype.transform = function (value, name) {
        // let exp = parseFloat(exponent);
        return value.filter(function (x) { return x.SttionName == name; });
    };
    return CustomPipeComponent;
}());
CustomPipeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-custom-pipe',
        template: __webpack_require__("../../../../../src/app/Components/custom-pipe/custom-pipe.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/custom-pipe/custom-pipe.component.css")]
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Pipe */])({ name: 'stationFilter' })
], CustomPipeComponent);

//# sourceMappingURL=custom-pipe.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/donut-base-chart/donut-base-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonutBaseChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DonutBaseChartComponent = DonutBaseChartComponent_1 = (function () {
    function DonutBaseChartComponent() {
        console.log("Here is GoogleChartComponent");
    }
    DonutBaseChartComponent.prototype.getGoogle = function () {
        return google;
    };
    DonutBaseChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!DonutBaseChartComponent_1.googleLoaded) {
            DonutBaseChartComponent_1.googleLoaded = true;
            google.charts.load('current', { packages: ['corechart', 'bar'] });
        }
        google.charts.setOnLoadCallback(function () { return _this.drawGraph(); });
    };
    DonutBaseChartComponent.prototype.drawGraph = function () {
        console.log("DrawGraph base class!!!! ");
    };
    DonutBaseChartComponent.prototype.createBarChart = function (element) {
        return new google.visualization.PieChart(element);
    };
    DonutBaseChartComponent.prototype.createDataTable = function (array) {
        if (google.visualization != null)
            return google.visualization.arrayToDataTable(array);
        else
            return null;
    };
    return DonutBaseChartComponent;
}());
DonutBaseChartComponent = DonutBaseChartComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'donut-base-chart',
        template: ""
    }),
    __metadata("design:paramtypes", [])
], DonutBaseChartComponent);

var DonutBaseChartComponent_1;
//# sourceMappingURL=donut-base-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n  <h2>HCL Remote Plant Monitoring System</h2>\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n          <label for=\"username\">Username</label>\n          <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n          <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n          <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n      </div>\n      <div class=\"form-group\">\n          <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n          <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n      </div>\n  </form>\n</div>     \n"

/***/ }),

/***/ "../../../../../src/app/Components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_authentication_service__ = __webpack_require__("../../../../../src/app/Services/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        this.loading = true;
        //return this.authenticationService.login(this.username,this.password)
        //this.router= Router;
        this.router.navigateByUrl('/plant');
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        template: __webpack_require__("../../../../../src/app/Components/login/login.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__Services_authentication_service__["a" /* AuthenticationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__Services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/motor-alert/motor-alert.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\" plant-notification panel panel-default plant-alert\" style=\"text-align: left\">\n<div class=\"panel-heading\" ><b>{{JSON.parse(this.Motor.MotorObject).Name}} Real Time Alert</b>\n  </div>\n<div class=\"panel-body\">\n\n\n            <ul>\n                        <li class=\"{{notification.status}}-alert\"  *ngFor=\"let notification of notificationlist\" >\n                            <span class=\"glyphicon glyphicon-alert\"></span>  \n                            <a href=\"#\" >{{notification.content}}</a>\n</li>\n                                    </ul>            \n\n\n</div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/Components/motor-alert/motor-alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_NotificationService__ = __webpack_require__("../../../../../src/app/Services/NotificationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_MotorService__ = __webpack_require__("../../../../../src/app/Services/MotorService.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotorAlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MotorAlertComponent = (function () {
    function MotorAlertComponent(ss, motorService) {
        this.ss = ss;
        this.motorService = motorService;
        this.notificationlist = [];
        this.JSON = JSON;
    }
    MotorAlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.motorService.MotorDataSubject.subscribe(function (data) { return _this.Motor = data[0]; });
        this.motorService.MotorNotification.subscribe(function (message) { return console.log('Motor Notification' + message); });
        this.motorService.MotorNotification.subscribe(function (data) { return _this.notificationlist.push(data); });
    };
    return MotorAlertComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], MotorAlertComponent.prototype, "currentPlantId", void 0);
MotorAlertComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-motor-alert',
        template: __webpack_require__("../../../../../src/app/Components/motor-alert/motor-alert.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_NotificationService__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_NotificationService__["a" /* NotificationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_MotorService__["a" /* MotorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_MotorService__["a" /* MotorService */]) === "function" && _b || Object])
], MotorAlertComponent);

var _a, _b;
//# sourceMappingURL=motor-alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/motor-list/motor-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/motor-list/motor-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"row\">\n\t\t<div class=\"col-md-12 \" style=\"text-align: center;\"> <h4>Motor Real Time Monitoring</h4></div>\n\t </div>  \n\t <div class=\"row\">\n\t \n\t\t \n\t   <div class=\"col-md-3 motor-left-nav \" [hidden]=\"!default\" >\t\t\t\n\t\t   <div class=\"panel panel-default\" >\n\t\t\t\t <div class=\"panel-heading\" style=\"color:#2e3f4d\" >\n\t\t\t\t <div class=\"row\">\n\t\t\t\t <div class=\"col-md-6\">\n\t\t\t\t\t <select id=\"stationName\"   name=\"StationName\" (change)=\"onStationChange($event)\">\n\t\t\t\t\t <option >Select a Station</option>\n\t\t\t\t\t <option *ngFor=\"let station of stationList\"  [selected]=\"JSON.parse(station.StationObject).StationName === currentStation\"   >{{JSON.parse(station.StationObject).StationName}}</option>\n\t\t\t\t </select>\n\t\t\t\t </div>\n\t\t\t\t\t <div class=\"col-md-6\" style=\"text-align:right\">\n\t\t\t\t\t\t Severity\n\t\t\t\t\t <span class=\"glyphicon glyphicon-sort-by-attributes-alt\" ></span>\n\t\t\t\t\t <span class=\"glyphicon glyphicon-filter\"></span>\n\t\t\t\t\t </div>\t\t\t\t\n\t\t\t\t </div>\t\t\t\t\n\t \n\t\t\t\t\t \n\t\t\t\t </div>\n\t\t\t\t <div class=\"panel-body\">\n\t\t\t\n\t\t<div class=\"row\"  *ngIf=\"currentStation\"  > \n\t\t \n\t\t\t\t\t\t<div class=\"row\"><div class=\"col-md-12\"><hr style='margin-top:0' class=\"style14\"/></div>\n\t\t\t\t\t\t</div>\n\t\t</div>\t\t\t\n\t\t\t\t\t\n\t\t\t\t<!--\t\t\n\t \n\t\t<div class=\"row currentStation SelectedNav\" id=\"myid\"  *ngIf=\"currentStation\" \n\t\t(click)=\"displayDashboardData(currentStation,$event)\"  > \n\t\t\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\tDashboard ({{currentStation}})\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row\"><div class=\"col-md-12\"><hr class=\"style14\"/></div>\n\t\t\t\t\t\t</div>\n\t\t</div>\n\t-->\n\t\t\n\t <div class=\"row motorlist \" id=\"{{motor.RowKey}}\" *ngFor=\"let motor of motorFilteredList\"\n\t (click)=\"displayMotorData(JSON.parse(motor.MotorObject).Name,motor.RowKey,$event)\"  >\n\t                \n\t\t\t\t\t <div class=\"col-md-4\">\n\t\t\t\t\t\t <img class=\"img-circle img-responsive\" [src]=\"JSON.parse(motor.MotorObject).Image\"  >\n\t\t\t\t\t </div>\n\t\t\t\t\t <div class=\"col-md-6 zero-p-left zero-p-right\" >\n\t\t\t\t\t   <span>\t<strong> {{JSON.parse(motor.MotorObject).Name}} </strong></span>\n\t\t\t\t\t\t \n\t\t\t\t\t\t<!-- <button type=\"button\" class=\"btn btn-link\" (click)=\"displayMotorData($event)\" name=\"{{JSON.parse(motor.MotorObject).Name}}\" style=\"font-weight: bold; color:#663300 \">{{JSON.parse(motor.MotorObject).Name}}</button>\n\t\t\t\t\t\t-->\n\t\t\t\t\t\t \n\t\t\t\t\t </div>\n\t\t\t\t\t <div class=\"col-md-2 zero-p-left\">\t\t\t\t\t\n\t\t\t\t\t\t <svg height=\"40\" width=\"40\">   <circle cx=\"10\" cy=\"10\" r=\"8\" stroke=\"black\" stroke-width=\"1\" fill=\"rgb(0,153,76)\" />\n\t\t\t\t\t\t </svg>\t\t\n\t\t\t\t\t</div>\n\t \n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center\">\n\t\t\t\t\t\tSerial Number #{{JSON.parse(motor.MotorObject).SerialNumber}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center\">\n\t\t\t\t\t\t\t<img  [src]=\"locationImage\" width=\"15px\" height=\"20px\">&nbsp;{{JSON.parse(motor.MotorObject).Location}}\n\t\t\t\t\t\t</div>\n\t\t\t    \t</div>\n\n\t\t\t\t\t<div class=\"row\"><div class=\"col-md-12\"><hr class=\"style14\"/></div>\n\t\t\t\t\t</div>\n\t </div>\n\t </div>\n\t\t\t\t </div>\n\t\t\t\t </div>\n\t \n\t \n     <!--\n\t <div class=\"col-md-9 text-center\" [hidden]=\"flag\">\n\t\t\t<span> Station Dashboard Under construction </span>\n\t   </div>\n\t-->\n\n\t <div class=\"col-md-9 text-center\" [hidden]=\"default\">\n\t\t  <div class=\"row\">\n\t\t\t  <div class=\"col-md-8\">\n\t\t\t\t  <app-motor-summary></app-motor-summary>\n\t\t\t  </div>\n\t\t\t  <div class=\"col-md-4\">\n\t\t\t\t  <app-motor-alert></app-motor-alert>\n\t\t\t  </div>\n\t\t  </div>\n \n\t\t  \n\t\t <gauge-chart></gauge-chart>\n\t \n\t\t <linechart></linechart>\n\t </div>\n\t \n"

/***/ }),

/***/ "../../../../../src/app/Components/motor-list/motor-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_MotorService__ = __webpack_require__("../../../../../src/app/Services/MotorService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_StationService__ = __webpack_require__("../../../../../src/app/Services/StationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Configuration_MasterConfiguration__ = __webpack_require__("../../../../../src/app/Configuration/MasterConfiguration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotorListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MotorListComponent = (function () {
    function MotorListComponent(motorService, stationService, renderer, route) {
        this.motorService = motorService;
        this.stationService = stationService;
        this.renderer = renderer;
        this.route = route;
        this.default = true;
        this.flag = true;
        this.JSON = JSON;
        this.locationImage = "/assets/images/location.png";
    }
    MotorListComponent.prototype.ngOnInit = function () {
        this.currentStation = this.route.snapshot.paramMap.get('StationName');
        console.log("current Station " + this.currentStation);
        if (this.currentStation != null && this.currentStation != '')
            this.flag = false;
        this.getMotorList();
        this.GetStationList();
    };
    MotorListComponent.prototype.onStationChange = function (event) {
        this.flag = false;
        this.default = true;
        console.log(event.target.value);
        this.applyStationFilter(event.target.value);
    };
    MotorListComponent.prototype.getMotorList = function () {
        var _this = this;
        this.motorService.GetMotorList(__WEBPACK_IMPORTED_MODULE_3__Configuration_MasterConfiguration__["a" /* config */].PlantName, '').subscribe(function (res) {
            _this.motorList = res;
            if (_this.currentStation)
                _this.motorFilteredList = _this.motorList.filter(function (motor) { return motor.StationName == _this.currentStation; });
            console.log("Received by observer" + JSON.parse(_this.motorList[0].MotorObject).Name);
        });
    };
    MotorListComponent.prototype.GetStationList = function () {
        var _this = this;
        this.stationService.GetStationListforPlant(__WEBPACK_IMPORTED_MODULE_3__Configuration_MasterConfiguration__["a" /* config */].PlantName).subscribe(function (res) {
            _this.stationList = res;
        });
    };
    MotorListComponent.prototype.applyStationFilter = function (StationName) {
        this.currentStation = StationName;
        this.motorFilteredList = this.motorList.filter(function (motor) { return motor.StationName == StationName; });
    };
    MotorListComponent.prototype.applyMotorFilter = function (MotorName) {
        return this.motorList.filter(function (motor) { return JSON.parse(motor.MotorObject).Name == MotorName; });
    };
    MotorListComponent.prototype.displayMotorData = function (motorname, divid, event) {
        this.default = false;
        this.flag = true;
        //this.motorService.setMotor(this.applyMotorFilter((event.target as HTMLButtonElement).name));
        this.motorService.setMotor(this.applyMotorFilter(motorname));
        /*let  myid = document.getElementById('myid');
         this.renderer.setElementClass(myid,"SelectedNav",false); */
        console.log('hi');
        if (this.motorFilteredList) {
            for (var motor in this.motorFilteredList) {
                var motorid = this.motorFilteredList[motor]["RowKey"];
                console.log(motorid);
                var mid = document.getElementById(motorid);
                this.renderer.setElementClass(mid, "SelectedNav", false);
            }
        }
        var selecteddiv = document.getElementById(divid);
        this.renderer.setElementClass(selecteddiv, "SelectedNav", true);
    };
    MotorListComponent.prototype.displayDashboardData = function (Stationname, event) {
        this.flag = false;
        this.default = true;
        /*  let  myid = document.getElementById('myid');
         this.renderer.setElementClass(myid,"SelectedNav",true);
         */
        console.log('hi');
        if (this.motorFilteredList) {
            for (var motor in this.motorFilteredList) {
                var motorid = this.motorFilteredList[motor]["RowKey"];
                console.log(motorid);
                var mid = document.getElementById(motorid);
                this.renderer.setElementClass(mid, "SelectedNav", false);
            }
        }
        //this.motorService.setMotor(this.applyMotorFilter((event.target as HTMLButtonElement).name));
        // this.motorService.setMotor(this.applyMotorFilter(Stationname));
    };
    return MotorListComponent;
}());
MotorListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-motor-list',
        template: __webpack_require__("../../../../../src/app/Components/motor-list/motor-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/motor-list/motor-list.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__Services_MotorService__["a" /* MotorService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_MotorService__["a" /* MotorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_MotorService__["a" /* MotorService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_StationService__["a" /* StationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_StationService__["a" /* StationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Renderer */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object])
], MotorListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=motor-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/motor-performance-welcome/motor-performance-welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/motor-performance-welcome/motor-performance-welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  motor-performance-welcome works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/Components/motor-performance-welcome/motor-performance-welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotorPerformanceWelcomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MotorPerformanceWelcomeComponent = (function () {
    function MotorPerformanceWelcomeComponent() {
    }
    MotorPerformanceWelcomeComponent.prototype.ngOnInit = function () {
    };
    return MotorPerformanceWelcomeComponent;
}());
MotorPerformanceWelcomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-motor-performance-welcome',
        template: __webpack_require__("../../../../../src/app/Components/motor-performance-welcome/motor-performance-welcome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/motor-performance-welcome/motor-performance-welcome.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MotorPerformanceWelcomeComponent);

//# sourceMappingURL=motor-performance-welcome.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/motor-status-chart/motor-status-chart.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class='overall-motor-status'>\n      <div class=\"panel-heading text-center\">Overall Motor Status  </div>\n      <div class=\"panel-body status-chart\">\n          <span id=\"donutChart\" ></span>    \n      </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/Components/motor-status-chart/motor-status-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__donut_base_chart_donut_base_chart_component__ = __webpack_require__("../../../../../src/app/Components/donut-base-chart/donut-base-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_MotorService__ = __webpack_require__("../../../../../src/app/Services/MotorService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Configuration_MasterConfiguration__ = __webpack_require__("../../../../../src/app/Configuration/MasterConfiguration.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotorStatusChartComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MotorStatusChartComponent = (function (_super) {
    __extends(MotorStatusChartComponent, _super);
    function MotorStatusChartComponent(ss) {
        var _this = _super.call(this) || this;
        _this.ss = ss;
        _this.getMotorStatus();
        return _this;
    }
    MotorStatusChartComponent.prototype.getMotorStatus = function () {
        var _this = this;
        // hard coded 
        this.result = [
            ['StationHealth', 'NumOfStation'],
            ['Green', 5],
            ['Amber', 1],
            ['Red', 2]
        ];
        this.ss.getOverAllMotorStatus(__WEBPACK_IMPORTED_MODULE_3__Configuration_MasterConfiguration__["a" /* config */].PlantName, '').subscribe(function (result) {
            _this.v = result;
            setTimeout(_this.drawGraph(), 2000);
        });
    };
    MotorStatusChartComponent.prototype.drawGraph = function () {
        var stList = this.v.json()['value'];
        if (__WEBPACK_IMPORTED_MODULE_3__Configuration_MasterConfiguration__["a" /* config */].PlantName != '') {
            stList = stList.filter(function (x) { return x.PlantName == __WEBPACK_IMPORTED_MODULE_3__Configuration_MasterConfiguration__["a" /* config */].PlantName; });
        }
        var Green = stList.filter(function (x) { return x.Status == 'Green'; }).length;
        var Red = stList.filter(function (x) { return x.Status == 'Red'; }).length;
        var Amber = stList.filter(function (x) { return x.Status == 'Amber'; }).length;
        this.result = [
            ['StationHealth', 'NumOfStation'],
            ['Green', Green],
            ['Amber', Amber],
            ['Red', Red]
        ];
        console.log("DrawGraph Evolution...");
        this.data = this.createDataTable(this.result);
        this.options = {
            /*title: 'Evolution, 2014', */
            chartArea: { left: 0, width: "90%", height: "500" },
            hAxis: {
                title: 'Value in USD',
                minValue: 0
            },
            'legend': 'none',
            vAxis: {
                title: 'Members'
            },
            "colors": ["#008000", "#FFC200", "#FF0000"],
            'width': 280,
            'height': 200,
            pieHole: 0.4
        };
        this.chart = this.createBarChart(document.getElementById('donutChart'));
        this.chart.draw(this.data, this.options);
    };
    return MotorStatusChartComponent;
}(__WEBPACK_IMPORTED_MODULE_1__donut_base_chart_donut_base_chart_component__["a" /* DonutBaseChartComponent */]));
MotorStatusChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'motor-status-chart',
        template: __webpack_require__("../../../../../src/app/Components/motor-status-chart/motor-status-chart.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_MotorService__["a" /* MotorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_MotorService__["a" /* MotorService */]) === "function" && _a || Object])
], MotorStatusChartComponent);

var _a;
//# sourceMappingURL=motor-status-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/motor-summary/motor-summary.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/motor-summary/motor-summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" *ngIf=\"Motor\">\n    <div class=\"panel panel-heading\" style=\"text-align: left\">\n\t\t<b >{{JSON.parse(this.Motor?.MotorObject)?.Name}}</b>\n    </div>\n<div class=\"panel-body\">\n      <div class=\"row \">\n\t\t\t\t<div class=\"col-md-3 col-centered\">\n        <img class=\"img-responsive img-thumbnail\" [src]=\"JSON.parse(this.Motor.MotorObject).Image\" height=\"50%\" width=\"100%\">\n\t \t\t\t\t\n\t\t\t\t</div>\n\t\t\t  <div class=\"col-md-9\">\n\t\t\t\t\t<div class=\"row\"><div class=\"col-md-12\">Machine: <b>#{{JSON.parse(this.Motor.MotorObject).SerialNumber}}</b></div></div>\n\t\t\t\t\t<div class=\"row\"><div class=\"col-md-12\">Location: <b>{{JSON.parse(this.Motor.MotorObject).Location}} </b></div></div>\n\t\t\t\t\t<div class=\"row\"><div class=\"col-md-12\">Current Risk Index:<font color=\"green\"><b>Green</b></font></div></div>\n\t\t\t\t</div>\n</div>\n<div class=\"row\"><hr class=\"style14\"/></div>\n<div class=\"row\">\n\t\t\t\t<svg width=\"100%\" height=\"20\">\n  <rect width=\"100%\" height=\"20\" style=\"fill:rgb(0,153,76);stroke-width:1;stroke:rgb(0,0,0)\" />\n</svg>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<i>Current Month</i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-6\" style=\"text-align:center\">\n\t\t\t\t\t\t\t<b>Past 9 Month Risk Index</b>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-3\" >\n\t\t\t\t\t\t\t<span style=\"float:right\"> <i>Last Month</i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/motor-summary/motor-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_MotorService__ = __webpack_require__("../../../../../src/app/Services/MotorService.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotorSummaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MotorSummaryComponent = (function () {
    function MotorSummaryComponent(motorService) {
        this.motorService = motorService;
        this.JSON = JSON;
    }
    MotorSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.motorService.MotorDataSubject.subscribe(function (data) {
            _this.Motor = data[0];
            console.log(JSON.parse(_this.Motor.MotorObject).Name);
        });
    };
    return MotorSummaryComponent;
}());
MotorSummaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-motor-summary',
        template: __webpack_require__("../../../../../src/app/Components/motor-summary/motor-summary.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/motor-summary/motor-summary.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_MotorService__["a" /* MotorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_MotorService__["a" /* MotorService */]) === "function" && _a || Object])
], MotorSummaryComponent);

var _a;
//# sourceMappingURL=motor-summary.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/motor/motor.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <app-motor-list></app-motor-list>\n"

/***/ }),

/***/ "../../../../../src/app/Components/motor/motor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_graph_service__ = __webpack_require__("../../../../../src/app/Services/graph.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MotorComponent = (function () {
    function MotorComponent(graphService) {
        this.graphService = graphService;
        this.messages = [];
        /*this.connection = this.graphService.getMessages().subscribe(message => {
        console.log('Message received from service...'+message);
        this.messages.push(message);
        
  
      })*/
    }
    MotorComponent.prototype.sendMessage = function () {
        /*console.log('Message : '+this.message);
        this.graphService.sendMessage(this.message);
        
        this.message = '';
    */
    };
    MotorComponent.prototype.ngOnInit = function () {
    };
    MotorComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    return MotorComponent;
}());
MotorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-graph',
        template: __webpack_require__("../../../../../src/app/Components/motor/motor.component.html"),
        styles: ["\n\n    .chat {\n\n      margin-top: 100px;\n\n      margin-left: auto;\n\n      margin-right: auto;\n\n      width: 10%;\n\n      font-family: 'Georgia';\n\n      font-size: 200%;\n\n    }\n\n  "],
        providers: [__WEBPACK_IMPORTED_MODULE_1__Services_graph_service__["a" /* GraphService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_graph_service__["a" /* GraphService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_graph_service__["a" /* GraphService */]) === "function" && _a || Object])
], MotorComponent);

var _a;
//# sourceMappingURL=motor.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class='plant-notification'>\n<div class=\"panel-heading text-center \">Plant Notification  </div>\n<div class=\"panel-body\">\n     \n      <ul>\n          <li class=\"{{notification['Status']}}-alert\"  *ngFor=\" let notification of notificationlist\" >\n              <span class=\"glyphicon glyphicon-alert\"></span>  \n              <a id =\"{{notification['RowKey']}}\"   (click)=\"myFunction(notification['RowKey'],$event)\" >\n                  {{notification['Subject']}}</a>\n          </li>\n                                   \n      </ul>\n</div>\n\n\n\n\n\n<div class=\" notification-popup\" id=\"popdiv\"  > \n        \n        <div class=\"popuptext\" id=\"notPop\" >    \n             \n             <table   class='motor-popup header-table' *ngIf=\"filterNotlist\"  >\n                \n                <tr>\n\t\t\t\t<td class='' > {{JSON.parse(filterNotlist[0]['Content']).StationName }}  </td>\n                   <td class='' > {{JSON.parse(filterNotlist[0]['Content']).DeviceName }}  </td>\n\n                   \n                   \n                </tr>\n             </table>\n             <table cellpadding=\"20\" class='motor-popup' *ngIf=\"filterNotlist\">\n                <tr>\n                        <th class='' >Parameter  </th>\n                        <th class='' > Value </th>\n                        <th>Status </th>\n                         \n                     </tr>\n                <tr *ngFor=\"let datapoint of JSON.parse(filterNotlist[0]['Content']).DataPoints \" >\n                            <td>\n                                        {{ datapoint.Parameter }}\n                            </td>\n                            <td>\n                                    {{ datapoint.Value +\"  \" +  datapoint.UOM }}\n                            </td>\n                            <td>\n                                  <span class=\"circle-small {{ datapoint.Status }}  \" style='margin-left:10px;'></span>  \n                            </td>\n                            \n                </tr>\n             \n                \n             </table>\n           \n        </div>\n      </div>\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/Components/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_NotificationService__ = __webpack_require__("../../../../../src/app/Services/NotificationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Configuration_MasterConfiguration__ = __webpack_require__("../../../../../src/app/Configuration/MasterConfiguration.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsComponent = (function () {
    function NotificationsComponent(ss) {
        this.ss = ss;
        this.JSON = JSON;
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        if (this.currentPlantId == null) {
            this.currentPlantId = 2;
        }
        this.GetStationListForPlant();
    };
    NotificationsComponent.prototype.GetStationListForPlant = function () {
        var _this = this;
        this.ss.GetNotificationList(__WEBPACK_IMPORTED_MODULE_2__Configuration_MasterConfiguration__["a" /* config */].PlantName, '-1', '-1').subscribe(function (data) { return _this.notificationlist = data; });
    };
    NotificationsComponent.prototype.myFunction = function (rowkey, event) {
        console.log(rowkey);
        this.filterNotlist = this.notificationlist.filter(function (x) { return x.RowKey == rowkey; });
        console.log("motorlist" + this.filterNotlist);
        if (this.filterNotlist.length > 0) {
            var popup = document.getElementById("notPop");
            popup.classList.toggle("show");
            var x = event.clientX;
            var y = event.clientY;
            console.log(x + "  " + y);
        }
    };
    return NotificationsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], NotificationsComponent.prototype, "currentPlantId", void 0);
NotificationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'notifications',
        template: __webpack_require__("../../../../../src/app/Components/notifications/notifications.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_NotificationService__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_NotificationService__["a" /* NotificationService */]) === "function" && _a || Object])
], NotificationsComponent);

var _a;
//# sourceMappingURL=notifications.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/pi-chart/pi-chart.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"panel-heading text-center\">Overall Station Status  </div>\n<div class=\"panel-body status-chart\">\n  <span id=\"piechart\" ></span>    \n       \n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/pi-chart/pi-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_chart_base_chart_component__ = __webpack_require__("../../../../../src/app/Components/base-chart/base-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_StationService__ = __webpack_require__("../../../../../src/app/Services/StationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Configuration_MasterConfiguration__ = __webpack_require__("../../../../../src/app/Configuration/MasterConfiguration.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PiChartComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PiChartComponent = (function (_super) {
    __extends(PiChartComponent, _super);
    function PiChartComponent(ss) {
        var _this = _super.call(this) || this;
        _this.ss = ss;
        _this.getStationStatus();
        return _this;
    }
    PiChartComponent.prototype.getStationStatus = function () {
        var _this = this;
        // hard coded
        this.v = [
            ['StationHealth', 'NumOfStation'],
            ['Green', 490],
            ['Amber', 200],
            ['Red', 20]
        ];
        this.ss.getStationStatus(__WEBPACK_IMPORTED_MODULE_3__Configuration_MasterConfiguration__["a" /* config */].PlantName).subscribe(function (result) {
            _this.v = result;
            setTimeout(_this.drawGraph(), 2000);
        });
    };
    PiChartComponent.prototype.drawGraph = function () {
        console.log("DrawGraph ...");
        /*var v = [
          ['StationHealth', 'NumOfStation'],
          ['Green',     500],
          ['Amber',     200],
          ['Red',  20]
        ]
       */
        this.data = this.createDataTable(this.v);
        this.options = {
            /*title: 'Evolution, 2014', */
            chartArea: { left: 0, top: 0, width: "90%", height: "500" },
            hAxis: {
                title: 'Value in USD',
                minValue: 0
            },
            is3D: true,
            'legend': 'none',
            vAxis: {
                title: 'Members'
            },
            "colors": ["#008000", "#FFC200", "#FF0000"],
            'width': 280,
            'height': 200,
        };
        this.chart = this.createBarChart(document.getElementById('piechart'));
        this.chart.draw(this.data, this.options);
    };
    return PiChartComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_chart_base_chart_component__["a" /* BaseChartComponent */]));
PiChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: '<pi-chart>',
        template: __webpack_require__("../../../../../src/app/Components/pi-chart/pi-chart.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_StationService__["a" /* StationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_StationService__["a" /* StationService */]) === "function" && _a || Object])
], PiChartComponent);

var _a;
//# sourceMappingURL=pi-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/screen-title/screen-title.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/screen-title/screen-title.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  screen-title works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/Components/screen-title/screen-title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScreenTitleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScreenTitleComponent = (function () {
    function ScreenTitleComponent() {
    }
    ScreenTitleComponent.prototype.ngOnInit = function () {
    };
    return ScreenTitleComponent;
}());
ScreenTitleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-screen-title',
        template: __webpack_require__("../../../../../src/app/Components/screen-title/screen-title.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/screen-title/screen-title.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ScreenTitleComponent);

//# sourceMappingURL=screen-title.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/stationlist/stationlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"stationlist\" >                 \n    <div class=\"panel panel-default col-md-2 nopadding scrollItem \"   id={{station.Id}} *ngFor=\" let station of stationlist  \"  >\n \n   <div   (click)=\"myFunction(JSON.parse(station.StationObject).StationName,$event)\" >    \n            \n            \n           <a [routerLink]=\"['/motor',JSON.parse(station.StationObject).StationName]\" >\n             <div class=\"panel-heading text-center\">  {{JSON.parse(station.StationObject).StationName}}</div>\n           </a>\n      <div class=\"panel-body\">\n            <span class=\"circle {{station.Status}} \"></span>  \n            <span class='status-padding ' > RI : {{station.RI}} </span>\n\n\n      </div>\n           \n      <div class=\"panel-footer\"></div>   \n</div>  \n\n \n    </div>\n</div>\n\n\n\n  <div class=\"popup\" id=\"popdiv\" > \n    <div class=\"popuptext\" id=\"myPopup\" *ngIf=\"filtermotorlist\" >     \n\t     <table  class=\"motor-popup header-table\">\n                \n                <tbody><tr>\n\t\t\t\t<td class=\"\"> {{ filtermotorlist[0].StationName  }}  Motor Status  </td>                  \n                </tr>\n             </tbody></table>\n\t\t\t \n         <table class='motor-popup' >\n            <tr  *ngFor=\" let motor  of filtermotorlist \" >\n               <td class='motor-name' > {{JSON.parse(motor.MotorObject).Name}}  </td>\n               <td> <span class=\"circle-small {{motor.Status}} \"></span></td>\n            </tr>\n         </table>\n       \n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/Components/stationlist/stationlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_StationService__ = __webpack_require__("../../../../../src/app/Services/StationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_MotorService__ = __webpack_require__("../../../../../src/app/Services/MotorService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Configuration_MasterConfiguration__ = __webpack_require__("../../../../../src/app/Configuration/MasterConfiguration.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationlistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StationlistComponent = (function () {
    function StationlistComponent(ss, ms) {
        this.ss = ss;
        this.ms = ms;
        this.mystation = 'Station A';
        this.JSON = JSON;
    }
    StationlistComponent.prototype.ngOnInit = function () {
        if (this.currentPlantId == null) {
            this.currentPlantId = 2;
        }
        this.GetStationListForPlant();
        this.GetMotorList();
    };
    StationlistComponent.prototype.GetStationListForPlant = function () {
        var _this = this;
        this.ss.GetStationListforPlant(__WEBPACK_IMPORTED_MODULE_3__Configuration_MasterConfiguration__["a" /* config */].PlantName).subscribe(function (data) { return _this.stationlist = data; });
    };
    StationlistComponent.prototype.GetMotorList = function () {
        var _this = this;
        this.ms.GetMotorList(__WEBPACK_IMPORTED_MODULE_3__Configuration_MasterConfiguration__["a" /* config */].PlantName, '').subscribe(function (data) { _this.motorlist = data; console.log(_this.motorlist); });
    };
    StationlistComponent.prototype.myFunction = function (stationname, event) {
        console.log(stationname);
        this.filtermotorlist = this.motorlist.filter(function (x) { return x.StationName == stationname; });
        console.log("motorlist" + this.filtermotorlist);
        if (this.filtermotorlist.length > 0) {
            var popup = document.getElementById("myPopup");
            popup.classList.toggle("show");
            var x = event.clientX;
            var y = event.clientY;
            console.log(x + "  " + y);
        }
    };
    return StationlistComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], StationlistComponent.prototype, "currentPlantId", void 0);
StationlistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'stations',
        template: __webpack_require__("../../../../../src/app/Components/stationlist/stationlist.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_StationService__["a" /* StationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_StationService__["a" /* StationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_MotorService__["a" /* MotorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_MotorService__["a" /* MotorService */]) === "function" && _b || Object])
], StationlistComponent);

var _a, _b;
//# sourceMappingURL=stationlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/test-ws/test-ws.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/test-ws/test-ws.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  test-ws works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/Components/test-ws/test-ws.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestWsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestWsComponent = (function () {
    function TestWsComponent() {
        this.url = 'wss://hclmotorwebapplication.azurewebsites.net';
        console.log("Log for Wss: " + this.url);
        //   this.socket = io(this.url);
        //   console.log("connected...");
        var ws = new WebSocket(this.url);
        ws.onopen = function () {
            console.log('Successfully connect WebSocket' + this.url);
        };
        ws.onerror = function (err) {
            console.log(err);
        };
        ws.onmessage = function (message) {
            console.log('Message received....');
            console.log('receive message' + message.data);
        };
    }
    TestWsComponent.prototype.ngOnInit = function () {
    };
    return TestWsComponent;
}());
TestWsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-test-ws',
        template: __webpack_require__("../../../../../src/app/Components/test-ws/test-ws.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/test-ws/test-ws.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TestWsComponent);

//# sourceMappingURL=test-ws.component.js.map

/***/ }),

/***/ "../../../../../src/app/Configuration/MasterConfiguration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var config = (function () {
    function config() {
    }
    return config;
}());
config.PlantName = 'HCLPLANT';
// private StatiotUrl='/stationlist.json'
//private StatiotUrl='https://hclmotorstorageaccount.table.core.windows.net/Stations?$select=StationObeject&st=2017-08-30T08%3A15%3A00Z&se=2017-10-21T08%3A15%3A00Z&sp=raud&sv=2016-05-31&tn=stations&sig=4GLyLYg3YBSZqR5TydJ5nK7QqzuZRc6x9%2B52RFih%2B9M%3D';
// static StatiotUrl: string='https://hclmotorstorageaccount.table.core.windows.net/Stations?st=2017-08-30T08%3A15%3A00Z&se=2017-10-21T08%3A15%3A00Z&sp=raud&sv=2016-05-31&tn=stations&sig=4GLyLYg3YBSZqR5TydJ5nK7QqzuZRc6x9%2B52RFih%2B9M%3D';  
config.StatiotUrl = 'http://hclpocstorageaccount.table.core.windows.net:80/Station?st=2017-09-07T07%3A29%3A00Z&se=2018-08-31T07%3A29%3A00Z&sp=raud&sv=2016-05-31&tn=station&sig=LblD8ibQ0Vn4uVJK0zolhujZ5EJkFK8%2FV39qNhpIXgE%3D';
config.MotorUrl = 'http://hclpocstorageaccount.table.core.windows.net:80/Motor?st=2017-09-15T10%3A41%3A00Z&se=2019-07-31T10%3A41%3A00Z&sp=raud&sv=2016-05-31&tn=motor&sig=ICISuLvVbbLKvvISiM34Jd4sJcT%2FenDPGQ9QCtOuH2s%3D';
//static MotorNotificationUrl:string='http://hclpocstorageaccount.table.core.windows.net:80/MotorNotification?st=2017-09-15T10%3A41%3A00Z&se=2019-07-31T10%3A41%3A00Z&sp=raud&sv=2016-05-31&tn=motor&sig=ICISuLvVbbLKvvISiM34Jd4sJcT%2FenDPGQ9QCtOuH2s%3D';
config.MotorNotificationUrl = 'https://hclpocstorageaccount.table.core.windows.net:443/MotorNotification?st=2017-09-17T07%3A58%3A00Z&se=2017-09-18T07%3A58%3A00Z&sp=raud&sv=2016-05-31&tn=motor&sig=UpdOy37ZtD8e12IzYFN4bYgIXJGvyDRgTCuw1ceAkW4%3D';
//https://hclpocstorageaccount.table.core.windows.net:443/MotorNotification?st=2017-09-17T07%3A58%3A00Z&se=2017-09-18T07%3A58%3A00Z&sp=raud&sv=2016-05-31&tn=motornotification&sig=7evFc5gWKAAvy19cWvJgFq5357149oj3%2B8hwxLpr48E%3D
config.NotificationUrl = 'http://hclpocstorageaccount.table.core.windows.net:80/Notifications?st=2017-09-15T13%3A04%3A00Z&se=2018-02-28T13%3A04%3A00Z&sp=raud&sv=2016-05-31&tn=notifications&sig=USm3MDqKpakRNBtDHi4uk9ZfN7Z9iQBDaDIHbm360Rc%3D';
config = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])()
], config);

//# sourceMappingURL=MasterConfiguration.js.map

/***/ }),

/***/ "../../../../../src/app/Entities/motor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Motor; });
var Motor = (function () {
    function Motor(Name, Description, Location, SerialNumber, StationName, PlantName, Power, Frequency, RatedCurrent, RatedVoltage, MotorLeakageCurrent, Image) {
        this.Name = Name;
        this.Description = Description;
        this.Location = Location;
        this.SerialNumber = SerialNumber;
        this.StationName = StationName;
        this.PlantName = PlantName;
        this.Power = Power;
        this.Frequency = Frequency;
        this.RatedCurrent = RatedCurrent;
        this.RatedVoltage = RatedVoltage;
        this.MotorLeakageCurrent = MotorLeakageCurrent;
        this.Image = Image;
    }
    return Motor;
}());

//# sourceMappingURL=motor.js.map

/***/ }),

/***/ "../../../../../src/app/Services/MotorService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Configuration_MasterConfiguration__ = __webpack_require__("../../../../../src/app/Configuration/MasterConfiguration.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//the injectable attribute to generate the metadata to make the service available through 
//Dependency Injustion(DI) in other modules.
var MotorService = MotorService_1 = (function () {
    function MotorService(http) {
        this.http = http;
        this.MotorDataSubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.MotorNotification = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
    }
    // Return the instance of the service
    MotorService.getInstance = function (http) {
        if (MotorService_1.serviceInstance === null) {
            MotorService_1.serviceInstance = new MotorService_1(http);
        }
        return MotorService_1.serviceInstance;
    };
    MotorService.prototype.setMotor = function (data) {
        this.MotorDataSubject.next(data);
    };
    MotorService.prototype.setNotification = function (data) {
        this.MotorNotification.next(data);
    };
    MotorService.prototype.GetMotorList = function (plantname, stationName) {
        var _this = this;
        if (this.cachedData) {
            console.log('motor service:' + this.cachedData);
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].of(this.cachedData);
        }
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__Configuration_MasterConfiguration__["a" /* config */].MotorUrl)
            .map(function (res) { return _this.GetJsonData(res, plantname, stationName); });
    };
    MotorService.prototype.getOverAllMotorStatus = function (plantname, stationName) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__Configuration_MasterConfiguration__["a" /* config */].MotorUrl);
        //.map(res=>{ this.CalculateMotorStatus(res,plantname,stationName);});
    };
    MotorService.prototype.GetNotificationList = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__Configuration_MasterConfiguration__["a" /* config */].MotorUrl)
            .map(function (res) {
            console.log(res.json()['value']);
            return res.json()['value'];
            ;
        });
    };
    MotorService.prototype.GetJsonData = function (xmldata, plantname, stationName) {
        var jsonobject = xmldata.json()['value'];
        if (plantname != '') {
            jsonobject = jsonobject.filter(function (x) { return x.PlantName == plantname; });
        }
        console.log(jsonobject);
        this.cachedData = jsonobject;
        console.log("getjsondata: " + this.cachedData);
        return jsonobject;
    };
    MotorService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return null;
    };
    MotorService.prototype.CalculateMotorStatus = function (res, plantname, stationName) {
        var stList = this.GetJsonData(res, plantname, stationName);
        console.log(stList);
        var Green = stList.filter(function (x) { return x.Status == 'Green'; }).length;
        var Red = stList.filter(function (x) { return x.Status == 'Red'; }).length;
        var Amber = stList.filter(function (x) { return x.Status == 'Amber'; }).length;
        var result = [
            ['StationHealth', 'NumOfStation'],
            ['Green', Green],
            ['Amber', Amber],
            ['Red', Red]
        ];
        return result;
    };
    return MotorService;
}());
MotorService.serviceInstance = null;
MotorService = MotorService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MotorService);

var MotorService_1, _a;
//# sourceMappingURL=MotorService.js.map

/***/ }),

/***/ "../../../../../src/app/Services/NotificationService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Configuration_MasterConfiguration__ = __webpack_require__("../../../../../src/app/Configuration/MasterConfiguration.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//the injectable attribute to generate the metadata to make the service available through 
//Dependency Injustion(DI) in other modules.
var NotificationService = NotificationService_1 = (function () {
    function NotificationService(http) {
        this.http = http;
    }
    // Return the instance of the service
    NotificationService.getInstance = function (http) {
        if (NotificationService_1.serviceInstance === null) {
            NotificationService_1.serviceInstance = new NotificationService_1(http);
        }
        return NotificationService_1.serviceInstance;
    };
    NotificationService.prototype.GetNotificationList = function (plantName, stationName, motorName) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__Configuration_MasterConfiguration__["a" /* config */].NotificationUrl)
            .map(function (res) { return _this.GetJsonData(res, plantName, stationName); });
    };
    NotificationService.prototype.GetJsonData = function (xmldata, plantName, stationName) {
        var jsonobject = xmldata.json()['value'];
        var filterObject = [];
        for (var item in jsonobject) {
            if (parseInt(item) < 10)
                filterObject.push(jsonobject[item]);
        }
        return filterObject;
    };
    /*
     private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
    */
    NotificationService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return null;
    };
    return NotificationService;
}());
NotificationService.serviceInstance = null;
NotificationService = NotificationService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NotificationService);

var NotificationService_1, _a;
//# sourceMappingURL=NotificationService.js.map

/***/ }),

/***/ "../../../../../src/app/Services/PlantService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//the injectable attribute to generate the metadata to make the service available through 
//Dependency Injustion(DI) in other modules.
var PlantService = (function () {
    function PlantService(http) {
        this.http = http;
        this.PlantUrl = '/plantlist.json';
        this.PlantUrl2 = 'https://hclmotorstorageaccount.table.core.windows.net/Stations(PartitionKey="pk1",RowKey="rk1")?$select=StationObeject&st=2017-08-30T08%3A15%3A00Z&se=2017-10-21T08%3A15%3A00Z&sp=raud&sv=2016-05-31&tn=stations&sig=4GLyLYg3YBSZqR5TydJ5nK7QqzuZRc6x9%2B52RFih%2B9M%3D';
    }
    PlantService.prototype.GetPlantAsync = function () {
        return this.http.get(this.PlantUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PlantService.prototype.GetPlantById = function (id) {
        var _this = this;
        return this.http.get(this.PlantUrl)
            .toPromise()
            .then(function (response) { return _this.extractData(response, id); })
            .catch(this.handleError);
    };
    PlantService.prototype.extractData = function (res, id) {
        var data = res.json().find(function (x) { return x.Id == id; });
        return data;
    };
    PlantService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return PlantService;
}());
PlantService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PlantService);

var _a;
//# sourceMappingURL=PlantService.js.map

/***/ }),

/***/ "../../../../../src/app/Services/StationFilter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchFilterPipe = (function () {
    function SearchFilterPipe() {
    }
    SearchFilterPipe.prototype.transform = function (items, value) {
        if (!items)
            return [];
        return items.filter(function (station) { return JSON.parse(station.StationObject).StationName == value; });
    };
    return SearchFilterPipe;
}());
SearchFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Pipe */])({
        name: 'searchfilter'
    })
    /*@Injectable()    */
    ,
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Pipe */])({ name: 'filterByName' })
], SearchFilterPipe);

//# sourceMappingURL=StationFilter.js.map

/***/ }),

/***/ "../../../../../src/app/Services/StationService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Configuration_MasterConfiguration__ = __webpack_require__("../../../../../src/app/Configuration/MasterConfiguration.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//the injectable attribute to generate the metadata to make the service available through 
//Dependency Injustion(DI) in other modules.
var StationService = StationService_1 = (function () {
    function StationService(http) {
        this.http = http;
    }
    // Return the instance of the service
    StationService.getInstance = function (http) {
        if (StationService_1.serviceInstance === null) {
            StationService_1.serviceInstance = new StationService_1(http);
        }
        return StationService_1.serviceInstance;
    };
    StationService.prototype.GetStationListforPlant = function (plantname) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__Configuration_MasterConfiguration__["a" /* config */].StatiotUrl)
            .map(function (res) { return _this.GetJsonData(res, plantname); });
    };
    StationService.prototype.getStationStatus = function (plantname) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__Configuration_MasterConfiguration__["a" /* config */].StatiotUrl)
            .map(function (res) { return _this.CalculateMotorStatus(res, plantname); });
    };
    StationService.prototype.GetJsonData = function (xmldata, plantname) {
        var jsonobject = xmldata.json()['value'];
        if (plantname != '')
            jsonobject = jsonobject.filter(function (x) { return x.PlantName == plantname; });
        return jsonobject;
        /*
        let finalData="[";

        if( jsonobject && jsonobject !== "null" && jsonobject !== "undefined" )
           {
               for(let i=0 ;i <jsonobject.length;i++ )
               {
                   let stObject= JSON.parse( jsonobject[i]['StationObeject']);
                   let status= jsonobject[i]['Status'];
                   let RI= jsonobject[i]['RI'];
                   let StationId= jsonobject[i]['StationId'];

                   if(( stObject && stObject !== "null" && stObject !== "undefined" ) )
                   {
                       //	finalData =finalData+ stObject;
                        
                       //		finalData =finalData+ 	'{"Id": 6, "StationName": "Station A","PlantId" :"2", "Status":"Green","RI":"4" }';
                        finalData =finalData+ '{"Id":'+ StationId +', "StationName":"'+ stObject.StationName;
                        finalData =finalData+ '","PlantId" :'+stObject.PlantId+', "Status":"'+status
                        finalData =finalData+'","RI":'+ RI+' }';
                         
                           if(i < jsonobject.length-1 )
                               {
                                   finalData =finalData+",";
                               }
                           }
                   }
               finalData =finalData+"]";
           }
                */
        //	return JSON.parse(finalData).filter(x=>x.PlantId==plantid);
    };
    /*
     private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
    */
    StationService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return null;
    };
    StationService.prototype.CalculateMotorStatus = function (res, plantname) {
        var stList = this.GetJsonData(res, plantname);
        var Green = stList.filter(function (x) { return x.Status == 'Green'; }).length;
        var Red = stList.filter(function (x) { return x.Status == 'Red'; }).length;
        var Amber = stList.filter(function (x) { return x.Status == 'Amber'; }).length;
        var result = [
            ['StationHealth', 'NumOfStation'],
            ['Green', Green],
            ['Amber', Amber],
            ['Red', Red]
        ];
        return result;
    };
    return StationService;
}());
StationService.serviceInstance = null;
StationService = StationService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], StationService);

var StationService_1, _a;
//# sourceMappingURL=StationService.js.map

/***/ }),

/***/ "../../../../../src/app/Services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        /*return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
            */
        if (username == password)
            return true;
        else
            return false;
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/graph.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GraphService = (function () {
    function GraphService() {
        /* this.ws = new WebSocket(this.url);
        this.ws.onopen = function () {
          console.log('Successfully connect WebSocket'+this.url);
        }
      
        this.ws.onerror=function(err){
          console.log(err);
        }
        */
        //private url = 'wss://' + location.host;
        this.url = 'wss://hclmotorwebapplication.azurewebsites.net';
    }
    ;
    GraphService.prototype.sendMessage = function (message) {
        //this.socket.emit('add-message', message);
        //console.log("MESSAGE SENT");
    };
    return GraphService;
}());
GraphService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GraphService);

//# sourceMappingURL=graph.service.js.map

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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n \n\n \n \n <div class=\"container\"> \n  \n     <div id='app-header' class=\"panel panel-primary \">\n         \n        <app-navbar></app-navbar>            \n        \n        <div class=\"panel-body body-container\"  >     \n            \n            \n            <router-outlet></router-outlet>\n        </div>\n\n        <div id='footer' class=\"panel-footer page-footer\">\n            <div >      </div>    \n        <a href=\"\" style='color:white;font-size:10px'>Copyright © 2017 HCL Technologies. All rights reserved.</a>\n        </div>  \n    </div>\n  \n   \n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__google_chart_google_chart_component__ = __webpack_require__("../../../../../src/app/google-chart/google-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__evolution_evolution_component__ = __webpack_require__("../../../../../src/app/evolution/evolution.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__historical_data_historical_data_component__ = __webpack_require__("../../../../../src/app/historical-data/historical-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__motor_management_motor_management_component__ = __webpack_require__("../../../../../src/app/motor-management/motor-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__forms_add_motor_form_add_motor_form_component__ = __webpack_require__("../../../../../src/app/forms/add-motor-form/add-motor-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Components_motor_list_motor_list_component__ = __webpack_require__("../../../../../src/app/Components/motor-list/motor-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Components_Plant_hclplantdashboard__ = __webpack_require__("../../../../../src/app/Components/Plant/hclplantdashboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Components_Plant_PlantComponent__ = __webpack_require__("../../../../../src/app/Components/Plant/PlantComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Components_Station_StationComponent__ = __webpack_require__("../../../../../src/app/Components/Station/StationComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Services_PlantService__ = __webpack_require__("../../../../../src/app/Services/PlantService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Services_StationService__ = __webpack_require__("../../../../../src/app/Services/StationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Services_MotorService__ = __webpack_require__("../../../../../src/app/Services/MotorService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Services_NotificationService__ = __webpack_require__("../../../../../src/app/Services/NotificationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Components_base_chart_base_chart_component__ = __webpack_require__("../../../../../src/app/Components/base-chart/base-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Components_pi_chart_pi_chart_component__ = __webpack_require__("../../../../../src/app/Components/pi-chart/pi-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Components_motor_status_chart_motor_status_chart_component__ = __webpack_require__("../../../../../src/app/Components/motor-status-chart/motor-status-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Components_notifications_notifications_component__ = __webpack_require__("../../../../../src/app/Components/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Configuration_MasterConfiguration__ = __webpack_require__("../../../../../src/app/Configuration/MasterConfiguration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Components_motor_motor_component__ = __webpack_require__("../../../../../src/app/Components/motor/motor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__Components_screen_title_screen_title_component__ = __webpack_require__("../../../../../src/app/Components/screen-title/screen-title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__Components_stationlist_stationlist_component__ = __webpack_require__("../../../../../src/app/Components/stationlist/stationlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__Components_test_ws_test_ws_component__ = __webpack_require__("../../../../../src/app/Components/test-ws/test-ws.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__Components_alert_alert_component__ = __webpack_require__("../../../../../src/app/Components/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__Components_motor_performance_welcome_motor_performance_welcome_component__ = __webpack_require__("../../../../../src/app/Components/motor-performance-welcome/motor-performance-welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__Components_motor_summary_motor_summary_component__ = __webpack_require__("../../../../../src/app/Components/motor-summary/motor-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__Components_motor_alert_motor_alert_component__ = __webpack_require__("../../../../../src/app/Components/motor-alert/motor-alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__charts_gauge_chart_gauge_chart_component__ = __webpack_require__("../../../../../src/app/charts/gauge-chart/gauge-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__charts_gauge_chart_base_gauge_chart_base_component__ = __webpack_require__("../../../../../src/app/charts/gauge-chart-base/gauge-chart-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__Components_donut_base_chart_donut_base_chart_component__ = __webpack_require__("../../../../../src/app/Components/donut-base-chart/donut-base-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__Components_custom_pipe_custom_pipe_component__ = __webpack_require__("../../../../../src/app/Components/custom-pipe/custom-pipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__Services_StationFilter__ = __webpack_require__("../../../../../src/app/Services/StationFilter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__Components_login_login_component__ = __webpack_require__("../../../../../src/app/Components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































/*const appRoutes:Routes=[
  {  path:'graph',  component:GaugeChartComponent  },
  {  path:'motor/:StationName',  component:MotorListComponent   },
  {  path:'motor',  component:MotorListComponent   },
  {  path:'MotorManagement',  component:MotorManagementComponent  },
  {  path: 'plant',  component: hclplantdashboard,  data :{ }     },
  { path: '',  redirectTo: '/plant',   pathMatch: 'full'  },
  { path: 'station/:id',      component: StationComponent }
];*/
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__google_chart_google_chart_component__["a" /* GoogleChartComponent */],
            __WEBPACK_IMPORTED_MODULE_10__evolution_evolution_component__["a" /* EvolutionComponent */],
            __WEBPACK_IMPORTED_MODULE_11__historical_data_historical_data_component__["a" /* HistoricalDataComponent */],
            __WEBPACK_IMPORTED_MODULE_12__motor_management_motor_management_component__["a" /* MotorManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_13__forms_add_motor_form_add_motor_form_component__["a" /* AddMotorFormComponent */],
            __WEBPACK_IMPORTED_MODULE_14__Components_motor_list_motor_list_component__["a" /* MotorListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__Components_Plant_hclplantdashboard__["a" /* hclplantdashboard */],
            __WEBPACK_IMPORTED_MODULE_16__Components_Plant_PlantComponent__["a" /* PlantComponent */],
            __WEBPACK_IMPORTED_MODULE_17__Components_Station_StationComponent__["a" /* StationComponent */],
            __WEBPACK_IMPORTED_MODULE_22__Components_base_chart_base_chart_component__["a" /* BaseChartComponent */],
            __WEBPACK_IMPORTED_MODULE_23__Components_pi_chart_pi_chart_component__["a" /* PiChartComponent */],
            __WEBPACK_IMPORTED_MODULE_24__Components_motor_status_chart_motor_status_chart_component__["a" /* MotorStatusChartComponent */],
            __WEBPACK_IMPORTED_MODULE_25__Components_notifications_notifications_component__["a" /* NotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_29__Components_stationlist_stationlist_component__["a" /* StationlistComponent */],
            __WEBPACK_IMPORTED_MODULE_27__Components_motor_motor_component__["a" /* MotorComponent */],
            __WEBPACK_IMPORTED_MODULE_28__Components_screen_title_screen_title_component__["a" /* ScreenTitleComponent */],
            __WEBPACK_IMPORTED_MODULE_30__Components_test_ws_test_ws_component__["a" /* TestWsComponent */],
            __WEBPACK_IMPORTED_MODULE_31__Components_alert_alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_32__Components_motor_performance_welcome_motor_performance_welcome_component__["a" /* MotorPerformanceWelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_33__Components_motor_summary_motor_summary_component__["a" /* MotorSummaryComponent */],
            __WEBPACK_IMPORTED_MODULE_34__Components_motor_alert_motor_alert_component__["a" /* MotorAlertComponent */],
            __WEBPACK_IMPORTED_MODULE_35__charts_gauge_chart_gauge_chart_component__["a" /* GaugeChartComponent */],
            __WEBPACK_IMPORTED_MODULE_36__charts_gauge_chart_base_gauge_chart_base_component__["a" /* GaugeChartBaseComponent */],
            __WEBPACK_IMPORTED_MODULE_37__Components_donut_base_chart_donut_base_chart_component__["a" /* DonutBaseChartComponent */],
            __WEBPACK_IMPORTED_MODULE_38__Components_custom_pipe_custom_pipe_component__["a" /* CustomPipeComponent */],
            __WEBPACK_IMPORTED_MODULE_39__Services_StationFilter__["a" /* SearchFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_40__Components_login_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* CollapseModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            //RouterModule.forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_41__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_toasty__["a" /* ToastyModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_18__Services_PlantService__["a" /* PlantService */], __WEBPACK_IMPORTED_MODULE_19__Services_StationService__["a" /* StationService */], __WEBPACK_IMPORTED_MODULE_21__Services_NotificationService__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_20__Services_MotorService__["a" /* MotorService */], __WEBPACK_IMPORTED_MODULE_26__Configuration_MasterConfiguration__["a" /* config */], { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* HashLocationStrategy */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charts_gauge_chart_gauge_chart_component__ = __webpack_require__("../../../../../src/app/charts/gauge-chart/gauge-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_motor_list_motor_list_component__ = __webpack_require__("../../../../../src/app/Components/motor-list/motor-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__motor_management_motor_management_component__ = __webpack_require__("../../../../../src/app/motor-management/motor-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_Plant_hclplantdashboard__ = __webpack_require__("../../../../../src/app/Components/Plant/hclplantdashboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_Station_StationComponent__ = __webpack_require__("../../../../../src/app/Components/Station/StationComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_login_login_component__ = __webpack_require__("../../../../../src/app/Components/login/login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: 'graph', component: __WEBPACK_IMPORTED_MODULE_2__charts_gauge_chart_gauge_chart_component__["a" /* GaugeChartComponent */] },
    { path: 'motor/:StationName', component: __WEBPACK_IMPORTED_MODULE_3__Components_motor_list_motor_list_component__["a" /* MotorListComponent */] },
    { path: 'motor', component: __WEBPACK_IMPORTED_MODULE_3__Components_motor_list_motor_list_component__["a" /* MotorListComponent */] },
    { path: 'MotorManagement', component: __WEBPACK_IMPORTED_MODULE_4__motor_management_motor_management_component__["a" /* MotorManagementComponent */] },
    { path: 'plant', component: __WEBPACK_IMPORTED_MODULE_5__Components_Plant_hclplantdashboard__["a" /* hclplantdashboard */], data: {} },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'station/:id', component: __WEBPACK_IMPORTED_MODULE_6__Components_Station_StationComponent__["a" /* StationComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__Components_login_login_component__["a" /* LoginComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/charts/gauge-chart-base/gauge-chart-base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaugeChartBaseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GaugeChartBaseComponent = GaugeChartBaseComponent_1 = (function () {
    function GaugeChartBaseComponent() {
        console.log("Here is GoogleChartComponent");
    }
    GaugeChartBaseComponent.prototype.getGoogle = function () {
        return google;
    };
    GaugeChartBaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit');
        if (!GaugeChartBaseComponent_1.googleLoaded) {
            GaugeChartBaseComponent_1.googleLoaded = true;
            google.charts.load('current', { packages: ['corechart', 'gauge'] });
        }
        google.charts.setOnLoadCallback(function () { return _this.drawGraph(); });
    };
    GaugeChartBaseComponent.prototype.drawGraph = function () {
        console.log("DrawGraph base class!!!! ");
    };
    GaugeChartBaseComponent.prototype.createGaugeChart = function (element) {
        google.charts.load('current', { packages: ['corechart', 'gauge'] });
        /*setTimeout(function() {
          return new google.visualization.GaugeChart(element);
        }, 2000);
    */
        return new google.visualization.Gauge(element);
    };
    GaugeChartBaseComponent.prototype.createDataTable = function (array) {
        return google.visualization.arrayToDataTable(array);
    };
    return GaugeChartBaseComponent;
}());
GaugeChartBaseComponent = GaugeChartBaseComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'chart',
        template: ""
    }),
    __metadata("design:paramtypes", [])
], GaugeChartBaseComponent);

var GaugeChartBaseComponent_1;
//# sourceMappingURL=gauge-chart-base.component.js.map

/***/ }),

/***/ "../../../../../src/app/charts/gauge-chart/gauge-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\"  >\n    <div class=\"panel-heading\" style=\"font-weight:bold; text-align: left \">{{MotorName}} - Key Process Indicator(KPI) </div>\n    <div class=\"panel-body\">\n        <div class=\"row\">\n            <div class=\"col-md-3\" >\n                <div id=\"gauge_chart\" class=\"panel-body\" style=\"width:180 px; height: 180px\" ></div>\n            </div>\n            <div class=\"col-md-3\" >\n                <div id=\"gauge_chart_velocity\" class=\"panel-body\" style=\"width:180 px; height: 180px\" ></div>\n            </div>\n            <div class=\"col-md-3\" >\n                <div id=\"gauge_chart_load\" class=\"panel-body\" style=\"width:180 px; height: 180px\" ></div>\n            </div> \n            <div class=\"col-md-3\" >\n                <div id=\"gauge_chart_current\" class=\"panel-body\" style=\"width:180 px; height: 180px\" ></div>\n            </div>        \n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/charts/gauge-chart/gauge-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_graph_service__ = __webpack_require__("../../../../../src/app/Services/graph.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_MotorService__ = __webpack_require__("../../../../../src/app/Services/MotorService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gauge_chart_base_gauge_chart_base_component__ = __webpack_require__("../../../../../src/app/charts/gauge-chart-base/gauge-chart-base.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaugeChartComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GaugeChartComponent = (function (_super) {
    __extends(GaugeChartComponent, _super);
    function GaugeChartComponent(motorService) {
        var _this = _super.call(this) || this;
        _this.motorService = motorService;
        _this.url = 'wss://hclmotorwebapplication.azurewebsites.net';
        _this.optionsVoltage = {
            redFrom: 240, redTo: 250,
            yellowFrom: 230, yellowTo: 240,
            minorTicks: 5,
            min: 0,
            max: 250
        };
        _this.optionsFrequency = {
            redFrom: 60, redTo: 70,
            yellowFrom: 50, yellowTo: 60,
            minorTicks: 5,
            min: 0,
            max: 70
        };
        _this.optionsCurrent = {
            redFrom: 8, redTo: 10,
            yellowFrom: 7, yellowTo: 8,
            minorTicks: .5,
            min: 0,
            max: 10
        };
        _this.optionsVelocity = {
            redFrom: 3, redTo: 4,
            yellowFrom: 2, yellowTo: 3,
            minorTicks: .1,
            min: 0,
            max: 4
        };
        _this.optionsLoadNoise = {
            redFrom: 80, redTo: 100,
            yellowFrom: 70, yellowTo: 100,
            minorTicks: 5,
            min: 0,
            max: 100
        };
        _this.dataArrayVoltage = [
            ['Label', 'Voltage'],
            ['Voltage', 200]
        ];
        _this.dataArrayVelocity = [
            ['Label', 'Velocity'],
            ['Voltage', 1]
        ];
        _this.dataArrayCurrent = [
            ['Label', 'Current'],
            ['Voltage', 2]
        ];
        _this.dataArrayLoad = [
            ['Label', 'Load Noise'],
            ['Load', 50]
        ];
        _this.dataArrayFrequency = [
            ['Label', 'Frequency'],
            ['Frequency', 50]
        ];
        _this.motorService.MotorDataSubject.subscribe(function (data) {
            _this.motorData = data;
            _this.MotorName = JSON.parse(_this.motorData[0].MotorObject).Name;
            console.log('Evolution Component' + JSON.parse(_this.motorData[0].MotorObject).Name);
            try {
                setTimeout(function () { return _this.drawGraph(); }, 1000);
            }
            catch (e) { }
        });
        var ws = new WebSocket(_this.url);
        var ref = _this;
        ws.onopen = function () {
            console.log('Successfully connect WebSocket' + this.url);
        };
        ws.onerror = function (err) {
            console.log(err);
        };
        ws.onmessage = function (message) {
            console.log('Message received....');
            console.log('receive message' + message.data);
            console.log('Device Name' + JSON.parse(message.data).DeviceName);
            // if(ref.MotorName==JSON.parse(message.data).DeviceName){
            var voltage = JSON.parse(message.data).DataPoints.filter(function (x) { return x.Parameter == 'Voltage'; })[0].Value;
            var current = JSON.parse(message.data).DataPoints.filter(function (x) { return x.Parameter == 'Current'; })[0].Value;
            var frequency = JSON.parse(message.data).DataPoints.filter(function (x) { return x.Parameter == 'Frequency'; })[0].Value;
            var power = JSON.parse(message.data).DataPoints.filter(function (x) { return x.Parameter == 'Load'; })[0].Value;
            var velocity = JSON.parse(message.data).DataPoints.filter(function (x) { return x.Parameter == 'Velocity'; })[0].Value;
            ref.getTemp(current, voltage, power, frequency, velocity);
            //}       
        };
        return _this;
    }
    GaugeChartComponent.prototype.drawGraph = function () {
        console.log("Gauge Graph...");
        var currentTime = this.GetTime(new Date());
        var v = [
            ['Label', 'Voltage'],
            ['Voltage', 200]
        ];
        this.dataVoltage = this.createDataTable(v);
        var frequency = [
            ['Label', 'Frequency'],
            ['Frequency', 50]
        ];
        this.dataFrequency = this.createDataTable(frequency);
        var load = [
            ['Label', 'NoiseLoad'],
            ['Load', 50]
        ];
        this.dataFrequency = this.createDataTable(frequency);
        var velocity = [
            ['Label', 'Velocity'],
            ['Velocity', 50]
        ];
        this.dataFrequency = this.createDataTable(frequency);
        var current = [
            ['Label', 'Current'],
            ['Current', 5]
        ];
        this.dataFrequency = this.createDataTable(frequency);
        this.dataLoad = this.createDataTable(load);
        this.dataCurrent = this.createDataTable(current);
        this.dataVelocity = this.createDataTable(velocity);
        this.chart = this.createGaugeChart(document.getElementById('gauge_chart'));
        this.chart.draw(this.dataVoltage, this.optionsVoltage);
        //this.chart_frequency = this.createGaugeChart(document.getElementById('gauge_chart_frequency'));
        //this.chart_frequency.draw(this.dataFrequency, this.optionsFrequency);
        this.chart_velocity = this.createGaugeChart(document.getElementById('gauge_chart_velocity'));
        this.chart_velocity.draw(this.dataVelocity, this.optionsVelocity);
        this.chart_current = this.createGaugeChart(document.getElementById('gauge_chart_current'));
        this.chart_current.draw(this.dataCurrent, this.optionsCurrent);
        this.chart_load = this.createGaugeChart(document.getElementById('gauge_chart_load'));
        this.chart_load.draw(this.dataLoad, this.optionsLoadNoise);
        var ref2 = this;
        setInterval(function () {
            //this.ref=this;
            ref2.getTemp(5 + Math.round(2 * Math.random()), 200 + Math.round(50 * Math.random()), 60 + Math.round(40 * Math.random()), 40 + Math.round(60 * Math.random()), 1 + Math.round(1 * Math.random()));
        }, 3000);
    };
    GaugeChartComponent.prototype.getTemp = function (current, voltage, power, frequency, velocity) {
        console.log('Current-->' + current + 'Voltage-->' + voltage + 'Frequency-->' + frequency);
        var timestamp = this.GetTime(new Date());
        //console.log('Websocket data'+this.data);
        this.dataVoltage.setValue(0, 1, voltage);
        this.chart.draw(this.dataVoltage, this.optionsVoltage);
        //this.dataFrequency.setValue(0, 1, frequency);
        //this.chart_frequency.draw(this.dataFrequency, this.optionsFrequency);
        this.dataCurrent.setValue(0, 1, current);
        this.chart_current.draw(this.dataCurrent, this.optionsCurrent);
        this.dataVelocity.setValue(0, 1, velocity);
        this.chart_velocity.draw(this.dataVelocity, this.optionsVelocity);
        this.dataLoad.setValue(0, 1, power);
        this.chart_load.draw(this.dataLoad, this.optionsLoadNoise);
    };
    GaugeChartComponent.prototype.GetTime = function (date) {
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        var minutes = date.getMinutes();
        var hours = date.getHours();
        var seconds = date.getSeconds();
        return hours + ":" + minutes + ":" + seconds;
    };
    return GaugeChartComponent;
}(__WEBPACK_IMPORTED_MODULE_3__gauge_chart_base_gauge_chart_base_component__["a" /* GaugeChartBaseComponent */]));
GaugeChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'gauge-chart',
        template: __webpack_require__("../../../../../src/app/charts/gauge-chart/gauge-chart.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__Services_graph_service__["a" /* GraphService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_MotorService__["a" /* MotorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_MotorService__["a" /* MotorService */]) === "function" && _a || Object])
], GaugeChartComponent);

var _a;
//# sourceMappingURL=gauge-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/evolution/evolution.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__google_chart_google_chart_component__ = __webpack_require__("../../../../../src/app/google-chart/google-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_graph_service__ = __webpack_require__("../../../../../src/app/Services/graph.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_MotorService__ = __webpack_require__("../../../../../src/app/Services/MotorService.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvolutionComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import * as sendgrid from 'sendgrid';
/*declare var sendEmail: any;
new sendEmail();
var helper = sendgrid.mail;
var key='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';

var from_email = new helper.Email("tiwarig@hcl.com");
var to_email = new helper.Email("tiwarig@hcl.com");
var subject = "Sending with SendGrid is Fun";
var content = new helper.Content("text/plain", "and easy to do anywhere, even with Node.js");
var mail = new helper.Mail(from_email, subject, to_email, content);

var sg = sendgrid(key);
var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON()
});

sg.API(request, function(error, response) {
  console.log(response.statusCode);
  console.log(response.body);
  console.log(response.headers);
})

*/
var EvolutionComponent = (function (_super) {
    __extends(EvolutionComponent, _super);
    function EvolutionComponent(toastyService, toastyConfig, motorService) {
        var _this = _super.call(this) || this;
        _this.toastyService = toastyService;
        _this.toastyConfig = toastyConfig;
        _this.motorService = motorService;
        _this.messages = [];
        _this.url = 'wss://hclmotorwebapplication.azurewebsites.net';
        _this.toastyConfig.theme = 'default';
        _this.motorService.MotorDataSubject.subscribe(function (data) {
            _this.motorData = data;
            _this.MotorName = JSON.parse(_this.motorData[0].MotorObject).Name;
            console.log('Evolution Component' + JSON.parse(_this.motorData[0].MotorObject).Name);
            try {
                setTimeout(function () { return _this.drawGraph(); }, 1000);
                //this.drawGraph();
            }
            catch (e) {
                //waits(1000);
                //this.drawGraph();
            }
        });
        _this.toastyService.default({
            title: "Toast It!",
            msg: "Mmmm, tasties...",
            showClose: true,
            timeout: 5000,
            theme: "default"
        });
        // Or create the instance of ToastOptions
        var toastOptions = {
            title: "My title",
            msg: "The message",
            showClose: true,
            timeout: 5000,
            theme: 'default',
            onAdd: function (toast) {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function (toast) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
        _this.toastyService.error(toastOptions);
        _this.currentTime = _this.GetTime(new Date());
        _this.v = [
            ['Time', 'Load', 'Leakage Current'],
            [_this.currentTime, 70, 20]
        ];
        var ref = _this;
        setInterval(function () {
            //this.ref=this;
            ref.getTemp(50 + Math.round(20 * Math.random()), 15 + Math.round(10 * Math.random()));
        }
        /*console.log('Temp'+ref1.data);
        ref1.data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
        ref1.chart.draw(ref1.data, ref1.options);
      }*/
        , 1500);
        setInterval(function () {
            //this.ref=this;
            ref.onClick('Amber', 'Motor Voltage is in warning state');
        }
        /*console.log('Temp'+ref1.data);
        ref1.data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
        ref1.chart.draw(ref1.data, ref1.options);
      }*/
        , 15000);
        console.log("Log for Wss: " + _this.url);
        //   this.socket = io(this.url);
        //   console.log("connected...");
        var ws = new WebSocket(_this.url);
        ws.onopen = function () {
            console.log('Successfully connect WebSocket' + this.url);
        };
        ws.onerror = function (err) {
            console.log(err);
        };
        ws.onmessage = function (message) {
            console.log('Message received....');
            console.log('receive message' + message.data);
            console.log('Device Name' + JSON.parse(message.data).DeviceName);
            //if(ref.MotorName==JSON.parse(message.data).DeviceName){
            ref.getTemp(JSON.parse(message.data).DataPoints.filter(function (x) { return x.Parameter == 'Velocity'; })[0].Value, JSON.parse(message.data).DataPoints.filter(function (x) { return x.Parameter == 'Load'; })[0].Value);
            //Showing the alert for motor
            console.log(JSON.parse(message.data).MotorStatus);
            if (JSON.parse(message.data).MotorStatus == "Red") {
                ref.onClick('Red', 'Motor Velocity is in critical state');
            }
            if (JSON.parse(message.data).MotorStatus == "Amber") {
                ref.onClick('Amber', 'Motor Voltage is in warning state');
            }
            //}
        };
        return _this;
    }
    EvolutionComponent.prototype.notify = function (item) {
    };
    EvolutionComponent.prototype.drawGraph = function () {
        console.log("DrawGraph Evolution...");
        var currentTime = this.GetTime(new Date());
        var v = [
            ['Time', 'Velocity', 'Load'],
            [currentTime, 0, 21]
        ];
        this.data = this.createDataTable(v);
        this.options = {
            title: 'Load Vs Leakage Current',
            chartArea: { width: "1000 px", height: "1000 px" },
            hAxis: {
                title: 'Time',
                minValue: 0
            },
            vAxis: {
                title: 'Value'
            }
        };
        this.chart = this.createBarChart(document.getElementById('monitor_chart'));
        this.chart.draw(this.data, this.options);
        var ref1 = this;
    };
    EvolutionComponent.prototype.getTemp = function (temperature, humidity) {
        //var temperature = (Math.random() * (35 - 30) + 30);
        //var humidity = (Math.random() * (40 - 15) + 15);
        var timestamp = this.GetTime(new Date());
        //this.data.addRow([timestamp, temperature, humidity]);
        this.v.push([timestamp, temperature, humidity]);
        this.data = this.createDataTable(this.v);
        this.chart = this.createBarChart(document.getElementById('monitor_chart'));
        this.chart.draw(this.data, this.options);
    };
    EvolutionComponent.prototype.GetTime = function (date) {
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        var minutes = date.getMinutes();
        var hours = date.getHours();
        var seconds = date.getSeconds();
        return hours + ":" + minutes + ":" + seconds;
    };
    EvolutionComponent.prototype.onClick = function (arg, content) {
        var msg = 'Critical Alert - ' + content;
        if (arg == 'Amber')
            msg = 'Warning Alert - ' + content;
        //this.drawGraph();
        // Or create the instance of ToastOptions
        var toastOptions = {
            title: "Motor Alert",
            msg: msg,
            showClose: true,
            timeout: 5000,
            theme: 'default',
            onAdd: function (toast) {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function (toast) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
        if (arg == 'Red')
            this.toastyService.error(toastOptions);
        else
            this.toastyService.warning(toastOptions);
        var item = {};
        item['status'] = arg;
        item['content'] = content;
        this.motorService.setNotification(item);
    };
    return EvolutionComponent;
}(__WEBPACK_IMPORTED_MODULE_1__google_chart_google_chart_component__["a" /* GoogleChartComponent */]));
EvolutionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'linechart',
        template: __webpack_require__("../../../../../src/app/evolution/lineChart.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__Services_graph_service__["a" /* GraphService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["b" /* ToastyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["c" /* ToastyConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["c" /* ToastyConfig */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__Services_MotorService__["a" /* MotorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__Services_MotorService__["a" /* MotorService */]) === "function" && _c || Object])
], EvolutionComponent);

var _a, _b, _c;
//# sourceMappingURL=evolution.component.js.map

/***/ }),

/***/ "../../../../../src/app/evolution/lineChart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\" style=\"text-align: left; font-weight:bold\">\n        {{MotorName}} - Velocity vs Load <ng2-toasty></ng2-toasty> \n\n\n        <!--<button (click)=\"notify()\" name=\"GenerateNotification\">Generate Notification</button>-->\n    </div>\n    <div style=\"width:400 px; height: 500px\" class=\"panel-body\" id=\"monitor_chart\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/forms/add-motor-form/add-motor-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forms/add-motor-form/add-motor-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div [hidden]=\"submitted\">\n  \n  \n  <h1>Motor Provisioning</h1>\n    <form style=\"width:97%; align-items: center\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" style=\"width:80%\">\n\n       <div class=\"form-group\" >\n  <label for=\"station\">Select a Station</label>\n  <select class=\"form-control\"  id=\"stationName\"    name=\"StationName\" [(ngModel)]=\"model.StationName\" required>\n    <option *ngFor=\"let station of StationList\">{{JSON.parse(station.StationObject).StationName}}</option>\n   </select>\n       </div>\n        <div class=\"form-group\" >\n        <label for=\"name\">Motor Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"name\" name=\"Name\" [(ngModel)]=\"model.Name\" required #Name=\"ngModel\" >\n      </div>\n\n      <div [hidden]=\"Name.valid || Name.pristine\" class=\"alert alert-danger\">\n          Motor Name is required\n      </div>\n      <div class=\"form-group\">\n        <label for=\"Motor Serial Number\">Motor Serial Number</label>\n        <input type=\"text\" class=\"form-control\" id=\"SerialNumber\" name=\"SerialNumber\" [(ngModel)]=\"model.SerialNumber\" required #SerialNumber=\"ngModel\">\n      </div>\n\n      <div [hidden]=\"SerialNumber.valid || SerialNumber.pristine\" class=\"alert alert-danger\">\n          Serial Number is required\n      </div>\n\n       <div class=\"form-group\">\n        <label for=\"Motor Location\">Motor Location</label>\n        <input type=\"text\" class=\"form-control\" id=\"location\" [(ngModel)]=\"model.Location\" name=\"Location\">\n      </div>\n       <div class=\"form-group\">\n        <label for=\"Motor Description\">Motor Description</label>\n        <input type=\"text\" class=\"form-control\" id=\"description\" [(ngModel)]=\"model.Description\" name=\"Description\">\n      </div>      \n       \n\n      <div class=\"form-group\">\n        <label for=\"frequency\">Motor Frequency</label>\n        <input type=\"text\" class=\"form-control\" id=\"frequency\" name=\"Frequency\" [(ngModel)]=\"model.Frequency\" required #Frequency=\"ngModel\" >\n      </div>\n\n       <div class=\"form-group\">\n        <label for=\"power\">Motor Power(HP)</label>\n        <input type=\"text\" class=\"form-control\" id=\"power\" name=\"Power\" [(ngModel)]=\"model.Power\" required #Power=\"ngModel\" >\n      </div>\n\n       <div class=\"form-group\">\n        <label for=\"RatedCurrent\">Motor Rated Current</label>\n        <input type=\"text\" class=\"form-control\" id=\"RatedCurrent\" name=\"RatedCurrent\" [(ngModel)]=\"model.RatedCurrent\" required #RatedCurrent=\"ngModel\" >\n      </div>\n\n       <div class=\"form-group\">\n        <label for=\"RatedVoltage\">Motor Rated Voltage</label>\n        <input type=\"text\" class=\"form-control\" id=\"RatedVoltage\" name=\"RatedVoltage\" [(ngModel)]=\"model.RatedVoltage\" required #RatedVoltage=\"ngModel\" >\n      </div>\n      <div class=\"form-group\">\n        <label for=\"LeakageCurrentLimit\">Motor Leakage Current Limit</label>\n        <input type=\"text\" class=\"form-control\" id=\"LeakageCurrentLimit\" name=\"LeakageCurrentLimit\" [(ngModel)]=\"model.LeakageCurrentLimit\" required #LeakageCurrentLimit=\"ngModel\" >\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"Motor Location\">Choose Motor Image</label><br/>\n        <input name=\"options\" ng-control=\"options\" type=\"radio\" [value]=\"fullImagePath1\"  [(ngModel)]=\"model.Image\" >\n        <img [src]=\"fullImagePath1\" width=\"7%\">\n        <input name=\"options\" ng-control=\"options\" type=\"radio\" [value]=\"fullImagePath2\" [(ngModel)]=\"model.Image\" >\n        <img [src]=\"fullImagePath2\" width=\"7%\">\n        <input name=\"options\" ng-control=\"options\" type=\"radio\" [value]=\"fullImagePath3\" [(ngModel)]=\"model.Image\" >\n        <img [src]=\"fullImagePath3\" width=\"7%\">\n        <input name=\"options\" ng-control=\"options\" type=\"radio\" [value]=\"fullImagePath4\" [(ngModel)]=\"model.Image\" >\n        <img [src]=\"fullImagePath4\" width=\"7%\">\n      </div>\n\n\n\n      <button type=\"submit\" class=\"btn btn-success\" (onclick)=\"onSubmit()\">Submit</button>\n \n    </form>\n  </div>\n\n<div [hidden]=\"!submitted\">\n  <h2>Motor Added Successfully with following detail:</h2>\n  <div class=\"row\">\n    <div class=\"col-xs-3\">Station</div>\n    <div class=\"col-xs-9  pull-left\">{{ model.StationName }}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-3\">Motor Name</div>\n    <div class=\"col-xs-9 pull-left\">{{ model.Name }}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-3\">Serial Number</div>\n    <div class=\"col-xs-9 pull-left\">{{ model.SerialNumber }}</div>\n  </div>\n    <div class=\"row\">\n    <div class=\"col-xs-3\">Location</div>\n    <div class=\"col-xs-9 pull-left\">{{ model.Location }}</div>\n  </div>\n    <div class=\"row\">\n    <div class=\"col-xs-3\">Description</div>\n    <div class=\"col-xs-9 pull-left\">{{ model.Description }}</div>\n  </div>\n  <br>\n  <button class=\"btn btn-primary\" (click)=\"submitted=false\">Edit</button>\n</div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/forms/add-motor-form/add-motor-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Entities_motor__ = __webpack_require__("../../../../../src/app/Entities/motor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_StationService__ = __webpack_require__("../../../../../src/app/Services/StationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Configuration_MasterConfiguration__ = __webpack_require__("../../../../../src/app/Configuration/MasterConfiguration.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMotorFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var tableService;
var AddMotorFormComponent = (function () {
    function AddMotorFormComponent(stationService) {
        this.stationService = stationService;
        this.fullImagePath1 = "/assets/images/1.jpg";
        this.fullImagePath2 = "/assets/images/3.jpg";
        this.fullImagePath3 = "/assets/images/4.jpg";
        this.fullImagePath4 = "/assets/images/5.jpg";
        this.JSON = JSON;
        this.GetStationList();
    }
    AddMotorFormComponent.prototype.ngOnInit = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_1__Entities_motor__["a" /* Motor */]("", "", "", "", "", "HCLPLANT", "", "", "", "", "", "");
        console.log(this.model);
        this.submitted = false;
    };
    AddMotorFormComponent.prototype.GetStationList = function () {
        var _this = this;
        this.stationService.GetStationListforPlant(__WEBPACK_IMPORTED_MODULE_3__Configuration_MasterConfiguration__["a" /* config */].PlantName).subscribe(function (res) {
            _this.StationList = res;
        });
    };
    AddMotorFormComponent.prototype.onSubmit = function (addMotorForm) {
        var tableUri = 'https://hclpocstorageaccount.table.core.windows.net:443/Motor';
        tableService = new AzureStorage.createTableServiceWithSas(tableUri, '?st=2017-09-07T07%3A29%3A00Z&se=2018-08-31T07%3A29%3A00Z&sp=raud&sv=2016-05-31&tn=motor&sig=EH4rL1HVvVTTSuVuzJMQMpfSWfDRPP8x8X85hSgn5CY%3D');
        this.rowKey = Date.now() + "";
        var entity = {
            PartitionKey: { '_': 'partitionKey' },
            RowKey: { '_': this.rowKey },
            StationName: { '_': this.model.StationName },
            PlantName: { '_': this.model.PlantName },
            Status: { '_': "Green" },
            MotorObject: { '_': JSON.stringify(this.model) }
            //dateValue: entGen.DateTime(new Date(Date.UTC(2011, 10, 25))),
            //complexDateValue: entGen.DateTime(new Date(Date.UTC(2013, 02, 16, 01, 46, 20)))
        };
        console.log("Data to be inserted" + JSON.stringify(this.model));
        tableService.insertEntity('Motor', entity, function (error, result, response) {
            if (!error) {
                console.log('Success');
            }
            else
                console.log(error);
        });
        this.submitted = true;
    };
    Object.defineProperty(AddMotorFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    return AddMotorFormComponent;
}());
AddMotorFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'motor-form',
        template: __webpack_require__("../../../../../src/app/forms/add-motor-form/add-motor-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/forms/add-motor-form/add-motor-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_StationService__["a" /* StationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_StationService__["a" /* StationService */]) === "function" && _a || Object])
], AddMotorFormComponent);

var _a;
//# sourceMappingURL=add-motor-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/google-chart/google-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoogleChartComponent = GoogleChartComponent_1 = (function () {
    function GoogleChartComponent() {
        console.log("Here is GoogleChartComponent");
    }
    GoogleChartComponent.prototype.getGoogle = function () {
        return google;
    };
    GoogleChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit');
        if (!GoogleChartComponent_1.googleLoaded) {
            GoogleChartComponent_1.googleLoaded = true;
            google.charts.load('current', { packages: ['corechart'] });
        }
        google.charts.setOnLoadCallback(function () { return _this.drawGraph(); });
    };
    GoogleChartComponent.prototype.drawGraph = function () {
        console.log("DrawGraph base class!!!! ");
    };
    GoogleChartComponent.prototype.createBarChart = function (element) {
        return new google.visualization.LineChart(element);
    };
    GoogleChartComponent.prototype.createGaugeChart = function (element) {
        google.charts.load('current', { packages: ['corechart', 'gauge'] });
        /*setTimeout(function() {
          return new google.visualization.GaugeChart(element);
        }, 2000);
    */
        return new google.visualization.Gauge(element);
    };
    GoogleChartComponent.prototype.createDataTable = function (array) {
        return google.visualization.arrayToDataTable(array);
    };
    return GoogleChartComponent;
}());
GoogleChartComponent = GoogleChartComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'chart',
        template: ""
    }),
    __metadata("design:paramtypes", [])
], GoogleChartComponent);

var GoogleChartComponent_1;
//# sourceMappingURL=google-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/historical-data/historical-data.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/historical-data/historical-data.component.html":
/***/ (function(module, exports) {

module.exports = "<app-motor-list></app-motor-list>\n"

/***/ }),

/***/ "../../../../../src/app/historical-data/historical-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricalDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HistoricalDataComponent = (function () {
    function HistoricalDataComponent() {
    }
    HistoricalDataComponent.prototype.ngOnInit = function () {
    };
    return HistoricalDataComponent;
}());
HistoricalDataComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-historical-data',
        template: __webpack_require__("../../../../../src/app/historical-data/historical-data.component.html"),
        styles: [__webpack_require__("../../../../../src/app/historical-data/historical-data.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HistoricalDataComponent);

//# sourceMappingURL=historical-data.component.js.map

/***/ }),

/***/ "../../../../../src/app/motor-management/motor-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/motor-management/motor-management.component.html":
/***/ (function(module, exports) {

module.exports = "<motor-form></motor-form>"

/***/ }),

/***/ "../../../../../src/app/motor-management/motor-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotorManagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MotorManagementComponent = (function () {
    function MotorManagementComponent() {
    }
    MotorManagementComponent.prototype.ngOnInit = function () {
    };
    return MotorManagementComponent;
}());
MotorManagementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-motor-management',
        template: __webpack_require__("../../../../../src/app/motor-management/motor-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/motor-management/motor-management.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MotorManagementComponent);

//# sourceMappingURL=motor-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav  class=\"navbar navbar-inverse nav-bar-header \">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" (click)=\"toggleState()\" class=\"navbar-toggle collapsed pull-left\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button> <!-- #1 -->\n            \n            <a routerLink=\"/motor\" class=\"navbar-brand\">Motor Remote Monitoring System</a>\n        </div>\n         <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'in': isIn }\"> \n            <ul class=\"nav navbar-nav\">\n                <!--<li><a routerLink=\"/historical\">Motor Historical Data</a></li>\n               <li><a>Station Management</a></li>-->\n               <li><a routerLink=\"/plant\">Plant Performance Dashboard</a> </li>\n               <li><a routerLink=\"/motor\">Motor Performance Dashboard</a></li>\n               <li><a routerLink=\"/MotorManagement\">Motor Management</a></li>\n                \n            </ul>\n        </div> <!-- #2 -->\n    </div>\n</nav>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
        this.isCollapsed = true;
        this.isIn = false; // store state
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.toggleState = function () {
        console.log("Test");
        console.log(this.isIn);
        var bool = this.isIn;
        this.isIn = bool === false ? true : false;
        console.log(this.isIn);
        console.log("Test1");
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map