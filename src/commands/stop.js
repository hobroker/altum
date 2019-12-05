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
  zoya.info(`stopping container ${id}`);

  await exec('docker', ['stop', id]);

  zoya.info(`container ${id} was stopped`);
};

const Stop = {
  command: 'stop <id>',
  aliases: ['down'],
  desc: 'Stops an app',
  builder,
  handler,
};

export default Stop;
