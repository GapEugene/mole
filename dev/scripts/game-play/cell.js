const selectCell = () => {
  const row = getCurrentRow();

  row.onclick = (event) => {
    if (row.classList.contains('field__row_active')) {
      disableRow();

      const cell = event.target;
      const cellMinedId = `cell-${state.holes[state.rowNumber - 1]}`;

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

const getCellBackgroundImage = () => {
  return state.cell.querySelector('.field__cell-background-image');
};

const resetCellBackgroundImage = () => {
  const images = document.querySelectorAll('[src*="tile-hole"]');

  images.forEach((image) => {
    image.src = TILE_1_SRC;
  });
};
