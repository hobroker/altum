import FreePort from './free-port';

const builder = parent => parent.command(FreePort);

const Util = {
  command: 'util',
  desc: 'A set of utils/helpers',
  builder,
  handler: undefined,
};

export default Util;
