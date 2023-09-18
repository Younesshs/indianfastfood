const { removeGitlab } = require("../../_models/exampleModel");

const getExemple = async (req, res) => {
    console.log("information de l'exemple", req.query);

    await removeGitlab(id, (err) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                message: "removal of the gitlab account done successfully !",
            });
        }
    });

    res.send({ response: req.query, message: "c'est un exemple" });
};

module.exports = {
    getExemple,
};