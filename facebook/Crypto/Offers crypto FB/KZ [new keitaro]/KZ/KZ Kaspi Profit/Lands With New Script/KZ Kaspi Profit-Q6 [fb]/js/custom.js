// next prev
var divs = $('.show-section section');
var now = 0; // currently shown div
divs.hide().first().show(); // hide all divs except first

function next() {
  divs.eq(now).hide();
  now = (now + 1 < divs.length) ? now + 1 : 0;
  divs.eq(now).show(); // show next
}

// $(".prev").click(function () {
//   divs.eq(now).hide();
//   now = (now > 0) ? now - 1 : divs.length - 1;
//   divs.eq(now).show(); // show previous
// });


// $(document).ready(function () {
//   $('.text-w-icon-field input[type=text]').focus(function () {
//       $(this).closest('#active').toggleClass("focused");
//     })
//     .blur(function () {

//       $(this).closest('#active').toggleClass("focused");
//     });

//   $('.text-field input, .text-field select').focus(function () {
//       $(this).closest('.focus').toggleClass("focused");
//     })
//     .blur(function () {

//       $(this).closest('.focus').toggleClass("focused");
//     });
// })


// $("#step1btn").click(function () {

// })

// .join(", ");



// // disable on enter
// $('form').on('keyup keypress', function (e) {
//   var keyCode = e.keyCode || e.which;
//   if (keyCode === 13) {
//     e.preventDefault();
//     return false;
//   }
// });



// form validiation
// var inputschecked = false;


// function formvalidate(stepnumber) {
//   // check if the required fields are empty
//   inputvalue = $("#step" + stepnumber + " :input").not("button").map(function () {
//     if (this.value.length > 0) {
//       $(this).removeClass('invalid');
//       return true;

//     } else {

//       if ($(this).prop('required')) {
//         $(this).addClass('invalid');
//         return false
//       } else {
//         return true;
//       }

//     }
//   }).get();


//   // console.log(inputvalue);

//   inputschecked = inputvalue.every(Boolean);

//   // console.log(inputschecked);
// }

// $(document).ready(function () {

// check step1
// $("#step1btn").on('click', function () {
$("input[name='step1']").on('click', function () {
  setTimeout(function () {
    // formvalidate(1);

    // if (inputschecked == false) {
    //   formvalidate(1);
    // } else {
    next();
    // }
  }, 500);
});

// check step2
// $("#step2btn").on('click', function () {
$("input[name='step2']").on('click', function () {
  setTimeout(function () {
    // formvalidate(2);

    // if (inputschecked == false) {
    //   formvalidate(2);
    // } else {
    next();
    // }
  }, 500);
});

// check step3
// $("#step3btn").on('click', function () {
$("input[name='step3']").on('click', function () {
  setTimeout(function () {
    // formvalidate(3);

    // if (inputschecked == false) {
    //   formvalidate(3);
    // } else {
    next();
    // }
  }, 500);
});

// // check last step
// $("#sub").on('click', function () {

//   formvalidate(4);
//   if (inputschecked == false) {
//     formvalidate(4);
//   } else {
//     $("#sub").html("<img src='images/loading.gif'>");



//     var dataString = new FormData(document.getElementById("steps"));


//     console.log(dataString);


//     // send form to send.php
//     $.ajax({
//       type: "POST",
//       url: "form handling/send.php",
//       data: dataString,
//       processData: false,
//       contentType: false,
//       cache: false,
//       success: function (data, status) {

//         $("#sub").html("Success!");
//         console.log(data);

//         window.location = "thankyou.html";

//       },
//       error: function (data, status) {
//         $("#sub").html("failed!");
//         console.log(data);
//       }
//     });
//   }

// });
// });