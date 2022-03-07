'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Answers', [
      {
        userId: 1,
        questionId: 1,
        answer: 'answer test 1',
        createdAt: new Date(),
        updatedAt: new Date()

      },
    {
      userId: 2,
        questionId: 1,
        answer: 'answer test 2',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      userId: 3,
        questionId: 2,
        answer: 'answer test 3',
        createdAt: new Date(),
        updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Answers', null, {});
  }
};
