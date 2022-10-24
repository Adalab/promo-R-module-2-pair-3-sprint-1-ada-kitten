"use strict";

// const addForm = document.querySelector(".js-new-form");

// addForm.classList.remove("collapsed");

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
console.log(form);

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

const cat1 = renderKitten(`${cat1Image}, ${cat1Desc}, ${cat1Name}, ${cat1Race}`);
const cat2 = renderKitten(`${cat2Image}, ${cat2Desc}, ${cat2Name}, ${cat2Race}`);
const cat3 = renderKitten(`${cat3Image}, ${cat3Desc}, ${cat3Name}, ${cat3Race}`);

catList.innerHTML = cat1 + cat2 + cat3;


const input_search_desc = document.querySelector('.js_in_search_desc');
input_search_desc.value = 'tranquilo';
const descrSearchText = input_search_desc.value;
const cardDesc = document.querySelector('.card');

if(cat1Desc.includes(descrSearchText)) {
  cardDesc.classList.remove("collapsed");
} else {
  cardDesc.classList.add("collapsed");
};

  
 if(cat2Desc.includes(descrSearchText)) {
  cardDesc.classList.remove("collapsed");
} else {
cardDesc.classList.add("collapsed");
};
  
if(cat3Desc.includes(descrSearchText)) {
 cardDesc.classList.remove("collapsed");
} else {
cardDesc.classList.add("collapsed");
};