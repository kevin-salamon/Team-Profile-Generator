const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
var externalCounter = 1;
var hasManager = false;

var htmlHeader = `<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Krona+One&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lobster&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Cinzel&display=swap" rel="stylesheet">
</head>
<body>

    <div class="jumbotron" style="color:white; background-color:red;">
        <h1 class="display-4 text-center" style="font-weight:bolder;">My Team</h1>
    </div>`;

var htmlFooter = `</body>
</html>`;

function startProfile() {
    console.log("-----------------------");
    console.log("We will now begin building profiles for your software team.")
    console.log("To start, please enter the role for a new employee.");
    inquirer.prompt([
        {
            type: "list",
            message: "Please choose the employee role within the team.",
            name: "role",
            choices: ["Manager", "Engineer", "Intern"]
        }
    ]).then(function(response) {
        fs.writeFileSync("output/output.html", htmlHeader + `\n`, function(error) {
            if (error) {
                throw error;
            } else {
                console.log("program started");
            }
        });

        if (response.role === "Manager") {
            buildManager();
        } else if (response.role === "Engineer") {
            buildEngineer();
        } else if (response.role === "Intern") {
            buildIntern();
        }
    });
}

function buildManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the name of the Manager.",
            name: "name",
            default: "Kevin"
        },
        {
            type:"input",
            message: "What is the manager's office number?",
            name: "office",
            default: "1"
        },
        {
            type:"input",
            message: "What is the manager's email?",
            name: "email",
            default: "theksalamon@gmail.com"
        },
        {
            type: "list",
            message: "What employee would you like to add next?",
            name: "role",
            choices: ["Manager", "Engineer", "Intern", "none"]
        }
    ]).then(function(response) {

        hasManager = true;
        let id = externalCounter;
        let output = new Manager(response.name, id, response.email, response.office).addProfile();

        fs.appendFileSync("output/output.html", output + `\n`, function(error) {
            if (error) {
                throw error;
            } else {
                console.log("manager added");
            }
        });

        externalCounter++;

        if (response.role === "Manager") {
            buildManager();
        } else if (response.role === "Engineer") {
            buildEngineer();
        } else if (response.role === "Intern") {
            buildIntern();
        } else if (response.role === "none") {
            endProfile();
        }
    });
}

function buildEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the name of the employee.",
            name: "name",
            default: "Kevin"
        },
        {
            type:"input",
            message: "What is your github?",
            name: "github",
            default: "kevin-salamon"
        },
        {
            type:"input",
            message: "What is the employee's email?",
            name: "email",
            default: "theksalamon@gmail.com"
        },
        {
            type: "list",
            message: "What employee would you like to add next?",
            name: "role",
            choices: ["Manager", "Engineer", "Intern", "none"]
        }
    ]).then(function(response) {

        let id = externalCounter;
        let output = new Engineer(response.name, id, response.email, response.github).addProfile();

        fs.appendFileSync("output/output.html", output + `\n`, function(error) {
            if (error) {
                throw error;
            } else {
                console.log("engineer added");
            }
        });

        externalCounter++;

        if (response.role === "Manager") {
            buildManager();
        } else if (response.role === "Engineer") {
            buildEngineer();
        } else if (response.role === "Intern") {
            buildIntern();
        } else if (response.role === "none") {
            endProfile();
        }
    });
}

function buildIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the name of the employee.",
            name: "name",
            default: "Kevin"
        },
        {
            type:"input",
            message: "What is your school?",
            name: "school",
            default: "PSU"
        },
        {
            type:"input",
            message: "What is the employee's email?",
            name: "email",
            default: "theksalamon@gmail.com"
        },
        {
            type: "list",
            message: "What employee would you like to add next?",
            name: "role",
            choices: ["Manager", "Engineer", "Intern", "none"]
        }
    ]).then(function(response) {

        let id = externalCounter;
        let output = new Intern(response.name, id, response.email, response.school).addProfile();

        fs.appendFileSync("output/output.html", output + `\n`, function(error) {
            if (error) {
                throw error;
            } else {
                console.log("intern added");
            }
        });

        externalCounter++;

        if (response.role === "Manager") {
            buildManager();
        } else if (response.role === "Engineer") {
            buildEngineer();
        } else if (response.role === "Intern") {
            buildIntern();
        } else if (response.role === "none") {
            endProfile();
        }
    });
}

function endProfile() {

    if (hasManager === false) {
        console.log("Sorry, each team must have at least one manager. Please include details for a manager.");
        buildManager();
    } 

    fs.appendFileSync("output/output.html", htmlFooter, function(error) {
        if (error) {
            throw error;
        } else {
            console.log("program ended");
        }
    });

    if (hasManager === true) {
        console.log("File written to output! Application closing...");
    }

}


startProfile();
