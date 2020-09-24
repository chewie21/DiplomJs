`use strict`

import {validInput} from './modules/validator';
import chooseClub from './modules/chooseClub';
import gift from './modules/gift';
import submitForm from './modules/submitForm';

//Делаем валидными все инпуты
validInput();

//Кнопка "выбрать клуб"
chooseClub();

document.addEventListener(`click`, (event) => {
    console.log(`click`);
    let target = event.target;
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
});

document.addEventListener('scroll', () => {
   if(pageYOffset >= 800) document.querySelector(`#totop`).style.display = `block`;
   if(pageYOffset < 800) document.querySelector(`#totop`).style.display = `none`;
});

//Банер
submitForm(`#banner-form`);

//Футер
submitForm(`#footer_form`);

//Выбор карты на дочерних страницах
submitForm(`#card_order`);





