import yargs from 'yargs';

let mainCommands;

const setMainCommands = () => {
  mainCommands = yargs
    .getUsageInstance()
    .getCommands()
    .flatMap(([cmd, , , aliases]) => [cmd, ...aliases])
    .map(item => item.replace(/ (.*)/, ''));
};

const getMainCommands = () => {
  if (!mainCommands) {
    setMainCommands();
  }
  return mainCommands;
};

const completion = async (current, { _: [, cmd] }) => {
  try {
    const { completion: result = [] } = await import(`./commands/${cmd}`);

    return result;
  } catch (e) {
    return getMainCommands();
  }
};

export default completion;
