'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
  "user_id": {
    type: String,
    ref: 'User'
  },
  "date": Date,
  "status": String, //new,unread,read
  "data": String,
  "link": String
})

module.exports = mongoose.model("Notification", NotificationSchema)
