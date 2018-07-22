import Point from "./Point";
import BoundingBox from "./BoundingBox";
import {isNum} from "../../Util";

export default class Shape {
    constructor(points) {
        this._points = points;
        this.color = '#ffffff';
        this.rotation = 0;
        this.position = new Point(0, 0);
    }

    boundingBox() {
        let minX = Number.MAX_VALUE;
        let minY = Number.MAX_VALUE;
        let maxX = Number.MIN_VALUE;
        let maxY = Number.MIN_VALUE;
        this._points.forEach((point) => {
            minX = (point.x < minX) ? point.x : minX;
            minY = (point.y < minY) ? point.y : minY;
            maxX = (point.x > maxX) ? point.x : maxX;
            maxY = (point.y > maxY) ? point.y : maxY;
        });
        return new BoundingBox(
            new Point(minX, minY),
            new Point(maxX, maxY)
        );
    }

    getPoints() {
        const rotation = this.rotation;
        const position = this.position;
        return this._points.map((point) => {
            point = point.rotate(rotation);
            const x = point.x + position.x;
            const y = point.y + position.y;
            return new Point(x, y);
        });
    }

    contains(pointToCheck) {
        const points = this.getPoints();
        const totalPoints = this._points.length;
        const x = pointToCheck.x;
        const y = pointToCheck.y;
        if (!isNum(x) || !isNum(y)) {
            return false;
        }
        let isContained = false;
        for (let i = 0, j = totalPoints - 1; i < totalPoints; j = i++) {
            const x1 = points[i].x;
            const y1 = points[i].y;
            const x2 = points[j].x;
            const y2 = points[j].y;

            const intersect = ((y1 > y) !== (y2 > y))
                && (x < (x2 - x1) * (y - y1) / (y2 - y1) + x1);
            if (intersect) isContained = !isContained;
        }

        return isContained;
    }

    intersects(otherShape) {
        if (!(otherShape instanceof Shape)) {
            return false;
        }
        let intersects = false;
        const self = this;
        const points = otherShape.getPoints();
        points.forEach(function (otherPoint) {
            if (self.contains(otherPoint)) {
                intersects = true;
            }
        });
        return intersects;
    }

    render(renderer) {
        renderer.setColor(this.color);
        const rotatedPoints = this.getPoints();
        const totalPoints = rotatedPoints.length;
        let p1, p2;
        for (let i = 0; i < totalPoints - 1; i++) {
            p1 = rotatedPoints[i];
            p2 = rotatedPoints[i + 1];
            _drawLine(renderer, p1, p2);

        }
        p1 = rotatedPoints[totalPoints - 1];
        p2 = rotatedPoints[0];
        renderer.drawLine(p1.x, p1.y, p2.x, p2.y);
    }
}