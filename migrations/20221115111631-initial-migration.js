  'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // npx sequalize-cli db:migrate
    // npx sequalize-cli db:migrate --env test
    await queryInterface.createTable('employee',{
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      name:{
        type:Sequelize.STRING(50),
        allowNull:false
      },
      salary:{
        type:Sequelize.INTEGER,
        allowNull:false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // npx sequelize-cli db:migrate:undo
    await queryInterface.dropTable('employee');
  }
};
