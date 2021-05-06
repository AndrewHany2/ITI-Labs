function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
  this.perimeter = function () {
    return 2 * (this.width + this.height);
  };
  this.displayInfo = function () {
    return `width=${this.width},height=${
      this.height
    },area=${this.area()},perimeter=${this.perimeter()}`;
  };
}
var rec = new Rectangle(10, 10);
console.log(rec.displayInfo());
