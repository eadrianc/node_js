'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
20200824220500-demo-tasks     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     *
    */

    await queryInterface.bulkInsert('Tasks', [{
      name: 'Edgar Campos',
      done: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Andre Reinoza',
      done: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Opcional',
      done: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
