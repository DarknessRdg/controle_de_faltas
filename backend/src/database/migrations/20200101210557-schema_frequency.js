'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('frequency', {

      frequency_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true 
      },

      class_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'class', key: 'class_id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      student_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'student', key: 'student_id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      present: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
      },

      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('frequency');
  
  }
};
