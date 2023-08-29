const inquirer = require("inquirer");

function userQuestions() {
  const questions = [
    {
      type: "input",
      name: "text",
      message: "What text do you want in your logo?",
      validate: function (input) {
        const done = this.async();
        if (input.length > 3) {
          done("Text cannot be more than three characters");
          return;
        }
        done(null, true);
      },
    },
    {
      type: "input",
      name: "textColor",
      message: "What color do you want your text to be?",
    },
    {
      type: "list",
      name: "shape",
      message: "What shape do you want for your logo?",
      choices: ["Circle", "Triangle", "Square"], 
    },
    {
      type: "input",
      name: "shapeColor",
      message: "What color do you want the shape to be?",
    },
  ];
  return questions;
}

module.exports = { userQuestions };
