$(function() {
    let span = $('span');
        span.each(function(index, element) {
            if(index % 2 == 0) {
                $(element).css('color', 'red');
            }
        debugger;
        })
    let paragraphs = $('p');
        paragraphs.each(function(index, element){
            let button = '<button class="btn" data-tmp="' + index + '">Click me</button>' 
            $('element').append(button)
        })
        debugger;
    $('button').click(function() {
        alert($(button).attr('data-tmp'));
    })
});