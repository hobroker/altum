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
  _consola.default.info(`removing container ${id}`);

  await (0, _exec.default)('docker', ['rm', id]);

  _consola.default.success(`container ${id} was removed`);
};

const Remove = {
  command: 'remove <id>',
  aliases: ['rm'],
  desc: 'Removes an app',
  builder,
  handler
};
var _default = Remove;
exports.default = _default;