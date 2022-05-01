
const { writeFile, copyFile } = require ('./utils/generate-site.js');
const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require('./src/page-template.js');
 const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//fs.writeFile('./dist/index.html');
   // if (err) {
    //  console.log(err);
    // return;
    //}
     
          //console.log('Page created! Check out index.html in this directory to see it!');
  
//     fs.copyFile('./src/style.css', './dist/style.css', err => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log('Style sheet copied successfully!');
//     });
//  });



 const promptManager = () => {
    
     return inquirer.prompt([
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
         name: 'employeeRole',
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
        name: 'confirmSchool',
        message: 'Would you like to enter a school name?',
        default: true
      },
      {
        type: 'input',
        name: 'school',
        message: 'enter the name of your school',
        when: ({ confirmSchool }) => {
          if (confirmSchool) {
            return true;
          } else {
            return false;
          }
        }
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
     if(teamData.confirmAddteam) {
         return promptTeam(managerData);
     } else {
         return managerData;
     }
 });
  };
//  const generatePage = ()
 promptManager()
 .then(promptTeam)
 .then(managerData => {
     return generatePage(managerData);
     
     //fs.writeFile('./index.html', pageHTML, err =>{
     //if(err) throw new Error(err);
     //console.log('page created!');
 //});
 })
  .then(pageHTML => {
     return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
      console.log(writeFileResponse);
     return copyFile();
  })
  .then(copyFileResponse => {
      console.log(copyFileResponse);
  })
  .catch(err => {
     console.log(err);
  });




