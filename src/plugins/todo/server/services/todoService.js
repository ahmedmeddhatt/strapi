module.exports = ({ strapi }) => ({
    async findFunction(query) {
        return await strapi.entityService.findMany("plugin::todo.todoService",query)
    },
  });