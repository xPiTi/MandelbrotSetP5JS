import P5 from "p5";
import ShaderScreen from "./shaderScreen";

globalThis.iScreen = globalThis.iScreen || null;
globalThis.p5js = globalThis.p5js || null;

const sketch = (p5 : P5) => {
    p5.preload = () => {
        p5js = p5;
        iScreen = new ShaderScreen();
    }

    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight, p5js.WEBGL);
        p5.windowResized();
        iScreen.setup();
    }

    p5.draw = () => {
        iScreen.draw();
    }

    p5.windowResized = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
        iScreen.windowResized();
    }

    p5.keyPressed = () => {
        iScreen.keyPressed();
    }
        

    p5.keyReleased = () => {
        iScreen.keyReleased();
    }

    p5.mousePressed = () => {
        iScreen.mousePressed();
    }

    p5.mouseReleased = () => {
        iScreen.mouseReleased();
    }

    p5.touchStarted = () => {
        iScreen.touchStarted();
    }

    p5.touchEnded = () => {
        iScreen.touchEnded();
    }

    p5.touchMoved = () => {
        iScreen.touchMoved();
        return false;
    }

    p5.mouseWheel = (event) => {
        iScreen.mouseWheel(event);
    }

    function detectMobile() : boolean{
        let details = navigator.userAgent;
        let regexp = /android|iphone|kindle|ipad/i;
        let isMobileDevice = regexp.test(details);
        return isMobileDevice;
    }
}

new P5(sketch);