const { Router } = require("express");
const adminRouter = Router();
const { adminModel } =  require("../db")


adminRouter.post("/signup", function(req, res){
    
    res.json({
        message: "Signup Endpoint"
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