const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");
const questions = require('./lib/questions');

async function createLogo() {
  const answers = await inquirer.prompt(questions.userQuestions());

  const { text, textColor, shape, shapeColor } = answers;

  switch (shape) {
    case "Circle":
      return new Circle(text, textColor, shape, shapeColor);
    case "Triangle":
      return new Triangle(text, textColor, shape, shapeColor);
    case "Square":
      return new Square(text, textColor, shape, shapeColor);
    default:
      throw new Error("Invalid shape!");
  }
}
