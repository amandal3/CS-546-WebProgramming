const express = require('express');
const usersData = require('./data/users');
const exphbs = require('express-handlebars');
const configRoutes = require('./routes');
const static = express.static(__dirname + '/public');
const bycrpytjs = require('bycrypt');

// We create our express instance:
const app = express();

// Middlewares:
// 1. One which will count the number of requests made to your website
// Request is the request object, just like how we have access to the request in our routes
// Response is the response object, just like how we have access to the response in our routes
// next is a callback that will call the next middleware registered, or proceed to routes if none exist.
// If we do not call next(), we need to make sure we send a response of some sort or it will poll forever!
app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', function(req, res, next) {
    if (res) {
        next();
    } else {
        response.status(403).send("User is not logged in.");
    }
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