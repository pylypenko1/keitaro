function getCookie(name) {
    var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    var value = v ? v[2] : null;
    return value && value !== "undefined" ? value : null;
}

function setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}

function getSubId() {
    var params = new URLSearchParams(document.location.search.substr(1));
    if (!"{subid}".match("{")) {
        return "{subid}";
    }
    var clientSubid = '<?php echo isset($client) ? $client->getSubid() : "" ?>';
    if (clientSubid && !clientSubid.match(">")) {
        return clientSubid;
    }
    if (params.get("_subid")) {
        return params.get("_subid");
    }
    if (params.get("subid")) {
        return params.get("subid");
    }
    if (getCookie("subid")) {
        return getCookie("subid");
    }
    if (getCookie("_subid")) {
        return getCookie("_subid");
    }
}

function getToken() {
    var params = new URLSearchParams(document.location.search.substr(1));
    if (!"{token}".match("{")) {
        return "{token}";
    }
    var clientToken = '<?php echo isset($client) ? $client->getToken() : "" ?>';
    if (clientToken && !clientToken.match(">")) {
        return clientToken;
    }
    if (params.get("_token")) {
        return params.get("_token");
    }
    if (params.get("token")) {
        return params.get("token");
    }
    if (getCookie("token")) {
        return getCookie("token");
    }
    return null;
}

function getPixel() {
    var params = new URLSearchParams(document.location.search.substr(1));
    if (!"{idpxl}".match("{")) {
        return "{idpxl}";
    }
    if (params.get("idpxl")) {
        return params.get("idpxl");
    }

    if (getCookie("idpxl")) {
        return getCookie("idpxl");
    }

    return null;
}

if (typeof URLSearchParams === "function") {
    document.addEventListener("DOMContentLoaded", function (event) {
        var params = new URLSearchParams(document.location.search.substr(1));
        var subid = getSubId();
        var token = getToken();
        var idpxl = getPixel();

        params.set("_token", token);
        setCookie("idpxl", idpxl);
        setCookie("token", token);
        setCookie("subid", subid);

        var SUBID_TEMPLATE_NAME = "subid";
        var TOKEN_TEMPLATE_NAME = "token";
        var PIXEL_TEMPLATE_NAME = "idpxl";

        // Replace placeholders to actual values for input[hidden] fields
        var subIdRegExp = new RegExp(`\{${SUBID_TEMPLATE_NAME}\}`, "g");
        var tokenRegExp = new RegExp(`\{${TOKEN_TEMPLATE_NAME}\}`, "g");
        var pixelRegExp = new RegExp(`\{${PIXEL_TEMPLATE_NAME}\}`, "g");

        document
            .querySelectorAll('input[type="hidden"]')
            .forEach(function (input) {
                if (subIdRegExp.test(input.value)) {
                    input.value = input.value.replaceAll(subIdRegExp, subid);
                }
                if (tokenRegExp.test(input.value)) {
                    input.value = input.value.replaceAll(tokenRegExp, token);
                }
                if (pixelRegExp.test(input.value)) {
                    input.value = input.value.replaceAll(pixelRegExp, idpxl);
                }
            });

        // Adds params as hidden inputs to the forms
        document.querySelectorAll("form").forEach(function (form) {
            params.forEach(function (v, k) {
                var input = document.createElement("input");
                input.type = "hidden";
                input.name = k;
                input.value = v;

                form.append(input);
            });
        });
    });
}