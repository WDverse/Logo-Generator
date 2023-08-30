const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");
const { userQuestions } = require("./lib/questions");

function createLogo() {
  inquirer.prompt(userQuestions()).then((answers) => {
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

// function writeToFile(filename, svg) {
//   // const filename = `logo.svg`;
//   fs.writeFile(filename, userQuestions(data), (err) =>
//     err ? console.log(err) : console.log(`${filename} created!`)
//   );
// }

createLogo();

// writeToFile();
