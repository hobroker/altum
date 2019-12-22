"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.completion = void 0;

var _freePort = _interopRequireDefault(require("./free-port"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const builder = parent => parent.command(_freePort.default);

const Util = {
  command: 'util',
  desc: 'A set of utils/helpers',
  handler: undefined,
  builder
};
const completion = ['free-port'];
exports.completion = completion;
var _default = Util;
exports.default = _default;