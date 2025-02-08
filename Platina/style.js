$(document).ready(function(){
    $('#show').click(function(){
        $('.anc').toggleClass('ml')     
        $('.anc').css('transition','1s')
        $('.anc a').css('color','black')
        $('.icn').find('#show').toggleClass('fa-bars fa-xmark')
    })

    $('.s4t').mouseenter(function(){
        $(this).find('#i1').css('color','rgb(250, 5, 140)')
    })

    $('.s4t').mouseleave(function(){
        $(this).find('#i1').css('color','black')
    })

})  