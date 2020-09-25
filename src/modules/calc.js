import submitForm from "./submitForm";

`use strict`
const calc = () => {

    const calc = document.getElementById(`cards`), 
        textPrice = calc.querySelector(`#price-total`),
        promoCode = calc.querySelector(`#promoCode`),
        form = calc.querySelector(`.card_order`);

    let lastTextPrice;

    const price = {
        mozaika: {
            '1': 1999,
            '6': 9900,
            '9': 13900,
            '12': 19900
        },
        schelkovo: {
            '1': 2999,
            '6': 14990,
            '9': 21990,
            '12': 24990
        }
    };

    const promo = {
        'ТЕЛО2020': 0.3,
        'ПРИМЕР': 0.5,
    }

    const club = {
        'mozaika': false,
        'schelkovo': false
    }

    const time = {
        '1': false,
        '6': false,
        '9': false,
        '12': false
    };

    const newInput = document.createElement(`input`);
    newInput.type = `hidden`;
    newInput.name = `price`;
    form.append(newInput);

    const getPrice = () => {
        let thisClub;
        let thisTime;
        for(let key in club) {
            if(club[key] === true) {
                thisClub = key;
            }
        }
        for(let key in time) {
            if(time[key] === true) {
                thisTime = key;
            }
        }
        textPrice.textContent = price[thisClub][thisTime];
        lastTextPrice = price[thisClub][thisTime];
        newInput.value = lastTextPrice;
    }

    //Ставим дефолтные значения со страницы
    const getDefaultValue = () => {
        const clubInputs = calc.querySelectorAll(`input[name="club-name"]`),
            timeInputs = calc.querySelectorAll(`input[name="card-type"]`);
        clubInputs.forEach((input) => {
            if(input.checked) club[input.defaultValue] = true;
            if(!input.checked) club[input.defaultValue] = false;
        });
        timeInputs.forEach((input) => {
            if(input.checked) time[input.defaultValue] = true;
            if(!input.checked) time[input.defaultValue] = false;
        });
        console.log(club);
        console.log(time)
        getPrice();
    };
    getDefaultValue();
    

    const getInputValue = (event) => {
        let target = event.target;
        if(target.closest(`input`)) {
            if(target.name === `card-type`) {
                for(let key in time) {
                    if(key === target.defaultValue) time[key] = true;
                    if(key !== target.defaultValue) time[key] = false;
                }
            } else if (target.name === `club-name`) {
                for(let key in club) {
                    if(key === target.defaultValue) club[key] = true;
                    if(key !== target.defaultValue) club[key] = false;
                }
            }
        }
        getPrice();
        totalPrice();
    };

    const totalPrice = () => {
        const thisTextPrice = textPrice.textContent;
        let totalPrice;
        for(let key in promo) {
            if(key === promoCode.value) {
                totalPrice = thisTextPrice - thisTextPrice * promo[key];
                textPrice.textContent = Math.floor(totalPrice);
                return;
            } else {
                totalPrice = lastTextPrice;
            }
        }
        textPrice.textContent = totalPrice;
    }

    promoCode.addEventListener(`input`, totalPrice);
    calc.addEventListener(`click`, getInputValue);
    
    submitForm(`#card_order`);

    form.addEventListener(`reset`, () => {
        setTimeout(() => getDefaultValue(), 1000);
    });
};

export default calc;