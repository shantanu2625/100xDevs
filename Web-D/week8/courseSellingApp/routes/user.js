const { Router } = require("express");
const { userModel } = require("../db")
const userRouter = Router();
const { z } = require("zod");


userRouter.post('/signup', async (req, res)=>{
    const requiredBody = z.object({
        email: z.string().min(10).max(40).email(),
        password: z.string().min(6).max(20),
        firstName: z.string().min(2).max(15),
        lastName: z.string().min(5).max(10)
    }) 
    try {
    await userModel.create({
        email: email,
        password: password,
        firstName,
        lastName
    }) 
} catch (e) {
    
}
    res.json({
        message: "Signup Succeeded"
    })
}) 

userRouter.post('/signin', function(req, res){
    const { email, password } = req.body;

    const user = userModel.find({
        email: email,
        password: password
    })
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
