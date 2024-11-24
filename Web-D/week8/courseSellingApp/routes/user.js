const { Router } = require("express");
const userRouter = Router();


userRouter.post('/signup', (req, res)=>{
    const {email, password, firstName, lastName} = req.body;
    res.json({
        message: "Signup Endpoint"
    })
}) 

userRouter.post('/signin', function(req, res){
    res.json({
        message: "Signin Endpoint"
    })
})   

userRouter.get('/purchases', function(req, res){
    res.json({
        message: "Purchases Endpoint"
    })
})


module.exports = {
    userRouter: userRouter
};
