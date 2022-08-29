'use strict';
const imgs = document.querySelectorAll('.img-slider');
let cont = 0;
const interval = setInterval(() => {
    imgs[cont].classList.remove('img-slider-active');
    cont++;
    if (cont === imgs.length) {
        cont = 0;
    }
    imgs[cont].classList.add('img-slider-active');
} , 5000);





