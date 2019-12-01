import yargs from 'yargs';
import { completion as util } from './commands/util';

const subcommandsCompletionMap = { util };

const extractCommands = parent =>
  parent
    .getUsageInstance()
    .getCommands()
    .flatMap(([cmd, , , aliases]) => [cmd, ...aliases])
    .map(item => item.replace(/ (.*)/, ''));

const getCompletion = (cmd, sub) => {
  if (!sub) {
    return extractCommands(yargs);
  }

  return subcommandsCompletionMap[cmd] || [];
};

const completion = async (current, { _: [, cmd, sub] }) => {
  try {
    const result = getCompletion(cmd, sub);

    return result;
  } catch (error) {
    return [];
  }
};

export default completion;
