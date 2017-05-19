const User = require('../models/user')
const bcrypt = require('bcryptjs');
const jwt  = require('jsonwebtoken')
const Promise = require('bluebird')
const crypto = Promise.promisifyAll(require('crypto'))
const Helpers = require('../helpers')

const test  = (req, res, next) => {
	return res.status(200).json({ message: ' this is working' })	
}

module.exports = {
   test: test
}