const privateRoutes = require("./private");
const logoutRoutes = require("./logout");
const loginRoutes = require("./login");

const constructorMethod = app => {
    app.use("/private", privateRoutes);
    app.use("/logout", loginRoutes);
    app.use("/login", logoutRoutes);

    app.get("/", (req, res) => {
        res.render('/private');
    });

    app.use("*", (req, res) => {
        res.render('/login');
    });
};

module.exports = constructorMethod;