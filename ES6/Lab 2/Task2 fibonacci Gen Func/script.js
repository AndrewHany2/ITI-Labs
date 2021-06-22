function* fibonacciGen(numberDisplayed) {
  [first, second] = [0, 1];
  for (let index = 0; index < numberDisplayed; index++) {
    yield first;
    [first, second] = [second, first + second];
  }
}
for (let i of fibonacciGen(4)) {
  console.log(i);
}
function* fibonnacciGen2(maxNumber) {
  [first, second] = [0, 1];
  while (first < maxNumber) {
    yield first;
    [first, second] = [second, first + second];
  }
}
for (let i of fibonnacciGen2(10)) {
  console.log(i);
}
