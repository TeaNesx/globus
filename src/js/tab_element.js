//Logic for Tab Element

$('#tab-element #tabs .tab').on('click', function() {
    let $this = $(this);
    let $tabId = $(this).parent().attr('id');

    $('#tab-element #tabs .tab').removeClass('active');
    $this.addClass('active');

    $('#tab-element-detailed .tab-detail').removeClass('active');
    $('#tab-element-detailed .tab-detail[data-tab='+ $tabId +']').addClass('active');
});