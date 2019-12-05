"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _yargs = _interopRequireDefault(require("yargs"));

var _util = require("./commands/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const subcommandsCompletionMap = {
  util: _util.completion
};

const extractCommands = parent => parent.getUsageInstance().getCommands().flatMap(([cmd,,, aliases]) => [cmd, ...aliases]).map(item => item.replace(/ (.*)/, ''));

const getCompletion = (cmd, sub) => {
  if (!sub) {
    return extractCommands(_yargs.default);
  }

  return subcommandsCompletionMap[cmd] || [];
};

const completion = async (current, {
  _: [, cmd, sub]
}) => {
  try {
    const result = getCompletion(cmd, sub);
    return result;
  } catch (error) {
    return [];
  }
};

var _default = completion;
exports.default = _default;