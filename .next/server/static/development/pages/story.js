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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser */ "html-react-parser");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_Highlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/Highlight */ "./css/Highlight.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs */ "prismjs");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CommentsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommentsList */ "./components/CommentsList.js");
var _jsxFileName = "/Users/benbkk/Sites/hacker-next/components/Comment.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var listStyle =
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("word-break:break-word;&.level-0{padding-bottom:36px;margin-top:36px;border-bottom:8px solid ", Object(polished__WEBPACK_IMPORTED_MODULE_4__["transparentize"])(0.9, 'black'), ";}label:listStyle;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ia2svU2l0ZXMvaGFja2VyLW5leHQvY29tcG9uZW50cy9Db21tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVxQiIsImZpbGUiOiIvVXNlcnMvYmVuYmtrL1NpdGVzL2hhY2tlci1uZXh0L2NvbXBvbmVudHMvQ29tbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBwYXJzZUNvbnRlbnQgZnJvbSAnaHRtbC1yZWFjdC1wYXJzZXInXG5pbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tICdjc3MvSGlnaGxpZ2h0J1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgbGlnaHRlbiwgcmVtLCB0cmFuc3BhcmVudGl6ZSB9IGZyb20gJ3BvbGlzaGVkJ1xuXG5pbXBvcnQgcGFyc2VUaGlzIGZyb20gJ2h0bWwtcmVhY3QtcGFyc2VyJ1xuaW1wb3J0IFByaXNtIGZyb20gJ3ByaXNtanMnXG5pbXBvcnQgQ29tbWVudHNMaXN0IGZyb20gJ2NvbXBvbmVudHMvQ29tbWVudHNMaXN0J1xuXG5jb25zdCBsaXN0U3R5bGUgPSBjc3NgXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAgICYubGV2ZWwtMCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzNnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgJHt0cmFuc3BhcmVudGl6ZSgwLjksICdibGFjaycpfTtcbiAgICB9XG4gICAgXG5gXG5jb25zdCB1c2VyU3R5bGUgPSBjc3NgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBmb250LXNpemU6ICR7cmVtKCcxNHB4Jyl9O1xuICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xuICAgIH1cbmBcblxuY29uc3QgY29tbWVudFN0eWxlcyA9IGNzc2BcbiAgICBwYWRkaW5nOiAycHggMThweDtcbiAgICBmb250LXNpemU6ICR7cmVtKCcxNnB4Jyl9O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogOXB4O1xuXG4gICAgJi5sZXZlbC0wIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHtsaWdodGVuKDAuNDAsICcjMzM5OWNjJyl9O1xuICAgIH1cblxuICAgICYubGV2ZWwtMSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7bGlnaHRlbigwLjQxLCAnIzMzOTljYycpfTtcbiAgICB9XG5cbiAgICAmLmxldmVsLTIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke2xpZ2h0ZW4oMC40MiwgJyMzMzk5Y2MnKX07XG4gICAgfVxuXG4gICAgJi5sZXZlbC0zIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHtsaWdodGVuKDAuNDMsICcjMzM5OWNjJyl9O1xuICAgIH1cblxuICAgICYubGV2ZWwtNCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7bGlnaHRlbigwLjQ0LCAnIzMzOTljYycpfTtcbiAgICB9XG5cbiAgICAmLmxldmVsLTUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke2xpZ2h0ZW4oMC40NSwgJyMzMzk5Y2MnKX07XG4gICAgfVxuXG4gICAgICYubGV2ZWwtNiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7bGlnaHRlbigwLjQ2LCAnIzMzOTljYycpfTtcbiAgICB9XG4gICAgICYubGV2ZWwtNyB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7bGlnaHRlbigwLjQ3LCAnIzMzOTljYycpfTtcbiAgICB9XG4gICAgJi5sZXZlbC04IHtcbiAgICAgICAgYmFja2dyb3VuZDogJHtsaWdodGVuKDAuNDgsICcjMzM5OWNjJyl9O1xuICAgIH1cbmBcblxuY2xhc3MgQ29tbWVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHsgY29tbWVudCB9ID0gdGhpcy5wcm9wc1xuICAgICAgICBjb25zdCBjb250ZW50ID0gY29tbWVudC5jb250ZW50XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb250ZW50XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgIGlmIChwcmV2U3RhdGUuY29udGVudCAhPT0gdGhpcy5zdGF0ZS5jb250ZW50KSB7XG4gICAgICAgICAgICBQcmlzbS5oaWdobGlnaHRBbGwoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgY29uc3QgeyBjb250ZW50IH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIGNvbnN0IHsgY29tbWVudCB9ID0gdGhpcy5wcm9wc1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YGNvbW1lbnQgbGV2ZWwtJHtjb21tZW50LmxldmVsfWB9IGNzcz17bGlzdFN0eWxlfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbW1lbnQtY29udGVudCBsZXZlbC0ke2NvbW1lbnQubGV2ZWx9YH0gY3NzPXtjb21tZW50U3R5bGVzfT5cbiAgICAgICAgICAgICAgICAgICAge3BhcnNlVGhpcyhjb250ZW50KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NvbW1lbnQtdXNlcicgY3NzPXt1c2VyU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICA8Yj57Y29tbWVudC51c2VyfTwvYj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb21tZW50ZWQtb24nIGNzcz17dXNlclN0eWxlfT57Y29tbWVudC50aW1lX2Fnb308L3NwYW4+XG4gICAgICAgICAgICAgICAge2NvbW1lbnQuY29tbWVudHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudHNMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50cz17Y29tbWVudC5jb21tZW50c31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2xpPiAgICBcbiAgICAgICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQiXX0= */"), "label:listStyle;");
var userStyle =
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("display:inline-block;margin-top:6px;margin-bottom:18px;margin-right:10px;font-size:", Object(polished__WEBPACK_IMPORTED_MODULE_4__["rem"])('14px'), ";span{display:inherit;}label:userStyle;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ia2svU2l0ZXMvaGFja2VyLW5leHQvY29tcG9uZW50cy9Db21tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CcUIiLCJmaWxlIjoiL1VzZXJzL2JlbmJray9TaXRlcy9oYWNrZXItbmV4dC9jb21wb25lbnRzL0NvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcGFyc2VDb250ZW50IGZyb20gJ2h0bWwtcmVhY3QtcGFyc2VyJ1xuaW1wb3J0IHsgSGlnaGxpZ2h0IH0gZnJvbSAnY3NzL0hpZ2hsaWdodCdcbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IGxpZ2h0ZW4sIHJlbSwgdHJhbnNwYXJlbnRpemUgfSBmcm9tICdwb2xpc2hlZCdcblxuaW1wb3J0IHBhcnNlVGhpcyBmcm9tICdodG1sLXJlYWN0LXBhcnNlcidcbmltcG9ydCBQcmlzbSBmcm9tICdwcmlzbWpzJ1xuaW1wb3J0IENvbW1lbnRzTGlzdCBmcm9tICdjb21wb25lbnRzL0NvbW1lbnRzTGlzdCdcblxuY29uc3QgbGlzdFN0eWxlID0gY3NzYFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgICAmLmxldmVsLTAge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzZweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICR7dHJhbnNwYXJlbnRpemUoMC45LCAnYmxhY2snKX07XG4gICAgfVxuICAgIFxuYFxuY29uc3QgdXNlclN0eWxlID0gY3NzYFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAke3JlbSgnMTRweCcpfTtcbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICB9XG5gXG5cbmNvbnN0IGNvbW1lbnRTdHlsZXMgPSBjc3NgXG4gICAgcGFkZGluZzogMnB4IDE4cHg7XG4gICAgZm9udC1zaXplOiAke3JlbSgnMTZweCcpfTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi10b3A6IDlweDtcblxuICAgICYubGV2ZWwtMCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7bGlnaHRlbigwLjQwLCAnIzMzOTljYycpfTtcbiAgICB9XG5cbiAgICAmLmxldmVsLTEge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke2xpZ2h0ZW4oMC40MSwgJyMzMzk5Y2MnKX07XG4gICAgfVxuXG4gICAgJi5sZXZlbC0yIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHtsaWdodGVuKDAuNDIsICcjMzM5OWNjJyl9O1xuICAgIH1cblxuICAgICYubGV2ZWwtMyB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7bGlnaHRlbigwLjQzLCAnIzMzOTljYycpfTtcbiAgICB9XG5cbiAgICAmLmxldmVsLTQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke2xpZ2h0ZW4oMC40NCwgJyMzMzk5Y2MnKX07XG4gICAgfVxuXG4gICAgJi5sZXZlbC01IHtcbiAgICAgICAgYmFja2dyb3VuZDogJHtsaWdodGVuKDAuNDUsICcjMzM5OWNjJyl9O1xuICAgIH1cblxuICAgICAmLmxldmVsLTYge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke2xpZ2h0ZW4oMC40NiwgJyMzMzk5Y2MnKX07XG4gICAgfVxuICAgICAmLmxldmVsLTcge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke2xpZ2h0ZW4oMC40NywgJyMzMzk5Y2MnKX07XG4gICAgfVxuICAgICYubGV2ZWwtOCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7bGlnaHRlbigwLjQ4LCAnIzMzOTljYycpfTtcbiAgICB9XG5gXG5cbmNsYXNzIENvbW1lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBjb250ZW50OiAnJ1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCB7IGNvbW1lbnQgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgY29uc3QgY29udGVudCA9IGNvbW1lbnQuY29udGVudFxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29udGVudFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgICBpZiAocHJldlN0YXRlLmNvbnRlbnQgIT09IHRoaXMuc3RhdGUuY29udGVudCkge1xuICAgICAgICAgICAgUHJpc20uaGlnaGxpZ2h0QWxsKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGNvbnN0IHsgY29udGVudCB9ID0gdGhpcy5zdGF0ZVxuICAgICAgICBjb25zdCB7IGNvbW1lbnQgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2Bjb21tZW50IGxldmVsLSR7Y29tbWVudC5sZXZlbH1gfSBjc3M9e2xpc3RTdHlsZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb21tZW50LWNvbnRlbnQgbGV2ZWwtJHtjb21tZW50LmxldmVsfWB9IGNzcz17Y29tbWVudFN0eWxlc30+XG4gICAgICAgICAgICAgICAgICAgIHtwYXJzZVRoaXMoY29udGVudCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb21tZW50LXVzZXInIGNzcz17dXNlclN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGI+e2NvbW1lbnQudXNlcn08L2I+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY29tbWVudGVkLW9uJyBjc3M9e3VzZXJTdHlsZX0+e2NvbW1lbnQudGltZV9hZ299PC9zcGFuPlxuICAgICAgICAgICAgICAgIHtjb21tZW50LmNvbW1lbnRzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRzTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudHM9e2NvbW1lbnQuY29tbWVudHN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9saT4gICAgXG4gICAgICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Il19 */"), "label:userStyle;");
var commentStyles =
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("padding:2px 18px;font-size:", Object(polished__WEBPACK_IMPORTED_MODULE_4__["rem"])('16px'), ";margin-bottom:0;margin-top:9px;&.level-0{background:", Object(polished__WEBPACK_IMPORTED_MODULE_4__["lighten"])(0.40, '#3399cc'), ";}&.level-1{background:", Object(polished__WEBPACK_IMPORTED_MODULE_4__["lighten"])(0.41, '#3399cc'), ";}&.level-2{background:", Object(polished__WEBPACK_IMPORTED_MODULE_4__["lighten"])(0.42, '#3399cc'), ";}&.level-3{background:", Object(polished__WEBPACK_IMPORTED_MODULE_4__["lighten"])(0.43, '#3399cc'), ";}&.level-4{background:", Object(polished__WEBPACK_IMPORTED_MODULE_4__["lighten"])(0.44, '#3399cc'), ";}&.level-5{background:", Object(polished__WEBPACK_IMPORTED_MODULE_4__["lighten"])(0.45, '#3399cc'), ";}&.level-6{background:", Object(polished__WEBPACK_IMPORTED_MODULE_4__["lighten"])(0.46, '#3399cc'), ";}&.level-7{background:", Object(polished__WEBPACK_IMPORTED_MODULE_4__["lighten"])(0.47, '#3399cc'), ";}&.level-8{background:", Object(polished__WEBPACK_IMPORTED_MODULE_4__["lighten"])(0.48, '#3399cc'), ";}label:commentStyles;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ia2svU2l0ZXMvaGFja2VyLW5leHQvY29tcG9uZW50cy9Db21tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCeUIiLCJmaWxlIjoiL1VzZXJzL2JlbmJray9TaXRlcy9oYWNrZXItbmV4dC9jb21wb25lbnRzL0NvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcGFyc2VDb250ZW50IGZyb20gJ2h0bWwtcmVhY3QtcGFyc2VyJ1xuaW1wb3J0IHsgSGlnaGxpZ2h0IH0gZnJvbSAnY3NzL0hpZ2hsaWdodCdcbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IGxpZ2h0ZW4sIHJlbSwgdHJhbnNwYXJlbnRpemUgfSBmcm9tICdwb2xpc2hlZCdcblxuaW1wb3J0IHBhcnNlVGhpcyBmcm9tICdodG1sLXJlYWN0LXBhcnNlcidcbmltcG9ydCBQcmlzbSBmcm9tICdwcmlzbWpzJ1xuaW1wb3J0IENvbW1lbnRzTGlzdCBmcm9tICdjb21wb25lbnRzL0NvbW1lbnRzTGlzdCdcblxuY29uc3QgbGlzdFN0eWxlID0gY3NzYFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgICAmLmxldmVsLTAge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzZweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICR7dHJhbnNwYXJlbnRpemUoMC45LCAnYmxhY2snKX07XG4gICAgfVxuICAgIFxuYFxuY29uc3QgdXNlclN0eWxlID0gY3NzYFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAke3JlbSgnMTRweCcpfTtcbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICB9XG5gXG5cbmNvbnN0IGNvbW1lbnRTdHlsZXMgPSBjc3NgXG4gICAgcGFkZGluZzogMnB4IDE4cHg7XG4gICAgZm9udC1zaXplOiAke3JlbSgnMTZweCcpfTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi10b3A6IDlweDtcblxuICAgICYubGV2ZWwtMCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7bGlnaHRlbigwLjQwLCAnIzMzOTljYycpfTtcbiAgICB9XG5cbiAgICAmLmxldmVsLTEge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke2xpZ2h0ZW4oMC40MSwgJyMzMzk5Y2MnKX07XG4gICAgfVxuXG4gICAgJi5sZXZlbC0yIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHtsaWdodGVuKDAuNDIsICcjMzM5OWNjJyl9O1xuICAgIH1cblxuICAgICYubGV2ZWwtMyB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7bGlnaHRlbigwLjQzLCAnIzMzOTljYycpfTtcbiAgICB9XG5cbiAgICAmLmxldmVsLTQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke2xpZ2h0ZW4oMC40NCwgJyMzMzk5Y2MnKX07XG4gICAgfVxuXG4gICAgJi5sZXZlbC01IHtcbiAgICAgICAgYmFja2dyb3VuZDogJHtsaWdodGVuKDAuNDUsICcjMzM5OWNjJyl9O1xuICAgIH1cblxuICAgICAmLmxldmVsLTYge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke2xpZ2h0ZW4oMC40NiwgJyMzMzk5Y2MnKX07XG4gICAgfVxuICAgICAmLmxldmVsLTcge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke2xpZ2h0ZW4oMC40NywgJyMzMzk5Y2MnKX07XG4gICAgfVxuICAgICYubGV2ZWwtOCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7bGlnaHRlbigwLjQ4LCAnIzMzOTljYycpfTtcbiAgICB9XG5gXG5cbmNsYXNzIENvbW1lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBjb250ZW50OiAnJ1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCB7IGNvbW1lbnQgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgY29uc3QgY29udGVudCA9IGNvbW1lbnQuY29udGVudFxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29udGVudFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgICBpZiAocHJldlN0YXRlLmNvbnRlbnQgIT09IHRoaXMuc3RhdGUuY29udGVudCkge1xuICAgICAgICAgICAgUHJpc20uaGlnaGxpZ2h0QWxsKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGNvbnN0IHsgY29udGVudCB9ID0gdGhpcy5zdGF0ZVxuICAgICAgICBjb25zdCB7IGNvbW1lbnQgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2Bjb21tZW50IGxldmVsLSR7Y29tbWVudC5sZXZlbH1gfSBjc3M9e2xpc3RTdHlsZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb21tZW50LWNvbnRlbnQgbGV2ZWwtJHtjb21tZW50LmxldmVsfWB9IGNzcz17Y29tbWVudFN0eWxlc30+XG4gICAgICAgICAgICAgICAgICAgIHtwYXJzZVRoaXMoY29udGVudCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb21tZW50LXVzZXInIGNzcz17dXNlclN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGI+e2NvbW1lbnQudXNlcn08L2I+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY29tbWVudGVkLW9uJyBjc3M9e3VzZXJTdHlsZX0+e2NvbW1lbnQudGltZV9hZ299PC9zcGFuPlxuICAgICAgICAgICAgICAgIHtjb21tZW50LmNvbW1lbnRzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRzTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudHM9e2NvbW1lbnQuY29tbWVudHN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9saT4gICAgXG4gICAgICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Il19 */"), "label:commentStyles;");

var Comment =
/*#__PURE__*/
function (_Component) {
  _inherits(Comment, _Component);

  function Comment() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Comment);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Comment)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      content: ''
    });

    return _this;
  }

  _createClass(Comment, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var comment = this.props.comment;
      var content = comment.content;
      this.setState({
        content: content
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.content !== this.state.content) {
        prismjs__WEBPACK_IMPORTED_MODULE_5___default.a.highlightAll();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var content = this.state.content;
      var comment = this.props.comment;
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
        className: "comment level-".concat(comment.level),
        css: listStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "comment-content level-".concat(comment.level),
        css: commentStyles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(content)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        className: "comment-user",
        css: userStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, comment.user)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        className: "commented-on",
        css: userStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, comment.time_ago), comment.comments.length > 0 && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_CommentsList__WEBPACK_IMPORTED_MODULE_6__["default"], {
        comments: comment.comments,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }));
    }
  }]);

  return Comment;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ }),

/***/ "./components/CommentsList.js":
/*!************************************!*\
  !*** ./components/CommentsList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comment */ "./components/Comment.js");
var _jsxFileName = "/Users/benbkk/Sites/hacker-next/components/CommentsList.js";




var CommentsList = function CommentsList(_ref) {
  var comments = _ref.comments;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, comments.map(function (comment) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Comment__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: comment.id,
      comment: comment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CommentsList);

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

/***/ "./css/Highlight.js":
/*!**************************!*\
  !*** ./css/Highlight.js ***!
  \**************************/
/*! exports provided: Highlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Highlight", function() { return Highlight; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);

var Highlight =
/*#__PURE__*/
 false ? undefined : {
  name: "p27w6m-Highlight",
  styles: "label:Highlight;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ia2svU2l0ZXMvaGFja2VyLW5leHQvY3NzL0hpZ2hsaWdodC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFNEIiLCJmaWxlIjoiL1VzZXJzL2JlbmJray9TaXRlcy9oYWNrZXItbmV4dC9jc3MvSGlnaGxpZ2h0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcblxuZXhwb3J0IGNvbnN0IEhpZ2hsaWdodCA9IGNzc2BcbiAgICBjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSxcbiAgICBwcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHtcbiAgICAgICAgY29sb3I6ICNmOGY4ZjI7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIHRleHQtc2hhZG93OiAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgTW9uYWNvLCAnQW5kYWxlIE1vbm8nLCAnVWJ1bnR1IE1vbm8nLCBtb25vc3BhY2U7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgICAgIHdvcmQtc3BhY2luZzogbm9ybWFsO1xuICAgICAgICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gICAgICAgIHdvcmQtd3JhcDogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuXG4gICAgICAgIC1tb3otdGFiLXNpemU6IDQ7XG4gICAgICAgIC1vLXRhYi1zaXplOiA0O1xuICAgICAgICB0YWItc2l6ZTogNDtcblxuICAgICAgICAtd2Via2l0LWh5cGhlbnM6IG5vbmU7XG4gICAgICAgIC1tb3otaHlwaGVuczogbm9uZTtcbiAgICAgICAgLW1zLWh5cGhlbnM6IG5vbmU7XG4gICAgICAgIGh5cGhlbnM6IG5vbmU7XG4gICAgfVxuXG4gICAgLyogQ29kZSBibG9ja3MgKi9cbiAgICBwcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHtcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICBtYXJnaW46IC41ZW0gMDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xuICAgIH1cblxuICAgIDpub3QocHJlKSA+IGNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLFxuICAgIHByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMjcyODIyO1xuICAgIH1cblxuICAgIC8qIElubGluZSBjb2RlICovXG4gICAgOm5vdChwcmUpID4gY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xuICAgICAgICBwYWRkaW5nOiAuMWVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIH1cblxuICAgIC50b2tlbi5jb21tZW50LFxuICAgIC50b2tlbi5wcm9sb2csXG4gICAgLnRva2VuLmRvY3R5cGUsXG4gICAgLnRva2VuLmNkYXRhIHtcbiAgICAgICAgY29sb3I6IHNsYXRlZ3JheTtcbiAgICB9XG5cbiAgICAudG9rZW4ucHVuY3R1YXRpb24ge1xuICAgICAgICBjb2xvcjogI2Y4ZjhmMjtcbiAgICB9XG5cbiAgICAubmFtZXNwYWNlIHtcbiAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgfVxuXG4gICAgLnRva2VuLnByb3BlcnR5LFxuICAgIC50b2tlbi50YWcsXG4gICAgLnRva2VuLmNvbnN0YW50LFxuICAgIC50b2tlbi5zeW1ib2wsXG4gICAgLnRva2VuLmRlbGV0ZWQge1xuICAgICAgICBjb2xvcjogI2Y5MjY3MjtcbiAgICB9XG5cbiAgICAudG9rZW4uYm9vbGVhbixcbiAgICAudG9rZW4ubnVtYmVyIHtcbiAgICAgICAgY29sb3I6ICNhZTgxZmY7XG4gICAgfVxuXG4gICAgLnRva2VuLnNlbGVjdG9yLFxuICAgIC50b2tlbi5hdHRyLW5hbWUsXG4gICAgLnRva2VuLnN0cmluZyxcbiAgICAudG9rZW4uY2hhcixcbiAgICAudG9rZW4uYnVpbHRpbixcbiAgICAudG9rZW4uaW5zZXJ0ZWQge1xuICAgICAgICBjb2xvcjogI2E2ZTIyZTtcbiAgICB9XG5cbiAgICAudG9rZW4ub3BlcmF0b3IsXG4gICAgLnRva2VuLmVudGl0eSxcbiAgICAudG9rZW4udXJsLFxuICAgIC5sYW5ndWFnZS1jc3MgLnRva2VuLnN0cmluZyxcbiAgICAuc3R5bGUgLnRva2VuLnN0cmluZyxcbiAgICAudG9rZW4udmFyaWFibGUge1xuICAgICAgICBjb2xvcjogI2Y4ZjhmMjtcbiAgICB9XG5cbiAgICAudG9rZW4uYXRydWxlLFxuICAgIC50b2tlbi5hdHRyLXZhbHVlLFxuICAgIC50b2tlbi5mdW5jdGlvbixcbiAgICAudG9rZW4uY2xhc3MtbmFtZSB7XG4gICAgICAgIGNvbG9yOiAjZTZkYjc0O1xuICAgIH1cblxuICAgIC50b2tlbi5rZXl3b3JkIHtcbiAgICAgICAgY29sb3I6ICM2NmQ5ZWY7XG4gICAgfVxuXG4gICAgLnRva2VuLnJlZ2V4LFxuICAgIC50b2tlbi5pbXBvcnRhbnQge1xuICAgICAgICBjb2xvcjogI2ZkOTcxZjtcbiAgICB9XG5cbiAgICAudG9rZW4uaW1wb3J0YW50LFxuICAgIC50b2tlbi5ib2xkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC50b2tlbi5pdGFsaWMge1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgfVxuXG4gICAgLnRva2VuLmVudGl0eSB7XG4gICAgICAgIGN1cnNvcjogaGVscDtcbiAgICB9XG5cbiAgICBwcmVbZGF0YS1saW5lXSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogMWVtIDAgMWVtIDNlbTtcbiAgICB9XG5cbiAgICAubGluZS1oaWdobGlnaHQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBwYWRkaW5nOiBpbmhlcml0IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTsgLyogU2FtZSBhcyAucHJpc23igJlzIHBhZGRpbmctdG9wICovXG5cbiAgICAgICAgYmFja2dyb3VuZDogaHNsYSgyNCwgMjAlLCA1MCUsLjA4KTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBoc2xhKDI0LCAyMCUsIDUwJSwuMSkgNzAlLCBoc2xhKDI0LCAyMCUsIDUwJSwwKSk7XG5cbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgfVxuXG4gICAgICAgIC5saW5lLWhpZ2hsaWdodDpiZWZvcmUsXG4gICAgICAgIC5saW5lLWhpZ2hsaWdodFtkYXRhLWVuZF06YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogYXR0cihkYXRhLXN0YXJ0KTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogLjRlbTtcbiAgICAgICAgICAgIGxlZnQ6IC42ZW07XG4gICAgICAgICAgICBtaW4td2lkdGg6IDFlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgLjVlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjQsIDIwJSwgNTAlLC40KTtcbiAgICAgICAgICAgIGNvbG9yOiBoc2woMjQsIDIwJSwgOTUlKTtcbiAgICAgICAgICAgIGZvbnQ6IGJvbGQgNjUlLzEuNSBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IC4zZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAubGluZS1oaWdobGlnaHRbZGF0YS1lbmRdOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1lbmQpO1xuICAgICAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICAgICAgYm90dG9tOiAuNGVtO1xuICAgICAgICB9XG5cbiAgICAubGluZS1udW1iZXJzIC5saW5lLWhpZ2hsaWdodDpiZWZvcmUsXG4gICAgLmxpbmUtbnVtYmVycyAubGluZS1oaWdobGlnaHQ6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBub25lO1xuICAgIH1cblxuICAgIGRpdi5jb2RlLXRvb2xiYXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC4zZW07XG4gICAgICAgIHJpZ2h0OiAuMmVtO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgZGl2LmNvZGUtdG9vbGJhcjpob3ZlciA+IC50b29sYmFyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICBkaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgLnRvb2xiYXItaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbiAgICBkaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgYSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICBkaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIGZvciBidXR0b24gKi9cbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIH1cblxuICAgIGRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciBhLFxuICAgIGRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciBidXR0b24sXG4gICAgZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyIHNwYW4ge1xuICAgICAgICBjb2xvcjogI2JiYjtcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgICAgICBwYWRkaW5nOiAwIC41ZW07XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNWYyZjA7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjI0LCAyMjQsIDIyNCwgMC4yKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggMCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjVlbTtcbiAgICB9XG5cbiAgICBkaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgYTpob3ZlcixcbiAgICBkaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgYTpmb2N1cyxcbiAgICBkaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgYnV0dG9uOmhvdmVyLFxuICAgIGRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciBidXR0b246Zm9jdXMsXG4gICAgZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyIHNwYW46aG92ZXIsXG4gICAgZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyIHNwYW46Zm9jdXMge1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cblxuICAgIC50b2tlbi50YWI6bm90KDplbXB0eSksXG4gICAgLnRva2VuLmNyLFxuICAgIC50b2tlbi5sZixcbiAgICAudG9rZW4uc3BhY2Uge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLnRva2VuLnRhYjpub3QoOmVtcHR5KTpiZWZvcmUsXG4gICAgLnRva2VuLmNyOmJlZm9yZSxcbiAgICAudG9rZW4ubGY6YmVmb3JlLFxuICAgIC50b2tlbi5zcGFjZTpiZWZvcmUge1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuXG4gICAgLnRva2VuLnRhYjpub3QoOmVtcHR5KTpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnXFwyMUU1JztcbiAgICB9XG5cbiAgICAudG9rZW4uY3I6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJ1xcMjQwRCc7XG4gICAgfVxuXG4gICAgLnRva2VuLmNybGY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJ1xcMjQwRFxcMjQwQSc7XG4gICAgfVxuICAgIC50b2tlbi5sZjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnXFwyNDBBJztcbiAgICB9XG5cbiAgICAudG9rZW4uc3BhY2U6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJ1xcMDBCNyc7XG4gICAgfVxuYCJdfQ== */"
};

/***/ }),

/***/ "./pages/story.js":
/*!************************!*\
  !*** ./pages/story.js ***!
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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_CommentsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CommentsList */ "./components/CommentsList.js");
/* harmony import */ var _components_BasicComponents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BasicComponents */ "./components/BasicComponents.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils */ "./utils/index.js");

var _jsxFileName = "/Users/benbkk/Sites/hacker-next/pages/story.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var storyInfo =
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])("display:inline-block;font-size:", Object(polished__WEBPACK_IMPORTED_MODULE_9__["rem"])('16px'), ";margin-right:", Object(polished__WEBPACK_IMPORTED_MODULE_9__["rem"])('9px'), ";label:storyInfo;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ia2svU2l0ZXMvaGFja2VyLW5leHQvcGFnZXMvc3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3FCIiwiZmlsZSI6Ii9Vc2Vycy9iZW5ia2svU2l0ZXMvaGFja2VyLW5leHQvcGFnZXMvc3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IEVycm9yIGZyb20gJ25leHQvZXJyb3InXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IENvbW1lbnRzTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1lbnRzTGlzdCdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ2NvbXBvbmVudHMvQmFzaWNDb21wb25lbnRzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgcmVtIH0gZnJvbSAncG9saXNoZWQnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IGdldERhdGUgfSBmcm9tICd1dGlscydcblxuY29uc3Qgc3RvcnlJbmZvID0gY3NzYFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6ICR7cmVtKCcxNnB4Jyl9O1xuICAgIG1hcmdpbi1yaWdodDogJHtyZW0oJzlweCcpfTtcbmBcblxuY2xhc3MgU3RvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHtyZXEsIHJlcywgcXVlcnl9KSB7XG4gICAgICAgIGxldCBzdG9yeVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgc3RvcnlJZCA9IHF1ZXJ5LmlkXG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vbm9kZS1obmFwaS5oZXJva3VhcHAuY29tL2l0ZW0vJHtzdG9yeUlkfWApXG4gICAgICAgICAgICBzdG9yeSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIHN0b3J5ID0gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgc3RvcnkgfVxuICAgIH1cblxuICAgIHN0YXRlID0ge1xuICAgICAgICBjb21tZW50czogW11cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgeyBzdG9yeSB9ID0gdGhpcy5wcm9wc1xuICAgICAgICBjb25zdCBjb21tZW50cyA9IHN0b3J5LmNvbW1lbnRzXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29tbWVudHNcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGNvbnN0IHsgY29tbWVudHMgfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgY29uc3QgeyBzdG9yeSB9ID0gdGhpcy5wcm9wcyBcblxuICAgICAgICBpZiAoIXN0b3J5KSB7XG4gICAgICAgICAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9ezUwM30gLz5cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhzdG9yeSlcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT57c3RvcnkudGl0bGV9IHwgSGFja2VyTmV4dDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIDxMYXlvdXQgYmFja0J1dHRvbj17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3N0b3J5LXRpdGxlJyBzdHlsZT17e21heFdpZHRoOiAnODAlJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17c3RvcnkudXJsfSB0YXJnZXQ9J19ibGFuayc+e3N0b3J5LnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0b3J5LWRldGFpbHMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY3NzPXtzdG9yeUluZm99PjxiPntzdG9yeS5wb2ludHMgfHwgMH08L2I+IHBvaW50czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNzcz17c3RvcnlJbmZvfT48Yj57c3RvcnkuY29tbWVudHNfY291bnR9PC9iPiBjb21tZW50czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7bWFyZ2luOiAnNXB4IDAnfX0+PHNwYW4gY3NzPXtzdG9yeUluZm99PlBvc3RlZCBvbiB7YCR7Z2V0RGF0ZShzdG9yeS50aW1lKX0sIGB9PGI+e2Ake3N0b3J5LnRpbWVfYWdvfWB9PC9iPjwvc3Bhbj48L3A+IFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RvcnkuY29tbWVudHNfY291bnQgPD0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8cD5ObyBjb21tZW50cyB5ZXQuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBjb21tZW50cy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxwPkxvYWRpbmcgQ29tbWVudHMuLi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8Q29tbWVudHNMaXN0IGNvbW1lbnRzPXtjb21tZW50c30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yeSJdfQ== */"), "label:storyInfo;");

var Story =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Story, _React$Component);

  function Story() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Story);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Story)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      comments: []
    });

    return _this;
  }

  _createClass(Story, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var story = this.props.story;
      var comments = story.comments;
      this.setState({
        comments: comments
      });
    }
  }, {
    key: "render",
    value: function render() {
      var comments = this.state.comments;
      var story = this.props.story;

      if (!story) {
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_error__WEBPACK_IMPORTED_MODULE_4___default.a, {
          statusCode: 503,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        });
      }

      console.log(story);
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, story.title, " | HackerNext")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
        backButton: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h1", {
        className: "story-title",
        style: {
          maxWidth: '80%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
        href: story.url,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, story.title)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
        className: "story-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
        css: storyInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, story.points || 0), " points"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
        css: storyInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, story.comments_count), " comments"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
        style: {
          margin: '5px 0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
        css: storyInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Posted on ", "".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_11__["getDate"])(story.time), ", "), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "".concat(story.time_ago))))), story.comments_count <= 0 ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "No comments yet.") : comments.length === 0 ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Loading Comments...") : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_CommentsList__WEBPACK_IMPORTED_MODULE_6__["default"], {
        comments: comments,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, res, query, story, storyId, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, res = _ref.res, query = _ref.query;
                _context.prev = 1;
                storyId = query.id;
                _context.next = 5;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://node-hnapi.herokuapp.com/item/".concat(storyId));

              case 5:
                response = _context.sent;
                _context.next = 8;
                return response.json();

              case 8:
                story = _context.sent;
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);
                story = null;

              case 15:
                return _context.abrupt("return", {
                  story: story
                });

              case 16:
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

  return Story;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Story);

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

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/story.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/story.js */"./pages/story.js");


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

/***/ "html-react-parser":
/*!************************************!*\
  !*** external "html-react-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

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

/***/ "prismjs":
/*!**************************!*\
  !*** external "prismjs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs");

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
//# sourceMappingURL=story.js.map