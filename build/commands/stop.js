"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _consola = _interopRequireDefault(require("consola"));

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
  _consola.default.info(`stopping container ${id}`);

  await (0, _exec.default)('docker', ['stop', id]);

  _consola.default.success(`container ${id} was stopped`);
};

const Stop = {
  command: 'stop <id>',
  aliases: ['down'],
  desc: 'Stops an app',
  builder,
  handler
};
var _default = Stop;
exports.default = _default;