//use prototype
var gen = {
  first: "andrew",
  second: "hany",
};
getSetGen = function (object) {
  for (var key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      if (typeof object[key] !== "function") {
        keyFunc = `get${key}`;
        object[keyFunc] = new Function(`return this.${key}`);
        keyFunc = `set${key}`;
        object[keyFunc] = new Function("value", `return this.${key}=value`);
      }
    }
  }
};
getSetGen(gen);
console.log(gen);
