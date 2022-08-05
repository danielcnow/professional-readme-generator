// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs");
const { default: Choices } = require("inquirer/lib/objects/choices");
// TODO: Create an array of questions for user input
const questions = [
   {
    type: "input",
    name: "title",
    message: "What is the project title?"
   },
   {
    type: "input",
    name: "description",
    message: "What is the description?"
   },
   {
    type: "input",
    name: "installation",
    message: "How do you install?"
   },
   {
    type: "input",
    name: "usage",
    message: "How do you use the application?"
   },
   {
    type: "input",
    name: "contribution",
    message: "What are the contribution guidelines?"
   },
   {
    type: "input",
    name: "test",
    message: "How do I test the application?"
   },
   {
    type: "list",
    name: "license",
    message: "What license are we using?",
    choices: ["Creative Commons","IBM","ISC"],
   },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((answers) => {
    const readMeTemplate = generateMarkdown(answers)
    console.log(readMeTemplate)
    fs.writeFile("readme.md",readMeTemplate,function(){
        console.log("Successful Write")
    }) 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();
