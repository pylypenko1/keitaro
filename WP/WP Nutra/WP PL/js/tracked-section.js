(function () {
  function f(a) {
    this.sectionName = a;
    this.intervalId = this.time = this.counter = 0
  }

  var g = function () {
    var a = window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight || 0;
    this.state = {};
    this.windowHeight = parseInt(a, 10)
  };
  g.prototype.addToState = function (a) {
    this.state = this.state || {};
    this.state[a.name] = a
  };
  g.prototype.setStateProp = function (a, b, d) {
    this.state || (this.state = this.state || {}, this.state[a.name] = a);
    this.state[a.name].state[b] = d
  };
  f.prototype.start = function () {
    this.counter++;
    var a = this;
    this.intervalId = setInterval(function () {
      a.time++
    }, 1E3)
  };
  f.prototype.stop = function () {
    clearInterval(this.intervalId);
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      event: "tracked-section",
      section: this.sectionName,
      timeInterval: this.time,
      counter: this.counter
    });
    this.time = 0
  };
  (function () {
    function a() {
      if (0 !== Object.keys(b.state).length) for (var a in b.state) {
        var c = b.state[a].domElement.getBoundingClientRect();
        c = c.top <= b.windowHeight / 2 && 0 <= c.top ||
        c.bottom >= b.windowHeight / 2 && c.bottom <= b.windowHeight || 0 >= c.top && c.bottom >= b.windowHeight ? !0 : !1;
        c && !b.state[a].state.timer ? (b.state[a].timer.start(), b.setStateProp(b.state[a], "timer", !0)) : !c && b.state[a].state.timer && (b.state[a].timer.stop(), b.setStateProp(b.state[a], "timer", !1))
      }
    }

    var b = new g, d = document.querySelectorAll("[data-scroll]"), h = d.length, k, l = function () {
      clearTimeout(k);
      k = setTimeout(a, 1E3)
    };
    if (0 != h) {
      for (var e = 0; e < h; e++) b.addToState({
        name: d[e].getAttribute("data-scroll"), stateType: "analytics",
        timer: new f(d[e].getAttribute("data-scroll")), domElement: d[e], state: {active: !1, timer: !1}
      });
      document.addEventListener("scroll", l, !1)
    }
  })()
})();