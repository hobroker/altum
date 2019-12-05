"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.findContainers = void 0;

var _consola = _interopRequireDefault(require("consola"));

var _exec = _interopRequireDefault(require("../util/exec"));

var _json = require("../util/json");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {String} [filter]
 */
const findContainers = async ({
  filter = ''
}) => {
  const result = await (0, _exec.default)('docker', ['ps', '-a', '--format', '{{json .}}']).then(_json.parseJsonOutput);

  if (!filter) {
    return result;
  }

  const filterFn = ({
    ID,
    Image,
    Names,
    Labels
  }) => Labels.startsWith(`"${_constants.APP_NAME}=`) && [Names, Labels, ID, Image].some(item => item.includes(filter));

  return result.filter(filterFn);
};

exports.findContainers = findContainers;

const builder = parent => parent.options({
  filter: {
    default: ''
  }
});
/**
 * @param {String} [filter]
 */


const handler = async ({
  filter
}) => {
  if (filter) {
    _consola.default.info('filter=%s', filter);
  }

  const containers = await findContainers({
    filter
  });

  _consola.default.success(`found ${containers.length} container(s)`);

  _consola.default.success(containers);
};

const List = {
  command: 'list [filter]',
  aliases: ['ls'],
  desc: 'Lists the managed apps',
  builder,
  handler
};
var _default = List;
exports.default = _default;