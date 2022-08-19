//? Задание 1
// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories,
//то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories,
//найдет и выведет в консоль текст заголовка элемента(тега < h2 >)
//и количество элементов в категории(всех вложенных в него < li >).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const listOfItemCategoriesEl = document.querySelector('#categories')
const itemCategoriesEl = listOfItemCategoriesEl.children;
console.log('Number of categories:', itemCategoriesEl.length);


const sublistCategoriesEl = document.querySelectorAll('.item');
sublistCategoriesEl.forEach(sublist => {
    console.log('Category:', sublist.firstElementChild.textContent);
    console.log('Elements:', sublist.lastElementChild.children.length);
})

