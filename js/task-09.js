
const bthChange = document.querySelector('.change-color');
const body = document.body;
const span = document.querySelector('.color');

bthChange.addEventListener('click', onBthClick);

function onBthClick() {
  span.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
}