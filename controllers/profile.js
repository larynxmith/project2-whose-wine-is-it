
let isLoggedIn = require('../middleware/isLoggedIn')
let router = require('express').Router()
let db = require('../models')

// GET /profile/index
router.get('/', isLoggedIn, (req, res) => {
    res.render('profile/index')
})


//GET /profile/userlist
router.get('/userlist', (req, res) => {
    res.render('profile/userlist')
})


//POST to /profile/userlist
router.post('/', (req, res) => {
    console.log('req.body', req.body)
    console.log(req.user.id)
    // add the wine to the userList if not present, or find if it is
    db.userlist.findOrCreate({
        where: { 
            wine: req.body.wine,
            appellation: req.body.appellation,
            region: req.body.regions,
            country: req.body.country,
            vintage: req.body.vintage,
            score: req.body.score,
            tasted: req.body.tasted,
            wishlist: req.body.wishlist,
            userid: req.user.id
        },
        defaults:  req.body
    })
    .then((result) => {
        res.redirect('./userlist')
        
    }).catch((err) => {
        console.log(err)
        res.send('DB error, keep trying')
    });
})


module.exports = router