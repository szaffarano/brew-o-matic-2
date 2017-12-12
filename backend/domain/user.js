'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const C = require('../utils/constants')

const UserSchema = new Schema({
    provider: {
        type: String,
        'default': C.PROVIDER_LOCAL
    },
    profileId: { type: String },
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
        type: [
            {
                type: String,
                "enum": [
                    C.ROLE_ADMIN,
                    C.ROLE_USER,
                    C.ROLE_GUEST
                ]
            }
        ],
        "default": [C.ROLE_USER]
    },

    name: String,
    favorites: [String],
    singInDate: Date,
    lastLogin: Date,
    accessCode: String,
    settings: {
        defaultValues: {
            BATCH_SIZE: Number,
            EFFICIENCY: Number,
            BREWER: String,
            BOIL_TIME: Number,
            GrainTemp: Number,
            WatertoGrainRatio: Number,
            mashTemp: Number,
            lossMashTemp: Number,
            SpargeTempDesired: Number,
            SpargeDeadSpace: Number,
            GrainAbsorbtion: Number,
            PercentEvap: Number,
            LitersEvap: Number,
            TrubChillerLosses: Number,
            isPublic: Boolean,
            pitchRate: Number,
            phPreBoil: Number,
            phPostBoil: Number,
            SpargeWhaterDesiredPH: Number,
            MashDesiredPH: Number,
            timeWaterMash: Number,
            spargeDuration: Number,
            preBoilTime: Number,
            coolingTime: Number
        },
        closeUseSurvey: Boolean,
        gotoFanPage: Boolean
    },

});

module.exports = mongoose.model("User", UserSchema);