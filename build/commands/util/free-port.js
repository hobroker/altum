"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getPort = _interopRequireDefault(require("get-port"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const builder = parent => parent.options({
  from: {
    number: true,
    default: 3000
  },
  to: {
    number: true,
    default: 5000
  }
});

const handler = async ({
  from,
  to
}) => {
  const range = [from, to];
  const port = await (0, _getPort.default)({
    port: _getPort.default.makeRange(...range)
  }); // eslint-disable-next-line no-console

  console.log(port);
};

const FreePort = {
  command: 'free-port',
  desc: 'Finds a free TCP port',
  handler,
  builder
};
var _default = FreePort;
exports.default = _default;