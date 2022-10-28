"use strict";

// Ejercicio 7.1
const catList =  document.querySelector(".js-list");


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

  return result;
}

// renderKitten(cat1Data);
// renderKitten(cat2Data);
// renderKitten(cat3Data);

// Ejercicio 8.1
const catDataList = [
{
    image: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
    name: 'Anastacio'.toUpperCase(),
    desc: 'Ruiseño, juguetón, le guta estar tumbado y que nadie le moleste. Es una maravilla acariciarle!',
    race: 'British Shorthair',
  },
  {
    image: 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg',
    name: 'Fiona'.toUpperCase(),
    desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
    race: 'British Shorthair',
  },
  {
  image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg',
  name: 'Cielo'.toUpperCase(),
  desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
}
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

//Ejercicio 9.1 
function renderCatList(catDataList) {
let result = "";
  for (const catItem of catDataList) {
   result += renderKitten(catItem);
  }
  catList.innerHTML = result;
  console.log(result);
}

renderCatList(catDataList);

//Ejercicio 9.2
const buttonSearch = document.querySelector('.js-button-buscar');
const input_search_desc = document.querySelector('.js_in_search_desc');

function filterKitten(event) {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  catList.innerHTML = '';
  for (const catItem of catDataList) {

    if (catItem.desc.includes(descrSearchText)) {
    catList.innerHTML += renderKitten(catItem);
  }
  }


}

buttonSearch.addEventListener('click', filterKitten);

