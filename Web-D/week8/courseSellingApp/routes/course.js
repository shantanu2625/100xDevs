function createCourseRoutes(app) {
    app.post('/course/purchase', function(req, res){
        res.json({
            message: "Purchase Endpoint"
        })
    })
    
    app.get('/courses/preview', function(req, res){
        res.json({
            message: "Courses Preview Endpoint"
        })
    })
} 

module.exports = {
    createCourseRoutes: createCourseRoutes
}