module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BasicComponents.js":
/*!***************************************!*\
  !*** ./components/BasicComponents.js ***!
  \***************************************/
/*! exports provided: Container, Nav, Scroll, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scroll", function() { return Scroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var Container = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1w2rd820",
  label: "Container"
})( false ? undefined : {
  name: "17i86fx",
  styles: "max-width:960px;padding:1px 36px;margin:auto;@media (max-width:640px){padding:1px 27px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ia2svU2l0ZXMvaGFja2VyLW5leHQvY29tcG9uZW50cy9CYXNpY0NvbXBvbmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR21DIiwiZmlsZSI6Ii9Vc2Vycy9iZW5ia2svU2l0ZXMvaGFja2VyLW5leHQvY29tcG9uZW50cy9CYXNpY0NvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgICBwYWRkaW5nOiAxcHggMzZweDtcbiAgICBtYXJnaW46IGF1dG87XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgcGFkZGluZzogMXB4IDI3cHg7XG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgTmF2ID0gc3R5bGVkLm5hdmBcbiAgICBwYWRkaW5nOiAxOHB4IDM2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzMwMTtcbiAgICBoZWlnaHQ6IDYwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBTY3JvbGwgPSBzdHlsZWQuZGl2YFxuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuYFxuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gc3R5bGVkLmZvb3RlcmBcbiAgICBwYWRkaW5nOiAxOHB4IDAgMzZweDtcbmAiXX0= */"
});
var Nav = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("nav", {
  target: "e1w2rd821",
  label: "Nav"
})( false ? undefined : {
  name: "3zvna1",
  styles: "padding:18px 36px;background-color:#ff7301;height:60px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ia2svU2l0ZXMvaGFja2VyLW5leHQvY29tcG9uZW50cy9CYXNpY0NvbXBvbmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYTZCIiwiZmlsZSI6Ii9Vc2Vycy9iZW5ia2svU2l0ZXMvaGFja2VyLW5leHQvY29tcG9uZW50cy9CYXNpY0NvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgICBwYWRkaW5nOiAxcHggMzZweDtcbiAgICBtYXJnaW46IGF1dG87XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgcGFkZGluZzogMXB4IDI3cHg7XG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgTmF2ID0gc3R5bGVkLm5hdmBcbiAgICBwYWRkaW5nOiAxOHB4IDM2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzMwMTtcbiAgICBoZWlnaHQ6IDYwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBTY3JvbGwgPSBzdHlsZWQuZGl2YFxuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuYFxuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gc3R5bGVkLmZvb3RlcmBcbiAgICBwYWRkaW5nOiAxOHB4IDAgMzZweDtcbmAiXX0= */"
});
var Scroll = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1w2rd822",
  label: "Scroll"
})( false ? undefined : {
  name: "1lfeb4v",
  styles: "height:inherit;overflow-y:auto;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ia2svU2l0ZXMvaGFja2VyLW5leHQvY29tcG9uZW50cy9CYXNpY0NvbXBvbmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJnQyIsImZpbGUiOiIvVXNlcnMvYmVuYmtrL1NpdGVzL2hhY2tlci1uZXh0L2NvbXBvbmVudHMvQmFzaWNDb21wb25lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIG1heC13aWR0aDogOTYwcHg7XG4gICAgcGFkZGluZzogMXB4IDM2cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgIHBhZGRpbmc6IDFweCAyN3B4O1xuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IE5hdiA9IHN0eWxlZC5uYXZgXG4gICAgcGFkZGluZzogMThweCAzNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjczMDE7XG4gICAgaGVpZ2h0OiA2MHB4O1xuYFxuXG5leHBvcnQgY29uc3QgU2Nyb2xsID0gc3R5bGVkLmRpdmBcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbmBcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IHN0eWxlZC5mb290ZXJgXG4gICAgcGFkZGluZzogMThweCAwIDM2cHg7XG5gIl19 */"
});
var Footer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("footer", {
  target: "e1w2rd823",
  label: "Footer"
})( false ? undefined : {
  name: "1u7bdxl",
  styles: "padding:18px 0 36px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ia2svU2l0ZXMvaGFja2VyLW5leHQvY29tcG9uZW50cy9CYXNpY0NvbXBvbmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JtQyIsImZpbGUiOiIvVXNlcnMvYmVuYmtrL1NpdGVzL2hhY2tlci1uZXh0L2NvbXBvbmVudHMvQmFzaWNDb21wb25lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIG1heC13aWR0aDogOTYwcHg7XG4gICAgcGFkZGluZzogMXB4IDM2cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgIHBhZGRpbmc6IDFweCAyN3B4O1xuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IE5hdiA9IHN0eWxlZC5uYXZgXG4gICAgcGFkZGluZzogMThweCAzNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjczMDE7XG4gICAgaGVpZ2h0OiA2MHB4O1xuYFxuXG5leHBvcnQgY29uc3QgU2Nyb2xsID0gc3R5bGVkLmRpdmBcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbmBcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IHN0eWxlZC5mb290ZXJgXG4gICAgcGFkZGluZzogMThweCAwIDM2cHg7XG5gIl19 */"
});

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BasicComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BasicComponents */ "./components/BasicComponents.js");
var _jsxFileName = "/Users/benbkk/Sites/hacker-next/components/Layout.js";






var Layout = function Layout(props) {
  var children = props.children,
      title = props.title,
      backButton = props.backButton,
      description = props.description;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_BasicComponents__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, backButton && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", {
    className: "back-button",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.back();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "\u2B05"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    className: "main-title",
    style: {
      color: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, title)))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_BasicComponents__WEBPACK_IMPORTED_MODULE_4__["Scroll"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_BasicComponents__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, children))));
};

Layout.defaultProps = {
  title: 'HackerNews'
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Stories.js":
/*!*******************************!*\
  !*** ./components/Stories.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./utils/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/benbkk/Sites/hacker-next/components/Stories.js";








var listItem =
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("padding:36px 0;cursor:pointer;border-bottom:4px solid ", Object(polished__WEBPACK_IMPORTED_MODULE_4__["transparentize"])(0.9, 'black'), ";h2{margin:9px 0;max-width:80%;a{color:", Object(polished__WEBPACK_IMPORTED_MODULE_4__["lighten"])(0.3, 'black'), ";&:hover{color:#ff7301;}}}label:listItem;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ia2svU2l0ZXMvaGFja2VyLW5leHQvY29tcG9uZW50cy9TdG9yaWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFvQiIsImZpbGUiOiIvVXNlcnMvYmVuYmtrL1NpdGVzL2hhY2tlci1uZXh0L2NvbXBvbmVudHMvU3Rvcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHNsdWdpZnkgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IGxpZ2h0ZW4sIHRyYW5zcGFyZW50aXplLCByZW0gfSBmcm9tICdwb2xpc2hlZCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHsgZ2V0RGF0ZSB9IGZyb20gJ3V0aWxzJ1xuXG5jb25zdCBsaXN0SXRlbSA9IGNzc2BcbiAgICBwYWRkaW5nOiAzNnB4IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAke3RyYW5zcGFyZW50aXplKDAuOSwgJ2JsYWNrJyl9O1xuXG4gICAgaDIgeyBcbiAgICAgICAgbWFyZ2luOiA5cHggMDsgbWF4LXdpZHRoOiA4MCU7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICR7bGlnaHRlbigwLjMsICdibGFjaycpfTtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAgI2ZmNzMwMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmBcbmNvbnN0IHN0b3J5SW5mbyA9IGNzc2BcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAke3JlbSgnMTRweCcpfTtcbiAgICBtYXJnaW4tcmlnaHQ6ICR7cmVtKCc5cHgnKX07XG5gXG5cbmNvbnN0IGxpbmtTdHlsZSA9IGNzc2BcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2ZmNzMwMTtcbiAgICB9XG5gXG5cblxuXG5cbmNvbnN0IFN0b3JpZXNMaXN0ID0gKHtzdG9yaWVzfSkgPT4gKFxuICAgICAgICA8dWw+XG4gICAgICAgIHtzdG9yaWVzLm1hcChzdG9yeSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtzdG9yeS5pZH0gY2xhc3NOYW1lPSdzdG9yeScgY3NzPXtsaXN0SXRlbX0+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nc3RvcnktdGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3N0b3J5P2lkPSR7c3RvcnkuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT57c3RvcnkudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RvcnktZGV0YWlscyc+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNzcz17c3RvcnlJbmZvfT48Yj57c3RvcnkucG9pbnRzID8gc3RvcnkucG9pbnRzIDogMH08L2I+IHBvaW50czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3N0b3J5P2lkPSR7c3RvcnkuaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY3NzPXtzdG9yeUluZm99PjxiPjxhIGNzcz17bGlua1N0eWxlfT57c3RvcnkuY29tbWVudHNfY291bnQgfHwgMH0gY29tbWVudHM8L2E+PC9iPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e21hcmdpbjogMH19PjxzcGFuIGNzcz17c3RvcnlJbmZvfT5Qb3N0ZWQgb24ge2Ake2dldERhdGUoc3RvcnkudGltZSl9LCBgfTxiPntgJHtzdG9yeS50aW1lX2Fnb31gfTwvYj48L3NwYW4+PC9wPiAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbilcblxuIGV4cG9ydCBkZWZhdWx0IFN0b3JpZXNMaXN0Il19 */"), "label:listItem;");
var storyInfo =
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("display:inline-block;font-size:", Object(polished__WEBPACK_IMPORTED_MODULE_4__["rem"])('14px'), ";margin-right:", Object(polished__WEBPACK_IMPORTED_MODULE_4__["rem"])('9px'), ";label:storyInfo;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ia2svU2l0ZXMvaGFja2VyLW5leHQvY29tcG9uZW50cy9TdG9yaWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCcUIiLCJmaWxlIjoiL1VzZXJzL2JlbmJray9TaXRlcy9oYWNrZXItbmV4dC9jb21wb25lbnRzL1N0b3JpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBzbHVnaWZ5IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBsaWdodGVuLCB0cmFuc3BhcmVudGl6ZSwgcmVtIH0gZnJvbSAncG9saXNoZWQnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IGdldERhdGUgfSBmcm9tICd1dGlscydcblxuY29uc3QgbGlzdEl0ZW0gPSBjc3NgXG4gICAgcGFkZGluZzogMzZweCAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgJHt0cmFuc3BhcmVudGl6ZSgwLjksICdibGFjaycpfTtcblxuICAgIGgyIHsgXG4gICAgICAgIG1hcmdpbjogOXB4IDA7IG1heC13aWR0aDogODAlO1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2xpZ2h0ZW4oMC4zLCAnYmxhY2snKX07XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogICNmZjczMDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5gXG5jb25zdCBzdG9yeUluZm8gPSBjc3NgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogJHtyZW0oJzE0cHgnKX07XG4gICAgbWFyZ2luLXJpZ2h0OiAke3JlbSgnOXB4Jyl9O1xuYFxuXG5jb25zdCBsaW5rU3R5bGUgPSBjc3NgXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNmZjczMDE7XG4gICAgfVxuYFxuXG5cblxuXG5jb25zdCBTdG9yaWVzTGlzdCA9ICh7c3Rvcmllc30pID0+IChcbiAgICAgICAgPHVsPlxuICAgICAgICB7c3Rvcmllcy5tYXAoc3RvcnkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17c3RvcnkuaWR9IGNsYXNzTmFtZT0nc3RvcnknIGNzcz17bGlzdEl0ZW19PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3N0b3J5LXRpdGxlJz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zdG9yeT9pZD0ke3N0b3J5LmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3N0b3J5LnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0b3J5LWRldGFpbHMnPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjc3M9e3N0b3J5SW5mb30+PGI+e3N0b3J5LnBvaW50cyA/IHN0b3J5LnBvaW50cyA6IDB9PC9iPiBwb2ludHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9zdG9yeT9pZD0ke3N0b3J5LmlkfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNzcz17c3RvcnlJbmZvfT48Yj48YSBjc3M9e2xpbmtTdHlsZX0+e3N0b3J5LmNvbW1lbnRzX2NvdW50IHx8IDB9IGNvbW1lbnRzPC9hPjwvYj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW46IDB9fT48c3BhbiBjc3M9e3N0b3J5SW5mb30+UG9zdGVkIG9uIHtgJHtnZXREYXRlKHN0b3J5LnRpbWUpfSwgYH08Yj57YCR7c3RvcnkudGltZV9hZ299YH08L2I+PC9zcGFuPjwvcD4gIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4pXG5cbiBleHBvcnQgZGVmYXVsdCBTdG9yaWVzTGlzdCJdfQ== */"), "label:storyInfo;");
var linkStyle =
/*#__PURE__*/
 false ? undefined : {
  name: "194stxr-linkStyle",
  styles: "font-weight:700;&:hover{color:#ff7301;}label:linkStyle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ia2svU2l0ZXMvaGFja2VyLW5leHQvY29tcG9uZW50cy9TdG9yaWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCcUIiLCJmaWxlIjoiL1VzZXJzL2JlbmJray9TaXRlcy9oYWNrZXItbmV4dC9jb21wb25lbnRzL1N0b3JpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBzbHVnaWZ5IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBsaWdodGVuLCB0cmFuc3BhcmVudGl6ZSwgcmVtIH0gZnJvbSAncG9saXNoZWQnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IGdldERhdGUgfSBmcm9tICd1dGlscydcblxuY29uc3QgbGlzdEl0ZW0gPSBjc3NgXG4gICAgcGFkZGluZzogMzZweCAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgJHt0cmFuc3BhcmVudGl6ZSgwLjksICdibGFjaycpfTtcblxuICAgIGgyIHsgXG4gICAgICAgIG1hcmdpbjogOXB4IDA7IG1heC13aWR0aDogODAlO1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2xpZ2h0ZW4oMC4zLCAnYmxhY2snKX07XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogICNmZjczMDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5gXG5jb25zdCBzdG9yeUluZm8gPSBjc3NgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogJHtyZW0oJzE0cHgnKX07XG4gICAgbWFyZ2luLXJpZ2h0OiAke3JlbSgnOXB4Jyl9O1xuYFxuXG5jb25zdCBsaW5rU3R5bGUgPSBjc3NgXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNmZjczMDE7XG4gICAgfVxuYFxuXG5cblxuXG5jb25zdCBTdG9yaWVzTGlzdCA9ICh7c3Rvcmllc30pID0+IChcbiAgICAgICAgPHVsPlxuICAgICAgICB7c3Rvcmllcy5tYXAoc3RvcnkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17c3RvcnkuaWR9IGNsYXNzTmFtZT0nc3RvcnknIGNzcz17bGlzdEl0ZW19PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3N0b3J5LXRpdGxlJz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zdG9yeT9pZD0ke3N0b3J5LmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3N0b3J5LnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0b3J5LWRldGFpbHMnPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjc3M9e3N0b3J5SW5mb30+PGI+e3N0b3J5LnBvaW50cyA/IHN0b3J5LnBvaW50cyA6IDB9PC9iPiBwb2ludHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9zdG9yeT9pZD0ke3N0b3J5LmlkfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNzcz17c3RvcnlJbmZvfT48Yj48YSBjc3M9e2xpbmtTdHlsZX0+e3N0b3J5LmNvbW1lbnRzX2NvdW50IHx8IDB9IGNvbW1lbnRzPC9hPjwvYj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW46IDB9fT48c3BhbiBjc3M9e3N0b3J5SW5mb30+UG9zdGVkIG9uIHtgJHtnZXREYXRlKHN0b3J5LnRpbWUpfSwgYH08Yj57YCR7c3RvcnkudGltZV9hZ299YH08L2I+PC9zcGFuPjwvcD4gIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4pXG5cbiBleHBvcnQgZGVmYXVsdCBTdG9yaWVzTGlzdCJdfQ== */"
};

var StoriesList = function StoriesList(_ref) {
  var stories = _ref.stories;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, stories.map(function (story) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
      key: story.id,
      className: "story",
      css: listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h2", {
      className: "story-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/story?id=".concat(story.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, story.title))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "story-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
      css: storyInfo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, story.points ? story.points : 0), " points"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/story?id=".concat(story.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
      css: storyInfo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
      css: linkStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, story.comments_count || 0, " comments")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
      style: {
        margin: 0
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
      css: storyInfo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Posted on ", "".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getDate"])(story.time), ", "), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "".concat(story.time_ago))))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (StoriesList);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/error */ "next/error");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Stories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Stories */ "./components/Stories.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_BasicComponents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/BasicComponents */ "./components/BasicComponents.js");

var _jsxFileName = "/Users/benbkk/Sites/hacker-next/pages/index.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          stories = _this$props.stories,
          page = _this$props.page;

      if (stories.length === 0) {
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_error__WEBPACK_IMPORTED_MODULE_4___default.a, {
          statusCode: 503,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        });
      }

      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "HackerNext | The HackerNews on Next")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "HackerNews",
        backButton: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_Stories__WEBPACK_IMPORTED_MODULE_7__["default"], {
        stories: stories,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_BasicComponents__WEBPACK_IMPORTED_MODULE_9__["Footer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/?page=".concat(page + 1),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Next Page")))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, res, query, stories, page, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, res = _ref.res, query = _ref.query;
                _context.prev = 1;
                page = Number(query.page) || 1;
                _context.next = 5;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://node-hnapi.herokuapp.com/news?page=".concat(page));

              case 5:
                response = _context.sent;
                _context.next = 8;
                return response.json();

              case 8:
                stories = _context.sent;
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);
                stories = [];

              case 15:
                console.log('CURRENT PAGE IS ', page, 'STORIES: ', stories);
                return _context.abrupt("return", {
                  stories: stories,
                  page: page
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: slugify, getDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slugify", function() { return slugify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDate", function() { return getDate; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

var slugify = function slugify(myText) {
  return myText.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
  .replace(/[^\w\-]+/g, '') // Remove all non-word chars
  .replace(/\-\-+/g, '-') // Replace multiple - with single -
  .replace(/^-+/, '') // Trim - from start of text
  .replace(/-+$/, '') // Trim - from end of text
  ;
};
var getDate = function getDate(timeStamp) {
  var postDate;

  if (timeStamp) {
    postDate = new Date(timeStamp);
    postDate = moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(timeStamp).format('dddd, LL');
    return postDate;
  }
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "@emotion/styled-base":
/*!***************************************!*\
  !*** external "@emotion/styled-base" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled-base");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/error":
/*!*****************************!*\
  !*** external "next/error" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/error");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "polished":
/*!***************************!*\
  !*** external "polished" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map