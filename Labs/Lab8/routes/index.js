const searchRoutes = require("./search");
const detailsRoutes = require("./details")
const path = require("path");

const constructorMethod = app => {
    app.use("/details", detailsRoutes);
    app.use("/search", searchRoutes);
    app.get("/", (req, res) => {
        res.render('layouts/main');
    });

    //All other URLS should return a 404
    app.use("*", (req, res) => {
        res.status(404).json({ error: "Error." });
    });
};

module.exports = constructorMethod;