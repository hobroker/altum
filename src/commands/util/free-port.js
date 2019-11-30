import getPort from 'get-port';

const handler = async () => {
  const range = [3000, 5000];
  const port = await getPort({
    port: getPort.makeRange(...range),
  });

  // eslint-disable-next-line no-console
  console.log(port);
};

const FreePort = {
  command: 'free-port',
  desc: 'Finds a free TCP port',
  builder: undefined,
  handler,
};

export default FreePort;
