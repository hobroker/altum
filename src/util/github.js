import Octokit from '@octokit/rest';

const github = {};

/**
 * @param {String} auth
 * @returns {Octokit}
 */
export const createGithubClient = auth => {
  module.exports.default = new Octokit({ auth });
};

export default github;
