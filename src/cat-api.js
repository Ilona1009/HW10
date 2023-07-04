// import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = 'live_WG6vl9M9qjQ1gVgExJrrh8l7DGKY7sHJyyX4yw8ttqNDbCX0qBUyIr231rAeUOV8';

const refs = {
    select: document.querySelector('breed_selector'),
    infoCat: document.querySelector('.cat-info'),
    imgCat: document.querySelector('breed_image'),
}

function fetchBreeds() {
    const REPLACE_ME = 'live_WG6vl9M9qjQ1gVgExJrrh8l7DGKY7sHJyyX4yw8ttqNDbCX0qBUyIr231rAeUOV8';
    const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
    let storedBreeds = [];
    
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



fetchBreeds().then (cat => {
    storedBreeds = cat;


    for (let i = 0; i < storedBreeds.length; i++) {
        const breed = storedBreeds[i];
                            // console.log(breed)
        let option = document.createElement('option')

        if(!breed.image)continue
    
        option.value = i;
        option.innerHTML = `${breed.name}`;
        document.getElementById('breed_selector').appendChild(option);
    }
    
})
    .catch(err => console.log(err))


function showBreedImage() {
    const REPLACE_ME = 'live_WG6vl9M9qjQ1gVgExJrrh8l7DGKY7sHJyyX4yw8ttqNDbCX0qBUyIr231rAeUOV8';
    const BASE_URL = 'https://api.thecatapi.com/v1/images/search?breed_ids={breed.id}';
    let storedBreeds = [];
    
    return fetch(BASE_URL, {
        headers: {
            'x-api-key': REPLACE_ME
        }
    })
}

showBreedImage().then(cat => {
        storedBreeds = cat;
            refs.imgCat =  document.getElementById("breed_image").src = storedBreeds[index].image.url;


}

)

