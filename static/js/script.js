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

switch (getElementById('countryDd')) {
    case Usa:
            <option value="California">California</option>
            <option value="Washington">Washington</option>
            <option value="Oregon">Oregon</option>
}
    case France
            <option value="Alsace">Alsace</option>
            <option value="Beaujolais">Beaujolais</option>
            <option value="Bordeaux">Bordeaux</option>
            <option value="Bourgogne">Bourgogne</option>
            <option value="Champagne">Champagne</option>
            <option value="Languedoc Roussillon">Languedoc Roussillon</option>
            <option value="Loire">Loire</option>
            <option value="Rhone">Rhone</option>
            <option value="Provence">Provence</option>
            <option value="Sud Ouest">Sud Ouest</option>

    case Italy 
            <option value="Campania">Campania</option>
            <option value="Piedmont">Piedmont</option>
            <option value="Sicilia">Sicilia</option>
            <option value="Tuscany">Tuscany</option>
            <option value="Umbria">Umbria</option>
            <option value="Veneto">Veneto</option>

    case Australia
    <option value="Australia">Australia</option>

    case Argentina
            <option value="Mendoza">Mendoza</option>
            <option value="Argentina">Argentina</option>

    case New Zealand
            <option value="Central Otago">Central Otago</option>
            <option value="New Zealand">New Zealand</option>

    case Chile
            <option value="Chile">Chile</option>

    case Spain 
            <option value="Spain">Spain</option>


    case South Africa
            <option value="Coastal Region">Coastal Region</option>
            <option value="Walker Bay">Walker Bay</option>
            <option value="Western Cape">Western Cape</option>



    case Sicily
    <option value="Sicilia">Sicilia</option>
    <option value="Sicily">Sicily</option>

    case Germany

    case Lebanon
    <option value="Lebanon">Lebanon</option>

    case China
    <option value="Yunnan">Yunnan</option>


    <option value="Saint Emilion Grand Cru">Saint Emilion Grand Cru</option>
    <option value="Napa Valley">Napa Valley</option>
    <option value="Pessac Leognan">Pessac Leognan</option>
    <option value="Pomerol">Pomerol</option>
    <option value="Margaux">Margaux</option>
    <option value="Haut Medoc">Haut Medoc</option>
    <option value="Pauillac">Pauillac</option>
    <option value="Saint Estephe">Saint Estephe</option>
    <option value="Sauternes">Sauternes</option>
    <option value="Chateauneuf Du Pape">Chateauneuf Du Pape</option>
    <option value="Saint Julien">Saint Julien</option>
    <option value="Medoc">Medoc</option>
    <option value="Bordeaux">Bordeaux</option>
    <option value="Toscana">Toscana</option>
    <option value="Hermitage">Hermitage</option>
    <option value="Bordeaux Superieur">Bordeaux Superieur</option>
    <option value="Champagne">Champagne</option>
    <option value="Lalande De Pomerol">Lalande De Pomerol</option>
    <option value="Castillon Cotes De Bordeaux">Castillon Cotes De Bordeaux</option>
    <option value="Graves">Graves</option>
    <option value="Fronsac">Fronsac</option>
    <option value="Cote Rotie">Cote Rotie</option>
    <option value="Mendoza">Mendoza</option>
    <option value="Chambolle Musigny Premier Cru">Chambolle Musigny Premier Cru</option>
    <option value="Barolo">Barolo</option>
    <option value="Brunello Di Montalcino">Brunello Di Montalcino</option>
    <option value="Nuits Saint Georges Premier Cru">Nuits Saint Georges Premier Cru</option>
    <option value="Russian River Valley">Russian River Valley</option>
    <option value="Gevrey Chambertin Premier Cru">Gevrey Chambertin Premier Cru</option>
    <option value="Moulis En Medoc">Moulis En Medoc</option>
    <option value="Saint Emilion">Saint Emilion</option>
    <option value="Margaret River">Margaret River</option>
    <option value="Vosne Romanee Premier Cru">Vosne Romanee Premier Cru</option>
    <option value="Walla Walla Valley">Walla Walla Valley</option>
    <option value="Barsac">Barsac</option>
    <option value="Carneros">Carneros</option>
    <option value="Listrac Medoc">Listrac Medoc</option>
    <option value="Oakville">Oakville</option>
    <option value="Columbia Valley">Columbia Valley</option>
    <option value="Barossa Valley">Barossa Valley</option>
    <option value="Cornas">Cornas</option>
    <option value="Saint Joseph">Saint Joseph</option>
    <option value="Howell Mountain">Howell Mountain</option>
    <option value="Howell Mountain">Howell Mountain</option>
    <option value="Crozes Hermitage">Crozes Hermitage</option>
    <option value="Canon Fronsac">Canon Fronsac</option>
    <option value="Meursault Premier Cru">Meursault Premier Cru</option>
    <option value="Rutherford">Rutherford</option>
    <option value="Sonoma Coast">Sonoma Coast</option>
    <option value="Chambolle Musigny">Chambolle Musigny</option>
    <option value="Gevrey Chambertin">Gevrey Chambertin</option>
    <option value="Bonnes Mares Grand Cru">Bonnes Mares Grand Cru</option>
    <option value="Stags Leap District">Stags Leap District</option>
    <option value="Clos De Vougeot Grand Cru">Clos De Vougeot Grand Cru</option>
    <option value="Vosne Romanee">Vosne Romanee</option>
    <option value="Bolgheri">Bolgheri</option>
    <option value="Bordeaux Blanc">Bordeaux Blanc</option>
    <option value="Francs Cotes De Bordeaux">Francs Cotes De Bordeaux</option>
    <option value="Volnay Premier Cru">Volnay Premier Cru</option>
    <option value="Montagne Saint Emilion">Montagne Saint Emilion</option>
    <option value="Corton Charlemagne Grand Cru">Corton Charlemagne Grand Cru</option>
    <option value="Blaye Cotes De Bordeaux">Blaye Cotes De Bordeaux</option>
    <option value="Echezeaux Grand Cru">Echezeaux Grand Cru</option>
    <option value="Knights Valley">Knights Valley</option>
    <option value="Cotes Du Rhone">Cotes Du Rhone</option>
    <option value="Lujan De Cuyo">Lujan De Cuyo</option>
    <option value="Puisseguin Saint Emilion">Puisseguin Saint Emilion</option>
    <option value="Marlborough">Marlborough</option>
    <option value="Meursault">Meursault</option>
    <option value="Central Otago">Central Otago</option>
    <option value="Musigny Grand Cru">Musigny Grand Cru</option>
    <option value="St Helena">St Helena</option>
    <option value="Brunello Di Montalcino Riserva">Brunello Di Montalcino Riserva</option>
    <option value="Gigondas">Gigondas</option>
    <option value="Martinborough">Martinborough</option>
    <option value="Chambertin Grand Cru">Chambertin Grand Cru</option>
    <option value="Valle De Colchagua">Valle De Colchagua</option>
    <option value="Corton Grand Cru">Corton Grand Cru</option>
    <option value="Eden Valley">Eden Valley</option>
    <option value="Charmes Chambertin Grand Cru">Charmes Chambertin Grand Cru</option>
    <option value="Chambertin Clos De Beze Grand Cru">Chambertin Clos De Beze Grand Cru</option>
    <option value="Richebourg Grand Cru">Richebourg Grand Cru</option>
    <option value="Ribera Del Duero">Ribera Del Duero</option>
    <option value="Santa Cruz Mountains">Santa Cruz Mountains</option>
    <option value="Clos De La Roche Grand Cru">Clos De La Roche Grand Cru</option>
    <option value="Lussac Saint Emilion">Lussac Saint Emilion</option>
    <option value="Hawkes Bay">Hawkes Bay</option>
    <option value="Mclaren Vale">Mclaren Vale</option>
    <option value="Rioja">Rioja</option>
    <option value="Yakima Valley">Yakima Valley</option>
    <option value="Premieres Cotes De Bordeaux">Premieres Cotes De Bordeaux</option>
    <option value="Sicilia">Sicilia</option>
    <option value="South Australia">South Australia</option>
    <option value="Langhe">Langhe</option>
    <option value="Romanee Saint Vivant Grand Cru">Romanee Saint Vivant Grand Cru</option>
    <option value="Valle Del Aconcagua">Valle Del Aconcagua</option>
    <option value="Waipara">Waipara</option>
    <option value="Nuits Saint Georges">Nuits Saint Georges</option>
    <option value="Montrachet Grand Cru">Montrachet Grand Cru</option>
    <option value="Latricieres Chambertin Grand Cru">Latricieres Chambertin Grand Cru</option>
    <option value="Cotes De Bourg">Cotes De Bourg</option>
    <option value="Pommard Premier Cru">Pommard Premier Cru</option>
    <option value="Stellenbosch">Stellenbosch</option>
    <option value="Condrieu">Condrieu</option>
    <option value="Australian Wine">Australian Wine</option>
    <option value="California">California</option>
    <option value="Chapelle Chambertin Grand Cru">Chapelle Chambertin Grand Cru</option>
    <option value="Mazis Chambertin Grand Cru">Mazis Chambertin Grand Cru</option>
    <option value="La Consulta">La Consulta</option>
    <option value="Puligny Montrachet Premier Cru">Puligny Montrachet Premier Cru</option>
    <option value="Bolgheri Sassicaia">Bolgheri Sassicaia</option>
    <option value="Langhe Barbaresco">Langhe Barbaresco</option>
    <option value="Puente Alto">Puente Alto</option>
    <option value="Valle De Uco">Valle De Uco</option>
    <option value="Yarra Valley">Yarra Valley</option>
    <option value="Tupungato">Tupungato</option>
    <option value="Morey Saint Denis Premier Cru">Morey Saint Denis Premier Cru</option>
    <option value="Willamette Valley">Willamette Valley</option>
    <option value="Batard Montrachet Grand Cru">Batard Montrachet Grand Cru</option>
    <option value="Cadillac Cotes De Bordeaux">Cadillac Cotes De Bordeaux</option>
    <option value="Toro">Toro</option>
    <option value="Sainte-Foy-Bordeaux">Sainte-Foy-Bordeaux</option>
    <option value="Chevalier Montrachet Grand Cru">Chevalier Montrachet Grand Cru</option>
    <option value="Ruchottes Chambertin Grand Cru">Ruchottes Chambertin Grand Cru</option>
    <option value="Canterbury">Canterbury</option>
    <option value="Beaune Premier Cru">Beaune Premier Cru</option>
    <option value="Dundee Hills">Dundee Hills</option>
    <option value="Horse Heaven Hills">Horse Heaven Hills</option>
    <option value="Red Mountain">Red Mountain</option>
    <option value="Clos Saint Denis Grand Cru">Clos Saint Denis Grand Cru</option>
    <option value="La Romanee Grand Cru">La Romanee Grand Cru</option>
    <option value="Alexander Valley">Alexander Valley</option>
    <option value="Menfi">Menfi</option>
    <option value="Puligny Montrachet">Puligny Montrachet</option>
    <option value="Eola-Amity Hills">Eola-Amity Hills</option>
    <option value="Pommard">Pommard</option>
    <option value="Saint-Emilion">Saint-Emilion</option>
    <option value="Barbaresco">Barbaresco</option>
    <option value="Igp Saint Guilhem Le Desert">Igp Saint Guilhem Le Desert</option>
    <option value="Sonoma Mountain">Sonoma Mountain</option>
    <option value="Valle Del Maipo">Valle Del Maipo</option>
    <option value="Chianti Classico">Chianti Classico</option>
    <option value="Dry Creek Valley">Dry Creek Valley</option>
    <option value="Spring Mountain District">Spring Mountain District</option>
    <option value="Vougeot Premier Cru">Vougeot Premier Cru</option>
    <option value="Chianti Classico Gran Selezione">Chianti Classico Gran Selezione</option>
    <option value="Chianti Classico Riserva">Chianti Classico Riserva</option>
    <option value="Bourgogne Hautes Cotes De Nuits">Bourgogne Hautes Cotes De Nuits</option>
    <option value="Maremma Toscana">Maremma Toscana</option>
    <option value="Savigny Les Beaune Premier Cru">Savigny Les Beaune Premier Cru</option>
    <option value="La Tache Grand Cru">La Tache Grand Cru</option>
    <option value="Morey Saint Denis">Morey Saint Denis</option>
    <option value="Romanee Conti Grand Cru">Romanee Conti Grand Cru</option>
    <option value="Yountville">Yountville</option>
    <option value="Mount Veeder">Mount Veeder</option>
    <option value="Amarone Della Valpolicella Classico">Amarone Della Valpolicella Classico</option>
    <option value="Clare Valley">Clare Valley</option>
    <option value="Mercurey Premier Cru">Mercurey Premier Cru</option>
    <option value="Veronese">Veronese</option>
    <option value="Monthelie Premier Cru">Monthelie Premier Cru</option>
    <option value="Barolo Riserva">Barolo Riserva</option>
    <option value="Bienvenues Batard Montrachet Grand Cru">Bienvenues Batard Montrachet Grand Cru</option>
    <option value="Entre Deux Mers">Entre Deux Mers</option>
    <option value="Grands Echezeaux Grand Cru">Grands Echezeaux Grand Cru</option>
    <option value="Priorat">Priorat</option>
    <option value="Chalk Hill">Chalk Hill</option>
    <option value="Alta Valle della Greve">Alta Valle della Greve</option>
    <option value="Canberra District">Canberra District</option>
    <option value="Napa County">Napa County</option>
    <option value="Saint Georges Saint Emilion">Saint Georges Saint Emilion</option>
    <option value="Val d'Arno di Sopra">Val d'Arno di Sopra</option>
    <option value="Beechworth">Beechworth</option>
    <option value="Corton Pougets Grand Cru">Corton Pougets Grand Cru</option>
    <option value="Diamond Mountain District">Diamond Mountain District</option>
    <option value="Langhe Rosso">Langhe Rosso</option>
    <option value="Mercurey">Mercurey</option>
    <option value="Santa Lucia Highlands">Santa Lucia Highlands</option>
    <option value="Swartland">Swartland</option>
    <option value="Valle Del Cachapoal">Valle Del Cachapoal</option>
    <option value="Paarl">Paarl</option>
    <option value="Vista Flores">Vista Flores</option>
    <option value="Bolgheri Superiore">Bolgheri Superiore</option>
    <option value="Griottes Chambertin Grand Cru">Griottes Chambertin Grand Cru</option>
    <option value="Vougeot">Vougeot</option>
    <option value="Cotes De Bordeaux">Cotes De Bordeaux</option>
    <option value="Green Valley">Green Valley</option>
    <option value="Paso Robles">Paso Robles</option>
    <option value="Cerasuolo di Vittoria">Cerasuolo di Vittoria</option>
    <option value="Clos Des Lambrays Grand Cru">Clos Des Lambrays Grand Cru</option>
    <option value="Fleurie">Fleurie</option>
    <option value="Agrelo">Agrelo</option>
    <option value="Alsace">Alsace</option>
    <option value="IGT Percarlo">IGT Percarlo</option>
    <option value="Roccamonfina">Roccamonfina</option>
    <option value="Vacqueyras">Vacqueyras</option>
    <option value="Volnay">Volnay</option>
    <option value="Auxey Duresses">Auxey Duresses</option>
    <option value="Colli Della Toscana Centrale">Colli Della Toscana Centrale</option>
    <option value="Faugeres">Faugeres</option>
    <option value="Bourgogne Rouge">Bourgogne Rouge</option>
    <option value="Conca De Barbera">Conca De Barbera</option>
    <option value="Coombsville">Coombsville</option>
    <option value="Corton Les Greves Grand Cru">Corton Les Greves Grand Cru</option>
    <option value="Cote De Nuits Village">Cote De Nuits Village</option>
    <option value="Luberon">Luberon</option>
    <option value="Moulin A Vent">Moulin A Vent</option>
    <option value="Oak Knoll District">Oak Knoll District</option>
    <option value="Valle De Casablanca">Valle De Casablanca</option>
    <option value="Vin De France">Vin De France</option>
    <option value="Adelaide Hills">Adelaide Hills</option>
    <option value="Constantia">Constantia</option>
    <option value="Las Compuertas">Las Compuertas</option>
    <option value="Los Carneros">Los Carneros</option>
    <option value="Tavel">Tavel</option>
    <option value="Chablis Grand Cru">Chablis Grand Cru</option>
    <option value="Chablis Premier Cru">Chablis Premier Cru</option>
    <option value="Pouilly Fume">Pouilly Fume</option>
    <option value="Santa Ynez Valley">Santa Ynez Valley</option>
    <option value="Valle Del Rapel">Valle Del Rapel</option>
    <option value="Valpolicella">Valpolicella</option>
    <option value="Valpolicella Superiore">Valpolicella Superiore</option>
    <option value="Atlas Peak">Atlas Peak</option>
    <option value="Blagny Premier Cru">Blagny Premier Cru</option>
    <option value="Cafayate - Valle De Cafayate">Cafayate - Valle De Cafayate</option>
    <option value="Chassagne Montrachet Premier Cru">Chassagne Montrachet Premier Cru</option>
    <option value="Chateau Grillet">Chateau Grillet</option>
    <option value="Cote De Beaune">Cote De Beaune</option>
    <option value="Morgon">Morgon</option>
    <option value="Penedes">Penedes</option>
    <option value="Saint Peray">Saint Peray</option>
    <option value="Savigny Les Beaune">Savigny Les Beaune</option>
    <option value="Tumbarumba">Tumbarumba</option>
    <option value="Valle De Curico">Valle De Curico</option>
    <option value="Barbaresco Riserva">Barbaresco Riserva</option>
    <option value="Barrancas">Barrancas</option>
    <option value="Beaune les Greves">Beaune les Greves</option>
    <option value="Bordeaux Rose">Bordeaux Rose</option>
    <option value="Bourgogne Blanc">Bourgogne Blanc</option>
    <option value="Cadillac">Cadillac</option>
    <option value="Criots-Batard-Montrachet">Criots-Batard-Montrachet</option>
    <option value="Hilltops">Hilltops</option>
    <option value="Sonoma Valley">Sonoma Valley</option>
    <option value="Amador County">Amador County</option>
    <option value="Bot River">Bot River</option>
    <option value="Bourgogne Aligote">Bourgogne Aligote</option>
    <option value="Chablis">Chablis</option>
    <option value="Cote De Nuits Villages">Cote De Nuits Villages</option>
    <option value="Mazoyeres Chambertin Grand Cru">Mazoyeres Chambertin Grand Cru</option>
    <option value="San Rafael">San Rafael</option>
    <option value="Santenay Premier Cru">Santenay Premier Cru</option>
    <option value="Valdeorras">Valdeorras</option>
    <option value="Waiheke Island">Waiheke Island</option>
    <option value="Washington">Washington</option>
    <option value="Calistoga">Calistoga</option>
    <option value="Chapadmalal">Chapadmalal</option>
    <option value="Colli Toscana Centrale">Colli Toscana Centrale</option>
    <option value="Graves De Vayres">Graves De Vayres</option>
    <option value="Limestone Coast">Limestone Coast</option>
    <option value="Muscadet Sevre Et Maine">Muscadet Sevre Et Maine</option>
    <option value="Oregon">Oregon</option>
    <option value="Ribbon Ridge">Ribbon Ridge</option>
    <option value="Tasmania">Tasmania</option>
    <option value="Vino Nobile Di Montepulciano">Vino Nobile Di Montepulciano</option>
    <option value="Alsace Grand Cru">Alsace Grand Cru</option>
    <option value="Bekaa Valley">Bekaa Valley</option>
    <option value="Bennett Valley">Bennett Valley</option>
    <option value="Bourgogne">Bourgogne</option>
    <option value="Clos De Tart Grand Cru">Clos De Tart Grand Cru</option>
    <option value="Costieres De Nimes">Costieres De Nimes</option>
    <option value="Cote De Brouilly">Cote De Brouilly</option>
    <option value="Cotes Du Rhone Villages">Cotes Du Rhone Villages</option>
    <option value="Cotes de Provence">Cotes de Provence</option>
    <option value="Etna">Etna</option>
    <option value="Fixin">Fixin</option>
    <option value="IGP Atlantique">IGP Atlantique</option>
    <option value="Maipu">Maipu</option>
    <option value="Marsannay">Marsannay</option>
    <option value="Mendocino Ridge">Mendocino Ridge</option>
    <option value="Montlouis Sur Loire">Montlouis Sur Loire</option>
    <option value="Noto">Noto</option>
    <option value="Paraje Altamira">Paraje Altamira</option>
    <option value="Sta Rita Hills">Sta Rita Hills</option>
    <option value="Toscana Bianco IGT">Toscana Bianco IGT</option>
    <option value="Umbria">Umbria</option>
    <option value="Valle De Maule">Valle De Maule</option>
    <option value="Vino Nobile Di Montepulciano Riserva">Vino Nobile Di Montepulciano Riserva</option>
    <option value="Vittoria">Vittoria</option>
    <option value="Aloxe Corton">Aloxe Corton</option>
    <option value="Amarone Della Valpolicella">Amarone Della Valpolicella</option>
    <option value="Anderson Valley">Anderson Valley</option>
    <option value="Bandol">Bandol</option>
    <option value="Bannockburn">Bannockburn</option>
    <option value="Beaujolais">Beaujolais</option>
    <option value="Bonnezeaux">Bonnezeaux</option>
    <option value="Brouilly">Brouilly</option>
    <option value="Catalunya">Catalunya</option>
    <option value="Chianti Colli Senesi">Chianti Colli Senesi</option>
    <option value="Corton Bressandes Grand Cru">Corton Bressandes Grand Cru</option>
    <option value="Costers Del Segre">Costers Del Segre</option>
    <option value="Dalsheim">Dalsheim</option>
    <option value="Fixin Premier Cru">Fixin Premier Cru</option>
    <option value="Geographe">Geographe</option>
    <option value="Hattenheim">Hattenheim</option>
    <option value="Igp Cotes Catalanes">Igp Cotes Catalanes</option>
    <option value="Igp Mediterranee">Igp Mediterranee</option>
    <option value="Igp Pays D'Oc">Igp Pays D'Oc</option>
    <option value="Igp Val De Loire">Igp Val De Loire</option>
    <option value="Langhorne Creek">Langhorne Creek</option>
    <option value="Lirac">Lirac</option>
    <option value="Mendocino County">Mendocino County</option>
    <option value="Montagny">Montagny</option>
    <option value="Monterey">Monterey</option>
    <option value="Monticello">Monticello</option>
    <option value="Mornington Peninsula">Mornington Peninsula</option>
    <option value="Mount Harlan">Mount Harlan</option>
    <option value="North Coast">North Coast</option>
    <option value="Pernand Vergelesses">Pernand Vergelesses</option>
    <option value="Rasteau">Rasteau</option>
    <option value="Ribeira Sacra">Ribeira Sacra</option>
    <option value="Rueda">Rueda</option>
    <option value="San Luis Obispo County">San Luis Obispo County</option>
    <option value="Sant'Antimo">Sant'Antimo</option>
    <option value="Santa Maria Valley">Santa Maria Valley</option>
    <option value="Savennieres">Savennieres</option>
    <option value="Shangri La">Shangri La</option>
    <option value="Sierra Foothills">Sierra Foothills</option>
    <option value="Sierra Foothills">Sierra Foothills</option>
    <option value="Touraine">Touraine</option>
    <option value="Valle Central">Valle Central</option>
    <option value="Veneto">Veneto</option>