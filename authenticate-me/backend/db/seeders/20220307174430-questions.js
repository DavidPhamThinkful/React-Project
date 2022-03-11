'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Questions', [
     {
     ownerId: 1,
     title: 'How do you sleep at night?',
     description: 'I have been waking up at 3 in the morning every single day and it is hard to go back to sleep, can anyone help me?',
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     ownerId: 2,
     title: 'Pineapple on pizza?',
     description: 'How is pineapple on pizza good for some people? It does not make sense ',
     createdAt: new Date(),
     updatedAt: new Date()
   },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      */
   return queryInterface.bulkDelete('Questions', null, {});
  }
};
