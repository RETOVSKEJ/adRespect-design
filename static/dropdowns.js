const searchResultsArr = Array.from(
  document.getElementsByClassName("search-results"),
);
const dropdownsArr = Array.from(
  document.getElementsByClassName("dropdown-offer"),
);

const dropdownOfferMobile = document.getElementById("dropdown-offer-mobile");

// prevents losing focus after clicking on result

searchResultsArr.forEach((elem) => {
  elem.addEventListener("pointerdown", (ev) => {
    ev.preventDefault();
  });
});

dropdownsArr.forEach((elem) => {
  elem.addEventListener("pointerdown", (ev) => {
    ev.preventDefault();
  });
});
