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
    await queryInterface.addColumn(
      'blog_tables',
      'userId',
      {
        type:Sequelize.INTEGER,
        references:{
          model:{
            tableName:'users',
            key:'id'
          },
          onUpdate:'CASCADE',
          onDelete:'SET NULL',
          defaultValue:null
        }
      }
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // npx sequelize-cli db:migrate:undo
    await queryInterface.removeColumn('users','region_id');
  }
};
