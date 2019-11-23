import consola from 'consola';

const handler = () => {
  consola.success('pong');
};

const Ping = {
  command: 'ping',
  desc: 'Pings the app',
  builder: undefined,
  handler,
};

export default Ping;
