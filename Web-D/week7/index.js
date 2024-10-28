const express = require('express');
const {UserMode1, TodoMode1} = require("./db");
const app = express();

app.post('/signup', async function(req, res){ 
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserMode1.insert({
        email: email,
        password: password,
        name: name
    }) 

})

app.post('/signin', function(req, res){

})
app.post('/todo', function(req, res){

})
app.post('/signin', function(req, res){
 
}) 

app.listen(3000);
 

