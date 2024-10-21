const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "shan123"
const app = express();

const users = [];

app.use(express.json());

app.post('/signup', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    
    users.push({
        username: username,
        password: password
    }) 

    res.json({
        message: "You have signed up successfully"
    })

}) 

app.post('/signin', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password); 

    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token: token
        })
    } else {
        res.json({
            message: "Invalid Credentials"
        })
    }

}) 

app.get('/me', (req, res)=>{

}) 

app.listen(3000);