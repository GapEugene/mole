const selectCell = () => {
  const row = getCurrentRow();

  row.onclick = (event) => {
    if (row.classList.contains('field__row_active')) {
      disableRow();

      const cell = event.target;

      state.x = getVwCoords(Math.round(cell.getBoundingClientRect().left) + scene.scrollLeft);
      state.y = getVwCoords(Math.round(cell.getBoundingClientRect().top) + scene.scrollTop);

      moveMole();
      dropMine(cell);
    }
  };
};

const removeMines = () => {
  const mines = document.querySelectorAll('.field__cell-mine');

  mines.forEach((mine) => {
    mine.remove();
  });
};
