$(".ji-close").click(function(){
  $(".disclamer").hide();
  $('body').addClass('mt-80p');
});

// header
$(window).scroll(function() {
  if ($(this).scrollTop() > 100){  
      $('header').addClass("sticky");
      $('header-link').addClass('text-white');
  }else{
    $('header').removeClass("sticky");
    $('header-link').removeClass('text-white');
  }
});

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

$(".three-step-head-pd").click(function(){
  $(".three-step-head-pd").removeClass('ji-active');
  $(this).addClass('ji-active')
});


$(".ji-choose-ipif").click(function(){
  $(".ji-choose-ipif").removeClass('ji-pif-active');
  $(this).addClass('ji-pif-active')
});

$(function() {
  let filter = $("[data-filter]");
  filter.on("click", function(event) {
  event.preventDefault();
  let cat = $(this).data('filter');
    $("[data-cat]").each(function() {
      let workCat = $(this).data('cat');
    
      if(workCat != cat) {
        $(this).addClass('hide');
      }else {
        $(this).removeClass('hide');
      }
    });
  });
});

// header menu

$(document).ready(function(){
  $('.toogle').click(function(){
	  $('#nav-icon3').toggleClass('open');
   
    $('#myLinks').toggleClass('hide-mobileMenu')
    $('#myLinks').toggleClass('mobile-menu-animation')
    
	});

  $('#nav-icon3').click(function(){
	  $(this).toggleClass('open');
   
    $('#myLinks').toggleClass('hide-mobileMenu')
    $('#myLinks').toggleClass('mobile-menu-animation')
    
	});
});
// calc

// //СУММА ИНВЕСТИРОВАНИЯ - ПОКАЗАТЬ
// var $value = $('#property-value').val();
// var $showValue = numberWithCommas($value);
// $('#show-property-value').html( '$ ' + $showValue);

// //ГОД - ПОКАЗАТЬ
// var $years = $('#years').val();
// var $showYear = numberWithCommas($years);
// $('#show-years').html($showYear);

// $(document).on('input change', '#property-value', function() {
// 	var $value = $('#property-value').val();
// 	var $showValue = numberWithCommas($value);
// 	$('#show-property-value').html( '$' + $showValue);
// 	totalSavings1();

// });

// $(document).on('input change', '#years', function() {
// 	var $years = $('#years').val();
// 	var $showYears = numberWithCommas($years);
//   $('#show-years').html($showYears);
//   if($showYears == 1){
// 	$(".show-yearss").html($showYears + " год");
//   }else
//   if($showYears == 5){
// 	$(".show-yearss").html($showYears + " лет");
//   }else
//   	$(".show-yearss").html($showYears + " года");
// 	totalSavings1();
// 	console.log($showYears)
// });




// function numberWithCommas(number) {
//     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }




// //ИПИФ 1
// function totalCost1(){
// 	var $property = $('#property-value').val();
// 	var $numberofYears = $('#years').val();
//   var $totalInterest = (1.015 ** $numberofYears);
// 	var $total = ($property * $totalInterest);
//   var $total = $total.toFixed(2);
// 	return $total;
// }

// function totalSavings1() {
// 	var $savings = totalCost1();
// 	$('#total-savings-1').html(numberWithCommas($savings));
// }

// totalSavings1();



$('.toggle').click(function(e) {
  e.preventDefault();
 /*   */
  if ($(this).hasClass('toggle-border-radius')) {
    document.querySelectorAll('.toggle').forEach(item => {
      item.classList.remove('toggle-border-radius');
    })
    $(this).removeClass('toggle-border-radius');
  } else {
    document.querySelectorAll('.toggle').forEach(item => {
      item.classList.remove('toggle-border-radius');
    })
    $(this).addClass('toggle-border-radius');
  }
  var $this = $(this);

  if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
      
  } else {
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  }
});


$('.blog-categories-title').on('click', function() {
  $(this).parent().toggleClass('active')
})

$('.blog-categories .close').on('click', function() {
  $('.blog-categories').removeClass('active')
})
// read more

$('.read-more').click(function() {
  $(this).prev().slideToggle();
  if (($(this).text()) == "Читать больше") {
      $(this).text("Читать меньше");
  } else {
      $(this).text("Читать больше");
  }
});
$('.read-more-kz').click(function() {
  $(this).prev().slideToggle();
  if (($(this).text()) == "Толығырақ оқу") {
      $(this).text("Аз оқу");
  } else {
      $(this).text("Толығырақ оқу");
  }
});

