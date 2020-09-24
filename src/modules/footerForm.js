`use strict`

import {validForm} from './validator';
import {sendData} from './sendForm';

const footerForm = () => {
    const form = document.querySelector(`#footer_form`),
        inputs = form.querySelectorAll(`input`);

    form.addEventListener(`submit`, (event) => {
        event.preventDefault();
        let check;
        for(let i = 0; i < inputs.length; i++) {
            console.log(inputs[i])
            check = validForm(inputs[i]);
            console.log(check);
        }
        const fromData = new FormData(form);
        let data = {};
        fromData.forEach((item, index) => {
            data[index] = item;
        });
        
    });
}

export default footerForm;