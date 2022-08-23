//* Задание 10 (выполнять не обязательно)

// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает 
// кнопку Создать, после чего рендерится коллекция.При нажатии 
// на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один
// параметр - число.Функция создает столько < div >,
//   сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//   тем самым удаляя все созданные элементы.


const numberBoxEl = document.querySelector('input[type="number"]');
const bgCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const containerBoxesEl = document.querySelector('#boxes');
const boxEl = document.querySelector('.div-item');

let originalSize = 30;
const nullSize = 0;

// console.log(numberBoxEl);
// console.log(bgCreateEl);
// console.log(btnDestroyEl);
// console.log(containerBoxesEl);


bgCreateEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click', destroyBoxes);
bgCreateEl.addEventListener('click', qwe);


function qwe() {
let amount = numberBoxEl.value;
// console.log('amount', amount); 
  return amount;
};  

function createBoxes(amount) {
  if (qwe() >= 1) {
   
    let amount = qwe();

      for (let i = 1; i <= amount; i += 1) {
        
        const boxEl = document.createElement("div");

        boxEl.style.width = `${originalSize}px`;
        boxEl.style.height = `${originalSize}px`;
        originalSize += 10;
        const randomColor = getRandomHexColor();
// console.log('randomColor', randomColor);
        boxEl.style.backgroundColor = randomColor;
// console.log(boxEl);
        containerBoxesEl.append(boxEl);
      } 
    
  } else
  return alert('Введите число!');
};
  
// function createBoxes(amount) {
  
//   for (let i = 0; i <= amount; i += 1) {
    
//   const boxEl = document.createElement("div");

//   boxEl.style.width = `${originalSize}px`;
//   boxEl.style.height = `${originalSize}px`;
//   originalSize += 10;
//   const randomColor = getRandomHexColor();
//   console.log('randomColor', randomColor);
//   boxEl.style.backgroundColor = randomColor;
//   console.log(boxEl);
//   containerBoxesEl.append(boxEl);
//   } 
// };

function destroyBoxes() {
  containerBoxesEl.innerHTML = '';
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//  function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }


//? Подскажите, пожалуйста, а то я не могу понять.После того как создались div и их 
//? удалили через destroyBoxes() при следующем создании(если не перезагрузить страницу)
//? div создаются на 10px больше чем последний из удаленных. Как это можно поправить?