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

adminRouter.post("/", function(req, res){
    res.json({
        message: "Course Endpoint"
    })
}) 

adminRouter.put("/", function(req, res){
    res.json({
        message: "Course Endpoint"
    })
}) 

adminRouter.get("/bulk", function(req, res){
    res.json({
        message: "Course Endpoint"
    })
}) 

module.exports = {
    adminRouter: adminRouter
}