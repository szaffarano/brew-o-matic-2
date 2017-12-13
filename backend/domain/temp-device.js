'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TempDeviceSchema = new Schema({
  code: String, //idcebada
  name: String,
  owner: {
    type: String,
    ref: 'User'
  },
  recipe_id: String
})

module.exports = mongoose.model("TempDevice", TempDeviceSchema)
