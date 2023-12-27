const mongoose = require('mongoose');


// Connect to MongoDB

const mongo_url= "mongodb+srv://krishnachaithanya6085:B3ymOA0XemLpGijo@cluster0.hsfrvea.mongodb.net/"
mongoose.connect(mongo_url);

// Define schemas
const AdminSchema = new mongoose.Schema({
        username: String,
        password: String
});

const UserSchema = new mongoose.Schema({

    username: String,
    password: String,
    purchasedCourses: [Number]
    // Schema definition here
});

const CourseSchema = new mongoose.Schema({
    id:Number,
    title: String,
    description: String,
    price: Number,
    imageLink:String,
    published:Boolean
    // Schema definition here
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}