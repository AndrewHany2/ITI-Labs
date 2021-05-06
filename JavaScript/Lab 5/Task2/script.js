var count = 0;
function Rectangle(width, height) {
  count += 1;
  this.width = width;
  this.height = height;
}
Rectangle.prototype.area = function () {
  return this.width * this.height;
};
Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};
Rectangle.prototype.toString = function () {
  return `width=${this.width},height=${
    this.height
  },area=${this.area()},perimeter=${this.perimeter()}`;
};
Rectangle.getCount = function () {
  return count;
};
rec = new Rectangle(2, 2);
rec2 = new Rectangle(2, 2);
console.log(rec.toString());
console.log(Rectangle.getCount());
