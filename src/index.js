import GameEngine from "./core/GameEngine";
import PlayerSubsystem from "./subsystems/PlayerSubsystem";

const gameConfig = {
    fps: 30,
    canvasId: 'game-canvas',
    subsystems: [new PlayerSubsystem()]
};
const gameEngine = new GameEngine(gameConfig);
gameEngine.start();