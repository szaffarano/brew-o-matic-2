'use strict'

const { AbilityBuilder, Ability } = require('casl')

const ANONYMOUS = defineAbilitiesFor(null)

async function defineAbilitiesFor(user) {
  const { rules, can, cannot } = AbilityBuilder.extract()

  can('read', 'Metadata')

  if (user) {
    can('create', 'Recipe')
    can('update', 'Recipe', { owner: user._id })
    can('delete', 'Recipe', { owner: user._id })

    can('read', 'User', { _id: user._id })
    can('update', 'User', { _id: user._id })
    can('read', 'Settings', { _id: user._id })
  }

  return new Ability(rules)
}

module.exports = async(req, res, next) => {
  req.ability = req.user ? await defineAbilitiesFor(req.user) : await ANONYMOUS
  next()
}
