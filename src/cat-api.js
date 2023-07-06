// import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = 'live_WG6vl9M9qjQ1gVgExJrrh8l7DGKY7sHJyyX4yw8ttqNDbCX0qBUyIr231rAeUOV8';

const refs = {
    select: document.querySelector('.breed-select'),
    infoCat: document.querySelector('.cat-info'),
    imgCat: document.querySelector('breed_image'),
}

            let storedBreeds = [];


function fetchBreeds() {
    const REPLACE_ME = 'live_WG6vl9M9qjQ1gVgExJrrh8l7DGKY7sHJyyX4yw8ttqNDbCX0qBUyIr231rAeUOV8';
    const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
    
    return fetch(BASE_URL, {headers: {
        'x-api-key': REPLACE_ME
    }})
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        })
}

let cat = "";

fetchBreeds().then (cat => {
    storedBreeds = cat;

    for (let i = 0; i < storedBreeds.length; i++) {
        const breed = storedBreeds[i];
        cat = `${breed.id}`;
                            // console.log(cat)
        let option = document.createElement('option')
     
        option.value = cat;
        option.innerHTML = `${breed.name}`;
        document.getElementById('breed_selector').appendChild(option);
    }  
})
    .catch(err => console.log(err))

refs.select.addEventListener('change', handlerSelect);
function handlerSelect(e) {
    const catBreed = e.target.value;
    console.log(catBreed);

    function fetchCatByBreed(cat) {
    const REPLACE_ME = 'live_WG6vl9M9qjQ1gVgExJrrh8l7DGKY7sHJyyX4yw8ttqNDbCX0qBUyIr231rAeUOV8';
    const BASE_URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${cat}`;
    
    return fetch(BASE_URL, {headers: {
        'x-api-key': REPLACE_ME
    }})
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        })
}

fetchCatByBreed('beng').then(cat => {

    storedBreeds = cat;
})



        // console.log(storedBreeds)

    // for (let i = 0; i < storedBreeds.length; i++) {
    //     const breed = storedBreeds[i];
    //     let breed_ids = `${breed.id}`;
    //                         // console.log(breed_ids)
    //     let option = document.createElement('option')
        
    //     if(!breed.image)continue  
    //     option.value = i;
    //     option.innerHTML = `${breed.name}`;
    //     document.getElementById('breed_selector').appendChild(option);
    // }  

