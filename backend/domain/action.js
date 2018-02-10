'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ActionSchema = new Schema({
  'user_id': {
    type: String,
    ref: 'User'
  },
  'date': Date,
  'actionType': String,
  'data': String
})

module.exports = mongoose.model('Action', ActionSchema)
