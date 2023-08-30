const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");
const { userQuestions } = require("./lib/questions");

function createLogo() {
  inquirer.prompt(userQuestions()).then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;

    switch (shape) {
      // assign each shape to the same variable name and return it outside of the switch statement.
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
  // writeToFile(filename, answers);
}

const filename = `logo.svg`;

// function writeToFile(filename, answers) {
//   fs.writeFile(filename, userQuestions(answers), (err) =>
//   err ? console.log(err) : console.log(`${filename} created!`)
//   );
// }

createLogo();
