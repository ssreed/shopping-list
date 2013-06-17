$(function(){

    console.log("App initialized");
    
    var input = $('#input-box');
    var ul = $('ul');
    var list = $('#list-container');

    $('#submit-button').on('click', function(){
        list.append('<li> ' + input.val() + ' </li>');
    });

    $(document).on('click', 'li', function() {
        $(this).toggleClass('clicked');
        return false;
    });

    $('#remove-button').on('click', function(){
        ul.find('.clicked').remove();
    });

});