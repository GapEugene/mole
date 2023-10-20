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
      clearHoles();
      setHoles();
      enableField();
      enableRow(state.rowNumber);
      selectCell();

      break;
      
    case SELECT_TILE :
      state.flow = READY_TO_PLAY;
      state.rowNumber = 1;

      disableField();
      disableRow();
      setGameButton(PLAY);
      setMoleInitialPosition();
      removeMines();

      break;
    
    case GAME_END :
      state.flow = READY_TO_PLAY;
      state.rowNumber = 1;
      state.cellMinedId = null;

      setGameButton(PLAY);
      setMoleInitialPosition();
      resetCellBackgroundImage();
      removeMines();

      break;
    
    case GAME_OVER :
      state.flow = READY_TO_PLAY;
      state.rowNumber = 1;
      lottiePlayer.load(MOLE_IDLE);
      lottiePlayer.setAttribute('loop', true);
      state.cellMinedId = null;

      setGameButton(PLAY);
      setMoleInitialPosition();
      resetCellBackgroundImage();
      removeMines();
      
      lottiePlayer.removeEventListener('complete', glitchOutMole);
      lottiePlayer.removeEventListener('complete', deathIdleMole);
      lottiePlayer.removeEventListener('complete', idleMole);

      break;
  }
};
