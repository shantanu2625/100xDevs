const { Router } = require("express");
const userRouter = Router();


userRouter.post('/signup', (req, res)=>{
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
