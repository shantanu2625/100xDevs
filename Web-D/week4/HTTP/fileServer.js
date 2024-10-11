const fs = require('fs');
const express = require('express');

const app = express();

app.get('/files/:fileName', function(req, res) {
    const name = req.params.fileName;
    console.log(name);
    fs.readFile(name , "utf-8" , function (err, data) {
        res.json({
            data
        });
    });
    

}); 

app.listen(3000);