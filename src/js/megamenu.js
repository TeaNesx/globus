//Logic for Mega Menu

$('#menu-dropdown .list-item').on('click', function() {
    let $this = $(this);
    let $dataId = $this.data('mega-id');

    if(!$this.hasClass('active')) {
        
        $('#menu-dropdown .list-item').removeClass('active');
        $('#offer-view .dropdown').removeClass('active');
        $this.addClass('active');

        $('#offer-view .dropdown[data-mega-id='+ $dataId +']').addClass('active');

    } else {
        $('#menu-dropdown .list-item').removeClass('active');
        $('#offer-view .dropdown').removeClass('active');
    }
});