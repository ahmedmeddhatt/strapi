module.exports = ({ strapi }) => ({
    async findFunction(ctx) {
        try{
      ctx.body = strapi
        .plugin('todo')
        .service('todoService')
        .findFunction(ctx.query);
    } catch (err) {
        ctx.throw (500,err)
    }
    },
  });