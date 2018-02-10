'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const YeastSchema = new Schema({
  'name': String,
  'aa': Number,
  'density': Number,
  'packageSize': Number
})

module.exports = mongoose.model('Yeast', YeastSchema)
