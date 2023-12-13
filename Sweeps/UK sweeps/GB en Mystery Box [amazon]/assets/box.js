var count = 1;

var attempts = 2;

var puedo = false;

var boxRoot;



(function() {

    "use strict";



    boxRoot = {

        _init: function() {

            jQuery("#p_modal1").addClass("modal_open");

            jQuery("#p_modal1").fadeIn("slow");



            jQuery(".box").on("click", function() {

                if (puedo && count <= 2) {

                    if (jQuery(this).hasClass("opened")) {

                    } else {

                        puedo = false;

                        jQuery(".circle-loader").removeClass("load-complete");

                        jQuery(".checkmark").css("display", "none");

                        jQuery(this).addClass("opened");

                        if (count == 2) {

                            jQuery(this).addClass("gifted");

                            setTimeout(function() {

                                jQuery(".gift, .gift__img").fadeIn("slow", function() {

                                    setTimeout(function() {

                                        jQuery("#p_modal3").addClass("modal_open");

                                        jQuery(".circle-loader").addClass("load-complete");

                                        jQuery(".checkmark").css("display", "block");

                                    }, 1500);

                                });

                            }, 4000);

                        } else {

                            count++;

                            attempts--;

                            jQuery("#attempts").html(attempts);

                            setTimeout(function() {

                                jQuery("#p_modal2").addClass("modal_open");

                                setTimeout(function() {

                                    jQuery(".circle-loader").addClass("load-complete");

                                    jQuery(".checkmark").css("display", "block");

                                    puedo = true;

                                }, 1000);

                            }, 2000);

                        }

                    }

                }

            });



            jQuery("#p_modal_button1").on("click", function(event) {

                event.stopPropagation();

                // jQuery(".sweet-overlay, .modal1").fadeOut("slow");

                jQuery("#p_modal1").removeClass("modal_open");

                jQuery("#p_modal1").fadeOut("slow");

                puedo = true;

            });



            jQuery("#p_modal_button2").on("click", function(event) {

                event.stopPropagation();

                // jQuery(".sweet-overlay, .modal2").fadeOut("slow");

                jQuery("#p_modal2").removeClass("modal_open");

            });



            // jQuery("#p_modal_button3").on("click", function (event) {

            //     event.stopPropagation();

            //     // jQuery(".modal3").fadeOut("slow");

            //     jQuery('#p_modal3').modal('hide');

            //     stepfinal();

            //     goToUrlFinish();

            // });

        },

    };



    if (typeof box_ini == "undefined") {

        boxRoot._init();

    }

})();