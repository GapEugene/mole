//=require ./constants.js
//=require ./state.js

//=require ./button.js

//=require ./field.js
//=require ./row.js
//=require ./cell.js

//=require ./mole.js

gameButton.onclick = (event) => {
  event.preventDefault();

  switch (state.flow) {
    case READY_TO_PLAY :
      state.flow = SELECT_TILE;
      setGameButton(COLLECT);
      enableField();
      enableRow(state.rowNumber);
      selectCell();

      break;
      
    case SELECT_TILE :
      state.flow = READY_TO_PLAY;
      disableField();
      disableRow();
      setGameButton(PLAY);
      setMoleInitialPosition();

      break;
    
    case GAME_END :
      state.flow = READY_TO_PLAY;
      state.rowNumber = 1;
      setGameButton(PLAY);
      setMoleInitialPosition();
      break;
  }
};
