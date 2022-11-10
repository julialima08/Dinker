'use strict'
const { User, sequelize } = require('../models')
const falso = require('@ngneat/falso')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const posts = await Promise.all(
      [...Array(50)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true })
        return {
          title: falso.randWord(),
          body: falso.randText({ charCount: 50 }),
          skills: [],
          creatorId: user.id
        }
      })
    )
    return queryInterface.bulkInsert('posts', posts)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts')
  }
}
