const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/employee.js");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");

function startProfile() {
    console.log("-----------------------");
    console.log("Please enter the role for a new employee.");
    inquirer.prompt([
        {
            type: "list",
            message: "Please choose the employee role within the team.",
            name: "role",
            choices: ["Manager", "Engineer", "Intern"]
        }
    ]).then(function(response) {
        fs.writeFileSync("log.txt", `Start \n`, function(error) {
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
            message: "Please enter the name of the employee.",
            name: "name",
            default: "Kevin"
        },
        {
            type:"input",
            message: "What is your office number?",
            name: "office",
            default: "1"
        },
        {
            type: "list",
            message: "What employee would you like to add next?",
            name: "role",
            choices: ["Manager", "Engineer", "Intern", "none"]
        }
    ]).then(function(response) {
        fs.appendFileSync("log.txt", `Manager \n`, function(error) {
            if (error) {
                throw error;
            } else {
                console.log("manager added");
            }
        });

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
            type: "list",
            message: "What employee would you like to add next?",
            name: "role",
            choices: ["Manager", "Engineer", "Intern", "none"]
        }
    ]).then(function(response) {
        fs.appendFileSync("log.txt", `Engineer \n`, function(error) {
            if (error) {
                throw error;
            } else {
                console.log("engineer added");
            }
        });

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
            type: "list",
            message: "What employee would you like to add next?",
            name: "role",
            choices: ["Manager", "Engineer", "Intern", "none"]
        }
    ]).then(function(response) {
        fs.appendFileSync("log.txt", `Intern \n`, function(error) {
            if (error) {
                throw error;
            } else {
                console.log("intern added");
            }
        });

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
    fs.appendFileSync("log.txt", `End \n`, function(error) {
        if (error) {
            throw error;
        } else {
            console.log("program ended");
        }
    });
}


startProfile();


// BUILDING BLOCKS
// if (inputCount === 0) {
//     fs.writeFileSync("log.txt", `Starting Piece \n`, function(error) {
//         if (error) {
//         throw error;
//         } else {
//             console.log("added badge. program started");
//         }
//     });
//     inputCount ++;
// } else if (teamComplete === true && teamArray.includes("Manager")) {
//     fs.appendFileSync("log.txt", `End Piece \n`, function(error) {
//         if (error) {
//         throw error;
//         } else {
//             console.log("added badge. program finished");
//         }
//     });
// } else {
//     fs.appendFileSync("log.txt", `Middle Piece \n`, function(error) {
//         if (error) {
//         throw error;
//         } else {
//             console.log("added badge.");
//         }
//     });
// }