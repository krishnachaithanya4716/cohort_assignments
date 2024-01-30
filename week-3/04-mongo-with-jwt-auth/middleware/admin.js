

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try {
    const token = req.headers['Authorization']

    const verifiedToken = jwt.verify(token,jwtPassword)

    if (verifiedToken){
        next()
    }
    else{

        res.status(401).json({
            message: "invalid credentials"
        })
    }

    }

    catch (error){
        console.error(error)
        res.status(500).json({
            message: "Internal Server Error"
    })
    }
}

module.exports = adminMiddleware;