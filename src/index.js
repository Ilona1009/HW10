import {fetchBreeds, fetchCatByBreed} from "./cat-api.js";
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';


const refs = {
    select: document.querySelector('.breed-select'),
    infoCat: document.querySelector('.cat-info'),
    imgCat: document.querySelector('breed_image'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),

}

// refs.loader.hidden = false;
// refs.error.hidden = true;
refs.infoCat.setAttribute('hidden', '')


            let storedBreeds = [];

fetchBreeds().then(results => {
  // refs.loader.hidden = true;
  refs.select.removeAttribute('hidden');

refs.select.insertAdjacentHTML('beforeend', createMarkUpSelect(results))  
new SlimSelect({
    select: '.breed-select',
  });
})
  .catch(err => {
      refs.select.setAttribute('hidden', '');
      // refs.error.hidden = false;
    Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page');
      console.log(err)
    })

    function createMarkUpSelect(arr) {
  return arr.map(el => {
    return `<option value = "${el.id}">${el.name}</option>`;
  }).join();
};


refs.select.addEventListener('change', handlerSelect);

function handlerSelect(e) {
  refs.infoCat.setAttribute('hidden', '');
  const catBreed = e.target.value;
  // refs.loader.hidden = false;
      Notiflix.Notify.info('Loading data, please wait..');
  refs.select.setAttribute('hidden', '');

    fetchCatByBreed(catBreed).then(cat => {
      refs.select.removeAttribute('hidden');
      createMarkUp(cat);
      // refs.loader.hidden = true;
      refs.infoCat.removeAttribute('hidden')
      refs.infoCat.innerHTML = createMarkUp(cat);
    })
      .catch(err => {
        refs.select.setAttribute('hidden', '');
        // refs.error.hidden = false;
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page');

        console.log(err)
      })
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

