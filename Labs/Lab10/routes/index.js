const logoutRoute = require("./logout");
const loginRoute = require("./login");
const privRoute = require("./private");
const path = require("path");

const constructorMethod = app => {
    app.use("/logout", logoutRoute);
    app.use("/login", loginRoute);
    app.use("/private", privRoute);
    app.get("/", (req, res) => {
        res.render('login');
    })

    app.use("*", (req, res) => {
        res.status(404).json({ error: "Not Found: 404 Error" });
    });
};

module.exports = constructorMethod;