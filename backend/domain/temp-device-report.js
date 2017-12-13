'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TempDeviceReportSchema = new Schema({
  code: String, //idcebada
  timestamp: Number, //miliseconds from bla bla bla (date.getTime())
  recipe_id: String, //Receta vinculada
  source: String, //Esto es para cuando vienen datos de mas de 1 fermentador
  temperature: Number, //Temperatura interior medida (del liquido)
  temperatureExt: Number, //Temperatura exterior (opcional)
  temperatureMax: Number, //Temperatura seteada en el dispositivo
  temperatureMin: Number, //Temperatura seteada en el dispositivo
  coldStatus: Boolean, //Satus switch frio
  heatStatus: Boolean //status switch calor
})

module.exports = mongoose.model("TempDeviceReport", TempDeviceReportSchema)
