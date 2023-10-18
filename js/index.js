
$(function() {
    $('.mobile_menu_burger').on('click', function(){
        $('.mobile_menu').show('slow');
    });
    $('.close_mobile_menu').on('click', function(){
        $('.mobile_menu').hide('slow');
    });
});