export default class GameInput {

    constructor() {
        const LEFT = 37;
        const UP = 38;
        const RIGHT = 39;
        const DOWN = 40;
        const SPACEBAR = 32;
        this._keyStates = new Array(255).map(i => false);
        this.blockedKeys = [LEFT, RIGHT, UP, DOWN, SPACEBAR];
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