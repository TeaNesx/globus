// Logic for counter

let $counter = $('#need-more-btn .counter').data('counter');

$('#need-more-btn .subtract').on('click', function(e) {
    e.preventDefault();
    let $_counter = $('#need-more-btn .counter').attr('data-counter');

    if($_counter > 0 ) {
        $_counter--;
        changeCounter($(this), $_counter);
        updatePrice(false);
    }
})

$('#need-more-btn .add').on('click', function(e) {
    e.preventDefault();
    let $_counter = $('#need-more-btn .counter').attr('data-counter');

    $_counter++;
    changeCounter($(this), $_counter);
    updatePrice(true);
})

/**
 * 
 * @param {Object} selector - Selector from current element 
 * @param {number} counter - Counter to change the data value
 */
function changeCounter(selector, counter) {
    selector.parent().find('.counter').attr('data-counter', counter);
    selector.parent().find('.counter').text(counter.toString());
}

/**
 * 
 * @param {bool} bool - Bool for using operator. false = substraction, true = addition
 */
function updatePrice(bool) {
    let $currentPrice = $('#offer-element .price').attr('data-current-price');
    let $prevPrice = $('#offer-element #weight-boxes .weight-tab.active').data('price');
    let $newPrice;

    if($counter > 0) {
        if(bool) {
            $newPrice = parseFloat($currentPrice) + parseFloat($prevPrice);
        } else {
            $newPrice = parseFloat($currentPrice) - parseFloat($prevPrice);
        }

        $('#offer-element .price').text($newPrice.toFixed(2).toString().replace('.', ',') + " €");
        $('#offer-element .price').attr('data-current-price', $newPrice.toFixed(2));

    } else {
        $('#offer-element .price').text("0 €");
        $('#offer-element .price').attr('data-current-price', 0);
    }
}