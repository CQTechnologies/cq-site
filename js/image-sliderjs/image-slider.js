
let CURRENT_SLIDE_INDEX = 0;
let addedSlides = []

// show|hide slider onClick event
function toggleSlider(displayChange, slides) {
  let imageSlider = document.getElementById("slider-images-container");
  if(imageSlider !== undefined && imageSlider !== null) {
    imageSlider.style = "display:" + displayChange + ";";
    if(displayChange === "block") {
      addedSlides = slides;
      if(slides && slides.length > 0) document.getElementById("current-slide").src = slides[0];
    }
  }
}

function showSlides(slideNo) {
  const copiedSlideIndex = CURRENT_SLIDE_INDEX + slideNo;
  
  if (copiedSlideIndex > addedSlides.length -1) {CURRENT_SLIDE_INDEX = 0}
  else if (copiedSlideIndex < 0) {CURRENT_SLIDE_INDEX = addedSlides.length -1}
  else CURRENT_SLIDE_INDEX = copiedSlideIndex;
  
  let currentSlide = document.getElementById("current-slide");
  let slideNumber = document.getElementById("slide-number");
  let slideText = document.getElementById("slide-text");
  currentSlide.src = addedSlides[CURRENT_SLIDE_INDEX];
  slideNumber.innerHTML = (CURRENT_SLIDE_INDEX + 1) + " / " + addedSlides.length;
  slideText.innerHTML = ""; // "Images descriptions can be added here.";
}
