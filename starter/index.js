const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
let team=[];

//create  prompt to enter the team manager’s info
const managerInfo = [

    {
        type: "input",
        name: "name",
        message: "What is the team manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the team manager's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the team manager's email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?"
    }
];


// create a menu with the option
const menuInfo = [
    {
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: ["Add an engineer", "Add an intern", "Finish building my team"]
    }
];

//prompt the engineer questions to get engineer info
const engineerInfo = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github username?"
    }
];

//promopt the intern questions to get intern info
const internInfo = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email?"
    },
    {
        type: "input",
        name: "school",
        message: "What is the intern's school?"
    }
];

function manager(){
    inquirer
    .prompt(managerInfo
      /* Pass your questions in here */
    )
    .then((answers) => {
        let newManager=new Manager(answers.name,answers.id,answers.email,answers.officeNumber);
        team.push(newManager);
        menu()
       
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });

}
manager();

function menu(){
    inquirer
    .prompt(menuInfo)
    .then ((answers) => {
        console.log(answers)
    })
    .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      });

}




//When a user decides to finish building their team then they exit the application, and the HTML is generated.


/*  Call the `render` function (provided for you) and pass in an array containing all employee objects; 
    * The `render` function will generate and return a block of HTML including templated divs for each employee!

const html = render(team);
  * Create an HTML file using the HTML returned from the `render` function. 
    * Write it to a file named `team.html` in the `output` folder. 
    * You can use the provided variable `outputPath` to target this location. */

// const html = render(team);
// console.log(html);




// fs.writeToFile(outputPath, render(team));


