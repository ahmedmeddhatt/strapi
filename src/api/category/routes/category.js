'use strict';

/**
 * category router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::category.category',
// ({strapi}) => ({
//     async country (ctx) {
//         try {
//             ctx.body = 'ok';
//         } catch (err) {
//             ctx.body = err;
//         }
//     }
// })
);
