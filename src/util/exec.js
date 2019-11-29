import consola from 'consola';
import execa from 'execa';
import { isSilent } from './silent';

/**
 * @param {String} command
 * @param {Array<String>} [args=[]]
 * @param {Boolean} [logOutput=false]
 * @param {Boolean} [logCommand=false]
 * @returns {Promise<null|String>}
 */
const exec = async (
  command,
  args = [],
  logOutput = false,
  logCommand = true,
) => {
  const argsString = args.join` `;

  if (!isSilent() && logCommand) {
    consola.info('$', command, argsString);
  }

  const result = await execa(command, args);

  if (!isSilent() && logOutput) {
    consola.info('>', result.stdout || result.stderr);
  }

  return result.stdout;
};

export default exec;
