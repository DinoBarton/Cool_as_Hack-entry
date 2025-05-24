// holes, platforms

let platformTick = new Tick(60, 0.2);
let holeTick = new Tick(200, 0.1);

export class Tick {
    tick;
    nextCount;
    frequency; // amount of ticks for next item (avg)
    variation; // percentage of variation

    constructor(frequency, variation) {
        this.tick = 0;
        this.nextCount = this.generateNextCount(frequency, variation);
        this.frequency = frequency;
        this.variation = variation;
    }

    newNextCount() {
        this.nextCount = this.generateNextCount(
            this.frequency, 
            this.variation
        );
    }

    generateNextCount(frequency, variation) {
        const freqMin = frequency - (frequency * variation);
        const freqMax = frequency + (frequency * variation);

        console.log("hi", freqMin, freqMax);
        return Math.round(Math.random() * (freqMax - freqMin) + freqMin);
    }
}

export class Obstacle {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export class Platform extends Obstacle {
    constructor(x, y, color = "black") {
        super(x, y);
        this.color = color;
    }
}

export class Hole extends Obstacle {
    constructor(x, y) {
        super(x, y);
    }
}

export function generateNewObstacles(obstacles) {
    for (let i = 0; i < obstacles.length; i++) {
        const obj = obstacles[i];

        if (obj instanceof Platform) {
            console.log(`obstacles[${i}] is an instance of Platform`);
        } else if (obj instanceof Hole) {
            console.log(`obstacles[${i}] is an instance of Tick`);
        } else {
            console.log("Broken tile");
        }
    }
}

if (import.meta.main) {
    let tick = new Tick(10, 0.1);
    console.log(tick.nextCount);
    generateNewObstacles([new Platform(1, 2), new Hole(2, 3)]);
}