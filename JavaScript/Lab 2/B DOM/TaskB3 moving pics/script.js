var rightImage = document.getElementById("img2");
rightImage.style.position = "absolute";
rightImage.style.right = "0px";
rightImage.style.left = "270px";
rightImage.style.top = "40%";
var leftImage = document.getElementById("img1");
leftImage.style.position = "absolute";
leftImage.style.left = "0px";
leftImage.style.top = "40%";
var bottomImage = document.getElementById("img3");
bottomImage.style.position = "absolute";
bottomImage.style.bottom = "0px";
bottomImage.style.right = "45%";
var p1 = document.createElement("p");
document.body.appendChild(p1);
var p2 = document.createElement("p");
document.body.appendChild(p2);

var speed = 50;

function moveRightImage() {
  rightImageInterval = setInterval(moveToLeft, speed);
  function moveToLeft() {
    pos = parseInt(rightImage.style.left) - 10;
    rightImage.style.left = pos + "px";
    if (parseInt(rightImage.style.left) <= 0) {
      console.log(parseInt(rightImage.style.left));
      clearInterval(rightImageInterval);
      rightImageInterval = setInterval(moveToRight, speed);
    }
    p1.innerText = `<img src='icon-1.gif' style=left ${rightImage.style.left}>`;
  }
  function moveToRight() {
    pos = parseInt(rightImage.style.left) + 10;
    rightImage.style.left = pos + "px";
    if (parseInt(rightImage.style.left) >= 270) {
      clearInterval(rightImageInterval);
      rightImageInterval = setInterval(moveToLeft, speed);
    }
    p1.innerText = `<img src='icon-1.gif' style=left ${rightImage.style.left}>`;
  }
}

function moveLeftImage() {
  leftImageInterval = setInterval(moveToRight, speed);
  function moveToLeft() {
    pos = parseInt(leftImage.style.left) - 10;
    leftImage.style.left = pos + "px";
    if (parseInt(leftImage.style.left) <= 0) {
      console.log(parseInt(leftImage.style.left));
      clearInterval(leftImageInterval);
      leftImageInterval = setInterval(moveToRight, speed);
    }
    p2.innerText = `<img src='icon-1.gif' style=left ${leftImage.style.left}>`;
  }
  function moveToRight() {
    pos = parseInt(leftImage.style.left) + 10;
    leftImage.style.left = pos + "px";
    if (parseInt(leftImage.style.left) >= 270) {
      clearInterval(leftImageInterval);
      leftImageInterval = setInterval(moveToLeft, speed);
    }
    p2.innerText = `<img src='icon-1.gif' style=left ${leftImage.style.left}>`;
  }
}

function moveBottomImage() {
  bottomImageInterval = setInterval(moveToTop, speed);
  function moveToTop() {
    pos = parseInt(bottomImage.style.bottom) + 13;
    bottomImage.style.bottom = pos + "px";
    if (parseInt(bottomImage.style.bottom) >= 350) {
      clearInterval(bottomImageInterval);
      bottomImageInterval = setInterval(moveToBottom, speed);
    }
  }
  function moveToBottom() {
    pos = parseInt(bottomImage.style.bottom) - 13;
    bottomImage.style.bottom = pos + "px";
    if (parseInt(bottomImage.style.bottom) <= 0) {
      clearInterval(bottomImageInterval);
      bottomImageInterval = setInterval(moveToTop, speed);
    }
  }
}
function resetMoving() {
  clearInterval(rightImageInterval);
  clearInterval(leftImageInterval);
  clearInterval(bottomImageInterval);
  document.getElementById("toggle-moving").value = "go";
  rightImage.style.position = "absolute";
  rightImage.style.right = "0px";
  rightImage.style.left = "270px";
  rightImage.style.top = "40%";
  leftImage.style.position = "absolute";
  leftImage.style.left = "0px";
  leftImage.style.top = "40%";
  bottomImage.style.position = "absolute";
  bottomImage.style.bottom = "0px";
  bottomImage.style.right = "45%";
  toggleMoving();
}
function toggleMoving() {
  if (document.getElementById("toggle-moving").value === "stop") {
    clearInterval(rightImageInterval);
    clearInterval(leftImageInterval);
    clearInterval(bottomImageInterval);
    document.getElementById("toggle-moving").value = "go";
    return false;
  }
  if (document.getElementById("toggle-moving").value === "go") {
    moveRightImage();
    moveLeftImage();
    moveBottomImage();
    document.getElementById("toggle-moving").value = "stop";
    return false;
  }
}
