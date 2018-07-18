import GameInput from "./GameInput";
import EventBus from "./EventBus";
import CanvasRenderer from "./CanvasRenderer";
import Delta from "./Delta";

export default class GameEngine {

    constructor(config) {
        this._delta = GameEngine._createDelta(config);
        this.subsystems = config.subsystems;
        this._input = new GameInput();
        this._eventBus = new EventBus();

        const canvas = GameEngine._getCanvas(config.canvasId);
        this._renderer = new CanvasRenderer(canvas);
    }

    start() {
        window.setInterval(this.cycle.bind(this), 1000 / 60);
    }

    cycle() {
        const interval = this._delta.getInterval();
        this._renderer.clearCanvas('#000000');
        this._renderer.setColor('#FFFFFF');
        this._renderer.drawText(100, 100, 'Hello!');
    }

    static _createDelta(config) {
        return new Delta({
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