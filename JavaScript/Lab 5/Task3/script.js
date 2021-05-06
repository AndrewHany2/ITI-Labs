function Shape(width, height) {
  if (this.constructor === Shape) throw "not allowed";
  this.width = width;
  this.height = height;
}
Shape.prototype.area = function () {
  return this.width * this.height;
};
function Rectangle(width, height) {
  Shape.call(this, width, height);
}

function Square(value) {
  Rectangle.call(this, value, value);
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};
Square.prototype = Object.create(Rectangle.prototype);
Rectangle.prototype.constructor = Square;

var r1 = new Rectangle(1, 2);
var s1 = new Square(2);
console.log(r1.area());
console.log(s1.perimeter());
