const {Circle, Triangle, Square} = require('./shapes');

describe("Circle", () => {
  it("should render a blue circle", () => {
    const shape = new Circle("blue");
    const result = `<circle cx="25" cy="75" r="20" fill ="blue"/>`;
    expect(shape.render()).toEqual(result);
  });
});

describe("Triangle", () => {
  it("should render a blue triangle", () => {
    const shape = new Triangle("blue");
    const result = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`;
    expect(shape.render()).toEqual(result);
  });
});

describe("Square", () => {
  it("should render a blue square", () => {
    const shape = new Square("blue");
    const result = `<rect x="10" y="10" width="30" height="30" fill ="blue"/>`;
    expect(shape.render()).toEqual(result);
  });
});
