function minMax(...params) {
  let min = Math.min(...params);
  let max = Math.max(...params);
  return `min=${min} max=${max}`;
}
console.log(minMax(3, 2, 1, 5, 5, 34, 7, 3456, 3, 5, 1, 2));
