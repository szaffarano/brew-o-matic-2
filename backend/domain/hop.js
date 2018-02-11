'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const HopSchema = new Schema({
  'name': String,
  'alpha': Number
})

module.exports = mongoose.model('Hop', HopSchema)
