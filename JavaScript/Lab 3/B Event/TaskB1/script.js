document.addEventListener("keypress", function () {
  alert(event.keyCode);
});
document.addEventListener("keydown", function () {
  if (event.keyCode === 17) alert("ctrl");
  if (event.keyCode === 16) alert("shift");
  if (event.keyCode === 18) alert("alt");
});
