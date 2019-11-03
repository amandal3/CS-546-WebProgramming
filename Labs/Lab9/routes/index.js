const primeRoutes = require("./prime");

const constructorMethod = app => {
    app.use("/prime", calculatorRoutes);

    app.use("*", (req, res) => {
        res.redirect("/prime/static");
    });
};

module.exports = constructorMethod;