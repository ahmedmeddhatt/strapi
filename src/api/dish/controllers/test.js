'use strict';

/**
 * A set of functions called "actions" for `test`
 */

module.exports = {
  test: async (ctx, next) => {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  }
};
