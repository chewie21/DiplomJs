const headerSlide = (slideDivParam) => {

    const slideDiv = document.querySelector(`${slideDivParam}`),
        slider = slideDiv.querySelector(`.wrapperDots`),
        slide = slideDiv.querySelectorAll(`.slide`);
    
    slide[0].classList.add(`activeSlide`);

    let currentSlide = 0,
        interval;

    const newDot = () => {
        const ulDots = slideDiv.querySelector(`.dots`);
        for(let i = 0; i < slide.length; i++) {
            ulDots.insertAdjacentHTML(`beforeend`, `<li class="dot"></li>`);
            if(i === 0) {
                slideDiv.querySelector(`.dot`).classList.add(`dot-active`);
            }
        }
    }
    newDot();

    const dot = slideDiv.querySelectorAll(`.dot`);

    const prevSlide = (elem, index, thisClass) => {
        elem[index].classList.remove(thisClass);
    };
    const nextSlide = (elem, index, thisClass) => {
        elem[index].classList.add(thisClass);
    };

    const autoPlay = () => {
        prevSlide(slide, currentSlide, `activeSlide`);
        prevSlide(dot, currentSlide, `dot-active`);
        currentSlide++;
        if(currentSlide >= slide.length) currentSlide = 0;
        nextSlide(slide, currentSlide, 'activeSlide');
        nextSlide(dot, currentSlide, 'dot-active');
    };

    //Начало и конец анимации
    const startSlide = () => {
        interval = setInterval(autoPlay, 3000);
    }
    const stopSlide = () => {
        clearInterval(interval);
    }

    //Остановка на точках или стрелках
    slider.addEventListener(`mouseover`, (event) => {
        if(event.target.matches(`.gallery-btn`) || event.target.matches(`.dot`)) {
            stopSlide();
        }
    });
    slider.addEventListener(`mouseout`, (event) => {
        if(event.target.matches(`.gallery-btn`) || event.target.matches(`.dot`)) {
            startSlide();
        }
    });

    slider.addEventListener(`click`, (event) => {
        event.preventDefault();
        let target = event.target;

        if(!target.matches(`#arrow-right, #arrow-left, .dot`)) {
            return;
        }

        prevSlide(slide, currentSlide, `activeSlide`);
        prevSlide(dot, currentSlide, `dot-active`);

        if(target.matches(`#arrow-right`)) {
            currentSlide++;
        } else if(target.matches(`#arrow-left`)) {
            currentSlide--; 
        } else if (target.matches(`.dot`)) {
            dot.forEach((elem, index) => {
                if(elem === target) {
                    currentSlide = index;
                }
            })
        }

        if(currentSlide >= slide.length) currentSlide = 0;
        if(currentSlide < 0) currentSlide = slide.length - 1;

        nextSlide(slide, currentSlide, 'activeSlide');
        nextSlide(dot, currentSlide, 'dot-active');
    });

    startSlide();
}

export default headerSlide;