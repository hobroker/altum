"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _zoya = _interopRequireDefault(require("zoya"));

var _exec = _interopRequireDefault(require("../util/exec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const builder = parent => parent.options({
  id: {
    demandCommand: true
  }
});
/**
 * @param {String} id
 */


const handler = async ({
  id
}) => {
  _zoya.default.info(`restarting container ${id}`);

  await (0, _exec.default)('docker', ['restart', id]);

  _zoya.default.info(`container ${id} was restarted`);
};

const Restart = {
  command: 'restart <id>',
  aliases: ['rs'],
  desc: 'Restarts an app',
  builder,
  handler
};
var _default = Restart;
exports.default = _default;