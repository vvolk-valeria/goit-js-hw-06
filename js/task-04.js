//* Задание 4

// Счетчик состоит из спана и кнопок, которые, при клике, должны
// увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

//     Создай переменную counterValue в которой будет храниться текущее
// значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или
// уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


const counterValueEl = document.querySelector('#value');
const buttonPlusEl = document.querySelector('button[data-action="increment"]');
const buttonMinusEl = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;


// buttonPlusEl.addEventListener('click', () => { counterValue += 1;
//     counterValueEl.textContent = counterValue; });
// buttonMinusEl.addEventListener('click', () => {counterValue -= 1;
//     counterValueEl.textContent = counterValue;});

buttonPlusEl.addEventListener('click', onPlusButtonClick);
buttonMinusEl.addEventListener('click', onMinusButtonClick);


function onPlusButtonClick() {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
};

function onMinusButtonClick() {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
};
