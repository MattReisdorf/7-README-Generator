// TODO: Include packages needed for this application
let inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },

    {
        type: "input",
        message: "What is your Email Address?",
        name: "email"
    },

    {
        type: "input",
        message: "What is your project's name?",
        name: "title",
    },

    {
        type: "input",
        message: "Write a short description of the project",
        name: "description",
    },

    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: ["Apache 2.0", 
        "Boost Software 1.0", 
        "BSD 3-Clause", 
        "BSD 2-Clause", 
        "CC 0", 
        "CC Attribution 4.0 International",
        "CC Attribution-ShareAlike 4.0 International", 
        "CC Attribution-NonCommercial 4.0 International", 
        "CC Attribution-NoDerivates 4.0 International", 
        "CC Attribution-NonCommmercial-ShareAlike 4.0 International", 
        "CC Attribution-NonCommercial-NoDerivatives 4.0 International", 
        "Eclipse Public License 1.0", 
        "GNU GPL v3",
        "GNU GPL v2",
        "GNU AGPL v3", 
        "GNU LGPL v3", 
        "GNU FDL v1.3",
        "IBM Public License Version 1.0",
        "ISC License",
        "The MIT License",
        "Mozilla Public License 2.0",
        "ODP BY",
        "ODP ODbL",
        "ODP PDDL", 
        "The Perl License",
        "The Artistic License 2.0",
        "SIL Open Font License 1.1",
        "The Unlicense",
        "The Do What the Fuck You Want to Public License",
        "zlib/libpng"]
    }, 

    {
        type: "input",
        message: "What command(s) should be run to install dependencies?",
        name: "dependencies"
    },

    {
        type: "input",
        message: "What command(s) should be run to run tests?",
        name: "testing"
    },

    {
        type: "input",
        message: "What does the user need to know when using this repo?",
        name: "info"
    },

    {
        type: "input", 
        message: "What does the user need to know about contributing to the repo?",
        name: "contributions"
    }
    // Array of Questions and answers
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => 
        error ? console.error(error) : console.log('')
    )}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((questions) => {
            writeToFile('./Generated-README/README.md', generateMarkdown(questions));
        })
    }

// Function call to initialize app
init();





