'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const StyleSchema = new Schema({
  'name': String,
  'co2_min': Number,
  'co2_max': Number,
  'OG_Min': Number,
  'OG_Max': Number,
  'FG_Min': Number,
  'FG_Max': Number,
  'IBU_Min': Number,
  'IBU_Max': Number,
  'Colour_Min': Number,
  'Colour_Max': Number,
  'ABV_Min': Number,
  'ABV_Max': Number,
  'link': String,
  'related': String,
  'type': String,
  'code': String,
  'style': String,
  'category': String,
  'family': String,
  // 'history': String,
  'origin': String,
  'overall': String,
  'aroma': String,
  'appearance': String,
  'flavor': String,
  'mouthfell': String,
  'comments': String,
  'history': String,
  'ingredients': String,
  'comparison': String,
  'examples': String,
  'note': String
})

module.exports = mongoose.model('Style', StyleSchema)
