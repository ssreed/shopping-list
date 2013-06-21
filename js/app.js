$(function(){

    console.log("App initialized");
    
    var input = $('#input-box');
    var ul = $('ul');
    var list = $('#list-container');
    var doc = $(document);
    var submitButton = $('#submit-button');
    var removeButton = $('#remove-button');
    var inputArray = [];
    var j = 0;

    var appendItem = function() {
        list.append('<li> ' + input.val() + ' </li>'); 
        //addToarray(input.val());
        //console.log(inputArray); 
    };

    var addToarray = function(arg) {
        inputArray.push(arg);
    };

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

    var add2array = function() {
        inputArray = [];
        $('ul li').each(function(){
            inputArray.push($.trim($(this).text()).replace(/[^\w\s]/gi, '')); 
            //console.log($.trim($(this).text()));
            //console.log($.trim($(this).text()).replace(/[^\w\s]/gi, ''));
        });
        console.log(inputArray);
    };

    submitButton.on('click', function() {
        if(input.val() !== '' && isDuplicate(input.val()) !== true)
        {
            appendItem();
            add2array();
        }
    });

    input.keypress(function(e) {
        if(e.which === 13)
        {
            e.preventDefault();
            if(input.val() !== '' && isDuplicate(input.val()) !== true)
            {
                appendItem();
                j++;
                add2array();
                // j++;
                // console.log(j);
                // for(var i = j; i <= inputArray.length; i++)
                // {
                //      list.append('<li id="' + j + '"  > ' + input.val() + ' </li>'); 
                // }
            }
        }
    });

    doc.on('click', 'li', function() {
        $(this).toggleClass('clicked');
        //console.log(j);
        return false;
    });

    removeButton.on('click', function() {
        //console.log(ul.find('.clicked'));
        //var index = ul.find('.clicked').id;
        //inputArray.splice(index, 1);
        ul.find('.clicked').remove();
    });

});