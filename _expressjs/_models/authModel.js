const db = require("../_utils/db");

const authModel = {
  addMembmer: async (data, callback) => {
    const qr = `INSERT INTO _member (member_firstName, member_lastName, member_mobilePhone, member_email, member_password) VALUES (?,?,?,?,?)`;
    const values = [
      data.member_firstName,
      data.member_lastName,
      data.member_mobilePhone,
      data.member_email,
      data.member_password
    ];
    db.query(qr, values, callback);
  },
  getMemberByEmail: (callback) => {
    const qr = `SELECT member_email FROM _member`;
    db.query(qr, callback);
  }
};

module.exports = authModel; 