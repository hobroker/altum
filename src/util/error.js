import zoya from 'zoya';

const handleError = (error, exitCode = 1) => {
  const errors = [].concat(error);

  zoya.fatal(...errors);
  if (exitCode !== false) {
    process.exit(exitCode);
  }
};

export const handleYargsError = (message, error) => {
  if (message) {
    return handleError(message);
  }

  if (!error) {
    return null;
  }

  if (error.exitCode) {
    return handleError([error.stderr, error], error.exitCode);
  }

  return handleError(error);
};
