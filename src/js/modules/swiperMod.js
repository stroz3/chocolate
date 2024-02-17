import Swiper from 'swiper/bundle';


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    loop: true,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    dragSize: 20,
    },
    breakpoints:{
    320:{
        slidesPerView: 2,
    },
    
    1000:{
        slidesPerView: 3
    },
    1200:{
        slidesPerView: 4
    }
    }
});