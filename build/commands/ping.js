"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = require("path");

var _zoya = _interopRequireDefault(require("zoya"));

var _exec = _interopRequireDefault(require("../util/exec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const handler = async () => {
  _zoya.default.info('pong');

  const envRoot = (0, _path.resolve)(__dirname, '../env');
  await (0, _exec.default)('docker', ['build', '-f', `${envRoot}/Dockerfile`, envRoot], true);
};

const Ping = {
  command: 'ping',
  desc: 'Pings the app',
  handler
};
var _default = Ping;
exports.default = _default;