$(document).ready(function() { 
    $('.main_btn').click(function(){
        $('.main_block').addClass('none')
        $('.quest_block').addClass('active')
    })
    $('.quest li').click(function(){
        var my_id = $(this).parent().parent().parent().attr('data-id')
        if(my_id == '5'){
            $('.quest_block').removeClass('active')
            $('.form_block').addClass('active')
        }else{
            var my_id = parseFloat(my_id) + 1;
            var my_progres = $(this).parent().parent().parent().attr('data-progres')
            $('.progres').css('width',''+my_progres+'%');
            $('.quest_block .quest.active').removeClass('active')
            $('.quest_block .quest[data-id='+my_id+']').addClass('active')
        }
        
      
    })
    $('#cookie-bar-btn').click(function(){
        $('.addition').hide();
    })
});