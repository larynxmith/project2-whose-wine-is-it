
let isLoggedIn = require('../middleware/isLoggedIn')
let router = require('express').Router()
let db = require('../models')

// GET /profile/index
router.get('/', isLoggedIn, (req, res) => {
    res.render('profile/index')
})


//GET /profile/userlist
router.get('/userlist', (req, res) => {
    db.userlist.findAll()
    .then(
    res.render('profile/userlist', { userlist })
    )
})


//POST to /profile/userlist
router.post('/userlist', (req, res) => {
    // console.log('req.body', JSON.parse(req.body))
    req.body = JSON.parse(Object.keys(req.body)[0])
    console.log('req.body', req.body)
    console.log('req.body.wine: ', req.body.wine)

    //console.log(req.user.id)
    //add the wine to the userList if not present, or find if it is
    db.userlist.findOrCreate({
        where: { 
            wine: req.body.wine,
            appellation: req.body.appellation,
            region: req.body.region,
            country: req.body.country,
            vintage: req.body.vintage,
            score: req.body.score,
            tasted: req.body.tasted,
            wishlist: req.body.wishlist,
            userId: req.user.id
        },
        defaults:  req.body
    })
    .spread((userlist, wasCreated) =>{
        if(wasCreated)  {
            res.json({ msg: "Success"})
        }
        else {
            // TODO: DELETE USERLIST?
            res.json({msg: 'already there'})
        }
    }).catch((err) => {
        console.log(err)
        res.send('error')
    });
})


module.exports = router