import GameEngine from "./core/GameEngine";

const gameConfig = {
    fps: 30,
    canvasId: 'game-canvas',
    subsystems: []
};
const gameEngine = new GameEngine(gameConfig);
gameEngine.start();