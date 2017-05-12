const mongoose  = require('mongoose')
const Schema = mongoose.Schema
const websiteModel = require('./websiteModel.js')

websiteSchema = new mongoose.Schema(websiteModel)

const ModelClass = mongoose.model('website', websiteSchema)
module.exports = ModelClass