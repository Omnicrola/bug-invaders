import {autobind} from "../Util";

export default class SubsystemManager {
    constructor() {
        this._subsystems = [];
        autobind(SubsystemManager.prototype, this);
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