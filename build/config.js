"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultConfig = void 0;

var _config = require("./util/config");

const defaultConfig = {};
exports.defaultConfig = defaultConfig;
const config = (0, _config.readConfig)(defaultConfig);
var _default = config;
exports.default = _default;