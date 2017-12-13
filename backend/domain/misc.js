'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MiscSchema = new Schema({
  "name": String,
  "type": String,
  "use": String
})

module.exports = mongoose.model("Misc", MiscSchema)
