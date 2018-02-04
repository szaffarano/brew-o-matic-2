'use strict'

const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const session = require('express-session');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const crossdomain = require('helmet-crossdomain')
const cookieParser = require('cookie-parser');
const compression = require('compression');
const flash = require("express-flash");
const MongoStore = require("connect-mongo")(session);
const createError = require('http-errors')

module.exports = function(config, db, logger) {
  const errorHandler = require('./utils/error-handler')
  const api = require('./api');
  const authentication = require('./authentication');
  const abilities = require('./authorization/abilities');

  const app = express('BoM');

  app.use(compression({
    filter: (req, res) => {
      if (req.headers['x-no-compression']) {
        return false
      } else {
        return compression.filter(req, res);
      }
    }
  }));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.set('view engine', 'pug');

  app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

  app.set('trust proxy', 1) // trust first proxy

  // Cookie parser should be above session
  app.use(cookieParser());

  app.set("etag", true); // other values 'weak', 'strong'

  app.use(flash());

  if (config.isDevMode()) {
    app.use(morgan(config.logging.morgan.format));
  }

  app.use(helmet());
  app.use(crossdomain());

  app.use(session({
    saveUninitialized: true,
    resave: false,
    secret: config.sessions.secret,
    store: new MongoStore({
      mongooseConnection: db,
      collection: config.sessions.collection,
      autoReconnect: true
    }),
    cookie: config.sessions.cookie,
    name: config.sessions.name
  }));

  require('./passport')(config, app, logger)

  app.use(abilities)

  app.use('/api', api(config, logger));
  app.use('/auth', authentication(config, logger));

  app.use(express.static(path.join(__dirname, 'public')));

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404, `${req.path} not found`));
  });

  app.use(errorHandler);

  return app;
}
