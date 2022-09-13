module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/find',
    handler: 'todoController.findFunction',
    config: {
      policies: [],
      auth : false
    },
  },
];
