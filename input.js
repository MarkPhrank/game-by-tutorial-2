export default class InputHandler {
    constructor(){
        this.lastKey = '';
        window.addEventListener('keydown', (e) => {
            switch(e.key){
                case "a": 
                    this.lastKey = "PRESS left";
                    break
                case "d": 
                    this.lastKey = "PRESS right";
                    break
                case "s": 
                    this.lastKey = "PRESS down";
                case "w": 
                    this.lastKey = "PRESS up";
            }
        });
        window.addEventListener('keyup', (e) => {
            switch(e.key){
                case "a": 
                    this.lastKey = "RELEASE left";
                    break
                case "d": 
                    this.lastKey = "RELEASE right";
                    break
                case "s": 
                    this.lastKey = "RELEASE down";
                    break
                case "w": 
                    this.lastKey = "RELEASE up";
                    break
            }
        });
    }
}