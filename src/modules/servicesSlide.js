`use strict`

class servicesSlide {
    constructor({main, wrap, next, prev, slidesToShow}) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = this.main.querySelector(next);
        this.prev = this.main.querySelector(prev);
        this.option = {
            position: 0,
            slidesToShow: slidesToShow,
        }; 
    };

    init() {
        this.addClass();
        this.controllService();
    };

    addClass() {
        this.main.classList.add(`servicesWrapper`);
        this.wrap.classList.add(`servicesSlider`);
        for(const item of this.slides) {
            item.classList.add(`servicesSlide`);
        }
    };

    controllService() {
        this.prev.addEventListener(`click`, this.prevSlider.bind(this));
        this.next.addEventListener(`click`, this.nextSlider.bind(this));
    };

    prevSlider(event) {
        event.preventDefault();
        --this.option.position;
        if(this.option.position < 0) {
            this.option.position = this.slides.length - this.option.slidesToShow;
        }
        this.wrap.style.transform = `translateX(-${this.option.position * (100 / this.option.slidesToShow)}%)`
    };
    nextSlider(event) {
        event.preventDefault();
        ++this.option.position;
        if(this.option.position > this.slides.length - this.option.slidesToShow) {
            this.option.position = 0;
        }
        this.wrap.style.transform = `translateX(-${this.option.position * (100 / this.option.slidesToShow)}%)`
    };

    newClass(className) {
        for(const item of this.slides) {
            item.classList.add(className);
        }
    };
    removeClass(className) {
        for(const item of this.slides) {
            item.classList.remove(className);
        }
    }
};

export default servicesSlide;