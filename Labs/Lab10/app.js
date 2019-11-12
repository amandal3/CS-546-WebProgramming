const express = require('express');
const usersData = require('./data/users');
const exphbs = require('express-handlebars');
const configRoutes = require('./routes');
const static = express.static(__dirname + '/public');
const bycrpytjs = require('bycrypt');
const app = express();

app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//https://expressjs.com/en/guide/writing-middleware.html
app.get('/', function(req, res, next) {
    if (res) {
        next();
    } else {
        response.status(403).send("User is not logged in.");
    }
})

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

configRoutes(app);

// We can now navigate to localhost:3000
app.listen(3000, function() {
    console.log('Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it');
});