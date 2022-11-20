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
    await queryInterface.createTable('comment_table',{
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    message:{
        type: Sequelize.STRING(100),
        allowNull:false
    },
    userId:{
        type:Sequelize.INTEGER,
        references:{
            model:'users',
            key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'SET NULL',
        defaultValue:null
    },
    blogId:{
        type:Sequelize.INTEGER,
        references:{
            model:'comment_tables',
            key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'SET NULL',
        defaultValue:null
    }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('comment_table');

  }
};
