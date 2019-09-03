document.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM fully loaded and parsed')
})
console.log('Script is loaded')

// enable the page to be clickable, with the only the Classed Buttons producing responses
document.getElementsByTagName('tbody')[0].addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target)
    if(e.target.classList.contains('added')) {
        console.log('Add is occurring')
        // Get the index they clicked on
        let i = e.target.id.slice(3)
        let wine = document.getElementById('wine' + i).value;
        let appellation = document.getElementById('appellation' + i).value;
        let regions = document.getElementById('regions' + i).value;
        let country = document.getElementById('country' + i).value;
        let vintage = document.getElementById('vintage' + i).value;
        let score = document.getElementById('score' + i).value;
        let tasted = document.getElementById('tasted' + i).value;
        let wishlist = document.getElementById('wishlist' + i).value;

        // This route we are calling (on the back end)
        // will add a row to the tasted table
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
            // Success, do DOM 
            e.target.value = 'true'
            e.target.className = 'btn btn-success'
            e.target.innerHTML = '✓ Added'
        })
        .catch(err => {
            console.log('An error -', err)
        })
    } 
    // DELETE from either Search page or Userlist Page
    else if(e.target.classList.contains('btn-success') || e.target.classList.contains('delete')) {
        console.log('Delete is occurring')
        let i = e.target.id.slice(3)
        let wine = document.getElementById('wine' + i).value;
        let vintage = document.getElementById('vintage' + i).value;

        fetch('/profile/userlist', {
            method: 'DELETE',
            body: JSON.stringify({
                wine: wine,
                vintage: vintage
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(resp => resp.json())
        .then(response => { 
            console.log('DELETE SUCCESS', response)
            // Success, do DOM
            e.target.value = 'false'
            e.target.className = 'added btn btn-danger'
            e.target.innerHTML = 'Deleted - Re-Add to Your List'
        })
        .catch(err => {
            console.log('An error -', err)
        })
    }
    // PUT to profile/userlist
    else if(e.target.classList.contains('tasted') || e.target.classList.contains('wishlist')) {
        console.log('Update is occurring')
        let i = e.target.id.slice(6)
        let wine = document.getElementById('wine' + i).value;
        let vintage = document.getElementById('vintage' + i).value;
        let tastedBtn = document.getElementById('tasBtn' + i);
        let wishlistBtn = document.getElementById('wisBtn' + i);

        // If the user is changing the taste status to Tasted:
        if(e.target.classList.contains('tasted')) {
            fetch('/profile/userlist', {
                method: 'PUT',
                body: JSON.stringify({
                    wine: wine,
                    vintage: vintage,
                    tasted: 'true',
                    wishlist: 'false'
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(resp => resp.json())
            .then(response => { 
                console.log('UPDATE SUCCESS', response)
                // this is success, do DOM manipulation
                    tastedBtn.className = 'tasted btn btn-warning'
                    tastedBtn.innerHTML = '🍷 Tasted'
                    wishlistBtn.className = 'wishlist btn-default'
                    wishlistBtn.innerHTML = 'Change to Wishlist'
            }) 
            .catch(err => {
                console.log('An error -', err)
            })
        }
        // If the user is changing the taste status to Wishlist:
        else if(e.target.classList.contains('wishlist')) {
            fetch('/profile/userlist', {
                method: 'PUT',
                body: JSON.stringify({
                    wine: wine,
                    vintage: vintage,
                    tasted: 'false',
                    wishlist: 'true'
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(resp => resp.json())
            .then(response => { 
                console.log('UPDATE SUCCESS', response)
                // this is success, do DOM manipulation
                wishlistBtn.className = 'wishlist btn btn-info'
                wishlistBtn.innerHTML = '🤞I wish!'
                tastedBtn.value = 'false'
                tastedBtn.className = 'tasted btn-default'
                tastedBtn.innerHTML = 'Change to Tasted'
            })
            .catch(err => {
            console.log('An error -', err)
            })
        }
    }
    else { return }
})

