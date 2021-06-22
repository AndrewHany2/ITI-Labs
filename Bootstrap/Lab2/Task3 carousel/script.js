var images = [];
var currentIndex = 1;
var interval;

nextImage();
function nextImage() {
  currentIndex === 7 ? (currentIndex = 1) : null;
  updateImage();
  currentIndex++;
}

function previousImage() {
  currentIndex === 0 ? (currentIndex = 6) : null;
  updateImage();
  currentIndex--;
}

function updateImage() {
  console.log(currentIndex);
  document.images[0].src = currentIndex + ".jpg";
}

function startSlideShow() {
  interval ? clearInterval(interval) : null;
  interval = setInterval(() => {
    nextImage();
  }, 500);
}

function stopSlideShow() {
  clearInterval(interval);
}
