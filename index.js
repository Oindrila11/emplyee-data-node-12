const inquirer = require("inquirer");

const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input' ,
            name: 'ManagerName',
            message: 'Whats is your managers name?(Required)?',
            validate: managerNameInput => {
                if(managerNameInput) {
                    return true;
                }else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input' ,
            name: 'ManagerId',
            message: 'Whats is your managers employee Id?(Required)?',
            validate: managerIdInput => {
                if(managerIdInput) {
                    return true;
                }else {
                    console.log('Please enter an empployee Id!');
                    return false;
                }
            },
        },
        {
            type: 'input' ,
            name: 'ManagerEmail',
            message: 'Whats is your managers Email Id?(Required)?',
            validate: managerEmailInput => {
                if(managerEmailInput) {
                    return true;
                }else {
                    console.log('Please enter an email Id!');
                    return false;
                }
            },   
        },
        {
            type: 'input' ,
            name: 'officeNumber',
            message: 'Whats is your managers Office Number?(Required)?',
            validate: officeNumber => {
                if(officeNumber) {
                    return true;
                }else {
                    console.log('Please enter an office number!');
                    return false;
                }
            },   
        },   
    ])
};
const promptTeam = managerData => {
    console.log(`
=================
Add a team member
=================
`);
if(!managerData.team) {
    managerData.team = [];
}
return inquirer.prompt([
    {
        type: 'list',
        name: 'eployeeRole',
        message:'What is the team memebers role?',
        choices: ['Engineer', 'Intern'],
        default: 'Enginner',
    },
    {
        type: 'input' ,
        name: 'id',
        message: 'Enter employee Id',
        validate: idInput => {
            if(idInput) {
                return true;
            }else {
                console.log('Please enter an employee Id!');
                return false;
            }
        },
    },
    {
        type: 'input' ,
        name: 'email',
        message: 'Enter email id',
        validate: emailInput => {
            if(emailInput) {
                return true;
            }else {
                console.log('Please enter an email Id!');
                return false;
            }
        },   
    },
    {
        type: 'input' ,
        name: 'github',
        message: 'enter github username',
        validate: githubInput => {
            if(githubInput) {
                return true;
            }else {
                console.log('Please enter a username!');
                return false;
            }
        },   
    },
    {
        type: 'confirm',
        name: 'confirmAddteam',
        message: 'Would you like to enter another team member?',
        default: false
      }  
])
.then(teamData => {
    managerData.team.push(teamData);
    if(managerData.confirmAddteam) {
        return promptTeam(managerData);
    } else {
        return managerData;
    }
});
};
promptManager()
.then(promptTeam)
.then(managerData => {
    return generatePage(managerData);
})




