const path = require('path');

module.exports = {
  dialect: "sqlite",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  storage: process.env.NODE_ENV === 'test' ? path.resolve(__dirname, '../../../__tests__/tests.sqlite') : path.resolve(__dirname, '../database.sqlite'),
  logging: process.env.NODE_ENV === 'test' ? false : true,
  define: {
    freezeTableName: true,
    timestamps: true
  }
};