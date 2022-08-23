//* Задание 6

// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
//     проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, 
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, 
// которые мы уже добавили в исходные файлы задания.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputEl = document.querySelector('#validation-input');
const validNumberLength = inputEl.dataset.length;
// console.log(inputEl);
// console.log(validNumberLength);


// inputEl.addEventListener('blur', onInputValid);
inputEl.addEventListener('blur', onInputInValid);
inputEl.addEventListener('input', onRemoveClass);
inputEl.addEventListener('blur', onRemoveClass);


function onRemoveClass(event) {
    if (event.currentTarget.value.length === 0) {
        inputEl.classList.remove("invalid", "valid");
        // console.log('remove');
   }
};


function onInputInValid(event) {
    if (event.currentTarget.value.length < validNumberLength || event.currentTarget.value.length > validNumberLength) {
        inputEl.classList.add("invalid");
        // console.log('invalid');

    } else  inputEl.classList.add("valid");
};


// function onInputValid(event) {
//     if (event.currentTarget.value.length === validNumberLength) {
//         console.log('validNumberLength');
//         inputEl.classList.add("valid");
//         console.log('valid');
//     //    inputEl.style.borderColor = "#4caf50";
//     }
// };

//? Обьясните, пожалуйста, почему в коде когда 
//? идет "event.currentTarget.value.length === validNumberLength" у меня не действует
//? условие, а когда ставишь "event.currentTarget.value.length === 6", оно работает ?
    
