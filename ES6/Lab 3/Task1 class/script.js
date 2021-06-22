class Polygon {
  constructor(dimension) {
    this.dimension = dimension;
  }
  get Area() {}
  toString() {
    console.log(this.Area);
  }
}
class Rectangle extends Polygon {
  constructor(width, height) {
    super(width);
    this.width = width;
    this.height = height;
  }
  get Area() {
    return `Area=${this.width * this.height}`;
  }
  draw(x, y, canvasID) {
    var canvas = document.getElementById(canvasID);
    var ctx = canvas.getContext("2d");
    ctx.strokeRect(x, y, this.width, this.height);
  }
}
class Square extends Polygon {
  constructor(dimension) {
    super(dimension);
    this.dimension = dimension;
  }
  get Area() {
    return `Area=${this.dimension * this.dimension}`;
  }
  draw(x, y, canvasID) {
    var canvas = document.getElementById(canvasID);
    var ctx = canvas.getContext("2d");
    ctx.strokeRect(x, y, this.dimension, this.dimension);
  }
}
class Circle extends Polygon {
  constructor(radius) {
    super(radius);
    this.radius = radius;
  }
  get Area() {
    return `Area=${Math.PI * this.radius * this.radius}`;
  }
  draw(x, y, canvasID) {
    var canvas = document.getElementById(canvasID);
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
}
class Triangle extends Polygon {
  constructor(width, height) {
    super(width);
    this.width = width;
    this.height = height;
  }
  get Area() {
    return `Area=${0.5 * this.width * this.height}`;
  }
  draw(x, y, canvasID) {
    var canvas = document.getElementById(canvasID);
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - this.height);
    ctx.lineTo(x - this.width, y);
    ctx.closePath();
    ctx.stroke();
  }
}
var rect = new Rectangle(10, 10);
rect.toString();
rect.draw(200, 200, "canvas");
var tri = new Triangle(150, 150);
tri.toString();
tri.draw(400, 400, "canvas");
var c = new Circle(15);
c.draw(200, 200, "canvas");
