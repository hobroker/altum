import getPort from 'get-port';

const builder = parent =>
  parent.options({
    from: { number: true, default: 3000 },
    to: { number: true, default: 5000 },
  });

const handler = async ({ from, to }) => {
  const range = [from, to];
  const port = await getPort({
    port: getPort.makeRange(...range),
  });

  // eslint-disable-next-line no-console
  console.log(port);
};

const FreePort = {
  command: 'free-port',
  desc: 'Finds a free TCP port',
  handler,
  builder,
};

export default FreePort;
