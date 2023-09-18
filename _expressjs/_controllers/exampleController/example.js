const testExample = async (req, res) => {
    console.log("Exemple");
    res.send({ response: true, message: "Examplee !" });
};

module.exports = {
    testExample,
};