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
  consola.info(`removing container ${id}`);

  await exec('docker', ['rm', id]);

  consola.success(`container ${id} was removed`);
};

const Remove = {
  command: 'remove',
  aliases: ['rm'],
  desc: 'Removes an app',
  builder,
  handler,
};

export default Remove;
