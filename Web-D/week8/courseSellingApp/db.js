const mongoose = require("mongoose");
mongoose.connect("");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String
}) 

const adminSchema = Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String 
}) 

const courseSchema = Schema({
    title: String,
    discription: String,
    price: Number,
    imageUrl: String,
    creatorID: ObjectId
}) 

const purchaseSchema = Schema({
    userId: ObjectId,
    courseId: ObjectId,

}) 

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", userSchema);
const courseModel = mongoose.model("course", userSchema);
const purchaseModel = mongoose.model("purchase", userSchema); 

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}