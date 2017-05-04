var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameObject = (function () {
    function GameObject(x, y, texture) {
        this.position = new Vector2(x, y);
        this.div = document.createElement(texture);
        document.body.appendChild(this.div);
    }
    GameObject.prototype.setPosition = function (x, y) {
        this.position.x = x;
        this.position.y = y;
    };
    GameObject.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.position.x + "px, " + this.position.y + "px)";
    };
    ;
    return GameObject;
}());
var Driver = (function (_super) {
    __extends(Driver, _super);
    function Driver(x, y) {
        _super.call(this, x, y, "driver");
        Message.logMessage("Created a driver!");
    }
    Driver.prototype.update = function () {
    };
    Driver.prototype.draw = function () {
        _super.prototype.draw.call(this);
    };
    return Driver;
}(GameObject));
var Kart = (function (_super) {
    __extends(Kart, _super);
    function Kart(x, y) {
        _super.call(this, x, y, "kart");
        this.movingRight = true;
        this.speed = 3;
        this.driver = new Driver(this.position.x, this.position.y);
        Message.logMessage("Created a kart!");
    }
    Kart.prototype.update = function () {
        if (this.position.x >= 400 && this.movingRight)
            this.movingRight = false;
        if (this.position.x <= 200 && !this.movingRight)
            this.movingRight = true;
        this.position.x += (this.movingRight ? 1 : -1);
        this.driver.setPosition(this.position.x, this.position.y);
        this.driver.update();
    };
    Kart.prototype.draw = function () {
        _super.prototype.draw.call(this);
        this.driver.draw();
    };
    return Kart;
}(GameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        var k = new Kart(200, 100);
        Game.gameObjects.push(k);
        requestAnimationFrame(function () { return _this.update(); });
    }
    Game.prototype.update = function () {
        var _this = this;
        for (var _i = 0, _a = Game.gameObjects; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.update();
            obj.draw();
        }
        requestAnimationFrame(function () { return _this.update(); });
    };
    Game.gameObjects = new Array();
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Message = (function () {
    function Message() {
    }
    Message.logMessage = function (str) {
        console.log(str);
    };
    return Message;
}());
var Vector2 = (function () {
    function Vector2(x, y) {
        this.x = x;
        this.y = y;
    }
    return Vector2;
}());
//# sourceMappingURL=main.js.map