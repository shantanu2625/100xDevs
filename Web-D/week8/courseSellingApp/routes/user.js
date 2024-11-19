function createUserRoutes(app) {
    app.post('/user/signup', (req, res)=>{
        res.json({
            message: "Signup Endpoint"
        })
    }) 
    
    app.post('/user/signin', function(req, res){
        res.json({
            message: "Signin Endpoint"
        })
    })   
    
    app.get('/user/purchases', function(req, res){
        res.json({
            message: "Purchases Endpoint"
        })
    })
}
 
module.exports = {
    createUserRoutes: createUserRoutes
}
