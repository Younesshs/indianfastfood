const { addMembmer, getMemberByEmail } = require("../../_models/authModel");
const bcrypt = require("bcrypt");

const userExists = async (member_email) => {
  try {
    await getMemberByEmail(member_email) ? true : false;
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "database get email error" });
  }
};

const register = async (req, res) => {
  // req =
  // {
  //   "member_password": "",
  //   "member_firstName":"",
  //   "member_lastName": "",
  //   "member_email": "",
  //   "member_mobilePhone": ""
  // }
  try {
    // Vérifier si l'utilisateur existe
    if (userExists(req.body.member_email)) {
      return res.status(400).json({ message: "user already exists" });
    }

    // Hash du mot de passe
    req.body.member_password = await bcrypt.hash(req.body.member_password, 10);

    await addMembmer(req.body, (err) => {
      if (err) {
        return res
          .status(500)
          .send({ message: "database registration error", error: err });
      }
      return res
        .status(200)
        .send({ message: "registration done" });
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "registration error" });
  }
};

module.exports = {
  register,
};