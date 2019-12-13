import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import findUp from 'find-up';
import zoya from 'zoya';
import { APP_NAME } from '../constants';

export const CONFIG_FILENAME_PREFIX = `.${APP_NAME}rc`;

export const resolveConfigFileInCWD = () =>
  resolve(process.cwd(), CONFIG_FILENAME_PREFIX);

export const getCurrentConfigPath = () =>
  findUp.sync([`${CONFIG_FILENAME_PREFIX}`, `${CONFIG_FILENAME_PREFIX}.json`]);

export const readConfig = (defaultConfig = {}) => {
  const configPath = getCurrentConfigPath();

  if (!configPath) {
    return defaultConfig;
  }

  const config = readFileSync(configPath, 'utf8');

  return {
    ...defaultConfig,
    ...JSON.parse(config),
  };
};

export const writeConfig = (
  data = {},
  { filepath = getCurrentConfigPath(), force = false } = {},
) => {
  if (!force && existsSync(filepath)) {
    zoya.warn(`${filepath} exists, if you wish to overwrite it, use --force`);
  }

  const string = JSON.stringify(data, null, 2);
  writeFileSync(filepath, string);

  return {
    filepath,
    data,
    string,
  };
};
