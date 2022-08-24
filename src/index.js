import "./main.scss";
import slick from "slick-carousel";
import {responsiveSlick} from "./js/slick";


$('#burger-menu').on('click', function(){
    $('#navigation .list-unstyled, #login, #contact, #newsletter, #yt-nav, #fb-nav, #insta-nav').slideToggle(300).toggleClass('active');
});

responsiveSlick('#offer-view #image', 1, 1, 1, 1, true, false);
responsiveSlick('#slider-element #slider', 5, 5, 3, 1, false);
