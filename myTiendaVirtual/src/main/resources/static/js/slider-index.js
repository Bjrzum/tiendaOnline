'use strict';
const imgs = document.querySelectorAll('.img-slider');
let ind = document.querySelector('.ind-slider-circle');
let cont = 0;
const interval = setInterval(() => {
    imgs[cont].classList.remove('img-slider-active');
    cont++;
    if (cont === imgs.length) {
        cont = 0;
    }
    imgs[cont].classList.add('img-slider-active');
    ind.classList.add('ind-slider-circle-active');

    setTimeout(() => {
        ind.classList.remove('ind-slider-circle-active');
    } , 2500);
} , 5000);