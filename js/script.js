let formButton = document.querySelector('.form-button');
let searchForm = document.querySelector('.search-form');
let adults = searchForm.querySelector('.adults-item');
let adultsAmount = adults.querySelector('[name=number-of-adults]');
let children = searchForm.querySelector('.children-item');
let childrenAmount = children.querySelector('[name=number-of-children]');


formButton.onclick = function () {
  console.log('Кнопка нажата!');
  searchForm.classList.toggle('search-form-show');
  searchForm.classList.toggle('search-form-close');
};
