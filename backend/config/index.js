"use strict";

const fs = require("fs");
const chalk = require("chalk");
const path = require("path");

const _ = require("lodash");

/* eslint-disable no-console */
/* eslint-disable node/no-unpublished-require */

global.rootPath = path.normalize(path.join(__dirname, ".."));

/* global WEBPACK_BUNDLE */
if (WEBPACK_BUNDLE) {
  let bundleFullPath;
  if (process.argv.length > 0) {
    bundleFullPath = process.argv[1];
  } else {
    bundleFullPath = process.cwd();
  }

  global.rootPath = path.normalize(path.join(path.dirname(bundleFullPath), ".."));
}

const extConfigFile = path.join(global.rootPath, "config.js");

let externalConfig = {}
let baseConfig = require('./base')

if (WEBPACK_BUNDLE) {
  externalConfig = require("../config.js");
} else {
  console.info(
    chalk.yellow.bold(`Trying to read external configuration '${extConfigFile}'`)
  )
  if (!fs.existsSync(extConfigFile)) {
    console.warn(
      chalk.red.bold(`Configuration file: '${extConfigFile}' not found`)
    )
  }
  externalConfig = require(extConfigFile);
}

const modes = {
  isDevMode() {
    return !process.env.NODE_ENV || process.env.NODE_ENV === "development";
  },

  isProductionMode() {
    return process.env.NODE_ENV === "production";
  },

  isTestMode() {
    return process.env.NODE_ENV === "test";
  }
};

const strategies = {
  configureTwitter() {
    return this.auth.twitter &&
      this.auth.twitter.consumerKey &&
      this.auth.twitter.consumerSecret
  },
  configureGoogle() {
    return this.auth.google &&
      this.auth.google.clientID &&
      this.auth.google.clientSecret
  },
  configureFacebook() {
    return this.auth.facebook &&
      this.auth.facebook.clientID &&
      this.auth.facebook.clientSecret
  },
  configureGithub() {
    return this.auth.github &&
      this.auth.github.clientID &&
      this.auth.github.clientSecret
  },
  configureLinkedIn() {
    return this.auth.linkedin &&
      this.auth.linkedin.clientID &&
      this.auth.linkedin.clientSecret
  }
}
/* eslint-enable no-console */
/* eslint-enable node/no-unpublished-require */

module.exports = _.defaultsDeep(externalConfig, baseConfig, modes, strategies)
