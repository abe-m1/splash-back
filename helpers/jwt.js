const jwt = require('jsonwebtoken')
const secret = require('../config/dev.js').jwtSecret

function verifyJwt(token){
    return jwt.verify(token, secret)

}