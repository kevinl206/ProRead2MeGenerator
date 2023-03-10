// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
// TODO: Create an array of questions for user input
// const questions = [];

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license should your project have?',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are the guidelines for contributing to your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the tests for your project?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
];
// TODO: Create a function to write README file
  function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => 
    err ? console.error(err) : console.log("Oh Yeah!!! Your README has been generated!"))
};
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => writeToFile("exampleREADME.md", response));
    };
// Function call to initialize app
init();
