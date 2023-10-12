const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Your project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Your project description? ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Your project installation instructions? ',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Your project usage information? ',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Your project contribution guidelines?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Your project test instructions?',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Your project test instructions?',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Choose a license',
        name: 'license',
        choices: ['No License', 'GNU AGPLv3', 'Boost Software 1.0', 'Mozilla Public 2.0', 'Apache 2.0', 'MIT']
    },
    {
        type: 'input',
        message: 'Your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Your email address?',
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
