import zoya from 'zoya';
import { resolveConfigFileInCWD, writeConfig } from '../util/config';
import { defaultConfig } from '../config';

const builder = parent =>
  parent.options({
    force: {
      boolean: true,
      alias: 'f',
    },
    project: { demandOption: true },
  });

const handler = async ({ force, project }) => {
  const filepath = resolveConfigFileInCWD();
  const data = {
    ...defaultConfig,
    project,
  };

  writeConfig(data, { force, filepath });

  zoya.info(`${filepath} contents`, data);
};

const Init = {
  command: 'init',
  desc: 'Creates a .altumrc file',
  builder,
  handler,
};

export default Init;
