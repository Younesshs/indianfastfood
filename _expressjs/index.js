const express = require("express");
const session = require("express-session");
const bodyparser = require("body-parser");
const cors = require("cors");
const serverInfo = require('./_config/config.js');
const exampleRoutes = require("./_routes/exampleRoutes");
const authRoutes = require("./_routes/auhRoutes");

const app = express();

app.use(cors());
app.use(bodyparser.json());

app.use(session({
    secret: "mettre-un-code-secret", // TODO: !!
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use('/example', exampleRoutes);
app.use('/auth', authRoutes);

app.listen(serverInfo.port.server, () => {
    console.log();
    console.info(
        "[SERVER] Server started on port " + serverInfo.port.server + " ..."
    );
    console.log();
});