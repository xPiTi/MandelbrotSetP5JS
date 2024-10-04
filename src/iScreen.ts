// Screen.ts

export interface IScreen {
    setup(): void;
    draw(): void;
    keyPressed(): void;
    keyReleased(): void;
    mousePressed(): void;
    mouseReleased(): void;
    touchStarted(): void;
    touchEnded(): void;
    touchMoved(): void;
    mouseWheel(event: any): void;
    windowResized(): void;
}

export default IScreen;
