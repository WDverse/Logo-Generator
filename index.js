const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");
const { questions } = require("./lib/questions");
const { writeFile } = require("fs/promises");
async function createLogo() {
  const { text, textColor, shape, shapeColor } = await inquirer.prompt(
    questions
  );
  let finalShape;
  switch (shape) {
    case "Circle":
      finalShape = new Circle(text, textColor, shapeColor);
      break;
    case "Triangle":
      finalShape = new Triangle(text, textColor, shapeColor);
      break;
    case "Square":
      finalShape = new Square(text, textColor, shapeColor);
      break;
    default:
      throw new Error("Invalid shape!");
  }
  writeFile("logo.svg", finalShape.render());
  console.log(finalShape.render());
}

createLogo();
