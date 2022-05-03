
const { writeFile, copyFile } = require ('./utils/generate-site.js');
const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require('./src/page-template.js');
 const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { list } = require('process');
const teamMembers = []
const menu = () => {
inquirer.prompt({
    type: 'list',
    Massage: 'What do you wanna do next',
    choices: ['addIntern', 'addEngineer', 'Finish'],
    name: 'choice'
}).then(userChoice => {
    console.log(userChoice);
    if(userChoice.choice === 'addIntern'){
        promptIntern();
    } else if(userChoice.choice === 'addEngineer'){
        promptEngineer();
    }
})
}
 const promptManager = () => {
    
      inquirer.prompt([
         {
            type: 'input' ,
            name: 'managerName',
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
            name: 'managerId',
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
             name: 'managerEmail',
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
     ]).then(managerTeam => {
        console.log(managerTeam);
        var managerMember = new Manager(managerTeam.managerName, managerTeam.managerId, managerTeam.managerEmail, managerTeam.officeNumber);
        teamMembers.push(managerMember);
        menu();
     })
 };
 const promptEngineer = () => {
     console.log(`
 =================
 Add a team member
 =================
 `);
//  if(!managerData.team) {
//      managerData.team = [];
    
 //}
  inquirer.prompt([
    {
        type: 'input',
        name: 'engineerName',
        message: 'Whats the engineers name?',
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
 ]).then(engineerData => {
    console.log(engineerData);
    var engineerMember = new Engineer(engineerData.engineerName, engineerData.id, engineerData.email, engineerData.github );
    teamMembers.push(engineerMember);
    console.log(teamMembers);
    menu();
 })
};
const promptIntern = () => {
     inquirer.prompt([
    {
        type: 'input',
        name: 'internName',
        message: 'Whats the interns name?',
    },
   
      {
        type: 'input',
        name: 'school',
        message: 'enter the name of your school',
        
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
        
    ]).then(internData => {
       console.log(internData);
       var internMember = new Intern(internData.internName, internData.id, internData.email, internData.school );
       teamMembers.push(internMember);
       console.log(teamMembers);
       menu();
    })
};
promptManager();
//  .then(teamData => {
//     //  managerData.team.push(teamData);
//     //  if(teamData.confirmAddteam) {
//     //      return promptTeam(managerData);
//     //  } else {
//     //      return managerData;
//     //  }
//     console.log(teamData);
//  });
// }


//  promptManager()
//  .then(promptTeam)
//  .then(managerData => {
//      return generatePage(managerData);
 
//  })
//   .then(pageHTML => {
//      return writeFile(pageHTML);
//   })
//   .then(writeFileResponse => {
//       console.log(writeFileResponse);
//      return copyFile();
//   })
//   .then(copyFileResponse => {
//       console.log(copyFileResponse);
//   })
//   .catch(err => {
//      console.log(err);
//   });




