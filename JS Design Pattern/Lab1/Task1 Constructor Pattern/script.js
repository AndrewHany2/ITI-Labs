class Rectangle {
  static count = 0;
  static instance;
  constructor(_width, _height) {
    Rectangle.count++;
    this.width = _width;
    this.height = _height;
    Object.defineProperty(Rectangle, "instance", {
      value: this,
      writable: false,
    });
  }

  get area() {
    return this.calcArea();
  }
  calcArea() {
    return this.height * this.width;
  }
  get perimeter() {
    return this.calcArea();
  }
  calcPerimeter() {
    return (Perimeter = (this.width + this.Height) * 2);
  }
}
Rectangle.prototype.toString = function () {
  return `Width=${this.width}, Height=${this.height}, Perimeter=${this.perimeter},
     Area=${this.area}, Number of created objects=${Rectangle.count}`;
};
console.log(Rectangle.instance);
r1 = new Rectangle(10, 10);
console.log(r1.toString());
console.log(r1.instance);
r2 = new Rectangle(20, 20);
console.log(r2.toString());
