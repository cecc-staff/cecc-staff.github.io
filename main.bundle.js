webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

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

module.exports = "\n<app-navbar></app-navbar>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export APP_DATE_FORMATS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_storage__ = __webpack_require__("../../../../angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_items_items_component__ = __webpack_require__("../../../../../src/app/components/items/items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_add_item_add_item_component__ = __webpack_require__("../../../../../src/app/components/add-item/add-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_AppDateAdapter__ = __webpack_require__("../../../../../src/app/services/AppDateAdapter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_items_delete_item_component__ = __webpack_require__("../../../../../src/app/components/items/delete-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pto_pto_component__ = __webpack_require__("../../../../../src/app/pto/pto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_pto_service__ = __webpack_require__("../../../../../src/app/services/pto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pto_list_pto_list_component__ = __webpack_require__("../../../../../src/app/pto-list/pto-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pto_search_pto_search_component__ = __webpack_require__("../../../../../src/app/pto-search/pto-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pto_new_pto_new_component__ = __webpack_require__("../../../../../src/app/pto-new/pto-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pto_preview_pto_preview_component__ = __webpack_require__("../../../../../src/app/pto-preview/pto-preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__cas_list_cas_list_component__ = __webpack_require__("../../../../../src/app/cas-list/cas-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__help_help_component__ = __webpack_require__("../../../../../src/app/help/help.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var APP_DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'numeric' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_items_items_component__["a" /* ItemsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_add_item_add_item_component__["a" /* AddItemComponent */],
                __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_items_delete_item_component__["a" /* DeleteItemComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pto_pto_component__["a" /* PtoComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pto_list_pto_list_component__["a" /* PtoListComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pto_search_pto_search_component__["a" /* PtoSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_25__pto_new_pto_new_component__["a" /* PtoNewComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pto_preview_pto_preview_component__["a" /* PtoPreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_27__cas_list_cas_list_component__["a" /* CasListComponent */],
                __WEBPACK_IMPORTED_MODULE_28__help_help_component__["a" /* HelpComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_16__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__environments_environment_prod__["a" /* environment */].firebase, 'cecc-staff'),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_19__angular_material_core__["c" /* DateAdapter */], useClass: __WEBPACK_IMPORTED_MODULE_18__services_AppDateAdapter__["a" /* AppDateAdapter */] },
                { provide: __WEBPACK_IMPORTED_MODULE_19__angular_material_core__["f" /* MAT_DATE_FORMATS */], useValue: APP_DATE_FORMATS },
                { provide: __WEBPACK_IMPORTED_MODULE_19__angular_material_core__["g" /* MAT_DATE_LOCALE */], useValue: 'en-GB' },
                __WEBPACK_IMPORTED_MODULE_13__services_item_service__["a" /* ItemService */], __WEBPACK_IMPORTED_MODULE_22__services_pto_service__["a" /* PTOService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_20__components_items_delete_item_component__["a" /* DeleteItemComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/cas-list/cas-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".casualities {\n    width: 100%;\n}\n.ptono-head {\n    width: 9%;\n    font-size: 16px;\n    text-align: center;\n}\n.ptono {\n    width: 9%;\n    font-size: 12px;\n    text-align: left;\n}\n.unit-head {\n    width: 17%;\n    font-size: 16px;\n    text-align: left;\n}\n.unit {\n    width: 17%;\n    font-size: 12px;\n    text-align: left;\n}\n.pto-date-head {\n    width: 10%;\n    font-size: 16px;\n    text-align: center;\n}\n.pto-date {\n    width: 10%;\n    font-size: 12px;\n    text-align: left;\n}\n.cas-date-head {\n    width: 14%;\n    font-size: 16px;\n    text-align: left;\n}\n.cas-date {\n    width: 14%;\n    font-size: 12px;\n    text-align: left;\n}\n.particular-head {\n    width: 50%;\n    font-size: 16px;\n    text-align: center;\n}\n.particular {\n    width: 50%;\n    font-size: 12px;\n    text-align: left;\n}\n.head {\n    font-weight: bold;\n}\nh2 {\n    text-align: center;\n}\n.filler{\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n.button-print {\n    margin-top: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cas-list/cas-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"casualities\">\n  <mat-card>\n    <h2>Casualities of<br>MES No.: {{mesno}}, {{name}}, {{category}}<br>From: {{dateFrom}}  To: {{dateUpto}}</h2>\n  </mat-card>\n\n  <mat-card>\n    <div class=\"head\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div class=\"ptono-head\">\n            PTO No.\n            <a href=\"#\"  (click)=\"onSort(0)\">\n                <i class=\"fa fa-sort\" *ngIf=\"sortCol !== 0\"></i>\n                <i class=\"fa fa fa-sort-numeric-asc\" *ngIf=\"(sortCol === 0 && sortUp)\"></i>\n                <i class=\"fa fa fa-sort-numeric-desc\" *ngIf=\"(sortCol === 0 && !sortUp)\"></i>\n            </a>  \n        </div>\n        <div class=\"pto-date-head\">\n            PTO Date\n            <a href=\"#\"  (click)=\"onSort(1)\">\n                <i class=\"fa fa-sort\" *ngIf=\"sortCol !== 1\"></i>\n                <i class=\"fa fa fa-sort-numeric-asc\" *ngIf=\"(sortCol === 1 && sortUp)\"></i>\n                <i class=\"fa fa fa-sort-numeric-desc\" *ngIf=\"(sortCol === 1 && !sortUp)\"></i>\n            </a> \n        </div>\n        <div class=\"unit-head\">\n            Unit / Station\n            <a href=\"#\"  (click)=\"onSort(2)\">\n                <i class=\"fa fa-sort\" *ngIf=\"sortCol !== 2\"></i>\n                <i class=\"fa fa fa-sort-alpha-asc\" *ngIf=\"(sortCol === 2 && sortUp)\"></i>\n                <i class=\"fa fa fa-sort-alpha-desc\" *ngIf=\"(sortCol === 2 && !sortUp)\"></i>\n            </a> \n        </div>\n        <div class=\"cas-date-head\">\n            Casuality Date\n            <a href=\"#\"  (click)=\"onSort(3)\">\n                <i class=\"fa fa-sort\" *ngIf=\"sortCol !== 3\"></i>\n                <i class=\"fa fa fa-sort-numeric-asc\" *ngIf=\"(sortCol === 3 && sortUp)\"></i>\n                <i class=\"fa fa fa-sort-numeric-desc\" *ngIf=\"(sortCol === 3 && !sortUp)\"></i>\n            </a> \n        </div>\n        <div class=\"particular-head\">\n            Particular\n            <a href=\"#\"  (click)=\"onSort(4)\">\n                <i class=\"fa fa-sort\" *ngIf=\"sortCol !== 4\"></i>\n                <i class=\"fa fa fa-sort-alpha-asc\" *ngIf=\"(sortCol === 4 && sortUp)\"></i>\n                <i class=\"fa fa fa-sort-alpha-desc\" *ngIf=\"(sortCol === 4 && !sortUp)\"></i>\n            </a> \n        </div>\n    </div>\n    <hr>\n    <mat-nav-list>\n        <a mat-list-item *ngFor=\"let cas of casualities\" (click)=\"showDetails(cas)\">\n            <div class=\"ptono\">\n                {{ cas.PTO_No }} / {{ cas.PTO_YEAR }}\n            </div>\n            <div class=\"pto-date\">\n                {{ cas.PTO_DATE }}\n            </div>\n            <div class=\"unit\">\n                {{ cas.PTO_UNIT }} <br> {{ cas.PTO_STATION }}\n            </div>\n            <div class=\"cas-date\">\n                {{ cas.DATE }}\n            </div>\n            <div class=\"particular\">\n                {{ cas.PARTICULAR }}\n            </div>\n        </a>\n    </mat-nav-list>\n  </mat-card>\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <span class=\"filler\"></span>\n    <div class=\"button-print\">\n        <button mat-raised-button (click)=\"print()\"color=\"primary\">Print</button>\n    </div>\n  </div>    \n</div>"

/***/ }),

/***/ "../../../../../src/app/cas-list/cas-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CasListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pto_service__ = __webpack_require__("../../../../../src/app/services/pto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf_dist_jspdf_min__ = __webpack_require__("../../../../jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf_dist_jspdf_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jspdf_dist_jspdf_min__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CasListComponent = (function () {
    function CasListComponent(ptoService) {
        this.ptoService = ptoService;
        this.casualities = [];
        this.detailClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    CasListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Cas ngOnInit Called!');
        this.casSubscription = this.ptoService.getPtos().subscribe(function (ptos) {
            console.log('Nos. of ptos : ', ptos.length);
            _this.ptos = ptos;
            _this.casSummarySubscribed();
        });
    };
    CasListComponent.prototype.ngOnDestroy = function () {
        this.casSubscription.unsubscribe();
    };
    CasListComponent.prototype.casSummarySubscribed = function () {
        var _this = this;
        this.ptoService.casSummary.subscribe(function (obj) {
            _this.casualities = [];
            console.log('casSummary subscribed');
            _this.mesno = obj.mesno;
            _this.name = 'Not Found';
            _this.category = '';
            _this.dateFrom = obj.from;
            _this.dateUpto = obj.upto;
            for (var _i = 0, _a = _this.ptos; _i < _a.length; _i++) {
                var pto = _a[_i];
                for (var _b = 0, _c = pto.CASUALITIES; _b < _c.length; _b++) {
                    var cas = _c[_b];
                    if (+cas.MES_No === +obj.mesno) {
                        var cas_pto = __assign({}, cas, { PTO_No: pto.PTO_No, PTO_YEAR: pto.YEAR, PTO_UNIT: pto.UNIT, PTO_STATION: pto.STATION, PTO_DATE: pto.DATE });
                        _this.casualities.push(cas_pto);
                        _this.name = cas_pto.NAME;
                        _this.category = cas_pto.CATEGORY;
                        // console.log('Date From/Upto : ', pto.DATE + ' ' + this.dateFrom);
                    }
                }
            }
            if (_this.dateFrom) {
                _this.casualities = _this.casualities.filter(function (value) { return value.PTO_DATE >= _this.dateFrom; });
            }
            if (_this.dateUpto) {
                _this.casualities = _this.casualities.filter(function (value) { return value.PTO_DATE <= _this.dateUpto; });
            }
        });
    };
    CasListComponent.prototype.onSort = function (index) {
        this.sortCol = index;
        this.sortUp = !this.sortUp;
        var keys = ['PTO_No', 'PTO_DATE', 'PTO_UNIT', 'DATE', 'PARTICULAR'];
        if (index > 0) {
            this.sortOnElement(keys[index]);
        }
        else {
            this.sortOnPTONumber();
        }
    };
    CasListComponent.prototype.sortOnPTONumber = function () {
        // this.sortUp = !this.sortUp;
        if (this.sortUp) {
            this.casualities.sort(function (a, b) {
                var x = a['PTO_YEAR'];
                var y = b['PTO_YEAR'];
                if (x < y) {
                    return -1;
                }
                if (x > y) {
                    return 1;
                }
                if (x === y) {
                    var p = a['PTO_No'];
                    var q = b['PTO_No'];
                    if (p < q) {
                        return -1;
                    }
                    if (p > q) {
                        return 1;
                    }
                    return 0;
                }
            });
        }
        else {
            this.casualities.sort(function (a, b) {
                var x = a['PTO_YEAR'];
                var y = b['PTO_YEAR'];
                if (x < y) {
                    return 1;
                }
                if (x > y) {
                    return -1;
                }
                if (x === y) {
                    var p = a['PTO_No'];
                    var q = b['PTO_No'];
                    if (p < q) {
                        return 1;
                    }
                    if (p > q) {
                        return -1;
                    }
                    return 0;
                }
            });
        }
    };
    CasListComponent.prototype.sortOnElement = function (key) {
        // this.sortUp = !this.sortUp;
        if (this.sortUp) {
            this.casualities.sort(function (a, b) {
                var x = a[key];
                var y = b[key];
                if (x < y) {
                    return -1;
                }
                if (x > y) {
                    return 1;
                }
                return 0;
            });
        }
        else {
            this.casualities.sort(function (a, b) {
                var x = a[key];
                var y = b[key];
                if (x < y) {
                    return 1;
                }
                if (x > y) {
                    return -1;
                }
                return 0;
            });
        }
    };
    CasListComponent.prototype.showDetails = function (cas) {
        var _this = this;
        this.detailClicked.emit();
        var pto = {
            PTO_No: cas.PTO_No,
            YEAR: cas.PTO_YEAR,
            UNIT: cas.PTO_UNIT,
            STATION: cas.PTO_STATION,
            DATE: cas.PTO_DATE,
            CASUALITIES: []
        };
        this.ptoService.filterPtos(pto).subscribe(function (ptos) {
            _this.ptoService.pto = ptos[0];
        });
    };
    CasListComponent.prototype.print = function () {
        __WEBPACK_IMPORTED_MODULE_2_jspdf_dist_jspdf_min___default.a.API.hline = function (x, y, width) {
            this.lines([[width, 0]], x, y, [1, 1], 'S', false);
        };
        __WEBPACK_IMPORTED_MODULE_2_jspdf_dist_jspdf_min___default.a.API.heading = function (mesno, name, category, dateFrom, dateUpto) {
            this.setFontSize(16);
            this.text(['Casualities of', 'MES No.: ' + mesno + ', ' + name + ', ' + category,
                'From : ' + dateFrom + '   To : ' + dateUpto], 50, 20);
            this.setLineWidth(0.3);
            this.hline(15, 38, 180);
            this.hline(15, 55, 180);
            this.setFontSize(10);
            this.text('PTO No.', 15, 48);
            this.text('PTO Date', 35, 48);
            this.text(['Unit', 'Station'], 60, 48);
            this.text(['Casuality', 'Date'], 80, 48);
            this.text('Particulars', 140, 48);
        };
        var doc = new __WEBPACK_IMPORTED_MODULE_2_jspdf_dist_jspdf_min___default.a();
        doc.heading(this.mesno, this.name, this.category, this.dateFrom, this.dateUpto);
        var partY = 60;
        for (var _i = 0, _a = this.casualities; _i < _a.length; _i++) {
            var cas = _a[_i];
            var arrPart = this.split(cas.PARTICULAR, 55);
            doc.text(cas.PTO_No + '/' + cas.PTO_YEAR, 15, partY);
            doc.text(cas.PTO_DATE, 35, partY);
            doc.text([cas.PTO_UNIT, cas.PTO_STATION], 60, partY);
            doc.text(cas.DATE, 80, partY);
            doc.text(arrPart, 105, partY);
            partY = arrPart.length < 3 ? partY + 15 : partY + arrPart.length * 5;
            if (partY > 260) {
                doc.addPage();
                doc.heading();
                partY = 60;
            }
        }
        doc.save(this.mesno + '_' + this.dateFrom + '_' + this.dateUpto + '.pdf');
    };
    CasListComponent.prototype.split = function (str, segment) {
        var index = 0;
        var arrStr = [];
        var part;
        while (index < str.length) {
            part = str.substr(index, segment);
            arrStr.push(part);
            index += segment;
        }
        return arrStr;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], CasListComponent.prototype, "detailClicked", void 0);
    CasListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-cas-list',
            template: __webpack_require__("../../../../../src/app/cas-list/cas-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cas-list/cas-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_pto_service__["a" /* PTOService */]])
    ], CasListComponent);
    return CasListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-item/add-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.input {\n    width: 10%;\n}\n.input-mesno {\n    width: 5%;\n}\n.input-name {\n    width: 17%;\n}\n.input-category {\n    width: 8%;\n}\nmat-form-field {\n    width: 95%;\n}\na {\n    padding: 0px 25px;\n}\n.filler {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\nlabel {\n    font-weight: bold;\n    color: black;\n}\n.btn {\n    color: white;\n    background-color: rgb(50, 162, 250);\n    font-weight: bold;\n}\nh5 {\n    text-align: center;\n    font-size: 14px;\n    font-weight: bold;\n    margin: 0px;\n    padding: 0px;\n}\n.row {\n    margin: 0px;\n    padding: 0px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-item/add-item.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-card class=\"example-card\">\n    <mat-card-content>\n      <form (ngSubmit)=\"onSubmit()\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n          <div>\n            <button mat-raised-button type=\"submit\" color=\"primary\">Search</button>\n          </div>\n          <span class=\"filler\"></span>\n          <div>\n            <h5>Showing {{itemService.count}} records</h5>\n            <h5 *ngIf=\"searchStr\">searched on {{ searchStr }}</h5>\n          </div>\n          <span class=\"filler\"></span>\n          <div>\n              <a href=\"http://mes.gov.in/\" target=\"_blank\">\n                  <img [src]=\"logoPath\" class=\"img-responsive\" style=\"max-height:75px\">\n              </a>   \n          </div>   \n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div class=\"input-mesno\">\n              <mat-form-field>\n                <input matInput placeholder=\"MES No\" type=\"text\" [(ngModel)]=\"item.MES_No\" name=\"mesno\">\n              </mat-form-field>\n              <a href=\"#\"  (click)=\"onSort(0)\">\n                  <i class=\"fa fa-sort\" *ngIf=\"sortCol !== 0\"></i>\n                  <i class=\"fa fa fa-sort-numeric-asc\" *ngIf=\"(sortCol === 0 && sortUp)\"></i>\n                  <i class=\"fa fa fa-sort-numeric-desc\" *ngIf=\"(sortCol === 0 && !sortUp)\"></i>\n              </a>   \n            </div>\n\n            <div class=\"input-name\">\n              <mat-form-field>\n                <input matInput placeholder=\"Name\" type=\"text\" [(ngModel)]=\"item.NAME\" name=\"name\">\n              </mat-form-field>\n              <a href=\"#\"  (click)=\"onSort(1)\">\n                  <i class=\"fa fa fa-sort\" *ngIf=\"sortCol !== 1\"></i>\n                  <i class=\"fa fa fa-sort-alpha-asc\" *ngIf=\"(sortCol === 1 && sortUp)\"></i>\n                  <i class=\"fa fa fa-sort-alpha-desc\" *ngIf=\"(sortCol === 1 && !sortUp)\"></i>\n              </a>\n            </div>\n\n            <div class=\"input-category\">\n              <mat-form-field>\n                  <mat-select placeholder=\"Category\" [(ngModel)]=\"item.CATEGORY\" name=\"category\">\n                    <mat-option>None</mat-option>\n                    <mat-option *ngFor=\"let category of categories\" [value]=\"category\">\n                      {{ category }}\n                    </mat-option>\n                  </mat-select>\n              </mat-form-field>\n              <a href=\"#\"  (click)=\"onSort(2)\">\n                <i class=\"fa fa fa-sort\" *ngIf=\"sortCol !== 2\"></i>\n                <i class=\"fa fa fa-sort-alpha-asc\" *ngIf=\"(sortCol === 2 && sortUp)\"></i>\n                <i class=\"fa fa fa-sort-alpha-desc\" *ngIf=\"(sortCol === 2 && !sortUp)\"></i>\n              </a>\n            </div>\n\n            <div class=\"input\">\n              <mat-form-field>\n                <input matInput [matDatepicker]=\"picker1\" placeholder=\"Dt. of Birth\" [(ngModel)]=\"item.DOB\" name=\"dob\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                <mat-datepicker #picker1></mat-datepicker>\n              </mat-form-field>\n              <a href=\"#\"  (click)=\"onSort(3)\">\n                <i class=\"fa fa fa-sort\" *ngIf=\"sortCol !== 3\"></i>\n                <i class=\"fa fa fa-sort-numeric-asc\" *ngIf=\"(sortCol === 3 && sortUp)\"></i>\n                <i class=\"fa fa fa-sort-numeric-desc\" *ngIf=\"(sortCol === 3 && !sortUp)\"></i>\n              </a>\n            </div>\n\n            <div class=\"input\">\n              <mat-form-field>\n                <input matInput [matDatepicker]=\"picker2\" placeholder=\"Dt. of Joining\" [(ngModel)]=\"item.DOJ\" name=\"doj\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                <mat-datepicker #picker2></mat-datepicker>\n              </mat-form-field>\n              <a href=\"#\"  (click)=\"onSort(4)\">\n                <i class=\"fa fa fa-sort\" *ngIf=\"sortCol !== 4\"></i>\n                <i class=\"fa fa fa-sort-numeric-asc\" *ngIf=\"(sortCol === 4 && sortUp)\"></i>\n                <i class=\"fa fa fa-sort-numeric-desc\" *ngIf=\"(sortCol === 4 && !sortUp)\"></i>\n              </a>\n            </div>\n\n            <div class=\"input\">\n              <mat-form-field>\n                <input matInput placeholder=\"Unit\" type=\"text\" [(ngModel)]=\"item.UNIT\" name=\"unit\">\n              </mat-form-field>\n              <a href=\"#\"  (click)=\"onSort(5)\">\n                <i class=\"fa fa fa-sort\" *ngIf=\"sortCol !== 5\"></i>\n                <i class=\"fa fa fa-sort-alpha-asc\" *ngIf=\"(sortCol === 5 && sortUp)\"></i>\n                <i class=\"fa fa fa-sort-alpha-desc\" *ngIf=\"(sortCol === 5 && !sortUp)\"></i>\n              </a>\n            </div>\n\n            <div class=\"input\">\n              <mat-form-field>\n                <input matInput [matDatepicker]=\"picker3\" placeholder=\"Unit Seniority\" [(ngModel)]=\"item.UNIT_SENIORITY\" name=\"unit-seniority\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n                <mat-datepicker #picker3></mat-datepicker>\n              </mat-form-field>\n              <a href=\"#\"  (click)=\"onSort(6)\">\n                <i class=\"fa fa fa-sort\" *ngIf=\"sortCol !== 6\"></i>\n                <i class=\"fa fa fa-sort-numeric-asc\" *ngIf=\"(sortCol === 6 && sortUp)\"></i>\n                <i class=\"fa fa fa-sort-numeric-desc\" *ngIf=\"(sortCol === 6 && !sortUp)\"></i>\n              </a>\n            </div>\n\n            <div class=\"input\">\n              <mat-form-field>\n                <input matInput placeholder=\"Station\" type=\"text\" [(ngModel)]=\"item.STATION\" name=\"station\">\n              </mat-form-field>\n              <a href=\"#\"  (click)=\"onSort(7)\">\n                <i class=\"fa fa fa-sort\" *ngIf=\"sortCol !== 7\"></i>\n                <i class=\"fa fa fa-sort-alpha-asc\" *ngIf=\"(sortCol === 7 && sortUp)\"></i>\n                <i class=\"fa fa fa-sort-alpha-desc\" *ngIf=\"(sortCol === 7 && !sortUp)\"></i>\n              </a>\n            </div>\n\n            <div class=\"input\">\n              <mat-form-field>\n                <input matInput [matDatepicker]=\"picker4\" placeholder=\"Stn. Seniority\" [(ngModel)]=\"item.STN_SENIORITY\" name=\"stn-seniority\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\n                <mat-datepicker #picker4></mat-datepicker>\n              </mat-form-field>\n              <a href=\"#\"  (click)=\"onSort(8)\">\n                <i class=\"fa fa fa-sort\" *ngIf=\"sortCol !== 8\"></i>\n                <i class=\"fa fa fa-sort-numeric-asc\" *ngIf=\"(sortCol === 8 && sortUp)\"></i>\n                <i class=\"fa fa fa-sort-numeric-desc\" *ngIf=\"(sortCol === 8 && !sortUp)\"></i>\n              </a>\n            </div>\n            \n            <div class=\"input\">\n              <mat-form-field>\n                <input matInput placeholder=\"Remarks\" type=\"text\" [(ngModel)]=\"item.REMARKS\" name=\"remarks\">\n              </mat-form-field>\n              <a href=\"#\"  (click)=\"onSort(9)\">\n                <i class=\"fa fa fa-sort\" *ngIf=\"sortCol !== 9\"></i>\n                <i class=\"fa fa fa-sort-alpha-asc\" *ngIf=\"(sortCol === 9 && sortUp)\"></i>\n                <i class=\"fa fa fa-sort-alpha-desc\" *ngIf=\"(sortCol === 9 && !sortUp)\"></i>\n              </a>\n            </div>  \n        </div>\n\n      </form>\n    </mat-card-content>\n</mat-card>\n\n          \n          \n          "

/***/ }),

/***/ "../../../../../src/app/components/add-item/add-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddItemComponent = (function () {
    function AddItemComponent(itemService) {
        this.itemService = itemService;
        this.sortUp = false;
        this.categories = ['JE (Civ)', 'JE (E/M)', 'JE(QS&C)', 'OS', 'AAO', 'UDC', 'SAA', 'LDC', 'JAA',
            'STENO GDE-III', 'STENO', 'DTMN', 'BS', 'SK', 'CHOW(O)'];
        this.logoPath = 'https://cecc-staff.github.io/assets/MES_Logo.png';
        this.item = {
            MES_No: null,
            NAME: '',
            CATEGORY: '',
            DOB: '',
            DOJ: '',
            UNIT: '',
            UNIT_SENIORITY: '',
            STATION: '',
            STN_SENIORITY: '',
            REMARKS: ''
        };
    }
    AddItemComponent.prototype.onSubmit = function () {
        this.item.MES_No = this.item.MES_No ? +this.item.MES_No : null;
        this.item.DOB = this.getDateStr(this.item.DOB);
        this.item.DOJ = this.getDateStr(this.item.DOJ);
        this.item.UNIT_SENIORITY = this.getDateStr(this.item.UNIT_SENIORITY);
        this.item.STN_SENIORITY = this.getDateStr(this.item.STN_SENIORITY);
        this.itemService.search.next(this.item);
        console.log(this.item);
        var str = '';
        if (this.item.MES_No) {
            str += 'MES No. = ' + this.item.MES_No;
        }
        str += this.item.MES_No ? ', ' : '';
        if (this.item.NAME) {
            str += 'Name = ' + this.item.NAME;
        }
        str += this.item.NAME ? ', ' : '';
        if (this.item.CATEGORY) {
            str += 'Category = ' + this.item.CATEGORY;
        }
        str += this.item.CATEGORY ? ', ' : '';
        if (this.item.DOB) {
            str += 'Date of Birth <= ' + this.item.DOB;
        }
        str += this.item.DOB ? ', ' : '';
        if (this.item.DOJ) {
            str += 'Date of Joining <= ' + this.item.DOJ;
        }
        str += this.item.DOJ ? ', ' : '';
        if (this.item.UNIT) {
            str += 'Unit = ' + this.item.UNIT;
        }
        str += this.item.UNIT ? ', ' : '';
        if (this.item.UNIT_SENIORITY) {
            str += 'Unit Seniority <= ' + this.item.UNIT_SENIORITY;
        }
        str += this.item.UNIT_SENIORITY ? ', ' : '';
        if (this.item.STATION) {
            str += 'Station = ' + this.item.STATION;
        }
        str += this.item.STATION ? ', ' : '';
        if (this.item.STN_SENIORITY) {
            str += 'Station Seniority <= ' + this.item.STN_SENIORITY;
        }
        str += this.item.STN_SENIORITY ? ', ' : '';
        if (this.item.REMARKS) {
            str += 'Remarks = ' + this.item.REMARKS;
        }
        this.searchStr = str;
        this.sortCol = -1;
    };
    AddItemComponent.prototype.getDateStr = function (dtStr) {
        if (dtStr) {
            var dt = new Date(dtStr);
            var month = dt.getMonth() + 1;
            var monthStr = month < 10 ? '0' + month : '' + month;
            var date = dt.getDate();
            var dateStr = date < 10 ? '0' + date : '' + date;
            return dt.getFullYear() + '-' + monthStr + '-' + dateStr;
        }
        else {
            return dtStr;
        }
    };
    AddItemComponent.prototype.onSort = function (index) {
        this.sortCol = index;
        this.sortUp = !this.sortUp;
        this.itemService.sort.next(index);
    };
    AddItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-add-item',
            template: __webpack_require__("../../../../../src/app/components/add-item/add-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-item/add-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_item_service__["a" /* ItemService */]])
    ], AddItemComponent);
    return AddItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/items/delete-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DeleteItemComponent = (function () {
    function DeleteItemComponent() {
    }
    DeleteItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-delete-item',
            template: " <h2 mat-dialog-title>Are you sure to Delete ?</h2>\n                <mat-dialog-content style=\"font-family:Arial,Helvetica,sans-serif;\">\n                    Record deleted once can't be undone.\n                </mat-dialog-content>\n                <mat-dialog-actions>\n                    <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"true\">Yes</button>\n                    <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"false\">No</button>\n                </mat-dialog-actions> "
        })
    ], DeleteItemComponent);
    return DeleteItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/items/items.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.items {\n    width: 100%;\n    border-bottom-color: black;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n}\n.item {\n    width: 10%;\n    font-size: 12px;\n}\n.item-mesno {\n    width: 5%;\n    font-size: 12px;\n}\n.item-name {\n    width: 17%;\n    font-size: 12px;\n}\n.item-category {\n    width: 8%;\n    font-size: 12px;\n}\nform {\n    width: 100%;\n}\n.form-items {\n    width: 100%;\n    background-color: lightgray;\n}\nmat-form-field {\n    width: 90%;\n}\n\nh5 {\n    text-align: right;\n}\n.pointer {\n    cursor: pointer;\n    color: blue; \n}\n.fa {\n    font-size: 16px;\n    color: blue;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/items/items.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"items?.length > 0; else noItems\">\n  <mat-list>\n    <mat-list-item *ngFor=\"let item of items\">\n        <div *ngIf=\"!(editState && itemToEdit.id == item.id)\" class=\"items\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n            <div class=\"item-mesno\" [ngClass]=\"{pointer:showPointer(item)}\" (click)=\"showSB(item)\">\n                {{item.MES_No}}\n            </div>\n            <div class=\"item-name\">\n                {{item.NAME}}\n            </div>\n            <div class=\"item-category\">\n                {{item.CATEGORY}}\n            </div>\n            <div class=\"item\">\n                {{item.DOB}}\n            </div>\n            <div class=\"item\">\n                {{item.DOJ}}\n            </div>\n            <div class=\"item\">\n                {{item.UNIT}}\n            </div>\n            <div class=\"item\">\n                {{item.UNIT_SENIORITY}}\n            </div>\n            <div class=\"item\">\n                {{item.STATION}}\n            </div>\n            <div class=\"item\">\n                {{item.STN_SENIORITY}}\n            </div>\n            <div class=\"item\">\n                {{item.REMARKS}}\n            </div>\n            <a *ngIf=\"user && user.email\">\n              <i (click)=\"editItem(item)\" class=\"fa fa-pencil pointer\"></i>\n            </a>\n        </div>\n        <div *ngIf=\"editState && itemToEdit.id == item.id\" class=\"items\">\n            <form  [formGroup]=\"myForm\" (ngSubmit)=\"updateItem()\" >\n                <div class=\"form-items\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                    <div class=\"item-mesno\">\n                        <mat-form-field>\n                            <input matInput type=\"text\" formControlName=\"mesno\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"item-name\">\n                            <mat-form-field>\n                                <input matInput type=\"text\" formControlName=\"name\">\n                            </mat-form-field>\n                    </div>      \n                    <div class=\"item-category\">\n                            <mat-form-field>\n                                <mat-select formControlName=\"category\">\n                                    <mat-option>None</mat-option>\n                                    <mat-option *ngFor=\"let category of categories\" [value]=\"category\">\n                                    {{ category }}\n                                    </mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                    </div>    \n                    <div class=\"item\">\n                            <mat-form-field>\n                                <input matInput [matDatepicker]=\"picker1\" formControlName=\"dob\">\n                                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                <mat-datepicker #picker1></mat-datepicker>\n                            </mat-form-field>\n                    </div>                          \n                    <div class=\"item\">\n                            <mat-form-field>\n                                <input matInput [matDatepicker]=\"picker2\" formControlName=\"doj\">\n                                <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                                <mat-datepicker #picker2></mat-datepicker>\n                            </mat-form-field>\n                    </div>    \n                    <div class=\"item\">\n                            <mat-form-field>\n                                <input matInput type=\"text\" formControlName=\"unit\">\n                            </mat-form-field>\n                    </div>    \n                    <div class=\"item\">\n                            <mat-form-field>\n                                <input matInput [matDatepicker]=\"picker3\" formControlName=\"unit_seniority\">\n                                <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n                                <mat-datepicker #picker3></mat-datepicker>\n                            </mat-form-field>\n                    </div>    \n                    <div class=\"item\">\n                            <mat-form-field>\n                                <input matInput type=\"text\" formControlName=\"station\">\n                            </mat-form-field>\n                    </div>   \n                    <div class=\"item\">\n                            <mat-form-field>\n                                <input matInput [matDatepicker]=\"picker4\" formControlName=\"stn_seniority\">\n                                <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\n                                <mat-datepicker #picker4></mat-datepicker>\n                            </mat-form-field>\n                    </div>   \n                    <div class=\"item\">\n                            <mat-form-field>\n                                <input matInput type=\"text\" formControlName=\"remarks\">\n                            </mat-form-field> \n                    </div>   \n               </div>\n               <div class=\"form-items\">\n                    <button mat-raised-button [disabled]=\"!myForm.valid\" type=\"submit\" color=\"primary\">Update</button>\n                    <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"deleteItem(item)\" [disabled]=\"true\">Delete</button>\n                    <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"clearState()\">Cancel</button>\n               </div> \n            </form>  \n        </div>\n    </mat-list-item>\n  </mat-list>\n</div>\n<ng-template #noItems>\n  <hr>\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <div>\n        <h5>{{ loadingMsg }}</h5>\n    </div>\n    <div>\n        <i *ngIf=\"loadingMsg === 'Loading ...  '\" class=\"fa fa-spinner fa-spin fa-5x\"></i>\n    </div>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/components/items/items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__ = __webpack_require__("../../../../angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delete_item_component__ = __webpack_require__("../../../../../src/app/components/items/delete-item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { environment } from '../../../environments/environment.prod';
var ItemsComponent = (function () {
    function ItemsComponent(itemService, dialog, storageService) {
        this.itemService = itemService;
        this.dialog = dialog;
        this.storageService = storageService;
        this.editState = false;
        this.loadingMsg = 'Loading ...  ';
        this.sortUp = false;
        this.categories = ['JE (Civ)', 'JE (E/M)', 'JE(QS&C)', 'OS', 'AAO', 'UDC', 'SAA', 'LDC', 'JAA',
            'STENO GDE-III', 'STENO', 'DTMN', 'BS', 'SK', 'CHOW(O)'];
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemsSubscription = this.itemService.getItems().subscribe(function (items) {
            _this.items = items;
            _this.itemService.count = _this.items.length;
            _this.loadingMsg = 'There are no records.';
            console.log('Items Count : ' + items.length);
            _this.itemService.itemsSubject.next(_this.items);
        }, function (error) { return console.log(error); });
        this.itemService.search.subscribe(function (item) {
            _this.itemService.filterItems(item).subscribe(function (items) {
                _this.items = items;
                _this.itemService.count = _this.items.length;
                _this.itemService.itemsSubject.next(_this.items);
            });
        });
        this.itemService.sort.subscribe(function (index) {
            if (index) {
                var keys = ['MES_No', 'NAME', 'CATEGORY', 'DOB', 'DOJ', 'UNIT',
                    'UNIT_SENIORITY', 'STATION', 'STN_SENIORITY', 'REMARKS'];
                _this.sortOnElement(keys[index]);
            }
            else {
                _this.sortOnNumber();
            }
            _this.itemService.itemsSubject.next(_this.items);
        });
        this.itemService.loginStatus.subscribe(function (status) {
            _this.itemsSubscription.unsubscribe();
            _this.clearState();
        });
    };
    ItemsComponent.prototype.ngOnDestroy = function () {
        this.itemsSubscription.unsubscribe();
    };
    ItemsComponent.prototype.sortOnNumber = function () {
        this.sortUp = !this.sortUp;
        if (this.sortUp) {
            this.items.sort(function (a, b) { return a['MES_No'] - b['MES_No']; });
        }
        else {
            this.items.sort(function (a, b) { return b['MES_No'] - a['MES_No']; });
        }
    };
    ItemsComponent.prototype.sortOnElement = function (key) {
        this.sortUp = !this.sortUp;
        if (this.sortUp) {
            this.items.sort(function (a, b) {
                var x = a[key];
                var y = b[key];
                if (x < y) {
                    return -1;
                }
                if (x > y) {
                    return 1;
                }
                return 0;
            });
        }
        else {
            this.items.sort(function (a, b) {
                var x = a[key];
                var y = b[key];
                if (x < y) {
                    return 1;
                }
                if (x > y) {
                    return -1;
                }
                return 0;
            });
        }
    };
    ItemsComponent.prototype.deleteItem = function (item) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__delete_item_component__["a" /* DeleteItemComponent */], {
            hasBackdrop: true,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.clearState();
                _this.itemService.deleteItem(item);
            }
        });
    };
    ItemsComponent.prototype.editItem = function (item) {
        this.editState = true;
        this.itemToEdit = item;
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            mesno: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](item.MES_No, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required),
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](item.NAME, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required),
            category: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](item.CATEGORY, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required),
            dob: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](item.DOB, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required),
            doj: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](item.DOJ, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required),
            unit: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](item.UNIT, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required),
            unit_seniority: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](item.UNIT_SENIORITY, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required),
            station: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](item.STATION, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required),
            stn_seniority: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](item.STN_SENIORITY, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required),
            remarks: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](item.REMARKS)
        });
        console.log('item.id : ' + item.id);
    };
    ItemsComponent.prototype.updateItem = function () {
        console.log(this.myForm);
        var item = {
            MES_No: +this.myForm.value.mesno,
            NAME: this.myForm.value.name,
            CATEGORY: this.myForm.value.category,
            DOB: this.getDateStr(this.myForm.value.dob),
            DOJ: this.getDateStr(this.myForm.value.doj),
            UNIT: this.myForm.value.unit,
            UNIT_SENIORITY: this.getDateStr(this.myForm.value.unit_seniority),
            STATION: this.myForm.value.station,
            STN_SENIORITY: this.getDateStr(this.myForm.value.stn_seniority),
            REMARKS: this.myForm.value.remarks,
            id: this.itemToEdit.id
        };
        this.itemService.updateItem(item);
        this.clearState();
    };
    ItemsComponent.prototype.clearState = function () {
        console.log('State Cleared');
        this.editState = false;
        this.itemToEdit = null;
    };
    ItemsComponent.prototype.getDateStr = function (dtStr) {
        if (dtStr) {
            var dt = new Date(dtStr);
            var month = dt.getMonth() + 1;
            var monthStr = month < 10 ? '0' + month : '' + month;
            var date = dt.getDate();
            var dateStr = date < 10 ? '0' + date : '' + date;
            return dt.getFullYear() + '-' + monthStr + '-' + dateStr;
        }
        else {
            return dtStr;
        }
    };
    ItemsComponent.prototype.showSB = function (item) {
        if (this.user && (this.user.email || item.MES_No === +this.user.uid)) {
            var storageRef = this.storageService.storage.ref();
            storageRef.child(item.MES_No + '.pdf').getDownloadURL().then(function (url) {
                window.open(url);
            });
        }
    };
    ItemsComponent.prototype.showPointer = function (item) {
        if (this.user && (this.user.email || item.MES_No === +this.user.uid)) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], ItemsComponent.prototype, "user", void 0);
    ItemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-items',
            template: __webpack_require__("../../../../../src/app/components/items/items.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/items/items.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_item_service__["a" /* ItemService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nmat-toolbar {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.filler1 {\n    -webkit-box-flex: 6;\n        -ms-flex: 6 1 auto;\n            flex: 6 1 auto;\n}\n.heading {\n    color: white;\n    font-size: 30px;\n    text-decoration: none;\n}\n.filler2 {\n    -webkit-box-flex: 3;\n        -ms-flex: 3 1 auto;\n            flex: 3 1 auto;\n}\n.login {\n    color: white;\n    text-decoration: none;\n}\n.filler3 {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\nh2.database {\n    font-family: Arial, Helvetica, sans-serif;\n    text-align: center;\n    padding: 0px;\n    margin: 0px;\n}\n.feedback {\n    color: red;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 10px;\n    text-align: center;\n    font-style: italic;\n    margin: 0px;\n    padding: 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar color=\"primary\">\n    <a class=\"login\" href=\"#\" (click)=\"togglePTO()\">{{ ptoStr }}</a>\n    <span class=\"filler1\"></span>\n    <a class=\"heading\" href=\"/\">Chief Engineer Central Command</a>\n    <span class=\"filler2\"></span>\n    <a *ngIf=\"!showPTO\" class=\"login\" id=\"downloadLink\" download=\"cecc-staff.csv\">Download</a>\n    <span class=\"filler3\"></span>\n    <a class=\"login\" href=\"#\" (click)=\"login()\">{{ logStr }}</a>\n</mat-toolbar>\n<h2 class=\"database\" (click)=\"publishMessage()\">{{ headStr }} of Basic Staff</h2>\n<p class=\"feedback\" color=\"primary\">Feedback: Sanjeev Gahlot,Jt.DG(Pers),CE CC Lucknow</p>\n<div *ngIf=\"!showPTO\">\n  <div *ngIf=\"!showLoginCard\">\n    <app-add-item></app-add-item>\n    <app-items [user]=\"user\"></app-items>\n  </div>\n  <app-login *ngIf=\"showLoginCard\"></app-login>\n</div>\n<app-pto *ngIf=\"showPTO\"></app-pto>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
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
    function NavbarComponent(afAuth, itemService, http) {
        this.afAuth = afAuth;
        this.itemService = itemService;
        this.http = http;
        this.showLoginCard = false;
        this.showPTO = true;
        // loggedIn = false;
        this.user = null;
        this.logStr = 'Login';
        this.ptoStr = '';
        this.headStr = '';
        this.url = 'https://us-central1-cecc-staff.cloudfunctions.net/addMessage';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                console.log('Logged in User : ' + JSON.stringify(user));
                _this.showLoginCard = false;
                _this.user = user;
                if (_this.user.email) {
                    _this.logStr = 'Logout\n' + user.email;
                    _this.ptoStr = _this.showPTO ? 'Database' : 'PTO';
                    _this.headStr = _this.showPTO ? 'PTO' : 'Database';
                }
                else {
                    _this.logStr = 'Logout\n' + user.uid;
                }
            }
            else {
                _this.user = null;
                _this.logStr = 'Login';
                _this.ptoStr = '';
                _this.headStr = 'Database';
                _this.showPTO = false;
            }
        });
        this.itemService.itemsSubject.subscribe(function (items) {
            _this.items = items;
            _this.setDownloadLink();
        });
    };
    NavbarComponent.prototype.setDownloadLink = function () {
        var itemsText = this.getItems();
        var data = new Blob([itemsText], { type: 'text/plain' });
        console.log('data : ' + data);
        var textFile = window.URL.createObjectURL(data);
        console.log('textFile : ' + textFile);
        document.getElementById('downloadLink').href = textFile;
    };
    NavbarComponent.prototype.login = function () {
        if (this.logStr === 'Login') {
            this.showLoginCard = true;
        }
        else {
            this.itemService.loginStatus.next();
            this.afAuth.auth.signOut();
        }
    };
    NavbarComponent.prototype.getItems = function () {
        var keys = ['MES_No', 'NAME', 'CATEGORY', 'DOB', 'DOJ', 'UNIT',
            'UNIT_SENIORITY', 'STATION', 'STN_SENIORITY', 'REMARKS'];
        var str = keys.toString() + '\n';
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            str += item.MES_No + ',';
            str += item.NAME + ',';
            str += item.CATEGORY + ',';
            str += item.DOB + ',';
            str += item.DOJ + ',';
            str += item.UNIT + ',';
            str += item.UNIT_SENIORITY + ',';
            str += item.STATION + ',';
            str += item.STN_SENIORITY + ',';
            str += item.REMARKS + '\n';
        }
        console.log('item.length : ' + this.items.length);
        return str;
    };
    NavbarComponent.prototype.publishMessage = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var message = { data: { text: 'namasteji' } };
        this.http.post(this.url, JSON.stringify(message), { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(error.json()); })
            .subscribe(function (result) { console.log(result); });
    };
    NavbarComponent.prototype.togglePTO = function () {
        this.showPTO = !this.showPTO;
        this.ptoStr = this.showPTO ? 'Database' : 'PTO';
        this.headStr = this.showPTO ? 'PTO' : 'Database';
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3__services_item_service__["a" /* ItemService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/help/help.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nli {\n    font-weight: bold;\n}\n.header {\n    text-align: center;\n}\nh3 {\n    margin: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"help-card\">\n    <div class=\"header\">\n      <mat-card-title><h3>Help</h3></mat-card-title>\n      <mat-card-subtitle>A Guide for using this PTO publishing App.</mat-card-subtitle>\n    </div>\n    <img mat-card-image [src]=\"helpImagePath\" alt=\"Photo of Help Image\">\n    <mat-card-content>\n      <p>\n        The PTO publishing App will open in the browser after logging in and on clicking the link \"PTO\" on \n        Heading bar at top left of the page.The page consists of a Main Panel and a Side Nav Panel below \n        the Heading Bar. The Main Panel is for \n        displaying the data or forms as per the menu items chosen in the Side Nav Panel. The menu items\n        in the Side Nav Panel and their functions are as under :\n      </p>\n      <h4>Side Nav Panel</h4>\n        <ol>\n          <li>List :</li><p>The \"List\" Menu Item displays the list of all PTOs in the Main Panel and is also \n            the default Menu Item on opening of the PTO page of the App. The List can be Searched (Filtered) \n            and Sorted on any Column. Enter the required field at the top of any Column and press the\n             \"Search\" button to filter the PTOs on that field. To Sort on any Column click the Arrows Icons \n             below the textfields. The individual PTO row on clicking \n            will open the details of the PTO with all its Casualities listed.</p>\n          <li>New PTO :</li><p>The \"New PTO\" Menu Item opens a form for creating new PTO, which contains five \n            text fields for No., Year, Unit, Station and Date of the PTO. After filling the values in the PTO \n            text fields, click on \"New Casuality\".</p>\n          <li>New Casuality :</li><p>Clicking on it opens a new form for a new Casuality under the PTO form.\n            The seven text fields for S.No., MES No., Name, Category, Date, Type and Particulars fully define \n            a Casuality for any employee. The Particulars text field get automatically filled with a templete\n            on selecting a Type from the drop down list. It can then be completed to specify the actual casuality\n             for the employee by filling the blanks in the templete of the Casuality or amending it as required.</p>\n          <li>Publish... :</li><p>After filling the PTO form and adding and completing the required nos. of \n            Casualities, you would like to Publish it. On clicking this Menu Item you are presented with a preview \n            of the completed PTO form which you have filled in the above Menu items. If everything is allright \n            you may press the \"Publish\" button to upload it onto the database. Once it is uploaded to the database \n            it cannot be amended therafter. Also any PTO for a particular combination of PTO No., PTO Year, Unit, \n            Station and Date, once published it cannot be published again thereby avoiding duplicate PTOs in the \n            database. However if you feel some correction is required, you have a chance to correct it by pressing \n            the \"Edit\" button before pressing the \"Publish\" button. Also there is option to Print the completed PTO by \n            pressing the \"Print\" button.</p>\n          <li>MES No. :</li><p>This is not an action button but a textfield where you put in the MES No. of the \n            employee whose casualities you want to search. All the casualities for the employee with this MES No.\n             are searched in the entire database and listed in the Main Panel if you leave the following two \n             textfields of \"PTO Date From\" and \"PTO Date Upto\" blank. However if you you want the casualities of \n             the employee for a particular period, you need to fill the textfield at Para 6 and 7 below to get \n             the filtered casualities of the employee within the period specified.</p>\n          <li>PTO Date From :</li><p>As specified in the Para above, the textfield when filled will filter the \n            casualities of the employee with MES No. specified in Para 5 above to only those casualities whose \n            PTO date falls on or after this date.</p>\n          <li>PTO Date Upto :</li><p>As specified in the Para 5 above, the textfield when filled will filter the \n              casualities of the employee with MES No. specified in Para 5 above to only those casualities whose \n              PTO date falls on or before this date.</p>\n          <li>Search Casualities :</li><p>This is the action button for the Search Casualities Form specified from \n            Para 5 to Para 7 above. After filling the textfields in the Para 5 to 7 specified above, pressing this \n            button will show the casualities in the Main Panel. </p>\n          <li>Help :</li><p>This Menu Item is for displaying this Help page in the Main Panel of the App.</p>\n        </ol>\n      \n    </mat-card-content>\n  </mat-card>"

/***/ }),

/***/ "../../../../../src/app/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = (function () {
    function HelpComponent() {
        this.helpImagePath = 'https://cecc-staff.github.io/assets/helpImage.png';
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-help',
            template: __webpack_require__("../../../../../src/app/help/help.component.html"),
            styles: [__webpack_require__("../../../../../src/app/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mat-card {\n    width: 100%;\n}\n.login-card {\n    max-width: 500px;\n    max-height: 600px;\n}\nh2.sign-in {\n    text-align: center;\n    padding-bottom: 20px;\n}\n.card-image {\n    width: 50%;\n    height: 50%;\n}\n.login-form {\n    height: 300px;\n    width: 50%;\n}\n.filler1 {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\np {\n    text-align: center;\n    color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-card\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <mat-card class=\"login-card\">\n    <mat-card-header>\n      <h2 class=\"sign-in\">Please Sign in</h2>\n    </mat-card-header>\n    <mat-card-content fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <div class=\"card-image\">\n        <img mat-card-image [src]=\"signinImagePath\">\n      </div>\n      <form class=\"login-form\" id=\"signinForm\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" \n                                                fxLayout=\"column\" fxLayoutAlign=\"center end\">\n          <div class=\"filler1\">\n          </div>\n          <div>\n            <mat-form-field>\n              <input matInput placeholder=\"MES No/Email Id\" type=\"text\" \n              required [(ngModel)]=\"mesNo\" name=\"MES_No\">\n            </mat-form-field>\n          </div>\n          <div>\n            <mat-form-field>\n              <input matInput placeholder=\"Password\" type=\"password\" [(ngModel)]=\"password\" name=\"Password\"\n                     required pattern=\".{6,}\" title=\"Six or more characters\">\n            </mat-form-field>\n          </div>\n          <div class=\"filler1\">\n          </div>\n          <div>\n              <button mat-raised-button type=\"submit\" [disabled]=\"!f.valid\" color=\"primary\">Submit</button>\n          </div>  \n      </form> \n    </mat-card-content>\n    <mat-card-actions>\n        <p>{{ loginFailedMessage }}</p>\n    </mat-card-actions>\n  </mat-card>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
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
    function LoginComponent(afAuth, http) {
        this.afAuth = afAuth;
        this.http = http;
        this.mesNo = '';
        this.password = '';
        this.loginFailedMessage = 'On your first Login with MES No, any password you enter would be registered for your subsequent Login';
        this.signinImagePath = 'https://cecc-staff.github.io/assets/signinImage.jpg';
    }
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var pattern = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$');
        if (pattern.test(this.mesNo)) {
            this.afAuth.auth.signInWithEmailAndPassword(this.mesNo, this.password)
                .then(function (result) { console.log(result); })
                .catch(function (error) {
                console.log(error);
                _this.loginFailedMessage = 'Invalid Email Id or Password';
            });
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var user = { MES_No: this.mesNo, Password: this.password };
            this.http.post('https://us-central1-cecc-staff.cloudfunctions.net/uploadForm2', JSON.stringify(user), { headers: headers })
                .map(function (response) { return response.json(); })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json()); })
                .subscribe(function (result) {
                console.log(result);
                if (result.token) {
                    _this.afAuth.auth.signInWithCustomToken(result.token).catch(function (error) {
                        console.log('ErrorCode: ' + error.code + ' Message: ' + error.message);
                    });
                }
                if (result.Error) {
                    _this.loginFailedMessage = result.Error;
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { MatNativeDateModule } from '@angular/material';
// import { NativeDateModule } from '@angular/material';





var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material_toolbar__["a" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material_card__["a" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material_button__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__["a" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material_list__["a" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_input__["b" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material_select__["a" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material_datepicker__["a" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material_dialog__["b" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_sidenav__["a" /* MatSidenavModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material_toolbar__["a" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material_card__["a" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material_button__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__["a" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material_list__["a" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_input__["b" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material_select__["a" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material_datepicker__["a" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material_dialog__["b" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_sidenav__["a" /* MatSidenavModule */]]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/models/particulars.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return particulars; });
var particulars = [
    { value: 'Reported arrival and TOS on permanent posting from _______ and posted as _____ wef the same date',
        viewValue: 'Strength Increase' },
    { value: 'SOS on permanent transfer to ______\n Auth: CECC letter no. _____ dt. ______', viewValue: 'Strength Decrease' },
    { value: 'Granted Earned Leave for _____ days wef ___ to _____', viewValue: 'Earned Leave' },
    { value: 'Granted commuted leave for ____ days on MC wef ______ to ____ equivalent to ____ days HPL', viewValue: 'Commuted Leave' }
];


/***/ }),

/***/ "../../../../../src/app/pto-list/pto-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ptos {\n    width: 100%;\n}\n.pto-sno {\n    width: 20%;\n    font-size: 12px;\n    text-align: center;\n}\n.pto-year {\n    width: 20%;\n    font-size: 12px;\n    text-align: center;\n}\n.pto-unit {\n    width: 20%;\n    font-size: 12px;\n    text-align: center;\n}\n.pto-station {\n    width: 20%;\n    font-size: 12px;\n    text-align: center;\n}\n.pto-date {\n    width: 20%;\n    font-size: 12px;\n    text-align: center;\n}\nh2 {\n    text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pto-list/pto-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-pto-search></app-pto-search>\n<div class=\"ptos\">      \n  <mat-card>\n    <mat-nav-list>\n        <a mat-list-item *ngFor=\"let pto of ptos\" (click)=\"showDetails(pto)\">\n            <div class=\"pto-sno\">\n                {{ pto.PTO_No }}\n            </div>\n            <div class=\"pto-year\">\n                {{ pto.YEAR }}\n            </div>\n            <div class=\"pto-unit\">\n                {{ pto.UNIT }}\n            </div>\n            <div class=\"pto-station\">\n                {{ pto.STATION }}\n            </div>\n            <div class=\"pto-date\">\n                {{ pto.DATE }}\n            </div>\n        </a>\n    </mat-nav-list>\n  </mat-card>    \n</div>"

/***/ }),

/***/ "../../../../../src/app/pto-list/pto-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PtoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pto_service__ = __webpack_require__("../../../../../src/app/services/pto.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PtoListComponent = (function () {
    function PtoListComponent(ptoService) {
        this.ptoService = ptoService;
        this.sortUp = false;
        this.detailClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    PtoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ptoSubscription = this.ptoService.getPtos().subscribe(function (ptos) {
            _this.ptos = ptos;
            console.log('Total ptos : ' + _this.ptos.length);
        });
        this.ptoService.search.subscribe(function (pto) {
            _this.ptoService.filterPtos(pto).subscribe(function (ptos) {
                _this.ptos = ptos;
                console.log('Total search ptos : ' + _this.ptos.length);
            });
        });
        this.ptoService.sort.subscribe(function (index) {
            var keys = ['PTO_No', 'YEAR', 'UNIT', 'STATION', 'DATE'];
            if (index > 1) {
                _this.sortOnElement(keys[index]);
            }
            else {
                _this.sortOnNumber(keys[index]);
            }
        });
    };
    PtoListComponent.prototype.ngOnDestroy = function () {
        // this.ptos = null;
        // console.log('On Destroy Total ptos : ' + this.ptos.length);
        this.ptoSubscription.unsubscribe();
    };
    PtoListComponent.prototype.sortOnNumber = function (key) {
        this.sortUp = !this.sortUp;
        if (this.sortUp) {
            this.ptos.sort(function (a, b) { return a[key] - b[key]; });
        }
        else {
            this.ptos.sort(function (a, b) { return b[key] - a[key]; });
        }
    };
    PtoListComponent.prototype.sortOnElement = function (key) {
        this.sortUp = !this.sortUp;
        if (this.sortUp) {
            this.ptos.sort(function (a, b) {
                var x = a[key];
                var y = b[key];
                if (x < y) {
                    return -1;
                }
                if (x > y) {
                    return 1;
                }
                return 0;
            });
        }
        else {
            this.ptos.sort(function (a, b) {
                var x = a[key];
                var y = b[key];
                if (x < y) {
                    return 1;
                }
                if (x > y) {
                    return -1;
                }
                return 0;
            });
        }
    };
    PtoListComponent.prototype.showDetails = function (pto) {
        this.detailClicked.emit();
        this.ptoService.pto = pto;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], PtoListComponent.prototype, "detailClicked", void 0);
    PtoListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-pto-list',
            template: __webpack_require__("../../../../../src/app/pto-list/pto-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pto-list/pto-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_pto_service__["a" /* PTOService */]])
    ], PtoListComponent);
    return PtoListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pto-new/pto-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.pto {\n    width: 20%;\n    font-size: 14px;\n    font-weight: bold;\n}\n.cas {\n    width: 100%;\n}\n.cas-sno {\n    width: 5%;\n    font-size: 14px;\n    font-weight: bold;\n}\n.cas-mesno {\n    width: 8%;\n    font-size: 14px;\n    font-weight: bold;\n}\n.cas-name {\n    width: 10%;\n    font-size: 14px;\n    font-weight: bold;\n}\n.cas-category {\n    width: 10%;\n    font-size: 14px;\n    font-weight: bold;\n}\n.cas-date {\n    width: 10%;\n    font-size: 14px;\n    font-weight: bold;\n}\n.cas-type {\n    width: 7%;\n    font-size: 14px;\n    font-weight: bold;\n}\n.cas-particular {\n    width: 50%;\n    font-size: 14px;\n    font-weight: bold;\n}\nmat-form-field {\n    width: 95%;\n}\nmat-card {\n    margin-bottom: 5px;\n}\nmat-list-item {\n    border-bottom-style: solid;\n    border-bottom-width: 2px;\n    border-bottom-color: black;\n}\nh2 {\n    text-align: center;\n}\n.icon-close {\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pto-new/pto-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-card>\n    <h2>PTO-II Order</h2>   \n    <form [formGroup]=\"ptoForm\" fxLayout=\"row\" fxLayoutAlign=\"start center\"> \n        <div class=\"pto\">\n          <mat-form-field>\n            <input matInput placeholder=\"S No\" formControlName=\"ptono\">\n          </mat-form-field>\n        </div>\n        <div class=\"pto\">\n          <mat-form-field>\n            <input matInput placeholder=\"Year\" formControlName=\"year\">\n          </mat-form-field>\n        </div>\n        <div class=\"pto\">\n          <mat-form-field>\n            <input matInput placeholder=\"Unit\" formControlName=\"unit\">\n          </mat-form-field>\n        </div>\n        <div class=\"pto\">\n          <mat-form-field>\n            <input matInput placeholder=\"Station\" formControlName=\"station\">\n          </mat-form-field>\n        </div>\n        <div class=\"pto\">\n          <mat-form-field>\n            <input matInput [matDatepicker]=\"picker1\" placeholder=\"Date\" formControlName=\"date\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n            <mat-datepicker #picker1></mat-datepicker>\n          </mat-form-field>\n        </div>\n    </form>\n  </mat-card>\n  <h3>Casualities</h3> \n  <div *ngFor=\"let formControl of controls\">\n    <mat-card>\n      <form [formGroup]=\"formControl\">\n          <div class=\"cas\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div class=\"cas-sno\">\n                <mat-form-field>\n                  <input matInput placeholder=\"S No\" formControlName=\"sno\">\n                </mat-form-field>\n            </div>\n            <div class=\"cas-mesno\">\n                <mat-form-field>\n                  <input matInput placeholder=\"MES No\" formControlName=\"mesno\">\n                </mat-form-field>\n            </div>\n            <div class=\"cas-name\">\n                <mat-form-field>\n                  <input matInput placeholder=\"Name\" formControlName=\"name\">\n                </mat-form-field>\n            </div>\n            <div class=\"cas-category\">\n              <mat-form-field>\n                <mat-select placeholder=\"Category\" formControlName=\"category\">\n                    <mat-option *ngFor=\"let category of categories\" [value]=\"category\">\n                    {{ category }}\n                    </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n            <div class=\"cas-date\">\n              <mat-form-field>\n                <input matInput [matDatepicker]=\"picker2\" placeholder=\"Date\" formControlName=\"date\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                <mat-datepicker #picker2></mat-datepicker>\n              </mat-form-field>\n            </div>\n            <div class=\"cas-type\">\n                <mat-form-field>\n                  <mat-select placeholder=\"Type\" formControlName=\"type\">\n                      <mat-option *ngFor=\"let type of particulars\" (click)=\"onSelect(formControl,type.value)\" [value]=\"type.viewValue\">\n                      {{ type.viewValue }}\n                      </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n            <div class=\"cas-particular\">\n              <mat-form-field>\n                <textarea matInput placeholder=\"Particular\" formControlName=\"particular\"></textarea>\n              </mat-form-field>\n            </div>\n        \n            <div class=\"icon-close\">\n              <a href=\"#\" (click)=\"deleteCas(formControl)\"><mat-icon>close</mat-icon></a>\n            </div>\n          </div>\n      </form>\n    </mat-card>\n  </div>\n   \n</div>"

/***/ }),

/***/ "../../../../../src/app/pto-new/pto-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PtoNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pto_service__ = __webpack_require__("../../../../../src/app/services/pto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_particulars__ = __webpack_require__("../../../../../src/app/models/particulars.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PtoNewComponent = (function () {
    function PtoNewComponent(ptoService) {
        this.ptoService = ptoService;
        this.categories = ['JE (Civ)', 'JE (E/M)', 'JE(QS&C)', 'OS', 'AAO', 'UDC', 'SAA', 'LDC', 'JAA',
            'STENO GDE-III', 'STENO', 'DTMN', 'BS', 'SK', 'CHOW(O)'];
        this.particulars = __WEBPACK_IMPORTED_MODULE_3__models_particulars__["a" /* particulars */];
    }
    PtoNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ptoForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            'ptono': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.ptoService.pto.PTO_No),
            'year': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.ptoService.pto.YEAR),
            'unit': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.ptoService.pto.UNIT),
            'station': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.ptoService.pto.STATION),
            'date': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.ptoService.pto.DATE),
            'casualities': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormArray */]([]),
        });
        this.controls = this.ptoForm.get('casualities').controls;
        for (var _i = 0, _a = this.ptoService.pto.CASUALITIES; _i < _a.length; _i++) {
            var cas = _a[_i];
            this.addCasuality(cas);
        }
        this.ptoService.casuality.subscribe(function (casuality) { return _this.addCasuality(casuality); });
        this.ptoService.preview.subscribe(function () { return _this.preview(); });
    };
    PtoNewComponent.prototype.addCasuality = function (cas) {
        this.casForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            'sno': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](cas.S_No),
            'mesno': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](cas.MES_No),
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](cas.NAME),
            'category': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](cas.CATEGORY),
            'date': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](cas.DATE),
            'type': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](cas.TYPE),
            'particular': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](cas.PARTICULAR)
        });
        this.ptoForm.get('casualities').push(this.casForm);
        // console.log(this.casuality);
        // this.page = 'casuality';
    };
    PtoNewComponent.prototype.preview = function () {
        // console.log(this.ptoForm);
        this.ptoService.pto.PTO_No = +this.ptoForm.value.ptono;
        this.ptoService.pto.YEAR = +this.ptoForm.value.year;
        this.ptoService.pto.UNIT = this.ptoForm.value.unit;
        this.ptoService.pto.STATION = this.ptoForm.value.station;
        this.ptoService.pto.DATE = this.getDateStr(this.ptoForm.value.date),
            this.ptoService.pto.CASUALITIES = [];
        // this.addCasuality();
        for (var _i = 0, _a = this.ptoForm.get('casualities').controls; _i < _a.length; _i++) {
            var control = _a[_i];
            var casuality = {
                S_No: 0,
                MES_No: 0,
                NAME: '',
                CATEGORY: '',
                DATE: '',
                PARTICULAR: ''
            };
            casuality.S_No = control.value.sno;
            casuality.MES_No = control.value.mesno;
            casuality.NAME = control.value.name;
            casuality.CATEGORY = control.value.category;
            casuality.DATE = this.getDateStr(control.value.date);
            casuality.TYPE = control.value.type;
            casuality.PARTICULAR = control.value.particular;
            this.ptoService.pto.CASUALITIES.push(casuality);
        }
        console.log(this.ptoService.pto);
    };
    PtoNewComponent.prototype.getDateStr = function (dtStr) {
        if (dtStr) {
            var dt = new Date(dtStr);
            var month = dt.getMonth() + 1;
            var monthStr = month < 10 ? '0' + month : '' + month;
            var date = dt.getDate();
            var dateStr = date < 10 ? '0' + date : '' + date;
            return dt.getFullYear() + '-' + monthStr + '-' + dateStr;
        }
        else {
            return dtStr;
        }
    };
    PtoNewComponent.prototype.onSelect = function (formControl, type) {
        formControl.patchValue({ particular: type });
    };
    PtoNewComponent.prototype.deleteCas = function (formControl) {
        var casIndex = this.ptoForm.get('casualities').controls.indexOf(formControl);
        this.ptoForm.get('casualities').controls.splice(casIndex, 1);
        this.ptoService.pto.CASUALITIES.splice(casIndex, 1);
        console.log('After Delete-PTO : ', this.ptoService.pto);
    };
    PtoNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-pto-new',
            template: __webpack_require__("../../../../../src/app/pto-new/pto-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pto-new/pto-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_pto_service__["a" /* PTOService */]])
    ], PtoNewComponent);
    return PtoNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pto-preview/pto-preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.filler{\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\nh2 {\n    text-align: center;\n}\ntable {\n    width: 100%;\n}\n.sno {\n    width: 10%;\n}\n.mesno {\n    width: 20%;\n}\n.design {\n    width: 10%;\n}\n.date {\n    width: 10%;\n}\n.particular {\n    width: 50%;\n}\nbutton {\n    margin: 5px;\n}\nth {\n    height: 80px;\n    border-bottom: 2px solid black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pto-preview/pto-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>\n    Part-II Order<br> by {{ ptoService.pto.UNIT }}, {{ ptoService.pto.STATION }}\n  </h2>\n  <div class=\"row\">\n    <span>UNIT : {{ ptoService.pto.UNIT }}</span>\n    <span class=\"filler\"></span>\n    <span>S.No. : {{ ptoService.pto.PTO_No }} / {{ ptoService.pto.YEAR }}</span>\n  </div>\n  <div class=\"row\">\n    <span>STATION : {{ ptoService.pto.STATION }}</span>\n    <span class=\"filler\"></span>\n    <span>Dated : {{ ptoService.pto.DATE }}</span>\n  </div>\n  <hr>\n  <table id=\"table\">\n    <tr>\n      <th class=\"sno\">S.No.</th>\n      <th class=\"mesno\">MES No & Name</th>\n      <th class=\"design\">Design</th>\n      <th class=\"date\">Date</th>\n      <th class=\"particular\">Particulars</th>\n    </tr>\n    <tr *ngFor=\"let cas of ptoService.pto.CASUALITIES\">\n      <td>{{ cas.S_No }}</td>\n      <td>MES - {{ cas.MES_No }} <br> {{ cas.NAME }}</td>\n      <td>{{ cas.CATEGORY }}</td>\n      <td>{{ cas.DATE }}</td>\n      <td>{{ cas.PARTICULAR }}</td>\n    </tr>\n  </table>\n  <hr>\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <span class=\"filler\"></span>\n      <div>\n        <button mat-raised-button (click)=\"print()\"color=\"primary\">Print</button>\n      </div>\n      <div>\n        <button mat-raised-button (click)=\"back('New PTO')\"color=\"primary\">Edit</button>\n      </div>\n      <div>\n        <button mat-raised-button (click)=\"publish()\"color=\"primary\">Publish</button>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pto-preview/pto-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PtoPreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jspdf_dist_jspdf_min__ = __webpack_require__("../../../../jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jspdf_dist_jspdf_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jspdf_dist_jspdf_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pto_service__ = __webpack_require__("../../../../../src/app/services/pto.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PtoPreviewComponent = (function () {
    function PtoPreviewComponent(ptoService, snackBar) {
        this.ptoService = ptoService;
        this.snackBar = snackBar;
        this.goBack = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    PtoPreviewComponent.prototype.publish = function () {
        var _this = this;
        var showSnackBar = true;
        if ((this.ptoService.pto.PTO_No !== 0) && (this.ptoService.pto.YEAR !== 0) &&
            this.ptoService.pto.UNIT && this.ptoService.pto.STATION && this.ptoService.pto.DATE) {
            this.ptoService.filterPtos(this.ptoService.pto).subscribe(function (ptos) {
                console.log('ptos.length : ', ptos.length);
                if (ptos.length === 0) {
                    _this.ptoService.addPto(_this.ptoService.pto);
                    console.log('Added PTO : ', _this.ptoService.pto);
                    _this.ptoService.pto = {
                        PTO_No: null,
                        YEAR: null,
                        UNIT: '',
                        STATION: '',
                        DATE: '',
                        CASUALITIES: []
                    };
                    showSnackBar = false;
                    // console.log('PTO Reset : ', this.ptoService.pto);
                    _this.back('List');
                }
                else {
                    if (showSnackBar) {
                        console.log('This PTO is already Published');
                        _this.snackBar.open('This PTO is already Published !', '', { duration: 2000, });
                    }
                }
            });
        }
    };
    PtoPreviewComponent.prototype.back = function (navItem) {
        this.goBack.emit(navItem);
    };
    PtoPreviewComponent.prototype.print = function () {
        __WEBPACK_IMPORTED_MODULE_1_jspdf_dist_jspdf_min___default.a.API.hline = function (x, y, width) {
            this.lines([[width, 0]], x, y, [1, 1], 'S', false);
        };
        __WEBPACK_IMPORTED_MODULE_1_jspdf_dist_jspdf_min___default.a.API.heading = function (pto) {
            this.setFontSize(16);
            this.text(['Part-II Order', '       By', pto.UNIT + ' ' + pto.STATION], 90, 7);
            this.setLineWidth(0.3);
            this.hline(15, 38, 180);
            this.hline(15, 55, 180);
            this.setFontSize(10);
            this.text('UNIT : ' + pto.UNIT, 15, 30);
            this.text('STATION : ' + pto.STATION, 15, 35);
            this.text('S.No. : ' + pto.PTO_No + '/' + pto.YEAR, 165, 30);
            this.text('DATE : ' + pto.DATE, 165, 35);
            this.text('S.No.', 15, 48);
            this.text('MES No., Name & Category', 30, 48);
            this.text('Date', 80, 48);
            this.text('Particulars', 130, 48);
        };
        var doc = new __WEBPACK_IMPORTED_MODULE_1_jspdf_dist_jspdf_min___default.a();
        doc.heading(this.ptoService.pto);
        var partY = 60;
        for (var _i = 0, _a = this.ptoService.pto.CASUALITIES; _i < _a.length; _i++) {
            var cas = _a[_i];
            var arrPart = this.split(cas.PARTICULAR, 55);
            doc.text(cas.S_No, 20, partY);
            doc.text([cas.MES_No, cas.NAME, cas.CATEGORY], 30, partY);
            doc.text(cas.DATE, 75, partY);
            doc.text(arrPart, 100, partY);
            partY = arrPart.length < 3 ? partY + 15 : partY + arrPart.length * 5;
            if (partY > 260) {
                doc.addPage();
                doc.heading(this.ptoService.pto);
                partY = 60;
            }
        }
        doc.save(this.ptoService.pto.UNIT + '-' + this.ptoService.pto.STATION + '-' +
            this.ptoService.pto.PTO_No + '-' + this.ptoService.pto.YEAR + '.pdf');
    };
    PtoPreviewComponent.prototype.split = function (str, segment) {
        var index = 0;
        var arrStr = [];
        var part;
        while (index < str.length) {
            part = str.substr(index, segment);
            arrStr.push(part);
            index += segment;
        }
        return arrStr;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], PtoPreviewComponent.prototype, "goBack", void 0);
    PtoPreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-pto-preview',
            template: __webpack_require__("../../../../../src/app/pto-preview/pto-preview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pto-preview/pto-preview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_pto_service__["a" /* PTOService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatSnackBar */]])
    ], PtoPreviewComponent);
    return PtoPreviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pto-search/pto-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.pto-ptono {\n    width: 20%;\n}\n.pto-year {\n    width: 20%;\n}\n.pto-unit{\n    width: 20%;\n}\n.pto-station{\n    width: 20%;\n}\n.pto-date{\n    width: 20%;\n}\nmat-form-field {\n    width: 90%;\n}\na {\n    padding: 0px 25px;\n}\n.filler {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\nlabel {\n    font-weight: bold;\n    color: black;\n}\n.btn {\n    color: white;\n    background-color: rgb(50, 162, 250);\n    font-weight: bold;\n}\nh2 {\n    text-align: center;\n    font-size: 24px;\n    font-weight: bold;\n    margin: 0px;\n    padding: 0px;\n}\n.row {\n    margin: 0px;\n    padding: 0px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pto-search/pto-search.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-card class=\"example-card\">\n    <mat-card-content>\n      <form (ngSubmit)=\"onSubmit()\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n          <div>\n            <button mat-raised-button type=\"submit\" color=\"primary\">Search</button>\n          </div>\n          <span class=\"filler\"></span>\n          <div><h2>PTO-II Order List</h2></div>\n          <span class=\"filler\"></span>   \n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <div class=\"pto-no\">\n              <mat-form-field>\n                <input matInput placeholder=\"PTO No\" type=\"text\" [(ngModel)]=\"pto.PTO_No\" name=\"ptono\">\n              </mat-form-field>\n              <a href=\"#\"  (click)=\"onSort(0)\">\n                  <i class=\"fa fa-sort\" *ngIf=\"sortCol !== 0\"></i>\n                  <i class=\"fa fa fa-sort-numeric-asc\" *ngIf=\"(sortCol === 0 && sortUp)\"></i>\n                  <i class=\"fa fa fa-sort-numeric-desc\" *ngIf=\"(sortCol === 0 && !sortUp)\"></i>\n              </a>   \n            </div>\n\n            <div class=\"pto-year\">\n              <mat-form-field>\n                <input matInput placeholder=\"Year\" type=\"text\" [(ngModel)]=\"pto.YEAR\" name=\"year\">\n              </mat-form-field>\n              <a href=\"#\"  (click)=\"onSort(1)\">\n                  <i class=\"fa fa fa-sort\" *ngIf=\"sortCol !== 1\"></i>\n                  <i class=\"fa fa fa-sort-numeric-asc\" *ngIf=\"(sortCol === 1 && sortUp)\"></i>\n                  <i class=\"fa fa fa-sort-numeric-desc\" *ngIf=\"(sortCol === 1 && !sortUp)\"></i>\n              </a>\n            </div>\n\n            <div class=\"pto-unit\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Unit\" type=\"text\" [(ngModel)]=\"pto.UNIT\" name=\"unit\">\n                  </mat-form-field>\n              <a href=\"#\"  (click)=\"onSort(2)\">\n                <i class=\"fa fa fa-sort\" *ngIf=\"sortCol !== 2\"></i>\n                <i class=\"fa fa fa-sort-alpha-asc\" *ngIf=\"(sortCol === 2 && sortUp)\"></i>\n                <i class=\"fa fa fa-sort-alpha-desc\" *ngIf=\"(sortCol === 2 && !sortUp)\"></i>\n              </a>\n            </div>\n\n            <div class=\"pto-station\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Station\" type=\"text\" [(ngModel)]=\"pto.STATION\" name=\"station\">\n                  </mat-form-field>\n              <a href=\"#\"  (click)=\"onSort(3)\">\n                <i class=\"fa fa fa-sort\" *ngIf=\"sortCol !== 3\"></i>\n                <i class=\"fa fa fa-sort-alpha-asc\" *ngIf=\"(sortCol === 3 && sortUp)\"></i>\n                <i class=\"fa fa fa-sort-alpha-desc\" *ngIf=\"(sortCol === 3 && !sortUp)\"></i>\n              </a>\n            </div>\n\n            <div class=\"pto-date\">\n              <mat-form-field>\n                <input matInput [matDatepicker]=\"picker1\" placeholder=\"Date\" [(ngModel)]=\"pto.DATE\" name=\"date\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                <mat-datepicker #picker1></mat-datepicker>\n              </mat-form-field>\n              <a href=\"#\"  (click)=\"onSort(4)\">\n                <i class=\"fa fa fa-sort\" *ngIf=\"sortCol !== 4\"></i>\n                <i class=\"fa fa fa-sort-numeric-asc\" *ngIf=\"(sortCol === 4 && sortUp)\"></i>\n                <i class=\"fa fa fa-sort-numeric-desc\" *ngIf=\"(sortCol === 4 && !sortUp)\"></i>\n              </a>\n            </div>\n   \n        </div>\n\n      </form>\n    </mat-card-content>\n</mat-card>\n\n          \n          \n          "

/***/ }),

/***/ "../../../../../src/app/pto-search/pto-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PtoSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pto_service__ = __webpack_require__("../../../../../src/app/services/pto.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PtoSearchComponent = (function () {
    function PtoSearchComponent(ptoService) {
        this.ptoService = ptoService;
        this.pto = {
            PTO_No: null,
            YEAR: null,
            UNIT: '',
            STATION: '',
            DATE: ''
        };
    }
    PtoSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ptoService.search.subscribe(function (pto) { return _this.pto = pto; });
    };
    PtoSearchComponent.prototype.onSubmit = function () {
        this.pto.PTO_No = this.pto.PTO_No ? +this.pto.PTO_No : null;
        this.pto.YEAR = this.pto.YEAR ? +this.pto.YEAR : null;
        this.pto.DATE = this.getDateStr(this.pto.DATE);
        this.ptoService.search.next(this.pto);
        console.log(this.pto);
        this.sortCol = -1;
    };
    PtoSearchComponent.prototype.getDateStr = function (dtStr) {
        if (dtStr) {
            var dt = new Date(dtStr);
            var month = dt.getMonth() + 1;
            var monthStr = month < 10 ? '0' + month : '' + month;
            var date = dt.getDate();
            var dateStr = date < 10 ? '0' + date : '' + date;
            return dt.getFullYear() + '-' + monthStr + '-' + dateStr;
        }
        else {
            return dtStr;
        }
    };
    PtoSearchComponent.prototype.onSort = function (index) {
        this.sortCol = index;
        this.sortUp = !this.sortUp;
        this.ptoService.sort.next(index);
    };
    PtoSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-pto-search',
            template: __webpack_require__("../../../../../src/app/pto-search/pto-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pto-search/pto-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_pto_service__["a" /* PTOService */]])
    ], PtoSearchComponent);
    return PtoSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pto/pto.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nmat-sidenav {\n    width: 13%;\n}\nmat-form-field {\n    width: 95%;\n}\n.card-1 {\n    margin-bottom: 5px;\n}\n.card-2 {\n    padding-top: 5px;\n    padding-bottom: 15px;\n    padding-left: 5px;\n    padding-right: 5px;\n    background-color: aliceblue;\n}\nmat-list-item {\n    border-bottom-style: solid;\n    border-bottom-width: 2px;\n    border-bottom-color: black;\n}\nh2 {\n    text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pto/pto.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n    \n  <mat-sidenav mode=\"side\" opened fixedInViewport=\"true\" fixedTopGap=\"110\">\n    <mat-nav-list>\n      <a mat-list-item *ngFor=\"let nav of fillerNav\" (click)=\"onNavItemClick(nav)\">{{nav}}</a>\n      <mat-card class=\"card-2\">\n          <mat-form-field>\n            <input matInput placeholder=\"MES No\" type=\"text\" [(ngModel)]=\"mesno\" name=\"mesno\">\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput [matDatepicker]=\"picker1\" placeholder=\"PTO Date From\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n            <mat-datepicker #picker1></mat-datepicker>\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput [matDatepicker]=\"picker2\" placeholder=\"PTO Date Upto\" [(ngModel)]=\"dateUpto\" name=\"dateUpto\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n            <mat-datepicker #picker2></mat-datepicker>\n          </mat-form-field>\n\n        <div>\n          <button mat-raised-button (click)=\"searchCas()\"color=\"primary\">Search Casualities</button>\n        </div>\n      </mat-card>\n      <a mat-list-item (click)=\"onNavItemClick('help')\">Help</a>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <mat-sidenav-content id=\"content\">\n    <mat-card class=\"card-1\">\n        <app-pto-list *ngIf=\"page === 'list'\" (detailClicked)=\"page = 'preview'\"></app-pto-list>\n        <app-pto-new  *ngIf=\"page === 'new'\"></app-pto-new>\n        <app-pto-preview *ngIf=\"page === 'preview'\" (goBack)=\"onNavItemClick($event)\"></app-pto-preview>\n        <app-cas-list  *ngIf=\"page === 'cas'\" (detailClicked)=\"page = 'preview'\"></app-cas-list>\n        <app-help  *ngIf=\"page === 'help'\"></app-help>\n    </mat-card>\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/pto/pto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PtoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pto_service__ = __webpack_require__("../../../../../src/app/services/pto.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PtoComponent = (function () {
    function PtoComponent(ptoService, snackBar) {
        this.ptoService = ptoService;
        this.snackBar = snackBar;
        this.page = 'list';
        this.fillerNav = ['List', 'New PTO', 'New Casuality', 'Publish...'];
    }
    PtoComponent.prototype.onNavItemClick = function (navItem) {
        console.log('Item Clicked : ' + navItem);
        if (navItem === 'List') {
            this.page = 'list';
            this.ptoService.search.next({ PTO_No: null, YEAR: null, UNIT: '', STATION: '', DATE: '' });
        }
        if (navItem === 'New PTO') {
            this.page = 'new';
        }
        if (navItem === 'Publish...') {
            this.ptoService.preview.next();
            if ((this.ptoService.pto.PTO_No !== 0) && (this.ptoService.pto.YEAR !== 0) &&
                this.ptoService.pto.UNIT && this.ptoService.pto.STATION && this.ptoService.pto.DATE) {
                this.page = 'preview';
            }
        }
        if (navItem === 'New Casuality') {
            var casuality = {
                S_No: 0,
                MES_No: 0,
                NAME: '',
                CATEGORY: '',
                DATE: '',
                PARTICULAR: ''
            };
            this.ptoService.casuality.next(casuality);
        }
        if (navItem === 'help') {
            this.page = 'help';
        }
    };
    PtoComponent.prototype.searchCas = function () {
        var _this = this;
        this.page = 'cas';
        console.log('MES No. Type : ', typeof (this.mesno));
        setTimeout(function () {
            _this.dateFrom = _this.getDateStr(_this.dateFrom);
            _this.dateUpto = _this.getDateStr(_this.dateUpto);
            _this.ptoService.casSummary.next({ mesno: _this.mesno, from: _this.dateFrom, upto: _this.dateUpto });
        }, 1000);
    };
    PtoComponent.prototype.getDateStr = function (dtStr) {
        if (dtStr) {
            var dt = new Date(dtStr);
            var month = dt.getMonth() + 1;
            var monthStr = month < 10 ? '0' + month : '' + month;
            var date = dt.getDate();
            var dateStr = date < 10 ? '0' + date : '' + date;
            return dt.getFullYear() + '-' + monthStr + '-' + dateStr;
        }
        else {
            return dtStr;
        }
    };
    PtoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-pto',
            template: __webpack_require__("../../../../../src/app/pto/pto.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pto/pto.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_pto_service__["a" /* PTOService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatSnackBar */]])
    ], PtoComponent);
    return PtoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/AppDateAdapter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppDateAdapter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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

var AppDateAdapter = (function (_super) {
    __extends(AppDateAdapter, _super);
    function AppDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppDateAdapter.prototype.format = function (date, displayFormat) {
        if (displayFormat === 'input') {
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            return year + '-' + this._to2digit(month) + '-' + this._to2digit(day);
        }
        else {
            return date.toDateString();
        }
    };
    AppDateAdapter.prototype._to2digit = function (n) {
        return ('00' + n).slice(-2);
    };
    return AppDateAdapter;
}(__WEBPACK_IMPORTED_MODULE_0__angular_material__["c" /* NativeDateAdapter */]));



/***/ }),

/***/ "../../../../../src/app/services/item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemService = (function () {
    function ItemService(afs) {
        this.afs = afs;
        this.search = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.sort = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.loginStatus = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.itemsSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        // this.items = this.afs.collection('items').valueChanges();
        this.itemsCollection = this.afs.collection('staff');
        this.items = this.itemsCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
    }
    ItemService.prototype.getItems = function () {
        console.log('getItems/ItemService Called, items.length = ' +
            this.items.map(function (a) { return a.forEach(function (item) { return console.log(item); }); }));
        return this.items;
    };
    ItemService.prototype.addItem = function (item) {
        this.itemsCollection.add(item).then(function (docRef) {
            console.log('Document written with ID: ', docRef.id);
        });
    };
    ItemService.prototype.deleteItem = function (item) {
        this.itemDoc = this.afs.doc("staff/" + item.id);
        this.itemDoc.delete();
    };
    ItemService.prototype.updateItem = function (item) {
        console.log(item.id);
        this.itemDoc = this.afs.doc("staff/" + item.id);
        this.itemDoc.update(item);
    };
    ItemService.prototype.filterItems = function (item) {
        this.itemsCollection = this.afs.collection('staff', function (ref) {
            var query = ref;
            if (item.MES_No) {
                query = query.where('MES_No', '==', item.MES_No);
            }
            if (item.NAME) {
                query = query.where('NAME', '==', item.NAME);
            }
            if (item.CATEGORY) {
                query = query.where('CATEGORY', '==', item.CATEGORY);
            }
            if (item.DOB) {
                query = query.where('DOB', '<=', item.DOB);
            }
            if (item.DOJ) {
                query = query.where('DOJ', '<=', item.DOJ);
            }
            if (item.UNIT) {
                query = query.where('UNIT', '==', item.UNIT);
            }
            if (item.UNIT_SENIORITY) {
                query = query.where('UNIT_SENIORITY', '<=', item.UNIT_SENIORITY);
            }
            if (item.STATION) {
                query = query.where('STATION', '==', item.STATION);
            }
            if (item.STN_SENIORITY) {
                query = query.where('STN_SENIORITY', '<=', item.STN_SENIORITY);
            }
            if (item.REMARKS) {
                query = query.where('REMARKS', '==', item.REMARKS);
            }
            return query;
        });
        return this.itemsCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
    };
    ItemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "../../../../../src/app/services/pto.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PTOService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Casuality } from '../models/casuality';
var PTOService = (function () {
    function PTOService(afs) {
        this.afs = afs;
        this.search = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.sort = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.casuality = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.preview = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.casSummary = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.pto = {
            PTO_No: null,
            YEAR: null,
            UNIT: '',
            STATION: '',
            DATE: '',
            CASUALITIES: []
        };
        this.ptoCollection = this.afs.collection('pto');
        this.ptos = this.ptoCollection.valueChanges();
        // this.ptos = this.ptoCollection.snapshotChanges().map(changes => {
        //     return changes.map(a => {
        //         const data = a.payload.doc.data() as PTO;
        //         data.id = a.payload.doc.id;
        //         console.log('Get PTOs - data : ' + JSON.stringify(data));
        //         return data;
        //     });
        // });
        // afs.collection('pto').auditTrail().subscribe(console.log);
    }
    PTOService.prototype.getPtos = function () {
        return this.ptos;
    };
    PTOService.prototype.addPto = function (pto) {
        this.ptoCollection.add(pto).then(function (docRef) {
            console.log('Document written with ID: ', docRef.id);
        });
    };
    PTOService.prototype.filterPtos = function (pto) {
        console.log('Filtering PTOs');
        this.ptoCollection = this.afs.collection('pto', function (ref) {
            var query = ref;
            if (pto.PTO_No) {
                query = query.where('PTO_No', '==', pto.PTO_No);
            }
            if (pto.YEAR) {
                query = query.where('YEAR', '==', pto.YEAR);
            }
            if (pto.UNIT) {
                query = query.where('UNIT', '==', pto.UNIT);
            }
            if (pto.STATION) {
                query = query.where('STATION', '==', pto.STATION);
            }
            if (pto.DATE) {
                query = query.where('DATE', '==', pto.DATE);
            }
            return query;
        });
        return this.ptoCollection.snapshotChanges().map(function (changes) {
            console.log('changes : ', changes);
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                console.log('Filter PTOs - data : ' + JSON.stringify(data));
                return data;
            });
        });
    };
    PTOService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], PTOService);
    return PTOService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    firebase: {
        apiKey: 'AIzaSyB5c9p0_LYTRvydvFx1plqjuu_jYOkcX40',
        authDomain: 'cecc-staff.firebaseapp.com',
        databaseURL: 'https://cecc-staff.firebaseio.com',
        projectId: 'cecc-staff',
        storageBucket: 'cecc-staff.appspot.com',
        messagingSenderId: '912423078961'
    }
};


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    firebase: {
        apiKey: 'AIzaSyB5c9p0_LYTRvydvFx1plqjuu_jYOkcX40',
        authDomain: 'cecc-staff.firebaseapp.com',
        databaseURL: 'https://cecc-staff.firebaseio.com',
        projectId: 'cecc-staff',
        storageBucket: 'cecc-staff.appspot.com',
        messagingSenderId: '912423078961'
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map