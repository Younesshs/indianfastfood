const express = require("express");
const router = express.Router();

const {
    testExample
} = require("../_controllers/exampleController/example");

router.get("/", testExample);

module.exports = router;