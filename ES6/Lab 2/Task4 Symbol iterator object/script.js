obj = {
  andrew: "asdasd",
  hany: "asdas",
  michelle: "asdasss",
  [Symbol.iterator]() {
    let values = Object.values(this);
    let keys = Object.keys(this);
    let index = 0;
    return {
      next() {
        if (index < values.length) {
          let key = keys[index];
          let val = values[index];
          index++;
          return { value: [key, val], done: false };
        } else return { done: true };
      },
    };
  },
};
for (const iterator of obj) {
  console.log(iterator);
}
