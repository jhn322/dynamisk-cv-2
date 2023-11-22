// External JavaScript from CodePen below 

// ##########################################
// #      Externt script från CodePen.      #
// https://codepen.io/berikiushi/pen/grygxb #
// ##########################################

/* Slideshow JavaScript */
var slideIndex = 1;
showSlides(slideIndex);

// Next previous buttons
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Slideshow indicator
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Show specific images
function showSlides(n) {
  var i;
  // Fetching images
  var slides = document.getElementsByClassName("mySlides"); 
  // Fetching dots
  var dots = document.getElementsByClassName("dot");
  // If index is bigger than amount of pictures, go back to first image
  if (n > slides.length) {slideIndex = 1}
  // If index is less than 1, go to last image
  if (n < 1) {slideIndex = slides.length};
  for (i = 0; i < slides.length; i++) {
    // Hides images
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  // Shows active picture
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].classList.add("active");
}

// Logs function
console.log(document.getElementsByClassName);
