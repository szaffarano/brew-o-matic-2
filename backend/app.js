const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const morgan = require('morgan');
const helmet = require('helmet');
const crossdomain = require('helmet-crossdomain')

const path = require('path');

const config = require('./config');

const api = require('./api');
const logger = require('./utils/logger')(config);

/* configure express app */

logger.info('Configuring BoM...');

const app = express('BoM');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

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

app.use('/api', api);

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
