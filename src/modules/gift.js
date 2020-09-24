`use strict`

const gift = () => {
    const button = document.querySelector(`.fixed-gift`),
        popUp = document.querySelector(`#gift`);

    button.style.display = `none`;
    popUp.style.display = `block`;
    popUp.addEventListener(`click`, (event) => {
        if(event.target.closest(`.close-btn`) || !event.target.closest(`.form-content`) || event.target.closest(`img`)) popUp.style.display = `none`;
    });
    
}

export default gift;