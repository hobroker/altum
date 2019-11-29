import consola from 'consola';
import { APP_NAME } from '../constants';
import exec from '../util/exec';
import remove from './remove';
import stop from './stop';

const createMeta = ({ image, commit }) => {
  const [project, version] = image.replace(/(.*)\//, '').split(':');

  return {
    name: `${project}_${version}`,
    label: `${APP_NAME}=${commit}`,
  };
};

const stopAndTryToRemoveContainer = async id => {
  await stop.handler({ id });
  try {
    await remove.handler({ id });
  } catch (error) {
    consola.warn(error.stderr);
  }
};

const tryToHandleStartError = async (stderr, { name }) => {
  const namePattern = new RegExp(
    `name "\\/${name}" is already in use by container "(.*)"`,
  );

  const [, id] = namePattern.exec(stderr);
  if (!id) {
    throw new Error(`Tried to solve the error but could not: ${stderr}`);
  }

  if (namePattern.exec(stderr)) {
    await stopAndTryToRemoveContainer(id);
  }
};

const createArgs = (options, { name, label }) => {
  const args = ['-d', '--rm', `--name`, name, '--label', label];
  const optional = ['publish', 'build-args'];

  optional.forEach(key => {
    const value = options[key];
    if (typeof value !== 'undefined') {
      if (Array.isArray(value)) {
        value.forEach(item => {
          args.push(`--${key}`, item);
        });
      } else {
        args.push(`--${key}`, value);
      }
    }
  });

  return args;
};

const builder = parent =>
  parent.options({
    commit: { demandOption: true },
    image: { demandOption: true },
    publish: {},
    buildArgs: { alias: 'build-args', array: true },
  });

const handler = async options => {
  const { image } = options;

  const meta = createMeta(options);
  const args = createArgs(options, meta);
  consola.info(options.buildArgs, args);
  return;

  const _start = () => exec('docker', ['run', ...args, image]);

  try {
    await _start();
  } catch (error) {
    const { stderr } = error;
    if (stderr) {
      consola.warn(stderr);
      await tryToHandleStartError(stderr, meta);
      await _start();
    } else {
      throw error;
    }
  }

  consola.success('started');
};

const Start = {
  command: 'start <image> <commit>',
  aliases: ['up'],
  desc: 'Starts an app',
  builder,
  handler,
};

export default Start;
