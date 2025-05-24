export function input() {
    document.addEventListener("keydown", (event) => {
    if (event.key === "A" || event.key === "a") {
      console.log("key A pressed");
    }
    if (event.key === "ArrowRight") {
      console.log("ArrowRight pressed");
    }
    if (event.key === "F" || event.key === "f") {
      console.log("key F pressed");
    }
    if (event.key === "J" || event.key === "j") {
      console.log("key J pressed");
    }
    if (event.key === "L"|| event.key === "l") {
      console.log("key L pressed");
    }
  });
}