document.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM fully loaded and parsed')
})
console.log('Script is loaded')


document.getElementsByTagName('tbody')[0].addEventListener('click', (e) => {
    e.preventDefault()
    console.dir(e.target)
    if(e.target.classList.contains('added')) {
        // Get the index they clicked on
        let i = e.target.id.slice(3)
        console.log('targetid: ',e.target.id, 'slicedid: ', i)
        let wine = document.getElementById('wine' + i).value;
        let appellation = document.getElementById('appellation' + i).value;
        let regions = document.getElementById('regions' + i).value;
        let country = document.getElementById('country' + i).value;
        let vintage = document.getElementById('vintage' + i).value;
        let score = document.getElementById('score' + i).value;
        let tasted = document.getElementById('tasted' + i).value;
        let wishlist = document.getElementById('wishlist' + i).value;

        
        console.log('Matched classes - now add ?')
        // This route we are calling (on the back end)
        // will add a row to the tasted table
        console.log(`wine: ${wine}, appellation: ${appellation}, regions: ${regions}, country: ${country}, vintage: ${vintage}, score: ${score}, tasted: ${tasted}, wishlist: ${wishlist}`)
        fetch('/profile/userlist', {
            method: 'POST',
            body: JSON.stringify({
                wine: wine,
                appellation: appellation,
                region: regions,
                country: country,
                vintage: vintage,
                score: score,
                tasted: tasted,
                wishlist: wishlist
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(resp => resp.json())
        .then(response => { 
            console.log('SUCCESS', response)
            
            // this is success, do DOM manipulation
            e.target.value = 'true'
            e.target.className = 'btn btn-success'
        console.log('Added success', e.target)
        })
        .catch(err => {
            console.log('An error -', err)
        })
    } 
    else if(e.target.classList.contains('btn-success')) {
        fetch('/profile/userlist', {
            method: 'DELETE',
				data: {
					id: e.target.id.slice(3)
				}
            })  
            .then(response => { 
                console.log('SUCCESS', response)
                
                // this is success, do DOM manipulation
                e.target.value = 'false'
                e.target.className = 'added btn'
            console.log('Delete success', e.target)
            })
            .catch(err => {
                console.log('An error -', err)
            })
    }
    else { return }
})
