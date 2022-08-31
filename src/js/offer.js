// Logic for offer Element

$('#weight-boxes .weight-tab').on('click', function() {
    let $this = $(this);
    let $price = $this.data('price');

    $('#weight-boxes .weight-tab').removeClass('active');
    $this.addClass('active');

    $('#offer-element .price').text($price.replace('.', ',') + " €");
    $('#offer-element .price').attr('data-current-price', $price);

    $('#offer-element .counter').text('1');
    $('#offer-element .counter').attr('data-counter', '1');

});
