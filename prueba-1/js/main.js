"use strict";

const catList =  document.querySelector(".js-list");

 const cat1Data = {
    image: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
    name: 'Anastacio'.toUpperCase(),
    desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
    race: 'British Shorthair',
  };
const cat2Data = {
  image: 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg',
  name: 'Fiona'.toUpperCase(),
  desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
};

const cat3Data = {
  image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg',
  name: 'Cielo'.toUpperCase(),
  desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
};

function renderKitten(catData) {
  const result = `<li class="card">
  <article>
    <img
      class="card_img"
      src="${catData.image}"
      alt="gatito"
    />
    <h3 class="card_title">${catData.name}</h3>
    <h4 class="card_race">${catData.race}</h4>
    <p class="card_description">
      ${catData.desc}
    </p>
  </article>
  </li>`;
  catList.innerHTML += result;
}

renderKitten(cat1Data);
renderKitten(cat2Data);
renderKitten(cat3Data);

//Ejercicio 5.1
const form = document.querySelector('.new-form');
const formButton = document.querySelector('.fa-plus-circle');

function showNewCatForm() {
form.classList.remove('collapsed');
}
function hideNewCatForm() {
form.classList.add('collapsed');
}

function handleClickNewCatForm(ev) {
  ev.preventDefault();
  if (form.classList.contains('collapsed')) {
    showNewCatForm();
} else {
  hideNewCatForm();
 }};

 formButton.addEventListener("click", handleClickNewCatForm);

//Ejercicio 4.2
const anadir = document.querySelector(`.js-button`);
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMesageError = document.querySelector('.js-label-error');

anadir.addEventListener('click', (event) => {
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMesageError.innerHTML = "Debes rellenar todos los valores"
  } 
});

//Ejercicio 4.4 
const cancel = document.querySelector('.js-button-cancel');

cancel.addEventListener('click', (event) => {
  event.preventDefault();
  const inputDesc = document.querySelector('.js-input-desc');
  const inputPhoto = document.querySelector('.js-input-photo');
  const inputName = document.querySelector('.js-input-name');

  inputDesc.value = '';
  inputPhoto.value = '';
  inputName.value = '';

  form.classList.add('collapsed');
})

