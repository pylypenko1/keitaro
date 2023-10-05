$(document).ready(function() {

    function whatColor(){
        let monocolor = $('.monocolor').css('background-color');

        if(tinycolor(monocolor).isLight()){
            $('.monocolor').css({'color':'#333'});
        }else{
            $('.monocolor').css({'color':'#fff'});
        }
    }
    whatColor();


    if($('.docPic').css('float') == 'none'){
        $('.docPic').css({'max-width':'850px','margin':'0 auto 30px auto','display':'flex'});
        $('.content--box').css({'max-width':'850px','margin':'0 auto'});
    }

    if($('.rowDirect').css('flex-direction') == 'row'){
        $('.rowDirect2').css('flex-direction','row-reverse');
    }else{
        $('.rowDirect2').css('flex-direction','row');
    }




    let hT = $('.docPic').prop('naturalHeight');
    let wT = $('.docPic').prop('naturalWidth');

    if(hT == wT){
        if(wT > 600){
            $('.docPic').css({'width':'50%'});
        }
    }
    if(hT > wT){
        if(hT < 2000 && hT > 700){
            $('.docPic').css({'width':'25%'});
        }
        if(hT < 700 && hT > 500){
            $('.docPic').css({'width':'50%'});
        }
    }
    if(hT < wT){
        if($('.docPic').hasClass('float-none')){
            $('.docPic').css({'width':'100%'});
        }
        if(wT < 600){
            $('.docPic').css({'width':'500px'});
        }
    }


});
