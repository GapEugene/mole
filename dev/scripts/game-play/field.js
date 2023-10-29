const field = document.getElementById('field');

const enableField = () => {
  field.classList.add('field_select');
};

const disableField = () => {
  field.classList.remove('field_select');
};

const setHoles = () => {
  for (let i = 0; i < 13; i++) {
    state.holes.push(`${i + 1}${getRandomIntFromInterval(1, 5)}`);
  }

  console.log(state.holes);
};

const clearHoles = () => {
  state.holes = [];
};

const randomizeField = () => {
  const cellImages = document.querySelectorAll('.field__cell-background-image');

  cellImages.forEach((cellImage) => {
    cellImage.setAttribute('src', `./assets/images/level/tile-${getRandomIntFromInterval(1, 3)}.png`);
  });
};

randomizeField();
