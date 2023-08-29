const fs = require("fs");
const shapes = require("./lib/shapes");
const questions = require("./lib/questions");

function createLogo({ text, textColor, shape, shapeColor }) {
  switch (shape) {
    case "Circle":
      return new Circle(text, textColor, shape, shapeColor);
    case "Triangle":
      return new Circle(text, textColor, shape, shapeColor);
    case "Square":
      return new Circle(text, textColor, shape, shapeColor);
    default:
  }
}
