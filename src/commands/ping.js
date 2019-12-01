import consola from 'consola';

const handler = async ({ emoji }) => {
  consola.success('pong');
  if (emoji) {
    consola.log('🍿');
  }
};

const Ping = {
  command: 'ping',
  desc: 'Pings the app',
  handler,
};

export default Ping;
