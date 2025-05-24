const BORDER_PERCENT = 0.1;

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

export function drawObstacles() {
    
}