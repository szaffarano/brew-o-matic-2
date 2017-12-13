"use strict";

const fs = require("fs");
const chalk = require("chalk");
const path = require("path");
const argv = require('yargs').argv

const _ = require("lodash");

const rootPath = path.normalize(path.join(__dirname, '..'));
const defaultConfigPath = path.join(rootPath, 'config.js')

let externalConfig = {}
let baseConfig = require('./base')

/* eslint-disable no-console */

// search config file in current directory
if (argv.config) {
  if (!fs.existsSync(argv.config)) {
    const msg = `Configuration file: '${argv.config}' not found`
    console.error(chalk.red.bold(msg))
    throw new Error(msg)
  }
  console.info(chalk.yellow.bold(`Reading external configuration '${argv.config}'`))
  externalConfig = require(argv.config)
} else if (fs.existsSync(defaultConfigPath)) {
  console.info(chalk.yellow.bold(`Reading default configuration '${path.join(__dirname, defaultConfigPath)}'`))
  externalConfig = require(defaultConfigPath)
}

/* eslint-enable no-console */

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
  }
}

module.exports = _.defaultsDeep(externalConfig, baseConfig, modes, strategies)
