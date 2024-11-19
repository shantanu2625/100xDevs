const { Router } = require("express");
const courseRouter = Router();


courseRouter.post('/purchase', function(req, res){
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