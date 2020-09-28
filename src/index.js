`use strict`

import {validInput} from './modules/validator';
import chooseClub from './modules/chooseClub';
import gift from './modules/gift';
import submitForm from './modules/submitForm';
import calc from './modules/calc';
import headerSlide from './modules/headerSlide';
import servicesSlide from './modules/servicesSlide';
//Делаем валидными все инпуты
validInput();

//Кнопка "выбрать клуб"
chooseClub();

document.addEventListener(`click`, (event) => {
    let target = event.target;
    //console.log(target);
    //Бесплатный визит
    if(target.closest(`#visit-btn`)) submitForm(`#form2`, `#free_visit_form`);
    //Перезвонить
    if(target.closest(`#callback-header`)) submitForm(`#form1`,`#callback_form`);
    //Подарок
    if(target.closest(`.fixed-gift`)) gift();
    //ToTop
    if(target.closest(`#totop`)) {
        event.preventDefault();
        document.querySelector(`.header-main`)
        .scrollIntoView({behavior: "smooth", block: "start"});
    };
    //Ссылки меню
    if(target.closest(`.scrollMenu`)) {
        event.preventDefault();
        document.querySelector(`${target.hash}`).scrollIntoView({behavior: "smooth", block: "start"});
    }
    //Открытие и закрытие меню
    if(target.closest(`.close-menu-btn`) || target.closest(`.scrollMenu`)) document.querySelector(`.popup-menu`).style.display = `none`;
    if(target.closest(`#burger`)) document.querySelector(`.popup-menu`).style.display = `flex`;
});

//Кнопка прослистать
document.addEventListener('scroll', () => {
    if(pageYOffset >= 800) document.querySelector(`#totop`).style.display = `block`;
    if(pageYOffset < 800) document.querySelector(`#totop`).style.display = `none`;
});

//Меню
const scrollMenu = () => {
    if(pageYOffset >= 186) document.querySelector(`.top-menu`).classList.add(`fixed`);
    if(pageYOffset < 186) document.querySelector(`.top-menu`).classList.remove(`fixed`);
}
if(window.innerWidth <= 767) {
    window.addEventListener(`scroll`, scrollMenu);
};
window.addEventListener(`resize`, () => {
    window.removeEventListener(`scroll`, scrollMenu);
    if(window.innerWidth <= 767) {
        window.addEventListener(`scroll`, scrollMenu);
    } else {
        document.querySelector(`.top-menu`).classList.remove(`fixed`);
    }
});

//Банер
submitForm(`#banner-form`);
//Футер
submitForm(`#footer_form`);
//Выбор карты на дочерних страницах
if(document.querySelector(`.card_order_second`)) submitForm(`.card_order_second`);
//Калькулятор
if(document.querySelector(`.card_order`)) calc();

headerSlide(`.head-slider`);

headerSlide(`#gallery`);

const option = {
    main: `.services-wrapper`,
    wrap: `.services-slider`,
    next: `#arrow-right`,
    prev: `#arrow-left`
};
const thisSlider = new servicesSlide(option);
thisSlider.init();