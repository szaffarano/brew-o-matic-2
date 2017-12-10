const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const morgan = require('morgan');
const helmet = require('helmet');
const crossdomain = require('helmet-crossdomain')
const session = require('express-session');
const passport = require('passport')

const path = require('path');

const config = require('./config/');

const api = require('./api');
const auth = require('./auth');

const logger = require('./utils/logger')(config);

/* configure express app */
logger.info('Configuring BoM...');

const app = express('BoM');

app.set('view engine', 'pug');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}))
// app.use(session({ secret: 'blah', name: 'id' }))
app.use(passport.initialize());
app.use(passport.session());

app.use(morgan(config.logging.morgan.format));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());
app.use(crossdomain());

app.use(cookieParser());

app.use(compression({
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      return false
    } else {
      return compression.filter(req, res);
    }
  }
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', api(config));
app.use('/auth', auth(config));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

logger.info('BoM was configured successfully!');

module.exports = app;
