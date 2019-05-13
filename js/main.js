$(document).ready(function(){

    var imageSet = false;

    $('.navbar-brand').click(function() {
        if(!imageSet)
        {
            $('body').css('background-image', 'url("img/logo.png")');
            imageSet = true;
        }
        else
        {
            $('body').css('background-image', '');
            imageSet = false;
        }
    });
    
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    $(".zoom").hover(function(){

        $(this).addClass('transition');
    }, function(){

        $(this).removeClass('transition');
    });
});
