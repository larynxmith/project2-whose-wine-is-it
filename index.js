// Required
require('dotenv').config();
let express = require('express')
let ejsLayouts = require('express-ejs-layouts')
let db = require('./models')
let methodOverride = require('method-override')
let moment = require('moment')
let flash = require('connect-flash')
let passport = require('./config/passportConfig')
let session = require('express-session');
let helmet = require('helmet')
let SequelizeStore = require('connect-session-sequelize')(session.Store)

// Instance
let app = express()


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(ejsLayouts)
app.use(express.static(__dirname + '/public/'))
app.use(methodOverride('_method'))

let sessionStore = new SequelizeStore({
    db: db.sequelize,
    expiration: 30 * 60 * 1000
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore

}));

//use this line once to store table
sessionStore.sync()

app.use(flash()); //must be after session
app.use(passport.initialize())
app.use(passport.session())
app.use(helmet())

// Custom middleware: write data to locals for every page
app.use((req, res, next) => {
    res.locals.alerts = req.flash();
    res.locals.currentUser = req.user
    res.locals.moment = moment
    next();
})

// middleware that allows us to access the 'moment' library in every EJS view
app.use(function(req, res, next) {
    res.locals.moment = moment
    next()
  })


// Controllers
app.use('/auth', require('./controllers/auth'));


  // bring in authors,articles, and comments controllers
// app.use('/comments', require('./controllers/comments'))
// app.use('/posts', require('./controllers/posts'))
// app.use('/topics', require('./controllers/topics'))
// app.use('/users', require('./controllers/users'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('*', (req, res) => {
    res.render('404');
})

let port = process.env.PORT
let server = app.listen(port, ()=> {
    console.log('Hear, Here! Listening on Port ', port)
  })
  
  module.exports = server