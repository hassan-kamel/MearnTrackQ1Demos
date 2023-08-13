class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw 'Abstract Class';
    }
  }

  getArea() {
    throw ' getArea() must be implemented';
  }

  getParameter() {
    throw ' getArea() must be implemented';
  }

  toString() {
    return `Name: ${
      this.name
    }\nArea: ${this.getArea()}\nParameter: ${this.getParameter()}`;
  }
}

export class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.name = 'Rectangle';
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }

  getParameter() {
    return 2 * (this.length + this.width);
  }
}

export class Square extends Shape {
  constructor(side) {
    super();
    this.name = 'Square';
    this.side = side;
  }

  getArea() {
    return this.side * this.side;
  }

  getParameter() {
    return 4 * this.side;
  }
}

export class Circle extends Shape {
  constructor(radius) {
    super();
    this.name = 'Circle';
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getParameter() {
    return 2 * Math.PI * this.radius;
  }
}
