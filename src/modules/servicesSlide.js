`use strict`

class servicesSlide {
    constructor({main, wrap, next, prev}) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = this.main.querySelector(next);
        this.prev = this.main.querySelector(prev);
        this.option = {
            position: 0,
            slidesToShow: 5,
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
            this.option.position = this.slides.length - 5
        }
        this.wrap.style.transform = `translateX(-${this.option.position * 20}%)`
    };
    nextSlider(event) {
        event.preventDefault();
        ++this.option.position;
        if(this.option.position > this.slides.length - 5) {
            this.option.position = 0;
        }
        this.wrap.style.transform = `translateX(-${this.option.position * 20}%)`
    };
};

export default servicesSlide;