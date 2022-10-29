// $("h1").css("color","blue");
// $("p").css('color','brown');
// $('li').css('color','#202283');
// $('.no').click(function(){
//     $('p').hide(5000);
// });
// $('#yes').click(function(){
//     $('p').show();
// });
// $("h1, p, img").dblclick(function(){
//     $(this).hide();
// });
// $("li").mouseleave(function(){
//     $(this).hide(3000);
// });
// $('img').mouseenter(function(){
//     $(this).hide();
// });

// $('.yes').click(function(){
//     $('p').toggle();
// });
// $('.btn').click(function(){
//     $('#1').fadeIn();
// })
$('.no').click(function(){
    $('p').hide();
})
$('.yes').click(function(){
    $('p').show(10000);
})
$('.btn').click(function(){
    $('#1').fadeIn(1000);
    $('#2').fadeIn(2000);
    $('#3').fadeIn(3000);
})