'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TagSchema = new Schema({
  '_id': String
}, {
  _id: false
})

module.exports = mongoose.model('Tag', TagSchema)
