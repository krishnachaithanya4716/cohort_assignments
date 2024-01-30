const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

const jwtPassword = require("week-3/04-mongo-with-jwt-auth/index.js")

const jwt = require('jsonwebtoken');

// Admin Routes
router.post('/signup', async(req, res) => {
    try{
        const {username,password} = req.body;
        const adminPresent = await Admin.findOne({username,password})
    
        if(!adminPresent){
            await Admin.create({username,password})
            res.status(200).json({
                message: 'Admin created successfully' 
            })
        }
        else{
            res.status(409).json({
                message:'admin already present'
            })
        }
        }
        catch(error){
            console.error(error)
            res.status(500).json({
                message:"Internal Server Error"
            })
        }
    
    // Implement admin signup logic
});

router.post('/signin', async(req, res) => {

    try {
    const {username,password}=req.headers;

    const adminPresent = await admin.findOne({username,password})

    if(adminPresent){
        const token = jwt.sign({username},jwtPassword)
        res.status(200).json({
            token: token
        })
    }
    else{
        res.status(404).json({
            message:"invalid credentials"
        })
    }
}
catch(error){
    console.error(error)
    res.status(500).json({
        message:"Internal server error"
    })
}
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const {id,title,description,price,imageLink} = req.body;

    const courseData= await Course.create({id,title,description,price,imageLink})

    res.status(200).json({
        message: 'Course created successfully', courseId: id
    })


    // Implement course creation logic

});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic

    try{
        // Implement fetching all courses logic
        const courseList = await Course.find();
    
        res.status(200).json(courseList)
        }
        catch(error){
            res.status(500).json({
                message:"Internal server error"
            })
        }

});

module.exports = router;