const logoutRoute = require("./logout");
const loginRoute = require("./login");
const privRoute = require("./private");
const path = require("path");

const constructorMethod = app => {
    app.use("/logout", logoutRoute);
    app.use("/login", loginRoute);
    app.use("/private", privRoute);
    app.get("/", (req, res) => {
        res.render('form');
    })

    app.use("*", (req, res) => {
        res.status(404).json({ error: "Not found -- Error Msg from Index.js" });
    });
};

module.exports = constructorMethod;