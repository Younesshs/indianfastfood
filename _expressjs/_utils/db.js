const mysql = require("mysql");
const serverInfo = require("../_config/config");

const db = mysql.createConnection({
  host: serverInfo.db.host,
  user: serverInfo.db.user,
  password: serverInfo.db.password,
  database: serverInfo.db.database,
});

db.connect((err) => {
  if (err) {
    console.error("[DATABASE] err: database not connected =>", err);
    return;
  }
  console.log();
  console.info(
    "[DATABASE] Database connected on port " + serverInfo.port.database + " ..."
  );
});

module.exports = db;
