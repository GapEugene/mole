const bet = document.getElementById('bet');
const betValueSetup = document.getElementById('bet-value-setup');
const betValueNode = document.getElementById('bet-value');
let betValue = new Number(betValueNode.innerText);
const betDecrement = document.getElementById('bet-decrement');
const betIncrement = document.getElementById('bet-increment');
const betTrigger = document.getElementById('bet-trigger');
const betSubmit = document.getElementById('bet-submit');

betTrigger.onclick = () => {
  bet.classList.add('bet_display');
};

betSubmit.onclick = () => {
  bet.classList.remove('bet_display');
  betValueSetup.innerText = betValue;
};

betDecrement.onclick = () => {
  if (betValue > 1) {
    betValue--;
    betValueNode.innerText = betValue;
  }
};

betIncrement.onclick = () => {
  betValue++
  betValueNode.innerText = betValue;
};
