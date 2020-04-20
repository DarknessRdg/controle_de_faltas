require('dotenv/config');

module.exports = {
  dialect: "sqlite",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  storage: 
    process.env.NODE_ENV === 'test' 
    ? process.cwd() + "/__tests__/tests.sqlite" 
    : process.cwd() + "/src/database/database.sqlite",
  logging: process.env.NODE_ENV === 'test' ? false : true,
  define: {
    freezeTableName: true,
    underscored: true,
    timestamps: true
  }
};