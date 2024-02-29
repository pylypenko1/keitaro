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
    $.validator.addMethod("email", function(value, element) {
        return (this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value));
    }, "");
	$("form input, button[type=submit]").click(function() {
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

	$("button[type=submit]").click(function() {
			var form = $(this).parents('form:first');
			if (form.valid()) {
					var data = $(this).closest("form").serialize();
					console.log(data);
					form.submit(function() {
							$("button[type='submit']").prop('disabled', true);
                            $("button[type='submit']").text('');
                            $("button[type='submit']").addClass('loading-btn');
					});
			}
	});


	// Phone validation

	let ary = Array.prototype.slice.call(document.querySelectorAll("input[name=phone]"));

	ary.forEach(function(el) {
			PhoneDisplay(el);
	})

	function PhoneDisplay(input) {

			//AlterCPA code

			function intlTelSetGeoCode(code) {
					var geofields = document.querySelectorAll("input[name=country]");
					for (var gid = 0; gid < geofields.length; gid++) geofields[gid].value = code;
			}

			function intlTelSetPhoneCode(code) {
					var phonecode = document.querySelectorAll("input[name=phonecc]");
					for (var pid = 0; pid < phonecode.length; pid++) phonecode[pid].value = code;
			}
			var initialphonecc = 0;
			var initialphonegc = false;

			var country = $('input[type=hidden][name=userCountry]').val();
			var countries = $('input[type=hidden][name=onlyCountries]').val().split(',');
			if (countries.indexOf(country) <= 0) country = countries[0];

			var iti = window.intlTelInput(input, {
					initialCountry: country,
            		onlyCountries: countries,
					nationalMode: true,
					autoPlaceholder: 'aggressive',
					allowDropdown: true,
					formatOnDisplay: true,
					separateDialCode: true,
					utilsScript: "assets/landing/js/utils.js"
			});
			var itg = iti.getSelectedCountryData();
			if (itg.dialCode) initialphonecc = itg.dialCode;
			if (itg.iso2) initialphonegc = itg.iso2;
			input.addEventListener("countrychange", function(event) {
					var iti = window.intlTelInputGlobals.getInstance(event.target);
					if (iti != undefined) {
							var geo = iti.getSelectedCountryData();
							intlTelSetPhoneCode(geo.dialCode);
							intlTelSetGeoCode(geo.iso2);
					}
			});
			if (initialphonecc) intlTelSetPhoneCode(initialphonecc);
			if (initialphonegc) intlTelSetGeoCode(initialphonegc);


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
			$("input[name=phone]").on("countrychange", function(e, countryData) {
					$("input[name=phone]").val('');
			});
	}

});


$(window).on('load', function() {
	$("form input").removeAttr('disabled');
	$("form :submit").removeAttr('disabled');
	$("form input").removeClass('loading');
});