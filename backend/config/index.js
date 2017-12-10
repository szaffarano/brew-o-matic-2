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

// search config file in current directory
if (argv.config) {
  if (!fs.existsSync(argv.config)) {
    console.error(chalk.red.bold(`Configuration file: '${argv.config}' not found`))
    process.exit(1)
  }
  console.info(chalk.yellow.bold(`Reading external configuration '${argv.config}'`))
  externalConfig = require(argv.config)
} else if (fs.existsSync(defaultConfigPath)) {
  console.info(chalk.yellow.bold(`Reading default configuration '${path.join(__dirname, defaultConfigPath)}'`))
  externalConfig = require(defaultConfigPath)
}

module.exports = _.defaultsDeep(externalConfig, baseConfig)