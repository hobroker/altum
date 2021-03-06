import zoya from 'zoya';
import exec from '../util/exec';
import { parseJsonOutput } from '../util/json';
import { APP_NAME } from '../constants';

/**
 * @param {String} [filter]
 */
export const findContainers = async ({ filter = '' }) => {
  const result = await exec('docker', [
    'ps',
    '-a',
    '--format',
    '{{json .}}',
  ]).then(parseJsonOutput);

  if (!filter) {
    return result;
  }

  const filterFn = ({ ID, Image, Names, Labels }) =>
    Labels.startsWith(`"${APP_NAME}=`) &&
    [Names, Labels, ID, Image].some(item => item.includes(filter));

  return result.filter(filterFn);
};

const builder = parent =>
  parent.options({
    filter: {
      default: '',
    },
  });

/**
 * @param {String} [filter]
 */
const handler = async ({ filter }) => {
  if (filter) {
    zoya.info('filter=%s', filter);
  }

  const containers = await findContainers({ filter });

  zoya.info(`found ${containers.length} container(s)`);
  zoya.info(containers);
};

const List = {
  command: 'list [filter]',
  aliases: ['ls'],
  desc: 'Lists the managed apps',
  builder,
  handler,
};

export default List;
