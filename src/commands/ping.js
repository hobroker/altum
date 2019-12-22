import { resolve } from 'path';
import zoya from 'zoya';
import exec from '../util/exec';

const handler = async () => {
  zoya.info('pong');
  const envRoot = resolve(__dirname, '../env');
  await exec('docker', ['build', '-f', `${envRoot}/Dockerfile`, envRoot], true);
};

const Ping = {
  command: 'ping',
  desc: 'Pings the app',
  handler,
};

export default Ping;
