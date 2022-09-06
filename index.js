// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer  = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your GitHub project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your GitHub project? Please write a short description.'
    },
    {
        type: 'input',
        name: '',
        message: "What is the title of your GitHub project?"
    }, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(, fileName, data);
    // need path
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
console.log(process.cwd());
init();

