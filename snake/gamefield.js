import { CELL_SIZE_PX, FIELD_WIDTH, FIELD_HEIGHT } from './config.js';

export function createCell(x, y) {
  // add element
  const cell = document.createElement('div');
  cell.id = `x${x}y${y}`;

  cell.style.left = `${x * CELL_SIZE_PX}px`;
  cell.style.top = `${y * CELL_SIZE_PX}px`;
  cell.style.width = `${CELL_SIZE_PX}px`;
  cell.style.height = `${CELL_SIZE_PX}px`;

  return cell;
}

function fieldBorders(x, y, FIELD_WIDTH, FIELD_HEIGHT) {
  if (y === 0 || x === 0 || y === FIELD_HEIGHT-1 || x === FIELD_WIDTH-1) {
    const element = document.getElementById(`x${x}y${y}`);
    element.classList.add("wall");
  }
}

export function initGamefield() {
  const gameField = document.getElementById('gamefield');

  gameField.style.width = `${CELL_SIZE_PX * FIELD_WIDTH}px`;
  gameField.style.height = `${CELL_SIZE_PX * FIELD_HEIGHT}px`;

  for (let x = 0; x < FIELD_WIDTH; x++) {
    for (let y = 0; y < FIELD_HEIGHT; y++) {
      const cell = createCell(x, y);
      gameField.appendChild(cell);
      fieldBorders(x, y, FIELD_WIDTH, FIELD_HEIGHT);
    }
  }
}