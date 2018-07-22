import * as EntityFactory from "./entities/EntityFactory";
import Point from "./entities/Point";
import {KEY_LEFT, KEY_RIGHT} from "../core/GameInput";
import {autobind} from "../Util";

var MOVE_SPEED = 5.0;
var ACCELLERATION = 0.125;

export default class PlayerSubsystem {
    constructor(config) {
        autobind(PlayerSubsystem.prototype, this);
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
        if (input.isPressed(KEY_LEFT)) {
            this._player.position.translate(new Point(-MOVE_SPEED, 0));
        }
        if (input.isPressed(KEY_RIGHT)) {
            this._player.position.translate(new Point(MOVE_SPEED, 0));
        }
    }

    _respawnPlayer(gameContainer) {
        this._player = EntityFactory.buildPlayer(new Point(320, 240));
        gameContainer.addEntity(this._player);
    }
}
