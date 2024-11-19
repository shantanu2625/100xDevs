const jwt = require('jsonwebtoken');
const express = require('express'); 
const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt');
const app = express();

 

app.post('/course/purchase', function(req, res){
    res.json({
        message: "Purchase Endpoint"
    })
})

app.get('courses', function(req, res){
    res.json({
        message: "Courses Endpoint"
    })
})


app.listen(3000);
