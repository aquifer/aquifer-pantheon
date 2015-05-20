/**
 * @file
 * Pantheon deployment for Aquifer.
 */

var Deployment = {};

/**
 * Informs Aquifer of what this deployment script does.
 *
 * @return {object)
 *  Details about this deployment script.
 */
Deployment.init = function () {

  'use strict';

  return {
    description: 'Deploys a Drupal site to a Pantheon environment.',
    options: {
      siteName: '',
      src: '',
      make: ''
    }
  };
};

/**
 * Deploy a source codebase to a Pantheon repository target.
 *
 * @param {object} options
 *   An object containing the necessary data for a Pantheon deployment.
 *   Properties:
 *   - siteName: The Pantheon site name.
 *   - src: The source directory from which to deploy.
 *   - make: The make file to use with drush make.
 *
 * @return {object}
 *   A promise object for the deployment status.
 */
Deployment.run = function (options) {

  'use strict';

  console.log('Doesn\'t do anything yet!');
};

module.exports = Deployment;
