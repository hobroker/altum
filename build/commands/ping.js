"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _consola = _interopRequireDefault(require("consola"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const handler = async ({
  emoji
}) => {
  _consola.default.success('pong');

  if (emoji) {
    _consola.default.log('🍿');
  }
};

const Ping = {
  command: 'ping',
  desc: 'Pings the app',
  handler
};
var _default = Ping;
exports.default = _default;