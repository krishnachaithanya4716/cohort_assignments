function userMiddleware(req, res, next) {

    try {
   const token = req.headers['Authorization']

   const verifiedToken = jwt.verify(token,jwtPassword)

   if (verifiedToken){
    next();
   }
   else{
    res.status(404).json({
        message:"Invalid credentials"
    })
    return;
   }
}
catch(error){
    console.error(error)
    res.status(500).json({
        message:"Internal error"
    })
}
}

module.exports = userMiddleware;