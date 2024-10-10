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

}) 

app.put("/", function(req, res) {

}
) 

app.delete("/", function(req, res) {

})

app.listen(3000)
