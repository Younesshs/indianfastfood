const express = require("express");
const router = express.Router();

const {
    register
} = require("../_controllers/authController/register");

const {
    login
} = require("../_controllers/authController/login");

router.post("/login", login);
router.post("/register", register);

module.exports = router;