$(function(){

    console.log("App initialized");
    
    var input = $('#input-box');
    var ul = $('ul');
    var list = $('#list-container');
    var doc = $(document);
    var submitButton = $('#submit-button');
    var removeButton = $('#remove-button');
    var inputArray = [];

    var appendItem = function(){
        list.append('<li> ' + input.val() + ' </li>');
        addToarray(input.val());
    };

    var addToarray = function(arg) {
        inputArray.push(arg);
    };
    
    submitButton.on('click', function(){
        appendItem();
        console.log(inputArray);
    });

    input.keypress(function(e){
        if(e.which === 13)
        {
            e.preventDefault();
            appendItem();
            console.log(inputArray);
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