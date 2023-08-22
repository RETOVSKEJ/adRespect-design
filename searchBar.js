const searchBtn = document.getElementById("search-btn-mb");
const searchInput = document.getElementById("search-input-mb");
const searchBar = document.getElementById("search-bar-mb");
const hamburgerBtn = document.getElementById("hamburger-btn");

searchBar.addEventListener("click", (e) => {
  searchInput.focus();
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
