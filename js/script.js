let formButton = document.querySelector('.form-button');
let searchForm = document.querySelector('.search-form');

formButton.onclick = function () {
  console.log('Кнопка нажата!');
  searchForm.classList.toggle('search-form-show');
  searchForm.classList.toggle('search-form-close');
};
