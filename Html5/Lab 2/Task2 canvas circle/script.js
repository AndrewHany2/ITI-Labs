var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(200, 200, 200, 0, 2 * Math.PI);
var outerGrad = ctx.createRadialGradient(200, 200, 200, 266, 184, 200);
outerGrad.addColorStop(0, "#0436CD");
outerGrad.addColorStop(1, "#7E98E5");
ctx.fillStyle = outerGrad;
ctx.fill();

ctx.beginPath();
ctx.arc(200, 200, 160, 0, 2 * Math.PI);
var outerGrad = ctx.createRadialGradient(200, 200, 160, 329, 264, 30);
outerGrad.addColorStop(0, "#0436CD");
outerGrad.addColorStop(1, "white");
ctx.fillStyle = outerGrad;
ctx.fill();

ctx.font = "250px Arial";
ctx.fillStyle = "white";
ctx.fillText("A", 110, 270);
