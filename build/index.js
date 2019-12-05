#!/usr/bin/env node
"use strict";

var _yargs = _interopRequireDefault(require("yargs"));

var _error = require("./util/error");

var _constants = require("./constants");

var _completion = _interopRequireDefault(require("./completion"));

var _middlewares = require("./middlewares");

var _config = _interopRequireDefault(require("./util/config"));

var _deploy = _interopRequireDefault(require("./commands/deploy"));

var _util = _interopRequireDefault(require("./commands/util"));

var _list = _interopRequireDefault(require("./commands/list"));

var _ping = _interopRequireDefault(require("./commands/ping"));

var _remove = _interopRequireDefault(require("./commands/remove"));

var _restart = _interopRequireDefault(require("./commands/restart"));

var _start = _interopRequireDefault(require("./commands/start"));

var _stop = _interopRequireDefault(require("./commands/stop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_yargs.default.scriptName(_constants.APP_NAME).config((0, _config.default)({
  emoji: false
})).option('silent', {
  boolean: true,
  default: false,
  desc: 'Do not print shell executions',
  group: 'Options:'
}).middleware(_middlewares.silentOption).middleware(_middlewares.requireDocker).command(_list.default).command(_start.default).command(_stop.default).command(_restart.default).command(_remove.default).command(_deploy.default).command(_util.default).command(_ping.default).completion('completion', 'Generate completion script', _completion.default).demandCommand(1, 'I need a command to work').help().fail(_error.handleYargsError).epilogue(`For more info, visit ${_constants.REPOSITORY}`).parse();