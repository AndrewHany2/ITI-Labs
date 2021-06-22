var fruits = ["apple", "strawberry", "banana", "orange", "mango"];
console.log(
  fruits.every((element) => {
    return typeof element === "string";
  })
);
console.log(
  fruits.some((element) => {
    return element.startsWith("a");
  })
);
var filteredFruits = fruits.filter((element) => {
  return element.startsWith("b") || element.startsWith("s");
});
console.log(filteredFruits);

var likedFruits = fruits.map((element) => {
  return `i like ${element}`;
});
console.log(likedFruits);

likedFruits.forEach((val) => {
  console.log(val);
});
