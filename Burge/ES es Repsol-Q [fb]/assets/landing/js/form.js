if ($('input[name=forename]').length) {
    $("input[name=forename]").addClass('loading');
    $("input[name=forename]").attr('disabled', 'disabled');
}
if ($('input[name=surname]').length) {
    $("input[name=surname]").addClass('loading');
    $("input[name=surname]").attr('disabled', 'disabled');
}
if ($('input[name=email]').length) {
    $("input[name=email]").addClass('loading');
    $("input[name=email]").attr('disabled', 'disabled');
}
if ($('input[name=phone]').length) {
    $("input[name=phone]").addClass('loading');
    $("input[name=phone]").attr('disabled', 'disabled');
}
if ($('button[name=submit]').length) {
    $("button[name=submit]").addClass('loading');
    $("button[name=submit]").attr('disabled', 'disabled');
}

$(document).ready(function() {

    // Form input validation

    jQuery.extend(jQuery.validator.messages, {
        required: ""
    });

    $.validator.addMethod("forename", function(value, element) {
        return this.optional(element) || /^[\p{Letter}\p{Mark}\- ]{2,25}$/u.test(value);
    }, "");

    $.validator.addMethod("surname", function(value, element) {
        return this.optional(element) || /^[\p{Letter}\p{Mark}\- ]{2,25}$/u.test(value);
    }, "");

    $.validator.addMethod("email", function (value, element) {
        return (this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value));
    }, "");

    function functionError() {
        window.location.href = 'success.html';
    }

    function functionBeforeSend() {
        $("form button[name=submit]").attr("disabled", true);
    }

    function functionSuccess(data) {
        $("form button[name=submit]").removeAttr('disabled');
        //console.log(data);
        window.location.href = data;
    }

    $("form input, form button[name=submit]").click(function() {

        var form = $(this).parents('form:first');
        form.validate({
            rules: {
                forename: {
                    required: true,
                },
                surname: {
                    required: true,
                },
                phone: {
                    required: true,
                },
                email: {
                    required: true,
                },
                forename: "required forename",
                surname: "required surname",
                phone: "required phone",
                email: "required email",
            }
        });

    });

    $("form button[name=submit]").click(function() {

        var form = $(this).parents('form:first');
        if (form.valid()) {
            var data = $(this).closest("form").serialize();
            $.ajax({
                url: '../mail.php?' + ((typeof($('base').attr("href")) != "undefined" && $('base').attr("href") !== null) ? $('base').attr("href").slice(0,-1) : ''),
                type: "POST",
                data: data,
                dataType: "html",
                error: functionError,
                beforeSend: functionBeforeSend,
                success: functionSuccess
            });
        }

    });

    // Phone validation

    let ary = Array.prototype.slice.call(document.querySelectorAll("input[name=phone]"));

    ary.forEach(function(el) {
        PhoneDisplay(el);
    })
 
    function PhoneDisplay(input) {

        function intlTelSetGeoCode(code) {
            var geofields = document.querySelectorAll("input[name=country]");
            for (var gid = 0; gid < geofields.length; gid++) geofields[gid].value = code;
        }

        function intlTelSetPhoneCode(code) {
            var phonecode = document.querySelectorAll("input[name=countryDialCode]");
            for (var pid = 0; pid < phonecode.length; pid++) phonecode[pid].value = code;
        }

        var iti = window.intlTelInput(input, {
            initialCountry: $('input[type=hidden][name=country]').val(),
            onlyCountries: $('input[type=hidden][name=onlyCountries]').val().split(','),
            nationalMode: true,
            autoPlaceholder: 'aggressive',
            allowDropdown: (($('input[type=hidden][name=allowDropdown]').val() == 'true') ? true : false),
            formatOnDisplay: true,
            separateDialCode: true,
            utilsScript: "assets/landing/js/utils.js"
        });
        $("input[name=countryDialCode]").val("+" + iti.getSelectedCountryData().dialCode);

        // Countrychange
        input.addEventListener("countrychange", function(event) {
            var iti = window.intlTelInputGlobals.getInstance(event.target);
            if (iti != undefined) {
                var geo = iti.getSelectedCountryData();
                intlTelSetPhoneCode(geo.dialCode);
                intlTelSetGeoCode(geo.iso2);
            }
        });
 
        // Valid number
        $(input).on("change keyup", function() {
            $.validator.addMethod("phone", function(value, element) {
                if (iti.isValidNumber()) {
                    return true;
                } else {
                    return false;
                }
            }, "");
        });
 
        // Mask
        $("input[name=phone]").on("change keyup", function() {
            var mask_regex = $("input[name=phone]").attr('placeholder').replace(/[0-9]/g, 0);
            $("input[name=phone]").mask(mask_regex);
        });

    }

});

$(window).on('load', function() {
    $("form input").removeAttr('disabled');
    $("form button[name=submit]").removeAttr('disabled');
    $("form input").removeClass('loading');
});