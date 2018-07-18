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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/CanvasRenderer.js":
/*!************************************!*\
  !*** ./src/core/CanvasRenderer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CanvasRenderer; });
class CanvasRenderer{}

/***/ }),

/***/ "./src/core/Delta.js":
/*!***************************!*\
  !*** ./src/core/Delta.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Delta; });
class Delta {
    constructor(options) {
        this._config = options.config;
        this._lastFrame = 0;
    }

    getInterval() {
        const currentTime = new Date().getTime();
        const elapsed = currentTime - this._lastFrame;
        let delta = elapsed / (1000 / this._config.fps);
        this._lastFrame = currentTime;
        delta = Math.min(10, delta);
        return {delta: delta, milliseconds: elapsed};
    }
}

/***/ }),

/***/ "./src/core/EventBus.js":
/*!******************************!*\
  !*** ./src/core/EventBus.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventBus; });
class EventBus {}

/***/ }),

/***/ "./src/core/GameEngine.js":
/*!********************************!*\
  !*** ./src/core/GameEngine.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameEngine; });
/* harmony import */ var _GameInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameInput */ "./src/core/GameInput.js");
/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventBus */ "./src/core/EventBus.js");
/* harmony import */ var _CanvasRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CanvasRenderer */ "./src/core/CanvasRenderer.js");
/* harmony import */ var _Delta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Delta */ "./src/core/Delta.js");





class GameEngine {

    constructor(config) {
        this._delta = GameEngine._createDelta(config);
        this.subsystems = config.subsystems;
        this._input = new _GameInput__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this._eventBus = new _EventBus__WEBPACK_IMPORTED_MODULE_1__["default"]();

        const canvas = GameEngine._getCanvas(config.canvasId);
        this._renderer = new _CanvasRenderer__WEBPACK_IMPORTED_MODULE_2__["default"](canvas);
    }

    start() {
        window.setInterval(this.cycle.bind(this), 1000 / 60);
    }

    cycle() {
        const interval = this._delta.getInterval();
        console.log('Cycle : ' + interval.delta);
    }

    static _createDelta(config) {
        return new _Delta__WEBPACK_IMPORTED_MODULE_3__["default"]({
            time: new Date().getTime(),
            config: {
                fps: config.fps
            }
        });
    }

    static _getCanvas(canvasId) {
        const canvasElement = document.getElementById(canvasId);
        if (canvasElement) {
            return canvasElement.getContext('2d');
        } else {
            return {width: 0, height: 0};
        }
    }
}

/***/ }),

/***/ "./src/core/GameInput.js":
/*!*******************************!*\
  !*** ./src/core/GameInput.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameInput; });
class GameInput{}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_GameEngine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/GameEngine */ "./src/core/GameEngine.js");


const gameConfig = {
    fps: 30,
    canvasId: 'game-canvas',
    subsystems: []
};
const gameEngine = new _core_GameEngine__WEBPACK_IMPORTED_MODULE_0__["default"](gameConfig);
gameEngine.start();

/***/ })

/******/ });
//# sourceMappingURL=main.js.map