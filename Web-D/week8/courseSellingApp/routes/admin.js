const { Router } = require("express");
const adminRouter = Router();
const { adminModel, userModel } =  require("../db")


adminRouter.post("/signup", async function(req, res){
    
    const { email, password, firstName, lastName } = req.body;

    await userModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    });

    res.json({
        message: "Signup succeeded"
    })
}) 

adminRouter.post("/signin", async function(req, res){
    const { email, password } = req.body;

    const user = await userModel.findOne({
        email: email,
        password: password
    });

    if (user) {
        const token  = jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD); 

        res.json({
          token: token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
}) 

adminRouter.post("/course", function(req, res){
    res.json({
        message: "Course Endpoint"
    })
}) 

adminRouter.put("/course", function(req, res){
    res.json({
        message: "Course Endpoint"
    })
}) 

adminRouter.get("/course/bulk", function(req, res){
    res.json({
        message: "Course Endpoint"
    })
}) 

module.exports = {
    adminRouter: adminRouter
}