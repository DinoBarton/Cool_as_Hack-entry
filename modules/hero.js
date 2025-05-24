export class Hero {
    constructor (name, colour, key, x=50, y, gravity, length = 50) {
        this.name = name;
        this.colour = colour;
        this.key = key;
        this.x = x;
        this.y = y;
        this.gravity = gravity;
        this.length = length;
        this.width = this.length;
        this.height = this.length;
    }
}