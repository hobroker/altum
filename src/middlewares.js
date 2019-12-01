import exec from './util/exec';
import { setSilent } from './util/silent';

export const requireDocker = () => exec('docker', ['-v'], false, false);

export const silentOption = ({ silent }) => {
  setSilent(silent);
};
