"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _zoya = _interopRequireDefault(require("zoya"));

var _config = require("../util/config");

var _config2 = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const builder = parent => parent.options({
  force: {
    boolean: true,
    alias: 'f'
  },
  project: {
    demandOption: true
  }
});

const handler = async ({
  force,
  project
}) => {
  const filepath = (0, _config.resolveConfigFileInCWD)();
  const data = { ..._config2.defaultConfig,
    project
  };
  (0, _config.writeConfig)(data, {
    force,
    filepath
  });

  _zoya.default.info(`${filepath} contents`, data);
};

const Init = {
  command: 'init',
  desc: 'Creates a .altumrc file',
  builder,
  handler
};
var _default = Init;
exports.default = _default;