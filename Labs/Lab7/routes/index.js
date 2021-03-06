const postRoutes = require("./posts");
const animalRoutes = require("./animals");
// const likeRoutes = require("./likes");

const constructorMethod = app => {
    app.use("/posts", postRoutes);
    app.use("/animals", animalRoutes);
    // app.use("/likes", likeRoutes);

    app.use("*", (req, res) => {
        res.sendStatus(404);
    });
};

module.exports = constructorMethod;