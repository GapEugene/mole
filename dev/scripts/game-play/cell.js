const selectCell = () => {
  const row = getCurrentRow();

  row.onclick = (event) => {
    if (row.classList.contains('field__row_active')) {
      const cell = event.target;
  
      const x = getVwCoords(Math.round(cell.getBoundingClientRect().left) + scene.scrollLeft);
      const y = getVwCoords(Math.round(cell.getBoundingClientRect().top) + scene.scrollTop);
      
      moveMole(x, y);
      disableRow();

      if (state.rowNumber < 13) {
        incrementRow();
        enableRow(state.rowNumber);
        selectCell();
      } else {
        state.flow = GAME_END;
        setGameButton(RESTART);
        disableField();
      }
    }
  };
};
