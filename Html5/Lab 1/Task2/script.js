var red = document.getElementById("red").value;
var blue = document.getElementById("green").value;
var green = document.getElementById("blue").value;

document.getElementById("red").addEventListener("change", function() {
    var red = document.getElementById("red").value;
    var blue = document.getElementById("green").value;
    var green = document.getElementById("blue").value;
    document.getElementById(
        "colors"
    ).style.color = `rgb(${red},${green},${blue})`;
});
document.getElementById("green").addEventListener("change", function() {
    var red = document.getElementById("red").value;
    var blue = document.getElementById("green").value;
    var green = document.getElementById("blue").value;
    document.getElementById(
        "colors"
    ).style.color = `rgb(${red},${green},${blue})`;
});
document.getElementById("blue").addEventListener("change", function() {
    var red = document.getElementById("red").value;
    var blue = document.getElementById("green").value;
    var green = document.getElementById("blue").value;
    document.getElementById(
        "colors"
    ).style.color = `rgb(${red},${green},${blue})`;
});