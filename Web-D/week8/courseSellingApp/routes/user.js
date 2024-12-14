const { Router } = require("express");
const { userModel, purchaseModel } = require("../db");
const jwt = require("jsonwebtoken")
const {JWT_USER_PASSWORD} = require("../config");
const userRouter = Router();
const { z } = require("zod");
const { userMiddleware } = require("../middleware/user");


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

userRouter.post('/signin', async function(req, res){
    const { email, password } = req.body;

    //TODO: ideally password should be hashed, and hence you cant compare the user provided password and the database password


    const user = await userModel.findOne({
        email: email,
        password: password
    }) 

    if (user) {
       const token =  jwt.sign({
            user:user._id
        }, JWT_USER_PASSWORD)

        res.json({
            token: token
        });
        
    }  else {
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }

})   

userRouter.get('/purchases', userMiddleware , async function(req, res){
    const userId = req.userId;
    
    const purchases = await purchaseModel.find({
        userId
    })

    res.json({
        purchases
    })
})


module.exports = {
    userRouter: userRouter
};
