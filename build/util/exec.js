"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _zoya = _interopRequireDefault(require("zoya"));

var _execa = _interopRequireDefault(require("execa"));

var _silent = require("./silent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {String} command
 * @param {Array<String>} [args=[]]
 * @param {Boolean} [logOutput=false]
 * @param {Boolean} [logCommand=false]
 * @returns {Promise<null|String>}
 */
const exec = async (command, args = [], logOutput = false, logCommand = true) => {
  const argsString = args.join` `;

  if (!(0, _silent.isSilent)() && logCommand) {
    _zoya.default.info('$', `${command} ${argsString}`);
  }

  const result = await (0, _execa.default)(command, args);

  if (!(0, _silent.isSilent)() && logOutput) {
    _zoya.default.info('>', result.stdout || result.stderr);
  }

  return result.stdout;
};

var _default = exec;
exports.default = _default;