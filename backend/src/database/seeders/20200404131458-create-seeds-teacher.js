'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('teacher', 
      [
        {
          name: "nelson",
          sex: "masculino",
          email: "nelson@gmail.com",
          password: "admin@123",
          registration: "123456",
          created_at: new Date(),
          updated_at: new Date(),
        },

      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('teacher', null, {});
  }
};
