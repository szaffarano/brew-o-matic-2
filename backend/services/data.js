const mongoose = require('mongoose')

const Bottle = require('../domain/bottle')
const Grain = require('../domain/grain')
const Hop = require('../domain/hop')
const Misc = require('../domain/misc')
const Style = require('../domain/style')
const Yeast = require('../domain/yeast')


module.exports = function(config, logger) {
  const customIds = [Bottle]
  const models = [Bottle, Grain, Hop, Misc, Style, Yeast]
  const { handleBusinessError } = require('./utils')(logger)

  const services = {}

  models.forEach(m => {
    logger.debug(`Creating services for '${m.modelName}' model`)
    services[m.modelName] = createService(m)
  })

  function createService(model) {
    return {
      findAll: function(req, res) {
        model.find().exec(function(err, results) {
          if (err) {
            handleBusinessError('finding user settings', err, res)
          } else {
            res.send(results)
          }
        })
      },
      count: function(req, res) {
        model.count().exec(function(err, results) {
          if (err) {
            handleBusinessError('finding user settings', err, res)
          } else {
            res.send({ count: results })
          }
        })
      },
      save: function(req, res) {
        delete req.body._id
        var id
        if (customIds.indexOf(model) != -1) {
          id = req.params.id
        } else {
          id = new mongoose.Types.ObjectId(req.params.id)
        }
        model.findByIdAndUpdate(id, req.body, { upsert: true }).exec(function(err, results) {
          if (err) {
            handleBusinessError('finding user settings', err, res)
          } else {
            res.send(results)
          }
        })
      },
      remove: function(req, res) {
        model.findByIdAndRemove(req.params.id, function(err, results) {
          if (err) {
            handleBusinessError('finding user settings', err, res)
          } else {
            res.send(results)
          }
          //@TODO: see actions logic in BoM 1
          // actions.log(req.session.user_id, "REMOVE_" + service, JSON.stringify(results))
        })
      },
      findById: function(req, res) {
        model.findOne({ _id: req.params.id }, function(err, results) {
          if (err) {
            handleBusinessError('finding user settings', err, res)
          } else {
            res.send(results)
          }
        })
      }
    }
  }

  return services
}
