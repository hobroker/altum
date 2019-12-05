"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getPort = _interopRequireDefault(require("get-port"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const handler = async () => {
  const range = [3000, 5000];
  const port = await (0, _getPort.default)({
    port: _getPort.default.makeRange(...range)
  }); // eslint-disable-next-line no-console

  console.log(port);
};

const FreePort = {
  command: 'free-port',
  desc: 'Finds a free TCP port',
  handler
};
var _default = FreePort;
exports.default = _default;