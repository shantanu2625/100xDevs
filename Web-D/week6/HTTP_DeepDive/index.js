const express = require("express");
const app = express();

app.use(express.json());

const users = [];

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username,
        password
    }) 

    res.send({
        message: "You have signed up"
    })
}) 

app.post('/signin', (req, res) => {

}) 

app.listen(3000);