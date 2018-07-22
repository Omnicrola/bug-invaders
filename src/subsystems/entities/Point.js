import {immutable} from "../../Util";

export default class Point {
    constructor(x, y) {
        immutable(this, 'x', x);
        immutable(this, 'y', y);
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