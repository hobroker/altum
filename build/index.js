#!/usr/bin/env node
"use strict";

var _yargs = _interopRequireDefault(require("yargs"));

var _error = require("./util/error");

var _constants = require("./constants");

var _completion = _interopRequireDefault(require("./completion"));

var _middlewares = require("./middlewares");

var globalOptions = _interopRequireWildcard(require("./global-options"));

var _config = _interopRequireDefault(require("./config"));

var _deploy = _interopRequireDefault(require("./commands/deploy"));

var _util = _interopRequireDefault(require("./commands/util"));

var _list = _interopRequireDefault(require("./commands/list"));

var _ping = _interopRequireDefault(require("./commands/ping"));

var _remove = _interopRequireDefault(require("./commands/remove"));

var _restart = _interopRequireDefault(require("./commands/restart"));

var _start = _interopRequireDefault(require("./commands/start"));

var _stop = _interopRequireDefault(require("./commands/stop"));

var _init = _interopRequireDefault(require("./commands/init"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_yargs.default.scriptName(_constants.APP_NAME).config(_config.default).middleware(_middlewares.silentOption).middleware(_middlewares.requireDocker).options(globalOptions).command(_init.default).command(_list.default).command(_start.default).command(_stop.default).command(_restart.default).command(_remove.default).command(_deploy.default).command(_util.default).command(_ping.default).completion('completion', 'Generate completion script', _completion.default).demandCommand(1, 'I need a command to work').help().fail(_error.handleYargsError).epilogue(`For more info, visit ${_constants.REPOSITORY}`).parse();