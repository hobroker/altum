import findUp from 'find-up';
import { readFileSync } from 'fs';
import { APP_NAME } from '../constants';

const readConfig = (defaultConfig = {}) => {
  const filenamePrefix = `${APP_NAME}rc`;
  const configPath = findUp.sync([
    `.${filenamePrefix}`,
    `.${filenamePrefix}.json`,
  ]);

  if (!configPath) {
    return defaultConfig;
  }

  const config = readFileSync(configPath, 'utf8');

  return {
    ...defaultConfig,
    ...JSON.parse(config),
  };
};

export default readConfig;
