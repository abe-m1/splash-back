const jwt = require('jsonwebtoken')
const secret = require('../config/dev.js').jwtSecret

function verifyJwt(token){
    return jwt.verify(token, secret)

}

function signJwt(data) {
    return jwt.sign(data, secret)
}