'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  _id: String,
  code: String,
  owner: {
    type: String,
    ref: 'User'
  },
  collaborators: [{
    type: String,
    ref: 'User'
  }],
  GrainCalcMethod: String, //valor o %
  date: Date,
  modificationDate: Date,
  totalAmount: Number, //cantidad de granos/FERMENTABLES
  totalAmountMash: Number,
  totalHop: Number,
  NAME: String,
  VERSION: String,
  TYPE: String,
  STYLE: {
    NAME: String
  },
  BREWER: String,
  CALCCOLOUR: Number,
  BATCH_SIZE: Number,
  BOIL_SIZE: Number, //@deprecated, esto se guarda pero nunca se usa, se muestra siempre desde el calculo
  BOIL_TIME: Number,
  ABV: Number,
  BV: Number,
  EFFICIENCY: Number,
  OG: Number,
  OG_exclude: Number,
  CALCIBU: Number,
  FG: Number,
  state: String,
  timeWaterMash: Number, //tiempo seteado por el usuario q se tarda en calentar el agua del mash.
  spargeDuration: Number, //duracion del lavado
  preBoilTime: Number, //tiempo para llegar a herovr
  coolingTime: Number, //tiempo de enfriado
  FERMENTABLES: {
    FERMENTABLE: [new Schema({
      NAME: String,
      VERSION: String,
      AMOUNT: Number,
      TYPE: String,
      YIELD: Number, //@deprecated parece que no se usa
      COLOR: Number,
      POTENTIAL: Number,
      PERCENTAGE: Number, //calculado
      USE: String,
      excludeIBU: Boolean
    }, {
      _id: true
    })]
  },
  HOPS: {
    HOP: [new Schema({
      NAME: String,
      VERSION: String,
      ALPHA: Number,
      AMOUNT: Number,
      USE: String,
      TIME: Number,
      FORM: String
    }, {
      _id: true
    })]
  },
  YEASTS: {
    YEAST: [new Schema({
      NAME: String,
      VERSION: String,
      ATTENUATION: Number,
      AMOUNT: Number,
      density: Number,
      packageSize: Number
    }, {
      _id: true
    })]
  },
  MISCS: {
    MISC: [new Schema({
      NAME: String,
      VERSION: String,
      TYPE: String,
      USE: String,
      TIME: Number,
      AMOUNT: Number
    }, {
      _id: true
    })]
  },
  MASH: {
    MASH_STEPS: {
      MASH_STEP: [new Schema({
        NAME: String,
        TYPE: String, //'Infusion' fijo por ahora
        INFUSE_AMOUNT: Number, //Agua agregada
        INFUSE_TEMP: Number, //Temp agua agregada
        STEP_TIME: Number, //Duracion
        STEP_TEMP: Number, //Temperatura buscada (si pongo INFUSE se calcula sola, pero se puede pisar)
        END_TEMP: Number, //Temp final de la etapa.
        DESCRIPTION: String, //texto libre
        WATER_GRAIN_RATIO: Number, //relacion final (calculada, INFUSE_AMOUNT y DECOCTION_AMT)
        decoction: Boolean,
        DECOCTION_AMT: Number, //cantidad sacada para decocction
        infuse: Boolean, //Indica si agrega agua o no.
        recirculate: Boolean //Si recircula o no
      }, {
        _id: true
      })]
    }
  },
  fermentation: {
    view: String,
    estimateDate: Date,
    alertTime: Number,
    stages: [new Schema({
      title: String,
      duration: Number, //In days/hours
      durationMode: String, //'Dias' / 'Horas'
      transferring: Boolean, //In the end of stage
      losses: Number, //Litros perdidos
      temperature: Number,
      temperatureEnd: Number,
      action: String, // 'Inoculacion', 'Dry-Hop', 'Otro'
      alertDone: Boolean
    }, {
      _id: true
    })]
  },
  bottling: {
    sugar: {
      desiredVol: Number,
      temperature: Number,
      sugarType: String
    },
    must: {
      temperature: Number
    },
    co2: {
      desiredVol: Number,
      temperature: Number
    },
    bottles: [new Schema({
      bottleType: String,
      size: Number,
      amount: Number,
      used: {
        type: Number,
        default: 0
      },
      subTotal: Number,
      carbonatationType: String,
      colour: String
    }, {
      _id: true
    })]
  },
  log: {
    logs: [new Schema({
      time: Date,
      detail: String,
      delay: Number,
      delayUnit: String,
      logType: String,
      logRef: String,
      discard: Boolean
    }, {
      _id: true
    })]
  },
  water: {
    liters: {
      type: Number,
      default: 0
    },
    dilution: {
      type: Number,
      default: 0
    },
    source: {
      ca: {
        type: Number,
        default: 0
      },
      mg: {
        type: Number,
        default: 0
      },
      so4: {
        type: Number,
        default: 0
      },
      na: {
        type: Number,
        default: 0
      },
      cl: {
        type: Number,
        default: 0
      },
      hco3: {
        type: Number,
        default: 0
      },
      alc: {
        type: Number,
        default: 0
      }
    },
    target: {
      ca: {
        type: Number,
        default: 0
      },
      mg: {
        type: Number,
        default: 0
      },
      so4: {
        type: Number,
        default: 0
      },
      na: {
        type: Number,
        default: 0
      },
      cl: {
        type: Number,
        default: 0
      },
      hco3: {
        type: Number,
        default: 0
      },
      alc: {
        type: Number,
        default: 0
      }
    },
    CaCO3: {
      type: Number,
      default: 0
    },
    NaHCO3: {
      type: Number,
      default: 0
    },
    CaSO4: {
      type: Number,
      default: 0
    },
    CaCl2: {
      type: Number,
      default: 0
    },
    MgSO4: {
      type: Number,
      default: 0
    },
    NaCl: {
      type: Number,
      default: 0
    },
    selectedSource: {
      type: String,
      ref: 'WaterReport'
    },
    selectedTarget: {
      type: String,
      ref: 'WaterReport'
    }
  },
  tiltValues: [{
    date: Date,
    sg: Number,
    temp: Number
  }],
  PRIMARY_TEMP: Number, //@deprecated parece sin uso
  BIAB: String, //@deprecated parece sin uso
  IBUCalcMethod: String, //@deprecated parece sin uso
  StyleNaziMode: String, //@deprecated parece sin uso, cree uno diferente
  IsNoChill: String, //@deprecated parece sin uso
  GrainUnits: String, //@deprecated parece sin uso
  HopsUnits: String, //@deprecated parece sin uso
  VolumeUnits: String, //@deprecated parece sin uso
  TemperatureUnits: String, //@deprecated parece sin uso
  Colour: String, //@deprecated parece sin uso
  GrainTemp: Number,
  StrikeWater: Number,
  SpargeDeadSpace: Number,
  GrainAbsorbtion: Number,
  WatertoGrainRatio: Number,
  SpargeTempDesired: Number,
  SpargeWhaterDesiredPH: Number,
  MashDesiredPH: Number,
  PercentEvap: Number,
  LitersEvap: Number, //@deprecated esto fue para intentar cambiarlo por litros en lugar de %
  TrubChillerLosses: Number,
  TopUpWater: Number,
  calendarpressed: String, //@deprecated parece sin uso
  brewdayEnabled: String, //@deprecated parece sin uso
  yeastpitchEnabled: String, //@deprecated parece sin uso
  primaryEnabled: String, //@deprecated parece sin uso
  secondaryEnabled: String, //@deprecated parece sin uso
  keggingEnabled: String, //@deprecated parece sin uso
  serveEnabled: String, //@deprecated parece sin uso
  //Start own properties
  isPublic: Boolean,
  publishDate: Date,
  naziMode: Boolean,
  phPreBoil: Number,
  phPostBoil: Number,
  cloneFrom: {
    type: String,
    ref: 'Recipe'
  },
  starredBy: [{
    _id: Schema.Types.ObjectId,
    name: String
  }],
  clonedBy: [{
    _id: Schema.Types.ObjectId,
    name: String,
    recipe_id: {
      type: String,
      ref: 'Recipe'
    }
  }],
  starredByCount: Number,
  clonedByCount: Number,
  comments: [{
    text: String,
    _id: String,
    user_id: Schema.Types.ObjectId,
    name: String,
    date: Date
  }],
  fixIngredients: String,
  mashTemp: Number,
  lossMashTemp: Number,
  tags: [String],
  beer_id: String, //beer._id from BirrasQueHeTomado.com
  pitchRate: Number,
  tilt: String,
  version: [{
    number: Number,
    user_id: String,
    timeStamp: Date,
    user_name: String
  }]
}, {
  _id: false
})

module.exports = mongoose.model('Recipe', RecipeSchema)
