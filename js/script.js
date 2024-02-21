import timer from './modules/timer';
import tabs from './modules/tabs';
import slider from './modules/slider';
import modal, { openModal } from './modules/modal';
import forms from './modules/forms';
import cards from './modules/cards';
import calc from './modules/calc';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 30000)
    const deadline = '2024-05-11'

    timer('.timer', deadline);
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    modal('[data-modal]', '.modal', modalTimerId);
    forms('form', modalTimerId);
    cards();
    calc();
})

