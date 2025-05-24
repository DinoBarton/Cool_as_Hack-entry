// holes, platforms

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

        return Math.round(Math.random() * (freqMax - freqMin) + freqMin);
    }
}

export class Obstacle {
    x;
    y;
    speed;

    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
    }

    move() {
        this.x -= (this.speed / 60);
    }
}

export class Platform extends Obstacle {
    constructor(x, y, speed, color = "white") {
        super(x, y, speed);
        this.color = color;
    }
}

export class Hole extends Obstacle {
    constructor(x, y, speed) {
        super(x, y, speed);
    }
}

export function generateNewObstacles(obstacles, speed, canvas, platformTick, holeTick) {
    cleanupObjects(obstacles);
    moveAllObstacles(obstacles);
    if (platformTick.tick >= platformTick.nextCount) {
        obstacles.push(new Platform(canvas.width, generateRandomY(canvas.height), speed)); // TODO: proper impl
        platformTick.newNextCount();
        platformTick.tick = 0;
    }

    if (holeTick.tick >= holeTick.nextCount) {
        holeTick.newNextCount(new Hole(0, 0, speed)); // TODO: proper impl
        holeTick.tick = 0;
    }

    return obstacles;
}

export function moveAllObstacles(obstacles) {
    for (let i = 0; i < obstacles.length; i++) {

        if (obstacles[i] instanceof Platform) {
            obstacles[i].move()
        }
    }
}

export function cleanupObjects(obstacles) {
    for (let i = 0; i < obstacles.length; i++) {
        const obj = obstacles[i];

        if (obj instanceof Platform) {
            if (obj.x < 0) {
                obstacles.splice(i, 1);
            }
        } else if (obj instanceof Hole) {
            console.log(`obstacles[${i}] is an instance of Tick`);
        } else {
            console.log("Broken object");
        }
    }
}

function generateRandomY(height) {
    const heightMin = height * 0.1;
    const heightMax = height * 0.9;

    console.log(height, heightMin, heightMax)

    console.log(Math.round(Math.random() * (heightMax - heightMin) + heightMin));
    return Math.round(Math.random() * (heightMax - heightMin) + heightMin);
}

/*
if (import.meta.main) {
    let tick = new Tick(10, 0.1);
    console.log(tick.nextCount);
    generateNewObstacles([new Platform(1, 2), new Hole(2, 3)]);
} */