

export function fetchBreeds() {
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



 export   function fetchCatByBreed(breedId) {
        const REPLACE_ME = 'live_WG6vl9M9qjQ1gVgExJrrh8l7DGKY7sHJyyX4yw8ttqNDbCX0qBUyIr231rAeUOV8';
        const BASE_URL = `https://api.thecatapi.com/v1/images/search?breed_ids`;

        const url = `${BASE_URL}=${breedId}`;
    
        return fetch(url, {
            headers: {
                'x-api-key': REPLACE_ME
            }
        })
            .then(resp => {
                if (!resp.ok) {
                    throw new Error(resp.statusText)
                }
                return resp.json()
            })
    }



    
