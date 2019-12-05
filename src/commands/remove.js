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
  zoya.info(`removing container ${id}`);

  await exec('docker', ['rm', id]);

  zoya.info(`container ${id} was removed`);
};

const Remove = {
  command: 'remove <id>',
  aliases: ['rm'],
  desc: 'Removes an app',
  builder,
  handler,
};

export default Remove;
