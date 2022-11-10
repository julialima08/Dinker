'use strict'

const falso = require('@ngneat/falso')

const users = [...Array(50)].map(() => ({
  name: falso.randFullName(),
  username: falso.randUserName(),
  email: falso.randEmail(),
  password: falso.randPassword(),
  // skills: [],
  // socialLinks: [],
  // projects: [],
  avatar: '',
  createdAt: falso.randPastDate(),
  updatedAt: falso.randPastDate()
}))
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', users)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users')
  }
}
