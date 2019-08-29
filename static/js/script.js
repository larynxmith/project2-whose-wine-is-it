import { INITIALLY_DEFERRED } from "sequelize/types/lib/deferrable";

document.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM fully loaded and parsed')
})
console.log('Script is loaded')


document.getElementsByTagName('tbody')[0].addEventListener('click', (e) => {
    e.preventDefault()
    console.dir(e.target)
    if(e.target.className === 'tasted btn') {
        e.target.value = 'true'
        e.target.className = 'tasted btn btn-success'
        e.target.disabled = 'true'
        //e.target.parentElement.submit()
        console.log('Tasted success', e.target)
        // This route we are calling (on the back end)
        // will add a row to the tasted table
        // fetch(urlToServerRouteAddTasted)
        // .then()
        // .then(response => { 
            // this is success, do DOM manipulation
            // chnage the class name to "not-tasted"
        // })
        // .catch()
    } 
    else if(e.target.classList.contains('not-tasted')) {
        // REMOVE TASTED
        // fetch(urlToServerRouteDeleteTasted)
        // .then()
        // .then(response => { 
            // this is success, do DOM manipulation
            // chnage the class name to "not-tasted"
        // })
        // .catch()
    }
    else if(e.target.className === 'wishlist btn') {
        e.target.value = 'true'
        e.target.className = 'tasted btn btn-primary'
        e.target.disabled = 'true'
        console.log('Wishlist success', e.target)
    }
    else { return }

})

//switch (getElementById('countryDd')) {
    
    
    
    
    
    
    
    
    

    
   

   
    

