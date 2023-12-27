// Middleware for handling auth

const {Admin} = require('../db')
async function adminMiddleware(req, res, next) {

    try{

    const username = req.headers['username']
    const password = req.headers['password']

    const adminPresent = await Admin.findOne({username,password})

    if (adminPresent){
        //res.status(200).json({msg:"Login succesful"})
        next()
    }
    else {

        res.status(401).json({msg:"Invalid credntials"})

        return
    }


    }

    catch(error){

        console.error(error)
        res.status(500).json({    
            msg:"Internal Server Error"
        })
    }


    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;