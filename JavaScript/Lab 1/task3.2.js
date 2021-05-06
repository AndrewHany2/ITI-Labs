var arr = [];
for (i = 0; i < 5; i++) {
  arr[i] = parseInt(prompt("please enter element number:" + (i + 1)));
}

document.write("<p>u've entered the values of " + arr + "</p>");
document.write(
  "<p>your values after being sorted descending " +
    arr.sort(function (a, b) {
      return b - a;
    }) +
    "</p>"
);
document.write(
  "<p>your values after being sorted ascending " +
    arr.sort(function (a, b) {
      return a - b;
    }) +
    "</p>"
);
