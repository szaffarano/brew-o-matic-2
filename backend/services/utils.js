const logger = require('../utils/logger')

module.exports = {
  handleBusinessError(action, err, res) {
    logger.error(`Error while ${action}:`, err)

    const errors = []
    let errorCode = 400
    if (Object.keys(err).includes('errors')) {
      // get mongoose error list and make a json response
      Object.values(err.errors).forEach(e => {
        errors.push({
          kind: `mongoose-${e.kind}`,
          path: e.path,
          properties: e.properties
        })
      });
    } else {
      // I dont know what happened, throw http-500
      errorCode = 500
      errors.push(err)
    }

    res.status(errorCode).send(errors);
  }
}
