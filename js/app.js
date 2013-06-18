$(function(){

    console.log("App initialized");
    
    var input = $('#input-box');
    var ul = $('ul');
    var list = $('#list-container');
    var doc = $(document);
    var submitButton = $('#submit-button');
    var removeButton = $('#remove-button');

    var appendItem = function(){
        list.append('<li> ' + input.val() + ' </li>');
    };
    
    submitButton.on('click', function(){
        appendItem();
    });

    input.keypress(function(e){
        if(e.which === 13)
        {
            e.preventDefault();
            appendItem();
        }
    });

    doc.on('click', 'li', function() {
        $(this).toggleClass('clicked');
        return false;
    });

    removeButton.on('click', function(){
        ul.find('.clicked').remove();
    });

});