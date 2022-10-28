"use strict";

//Ejercicio 1.3
// const addForm = document.querySelector(".js-new-form");
// addForm.classList.remove("collapsed");

//Ejercicio 2.1 (+ 1.4)
const catList =  document.querySelector(".js-list");

const cat1Image = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const cat1Name = 'Anastacio'.toUpperCase();
const cat1Desc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const cat1Race = 'British Shorthair';

const cat2Image = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const cat2Name = 'Fiona'.toUpperCase();
const cat2Desc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const cat2Race = 'British Shorthair';

const cat3Image = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const cat3Name = 'Cielo'.toUpperCase();
const cat3Desc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const cat3Race = 'British Shorthair';


// catList.innerHTML = `<li> ${cat1Image} ${cat1Name} ${cat1Desc} ${cat1Race}</li>`;
// catList.innerHTML += `<li>${cat2Image} ${cat2Name}} ${cat2Desc} ${cat2Race}</li>`;
// catList.innerHTML += `<li>${cat3Image} ${cat3Name}} ${cat3Desc} ${cat3Race}</li>`;

// const cat1 = `<li class="card">
// <article>
//   <img
//     class="card_img"
//     src="${cat1Image}"
//     alt="gatito"
//   />
//   <h3 class="card_title">${cat1Name}</h3>
//   <h4 class="card_race">${cat1Race}</h4>
//   <p class="card_description">
//     ${cat1Desc}
//   </p>
// </article>
// </li>`;
// const cat2 = `<li class="card">
// <img
//   class="card_img"
//   src="${cat2Image}"
//   alt="gatito"
// />
// <h3 class="card_title">${cat2Name}</h3>
// <h4 class="card_race">${cat2Race}</h4>
// <p class="card_description">
//   ${cat2Desc}
// </p>
// </li>`;
// const cat3 = `<li class="card">
// <img
//   class="card_img"
//   src="${cat3Image}"
// />
// <h3 class="card_title">${cat3Name}</h3>
// <h4 class="card_race">${cat3Race}</h4>
// <p class="card_description">
//   ${cat3Desc}
// </p>
// </li>`;

// //Ejercicio 3.1

// const input_search_desc = document.querySelector('.js_in_search_desc');
//  input_search_desc.value = 'tranquilo';
// const descrSearchText = input_search_desc.value;
// const cardDesc = document.querySelector('.card');

// if(cat1Desc.includes(descrSearchText)) {
//   cardDesc.classList.remove("collapsed");
// } else {
//   cardDesc.classList.add("collapsed");
// };

  
//  if(cat2Desc.includes(descrSearchText)) {
//   cardDesc.classList.remove("collapsed");
// } else {
// cardDesc.classList.add("collapsed");
// };
  
// if(cat3Desc.includes(descrSearchText)) {
//  cardDesc.classList.remove("collapsed");
// } else {
// cardDesc.classList.add("collapsed");
// };


//Ejercicio 3.2 + 4.1 + 5.1

const formButton = document.querySelector('.fa-plus-circle');
// console.log(form);
//  formButton.addEventListener('click', (event)=> {
// event.preventDefault();
// if (form.classList.contains('collapsed')) {
// form.classList.remove('collapsed');
//  } else {
// form.classList.add('collapsed');
//  }
// });

const form = document.querySelector('.new-form');
// console.log(form);

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
//Fin Ejercicio 3.2 + 4.1 + 5.1

//Ejercicio 4.2
const anadir = document.querySelector(`.js-button`);

anadir.addEventListener('click', (event) => {
  const inputDesc = document.querySelector('.js-input-desc');
  const inputPhoto = document.querySelector('.js-input-photo');
  const inputName = document.querySelector('.js-input-name');
  const labelMesageError = document.querySelector('.js-label-error');

  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMesageError.innerHTML = "Debes rellenar todos los valores"
  } 
});
//Fin Ejercicio 4.2 

//Ejercicio 4.3
const busca = document.querySelector('.js-button-buscar');

busca.addEventListener('click', (event) =>{
  const raza = document.querySelector('.js-raza');
  const labelMesageError2 = document.querySelector('.js-label-buscar');
  const input_search_desc = document.querySelector('.js_in_search_desc');

  const valueRaza =  raza.value;
  const descrSearchText = input_search_desc.value;

  if (descrSearchText === '' || valueRaza === ''){
    labelMesageError2.innerHTML = "Debes rellenar todos los valores"
  }
});
//Fin Ejercicio 4.3 

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
//Fin Ejercicio 4.4 

//Ejercicio 5.2 (REPASAR)
function renderKitten(url, desc, name, race) {
  const result = `<li class="card">
  <article>
    <img
      class="card_img"
      src="${url}"
      alt="gatito"
    />
    <h3 class="card_title">${name}</h3>
    <h4 class="card_race">${race}</h4>
    <p class="card_description">
      ${desc}
    </p>
  </article>
  </li>`;
   return result;
}

const cat1 = renderKitten(`${cat1Image}`, `${cat1Desc}`, `${cat1Name}`, `${cat1Race}`);
const cat2 = renderKitten(`${cat2Image}`, `${cat2Desc}`, `${cat2Name}`, `${cat2Race}`);
const cat3 = renderKitten(`${cat3Image}`, `${cat3Desc}`, `${cat3Name}`, `${cat3Race}`);

catList.innerHTML = cat1 + cat2 + cat3;
//Fin Ejercicio 5.2

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


//Ejercicio 6.2
//Fin Ejercicio 6.2 (POR TERMINAR)

//Ejercicio 6.3
//Fin Ejercicio 6.3

//Ejercicio 6.4 (BONUS)
//Fin Ejercicio 6.4 (BONUS)

//Ejercicio 3.3: Por hacer, BONUS
