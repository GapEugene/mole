const scene = document.getElementById('scene');

let isMouseDown = false;

let startX = 0;
let startY = 0;

let scrollTop = 0;
let scrollLeft = 0;

scene.addEventListener('mousedown', (event) => {
  isMouseDown = true;

  startX = event.pageX - scene.offsetLeft;
  startY = event.pageY - scene.offsetTop;

  scrollLeft = scene.scrollLeft;
  scrollTop = scene.scrollTop;
});

scene.addEventListener('mouseup', () => isMouseDown = false);

scene.addEventListener('mouseleave', () => isMouseDown = false);

scene.addEventListener('mousemove', (event) => {
  if (!isMouseDown) return;

  const x = event.pageX - scene.offsetLeft;
  const shiftX = (x - startX) * 2;

  const y = event.pageY - scene.offsetTop;
  const shiftY = (y - startY) * 2;

  scene.scrollLeft = scrollLeft - shiftX;
  scene.scrollTop = scrollTop - shiftY;
});

const targetObject = document.getElementById('mole');

scene.scrollTop = targetObject.getBoundingClientRect().top - targetObject.getBoundingClientRect().height;
