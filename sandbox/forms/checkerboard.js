function main() {
  createCheckerBoard();
}

function createCheckerBoard() {
  function getCell(x, y) {
    const id = `x${x}y${y}`;
    return document.getElementById(id);
  }
  
  function createCell(x, y) {
    const cell = document.createElement('div');
    cell.id = `x${x}y${y}`;
    cell.dataset.x = x;
    cell.dataset.y = y;
  
    cell.style.left = `${x * CELL_SIZE}px`;
    cell.style.top = `${y * CELL_SIZE}px`;
    cell.style.width = `${CELL_SIZE}px`;
    cell.style.height = `${CELL_SIZE}px`;
    cell.style.position = "absolute";
  
    if (!((y % 2 !== 0 && x % 2 !== 0) || (y % 2 === 0 && x % 2 === 0))) {
      cell.style.backgroundColor = "black";
    }
  
    return cell;
  }

  const CELL_SIZE = 40;
  const FIELD_SIZE = 8;
  const BORDER_WIDTH = 5;

  const board = document.getElementById("board");
  board.style.width = `${CELL_SIZE * FIELD_SIZE + BORDER_WIDTH * 2}px`;
  board.style.height = `${CELL_SIZE * FIELD_SIZE + BORDER_WIDTH * 2}px`;
  board.style.position = "relative";
  board.style.border = `${BORDER_WIDTH}px solid darkSlateGrey`;
  
  for (let x = 0; x < FIELD_SIZE; x++) {
    for (let y = 0; y < FIELD_SIZE; y++) {
      let cell = getCell(x, y);
      if (!cell) {
        cell = createCell(x, y);
        board.appendChild(cell);
      }
      cell.className = '';
    }
  }
}



window.addEventListener("load",main);