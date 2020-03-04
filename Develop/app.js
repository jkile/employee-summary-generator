const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

employeeArray = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
async function init() {
    const employeeSelector = await inquirer.prompt({
        type: "list",
        name: "employee",
        message: "Choose the type of employee to add: ",
        choices: ["Manager", "Intern", "Engineer", "Finished"]
    });
    switch (employeeSelector.employee) {
        case "Manager":
            const managerPrompts = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Provide manager name:"
                },
                {
                    type: "input",
                    name: "id",
                    message: "Provide manager ID:"
                },
                {
                    type: "input",
                    name: "email",
                    message: "Provide manager email:"
                },
                {
                    type: "input",
                    name: "office",
                    message: "Provide manager office number:"
                }
            ]);
            employeeArray.push(new Manager(managerPrompts.name, managerPrompts.id, managerPrompts.email, managerPrompts.office));
            init();
            break;
        case "Intern":
            const internPrompts = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Provide intern name:"
                },
                {
                    type: "input",
                    name: "id",
                    message: "Provide intern ID:"
                },
                {
                    type: "input",
                    name: "email",
                    message: "Provide intern email:"
                },
                {
                    type: "input",
                    name: "school",
                    message: "Provide intern school:"
                }
            ]);
            employeeArray.push(new Intern(internPrompts.name, internPrompts.id, internPrompts.email, internPrompts.school));
            init();
            break;
        case "Engineer":
            const engineerPrompts = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Provide engineer name:"
                },
                {
                    type: "input",
                    name: "id",
                    message: "Provide engineer ID: "
                },
                {
                    type: "input",
                    name: "email",
                    message: "Provide engineer email"
                },
                {
                    type: "input",
                    name: "github",
                    message: "Provide engineer Github:"
                }
            ]);
            employeeArray.push(new Engineer(engineerPrompts.name, engineerPrompts.id, engineerPrompts.email, engineerPrompts.github));
            init();
            break;
        case "Finished":
            console.log(employeeArray);
            render(employeeArray);
            break;
    }

}
init();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
