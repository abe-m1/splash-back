const User = require('../models/user')
const bcrypt = require('bcryptjs');
const jwt  = require('jsonwebtoken')
const Promise = require('bluebird')
const crypto = Promise.promisifyAll(require('crypto'))
const Helpers = require('../helpers')

const test  = (req, res, next) => {
	return res.status(200).json({ message: ' this is working' })	
}

const getAllUsers = (req, res, next)=> {
   User.find({}, function( err, users) {
     if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(200).json({
            message: 'Successfully returned all user',
            users: users            
        });

   })
}

const getOneUser = ( req, res, next ) => {	
  	User.findById( req.params.id , function(err, user){
          if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(200).json({
            message: 'Successfully returned all user',
            user: user          
        });
      })
}



module.exports = {
   routeTest: test,
   getAllUsers: getAllUsers,
   getOneUser: getOneUser
}