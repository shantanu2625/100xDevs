const { Router } = require("express");
const adminRouter = Router();
const { adminModel, userModel, courseModel } =  require("../db") 
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
    const adminId = req.userId; 
    const { title, description, imageUrl, price } = req.body;
    
    const course = await courseModel.create({
        title : title,
        description : description,
        imageUrl : imageUrl,
        price : price,
        creatorID : userId

    })
    
    res.json({
        message: "Course created",
        courseId: course._id
    })
}) 

adminRouter.put("/course", async function(req, res){ 
    const adminId = req.userId;

    const { title, description, imageUrl, price, courseId } = req.body; 

    const course = await courseModel.updateOne({
        _id: courseId 
    },
        {
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price
    })

    res.json({
        message: "Course Updated",
        courseId: course._id
    })
}) 

adminRouter.get("/course/bulk", adminMiddleware, async function(req, res){

    const admindId = req.userId;
    
    const course = await courseModel.find({
        creatorId: adminId
    });

    res.json({
        message: "Course Updated",
        courseId: course._id
    })
    
}) 

module.exports = {
    adminRouter: adminRouter
}