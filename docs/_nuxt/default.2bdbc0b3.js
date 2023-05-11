import { _ as ni } from "./nuxt-link.04970ece.js";
import {
  m as oi,
  G as ai,
  o as je,
  c as si,
  a as A,
  n as ye,
  b as tt,
  w as et,
  d as $,
  i as R,
  H as li,
} from "./entry.bb92b787.js";
var ci = (function () {
    function i(t, e) {
      e === void 0 && (e = []), (this._eventType = t), (this._eventFunctions = e);
    }
    return (
      (i.prototype.init = function () {
        var t = this;
        this._eventFunctions.forEach(function (e) {
          typeof window < "u" && window.addEventListener(t._eventType, e);
        });
      }),
      i
    );
  })(),
  Ht =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Ht =
          Object.assign ||
          function (i) {
            for (var t, e = 1, r = arguments.length; e < r; e++) {
              t = arguments[e];
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
            }
            return i;
          }),
        Ht.apply(this, arguments)
      );
    },
  qt = {
    alwaysOpen: !1,
    activeClasses: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
    inactiveClasses: "text-gray-500 dark:text-gray-400",
    onOpen: function () {},
    onClose: function () {},
    onToggle: function () {},
  },
  De = (function () {
    function i(t, e) {
      t === void 0 && (t = []),
        e === void 0 && (e = qt),
        (this._items = t),
        (this._options = Ht(Ht({}, qt), e)),
        this._init();
    }
    return (
      (i.prototype._init = function () {
        var t = this;
        this._items.length &&
          this._items.map(function (e) {
            e.active && t.open(e.id),
              e.triggerEl.addEventListener("click", function () {
                t.toggle(e.id);
              });
          });
      }),
      (i.prototype.getItem = function (t) {
        return this._items.filter(function (e) {
          return e.id === t;
        })[0];
      }),
      (i.prototype.open = function (t) {
        var e,
          r,
          n = this,
          o = this.getItem(t);
        this._options.alwaysOpen ||
          this._items.map(function (a) {
            var s, l;
            a !== o &&
              ((s = a.triggerEl.classList).remove.apply(s, n._options.activeClasses.split(" ")),
              (l = a.triggerEl.classList).add.apply(l, n._options.inactiveClasses.split(" ")),
              a.targetEl.classList.add("hidden"),
              a.triggerEl.setAttribute("aria-expanded", "false"),
              (a.active = !1),
              a.iconEl && a.iconEl.classList.remove("rotate-180"));
          }),
          (e = o.triggerEl.classList).add.apply(e, this._options.activeClasses.split(" ")),
          (r = o.triggerEl.classList).remove.apply(r, this._options.inactiveClasses.split(" ")),
          o.triggerEl.setAttribute("aria-expanded", "true"),
          o.targetEl.classList.remove("hidden"),
          (o.active = !0),
          o.iconEl && o.iconEl.classList.add("rotate-180"),
          this._options.onOpen(this, o);
      }),
      (i.prototype.toggle = function (t) {
        var e = this.getItem(t);
        e.active ? this.close(t) : this.open(t), this._options.onToggle(this, e);
      }),
      (i.prototype.close = function (t) {
        var e,
          r,
          n = this.getItem(t);
        (e = n.triggerEl.classList).remove.apply(e, this._options.activeClasses.split(" ")),
          (r = n.triggerEl.classList).add.apply(r, this._options.inactiveClasses.split(" ")),
          n.targetEl.classList.add("hidden"),
          n.triggerEl.setAttribute("aria-expanded", "false"),
          (n.active = !1),
          n.iconEl && n.iconEl.classList.remove("rotate-180"),
          this._options.onClose(this, n);
      }),
      i
    );
  })();
typeof window < "u" && (window.Accordion = De);
function di() {
  document.querySelectorAll("[data-accordion]").forEach(function (i) {
    var t = i.getAttribute("data-accordion"),
      e = i.getAttribute("data-active-classes"),
      r = i.getAttribute("data-inactive-classes"),
      n = [];
    i.querySelectorAll("[data-accordion-target]").forEach(function (o) {
      var a = {
        id: o.getAttribute("data-accordion-target"),
        triggerEl: o,
        targetEl: document.querySelector(o.getAttribute("data-accordion-target")),
        iconEl: o.querySelector("[data-accordion-icon]"),
        active: o.getAttribute("aria-expanded") === "true",
      };
      n.push(a);
    }),
      new De(n, {
        alwaysOpen: t === "open",
        activeClasses: e || qt.activeClasses,
        inactiveClasses: r || qt.inactiveClasses,
      });
  });
}
var Mt =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Mt =
          Object.assign ||
          function (i) {
            for (var t, e = 1, r = arguments.length; e < r; e++) {
              t = arguments[e];
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
            }
            return i;
          }),
        Mt.apply(this, arguments)
      );
    },
  be = { onCollapse: function () {}, onExpand: function () {}, onToggle: function () {} },
  Ie = (function () {
    function i(t, e, r) {
      t === void 0 && (t = null),
        e === void 0 && (e = null),
        r === void 0 && (r = be),
        (this._targetEl = t),
        (this._triggerEl = e),
        (this._options = Mt(Mt({}, be), r)),
        (this._visible = !1),
        this._init();
    }
    return (
      (i.prototype._init = function () {
        var t = this;
        this._triggerEl &&
          (this._triggerEl.hasAttribute("aria-expanded")
            ? (this._visible = this._triggerEl.getAttribute("aria-expanded") === "true")
            : (this._visible = !this._targetEl.classList.contains("hidden")),
          this._triggerEl.addEventListener("click", function () {
            t.toggle();
          }));
      }),
      (i.prototype.collapse = function () {
        this._targetEl.classList.add("hidden"),
          this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "false"),
          (this._visible = !1),
          this._options.onCollapse(this);
      }),
      (i.prototype.expand = function () {
        this._targetEl.classList.remove("hidden"),
          this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "true"),
          (this._visible = !0),
          this._options.onExpand(this);
      }),
      (i.prototype.toggle = function () {
        this._visible ? this.collapse() : this.expand(), this._options.onToggle(this);
      }),
      i
    );
  })();
typeof window < "u" && (window.Collapse = Ie);
function ui() {
  document.querySelectorAll("[data-collapse-toggle]").forEach(function (i) {
    var t = i.getAttribute("data-collapse-toggle"),
      e = document.getElementById(t);
    e
      ? new Ie(e, i)
      : console.error(
          'The target element with id "'.concat(t, '" does not exist. Please check the data-collapse-toggle attribute.')
        );
  });
}
var it =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (it =
          Object.assign ||
          function (i) {
            for (var t, e = 1, r = arguments.length; e < r; e++) {
              t = arguments[e];
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
            }
            return i;
          }),
        it.apply(this, arguments)
      );
    },
  St = {
    defaultPosition: 0,
    indicators: {
      items: [],
      activeClasses: "bg-white dark:bg-gray-800",
      inactiveClasses: "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
    },
    interval: 3e3,
    onNext: function () {},
    onPrev: function () {},
    onChange: function () {},
  },
  Se = (function () {
    function i(t, e) {
      t === void 0 && (t = []),
        e === void 0 && (e = St),
        (this._items = t),
        (this._options = it(it(it({}, St), e), { indicators: it(it({}, St.indicators), e.indicators) })),
        (this._activeItem = this.getItem(this._options.defaultPosition)),
        (this._indicators = this._options.indicators.items),
        (this._intervalDuration = this._options.interval),
        (this._intervalInstance = null),
        this._init();
    }
    return (
      (i.prototype._init = function () {
        var t = this;
        this._items.map(function (e) {
          e.el.classList.add("absolute", "inset-0", "transition-transform", "transform");
        }),
          this._getActiveItem() ? this.slideTo(this._getActiveItem().position) : this.slideTo(0),
          this._indicators.map(function (e, r) {
            e.el.addEventListener("click", function () {
              t.slideTo(r);
            });
          });
      }),
      (i.prototype.getItem = function (t) {
        return this._items[t];
      }),
      (i.prototype.slideTo = function (t) {
        var e = this._items[t],
          r = {
            left: e.position === 0 ? this._items[this._items.length - 1] : this._items[e.position - 1],
            middle: e,
            right: e.position === this._items.length - 1 ? this._items[0] : this._items[e.position + 1],
          };
        this._rotate(r),
          this._setActiveItem(e),
          this._intervalInstance && (this.pause(), this.cycle()),
          this._options.onChange(this);
      }),
      (i.prototype.next = function () {
        var t = this._getActiveItem(),
          e = null;
        t.position === this._items.length - 1 ? (e = this._items[0]) : (e = this._items[t.position + 1]),
          this.slideTo(e.position),
          this._options.onNext(this);
      }),
      (i.prototype.prev = function () {
        var t = this._getActiveItem(),
          e = null;
        t.position === 0 ? (e = this._items[this._items.length - 1]) : (e = this._items[t.position - 1]),
          this.slideTo(e.position),
          this._options.onPrev(this);
      }),
      (i.prototype._rotate = function (t) {
        this._items.map(function (e) {
          e.el.classList.add("hidden");
        }),
          t.left.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-20"),
          t.left.el.classList.add("-translate-x-full", "z-10"),
          t.middle.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-10"),
          t.middle.el.classList.add("translate-x-0", "z-20"),
          t.right.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-20"),
          t.right.el.classList.add("translate-x-full", "z-10");
      }),
      (i.prototype.cycle = function () {
        var t = this;
        typeof window < "u" &&
          (this._intervalInstance = window.setInterval(function () {
            t.next();
          }, this._intervalDuration));
      }),
      (i.prototype.pause = function () {
        clearInterval(this._intervalInstance);
      }),
      (i.prototype._getActiveItem = function () {
        return this._activeItem;
      }),
      (i.prototype._setActiveItem = function (t) {
        var e,
          r,
          n = this;
        this._activeItem = t;
        var o = t.position;
        this._indicators.length &&
          (this._indicators.map(function (a) {
            var s, l;
            a.el.setAttribute("aria-current", "false"),
              (s = a.el.classList).remove.apply(s, n._options.indicators.activeClasses.split(" ")),
              (l = a.el.classList).add.apply(l, n._options.indicators.inactiveClasses.split(" "));
          }),
          (e = this._indicators[o].el.classList).add.apply(e, this._options.indicators.activeClasses.split(" ")),
          (r = this._indicators[o].el.classList).remove.apply(r, this._options.indicators.inactiveClasses.split(" ")),
          this._indicators[o].el.setAttribute("aria-current", "true"));
      }),
      i
    );
  })();
typeof window < "u" && (window.Carousel = Se);
function fi() {
  document.querySelectorAll("[data-carousel]").forEach(function (i) {
    var t = i.getAttribute("data-carousel-interval"),
      e = i.getAttribute("data-carousel") === "slide",
      r = [],
      n = 0;
    i.querySelectorAll("[data-carousel-item]").length &&
      Array.from(i.querySelectorAll("[data-carousel-item]")).map(function (d, c) {
        r.push({ position: c, el: d }), d.getAttribute("data-carousel-item") === "active" && (n = c);
      });
    var o = [];
    i.querySelectorAll("[data-carousel-slide-to]").length &&
      Array.from(i.querySelectorAll("[data-carousel-slide-to]")).map(function (d) {
        o.push({ position: parseInt(d.getAttribute("data-carousel-slide-to")), el: d });
      });
    var a = new Se(r, { defaultPosition: n, indicators: { items: o }, interval: t || St.interval });
    e && a.cycle();
    var s = i.querySelector("[data-carousel-next]"),
      l = i.querySelector("[data-carousel-prev]");
    s &&
      s.addEventListener("click", function () {
        a.next();
      }),
      l &&
        l.addEventListener("click", function () {
          a.prev();
        });
  });
}
var Rt =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Rt =
          Object.assign ||
          function (i) {
            for (var t, e = 1, r = arguments.length; e < r; e++) {
              t = arguments[e];
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
            }
            return i;
          }),
        Rt.apply(this, arguments)
      );
    },
  _e = { transition: "transition-opacity", duration: 300, timing: "ease-out", onHide: function () {} },
  Be = (function () {
    function i(t, e, r) {
      t === void 0 && (t = null),
        e === void 0 && (e = null),
        r === void 0 && (r = _e),
        (this._targetEl = t),
        (this._triggerEl = e),
        (this._options = Rt(Rt({}, _e), r)),
        this._init();
    }
    return (
      (i.prototype._init = function () {
        var t = this;
        this._triggerEl &&
          this._triggerEl.addEventListener("click", function () {
            t.hide();
          });
      }),
      (i.prototype.hide = function () {
        var t = this;
        this._targetEl.classList.add(
          this._options.transition,
          "duration-".concat(this._options.duration),
          this._options.timing,
          "opacity-0"
        ),
          setTimeout(function () {
            t._targetEl.classList.add("hidden");
          }, this._options.duration),
          this._options.onHide(this, this._targetEl);
      }),
      i
    );
  })();
typeof window < "u" && (window.Dismiss = Be);
function pi() {
  document.querySelectorAll("[data-dismiss-target]").forEach(function (i) {
    var t = i.getAttribute("data-dismiss-target"),
      e = document.querySelector(t);
    e
      ? new Be(e, i)
      : console.error(
          'The dismiss element with id "'.concat(t, '" does not exist. Please check the data-dismiss-target attribute.')
        );
  });
}
var P = "top",
  B = "bottom",
  H = "right",
  j = "left",
  ee = "auto",
  wt = [P, B, H, j],
  ct = "start",
  bt = "end",
  hi = "clippingParents",
  He = "viewport",
  vt = "popper",
  vi = "reference",
  we = wt.reduce(function (i, t) {
    return i.concat([t + "-" + ct, t + "-" + bt]);
  }, []),
  qe = [].concat(wt, [ee]).reduce(function (i, t) {
    return i.concat([t, t + "-" + ct, t + "-" + bt]);
  }, []),
  gi = "beforeRead",
  mi = "read",
  yi = "afterRead",
  bi = "beforeMain",
  _i = "main",
  wi = "afterMain",
  Ei = "beforeWrite",
  xi = "write",
  ki = "afterWrite",
  Li = [gi, mi, yi, bi, _i, wi, Ei, xi, ki];
function z(i) {
  return i ? (i.nodeName || "").toLowerCase() : null;
}
function I(i) {
  if (i == null) return window;
  if (i.toString() !== "[object Window]") {
    var t = i.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return i;
}
function at(i) {
  var t = I(i).Element;
  return i instanceof t || i instanceof Element;
}
function S(i) {
  var t = I(i).HTMLElement;
  return i instanceof t || i instanceof HTMLElement;
}
function ie(i) {
  if (typeof ShadowRoot > "u") return !1;
  var t = I(i).ShadowRoot;
  return i instanceof t || i instanceof ShadowRoot;
}
function Ai(i) {
  var t = i.state;
  Object.keys(t.elements).forEach(function (e) {
    var r = t.styles[e] || {},
      n = t.attributes[e] || {},
      o = t.elements[e];
    !S(o) ||
      !z(o) ||
      (Object.assign(o.style, r),
      Object.keys(n).forEach(function (a) {
        var s = n[a];
        s === !1 ? o.removeAttribute(a) : o.setAttribute(a, s === !0 ? "" : s);
      }));
  });
}
function Oi(i) {
  var t = i.state,
    e = {
      popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, e.popper),
    (t.styles = e),
    t.elements.arrow && Object.assign(t.elements.arrow.style, e.arrow),
    function () {
      Object.keys(t.elements).forEach(function (r) {
        var n = t.elements[r],
          o = t.attributes[r] || {},
          a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : e[r]),
          s = a.reduce(function (l, d) {
            return (l[d] = ""), l;
          }, {});
        !S(n) ||
          !z(n) ||
          (Object.assign(n.style, s),
          Object.keys(o).forEach(function (l) {
            n.removeAttribute(l);
          }));
      });
    }
  );
}
const Ti = { name: "applyStyles", enabled: !0, phase: "write", fn: Ai, effect: Oi, requires: ["computeStyles"] };
function V(i) {
  return i.split("-")[0];
}
var ot = Math.max,
  Vt = Math.min,
  dt = Math.round;
function Qt() {
  var i = navigator.userAgentData;
  return i != null && i.brands && Array.isArray(i.brands)
    ? i.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Me() {
  return !/^((?!chrome|android).)*safari/i.test(Qt());
}
function ut(i, t, e) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  var r = i.getBoundingClientRect(),
    n = 1,
    o = 1;
  t &&
    S(i) &&
    ((n = (i.offsetWidth > 0 && dt(r.width) / i.offsetWidth) || 1),
    (o = (i.offsetHeight > 0 && dt(r.height) / i.offsetHeight) || 1));
  var a = at(i) ? I(i) : window,
    s = a.visualViewport,
    l = !Me() && e,
    d = (r.left + (l && s ? s.offsetLeft : 0)) / n,
    c = (r.top + (l && s ? s.offsetTop : 0)) / o,
    v = r.width / n,
    y = r.height / o;
  return { width: v, height: y, top: c, right: d + v, bottom: c + y, left: d, x: d, y: c };
}
function re(i) {
  var t = ut(i),
    e = i.offsetWidth,
    r = i.offsetHeight;
  return (
    Math.abs(t.width - e) <= 1 && (e = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: i.offsetLeft, y: i.offsetTop, width: e, height: r }
  );
}
function Re(i, t) {
  var e = t.getRootNode && t.getRootNode();
  if (i.contains(t)) return !0;
  if (e && ie(e)) {
    var r = t;
    do {
      if (r && i.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function W(i) {
  return I(i).getComputedStyle(i);
}
function Ci(i) {
  return ["table", "td", "th"].indexOf(z(i)) >= 0;
}
function K(i) {
  return ((at(i) ? i.ownerDocument : i.document) || window.document).documentElement;
}
function Xt(i) {
  return z(i) === "html" ? i : i.assignedSlot || i.parentNode || (ie(i) ? i.host : null) || K(i);
}
function Ee(i) {
  return !S(i) || W(i).position === "fixed" ? null : i.offsetParent;
}
function Pi(i) {
  var t = /firefox/i.test(Qt()),
    e = /Trident/i.test(Qt());
  if (e && S(i)) {
    var r = W(i);
    if (r.position === "fixed") return null;
  }
  var n = Xt(i);
  for (ie(n) && (n = n.host); S(n) && ["html", "body"].indexOf(z(n)) < 0; ) {
    var o = W(n);
    if (
      o.transform !== "none" ||
      o.perspective !== "none" ||
      o.contain === "paint" ||
      ["transform", "perspective"].indexOf(o.willChange) !== -1 ||
      (t && o.willChange === "filter") ||
      (t && o.filter && o.filter !== "none")
    )
      return n;
    n = n.parentNode;
  }
  return null;
}
function Et(i) {
  for (var t = I(i), e = Ee(i); e && Ci(e) && W(e).position === "static"; ) e = Ee(e);
  return e && (z(e) === "html" || (z(e) === "body" && W(e).position === "static")) ? t : e || Pi(i) || t;
}
function ne(i) {
  return ["top", "bottom"].indexOf(i) >= 0 ? "x" : "y";
}
function gt(i, t, e) {
  return ot(i, Vt(t, e));
}
function ji(i, t, e) {
  var r = gt(i, t, e);
  return r > e ? e : r;
}
function Ve() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ze(i) {
  return Object.assign({}, Ve(), i);
}
function We(i, t) {
  return t.reduce(function (e, r) {
    return (e[r] = i), e;
  }, {});
}
var Di = function (t, e) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, e.rects, { placement: e.placement })) : t),
    ze(typeof t != "number" ? t : We(t, wt))
  );
};
function Ii(i) {
  var t,
    e = i.state,
    r = i.name,
    n = i.options,
    o = e.elements.arrow,
    a = e.modifiersData.popperOffsets,
    s = V(e.placement),
    l = ne(s),
    d = [j, H].indexOf(s) >= 0,
    c = d ? "height" : "width";
  if (!(!o || !a)) {
    var v = Di(n.padding, e),
      y = re(o),
      u = l === "y" ? P : j,
      _ = l === "y" ? B : H,
      h = e.rects.reference[c] + e.rects.reference[l] - a[l] - e.rects.popper[c],
      p = a[l] - e.rects.reference[l],
      b = Et(o),
      E = b ? (l === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      x = h / 2 - p / 2,
      f = v[u],
      g = E - y[c] - v[_],
      m = E / 2 - y[c] / 2 + x,
      w = gt(f, m, g),
      O = l;
    e.modifiersData[r] = ((t = {}), (t[O] = w), (t.centerOffset = w - m), t);
  }
}
function Si(i) {
  var t = i.state,
    e = i.options,
    r = e.element,
    n = r === void 0 ? "[data-popper-arrow]" : r;
  n != null &&
    ((typeof n == "string" && ((n = t.elements.popper.querySelector(n)), !n)) ||
      (Re(t.elements.popper, n) && (t.elements.arrow = n)));
}
const Bi = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Ii,
  effect: Si,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function ft(i) {
  return i.split("-")[1];
}
var Hi = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function qi(i, t) {
  var e = i.x,
    r = i.y,
    n = t.devicePixelRatio || 1;
  return { x: dt(e * n) / n || 0, y: dt(r * n) / n || 0 };
}
function xe(i) {
  var t,
    e = i.popper,
    r = i.popperRect,
    n = i.placement,
    o = i.variation,
    a = i.offsets,
    s = i.position,
    l = i.gpuAcceleration,
    d = i.adaptive,
    c = i.roundOffsets,
    v = i.isFixed,
    y = a.x,
    u = y === void 0 ? 0 : y,
    _ = a.y,
    h = _ === void 0 ? 0 : _,
    p = typeof c == "function" ? c({ x: u, y: h }) : { x: u, y: h };
  (u = p.x), (h = p.y);
  var b = a.hasOwnProperty("x"),
    E = a.hasOwnProperty("y"),
    x = j,
    f = P,
    g = window;
  if (d) {
    var m = Et(e),
      w = "clientHeight",
      O = "clientWidth";
    if (
      (m === I(e) &&
        ((m = K(e)), W(m).position !== "static" && s === "absolute" && ((w = "scrollHeight"), (O = "scrollWidth"))),
      (m = m),
      n === P || ((n === j || n === H) && o === bt))
    ) {
      f = B;
      var L = v && m === g && g.visualViewport ? g.visualViewport.height : m[w];
      (h -= L - r.height), (h *= l ? 1 : -1);
    }
    if (n === j || ((n === P || n === B) && o === bt)) {
      x = H;
      var k = v && m === g && g.visualViewport ? g.visualViewport.width : m[O];
      (u -= k - r.width), (u *= l ? 1 : -1);
    }
  }
  var T = Object.assign({ position: s }, d && Hi),
    q = c === !0 ? qi({ x: u, y: h }, I(e)) : { x: u, y: h };
  if (((u = q.x), (h = q.y), l)) {
    var C;
    return Object.assign(
      {},
      T,
      ((C = {}),
      (C[f] = E ? "0" : ""),
      (C[x] = b ? "0" : ""),
      (C.transform =
        (g.devicePixelRatio || 1) <= 1
          ? "translate(" + u + "px, " + h + "px)"
          : "translate3d(" + u + "px, " + h + "px, 0)"),
      C)
    );
  }
  return Object.assign(
    {},
    T,
    ((t = {}), (t[f] = E ? h + "px" : ""), (t[x] = b ? u + "px" : ""), (t.transform = ""), t)
  );
}
function Mi(i) {
  var t = i.state,
    e = i.options,
    r = e.gpuAcceleration,
    n = r === void 0 ? !0 : r,
    o = e.adaptive,
    a = o === void 0 ? !0 : o,
    s = e.roundOffsets,
    l = s === void 0 ? !0 : s,
    d = {
      placement: V(t.placement),
      variation: ft(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: n,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      xe(
        Object.assign({}, d, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: a,
          roundOffsets: l,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        xe(
          Object.assign({}, d, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }));
}
const Ri = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Mi, data: {} };
var Tt = { passive: !0 };
function Vi(i) {
  var t = i.state,
    e = i.instance,
    r = i.options,
    n = r.scroll,
    o = n === void 0 ? !0 : n,
    a = r.resize,
    s = a === void 0 ? !0 : a,
    l = I(t.elements.popper),
    d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    o &&
      d.forEach(function (c) {
        c.addEventListener("scroll", e.update, Tt);
      }),
    s && l.addEventListener("resize", e.update, Tt),
    function () {
      o &&
        d.forEach(function (c) {
          c.removeEventListener("scroll", e.update, Tt);
        }),
        s && l.removeEventListener("resize", e.update, Tt);
    }
  );
}
const zi = { name: "eventListeners", enabled: !0, phase: "write", fn: function () {}, effect: Vi, data: {} };
var Wi = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Bt(i) {
  return i.replace(/left|right|bottom|top/g, function (t) {
    return Wi[t];
  });
}
var Ni = { start: "end", end: "start" };
function ke(i) {
  return i.replace(/start|end/g, function (t) {
    return Ni[t];
  });
}
function oe(i) {
  var t = I(i),
    e = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: e, scrollTop: r };
}
function ae(i) {
  return ut(K(i)).left + oe(i).scrollLeft;
}
function $i(i, t) {
  var e = I(i),
    r = K(i),
    n = e.visualViewport,
    o = r.clientWidth,
    a = r.clientHeight,
    s = 0,
    l = 0;
  if (n) {
    (o = n.width), (a = n.height);
    var d = Me();
    (d || (!d && t === "fixed")) && ((s = n.offsetLeft), (l = n.offsetTop));
  }
  return { width: o, height: a, x: s + ae(i), y: l };
}
function Fi(i) {
  var t,
    e = K(i),
    r = oe(i),
    n = (t = i.ownerDocument) == null ? void 0 : t.body,
    o = ot(e.scrollWidth, e.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0),
    a = ot(e.scrollHeight, e.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0),
    s = -r.scrollLeft + ae(i),
    l = -r.scrollTop;
  return (
    W(n || e).direction === "rtl" && (s += ot(e.clientWidth, n ? n.clientWidth : 0) - o),
    { width: o, height: a, x: s, y: l }
  );
}
function se(i) {
  var t = W(i),
    e = t.overflow,
    r = t.overflowX,
    n = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(e + n + r);
}
function Ne(i) {
  return ["html", "body", "#document"].indexOf(z(i)) >= 0 ? i.ownerDocument.body : S(i) && se(i) ? i : Ne(Xt(i));
}
function mt(i, t) {
  var e;
  t === void 0 && (t = []);
  var r = Ne(i),
    n = r === ((e = i.ownerDocument) == null ? void 0 : e.body),
    o = I(r),
    a = n ? [o].concat(o.visualViewport || [], se(r) ? r : []) : r,
    s = t.concat(a);
  return n ? s : s.concat(mt(Xt(a)));
}
function Jt(i) {
  return Object.assign({}, i, { left: i.x, top: i.y, right: i.x + i.width, bottom: i.y + i.height });
}
function Xi(i, t) {
  var e = ut(i, !1, t === "fixed");
  return (
    (e.top = e.top + i.clientTop),
    (e.left = e.left + i.clientLeft),
    (e.bottom = e.top + i.clientHeight),
    (e.right = e.left + i.clientWidth),
    (e.width = i.clientWidth),
    (e.height = i.clientHeight),
    (e.x = e.left),
    (e.y = e.top),
    e
  );
}
function Le(i, t, e) {
  return t === He ? Jt($i(i, e)) : at(t) ? Xi(t, e) : Jt(Fi(K(i)));
}
function Yi(i) {
  var t = mt(Xt(i)),
    e = ["absolute", "fixed"].indexOf(W(i).position) >= 0,
    r = e && S(i) ? Et(i) : i;
  return at(r)
    ? t.filter(function (n) {
        return at(n) && Re(n, r) && z(n) !== "body";
      })
    : [];
}
function Ki(i, t, e, r) {
  var n = t === "clippingParents" ? Yi(i) : [].concat(t),
    o = [].concat(n, [e]),
    a = o[0],
    s = o.reduce(function (l, d) {
      var c = Le(i, d, r);
      return (
        (l.top = ot(c.top, l.top)),
        (l.right = Vt(c.right, l.right)),
        (l.bottom = Vt(c.bottom, l.bottom)),
        (l.left = ot(c.left, l.left)),
        l
      );
    }, Le(i, a, r));
  return (s.width = s.right - s.left), (s.height = s.bottom - s.top), (s.x = s.left), (s.y = s.top), s;
}
function $e(i) {
  var t = i.reference,
    e = i.element,
    r = i.placement,
    n = r ? V(r) : null,
    o = r ? ft(r) : null,
    a = t.x + t.width / 2 - e.width / 2,
    s = t.y + t.height / 2 - e.height / 2,
    l;
  switch (n) {
    case P:
      l = { x: a, y: t.y - e.height };
      break;
    case B:
      l = { x: a, y: t.y + t.height };
      break;
    case H:
      l = { x: t.x + t.width, y: s };
      break;
    case j:
      l = { x: t.x - e.width, y: s };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var d = n ? ne(n) : null;
  if (d != null) {
    var c = d === "y" ? "height" : "width";
    switch (o) {
      case ct:
        l[d] = l[d] - (t[c] / 2 - e[c] / 2);
        break;
      case bt:
        l[d] = l[d] + (t[c] / 2 - e[c] / 2);
        break;
    }
  }
  return l;
}
function _t(i, t) {
  t === void 0 && (t = {});
  var e = t,
    r = e.placement,
    n = r === void 0 ? i.placement : r,
    o = e.strategy,
    a = o === void 0 ? i.strategy : o,
    s = e.boundary,
    l = s === void 0 ? hi : s,
    d = e.rootBoundary,
    c = d === void 0 ? He : d,
    v = e.elementContext,
    y = v === void 0 ? vt : v,
    u = e.altBoundary,
    _ = u === void 0 ? !1 : u,
    h = e.padding,
    p = h === void 0 ? 0 : h,
    b = ze(typeof p != "number" ? p : We(p, wt)),
    E = y === vt ? vi : vt,
    x = i.rects.popper,
    f = i.elements[_ ? E : y],
    g = Ki(at(f) ? f : f.contextElement || K(i.elements.popper), l, c, a),
    m = ut(i.elements.reference),
    w = $e({ reference: m, element: x, strategy: "absolute", placement: n }),
    O = Jt(Object.assign({}, x, w)),
    L = y === vt ? O : m,
    k = {
      top: g.top - L.top + b.top,
      bottom: L.bottom - g.bottom + b.bottom,
      left: g.left - L.left + b.left,
      right: L.right - g.right + b.right,
    },
    T = i.modifiersData.offset;
  if (y === vt && T) {
    var q = T[n];
    Object.keys(k).forEach(function (C) {
      var U = [H, B].indexOf(C) >= 0 ? 1 : -1,
        G = [P, B].indexOf(C) >= 0 ? "y" : "x";
      k[C] += q[G] * U;
    });
  }
  return k;
}
function Ui(i, t) {
  t === void 0 && (t = {});
  var e = t,
    r = e.placement,
    n = e.boundary,
    o = e.rootBoundary,
    a = e.padding,
    s = e.flipVariations,
    l = e.allowedAutoPlacements,
    d = l === void 0 ? qe : l,
    c = ft(r),
    v = c
      ? s
        ? we
        : we.filter(function (_) {
            return ft(_) === c;
          })
      : wt,
    y = v.filter(function (_) {
      return d.indexOf(_) >= 0;
    });
  y.length === 0 && (y = v);
  var u = y.reduce(function (_, h) {
    return (_[h] = _t(i, { placement: h, boundary: n, rootBoundary: o, padding: a })[V(h)]), _;
  }, {});
  return Object.keys(u).sort(function (_, h) {
    return u[_] - u[h];
  });
}
function Gi(i) {
  if (V(i) === ee) return [];
  var t = Bt(i);
  return [ke(i), t, ke(t)];
}
function Qi(i) {
  var t = i.state,
    e = i.options,
    r = i.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var n = e.mainAxis,
        o = n === void 0 ? !0 : n,
        a = e.altAxis,
        s = a === void 0 ? !0 : a,
        l = e.fallbackPlacements,
        d = e.padding,
        c = e.boundary,
        v = e.rootBoundary,
        y = e.altBoundary,
        u = e.flipVariations,
        _ = u === void 0 ? !0 : u,
        h = e.allowedAutoPlacements,
        p = t.options.placement,
        b = V(p),
        E = b === p,
        x = l || (E || !_ ? [Bt(p)] : Gi(p)),
        f = [p].concat(x).reduce(function (st, N) {
          return st.concat(
            V(N) === ee
              ? Ui(t, {
                  placement: N,
                  boundary: c,
                  rootBoundary: v,
                  padding: d,
                  flipVariations: _,
                  allowedAutoPlacements: h,
                })
              : N
          );
        }, []),
        g = t.rects.reference,
        m = t.rects.popper,
        w = new Map(),
        O = !0,
        L = f[0],
        k = 0;
      k < f.length;
      k++
    ) {
      var T = f[k],
        q = V(T),
        C = ft(T) === ct,
        U = [P, B].indexOf(q) >= 0,
        G = U ? "width" : "height",
        D = _t(t, { placement: T, boundary: c, rootBoundary: v, altBoundary: y, padding: d }),
        M = U ? (C ? H : j) : C ? B : P;
      g[G] > m[G] && (M = Bt(M));
      var xt = Bt(M),
        Q = [];
      if (
        (o && Q.push(D[q] <= 0),
        s && Q.push(D[M] <= 0, D[xt] <= 0),
        Q.every(function (st) {
          return st;
        }))
      ) {
        (L = T), (O = !1);
        break;
      }
      w.set(T, Q);
    }
    if (O)
      for (
        var kt = _ ? 3 : 1,
          Yt = function (N) {
            var ht = f.find(function (At) {
              var J = w.get(At);
              if (J)
                return J.slice(0, N).every(function (Kt) {
                  return Kt;
                });
            });
            if (ht) return (L = ht), "break";
          },
          pt = kt;
        pt > 0;
        pt--
      ) {
        var Lt = Yt(pt);
        if (Lt === "break") break;
      }
    t.placement !== L && ((t.modifiersData[r]._skip = !0), (t.placement = L), (t.reset = !0));
  }
}
const Ji = { name: "flip", enabled: !0, phase: "main", fn: Qi, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Ae(i, t, e) {
  return (
    e === void 0 && (e = { x: 0, y: 0 }),
    {
      top: i.top - t.height - e.y,
      right: i.right - t.width + e.x,
      bottom: i.bottom - t.height + e.y,
      left: i.left - t.width - e.x,
    }
  );
}
function Oe(i) {
  return [P, H, B, j].some(function (t) {
    return i[t] >= 0;
  });
}
function Zi(i) {
  var t = i.state,
    e = i.name,
    r = t.rects.reference,
    n = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    a = _t(t, { elementContext: "reference" }),
    s = _t(t, { altBoundary: !0 }),
    l = Ae(a, r),
    d = Ae(s, n, o),
    c = Oe(l),
    v = Oe(d);
  (t.modifiersData[e] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: d,
    isReferenceHidden: c,
    hasPopperEscaped: v,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": c,
      "data-popper-escaped": v,
    }));
}
const tr = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Zi };
function er(i, t, e) {
  var r = V(i),
    n = [j, P].indexOf(r) >= 0 ? -1 : 1,
    o = typeof e == "function" ? e(Object.assign({}, t, { placement: i })) : e,
    a = o[0],
    s = o[1];
  return (a = a || 0), (s = (s || 0) * n), [j, H].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s };
}
function ir(i) {
  var t = i.state,
    e = i.options,
    r = i.name,
    n = e.offset,
    o = n === void 0 ? [0, 0] : n,
    a = qe.reduce(function (c, v) {
      return (c[v] = er(v, t.rects, o)), c;
    }, {}),
    s = a[t.placement],
    l = s.x,
    d = s.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l), (t.modifiersData.popperOffsets.y += d)),
    (t.modifiersData[r] = a);
}
const rr = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: ir };
function nr(i) {
  var t = i.state,
    e = i.name;
  t.modifiersData[e] = $e({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const or = { name: "popperOffsets", enabled: !0, phase: "read", fn: nr, data: {} };
function ar(i) {
  return i === "x" ? "y" : "x";
}
function sr(i) {
  var t = i.state,
    e = i.options,
    r = i.name,
    n = e.mainAxis,
    o = n === void 0 ? !0 : n,
    a = e.altAxis,
    s = a === void 0 ? !1 : a,
    l = e.boundary,
    d = e.rootBoundary,
    c = e.altBoundary,
    v = e.padding,
    y = e.tether,
    u = y === void 0 ? !0 : y,
    _ = e.tetherOffset,
    h = _ === void 0 ? 0 : _,
    p = _t(t, { boundary: l, rootBoundary: d, padding: v, altBoundary: c }),
    b = V(t.placement),
    E = ft(t.placement),
    x = !E,
    f = ne(b),
    g = ar(f),
    m = t.modifiersData.popperOffsets,
    w = t.rects.reference,
    O = t.rects.popper,
    L = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h,
    k = typeof L == "number" ? { mainAxis: L, altAxis: L } : Object.assign({ mainAxis: 0, altAxis: 0 }, L),
    T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    q = { x: 0, y: 0 };
  if (m) {
    if (o) {
      var C,
        U = f === "y" ? P : j,
        G = f === "y" ? B : H,
        D = f === "y" ? "height" : "width",
        M = m[f],
        xt = M + p[U],
        Q = M - p[G],
        kt = u ? -O[D] / 2 : 0,
        Yt = E === ct ? w[D] : O[D],
        pt = E === ct ? -O[D] : -w[D],
        Lt = t.elements.arrow,
        st = u && Lt ? re(Lt) : { width: 0, height: 0 },
        N = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ve(),
        ht = N[U],
        At = N[G],
        J = gt(0, w[D], st[D]),
        Kt = x ? w[D] / 2 - kt - J - ht - k.mainAxis : Yt - J - ht - k.mainAxis,
        Je = x ? -w[D] / 2 + kt + J + At + k.mainAxis : pt + J + At + k.mainAxis,
        Ut = t.elements.arrow && Et(t.elements.arrow),
        Ze = Ut ? (f === "y" ? Ut.clientTop || 0 : Ut.clientLeft || 0) : 0,
        ce = (C = T == null ? void 0 : T[f]) != null ? C : 0,
        ti = M + Kt - ce - Ze,
        ei = M + Je - ce,
        de = gt(u ? Vt(xt, ti) : xt, M, u ? ot(Q, ei) : Q);
      (m[f] = de), (q[f] = de - M);
    }
    if (s) {
      var ue,
        ii = f === "x" ? P : j,
        ri = f === "x" ? B : H,
        Z = m[g],
        Ot = g === "y" ? "height" : "width",
        fe = Z + p[ii],
        pe = Z - p[ri],
        Gt = [P, j].indexOf(b) !== -1,
        he = (ue = T == null ? void 0 : T[g]) != null ? ue : 0,
        ve = Gt ? fe : Z - w[Ot] - O[Ot] - he + k.altAxis,
        ge = Gt ? Z + w[Ot] + O[Ot] - he - k.altAxis : pe,
        me = u && Gt ? ji(ve, Z, ge) : gt(u ? ve : fe, Z, u ? ge : pe);
      (m[g] = me), (q[g] = me - Z);
    }
    t.modifiersData[r] = q;
  }
}
const lr = { name: "preventOverflow", enabled: !0, phase: "main", fn: sr, requiresIfExists: ["offset"] };
function cr(i) {
  return { scrollLeft: i.scrollLeft, scrollTop: i.scrollTop };
}
function dr(i) {
  return i === I(i) || !S(i) ? oe(i) : cr(i);
}
function ur(i) {
  var t = i.getBoundingClientRect(),
    e = dt(t.width) / i.offsetWidth || 1,
    r = dt(t.height) / i.offsetHeight || 1;
  return e !== 1 || r !== 1;
}
function fr(i, t, e) {
  e === void 0 && (e = !1);
  var r = S(t),
    n = S(t) && ur(t),
    o = K(t),
    a = ut(i, n, e),
    s = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (r || (!r && !e)) &&
      ((z(t) !== "body" || se(o)) && (s = dr(t)),
      S(t) ? ((l = ut(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop)) : o && (l.x = ae(o))),
    { x: a.left + s.scrollLeft - l.x, y: a.top + s.scrollTop - l.y, width: a.width, height: a.height }
  );
}
function pr(i) {
  var t = new Map(),
    e = new Set(),
    r = [];
  i.forEach(function (o) {
    t.set(o.name, o);
  });
  function n(o) {
    e.add(o.name);
    var a = [].concat(o.requires || [], o.requiresIfExists || []);
    a.forEach(function (s) {
      if (!e.has(s)) {
        var l = t.get(s);
        l && n(l);
      }
    }),
      r.push(o);
  }
  return (
    i.forEach(function (o) {
      e.has(o.name) || n(o);
    }),
    r
  );
}
function hr(i) {
  var t = pr(i);
  return Li.reduce(function (e, r) {
    return e.concat(
      t.filter(function (n) {
        return n.phase === r;
      })
    );
  }, []);
}
function vr(i) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (e) {
          Promise.resolve().then(function () {
            (t = void 0), e(i());
          });
        })),
      t
    );
  };
}
function gr(i) {
  var t = i.reduce(function (e, r) {
    var n = e[r.name];
    return (
      (e[r.name] = n
        ? Object.assign({}, n, r, {
            options: Object.assign({}, n.options, r.options),
            data: Object.assign({}, n.data, r.data),
          })
        : r),
      e
    );
  }, {});
  return Object.keys(t).map(function (e) {
    return t[e];
  });
}
var Te = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Ce() {
  for (var i = arguments.length, t = new Array(i), e = 0; e < i; e++) t[e] = arguments[e];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function mr(i) {
  i === void 0 && (i = {});
  var t = i,
    e = t.defaultModifiers,
    r = e === void 0 ? [] : e,
    n = t.defaultOptions,
    o = n === void 0 ? Te : n;
  return function (s, l, d) {
    d === void 0 && (d = o);
    var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Te, o),
        modifiersData: {},
        elements: { reference: s, popper: l },
        attributes: {},
        styles: {},
      },
      v = [],
      y = !1,
      u = {
        state: c,
        setOptions: function (b) {
          var E = typeof b == "function" ? b(c.options) : b;
          h(),
            (c.options = Object.assign({}, o, c.options, E)),
            (c.scrollParents = {
              reference: at(s) ? mt(s) : s.contextElement ? mt(s.contextElement) : [],
              popper: mt(l),
            });
          var x = hr(gr([].concat(r, c.options.modifiers)));
          return (
            (c.orderedModifiers = x.filter(function (f) {
              return f.enabled;
            })),
            _(),
            u.update()
          );
        },
        forceUpdate: function () {
          if (!y) {
            var b = c.elements,
              E = b.reference,
              x = b.popper;
            if (Ce(E, x)) {
              (c.rects = { reference: fr(E, Et(x), c.options.strategy === "fixed"), popper: re(x) }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (k) {
                  return (c.modifiersData[k.name] = Object.assign({}, k.data));
                });
              for (var f = 0; f < c.orderedModifiers.length; f++) {
                if (c.reset === !0) {
                  (c.reset = !1), (f = -1);
                  continue;
                }
                var g = c.orderedModifiers[f],
                  m = g.fn,
                  w = g.options,
                  O = w === void 0 ? {} : w,
                  L = g.name;
                typeof m == "function" && (c = m({ state: c, options: O, name: L, instance: u }) || c);
              }
            }
          }
        },
        update: vr(function () {
          return new Promise(function (p) {
            u.forceUpdate(), p(c);
          });
        }),
        destroy: function () {
          h(), (y = !0);
        },
      };
    if (!Ce(s, l)) return u;
    u.setOptions(d).then(function (p) {
      !y && d.onFirstUpdate && d.onFirstUpdate(p);
    });
    function _() {
      c.orderedModifiers.forEach(function (p) {
        var b = p.name,
          E = p.options,
          x = E === void 0 ? {} : E,
          f = p.effect;
        if (typeof f == "function") {
          var g = f({ state: c, name: b, instance: u, options: x }),
            m = function () {};
          v.push(g || m);
        }
      });
    }
    function h() {
      v.forEach(function (p) {
        return p();
      }),
        (v = []);
    }
    return u;
  };
}
var yr = [zi, or, Ri, Ti, rr, Ji, lr, Bi, tr],
  le = mr({ defaultModifiers: yr }),
  F =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (F =
          Object.assign ||
          function (i) {
            for (var t, e = 1, r = arguments.length; e < r; e++) {
              t = arguments[e];
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
            }
            return i;
          }),
        F.apply(this, arguments)
      );
    },
  Ct =
    (globalThis && globalThis.__spreadArray) ||
    function (i, t, e) {
      if (e || arguments.length === 2)
        for (var r = 0, n = t.length, o; r < n; r++)
          (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
      return i.concat(o || Array.prototype.slice.call(t));
    },
  rt = {
    placement: "bottom",
    triggerType: "click",
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
    onShow: function () {},
    onHide: function () {},
    onToggle: function () {},
  },
  Fe = (function () {
    function i(t, e, r) {
      t === void 0 && (t = null),
        e === void 0 && (e = null),
        r === void 0 && (r = rt),
        (this._targetEl = t),
        (this._triggerEl = e),
        (this._options = F(F({}, rt), r)),
        (this._popperInstance = this._createPopperInstance()),
        (this._visible = !1),
        this._init();
    }
    return (
      (i.prototype._init = function () {
        this._triggerEl && this._setupEventListeners();
      }),
      (i.prototype._setupEventListeners = function () {
        var t = this,
          e = this._getTriggerEvents();
        this._options.triggerType === "click" &&
          e.showEvents.forEach(function (r) {
            t._triggerEl.addEventListener(r, function () {
              t.toggle();
            });
          }),
          this._options.triggerType === "hover" &&
            (e.showEvents.forEach(function (r) {
              t._triggerEl.addEventListener(r, function () {
                r === "click"
                  ? t.toggle()
                  : setTimeout(function () {
                      t.show();
                    }, t._options.delay);
              }),
                t._targetEl.addEventListener(r, function () {
                  t.show();
                });
            }),
            e.hideEvents.forEach(function (r) {
              t._triggerEl.addEventListener(r, function () {
                setTimeout(function () {
                  t._targetEl.matches(":hover") || t.hide();
                }, t._options.delay);
              }),
                t._targetEl.addEventListener(r, function () {
                  setTimeout(function () {
                    t._triggerEl.matches(":hover") || t.hide();
                  }, t._options.delay);
                });
            }));
      }),
      (i.prototype._createPopperInstance = function () {
        return le(this._triggerEl, this._targetEl, {
          placement: this._options.placement,
          modifiers: [
            { name: "offset", options: { offset: [this._options.offsetSkidding, this._options.offsetDistance] } },
          ],
        });
      }),
      (i.prototype._setupClickOutsideListener = function () {
        var t = this;
        (this._clickOutsideEventListener = function (e) {
          t._handleClickOutside(e, t._targetEl);
        }),
          document.body.addEventListener("click", this._clickOutsideEventListener, !0);
      }),
      (i.prototype._removeClickOutsideListener = function () {
        document.body.removeEventListener("click", this._clickOutsideEventListener, !0);
      }),
      (i.prototype._handleClickOutside = function (t, e) {
        var r = t.target;
        r !== e && !e.contains(r) && !this._triggerEl.contains(r) && this.isVisible() && this.hide();
      }),
      (i.prototype._getTriggerEvents = function () {
        switch (this._options.triggerType) {
          case "hover":
            return { showEvents: ["mouseenter", "click"], hideEvents: ["mouseleave"] };
          case "click":
            return { showEvents: ["click"], hideEvents: [] };
          case "none":
            return { showEvents: [], hideEvents: [] };
          default:
            return { showEvents: ["click"], hideEvents: [] };
        }
      }),
      (i.prototype.toggle = function () {
        this.isVisible() ? this.hide() : this.show(), this._options.onToggle(this);
      }),
      (i.prototype.isVisible = function () {
        return this._visible;
      }),
      (i.prototype.show = function () {
        this._targetEl.classList.remove("hidden"),
          this._targetEl.classList.add("block"),
          this._popperInstance.setOptions(function (t) {
            return F(F({}, t), {
              modifiers: Ct(Ct([], t.modifiers, !0), [{ name: "eventListeners", enabled: !0 }], !1),
            });
          }),
          this._setupClickOutsideListener(),
          this._popperInstance.update(),
          (this._visible = !0),
          this._options.onShow(this);
      }),
      (i.prototype.hide = function () {
        this._targetEl.classList.remove("block"),
          this._targetEl.classList.add("hidden"),
          this._popperInstance.setOptions(function (t) {
            return F(F({}, t), {
              modifiers: Ct(Ct([], t.modifiers, !0), [{ name: "eventListeners", enabled: !1 }], !1),
            });
          }),
          (this._visible = !1),
          this._removeClickOutsideListener(),
          this._options.onHide(this);
      }),
      i
    );
  })();
typeof window < "u" && (window.Dropdown = Fe);
function Xe() {
  document.querySelectorAll("[data-dropdown-toggle]").forEach(function (i) {
    var t = i.getAttribute("data-dropdown-toggle"),
      e = document.getElementById(t);
    if (e) {
      var r = i.getAttribute("data-dropdown-placement"),
        n = i.getAttribute("data-dropdown-offset-skidding"),
        o = i.getAttribute("data-dropdown-offset-distance"),
        a = i.getAttribute("data-dropdown-trigger"),
        s = i.getAttribute("data-dropdown-delay");
      new Fe(e, i, {
        placement: r || rt.placement,
        triggerType: a || rt.triggerType,
        offsetSkidding: n ? parseInt(n) : rt.offsetSkidding,
        offsetDistance: o ? parseInt(o) : rt.offsetDistance,
        delay: s ? parseInt(s) : rt.delay,
      });
    } else console.error('The dropdown element with id "'.concat(t, '" does not exist. Please check the data-dropdown-toggle attribute.'));
  });
}
var zt =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (zt =
          Object.assign ||
          function (i) {
            for (var t, e = 1, r = arguments.length; e < r; e++) {
              t = arguments[e];
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
            }
            return i;
          }),
        zt.apply(this, arguments)
      );
    },
  lt = {
    placement: "center",
    backdropClasses: "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
    backdrop: "dynamic",
    closable: !0,
    onHide: function () {},
    onShow: function () {},
    onToggle: function () {},
  },
  Zt = (function () {
    function i(t, e) {
      t === void 0 && (t = null),
        e === void 0 && (e = lt),
        (this._targetEl = t),
        (this._options = zt(zt({}, lt), e)),
        (this._isHidden = !0),
        (this._backdropEl = null),
        this._init();
    }
    return (
      (i.prototype._init = function () {
        var t = this;
        this._targetEl &&
          this._getPlacementClasses().map(function (e) {
            t._targetEl.classList.add(e);
          });
      }),
      (i.prototype._createBackdrop = function () {
        var t;
        if (this._isHidden) {
          var e = document.createElement("div");
          e.setAttribute("modal-backdrop", ""),
            (t = e.classList).add.apply(t, this._options.backdropClasses.split(" ")),
            document.querySelector("body").append(e),
            (this._backdropEl = e);
        }
      }),
      (i.prototype._destroyBackdropEl = function () {
        this._isHidden || document.querySelector("[modal-backdrop]").remove();
      }),
      (i.prototype._setupModalCloseEventListeners = function () {
        var t = this;
        this._options.backdrop === "dynamic" &&
          ((this._clickOutsideEventListener = function (e) {
            t._handleOutsideClick(e.target);
          }),
          this._targetEl.addEventListener("click", this._clickOutsideEventListener, !0)),
          (this._keydownEventListener = function (e) {
            e.key === "Escape" && t.hide();
          }),
          document.body.addEventListener("keydown", this._keydownEventListener, !0);
      }),
      (i.prototype._removeModalCloseEventListeners = function () {
        this._options.backdrop === "dynamic" &&
          this._targetEl.removeEventListener("click", this._clickOutsideEventListener, !0),
          document.body.removeEventListener("keydown", this._keydownEventListener, !0);
      }),
      (i.prototype._handleOutsideClick = function (t) {
        (t === this._targetEl || (t === this._backdropEl && this.isVisible())) && this.hide();
      }),
      (i.prototype._getPlacementClasses = function () {
        switch (this._options.placement) {
          case "top-left":
            return ["justify-start", "items-start"];
          case "top-center":
            return ["justify-center", "items-start"];
          case "top-right":
            return ["justify-end", "items-start"];
          case "center-left":
            return ["justify-start", "items-center"];
          case "center":
            return ["justify-center", "items-center"];
          case "center-right":
            return ["justify-end", "items-center"];
          case "bottom-left":
            return ["justify-start", "items-end"];
          case "bottom-center":
            return ["justify-center", "items-end"];
          case "bottom-right":
            return ["justify-end", "items-end"];
          default:
            return ["justify-center", "items-center"];
        }
      }),
      (i.prototype.toggle = function () {
        this._isHidden ? this.show() : this.hide(), this._options.onToggle(this);
      }),
      (i.prototype.show = function () {
        this.isHidden &&
          (this._targetEl.classList.add("flex"),
          this._targetEl.classList.remove("hidden"),
          this._targetEl.setAttribute("aria-modal", "true"),
          this._targetEl.setAttribute("role", "dialog"),
          this._targetEl.removeAttribute("aria-hidden"),
          this._createBackdrop(),
          (this._isHidden = !1),
          document.body.classList.add("overflow-hidden"),
          this._options.closable && this._setupModalCloseEventListeners(),
          this._options.onShow(this));
      }),
      (i.prototype.hide = function () {
        this.isVisible &&
          (this._targetEl.classList.add("hidden"),
          this._targetEl.classList.remove("flex"),
          this._targetEl.setAttribute("aria-hidden", "true"),
          this._targetEl.removeAttribute("aria-modal"),
          this._targetEl.removeAttribute("role"),
          this._destroyBackdropEl(),
          (this._isHidden = !0),
          document.body.classList.remove("overflow-hidden"),
          this._options.closable && this._removeModalCloseEventListeners(),
          this._options.onHide(this));
      }),
      (i.prototype.isVisible = function () {
        return !this._isHidden;
      }),
      (i.prototype.isHidden = function () {
        return this._isHidden;
      }),
      i
    );
  })();
typeof window < "u" && (window.Modal = Zt);
var Pt = function (i, t) {
  return t.some(function (e) {
    return e.id === i;
  })
    ? t.find(function (e) {
        return e.id === i;
      })
    : null;
};
function br() {
  var i = [];
  document.querySelectorAll("[data-modal-target]").forEach(function (t) {
    var e = t.getAttribute("data-modal-target"),
      r = document.getElementById(e);
    if (r) {
      var n = r.getAttribute("data-modal-placement"),
        o = r.getAttribute("data-modal-backdrop");
      Pt(e, i) || i.push({ id: e, object: new Zt(r, { placement: n || lt.placement, backdrop: o || lt.backdrop }) });
    } else console.error("Modal with id ".concat(e, " does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."));
  }),
    document.querySelectorAll("[data-modal-toggle]").forEach(function (t) {
      var e = t.getAttribute("data-modal-toggle"),
        r = document.getElementById(e);
      if (r) {
        var n = r.getAttribute("data-modal-placement"),
          o = r.getAttribute("data-modal-backdrop"),
          a = Pt(e, i);
        a ||
          ((a = { id: e, object: new Zt(r, { placement: n || lt.placement, backdrop: o || lt.backdrop }) }), i.push(a)),
          t.addEventListener("click", function () {
            a.object.toggle();
          });
      } else
        console.error(
          "Modal with id ".concat(
            e,
            " does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"
          )
        );
    }),
    document.querySelectorAll("[data-modal-show]").forEach(function (t) {
      var e = t.getAttribute("data-modal-show"),
        r = document.getElementById(e);
      if (r) {
        var n = Pt(e, i);
        n
          ? t.addEventListener("click", function () {
              n.object.isHidden && n.object.show();
            })
          : console.error(
              "Modal with id ".concat(
                e,
                " has not been initialized. Please initialize it using the data-modal-target attribute."
              )
            );
      } else console.error("Modal with id ".concat(e, " does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"));
    }),
    document.querySelectorAll("[data-modal-hide]").forEach(function (t) {
      var e = t.getAttribute("data-modal-hide"),
        r = document.getElementById(e);
      if (r) {
        var n = Pt(e, i);
        n
          ? t.addEventListener("click", function () {
              n.object.isVisible && n.object.hide();
            })
          : console.error(
              "Modal with id ".concat(
                e,
                " has not been initialized. Please initialize it using the data-modal-target attribute."
              )
            );
      } else console.error("Modal with id ".concat(e, " does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"));
    });
}
var Wt =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Wt =
          Object.assign ||
          function (i) {
            for (var t, e = 1, r = arguments.length; e < r; e++) {
              t = arguments[e];
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
            }
            return i;
          }),
        Wt.apply(this, arguments)
      );
    },
  nt = {
    placement: "left",
    bodyScrolling: !1,
    backdrop: !0,
    edge: !1,
    edgeOffset: "bottom-[60px]",
    backdropClasses: "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",
    onShow: function () {},
    onHide: function () {},
    onToggle: function () {},
  },
  Ye = (function () {
    function i(t, e) {
      t === void 0 && (t = null),
        e === void 0 && (e = nt),
        (this._targetEl = t),
        (this._options = Wt(Wt({}, nt), e)),
        (this._visible = !1),
        this._init();
    }
    return (
      (i.prototype._init = function () {
        var t = this;
        this._targetEl &&
          (this._targetEl.setAttribute("aria-hidden", "true"), this._targetEl.classList.add("transition-transform")),
          this._getPlacementClasses(this._options.placement).base.map(function (e) {
            t._targetEl.classList.add(e);
          }),
          document.addEventListener("keydown", function (e) {
            e.key === "Escape" && t.isVisible() && t.hide();
          });
      }),
      (i.prototype.hide = function () {
        var t = this;
        this._options.edge
          ? (this._getPlacementClasses(this._options.placement + "-edge").active.map(function (e) {
              t._targetEl.classList.remove(e);
            }),
            this._getPlacementClasses(this._options.placement + "-edge").inactive.map(function (e) {
              t._targetEl.classList.add(e);
            }))
          : (this._getPlacementClasses(this._options.placement).active.map(function (e) {
              t._targetEl.classList.remove(e);
            }),
            this._getPlacementClasses(this._options.placement).inactive.map(function (e) {
              t._targetEl.classList.add(e);
            })),
          this._targetEl.setAttribute("aria-hidden", "true"),
          this._targetEl.removeAttribute("aria-modal"),
          this._targetEl.removeAttribute("role"),
          this._options.bodyScrolling || document.body.classList.remove("overflow-hidden"),
          this._options.backdrop && this._destroyBackdropEl(),
          (this._visible = !1),
          this._options.onHide(this);
      }),
      (i.prototype.show = function () {
        var t = this;
        this._options.edge
          ? (this._getPlacementClasses(this._options.placement + "-edge").active.map(function (e) {
              t._targetEl.classList.add(e);
            }),
            this._getPlacementClasses(this._options.placement + "-edge").inactive.map(function (e) {
              t._targetEl.classList.remove(e);
            }))
          : (this._getPlacementClasses(this._options.placement).active.map(function (e) {
              t._targetEl.classList.add(e);
            }),
            this._getPlacementClasses(this._options.placement).inactive.map(function (e) {
              t._targetEl.classList.remove(e);
            })),
          this._targetEl.setAttribute("aria-modal", "true"),
          this._targetEl.setAttribute("role", "dialog"),
          this._targetEl.removeAttribute("aria-hidden"),
          this._options.bodyScrolling || document.body.classList.add("overflow-hidden"),
          this._options.backdrop && this._createBackdrop(),
          (this._visible = !0),
          this._options.onShow(this);
      }),
      (i.prototype.toggle = function () {
        this.isVisible() ? this.hide() : this.show();
      }),
      (i.prototype._createBackdrop = function () {
        var t,
          e = this;
        if (!this._visible) {
          var r = document.createElement("div");
          r.setAttribute("drawer-backdrop", ""),
            (t = r.classList).add.apply(t, this._options.backdropClasses.split(" ")),
            document.querySelector("body").append(r),
            r.addEventListener("click", function () {
              e.hide();
            });
        }
      }),
      (i.prototype._destroyBackdropEl = function () {
        this._visible && document.querySelector("[drawer-backdrop]").remove();
      }),
      (i.prototype._getPlacementClasses = function (t) {
        switch (t) {
          case "top":
            return {
              base: ["top-0", "left-0", "right-0"],
              active: ["transform-none"],
              inactive: ["-translate-y-full"],
            };
          case "right":
            return { base: ["right-0", "top-0"], active: ["transform-none"], inactive: ["translate-x-full"] };
          case "bottom":
            return {
              base: ["bottom-0", "left-0", "right-0"],
              active: ["transform-none"],
              inactive: ["translate-y-full"],
            };
          case "left":
            return { base: ["left-0", "top-0"], active: ["transform-none"], inactive: ["-translate-x-full"] };
          case "bottom-edge":
            return {
              base: ["left-0", "top-0"],
              active: ["transform-none"],
              inactive: ["translate-y-full", this._options.edgeOffset],
            };
          default:
            return { base: ["left-0", "top-0"], active: ["transform-none"], inactive: ["-translate-x-full"] };
        }
      }),
      (i.prototype.isHidden = function () {
        return !this._visible;
      }),
      (i.prototype.isVisible = function () {
        return this._visible;
      }),
      i
    );
  })();
typeof window < "u" && (window.Drawer = Ye);
var jt = function (i, t) {
  if (
    t.some(function (e) {
      return e.id === i;
    })
  )
    return t.find(function (e) {
      return e.id === i;
    });
};
function _r() {
  var i = [];
  document.querySelectorAll("[data-drawer-target]").forEach(function (t) {
    var e = t.getAttribute("data-drawer-target"),
      r = document.getElementById(e);
    if (r) {
      var n = t.getAttribute("data-drawer-placement"),
        o = t.getAttribute("data-drawer-body-scrolling"),
        a = t.getAttribute("data-drawer-backdrop"),
        s = t.getAttribute("data-drawer-edge"),
        l = t.getAttribute("data-drawer-edge-offset");
      jt(e, i) ||
        i.push({
          id: e,
          object: new Ye(r, {
            placement: n || nt.placement,
            bodyScrolling: o ? o === "true" : nt.bodyScrolling,
            backdrop: a ? a === "true" : nt.backdrop,
            edge: s ? s === "true" : nt.edge,
            edgeOffset: l || nt.edgeOffset,
          }),
        });
    } else console.error("Drawer with id ".concat(e, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
  }),
    document.querySelectorAll("[data-drawer-toggle]").forEach(function (t) {
      var e = t.getAttribute("data-drawer-toggle"),
        r = document.getElementById(e);
      if (r) {
        var n = jt(e, i);
        n
          ? t.addEventListener("click", function () {
              n.object.toggle();
            })
          : console.error(
              "Drawer with id ".concat(
                e,
                " has not been initialized. Please initialize it using the data-drawer-target attribute."
              )
            );
      } else console.error("Drawer with id ".concat(e, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
    }),
    document.querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]").forEach(function (t) {
      var e = t.getAttribute("data-drawer-dismiss")
          ? t.getAttribute("data-drawer-dismiss")
          : t.getAttribute("data-drawer-hide"),
        r = document.getElementById(e);
      if (r) {
        var n = jt(e, i);
        n
          ? t.addEventListener("click", function () {
              n.object.hide();
            })
          : console.error(
              "Drawer with id ".concat(
                e,
                " has not been initialized. Please initialize it using the data-drawer-target attribute."
              )
            );
      } else console.error("Drawer with id ".concat(e, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"));
    }),
    document.querySelectorAll("[data-drawer-show]").forEach(function (t) {
      var e = t.getAttribute("data-drawer-show"),
        r = document.getElementById(e);
      if (r) {
        var n = jt(e, i);
        n
          ? t.addEventListener("click", function () {
              n.object.show();
            })
          : console.error(
              "Drawer with id ".concat(
                e,
                " has not been initialized. Please initialize it using the data-drawer-target attribute."
              )
            );
      } else console.error("Drawer with id ".concat(e, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
    });
}
var Nt =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Nt =
          Object.assign ||
          function (i) {
            for (var t, e = 1, r = arguments.length; e < r; e++) {
              t = arguments[e];
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
            }
            return i;
          }),
        Nt.apply(this, arguments)
      );
    },
  Pe = {
    defaultTabId: null,
    activeClasses:
      "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",
    inactiveClasses:
      "dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",
    onShow: function () {},
  },
  Ke = (function () {
    function i(t, e) {
      t === void 0 && (t = []),
        e === void 0 && (e = Pe),
        (this._items = t),
        (this._activeTab = e ? this.getTab(e.defaultTabId) : null),
        (this._options = Nt(Nt({}, Pe), e)),
        this._init();
    }
    return (
      (i.prototype._init = function () {
        var t = this;
        this._items.length &&
          (this._activeTab || this._setActiveTab(this._items[0]),
          this.show(this._activeTab.id, !0),
          this._items.map(function (e) {
            e.triggerEl.addEventListener("click", function () {
              t.show(e.id);
            });
          }));
      }),
      (i.prototype.getActiveTab = function () {
        return this._activeTab;
      }),
      (i.prototype._setActiveTab = function (t) {
        this._activeTab = t;
      }),
      (i.prototype.getTab = function (t) {
        return this._items.filter(function (e) {
          return e.id === t;
        })[0];
      }),
      (i.prototype.show = function (t, e) {
        var r,
          n,
          o = this;
        e === void 0 && (e = !1);
        var a = this.getTab(t);
        (a === this._activeTab && !e) ||
          (this._items.map(function (s) {
            var l, d;
            s !== a &&
              ((l = s.triggerEl.classList).remove.apply(l, o._options.activeClasses.split(" ")),
              (d = s.triggerEl.classList).add.apply(d, o._options.inactiveClasses.split(" ")),
              s.targetEl.classList.add("hidden"),
              s.triggerEl.setAttribute("aria-selected", "false"));
          }),
          (r = a.triggerEl.classList).add.apply(r, this._options.activeClasses.split(" ")),
          (n = a.triggerEl.classList).remove.apply(n, this._options.inactiveClasses.split(" ")),
          a.triggerEl.setAttribute("aria-selected", "true"),
          a.targetEl.classList.remove("hidden"),
          this._setActiveTab(a),
          this._options.onShow(this, a));
      }),
      i
    );
  })();
typeof window < "u" && (window.Tabs = Ke);
function wr() {
  document.querySelectorAll("[data-tabs-toggle]").forEach(function (i) {
    var t = [],
      e = null;
    i.querySelectorAll('[role="tab"]').forEach(function (r) {
      var n = r.getAttribute("aria-selected") === "true",
        o = {
          id: r.getAttribute("data-tabs-target"),
          triggerEl: r,
          targetEl: document.querySelector(r.getAttribute("data-tabs-target")),
        };
      t.push(o), n && (e = o.id);
    }),
      new Ke(t, { defaultTabId: e });
  });
}
var X =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (X =
          Object.assign ||
          function (i) {
            for (var t, e = 1, r = arguments.length; e < r; e++) {
              t = arguments[e];
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
            }
            return i;
          }),
        X.apply(this, arguments)
      );
    },
  Dt =
    (globalThis && globalThis.__spreadArray) ||
    function (i, t, e) {
      if (e || arguments.length === 2)
        for (var r = 0, n = t.length, o; r < n; r++)
          (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
      return i.concat(o || Array.prototype.slice.call(t));
    },
  $t = {
    placement: "top",
    triggerType: "hover",
    onShow: function () {},
    onHide: function () {},
    onToggle: function () {},
  },
  Ue = (function () {
    function i(t, e, r) {
      t === void 0 && (t = null),
        e === void 0 && (e = null),
        r === void 0 && (r = $t),
        (this._targetEl = t),
        (this._triggerEl = e),
        (this._options = X(X({}, $t), r)),
        (this._popperInstance = this._createPopperInstance()),
        (this._visible = !1),
        this._init();
    }
    return (
      (i.prototype._init = function () {
        this._triggerEl && this._setupEventListeners();
      }),
      (i.prototype._setupEventListeners = function () {
        var t = this,
          e = this._getTriggerEvents();
        e.showEvents.forEach(function (r) {
          t._triggerEl.addEventListener(r, function () {
            t.show();
          });
        }),
          e.hideEvents.forEach(function (r) {
            t._triggerEl.addEventListener(r, function () {
              t.hide();
            });
          });
      }),
      (i.prototype._createPopperInstance = function () {
        return le(this._triggerEl, this._targetEl, {
          placement: this._options.placement,
          modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
        });
      }),
      (i.prototype._getTriggerEvents = function () {
        switch (this._options.triggerType) {
          case "hover":
            return { showEvents: ["mouseenter", "focus"], hideEvents: ["mouseleave", "blur"] };
          case "click":
            return { showEvents: ["click", "focus"], hideEvents: ["focusout", "blur"] };
          case "none":
            return { showEvents: [], hideEvents: [] };
          default:
            return { showEvents: ["mouseenter", "focus"], hideEvents: ["mouseleave", "blur"] };
        }
      }),
      (i.prototype._setupKeydownListener = function () {
        var t = this;
        (this._keydownEventListener = function (e) {
          e.key === "Escape" && t.hide();
        }),
          document.body.addEventListener("keydown", this._keydownEventListener, !0);
      }),
      (i.prototype._removeKeydownListener = function () {
        document.body.removeEventListener("keydown", this._keydownEventListener, !0);
      }),
      (i.prototype._setupClickOutsideListener = function () {
        var t = this;
        (this._clickOutsideEventListener = function (e) {
          t._handleClickOutside(e, t._targetEl);
        }),
          document.body.addEventListener("click", this._clickOutsideEventListener, !0);
      }),
      (i.prototype._removeClickOutsideListener = function () {
        document.body.removeEventListener("click", this._clickOutsideEventListener, !0);
      }),
      (i.prototype._handleClickOutside = function (t, e) {
        var r = t.target;
        r !== e && !e.contains(r) && !this._triggerEl.contains(r) && this.isVisible() && this.hide();
      }),
      (i.prototype.isVisible = function () {
        return this._visible;
      }),
      (i.prototype.toggle = function () {
        this.isVisible() ? this.hide() : this.show();
      }),
      (i.prototype.show = function () {
        this._targetEl.classList.remove("opacity-0", "invisible"),
          this._targetEl.classList.add("opacity-100", "visible"),
          this._popperInstance.setOptions(function (t) {
            return X(X({}, t), {
              modifiers: Dt(Dt([], t.modifiers, !0), [{ name: "eventListeners", enabled: !0 }], !1),
            });
          }),
          this._setupClickOutsideListener(),
          this._setupKeydownListener(),
          this._popperInstance.update(),
          (this._visible = !0),
          this._options.onShow(this);
      }),
      (i.prototype.hide = function () {
        this._targetEl.classList.remove("opacity-100", "visible"),
          this._targetEl.classList.add("opacity-0", "invisible"),
          this._popperInstance.setOptions(function (t) {
            return X(X({}, t), {
              modifiers: Dt(Dt([], t.modifiers, !0), [{ name: "eventListeners", enabled: !1 }], !1),
            });
          }),
          this._removeClickOutsideListener(),
          this._removeKeydownListener(),
          (this._visible = !1),
          this._options.onHide(this);
      }),
      i
    );
  })();
typeof window < "u" && (window.Tooltip = Ue);
function Er() {
  document.querySelectorAll("[data-tooltip-target]").forEach(function (i) {
    var t = i.getAttribute("data-tooltip-target"),
      e = document.getElementById(t);
    if (e) {
      var r = i.getAttribute("data-tooltip-trigger"),
        n = i.getAttribute("data-tooltip-placement");
      new Ue(e, i, { placement: n || $t.placement, triggerType: r || $t.triggerType });
    } else console.error('The tooltip element with id "'.concat(t, '" does not exist. Please check the data-tooltip-target attribute.'));
  });
}
var Y =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Y =
          Object.assign ||
          function (i) {
            for (var t, e = 1, r = arguments.length; e < r; e++) {
              t = arguments[e];
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
            }
            return i;
          }),
        Y.apply(this, arguments)
      );
    },
  It =
    (globalThis && globalThis.__spreadArray) ||
    function (i, t, e) {
      if (e || arguments.length === 2)
        for (var r = 0, n = t.length, o; r < n; r++)
          (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
      return i.concat(o || Array.prototype.slice.call(t));
    },
  yt = {
    placement: "top",
    offset: 10,
    triggerType: "hover",
    onShow: function () {},
    onHide: function () {},
    onToggle: function () {},
  },
  Ge = (function () {
    function i(t, e, r) {
      t === void 0 && (t = null),
        e === void 0 && (e = null),
        r === void 0 && (r = yt),
        (this._targetEl = t),
        (this._triggerEl = e),
        (this._options = Y(Y({}, yt), r)),
        (this._popperInstance = this._createPopperInstance()),
        (this._visible = !1),
        this._init();
    }
    return (
      (i.prototype._init = function () {
        this._triggerEl && this._setupEventListeners();
      }),
      (i.prototype._setupEventListeners = function () {
        var t = this,
          e = this._getTriggerEvents();
        e.showEvents.forEach(function (r) {
          t._triggerEl.addEventListener(r, function () {
            t.show();
          }),
            t._targetEl.addEventListener(r, function () {
              t.show();
            });
        }),
          e.hideEvents.forEach(function (r) {
            t._triggerEl.addEventListener(r, function () {
              setTimeout(function () {
                t._targetEl.matches(":hover") || t.hide();
              }, 100);
            }),
              t._targetEl.addEventListener(r, function () {
                setTimeout(function () {
                  t._triggerEl.matches(":hover") || t.hide();
                }, 100);
              });
          });
      }),
      (i.prototype._createPopperInstance = function () {
        return le(this._triggerEl, this._targetEl, {
          placement: this._options.placement,
          modifiers: [{ name: "offset", options: { offset: [0, this._options.offset] } }],
        });
      }),
      (i.prototype._getTriggerEvents = function () {
        switch (this._options.triggerType) {
          case "hover":
            return { showEvents: ["mouseenter", "focus"], hideEvents: ["mouseleave", "blur"] };
          case "click":
            return { showEvents: ["click", "focus"], hideEvents: ["focusout", "blur"] };
          case "none":
            return { showEvents: [], hideEvents: [] };
          default:
            return { showEvents: ["mouseenter", "focus"], hideEvents: ["mouseleave", "blur"] };
        }
      }),
      (i.prototype._setupKeydownListener = function () {
        var t = this;
        (this._keydownEventListener = function (e) {
          e.key === "Escape" && t.hide();
        }),
          document.body.addEventListener("keydown", this._keydownEventListener, !0);
      }),
      (i.prototype._removeKeydownListener = function () {
        document.body.removeEventListener("keydown", this._keydownEventListener, !0);
      }),
      (i.prototype._setupClickOutsideListener = function () {
        var t = this;
        (this._clickOutsideEventListener = function (e) {
          t._handleClickOutside(e, t._targetEl);
        }),
          document.body.addEventListener("click", this._clickOutsideEventListener, !0);
      }),
      (i.prototype._removeClickOutsideListener = function () {
        document.body.removeEventListener("click", this._clickOutsideEventListener, !0);
      }),
      (i.prototype._handleClickOutside = function (t, e) {
        var r = t.target;
        r !== e && !e.contains(r) && !this._triggerEl.contains(r) && this.isVisible() && this.hide();
      }),
      (i.prototype.isVisible = function () {
        return this._visible;
      }),
      (i.prototype.toggle = function () {
        this.isVisible() ? this.hide() : this.show(), this._options.onToggle(this);
      }),
      (i.prototype.show = function () {
        this._targetEl.classList.remove("opacity-0", "invisible"),
          this._targetEl.classList.add("opacity-100", "visible"),
          this._popperInstance.setOptions(function (t) {
            return Y(Y({}, t), {
              modifiers: It(It([], t.modifiers, !0), [{ name: "eventListeners", enabled: !0 }], !1),
            });
          }),
          this._setupClickOutsideListener(),
          this._setupKeydownListener(),
          this._popperInstance.update(),
          (this._visible = !0),
          this._options.onShow(this);
      }),
      (i.prototype.hide = function () {
        this._targetEl.classList.remove("opacity-100", "visible"),
          this._targetEl.classList.add("opacity-0", "invisible"),
          this._popperInstance.setOptions(function (t) {
            return Y(Y({}, t), {
              modifiers: It(It([], t.modifiers, !0), [{ name: "eventListeners", enabled: !1 }], !1),
            });
          }),
          this._removeClickOutsideListener(),
          this._removeKeydownListener(),
          (this._visible = !1),
          this._options.onHide(this);
      }),
      i
    );
  })();
typeof window < "u" && (window.Popover = Ge);
function xr() {
  document.querySelectorAll("[data-popover-target]").forEach(function (i) {
    var t = i.getAttribute("data-popover-target"),
      e = document.getElementById(t);
    if (e) {
      var r = i.getAttribute("data-popover-trigger"),
        n = i.getAttribute("data-popover-placement"),
        o = i.getAttribute("data-popover-offset");
      new Ge(e, i, {
        placement: n || yt.placement,
        offset: o ? parseInt(o) : yt.offset,
        triggerType: r || yt.triggerType,
      });
    } else console.error('The popover element with id "'.concat(t, '" does not exist. Please check the data-popover-target attribute.'));
  });
}
var Ft =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Ft =
          Object.assign ||
          function (i) {
            for (var t, e = 1, r = arguments.length; e < r; e++) {
              t = arguments[e];
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
            }
            return i;
          }),
        Ft.apply(this, arguments)
      );
    },
  te = { triggerType: "hover", onShow: function () {}, onHide: function () {}, onToggle: function () {} },
  Qe = (function () {
    function i(t, e, r, n) {
      t === void 0 && (t = null),
        e === void 0 && (e = null),
        r === void 0 && (r = null),
        n === void 0 && (n = te),
        (this._parentEl = t),
        (this._triggerEl = e),
        (this._targetEl = r),
        (this._options = Ft(Ft({}, te), n)),
        (this._visible = !1),
        this._init();
    }
    return (
      (i.prototype._init = function () {
        var t = this;
        if (this._triggerEl) {
          var e = this._getTriggerEventTypes(this._options.triggerType);
          e.showEvents.forEach(function (r) {
            t._triggerEl.addEventListener(r, function () {
              t.show();
            }),
              t._targetEl.addEventListener(r, function () {
                t.show();
              });
          }),
            e.hideEvents.forEach(function (r) {
              t._parentEl.addEventListener(r, function () {
                t._parentEl.matches(":hover") || t.hide();
              });
            });
        }
      }),
      (i.prototype.hide = function () {
        this._targetEl.classList.add("hidden"),
          this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "false"),
          (this._visible = !1),
          this._options.onHide(this);
      }),
      (i.prototype.show = function () {
        this._targetEl.classList.remove("hidden"),
          this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "true"),
          (this._visible = !0),
          this._options.onShow(this);
      }),
      (i.prototype.toggle = function () {
        this._visible ? this.hide() : this.show();
      }),
      (i.prototype.isHidden = function () {
        return !this._visible;
      }),
      (i.prototype.isVisible = function () {
        return this._visible;
      }),
      (i.prototype._getTriggerEventTypes = function (t) {
        switch (t) {
          case "hover":
            return { showEvents: ["mouseenter", "focus"], hideEvents: ["mouseleave", "blur"] };
          case "click":
            return { showEvents: ["click", "focus"], hideEvents: ["focusout", "blur"] };
          case "none":
            return { showEvents: [], hideEvents: [] };
          default:
            return { showEvents: ["mouseenter", "focus"], hideEvents: ["mouseleave", "blur"] };
        }
      }),
      i
    );
  })();
typeof window < "u" && (window.Dial = Qe);
function kr() {
  document.querySelectorAll("[data-dial-init]").forEach(function (i) {
    var t = i.querySelector("[data-dial-toggle]");
    if (t) {
      var e = t.getAttribute("data-dial-toggle"),
        r = document.getElementById(e);
      if (r) {
        var n = t.getAttribute("data-dial-trigger");
        new Qe(i, t, r, { triggerType: n || te.triggerType });
      } else
        console.error(
          "Dial with id ".concat(
            e,
            " does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"
          )
        );
    } else console.error("Dial with id ".concat(i.id, " does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"));
  });
}
var Lr = new ci("load", [di, ui, fi, pi, Xe, br, _r, wr, Er, xr, kr]);
Lr.init();
const Ar = { class: "bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700" },
  Or = { class: "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4" },
  Tr = { href: "#", class: "flex items-center" },
  Cr = A(
    "img",
    { src: "https://flowbite.com/docs/images/logo.svg", class: "h-8 mr-3", alt: "Flowbite Logo" },
    null,
    -1
  ),
  Pr = { class: "self-center text-2xl font-semibold whitespace-nowrap dark:text-white" },
  jr = A(
    "button",
    {
      "data-collapse-toggle": "navbar-dropdown",
      type: "button",
      class:
        "inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
      "aria-controls": "navbar-dropdown",
      "aria-expanded": "false",
    },
    [
      A("span", { class: "sr-only" }, "Open main menu"),
      A(
        "svg",
        {
          class: "w-6 h-6",
          "aria-hidden": "true",
          fill: "currentColor",
          viewBox: "0 0 20 20",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          A("path", {
            "fill-rule": "evenodd",
            d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
            "clip-rule": "evenodd",
          }),
        ]
      ),
    ],
    -1
  ),
  Dr = { id: "navbar-dropdown", class: "hidden w-full md:block md:w-auto" },
  Ir = {
    class:
      "flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700",
  },
  Sr = {
    id: "dropdownNavbarLink",
    "data-dropdown-toggle": "dropdownNavbar",
    class:
      "flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent",
  },
  Br = A(
    "svg",
    {
      class: "w-5 h-5 ml-1",
      "aria-hidden": "true",
      fill: "currentColor",
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      A("path", {
        "fill-rule": "evenodd",
        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
        "clip-rule": "evenodd",
      }),
    ],
    -1
  ),
  Hr = {
    id: "dropdownNavbar",
    class:
      "z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600",
  },
  qr = { class: "py-2 text-sm text-gray-700 dark:text-gray-400", "aria-labelledby": "dropdownLargeButton" },
  Mr = { class: "py-1" },
  Rr = {
    __name: "navbar",
    props: { title: null },
    setup(i) {
      const t = i,
        e = oi();
      return (
        ai(() => {
          Xe();
        }),
        (r, n) => {
          const o = ni;
          return (
            je(),
            si("nav", Ar, [
              A("div", Or, [
                A("a", Tr, [Cr, A("span", Pr, ye(t.title), 1)]),
                jr,
                A("div", Dr, [
                  A("ul", Ir, [
                    A("li", null, [
                      tt(
                        o,
                        {
                          to: "/",
                          "active-class": "md:text-blue-700",
                          class:
                            "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                        },
                        { default: et(() => [$("Home")]), _: 1 }
                      ),
                    ]),
                    A("li", null, [
                      A("button", Sr, [
                        $(
                          ye(
                            Object.keys(R(e).query).length > 0
                              ? "Query"
                              : R(e).hash !== ""
                              ? "Hash"
                              : Object.keys(R(e).params).length > 0
                              ? "Parametros"
                              : R(e).path == "/contactos/contacto"
                              ? "Sección Contacto"
                              : "Contactos"
                          ) + " ",
                          1
                        ),
                        Br,
                      ]),
                      A("div", Hr, [
                        A("ul", qr, [
                          tt(
                            o,
                            {
                              to: "/contactos",
                              "active-class":
                                Object.keys(R(e).query).length === 0 && !R(e).hash ? "md:text-blue-700" : "",
                              class: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                            },
                            { default: et(() => [$("Contactos")]), _: 1 },
                            8,
                            ["active-class"]
                          ),
                          tt(
                            o,
                            {
                              to: "/contactos/contacto",
                              "active-class": "md:text-blue-700",
                              class: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                            },
                            { default: et(() => [$("Sección Contacto")]), _: 1 }
                          ),
                        ]),
                        A("div", Mr, [
                          tt(
                            o,
                            {
                              to: "/contactos/123",
                              "active-class": "md:text-blue-700",
                              class:
                                "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white",
                            },
                            { default: et(() => [$("Parametros")]), _: 1 }
                          ),
                          tt(
                            o,
                            {
                              to: "/contactos?v=123",
                              "active-class":
                                Object.keys(R(e).query).length > 0 && !R(e).hash ? "md:text-blue-700" : "",
                              class:
                                "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white",
                            },
                            { default: et(() => [$("Query")]), _: 1 },
                            8,
                            ["active-class"]
                          ),
                          tt(
                            o,
                            {
                              to: { path: "/contactos", hash: "#123" },
                              "active-class":
                                Object.keys(R(e).query).length === 0 && R(e).hash ? "md:text-blue-700" : "",
                              class:
                                "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white",
                            },
                            { default: et(() => [$("Hash")]), _: 1 },
                            8,
                            ["active-class"]
                          ),
                        ]),
                      ]),
                    ]),
                    tt(
                      o,
                      {
                        to: "/api-movies",
                        "active-class": "md:text-blue-700",
                        class:
                          "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                      },
                      { default: et(() => [$("Api Movies")]), _: 1 }
                    ),
                  ]),
                ]),
              ]),
            ])
          );
        }
      );
    },
  },
  Wr = {
    __name: "default",
    props: { titleDefault: null },
    setup(i) {
      const t = i;
      return (e, r) => (je(), li(Rr, { title: t.titleDefault }, null, 8, ["title"]));
    },
  };
export { Wr as default };
