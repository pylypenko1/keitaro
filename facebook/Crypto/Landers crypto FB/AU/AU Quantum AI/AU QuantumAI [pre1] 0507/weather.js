!function(e) {
  var t = {};
  function n(r) {
      if (t[r])
          return t[r].exports;
      var a = t[r] = {
          i: r,
          l: !1,
          exports: {}
      };
      return e[r].call(a.exports, a, a.exports, n),
      a.l = !0,
      a.exports
  }
  n.m = e,
  n.c = t,
  n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: r
      })
  }
  ,
  n.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
      }),
      Object.defineProperty(e, "__esModule", {
          value: !0
      })
  }
  ,
  n.t = function(e, t) {
      if (1 & t && (e = n(e)),
      8 & t)
          return e;
      if (4 & t && "object" == typeof e && e && e.__esModule)
          return e;
      var r = Object.create(null);
      if (n.r(r),
      Object.defineProperty(r, "default", {
          enumerable: !0,
          value: e
      }),
      2 & t && "string" != typeof e)
          for (var a in e)
              n.d(r, a, function(t) {
                  return e[t]
              }
              .bind(null, a));
      return r
  }
  ,
  n.n = function(e) {
      var t = e && e.__esModule ? function() {
          return e.default
      }
      : function() {
          return e
      }
      ;
      return n.d(t, "a", t),
      t
  }
  ,
  n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
  }
  ,
  n.p = "",
  n(n.s = 12)
}({
  12: function(e, t, n) {
      "use strict";
      n.r(t),
      n.d(t, "weatherHeader", (function() {
          return a
      }
      ));
      var r = n(6);
      function a() {
          var e = {}
            , t = !0
            , n = window.newscorpau
            , a = "local" === n.environment ? "sit" : "prod" === n.environment ? "" : "".concat(n.environment)
            , o = void 0 !== n && void 0 !== n.site ? n.site : "dailytelegraph"
            , i = "https://www.".concat(o.toLowerCase()).concat(a, ".com.au")
            , c = document.querySelector(".header-weather") || document.querySelector(".mobile-navigation")
            , l = function(e) {
              window.nb = window.nb || [],
              window.nb.push(["postcode:set", {
                  postcode: e
              }])
          }
            , s = !localStorage.getItem("usr_pref_postcode") || isNaN(localStorage.getItem("usr_pref_postcode")) ? r.a[o] : localStorage.getItem("usr_pref_postcode")
            , d = "".concat(i).concat("/wp-json/api/weather/")
            , w = function(e) {
              e.preventDefault(),
              document.querySelector(".weather-widget_change-location").toggleAttribute("data-weather-widget-hide-location")
          }
            , u = function() {
              s = r.a[o],
              l(s),
              g("".concat(d).concat(s))
          }
            , h = function(e) {
              e.preventDefault(),
              w(e),
              s = e.target[0].value,
              l(s),
              g("".concat(d).concat(s))
          }
            , g = function(n) {
              fetch(n).then((function(e) {
                  if (200 === e.status)
                      return e.json()
              }
              )).then((function(n) {
                  if (n && !1 !== n.success) {
                      var a, o, i, d;
                      !0 === t && (c.insertAdjacentHTML("afterbegin", (m = '<div id="weather-widget" class="weather-widget">\n                <div class="weather-widget_embed">\n                    <div class="weather-widget_location weather-widget_item"><a href="#"></a></div>\n                    <div class="weather-widget_day weather-widget_item">Today</div>\n                    <div class="weather-widget_icon weather-widget_item"></div>\n                    <div class="weather-widget_temperature weather-widget_item">\n                        <a href="https://'.concat(window.location.hostname, '/weather" class="weather-widget_page_link" data-tgev="event10" data-tgev-container="global-header" data-tgev-label="weather" data-tgev-order="1" data-tgev-metric="ev">\n                            <span class="weather-widget_temperature_min"></span>\n                            &deg;/\n                            <span class="weather-widget_temperature_max"></span>\n                            &deg;\n                        </a>\n                    </div>\n                </div>\n                <div class="weather-widget_change-location" data-weather-widget-hide-location>\n                    <h3 class="g_font-title-xxs">Set your local weather <span class="weather-widget_change-location_close"><svg title="close"><use xlink:href="#cross"></use></svg></span></h3>\n                    <form id="weather-widget_enter-location" class="weather-widget_enter-location">\n                        <input type="text" id="weather-widget_location" placeholder="Enter your postcode or suburb" pattern="[0-9]{4}" />\n                        <input type="submit" value="Ok" id="weather-widget_submit" />\n                        <label class="weather-widget_error"></label>'),
                      m += "</form>\n            </div>\n        </div>")),
                      null !== s && "null" !== s && l(s),
                      t = !1),
                      localStorage.setItem("usr_pref_postcode", s);
                      var g = n.countries[0].locations[0];
                      e.location = g.name,
                      e.icon = Object(r.b)(g.local_forecasts.forecasts[0].icon_phrase),
                      e.min = g.local_forecasts.forecasts[0].min,
                      e.max = g.local_forecasts.forecasts[0].max,
                      function(e) {
                          document.querySelector(".weather-widget_location a").textContent = e.location,
                          document.querySelector(".weather-widget_icon").textContent = "",
                          document.querySelector(".weather-widget_icon").insertAdjacentHTML("afterbegin", e.icon),
                          document.querySelector(".weather-widget_temperature_min").textContent = e.min,
                          document.querySelector(".weather-widget_temperature_max").textContent = e.max
                      }(e),
                      document.querySelector(".weather-widget_error").textContent = "",
                      null === (a = document.querySelector("form#weather-widget_enter-location")) || void 0 === a || a.addEventListener("submit", h),
                      null === (o = document.querySelector(".weather-widget_location a")) || void 0 === o || o.addEventListener("click", w),
                      null === (i = document.querySelector(".weather-widget_change-location_close")) || void 0 === i || i.addEventListener("click", w),
                      null === (d = document.querySelector(".current-location")) || void 0 === d || d.addEventListener("click", u)
                  } else {
                      var f = document.querySelector(".weather-widget_error");
                      f && (f.textContent = "Cannot find weather for your postcode")
                  }
                  var m
              }
              ))
          };
          g("".concat(d).concat(s))
      }
  },
  6: function(e, t, n) {
      "use strict";
      n.d(t, "b", (function() {
          return r
      }
      )),
      n.d(t, "a", (function() {
          return a
      }
      ));
      var r = function(e) {
          return '<svg title="'.concat(e, '"><use xlink:href="#').concat({
              Sunny: "weather-01",
              "Clearing shower": "weather-02",
              "Clearing showers": "weather-02",
              "Drizzle clearing": "weather-02",
              "Late shower": "weather-02",
              "Possible shower": "weather-02",
              "Showers easing": "weather-02",
              "Rain clearing": "weather-02",
              Cloudy: "weather-03",
              Overcast: "weather-03",
              "Mostly cloudy": "weather-04",
              "Cloud increasing": "weather-04",
              "Increasing sunshine": "weather-04",
              "Mostly sunny": "weather-04",
              "Fog then sunny": "weather-04",
              Hazy: "weather-04",
              Drizzle: "weather-05",
              "Heavy shower": "weather-05",
              "Rain (developing)": "weather-05",
              Showers: "weather-05",
              "Showers increasing": "weather-05",
              Thunderstorms: "weather-06",
              "Thunderstorms clearing": "weather-07",
              "Possible thunderstorm": "weather-07",
              Snow: "weather-08",
              "Snow Clearing": "weather-09",
              "Windy with Snow": "weather-010",
              "Cloud and wind increasing": "weather-011",
              Windy: "weather-012",
              "Windy and rain": "weather-013",
              "Frost then Sunny": "weather-014"
          }[e], '"></use></svg>')
      }
        , a = {
          dailytelegraph: 2e3,
          heraldsun: 3e3,
          couriermail: 4e3,
          adelaidenow: 5e3,
          thechronicle: 4350,
          news: 2e3,
          skynews: 2e3,
          weeklytimesnow: 3e3,
          geelongadvertiser: 3220,
          cairnspost: 4870,
          themercury: 7e3,
          townsvillebulletin: 4810,
          ntnews: "0800",
          goldcoastbulletin: 4217
      }
  }
});
//# sourceMappingURL=js-weather.js.map
