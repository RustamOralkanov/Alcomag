const swiper = new Swiper(".banners-carousel", {
    loop: true,

    pagination: {
        el: ".swiper-pagination",
    },

    navigation: {
        nextEl: ".banners-button-next",
        prevEl: ".banners-button-prev",
    },
});

const cardsSwiper = new Swiper(".cards-carousel", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: ".cards-btn-next",
        prevEl: ".cards-btn-prev",
    },
});

const cardsTwoSwiper = new Swiper(".cards-carousel-second", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: ".cards-btn-next-second",
        prevEl: ".cards-btn-prev-second",
    },
});

const cardsThirdSwiper = new Swiper(".cards-carousel-third", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: ".cards-btn-next-third",
        prevEl: ".cards-btn-prev-third",
    },
});

const news = new Swiper(".news-carousel", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: ".news-btn-next",
        prevEl: ".news-btn-prev",
    },
});
