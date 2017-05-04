abstract class GameObject
{
    protected position: Vector2;
    protected div : HTMLElement;
    protected texture: String;

    constructor(x: number, y: number, texture)
    {
        this.position = new Vector2(x, y);

        this.div = document.createElement(texture);
        document.body.appendChild(this.div);
    }

    public setPosition(x: number, y: number)
    {
        this.position.x = x;
        this.position.y = y;
    }

    public abstract update();

    public draw() {
        this.div.style.transform = `translate(${this.position.x}px, ${this.position.y}px)`;
    };
}