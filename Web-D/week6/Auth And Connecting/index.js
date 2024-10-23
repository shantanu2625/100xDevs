const express = require('express');
const jwt = require('jsonwebtoken'); 
const JWT_SECRET = "shan123"
const app = express();

const users = [];

function logger(req, res, next) {
    console.log(`${req.method} request came`);
    next();
}
app.use(express.json()); 



app.post('/signup', logger, (req, res)=>{
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

app.post('/signin', logger,  (req, res)=>{
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

app.get('/' , (req, res)=> {
    res.sendFile(__dirname + "/index.html");
})

function auth(req, res, next) {
    const token = req.headers.token;
    const decodeData = jwt.verify(token, JWT_SECRET);
    if (decodeData.username) {
        req.username = decodeData.username;
        next();
    } else {
        res.json({
            message: "You are not logged in"
        })
    }
}
 
app.get('/me',  logger ,auth,  (req, res)=>{     
    const token = req.headers.token; 

    const decodeData = jwt.verify(token, JWT_SECRET); 

    if (decodeData.username) {
        let foundUser = null;

        for (let i = 0; i < users.length; i++) {
            if (users[i].username === req.username) {
                foundUser = users[i];
            }
        } 

        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } else {
        res.json({
            message: "You are not logged in"
        })
    }
    
    
})  

app.get('/todo', auth, (req, res)=> {

}) 

app.post('/todo', auth, (req, res)=> {

}) 

app.delete('/todo', auth, (req, res)=> {

}) 



app.listen(3000);