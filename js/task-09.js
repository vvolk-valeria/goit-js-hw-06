//* Задание 9
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн 
//стиль при клике на button.change - color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const bgColorEl = document.querySelector('.color');
const btnChangeColorEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');

// console.log(bodyEl);
// console.log(bgColorEl);
// console.log(btnChangeColorEl);
// console.log(bgColorEl.textContent);

btnChangeColorEl.addEventListener('click', onBtnChangeColorClick);

function onBtnChangeColorClick(event) {
  const randomColor = getRandomHexColor();
  console.log('randomColor', randomColor);
  bgColorEl.textContent = randomColor;
  bodyEl.style.backgroundColor = randomColor;
};

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// };

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


