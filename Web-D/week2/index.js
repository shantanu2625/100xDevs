const fs =  require("fs");

function print(err, data) {
    console.log(data);
} 

fs.readFile("a.txt", "hex", print);

fs.readFile("a.txt", "hex", print);

setTimeout(() =>)