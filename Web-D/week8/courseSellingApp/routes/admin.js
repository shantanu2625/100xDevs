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

adminRouter.post("/signin", function(req, res){
    res.json({
        message: "Signin Endpoint"
    })
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