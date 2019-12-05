"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _consola = _interopRequireDefault(require("consola"));

var _constants = require("../constants");

var _octokit = require("../util/octokit");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const builder = parent => parent.options({
  token: {
    demandOption: true
  },
  ref: {
    demandOption: true
  },
  repo: {
    demandOption: true
  },
  owner: {
    demandOption: true
  }
});

const handler = async ({
  owner,
  repo,
  ref
}) => {
  const {
    id: deploymentId
  } = await (0, _octokit.createDeployment)({
    owner,
    repo,
    ref
  });

  _consola.default.info(`deployment ${deploymentId} was created`);

  await (0, _octokit.createDeploymentStatus)({
    owner,
    repo,
    deploymentId,
    state: _constants.DEPLOYMENT_STATUSES.IN_PROGRESS,
    url: 'https://google.com'
  });

  _consola.default.info('deployment status was created');

  _consola.default.success('deployed');
};

const Deploy = {
  command: 'deploy',
  desc: 'Informs Github about the app deployment',
  builder,
  handler
};
var _default = Deploy;
exports.default = _default;