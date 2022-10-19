'use strict';

const addForm = document.querySelector('.js-new-form');

addForm.classList.remove('collapsed');

const catList =  document.querySelector('.js-list');


const cat1Image = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const cat1Name = 'Anastacio'.toUpperCase();
const cat1Desc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const cat1Race = 'British Shorthair';



const cat2Image = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const cat2Name = 'Fiona'.toUpperCase();
const cat2Desc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const cat2Race = 'British Shorthair';

const cat3Image = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const cat3Name = 'Cielo';
const cat3Desc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const cat3Race = 'British Shorthair';


catList.innerHTML = `<li>${cat1Image} ${cat1Name} ${cat1Desc} ${cat1Race}</li>`;



catList.innerHTML += `<li>${cat2Image} ${cat2Name}} ${cat2Desc} ${cat2Race}</li>`;

catList.innerHTML += `<li>${cat3Image} ${cat3Name}} ${cat3Desc} ${cat3Race}</li>`;
