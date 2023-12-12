// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: ' what is your github username?',
    },
    
    {
        type: 'input',
        name: 'email',
        message: ' what is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: ' what is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: ' what is the breif description of project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: ' what is the process of installation?'
    },
    {
        type: 'input',
        name: 'usage',
        message: ' what is the main usage of project?'
    },
    {
        type: 'list',
        name: 'license',
        message: ' choose the license for this project?',
        choices: ["MIT", "NONE"]
    },
    {
        type: 'list',
        name: 'for questions',
        message: ' if you have questions please contact me?',
        choices: ["https://github.com/veryjohn1991"]
    },
 ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readmeContent = generateMarkdown(answers);

            fs.writeFile('myreadme.md', readmeContent, (err) =>
                err ? console.log(err) : console.log('Successfully created myreadme.md')
            );
        });
}

// Function call to initialize app
init();
