'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.changeColumn(
          'users',
          'skills',
          {
            type: Sequelize.STRING
          },
          { transaction: t }
        ),
        queryInterface.changeColumn(
          'users',
          'socialLinks',
          {
            type: Sequelize.STRING
          },
          { transaction: t }
        ),
        queryInterface.changeColumn(
          'users',
          'projects',
          {
            type: Sequelize.STRING
          },
          { transaction: t }
        )
      ])
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.changeColumn(
          'users',
          'skills',
          {
            type: Sequelize.STRING
          },
          { transaction: t }
        ),
        queryInterface.changeColumn(
          'users',
          'socialLinks',
          {
            type: Sequelize.STRING
          },
          { transaction: t }
        ),
        queryInterface.changeColumn(
          'users',
          'projects',
          {
            type: Sequelize.STRING
          },
          { transaction: t }
        )
      ])
    })
  }
}
