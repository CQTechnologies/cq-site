
let slideIndex = 0;

// show|hide slider onClick event
function toggleSlider(n) {
  let slider = document.getElementById("slider-images-container");
  if(slider !== null) {
    slider.style = "display:" + n + ";";
  }
}

const dt = [
  `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg`,
  `https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg`,
  `https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830__340.jpg`,
  `./../img/pricing-table.png`,
]
function showSlides(n) {
  console.log(dt.length, n)
  const index = slideIndex + n;
  if (index > dt.length -1) {slideIndex = 0}
  else if (index < 0) {slideIndex = dt.length -1}
  else slideIndex = index;
  
  let currentSlide = document.getElementById("current-slide");
  let slideNumber = document.getElementById("slide-number");
  let slideText = document.getElementById("slide-text");
  currentSlide.src = dt[slideIndex];
  slideNumber.innerHTML = (slideIndex + 1) + " / " + dt.length;
  slideText.innerHTML = (slideIndex + 1) + " / " + dt.length;
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("slider-mySlides");
  let slider_dots = document.getElementsByClassName("slider-dots");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slider_dots.length; i++) {
    slider_dots[i].className = slider_dots[i].className.replace(" slider-active-slide", "");
  }
  slides[slideIndex-1].style.display = "block";
  slider_dots[slideIndex-1].className += " slider-active-slide";
}