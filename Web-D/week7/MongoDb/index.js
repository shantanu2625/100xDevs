const express = require("express");
const jwt = require("jsonwebtoken");
const { UserModel, TodoModel } = require("./db");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const { z } =  require("zod");
const JWT_SECRET = "shanshan123tantan";

mongoose.connect(
  "mongodb+srv://shantanubangar1:7rvKVWEWOUJGJ8lz@cluster0.wi1xv.mongodb.net/todo-shan"
);

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
  // lets do here some input validation
  const requiredBody = z.object({
    email: z.string(),
    password: z.string(),
    name: z.string()
  });

  const parsedData = requiredBody.parse(req.body);
  const parsedDataWithSuccess = requiredBody.safeParse(req.body);
  

  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name; 

  const hashP = await bcrypt.hash(password, 10);
  
  await UserModel.create({
    email: email,
    password: hashP,
    name: name
  }); 
  
  res.json({
    message: "You are signed up"
  }); 

  
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password; 
  const name = req.body.name;


  const response = await UserModel.findOne({
    email: email,
  }); 

  if (!response) {
    res.status(403).json({
      message: "user does not exist in our database"
    }) 
    return;
  }

  const passwordMatch = bcrypt.compare(password, response.password);

  if (passwordMatch) {
    const token = jwt.sign(
    {
      id: response._id.toString()
    }, JWT_SECRET
    ) ;
    res.json({
      token
    })

  } else {
    res.status(403).json({
      message: "Inavlid Credentials"
    });
  };
  

  
});
app.post("/todo", auth, function (req, res) {
    const userId = req.userId;  
    const title = req.body.title;
    TodoModel.create({
         title,
         userId
    })

    res.json({
        userId: userId
    })  

});
app.post("/todos", auth, async function(req, res) { 
    const userId =  req.userId;
    const todos = await TodoModel.find({
        userId: userId
    })

    res.json({
        userId: userId
    })
}); 

function auth(req, res, next) {
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData) {
        req.userId = decodedData.id;
        next();
    } else {
        res.status(403).json({
            message: "Invalid Credentials"
        })
    }
}

app.listen(3000);


