const express = require('express');
const usersData = require('./data/users'); //Not Needed here
const exphbs = require('express-handlebars');
const configRoutes = require('./routes');
const static = express.static(__dirname + '/public');
const bcrpytjs = require('bcrypt');
const session = require('express-session')
const app = express();
const path = require("path")

app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//https://expressjs.com/en/guide/writing-middleware.html
// app.get('/', function(req, res, next) {
//     if (res.session.user) {
//         next();
//     } else {
//         response.status(403).send("User is not logged in.");
//     }
// })
/*
const authenicationChcker = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.status(403);
        res.render("error", { error: "authentication failed" })
        //return;
    }
}*/

app.use((req, res, next) => {
    console.log((new Date().toUTCString()), req.method, req.originalUrl);
    next();
})

app.use(session({
        name: 'AuthCookie',
        secret: 'some secret string!',
        resave: false,
        saveUninitialized: true
    }))
    /*
    app.use((req, res, next) => {
        console.log((new Date().toUTCString()), req.method, req.originalUrl);
        next();
    })*/
    /* 
    app.get("/", (req, res) => {
        if (req.session.user) {
            // if user exits, go to private
            res.redirect("/private");
        } else {
            // else send to main
            res.render("layouts/main");
        }
    });
    */

// from logout.handlebar (idk why req.session works here)
// app.get("/logout", (req, res) => {
//     // req.session = null;
//     // console.log("huh");
//     // req.session.cookie.expires = new Date().getTime();
//     console.log("bro");
//     req.session.destroy();
//     console.log("poo");
//     res.clearCookie("AuthCookie");
//     res.render("logout");
//     // req.session.("username") = null;
//     return;
// });

configRoutes(app);

app.use("*", (req, res) => {
    res.sendStatus(404);
});
//Addind top for testing reasons
// We can now navigate to localhost:3000
app.listen(3000, function() {
    console.log('Your server is now listening on port 3000! \nYour routes will be running on http://localhost:3000');
});