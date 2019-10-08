(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span>└</span><mat-icon>videogame_asset</mat-icon> \n      <span class=\"titulo\"> &nbsp;TP Sala de Juegos  &nbsp; </span>  \n      <mat-icon>videogame_asset</mat-icon><span>┐</span>\n      <span class=\"example-spacer\"></span>\n      <button mat-icon-button [routerLink]=\"['home']\"><span>Menu</span> </button>\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n        <mat-icon>more_vert</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item [routerLink]=\"['detalle']\">\n            <mat-icon>details</mat-icon>\n            <span>Detalles</span>\n          </button>\n          <button mat-menu-item [routerLink]=\"['usuarios']\">\n            <mat-icon>person_add_disabled</mat-icon>\n            <span>Usuarios</span>\n          </button>\n          <button mat-menu-item [routerLink]=\"['home']\">\n            <mat-icon>home</mat-icon>\n            <span>Home</span>\n          </button>\n\n        <button mat-menu-item [matMenuTriggerFor]=\"juegos\">Juegos</button>\n        <mat-menu #juegos=\"matMenu\" xPosition=\"before\">\n          <button mat-menu-item [routerLink]=\"['juegos']\">\n            <mat-icon>videogame_asset</mat-icon>\n            <span>Anagrama</span>\n          </button>\n          <button mat-menu-item [routerLink]=\"['juegos']\">\n            <mat-icon>games</mat-icon>\n            <span>Tateti</span>\n          </button>\n      </mat-menu>\n          \n    </mat-menu>\n\n\n    </mat-toolbar-row>\n  </mat-toolbar>\n<div class=\"contenedor\" cdk-scrollable>\n  <router-outlet></router-outlet>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/addusuario/addusuario.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/addusuario/addusuario.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/anagrama/anagrama.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/anagrama/anagrama.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  anagrama works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fila/fila.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fila/fila.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<td  mat-cell *matCellDef=\"let user\"> {{item.nombre}}</td>\n<td  mat-cell *matCellDef=\"let user\"> {{item.apellido}} </td>\n<td  mat-cell *matCellDef=\"let user\"> {{item.dni}} </td>\n<!-- <td mat-cell> {{item.sueldo}} </td>\n<td mat-cell> {{item.edad}} </td>\n<td mat-cell> {{item.licencia}} </td>\n<td mat-cell> {{item.fecha_nac | date:\"MM/DD/YY\"}} </td> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-datos/form-datos.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-datos/form-datos.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table mat-table [dataSource]=\"usuarios\" class=\"mat-elevation-z8\">\n    <ng-container [matColumnDef]=\"column\" *ngFor=\"let column of arrayUsuario\">\n        <th mat-header-cell *matHeaderCellDef> {{ column | titlecase}} </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n    <tr mat-row *matRowDef=\"let myRowData; columns: columnsToDisplay\"></tr>\n</table>\n\n<!-- <thead mat-header-row> \n    <td mat-header-cell *ngFor=\"let item of arrayUsuario\">{{ item }} </td>\n </thead>\n <tbody *ngFor=\"let item of usuarios\" app-fila [item]=\"item\">\n\n</tbody>     -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tateti/tateti.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tateti/tateti.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align: center\">\n    <button mat-raised-button (click)=\"presion(0,0)\" class=\"casilla\">{{posiciones[0][0]}}</button>\n    <button mat-raised-button (click)=\"presion(0,1)\" class=\"casilla\">{{posiciones[0][1]}}</button>\n    <button mat-raised-button (click)=\"presion(0,2)\" class=\"casilla\">{{posiciones[0][2]}}</button>\n    <br>\n    <button mat-raised-button (click)=\"presion(1,0)\" class=\"casilla\">{{posiciones[1][0]}}</button>\n    <button mat-raised-button (click)=\"presion(1,1)\" class=\"casilla\">{{posiciones[1][1]}}</button>\n    <button mat-raised-button (click)=\"presion(1,2)\" class=\"casilla\">{{posiciones[1][2]}}</button>\n    <br>\n    <button mat-raised-button (click)=\"presion(2,0)\" class=\"casilla\">{{posiciones[2][0]}}</button>\n    <button mat-raised-button (click)=\"presion(2,1)\" class=\"casilla\">{{posiciones[2][1]}}</button>\n    <button mat-raised-button (click)=\"presion(2,2)\" class=\"casilla\">{{posiciones[2][2]}}</button>\n  </div>\n  <div style=\"text-align: center\">\n    <button mat-button color=\"primary\" (click)=\"reiniciar()\">Reiniciar</button>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle/detalle.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle/detalle.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 mat-subheader>Detalle de Usuarios <span> </span>  \n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">table_chart</mat-icon>\n</h3>\n\n<!-- <form-datos-component [usuarios]='usuarios'></form-datos-component> -->\n<app-form-datos [usuarios]='usuarios'></app-form-datos>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error/error.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error/error.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>error works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Bienvenido a Casa</p>\n \n    <button mat-button  [routerLink]=\"['../juegos']\">\n    <mat-icon>videogame_asset</mat-icon>\n    <span>Ir a Juegos</span>\n</button>\n<button mat-button  [routerLink]=\"['../home']\">\n    <mat-icon>home</mat-icon>\n    <span>Ir a Home</span>\n</button>\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/juegos/juegos.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/juegos/juegos.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Juegos works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuarios/usuarios.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuarios/usuarios.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contenedor\">\n<h3 mat-subheader>Listado de Usuarios</h3>\n<div *ngIf='usuarios.length > 0 ; else nousuarios'> \n  <div mat-nav-list class=\"example-button-row\" *ngFor=\"let u of usuarios\">\n  <div mat-list-item>\n      {{u.nombre}} \n      {{u.apellido}} \n      {{u.dni}}\n      <button (click)=\"deleteUsuario($event, u)\" mat-icon-button color=\"warn\" aria-label='Eliminar $(u.nombre)'>\n          <i class=\"material-icons\">delete_forever</i>\n        </button>\n  </div>  \n  </div> \n</div>\n\n<ng-template #nousuarios>\n  <p>no hay usuarios</p>\n</ng-template>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pages_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/detalle/detalle.component */ "./src/app/pages/detalle/detalle.component.ts");
/* harmony import */ var _pages_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/juegos/juegos.component */ "./src/app/pages/juegos/juegos.component.ts");
/* harmony import */ var _pages_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/usuarios/usuarios.component */ "./src/app/pages/usuarios/usuarios.component.ts");
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/error/error.component */ "./src/app/pages/error/error.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _components_addusuario_addusuario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/addusuario/addusuario.component */ "./src/app/components/addusuario/addusuario.component.ts");
/* harmony import */ var _components_form_datos_form_datos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/form-datos/form-datos.component */ "./src/app/components/form-datos/form-datos.component.ts");
/* harmony import */ var _components_fila_fila_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/fila/fila.component */ "./src/app/components/fila/fila.component.ts");
/* harmony import */ var _components_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/anagrama/anagrama.component */ "./src/app/components/anagrama/anagrama.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");










/* import { PagesModule } from './pages/pages.module'; */


const routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'juegos', component: _pages_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_2__["JuegosComponent"] },
    { path: 'detalle', component: _pages_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_1__["DetalleComponent"] },
    { path: 'usuarios', component: _pages_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_3__["UsuariosComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'not-found' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]]
    })
], AppRoutingModule);

const routingComponents = [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _pages_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_3__["UsuariosComponent"],
    _pages_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_2__["JuegosComponent"], _pages_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_1__["DetalleComponent"], _pages_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"], _components_addusuario_addusuario_component__WEBPACK_IMPORTED_MODULE_6__["AddusuarioComponent"],
    _components_form_datos_form_datos_component__WEBPACK_IMPORTED_MODULE_7__["FormDatosComponent"], _components_fila_fila_component__WEBPACK_IMPORTED_MODULE_8__["FilaComponent"], _components_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_9__["AnagramaComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-button-row button,\r\n.example-button-row a {\r\n  margin-right: 8px;\r\n}\r\n.example-icon {\r\n  padding: 0 14px;\r\n}\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\nmat-toolbar{\r\n  font-family: Roboto,\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif;\r\n  margin: 0;\r\n   \r\n\r\n}\r\n.contenedor {\r\n/*   width: 80%;\r\n  display: flex;\r\n \r\n  margin: 10px auto 20%;*/\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 0 8px;\r\n  overflow: auto; \r\n  border: 1px solid #ccc;\r\n \r\n}\r\n.titulo{\r\n  font-size: 24px;\r\n /*  font-family: medium-content-sans-serif-font, \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Geneva, Arial, sans-serif;*/\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxzR0FBc0c7RUFDdEcsU0FBUzs7O0FBR1g7QUFDQTtBQUNBOzs7eUJBR3lCO0VBQ3ZCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsc0JBQXNCOztBQUV4QjtBQUNBO0VBQ0UsZUFBZTtDQUNoQixtSUFBbUk7QUFDcEkiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9uLFxyXG4uZXhhbXBsZS1idXR0b24tcm93IGEge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbi5leGFtcGxlLWljb24ge1xyXG4gIHBhZGRpbmc6IDAgMTRweDtcclxufVxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbm1hdC10b29sYmFye1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZSBMaWdodFwiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsXCJMdWNpZGEgR3JhbmRlXCIsc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IDA7XHJcbiAgIFxyXG5cclxufVxyXG4uY29udGVuZWRvciB7XHJcbi8qICAgd2lkdGg6IDgwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gXHJcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMjAlOyovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgOHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvOyBcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gXHJcbn1cclxuLnRpdHVsb3tcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAvKiAgZm9udC1mYW1pbHk6IG1lZGl1bS1jb250ZW50LXNhbnMtc2VyaWYtZm9udCwgXCJMdWNpZGEgR3JhbmRlXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkx1Y2lkYSBTYW5zXCIsIEdlbmV2YSwgQXJpYWwsIHNhbnMtc2VyaWY7Ki9cclxufSAiXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'tp-sala-de-juegos';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _components_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tateti/tateti.component */ "./src/app/components/tateti/tateti.component.ts");






/* import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; */
//material



/* import { DetalleComponent } from './pages/detalle/detalle.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { HomeComponent } from './pages/home/home.component'; */
/* import { NoopAnimationsModule} from '@angular/platform-browser/animations'
import {MatListModule} from '@angular/material/list'; */
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"],
            _components_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_8__["TatetiComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_5__["PagesModule"],
            /*   NgbModule, */
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _material__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/addusuario/addusuario.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/addusuario/addusuario.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-list-icon {\r\n    color: rgba(0, 0, 0, 0.54);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGR1c3VhcmlvL2FkZHVzdWFyaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtFQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkdXN1YXJpby9hZGR1c3VhcmlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWxpc3QtaWNvbiB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/components/addusuario/addusuario.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/addusuario/addusuario.component.ts ***!
  \***************************************************************/
/*! exports provided: AddusuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddusuarioComponent", function() { return AddusuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddusuarioComponent = class AddusuarioComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddusuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addusuario',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addusuario.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/addusuario/addusuario.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addusuario.component.css */ "./src/app/components/addusuario/addusuario.component.css")).default]
    })
], AddusuarioComponent);



/***/ }),

/***/ "./src/app/components/anagrama/anagrama.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/anagrama/anagrama.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5hZ3JhbWEvYW5hZ3JhbWEuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/anagrama/anagrama.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/anagrama/anagrama.component.ts ***!
  \***********************************************************/
/*! exports provided: AnagramaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnagramaComponent", function() { return AnagramaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnagramaComponent = class AnagramaComponent {
    constructor() { }
    ngOnInit() {
    }
};
AnagramaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-anagrama',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./anagrama.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/anagrama/anagrama.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./anagrama.component.css */ "./src/app/components/anagrama/anagrama.component.css")).default]
    })
], AnagramaComponent);



/***/ }),

/***/ "./src/app/components/fila/fila.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/fila/fila.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmlsYS9maWxhLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/fila/fila.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/fila/fila.component.ts ***!
  \***************************************************/
/*! exports provided: FilaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilaComponent", function() { return FilaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilaComponent = class FilaComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FilaComponent.prototype, "item", void 0);
FilaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[app-fila]',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fila.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fila/fila.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fila.component.css */ "./src/app/components/fila/fila.component.css")).default]
    })
], FilaComponent);



/***/ }),

/***/ "./src/app/components/form-datos/form-datos.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/form-datos/form-datos.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtLWRhdG9zL2Zvcm0tZGF0b3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS1kYXRvcy9mb3JtLWRhdG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/form-datos/form-datos.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/form-datos/form-datos.component.ts ***!
  \***************************************************************/
/*! exports provided: FormDatosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDatosComponent", function() { return FormDatosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let FormDatosComponent = class FormDatosComponent {
    constructor() {
        this.arrayUsuario = Object.keys(new _models_usuario__WEBPACK_IMPORTED_MODULE_1__["miUsuario"]);
        this.columnsToDisplay = this.arrayUsuario.slice();
        this.ArrayUsuarios = [];
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], FormDatosComponent.prototype, "usuarios", void 0);
FormDatosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-form-datos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-datos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-datos/form-datos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-datos.component.css */ "./src/app/components/form-datos/form-datos.component.css")).default]
    })
], FormDatosComponent);



/***/ }),

/***/ "./src/app/components/tateti/tateti.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/tateti/tateti.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".casilla {\r\n    height: 5rem;\r\n    margin: 0.5rem;\r\n    font-size: 3rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXRldGkvdGF0ZXRpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RhdGV0aS90YXRldGkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXNpbGxhIHtcclxuICAgIGhlaWdodDogNXJlbTtcclxuICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/tateti/tateti.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/tateti/tateti.component.ts ***!
  \*******************************************************/
/*! exports provided: TatetiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TatetiComponent", function() { return TatetiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TatetiComponent = class TatetiComponent {
    constructor() {
        this.posiciones = [['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-']];
        this.jugador = 'O';
    }
    ngOnInit() {
    }
    presion(fila, columna) {
        if (this.posiciones[fila][columna] == '-') {
            this.posiciones[fila][columna] = this.jugador;
            this.verificarGano('X');
            this.verificarGano('O');
            this.cambiarJugador();
        }
    }
    reiniciar() {
        for (let f = 0; f < 3; f++)
            for (let c = 0; c < 3; c++)
                this.posiciones[f][c] = '-';
    }
    cambiarJugador() {
        if (this.jugador == 'O')
            this.jugador = 'X';
        else
            this.jugador = 'O';
    }
    verificarGano(ficha) {
        if (this.posiciones[0][0] == ficha && this.posiciones[0][1] == ficha && this.posiciones[0][2] == ficha)
            alert('Gano:' + ficha);
        if (this.posiciones[1][0] == ficha && this.posiciones[1][1] == ficha && this.posiciones[1][2] == ficha)
            alert('Gano:' + ficha);
        if (this.posiciones[2][0] == ficha && this.posiciones[2][1] == ficha && this.posiciones[2][2] == ficha)
            alert('Gano:' + ficha);
        if (this.posiciones[0][0] == ficha && this.posiciones[1][0] == ficha && this.posiciones[2][0] == ficha)
            alert('Gano:' + ficha);
        if (this.posiciones[0][1] == ficha && this.posiciones[1][1] == ficha && this.posiciones[2][1] == ficha)
            alert('Gano:' + ficha);
        if (this.posiciones[0][2] == ficha && this.posiciones[1][2] == ficha && this.posiciones[2][2] == ficha)
            alert('Gano:' + ficha);
        if (this.posiciones[0][0] == ficha && this.posiciones[1][1] == ficha && this.posiciones[2][2] == ficha)
            alert('Gano:' + ficha);
        if (this.posiciones[0][2] == ficha && this.posiciones[1][1] == ficha && this.posiciones[2][0] == ficha)
            alert('Gano:' + ficha);
    }
};
TatetiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tateti',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tateti.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tateti/tateti.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tateti.component.css */ "./src/app/components/tateti/tateti.component.css")).default]
    })
], TatetiComponent);



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

// GERMAN Molina hago este archivo para importar todo lo relacionado a Material.IO
// desde a este archivo y que el app me quede mas limpio
//https://material.io/resources/icons/?icon=fingerprint&style=baseline iconos!








let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
        imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"]],
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"]],
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/models/usuario.ts":
/*!***********************************!*\
  !*** ./src/app/models/usuario.ts ***!
  \***********************************/
/*! exports provided: miUsuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "miUsuario", function() { return miUsuario; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class miUsuario {
    constructor(nombre, apellido, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }
}


/***/ }),

/***/ "./src/app/pages/detalle/detalle.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/detalle/detalle.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("i{\r\nbottom:0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWxsZS9kZXRhbGxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxVQUFVO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXRhbGxlL2RldGFsbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIml7XHJcbmJvdHRvbTowcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/detalle/detalle.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/detalle/detalle.component.ts ***!
  \****************************************************/
/*! exports provided: DetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleComponent", function() { return DetalleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/usuarios.service */ "./src/app/services/usuarios.service.ts");




let DetalleComponent = class DetalleComponent {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
        this.usuarios = [];
    }
    ngOnInit() {
        this.usuarioService.GetUsers().subscribe(usuarios => {
            this.usuarios = usuarios;
            console.log(usuarios);
        }, function () { console.log("Error"); });
        console.log("ngOnInit");
    }
    Cargar(usuario) {
        console.log(usuario);
        this.usuarios.push(new _models_usuario__WEBPACK_IMPORTED_MODULE_2__["miUsuario"](usuario.nombre, usuario.apellido, usuario.dni));
    }
};
DetalleComponent.ctorParameters = () => [
    { type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"] }
];
DetalleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalle',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle/detalle.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detalle.component.css */ "./src/app/pages/detalle/detalle.component.css")).default]
    })
], DetalleComponent);



/***/ }),

/***/ "./src/app/pages/error/error.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/error/error.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/error/error.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/error/error.component.ts ***!
  \************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorComponent = class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error/error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.css */ "./src/app/pages/error/error.component.css")).default]
    })
], ErrorComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/juegos/juegos.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/juegos/juegos.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2p1ZWdvcy9qdWVnb3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/juegos/juegos.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/juegos/juegos.component.ts ***!
  \**************************************************/
/*! exports provided: JuegosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegosComponent", function() { return JuegosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JuegosComponent = class JuegosComponent {
    constructor() { }
    ngOnInit() {
    }
};
JuegosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-juegos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./juegos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/juegos/juegos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./juegos.component.css */ "./src/app/pages/juegos/juegos.component.css")).default]
    })
], JuegosComponent);



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/usuarios.service */ "./src/app/services/usuarios.service.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material */ "./src/app/material.ts");




/* import { AngularFireDatabase } from '@angular/fire/database' */




let PagesModule = class PagesModule {
};
PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"],
            _material__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
        ],
        providers: [_services_usuarios_service__WEBPACK_IMPORTED_MODULE_6__["UsuariosService"]]
    })
], PagesModule);



/***/ }),

/***/ "./src/app/pages/usuarios/usuarios.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/usuarios/usuarios.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 100%;\r\n  }\r\n/* .contenedor{\r\n  background-image: url(\"../../../assets/imagenes/game2.jpg\");\r\n  background-repeat: no-repeat;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXN1YXJpb3MvdXN1YXJpb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYjtBQUNGOzs7R0FHRyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzdWFyaW9zL3VzdWFyaW9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbi8qIC5jb250ZW5lZG9ye1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZW5lcy9nYW1lMi5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufSAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/pages/usuarios/usuarios.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/usuarios/usuarios.component.ts ***!
  \******************************************************/
/*! exports provided: UsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosComponent", function() { return UsuariosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/usuarios.service */ "./src/app/services/usuarios.service.ts");



let UsuariosComponent = class UsuariosComponent {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
        this.usuarios = [];
    }
    ngOnInit() {
        this.usuarioService.GetUsers().subscribe(usuarios => {
            this.usuarios = usuarios;
            console.log(usuarios);
        }, function () { console.log("Error"); });
        console.log("ngOnInit");
    }
    ngOnDestroy() {
        console.log("ngOnDestroy");
    }
    deleteUsuario(event, usuario) {
        console.log(usuario);
        this.usuarioService.deleteUsuario(usuario);
    }
};
UsuariosComponent.ctorParameters = () => [
    { type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"] }
];
UsuariosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usuarios',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./usuarios.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuarios/usuarios.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./usuarios.component.css */ "./src/app/pages/usuarios/usuarios.component.css")).default]
    })
], UsuariosComponent);



/***/ }),

/***/ "./src/app/services/usuarios.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/usuarios.service.ts ***!
  \**********************************************/
/*! exports provided: UsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosService", function() { return UsuariosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let UsuariosService = class UsuariosService {
    constructor(db) {
        this.db = db;
        /* this.usuarios = this.db.collection('usuarios').valueChanges(); */
        this.usuariosCollection = this.db.collection('usuarios');
        this.usuarios = this.usuariosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    }
    GetUsers() {
        console.log(this.usuarios);
        return this.usuarios = this.usuariosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    }
    getUsuariosSC() {
        return this.usuarios;
    }
    deleteUsuario(usuario) {
        this.usuarioDoc = this.db.doc(`usuarios/${usuario.id}`);
        console.log(this.usuarioDoc);
        this.usuarioDoc.delete();
    }
    addUsuario(usuario) {
        this.usuariosCollection.add(usuario);
    }
    updateUsuario(usuario) {
        this.usuarioDoc = this.db.doc(`usuarios/${usuario.id}`);
        this.usuarioDoc.update(usuario);
    }
};
UsuariosService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
UsuariosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsuariosService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyAn7Rru_zjfI4PJn16H1iYJGV6DtKNQYYA",
        authDomain: "tp-lab4-2019.firebaseapp.com",
        databaseURL: "https://tp-lab4-2019.firebaseio.com",
        projectId: "tp-lab4-2019",
        storageBucket: "tp-lab4-2019.appspot.com",
        messagingSenderId: "132837174636",
        appId: "1:132837174636:web:0afc0b8056e4c118925749"
    }
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\TP-Sala_de_Juegos\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map