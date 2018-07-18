export default class Delta {
    constructor(options) {
        this._config = options.config;
        this._lastFrame = 0;
    }

    getInterval() {
        const currentTime = new Date().getTime();
        const elapsed = currentTime - this._lastFrame;
        let delta = elapsed / (1000 / this._config.fps);
        this._lastFrame = currentTime;
        delta = Math.min(10, delta);
        return {delta: delta, milliseconds: elapsed};
    }
}