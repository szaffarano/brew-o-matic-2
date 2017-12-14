'use strict'

const { AbilityBuilder, Ability } = require('casl')

const ANONYMOUS = defineAbilitiesFor(null)

async function defineAbilitiesFor(user) {
  const { rules, can, cannot } = AbilityBuilder.extract()

  can('read', 'Metadata')

  if (user) {
    can('create', 'Recipe')
    can('update', 'Recipe', { owner: user.id })
    can('delete', 'Recipe', { owner: user.id })
  }

  return new Ability(rules)
}

module.exports = async(req, res, next) => {
  req.ability = req.user ? await defineAbilitiesFor(req.user) : await ANONYMOUS
  next()
}
