
// const generateTeam = teamArr => {
//     return `
//       <section class="my-3" id="portfolio">
//         <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
//         <div class="flex-row justify-space-between">
//         ${teamArr.engineer
        
//           .map(({ name, email, id , link }) => {
//             return `
//             <div class="col-12 mb-2 bg-dark text-light p-3">
//               <h3 class="portfolio-item-title text-light">${name}</h3>
//               <h4 class="portfolio-languages">
//                 Email: ${email}
//               </h4>
//               <p>${id}</p>
//               <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View employee on GitHub</a>
//             </div>
//           `;
//           })
//           .join('')}
  
//         ${teamArr.intern
          
//           .map(({ name, email, id, school, link }) => {
//             return `
//             <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
//               <h3 class="portfolio-item-title text-light">${name}</h3>
//               <p class="portfolio-languages"> 
//                 ${email}
//               <p>
//               <hr/>
//               <p>${id}</p>
//               <hr/>
//               <p>${school}</p>
//               <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View employee on GitHub</a>
//             </div>
//           `;
//           })
//           .join('')}
//         </div>
//       </section>
//     `;
//   };
  
//   module.exports = (managerArr) => {
//     // destructure page data by section
//     const { name, role, id, email, link, officeNumber } = managerArr;
  
//     return `
//     <!DOCTYPE html>
//     <html lang="en">
  
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <title>Team profile generator</title>
//       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
//       <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
//       <link rel="stylesheet" href="style.css">
//     </head>
  
//     <body>
//       <header>
//        <h1>${name}</h1>
//        <h2>${}</h2>
//        </header>
//        <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            
//               <p class="portfolio-languages"> 
//                 ${email}
//               <p>
//               <hr/>
//               <p>${id}</p>
//               <hr/>
              
//               <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View employee on GitHub</a>
//               <p>${officeNumber}</p>
//             </div>
      
//       <main class="container my-5">
       
//        ${generateTeam}
//       </main>
//     </body>
//     </html>
//     `;
//   };