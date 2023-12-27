const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

async function userAvailable(req,res,next){

    const {username,password} = req.body;
    const alreadyPresent = await Admin.findOne({username,password})

    if (alreadyPresent){
        res.status(409).json({message:"user already exists"})
        return
    }
    else{

        next();

    }



}


//app.use(adminMiddleware);

// Admin Routes
router.post('/signup',userAvailable, async(req, res) => {

    try{

    const {username,password} = req.body;

    const admin = await Admin.create({username,password})

    res.status(201).json({
        message: 'Admin created successfully' 
    })

    }

    catch(error){
        res.status(500).json({
            msg:"Internal Server Error"
        })
    }



    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, async(req, res) => {

    const {id,title,description,price,imageLink,published} = req.body;

    const courseData= await Course.create({id,title,description,price,imageLink,published})

    res.status(200).json({
        message: 'Course created successfully', courseId: id
    })


    // Implement course creation logic
});

router.get('/courses', adminMiddleware, async(req, res) => {

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