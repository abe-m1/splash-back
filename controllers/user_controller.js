const User = require('../models/user')
const bcrypt = require('bcryptjs');
const jwt  = require('jsonwebtoken')
const Promise = require('bluebird')
const crypto = Promise.promisifyAll(require('crypto'))
const Helpers = require('../helpers')


module.exports = {
   
}