"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _zoya = _interopRequireDefault(require("zoya"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const handler = async ({
  emoji
}) => {
  _zoya.default.info('pong');

  if (emoji) {
    _zoya.default.log('🍿');
  }
};

const Ping = {
  command: 'ping',
  desc: 'Pings the app',
  handler
};
var _default = Ping;
exports.default = _default;