// Import required modules and classes.
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");
const { questions } = require("./lib/questions");
const { writeFile } = require("fs/promises");

// Asynchronous function to create a logo based on user input.
async function createLogo() {
  // Prompt the user with a series of questions to gather logo details.
  const { text, textColor, shape, shapeColor } = await inquirer.prompt(
    questions
  );

  let finalShape; // Variable to hold the final logo shape.

  // Use a switch statement to determine which shape class to instantiate based on user's choice.
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

  // Write the rendered logo as an SVG file named "logo.svg".
  await writeFile("logo.svg", finalShape.render());

  // Display a success message to the user.
  console.log("\n");
  console.log("Generated logo.svg");
}

// Call the createLogo function to initiate logo creation based on user input.
createLogo();
