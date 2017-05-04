/// <reference path="gameObject.ts" />

class Driver extends GameObject 
{
    private fuel: number;
            
    constructor(x: number, y: number) {
        super(x, y, "driver");

        Message.logMessage("Created a driver!");
    }

    public update()
    {
    }

    public draw()
    {
        super.draw();
    }
}