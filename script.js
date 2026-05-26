function getRandNum(min, max) {
  // Generate random number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
      //cell.textContent = `${row + 1}`;
      container.appendChild(cell);
    }
  }

  const cells = container.querySelectorAll("div");
  cells.forEach((cell) => {
    let opacityValue = 0;
    cell.style.opacity = `${opacityValue}%`;

    cell.addEventListener("mouseenter", () => {
      // Add pixelated trail effect with random color effect
      const randRed = getRandNum(0, 255);
      const randGreen = getRandNum(0, 255);
      const randBlue = getRandNum(0, 255);

      cell.style.backgroundColor = `rgb(${randRed}, ${randGreen}, ${randBlue})`;

      // Add darkening effect with every interaction
      if (opacityValue >= 100) return;
      opacityValue += 10;
      cell.style.opacity = `${opacityValue}%`;
    });
  });
}

// Create default 16 x 16 grid
const container = document.getElementById("container");
container.style.width = "960px";
container.style.height = "960px";

generateGrid(16);

// User prompt
const body = document.querySelector("body");
const btnPrompt = document.createElement("button");
btnPrompt.textContent = "Chooose grid size";

body.insertBefore(btnPrompt, container);

btnPrompt.addEventListener("click", () => {
  const cells = container.querySelectorAll("div");

  const numCells = +prompt(
    "Type the number of squares you would like per side (max. 100):",
  );

  if (numCells > 0 && numCells <= 100) {
    // Remove warning message if one already exists
    const retryExists = document.getElementsByClassName("warning");
    if (retryExists.length > 0) {
      Array.from(retryExists).forEach((retryMsg) => retryMsg.remove());
    }

    cells.forEach((cell) => cell.remove());
    generateGrid(numCells);
  } else {
    // Make sure another warning message is not generated (if one already exists)
    const retryExists = document.getElementsByClassName("warning");
    if (retryExists.length > 0) return;

    // If there's no warning message, generate one
    const retryStrong = document.createElement("strong");
    retryStrong.classList.add("warning");
    retryStrong.textContent = "Please choose a valid grid size (1 - 100).";

    body.insertBefore(retryStrong, container);
  }
});
