//* Задание 8

// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
//     что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,
//     где имя поля будет именем свойства, а значение поля - значением свойства.
//     Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы 
// методом reset.


const formEl = document.querySelector('.login-form');
const inputEmailEl = document.querySelector('input[type="email"]');
const inputPasswordEl = document.querySelector('input[type="password"]');
const btnSubmitEl = document.querySelector('button[type="submit"]');
// console.log(inputEmailEl);
// console.log(inputPasswordEl);
// console.log(btnSubmitEl);


  formEl.addEventListener('submit', onFormSubmit);


 function onFormSubmit(event) { 
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;
     
     if (formElements.email.value === "" || formElements.password.value === "") {
          console.log('!!');
        return alert('Warning! Все поля должны быть заполнены!');
     }

        const formData = {
            mail, password
        };
     
     console.log(formData);   
    
     formEl.reset();
     
//      const formaData = new FormData(formEl);
//      console.log(formaData);
     
//      formaData.forEach((value, name) => {
//     console.log("onFormSubmit -> name", name);
//     console.log("onFormSubmit -> value", value);
//   });
     
};










