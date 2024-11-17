const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    setTransition: .2,
    breakpoints: {
        1921: {
            slidesPerView: 'auto',
        },
        
        1400: {
            slidesPerView: 1.75,
        },

        0: {
            spaceBetween: 35,
            slidesPerView: 1,
        }
    },

    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
});