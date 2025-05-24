import { Tick, Platform, Hole } from "./generateMap.js";

const BORDER_PERCENT = 0.10;

export function drawMap(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#202124";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 3;
    ctx.strokeStyle = "white";

    ctx.beginPath();

    ctx.moveTo(0, canvas.height * BORDER_PERCENT); 
    ctx.lineTo(canvas.width, canvas.height * BORDER_PERCENT); 
    ctx.stroke();

    ctx.moveTo(0, canvas.height * (1 - BORDER_PERCENT)); 
    ctx.lineTo(canvas.width, canvas.height * (1 - BORDER_PERCENT)); 
    ctx.stroke();
}

export function drawPlatforms(ctx, obstacles) {
    for (let i = 0; i < obstacles.length; i++) {
        const obj = obstacles[i];
        
        if (obj instanceof Platform) {
            ctx.fillStyle = obj.color;
            ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
        }
    }
}

export function drawHoles(ctx, obstacles) {
    for (let i = 0; i < obstacles.length; i++) {
        const obj = obstacles[i];
        
        if (obj instanceof Hole) {
            ctx.fillStyle = obj.color;
            ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
        }
    }
}