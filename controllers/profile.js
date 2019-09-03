
let isLoggedIn = require('../middleware/isLoggedIn')
let router = require('express').Router()
let db = require('../models')

// GET /profile/index
router.get('/', isLoggedIn, (req, res) => {
    res.render('profile/index')
})


//GET /profile/userlist
router.get('/userlist', isLoggedIn, (req, res) => {
    db.userlist.findAll({
        where: {
            userId: req.user.id
        }
    })
    .then((userlist) => {
    res.render('profile/userlist', { userlist: userlist } )
    })
    .catch(err => {
        console.log('An error -', err)
    })
})


//POST to /profile/userlist
router.post('/userlist', (req, res) => {
    req.body = JSON.parse(Object.keys(req.body)[0])

    // Add the wine to the userList if not present, or find if it is
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
    // Check to see if wine alrady exists on user's lsit
    .spread((userlist, wasCreated) =>{
        if(wasCreated)  {
            res.json({ msg: "Wine Was Added"})
        }
        else {
            res.json({msg: 'You Already Have This Wine on Your List'})
        }
    })
    .catch(err => {
        console.log('An error -', err)
    })
})
//DELETE wine from profile/userlist
router.delete('/userlist', (req, res) => {
    req.body = JSON.parse(Object.keys(req.body)[0])
	db.userlist.destroy({ 
		where: { 
			wine: req.body.wine,	
            vintage: req.body.vintage,
            userId: req.user.id
		}
	})
	.then(() => {
        console.log('wine deleted')
        res.json({ msg: 'Wine Was Deleted'})
	})
	.catch(err => {
        console.log('An error -', err)
    })
})

//PUT to Tasted at profile/userlist
router.put('/userlist', (req, res) => {
    req.body = JSON.parse(Object.keys(req.body)[0])
    db.userlist.update({
        tasted: req.body.tasted,
        wishlist: req.body.wishlist
    }, {
        where: { 
			wine: req.body.wine,	
            vintage: req.body.vintage,
            userId: req.user.id
		}
    })
    .then(() => {
        console.log('taste status updated')
        res.json({ msg: 'Taste Status Was Updated'})
	})
	.catch(err => {
        console.log('An error -', err)
    })
})



module.exports = router