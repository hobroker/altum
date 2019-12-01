import FreePort from './free-port';

const builder = parent => parent.command(FreePort);

const Util = {
  command: 'util',
  desc: 'A set of utils/helpers',
  builder,
};

export const completion = ['free-port'];

export default Util;
