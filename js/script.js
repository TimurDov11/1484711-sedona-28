let formButton = document.querySelector('.form-button');
let searchForm = document.querySelector('.search-form');
let arrival = searchForm.querySelector('.arrival-date');
let arrivalDate = arrival.querySelector('[name=check-in-date]');
let departure = searchForm.querySelector('.departure-date');
let departureDate = departure.querySelector('[name=check-out-date]');
let adults = searchForm.querySelector('.adults-item');
let adultsAmount = adults.querySelector('.adults');
let children = searchForm.querySelector('.children-item');
let childrenAmount = children.querySelector('.children');

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("number-of-adults");
} catch (err) {
  isStorageSupport = false;
}


formButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log('Кнопка нажата!');
  searchForm.classList.toggle('search-form-show');
  searchForm.classList.toggle('search-form-close');

  if (storage) {
    adultsAmount.value = storage;
  }

  arrival.focus();
});


searchForm.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value || !!adultsAmount.value || !!childrenAmount.value) {
    evt.preventDefault();
    searchForm.classList.remove("search-form-errorr");
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add("search-form-error");
  } else {
  localStorage.setItem("number-of-adults", adultsAmount.value);
  localStorage.setItem("number-of-children", childrenAmount.value);
  }
});

/*searchForm.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value) {
    evt.preventDefault();
    console.log("Нужно ввести даты заезда и выезда, количество взрослых и детей");
} else {
  localStorage.setItem("arrivalDate", arrivalDate.value);
  localStorage.setItem("departureDate", departureDate.value);
});*/
