import Shape from "./Shape";
import Point from "./Point";
import Entity from "./Entity";

export function buildPlayer(location) {
    const player = new Entity(new Shape([
        new Point(-5, -5),
        new Point(0, -5),
        new Point(5, -5),
        new Point(0, 5),
    ]), 'player');
    player.position = location;
    return player;
}