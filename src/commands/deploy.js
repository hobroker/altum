import consola from 'consola';
import github from '../util/github';
import { APP_NAME } from '../constants';

const builder = parent =>
  parent
    .option('token', { string: true })
    .option('ref', { string: true })
    .option('repo', { string: true })
    .option('owner', { string: true })
    .demandOption(['token', 'ref', 'repo', 'owner']);

const handler = async ({ ref, owner, repo }) => {
  const data = {
    ref,
    owner,
    repo,
    environment: ref,
    auto_merge: false,
    environment_url: 'https://twitter.com',
    description: `Deploy request from ${APP_NAME}`,
  };

  const deployment = await github.repos.createDeployment(data);

  consola.success('deployment', deployment);
};

const Deploy = {
  command: 'deploy',
  desc: 'Informs Github about the app deployment',
  builder,
  handler,
};

export default Deploy;
