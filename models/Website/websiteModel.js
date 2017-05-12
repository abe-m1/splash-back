const mongoose = require('mongoose')
var Schema = mongoose.Schema;


const Website = {
    title : String ,
    favicon: String,
    category: String,
    description: String,
    dateCreated: String,
    dateLastModified: String,
    status: String,
    assignedTo: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    imageUrl: String,
    headline: String,
    subheadline: String,
    step: String,
    centerIcon : String,
    rightIcon: String, 
    leftIcon: String,
    leftHeadline: String, 
    centerHeadline: String, 
    rightHeadline: String, 
    favoriteColor: String,
    contactHeadline: String,
    contactBackground: String,
    finalized: Boolean,
    facebookLink: String, 
    twitterLink: String, 
    instagramLink: String, 
    emailAddress: String, 
    phone: String, 
    about: String
}

module.exports = Website