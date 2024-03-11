$('.minimizedChats a').click(function(){
    $('.minimizedChats a.active').removeClass('active');
    $(this).addClass('active');
    $('.leftChatSection').css('display','none');
    $('.mblmaxChat').css('display','block');
    $('.backArrow').css('display','block');
});

$('.backArrow').click(function(){
    $('.leftChatSection').css('display','block');
    $('.mblmaxChat').css('display','none');
    $('.backArrow').css('display','none');
});