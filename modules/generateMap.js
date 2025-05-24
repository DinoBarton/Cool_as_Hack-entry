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
    height;
    width;
    speed;

    constructor(x, y, speed, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }

    move() {
        this.x -= (this.speed / 60);
    }
}

export class Platform extends Obstacle {
    constructor(x, y, speed, color = "white") {
        let width = Math.round(Math.random() * (500 - 100) + 100);
        let height = 15;
        super(x, y, speed, width, height);
        this.color = color;
    }
}

export class Hole extends Platform {
    constructor(x, y, speed) {
        super(x, y, speed, "red");
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
        let newHole = new Hole(canvas.width, generateHoleY(canvas.height), speed);
        obstacles.push(newHole);
        holeTick.newNextCount();
        holeTick.tick = 0;
    }

    return obstacles;
}

export function moveAllObstacles(obstacles) {
    for (let i = 0; i < obstacles.length; i++) {
        const obj = obstacles[i];

        if (obj instanceof Platform || obj instanceof Hole) {
            obstacles[i].move();
        }
    }
}

export function cleanupObjects(obstacles) {
    for (let i = 0; i < obstacles.length; i++) {
        const obj = obstacles[i];

        if (obj instanceof Platform || obj instanceof Hole) {
            if (obj.x < -500) {
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

    return Math.round(Math.random() * (heightMax - heightMin) + heightMin);
}

function generateHoleY(canvasHeight, height) {
    const heightMin = canvasHeight * 0.1 + height/2;
    const heightMax = canvasHeight * 0.9 - height/2;

    return Math.round(Math.random()) === 0 ? heightMin : heightMax;
}

/*
if (import.meta.main) {
    let tick = new Tick(10, 0.1);
    console.log(tick.nextCount);
    generateNewObstacles([new Platform(1, 2), new Hole(2, 3)]);
} */