'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BottleSchema = new Schema({
  _id: String,
  name: String,
  size: Number,
  colour: String //'Ambar', 'Verde', 'Blanca'
})

module.exports = mongoose.model("Bottle", BottleSchema)
