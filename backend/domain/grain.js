'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const GrainSchema = new Schema({
  "name": String,
  "type": String,
  "colour": Number,
  "potential": Number,
  "use": String,
  "excludeIBU": Boolean
})

module.exports = mongoose.model("Grain", GrainSchema)
