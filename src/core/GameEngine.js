import GameInput from "./GameInput";
import EventBus from "./EventBus";
import CanvasRenderer from "./CanvasRenderer";
import Delta from "./Delta";
import SubsystemManager from "./SubsystemManager";
import {autobind} from "../Util";

export default class GameEngine {

    constructor(config) {
        autobind(GameEngine.prototype, this);
        this._delta = GameEngine._createDelta(config);
        this.subsystems = config.subsystems;
        this._input = new GameInput();
        this._eventBus = new EventBus();
        this._subsystemManager = new SubsystemManager();
        config.subsystems.forEach(this._subsystemManager.addSubsystem);

        this._canvas = GameEngine._getCanvas(config.canvasId);
        this._renderer = new CanvasRenderer(this._canvas);
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