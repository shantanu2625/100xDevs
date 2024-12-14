const { Router } = require("express");
const { userMiddleware } = require("../middleware/user");
const courseRouter = Router(); 
const { purchaseModel, courseModel } = require("../db");


courseRouter.post('/purchase', userMiddleware, async function(req, res){ 
    const userId = req.userId;
    const courseId = req.body.courseId; 

    await purchaseModel.create({
        userId,
        courseId
    }
    )
    
    res.json({
    message: "You have succesfully bought the course"
    })
})

courseRouter.get('/preview', async function(req, res){ 

    const course = await courseModel.find({})

    res.json({
            course
    })
})


module.exports = {
    courseRouter: courseRouter
};