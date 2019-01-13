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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/Styles.js":
/*!***********************!*\
  !*** ./css/Styles.js ***!
  \***********************/
/*! exports provided: Styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Styles", function() { return Styles; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_1__);


var Styles =
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("*{box-sizing:border-box;&:focus{outline:none;}}html{", Object(polished__WEBPACK_IMPORTED_MODULE_1__["size"])('100%'), ";font-size:1rem;}body{", Object(polished__WEBPACK_IMPORTED_MODULE_1__["size"])('inherit'), ";", Object(polished__WEBPACK_IMPORTED_MODULE_1__["position"])('fixed', 0), ";color:", Object(polished__WEBPACK_IMPORTED_MODULE_1__["lighten"])(0.3, 'black'), ";margin:0;padding:0;font-family:'Quicksand',sans-serif;font-size:inherit;overflow:hidden;}h1,h2,h3,h4,h5{margin-top:1.5em;margin-bottom:0.25em;font-weight:700;line-height:1.333;font-family:'Merriweather',sans-serif;}h4,h5{margin-bottom:0;}h1.story-title{font-size:", Object(polished__WEBPACK_IMPORTED_MODULE_1__["rem"])('40px'), ";}a{text-decoration:none;color:", Object(polished__WEBPACK_IMPORTED_MODULE_1__["lighten"])(0.2, 'black'), ";font-weight:500;}ul{margin:0;padding:0;list-style:none;}ul li ul{margin-left:3%;padding-left:3%;@media (max-width:480px){margin-left:0;padding-left:0;}}#__next{height:inherit;overflow-y:auto;}nav{padding:18px 0;background-color:#ff7301;height:60px;}main{height:calc(100vh - 60px);overflow:hidden;}.main-title{display:inline-block;vertical-align:middle;}button + a > .main-title{margin-left:9px;}article{padding:1px;}code,pre{color:#f8f8f2;background:none;text-shadow:0 1px rgba(0,0,0,0.3);font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;font-size:", Object(polished__WEBPACK_IMPORTED_MODULE_1__["rem"])('14px'), ";text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;padding:1em;margin:1em 0;overflow:auto;border-radius:0.3em;}pre{background:#272822;}label:Styles;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ia2svU2l0ZXMvaGFja2VyLW5leHQvY3NzL1N0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHeUIiLCJmaWxlIjoiL1VzZXJzL2JlbmJray9TaXRlcy9oYWNrZXItbmV4dC9jc3MvU3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IHNpemUsIHBvc2l0aW9uLCBsaWdodGVuLCByZW0gfSBmcm9tICdwb2xpc2hlZCdcblxuZXhwb3J0IGNvbnN0IFN0eWxlcyA9IGNzc2BcblxuICAgICp7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGh0bWwge1xuICAgICAgICAke3NpemUoJzEwMCUnKX07XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG5cbiAgICBib2R5IHtcbiAgICAgICAgJHtzaXplKCdpbmhlcml0Jyl9O1xuICAgICAgICAke3Bvc2l0aW9uKCdmaXhlZCcsIDApfTtcbiAgICAgICAgY29sb3I6ICR7bGlnaHRlbigwLjMsICdibGFjaycpfTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICBoMSwgaDIsIGgzLCBoNCwgaDUge1xuICAgICAgICBtYXJnaW4tdG9wOiAxLjVlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNWVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwOyBcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzMzO1xuICAgICAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNhbnMtc2VyaWY7XG4gICAgfVxuXG4gICAgaDQsIGg1IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICBoMS5zdG9yeS10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJHtyZW0oJzQwcHgnKX07XG4gICAgfVxuXG4gICAgYSB7IFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAke2xpZ2h0ZW4oMC4yLCAnYmxhY2snKX07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgfVxuXG5cbiAgICB1bCBsaSB1bCAge1xuICAgICAgICBtYXJnaW4tbGVmdDogMyU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMyU7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNfX25leHQge1xuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxuXG4gICAgbmF2IHtcbiAgICAgICAgcGFkZGluZzogMThweCAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3MzAxO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgfVxuXG4gICAgbWFpbiB7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgfVxuXG4gICAgLm1haW4tdGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuXG4gICAgYnV0dG9uICsgYSA+IC5tYWluLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgICB9XG5cblxuXG4gICAgYXJ0aWNsZSB7XG4gICAgICAgIHBhZGRpbmc6IDFweDtcbiAgICB9XG5cbiAgICBjb2RlLCBwcmUge1xuICAgICAgICBjb2xvcjogI2Y4ZjhmMjtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBNb25hY28sICdBbmRhbGUgTW9ubycsICdVYnVudHUgTW9ubycsIG1vbm9zcGFjZTtcbiAgICAgICAgZm9udC1zaXplOiAke3JlbSgnMTRweCcpfTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICAgICAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgICAgICAgd29yZC13cmFwOiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG5cbiAgICAgICAgLW1vei10YWItc2l6ZTogNDtcbiAgICAgICAgLW8tdGFiLXNpemU6IDQ7XG4gICAgICAgIHRhYi1zaXplOiA0O1xuXG4gICAgICAgIC13ZWJraXQtaHlwaGVuczogbm9uZTtcbiAgICAgICAgLW1vei1oeXBoZW5zOiBub25lO1xuICAgICAgICAtbXMtaHlwaGVuczogbm9uZTtcbiAgICAgICAgaHlwaGVuczogbm9uZTtcblxuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIG1hcmdpbjogMWVtIDA7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbiAgICB9XG5cbiAgICBwcmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMjcyODIyO1xuICAgIH1cbmBcblxuIl19 */"), "label:Styles;");

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyDocument; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/document */ "next/document");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_Styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/Styles */ "./css/Styles.js");

var _jsxFileName = "/Users/benbkk/Sites/hacker-next/pages/_document.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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





var MyDocument =
/*#__PURE__*/
function (_Document) {
  _inherits(MyDocument, _Document);

  function MyDocument() {
    _classCallCheck(this, MyDocument);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyDocument).apply(this, arguments));
  }

  _createClass(MyDocument, [{
    key: "render",
    value: function render() {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("html", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_document__WEBPACK_IMPORTED_MODULE_3__["Head"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("link", {
        rel: "icon",
        type: "image/x-icon",
        href: "/static/favicon.ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("link", {
        href: "https://fonts.googleapis.com/css?family=Abril+Fatface|Merriweather:700|Quicksand:400,500,700",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["Global"], {
        styles: _css_Styles__WEBPACK_IMPORTED_MODULE_4__["Styles"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("body", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_document__WEBPACK_IMPORTED_MODULE_3__["Main"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_document__WEBPACK_IMPORTED_MODULE_3__["NextScript"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
        var initialProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next_document__WEBPACK_IMPORTED_MODULE_3___default.a.getInitialProps(ctx);

              case 2:
                initialProps = _context.sent;
                return _context.abrupt("return", _objectSpread({}, initialProps));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyDocument;
}(next_document__WEBPACK_IMPORTED_MODULE_3___default.a);



/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./pages/_document.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_document.js */"./pages/_document.js");


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

/***/ "next/document":
/*!********************************!*\
  !*** external "next/document" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/document");

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
//# sourceMappingURL=_document.js.map