var arr = [];
var sum = 0;
var multiplication = 1;
var division = 1;

for (i = 0; i < 3; i++) {
  arr[i] = parseInt(prompt("please enter element number:" + (i + 1)));
  sum += arr[i];
  multiplication *= arr[i];
  division = arr[i] / division;
}
document.write(
  "<p>sum of the 3 values " + arr.join("+") + " = " + sum + "</p>"
);
document.write(
  "<p>sum of the 3 values " + arr.join("*") + " = " + multiplication + "</p>"
);
document.write(
  "<p>sum of the 3 values " + arr.join("/") + " = " + division + "</p>"
);
