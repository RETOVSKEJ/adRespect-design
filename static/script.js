const expandBtn = document.getElementById("expand-btn");
const grid = document.querySelector(".grid-masonry");

const masonry = new Masonry(grid, {
  itemSelector: ".grid-masonry-item",
  columnWidth: ".grid-masonry-sizer",
  gutter: ".grid-gutter-sizer",
  percentPosition: true,
  // fitWidth: true,
  stagger: 80,
});

window.addEventListener("load", () => {
  imagesLoaded(grid, () => {
    masonry.layout();
  });
});

const svgArrowVertical = expandBtn.querySelector("svg");

expandBtn.addEventListener("click", (ev) => {
  ev.currentTarget.classList.toggle("expanded");
  // normalnie byłby tu fetch, teraz tylko powtorze te same obrazki
  const MAX_PHOTOS = 9;

  if (ev.currentTarget.classList.contains("expanded")) {
    svgArrowVertical.classList.add("flip-vertical");
    ev.currentTarget.innerHTML = `Zwiń ${svgArrowVertical.outerHTML}`;
    const photosToAdd = Array.from(grid.children).forEach((child) => {
      if (child.classList.contains("grid-masonry-sizer")) return;
      const clone = child.cloneNode(true);
      grid.appendChild(clone);
      return clone;
    });
    masonry.appended(photosToAdd);
  } else {
    svgArrowVertical.classList.remove("flip-vertical");
    ev.currentTarget.innerHTML = `Rozwiń ${svgArrowVertical.outerHTML}`;
    const photosToDelete = grid.querySelectorAll(
      `.grid-masonry-item:nth-of-type(n+${MAX_PHOTOS + 2})`,
    );
    photosToDelete.forEach((elem) => elem.remove());
    masonry.remove(photosToDelete);
  }

  masonry.reloadItems();
  masonry.layout();
});

masonry.on("layoutComplete", function (items) {
  console.log(items.length);
});
