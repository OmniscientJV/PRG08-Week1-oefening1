/// <reference path="gameObject.ts" />

class Kart extends GameObject 
{
    private speed:number;
    private fuel : number;
    private driver: Driver;
    private movingRight: boolean = true;
            
    constructor(x: number, y: number) {
        super(x, y, "kart");
        this.speed = 3;

        this.driver = new Driver(this.position.x, this.position.y);

        Message.logMessage("Created a kart!");
    }

    public update()
    {
        if(this.position.x >= 400 && this.movingRight)
            this.movingRight = false;

        if(this.position.x <= 200 && !this.movingRight)
            this.movingRight = true;

        this.position.x += (this.movingRight ? 1 : -1);
        this.driver.setPosition(this.position.x, this.position.y);
        this.driver.update();
    }

    public draw()
    {
        super.draw();
        this.driver.draw();
    }
}