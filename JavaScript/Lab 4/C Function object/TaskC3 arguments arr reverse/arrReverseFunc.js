function f1() {
  var arr = [];
  for (var index = 0; index < arguments.length; index++) {
    var param = arguments[index];
    arr.push(param);
  }
  arr.reverse();
  return arr;
}
var f2 = function () {
  var arr = [];
  for (var index = 0; index < arguments.length; index++) {
    var param = arguments[index];
    arr.push(param);
  }
  var str = arr.join("");
  return str.split("").reverse().join("");
};
console.log(f2(1, 2, 3, 3, 3, 3));
