const mongoose = require('mongoose');

const mongo_url="mongodb+srv://krishnachaithanya6085:B3ymOA0XemLpGijo@cluster0.hsfrvea.mongodb.net/"

// Connect to MongoDB
mongoose.connect(mongo_url);

// Define schemas
const AdminSchema = new mongoose.Schema({
    username:String,
    password:String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String,
    purchasedCourses:[Number]
});

const CourseSchema = new mongoose.Schema({
    id:Number,
    title: String,
    description: String,
    price: Number,
    imageLink:String,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}