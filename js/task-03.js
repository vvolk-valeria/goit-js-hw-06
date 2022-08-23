//* Задание 3

// Напиши скрипт для создания галереи изображений по массиву данных. 
// В HTML есть список ul.gallery.

// <ul class="gallery"></ul>

//   Используй массив объектов images для создания элементов < img > вложенных
// в < li >.Для создания разметки используй шаблонные строки и 
// метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами 
// через CSS классы.



const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryListEl = document.querySelector('.gallery');
console.log(galleryListEl);

const createImgEl = images.map((element) => {
  galleryListEl.insertAdjacentHTML('afterbegin', `<li class="gallery__item"><img src='${element.url}' alt='${element.alt}'></img></li>`);

});


//// const createImgEl = images => { 
////  return images.map(element => {
  
////     const li = document.createElement('li');
////     console.log(li);
////     const img = document.createElement('img');
////     console.log(img);
////    img.src = element.url;
////     img.alt = element.alt;
////     console.log(img);
////     console.log(li);
////   return;
////  });
 



////   for (const element of images) {

////     const li = document.createElement('li');
////     console.log(li);
////     const img = document.createElement('img');
////     console.log(img);
////    img.src = element.url;
////     img.alt = element.alt;
////     console.log(img);
////     console.log(li);
////     break;
////   };




//// const listItemsEl = createImgEl();

//// galleryListEl.append(...listItemsEl);


//// const element = {
////   url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
////   alt: 'White and Black Long Fur Cat',
//// };

//// const li = document.createElement('li');
////      console.log(li);
////      const img = document.createElement('img');

////         img.src = element.url;
//// img.alt = element.alt;
////     console.log(img);


