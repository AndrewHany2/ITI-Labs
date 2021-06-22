var x = 350;
var y = 350;
var count = 0;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
drawRect();
function drawRect() {
  var interval = setInterval(() => {
    if (count === 12) {
      clearInterval(interval);
      clearRect();
      count = 0;
    }
    var sin = Math.sin(Math.PI / 80);
    var cos = Math.cos(Math.PI / 60);
    ctx.translate(350, 350);
    ctx.rotate((30 * Math.PI) / 180);
    ctx.translate(-350, -350);
    ctx.transform(cos, sin, sin, cos, 0, 0);
    ctx.fillStyle = "rgba(0,0,255,0.5)";
    ctx.fillRect(x, y, 150, 50);
    count++;
  }, 300);
}
function clearRect() {
  for (let index = 0; index < 12; index++) {
    ctx.translate(350, 350);
    ctx.rotate((30 * Math.PI) / 180);
    ctx.translate(-350, -350);
    ctx.fillStyle = "rgba(255,255,255,1)";
    ctx.fillRect(x, y, 200, 200);
  }
  drawRect();
}
