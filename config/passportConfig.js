// require passport and any passport strategies we want to use
let passport = require('passport')
let LocalStrategy = require('passport-local').Strategy
// access the database
let db = require('../models')

//Provide Serialization/Deserialization functions for Passport to use
//Thsi allows passport to store user by the id alone(Serialize) and look
// up a user's full information from the id(Deserialize)
passport.serializeUser((user, cb) => {
    // callback: first arg is error, second arg is the data that is passed on
    cb(null, user.id)
})

passport.deserializeUser((id, cb) => {
    db.user.findByPk(id)
    .then(user => {
        cb(null, user)
    })
    .catch(cb)
})

// implement strategies
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (typedInEmail, typedInPassword, cb) => {
    //try looking up user by email
    db.user.findOne({
        where: { email: typedInEmail}
    })
    .then(foundUser => {
        //if user not found with that email -OR-
        //user found, but incorrect password
        console.log('found user', !foundUser)
        if(!foundUser || !foundUser.validPassword(typedInPassword)) {
            //BAD user, return null
            cb(null, null)
        }
        else {
            //GOOD user
            cb(null, foundUser)
        }
    })
    .catch(cb)  // end of user findOne call
}))

//export file to be imported on another page
module.exports = passport
