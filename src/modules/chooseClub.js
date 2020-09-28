`use strict`

const chooseClub = () => {
    //Селекторы
    const select = document.querySelector(`#club-select-ul`);
    //Костыль для правильного срабатывания таргета
    select.style.zIndex = `9999`;
    //Показать меню
    const showMenu = (event) => {
        if(event.target.closest("#club-select-title")) {
            select.style.display = `block`;
            document.removeEventListener(`click`, showMenu);
            document.addEventListener(`click`, hideMenu);
        }
    };
    //Скрыть мекю
    const hideMenu = (event) => {
        if((event.target.closest("#club-select-title")) || !event.target.closest(`#club-select-ul`)) {
            select.style.display = `none`;
            document.removeEventListener(`click`, hideMenu);
            document.addEventListener(`click`, showMenu);
        }
    };
    //Запускаем мини-рекурсию
    document.addEventListener(`click`, showMenu);
};

export default chooseClub;