const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const hbs = exphbs.create({ });

const sess = {
    secret: 'hOlx=^er2b6nghsE',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});


// figlet package
var figlet = require('figlet');

figlet('Now Listening!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});