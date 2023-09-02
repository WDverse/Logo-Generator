const { Circle, Triangle, Square } = require("./shapes");

describe("Circle", () => {
  it("should render a blue circle with white text", () => {
    const shape = new Circle("SVG", "white", "blue");
    const result = `<svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="200" cy="100" r="100" fill="blue"/>
    <text x="200" y="130" text-anchor="middle" font-size="90" fill="white">SVG</text>
  </svg>`;
    expect(shape.render()).toEqual(result);
  });
});

describe("Triangle", () => {
  it("should render a blue triangle with white text", () => {
    const shape = new Triangle("SVG", "white", "blue");
    const result = `<svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,300 300,300 150,0" fill="blue"/>
    <text x="150" y="195" text-anchor="middle" font-size="100" fill="white">SVG</text>
  </svg>`;
    expect(shape.render()).toEqual(result);
  });
});

describe("Square", () => {
  it("should render a blue square with white text", () => {
    const shape = new Square("SVG", "white", "blue");
    const result = `<svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="90" y="25" width="300" height="300" fill="blue"/>
    <text x="240" y="195" text-anchor="middle" font-size="100" fill="white">SVG</text>
  </svg>`;
    expect(shape.render()).toEqual(result);
  });
});
