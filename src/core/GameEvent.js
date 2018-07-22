import {immutable} from "../Util";

export default class GameEvent {
    constructor(type, data) {
        immutable(this, 'type', type);
        immutable(this, 'data', data);
    }
}