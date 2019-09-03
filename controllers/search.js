let router = require('express').Router()
let db = require('../models');
let axios = require('axios')


router.get('/', (req, res) => {
    let config = {
        headers: { 'Authorization' : process.env.TOKEN }
    }
    let gwsUrl = 'https://api.globalwinescore.com/globalwinescores/latest?country=Usa&region=California&appellation=Oakville&vintage=2011&ordering=-score'
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



