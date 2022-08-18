import "./main.scss";
import slick from "slick-carousel";
import {responsiveSlick} from "./js/slick";


$('#burger-menu').on('click', function(){
    $('#navigation .list-unstyled, #login, #contact, #newsletter').slideToggle(300).toggleClass('active');
});

responsiveSlick('#offer-view #image');
responsiveSlick('#slider-element #slider');