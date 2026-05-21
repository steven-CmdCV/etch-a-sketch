function generateGrid(numCells) {
  // Set individual cell size
  const cellWidth = +container.style.width.replace("px", "") / numCells;
  const cellHeight = +container.style.height.replace("px", "") / numCells;

  // Generate grid
  for (let column = 0; column < numCells; column++) {
    for (let row = 0; row < numCells; row++) {
      const cell = document.createElement("div");
      cell.style.width = `${cellWidth}px`;
      cell.style.height = `${cellHeight}px`;
      cell.textContent = `${row + 1}`;
      container.appendChild(cell);
    }
  }

  // Add pixelated trail effect
  const cells = container.querySelectorAll("div");
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
      cell.style.backgroundColor = "yellow";
    });
  });
}

// Create default 16 x 16 grid
const container = document.getElementById("container");
container.style.width = "960px";
container.style.height = "960px";

generateGrid(16);

// User Prompt
const body = document.querySelector("body");
const btnPrompt = document.createElement("button");
btnPrompt.textContent = "Chooose grid size";

body.insertBefore(btnPrompt, body.firstChild);

btnPrompt.addEventListener("click", () => {
  const numCells = +prompt(
    "Type the number of squares you would like per side (max. 100):",
  );
  const cells = container.querySelectorAll("div");

  cells.forEach((cell) => cell.remove());
  generateGrid(numCells);
});
