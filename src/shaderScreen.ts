import p5 from 'p5';
import { IScreen } from './iScreen';

class ShaderScreen implements IScreen{
    myShader: any;

    zoom: number;
    zoomGoal: number;
    centerX: number;
    centerY: number;
    maxIterations: number;

    mouseStartX = 0;
    mouseStartY = 0;

    constructor(){
        this.myShader = p5js.loadShader('shader.vert', 'mandelbrotset.frag');

        this.zoomGoal = 3;
        this.zoom = this.zoomGoal;
        this.centerX = -.75;
        this.centerY = 0;
        this.maxIterations = 100;
    }

    setup(){
        
    }

    windowResized(): void {
        
    }

    draw(){
        p5js.translate(-p5js.width / 2, -p5js.height / 2);
        p5js.background(33);
        p5js.noStroke();
        p5js.shader(this.myShader);

        if(p5js.mouseIsPressed){
            this.centerX -= (p5js.mouseX - this.mouseStartX) * 0.001 * this.zoom;
            this.centerY += (p5js.mouseY - this.mouseStartY) * 0.001 * this.zoom;
            this.mouseStartX = p5js.mouseX;
            this.mouseStartY = p5js.mouseY;
        }

        this.myShader.setUniform('u_resolution', [p5js.width, p5js.height]);
        this.myShader.setUniform('u_time', p5js.millis() / 1000.0);
        this.myShader.setUniform('u_mouse', [p5js.mouseX, p5js.height - p5js.mouseY]);
        this.myShader.setUniform('u_center', [this.centerX,this.centerY]);
        this.myShader.setUniform('u_zoom', this.zoom);
        this.myShader.setUniform('u_itr', this.maxIterations);

        p5js.rect(-p5js.width/2, -p5js.height/2, p5js.width, p5js.height);

        this.zoom += (this.zoomGoal - this.zoom) * 0.1;
    } 

    keyPressed(){

    }   

    keyReleased(){
        
    }

    mousePressed(){
        this.mouseStartX = p5js.mouseX;
        this.mouseStartY = p5js.mouseY;
    }

    mouseReleased(){
        
    }

    touchStarted(){
        
    }

    touchEnded(){
        
    }

    touchMoved(): void {
        
    }

    mouseWheel(event: any): void {
        if(event.delta > 0){
            if(this.zoomGoal < 5){
                this.zoomGoal *= 1.2;
            }
            
        }else{
            if(this.zoomGoal > 0.00001){
                this.zoomGoal *= 0.8;
            }
        }
    }

}

export default ShaderScreen;