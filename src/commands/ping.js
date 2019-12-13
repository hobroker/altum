import zoya from 'zoya';

const handler = async ({ emoji }) => {
  zoya.info('pong');
  if (emoji) {
    zoya.info('🍿');
  }
};

const Ping = {
  command: 'ping',
  desc: 'Pings the app',
  handler,
};

export default Ping;
