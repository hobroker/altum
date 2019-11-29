import parser from 'yargs-parser';
import exec from './util/exec';
import { setSilent } from './util/silent';

export const requireDocker = () => exec('docker', ['-v'], true);

export const silentCondition = () => {
  const { silent } = parser(process.argv);
  setSilent(silent);
};
