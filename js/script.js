// Global variables

const container = document.querySelector('#container');

// Function to create a new grid

function newGrid(squaresPerSide) {
  for (i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
}

// Initial 16x16 grid

newGrid(16);



