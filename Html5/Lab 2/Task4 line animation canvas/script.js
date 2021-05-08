var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.strokeRect(0, 0, c.width, c.height);
ctx.beginPath();
ctx.lineWidth = 3;
var index = 0;
var interval = setInterval(function () {
  ctx.lineTo(index, index);
  index += 5;
  ctx.stroke();
  if (index === 420) clearInterval(interval);
}, 50);
