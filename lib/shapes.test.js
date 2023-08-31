const { Circle, Triangle, Square } = require("./shapes");

describe("Circle", () => {
  it("should render a blue circle", () => {
    const shape = new Circle("SVG", "blue", "green");
    const result = `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="75" r="20" fill="green"/>
    <text x="10" y="10" text-anchor="middle" font-weight="bold" fill="blue">SVG</text>
    <style><![CDATA[text{font: 28px Verdana, Helvetica, Arial, sans-serif}]]></style>
  </svg>`;
    expect(shape.render()).toEqual(result);
  });
});

// describe("Triangle", () => {
//   it("should render a blue triangle", () => {
//     const shape = new Triangle("blue");
//     const result = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`;
//     expect(shape.render()).toEqual(result);
//   });
// });

// describe("Square", () => {
//   it("should render a blue square", () => {
//     const shape = new Square("blue");
//     const result = `<rect x="10" y="10" width="30" height="30" fill ="blue"/>`;
//     expect(shape.render()).toEqual(result);
//   });
// });
