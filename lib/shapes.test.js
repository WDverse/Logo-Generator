const { Circle, Triangle, Square } = require("./shapes");

describe("Circle", () => {
  it("should render a blue circle with white text", () => {
    const shape = new Circle("SVG", "white", "blue");
    const result = `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="75" r="20" fill="blue"/>
    <text x="10" y="10" text-anchor="middle" font-weight="bold" fill="white">SVG</text>
    <style><![CDATA[text{font: 28px Verdana, Helvetica, Arial, sans-serif}]]></style>
  </svg>`;
    expect(shape.render()).toEqual(result);
  });
});

describe("Triangle", () => {
  it("should render a blue triangle with white text", () => {
    const shape = new Triangle("SVG", "white", "blue");
    const result = `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="200,10 250,190 160,210" fill="blue"/>
    <text x="10" y="10" text-anchor="middle" font-weight="bold" fill="white">SVG</text>
    <style><![CDATA[text{font: 28px Verdana, Helvetica, Arial, sans-serif}]]></style>
  </svg>`;
    expect(shape.render()).toEqual(result);
  });
});

describe("Square", () => {
  it("should render a blue square with white text", () => {
    const shape = new Square("SVG", "white", "blue");
    const result = `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="30" height="30" fill="blue"/>
    <text x="10" y="10" text-anchor="middle" font-weight="bold" fill="white">SVG</text>
    <style><![CDATA[text{font: 28px Verdana, Helvetica, Arial, sans-serif}]]></style>
  </svg>`;
    expect(shape.render()).toEqual(result);
  });
});
