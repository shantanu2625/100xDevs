 const mongoose = require("mongoose");
console.log("Connected to Mongo")
// mongoose.connect("mongodb+srv://shantanubangar1:7rvKVWEWOUJGJ8lz@cluster0.wi1xv.mongodb.net/coursera-app");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String
})     

const adminSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String 
}) 

const courseSchema = new Schema({
    title: String,
    discription: String,
    price: Number,
    imageUrl: String,
    creatorID: ObjectId
}) 

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId,

}) 

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema); 

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}