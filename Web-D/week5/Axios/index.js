const axios = require('axios');

// function main() {
//     fetch("https://sum-server.100xdevs.com/todos") 
//         .then (async (response) => {
//             const json = await response.json();
//             console.log(json.todos.length)
//         });
// };



async function main() {
    const response = await fetch("https://sum-server.100xdevs.com/todos");
    const json = await response.json;
    console.log(json.todos.length);
} 

main();