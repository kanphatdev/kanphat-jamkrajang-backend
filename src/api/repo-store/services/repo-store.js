'use strict';

/**
 * repo-store service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::repo-store.repo-store');
