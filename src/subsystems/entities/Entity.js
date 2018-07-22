import Point from "./Point";
import {immutable} from "../../Util";
import GameEvent from "../../core/GameEvent";

export default class Entity {
    constructor(shape, type) {
        immutable(this, 'shape', shape);
        immutable(this, 'type', type);
        this._behaviors = [];
        this._isAlive = true;
        this.position = new Point(0, 0);
        this.velocity = new Point(0, 0);
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
        gameContainer.events.emit(new GameEvent('entity-death', {
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