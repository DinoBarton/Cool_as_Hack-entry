import { collisions, playerCollisions } from "./collisions.js";

export function drawPlayers(ctx, players) {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    ctx.fillStyle = player.colour;
    ctx.fillRect(player.x, player.y, player.length, player.length);
  }
}

export function updatePlayerPosition(players, obstacles, canvas, elapsedTime) {
  let playerCollision = playerCollisions(players);
  players.forEach((player) => {
    if (!collisions(player, obstacles, canvas) && !playerCollision) {
      player.y += player.gravity;
    }
  });

  for (let i = 0; i < players.length; i++) {
    const player = players[i];

    if (player.x < 0) {
      alert(`${player.name}` + ` lost\nSurvived Time: ${elapsedTime} seconds`);
    }
    if (player.x + player.length > canvas.width) {
      alert(`${player.name}` + ` lost\nSurvived Time: ${elapsedTime} seconds`);
    }
    if (player.y < 0) {
      alert(`${player.name}` + ` lost\nSurvived Time: ${elapsedTime} seconds`);
    }
    if (player.y + player.length > canvas.height) {
      alert(`${player.name}` + ` lost\nSurvived Time: ${elapsedTime} seconds`);
    }
  }
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
