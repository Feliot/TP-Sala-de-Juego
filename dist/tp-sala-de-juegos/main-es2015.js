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
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" class=\"toolbar\"> \r\n    <mat-toolbar-row>\r\n      <span>└</span><mat-icon>videogame_asset</mat-icon> \r\n      <span class=\"titulo\"> &nbsp;TP Sala de Juegos  &nbsp; </span>  \r\n      <mat-icon>videogame_asset</mat-icon><span>┐</span>\r\n      \r\n      <span class=\"example-spacer\"></span>\r\n    \r\n    <!--   <button mat-icon-button [routerLink]=\"['home']\"><span>Menu</span> </button> -->\r\n      <button mat-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\r\n          <mat-icon>more_vert</mat-icon>\r\n          <span id=\"nameUser\" *ngIf=\"isLogin\"> {{ username.substring(0, 8) }}..</span> <!-- limitado a 10 caracteres para celular -->\r\n        </button>\r\n        <mat-menu #menu=\"matMenu\">\r\n          <button mat-menu-item [routerLink]=\"['home']\" style=\"color:blue\" *ngIf=\"isLogin\">\r\n              <span>     {{ username }}</span>\r\n          </button>\r\n          <button mat-menu-item [routerLink]=\"['home']\" *ngIf=\"isLogin\">\r\n            <mat-icon>home</mat-icon>\r\n            <span>Home</span>\r\n          </button>\r\n          <button mat-menu-item [routerLink]=\"['login']\"  *ngIf=\"!isLogin\">\r\n              <mat-icon>assignment_ind</mat-icon>\r\n              <span>Login</span>\r\n          </button>\r\n          <button mat-menu-item (click)=\"onClickLogout()\" style=\"color:red\" *ngIf=\"isLogin\">\r\n            <mat-icon>logout</mat-icon>\r\n            <span>Desloguearse</span>\r\n          </button>\r\n          <button mat-menu-item [routerLink]=\"['detalle']\" *ngIf=\"isLogin\">\r\n            <mat-icon>details</mat-icon>\r\n            <span>Detalles</span>\r\n          </button>\r\n          <button mat-menu-item [routerLink]=\"['usuarios']\" *ngIf=\"isLogin\">\r\n            <mat-icon>person_add_disabled</mat-icon>\r\n            <span>Usuarios</span>\r\n          </button>\r\n        <button mat-menu-item [matMenuTriggerFor]=\"juegos\" [routerLink]=\"['juegos']\" *ngIf=\"isLogin\">Juegos</button>\r\n        <mat-menu #juegos=\"matMenu\" xPosition=\"before\">\r\n          <button mat-menu-item [routerLink]=\"['juegos/anagrama']\">\r\n            <mat-icon>videogame_asset</mat-icon>\r\n            <span>Anagrama</span>\r\n          </button>\r\n          <button mat-menu-item [routerLink]=\"['juegos/tateti']\">\r\n            <mat-icon>games</mat-icon>\r\n            <span>Tateti</span>\r\n          </button>\r\n          <button mat-menu-item [routerLink]=\"['juegos/mapatesoro']\">\r\n            <mat-icon>my_location</mat-icon>\r\n            <span>Mapa del tesoro</span>\r\n          </button>\r\n      </mat-menu>\r\n        <button mat-menu-item [matMenuTriggerFor]=\"cliente\" [routerLink]=\"['cliente']\" *ngIf=\"isLogin\">Cliente</button>\r\n        <mat-menu #cliente=\"matMenu\" xPosition=\"before\">\r\n          <button mat-menu-item [routerLink]=\"['cliente/clienteLogin']\">\r\n            <mat-icon>Login</mat-icon>\r\n            <span>Login</span>\r\n          </button>\r\n          <button mat-menu-item [routerLink]=\"['cliente/crear']\">\r\n            <mat-icon>create</mat-icon>\r\n            <span>Crear Cliente</span>\r\n          </button>\r\n      </mat-menu>\r\n    </mat-menu>\r\n    \r\n\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n<div class=\"contenedor\" cdk-scrollable>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n\n\n<div class=\"container\" ><!-- // -->\n\n\n\n  <div class=\"panel-heading\" style=\"text-align: center\">\n  <h3> Anagrama de animales</h3>\n  </div>\n  <div class=\"panel-body\" style=\"text-align: center\">\n\n  <h1>{{palabraAJugar}}</h1>\n\n  <input type=\"text\" class=\"form-control\" name=\"unaPalabra\" [(ngModel)]=\"unaPalabra\"><br><br>\n\n <div class=\"btn-group btn-group-justified\">\n   <div class=\"btn-group\">\n  <button type=\"button\" name=\"Jugar\" (click)=\"jugar()\" value=\"JUGAR\" class=\"btn btn-success\" >Nueva Palabra</button>\n   </div>\n<div class=\"btn-group\">\n  <button type=\"button\" name=\"Verificar\" (click)=\"verificar(unaPalabra)\" value=\"VERIFICAR\" class=\"btn btn-primary\">Verificar</button>\n</div>\n<div class=\"btn-group\">\n  <button type=\"button\" name=\"Rendicion\" (click)=\"Rendirse()\" value=\"ME RINDO\" class=\"btn btn-danger\">Solucion</button>\n</div>\n</div>\n\n  <div class=\"contador\">\n    <h4>Intentos: {{contador}} / 3</h4>\n  </div>\n\n<div>\n  <strong>{{resultado}} </strong> \n</div>\n\n<div class=\"gano\">\n  <h3> </h3>\n</div>\n\n\n\n\n</div>\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"contenido\">\n    <p>contenido 1</p>\n        <button (click)=\"exportarPDF()\"> Esportar a PDF</button>\n</div>\n\n<table mat-table [dataSource]=\"usuarios\" class=\"mat-elevation-z8\" >\n    <ng-container [matColumnDef]=\"column\" *ngFor=\"let column of arrayUsuario\">\n        <th mat-header-cell *matHeaderCellDef> {{ column | titlecase}} </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element[column] }} </td>\n      </ng-container> \n <!--    <ng-container [matColumnDef]=\"nameuser\">\n        <th mat-header-cell *matHeaderCellDef> Nameuser </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.nameuser}} </td>\n    </ng-container>\n    <ng-container [matColumnDef]=\"comentario\">\n        <th mat-header-cell *matHeaderCellDef> Comentario </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.comentario}} </td>\n    </ng-container>\n    <ng-container [matColumnDef]=\"puntaje\">\n        <th mat-header-cell *matHeaderCellDef> Puntaje </th>\n        <td mat-cell *matCellDef=\"let element\"> {{ element.puntaje }} </td>\n    </ng-container> -->\n      <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n    <tr mat-row *matRowDef=\"let myRowData; columns: columnsToDisplay\"></tr>\n</table>\n\n<!-- <thead mat-header-row> \n    <td mat-header-cell *ngFor=\"let item of arrayUsuario\">{{ item }} </td>\n </thead>\n <tbody *ngFor=\"let item of usuarios\" app-fila [item]=\"item\">\n\n</tbody>     -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mapa-del-tesoro/mapa-del-tesoro.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mapa-del-tesoro/mapa-del-tesoro.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"sinmargen\">Encuentra el Tesoro</h1>\n<p id=\"clicks\" class=\"sinmargen\">Clicks: {{clicks}}</p>\n<img src=\"../../../assets/imagenes/treasuremap.png\" width=\"400\" height=\"400\" id=\"map\" draggable=\"false\" (click)=\"evento($event)\">\n\n<h3 id=\"distance\"  class=\"sinmargen\"><strong> {{distanceHint}}</strong></h3>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tateti/tateti.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tateti/tateti.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align: center\">\n    <button mat-raised-button (click)=\"presion(0,0)\" class=\"casilla\" id=\"00\">{{posiciones[0][0]}}</button>\n    <button mat-raised-button (click)=\"presion(0,1)\" class=\"casilla\" id=\"01\">{{posiciones[0][1]}}</button>\n    <button mat-raised-button (click)=\"presion(0,2)\" class=\"casilla\" id=\"02\">{{posiciones[0][2]}}</button>\n    <br>\n    <button mat-raised-button (click)=\"presion(1,0)\" class=\"casilla\" id=\"10\">{{posiciones[1][0]}}</button>\n    <button mat-raised-button (click)=\"presion(1,1)\" class=\"casilla\" id=\"11\">{{posiciones[1][1]}}</button>\n    <button mat-raised-button (click)=\"presion(1,2)\" class=\"casilla\" id=\"12\">{{posiciones[1][2]}}</button>\n    <br>\n    <button mat-raised-button (click)=\"presion(2,0)\" class=\"casilla\" id=\"20\">{{posiciones[2][0]}}</button>\n    <button mat-raised-button (click)=\"presion(2,1)\" class=\"casilla\" id=\"21\">{{posiciones[2][1]}}</button>\n    <button mat-raised-button (click)=\"presion(2,2)\" class=\"casilla\" id=\"22\">{{posiciones[2][2]}}</button>\n  </div>\n  <div style=\"text-align: center\">\n    <button mat-button color=\"primary\" (click)=\"reiniciar()\">Reiniciar</button>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cliente/cliente-login/cliente-login.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cliente/cliente-login/cliente-login.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>cliente-login works!</p>\r\n<button (click)='loguearCliente()'>Loguear Cliente</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cliente/cliente.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cliente/cliente.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>cliente works!</p>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cliente/crear/crear.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cliente/crear/crear.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>crear works!</p>\r\n<button (click)='crearCliente()'>Crear Cliente</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle/detalle.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle/detalle.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 mat-subheader>Detalle de Puntajes <span> </span>  \n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">table_chart</mat-icon>\n</h3>\n\n<!-- <form-datos-component [usuarios]='usuarios'></form-datos-component> -->\n<app-form-datos [usuarios]='puntajes'></app-form-datos>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error/error.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error/error.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contenedora\">\n<h2>Error...</h2> \n<p>La ruta que ingresaste no existe....</p>\n\n    <span><button mat-button  [routerLink]=\"['../login']\">\n       <mat-icon>assignment_ind</mat-icon>\n       <span>Regresar a login</span>\n   </button></span>\n   <span class=\"espacio\"></span>\n   <br>\n   <span></span>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contenedora\">\n<h3 class=\"subtitulo\">Bienvenido a Casa </h3>\n<p id=\"usuario\">{{user.email}} </p> \n    <button mat-button  [routerLink]=\"['../juegos']\">\n    <mat-icon>videogame_asset</mat-icon>\n    <span>Ir a Juegos</span>\n</button>\n<span class=\"espacio\"></span>\n<button mat-button  [routerLink]=\"['../login']\">\n    <mat-icon>assignment_ind</mat-icon>\n    <span>Loguear con otro usuario</span>\n</button>\n</div>\n\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Lato\">\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Montserrat\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<!-- \n<!DOCTYPE html>\n<html>\n<title>AP</title>\n<meta charset=\"UTF-8\">\n<body> -->\n<!-- Header -->\n<header class=\"w3-container w3-green w3-center\" id=\"contenedor1\">\n  <h1 class=\"w3-margin w3-jumbo\">German Molina</h1>\n  <p class=\"w3-xlarge\"><small>template by</small><strong> german.molina</strong></p>\n  <p class=\"w3-xlarge\">web Developer</p>\n \n<button class=\"w3-button w3-black w3-padding-large w3-large w3-margin-top\" [routerLink]=\"['../juegos']\">Jugar</button> \n</header>\n<!-- First Grid -->\n<div class=\"w3-row-padding w3-white w3-padding-64 w3-container\">\n  <div class=\"w3-content\">\n    <div class=\"w3-twothird\">\n      <h1>Perfil</h1>\n      <h5 class=\"w3-padding-32\">\n        Desarrollador de Software, Business intelligence and analytics (BI&A) \n        <p>\n          Estudiante de sistemas UTN\n        </p>\n      </h5>\n\n      <p class=\"w3-text-grey\">\n        Tecnologias usadas: Visual Basic, VBA, Angular 4 en adelante, JavaScript, libreria Jquery, Bases de datos elacionales SQLserver, MySql, etc, y bases no relacionales como FireBase. postgress, pentajo, talent y otras herramientes para gestión Big Data.\n        </p>\n       <p class=\"w3-text-grey\">\n         Estoy trabajando para convertirme en un experto en el area del desarrollo web.\n         Soy una persona dispuesta a aprender lo necesario para avanzar en este maravilloso ambiente!\n        </p>\n    </div>\n\n    <div class=\"w3-third w3-center\">\n      <i class=\"fa fa-user w3-padding-64 w3-text-green\" id=\"idjuego\"></i>\n    </div>\n  </div>\n</div>\n\n<!-- Second Grid -->\n<div class=\"w3-row-padding w3-light-grey w3-padding-64 w3-container\">\n  <div class=\"w3-content\">\n    <div class=\"w3-third w3-center\">\n      <i class=\"fa fa-gamepad w3-padding-64 w3-text-green w3-margin-right\" id=\"idjuego\"></i>\n    </div>\n    \n    <div class=\"w3-twothird\">\n      <h1>Tutorial del Juego</h1>\n      <h5 class=\"w3-padding-32\">\n         El Mapa del tesoro es un videojuego puzle aleatorio, totalmente impredesible!\n      </h5>\n\n      <p class=\"w3-text-grey\">\n         En el juego, el jugador o usuario busca un mapa del tesoro ,\n          haciendo click en donde supone que los piratas lo ocultaron.\n          Animate!!!!\n          .</p>\n    </div>\n  </div>\n</div>\n\n<div class=\"w3-container w3-black w3-center w3-opacity w3-padding-64\">\n    <h1 class=\"w3-margin w3-xlarge\"> #User Experience   #Music   #Creative Direction</h1>\n</div>\n\n<!-- Footer -->\n<footer class=\"w3-container w3-green w3-padding-64 w3-center\">  \n  <div class=\"w3-xlarge w3-padding-32\">\n    \n       \n    <a href=\"https://www.facebook.com/ger.molina.maxi\" target=\"_blank\">\n <i class=\"fa fa-facebook-official w3-hover-opacity\"></i>\n    </a>\n     \n\n\n     <a href=\"https://www.linkedin.com/in/german-maximiliano-molina/\" target=\"_blank\">\n    <i class=\"fa fa-linkedin w3-hover-opacity\"></i>\n    </a>\n    \n </div>\n <p>Powered by <a href=\"https://www.linkedin.com/in/german-maximiliano-molina/\" target=\"_blank\">German molina</a></p>\n</footer>\n<!-- \n</body>\n</html> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/juegos/juegos.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/juegos/juegos.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 class=\"subtitulo\">Juegos</h3>\n<div class=\"contenedora\">\n     <span><button mat-button  [routerLink]=\"['./anagrama']\">\n        <mat-icon>videogame_asset</mat-icon>\n        <span>Anagrama</span>\n    </button></span>\n    <span class=\"espacio\"></span>\n    <span><button mat-button  [routerLink]=\"['./tateti']\">\n        <mat-icon>games</mat-icon>\n        <span>Tateti</span>\n    </button>\n    </span>\n    <span class=\"espacio\"></span>\n    <span><button mat-button  [routerLink]=\"['./mapatesoro']\">\n        <mat-icon>my_location</mat-icon>\n        <span>Mapa del Tesoro</span>\n    </button>\n    </span>\n    \n\n      \n\n<router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"example-card\">\r\n<form class=\"example-form\">\r\n<mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Ingresar con:\" disabled value=\"Email y Contraseña\">\r\n</mat-form-field>\r\n<br> \r\n   <!--  <input  placeholder=\"email\" type=\"text\" id=\"email1\"  [(ngModel)]=\"email\" name=\"email\" required> -->\r\n <!--    <input  placeholder=\"password\" type=\"password\" [(ngModel)]=\"password\" name=\"password\" required> -->\r\n <mat-form-field>\r\n        <input matInput placeholder=\"email\"   [(ngModel)]=\"email\" required name=\"email\">\r\n</mat-form-field> \r\n<br>   \r\n <mat-form-field>\r\n            <input matInput placeholder=\"password\"  type=\"password\" [(ngModel)]=\"password\" required name=\"password\">\r\n</mat-form-field>\r\n   <br> \r\n<button mat-raised-button color=\"primary\" (click)=\"onSubmitLogin()\">\r\n    <span>Loguear  </span><mat-icon>email</mat-icon></button>\r\n<br> \r\n<span class=\"errormje\">{{ msjerror }}</span> \r\n <br>\r\n<button mat-raised-button color=\"warn\" (click)=\"onSubmitLoginPublic()\"><span>Ingreso Público </span><mat-icon>public</mat-icon></button>\r\n<br> \r\n<span><button mat-button  [routerLink]=\"['../register']\">\r\n    <mat-icon>create</mat-icon>\r\n    <span>Registar Usuario</span>\r\n</button></span>\r\n</form>\r\n</mat-card>\r\n<!-- <mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n        <mat-card-title>Loguearse</mat-card-title>\r\n        <mat-card-subtitle>...</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <p>\r\n            seleccione como loguearse\r\n        </p>\r\n\r\n <mat-form-field>\r\n    <input matInput placeholder=\"email\"  [(ngModel)]=\"user.email\" required>\r\n</mat-form-field>\r\n<mat-form-field>\r\n    <input matInput placeholder=\"password\" type=\"password\" [(ngModel)]=\"user.password\" required>\r\n</mat-form-field> \r\n\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n    <button mat-button>Loguearse</button>\r\n    </mat-card-actions>\r\n</mat-card> -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<mat-card class=\"example-card\">\r\n    <form class=\"example-form\">\r\n    <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Ingresar con:\" disabled value=\"Email y Contraseña\">\r\n    </mat-form-field>\r\n    <br> \r\n       <!--  <input  placeholder=\"email\" type=\"text\" id=\"email1\"  [(ngModel)]=\"email\" name=\"email\" required> -->\r\n     <!--    <input  placeholder=\"password\" type=\"password\" [(ngModel)]=\"password\" name=\"password\" required> -->\r\n     <mat-form-field>\r\n            <input matInput placeholder=\"email\"   [(ngModel)]=\"email\" required name=\"email\">\r\n    </mat-form-field> \r\n    <br>   \r\n     <mat-form-field>\r\n                <input matInput placeholder=\"password\"  type=\"password\" [(ngModel)]=\"password\" required name=\"password\">\r\n    </mat-form-field>\r\n       <br> \r\n    \r\n        <input type=\"file\"  id=\"avatar\" name=\"avatar\"\r\n        accept=\"image/png, image/jpeg\" (change)=\"onUpload($event)\"> \r\n \r\n<br>\r\n    <button mat-raised-button color=\"primary\" (click)=\"onSubmitRegister()\">\r\n        <span>Registar  </span><mat-icon>email</mat-icon></button>\r\n    <br> \r\n    <span class=\"errormje\">{{ msjerror }}</span> \r\n     <br>\r\n    <span><button mat-button  [routerLink]=\"['../login']\">\r\n        <mat-icon>Login</mat-icon>\r\n        <span>Volver a Login</span>\r\n    </button></span>\r\n    </form>\r\n    </mat-card>");

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
/* harmony import */ var _pages_cliente_crear_crear_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/cliente/crear/crear.component */ "./src/app/pages/cliente/crear/crear.component.ts");
/* harmony import */ var _pages_cliente_cliente_login_cliente_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/cliente/cliente-login/cliente-login.component */ "./src/app/pages/cliente/cliente-login/cliente-login.component.ts");
/* harmony import */ var _pages_cliente_cliente_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/cliente/cliente.component */ "./src/app/pages/cliente/cliente.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _pages_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/detalle/detalle.component */ "./src/app/pages/detalle/detalle.component.ts");
/* harmony import */ var _pages_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/juegos/juegos.component */ "./src/app/pages/juegos/juegos.component.ts");
/* harmony import */ var _pages_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/usuarios/usuarios.component */ "./src/app/pages/usuarios/usuarios.component.ts");
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/error/error.component */ "./src/app/pages/error/error.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _components_addusuario_addusuario_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/addusuario/addusuario.component */ "./src/app/components/addusuario/addusuario.component.ts");
/* harmony import */ var _components_form_datos_form_datos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/form-datos/form-datos.component */ "./src/app/components/form-datos/form-datos.component.ts");
/* harmony import */ var _components_fila_fila_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/fila/fila.component */ "./src/app/components/fila/fila.component.ts");
/* harmony import */ var _components_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/anagrama/anagrama.component */ "./src/app/components/anagrama/anagrama.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/tateti/tateti.component */ "./src/app/components/tateti/tateti.component.ts");
/* harmony import */ var _components_mapa_del_tesoro_mapa_del_tesoro_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/mapa-del-tesoro/mapa-del-tesoro.component */ "./src/app/components/mapa-del-tesoro/mapa-del-tesoro.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");














/* import { PagesModule } from './pages/pages.module'; */






const routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'juegos', component: _pages_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_6__["JuegosComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            { path: 'anagrama', component: _components_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_13__["AnagramaComponent"] },
            { path: 'tateti', component: _components_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_16__["TatetiComponent"] },
            { path: 'mapatesoro', component: _components_mapa_del_tesoro_mapa_del_tesoro_component__WEBPACK_IMPORTED_MODULE_17__["MapaDelTesoroComponent"] }
        ] },
    { path: 'detalle', component: _pages_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_5__["DetalleComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'usuarios', component: _pages_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_7__["UsuariosComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"] },
    { path: 'cliente', component: _pages_cliente_cliente_component__WEBPACK_IMPORTED_MODULE_3__["ClienteComponent"],
        children: [
            { path: 'clienteLogin', component: _pages_cliente_cliente_login_cliente_login_component__WEBPACK_IMPORTED_MODULE_2__["ClienteLoginComponent"] },
            { path: 'crear', component: _pages_cliente_crear_crear_component__WEBPACK_IMPORTED_MODULE_1__["CrearComponent"] }
        ] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', component: _pages_error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"], pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_14__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"]]
    })
], AppRoutingModule);

const routingComponents = [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _pages_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_7__["UsuariosComponent"],
    _pages_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_6__["JuegosComponent"], _pages_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_5__["DetalleComponent"], _pages_error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"], _components_addusuario_addusuario_component__WEBPACK_IMPORTED_MODULE_10__["AddusuarioComponent"],
    _components_form_datos_form_datos_component__WEBPACK_IMPORTED_MODULE_11__["FormDatosComponent"], _components_fila_fila_component__WEBPACK_IMPORTED_MODULE_12__["FilaComponent"], _components_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_13__["AnagramaComponent"], _components_mapa_del_tesoro_mapa_del_tesoro_component__WEBPACK_IMPORTED_MODULE_17__["MapaDelTesoroComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"], _pages_register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-button-row button,\n.example-button-row a {\n  margin-right: 5px;\n}\n.example-icon {\n  padding: 0 10px;\n}\n.example-spacer {\n  flex: 1 1 auto;\n}\n#nameUser{\n  font-size: auto;\n}\n.toolbar{\n  font-family: Roboto,\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif;\n  margin: 0;\n  background-image: -webkit-gradient(linear,0% 0%,100% 0%,color-stop(0, rgb(40, 58, 221)),color-stop(50%,cyan ),color-stop(100%,rgb(56, 9, 131)));\n/*   background-image: url(\"../assets/imagenes/game2.jpg\");\n  background-size: 300px 100px; */\n}\n.contenedor {\n/*   width: 80%;\n  display: flex;\n \n  margin: 10px auto 20%;*/\n  display: flex;\n  justify-content: center;\n /*  align-items: center; */\n  text-align: center;\n  background-color: rgba(250, 250, 250, 0.6);\n  float: none;\n  margin: auto;\n  overflow: auto; \n  width: 79%;\n  height: auto;\n  /* border: 1px solid #ccc; */\n  box-shadow: 0 0 20px 1px royalblue;\n  border-radius: 5px;\n\n/*   padding: 0 8px;\n  overflow: auto; \n  border: 1px solid #ccc; */\n\n}\n.titulo{\n  font-size: auto;\n  width: auto;\n /*  font-family: medium-content-sans-serif-font, \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Geneva, Arial, sans-serif;*/\n} \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxzR0FBc0c7RUFDdEcsU0FBUztFQUNULCtJQUErSTtBQUNqSjtpQ0FDaUM7QUFDakM7QUFDQTtBQUNBOzs7eUJBR3lCO0VBQ3ZCLGFBQWE7RUFDYix1QkFBdUI7Q0FDeEIsMEJBQTBCO0VBQ3pCLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsVUFBVTtFQUNWLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsa0NBQWtDO0VBQ2xDLGtCQUFrQjs7QUFFcEI7OzJCQUUyQjs7QUFFM0I7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0NBQ1osbUlBQW1JO0FBQ3BJIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1idXR0b24tcm93IGJ1dHRvbixcbi5leGFtcGxlLWJ1dHRvbi1yb3cgYSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmV4YW1wbGUtaWNvbiB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuI25hbWVVc2Vye1xuICBmb250LXNpemU6IGF1dG87XG59XG4udG9vbGJhcntcbiAgZm9udC1mYW1pbHk6IFJvYm90byxcIkhlbHZldGljYSBOZXVlIExpZ2h0XCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxcIkx1Y2lkYSBHcmFuZGVcIixzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLDAlIDAlLDEwMCUgMCUsY29sb3Itc3RvcCgwLCByZ2IoNDAsIDU4LCAyMjEpKSxjb2xvci1zdG9wKDUwJSxjeWFuICksY29sb3Itc3RvcCgxMDAlLHJnYig1NiwgOSwgMTMxKSkpO1xuLyogICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VuZXMvZ2FtZTIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDMwMHB4IDEwMHB4OyAqL1xufVxuLmNvbnRlbmVkb3Ige1xuLyogICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuIFxuICBtYXJnaW46IDEwcHggYXV0byAyMCU7Ki9cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gLyogIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjYpO1xuICBmbG9hdDogbm9uZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdmVyZmxvdzogYXV0bzsgXG4gIHdpZHRoOiA3OSU7XG4gIGhlaWdodDogYXV0bztcbiAgLyogYm9yZGVyOiAxcHggc29saWQgI2NjYzsgKi9cbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMXB4IHJveWFsYmx1ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4vKiAgIHBhZGRpbmc6IDAgOHB4O1xuICBvdmVyZmxvdzogYXV0bzsgXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7ICovXG5cbn1cbi50aXR1bG97XG4gIGZvbnQtc2l6ZTogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gLyogIGZvbnQtZmFtaWx5OiBtZWRpdW0tY29udGVudC1zYW5zLXNlcmlmLWZvbnQsIFwiTHVjaWRhIEdyYW5kZVwiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgU2Fuc1wiLCBHZW5ldmEsIEFyaWFsLCBzYW5zLXNlcmlmOyovXG59IFxuIl19 */");

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
/* harmony import */ var _services_userservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/userservice.service */ "./src/app/services/userservice.service.ts");



let AppComponent = class AppComponent {
    /*   public nombreUsuario : string ;
      public emailUsuario: string ; */
    constructor(miAuth) {
        this.miAuth = miAuth;
        this.title = 'tp-sala-de-juegos';
        this.token = localStorage.getItem('token');
        this.username = localStorage.getItem('email');
    }
    ngOnInit() {
        this.miAuth.getAuth()
            .subscribe(user => {
            if (user) {
                // console.log("isLogin = true", user);
                this.miAuth.generarToken();
                this.isLogin = true;
                this.miAuth.cargarUsuario(user.displayName, user.email);
                if (!user.email) {
                    this.username = user.displayName;
                }
                else {
                    this.username = user.email;
                }
                this.useruid = user.uid;
                //  console.log("Usuario: ", this.username, this.useruid, user.email); 
            }
            else {
                console.log("isLogin = false");
                this.isLogin = false;
            }
        });
    }
    logueado() {
        return this.miAuth.isAutenticated();
    }
    onClickLogout() {
        this.miAuth.logOut();
        this.isLogin = false;
        this.username = '';
        this.useruid = '';
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_userservice_service__WEBPACK_IMPORTED_MODULE_2__["UserserviceService"] }
];
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _components_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tateti/tateti.component */ "./src/app/components/tateti/tateti.component.ts");
/* harmony import */ var _components_mapa_del_tesoro_mapa_del_tesoro_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/mapa-del-tesoro/mapa-del-tesoro.component */ "./src/app/components/mapa-del-tesoro/mapa-del-tesoro.component.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");








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
            _components_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_10__["TatetiComponent"],
            _components_mapa_del_tesoro_mapa_del_tesoro_component__WEBPACK_IMPORTED_MODULE_11__["MapaDelTesoroComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_5__["PagesModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"],
            /*   NgbModule, */
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _material__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__["AngularFireStorageModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_userservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/userservice.service */ "./src/app/services/userservice.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, usuarioService) {
        this.router = router;
        this.usuarioService = usuarioService;
    }
    canActivate() {
        /*   next: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree { */
        /*      console.log("canActivate"); */
        let valor;
        /*   let mipromesa = new Promise((resolve, reject) =>{
          resolve(this.usuarioService.isAutenticated()),
            (false)})
           .then( (mensaje)=>{
             valor= mensaje;
           })
           .catch((mensaje)=>{
            valor= mensaje;
          })
          return valor; */
        try {
            console.log("verificando..");
            let token;
            token = localStorage.getItem('token');
            token = atob(token.split('.')[1]);
            token = JSON.parse(token);
            if (token.exp > Date.now() / 1000) {
                console.log("token verificado");
                return true;
            }
            else {
                console.log("token NO verificado");
                this.usuarioService.logOut();
                this.router.navigate(['/login']);
            }
        }
        catch (e) {
            console.log(e);
            this.router.navigate(['/login']);
            return false;
        }
        /*   valor= this.usuarioService.isAutenticated();
              if ( valor) {
                console.log("can activate true", valor,'ruta:'+ this.router.url);
                return true;
              } else {
                console.log("can activate false", valor);
                this.router.navigate(['/login']);
                return false;
              } */
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_userservice_service__WEBPACK_IMPORTED_MODULE_3__["UserserviceService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/components/addusuario/addusuario.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/addusuario/addusuario.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-list-icon {\n    color: rgba(0, 0, 0, 0.54);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGR1c3VhcmlvL2FkZHVzdWFyaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtFQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkdXN1YXJpby9hZGR1c3VhcmlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWxpc3QtaWNvbiB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIH0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    .container{\r\n        height: 50%;\r\n        min-height: 50%;\r\n        padding: 10px;\r\n    }\r\n \r\n    form {\r\n        border: 5px solid #2196F3;\r\n        padding: 5px;\r\n        min-height: 80%;\r\n        background:orange;\r\n    }\r\n \r\n    #snackbar {\r\n        visibility: hidden;\r\n        min-width: 200px;\r\n        margin-left: -125px;\r\n       \r\n        color: #fff;\r\n        text-align: center;\r\n        border-radius: 2px;\r\n        padding: 16px;\r\n        position: fixed;\r\n        z-index: 1;\r\n        left: 40%;\r\n        bottom: 30px;\r\n        font-size: 17px;\r\n    }\r\n \r\n    #snackbar.Ganador {\r\n        background-color:blue;\r\n    }\r\n \r\n    #snackbar.Perdedor {\r\n        background-color: red;\r\n    }\r\n \r\n    #snackbar.show {\r\n        visibility: visible;\r\n        -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n        animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    }\r\n \r\n    .form-control{\r\n        text-align: center;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbmFncmFtYS9hbmFncmFtYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtRQUNJLFdBQVc7UUFDWCxlQUFlO1FBQ2YsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjs7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsbUJBQW1COztRQUVuQixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsZUFBZTtRQUNmLFVBQVU7UUFDVixTQUFTO1FBQ1QsWUFBWTtRQUNaLGVBQWU7SUFDbkI7O0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7O0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7O0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsaURBQWlEO1FBQ2pELHlDQUF5QztJQUM3Qzs7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5hZ3JhbWEvYW5hZ3JhbWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuIFxyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgIzIxOTZGMztcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogODAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6b3JhbmdlO1xyXG4gICAgfVxyXG4gICAgI3NuYWNrYmFyIHtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTEyNXB4O1xyXG4gICAgICAgXHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGxlZnQ6IDQwJTtcclxuICAgICAgICBib3R0b206IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgfVxyXG4gICAgI3NuYWNrYmFyLkdhbmFkb3Ige1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6Ymx1ZTtcclxuICAgIH1cclxuICAgICNzbmFja2Jhci5QZXJkZWRvciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gICAgI3NuYWNrYmFyLnNob3cge1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcclxuICAgICAgICBhbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfSJdfQ== */");

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
/* harmony import */ var src_app_services_juegos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/juegos.service */ "./src/app/services/juegos.service.ts");
/* harmony import */ var src_app_models_puntaje__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/puntaje */ "./src/app/models/puntaje.ts");
/* harmony import */ var src_app_services_userservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/userservice.service */ "./src/app/services/userservice.service.ts");





let AnagramaComponent = class AnagramaComponent {
    constructor(userS, juegoS) {
        this.userS = userS;
        this.juegoS = juegoS;
        /*   miJuego: JuegoAnagrama; */
        this.enviarJuego = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /*   this.miJuego = new JuegoAnagrama("Anagrama","Anonimo",false); */
        this.contador = 0;
    }
    ngOnInit() {
        this.comienzo();
    }
    /*
      rendirse()
      {
        this.miJuego.Rendirse();
        this.miJuego.jugador= this.miServicio.retornarUsuario();
        this.enviarJuego.emit(this.miJuego);
      } */
    verificar(laPalabra) {
        this.VerificarPalabra(laPalabra);
        if (this.gano == true) {
            this.Next();
            /*     this.miJuego = new JuegoAnagrama("Anagrama","Anonimo",false); */
        }
        else if (this.resultado == "PERDIO!") {
            this.Perder();
        }
    }
    enviarRespuesta(detalle, puntos) {
        this.juegoS.addPuntaje(new src_app_models_puntaje__WEBPACK_IMPORTED_MODULE_3__["miPuntaje"](this.juegoS.formatearFecha(new Date), 'Anagrama', this.userS.getUser().email, puntos, detalle, this.userS.getUser().id));
    }
    Perder() {
        this.comununicacion = true;
    }
    jugar() {
        this.comienzo();
    }
    comienzo() {
        this.contador = 0;
        this.comununicacion = false;
        this.palabrasOrdenadas = [
            "GATO",
            "HALCON",
            "JIRAFA",
            "LEON",
            "LUCIERNAGA",
            "GORILA",
            "TIBURON",
            "CEBRA",
            "LOBO",
            "TIGRE",
            "VACA",
            "ZORRA",
            "PANTERA"
        ];
        this.palabrasDesordenadas = [
            "TOGA",
            "LONCHA",
            "FIJARA",
            "LOEN",
            "NEURALGICA",
            "GLORIA",
            "TRIBUNO",
            "CEBAR",
            "BOLO",
            "GRITE",
            "CAVA",
            "ROZAR",
            "ATRAPEN"
        ];
        this.Next();
    }
    Next() {
        this.comununicacion = false;
        this.numeroRandom = Math.floor((Math.random() * 12) + 0);
        this.palabraAJugar = this.palabrasDesordenadas[this.numeroRandom];
    }
    VerificarPalabra(unaPalabra) {
        if (unaPalabra != '' && unaPalabra != null) {
            unaPalabra = unaPalabra.toUpperCase();
            console.log(unaPalabra);
            console.log(this.palabrasOrdenadas[this.numeroRandom]);
            if (this.contador > 2) {
                this.gano = false;
                this.resultado = "PERDIO!";
                console.log(this.comununicacion);
                if (this.comununicacion == false) {
                    this.enviarRespuesta("Perdió", (this.contador - 3).toString());
                    this.comununicacion = true;
                }
            }
            else {
                if (unaPalabra === this.palabrasOrdenadas[this.numeroRandom]) {
                    this.gano = true;
                    this.resultado = "GANO!";
                    this.enviarRespuesta("Ganó", (3 - this.contador).toString());
                    this.comununicacion = true;
                    this.contador = 0;
                    console.log(this);
                }
                else {
                    this.contador++;
                }
            }
        }
    }
    Rendirse() {
        this.gano = false;
        this.contador = 0;
        this.palabraAJugar = this.palabrasOrdenadas[this.numeroRandom];
        this.resultado = "PERDIO!";
    }
};
AnagramaComponent.ctorParameters = () => [
    { type: src_app_services_userservice_service__WEBPACK_IMPORTED_MODULE_4__["UserserviceService"] },
    { type: src_app_services_juegos_service__WEBPACK_IMPORTED_MODULE_2__["JuegosService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AnagramaComponent.prototype, "enviarJuego", void 0);
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
/* harmony default export */ __webpack_exports__["default"] = ("table {\n    width: 100%;\n}\ntd.mat-cell, td.mat-footer-cell, th.mat-header-cell {\n    padding: 2px;\n    /* border-bottom-width: 1px; */\n    border-bottom-style: solid;\n    text-align: center;\n}\nth{\n    text-align: center;\n}\nth.mat-header-cell {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtLWRhdG9zL2Zvcm0tZGF0b3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS1kYXRvcy9mb3JtLWRhdG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG50ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsLCB0aC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICAvKiBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7ICovXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxudGh7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxudGgubWF0LWhlYWRlci1jZWxsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_puntaje__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/puntaje */ "./src/app/models/puntaje.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_3__);





let FormDatosComponent = class FormDatosComponent {
    constructor() {
        this.arrayUsuario = Object.keys(new _models_puntaje__WEBPACK_IMPORTED_MODULE_2__["miPuntaje"]);
        this.posisionUid = this.arrayUsuario.indexOf('uid');
        this.columnsToDisplay = this.arrayUsuario.slice(0, this.posisionUid);
        this.ArrayUsuarios = [];
    }
    ngAfterContentInit() {
        this.contenidoRef.nativeElement.focus();
    }
    /*   ngOnInit() {
        console.log("formdata: ", this.usuarios);
      } */
    /**
     * exportarPDF
     */
    exportarPDF() {
        let doc = new jspdf__WEBPACK_IMPORTED_MODULE_3__();
        let manejadorEspecial = {
            '#editor': function (element, renderer) {
                return true;
            }
        };
        let content = this.contenidoRef.nativeElement;
        doc.fromHTML(content.innerHTML, 15, 15, {
            'whith': 160,
            'elementHandlers': manejadorEspecial
        });
        doc.save('test.pdf');
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contenido', { static: false })
], FormDatosComponent.prototype, "contenidoRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FormDatosComponent.prototype, "usuarios", void 0);
FormDatosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-datos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-datos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-datos/form-datos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-datos.component.css */ "./src/app/components/form-datos/form-datos.component.css")).default]
    })
], FormDatosComponent);



/***/ }),

/***/ "./src/app/components/mapa-del-tesoro/mapa-del-tesoro.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/mapa-del-tesoro/mapa-del-tesoro.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -o-user-select: none;\n    -ms-user-select: none;\n        user-select: none;\n  }\n  \n  p {\n    display: block;\n  }\n  \n  .sinmargen{\n    padding: 0ch;\n    margin: 0px;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXBhLWRlbC10ZXNvcm8vbWFwYS1kZWwtdGVzb3JvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFFekIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixxQkFBaUI7UUFBakIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hcGEtZGVsLXRlc29yby9tYXBhLWRlbC10ZXNvcm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuICBcbiAgcCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnNpbm1hcmdlbntcbiAgICBwYWRkaW5nOiAwY2g7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgIl19 */");

/***/ }),

/***/ "./src/app/components/mapa-del-tesoro/mapa-del-tesoro.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/mapa-del-tesoro/mapa-del-tesoro.component.ts ***!
  \*************************************************************************/
/*! exports provided: MapaDelTesoroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaDelTesoroComponent", function() { return MapaDelTesoroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_juegos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/juegos.service */ "./src/app/services/juegos.service.ts");
/* harmony import */ var src_app_models_puntaje__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/puntaje */ "./src/app/models/puntaje.ts");
/* harmony import */ var src_app_services_userservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/userservice.service */ "./src/app/services/userservice.service.ts");





let MapaDelTesoroComponent = class MapaDelTesoroComponent {
    constructor(juegoS, userS) {
        this.juegoS = juegoS;
        this.userS = userS;
        // get the Distance of two points
        this.getDistance = (e, target) => {
            let diffX = e.offsetX - target.x;
            let diffY = e.offsetY - target.y;
            return Math.sqrt((diffX * diffX) + (diffY * diffY));
        };
        // return an String depending on the distances 
        this.getDistanceHint = distance => {
            if (distance < 35) {
                return "Hirviendo!";
            }
            else if (distance < 45) {
                return "Muy Caliente";
            }
            else if (distance < 65) {
                return "Caliente";
            }
            else if (distance < 100) {
                return "Tibio";
            }
            else if (distance < 180) {
                return "Frio";
            }
            else if (distance < 360) {
                return "Muy Frio";
            }
            else {
                return "Estas en el polo norte amego!";
            }
        };
        // treasure coordinates
        this.WIDTH = 400;
        this.HEIGH = 400;
        this.target = {
            x: 1,
            y: 1
        };
        /* x: this.getRandomNumber(this.WIDTH),
        y: this.getRandomNumber(this.HEIGH) */
        // click handler
        this.$map = document.querySelector('#map');
        this.$distance = document.querySelector('#distance');
        this.clicks = 0;
    }
    ngOnInit() {
        this.calcularTarget();
    }
    // generate a random Number
    getRandomNumber(size) {
        return Math.floor(Math.random() * size);
    }
    calcularTarget() {
        this.target.x = this.getRandomNumber(this.WIDTH);
        this.target.y = this.getRandomNumber(this.HEIGH);
    }
    evento(e) {
        console.log('click');
        this.clicks++;
        let distance = this.getDistance(e, this.target);
        this.distanceHint = this.getDistanceHint(distance);
        if (distance < 20) {
            alert(`Encontraste el tesoro en ${this.clicks} clicks!`);
            this.juegoS.addPuntaje(new src_app_models_puntaje__WEBPACK_IMPORTED_MODULE_3__["miPuntaje"](this.juegoS.formatearFecha(new Date), 'Mapa del tesoro', this.userS.getUser().email, '1', 'Ganó', this.userS.getUser().id));
            this.recargar();
        }
    }
    recargar() {
        this.calcularTarget();
        this.clicks = 0;
    }
};
MapaDelTesoroComponent.ctorParameters = () => [
    { type: src_app_services_juegos_service__WEBPACK_IMPORTED_MODULE_2__["JuegosService"] },
    { type: src_app_services_userservice_service__WEBPACK_IMPORTED_MODULE_4__["UserserviceService"] }
];
MapaDelTesoroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mapa-del-tesoro',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mapa-del-tesoro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mapa-del-tesoro/mapa-del-tesoro.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mapa-del-tesoro.component.css */ "./src/app/components/mapa-del-tesoro/mapa-del-tesoro.component.css")).default]
    })
], MapaDelTesoroComponent);



/***/ }),

/***/ "./src/app/components/tateti/tateti.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/tateti/tateti.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".casilla {\n    height: 5rem;\n    margin: 0.5rem;\n    font-size: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXRldGkvdGF0ZXRpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RhdGV0aS90YXRldGkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXNpbGxhIHtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgbWFyZ2luOiAwLjVyZW07XG4gICAgZm9udC1zaXplOiAzcmVtO1xufSJdfQ== */");

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
/* harmony import */ var src_app_services_juegos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/juegos.service */ "./src/app/services/juegos.service.ts");
/* harmony import */ var src_app_services_userservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/userservice.service */ "./src/app/services/userservice.service.ts");
/* harmony import */ var src_app_models_puntaje__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/puntaje */ "./src/app/models/puntaje.ts");





let TatetiComponent = class TatetiComponent {
    constructor(juegoS, userS) {
        this.juegoS = juegoS;
        this.userS = userS;
        this.posiciones = [['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-']];
        this.jugador = 'O';
    }
    ngOnInit() {
        this.contador = 0;
        this.contadorTot = 0;
    }
    presion(fila, columna) {
        let ficha = '';
        this.contador++;
        this.contadorTot++;
        if (this.posiciones[fila][columna] == '-') {
            this.posiciones[fila][columna] = this.jugador;
            ficha = this.verificarGano('O');
            if (ficha == '') {
                this.cambiarJugador();
                this.juegoPc(this.jugador);
                if (this.verificarGano('X') != '') {
                    this.reiniciar();
                    this.enviarRespuesta("Perdió", (this.contador - 9).toString());
                }
                if (this.contadorTot >= 9) {
                    //empate
                    alert("EMPATE!!");
                    this.enviarRespuesta("EMPATE", "0");
                }
                this.cambiarJugador();
            }
            else {
                this.enviarRespuesta("Ganó", this.contador.toString());
                this.reiniciar();
                /*   this.id =window.setInterval(function() {
                   clearInterval(this.id);
                 for(let f=0;f<3;f++){
                   for(let c=0;c<3;c++){
                    console.log(this.posiciones);
                     this.posiciones[f][c]='-';
                   }
                 }
                 }, 1000); */
            }
        }
    }
    enviarRespuesta(detalle, puntos) {
        this.juegoS.addPuntaje(new src_app_models_puntaje__WEBPACK_IMPORTED_MODULE_4__["miPuntaje"](this.juegoS.formatearFecha(new Date), 'Tatetí', this.userS.getUser().email, puntos, detalle, this.userS.getUser().id));
    }
    juegoPc(jugador) {
        let f = Math.floor(Math.random() * (2 - 0)) + 1;
        let c = Math.floor(Math.random() * (2 - 0)) + 1;
        this.contadorTot++;
        /*  console.log(f + ' '+ c); */
        if (this.posiciones[f][c] == '-') {
            this.posiciones[f][c] = jugador;
        }
        else {
            this.buscarYMarcarProximo(jugador);
        }
        /*  console.log('Jugador '+ jugador+c+f); */
    }
    buscarYMarcarProximo(jugador) {
        let bandera = false;
        for (let f = 0; f < 3; f++) {
            for (let c = 0; c < 3; c++) {
                if (this.posiciones[f][c] == '-') {
                    this.posiciones[f][c] = jugador;
                    /* console.log('Jugador1 '+ jugador+c+f + ' '+this.posiciones[f][c]); */
                    bandera = true;
                    break;
                }
            }
            if (bandera == true)
                break;
        }
    }
    reiniciar() {
        this.contador = 0;
        this.contadorTot = 0;
        clearInterval(this.id);
        for (let f = this.posiciones.length - 1; f >= 0; f--) {
            for (let c = 0; c < this.posiciones.length; c++) {
                /*  console.log(this.posiciones[f][c]); */
                this.posiciones[f][c] = '-';
            }
        }
    }
    cambiarJugador() {
        if (this.jugador == 'O')
            this.jugador = 'X';
        else
            this.jugador = 'O';
    }
    verificarGano(ficha) {
        if (this.posiciones[0][0] == ficha && this.posiciones[0][1] == ficha && this.posiciones[0][2] == ficha
            || this.posiciones[1][0] == ficha && this.posiciones[1][1] == ficha && this.posiciones[1][2] == ficha
            || this.posiciones[2][0] == ficha && this.posiciones[2][1] == ficha && this.posiciones[2][2] == ficha
            || this.posiciones[0][0] == ficha && this.posiciones[1][0] == ficha && this.posiciones[2][0] == ficha
            || this.posiciones[0][1] == ficha && this.posiciones[1][1] == ficha && this.posiciones[2][1] == ficha
            || this.posiciones[0][2] == ficha && this.posiciones[1][2] == ficha && this.posiciones[2][2] == ficha
            || this.posiciones[0][0] == ficha && this.posiciones[1][1] == ficha && this.posiciones[2][2] == ficha
            || this.posiciones[0][2] == ficha && this.posiciones[1][1] == ficha && this.posiciones[2][0] == ficha) {
            alert("ganó jugador " + ficha + ", clicks: " + this.contador + "jugadas Totales: " + this.contadorTot);
            return ficha;
            /*   this.reiniciar(); */
        }
        else {
            return '';
        }
    }
};
TatetiComponent.ctorParameters = () => [
    { type: src_app_services_juegos_service__WEBPACK_IMPORTED_MODULE_2__["JuegosService"] },
    { type: src_app_services_userservice_service__WEBPACK_IMPORTED_MODULE_3__["UserserviceService"] }
];
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
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

// GERMAN Molina hago este archivo para importar todo lo relacionado a Material.IO
// desde a este archivo y que el app me quede mas limpio
//https://material.io/resources/icons/?icon=fingerprint&style=baseline iconos!











let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"])({
        imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"]],
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"]],
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/models/cliente.ts":
/*!***********************************!*\
  !*** ./src/app/models/cliente.ts ***!
  \***********************************/
/*! exports provided: miCliente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "miCliente", function() { return miCliente; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class miCliente {
    constructor(user, pass) {
        this.user = user;
        this.pass = pass;
    }
}


/***/ }),

/***/ "./src/app/models/puntaje.ts":
/*!***********************************!*\
  !*** ./src/app/models/puntaje.ts ***!
  \***********************************/
/*! exports provided: miPuntaje */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "miPuntaje", function() { return miPuntaje; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class miPuntaje {
    constructor(horario, juego, nameuser, puntaje, detalle, uid) {
        this.horario = horario;
        this.juego = juego;
        this.nameuser = nameuser;
        this.puntaje = puntaje;
        this.detalle = detalle;
        this.uid = uid;
    }
}


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
    constructor(nombre, apellido, dni, email, imagen, password) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.email = email;
        this.imagen = imagen;
        this.password = password;
    }
}


/***/ }),

/***/ "./src/app/pages/cliente/cliente-login/cliente-login.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/cliente/cliente-login/cliente-login.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudGUvY2xpZW50ZS1sb2dpbi9jbGllbnRlLWxvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/cliente/cliente-login/cliente-login.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/cliente/cliente-login/cliente-login.component.ts ***!
  \************************************************************************/
/*! exports provided: ClienteLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteLoginComponent", function() { return ClienteLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cliente_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/cliente-service.service */ "./src/app/services/cliente-service.service.ts");
/* harmony import */ var _models_cliente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../models/cliente */ "./src/app/models/cliente.ts");




let ClienteLoginComponent = class ClienteLoginComponent {
    constructor(miservicio) {
        this.miservicio = miservicio;
        this.cliente = new _models_cliente__WEBPACK_IMPORTED_MODULE_3__["miCliente"]('pepe', '123');
    }
    ngOnInit() {
    }
    loguearCliente() {
        this.miservicio.loguearCliente(this.cliente);
    }
};
ClienteLoginComponent.ctorParameters = () => [
    { type: _services_cliente_service_service__WEBPACK_IMPORTED_MODULE_2__["ClienteServiceService"] }
];
ClienteLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cliente-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cliente-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cliente/cliente-login/cliente-login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cliente-login.component.css */ "./src/app/pages/cliente/cliente-login/cliente-login.component.css")).default]
    })
], ClienteLoginComponent);



/***/ }),

/***/ "./src/app/pages/cliente/cliente.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/cliente/cliente.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudGUvY2xpZW50ZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/cliente/cliente.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/cliente/cliente.component.ts ***!
  \****************************************************/
/*! exports provided: ClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteComponent", function() { return ClienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClienteComponent = class ClienteComponent {
    constructor() { }
    ngOnInit() {
    }
};
ClienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cliente',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cliente.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cliente/cliente.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cliente.component.css */ "./src/app/pages/cliente/cliente.component.css")).default]
    })
], ClienteComponent);



/***/ }),

/***/ "./src/app/pages/cliente/crear/crear.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/cliente/crear/crear.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudGUvY3JlYXIvY3JlYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/cliente/crear/crear.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/cliente/crear/crear.component.ts ***!
  \********************************************************/
/*! exports provided: CrearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearComponent", function() { return CrearComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_cliente_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/cliente-service.service */ "./src/app/services/cliente-service.service.ts");
/* harmony import */ var _models_cliente__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../models/cliente */ "./src/app/models/cliente.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let CrearComponent = class CrearComponent {
    constructor(miservicio) {
        this.miservicio = miservicio;
        this.Cliente = new _models_cliente__WEBPACK_IMPORTED_MODULE_2__["miCliente"]('pepe', '123');
    }
    ngOnInit() {
    }
    crearCliente() {
        this.miservicio.crearCliente(this.Cliente);
    }
};
CrearComponent.ctorParameters = () => [
    { type: _services_cliente_service_service__WEBPACK_IMPORTED_MODULE_1__["ClienteServiceService"] }
];
CrearComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-crear',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./crear.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cliente/crear/crear.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./crear.component.css */ "./src/app/pages/cliente/crear/crear.component.css")).default]
    })
], CrearComponent);



/***/ }),

/***/ "./src/app/pages/detalle/detalle.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/detalle/detalle.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("i{\nbottom:0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWxsZS9kZXRhbGxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxVQUFVO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXRhbGxlL2RldGFsbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIml7XG5ib3R0b206MHB4O1xufVxuIl19 */");

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
/* harmony import */ var _models_puntaje__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/puntaje */ "./src/app/models/puntaje.ts");
/* harmony import */ var src_app_services_juegos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/juegos.service */ "./src/app/services/juegos.service.ts");
/* harmony import */ var src_app_services_userservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/userservice.service */ "./src/app/services/userservice.service.ts");





let DetalleComponent = class DetalleComponent {
    constructor(puntajesService, usS) {
        this.puntajesService = puntajesService;
        this.usS = usS;
        this.puntajes = [];
        this.puntajesAux = [];
    }
    ngOnInit() {
        this.puntajesService.GetPuntajes().subscribe(puntajes => {
            this.puntajes = puntajes;
            console.log(puntajes);
            /* this.BorrarVariorsElementosArray(this.puntajes, this.usS.getUser().email); */
        }, function () { console.log("Error"); });
        console.log("ngOnInit");
    }
    BorrarVariorsElementosArray(aPruebas, dato) {
        console.log("ELIMINANDO ...", aPruebas.length);
        for (var i = 0; i < aPruebas.length; i++) {
            if (aPruebas[i].nameuser != dato)
                /*  aPruebas.splice(i, 1); */
                this.puntajes.push(aPruebas[i]);
            console.log("ERRORRRR ", this.puntajes, i, dato);
        }
        return aPruebas;
    }
    Cargar(puntaje) {
        console.log(puntaje);
        /*  this.usuarios.push(new miUsuario(usuario.nombre, usuario.apellido, usuario.dni)); */
        this.puntajes.push(new _models_puntaje__WEBPACK_IMPORTED_MODULE_2__["miPuntaje"](puntaje.horario, puntaje.juego, puntaje.nameuser, puntaje.puntaje, puntaje.detalle, puntaje.uid));
    }
};
DetalleComponent.ctorParameters = () => [
    { type: src_app_services_juegos_service__WEBPACK_IMPORTED_MODULE_3__["JuegosService"] },
    { type: src_app_services_userservice_service__WEBPACK_IMPORTED_MODULE_4__["UserserviceService"] }
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
/* harmony default export */ __webpack_exports__["default"] = (".contenedora{\r\n    background: -webkit-gradient(linear,0% 0%,100% 0%,color-stop(0, rgb(150, 10, 0)),color-stop(50%,rgb(50, 0, 0) ),color-stop(100%,rgb(20, 0, 0)));\r\n    padding: 0 20px;\r\n    margin: 1px;\r\n    width: auto;\r\n    overflow: auto;\r\n    color: white;\r\n    /* border: 1px solid #ccc; */\r\n    box-shadow: 1px 0px 20px 5px red;\r\n    border-radius: 5px;\r\n    min-height: 300px;\r\n    min-width: 300px;\r\n    width: auto;\r\n}\r\n.mat-button{\r\n    box-shadow: 0 0 20px 10px rgb(150, 0, 0);\r\n    margin-bottom: 0px;\r\n    color : white;\r\n    /* padding: 1px; */\r\n    border-radius: 5px;\r\n    margin: 1px auto;\r\n    background: rgba(0, 0, 0, 0.7);\r\n}\r\nh2{\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtJQUErSTtJQUMvSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSx3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw4QkFBOEI7QUFDbEM7QUFDQTs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVuZWRvcmF7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwwJSAwJSwxMDAlIDAlLGNvbG9yLXN0b3AoMCwgcmdiKDE1MCwgMTAsIDApKSxjb2xvci1zdG9wKDUwJSxyZ2IoNTAsIDAsIDApICksY29sb3Itc3RvcCgxMDAlLHJnYigyMCwgMCwgMCkpKTtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIG1hcmdpbjogMXB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7ICovXHJcbiAgICBib3gtc2hhZG93OiAxcHggMHB4IDIwcHggNXB4IHJlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcbi5tYXQtYnV0dG9ue1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggMTBweCByZ2IoMTUwLCAwLCAwKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGNvbG9yIDogd2hpdGU7XHJcbiAgICAvKiBwYWRkaW5nOiAxcHg7ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDFweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG59XHJcbmgye1xyXG4gICAgXHJcbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".contenedora{\n  align-content: center;\n  text-align: center;\n  margin:auto;\n}\n.espacio{\n  flex: 1 1 auto;\n  width: 5px;\n  float: auto;\n}\n.subtitulo{\n    padding: 5px;\n    text-align: center;\n    text-transform: uppercase;\n    float: auto;\n    border-radius: 5px; \n  /*   width: 50%; */\n    margin:auto;\n  }\n#idjuego{\n    font-size: 200px;\n  }\n.mat-button{\n    box-shadow: 0px -10px 15px 0px rgba(0,0,250,0.64);\n  }\n#usuario{\n    float: auto;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    color: rgb(50, 50, 250);\n    /* padding: 0 5px 0 5px; */\n    text-align: center;\n    border-bottom: 1px solid black;\n    background: rgba(0, 0, 0, 0.2)\n  }\nbody,h1,h2,h3,h4,h5,h6 {font-family: \"Lato\", sans-serif}\n.w3-bar,h1,button {font-family: \"Montserrat\", sans-serif}\n.fa-anchor,.fa-coffee {font-size:200px}\n#contenedor1{\n  padding:50px 50px;\n  min-height: 400px;\n  height: 20%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEIsa0JBQWtCO0lBQ2hCLFdBQVc7RUFDYjtBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxpREFBaUQ7RUFDbkQ7QUFFQTtJQUNFLFdBQVc7SUFDWCxzRUFBc0U7SUFDdEUsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCO0VBQ0Y7QUFDRix3QkFBd0IsK0JBQStCO0FBQ3ZELG1CQUFtQixxQ0FBcUM7QUFDeEQsdUJBQXVCLGVBQWU7QUFDdEM7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbmVkb3Jhe1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOmF1dG87XG59XG4uZXNwYWNpb3tcbiAgZmxleDogMSAxIGF1dG87XG4gIHdpZHRoOiA1cHg7XG4gIGZsb2F0OiBhdXRvO1xufVxuLnN1YnRpdHVsb3tcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZmxvYXQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyBcbiAgLyogICB3aWR0aDogNTAlOyAqL1xuICAgIG1hcmdpbjphdXRvO1xuICB9XG4gICNpZGp1ZWdve1xuICAgIGZvbnQtc2l6ZTogMjAwcHg7XG4gIH1cbiAgLm1hdC1idXR0b257XG4gICAgYm94LXNoYWRvdzogMHB4IC0xMHB4IDE1cHggMHB4IHJnYmEoMCwwLDI1MCwwLjY0KTtcbiAgfVxuXG4gICN1c3Vhcmlve1xuICAgIGZsb2F0OiBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHJnYig1MCwgNTAsIDI1MCk7XG4gICAgLyogcGFkZGluZzogMCA1cHggMCA1cHg7ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMilcbiAgfVxuYm9keSxoMSxoMixoMyxoNCxoNSxoNiB7Zm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmfVxuLnczLWJhcixoMSxidXR0b24ge2ZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZn1cbi5mYS1hbmNob3IsLmZhLWNvZmZlZSB7Zm9udC1zaXplOjIwMHB4fVxuI2NvbnRlbmVkb3Ixe1xuICBwYWRkaW5nOjUwcHggNTBweDtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIGhlaWdodDogMjAlO1xufVxuIl19 */");

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
/* harmony import */ var src_app_services_userservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/userservice.service */ "./src/app/services/userservice.service.ts");



let HomeComponent = class HomeComponent {
    constructor(authUser) {
        this.authUser = authUser;
    }
    ngOnInit() {
        this.user = this.authUser.getUser();
        console.log('Usuario home:  ', this.user.email);
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_services_userservice_service__WEBPACK_IMPORTED_MODULE_2__["UserserviceService"] }
];
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
/* harmony default export */ __webpack_exports__["default"] = (".contenedora{\n    background-color: rgba(250, 250, 250, 0.8);\n    padding: 0 8px;\n    margin: 1px;\n    width: auto;\n    overflow: auto; \n    /* border: 1px solid #ccc; */\n    box-shadow: 0 0 20px 1px cadetblue;\n    border-radius: 5px;\n}\n.liks{\n    display: table-column-group;\n}\n.espacio{\n    flex: 1 1 auto;\n    width: 5px;\n    position: relative;\n}\n.mat-button{\n    margin-bottom: 0px;\n    /* padding: 1px; */\n    border-radius: 5px;\n    margin: 1px auto;\n}\nul{\n    margin: auto;\n}\n.mat-icon, .span{\n    padding: 0px;\n    border-spacing: 0cm;\n    margin-bottom: 0px;\n}\n.subtitulo{\n    padding: 5px;\n    text-align: center;\n    text-transform: uppercase;\n    float: auto;\n    border-radius: 5px; \n    width: 50%;\n    margin:auto;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvanVlZ29zL2p1ZWdvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMENBQTBDO0lBQzFDLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvanVlZ29zL2p1ZWdvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbmVkb3Jhe1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC44KTtcbiAgICBwYWRkaW5nOiAwIDhweDtcbiAgICBtYXJnaW46IDFweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBvdmVyZmxvdzogYXV0bzsgXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI2NjYzsgKi9cbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAxcHggY2FkZXRibHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5saWtze1xuICAgIGRpc3BsYXk6IHRhYmxlLWNvbHVtbi1ncm91cDtcbn1cbi5lc3BhY2lve1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIHdpZHRoOiA1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWF0LWJ1dHRvbntcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgLyogcGFkZGluZzogMXB4OyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDFweCBhdXRvO1xufVxudWx7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLm1hdC1pY29uLCAuc3BhbntcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDBjbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uc3VidGl0dWxve1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmbG9hdDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOmF1dG87XG4gIH0iXX0= */");

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

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n  \r\n  .errormje{\r\n    color: red;\r\n    font-size: 12px;\r\n  }\r\n  \r\n  .example-card{\r\n    min-width: 300px;;\r\n    width: 100%;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxVQUFVO0lBQ1YsZUFBZTtFQUNqQjs7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1jb250YWluZXIgPiAqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuZXJyb3JtamV7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuZXhhbXBsZS1jYXJke1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDs7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_userservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/userservice.service */ "./src/app/services/userservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    /* public miemail = new FormControl('', [Validators.required, Validators.email]); */
    /*   getErrorMessage() {
        return this.miemail.hasError('required') ? 'You must enter a value' :
            this.miemail.hasError('miemail') ? 'Not a valid email' :
            '';
      } */
    constructor(miAuth, authRout) {
        this.miAuth = miAuth;
        this.authRout = authRout;
    }
    ngOnInit() {
        this.miAuth.getAuth()
            .subscribe(user => {
            this.user = user;
        });
    }
    onSubmitLoginPublic() {
        this.email = 'publico@publico.com';
        this.password = '123456';
        this.onSubmitLogin();
    }
    onSubmitLogin() {
        /*     this.miAuth.login(this.email, this.password)
            .then((res) =>{
              this.authRout.navigate(['/home'])
            }).catch((err) => {
              console.log(err);
              this.msjerror= err;
            }); */
        this.miAuth.login(this.email, this.password)
            .then(res => {
            console.log("logueando, yendo a casa");
            this.authRout.navigate(['/home']);
        })
            .catch(err => this.msjerror = err);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_userservice_service__WEBPACK_IMPORTED_MODULE_2__["UserserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")).default]
    })
], LoginComponent);



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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/usuarios.service */ "./src/app/services/usuarios.service.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../material */ "./src/app/material.ts");
/* harmony import */ var _cliente_cliente_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cliente/cliente.component */ "./src/app/pages/cliente/cliente.component.ts");
/* harmony import */ var _cliente_crear_crear_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cliente/crear/crear.component */ "./src/app/pages/cliente/crear/crear.component.ts");
/* harmony import */ var _cliente_cliente_login_cliente_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cliente/cliente-login/cliente-login.component */ "./src/app/pages/cliente/cliente-login/cliente-login.component.ts");












let PagesModule = class PagesModule {
};
PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_cliente_cliente_component__WEBPACK_IMPORTED_MODULE_9__["ClienteComponent"], _cliente_crear_crear_component__WEBPACK_IMPORTED_MODULE_10__["CrearComponent"], _cliente_cliente_login_cliente_login_component__WEBPACK_IMPORTED_MODULE_11__["ClienteLoginComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
            _material__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [_services_usuarios_service__WEBPACK_IMPORTED_MODULE_7__["UsuariosService"]]
    })
], PagesModule);



/***/ }),

/***/ "./src/app/pages/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/register/register.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_userservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/userservice.service */ "./src/app/services/userservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let RegisterComponent = class RegisterComponent {
    constructor(miAuth, authRout, storage) {
        this.miAuth = miAuth;
        this.authRout = authRout;
        this.storage = storage;
    }
    ngOnInit() {
        this.miAuth.getAuth()
            .subscribe(user => {
            this.user = user;
        });
    }
    onSubmitRegister() {
        this.miAuth.register(this.email, this.password)
            .then(res => {
            console.log('logueando, yendo a casa', this.urlImage);
            this.authRout.navigate(['/home']);
        })
            .catch(err => this.msjerror = err);
    }
    onUpload(e) {
        console.log('Archivo', e.target.files[0]);
        const file = e.target.files[0];
        const filePath = "upload/image.jpg";
        const ref = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, file);
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => this.urlImage = ref.getDownloadURL())).subscribe(); //url imagen
        console.log('Uploaded a blob or file!');
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_userservice_service__WEBPACK_IMPORTED_MODULE_3__["UserserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/pages/register/register.component.css")).default]
    })
], RegisterComponent);

/* rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
} */ 


/***/ }),

/***/ "./src/app/pages/usuarios/usuarios.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/usuarios/usuarios.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n    width: 100%;\n  }\n/* .contenedor{\n  background-image: url(\"../../../assets/imagenes/game2.jpg\");\n  background-repeat: no-repeat;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXN1YXJpb3MvdXN1YXJpb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYjtBQUNGOzs7R0FHRyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzdWFyaW9zL3VzdWFyaW9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbi8qIC5jb250ZW5lZG9ye1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VuZXMvZ2FtZTIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufSAqLyJdfQ== */");

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
    constructor(usuariosService) {
        this.usuariosService = usuariosService;
        this.usuarios = [];
    }
    ngOnInit() {
        this.usuariosService.GetUsers().subscribe(usuarios => {
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
        this.usuariosService.deleteUsuario(usuario);
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

/***/ "./src/app/services/cliente-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/cliente-service.service.ts ***!
  \*****************************************************/
/*! exports provided: ClienteServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteServiceService", function() { return ClienteServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ClienteServiceService = class ClienteServiceService {
    constructor(http) {
        this.http = http;
    }
    crearCliente(cliente) {
        /*  Cliente={user:"pepe", pass:"123"} https://github.com/MarioAr/servidor-prueba-front*/
        console.log(JSON.stringify(cliente));
        return this.http.post('http://127.0.0.1:3003/clientes', { cliente }).subscribe(resp => {
            console.log(resp);
        });
    }
    devolverCliente(cliente) {
        /*  Cliente{user:"pepe", pass:"123"} */
        /*  return this.http.get('' ); */
    }
    loguearCliente(cliente) {
        /*  Cliente{user:"pepe", pass:"123"} */
        console.log(JSON.stringify(cliente));
        return this.http.post('http://127.0.0.1:3003/Login', { cliente }).subscribe(resp => {
            console.log(resp);
        });
    }
};
ClienteServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ClienteServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ClienteServiceService);



/***/ }),

/***/ "./src/app/services/juegos.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/juegos.service.ts ***!
  \********************************************/
/*! exports provided: JuegosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegosService", function() { return JuegosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _userservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userservice.service */ "./src/app/services/userservice.service.ts");





let JuegosService = class JuegosService {
    constructor(db, usS) {
        this.db = db;
        this.usS = usS;
        this.puntajeCollection = this.db.collection('puntajes');
        this.puntajes = this.puntajeCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
        console.log("Puntajes: ", this.puntajes);
    }
    GetPuntajes() {
        return this.puntajes = this.puntajeCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                /* console.log(this.usS.getUser().email); */
                /* if(a.payload.doc.data().nameuser == this.usS.getUser().email ){ */
                const data = a.payload.doc.data();
                data.uid = a.payload.doc.id;
                /* console.log("Data:" , data); */
                return data;
                /*   }else{
                    let dat = new miPuntaje();
                    return dat ;
                  } */
            });
        }));
    }
    addPuntaje(puntaje) {
        let miPuntajeJSON = JSON.parse(JSON.stringify(puntaje));
        /* console.log(miPuntajeJSON); */
        this.puntajeCollection.add(miPuntajeJSON);
    }
    updatePuntaje(puntaje) {
        this.puntajeDoc = this.db.doc(`puntajes/${puntaje.uid}`);
        this.puntajeDoc.update(puntaje);
    }
    formatearFecha(_date) {
        const day = _date.getDate() < 10 ? '0' + _date.getDate() : _date.getDate();
        const month = (_date.getMonth() + 1) < 10 ? '0' + (_date.getMonth() + 1) : (_date.getMonth() + 1);
        const year = _date.getFullYear();
        const hora = _date.getHours() < 10 ? '0' + _date.getHours() : _date.getHours();
        const minutes = _date.getMinutes() < 10 ? '0' + _date.getMinutes() : _date.getMinutes();
        const seconds = _date.getSeconds() < 10 ? '0' + _date.getSeconds() : _date.getSeconds();
        console.log(`${month}/${day}/${year}`);
        return `${day}/${month}/${year}  ${hora}:${minutes}:${seconds}`;
    }
};
JuegosService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _userservice_service__WEBPACK_IMPORTED_MODULE_4__["UserserviceService"] }
];
JuegosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], JuegosService);



/***/ }),

/***/ "./src/app/services/userservice.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/userservice.service.ts ***!
  \*************************************************/
/*! exports provided: UserserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserserviceService", function() { return UserserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_usuario__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/usuario */ "./src/app/models/usuario.ts");







//esta clase es analoga a Auth Service. 
let UserserviceService = class UserserviceService {
    constructor(
    //IMPORETANTE: para poder usar AngularFireAuth hay que importar
    // el modulo AngularFireAuthModule en app.module
    afAuth, db, mirouter) {
        this.afAuth = afAuth;
        this.db = db;
        this.mirouter = mirouter;
        this.miObservable = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]("");
        this.miObservable$ = this.miObservable.asObservable();
        if (localStorage.getItem('email')) {
            this.cargarUsuario("", localStorage.getItem('email').toString());
            console.log("constructor", localStorage.getItem('email').toString());
        }
    }
    buscarLogin(ruta) {
        return new Promise((resolve, reject) => {
            resolve(this.getAuth()
                .subscribe(user => {
                if (user) {
                    /* console.log("isLogin = true", user); */
                    this.cargarUsuario(user.displayName, user.email);
                    console.log("Usuariocargardo", ruta, this.mirouter.url);
                    this.mirouter.navigate([ruta]);
                }
                else {
                    console.log("isLoginLOGUEO = false");
                }
            })),
                err => reject(err);
        });
    }
    reCargarusuario() {
        this.getAuth()
            .subscribe(user => {
            this.user = user;
        });
    }
    getUser() {
        return this.user;
    }
    login(email, password) {
        //verificar usuario y retornar el jwt
        return new Promise((resolve, reject) => {
            this.afAuth.auth.signInWithEmailAndPassword(email, password)
                .then(userData => resolve(userData), error => reject(error));
            /*    }).catch(error => {console.log(error) */
        });
    }
    register(email, password) {
        //verificar usuario y retornar el jwt
        return new Promise((resolve, reject) => {
            this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(userData => resolve(userData), error => reject(error));
            /*    }).catch(error => {console.log(error) */
        });
    }
    generarToken() {
        let email = this.afAuth.auth.currentUser.email;
        let uid = this.afAuth.auth.currentUser.uid;
        this.afAuth.auth.currentUser.getIdToken()
            .then(function (jsonwebtoken) {
            console.log('jsonwebtoken');
            localStorage.setItem('token', jsonwebtoken);
            /*  localStorage.setItem('email', email ); */
            // se comenta porque no hace falta ahora con auth localStorage.setItem('uid', uid );
        })
            .catch(err => console.log(err));
    }
    logOut() {
        localStorage.removeItem('token');
        /* localStorage.removeItem('email'); */
        this.afAuth.auth.signOut();
        this.user = null;
        this.mirouter.navigate(['login']);
    }
    /*   .catch(error => {
        this.miObservable.next(error);
      })
      .then(userCredencials => {
        if(userCredencials){
          this.mirouter.navigate(['/home']);
        }
      }) */
    cargarUsuario(nombre, email) {
        this.user = new _models_usuario__WEBPACK_IMPORTED_MODULE_6__["miUsuario"]();
        this.user.nombre = nombre;
        this.user.email = email;
        console.log("cargando usuario", nombre, email);
    }
    getAuth() {
        return this.afAuth.authState;
    }
    isAutenticated() {
        console.log("chequeo isAutenticated");
        if (!this.user) {
            console.log("No autenticado");
            return false;
        }
        else {
            console.log("Autenticado");
            return true;
        }
    }
};
UserserviceService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UserserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserserviceService);



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
        this.user = { id: '1' };
        /* this.usuarios = this.db.collection('usuarios').valueChanges(); */
        this.usuariosCollection = this.db.collection('usuarios');
        this.usuarios = this.usuariosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
    }
    GetUsers() {
        /*   console.log(this.usuarios); */
        /* return this.usuarios = this.usuarios */
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
        if (confirm("¿Realmente desea eliminar el Usuario?")) {
            this.usuarioDoc = this.db.doc(`usuarios/${usuario.id}`);
            console.log(this.usuarioDoc);
            this.usuarioDoc.delete();
        }
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