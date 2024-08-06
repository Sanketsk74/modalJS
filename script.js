'use strict';

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);


for (let i = 0 ; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click',function(){
        console.log('Button Clicked');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');

        modal.style.display = 'block';
    })
}

// btnCloseModal.addEventListener('click',function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
//     modal.style.display = 'none ';
// }) 

// here we create a closeModal function 

const closeModal = function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
        modal.style.display = 'none ';
    };

    // this will close the modal when we click on close button inside the modal
btnCloseModal.addEventListener('click',closeModal);

// this will close the modal when we click outside the modal

overlay.addEventListener('click',closeModal);
