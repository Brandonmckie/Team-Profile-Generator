const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/page-template.js");

// Import classes
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const newEmplyee = [];

const questions = async () => {
  const answers = await inquirer
    .prompt([
      {
        type: "input",
        message: "Enter your Name",
        name: "name",
      },
      {
        type: "input",
        message: "Enter your eamil",
        name: "email",
      },
      {
        type: "input",
        message: "Enter your ID number",
        name: "id",
      },
      {
        type: "list",
        message: "Select your role",
        choices: ["Intern", "Engineer", "Manager"],
        name: "role",
      },
    ])
    .then(function (answers) {
      if (answers.role === "Manager") {
        managerQuestions(answers);
      } else if (answers.role === "Engineer") {
        engineerQuestions(answers);
      } else {
        internQuestions(answers);
      }
    });
};

const internQuestions = (internAnswers) => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What school do you attend?",
        name: "school",
      },
      {
        type: "confirm",
        name: "addAnother",
        message: "Would you like to add another employee?",
      },
    ])
    .then(function (answers) {
      const newInern = new Intern(
        internAnswers.name,
        internAnswers.email,
        internAnswers.id,
        answers.school
      );
      newEmplyee.push(newInern);

      if (answers.addAnother === true) {
        questions();
      } else createTeam();
    });
};

const engineerQuestions = (engineerAnswer) => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter your GitHub",
        name: "github",
        validate: (github) => {
          if (github) {
            return true;
          } else {
            console.log("No github entered");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "addAnother",
        message: "Would you like to add another employee?",
      },
    ])
    .then(function (answers) {
      const newEngineer = new Engineer(
        engineerAnswer.name,
        engineerAnswer.email,
        engineerAnswer.id,
        answers.github
      );
      newEmplyee.push(newEngineer);

      if (answers.addAnother === true) {
        questions();
      } else createTeam();
    });
};

const managerQuestions = (managernAnswer) => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter your office number?",
        name: "officeNumber",
      },
      {
        type: "confirm",
        name: "addAnother",
        message: "Would you like to add another employee?",
      },
    ])
    .then(function (answers) {
      const newManager = new Manager(
        managernAnswer.name,
        managernAnswer.email,
        managernAnswer.id,
        answers.officeNumber
      );
      newEmplyee.push(newManager);
      if (answers.addAnother === true) {
        questions();
      } else createTeam();
    });
};

function createTeam() {
  fs.writeFileSync("./dist/index.html", generateTeam(newEmplyee), "utf-8");
}

questions();
