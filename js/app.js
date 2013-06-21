$(function(){

    console.log("App initialized");
   
    var input = $('#input-box');
    var ul = $('ul');
    var list = $('#list-container');
    var doc = $(document);
    var submitButton = $('#submit-button');
    var removeButton = $('#remove-button');
    var inputArray = [];

    var appendItem = function() {
        list.append('<li> ' + input.val() + ' </li>');
    };

    // var addToarray = function(arg) {
    //     inputArray.push(arg);
    // };

    var isDuplicate = function(arg) {
        var flag = false;       
        for(var i = 0; i < inputArray.length; i++)
        {
            if($.trim(arg) === inputArray[i])
            {
                flag = true;
            }
        }
        return flag;
    };

    var addToArray = function() {
        inputArray = [];
        $('ul li').each(function(){
            inputArray.push($.trim($(this).text()).replace(/[^\w\s]/gi, '')); //trim and remove special characters
        });
        console.log(inputArray);
    };

    var checkAndAdd = function() {
        if(input.val() !== '' && isDuplicate(input.val()) !== true)
        {
            appendItem();
            addToArray();
        }
        else if(isDuplicate(input.val()) === true)
        {
            alert('That\'s already in there!');
        }
        else
        {
            alert('Please enter an item');
        }
    };

    submitButton.on('click', checkAndAdd);

    input.keypress(function(e) {
        if(e.which === 13)
        {
            e.preventDefault();
            checkAndAdd();
        }
    });

    doc.on('click', 'li', function() {
        $(this).toggleClass('clicked');
        return false;
    });

    removeButton.on('click', function() {
        ul.find('.clicked').remove();
    });

});