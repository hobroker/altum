import consola from 'consola';
import getPort from 'get-port';

const handler = async () => {
  const range = [8080, 8099];
  const port = await getPort({
    port: getPort.makeRange(...range),
  });

  consola.log(port);
};

const FreePort = {
  command: 'free-port',
  desc: 'Finds a free TCP port',
  builder: undefined,
  handler,
};

export default FreePort;
