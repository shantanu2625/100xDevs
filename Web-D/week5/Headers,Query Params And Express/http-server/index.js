const express = require("express");

const app = express(); 

let requestCount = 0;

function requestCounter() {
    requestCount = requestCount + 1;
    console.log(`Number of reqest are ${requestCount }`)
    
}

app.use(function(req,res,next){
    
})

app.get('/add/:a/:b', function(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b); 

    res.json({
        ans:  a + b
    });
}) ;

app.get('/subtract', function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a - b
    }
    )
}); 

app.get('/multiply', function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a * b
    })
}); 

app.get('/divide', function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a / b
    }
    )
});

app.listen(3000);