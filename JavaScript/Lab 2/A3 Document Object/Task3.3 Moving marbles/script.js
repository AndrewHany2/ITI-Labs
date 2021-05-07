var images = document.images;
var currentIndex = 0;
var speed = 500;
var timeout;

function animateImages() {
  timeout ? clearTimeout(timeout) : null;
  if (currentIndex === 5) {
    images[currentIndex - 1].src = "marble1.jpg";
    currentIndex = 0;
  }
  if (currentIndex < images.length) {
    images[currentIndex].src = "marble3.jpg";
    if (currentIndex !== 0) images[currentIndex - 1].src = "marble1.jpg";
  }
  currentIndex++;
  timeout = setTimeout(animateImages, speed);
}

function stop() {
  clearTimeout(timeout);
}
