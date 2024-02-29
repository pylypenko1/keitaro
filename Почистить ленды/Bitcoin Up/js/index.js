$(function () {
  !(function t() {
    let n = $(".countdown-span"),
      e = n.text().split(":"),
      o = parseInt(e[0]),
      i = parseInt(e[1]);
    if (0 !== o || 0 !== i) {
      if ((0 === i ? (o--, (i = 59)) : i--, 0 === Math.floor(i / 10))) {
        let t = "0" + o.toString() + ":0" + i.toString();
        n.text(t);
      } else {
        let t = "0" + o.toString() + ":" + i.toString();
        n.text(t);
      }
      setTimeout(function () {
        t();
      }, 1e3);
    }
  })(),
    (function t() {
      let n = $(".countdown-span1"),
        e = n.text().split(":"),
        o = parseInt(e[0]),
        i = parseInt(e[1]);
      if (0 !== o || 0 !== i) {
        if ((0 === i ? (o--, (i = 59)) : i--, 0 === Math.floor(i / 10))) {
          let t = "0" + o.toString() + ":0" + i.toString();
          n.text(t);
        } else {
          let t = "0" + o.toString() + ":" + i.toString();
          n.text(t);
        }
        setTimeout(function () {
          t();
        }, 1e3);
      }
    })();
});
