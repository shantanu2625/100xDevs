const { Router } = require("express");
const { userMiddleware } = require("../middleware/user");
const courseRouter = Router(); 
const { purchaseModel } = require("../db");


courseRouter.post('/purchase', userMiddleware, async function(req, res){ 
    const userId = req.userId;
    const courseId = req.body.courseId; 

    await purchaseModel.create({
        userId,
        courseId
    }
    )
    
    res.json({
    message: "Course Purchase Endpoint"
    })
})

courseRouter.get('/preview', function(req, res){
    res.json({
    message: "Courses Preview Endpoint"
    })
})


module.exports = {
    courseRouter: courseRouter
};