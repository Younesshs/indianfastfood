const db = require("../_utils/db");

const exempleModel = {
    removeGitlab: (id, callback) => {
        const qr = `DELETE FROM gitlab_account WHERE gitlab_account.id_gitlab_account = ? LIMIT 1`;
        db.query(qr, [id], callback);
    },
};

module.exports = exempleModel;