var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var myImg = new Image();
myImg.src = "img.jpg";
myImg.onload = function () {
  ctx.drawImage(myImg, 10, 10);
  ctx.font = "800 30px Arial";
  ctx.fillStyle = "#9B9396";
  ctx.fillText("its gonna be ok", 53, 293);
  ctx.font = "800 30px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("its gonna be ok", 50, 290);
};
