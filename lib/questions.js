module.exports = {
  // An array of questions that will be used to gather information for creating a logo.
  questions: [
    {
      type: "input",
      name: "text",
      message: "What text do you want in your logo?",
      // Validation function for the text input.
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
      // Validation function for the text color input.
      validate: function (input) {
        const done = this.async();
        if (!input) {
          done("Enter a valid color");
          return;
        }
        done(null, true);
      },
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
      // Validation function for the shape color input.
      validate: function (input) {
        const done = this.async();
        if (!input) {
          done("Enter a valid shape");
          return;
        }
        done(null, true);
      },
    },
  ],
};
