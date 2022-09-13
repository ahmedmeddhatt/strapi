'use strict';

/**
 * category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category', ({strapi}) => ({
    async exampleAction(ctx) {
        try {
          ctx.body = 'ok';
        } catch (err) {
          ctx.body = err;
        }
    }
}));
