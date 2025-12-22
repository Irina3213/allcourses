const PLAYFIELD_COLUMNS = 10;
const PLAYFIELD_ROWS = 20;
const TETROMINO_NAMES = ["o"];

function convertPositionToIndex(row, column) {
  return row * PLAYFIELD_COLUMNS + column;
}

let playfield;
let tetromino;

function generatePlayField() {
  for (let i = 0; i < PLAYFIELD_ROWS * PLAYFIELD_COLUMNS; i++) {
    const div = document.createElement(`div`);
    document.querySelector(".grid").append(div);
  }

  playfield = new Array(PLAYFIELD_ROWS)
    .fill()
    .map(() => new Array(PLAYFIELD_COLUMNS).fill(0));
  //   console.log(playfield);
}

function generateTetromino() {
  tetromino = {
    name: TETROMINO_NAMES[0],
    row: 3,
    column: 5,
  };
}

generateTetromino();
generatePlayField();
const cells = document.querySelectorAll(".grid div");

function drawPlayField() {
  cells[15].classList.add("o");
}

function drawTetromino() {
  for (let row = 0; row < 1; row++) {
    for (let column = 0; column < 1; column++) {
      const cellIndex = convertPositionToIndex(
        tetromino.row + row,
        tetromino.column + column
      );
    }
  }
}
drawPlayField();
