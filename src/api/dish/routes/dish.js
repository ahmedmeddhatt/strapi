'use strict';

/**
 * dish router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::dish.dish',({strapi})=> ({
    async test (ctx) {
        try {
            ctx.body = 'done'
        } catch (err) {
            ctx.body= err
        }
    }
}));
