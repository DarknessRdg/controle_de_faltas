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
          onDelete: 'cascade',
          allowNull: false,
          references: {
              model: 'class',
              key:  'class_id',
              as: 'classes',
          }
      },

      student_id: {
          type: Sequelize.INTEGER,
          onDelete: 'cascade',
          allowNull: false,
          references: {
              model: 'student',
              key:  'studen_id',
              as: 'students',
          }
      },
      
      present: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
      },

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('frequency');
  
  }
};
