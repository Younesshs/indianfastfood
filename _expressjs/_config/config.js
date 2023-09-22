require('dotenv').config();

const serverInfo = {
  port: {
    server: process.env.PORT || 3000,
    database: process.env.DB_PORT || 3306
  },
  db: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'indienfastfood',
    password: process.env.DB_PASSWORD || 'indienfastfood',
    database: process.env.DB_NAME || 'indienfastfood'
  }
};

module.exports = serverInfo;