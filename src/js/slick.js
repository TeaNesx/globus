import slick from "slick-carousel";

function responsiveSlick(selector, xl_slidetoshow, lg_slidetoshow, md_slidetoshow, sm_slidetoshow, dots, arrows) {
    $(selector).slick({
        dots: dots,
        infinite: false,
        arrows : arrows,
        speed: 300,
        slidesToShow: xl_slidetoshow,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 992,
            settings: {
                slidesToShow: lg_slidetoshow,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
                arrow: false
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: md_slidetoshow,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 576,
            settings: {
                slidesToShow: sm_slidetoshow,
                slidesToScroll: 1,
            }
            }
        ]
    })
}


responsiveSlick('#offer-view #image', 1, 1, 1, 1, true, false);
responsiveSlick('#slider-element #slider', 5, 5, 3, 1, false);