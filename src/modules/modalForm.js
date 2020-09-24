`use strict`

import {validForm} from './validator';
import {sendData} from './sendForm';

const modalForm = (popUpSelector) => {
    const popUp = document.querySelector(`${popUpSelector}`),
        form = popUp.querySelector(`form`),
        inputs = form.querySelectorAll(`input`);
    
    //Закрытие модального окна
    const actionModal = (event) => {
        if(event.target.closest(`.overlay`) || event.target.closest(`.close_icon`)) {
            popUp.style.display = 'none';
            form.style.display = `block`;
            inputs.forEach((input) => {
                input.value = ``;
                input.style.border = `none`;
                input.checked = `false`;
            });
            if(popUp.querySelector(`.infoMessage`)) popUp.querySelector(`.infoMessage`).remove();
            popUp.removeEventListener(`click`, actionModal);
        }
    };
    //Отправка формы
    const sendForm = (event) => {
        event.preventDefault();
        //Если все поля заполненны
        if(validForm(inputs[1]) && validForm(inputs[2]) && validForm(inputs[3])) {
            infoMessage(`Идет отправка...`);
            const fromData = new FormData(form);
            let body = {};
            fromData.forEach((item, index) => {
                body[index] = item;
            });
            sendData(body, () => {infoMessage(`Отправленно`);}, 
                            () => {infoMessage(`Ошибка`);});
        }
    };
    //Вывод сообщения
    const infoMessage = (text) => {
        form.style.display = `none`;
        if(popUp.querySelector(`.infoMessage`)) popUp.querySelector(`.infoMessage`).remove();
        const message = document.createElement(`h4`);
        message.classList.add(`infoMessage`);
        message.style = `margin: auto;
                        color: #ffd11a;
                        background-color: #1e1c34;`
        message.textContent = text;
        popUp.querySelector(`.form-content`).append(message);
    };

    popUp.style.display = 'block';
    popUp.addEventListener('click', actionModal);
    form.addEventListener(`submit`, sendForm);
}

export default modalForm;