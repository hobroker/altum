"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createDeploymentStatus = exports.createDeployment = void 0;

var _rest = _interopRequireDefault(require("@octokit/rest"));

var _yargsParser = _interopRequireDefault(require("yargs-parser"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  token
} = (0, _yargsParser.default)(process.argv);
const octokit = new _rest.default({
  auth: token,
  previews: ['ant-man', 'flash', 'machine-man']
});

const createDeployment = ({
  owner,
  repo,
  ref
}) => octokit.repos.createDeployment({
  owner,
  repo,
  ref,
  environment: ref,
  auto_merge: false,
  description: `Deploy request from ${_constants.APP_NAME}`
}).then(({
  data
}) => data);

exports.createDeployment = createDeployment;

const createDeploymentStatus = ({
  owner,
  repo,
  state,
  deploymentId,
  url
}) => octokit.repos.createDeploymentStatus({
  owner,
  repo,
  state,
  log_url: url,
  deployment_id: deploymentId
}).then(({
  data
}) => data);

exports.createDeploymentStatus = createDeploymentStatus;
var _default = octokit;
exports.default = _default;