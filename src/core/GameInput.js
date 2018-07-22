import {autobind, loadArray} from "../Util";

export const KEY_LEFT = 37;
export const KEY_UP = 38;
export const KEY_RIGHT = 39;
export const KEY_DOWN = 40;
export const KEY_SPACEBAR = 32;

export default class GameInput {

    constructor() {
        autobind(GameInput.prototype, this);
        this._keyStates = loadArray(255, false);
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