const selectCell = () => {
  const row = getCurrentRow();

  row.onclick = (event) => {
    if (row.classList.contains('field__row_active')) {
      disableRow();

      const cell = event.target;
      const cellMinedId = `cell-${state.holes[state.rowNumber - 1]}`;

      if (state.cell) {
        state.cellPrevious = state.cell;
      }

      state.cell = cell;
      state.cellMinedId = cellMinedId;
      state.x = getVwCoords(Math.round(cell.getBoundingClientRect().left) + scene.scrollLeft);
      state.y = getVwCoords(Math.round(cell.getBoundingClientRect().top) + scene.scrollTop);

      moveMole();
    }
  };
};

const removeMines = () => {
  const mines = document.querySelectorAll('.field__cell-mine');

  mines.forEach((mine) => {
    mine.remove();
  });
};

const getCellBackgroundImage = (cell) => {
  return cell.querySelector('.field__cell-background-image');
};

const resetCellBackgroundImage = () => {
  const images = document.querySelectorAll('[src*="tile-hole"]');

  images.forEach((image) => {
    image.src = TILE_1_SRC;
  });
};

const showHoles = () => {
  state.holes.forEach((hole) => {
    const cell = document.getElementById(`cell-${hole}`);
    getCellBackgroundImage(cell).src = TILE_HOLE_SRC;
  });
};
