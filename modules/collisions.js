export class Point {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export function collisions(player, obstacles, canvas) {
    if (topCollisons(player.y + player.gravity, canvas, player.length)) {
        return true;
    } else {
        for(let i = 0; i < obstacles.length; i++) {
            const obstacle = obstacles[i];
            if (entityCollision(player, obstacle)) {
                return true;
            }
        }
    }
    return false;
}

function topCollisons(nextY, canvas, playerLength) {
    let heightMin = canvas.height * 0.1;
    let heightMax = canvas.height * 0.9 - playerLength;
    if (nextY >= heightMin && nextY <= heightMax) {
        return false;
    } else {
        return true;
    }
}

export function playerCollisions(players) {
    for (let i = 0; i < players.length; i++) {
        for (let j = 0; j < players.length; j++) {
            if (i != j) {
                if (entityCollision(players[i], players[j])) {
                    return true;
                }
            }
        }
    }
    return false;
}

export function entityCollision(entity1, entity2) {
    const isColliding = 
        entity1.x < entity2.x + entity2.width &&
        entity1.x + entity1.width > entity2.x &&
        entity1.y < entity2.y + entity2.height &&
        entity1.y + entity1.height > entity2.y;

    return isColliding;
}