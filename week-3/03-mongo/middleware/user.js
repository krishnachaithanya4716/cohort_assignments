const { User } = require("../db");

async function userMiddleware(req, res, next) {
     // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try{

        const username = req.headers['username']
        const password = req.headers['password']

        const userPresent = await User.findOne({username,password})

        if (userPresent){
            req.user = userPresent;
            next();
            // res.status(200).json({
            //     msg:"user Authenticated succesfully"
            // })
        }
        else{
            res.status(401).json({
                msg:"Invalid User credentials"
            })
            return
        }

    }

    catch(error){
        console.error(error)
        res.status(500).json("Internal server error")
    }
}

module.exports = userMiddleware;