function twoParameter(a, b) {
  if (arguments.length > 2) {
    throw new Error("exceeds 2 parameters");
  }
  if (arguments.length < 2) {
    throw new Error("less than 2 parameters");
  }
}
