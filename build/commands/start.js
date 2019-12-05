"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _consola = _interopRequireDefault(require("consola"));

var _constants = require("../constants");

var _exec = _interopRequireDefault(require("../util/exec"));

var _remove = _interopRequireDefault(require("./remove"));

var _stop = _interopRequireDefault(require("./stop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createMeta = ({
  image,
  commit
}) => {
  const [project, version] = image.replace(/(.*)\//, '').split(':');
  return {
    name: `${project}_${version}`,
    label: `${_constants.APP_NAME}=${commit}`
  };
};

const stopAndTryToRemoveContainer = async id => {
  await _stop.default.handler({
    id
  });

  try {
    await _remove.default.handler({
      id
    });
  } catch (error) {
    _consola.default.warn(error.stderr);
  }
};

const tryToHandleStartError = async (stderr, {
  name
}) => {
  const namePattern = new RegExp(`name "\\/${name}" is already in use by container "(.*)"`);
  const [, id] = namePattern.exec(stderr);

  if (!id) {
    throw new Error(`Tried to solve the error but could not: ${stderr}`);
  }

  if (namePattern.exec(stderr)) {
    await stopAndTryToRemoveContainer(id);
  }
};

const createArgs = (options, {
  name,
  label
}) => {
  const args = ['-d', '--rm', `--name`, name, '--label', label];
  const optional = ['publish', 'build-args'];
  optional.forEach(key => {
    const value = options[key];

    if (typeof value !== 'undefined') {
      if (Array.isArray(value)) {
        value.forEach(item => {
          args.push(`--${key}`, item);
        });
      } else {
        args.push(`--${key}`, value);
      }
    }
  });
  return args;
};

const builder = parent => parent.options({
  commit: {
    demandOption: true
  },
  image: {
    demandOption: true
  },
  publish: {},
  buildArgs: {
    alias: 'build-args',
    array: true
  }
});

const handler = async options => {
  const {
    image
  } = options;
  const meta = createMeta(options);
  const args = createArgs(options, meta);

  const _start = () => (0, _exec.default)('docker', ['run', ...args, image]);

  try {
    await _start();
  } catch (error) {
    const {
      stderr
    } = error;

    if (stderr) {
      _consola.default.warn(stderr);

      await tryToHandleStartError(stderr, meta);
      await _start();
    } else {
      throw error;
    }
  }

  _consola.default.success('started');
};

const Start = {
  command: 'start <image> <commit>',
  aliases: ['up'],
  desc: 'Starts an app',
  builder,
  handler
};
var _default = Start;
exports.default = _default;