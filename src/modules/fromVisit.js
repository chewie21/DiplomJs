`use strict`

import {validForm} from './validator';
import {sendData} from './sendForm';

const formVisit = () => {
    const form = document.querySelector(`#banner-form`),
        inputs = form.querySelectorAll(`input`),
        popUp = document.querySelector(`#thanks`);

    form.addEventListener(`submit`, (event) => {
        event.preventDefault();
        if(validForm(inputs[1]) && validForm(inputs[2]) && validForm(inputs[3])) {
            const fromData = new FormData(form);
            let body = {};
            fromData.forEach((item, index) => {
                body[index] = item;
            });
            sendData(body, () => {
                popUp.style.display = 'block';
                popUp.addEventListener(`click`, actionModal);
            }, () => {
                popUp.style.display = 'block';
                popUp.addEventListener(`click`, actionModal);
                infoMessage(`Ошибка`)});
        }
    });
    const infoMessage = (text) => {
        if(popUp.querySelector(`.infoMessage`)) popUp.querySelector(`.infoMessage`).remove();
        const message = document.createElement(`h4`);
        message.classList.add(`infoMessage`);
        message.style = `margin: auto;
                        color: #ffd11a;
                        background-color: #1e1c34;`
        message.textContent = text;
        popUp.querySelector(`#successThanks`).style.display = `none`;
        popUp.querySelector(`.form-content`).prepend(message);
    };
    const actionModal = (event) => {
        if(event.target.closest(`.overlay`) || event.target.closest(`.close_icon`) || event.target.closest(`.close-btn`)) {
            popUp.style.display = 'none';
            inputs.forEach((input) => {
                input.value = ``;
                input.style.border = `none`;
                input.checked = `false`;
            });
            if(popUp.querySelector(`.infoMessage`)) popUp.querySelector(`.infoMessage`).remove();
            popUp.querySelector(`#successThanks`).style.display = `block`;
            popUp.removeEventListener(`click`, actionModal);
        }
    };
};

export default formVisit;