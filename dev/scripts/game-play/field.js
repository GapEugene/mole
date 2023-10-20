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
