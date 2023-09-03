// Import the Circle, Triangle, and Square classes from the "shapes" module.
const { Circle, Triangle, Square } = require("./shapes");

// Describe the tests for the Circle class.
describe("Circle", () => {
  it("should render a blue circle with white text", () => {
    // Create an instance of the Circle class with specific text, text color, and shape color.
    const shape = new Circle("SVG", "white", "blue");

    // Define the expected SVG result for the Circle shape.
    const result = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="200" cy="100" r="100" fill="blue"/>
    <text x="200" y="130" text-anchor="middle" font-size="90" fill="white">SVG</text>
  </svg>`;

    // Verify that the rendered SVG matches the expected result.
    expect(shape.render()).toEqual(result);
  });
});

// Describe the tests for the Triangle class.
describe("Triangle", () => {
  it("should render a blue triangle with white text", () => {
    // Create an instance of the Triangle class with specific text, text color, and shape color.
    const shape = new Triangle("SVG", "white", "blue");

    // Define the expected SVG result for the Triangle shape.
    const result = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,300 300,300 150,0" fill="blue"/>
    <text x="150" y="150" text-anchor="middle" font-size="90" fill="white">SVG</text>
  </svg>`;

    // Verify that the rendered SVG matches the expected result.
    expect(shape.render()).toEqual(result);
  });
});

// Describe the tests for the Square class.
describe("Square", () => {
  it("should render a blue square with white text", () => {
    // Create an instance of the Square class with specific text, text color, and shape color.
    const shape = new Square("SVG", "white", "blue");

    // Define the expected SVG result for the Square shape.
    const result = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="90" y="25" width="300" height="300" fill="blue"/>
    <text x="195" y="150" text-anchor="middle" font-size="90" fill="white">SVG</text>
  </svg>`;

    // Verify that the rendered SVG matches the expected result.
    expect(shape.render()).toEqual(result);
  });
});
