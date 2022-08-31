// Logic for Burgermenu

$('#burger-menu').on('click', function(){
    $('#navigation .list-unstyled, #login, #contact, #newsletter, #yt-nav, #fb-nav, #insta-nav').slideToggle(300).toggleClass('active');
});