const jwt = require("jsonwebtoken");

const userData = {
    id: 1,
    name: "Shantanu Bangar"
} 
const secret_key = 'secret';
const token = jwt.sign(userData, secret_key, {expiresIn: '1h'});

console.log(token);