const express = require("express");
const app = express();


var users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    } ]
}]  

app.use(express.json());
 
app.get("/", function(req, res) {
    const johnKidney = users[0].kidneys; 
    const noOfKidneys = johnKidney.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < johnKidney.length; i++) {
        if (johnKidney[i].healthy) { 
            numberOfHealthyKidneys += 1;

        }
    } 
    const numberOfUnhealthyKidneys = noOfKidneys - numberOfHealthyKidneys;
    res.json({
        johnKidney,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
}) 

app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    }) 
    res.json({
        msg: "Done!"
    })
}) 

app.put("/", function(req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true; 

    } 
    res.json({
        
    })
}
) 

app.delete("/", function(req, res) {

})

app.listen(3000)
