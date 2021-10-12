const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generatorMarkDown = require("./utils/generateMarkdown")


const questions = [{
    type: "input",
    message: "Title of project:\t",
    name: "Title"
},  {
    type: "input",
    message: "What is your GitHub username:\t",
    name: "User"
},  {
    type: "input",
    message: "Description of project:\n\tWhat was your motivation?\n\tWhy did you build this project?\n\tWhat problem does it solve?\n\tWhat did you learn?\n\tDescription:\t",
    name: "Description"
},  {
    type: "input",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running:\t",
    name: "Installation"
},  {
    type: "input",
    message: "Provide instructions and examples for use. Include screenshots as needed.\n\tTo add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:\n\t```md\n\t![alt text](assets/images/screenshot.png)\n\t```\n\tUsage:\t",
    name: "Usage"
},  {
    type: "input",
    message: "List your collaborators, if any, with links to their GitHub profiles.\nIf you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.\nIf you followed tutorials, include links to those here as well.",
    name: "Credits"
},  {
    type: "input",
    message: "The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).",
    name: "Licences"
}
];


function writeToFile(fileName, data) {
    fs.writeFile(filename, data, function(err) {
        console.log(filename);
        console.log(data);
        if (err) {
            return console.log(err);
        } else {
            console.log("success")
        }
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        writeToFile("README.md", generatorMarkDown(data));
        console.log(data);
    });
};

// Function call to initialize app
init();
