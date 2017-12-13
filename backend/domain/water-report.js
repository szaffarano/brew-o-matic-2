'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const WaterReportSchema = new Schema({
  date: Date,
  name: String,
  owner: {
    type: String,
    ref: 'User'
  },
  isPublic: {
    type: Boolean,
    default: false
  },
  cations: {
    calcium: {
      type: Number,
      default: null
    },
    magnesium: {
      type: Number,
      default: null
    },
    sodium: {
      type: Number,
      default: null
    },
    potassium: {
      type: Number,
      default: null
    },
    iron: {
      type: Number,
      default: null
    }
  },
  anions: {
    bicarbonate: {
      type: Number,
      default: null
    },
    carbonate: {
      type: Number,
      default: null
    },
    sulfate: {
      type: Number,
      default: null
    },
    chloride: {
      type: Number,
      default: null
    },
    nitrate: {
      type: Number,
      default: null
    },
    nitrite: {
      type: Number,
      default: null
    },
    fluoride: {
      type: Number,
      default: null
    }
  }
}, {
  versionKey: false
})

module.exports = mongoose.model("WaterReport", WaterReportSchema)
