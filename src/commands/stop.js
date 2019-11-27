import consola from 'consola';
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
  consola.info(`stopping container ${id}`);

  await exec('docker', ['stop', id]);

  consola.success(`container ${id} was stopped`);
};

const Stop = {
  command: 'stop',
  aliases: ['down'],
  desc: 'Stops an app',
  builder,
  handler,
};

export default Stop;
