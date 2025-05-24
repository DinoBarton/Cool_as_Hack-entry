export function input(players) {
    document.addEventListener("keydown", (event) => {
    if (event.key === "A" || event.key === "a" && players[0]) {
      console.log("key A pressed");
      players[0].gravity *= -1; 
    }
    if (event.key === "ArrowRight" && players[1]) {
      console.log("ArrowRight pressed");
      players[1].gravity *= -1; 
    }
    if (event.key === "F" || event.key === "f" && players[2]) {
      console.log("key F pressed");
      players[2].gravity *= -1; 
    }
    if (event.key === "J" || event.key === "j" && players[3]) {
      console.log("key J pressed");
      players[3].gravity *= -1; 
    }
    if (event.key === "L"|| event.key === "l" && players[4]) {
      console.log("key L pressed");
      players[4].gravity *= -1; 
    }
  });
}