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

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("number-of-adults");
  storage = localStorage.getItem("number-of-children");
} catch (err) {
  isStorageSupport = false;
}


formButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchForm.classList.remove("search-form-error");
  searchForm.classList.toggle('search-form-show');
  searchForm.classList.toggle('search-form-close');

  if (storage) {
    adultsAmount.value = storage;
    childrenAmount.value = storage;
  }

  arrival.focus();
});


searchForm.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adultsAmount.value || !childrenAmount.value) {
    evt.preventDefault();
    searchForm.classList.remove("search-form-error");
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add("search-form-error");
  } else {
      if (isStorageSupport) {
        localStorage.setItem("number-of-children", childrenAmount.value);
      }
      if (isStorageSupport) {
        localStorage.setItem("number-of-adults", adultsAmount.value);
      }
    }
});
