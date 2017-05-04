/// <reference path="kart.ts"/>
/// <reference path="driver.ts"/>

class Game 
{
    public static gameObjects : Array<GameObject> = new Array<GameObject>();

    constructor() {
        let k:Kart = new Kart(200, 100);

        Game.gameObjects.push(k);

        requestAnimationFrame(() => this.update());
    }

    // Update the game objects.
    private update() : void
    {
        for(var obj of Game.gameObjects)
        {
            obj.update();
            obj.draw();
        }

        requestAnimationFrame(() => this.update());
    }  
} 

// load
window.addEventListener("load", function() {
    new Game();
});