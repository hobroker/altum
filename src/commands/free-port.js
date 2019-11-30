import getPort from 'get-port';

const handler = async () => {
  const range = [8081, 8099];
  const port = await getPort({
    port: getPort.makeRange(...range),
  });

  console.log(port);
};

const FreePort = {
  command: 'free-port',
  desc: 'Finds a free TCP port',
  builder: undefined,
  handler,
};

export default FreePort;
