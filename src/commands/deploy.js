import consola from 'consola';
import github from '../util/github';
import { APP_NAME, DEPLOYMENT_STATUSES } from '../constants';

const deploy = async ({ owner, repo, ref }, state = null) => {
  const result = [];
  const base = { owner, repo };

  const { data: deployment } = await github.repos.createDeployment({
    ...base,
    ref,
    environment: `${ref}123`,
    auto_merge: false,
    log_url: 'https://google.com',
    environment_url: 'https://twitter.com',
    description: `Deploy request from ${APP_NAME}`,
    headers: {
      accept: 'application/vnd.github.ant-man-preview+json',
    },
  });
  result.push(deployment);

  if (state) {
    const statusRequest = await github.repos.createDeploymentStatus({
      ...base,
      state,
      deployment_id: deployment.id,
      headers: {
        accept: 'application/vnd.github.flash-preview+json',
      },
    });
    result.push(statusRequest);
  }

  return result;
};

const builder = parent =>
  parent
    .option('token', { string: true })
    .option('ref', { string: true })
    .option('repo', { string: true })
    .option('owner', { string: true })
    .demandOption(['token', 'ref', 'repo', 'owner']);

const handler = async options => {
  const result = await deploy(options, DEPLOYMENT_STATUSES.SUCCESS);

  consola.success('deployment', result);
};

const Deploy = {
  command: 'deploy',
  desc: 'Informs Github about the app deployment',
  builder,
  handler,
};

export default Deploy;
