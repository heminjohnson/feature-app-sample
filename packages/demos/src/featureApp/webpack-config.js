// @ts-check
const {merge} = require('webpack-merge');
const {webpackBaseConfig} = require('../webpack-base-config');

const configs = [
  merge(webpackBaseConfig, {}),
];

module.exports = configs;
