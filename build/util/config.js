"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeConfig = exports.readConfig = exports.getCurrentConfigPath = exports.resolveConfigFileInCWD = exports.CONFIG_FILENAME_PREFIX = void 0;

var _fs = require("fs");

var _path = require("path");

var _findUp = _interopRequireDefault(require("find-up"));

var _zoya = _interopRequireDefault(require("zoya"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CONFIG_FILENAME_PREFIX = `.${_constants.APP_NAME}rc`;
exports.CONFIG_FILENAME_PREFIX = CONFIG_FILENAME_PREFIX;

const resolveConfigFileInCWD = () => (0, _path.resolve)(process.cwd(), CONFIG_FILENAME_PREFIX);

exports.resolveConfigFileInCWD = resolveConfigFileInCWD;

const getCurrentConfigPath = () => _findUp.default.sync([`${CONFIG_FILENAME_PREFIX}`, `${CONFIG_FILENAME_PREFIX}.json`]);

exports.getCurrentConfigPath = getCurrentConfigPath;

const readConfig = (defaultConfig = {}) => {
  const configPath = getCurrentConfigPath();

  if (!configPath) {
    return defaultConfig;
  }

  const config = (0, _fs.readFileSync)(configPath, 'utf8');
  return { ...defaultConfig,
    ...JSON.parse(config)
  };
};

exports.readConfig = readConfig;

const writeConfig = (data = {}, {
  filepath = getCurrentConfigPath(),
  force = false
} = {}) => {
  if (!force && (0, _fs.existsSync)(filepath)) {
    _zoya.default.warn(`${filepath} exists, if you wish to overwrite it, use --force`);
  }

  const string = JSON.stringify(data, null, 2);
  (0, _fs.writeFileSync)(filepath, string);
  return {
    filepath,
    data,
    string
  };
};

exports.writeConfig = writeConfig;