const prevBtn = document.getElementById("carousel-prev");
const nextBtn = document.getElementById("carousel-next");
const carousel = document.getElementById("carousel");

prevBtn.onclick = () => plusSlides(-1);
nextBtn.onclick = () => plusSlides(1);

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  if (n === slides.length) {
    // slideIndex = 1;
    nextBtn.setAttribute("disabled", true);
  } else if (n === 1) {
    prevBtn.setAttribute("disabled", true);
    // slideIndex = slides.length;
  } else {
    prevBtn.removeAttribute("disabled");
    nextBtn.removeAttribute("disabled");
  }
  carousel.style.transform = `translateX(${(slideIndex - 1) * -100}%)`;
  // slides[i].style.display = "absolute";
}
