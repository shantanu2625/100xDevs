const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "shan123123"

function userMiddleware(req, res, next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token, ); 

} 

module.exports = {
    userMiddleware: userMiddleware
}