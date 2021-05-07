var imgs = [6, 1, 3, 2, 4, 5, 6, 3, 1, 2, 4, 5];
var openedImages = [];
var correctSolution = [];
var firstImage;
var secondImage;

for (var i = 0; i < document.images.length; i++) {
  document.images[i].onclick = function () {
    imageClicked(this);
  };
  document.images[i].id = imgs[i];
}

function imageClicked(image) {
  if (!firstImage || !secondImage) {
    firstImage ? (secondImage = image) : (firstImage = image);
    image.src = image.id + ".gif";
  }
  if (firstImage && secondImage)
    firstImage.id === secondImage.id ? correctAnswer() : wrongAnswer();
}
function correctAnswer() {
  firstImage.onclick = "";
  secondImage.onclick = "";
  firstImage = "";
  secondImage = "";
}
function wrongAnswer() {
  setTimeout(function () {
    firstImage.src = "Moon.gif";
    secondImage.src = "Moon.gif";
    firstImage = "";
    secondImage = "";
  }, 400);
}
