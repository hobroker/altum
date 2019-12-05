import zoya from 'zoya';
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
    zoya.info('$', command, argsString);
  }

  const result = await execa(command, args);

  if (!isSilent() && logOutput) {
    zoya.info('>', result.stdout || result.stderr);
  }

  return result.stdout;
};

export default exec;
