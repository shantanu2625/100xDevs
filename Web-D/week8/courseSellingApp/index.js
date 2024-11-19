const jwt = require('jsonwebtoken');
const express = require('express'); 
const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt');
const { createUserRoutes } = require("./routes/user"); 
const { createCourseRoutes } = require('./routes/course');
const app = express();

createUserRoutes(app);

createCourseRoutes(app);

app.listen(3000);
