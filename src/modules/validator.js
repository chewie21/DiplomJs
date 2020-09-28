`use strict`

//Вызывается в формах
export const validForm = (arr) => {
    //Создаем объек для записей
    let inputObj = {};
    //Перебераем переданные инпуты
    arr.forEach((input, index) => {
        //Если задан плейсхолдер
        if(input.placeholder) {
            //Проверяем содержание плейсхолдера   
            if (input.placeholder === `Ваш номер телефона...`) {
                const checkPhone = () => {
                    //Удаляем слушатели, чтобы не дублировать клики
                    input.removeEventListener(`input`, checkPhone);
                    //Регулярное выражение для номера
                    const regNum = /8\d{10}/;
                    if(regNum.test(input.value)) {
                        input.classList.remove(`invalid`);
                        inputObj[index] = true;
                    } else {
                        input.classList.add(`invalid`);
                        //Запускаем проверку на изменение
                        input.addEventListener(`input`, checkPhone);
                        inputObj[index] = false;
                    }
                };
                checkPhone();
            };
            //Проверяем содержание плейсхолдера    
            if (input.placeholder === `Ваше имя...`) {
                const checkName = () => {
                    //Удаляем слушатели, чтобы не дублировать клики
                    input.removeEventListener(`input`, checkName);
                    if(input.value !== ``) {
                        input.classList.remove(`invalid`);
                        inputObj[index] = true;
                    } else {
                        input.classList.add(`invalid`);
                        //Запускаем проверку на изменение
                        input.addEventListener(`input`, checkName);
                        inputObj[index] = true;
                    }
                };
                checkName();
            };
        } else if(input.type) {
            //Проверяем тип для определения чекбокса
            if (input.type === `checkbox`) {
                if(input.checked) {
                    inputObj[index] = true;
                } else {
                    inputObj[index] = false;
                    const newAnimation = () => {
                        let counter = 0;
                        function animation () {
                            if(counter > -8) {
                                counter --;
                                document.querySelector(`label[for=${input.id}]`).style.top = counter + 'px'
                                requestAnimationFrame(animation);
                            } else if (counter === -8) {
                                document.querySelector(`label[for=${input.id}]`).style.top = '0px'
                            }
                        }
                        animation();
                    }
                    newAnimation();
                }   
            };
            //Проверяем тип для радио кнопок
            if (input.type === `radio`) {
                if(inputObj[`radio`] !== true) {
                    if(input.checked) {
                        inputObj[`radio`] = true;
                    } else {
                        inputObj[`radio`] = false;
                        const newAnimation = () => {
                            let counter = 0;
                            function animation () {
                                if(counter > -8) {
                                    counter --;
                                    document.querySelector(`label[for=${input.id}]`).style.top = counter + 'px'
                                    requestAnimationFrame(animation);
                                } else if (counter === -8) {
                                    document.querySelector(`label[for=${input.id}]`).style.top = '0px'
                                }
                            }
                            animation();
                        }
                        newAnimation();
                    } 
                } 
            }
        }
    });
    //Объект в массив
    let inputArr = Object.values(inputObj);
    //Ищем записи false
    if(inputArr.includes(false)) {
        return false;
    } else {
        return true;
    }
};       

//Вызывается в корне для всех инпутов
export const validInput = () => {
    document.querySelectorAll(`input`).forEach((input) => {
        if(input.placeholder === `Ваш номер телефона...`) {
            input.addEventListener(`input`, () => {
                const regExp = /[^\d]/g;
                input.value = input.value.replace(regExp, '');
                if(input.value.length >= 11) {
                    input.value = input.value.substring(0,11);
                }
            });
        } else if (input.placeholder === `Ваше имя...`) {
            input.addEventListener(`input`, () => {
                const regExp = /[^А-Яа-я ]/g;
                input.value = input.value.replace(regExp, ``);
            })
        }
    });
};
