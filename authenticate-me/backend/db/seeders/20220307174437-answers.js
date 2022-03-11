'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Answers', [
      {
        userId: 1,
        questionId: 1,
        answer: 'Take melatonin! It helps!',
        createdAt: new Date(),
        updatedAt: new Date()

      },
    {
      userId: 2,
        questionId: 1,
        answer: 'Listen to waves crashing',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      userId: 3,
        questionId: 2,
        answer: 'What do you mean? It contrasts the heaviness of the pizza with some sweetness! Your taste buds need help buddy',
        createdAt: new Date(),
        updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Answers', null, {});
  }
};
