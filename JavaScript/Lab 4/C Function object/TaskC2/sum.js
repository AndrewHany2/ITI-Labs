function sum() {
  var temp = 0;
  if (arguments.length === 0) {
    throw new Error("you didnt pass any parameter");
  }
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== "number") {
      throw new Error("arguments should be numbers");
    }
    temp += arguments[i];
  }
  return temp;
}
console.log(sum(2, 4, 3));
