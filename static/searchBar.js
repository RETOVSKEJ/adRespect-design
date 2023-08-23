const searchBtn = document.getElementById("search-btn-mb");
const searchInput = document.getElementById("search-input-mb");
const searchBar = document.getElementById("search-bar-mb");
const searchCloseImg = document.getElementById("search-close-img");
const hamburgerBtn = document.getElementById("hamburger-btn");

// MOBILE searchbar listeners for animations

searchBtn.addEventListener("click", () => {
  searchInput.classList.toggle("active");
  searchBtn.classList.toggle("active");
  searchInput.focus();
});

searchBar.addEventListener("click", (ev) => {
  if (searchInput.classList.contains("active")) {
    searchInput.classList.toggle("active");
    searchBtn.classList.toggle("active");
    searchInput.blur();
    searchBtn.blur();
  }
});

if (window.innerWidth < 640) {
  searchBtn.addEventListener("focusin", (e) => {
    if (e.target === searchBtn) {
      hamburgerBtn.style.visibility = "hidden";
    }
  });

  searchInput.addEventListener("focusout", () => {
    hamburgerBtn.style.visibility = "visible";
  });
}
