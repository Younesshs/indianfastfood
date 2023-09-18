require('dotenv').config();

const serverInfo = {
  port: {
    server: process.env.PORT || 3000,
    database: process.env.DB_PORT || 3306
  },
  db: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || '', // TODO: Compléter
    password: process.env.DB_PASSWORD || '', // TODO: Compléter
    database: process.env.DB_NAME || '' // TODO: Compléter
  }
};

module.exports = serverInfo;