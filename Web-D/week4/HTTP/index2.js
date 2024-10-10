const express = require('express');
const app = express();

function add(n) {
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans = ans + i;

    } 
    return ans;
}

// req => request , res => response
app.get("/", function(req,res) {
    throw new Error("shan's new error")
}) 

app.listen(3000); 