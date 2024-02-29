(function($){
    $(document).ready(function(){
        
        $(".single-lang ul li.toggle").click(function(){
            $(".single-lang ul li.toggle ul").slideToggle();
        });

        // sticky menu
        $(window).scroll(function(){
			var wh = $(this).scrollTop();
			
			if(wh){
				$('.header-top').addClass('menu-sticky');
			}else{
				$('.header-top').removeClass('menu-sticky');
			}
			
		});

        // Active Language
        $('.single-lang ul li.toggle').on('click', 'li.toggle ul li', function(){
            $('li.toggle ul .active').removeClass('active');
            $(this).addClass('active');
        });

    });
})(jQuery)
