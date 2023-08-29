const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");
const questions = require("./lib/questions");

function createLogo() {
  inquirer.prompt(questions.userQuestions())
  .then((answers) => {
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
  });
}

createLogo();

// Once you are calling the function then the issue you're going to encounter is the terminal ends immediately after displaying the questions. This is because the createLogo function is asynchronous, but you're not waiting for it to complete before the Node.js process exits. You need to wait for the createLogo function to finish before allowing the script to exit. You can achieve this by using await or .then().
