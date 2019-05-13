$(document).ready(function(){

    function darkenAll()
    {
        less.modifyVars({
            '@primary': 'hsl(160, 76%, 20%)',
            '@danger': 'hsl(353, 76%, 24%)',
            '@warning': 'hsl(56, 76%, 30%)',
            '@success': 'hsl(252, 100%, 51%)',
            '@theme-btn': 'hsl(143, 100%, 50%)',
            '@nav': 'hsl(69, 79%, 21%)',
            '@changeColor': 'hsl(49, 96%, 46%)',
            '@wrapperColor': 'hsl(0, 0%, 75%)',
            '@footerColor': 'hsl(0, 0%, 69%)'
        });
    }
    function lightenAll()
    {
        less.modifyVars({
            '@primary': 'hsl(160, 76%, 45%)',
            '@danger': 'hsl(353, 76%, 49%)',
            '@warning': 'hsl(56, 76%, 55%)',
            '@success': 'hsl(252, 100%, 76%)',
            '@theme-btn': 'hsl(143, 100%, 75%)',
            '@nav': 'hsl(69, 79%, 46%)',
            '@changeColor': 'hsl(49, 96%, 71%)',
            '@wrapperColor': 'hsl(0, 0%, 100%)',
            '@footerColor': 'hsl(0, 0%, 94%)'
        });
    }

    $('.nav-link').hover(function(){
        darkenAll();
    },
    function(){
        lightenAll();
    });

    $('.navbar-brand').hover(function(){
        darkenAll();
    },
    function(){
        lightenAll();
    });
    
});