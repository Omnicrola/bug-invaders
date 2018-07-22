import {immutable} from "../../Util";
import Point from "./Point";

export default class BoundingBox {

    constructor(minP, maxP) {
        const {min, max} = this._sort(minP, maxP);
        immutable(this, 'min', min);
        immutable(this, 'max', max);
    }

    _sort(min, max) {
        const minX = Math.min(min.x, max.x);
        const minY = Math.min(min.y, max.y);
        const maxX = Math.max(min.x, max.x);
        const maxY = Math.max(min.y, max.y);
        min = new Point(minX, minY);
        max = new Point(maxX, maxY);
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