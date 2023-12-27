const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require("zod");


/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */

const inputSchema = zod.object({
    username:zod.string().email(),
    password:zod.string().length(6)
})


function signJwt(username, password) {

    try{

    const obj = {}

    obj.username = username;
    obj.password = password;

    

    const validation = inputSchema.safeParse(obj);

    if (validation.success){
        const {username} = obj; //object destructuuring
        return jwt.sign({username},jwtPassword);
    }
    else {
        return null;
        }
    }

    catch(error){
        console.log("Error",error.errors);
        return null;
    }


    // Your code here
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {

    try{
    const verification = jwt.verify(token,jwtPassword);
    return true;
    }
    catch(error){
        console.log("Invalid signature")
        return false;
    }

    // Your code here
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {

    try {

    const decodedToken = jwt.decode(token);

    return decodedToken

    }

    catch(error){
        console.log("error:Invalid jwt token")
        return false;
    }
    // Your code here
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
