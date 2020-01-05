'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.createTable('student', {

      student_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true 
      },
      
      name: {
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

      sex: {
          type: Sequelize.STRING,
          allowNull: false
      },

      phone: {
          type: Sequelize.STRING,
          allowNull: false,
      },

      registration: {
          type: Sequelize.STRING(30),
          allowNull: false,
          unique: true
      },

      identity: {
          type: Sequelize.STRING(30),
          allowNull: false,
          unique: true
      },
      
      is_supersu: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.dropTable('student');
    
  }
};
