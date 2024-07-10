document.addEventListener("DOMContentLoaded", (event) => {
    console.log("Hello, world! I'm loading after the DOM!");
  });

console.log("here");

// document.addEventListener('DOMContentLoaded', function() {
//     var pa = require('./info.json');
//     console.log(pa)
//     var meet_the_team = document.getElementsByClassName("meet_the_team")[0];
//     for (var key in pa) {
//         // var name = key
//         // var id = pa[key]["id"]
//         // var major = pa[key]["concentration"];
//         // var college = pa[key]["education"]
//         // var badge = document.createElement('div');
//         // badge.className = 'badge';
//         // badge.innerHTML = 
//         //     // '<img>' + img + '</img>' + 
//         //     '<h1>' + name + '</h1>' +
//         //     '<h2>' + major + '</h2>';
//         // console.log(badge)
//         const div = document.createElement('div');
//         const idSpan = document.createElement('span');
//         idSpan.textContent = `ID: ${key.id}, `;
//         div.appendChild(idSpan);

//         const nameSpan = document.createElement('span');
//         nameSpan.textContent = `Name: ${key.major}, `;
//         div.appendChild(nameSpan);

//         const ageSpan = document.createElement('span');
//         ageSpan.textContent = `Age: ${key.college}`;
//         div.appendChild(ageSpan);
//         meet_the_team.appendChild(div);    
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    const meet_the_team = document.getElementById('meet_the_team');
    var memberData = require('./info.json');
    console.log(memberData)
    if (meet_the_team) {
      // Loop through each object in the JSON array
      memberData.forEach(item => {
        // Create a new div for each object
        const div = document.createElement('div');
  
        // Create spans for each property and add them to the div
        const idSpan = document.createElement('span');
        idSpan.textContent = `ID: ${item.id}, `;
        div.appendChild(idSpan);
  
        const nameSpan = document.createElement('span');
        nameSpan.textContent = `Name: ${item.major}, `;
        div.appendChild(nameSpan);

        const ageSpan = document.createElement('span');
        ageSpan.textContent = `Age: ${item.college}`;
        div.appendChild(ageSpan);
  
        // Append the div to the main container
        jsonContainer.appendChild(div);
      });
    } else {
      console.error('Element with id "jsonContainer" not found.');
    }
  });
  