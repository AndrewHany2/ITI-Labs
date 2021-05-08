var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.strokeRect(0, 0, canvas.width, canvas.height);
var blueGrad = ctx.createLinearGradient(190, 0, 190, 200);
blueGrad.addColorStop(0, "#33BCEF");
blueGrad.addColorStop(1, "#FFFFFF");
ctx.fillStyle = blueGrad;
ctx.fillRect(10, 10, 380, 200);
var greenGrad = ctx.createLinearGradient(190, 200, 190, 400);
greenGrad.addColorStop(0, "#00FF00");
greenGrad.addColorStop(1, "#E7F7D7");
ctx.fillStyle = greenGrad;
ctx.fillRect(10, 200, 380, 200);
ctx.beginPath();
var lineGrad = ctx.createLinearGradient(135, 150, 135, 250);
lineGrad.addColorStop(0, "black");
lineGrad.addColorStop(1, "#00FF00");
ctx.moveTo(260, 250);
ctx.lineTo(260, 150);
ctx.lineTo(110, 150);
ctx.lineTo(110, 250);
ctx.strokeStyle = lineGrad;
ctx.stroke(); //border