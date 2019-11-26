import consola from 'consola';
import github from '../util/github';

const builder = parent =>
  parent
    .option('token', {
      string: true,
    })
    .demandOption(['token']);

const handler = async () => {
  consola.info(
    await github.repos.listDeployments({
      owner: 'hobroker',
      repo: 'llogger',
    }),
  );
  consola.success('pong');
};

const Deploy = {
  command: 'deploy',
  desc: 'Informs Github about the app deployment',
  builder,
  handler,
};

export default Deploy;
