"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.silentOption = exports.requireDocker = void 0;

var _exec = _interopRequireDefault(require("./util/exec"));

var _silent = require("./util/silent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const requireDocker = () => (0, _exec.default)('docker', ['-v'], false, false);

exports.requireDocker = requireDocker;

const silentOption = ({
  silent
}) => {
  (0, _silent.setSilent)(silent);
};

exports.silentOption = silentOption;