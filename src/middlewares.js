import exec from './util/exec';
import { createGithubClient } from './util/github';

export const requireDocker = () => exec('docker', ['-v'], true);

export const initOctokit = async ({ token }) => {
  if (token) {
    await createGithubClient(token);
  }
};
