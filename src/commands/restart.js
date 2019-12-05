import zoya from 'zoya';
import exec from '../util/exec';

const builder = parent =>
  parent.options({
    id: {
      demandCommand: true,
    },
  });

/**
 * @param {String} id
 */
const handler = async ({ id }) => {
  zoya.info(`restarting container ${id}`);

  await exec('docker', ['restart', id]);

  zoya.info(`container ${id} was restarted`);
};

const Restart = {
  command: 'restart <id>',
  aliases: ['rs'],
  desc: 'Restarts an app',
  builder,
  handler,
};

export default Restart;
