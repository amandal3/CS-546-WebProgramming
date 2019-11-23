const logoutRoute = require("./logout");
const loginRoute = require("./login");
const privRoute = require("./private");
const path = require("path");

const constructorMethod = app => {
<<<<<<< HEAD
    app.use("/logout", logoutRoute);
    app.use("/login", loginRoute);
    app.use("/private", privRoute);
    app.get("/", (req, res) => {
        res.render('page');
    })
=======
	app.use("/logout", logoutRoute);
	app.use("/login", loginRoute);
  app.use("/private", privRoute);
  app.get("/", (req, res) => {
    res.render('form');
  })
>>>>>>> parent of 690860b... something

	app.use("*", (req, res) => {
		res.status(404).json({ error: "Not found -- Rawr Test1"});
	});
};

module.exports = constructorMethod;
