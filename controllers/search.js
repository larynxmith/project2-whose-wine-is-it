let router = require('express').Router()
let db = require('../models');
let axios = require('axios')


//GET /search/index
router.get('/', (req, res) => {
    // $countrysql = "SELECT distinct country FROM searchfields"
    // $result = db.driver.execQuery($countrysql)
    db.searchfield.findAll()
    .then(searchfields => {
    res.render('search/index', { searchfields } )
    })
    .catch(err => {
        console.log('An error -', err)
    })
})

router.get('/searchlist', (req, res) => {
    let config = {
        headers: { 'Authorization' : process.env.TOKEN }
    }
    let gwsUrl = 'https://api.globalwinescore.com/globalwinescores/latest?country=' + req.body.country + '&region=' + req.body.region + '&appellation=' + req.body.appellation + '&ordering=-score&limit=1000'
    axios.get(gwsUrl, config)
    .then((response) => {
       //console.log(response.data.results)
        if (response.status !== 200) {
            console.log('Error in GET / route')
            return res.send('Quit your wine-ing, and try again!')
        }
        let searchList = response.data.results
        res.render('search/index', { searchList })
    })
    .catch(err => {
        res.send('Quit your wine-ing, and try again!')
    })  
})





module.exports = router


