import "./main.scss";
import slick from "slick-carousel";

$('#burger-menu').on('click', function(){
    $('#navigation .list-unstyled, #login, #contact, #newsletter').slideToggle(300).toggleClass('active');
});