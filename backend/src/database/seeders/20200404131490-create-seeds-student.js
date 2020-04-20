'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('student', 
      [
        
        {
          name: "ricardo",
          sex: "masculino",
          email: "ricardo@gmail.com",
          password: "admin@123",
          registration: "111111",
          phone: 999555,
          identity: "111111",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          name: "ana",
          sex: "femenina",
          email: "ana@gmail.com",
          password: "admin@123",
          registration: "222222",
          phone: 999555,
          identity: "222222",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          name: "keyla",
          sex: "femenina",
          email: "keyla@gmail.com",
          password: "admin@123",
          registration: "333333",
          phone: 9995555,
          identity: "333333",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          name: "luan",
          sex: "masculino",
          email: "luan@gmail.com",
          password: "admin@123",
          registration: "444444",
          phone: 9995555,
          identity: "444444",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          name: "carlos",
          sex: "masculino",
          email: "carlos@gmail.com",
          password: "admin@123",
          registration: "555555",
          phone: 99955555,
          identity: "555555",
          created_at: new Date(),
          updated_at: new Date(),
        }

      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('student', null, {});
  }
};
