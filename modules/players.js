import { collisions, willCollide } from "./collisions.js";

export function drawPlayers(ctx, players) {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    ctx.fillStyle = player.colour;
    ctx.fillRect(player.x, player.y, player.length, player.length);
  }
}

export function updatePlayerPosition(players, obstacles, canvas, elapsedTime) {
  const topBound = canvas.height * 0.1;
  const bottomBound = canvas.height * 0.9;

  players.forEach((player) => {
    const gravityStep = player.gravity;

    const hitObstacle = collisions(player, obstacles, canvas);
    const hitPlayer = willCollide(player, players, 0, gravityStep);

    if (!hitObstacle && !hitPlayer) {
      player.y += gravityStep;
    }

    // Check if player is fully out of vertical safe zone
    if (
      player.y + player.length < topBound || // fully above top bound
      player.y > bottomBound                  // fully below bottom bound
    ) {
      alert(`PLAYER ${player.name} lost`);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      // Or alert here if you want:
      // alert(`${player.name} lost\nSurvived Time: ${elapsedTime} seconds`);
    }
  });
}


export function changeGravity(players) {
  let keys = {};

  window.onkeydown = (e) => {
    keys[e.key] = true;
  };

  window.onkeyup = (e) => {
    keys[e.key] = false;
  };
  function updateGravity() {
    if ((keys["A"] || keys["a"]) && players[0]) {
      players[0].gravity *= -1;
      keys["A"] = false;
      keys["a"] = false;
    }
    if (keys["ArrowRight"] && players[1]) {
      players[1].gravity *= -1;
      keys["ArrowRight"] = false;
    }
    if ((keys["F"] || keys["f"]) && players[2]) {
      players[2].gravity *= -1;
      keys["F"] = false;
      keys["f"] = false;
    }
    if ((keys["J"] || keys["j"]) && players[3]) {
      players[3].gravity *= -1;
      keys["J"] = false;
      keys["j"] = false;
    }
    if ((keys["L"] || keys["l"]) && players[4]) {
      players[4].gravity *= -1;
      keys["L"] = false;
      keys["l"] = false;
    }

    requestAnimationFrame(updateGravity);
  }

  updateGravity();
}
