$(function(){ 

    console.log("App initialized");

    $('#submit-button').on('click', function(){
        var input = $('#input-box');
        $('#list-container').append('<li> ' + input.val() + ' </li>');
    });

    $('li').on('click', function() {
        $(this).remove();
    });
});