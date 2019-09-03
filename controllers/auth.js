let router = require('express').Router()
let passport = require('../config/passportConfig')
let db = require('../models');

router.get('/signup', (req, res) => {
    res.render('auth/signup');
})
router.post('/signup', (req, res, next) => {
    if (req.body.password !== req.body.password_verify) {
        req.flash('error', 'Passwords do not match!');
        res.redirect('/auth/signup');
    }
    else{
       //passwords matched; create user if they don't already exist
       db.user.findOrCreate({
           where: { email: req.body.email },
           defaults: req.body
       })
       .spread((user, wasCreated) => {
           if (wasCreated) {
               //this is legitimately a new user, so created
               passport.authenticate('local', {
                    successRedirect: '/profile',
                    successFlash: 'Successful Login; Welcome!',
                    failureRedirect: '/auth/login',
                    failureFlash: 'Hmm... this should never happen; please contact your Administrator.'
               })(req, res, next)
           }
           else {
               //if user already exists, don't allow them to create, make them log in
               req.flash('error', 'Account already exists, please log in!');
               res.redirect('/auth/login')
           }
       })
       .catch(err => {
        //print ALL the error info to the console
        console.log('Error in POST /auth/signup', err);
        //generic error for flash msg
        req.flash('error', 'Something went awry :(')
        // get validation-secific errors(important to show to user for UX)
        if (err && err.errors) {
            err.errors.forEach(e => {
                if (e.type === 'Validation error') {
                    req.flash('error', 'Validation Issue - ' + e.message)
                }
            })
        }
        //redirect user back to signup page ot try again
        res.redirect('/auth/signup');
       })
    }
})

router.get('/login', (req, res) => {
    res.render('auth/login');
})

router.post('/login', passport.authenticate('local', {
    successRedirect: '/profile',
    successFlash: 'Successful Login',
    failureRedirect: '/auth/login',
    failureFlash: 'Invalid Credentials!'
}))

router.get('/logout', (req, res) => {
    req.logout(); //deletes the user from req.user
    req.flash('success', 'You are Logged out. Thank you for visiting! 👋')
    res.render('/logout');
})

module.exports = router;