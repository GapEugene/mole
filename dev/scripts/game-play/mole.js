const mole = document.getElementById('mole');

const setMoleInitialPosition = () => {
  mole.style.left = MOLE_INITIAL_X;
  mole.style.top = MOLE_INITIAL_Y;
};

const moveMole = (x, y) => {
  mole.style.left = `${x}vw`;
  mole.style.top = `${y}vw`;
};
