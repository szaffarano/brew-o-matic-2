'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const C = require('../utils/constants')

const UserSchema = new Schema({
  provider: {
    type: String,
    'default': C.PROVIDER_LOCAL
  },
  profileId: {
    type: String
  },
  username: {
    type: String,
    unique: true,
    index: true,
    lowercase: true,
    required: "Username is required",
    trim: true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    index: true,
    lowercase: true,
    "default": "",
    match: [/.+@.+\..+/, "Please fill a valid email address"]
  },
  roles: {
    type: [{
      type: String,
      "enum": [
        C.ROLE_ADMIN,
        C.ROLE_USER,
        C.ROLE_GUEST
      ]
    }],
    "default": [C.ROLE_USER]
  },

  name: String,
  favorites: [String],
  singInDate: Date,
  lastLogin: Date,
  accessCode: String,
  settings: {
    defaultValues: {
      BATCH_SIZE: {
        type: Number,
        required: true,
        min: 0
      },
      EFFICIENCY: {
        type: Number,
        required: true,
        min: 0
      },
      BREWER: {
        type: String,
        required: true
      },
      BOIL_TIME: {
        type: Number,
        required: true,
        min: 0
      },
      GrainTemp: {
        type: Number,
        required: true,
        min: 0
      },
      WatertoGrainRatio: {
        type: Number,
        required: true,
        min: 0
      },
      mashTemp: {
        type: Number,
        required: true,
        min: 0
      },
      lossMashTemp: {
        type: Number,
        required: true,
        min: 0
      },
      SpargeTempDesired: {
        type: Number,
        required: true,
        min: 0
      },
      SpargeDeadSpace: {
        type: Number,
        required: true,
        min: 0
      },
      GrainAbsorbtion: {
        type: Number,
        required: true,
        min: 0
      },
      PercentEvap: {
        type: Number,
        required: true,
        min: 0
      },
      LitersEvap: {
        type: Number,
        required: false,
        min: 0
      },
      TrubChillerLosses: {
        type: Number,
        required: true,
        min: 0
      },
      isPublic: Boolean,
      pitchRate: {
        type: Number,
        required: true,
        min: 0
      },
      phPreBoil: {
        type: Number,
        required: false,
        min: 0
      },
      phPostBoil: {
        type: Number,
        required: false,
        min: 0
      },
      SpargeWhaterDesiredPH: {
        type: Number,
        required: false,
        min: 0
      },
      MashDesiredPH: {
        type: Number,
        required: false,
        min: 0
      },
      timeWaterMash: {
        type: Number,
        required: false,
        min: 0
      },
      spargeDuration: {
        type: Number,
        required: false,
        min: 0
      },
      preBoilTime: {
        type: Number,
        required: false,
        min: 0
      },
      coolingTime: {
        type: Number,
        required: false,
        min: 0
      }
    },
    closeUseSurvey: Boolean,
    gotoFanPage: Boolean
  },

});

module.exports = mongoose.model("User", UserSchema);
