document.getElementById("nav").style.listStyleType = "circle";
var div = document.querySelector("body > div");
div.style.display = "flex";
div.style.alignItems = "center";
div.style.justifyContent = "center";
div.style.height = "100%";
document.images[0].style.position = "absolute";
document.images[0].style.top = "0px";
document.images[0].style.right = "0px";
var image = document.createElement("IMG");
image.setAttribute("src", "dom.jpg");
document.querySelector("body > div").appendChild(image);
document.images[1].style.position = "absolute";
document.images[1].style.bottom = "0px";
document.images[1].style.left = "0px";
