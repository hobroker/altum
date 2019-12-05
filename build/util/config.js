"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _findUp = _interopRequireDefault(require("find-up"));

var _fs = require("fs");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const readConfig = (defaultConfig = {}) => {
  const filenamePrefix = `${_constants.APP_NAME}rc`;

  const configPath = _findUp.default.sync([`.${filenamePrefix}`, `.${filenamePrefix}.json`]);

  if (!configPath) {
    return defaultConfig;
  }

  const config = (0, _fs.readFileSync)(configPath, 'utf8');
  return { ...defaultConfig,
    ...JSON.parse(config)
  };
};

var _default = readConfig;
exports.default = _default;