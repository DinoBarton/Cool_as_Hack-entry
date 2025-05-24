import { Hole } from "./generateMap.js";

export class Point {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export function collisions(player, obstacles, canvas) {
    if (topCollisons(player.y + player.gravity, canvas, player.length, player, obstacles)) {
      return true;
    }
  
    for (let i = 0; i < obstacles.length; i++) {
      const obstacle = obstacles[i];
      if (obstacle instanceof Hole) continue;
      if (entityCollision(player, obstacle)) {
        return true;
      }
    }
  
    return false;
}

function topCollisons(nextY, canvas, playerLength, player, obstacles) {
    const heightMin = canvas.height * 0.1;
    const heightMax = canvas.height * 0.9 - playerLength;
  
    // Check if the player is within a hole at this Y position
    const inHole = obstacles.some((obs) => {
      if (obs instanceof Hole) {
        const inX = player.x + player.length > obs.x && player.x < obs.x + obs.width;
        const inY = nextY + playerLength > obs.y && nextY < obs.y + obs.height;
        return inX && inY;
      }
      return false;
    });
  
    if (inHole) {
      return false; // allow passing through if player is inside a hole
    }
  
    // Restrict vertical movement if outside hole bounds
    return nextY < heightMin || nextY > heightMax;
  }

export function willCollide(player, players, dx = 0, dy = 0) {
    for (let i = 0; i < players.length; i++) {
      const other = players[i];
      if (player === other) continue;
  
      const future = {
        x: player.x + dx,
        y: player.y + dy,
        width: player.width,
        height: player.height,
      };
  
      if (entityCollision(future, other)) {
        return true;
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