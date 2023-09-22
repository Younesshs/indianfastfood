const login = async (req, res) => {
    console.log("login");
    res.send({ response: true, message: "login !" });
};

module.exports = {
    login,
};