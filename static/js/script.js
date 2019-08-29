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
    
    
    
    
    
    
    
    
    

    
   

   
    
    <option value="Sicily">Sicily</option>

    <option value="Stellenbosch">Stellenbosch</option>
    <option value="Chapelle Chambertin Grand Cru">Chapelle Chambertin Grand Cru</option>
    <option value="Menfi">Menfi</option>
    <option value="Eola-Amity Hills">Eola-Amity Hills</option>
    <option value="Igp Saint Guilhem Le Desert">Igp Saint Guilhem Le Desert</option>
    <option value="Amarone Della Valpolicella Classico">Amarone Della Valpolicella Classico</option>
    <option value="Veronese">Veronese</option>
    <option value="Priorat">Priorat</option>
    <option value="Santa Lucia Highlands">Santa Lucia Highlands</option>
    <option value="Swartland">Swartland</option>
    <option value="Paarl">Paarl</option>
    <option value="Vista Flores">Vista Flores</option>
    <option value="Fleurie">Fleurie</option>
    <option value="Alsace">Alsace</option>
    <option value="Roccamonfina">Roccamonfina</option>
    <option value="Faugeres">Faugeres</option>
    <option value="Moulin A Vent">Moulin A Vent</option>
    <option value="Constantia">Constantia</option>

    <option value="Pouilly Fume">Pouilly Fume</option>
    <option value="Valpolicella">Valpolicella</option>
    <option value="Valpolicella Superiore">Valpolicella Superiore</option>
    <option value="Cafayate - Valle De Cafayate">Cafayate - Valle De Cafayate</option>
    <option value="Morgon">Morgon</option>
    <option value="Bot River">Bot River</option>
    <option value="Chapadmalal">Chapadmalal</option>
    <option value="Muscadet Sevre Et Maine">Muscadet Sevre Et Maine</option>
    <option value="Oregon">Oregon</option>
    <option value="Ribbon Ridge">Ribbon Ridge</option>
    <option value="Alsace Grand Cru">Alsace Grand Cru</option>
    <option value="Bekaa Valley">Bekaa Valley</option>
    <option value="Cote De Brouilly">Cote De Brouilly</option>
    <option value="Cotes de Provence">Cotes de Provence</option>
    <option value="IGP Atlantique">IGP Atlantique</option>
    <option value="Montlouis Sur Loire">Montlouis Sur Loire</option>
    <option value="Toscana Bianco IGT">Toscana Bianco IGT</option>
    <option value="Umbria">Umbria</option>
    <option value="Vino Nobile Di Montepulciano Riserva">Vino Nobile Di Montepulciano Riserva</option>
    <option value="Amarone Della Valpolicella">Amarone Della Valpolicella</option>
    <option value="Bandol">Bandol</option>
    <option value="Bannockburn">Bannockburn</option>
    <option value="Beaujolais">Beaujolais</option>
    <option value="Bonnezeaux">Bonnezeaux</option>
    <option value="Brouilly">Brouilly</option>
    <option value="Dalsheim">Dalsheim</option>
    <option value="Hattenheim">Hattenheim</option>
    <option value="Igp Cotes Catalanes">Igp Cotes Catalanes</option>
    <option value="Igp Pays D'Oc">Igp Pays D'Oc</option>
    <option value="Igp Val De Loire">Igp Val De Loire</option>
    <option value="Monterey">Monterey</option>
    <option value="Savennieres">Savennieres</option>
    <option value="Shangri La">Shangri La</option>
    <option value="Sierra Foothills">Sierra Foothills</option>
    <option value="Touraine">Touraine</option>
    <option value="Veneto">Veneto</option>