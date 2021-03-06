'use strict';

// Scrape a linkedin profile for the public contents
const Promise = require('bluebird');
const analyser = require('./analyser');
const load = require('./load');

function getProfile(param, withlinks) {
  return load(param)             // retrieve Profile
      .then(window => analyser(window)) // Analyse Page
      .then(result => {
        if (withlinks) return Promise.resolve(result);  // resolve to obj: {profile, links}
        return Promise.resolve(result.profile);         // resolve to profile
      });
}

module.exports = getProfile;
