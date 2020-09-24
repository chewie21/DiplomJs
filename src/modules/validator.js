`use strict`

//Вызывается в формах
export const validForm = (input) => {
    //Проверяем содержание плейсхолдера   
    if (input.placeholder === `Ваш номер телефона...`) {
        const checkPhone = () => {
            //Удаляем слушатели, чтобы не дублировать клики
            input.removeEventListener(`input`, checkPhone);
            //Регулярное выражение для номера
            const regNum = /(\+7|8)\d{10}/;
            if(regNum.test(input.value)) {
                console.log(`Phone - true`);
                input.style.border = `solid 2px green`;
                return true;
            } else {
                console.log(`Phone - false`);
                input.style.border = `solid 2px red`;
                input.focus();
                //Запускаем проверку на изменение
                input.addEventListener(`input`, checkPhone);
            }
        };
        return checkPhone();
    };
    //Проверяем содержание плейсхолдера    
    if (input.placeholder === `Ваше имя...`) {
        const checkName = () => {
            //Удаляем слушатели, чтобы не дублировать клики
            input.removeEventListener(`input`, checkName);
            if(input.value !== ``) {
                console.log(`Name - true`);
                input.style.border = `solid 2px green`;
                return true;
            } else {
                console.log(`name - false`);
                input.style.border = `solid 2px red`;
                input.focus();
                //Запускаем проверку на изменение
                input.addEventListener(`input`, checkName);
            }
        };
        return checkName();
    };
    //Проверяем тип для определения чекбокса
    if (input.type === `checkbox`) {
        if(input.checked) {
            console.log(`check`);
            return true;
        } else {
            console.log(`notcheck`);
        }   
    };
    if (input.type === `radio`) {
        if(input.checked) {
            console.log(`check`);
            return true;
        } else {
            console.log(`notcheck`);
        }   
    }     
};       

//Вызывается в корне для всех инпутов
export const validInput = () => {
    document.querySelectorAll(`input`).forEach((input) => {
        if(input.placeholder === `Ваш номер телефона...`) {
            input.addEventListener(`input`, () => {
                const regExp = /[^\d]/g;
                input.value = input.value.replace(regExp, '');
            });
        } else if (input.placeholder === `Ваше имя...`) {
            input.addEventListener(`input`, () => {
                const regExp = /[^А-Яа-я ]/g;
                input.value = input.value.replace(regExp, ``);
            })
        }
    });
};
