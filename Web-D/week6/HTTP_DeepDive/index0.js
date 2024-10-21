const express = require("express"); 
const jwt = require("jsonwebtoken");
const app = express(); 
const JWT_SECRET = "USER_APP";


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

    console.log(users);
}) 

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password); 

    if (user) {
        const token = jwt.sign({
            username: user.username
        }, JWT_SECRET); 

        user.token = token; 
        res.send({
            token
        }) 

        console.log(users);
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
    
})  

app.get('/me', (req, res)=> {
    const token = req.headers.token;  
    const decodedInformation = jwt.verify(token, JWT_SECRET);
    const username = decodedInformation.username;

    let foundUser  = null;

    for (let i = 0; i < users.length; i ++) {
        if (users[i].uername == uername) {
            foundUser = users[i];
        } 
    } 

    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } else {
        res.json({
            message: "token invalid"
        })
    }

   
})

app.listen(3000);

