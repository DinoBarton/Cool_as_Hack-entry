export function drawPlayers(players) {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    ctx.fillStyle = player.colour;
    ctx.fillRect(player.x, player.y, player.length, player.length);
  }
}

export function updatePlayerPosition(players) {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    player.x += player.velocityX;
    player.y += player.gravity;

    if (player.x < 0) {
      player.x = 0;
    }
    if (player.x + player.length > canvas.width) {
      player.x = canvas.width - player.length;
    }
    if (player.y < 0) {
      player.y = 0;
    }
    if (player.y + player.length > canvas.height) {
      player.y = canvas.height - player.length;
    }
  }
}
