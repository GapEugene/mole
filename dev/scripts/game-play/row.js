const enableRow = (rowNumber) => {
  const row = document.getElementById(`row-${rowNumber}`);
  row.classList.add('field__row_active');
};

const disableRow = () => {
  const row = document.querySelector('.field__row_active');
  row.classList.remove('field__row_active');
};

const getCurrentRow = () => document.querySelector('.field__row_active');

const incrementRow = () => {
  state.rowNumber++;
};
