`use strict`

import {validInput} from './modules/validator';
import chooseClub from './modules/chooseClub';
import modalForm from './modules/modalForm';
import gift from './modules/gift';
import formVisit from './modules/fromVisit';
import footerForm from './modules/footerForm';
//Делаем валидными все инпуты
validInput();

//Кнопка "выбрать клуб"
chooseClub();

document.addEventListener(`click`, (event) => {
    console.log(`click`);
    let target = event.target;
    //Бесплатный визит
    if(target.closest(`#visit-btn`)) modalForm(`#free_visit_form`);
    //Перезвонить
    //if(target.closest(`.callback-btn`)) modalActions(`#callback_form`);
    //Подарок
    if(target.closest(`.fixed-gift`)) gift();
    //Totop
    if(target.closest(`#totop`)) {
        event.preventDefault();
        document.querySelector(`.header-main`)
        .scrollIntoView({behavior: "smooth", block: "start"});
    };
});

document.addEventListener('scroll', () => {
   if(pageYOffset >= 800) document.querySelector(`#totop`).style.display = `block`;
   if(pageYOffset < 800) document.querySelector(`#totop`).style.display = `none`;
});

formVisit();

footerForm();





