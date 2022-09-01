'use strict';
let point = document.querySelector('.point');
let menu = document.querySelector('.nav-icon-content');
const lineMenu = document.querySelectorAll('.bi-dash-lg');
const linksMenu = document.querySelectorAll('.link-menu');
const txtMenu = document.querySelectorAll('.link-menu-text');
var colorYellow = '#ff0';
var colorBlue = '#0080FF';
var colorGreen = '#00FF80';

let ind_p = 0;
menu.addEventListener('click', () => {
    if (ind_p === 0) {
        for (let j = 0; j < linksMenu.length; j++) {
            txtMenu[j].classList.add('link-menu-text-active');
        }
        lineMenu[0].classList.add('line-1-active');
        lineMenu[1].classList.add('line-2-active');
        point.style.backgroundColor = colorGreen;
        ind_p = 1;
    } else {
        for (let j = 0; j < linksMenu.length; j++) {
            txtMenu[j].classList.remove('link-menu-text-active');
        }
        lineMenu[0].classList.remove('line-1-active');
        lineMenu[1].classList.remove('line-2-active');
        point.style.backgroundColor = colorBlue;
        ind_p = 0;
    } 
});
menu.addEventListener('mouseover', () => {
    if (ind_p == 0) {
        point.style.backgroundColor = colorYellow;
    }
});
menu.addEventListener('mouseout', () => {
    if (ind_p == 0) {
        point.style.backgroundColor = colorBlue;
    }
});
for (let i = 0; i < linksMenu.length; i++) {
    linksMenu[i].addEventListener('mouseover', () => {
        if (ind_p == 0) {
            point.style.backgroundColor = colorYellow;
        }
    } );
    linksMenu[i].addEventListener('mouseout', () => {
        if (ind_p == 0) {
            point.style.backgroundColor = colorBlue;
        }
    });
}


