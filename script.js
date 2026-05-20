function generateGrid(numCells) {
  // Set initial grid size
  container.style.width = `${numCells * 70 + 50}px`;
  container.style.height = `${numCells * 70}px`;

  // Generate Grid
  for (let column = 0; column < numCells; column++) {
    for (let row = 0; row < numCells; row++) {
      const cell = document.createElement("div");
      cell.textContent = `${row + 1}`;
      container.appendChild(cell);
    }
  }

  const cells = container.querySelectorAll("div");

  // Add pixelated trail effect
  cells.forEach((c) => {
    c.addEventListener("mouseenter", () => {
      c.style.backgroundColor = "yellow";
    });
  });
}

// Create default 16 x 16 grid
const container = document.getElementById("container");
generateGrid(16);

// User Prompt
const body = document.querySelector("body");
const btnPrompt = document.createElement("button");
btnPrompt.textContent = "Chooose grid size";

body.insertBefore(btnPrompt, body.firstChild);

btnPrompt.addEventListener("click", () => {
  const numCells = +prompt(
    "Type the number of squares you would like per side:",
  );
  const cells = container.querySelectorAll("div");

  cells.forEach((cell) => cell.remove()); // Fix
  generateGrid(numCells);
});
