
let isLoggedIn = require('../middleware/isLoggedIn')
let router = require('express').Router()
let db = require('../models')

// GET /profile/index
router.get('/', isLoggedIn, (req, res) => {
    res.render('profile/index')
})


//GET /profile/userlist
router.get('/userlist', (req, res) => {
    db.userlist.findAll({
        where: {
            userId: req.user.id
        }
    })
    .then((userlist) => {
    res.render('profile/userlist', { userlist: userlist } )
    })
})


//POST to /profile/userlist
router.post('/userlist', (req, res) => {
    console.log('POST', req.body)
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
            res.json({ msg: "Wine Was Added"})
        }
        else {
            // TODO: DELETE USERLIST?
            res.json({msg: 'You Already Have This Wine on Your List'})
        }
    }).catch((err) => {
        console.log(err)
        res.send('error')
    })
})
//DELETE from profile/userlist
router.delete('/userlist', (req, res) => {
    console.log('DELETE ', req.body)
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
	.catch((error) => {
        console.log('error', error)
        res.send('error')
	})
})

//PUT to profile/userlist
router.put('/userlist', (req, res) => {
    console.log('PUT', req.body)
    req.body = JSON.parse(Object.keys(req.body)[0])
    db.userlist.update({
        tasted: !req.body.tasted,
        //wishlist: !req.body.tasted
    }, {
        where: { 
			wine: req.body.wine,	
            vintage: req.body.vintage,
            userId: req.user.id
		}
    })
    .then(() => {
        console.log('wine status updated')
        res.json({ msg: 'Status Was Updated'})
	})
	.catch((error) => {
        console.log('error', error)
        res.send('error')
	})
})


module.exports = router