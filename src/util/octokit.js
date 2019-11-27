import Octokit from '@octokit/rest';
import yargs from 'yargs';
import { APP_NAME } from '../constants';

const { token } = yargs.options({
  token: {
    desc: 'The Github personal token',
    string: true,
  },
}).argv;

const octokit = new Octokit({
  auth: token,
  previews: ['ant-man', 'flash', 'machine-man'],
});

export const createDeployment = ({ owner, repo, ref }) =>
  octokit.repos
    .createDeployment({
      owner,
      repo,
      ref,
      environment: ref,
      auto_merge: false,
      description: `Deploy request from ${APP_NAME}`,
    })
    .then(({ data }) => data);

export const createDeploymentStatus = ({
  owner,
  repo,
  state,
  deploymentId,
  url,
}) =>
  octokit.repos
    .createDeploymentStatus({
      owner,
      repo,
      state,
      log_url: url,
      deployment_id: deploymentId,
    })
    .then(({ data }) => data);

export default octokit;
