`use strict`

import {validForm} from './validator';
import {sendData} from './sendForm';

const submitForm = (formClass, thisPopUpSelector) => {

    const form = document.querySelector(`${formClass}`),
        inputs = form.querySelectorAll(`input`),
        popUp = document.getElementById(`thanks`);

    let thisPopUp;

    const actionThisModal = (event) => {
        if(event.target.closest(`.overlay`) || event.target.closest(`.close_icon`) ||
        event.target.closest(`.close-btn`)) {
            thisPopUp.removeEventListener(`click`, actionThisModal);
            form.removeEventListener(`submit`, formSubmit);
            thisPopUp.style.display = 'none';
            thisPopUp.querySelector(`form`).reset();
            inputs.forEach(item => item.classList.remove(`invalid`));
        }
    };
    const actionModal = (event) => {
        if(event.target.closest(`.overlay`) || event.target.closest(`.close_icon`) ||
            event.target.closest(`.close-btn`)) {
            popUp.style.display = 'none';
            if(popUp.querySelector(`.errorMessage`)) popUp.querySelector(`.errorMessage`).remove();
            popUp.querySelector(`#successMessage`).style.display = `none`;
            popUp.removeEventListener(`click`, actionModal);
        }
    };
    const autoActionModal = () => {
        setTimeout(() => {
            popUp.style.display = 'none';
            if(popUp.querySelector(`.errorMessage`)) popUp.querySelector(`.errorMessage`).remove();
            popUp.querySelector(`#successMessage`).style.display = `none`;
            popUp.removeEventListener(`click`, actionModal);
        }, 5000);
    };
    const viePopUp = () => {
        if(thisPopUpSelector) {
            thisPopUp.style.display = `none`;
            thisPopUp.removeEventListener(`click`, actionThisModal);
            form.removeEventListener(`submit`, formSubmit);
        }
        popUp.style.display = 'block';
        outputMessage(`loading`);
    };
    const outputMessage = (param) => {
        const message = document.createElement(`h4`);
        if(param === `loading`) {
            message.classList.add(`loadingMessage`);
            message.style = `margin: auto;
                            color: #ffd11a;
                            background-color: #1e1c34;`;
            message.textContent = `Загрузка...`;
            popUp.querySelector(`.form-content`).prepend(message);
        } else if (param === `success`) {
            popUp.querySelector(`.loadingMessage`).remove();
            popUp.querySelector(`#successMessage`).style.display = `block`;
        } else if (param === `error`) {
            popUp.querySelector(`.loadingMessage`).remove();
            message.classList.add(`errorMessage`);
            message.style = `margin: auto;
                            color: #ffd11a;
                            background-color: #1e1c34;`;
            message.textContent = `Ошибка... Попробуйте еще раз`;
            popUp.querySelector(`.form-content`).prepend(message);
        }
    };

    if(thisPopUpSelector) {
        thisPopUp = document.querySelector(`${thisPopUpSelector}`);
        thisPopUp.style.display = `block`;
        thisPopUp.addEventListener(`click`, actionThisModal);
    };

    const formSubmit = (event) => {
        event.preventDefault();
        if(validForm(inputs)) {
            //Форматируем данные формы
            const fromData = new FormData(form);
            //Сбрасываем форму
            form.reset();
            //Создаем объект, который будет отправлять
            let body = {};
            fromData.forEach((item, index) => {
                body[index] = item;
            });
            //Показываем модалку с ответом
            viePopUp();
            popUp.addEventListener(`click`, actionModal);
            //Промис
            sendData(body, () => {
                outputMessage(`success`);
                autoActionModal();
            }, () => {
                outputMessage(`error`);
                autoActionModal();
            });
        };
    }

    form.addEventListener(`submit`, formSubmit);
};

export default submitForm;