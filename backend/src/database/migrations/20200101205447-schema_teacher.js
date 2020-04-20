'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('teacher', {

      teacher_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true 
      },
      
      name: {
          type: Sequelize.STRING(20),
          allowNull: false
      },

      sex: {
          type: Sequelize.STRING,
          allowNull: false
      },

      email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
      },

      password: {
          type: Sequelize.STRING,
          allowNull: false
      },

      registration: {
          type: Sequelize.STRING(30),
          allowNull: false,
          unique: true
      },

      is_supersu: {
          type: Sequelize.BOOLEAN,
          defaultValue: true
      },

      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('teacher');
    
  }
};
