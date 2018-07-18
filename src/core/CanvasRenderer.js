export default class CanvasRenderer {

    constructor(canvasContext) {
        this._canvasContext = canvasContext;
        this._color = '#FFFFFF';
        this._font = '12px monospace';
        this._canvasContext.fillStyle = this._color;
        this._canvasContext.strokeStyle = this._color;
        this._canvasContext.font = this._font;
    }

    setColor(newColor) {
        this._color = newColor;
    }

    setFont(newFont) {
        this._font = newFont;
    }

    drawText(x, y, text) {
        this._canvasContext.fillStyle = this._color;
        this._canvasContext.font = this._font;
        this._canvasContext.fillText(text, x, y);
    }

    fillRectangle(x, y, w, h) {
        this._canvasContext.fillStyle = this._color;
        this._canvasContext.fillRect(x, y, w, h);
    }

    drawLine(x1, y1, x2, y2) {
        this._canvasContext.strokeStyle = this._color;
        this._canvasContext.beginPath();
        this._canvasContext.moveTo(x1, y1);
        this._canvasContext.lineTo(x2, y2);
        this._canvasContext.stroke();

    }

    clearCanvas(color) {
        this._canvasContext.fillStyle = color;
        const w = this._canvasContext.canvas.width;
        const h = this._canvasContext.canvas.height;
        this._canvasContext.fillRect(0, 0, w, h);
    }
}