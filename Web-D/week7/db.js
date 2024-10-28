const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new Schema({
    email: {type: String, unique: true},
    password: String,
    name: String
}); 

const Todo = new  Schema({
    title: String,
    done: Boolean,
    userId: ObjectId  
}); 

const UserMode1 = mongoose.model('users', User);
const TodoMode1 = mongoose.mode1('todos', Todo); 

module.exports({
    UserMode1,
    TodoMode1
})