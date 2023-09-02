// Import the Logo class from the "logo" module.
const Logo = require("./logo");

// Define a subclass "Circle" of the Logo class.
class Circle extends Logo {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor); // Call the constructor of the parent class.
  }

  // Render method for rendering a circular logo as an SVG file.
  render() {
    return `<svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="200" cy="100" r="100" fill="${this.shapeColor}"/>
    <text x="200" y="130" text-anchor="middle" font-size="90" fill="${this.textColor}">${this.text}</text>
  </svg>`;
  }
}

// Define a subclass "Triangle" of the Logo class.
class Triangle extends Logo {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor); // Call the constructor of the parent class.
  }

  // Render method for rendering a triangular logo as an SVG file.
  render() {
    return `<svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,300 300,300 150,0" fill="${this.shapeColor}"/>
    <text x="150" y="195" text-anchor="middle" font-size="100" fill="${this.textColor}">${this.text}</text>
  </svg>`;
  }
}

// Define a subclass "Square" of the Logo class.
class Square extends Logo {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor); // Call the constructor of the parent class.
  }

  // Render method for rendering a square logo as an SVG file.
  render() {
    return `<svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="90" y="25" width="300" height="300" fill="${this.shapeColor}"/>
    <text x="240" y="195" text-anchor="middle" font-size="100" fill="${this.textColor}">${this.text}</text>
  </svg>`;
  }
}

// Export the Circle, Triangle, and Square classes.
module.exports = {
  Circle,
  Triangle,
  Square,
};
