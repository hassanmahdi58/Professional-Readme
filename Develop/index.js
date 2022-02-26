// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

var generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a description for your project?',
      },
      {
        type: 'input',
        name: 'install',
        message: 'Please add your installation instructions?',
      },
      {
        type: 'input',
        name: 'information',
        message: 'add your usage information?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Provide contribution guidelines',
      },
      {
        type: 'input',
        name: 'testting',
        message: 'What is your test instructions?',
      },
      {
        type: 'list',
        name: 'license',
        message:'What is your  a license for the  application?',
        choices: ['MIT', 'ISC',  'Apache license 2.0', 'Microsoft Public License'],
      },
      {
        type: 'input',
        name: 'Github',
        message: 'Please add your github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please add your email address ?',
      },
    ];
  



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
      fs.writeFile(fileName, generateMarkdown(data), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("your README file has been generated");
    }); 
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions).then((answers) => {
        writeToFile("README.md", answers);
      }
      )
   
}
   

// Function call to initialize app
init();
