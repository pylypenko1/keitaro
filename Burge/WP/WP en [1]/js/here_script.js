$(document).ready(function() {

    $('.gosearch').click(function(){
        let valSearch = $('.search-addon').val();
        if(valSearch != ''){
            $(this).attr('href','https://www.google.com/search?q='+valSearch);
        }
    });

    let imagesGetHeight = $('.imgSize').prop('naturalHeight');
    let imagesGetWidth = $('.imgSize').prop('naturalWidth');

    if(imagesGetHeight == imagesGetWidth){
        if(imagesGetWidth > 600){
            $('.imgSize').css({'width':'50%'});
        }
    }
    if(imagesGetHeight > imagesGetWidth){
        if(imagesGetHeight < 2000 && imagesGetHeight > 700){
            $('.imgSize').css({'width':'25%'});
        }
        if(imagesGetHeight < 700 && imagesGetHeight > 500){
            $('.imgSize').css({'width':'50%'});
        }
    }
    if(imagesGetHeight < imagesGetWidth){
        $('.imgSize').css({'width':'100%'});
        if(imagesGetWidth < 600){
            $('.imgSize').css({'width':'500px'});
        }
    }

    function divColor(){

        let divColor = $('.top-block-box').css('background-color');

        if(tinycolor(divColor).isLight()){
            $('.top-block-box').css({'color':'#333'});
            $('.bottom-nav li').css({'color':'#333'});
            $('.for_add_btn').css({'color':'#333'});
            $('.input-group-text').css({'color':'#333'});
            $('.for_buy_btn').css({'color':'#333'});
        }else{
            $('.top-block-box').css({'color':'#fff'});
            $('.for_add_btn').css({'color':'#fff'});
            $('.input-group-text').css({'color':'#fff'});
            $('.for_buy_btn').css({'color':'#fff'});
        }

    }

    if($('body').css('background-color') != 'rgb(255, 255, 255)'){
        $('.center-block-box').css({'background-color':'#fff'});
        $('.top-title-and-content-box').css({'background-color':'#fff'});
        $('.footer-block-new').css({'background-color':'#fff'});
        $('.main_block_side-content').css({'background-color':'#fff'});
        $('.top-news_item').css({'background-color':'#f6f6f6'});
        $('.top-gallery_main').css({'background-color':'#f6f6f6', 'padding':'10px'});
    }else{
        $('.top-title-and-content-box').css({'box-shadow':'0px 0px 5px #eeeeee'});
        if($('.top-title-and-content-box').css('margin-bottom') == '0px'){
            $('.main_block_side-content').css({'box-shadow':'0px 3px 5px #eeeeee'});
            $('.prvBlock').css({'box-shadow':'0px 3px 5px #eeeeee'});
        }else{
            $('.main_block_side-content').css({'box-shadow':'0px 0px 5px #eeeeee'});
            $('.prvBlock').css({'box-shadow':'0px 0px 5px #eeeeee'});
        }


    }

    if($('.site-name').hasClass('flex-row') && $('.search-box').css('display') == 'flex'){
        $('.site-name').css({'justify-content':'space-between'});
    }

    let randColorBox =  $('#randColorBox').attr('class');
    $('.bottom-nav').css({'background':convertHex(randColorBox,50)});
    $('.top-news_item p').css({'color':convertHex(randColorBox,70)});
    $('.input-group-text').css({'background':convertHex(randColorBox,20),'border-color':randColorBox});

    if($('.img_text_block').hasClass('flex-column')){
        $('.top-title-and-content-box').hide();
        $('.new_title_images_block').show();
    }

    if($('.top-title-and-content-box').css('margin-bottom') != '0px'){
        $('.top-news_item:first-child').css({'margin-top':'0px'});
    }

    if($('.top-news_item').hasClass('flex-column')){
        $('.top-news_item img').css({'width':'100%'});
    }

    if($('.main_block_side .row').hasClass('flex-row')){
        $('.main_block_side-sidebar').css({'padding-right':'0px'})
    }else{
        $('.main_block_side-sidebar').css({'padding-left':'0px'})
    }

    if($('.new_title_images_block').css('display') != 'none'){
        $('.sidebar_top-gallery').show();
    }
    if($('.sidebar_top-news').hasClass('d-none')){
        $('.sidebar_top-gallery').show();
    }

    if($('.bottom_author_box i').css('display') != 'none'){
        $('.bottom_author_box img').hide();
    }

    $('.comments_wrapper-item').css({'border-color':convertHex(randColorBox,20)});

    let borderWidth = $('#borderWidth').attr('class');

    if(borderWidth == '0px'){
        $('.comments_wrapper-item').css({'border-bottom':'1px solid','border-color':convertHex(randColorBox,50)});
        $('.comments_wrapper-item:last-child').css({'border':'none'});
    }

    if($('.not_comments_block').css('display') == 'none'){
        $('.all_comments_wrapper').show();
    }

    $('.for_add_btn').click(function(){
        if($('.textwithuser').val() != '' && $('#nameuser').val() != ''){
            $('.myFormBlock').hide();
            $('.block-add-this-comment').fadeIn(200);
        }

    });




    $('.fancybox').each(function() {
        $(this).attr('href', $(this).parent().siblings('img').attr('src'));
    });
    $('.top-gallery_main a').each(function() {
        $(this).attr('href', $(this).children('img').attr('src'));
    });


    function convertHex(hex,opacity){
        hex = hex.replace('#','');
        r = parseInt(hex.substring(0,2), 16);
        g = parseInt(hex.substring(2,4), 16);
        b = parseInt(hex.substring(4,6), 16);

        result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
        return result;
    }


    divColor();


});
