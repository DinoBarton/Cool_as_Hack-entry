import { input } from "./modules/input.js";
import { Hero } from "./modules/hero.js";
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let running = true;
  let playersNumber = 2;
  let names = ["Alice", "Bob"];
  let colours = ["#ff0000", "#00ff00"];
  let keys = ["A", "ArrowRight"];
  let players = [];
  for (let i = 0; i < playersNumber; i++) {
    players.push(new Hero(names[i], colours[i], keys[i], 50, 20, 0.5, 50));
  }
  function mainLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#202124";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (running) {
      drawPlayers();
    }

    requestAnimationFrame(mainLoop);
  }
  input();
  function drawPlayers() {
    players.forEach((player) => {
      ctx.fillStyle = player.colour;
      ctx.fillRect(player.x, player.y, player.length, player.length);
    });
  }
  mainLoop();
});
