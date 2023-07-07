import {fetchBreeds, fetchCatByBreed} from "./cat-api.js";
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const refs = {
    select: document.querySelector('.breed-select'),
    infoCat: document.querySelector('.cat-info'),
    imgCat: document.querySelector('breed_image'),
}

            let storedBreeds = [];

fetchBreeds().then (results => {
refs.select.insertAdjacentHTML('beforeend', createMarkUpSelect(results))  
new SlimSelect({
    select: '.breed-select',
  });
})
    .catch(err => console.log(err))

    function createMarkUpSelect(arr) {
  return arr.map(el => {
    return `<option value = "${el.id}">${el.name}</option>`;
  }).join();
};


refs.select.addEventListener('change', handlerSelect);
function handlerSelect(e) {
    const catBreed = e.target.value;
    console.log(catBreed);

    fetchCatByBreed(catBreed).then(cat => {
        // createMarkUp(cat)
        console.log(cat)
        refs.infoCat.innerHTML = createMarkUp(cat);
    })
        .catch(err => console.log(err))
}


function createMarkUp(array) {
    return array.map(({ url, breeds}) => {
    const { name, description, temperament } = breeds[0];
    return `
    <img class="cat-img" src="${url}" alt="${name}" width = "300">
    <div class="cat-descr"
      <h2>${name}</h2>
      <p><span class="bold">Description:</span> ${description}</p>
      <p><span class="bold">Temperament:</span> ${temperament}</p>
    </div>
    `;
  })
};

