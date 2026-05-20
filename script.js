// Create 16 x 16 grid
const container = document.getElementById("container");

for (let column = 0; column < 16; column++) {
  for (let row = 0; row < 16; row++) {
    const cell = document.createElement("div");
    container.appendChild(cell);
  }
}

// Hover effect
const cells = container.querySelectorAll("div");

cells.forEach((cell) => {
  cell.addEventListener("mouseenter", () => {
    cell.style.backgroundColor = "yellow";
  });
});

// User Prompt
const body = document.querySelector("body");
const btnPrompt = document.createElement("button");
btnPrompt.textContent = "Chooose grid size";

body.insertBefore(btnPrompt, body.firstChild);

btnPrompt.addEventListener("click", () => {
  const numCells = +prompt(
    "Type the number of squares you would like per side:",
  );
  cells.forEach((cell) => cell.remove());
});
