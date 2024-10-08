// const fs = require('fs');

// fs.readFile( file, 'utf-8', (err,data)=> {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data)
//     }
// } )


const express = require('express');
const app = express()

app.get('/' , function (req, res){
    res.send("Hello Shan <h1>This is my first http server </h1>");
    res.send("<h1>Hello World</h1>")
}) 

app.post('/' , function(req,res){
    res.send("Hello from the post endpoint");
}) 

app.get('/asd',function(req, res){
    res.send("Hello from asd endpoint")
})

app.listen(3000);
