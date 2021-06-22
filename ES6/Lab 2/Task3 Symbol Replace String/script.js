obj = {
  [Symbol.replace]: function (str) {
    return `${str.substring(0, 15)}...`;
  },
};
console.log("asdasdasdasdasdasdasdasddddddddaaaaaaaaaaaaaa".replace(obj));
