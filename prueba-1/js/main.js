"use strict";

// Ejercicio 7.1
const catList =  document.querySelector(".js-list");

const cat1Data = {
    image: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
    name: 'Anastacio'.toUpperCase(),
    desc: 'Ruiseño, juguetón, le guta estar tumbado y que nadie le moleste. Es una maravilla acariciarle!',
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

// renderKitten(cat1Data);
// renderKitten(cat2Data);
// renderKitten(cat3Data);

// Ejercicio 8.1
const catDataList = [
  cat1Data,
  cat2Data,
  cat3Data,
];

// console.log(catDataList[2]);

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

//Ejercicio 4.4 + 6.1
const cancel = document.querySelector('.js-button-cancel');

const cancelNewCat = (event) => {
  event.preventDefault();
  const inputDesc = document.querySelector('.js-input-desc');
  const inputPhoto = document.querySelector('.js-input-photo');
  const inputName = document.querySelector('.js-input-name');

  inputDesc.value = '';
  inputPhoto.value = '';
  inputName.value = '';

  form.classList.add('collapsed');
};

cancel.addEventListener('click', cancelNewCat);

// Ejercicio 6.2 

const buttonSearch = document.querySelector('.js-button-buscar');
const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;

const filterKitten = (event) => {
  event.preventDefault();
  if (cat1Data.desc.includes(descrSearchText)) {
    catList.innerHTML += cat1Data;
  }
  if (cat2Data.desc.includes(descrSearchText)) {
    catList.innerHTML += cat2Data;
  }
  if (cat3Data.desc.includes(descrSearchText)) {
    catList.innerHTML += cat3Data;
  }

  console.log(cat1Data);
  console.log(cat2Data);
  console.log(cat3Data);
};


buttonSearch.addEventListener('click', filterKitten);

// Ejercicio 5.3 + 4.2

const anadir = document.querySelector(`.js-button`);
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMesageError = document.querySelector('.js-label-error');


anadir.addEventListener('click', addNewCat);

function addNewCat(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMesageError.innerHTML = "Debes rellenar todos los valores"
  } 
  else {
    labelMesageError.innerHTML = "Su gatito ha sido guardado"
  }
}

// Ejercicio 6.1