/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nexports.default = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./src/constants.yml":
/*!***************************!*\
  !*** ./src/constants.yml ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = { BASE_DIR: '/', IMG_DIR: '/img' }\n\n//# sourceURL=webpack:///./src/constants.yml?");

/***/ }),

/***/ "./src/js/lib/Sample.js":
/*!******************************!*\
  !*** ./src/js/lib/Sample.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Sample=function Sample(){var opts=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};(0,_classCallCheck3.default)(this,Sample);this.name=opts.name;};exports.default=Sample;;\n\n//# sourceURL=webpack:///./src/js/lib/Sample.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var _constants=__webpack_require__(/*! ../constants.yml */ \"./src/constants.yml\");var _Sample=__webpack_require__(/*! @/lib/Sample */ \"./src/js/lib/Sample.js\");var _Sample2=_interopRequireDefault(_Sample);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var sample=new _Sample2.default({name:'world'});document.querySelector('.wrapper').addEventListener('click',function(){console.log('hello, '+sample.name+'. Base directory is '+_constants.BASE_DIR+'.');});\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });