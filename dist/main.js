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

/***/ "./src/Util.js":
/*!*********************!*\
  !*** ./src/Util.js ***!
  \*********************/
/*! exports provided: immutable, isNum, autobind, loadArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "immutable", function() { return immutable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNum", function() { return isNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autobind", function() { return autobind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadArray", function() { return loadArray; });
function immutable(object, property, value) {
    Object.defineProperties(object,
        {
            [property]: {
                writeable: false,
                enumerable: true,
                value: value

            }
        });
}

function isNum(value) {
    return !(isNaN(value) ||
        value === undefined ||
        value === null);
}

function autobind(clazz, self) {
    Object.getOwnPropertyNames(clazz)
        .forEach(prop => {
            self[prop] = self[prop].bind(self);
        });
}

function loadArray(length, defaultValue) {
    let newArray = [];
    for (let i = 0; i <= length; i++) {
        newArray.push(defaultValue);
    }
    return newArray;
}

/***/ }),

/***/ "./src/core/CanvasRenderer.js":
/*!************************************!*\
  !*** ./src/core/CanvasRenderer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CanvasRenderer; });
class CanvasRenderer {

    constructor(canvasContext) {
        this._canvasContext = canvasContext;
        this._color = '#FFFFFF';
        this._font = '12px monospace';
        this._canvasContext.fillStyle = this._color;
        this._canvasContext.strokeStyle = this._color;
        this._canvasContext.font = this._font;
    }

    setColor(newColor) {
        this._color = newColor;
    }

    setFont(newFont) {
        this._font = newFont;
    }

    drawText(x, y, text) {
        this._canvasContext.fillStyle = this._color;
        this._canvasContext.font = this._font;
        this._canvasContext.fillText(text, x, y);
    }

    fillRectangle(x, y, w, h) {
        this._canvasContext.fillStyle = this._color;
        this._canvasContext.fillRect(x, y, w, h);
    }

    drawLine(x1, y1, x2, y2) {
        this._canvasContext.strokeStyle = this._color;
        this._canvasContext.beginPath();
        this._canvasContext.moveTo(x1, y1);
        this._canvasContext.lineTo(x2, y2);
        this._canvasContext.stroke();

    }

    clearCanvas(color) {
        this._canvasContext.fillStyle = color;
        const w = this._canvasContext.canvas.width;
        const h = this._canvasContext.canvas.height;
        this._canvasContext.fillRect(0, 0, w, h);
    }
}

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
class EventBus {
    constructor() {
        this._pendingEvents = [];
        this._subscribers = {};
    };

    enqueue(event) {
        this._pendingEvents.push(event);
    }

    subscribe(eventType, subscriber) {
        if (!this._subscribers[eventType]) {
            this._subscribers[eventType] = [];
        }
        this._subscribers[eventType].push(subscriber);
    }

    unsubscribe(eventType, subscriberToRemove) {
        const subscribers = this._subscribers[eventType];
        const indexOf = subscribers.indexOf(subscriberToRemove);
        if (indexOf !== -1) {
            subscribers.splice(indexOf, 1);
        }
    }

    process() {
        const self = this;
        const allEvents = this._pendingEvents;
        this._pendingEvents = [];
        allEvents.forEach((event) => {
            const subscribers = self._subscribers[event.type];
            if (subscribers) {
                subscribers.forEach((subscriber) => {
                    subscriber(event);
                });
            }
        });
    }
}

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
/* harmony import */ var _SubsystemManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SubsystemManager */ "./src/core/SubsystemManager.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Util */ "./src/Util.js");







class GameEngine {

    constructor(config) {
        Object(_Util__WEBPACK_IMPORTED_MODULE_5__["autobind"])(GameEngine.prototype, this);
        this._delta = GameEngine._createDelta(config);
        this.subsystems = config.subsystems;
        this._input = new _GameInput__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this._eventBus = new _EventBus__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this._subsystemManager = new _SubsystemManager__WEBPACK_IMPORTED_MODULE_4__["default"]();
        config.subsystems.forEach(this._subsystemManager.addSubsystem);

        this._canvas = GameEngine._getCanvas(config.canvasId);
        this._renderer = new _CanvasRenderer__WEBPACK_IMPORTED_MODULE_2__["default"](this._canvas);
    }

    start() {
        let gameContainer = this._createGameContainer({delta: 1.0, milliseconds: 0});
        this._subsystemManager.initialize(gameContainer);
        window.setInterval(this.cycle.bind(this), 1000 / 60);
    }

    cycle() {
        const interval = this._delta.getInterval();
        let gameContainer = this._createGameContainer(interval);
        this._eventBus.process();
        this._subsystemManager.update(gameContainer);
        this._renderer.clearCanvas('#000000');
        this._subsystemManager.render(gameContainer);
    }

    _createGameContainer(interval) {
        return {
            delta: interval.delta,
            timeSinceLastFrame: interval.milliseconds,
            input: this._input,
            audio: {},
            display: {
                width: this._canvas.canvas.width,
                height: this._canvas.canvas.height
            },
            addEntity: () => {
            },
            events: {
                emit: this._eventBus.enqueue,
                subscribe: this._eventBus.subscribe,
                unsubscribe: this._eventBus.unsubscribe
            }
        };
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

/***/ "./src/core/GameEvent.js":
/*!*******************************!*\
  !*** ./src/core/GameEvent.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameEvent; });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util */ "./src/Util.js");


class GameEvent {
    constructor(type, data) {
        Object(_Util__WEBPACK_IMPORTED_MODULE_0__["immutable"])(this, 'type', type);
        Object(_Util__WEBPACK_IMPORTED_MODULE_0__["immutable"])(this, 'data', data);
    }
}

/***/ }),

/***/ "./src/core/GameInput.js":
/*!*******************************!*\
  !*** ./src/core/GameInput.js ***!
  \*******************************/
/*! exports provided: KEY_LEFT, KEY_UP, KEY_RIGHT, KEY_DOWN, KEY_SPACEBAR, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_LEFT", function() { return KEY_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_UP", function() { return KEY_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_RIGHT", function() { return KEY_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_DOWN", function() { return KEY_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_SPACEBAR", function() { return KEY_SPACEBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameInput; });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util */ "./src/Util.js");


const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;
const KEY_SPACEBAR = 32;

class GameInput {

    constructor() {
        Object(_Util__WEBPACK_IMPORTED_MODULE_0__["autobind"])(GameInput.prototype, this);
        this._keyStates = Object(_Util__WEBPACK_IMPORTED_MODULE_0__["loadArray"])(255, false);
        this.blockedKeys = [KEY_LEFT, KEY_RIGHT, KEY_UP, KEY_DOWN, KEY_SPACEBAR];
        document.addEventListener('keyup', this._keyUp.bind(this));
        document.addEventListener('keydown', this._keyDown.bind(this));
    }

    isPressed(keyCode) {
        return this._keyStates[keyCode];
    }

    _keyUp(event) {
        this._keyStates[event.keyCode] = false;
        this._supressGameKeys(event);
    }

    _keyDown(event) {
        this._keyStates[event.keyCode] = true;
        this._supressGameKeys(event);
    }

    _supressGameKeys(event) {
        if (this.blockedKeys.indexOf(event.keyCode) !== -1) {
            event.preventDefault();
        }
    }
}

/***/ }),

/***/ "./src/core/SubsystemManager.js":
/*!**************************************!*\
  !*** ./src/core/SubsystemManager.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubsystemManager; });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util */ "./src/Util.js");


class SubsystemManager {
    constructor() {
        this._subsystems = [];
        Object(_Util__WEBPACK_IMPORTED_MODULE_0__["autobind"])(SubsystemManager.prototype, this);
    }

    addSubsystem(subsystem) {
        this._subsystems.push(subsystem);
    }

    initialize(gameContainer) {
        this._subsystems.forEach(subsystem => {
            if (subsystem.initialize) {
                subsystem.initialize(gameContainer);
            }
        });
    }

    update(updateContainer) {
        this._subsystems.forEach((subsystem) => {
            if (subsystem.update) {
                subsystem.update(updateContainer);
            }
        });
    }

    render(renderer) {
        this._subsystems.forEach((subsystem) => {
            if (subsystem.render) {
                subsystem.render(renderer);
            }
        });
    }
}

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
/* harmony import */ var _subsystems_PlayerSubsystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subsystems/PlayerSubsystem */ "./src/subsystems/PlayerSubsystem.js");



const gameConfig = {
    fps: 30,
    canvasId: 'game-canvas',
    subsystems: [new _subsystems_PlayerSubsystem__WEBPACK_IMPORTED_MODULE_1__["default"]()]
};
const gameEngine = new _core_GameEngine__WEBPACK_IMPORTED_MODULE_0__["default"](gameConfig);
gameEngine.start();

/***/ }),

/***/ "./src/subsystems/PlayerSubsystem.js":
/*!*******************************************!*\
  !*** ./src/subsystems/PlayerSubsystem.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerSubsystem; });
/* harmony import */ var _entities_EntityFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities/EntityFactory */ "./src/subsystems/entities/EntityFactory.js");
/* harmony import */ var _entities_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities/Point */ "./src/subsystems/entities/Point.js");
/* harmony import */ var _core_GameInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/GameInput */ "./src/core/GameInput.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Util */ "./src/Util.js");





var MOVE_SPEED = 5.0;
var ACCELLERATION = 0.125;

class PlayerSubsystem {
    constructor(config) {
        Object(_Util__WEBPACK_IMPORTED_MODULE_3__["autobind"])(PlayerSubsystem.prototype, this);
        // this._timer = config.time;
        this._playerWeaponDelay = 100;
        this._lastWeaponDischarge = 0;
    }

    initialize(gameContainer) {
        this._respawnPlayer(gameContainer)
    }

    render() {
    }

    update(gameContainer) {
        this._handleMovement(gameContainer);
    }

    _handleMovement(gameContainer) {
        const input = gameContainer.input;
        if (input.isPressed(_core_GameInput__WEBPACK_IMPORTED_MODULE_2__["KEY_LEFT"])) {
            this._player.position.translate(new _entities_Point__WEBPACK_IMPORTED_MODULE_1__["default"](-MOVE_SPEED, 0));
        }
        if (input.isPressed(_core_GameInput__WEBPACK_IMPORTED_MODULE_2__["KEY_RIGHT"])) {
            this._player.position.translate(new _entities_Point__WEBPACK_IMPORTED_MODULE_1__["default"](MOVE_SPEED, 0));
        }
    }

    _respawnPlayer(gameContainer) {
        this._player = _entities_EntityFactory__WEBPACK_IMPORTED_MODULE_0__["buildPlayer"](new _entities_Point__WEBPACK_IMPORTED_MODULE_1__["default"](320, 240));
        gameContainer.addEntity(this._player);
    }
}


/***/ }),

/***/ "./src/subsystems/entities/BoundingBox.js":
/*!************************************************!*\
  !*** ./src/subsystems/entities/BoundingBox.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BoundingBox; });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Util */ "./src/Util.js");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Point */ "./src/subsystems/entities/Point.js");



class BoundingBox {

    constructor(minP, maxP) {
        const {min, max} = this._sort(minP, maxP);
        Object(_Util__WEBPACK_IMPORTED_MODULE_0__["immutable"])(this, 'min', min);
        Object(_Util__WEBPACK_IMPORTED_MODULE_0__["immutable"])(this, 'max', max);
    }

    _sort(min, max) {
        const minX = Math.min(min.x, max.x);
        const minY = Math.min(min.y, max.y);
        const maxX = Math.max(min.x, max.x);
        const maxY = Math.max(min.y, max.y);
        min = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](minX, minY);
        max = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](maxX, maxY);
        return {min, max};
    }

    intersects(otherBox) {
        if (!otherBox || !(otherBox instanceof BoundingBox)) {
            throw new Error('Intersect cannot be calculated on a non-BoundingBox object');
        }
        if (otherBox.max.x < this.min.x) {
            return false;
        }
        if (otherBox.min.x > this.max.x) {
            return false;
        }
        if (otherBox.max.y < this.min.y) {
            return false;
        }
        if (otherBox.min.y > this.max.y) {
            return false;
        }
        return true;
    }
}

/***/ }),

/***/ "./src/subsystems/entities/Entity.js":
/*!*******************************************!*\
  !*** ./src/subsystems/entities/Entity.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Entity; });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/subsystems/entities/Point.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Util */ "./src/Util.js");
/* harmony import */ var _core_GameEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/GameEvent */ "./src/core/GameEvent.js");




class Entity {
    constructor(shape, type) {
        Object(_Util__WEBPACK_IMPORTED_MODULE_1__["immutable"])(this, 'shape', shape);
        Object(_Util__WEBPACK_IMPORTED_MODULE_1__["immutable"])(this, 'type', type);
        this._behaviors = [];
        this._isAlive = true;
        this.position = new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
        this.velocity = new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
    }

    get rotation() {
        return this.shape.rotation;
    }

    set rotation(value) {
        this.shape.rotation = value;
    }

    get position() {
        return this.shape.position;
    }

    set position(value) {
        this.shape.position = value;
    }

    get isAlive() {
        return this._isAlive;
    }

    render(renderer) {
        this.shape.render(renderer);
    };

    update(gameContainer) {
        this._invokeBehaviors(gameContainer);
        const vX = this.velocity.x * gameContainer.delta;
        const vY = this.velocity.y * gameContainer.delta;
        this.position = this.position.translate({x: vX, y: vY});
    };

    destroy(gameContainer) {
        this._isAlive = false;
        gameContainer.events.emit(new _core_GameEvent__WEBPACK_IMPORTED_MODULE_2__["default"]('entity-death', {
            type: this.type,
            position: this.position
        }));
    };

    addBehavior(newBehavior) {
        this._behaviors.push(newBehavior);
    }

    _invokeBehaviors(gameContainer) {
        const entity = this;
        this._behaviors.forEach(function (behavior) {
            behavior(gameContainer, entity);
        });
    }
}

/***/ }),

/***/ "./src/subsystems/entities/EntityFactory.js":
/*!**************************************************!*\
  !*** ./src/subsystems/entities/EntityFactory.js ***!
  \**************************************************/
/*! exports provided: buildPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildPlayer", function() { return buildPlayer; });
/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shape */ "./src/subsystems/entities/Shape.js");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Point */ "./src/subsystems/entities/Point.js");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Entity */ "./src/subsystems/entities/Entity.js");




function buildPlayer(location) {
    const player = new _Entity__WEBPACK_IMPORTED_MODULE_2__["default"](new _Shape__WEBPACK_IMPORTED_MODULE_0__["default"]([
        new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](-5, -5),
        new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, -5),
        new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](5, -5),
        new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, 5),
    ]), 'player');
    player.position = location;
    return player;
}

/***/ }),

/***/ "./src/subsystems/entities/Point.js":
/*!******************************************!*\
  !*** ./src/subsystems/entities/Point.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Point; });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Util */ "./src/Util.js");


class Point {
    constructor(x, y) {
        Object(_Util__WEBPACK_IMPORTED_MODULE_0__["immutable"])(this, 'x', x);
        Object(_Util__WEBPACK_IMPORTED_MODULE_0__["immutable"])(this, 'y', y);
    }

    translate(otherPoint) {
        return new Point(this.x + otherPoint.x, this.y + otherPoint.y);
    }

    scale(multiplier) {
        return new Point(this.x * multiplier, this.y * multiplier);
    }

    get magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    get normalize() {
        const magnitude = this.magnitude();
        const x = this.x / magnitude;
        const y = this.y / magnitude;
        return new Point(x, y);
    }

    rotate(degrees) {
        const theta = degrees * Math.PI / 180.0;
        const x = Math.cos(theta) * this.x - Math.sin(theta) * this.y;
        const y = Math.sin(theta) * this.x + Math.cos(theta) * this.y;
        return new Point(x, y);
    }

    get toString() {
        return 'Point(' + this.x + ', ' + this.y + ')';
    }

}

/***/ }),

/***/ "./src/subsystems/entities/Shape.js":
/*!******************************************!*\
  !*** ./src/subsystems/entities/Shape.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shape; });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/subsystems/entities/Point.js");
/* harmony import */ var _BoundingBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoundingBox */ "./src/subsystems/entities/BoundingBox.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util */ "./src/Util.js");




class Shape {
    constructor(points) {
        this._points = points;
        this.color = '#ffffff';
        this.rotation = 0;
        this.position = new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
    }

    boundingBox() {
        let minX = Number.MAX_VALUE;
        let minY = Number.MAX_VALUE;
        let maxX = Number.MIN_VALUE;
        let maxY = Number.MIN_VALUE;
        this._points.forEach((point) => {
            minX = (point.x < minX) ? point.x : minX;
            minY = (point.y < minY) ? point.y : minY;
            maxX = (point.x > maxX) ? point.x : maxX;
            maxY = (point.y > maxY) ? point.y : maxY;
        });
        return new _BoundingBox__WEBPACK_IMPORTED_MODULE_1__["default"](
            new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](minX, minY),
            new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](maxX, maxY)
        );
    }

    getPoints() {
        const rotation = this.rotation;
        const position = this.position;
        return this._points.map((point) => {
            point = point.rotate(rotation);
            const x = point.x + position.x;
            const y = point.y + position.y;
            return new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](x, y);
        });
    }

    contains(pointToCheck) {
        const points = this.getPoints();
        const totalPoints = this._points.length;
        const x = pointToCheck.x;
        const y = pointToCheck.y;
        if (!Object(_Util__WEBPACK_IMPORTED_MODULE_2__["isNum"])(x) || !Object(_Util__WEBPACK_IMPORTED_MODULE_2__["isNum"])(y)) {
            return false;
        }
        let isContained = false;
        for (let i = 0, j = totalPoints - 1; i < totalPoints; j = i++) {
            const x1 = points[i].x;
            const y1 = points[i].y;
            const x2 = points[j].x;
            const y2 = points[j].y;

            const intersect = ((y1 > y) !== (y2 > y))
                && (x < (x2 - x1) * (y - y1) / (y2 - y1) + x1);
            if (intersect) isContained = !isContained;
        }

        return isContained;
    }

    intersects(otherShape) {
        if (!(otherShape instanceof Shape)) {
            return false;
        }
        let intersects = false;
        const self = this;
        const points = otherShape.getPoints();
        points.forEach(function (otherPoint) {
            if (self.contains(otherPoint)) {
                intersects = true;
            }
        });
        return intersects;
    }

    render(renderer) {
        renderer.setColor(this.color);
        const rotatedPoints = this.getPoints();
        const totalPoints = rotatedPoints.length;
        let p1, p2;
        for (let i = 0; i < totalPoints - 1; i++) {
            p1 = rotatedPoints[i];
            p2 = rotatedPoints[i + 1];
            _drawLine(renderer, p1, p2);

        }
        p1 = rotatedPoints[totalPoints - 1];
        p2 = rotatedPoints[0];
        renderer.drawLine(p1.x, p1.y, p2.x, p2.y);
    }
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map