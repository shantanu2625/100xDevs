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

// removing all the unhealthy kidneys 
app.delete("/", function(req, res) { 
    if (isThereAtleastOneUnhealthyKidney()) {
        
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            })
        } 
    } 
    users[0].kidneys = newKidneys; 
    res.json({
        msg: "Done!"
    })
    } else {
        res.status(411).json({
            msg: "You have no bad kidneys" 
        });
    } 
    
})  

function isThereAtleastOneUnhealthyKidney() {
    let atLeastOneUnHealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length;i++) {
        if (!users[0].kidneys[i].healthy) {
            atLeastOneUnHealthyKidney = true;
        }
    } 
    return atLeastOneUnHealthyKidney;
}

app.listen(3000)
