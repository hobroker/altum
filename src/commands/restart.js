import consola from 'consola';
import exec from '../util/exec';

const builder = parent =>
  parent.option('id', {
    desc: 'container ID',
    demandCommand: true,
    string: true,
  });

/**
 * @param {String} id
 */
const handler = async ({ id }) => {
  consola.info(`restarting container ${id}`);

  await exec('docker', ['restart', id]);

  consola.success(`container ${id} was restarted`);
};

const Restart = {
  command: 'restart',
  aliases: ['rs'],
  desc: 'Restarts an app',
  builder,
  handler,
};

export default Restart;
