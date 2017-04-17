$(function () {
    $('[data-tab ="about"]').show();
    
    $(".open-tab").click(function () {
        // Hide any of the content tabs
        $(".tab").hide();
        // Show your active tab (read from your data attribute)
        $('[data-tab ="' + $(this).data('tab') + '"]').show();
        // Optional: Highlight the selected tab
        $('li.active').removeClass('active');
        $(this).closest('li').addClass('active');
    });
});