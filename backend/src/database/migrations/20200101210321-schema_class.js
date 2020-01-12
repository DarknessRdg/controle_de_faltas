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
      
      module_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'module', key: 'module_id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      teacher_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'teacher', key: 'teacher_id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
