const mole = document.getElementById('mole');

const setMoleInitialPosition = () => {
  mole.style.left = MOLE_INITIAL_X;
  mole.style.top = MOLE_INITIAL_Y;
};

const moveMole = () => {
  glitchInMole();
};

const glitchInMole = () => {
  lottiePlayer.removeAttribute('loop');
  lottiePlayer.load(MOLE_GLITCH_IN);

  if (state.cellMinedId !== state.cell.id) {
    lottiePlayer.addEventListener('complete', glitchOutMole);
  } else if (state.cellMinedId === state.cell.id) {
    state.flow = GAME_OVER;
    lottiePlayer.addEventListener('complete', deathIdleMole);
  }
};

const glitchOutMole = () => {
  mole.style.left = `${state.x}vw`;
  mole.style.top = `${state.y}vw`;

  lottiePlayer.load(MOLE_GLITCH_OUT);
  lottiePlayer.removeEventListener('complete', glitchOutMole);
  lottiePlayer.addEventListener('complete', idleMole);
  dropMine(state.cell);
};

const winJumpMole = () => {
  lottiePlayer.removeAttribute('loop');
  lottiePlayer.load(MOLE_WIN_JUMP);
  lottiePlayer.addEventListener('complete', idleMole);
  new Audio(WIN_SOUND_SRC).play();
};

const deathIdleMole = () => {
  mole.style.left = `${state.x}vw`;
  mole.style.top = `${state.y}vw`;

  getCellBackgroundImage().src = TILE_HOLE_SRC;
  setGameButton(RESTART);
  disableField();

  lottiePlayer.setAttribute('loop', true);
  lottiePlayer.load(MOLE_DEATH_IDLE);
  lottiePlayer.removeEventListener('complete', deathIdleMole);
  lottiePlayer.addEventListener('complete', idleMole);
  new Audio(DEATH_2_SOUND_SRC).play();
}

const idleMole = () => {
  lottiePlayer.load(MOLE_IDLE);
  lottiePlayer.removeEventListener('complete', idleMole);
  lottiePlayer.setAttribute('loop', true);

  if (state.rowNumber < 13 && state.flow === SELECT_TILE) {
    incrementRow();
    enableRow(state.rowNumber);
    selectCell();
  } else if (state.flow !== GAME_END) {
    state.flow = GAME_END;
    setGameButton(RESTART);
    disableField();
    winJumpMole();
  }
}

const dropMine = (cell) => {
  const img = document.createElement('img');
  img.setAttribute('class', 'field__cell-mine');
  img.setAttribute('src', MINE_SRC);
  img.setAttribute('alt', '');

  cell.appendChild(img);
};
