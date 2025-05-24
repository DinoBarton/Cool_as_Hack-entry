import { Hero } from "./modules/hero.js";
import {
    drawPlayers,
    updatePlayerPosition,
    changeGravity,
} from "./modules/players.js";
import { drawMap, drawPlatforms } from "./modules/draw.js";
import { generateNewObstacles, Tick, Platform, Hole } from "./modules/generateMap.js";

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
  let obstacles = [];
  let platformTick = new Tick(60, 0.2);
  let holeTick = new Tick(10_000, 0.01);
  let speed = 500;

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
    } else {
      updatePlayerPosition(players,running);
      drawPlayers(ctx, players);
      changeGravity(players);
    }

    obstacles = generateNewObstacles(obstacles, speed, canvas, platformTick, holeTick);
    
    // console.log(obstacles)

    platformTick.tick += 1;
    holeTick.tick += 1;

    requestAnimationFrame(mainLoop);
  }
  mainLoop();
});
