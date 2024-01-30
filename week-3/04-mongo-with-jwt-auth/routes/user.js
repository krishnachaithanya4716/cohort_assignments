const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwtPassword = require("week-3/04-mongo-with-jwt-auth/index.js")

router.post('/signin', async(req, res) => {

    try{
        const {username,password} = req.body;
        const userCheck = await User.findOne({username})

        if(userCheck){
            const token = jwt.sign({username},jwtPassword)
            res.status(200).json({
                token:token
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
                msg:"Internal Server Error"
            })

    }


    // Implement admin signup logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {


    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

router.post('/signup', async(req, res) => {


    try{

        const {username,password} = req.body;

        const userCheck = await User.findOne({username})

        if (!userCheck){

            await User.create({username,password})

            res.status(201).json({
                message: 'User created successfully' 
            })

        }

        else{
            res.status(409).json({
                message: "user already exists"
            })
        }

       
    }
        catch(error){
            console.error(error)
            res.status(500).json({
                msg:"Internal Server Error"
            })

        }

    // Implement user signup logic
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    try{
        const courseList = await Course.find();

        res.status(200).json(courseList);
    }
    catch(error){
        res.status(500).json({
            message:"internal server error"
        })
    }


});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {

    try {

    const courseId = req.params.courseId;
    
    const username = req.headers['username']
;    const user = await User.findOne({username})

    const courseAvailability = await Course.findOne({id : courseId});

    if (!courseAvailability){

        res.status(404).json({
            message:"course not found"
        })
        return;

    }
    else{


        if (user.purchasedCourses.includes(courseId)){
            res.status(404).json({
                "message": "course already purchased"
            })
            return;
        }
        user.purchasedCourses.push(courseId);

        await user.save()

        res.status(200).json({
            message: 'Course purchased successfully'
        })


    }

    }

    catch(error){
        console.error(error)
        res.status(500).json({
            message:"internal server error"
        })
    }
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
try {
    const userID = req.headers['username'];

    const user = await User.findOne({username:userID})

    const purchasedCourseId = user.purchasedCourses

    const userCourseList = await Course.find({id : {$in: purchasedCourseId}})


    res.status(200).json({userCourseList})

}
catch(error){
    console.error(error)
    res.status(500).json({
        message:"Internal server error"
    })
}

});