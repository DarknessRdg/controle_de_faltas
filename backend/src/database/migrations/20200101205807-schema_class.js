'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.createTable('class', {

      class_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true 
      },

      teacher_id: {
          type: Sequelize.INTEGER,
          onDelete: 'cascade',
          allowNull: false,
          references: {
              model: 'teacher',
              key:  'teacher_id',
              as: 'teachers',
          }
      },

      module_id: {
          type: Sequelize.INTEGER,
          onDelete: 'cascade',
          allowNull: false,
          references: {
              model: 'module',
              key:  'module_id',
              as: 'modules',
          }
      },
      
      date: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      
      descriptions: {
          type: Sequelize.STRING,
          allowNull: false
      },

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE

    });
  },

  down: (queryInterface, Sequelize) => {
  
    return queryInterface.dropTable('class');
    
  }
};
