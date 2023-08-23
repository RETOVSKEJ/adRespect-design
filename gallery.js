const modal = document.querySelector(".modal");
const modalOpener = Array.from(document.querySelectorAll(".modal-opener"));
const closeModal = document.querySelector(".close-button");
const prevPhotoBtn = document.getElementById("gallery-prev");
const nextPhotoBtn = document.getElementById("gallery-next");
const dotsDiv = document.getElementById("dots");
let photoIndex = 1;

populateDots();
function populateDots() {
  countImages = () => {
    const images = document.querySelectorAll(".gallery-photo");
    return images.length;
  };

  const MAX_DOTS = 9;

  for (let i = 0; i < countImages() || i < MAX_DOTS; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.onclick = () => currentPhoto(i + 1);
    dotsDiv.append(dot);
  }
}

modalOpener.forEach((img, index) => {
  img.style.cursor = "pointer";
  img.addEventListener("click", () => {
    modal.showModal();
    photoIndex = index + 1;
    showPhotos(photoIndex);
    console.log("test");
  });
});

closeModal.addEventListener("click", () => {
  modal.close();
  console.log("test");
});

prevPhotoBtn.onclick = () => plusPhotos(-1);
nextPhotoBtn.onclick = () => plusPhotos(1);

function plusPhotos(n) {
  showPhotos((photoIndex += n));
}

function currentPhoto(n) {
  showPhotos((photoIndex = n));
}

function showPhotos(n) {
  console.log("test2");
  var i;
  var photos = document.getElementsByClassName("gallery-photo");
  var dots = document.getElementsByClassName("dot");
  if (n > photos.length) {
    photoIndex = 1;
  }
  if (n < 1) {
    photoIndex = photos.length;
  }
  for (i = 0; i < photos.length; i++) {
    photos[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  photos[photoIndex - 1].style.display = "block";
  dots[photoIndex - 1].className += " active";
}
