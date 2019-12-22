"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleYargsError = void 0;

var _zoya = _interopRequireDefault(require("zoya"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const handleError = (error, exitCode = 1) => {
  const errors = [].concat(error);

  _zoya.default.fatal(...errors);

  if (exitCode !== false) {
    process.exit(exitCode);
  }
};

const handleYargsError = (message, error) => {
  if (message) {
    return handleError(message);
  }

  if (!error) {
    return null;
  }

  if (error.exitCode) {
    return handleError([error.stderr, error], error.exitCode);
  }

  return handleError(error);
};

exports.handleYargsError = handleYargsError;