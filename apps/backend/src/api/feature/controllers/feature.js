"use strict";

/**
 * feature controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::feature.feature", ({ strapi }) => ({
  async totalFeature(ctx) {
    try {
      const count = await strapi.db.query("api::feature.feature").count();
      return { data: { count } };
    } catch (err) {
      console.log(err);
    }
  },
}));
