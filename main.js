import { Hero } from "./modules/hero.js";
import {
  drawPlayers,
  updatePlayerPosition,
  changeGravity,
} from "./modules/players.js";
import { drawMap, drawPlatforms } from "./modules/draw.js";
import {
  generateNewObstacles,
  Tick,
  Platform,
  Hole,
} from "./modules/generateMap.js";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let running = false;
  let playersNumber = 2;
  let names = ["Alice", "Bob"];
  let colours = ["#ff0000", "#00ff00"];
  let keys = ["A", "ArrowRight"];
  let players = [];
  let obstacles = [];
  let platformTick = new Tick(60, 0.2);
  let holeTick = new Tick(60, 0.01);
  let speed = 500;
  let startTime = null;

  for (let i = 0; i < playersNumber; i++) {
    players.push(
      new Hero(
        names[i],
        colours[i],
        keys[i],
        170,
        canvas.height / (playersNumber - i) - 300,
        5,
        35
      )
    );
  }
  function mainLoop() {
    drawMap(ctx);
    drawPlatforms(ctx, obstacles);

    if (!running) {
      drawPlayers(players);
      drawTime();
    } else {
      obstacles = generateNewObstacles(
        obstacles,
        speed,
        canvas,
        platformTick,
        holeTick
      );

      platformTick.tick += 1;
      holeTick.tick += 1;
      updatePlayerPosition(players, obstacles, canvas);
      drawPlayers(ctx, players);
      changeGravity(players);
    }

    requestAnimationFrame(mainLoop);
  }
  function startGame() {
    if (!running) { 
      running = true;
      startTime = new Date().getTime();
    }
  }
  startGame();
  window.onkeydown = (e) => {
    keys[e.key] = true;
    if (e.key === " " && !running && !spacePressed) {
      spacePressed = true;
      startGame();
    }
  };
  function drawTime() {
    ctx.fillStyle = "white";
    ctx.font = "bold 20px serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "top";

    let currentTime = new Date().getTime();
    let elapsedTime = startTime
      ? ((currentTime - startTime) / 1000).toFixed(1)
      : "0.0";
    let date = new Date().toLocaleTimeString();
    ctx.fillText(`Current Time: ${date}`, canvas.width - 20, 20);
    ctx.fillText(`Time Alive: ${elapsedTime}s`, canvas.width - 20, 50);
  }
  mainLoop();
});
