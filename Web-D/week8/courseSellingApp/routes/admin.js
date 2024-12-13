const { Router } = require("express");
const adminRouter = Router();
const { adminModel, userModel } =  require("../db") 
const jwt = require("")
const {JWT_ADMIN_PASSWORD} = require("../config"); 
const {adminMiddleware} = require("../middleware/admin");


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

    const admin = await adminModel.findOne({
        email: email,
        password: password
    });

    if (admin) {
        const token  = jwt.sign({
            id: user._id
        }, JWT_ADMIN_PASSWORD); 

        res.json({
          token: token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
}) 

adminRouter.post("/course", adminMiddleware, async function(req, res){
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