document.querySelectorAll('.js_feature').forEach((el) => {
    el.addEventListener('click', () => {
        document.querySelectorAll(`.js_feature${el.dataset.perk}`).forEach((el) => {
            el.classList.remove('active');
        });
        el.classList.add('active');
        document
            .querySelectorAll(`.js_featureImage${el.dataset.perk}`)
            .forEach((el) => {
                el.classList.remove('active');
            });
        document
            .querySelector(`.js_featureImage${el.dataset.feature}`)
            .classList.add('active');
    });
});

document.querySelectorAll('.js-benefits-splide').forEach((el) => {
    new Splide(el, {
        perPage: 3,
        perMove: 3,
        arrows: false,
        rewind: true,
        pagination: true,
        lazyLoad: true,
        gap: 52,
        breakpoints: {
            1023: {
                perPage: 2,
                perMove: 2,
                gap: 32,
            },
            767: {
                perPage: 1,
                perMove: 1,
                gap: 16,
            },
        },
    }).mount();
});
