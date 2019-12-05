import zoya from 'zoya';
import { DEPLOYMENT_STATUSES } from '../constants';
import { createDeployment, createDeploymentStatus } from '../util/octokit';

const builder = parent =>
  parent.options({
    token: { demandOption: true },
    ref: { demandOption: true },
    repo: { demandOption: true },
    owner: { demandOption: true },
  });

const handler = async ({ owner, repo, ref }) => {
  const { id: deploymentId } = await createDeployment({
    owner,
    repo,
    ref,
  });

  zoya.info(`deployment ${deploymentId} was created`);

  await createDeploymentStatus({
    owner,
    repo,
    deploymentId,
    state: DEPLOYMENT_STATUSES.IN_PROGRESS,
    url: 'https://google.com',
  });

  zoya.info('deployment status was created');

  zoya.info('deployed');
};

const Deploy = {
  command: 'deploy',
  desc: 'Informs Github about the app deployment',
  builder,
  handler,
};

export default Deploy;
