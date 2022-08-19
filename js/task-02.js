//? Задание 2

// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// В JavaScript есть массив строк.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй 
// метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const createIngredientsEl = elements => {
  return ingredients.map(elem => {
    const ingredientEl = document.createElement('li');
  //  console.log(elem);
    ingredientEl.textContent = elem;
    ingredientEl.classList.add('item');
  //  console.log(ingredientEl);
  
    return ingredientEl;
  });
};

const ingredientsListEl = document.querySelector('#ingredients');
console.log('Список куда вставлять li ', ingredientsListEl);

const listItemsEl = createIngredientsEl();
console.log('Пункты списка в виде массива элементов ', listItemsEl);
console.log('Пункты списка в виде отдельных значений ', ...listItemsEl);

ingredientsListEl.append(...listItemsEl);
