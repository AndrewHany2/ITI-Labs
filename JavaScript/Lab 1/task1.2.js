var sum = 0;
var num;
while (true) {
  num =
    sum === 0
      ? Number(prompt("enter number"))
      : Number(prompt("Sum: " + sum + ", Enter number"));
  if (isNaN(num)) {
    alert("This is not a number");
    break;
  } else if (num === 0) {
    alert("Number is 0");
    break;
  } else {
    sum += num;
    if (sum > 100) {
      alert("sum > 100");
      break;
    }
  }
}
