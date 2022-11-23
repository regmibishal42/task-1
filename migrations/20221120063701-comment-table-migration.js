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
    await queryInterface.createTable('comment_tables',{
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
            model:'blog_tables',
            key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'SET NULL',
        defaultValue:null
    }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('comment_tables');

  }
};
