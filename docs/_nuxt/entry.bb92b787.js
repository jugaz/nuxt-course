function as(e, t) {
  const n = Object.create(null),
    r = e.split(",");
  for (let s = 0; s < r.length; s++) n[r[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
const le = {},
  $t = [],
  je = () => {},
  Wl = () => !1,
  ql = /^on[^a-z]/,
  Pn = (e) => ql.test(e),
  us = (e) => e.startsWith("onUpdate:"),
  he = Object.assign,
  fs = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Vl = Object.prototype.hasOwnProperty,
  G = (e, t) => Vl.call(e, t),
  V = Array.isArray,
  Lt = (e) => xn(e) === "[object Map]",
  oi = (e) => xn(e) === "[object Set]",
  zl = (e) => xn(e) === "[object RegExp]",
  Q = (e) => typeof e == "function",
  ae = (e) => typeof e == "string",
  ds = (e) => typeof e == "symbol",
  ce = (e) => e !== null && typeof e == "object",
  hs = (e) => ce(e) && Q(e.then) && Q(e.catch),
  ii = Object.prototype.toString,
  xn = (e) => ii.call(e),
  Jl = (e) => xn(e).slice(8, -1),
  li = (e) => xn(e) === "[object Object]",
  ps = (e) => ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  an = as(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  or = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Ql = /-(\w)/g,
  ze = or((e) => e.replace(Ql, (t, n) => (n ? n.toUpperCase() : ""))),
  Yl = /\B([A-Z])/g,
  Jt = or((e) => e.replace(Yl, "-$1").toLowerCase()),
  ir = or((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  mr = or((e) => (e ? `on${ir(e)}` : "")),
  bn = (e, t) => !Object.is(e, t),
  Nt = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Vn = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Ir = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  ci = (e) => {
    const t = ae(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let Ds;
const Mr = () =>
  Ds ||
  (Ds =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function gs(e) {
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = ae(r) ? ec(r) : gs(r);
      if (s) for (const o in s) t[o] = s[o];
    }
    return t;
  } else {
    if (ae(e)) return e;
    if (ce(e)) return e;
  }
}
const Xl = /;(?![^(]*\))/g,
  Zl = /:([^]+)/,
  Gl = new RegExp("\\/\\*.*?\\*\\/", "gs");
function ec(e) {
  const t = {};
  return (
    e
      .replace(Gl, "")
      .split(Xl)
      .forEach((n) => {
        if (n) {
          const r = n.split(Zl);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function ms(e) {
  let t = "";
  if (ae(e)) t = e;
  else if (V(e))
    for (let n = 0; n < e.length; n++) {
      const r = ms(e[n]);
      r && (t += r + " ");
    }
  else if (ce(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const tc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  nc = as(tc);
function ai(e) {
  return !!e || e === "";
}
const dp = (e) =>
    ae(e)
      ? e
      : e == null
      ? ""
      : V(e) || (ce(e) && (e.toString === ii || !Q(e.toString)))
      ? JSON.stringify(e, ui, 2)
      : String(e),
  ui = (e, t) =>
    t && t.__v_isRef
      ? ui(e, t.value)
      : Lt(t)
      ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, s]) => ((n[`${r} =>`] = s), n), {}) }
      : oi(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : ce(t) && !V(t) && !li(t)
      ? String(t)
      : t;
let Le;
class rc {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Le),
      !t && Le && (this.index = (Le.scopes || (Le.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Le;
      try {
        return (Le = this), t();
      } finally {
        Le = n;
      }
    }
  }
  on() {
    Le = this;
  }
  off() {
    Le = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes) for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function sc(e, t = Le) {
  t && t.active && t.effects.push(e);
}
function oc() {
  return Le;
}
const ys = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  fi = (e) => (e.w & gt) > 0,
  di = (e) => (e.n & gt) > 0,
  ic = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= gt;
  },
  lc = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let r = 0; r < t.length; r++) {
        const s = t[r];
        fi(s) && !di(s) ? s.delete(e) : (t[n++] = s), (s.w &= ~gt), (s.n &= ~gt);
      }
      t.length = n;
    }
  },
  zn = new WeakMap();
let on = 0,
  gt = 1;
const $r = 30;
let Ne;
const Rt = Symbol(""),
  Lr = Symbol("");
class _s {
  constructor(t, n = null, r) {
    (this.fn = t), (this.scheduler = n), (this.active = !0), (this.deps = []), (this.parent = void 0), sc(this, r);
  }
  run() {
    if (!this.active) return this.fn();
    let t = Ne,
      n = dt;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (this.parent = Ne), (Ne = this), (dt = !0), (gt = 1 << ++on), on <= $r ? ic(this) : Ks(this), this.fn();
    } finally {
      on <= $r && lc(this),
        (gt = 1 << --on),
        (Ne = this.parent),
        (dt = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Ne === this ? (this.deferStop = !0) : this.active && (Ks(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Ks(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let dt = !0;
const hi = [];
function Qt() {
  hi.push(dt), (dt = !1);
}
function Yt() {
  const e = hi.pop();
  dt = e === void 0 ? !0 : e;
}
function Te(e, t, n) {
  if (dt && Ne) {
    let r = zn.get(e);
    r || zn.set(e, (r = new Map()));
    let s = r.get(n);
    s || r.set(n, (s = ys())), pi(s);
  }
}
function pi(e, t) {
  let n = !1;
  on <= $r ? di(e) || ((e.n |= gt), (n = !fi(e))) : (n = !e.has(Ne)), n && (e.add(Ne), Ne.deps.push(e));
}
function et(e, t, n, r, s, o) {
  const i = zn.get(e);
  if (!i) return;
  let l = [];
  if (t === "clear") l = [...i.values()];
  else if (n === "length" && V(e)) {
    const c = Number(r);
    i.forEach((a, u) => {
      (u === "length" || u >= c) && l.push(a);
    });
  } else
    switch ((n !== void 0 && l.push(i.get(n)), t)) {
      case "add":
        V(e) ? ps(n) && l.push(i.get("length")) : (l.push(i.get(Rt)), Lt(e) && l.push(i.get(Lr)));
        break;
      case "delete":
        V(e) || (l.push(i.get(Rt)), Lt(e) && l.push(i.get(Lr)));
        break;
      case "set":
        Lt(e) && l.push(i.get(Rt));
        break;
    }
  if (l.length === 1) l[0] && Nr(l[0]);
  else {
    const c = [];
    for (const a of l) a && c.push(...a);
    Nr(ys(c));
  }
}
function Nr(e, t) {
  const n = V(e) ? e : [...e];
  for (const r of n) r.computed && Ws(r);
  for (const r of n) r.computed || Ws(r);
}
function Ws(e, t) {
  (e !== Ne || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
function cc(e, t) {
  var n;
  return (n = zn.get(e)) == null ? void 0 : n.get(t);
}
const ac = as("__proto__,__v_isRef,__isVue"),
  gi = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(ds)
  ),
  uc = bs(),
  fc = bs(!1, !0),
  dc = bs(!0),
  qs = hc();
function hc() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = ee(this);
        for (let o = 0, i = this.length; o < i; o++) Te(r, "get", o + "");
        const s = r[t](...n);
        return s === -1 || s === !1 ? r[t](...n.map(ee)) : s;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        Qt();
        const r = ee(this)[t].apply(this, n);
        return Yt(), r;
      };
    }),
    e
  );
}
function pc(e) {
  const t = ee(this);
  return Te(t, "has", e), t.hasOwnProperty(e);
}
function bs(e = !1, t = !1) {
  return function (r, s, o) {
    if (s === "__v_isReactive") return !e;
    if (s === "__v_isReadonly") return e;
    if (s === "__v_isShallow") return t;
    if (s === "__v_raw" && o === (e ? (t ? Oc : vi) : t ? bi : _i).get(r)) return r;
    const i = V(r);
    if (!e) {
      if (i && G(qs, s)) return Reflect.get(qs, s, o);
      if (s === "hasOwnProperty") return pc;
    }
    const l = Reflect.get(r, s, o);
    return (ds(s) ? gi.has(s) : ac(s)) || (e || Te(r, "get", s), t)
      ? l
      : ge(l)
      ? i && ps(s)
        ? l
        : l.value
      : ce(l)
      ? e
        ? Ei(l)
        : Je(l)
      : l;
  };
}
const gc = mi(),
  mc = mi(!0);
function mi(e = !1) {
  return function (n, r, s, o) {
    let i = n[r];
    if (Tt(i) && ge(i) && !ge(s)) return !1;
    if (!e && (!Jn(s) && !Tt(s) && ((i = ee(i)), (s = ee(s))), !V(n) && ge(i) && !ge(s))) return (i.value = s), !0;
    const l = V(n) && ps(r) ? Number(r) < n.length : G(n, r),
      c = Reflect.set(n, r, s, o);
    return n === ee(o) && (l ? bn(s, i) && et(n, "set", r, s) : et(n, "add", r, s)), c;
  };
}
function yc(e, t) {
  const n = G(e, t);
  e[t];
  const r = Reflect.deleteProperty(e, t);
  return r && n && et(e, "delete", t, void 0), r;
}
function _c(e, t) {
  const n = Reflect.has(e, t);
  return (!ds(t) || !gi.has(t)) && Te(e, "has", t), n;
}
function bc(e) {
  return Te(e, "iterate", V(e) ? "length" : Rt), Reflect.ownKeys(e);
}
const yi = { get: uc, set: gc, deleteProperty: yc, has: _c, ownKeys: bc },
  vc = {
    get: dc,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  Ec = he({}, yi, { get: fc, set: mc }),
  vs = (e) => e,
  lr = (e) => Reflect.getPrototypeOf(e);
function In(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = ee(e),
    o = ee(t);
  n || (t !== o && Te(s, "get", t), Te(s, "get", o));
  const { has: i } = lr(s),
    l = r ? vs : n ? Cs : vn;
  if (i.call(s, t)) return l(e.get(t));
  if (i.call(s, o)) return l(e.get(o));
  e !== s && e.get(t);
}
function Mn(e, t = !1) {
  const n = this.__v_raw,
    r = ee(n),
    s = ee(e);
  return t || (e !== s && Te(r, "has", e), Te(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function $n(e, t = !1) {
  return (e = e.__v_raw), !t && Te(ee(e), "iterate", Rt), Reflect.get(e, "size", e);
}
function Vs(e) {
  e = ee(e);
  const t = ee(this);
  return lr(t).has.call(t, e) || (t.add(e), et(t, "add", e, e)), this;
}
function zs(e, t) {
  t = ee(t);
  const n = ee(this),
    { has: r, get: s } = lr(n);
  let o = r.call(n, e);
  o || ((e = ee(e)), (o = r.call(n, e)));
  const i = s.call(n, e);
  return n.set(e, t), o ? bn(t, i) && et(n, "set", e, t) : et(n, "add", e, t), this;
}
function Js(e) {
  const t = ee(this),
    { has: n, get: r } = lr(t);
  let s = n.call(t, e);
  s || ((e = ee(e)), (s = n.call(t, e))), r && r.call(t, e);
  const o = t.delete(e);
  return s && et(t, "delete", e, void 0), o;
}
function Qs() {
  const e = ee(this),
    t = e.size !== 0,
    n = e.clear();
  return t && et(e, "clear", void 0, void 0), n;
}
function Ln(e, t) {
  return function (r, s) {
    const o = this,
      i = o.__v_raw,
      l = ee(i),
      c = t ? vs : e ? Cs : vn;
    return !e && Te(l, "iterate", Rt), i.forEach((a, u) => r.call(s, c(a), c(u), o));
  };
}
function Nn(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      o = ee(s),
      i = Lt(o),
      l = e === "entries" || (e === Symbol.iterator && i),
      c = e === "keys" && i,
      a = s[e](...r),
      u = n ? vs : t ? Cs : vn;
    return (
      !t && Te(o, "iterate", c ? Lr : Rt),
      {
        next() {
          const { value: f, done: p } = a.next();
          return p ? { value: f, done: p } : { value: l ? [u(f[0]), u(f[1])] : u(f), done: p };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function st(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function wc() {
  const e = {
      get(o) {
        return In(this, o);
      },
      get size() {
        return $n(this);
      },
      has: Mn,
      add: Vs,
      set: zs,
      delete: Js,
      clear: Qs,
      forEach: Ln(!1, !1),
    },
    t = {
      get(o) {
        return In(this, o, !1, !0);
      },
      get size() {
        return $n(this);
      },
      has: Mn,
      add: Vs,
      set: zs,
      delete: Js,
      clear: Qs,
      forEach: Ln(!1, !0),
    },
    n = {
      get(o) {
        return In(this, o, !0);
      },
      get size() {
        return $n(this, !0);
      },
      has(o) {
        return Mn.call(this, o, !0);
      },
      add: st("add"),
      set: st("set"),
      delete: st("delete"),
      clear: st("clear"),
      forEach: Ln(!0, !1),
    },
    r = {
      get(o) {
        return In(this, o, !0, !0);
      },
      get size() {
        return $n(this, !0);
      },
      has(o) {
        return Mn.call(this, o, !0);
      },
      add: st("add"),
      set: st("set"),
      delete: st("delete"),
      clear: st("clear"),
      forEach: Ln(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = Nn(o, !1, !1)), (n[o] = Nn(o, !0, !1)), (t[o] = Nn(o, !1, !0)), (r[o] = Nn(o, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [Cc, Rc, Tc, Pc] = wc();
function Es(e, t) {
  const n = t ? (e ? Pc : Tc) : e ? Rc : Cc;
  return (r, s, o) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? r
      : Reflect.get(G(n, s) && s in r ? n : r, s, o);
}
const xc = { get: Es(!1, !1) },
  Ac = { get: Es(!1, !0) },
  kc = { get: Es(!0, !1) },
  _i = new WeakMap(),
  bi = new WeakMap(),
  vi = new WeakMap(),
  Oc = new WeakMap();
function Sc(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Hc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Sc(Jl(e));
}
function Je(e) {
  return Tt(e) ? e : ws(e, !1, yi, xc, _i);
}
function Ic(e) {
  return ws(e, !1, Ec, Ac, bi);
}
function Ei(e) {
  return ws(e, !0, vc, kc, vi);
}
function ws(e, t, n, r, s) {
  if (!ce(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = s.get(e);
  if (o) return o;
  const i = Hc(e);
  if (i === 0) return e;
  const l = new Proxy(e, i === 2 ? r : n);
  return s.set(e, l), l;
}
function Ft(e) {
  return Tt(e) ? Ft(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Tt(e) {
  return !!(e && e.__v_isReadonly);
}
function Jn(e) {
  return !!(e && e.__v_isShallow);
}
function wi(e) {
  return Ft(e) || Tt(e);
}
function ee(e) {
  const t = e && e.__v_raw;
  return t ? ee(t) : e;
}
function Ci(e) {
  return Vn(e, "__v_skip", !0), e;
}
const vn = (e) => (ce(e) ? Je(e) : e),
  Cs = (e) => (ce(e) ? Ei(e) : e);
function Ri(e) {
  dt && Ne && ((e = ee(e)), pi(e.dep || (e.dep = ys())));
}
function Ti(e, t) {
  e = ee(e);
  const n = e.dep;
  n && Nr(n);
}
function ge(e) {
  return !!(e && e.__v_isRef === !0);
}
function un(e) {
  return Pi(e, !1);
}
function Fr(e) {
  return Pi(e, !0);
}
function Pi(e, t) {
  return ge(e) ? e : new Mc(e, t);
}
class Mc {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : ee(t)),
      (this._value = n ? t : vn(t));
  }
  get value() {
    return Ri(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Jn(t) || Tt(t);
    (t = n ? t : ee(t)), bn(t, this._rawValue) && ((this._rawValue = t), (this._value = n ? t : vn(t)), Ti(this));
  }
}
function me(e) {
  return ge(e) ? e.value : e;
}
const $c = {
  get: (e, t, n) => me(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return ge(s) && !ge(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function xi(e) {
  return Ft(e) ? e : new Proxy(e, $c);
}
class Lc {
  constructor(t, n, r) {
    (this._object = t), (this._key = n), (this._defaultValue = r), (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return cc(ee(this._object), this._key);
  }
}
class Nc {
  constructor(t) {
    (this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0);
  }
  get value() {
    return this._getter();
  }
}
function Ai(e, t, n) {
  return ge(e) ? e : Q(e) ? new Nc(e) : ce(e) && arguments.length > 1 ? Fc(e, t, n) : un(e);
}
function Fc(e, t, n) {
  const r = e[t];
  return ge(r) ? r : new Lc(e, t, n);
}
class jc {
  constructor(t, n, r, s) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new _s(t, () => {
        this._dirty || ((this._dirty = !0), Ti(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = r);
  }
  get value() {
    const t = ee(this);
    return Ri(t), (t._dirty || !t._cacheable) && ((t._dirty = !1), (t._value = t.effect.run())), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function Bc(e, t, n = !1) {
  let r, s;
  const o = Q(e);
  return o ? ((r = e), (s = je)) : ((r = e.get), (s = e.set)), new jc(r, s, o || !s, n);
}
function ht(e, t, n, r) {
  let s;
  try {
    s = r ? e(...r) : e();
  } catch (o) {
    Xt(o, t, n);
  }
  return s;
}
function Ie(e, t, n, r) {
  if (Q(e)) {
    const o = ht(e, t, n, r);
    return (
      o &&
        hs(o) &&
        o.catch((i) => {
          Xt(i, t, n);
        }),
      o
    );
  }
  const s = [];
  for (let o = 0; o < e.length; o++) s.push(Ie(e[o], t, n, r));
  return s;
}
function Xt(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy,
      l = n;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let u = 0; u < a.length; u++) if (a[u](e, i, l) === !1) return;
      }
      o = o.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      ht(c, null, 10, [e, i, l]);
      return;
    }
  }
  Uc(e, n, s, r);
}
function Uc(e, t, n, r = !0) {
  console.error(e);
}
let En = !1,
  jr = !1;
const ve = [];
let qe = 0;
const jt = [];
let Ze = null,
  vt = 0;
const ki = Promise.resolve();
let Rs = null;
function Zt(e) {
  const t = Rs || ki;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Dc(e) {
  let t = qe + 1,
    n = ve.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1;
    wn(ve[r]) < e ? (t = r + 1) : (n = r);
  }
  return t;
}
function cr(e) {
  (!ve.length || !ve.includes(e, En && e.allowRecurse ? qe + 1 : qe)) &&
    (e.id == null ? ve.push(e) : ve.splice(Dc(e.id), 0, e), Oi());
}
function Oi() {
  !En && !jr && ((jr = !0), (Rs = ki.then(Hi)));
}
function Kc(e) {
  const t = ve.indexOf(e);
  t > qe && ve.splice(t, 1);
}
function Si(e) {
  V(e) ? jt.push(...e) : (!Ze || !Ze.includes(e, e.allowRecurse ? vt + 1 : vt)) && jt.push(e), Oi();
}
function Ys(e, t = En ? qe + 1 : 0) {
  for (; t < ve.length; t++) {
    const n = ve[t];
    n && n.pre && (ve.splice(t, 1), t--, n());
  }
}
function Qn(e) {
  if (jt.length) {
    const t = [...new Set(jt)];
    if (((jt.length = 0), Ze)) {
      Ze.push(...t);
      return;
    }
    for (Ze = t, Ze.sort((n, r) => wn(n) - wn(r)), vt = 0; vt < Ze.length; vt++) Ze[vt]();
    (Ze = null), (vt = 0);
  }
}
const wn = (e) => (e.id == null ? 1 / 0 : e.id),
  Wc = (e, t) => {
    const n = wn(e) - wn(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Hi(e) {
  (jr = !1), (En = !0), ve.sort(Wc);
  const t = je;
  try {
    for (qe = 0; qe < ve.length; qe++) {
      const n = ve[qe];
      n && n.active !== !1 && ht(n, null, 14);
    }
  } finally {
    (qe = 0), (ve.length = 0), Qn(), (En = !1), (Rs = null), (ve.length || jt.length) && Hi();
  }
}
function qc(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || le;
  let s = n;
  const o = t.startsWith("update:"),
    i = o && t.slice(7);
  if (i && i in r) {
    const u = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: f, trim: p } = r[u] || le;
    p && (s = n.map((b) => (ae(b) ? b.trim() : b))), f && (s = n.map(Ir));
  }
  let l,
    c = r[(l = mr(t))] || r[(l = mr(ze(t)))];
  !c && o && (c = r[(l = mr(Jt(t)))]), c && Ie(c, e, 6, s);
  const a = r[l + "Once"];
  if (a) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), Ie(a, e, 6, s);
  }
}
function Ii(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const o = e.emits;
  let i = {},
    l = !1;
  if (!Q(e)) {
    const c = (a) => {
      const u = Ii(a, t, !0);
      u && ((l = !0), he(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !o && !l
    ? (ce(e) && r.set(e, null), null)
    : (V(o) ? o.forEach((c) => (i[c] = null)) : he(i, o), ce(e) && r.set(e, i), i);
}
function ar(e, t) {
  return !e || !Pn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")), G(e, t[0].toLowerCase() + t.slice(1)) || G(e, Jt(t)) || G(e, t));
}
let Ae = null,
  Mi = null;
function Yn(e) {
  const t = Ae;
  return (Ae = e), (Mi = (e && e.type.__scopeId) || null), t;
}
function $i(e, t = Ae, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && ao(-1);
    const o = Yn(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Yn(o), r._d && ao(1);
    }
    return i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function yr(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    props: o,
    propsOptions: [i],
    slots: l,
    attrs: c,
    emit: a,
    render: u,
    renderCache: f,
    data: p,
    setupState: b,
    ctx: y,
    inheritAttrs: E,
  } = e;
  let x, v;
  const g = Yn(e);
  try {
    if (n.shapeFlag & 4) {
      const _ = s || r;
      (x = Se(u.call(_, _, f, o, b, p, y))), (v = c);
    } else {
      const _ = t;
      (x = Se(_.length > 1 ? _(o, { attrs: c, slots: l, emit: a }) : _(o, null))), (v = t.props ? c : zc(c));
    }
  } catch (_) {
    (pn.length = 0), Xt(_, e, 1), (x = de(Me));
  }
  let R = x;
  if (v && E !== !1) {
    const _ = Object.keys(v),
      { shapeFlag: A } = R;
    _.length && A & 7 && (i && _.some(us) && (v = Jc(v, i)), (R = tt(R, v)));
  }
  return (
    n.dirs && ((R = tt(R)), (R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (R.transition = n.transition),
    (x = R),
    Yn(g),
    x
  );
}
function Vc(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (Rn(r)) {
      if (r.type !== Me || r.children === "v-if") {
        if (t) return;
        t = r;
      }
    } else return;
  }
  return t;
}
const zc = (e) => {
    let t;
    for (const n in e) (n === "class" || n === "style" || Pn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Jc = (e, t) => {
    const n = {};
    for (const r in e) (!us(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function Qc(e, t, n) {
  const { props: r, children: s, component: o } = e,
    { props: i, children: l, patchFlag: c } = t,
    a = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return r ? Xs(r, i, a) : !!i;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const p = u[f];
        if (i[p] !== r[p] && !ar(a, p)) return !0;
      }
    }
  } else return (s || l) && (!l || !l.$stable) ? !0 : r === i ? !1 : r ? (i ? Xs(r, i, a) : !0) : !!i;
  return !1;
}
function Xs(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !ar(n, o)) return !0;
  }
  return !1;
}
function Ts({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Li = (e) => e.__isSuspense,
  Yc = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, r, s, o, i, l, c, a) {
      e == null ? Xc(t, n, r, s, o, i, l, c, a) : Zc(e, t, n, r, s, i, l, c, a);
    },
    hydrate: Gc,
    create: Ps,
    normalize: ea,
  },
  Ni = Yc;
function Cn(e, t) {
  const n = e.props && e.props[t];
  Q(n) && n();
}
function Xc(e, t, n, r, s, o, i, l, c) {
  const {
      p: a,
      o: { createElement: u },
    } = c,
    f = u("div"),
    p = (e.suspense = Ps(e, s, r, t, f, n, o, i, l, c));
  a(null, (p.pendingBranch = e.ssContent), f, null, r, p, o, i),
    p.deps > 0
      ? (Cn(e, "onPending"), Cn(e, "onFallback"), a(null, e.ssFallback, t, n, r, null, o, i), Bt(p, e.ssFallback))
      : p.resolve(!1, !0);
}
function Zc(e, t, n, r, s, o, i, l, { p: c, um: a, o: { createElement: u } }) {
  const f = (t.suspense = e.suspense);
  (f.vnode = t), (t.el = e.el);
  const p = t.ssContent,
    b = t.ssFallback,
    { activeBranch: y, pendingBranch: E, isInFallback: x, isHydrating: v } = f;
  if (E)
    (f.pendingBranch = p),
      Fe(p, E)
        ? (c(E, p, f.hiddenContainer, null, s, f, o, i, l),
          f.deps <= 0 ? f.resolve() : x && (c(y, b, n, r, s, null, o, i, l), Bt(f, b)))
        : (f.pendingId++,
          v ? ((f.isHydrating = !1), (f.activeBranch = E)) : a(E, s, f),
          (f.deps = 0),
          (f.effects.length = 0),
          (f.hiddenContainer = u("div")),
          x
            ? (c(null, p, f.hiddenContainer, null, s, f, o, i, l),
              f.deps <= 0 ? f.resolve() : (c(y, b, n, r, s, null, o, i, l), Bt(f, b)))
            : y && Fe(p, y)
            ? (c(y, p, n, r, s, f, o, i, l), f.resolve(!0))
            : (c(null, p, f.hiddenContainer, null, s, f, o, i, l), f.deps <= 0 && f.resolve()));
  else if (y && Fe(p, y)) c(y, p, n, r, s, f, o, i, l), Bt(f, p);
  else if (
    (Cn(t, "onPending"),
    (f.pendingBranch = p),
    f.pendingId++,
    c(null, p, f.hiddenContainer, null, s, f, o, i, l),
    f.deps <= 0)
  )
    f.resolve();
  else {
    const { timeout: g, pendingId: R } = f;
    g > 0
      ? setTimeout(() => {
          f.pendingId === R && f.fallback(b);
        }, g)
      : g === 0 && f.fallback(b);
  }
}
function Ps(e, t, n, r, s, o, i, l, c, a, u = !1) {
  const {
    p: f,
    m: p,
    um: b,
    n: y,
    o: { parentNode: E, remove: x },
  } = a;
  let v;
  const g = ta(e);
  g && t != null && t.pendingBranch && ((v = t.pendingId), t.deps++);
  const R = e.props ? ci(e.props.timeout) : void 0,
    _ = {
      vnode: e,
      parent: t,
      parentComponent: n,
      isSVG: i,
      container: r,
      hiddenContainer: s,
      anchor: o,
      deps: 0,
      pendingId: 0,
      timeout: typeof R == "number" ? R : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !0,
      isHydrating: u,
      isUnmounted: !1,
      effects: [],
      resolve(A = !1, M = !1) {
        const {
          vnode: $,
          activeBranch: P,
          pendingBranch: j,
          pendingId: D,
          effects: J,
          parentComponent: N,
          container: z,
        } = _;
        if (_.isHydrating) _.isHydrating = !1;
        else if (!A) {
          const Z = P && j.transition && j.transition.mode === "out-in";
          Z &&
            (P.transition.afterLeave = () => {
              D === _.pendingId && p(j, z, te, 0);
            });
          let { anchor: te } = _;
          P && ((te = y(P)), b(P, N, _, !0)), Z || p(j, z, te, 0);
        }
        Bt(_, j), (_.pendingBranch = null), (_.isInFallback = !1);
        let B = _.parent,
          ue = !1;
        for (; B; ) {
          if (B.pendingBranch) {
            B.effects.push(...J), (ue = !0);
            break;
          }
          B = B.parent;
        }
        ue || Si(J),
          (_.effects = []),
          g && t && t.pendingBranch && v === t.pendingId && (t.deps--, t.deps === 0 && !M && t.resolve()),
          Cn($, "onResolve");
      },
      fallback(A) {
        if (!_.pendingBranch) return;
        const { vnode: M, activeBranch: $, parentComponent: P, container: j, isSVG: D } = _;
        Cn(M, "onFallback");
        const J = y($),
          N = () => {
            _.isInFallback && (f(null, A, j, J, P, null, D, l, c), Bt(_, A));
          },
          z = A.transition && A.transition.mode === "out-in";
        z && ($.transition.afterLeave = N), (_.isInFallback = !0), b($, P, null, !0), z || N();
      },
      move(A, M, $) {
        _.activeBranch && p(_.activeBranch, A, M, $), (_.container = A);
      },
      next() {
        return _.activeBranch && y(_.activeBranch);
      },
      registerDep(A, M) {
        const $ = !!_.pendingBranch;
        $ && _.deps++;
        const P = A.vnode.el;
        A.asyncDep
          .catch((j) => {
            Xt(j, A, 0);
          })
          .then((j) => {
            if (A.isUnmounted || _.isUnmounted || _.pendingId !== A.suspenseId) return;
            A.asyncResolved = !0;
            const { vnode: D } = A;
            qr(A, j, !1), P && (D.el = P);
            const J = !P && A.subTree.el;
            M(A, D, E(P || A.subTree.el), P ? null : y(A.subTree), _, i, c),
              J && x(J),
              Ts(A, D.el),
              $ && --_.deps === 0 && _.resolve();
          });
      },
      unmount(A, M) {
        (_.isUnmounted = !0),
          _.activeBranch && b(_.activeBranch, n, A, M),
          _.pendingBranch && b(_.pendingBranch, n, A, M);
      },
    };
  return _;
}
function Gc(e, t, n, r, s, o, i, l, c) {
  const a = (t.suspense = Ps(t, r, n, e.parentNode, document.createElement("div"), null, s, o, i, l, !0)),
    u = c(e, (a.pendingBranch = t.ssContent), n, a, o, i);
  return a.deps === 0 && a.resolve(!1, !0), u;
}
function ea(e) {
  const { shapeFlag: t, children: n } = e,
    r = t & 32;
  (e.ssContent = Zs(r ? n.default : n)), (e.ssFallback = r ? Zs(n.fallback) : de(Me));
}
function Zs(e) {
  let t;
  if (Q(e)) {
    const n = Wt && e._c;
    n && ((e._d = !1), Et()), (e = e()), n && ((e._d = !0), (t = He), ol());
  }
  return V(e) && (e = Vc(e)), (e = Se(e)), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function Fi(e, t) {
  t && t.pendingBranch ? (V(e) ? t.effects.push(...e) : t.effects.push(e)) : Si(e);
}
function Bt(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: r } = e,
    s = (n.el = t.el);
  r && r.subTree === n && ((r.vnode.el = s), Ts(r, s));
}
function ta(e) {
  var t;
  return ((t = e.props) == null ? void 0 : t.suspensible) != null && e.props.suspensible !== !1;
}
const Fn = {};
function fn(e, t, n) {
  return ji(e, t, n);
}
function ji(e, t, { immediate: n, deep: r, flush: s, onTrack: o, onTrigger: i } = le) {
  var l;
  const c = oc() === ((l = pe) == null ? void 0 : l.scope) ? pe : null;
  let a,
    u = !1,
    f = !1;
  if (
    (ge(e)
      ? ((a = () => e.value), (u = Jn(e)))
      : Ft(e)
      ? ((a = () => e), (r = !0))
      : V(e)
      ? ((f = !0),
        (u = e.some((_) => Ft(_) || Jn(_))),
        (a = () =>
          e.map((_) => {
            if (ge(_)) return _.value;
            if (Ft(_)) return Ct(_);
            if (Q(_)) return ht(_, c, 2);
          })))
      : Q(e)
      ? t
        ? (a = () => ht(e, c, 2))
        : (a = () => {
            if (!(c && c.isUnmounted)) return p && p(), Ie(e, c, 3, [b]);
          })
      : (a = je),
    t && r)
  ) {
    const _ = a;
    a = () => Ct(_());
  }
  let p,
    b = (_) => {
      p = g.onStop = () => {
        ht(_, c, 4);
      };
    },
    y;
  if (qt)
    if (((b = je), t ? n && Ie(t, c, 3, [a(), f ? [] : void 0, b]) : a(), s === "sync")) {
      const _ = Ja();
      y = _.__watcherHandles || (_.__watcherHandles = []);
    } else return je;
  let E = f ? new Array(e.length).fill(Fn) : Fn;
  const x = () => {
    if (g.active)
      if (t) {
        const _ = g.run();
        (r || u || (f ? _.some((A, M) => bn(A, E[M])) : bn(_, E))) &&
          (p && p(), Ie(t, c, 3, [_, E === Fn ? void 0 : f && E[0] === Fn ? [] : E, b]), (E = _));
      } else g.run();
  };
  x.allowRecurse = !!t;
  let v;
  s === "sync"
    ? (v = x)
    : s === "post"
    ? (v = () => ye(x, c && c.suspense))
    : ((x.pre = !0), c && (x.id = c.uid), (v = () => cr(x)));
  const g = new _s(a, v);
  t ? (n ? x() : (E = g.run())) : s === "post" ? ye(g.run.bind(g), c && c.suspense) : g.run();
  const R = () => {
    g.stop(), c && c.scope && fs(c.scope.effects, g);
  };
  return y && y.push(R), R;
}
function na(e, t, n) {
  const r = this.proxy,
    s = ae(e) ? (e.includes(".") ? Bi(r, e) : () => r[e]) : e.bind(r, r);
  let o;
  Q(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = pe;
  mt(this);
  const l = ji(s, o.bind(r), n);
  return i ? mt(i) : pt(), l;
}
function Bi(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
function Ct(e, t) {
  if (!ce(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), ge(e))) Ct(e.value, t);
  else if (V(e)) for (let n = 0; n < e.length; n++) Ct(e[n], t);
  else if (oi(e) || Lt(e))
    e.forEach((n) => {
      Ct(n, t);
    });
  else if (li(e)) for (const n in e) Ct(e[n], t);
  return e;
}
function hp(e, t) {
  const n = Ae;
  if (n === null) return e;
  const r = dr(n) || n.proxy,
    s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, l, c, a = le] = t[o];
    i &&
      (Q(i) && (i = { mounted: i, updated: i }),
      i.deep && Ct(l),
      s.push({ dir: i, instance: r, value: l, oldValue: void 0, arg: c, modifiers: a }));
  }
  return e;
}
function We(e, t, n, r) {
  const s = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    o && (l.oldValue = o[i].value);
    let c = l.dir[r];
    c && (Qt(), Ie(c, n, 8, [e.el, l, e, t]), Yt());
  }
}
function ra() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() };
  return (
    xs(() => {
      e.isMounted = !0;
    }),
    As(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const ke = [Function, Array],
  Ui = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: ke,
    onEnter: ke,
    onAfterEnter: ke,
    onEnterCancelled: ke,
    onBeforeLeave: ke,
    onLeave: ke,
    onAfterLeave: ke,
    onLeaveCancelled: ke,
    onBeforeAppear: ke,
    onAppear: ke,
    onAfterAppear: ke,
    onAppearCancelled: ke,
  },
  sa = {
    name: "BaseTransition",
    props: Ui,
    setup(e, { slots: t }) {
      const n = kn(),
        r = ra();
      let s;
      return () => {
        const o = t.default && Ki(t.default(), !0);
        if (!o || !o.length) return;
        let i = o[0];
        if (o.length > 1) {
          for (const E of o)
            if (E.type !== Me) {
              i = E;
              break;
            }
        }
        const l = ee(e),
          { mode: c } = l;
        if (r.isLeaving) return _r(i);
        const a = Gs(i);
        if (!a) return _r(i);
        const u = Br(a, l, r, n);
        Xn(a, u);
        const f = n.subTree,
          p = f && Gs(f);
        let b = !1;
        const { getTransitionKey: y } = a.type;
        if (y) {
          const E = y();
          s === void 0 ? (s = E) : E !== s && ((s = E), (b = !0));
        }
        if (p && p.type !== Me && (!Fe(a, p) || b)) {
          const E = Br(p, l, r, n);
          if ((Xn(p, E), c === "out-in"))
            return (
              (r.isLeaving = !0),
              (E.afterLeave = () => {
                (r.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              _r(i)
            );
          c === "in-out" &&
            a.type !== Me &&
            (E.delayLeave = (x, v, g) => {
              const R = Di(r, p);
              (R[String(p.key)] = p),
                (x._leaveCb = () => {
                  v(), (x._leaveCb = void 0), delete u.delayedLeave;
                }),
                (u.delayedLeave = g);
            });
        }
        return i;
      };
    },
  },
  oa = sa;
function Di(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function Br(e, t, n, r) {
  const {
      appear: s,
      mode: o,
      persisted: i = !1,
      onBeforeEnter: l,
      onEnter: c,
      onAfterEnter: a,
      onEnterCancelled: u,
      onBeforeLeave: f,
      onLeave: p,
      onAfterLeave: b,
      onLeaveCancelled: y,
      onBeforeAppear: E,
      onAppear: x,
      onAfterAppear: v,
      onAppearCancelled: g,
    } = t,
    R = String(e.key),
    _ = Di(n, e),
    A = (P, j) => {
      P && Ie(P, r, 9, j);
    },
    M = (P, j) => {
      const D = j[1];
      A(P, j), V(P) ? P.every((J) => J.length <= 1) && D() : P.length <= 1 && D();
    },
    $ = {
      mode: o,
      persisted: i,
      beforeEnter(P) {
        let j = l;
        if (!n.isMounted)
          if (s) j = E || l;
          else return;
        P._leaveCb && P._leaveCb(!0);
        const D = _[R];
        D && Fe(e, D) && D.el._leaveCb && D.el._leaveCb(), A(j, [P]);
      },
      enter(P) {
        let j = c,
          D = a,
          J = u;
        if (!n.isMounted)
          if (s) (j = x || c), (D = v || a), (J = g || u);
          else return;
        let N = !1;
        const z = (P._enterCb = (B) => {
          N || ((N = !0), B ? A(J, [P]) : A(D, [P]), $.delayedLeave && $.delayedLeave(), (P._enterCb = void 0));
        });
        j ? M(j, [P, z]) : z();
      },
      leave(P, j) {
        const D = String(e.key);
        if ((P._enterCb && P._enterCb(!0), n.isUnmounting)) return j();
        A(f, [P]);
        let J = !1;
        const N = (P._leaveCb = (z) => {
          J || ((J = !0), j(), z ? A(y, [P]) : A(b, [P]), (P._leaveCb = void 0), _[D] === e && delete _[D]);
        });
        (_[D] = e), p ? M(p, [P, N]) : N();
      },
      clone(P) {
        return Br(P, t, n, r);
      },
    };
  return $;
}
function _r(e) {
  if (An(e)) return (e = tt(e)), (e.children = null), e;
}
function Gs(e) {
  return An(e) ? (e.children ? e.children[0] : void 0) : e;
}
function Xn(e, t) {
  e.shapeFlag & 6 && e.component
    ? Xn(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)), (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Ki(e, t = !1, n) {
  let r = [],
    s = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === Oe
      ? (i.patchFlag & 128 && s++, (r = r.concat(Ki(i.children, t, l))))
      : (t || i.type !== Me) && r.push(l != null ? tt(i, { key: l }) : i);
  }
  if (s > 1) for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
  return r;
}
function Gt(e, t) {
  return Q(e) ? (() => he({ name: e.name }, t, { setup: e }))() : e;
}
const Ut = (e) => !!e.type.__asyncLoader;
function ia(e) {
  Q(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: r,
    delay: s = 200,
    timeout: o,
    suspensible: i = !0,
    onError: l,
  } = e;
  let c = null,
    a,
    u = 0;
  const f = () => (u++, (c = null), p()),
    p = () => {
      let b;
      return (
        c ||
        (b = c =
          t()
            .catch((y) => {
              if (((y = y instanceof Error ? y : new Error(String(y))), l))
                return new Promise((E, x) => {
                  l(
                    y,
                    () => E(f()),
                    () => x(y),
                    u + 1
                  );
                });
              throw y;
            })
            .then((y) =>
              b !== c && c
                ? c
                : (y && (y.__esModule || y[Symbol.toStringTag] === "Module") && (y = y.default), (a = y), y)
            ))
      );
    };
  return Gt({
    name: "AsyncComponentWrapper",
    __asyncLoader: p,
    get __asyncResolved() {
      return a;
    },
    setup() {
      const b = pe;
      if (a) return () => br(a, b);
      const y = (g) => {
        (c = null), Xt(g, b, 13, !r);
      };
      if ((i && b.suspense) || qt)
        return p()
          .then((g) => () => br(g, b))
          .catch((g) => (y(g), () => (r ? de(r, { error: g }) : null)));
      const E = un(!1),
        x = un(),
        v = un(!!s);
      return (
        s &&
          setTimeout(() => {
            v.value = !1;
          }, s),
        o != null &&
          setTimeout(() => {
            if (!E.value && !x.value) {
              const g = new Error(`Async component timed out after ${o}ms.`);
              y(g), (x.value = g);
            }
          }, o),
        p()
          .then(() => {
            (E.value = !0), b.parent && An(b.parent.vnode) && cr(b.parent.update);
          })
          .catch((g) => {
            y(g), (x.value = g);
          }),
        () => {
          if (E.value && a) return br(a, b);
          if (x.value && r) return de(r, { error: x.value });
          if (n && !v.value) return de(n);
        }
      );
    },
  });
}
function br(e, t) {
  const { ref: n, props: r, children: s, ce: o } = t.vnode,
    i = de(e, r, s);
  return (i.ref = n), (i.ce = o), delete t.vnode.ce, i;
}
const An = (e) => e.type.__isKeepAlive,
  la = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] },
    setup(e, { slots: t }) {
      const n = kn(),
        r = n.ctx;
      if (!r.renderer)
        return () => {
          const g = t.default && t.default();
          return g && g.length === 1 ? g[0] : g;
        };
      const s = new Map(),
        o = new Set();
      let i = null;
      const l = n.suspense,
        {
          renderer: {
            p: c,
            m: a,
            um: u,
            o: { createElement: f },
          },
        } = r,
        p = f("div");
      (r.activate = (g, R, _, A, M) => {
        const $ = g.component;
        a(g, R, _, 0, l),
          c($.vnode, g, R, _, $, l, A, g.slotScopeIds, M),
          ye(() => {
            ($.isDeactivated = !1), $.a && Nt($.a);
            const P = g.props && g.props.onVnodeMounted;
            P && Ce(P, $.parent, g);
          }, l);
      }),
        (r.deactivate = (g) => {
          const R = g.component;
          a(g, p, null, 1, l),
            ye(() => {
              R.da && Nt(R.da);
              const _ = g.props && g.props.onVnodeUnmounted;
              _ && Ce(_, R.parent, g), (R.isDeactivated = !0);
            }, l);
        });
      function b(g) {
        vr(g), u(g, n, l, !0);
      }
      function y(g) {
        s.forEach((R, _) => {
          const A = Vr(R.type);
          A && (!g || !g(A)) && E(_);
        });
      }
      function E(g) {
        const R = s.get(g);
        !i || !Fe(R, i) ? b(R) : i && vr(i), s.delete(g), o.delete(g);
      }
      fn(
        () => [e.include, e.exclude],
        ([g, R]) => {
          g && y((_) => ln(g, _)), R && y((_) => !ln(R, _));
        },
        { flush: "post", deep: !0 }
      );
      let x = null;
      const v = () => {
        x != null && s.set(x, Er(n.subTree));
      };
      return (
        xs(v),
        qi(v),
        As(() => {
          s.forEach((g) => {
            const { subTree: R, suspense: _ } = n,
              A = Er(R);
            if (g.type === A.type && g.key === A.key) {
              vr(A);
              const M = A.component.da;
              M && ye(M, _);
              return;
            }
            b(g);
          });
        }),
        () => {
          if (((x = null), !t.default)) return null;
          const g = t.default(),
            R = g[0];
          if (g.length > 1) return (i = null), g;
          if (!Rn(R) || (!(R.shapeFlag & 4) && !(R.shapeFlag & 128))) return (i = null), R;
          let _ = Er(R);
          const A = _.type,
            M = Vr(Ut(_) ? _.type.__asyncResolved || {} : A),
            { include: $, exclude: P, max: j } = e;
          if (($ && (!M || !ln($, M))) || (P && M && ln(P, M))) return (i = _), R;
          const D = _.key == null ? A : _.key,
            J = s.get(D);
          return (
            _.el && ((_ = tt(_)), R.shapeFlag & 128 && (R.ssContent = _)),
            (x = D),
            J
              ? ((_.el = J.el),
                (_.component = J.component),
                _.transition && Xn(_, _.transition),
                (_.shapeFlag |= 512),
                o.delete(D),
                o.add(D))
              : (o.add(D), j && o.size > parseInt(j, 10) && E(o.values().next().value)),
            (_.shapeFlag |= 256),
            (i = _),
            Li(R.type) ? R : _
          );
        }
      );
    },
  },
  ca = la;
function ln(e, t) {
  return V(e) ? e.some((n) => ln(n, t)) : ae(e) ? e.split(",").includes(t) : zl(e) ? e.test(t) : !1;
}
function aa(e, t) {
  Wi(e, "a", t);
}
function ua(e, t) {
  Wi(e, "da", t);
}
function Wi(e, t, n = pe) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((ur(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; ) An(s.parent.vnode) && fa(r, t, n, s), (s = s.parent);
  }
}
function fa(e, t, n, r) {
  const s = ur(t, e, r, !0);
  Vi(() => {
    fs(r[t], s);
  }, n);
}
function vr(e) {
  (e.shapeFlag &= -257), (e.shapeFlag &= -513);
}
function Er(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function ur(e, t, n = pe, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          Qt(), mt(n);
          const l = Ie(t, n, e, i);
          return pt(), Yt(), l;
        });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const nt =
    (e) =>
    (t, n = pe) =>
      (!qt || e === "sp") && ur(e, (...r) => t(...r), n),
  da = nt("bm"),
  xs = nt("m"),
  ha = nt("bu"),
  qi = nt("u"),
  As = nt("bum"),
  Vi = nt("um"),
  pa = nt("sp"),
  ga = nt("rtg"),
  ma = nt("rtc");
function zi(e, t = pe) {
  ur("ec", e, t);
}
const ks = "components";
function pp(e, t) {
  return Qi(ks, e, !0, t) || e;
}
const Ji = Symbol.for("v-ndc");
function ya(e) {
  return ae(e) ? Qi(ks, e, !1) || e : e || Ji;
}
function Qi(e, t, n = !0, r = !1) {
  const s = Ae || pe;
  if (s) {
    const o = s.type;
    if (e === ks) {
      const l = Vr(o, !1);
      if (l && (l === t || l === ze(t) || l === ir(ze(t)))) return o;
    }
    const i = eo(s[e] || o[e], t) || eo(s.appContext[e], t);
    return !i && r ? o : i;
  }
}
function eo(e, t) {
  return e && (e[t] || e[ze(t)] || e[ir(ze(t))]);
}
const Ur = (e) => (e ? (ul(e) ? dr(e) || e.proxy : Ur(e.parent)) : null),
  dn = he(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ur(e.parent),
    $root: (e) => Ur(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Os(e),
    $forceUpdate: (e) => e.f || (e.f = () => cr(e.update)),
    $nextTick: (e) => e.n || (e.n = Zt.bind(e.proxy)),
    $watch: (e) => na.bind(e),
  }),
  wr = (e, t) => e !== le && !e.__isScriptSetup && G(e, t),
  _a = {
    get({ _: e }, t) {
      const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: l, appContext: c } = e;
      let a;
      if (t[0] !== "$") {
        const b = i[t];
        if (b !== void 0)
          switch (b) {
            case 1:
              return r[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (wr(r, t)) return (i[t] = 1), r[t];
          if (s !== le && G(s, t)) return (i[t] = 2), s[t];
          if ((a = e.propsOptions[0]) && G(a, t)) return (i[t] = 3), o[t];
          if (n !== le && G(n, t)) return (i[t] = 4), n[t];
          Dr && (i[t] = 0);
        }
      }
      const u = dn[t];
      let f, p;
      if (u) return t === "$attrs" && Te(e, "get", t), u(e);
      if ((f = l.__cssModules) && (f = f[t])) return f;
      if (n !== le && G(n, t)) return (i[t] = 4), n[t];
      if (((p = c.config.globalProperties), G(p, t))) return p[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: o } = e;
      return wr(s, t)
        ? ((s[t] = n), !0)
        : r !== le && G(r, t)
        ? ((r[t] = n), !0)
        : G(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o } }, i) {
      let l;
      return (
        !!n[i] ||
        (e !== le && G(e, i)) ||
        wr(t, i) ||
        ((l = o[0]) && G(l, i)) ||
        G(r, i) ||
        G(dn, i) ||
        G(s.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : G(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function to(e) {
  return V(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
function gp(e) {
  const t = kn();
  let n = e();
  return (
    pt(),
    hs(n) &&
      (n = n.catch((r) => {
        throw (mt(t), r);
      })),
    [n, () => mt(t)]
  );
}
let Dr = !0;
function ba(e) {
  const t = Os(e),
    n = e.proxy,
    r = e.ctx;
  (Dr = !1), t.beforeCreate && no(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: o,
    methods: i,
    watch: l,
    provide: c,
    inject: a,
    created: u,
    beforeMount: f,
    mounted: p,
    beforeUpdate: b,
    updated: y,
    activated: E,
    deactivated: x,
    beforeDestroy: v,
    beforeUnmount: g,
    destroyed: R,
    unmounted: _,
    render: A,
    renderTracked: M,
    renderTriggered: $,
    errorCaptured: P,
    serverPrefetch: j,
    expose: D,
    inheritAttrs: J,
    components: N,
    directives: z,
    filters: B,
  } = t;
  if ((a && va(a, r, null), i))
    for (const te in i) {
      const ne = i[te];
      Q(ne) && (r[te] = ne.bind(n));
    }
  if (s) {
    const te = s.call(n, n);
    ce(te) && (e.data = Je(te));
  }
  if (((Dr = !0), o))
    for (const te in o) {
      const ne = o[te],
        Qe = Q(ne) ? ne.bind(n, n) : Q(ne.get) ? ne.get.bind(n, n) : je,
        rt = !Q(ne) && Q(ne.set) ? ne.set.bind(n) : je,
        De = Re({ get: Qe, set: rt });
      Object.defineProperty(r, te, {
        enumerable: !0,
        configurable: !0,
        get: () => De.value,
        set: (we) => (De.value = we),
      });
    }
  if (l) for (const te in l) Yi(l[te], r, n, te);
  if (c) {
    const te = Q(c) ? c.call(n) : c;
    Reflect.ownKeys(te).forEach((ne) => {
      Dt(ne, te[ne]);
    });
  }
  u && no(u, e, "c");
  function Z(te, ne) {
    V(ne) ? ne.forEach((Qe) => te(Qe.bind(n))) : ne && te(ne.bind(n));
  }
  if (
    (Z(da, f),
    Z(xs, p),
    Z(ha, b),
    Z(qi, y),
    Z(aa, E),
    Z(ua, x),
    Z(zi, P),
    Z(ma, M),
    Z(ga, $),
    Z(As, g),
    Z(Vi, _),
    Z(pa, j),
    V(D))
  )
    if (D.length) {
      const te = e.exposed || (e.exposed = {});
      D.forEach((ne) => {
        Object.defineProperty(te, ne, { get: () => n[ne], set: (Qe) => (n[ne] = Qe) });
      });
    } else e.exposed || (e.exposed = {});
  A && e.render === je && (e.render = A),
    J != null && (e.inheritAttrs = J),
    N && (e.components = N),
    z && (e.directives = z);
}
function va(e, t, n = je) {
  V(e) && (e = Kr(e));
  for (const r in e) {
    const s = e[r];
    let o;
    ce(s) ? ("default" in s ? (o = Be(s.from || r, s.default, !0)) : (o = Be(s.from || r))) : (o = Be(s)),
      ge(o)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[r] = o);
  }
}
function no(e, t, n) {
  Ie(V(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Yi(e, t, n, r) {
  const s = r.includes(".") ? Bi(n, r) : () => n[r];
  if (ae(e)) {
    const o = t[e];
    Q(o) && fn(s, o);
  } else if (Q(e)) fn(s, e.bind(n));
  else if (ce(e))
    if (V(e)) e.forEach((o) => Yi(o, t, n, r));
    else {
      const o = Q(e.handler) ? e.handler.bind(n) : t[e.handler];
      Q(o) && fn(s, o, e);
    }
}
function Os(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = o.get(t);
  let c;
  return (
    l
      ? (c = l)
      : !s.length && !n && !r
      ? (c = t)
      : ((c = {}), s.length && s.forEach((a) => Zn(c, a, i, !0)), Zn(c, t, i)),
    ce(t) && o.set(t, c),
    c
  );
}
function Zn(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && Zn(e, o, n, !0), s && s.forEach((i) => Zn(e, i, n, !0));
  for (const i in t)
    if (!(r && i === "expose")) {
      const l = Ea[i] || (n && n[i]);
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Ea = {
  data: ro,
  props: so,
  emits: so,
  methods: cn,
  computed: cn,
  beforeCreate: Ee,
  created: Ee,
  beforeMount: Ee,
  mounted: Ee,
  beforeUpdate: Ee,
  updated: Ee,
  beforeDestroy: Ee,
  beforeUnmount: Ee,
  destroyed: Ee,
  unmounted: Ee,
  activated: Ee,
  deactivated: Ee,
  errorCaptured: Ee,
  serverPrefetch: Ee,
  components: cn,
  directives: cn,
  watch: Ca,
  provide: ro,
  inject: wa,
};
function ro(e, t) {
  return t
    ? e
      ? function () {
          return he(Q(e) ? e.call(this, this) : e, Q(t) ? t.call(this, this) : t);
        }
      : t
    : e;
}
function wa(e, t) {
  return cn(Kr(e), Kr(t));
}
function Kr(e) {
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ee(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function cn(e, t) {
  return e ? he(Object.create(null), e, t) : t;
}
function so(e, t) {
  return e ? (V(e) && V(t) ? [...new Set([...e, ...t])] : he(Object.create(null), to(e), to(t ?? {}))) : t;
}
function Ca(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = he(Object.create(null), e);
  for (const r in t) n[r] = Ee(e[r], t[r]);
  return n;
}
function Xi() {
  return {
    app: null,
    config: {
      isNativeTag: Wl,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Ra = 0;
function Ta(e, t) {
  return function (r, s = null) {
    Q(r) || (r = he({}, r)), s != null && !ce(s) && (s = null);
    const o = Xi(),
      i = new Set();
    let l = !1;
    const c = (o.app = {
      _uid: Ra++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: dl,
      get config() {
        return o.config;
      },
      set config(a) {},
      use(a, ...u) {
        return i.has(a) || (a && Q(a.install) ? (i.add(a), a.install(c, ...u)) : Q(a) && (i.add(a), a(c, ...u))), c;
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), c;
      },
      component(a, u) {
        return u ? ((o.components[a] = u), c) : o.components[a];
      },
      directive(a, u) {
        return u ? ((o.directives[a] = u), c) : o.directives[a];
      },
      mount(a, u, f) {
        if (!l) {
          const p = de(r, s);
          return (
            (p.appContext = o),
            u && t ? t(p, a) : e(p, a, f),
            (l = !0),
            (c._container = a),
            (a.__vue_app__ = c),
            dr(p.component) || p.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, c._container), delete c._container.__vue_app__);
      },
      provide(a, u) {
        return (o.provides[a] = u), c;
      },
      runWithContext(a) {
        Gn = c;
        try {
          return a();
        } finally {
          Gn = null;
        }
      },
    });
    return c;
  };
}
let Gn = null;
function Dt(e, t) {
  if (pe) {
    let n = pe.provides;
    const r = pe.parent && pe.parent.provides;
    r === n && (n = pe.provides = Object.create(r)), (n[e] = t);
  }
}
function Be(e, t, n = !1) {
  const r = pe || Ae;
  if (r || Gn) {
    const s = r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : Gn._context.provides;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && Q(t) ? t.call(r && r.proxy) : t;
  }
}
function Pa(e, t, n, r = !1) {
  const s = {},
    o = {};
  Vn(o, fr, 1), (e.propsDefaults = Object.create(null)), Zi(e, t, s, o);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  n ? (e.props = r ? s : Ic(s)) : e.type.props ? (e.props = s) : (e.props = o), (e.attrs = o);
}
function xa(e, t, n, r) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    l = ee(s),
    [c] = e.propsOptions;
  let a = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let p = u[f];
        if (ar(e.emitsOptions, p)) continue;
        const b = t[p];
        if (c)
          if (G(o, p)) b !== o[p] && ((o[p] = b), (a = !0));
          else {
            const y = ze(p);
            s[y] = Wr(c, l, y, b, e, !1);
          }
        else b !== o[p] && ((o[p] = b), (a = !0));
      }
    }
  } else {
    Zi(e, t, s, o) && (a = !0);
    let u;
    for (const f in l)
      (!t || (!G(t, f) && ((u = Jt(f)) === f || !G(t, u)))) &&
        (c ? n && (n[f] !== void 0 || n[u] !== void 0) && (s[f] = Wr(c, l, f, void 0, e, !0)) : delete s[f]);
    if (o !== l) for (const f in o) (!t || !G(t, f)) && (delete o[f], (a = !0));
  }
  a && et(e, "set", "$attrs");
}
function Zi(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1,
    l;
  if (t)
    for (let c in t) {
      if (an(c)) continue;
      const a = t[c];
      let u;
      s && G(s, (u = ze(c)))
        ? !o || !o.includes(u)
          ? (n[u] = a)
          : ((l || (l = {}))[u] = a)
        : ar(e.emitsOptions, c) || ((!(c in r) || a !== r[c]) && ((r[c] = a), (i = !0)));
    }
  if (o) {
    const c = ee(n),
      a = l || le;
    for (let u = 0; u < o.length; u++) {
      const f = o[u];
      n[f] = Wr(s, c, f, a[f], e, !G(a, f));
    }
  }
  return i;
}
function Wr(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const l = G(i, "default");
    if (l && r === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && Q(c)) {
        const { propsDefaults: a } = s;
        n in a ? (r = a[n]) : (mt(s), (r = a[n] = c.call(null, t)), pt());
      } else r = c;
    }
    i[0] && (o && !l ? (r = !1) : i[1] && (r === "" || r === Jt(n)) && (r = !0));
  }
  return r;
}
function Gi(e, t, n = !1) {
  const r = t.propsCache,
    s = r.get(e);
  if (s) return s;
  const o = e.props,
    i = {},
    l = [];
  let c = !1;
  if (!Q(e)) {
    const u = (f) => {
      c = !0;
      const [p, b] = Gi(f, t, !0);
      he(i, p), b && l.push(...b);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !c) return ce(e) && r.set(e, $t), $t;
  if (V(o))
    for (let u = 0; u < o.length; u++) {
      const f = ze(o[u]);
      oo(f) && (i[f] = le);
    }
  else if (o)
    for (const u in o) {
      const f = ze(u);
      if (oo(f)) {
        const p = o[u],
          b = (i[f] = V(p) || Q(p) ? { type: p } : he({}, p));
        if (b) {
          const y = co(Boolean, b.type),
            E = co(String, b.type);
          (b[0] = y > -1), (b[1] = E < 0 || y < E), (y > -1 || G(b, "default")) && l.push(f);
        }
      }
    }
  const a = [i, l];
  return ce(e) && r.set(e, a), a;
}
function oo(e) {
  return e[0] !== "$";
}
function io(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function lo(e, t) {
  return io(e) === io(t);
}
function co(e, t) {
  return V(t) ? t.findIndex((n) => lo(n, e)) : Q(t) && lo(t, e) ? 0 : -1;
}
const el = (e) => e[0] === "_" || e === "$stable",
  Ss = (e) => (V(e) ? e.map(Se) : [Se(e)]),
  Aa = (e, t, n) => {
    if (t._n) return t;
    const r = $i((...s) => Ss(t(...s)), n);
    return (r._c = !1), r;
  },
  tl = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (el(s)) continue;
      const o = e[s];
      if (Q(o)) t[s] = Aa(s, o, r);
      else if (o != null) {
        const i = Ss(o);
        t[s] = () => i;
      }
    }
  },
  nl = (e, t) => {
    const n = Ss(t);
    e.slots.default = () => n;
  },
  ka = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = ee(t)), Vn(t, "_", n)) : tl(t, (e.slots = {}));
    } else (e.slots = {}), t && nl(e, t);
    Vn(e.slots, fr, 1);
  },
  Oa = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let o = !0,
      i = le;
    if (r.shapeFlag & 32) {
      const l = t._;
      l ? (n && l === 1 ? (o = !1) : (he(s, t), !n && l === 1 && delete s._)) : ((o = !t.$stable), tl(t, s)), (i = t);
    } else t && (nl(e, t), (i = { default: 1 }));
    if (o) for (const l in s) !el(l) && !(l in i) && delete s[l];
  };
function er(e, t, n, r, s = !1) {
  if (V(e)) {
    e.forEach((p, b) => er(p, t && (V(t) ? t[b] : t), n, r, s));
    return;
  }
  if (Ut(r) && !s) return;
  const o = r.shapeFlag & 4 ? dr(r.component) || r.component.proxy : r.el,
    i = s ? null : o,
    { i: l, r: c } = e,
    a = t && t.r,
    u = l.refs === le ? (l.refs = {}) : l.refs,
    f = l.setupState;
  if ((a != null && a !== c && (ae(a) ? ((u[a] = null), G(f, a) && (f[a] = null)) : ge(a) && (a.value = null)), Q(c)))
    ht(c, l, 12, [i, u]);
  else {
    const p = ae(c),
      b = ge(c);
    if (p || b) {
      const y = () => {
        if (e.f) {
          const E = p ? (G(f, c) ? f[c] : u[c]) : c.value;
          s
            ? V(E) && fs(E, o)
            : V(E)
            ? E.includes(o) || E.push(o)
            : p
            ? ((u[c] = [o]), G(f, c) && (f[c] = u[c]))
            : ((c.value = [o]), e.k && (u[e.k] = c.value));
        } else p ? ((u[c] = i), G(f, c) && (f[c] = i)) : b && ((c.value = i), e.k && (u[e.k] = i));
      };
      i ? ((y.id = -1), ye(y, n)) : y();
    }
  }
}
let ot = !1;
const jn = (e) => /svg/.test(e.namespaceURI) && e.tagName !== "foreignObject",
  Bn = (e) => e.nodeType === 8;
function Sa(e) {
  const {
      mt: t,
      p: n,
      o: { patchProp: r, createText: s, nextSibling: o, parentNode: i, remove: l, insert: c, createComment: a },
    } = e,
    u = (v, g) => {
      if (!g.hasChildNodes()) {
        n(null, v, g), Qn(), (g._vnode = v);
        return;
      }
      (ot = !1),
        f(g.firstChild, v, null, null, null),
        Qn(),
        (g._vnode = v),
        ot && console.error("Hydration completed but contains mismatches.");
    },
    f = (v, g, R, _, A, M = !1) => {
      const $ = Bn(v) && v.data === "[",
        P = () => E(v, g, R, _, A, $),
        { type: j, ref: D, shapeFlag: J, patchFlag: N } = g;
      let z = v.nodeType;
      (g.el = v), N === -2 && ((M = !1), (g.dynamicChildren = null));
      let B = null;
      switch (j) {
        case Kt:
          z !== 3
            ? g.children === ""
              ? (c((g.el = s("")), i(v), v), (B = v))
              : (B = P())
            : (v.data !== g.children && ((ot = !0), (v.data = g.children)), (B = o(v)));
          break;
        case Me:
          z !== 8 || $ ? (B = P()) : (B = o(v));
          break;
        case hn:
          if (($ && ((v = o(v)), (z = v.nodeType)), z === 1 || z === 3)) {
            B = v;
            const ue = !g.children.length;
            for (let Z = 0; Z < g.staticCount; Z++)
              ue && (g.children += B.nodeType === 1 ? B.outerHTML : B.data),
                Z === g.staticCount - 1 && (g.anchor = B),
                (B = o(B));
            return $ ? o(B) : B;
          } else P();
          break;
        case Oe:
          $ ? (B = y(v, g, R, _, A, M)) : (B = P());
          break;
        default:
          if (J & 1)
            z !== 1 || g.type.toLowerCase() !== v.tagName.toLowerCase() ? (B = P()) : (B = p(v, g, R, _, A, M));
          else if (J & 6) {
            g.slotScopeIds = A;
            const ue = i(v);
            if (
              (t(g, ue, null, R, _, jn(ue), M),
              (B = $ ? x(v) : o(v)),
              B && Bn(B) && B.data === "teleport end" && (B = o(B)),
              Ut(g))
            ) {
              let Z;
              $
                ? ((Z = de(Oe)), (Z.anchor = B ? B.previousSibling : ue.lastChild))
                : (Z = v.nodeType === 3 ? al("") : de("div")),
                (Z.el = v),
                (g.component.subTree = Z);
            }
          } else
            J & 64
              ? z !== 8
                ? (B = P())
                : (B = g.type.hydrate(v, g, R, _, A, M, e, b))
              : J & 128 && (B = g.type.hydrate(v, g, R, _, jn(i(v)), A, M, e, f));
      }
      return D != null && er(D, null, _, g), B;
    },
    p = (v, g, R, _, A, M) => {
      M = M || !!g.dynamicChildren;
      const { type: $, props: P, patchFlag: j, shapeFlag: D, dirs: J } = g,
        N = ($ === "input" && J) || $ === "option";
      if (N || j !== -1) {
        if ((J && We(g, null, R, "created"), P))
          if (N || !M || j & 48)
            for (const B in P) ((N && B.endsWith("value")) || (Pn(B) && !an(B))) && r(v, B, null, P[B], !1, void 0, R);
          else P.onClick && r(v, "onClick", null, P.onClick, !1, void 0, R);
        let z;
        if (
          ((z = P && P.onVnodeBeforeMount) && Ce(z, R, g),
          J && We(g, null, R, "beforeMount"),
          ((z = P && P.onVnodeMounted) || J) &&
            Fi(() => {
              z && Ce(z, R, g), J && We(g, null, R, "mounted");
            }, _),
          D & 16 && !(P && (P.innerHTML || P.textContent)))
        ) {
          let B = b(v.firstChild, g, v, R, _, A, M);
          for (; B; ) {
            ot = !0;
            const ue = B;
            (B = B.nextSibling), l(ue);
          }
        } else D & 8 && v.textContent !== g.children && ((ot = !0), (v.textContent = g.children));
      }
      return v.nextSibling;
    },
    b = (v, g, R, _, A, M, $) => {
      $ = $ || !!g.dynamicChildren;
      const P = g.children,
        j = P.length;
      for (let D = 0; D < j; D++) {
        const J = $ ? P[D] : (P[D] = Se(P[D]));
        if (v) v = f(v, J, _, A, M, $);
        else {
          if (J.type === Kt && !J.children) continue;
          (ot = !0), n(null, J, R, null, _, A, jn(R), M);
        }
      }
      return v;
    },
    y = (v, g, R, _, A, M) => {
      const { slotScopeIds: $ } = g;
      $ && (A = A ? A.concat($) : $);
      const P = i(v),
        j = b(o(v), g, P, R, _, A, M);
      return j && Bn(j) && j.data === "]" ? o((g.anchor = j)) : ((ot = !0), c((g.anchor = a("]")), P, j), j);
    },
    E = (v, g, R, _, A, M) => {
      if (((ot = !0), (g.el = null), M)) {
        const j = x(v);
        for (;;) {
          const D = o(v);
          if (D && D !== j) l(D);
          else break;
        }
      }
      const $ = o(v),
        P = i(v);
      return l(v), n(null, g, P, $, R, _, jn(P), A), $;
    },
    x = (v) => {
      let g = 0;
      for (; v; )
        if (((v = o(v)), v && Bn(v) && (v.data === "[" && g++, v.data === "]"))) {
          if (g === 0) return o(v);
          g--;
        }
      return v;
    };
  return [u, f];
}
const ye = Fi;
function Ha(e) {
  return rl(e);
}
function Ia(e) {
  return rl(e, Sa);
}
function rl(e, t) {
  const n = Mr();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: s,
      patchProp: o,
      createElement: i,
      createText: l,
      createComment: c,
      setText: a,
      setElementText: u,
      parentNode: f,
      nextSibling: p,
      setScopeId: b = je,
      insertStaticContent: y,
    } = e,
    E = (d, h, m, w = null, T = null, k = null, L = !1, S = null, H = !!h.dynamicChildren) => {
      if (d === h) return;
      d && !Fe(d, h) && ((w = C(d)), we(d, T, k, !0), (d = null)),
        h.patchFlag === -2 && ((H = !1), (h.dynamicChildren = null));
      const { type: O, ref: W, shapeFlag: U } = h;
      switch (O) {
        case Kt:
          x(d, h, m, w);
          break;
        case Me:
          v(d, h, m, w);
          break;
        case hn:
          d == null && g(h, m, w, L);
          break;
        case Oe:
          N(d, h, m, w, T, k, L, S, H);
          break;
        default:
          U & 1
            ? A(d, h, m, w, T, k, L, S, H)
            : U & 6
            ? z(d, h, m, w, T, k, L, S, H)
            : (U & 64 || U & 128) && O.process(d, h, m, w, T, k, L, S, H, I);
      }
      W != null && T && er(W, d && d.ref, k, h || d, !h);
    },
    x = (d, h, m, w) => {
      if (d == null) r((h.el = l(h.children)), m, w);
      else {
        const T = (h.el = d.el);
        h.children !== d.children && a(T, h.children);
      }
    },
    v = (d, h, m, w) => {
      d == null ? r((h.el = c(h.children || "")), m, w) : (h.el = d.el);
    },
    g = (d, h, m, w) => {
      [d.el, d.anchor] = y(d.children, h, m, w, d.el, d.anchor);
    },
    R = ({ el: d, anchor: h }, m, w) => {
      let T;
      for (; d && d !== h; ) (T = p(d)), r(d, m, w), (d = T);
      r(h, m, w);
    },
    _ = ({ el: d, anchor: h }) => {
      let m;
      for (; d && d !== h; ) (m = p(d)), s(d), (d = m);
      s(h);
    },
    A = (d, h, m, w, T, k, L, S, H) => {
      (L = L || h.type === "svg"), d == null ? M(h, m, w, T, k, L, S, H) : j(d, h, T, k, L, S, H);
    },
    M = (d, h, m, w, T, k, L, S) => {
      let H, O;
      const { type: W, props: U, shapeFlag: q, transition: Y, dirs: X } = d;
      if (
        ((H = d.el = i(d.type, k, U && U.is, U)),
        q & 8 ? u(H, d.children) : q & 16 && P(d.children, H, null, w, T, k && W !== "foreignObject", L, S),
        X && We(d, null, w, "created"),
        $(H, d, d.scopeId, L, w),
        U)
      ) {
        for (const oe in U) oe !== "value" && !an(oe) && o(H, oe, null, U[oe], k, d.children, w, T, be);
        "value" in U && o(H, "value", null, U.value), (O = U.onVnodeBeforeMount) && Ce(O, w, d);
      }
      X && We(d, null, w, "beforeMount");
      const ie = (!T || (T && !T.pendingBranch)) && Y && !Y.persisted;
      ie && Y.beforeEnter(H),
        r(H, h, m),
        ((O = U && U.onVnodeMounted) || ie || X) &&
          ye(() => {
            O && Ce(O, w, d), ie && Y.enter(H), X && We(d, null, w, "mounted");
          }, T);
    },
    $ = (d, h, m, w, T) => {
      if ((m && b(d, m), w)) for (let k = 0; k < w.length; k++) b(d, w[k]);
      if (T) {
        let k = T.subTree;
        if (h === k) {
          const L = T.vnode;
          $(d, L, L.scopeId, L.slotScopeIds, T.parent);
        }
      }
    },
    P = (d, h, m, w, T, k, L, S, H = 0) => {
      for (let O = H; O < d.length; O++) {
        const W = (d[O] = S ? at(d[O]) : Se(d[O]));
        E(null, W, h, m, w, T, k, L, S);
      }
    },
    j = (d, h, m, w, T, k, L) => {
      const S = (h.el = d.el);
      let { patchFlag: H, dynamicChildren: O, dirs: W } = h;
      H |= d.patchFlag & 16;
      const U = d.props || le,
        q = h.props || le;
      let Y;
      m && yt(m, !1), (Y = q.onVnodeBeforeUpdate) && Ce(Y, m, h, d), W && We(h, d, m, "beforeUpdate"), m && yt(m, !0);
      const X = T && h.type !== "foreignObject";
      if ((O ? D(d.dynamicChildren, O, S, m, w, X, k) : L || ne(d, h, S, null, m, w, X, k, !1), H > 0)) {
        if (H & 16) J(S, h, U, q, m, w, T);
        else if (
          (H & 2 && U.class !== q.class && o(S, "class", null, q.class, T),
          H & 4 && o(S, "style", U.style, q.style, T),
          H & 8)
        ) {
          const ie = h.dynamicProps;
          for (let oe = 0; oe < ie.length; oe++) {
            const fe = ie[oe],
              $e = U[fe],
              kt = q[fe];
            (kt !== $e || fe === "value") && o(S, fe, $e, kt, T, d.children, m, w, be);
          }
        }
        H & 1 && d.children !== h.children && u(S, h.children);
      } else !L && O == null && J(S, h, U, q, m, w, T);
      ((Y = q.onVnodeUpdated) || W) &&
        ye(() => {
          Y && Ce(Y, m, h, d), W && We(h, d, m, "updated");
        }, w);
    },
    D = (d, h, m, w, T, k, L) => {
      for (let S = 0; S < h.length; S++) {
        const H = d[S],
          O = h[S],
          W = H.el && (H.type === Oe || !Fe(H, O) || H.shapeFlag & 70) ? f(H.el) : m;
        E(H, O, W, null, w, T, k, L, !0);
      }
    },
    J = (d, h, m, w, T, k, L) => {
      if (m !== w) {
        if (m !== le) for (const S in m) !an(S) && !(S in w) && o(d, S, m[S], null, L, h.children, T, k, be);
        for (const S in w) {
          if (an(S)) continue;
          const H = w[S],
            O = m[S];
          H !== O && S !== "value" && o(d, S, O, H, L, h.children, T, k, be);
        }
        "value" in w && o(d, "value", m.value, w.value);
      }
    },
    N = (d, h, m, w, T, k, L, S, H) => {
      const O = (h.el = d ? d.el : l("")),
        W = (h.anchor = d ? d.anchor : l(""));
      let { patchFlag: U, dynamicChildren: q, slotScopeIds: Y } = h;
      Y && (S = S ? S.concat(Y) : Y),
        d == null
          ? (r(O, m, w), r(W, m, w), P(h.children, m, W, T, k, L, S, H))
          : U > 0 && U & 64 && q && d.dynamicChildren
          ? (D(d.dynamicChildren, q, m, T, k, L, S), (h.key != null || (T && h === T.subTree)) && sl(d, h, !0))
          : ne(d, h, m, W, T, k, L, S, H);
    },
    z = (d, h, m, w, T, k, L, S, H) => {
      (h.slotScopeIds = S),
        d == null ? (h.shapeFlag & 512 ? T.ctx.activate(h, m, w, L, H) : B(h, m, w, T, k, L, H)) : ue(d, h, H);
    },
    B = (d, h, m, w, T, k, L) => {
      const S = (d.component = Ua(d, w, T));
      if ((An(d) && (S.ctx.renderer = I), Da(S), S.asyncDep)) {
        if ((T && T.registerDep(S, Z), !d.el)) {
          const H = (S.subTree = de(Me));
          v(null, H, h, m);
        }
        return;
      }
      Z(S, d, h, m, T, k, L);
    },
    ue = (d, h, m) => {
      const w = (h.component = d.component);
      if (Qc(d, h, m))
        if (w.asyncDep && !w.asyncResolved) {
          te(w, h, m);
          return;
        } else (w.next = h), Kc(w.update), w.update();
      else (h.el = d.el), (w.vnode = h);
    },
    Z = (d, h, m, w, T, k, L) => {
      const S = () => {
          if (d.isMounted) {
            let { next: W, bu: U, u: q, parent: Y, vnode: X } = d,
              ie = W,
              oe;
            yt(d, !1),
              W ? ((W.el = X.el), te(d, W, L)) : (W = X),
              U && Nt(U),
              (oe = W.props && W.props.onVnodeBeforeUpdate) && Ce(oe, Y, W, X),
              yt(d, !0);
            const fe = yr(d),
              $e = d.subTree;
            (d.subTree = fe),
              E($e, fe, f($e.el), C($e), d, T, k),
              (W.el = fe.el),
              ie === null && Ts(d, fe.el),
              q && ye(q, T),
              (oe = W.props && W.props.onVnodeUpdated) && ye(() => Ce(oe, Y, W, X), T);
          } else {
            let W;
            const { el: U, props: q } = h,
              { bm: Y, m: X, parent: ie } = d,
              oe = Ut(h);
            if ((yt(d, !1), Y && Nt(Y), !oe && (W = q && q.onVnodeBeforeMount) && Ce(W, ie, h), yt(d, !0), U && re)) {
              const fe = () => {
                (d.subTree = yr(d)), re(U, d.subTree, d, T, null);
              };
              oe ? h.type.__asyncLoader().then(() => !d.isUnmounted && fe()) : fe();
            } else {
              const fe = (d.subTree = yr(d));
              E(null, fe, m, w, d, T, k), (h.el = fe.el);
            }
            if ((X && ye(X, T), !oe && (W = q && q.onVnodeMounted))) {
              const fe = h;
              ye(() => Ce(W, ie, fe), T);
            }
            (h.shapeFlag & 256 || (ie && Ut(ie.vnode) && ie.vnode.shapeFlag & 256)) && d.a && ye(d.a, T),
              (d.isMounted = !0),
              (h = m = w = null);
          }
        },
        H = (d.effect = new _s(S, () => cr(O), d.scope)),
        O = (d.update = () => H.run());
      (O.id = d.uid), yt(d, !0), O();
    },
    te = (d, h, m) => {
      h.component = d;
      const w = d.vnode.props;
      (d.vnode = h), (d.next = null), xa(d, h.props, w, m), Oa(d, h.children, m), Qt(), Ys(), Yt();
    },
    ne = (d, h, m, w, T, k, L, S, H = !1) => {
      const O = d && d.children,
        W = d ? d.shapeFlag : 0,
        U = h.children,
        { patchFlag: q, shapeFlag: Y } = h;
      if (q > 0) {
        if (q & 128) {
          rt(O, U, m, w, T, k, L, S, H);
          return;
        } else if (q & 256) {
          Qe(O, U, m, w, T, k, L, S, H);
          return;
        }
      }
      Y & 8
        ? (W & 16 && be(O, T, k), U !== O && u(m, U))
        : W & 16
        ? Y & 16
          ? rt(O, U, m, w, T, k, L, S, H)
          : be(O, T, k, !0)
        : (W & 8 && u(m, ""), Y & 16 && P(U, m, w, T, k, L, S, H));
    },
    Qe = (d, h, m, w, T, k, L, S, H) => {
      (d = d || $t), (h = h || $t);
      const O = d.length,
        W = h.length,
        U = Math.min(O, W);
      let q;
      for (q = 0; q < U; q++) {
        const Y = (h[q] = H ? at(h[q]) : Se(h[q]));
        E(d[q], Y, m, null, T, k, L, S, H);
      }
      O > W ? be(d, T, k, !0, !1, U) : P(h, m, w, T, k, L, S, H, U);
    },
    rt = (d, h, m, w, T, k, L, S, H) => {
      let O = 0;
      const W = h.length;
      let U = d.length - 1,
        q = W - 1;
      for (; O <= U && O <= q; ) {
        const Y = d[O],
          X = (h[O] = H ? at(h[O]) : Se(h[O]));
        if (Fe(Y, X)) E(Y, X, m, null, T, k, L, S, H);
        else break;
        O++;
      }
      for (; O <= U && O <= q; ) {
        const Y = d[U],
          X = (h[q] = H ? at(h[q]) : Se(h[q]));
        if (Fe(Y, X)) E(Y, X, m, null, T, k, L, S, H);
        else break;
        U--, q--;
      }
      if (O > U) {
        if (O <= q) {
          const Y = q + 1,
            X = Y < W ? h[Y].el : w;
          for (; O <= q; ) E(null, (h[O] = H ? at(h[O]) : Se(h[O])), m, X, T, k, L, S, H), O++;
        }
      } else if (O > q) for (; O <= U; ) we(d[O], T, k, !0), O++;
      else {
        const Y = O,
          X = O,
          ie = new Map();
        for (O = X; O <= q; O++) {
          const Pe = (h[O] = H ? at(h[O]) : Se(h[O]));
          Pe.key != null && ie.set(Pe.key, O);
        }
        let oe,
          fe = 0;
        const $e = q - X + 1;
        let kt = !1,
          js = 0;
        const tn = new Array($e);
        for (O = 0; O < $e; O++) tn[O] = 0;
        for (O = Y; O <= U; O++) {
          const Pe = d[O];
          if (fe >= $e) {
            we(Pe, T, k, !0);
            continue;
          }
          let Ke;
          if (Pe.key != null) Ke = ie.get(Pe.key);
          else
            for (oe = X; oe <= q; oe++)
              if (tn[oe - X] === 0 && Fe(Pe, h[oe])) {
                Ke = oe;
                break;
              }
          Ke === void 0
            ? we(Pe, T, k, !0)
            : ((tn[Ke - X] = O + 1), Ke >= js ? (js = Ke) : (kt = !0), E(Pe, h[Ke], m, null, T, k, L, S, H), fe++);
        }
        const Bs = kt ? Ma(tn) : $t;
        for (oe = Bs.length - 1, O = $e - 1; O >= 0; O--) {
          const Pe = X + O,
            Ke = h[Pe],
            Us = Pe + 1 < W ? h[Pe + 1].el : w;
          tn[O] === 0 ? E(null, Ke, m, Us, T, k, L, S, H) : kt && (oe < 0 || O !== Bs[oe] ? De(Ke, m, Us, 2) : oe--);
        }
      }
    },
    De = (d, h, m, w, T = null) => {
      const { el: k, type: L, transition: S, children: H, shapeFlag: O } = d;
      if (O & 6) {
        De(d.component.subTree, h, m, w);
        return;
      }
      if (O & 128) {
        d.suspense.move(h, m, w);
        return;
      }
      if (O & 64) {
        L.move(d, h, m, I);
        return;
      }
      if (L === Oe) {
        r(k, h, m);
        for (let U = 0; U < H.length; U++) De(H[U], h, m, w);
        r(d.anchor, h, m);
        return;
      }
      if (L === hn) {
        R(d, h, m);
        return;
      }
      if (w !== 2 && O & 1 && S)
        if (w === 0) S.beforeEnter(k), r(k, h, m), ye(() => S.enter(k), T);
        else {
          const { leave: U, delayLeave: q, afterLeave: Y } = S,
            X = () => r(k, h, m),
            ie = () => {
              U(k, () => {
                X(), Y && Y();
              });
            };
          q ? q(k, X, ie) : ie();
        }
      else r(k, h, m);
    },
    we = (d, h, m, w = !1, T = !1) => {
      const { type: k, props: L, ref: S, children: H, dynamicChildren: O, shapeFlag: W, patchFlag: U, dirs: q } = d;
      if ((S != null && er(S, null, m, d, !0), W & 256)) {
        h.ctx.deactivate(d);
        return;
      }
      const Y = W & 1 && q,
        X = !Ut(d);
      let ie;
      if ((X && (ie = L && L.onVnodeBeforeUnmount) && Ce(ie, h, d), W & 6)) Hn(d.component, m, w);
      else {
        if (W & 128) {
          d.suspense.unmount(m, w);
          return;
        }
        Y && We(d, null, h, "beforeUnmount"),
          W & 64
            ? d.type.remove(d, h, m, T, I, w)
            : O && (k !== Oe || (U > 0 && U & 64))
            ? be(O, h, m, !1, !0)
            : ((k === Oe && U & 384) || (!T && W & 16)) && be(H, h, m),
          w && xt(d);
      }
      ((X && (ie = L && L.onVnodeUnmounted)) || Y) &&
        ye(() => {
          ie && Ce(ie, h, d), Y && We(d, null, h, "unmounted");
        }, m);
    },
    xt = (d) => {
      const { type: h, el: m, anchor: w, transition: T } = d;
      if (h === Oe) {
        At(m, w);
        return;
      }
      if (h === hn) {
        _(d);
        return;
      }
      const k = () => {
        s(m), T && !T.persisted && T.afterLeave && T.afterLeave();
      };
      if (d.shapeFlag & 1 && T && !T.persisted) {
        const { leave: L, delayLeave: S } = T,
          H = () => L(m, k);
        S ? S(d.el, k, H) : H();
      } else k();
    },
    At = (d, h) => {
      let m;
      for (; d !== h; ) (m = p(d)), s(d), (d = m);
      s(h);
    },
    Hn = (d, h, m) => {
      const { bum: w, scope: T, update: k, subTree: L, um: S } = d;
      w && Nt(w),
        T.stop(),
        k && ((k.active = !1), we(L, d, h, m)),
        S && ye(S, h),
        ye(() => {
          d.isUnmounted = !0;
        }, h),
        h &&
          h.pendingBranch &&
          !h.isUnmounted &&
          d.asyncDep &&
          !d.asyncResolved &&
          d.suspenseId === h.pendingId &&
          (h.deps--, h.deps === 0 && h.resolve());
    },
    be = (d, h, m, w = !1, T = !1, k = 0) => {
      for (let L = k; L < d.length; L++) we(d[L], h, m, w, T);
    },
    C = (d) => (d.shapeFlag & 6 ? C(d.component.subTree) : d.shapeFlag & 128 ? d.suspense.next() : p(d.anchor || d.el)),
    F = (d, h, m) => {
      d == null ? h._vnode && we(h._vnode, null, null, !0) : E(h._vnode || null, d, h, null, null, null, m),
        Ys(),
        Qn(),
        (h._vnode = d);
    },
    I = { p: E, um: we, m: De, r: xt, mt: B, mc: P, pc: ne, pbc: D, n: C, o: e };
  let K, re;
  return t && ([K, re] = t(I)), { render: F, hydrate: K, createApp: Ta(F, K) };
}
function yt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function sl(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (V(r) && V(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let l = s[o];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = s[o] = at(s[o])), (l.el = i.el)), n || sl(i, l)),
        l.type === Kt && (l.el = i.el);
    }
}
function Ma(e) {
  const t = e.slice(),
    n = [0];
  let r, s, o, i, l;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const a = e[r];
    if (a !== 0) {
      if (((s = n[n.length - 1]), e[s] < a)) {
        (t[r] = s), n.push(r);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; ) (l = (o + i) >> 1), e[n[l]] < a ? (o = l + 1) : (i = l);
      a < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), (n[o] = r));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
const $a = (e) => e.__isTeleport,
  Oe = Symbol.for("v-fgt"),
  Kt = Symbol.for("v-txt"),
  Me = Symbol.for("v-cmt"),
  hn = Symbol.for("v-stc"),
  pn = [];
let He = null;
function Et(e = !1) {
  pn.push((He = e ? null : []));
}
function ol() {
  pn.pop(), (He = pn[pn.length - 1] || null);
}
let Wt = 1;
function ao(e) {
  Wt += e;
}
function il(e) {
  return (e.dynamicChildren = Wt > 0 ? He || $t : null), ol(), Wt > 0 && He && He.push(e), e;
}
function mp(e, t, n, r, s, o) {
  return il(cl(e, t, n, r, s, o, !0));
}
function St(e, t, n, r, s) {
  return il(de(e, t, n, r, s, !0));
}
function Rn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Fe(e, t) {
  return e.type === t.type && e.key === t.key;
}
const fr = "__vInternal",
  ll = ({ key: e }) => e ?? null,
  qn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null ? (ae(e) || ge(e) || Q(e) ? { i: Ae, r: e, k: t, f: !!n } : e) : null
  );
function cl(e, t = null, n = null, r = 0, s = null, o = e === Oe ? 0 : 1, i = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ll(t),
    ref: t && qn(t),
    scopeId: Mi,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ae,
  };
  return (
    l ? (Hs(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= ae(n) ? 8 : 16),
    Wt > 0 && !i && He && (c.patchFlag > 0 || o & 6) && c.patchFlag !== 32 && He.push(c),
    c
  );
}
const de = La;
function La(e, t = null, n = null, r = 0, s = null, o = !1) {
  if (((!e || e === Ji) && (e = Me), Rn(e))) {
    const l = tt(e, t, !0);
    return (
      n && Hs(l, n),
      Wt > 0 && !o && He && (l.shapeFlag & 6 ? (He[He.indexOf(e)] = l) : He.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((Va(e) && (e = e.__vccOpts), t)) {
    t = Na(t);
    let { class: l, style: c } = t;
    l && !ae(l) && (t.class = ms(l)), ce(c) && (wi(c) && !V(c) && (c = he({}, c)), (t.style = gs(c)));
  }
  const i = ae(e) ? 1 : Li(e) ? 128 : $a(e) ? 64 : ce(e) ? 4 : Q(e) ? 2 : 0;
  return cl(e, t, n, r, s, i, o, !0);
}
function Na(e) {
  return e ? (wi(e) || fr in e ? he({}, e) : e) : null;
}
function tt(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: o, children: i } = e,
    l = t ? Fa(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && ll(l),
    ref: t && t.ref ? (n && s ? (V(s) ? s.concat(qn(t)) : [s, qn(t)]) : qn(t)) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Oe ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && tt(e.ssContent),
    ssFallback: e.ssFallback && tt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function al(e = " ", t = 0) {
  return de(Kt, null, e, t);
}
function yp(e, t) {
  const n = de(hn, null, e);
  return (n.staticCount = t), n;
}
function Se(e) {
  return e == null || typeof e == "boolean"
    ? de(Me)
    : V(e)
    ? de(Oe, null, e.slice())
    : typeof e == "object"
    ? at(e)
    : de(Kt, null, String(e));
}
function at(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : tt(e);
}
function Hs(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (V(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Hs(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(fr in t)
        ? (t._ctx = Ae)
        : s === 3 && Ae && (Ae.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    Q(t) ? ((t = { default: t, _ctx: Ae }), (n = 32)) : ((t = String(t)), r & 64 ? ((n = 16), (t = [al(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Fa(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class") t.class !== r.class && (t.class = ms([t.class, r.class]));
      else if (s === "style") t.style = gs([t.style, r.style]);
      else if (Pn(s)) {
        const o = t[s],
          i = r[s];
        i && o !== i && !(V(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function Ce(e, t, n, r = null) {
  Ie(e, t, 7, [n, r]);
}
const ja = Xi();
let Ba = 0;
function Ua(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || ja,
    o = {
      uid: Ba++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new rc(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Gi(r, s),
      emitsOptions: Ii(r, s),
      emit: null,
      emitted: null,
      propsDefaults: le,
      inheritAttrs: r.inheritAttrs,
      ctx: le,
      data: le,
      props: le,
      attrs: le,
      slots: le,
      refs: le,
      setupState: le,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (o.ctx = { _: o }), (o.root = t ? t.root : o), (o.emit = qc.bind(null, o)), e.ce && e.ce(o), o;
}
let pe = null;
const kn = () => pe || Ae;
let Is,
  Ot,
  uo = "__VUE_INSTANCE_SETTERS__";
(Ot = Mr()[uo]) || (Ot = Mr()[uo] = []),
  Ot.push((e) => (pe = e)),
  (Is = (e) => {
    Ot.length > 1 ? Ot.forEach((t) => t(e)) : Ot[0](e);
  });
const mt = (e) => {
    Is(e), e.scope.on();
  },
  pt = () => {
    pe && pe.scope.off(), Is(null);
  };
function ul(e) {
  return e.vnode.shapeFlag & 4;
}
let qt = !1;
function Da(e, t = !1) {
  qt = t;
  const { props: n, children: r } = e.vnode,
    s = ul(e);
  Pa(e, n, s, t), ka(e, r);
  const o = s ? Ka(e, t) : void 0;
  return (qt = !1), o;
}
function Ka(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Ci(new Proxy(e.ctx, _a)));
  const { setup: r } = n;
  if (r) {
    const s = (e.setupContext = r.length > 1 ? qa(e) : null);
    mt(e), Qt();
    const o = ht(r, e, 0, [e.props, s]);
    if ((Yt(), pt(), hs(o))) {
      if ((o.then(pt, pt), t))
        return o
          .then((i) => {
            qr(e, i, t);
          })
          .catch((i) => {
            Xt(i, e, 0);
          });
      e.asyncDep = o;
    } else qr(e, o, t);
  } else fl(e, t);
}
function qr(e, t, n) {
  Q(t) ? (e.type.__ssrInlineRender ? (e.ssrRender = t) : (e.render = t)) : ce(t) && (e.setupState = xi(t)), fl(e, n);
}
let fo;
function fl(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && fo && !r.render) {
      const s = r.template || Os(e).template;
      if (s) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = r,
          a = he(he({ isCustomElement: o, delimiters: l }, i), c);
        r.render = fo(s, a);
      }
    }
    e.render = r.render || je;
  }
  mt(e), Qt(), ba(e), Yt(), pt();
}
function Wa(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return Te(e, "get", "$attrs"), t[n];
      },
    }))
  );
}
function qa(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return Wa(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function dr(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(xi(Ci(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in dn) return dn[n](e);
        },
        has(t, n) {
          return n in t || n in dn;
        },
      }))
    );
}
function Vr(e, t = !0) {
  return Q(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Va(e) {
  return Q(e) && "__vccOpts" in e;
}
const Re = (e, t) => Bc(e, t, qt);
function Ve(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? ce(t) && !V(t)
      ? Rn(t)
        ? de(e, null, [t])
        : de(e, t)
      : de(e, null, t)
    : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : r === 3 && Rn(n) && (n = [n]), de(e, t, n));
}
const za = Symbol.for("v-scx"),
  Ja = () => Be(za),
  dl = "3.3.1",
  Qa = "http://www.w3.org/2000/svg",
  wt = typeof document < "u" ? document : null,
  ho = wt && wt.createElement("template"),
  Ya = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s = t ? wt.createElementNS(Qa, e) : wt.createElement(e, n ? { is: n } : void 0);
      return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
    },
    createText: (e) => wt.createTextNode(e),
    createComment: (e) => wt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => wt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, s, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling))
        for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)); );
      else {
        ho.innerHTML = r ? `<svg>${e}</svg>` : e;
        const l = ho.content;
        if (r) {
          const c = l.firstChild;
          for (; c.firstChild; ) l.appendChild(c.firstChild);
          l.removeChild(c);
        }
        t.insertBefore(l, n);
      }
      return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
    },
  };
function Xa(e, t, n) {
  const r = e._vtc;
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : (e.className = t);
}
function Za(e, t, n) {
  const r = e.style,
    s = ae(n);
  if (n && !s) {
    if (t && !ae(t)) for (const o in t) n[o] == null && zr(r, o, "");
    for (const o in n) zr(r, o, n[o]);
  } else {
    const o = r.display;
    s ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (r.display = o);
  }
}
const po = /\s*!important$/;
function zr(e, t, n) {
  if (V(n)) n.forEach((r) => zr(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = Ga(e, t);
    po.test(n) ? e.setProperty(Jt(r), n.replace(po, ""), "important") : (e[r] = n);
  }
}
const go = ["Webkit", "Moz", "ms"],
  Cr = {};
function Ga(e, t) {
  const n = Cr[t];
  if (n) return n;
  let r = ze(t);
  if (r !== "filter" && r in e) return (Cr[t] = r);
  r = ir(r);
  for (let s = 0; s < go.length; s++) {
    const o = go[s] + r;
    if (o in e) return (Cr[t] = o);
  }
  return t;
}
const mo = "http://www.w3.org/1999/xlink";
function eu(e, t, n, r, s) {
  if (r && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(mo, t.slice(6, t.length)) : e.setAttributeNS(mo, t, n);
  else {
    const o = nc(t);
    n == null || (o && !ai(n)) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function tu(e, t, n, r, s, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    r && i(r, s, o), (e[t] = n ?? "");
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && !l.includes("-")) {
    e._value = n;
    const a = l === "OPTION" ? e.getAttribute("value") : e.value,
      u = n ?? "";
    a !== u && (e.value = u), n == null && e.removeAttribute(t);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean"
      ? (n = ai(n))
      : n == null && a === "string"
      ? ((n = ""), (c = !0))
      : a === "number" && ((n = 0), (c = !0));
  }
  try {
    e[t] = n;
  } catch {}
  c && e.removeAttribute(t);
}
function Ht(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function nu(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
function ru(e, t, n, r, s = null) {
  const o = e._vei || (e._vei = {}),
    i = o[t];
  if (r && i) i.value = r;
  else {
    const [l, c] = su(t);
    if (r) {
      const a = (o[t] = lu(r, s));
      Ht(e, l, a, c);
    } else i && (nu(e, l, i, c), (o[t] = void 0));
  }
}
const yo = /(?:Once|Passive|Capture)$/;
function su(e) {
  let t;
  if (yo.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(yo)); ) (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : Jt(e.slice(2)), t];
}
let Rr = 0;
const ou = Promise.resolve(),
  iu = () => Rr || (ou.then(() => (Rr = 0)), (Rr = Date.now()));
function lu(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Ie(cu(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = iu()), n;
}
function cu(e, t) {
  if (V(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return t;
}
const _o = /^on[a-z]/,
  au = (e, t, n, r, s = !1, o, i, l, c) => {
    t === "class"
      ? Xa(e, r, s)
      : t === "style"
      ? Za(e, n, r)
      : Pn(t)
      ? us(t) || ru(e, t, n, r, i)
      : (t[0] === "." ? ((t = t.slice(1)), !0) : t[0] === "^" ? ((t = t.slice(1)), !1) : uu(e, t, r, s))
      ? tu(e, t, r, o, i, l, c)
      : (t === "true-value" ? (e._trueValue = r) : t === "false-value" && (e._falseValue = r), eu(e, t, r, s));
  };
function uu(e, t, n, r) {
  return r
    ? !!(t === "innerHTML" || t === "textContent" || (t in e && _o.test(t) && Q(n)))
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (_o.test(t) && ae(n))
    ? !1
    : t in e;
}
const it = "transition",
  nn = "animation",
  Ms = (e, { slots: t }) => Ve(oa, fu(e), t);
Ms.displayName = "Transition";
const hl = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
Ms.props = he({}, Ui, hl);
const _t = (e, t = []) => {
    V(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  bo = (e) => (e ? (V(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function fu(e) {
  const t = {};
  for (const N in e) N in hl || (t[N] = e[N]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: r,
      duration: s,
      enterFromClass: o = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = o,
      appearActiveClass: a = i,
      appearToClass: u = l,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: p = `${n}-leave-active`,
      leaveToClass: b = `${n}-leave-to`,
    } = e,
    y = du(s),
    E = y && y[0],
    x = y && y[1],
    {
      onBeforeEnter: v,
      onEnter: g,
      onEnterCancelled: R,
      onLeave: _,
      onLeaveCancelled: A,
      onBeforeAppear: M = v,
      onAppear: $ = g,
      onAppearCancelled: P = R,
    } = t,
    j = (N, z, B) => {
      bt(N, z ? u : l), bt(N, z ? a : i), B && B();
    },
    D = (N, z) => {
      (N._isLeaving = !1), bt(N, f), bt(N, b), bt(N, p), z && z();
    },
    J = (N) => (z, B) => {
      const ue = N ? $ : g,
        Z = () => j(z, N, B);
      _t(ue, [z, Z]),
        vo(() => {
          bt(z, N ? c : o), lt(z, N ? u : l), bo(ue) || Eo(z, r, E, Z);
        });
    };
  return he(t, {
    onBeforeEnter(N) {
      _t(v, [N]), lt(N, o), lt(N, i);
    },
    onBeforeAppear(N) {
      _t(M, [N]), lt(N, c), lt(N, a);
    },
    onEnter: J(!1),
    onAppear: J(!0),
    onLeave(N, z) {
      N._isLeaving = !0;
      const B = () => D(N, z);
      lt(N, f),
        gu(),
        lt(N, p),
        vo(() => {
          N._isLeaving && (bt(N, f), lt(N, b), bo(_) || Eo(N, r, x, B));
        }),
        _t(_, [N, B]);
    },
    onEnterCancelled(N) {
      j(N, !1), _t(R, [N]);
    },
    onAppearCancelled(N) {
      j(N, !0), _t(P, [N]);
    },
    onLeaveCancelled(N) {
      D(N), _t(A, [N]);
    },
  });
}
function du(e) {
  if (e == null) return null;
  if (ce(e)) return [Tr(e.enter), Tr(e.leave)];
  {
    const t = Tr(e);
    return [t, t];
  }
}
function Tr(e) {
  return ci(e);
}
function lt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e._vtc || (e._vtc = new Set())).add(t);
}
function bt(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function vo(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let hu = 0;
function Eo(e, t, n, r) {
  const s = (e._endId = ++hu),
    o = () => {
      s === e._endId && r();
    };
  if (n) return setTimeout(o, n);
  const { type: i, timeout: l, propCount: c } = pu(e, t);
  if (!i) return r();
  const a = i + "end";
  let u = 0;
  const f = () => {
      e.removeEventListener(a, p), o();
    },
    p = (b) => {
      b.target === e && ++u >= c && f();
    };
  setTimeout(() => {
    u < c && f();
  }, l + 1),
    e.addEventListener(a, p);
}
function pu(e, t) {
  const n = window.getComputedStyle(e),
    r = (y) => (n[y] || "").split(", "),
    s = r(`${it}Delay`),
    o = r(`${it}Duration`),
    i = wo(s, o),
    l = r(`${nn}Delay`),
    c = r(`${nn}Duration`),
    a = wo(l, c);
  let u = null,
    f = 0,
    p = 0;
  t === it
    ? i > 0 && ((u = it), (f = i), (p = o.length))
    : t === nn
    ? a > 0 && ((u = nn), (f = a), (p = c.length))
    : ((f = Math.max(i, a)), (u = f > 0 ? (i > a ? it : nn) : null), (p = u ? (u === it ? o.length : c.length) : 0));
  const b = u === it && /\b(transform|all)(,|$)/.test(r(`${it}Property`).toString());
  return { type: u, timeout: f, propCount: p, hasTransform: b };
}
function wo(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => Co(n) + Co(e[r])));
}
function Co(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function gu() {
  return document.body.offsetHeight;
}
const Ro = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return V(t) ? (n) => Nt(t, n) : t;
};
function mu(e) {
  e.target.composing = !0;
}
function To(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const _p = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e._assign = Ro(s);
      const o = r || (s.props && s.props.type === "number");
      Ht(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return;
        let l = e.value;
        n && (l = l.trim()), o && (l = Ir(l)), e._assign(l);
      }),
        n &&
          Ht(e, "change", () => {
            e.value = e.value.trim();
          }),
        t || (Ht(e, "compositionstart", mu), Ht(e, "compositionend", To), Ht(e, "change", To));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: r, number: s } }, o) {
      if (
        ((e._assign = Ro(o)),
        e.composing ||
          (document.activeElement === e &&
            e.type !== "range" &&
            (n || (r && e.value.trim() === t) || ((s || e.type === "number") && Ir(e.value) === t))))
      )
        return;
      const i = t ?? "";
      e.value !== i && (e.value = i);
    },
  },
  pl = he({ patchProp: au }, Ya);
let gn,
  Po = !1;
function yu() {
  return gn || (gn = Ha(pl));
}
function _u() {
  return (gn = Po ? gn : Ia(pl)), (Po = !0), gn;
}
const bu = (...e) => {
    const t = yu().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (r) => {
        const s = gl(r);
        if (!s) return;
        const o = t._component;
        !Q(o) && !o.render && !o.template && (o.template = s.innerHTML), (s.innerHTML = "");
        const i = n(s, !1, s instanceof SVGElement);
        return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
      }),
      t
    );
  },
  vu = (...e) => {
    const t = _u().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (r) => {
        const s = gl(r);
        if (s) return n(s, !0, s instanceof SVGElement);
      }),
      t
    );
  };
function gl(e) {
  return ae(e) ? document.querySelector(e) : e;
}
const Eu =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  wu =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  Cu = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;
function Ru(e, t) {
  if (e !== "__proto__" && !(e === "constructor" && t && typeof t == "object" && "prototype" in t)) return t;
}
function Tu(e, t = {}) {
  if (typeof e != "string") return e;
  const n = e.toLowerCase().trim();
  if (n === "true") return !0;
  if (n === "false") return !1;
  if (n === "null") return null;
  if (n === "nan") return Number.NaN;
  if (n === "infinity") return Number.POSITIVE_INFINITY;
  if (n !== "undefined") {
    if (!Cu.test(e)) {
      if (t.strict) throw new SyntaxError("Invalid JSON");
      return e;
    }
    try {
      return Eu.test(e) || wu.test(e) ? JSON.parse(e, Ru) : JSON.parse(e);
    } catch (r) {
      if (t.strict) throw r;
      return e;
    }
  }
}
const Pu = /#/g,
  xu = /&/g,
  Au = /=/g,
  ml = /\+/g,
  ku = /%5e/gi,
  Ou = /%60/gi,
  Su = /%7c/gi,
  Hu = /%20/gi;
function Iu(e) {
  return encodeURI("" + e).replace(Su, "|");
}
function Jr(e) {
  return Iu(typeof e == "string" ? e : JSON.stringify(e))
    .replace(ml, "%2B")
    .replace(Hu, "+")
    .replace(Pu, "%23")
    .replace(xu, "%26")
    .replace(Ou, "`")
    .replace(ku, "^");
}
function Pr(e) {
  return Jr(e).replace(Au, "%3D");
}
function yl(e = "") {
  try {
    return decodeURIComponent("" + e);
  } catch {
    return "" + e;
  }
}
function Mu(e) {
  return yl(e.replace(ml, " "));
}
function $u(e = "") {
  const t = {};
  e[0] === "?" && (e = e.slice(1));
  for (const n of e.split("&")) {
    const r = n.match(/([^=]+)=?(.*)/) || [];
    if (r.length < 2) continue;
    const s = yl(r[1]);
    if (s === "__proto__" || s === "constructor") continue;
    const o = Mu(r[2] || "");
    typeof t[s] < "u" ? (Array.isArray(t[s]) ? t[s].push(o) : (t[s] = [t[s], o])) : (t[s] = o);
  }
  return t;
}
function Lu(e, t) {
  return (
    (typeof t == "number" || typeof t == "boolean") && (t = String(t)),
    t ? (Array.isArray(t) ? t.map((n) => `${Pr(e)}=${Jr(n)}`).join("&") : `${Pr(e)}=${Jr(t)}`) : Pr(e)
  );
}
function Nu(e) {
  return Object.keys(e)
    .filter((t) => e[t] !== void 0)
    .map((t) => Lu(t, e[t]))
    .join("&");
}
const Fu = /^\w{2,}:([/\\]{1,2})/,
  ju = /^\w{2,}:([/\\]{2})?/,
  Bu = /^([/\\]\s*){2,}[^/\\]/;
function On(e, t = {}) {
  return (
    typeof t == "boolean" && (t = { acceptRelative: t }),
    t.strict ? Fu.test(e) : ju.test(e) || (t.acceptRelative ? Bu.test(e) : !1)
  );
}
const Uu = /\/$|\/\?/;
function Qr(e = "", t = !1) {
  return t ? Uu.test(e) : e.endsWith("/");
}
function _l(e = "", t = !1) {
  if (!t) return (Qr(e) ? e.slice(0, -1) : e) || "/";
  if (!Qr(e, !0)) return e || "/";
  const [n, ...r] = e.split("?");
  return (n.slice(0, -1) || "/") + (r.length > 0 ? `?${r.join("?")}` : "");
}
function Du(e = "", t = !1) {
  if (!t) return e.endsWith("/") ? e : e + "/";
  if (Qr(e, !0)) return e || "/";
  const [n, ...r] = e.split("?");
  return n + "/" + (r.length > 0 ? `?${r.join("?")}` : "");
}
function Ku(e = "") {
  return e.startsWith("/");
}
function Wu(e = "") {
  return (Ku(e) ? e.slice(1) : e) || "/";
}
function qu(e, t) {
  if (bl(t) || On(e)) return e;
  const n = _l(t);
  return e.startsWith(n) ? e : Sn(n, e);
}
function xo(e, t) {
  if (bl(t)) return e;
  const n = _l(t);
  if (!e.startsWith(n)) return e;
  const r = e.slice(n.length);
  return r[0] === "/" ? r : "/" + r;
}
function Vu(e, t) {
  const n = hr(e),
    r = { ...$u(n.search), ...t };
  return (n.search = Nu(r)), Ju(n);
}
function bl(e) {
  return !e || e === "/";
}
function zu(e) {
  return e && e !== "/";
}
function Sn(e, ...t) {
  let n = e || "";
  for (const r of t.filter((s) => zu(s))) n = n ? Du(n) + Wu(r) : r;
  return n;
}
function hr(e = "", t) {
  if (!On(e, { acceptRelative: !0 })) return t ? hr(t + e) : Ao(e);
  const [n = "", r, s = ""] = (e.replace(/\\/g, "/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1),
    [o = "", i = ""] = (s.match(/([^#/?]*)(.*)?/) || []).splice(1),
    { pathname: l, search: c, hash: a } = Ao(i.replace(/\/(?=[A-Za-z]:)/, ""));
  return {
    protocol: n,
    auth: r ? r.slice(0, Math.max(0, r.length - 1)) : "",
    host: o,
    pathname: l,
    search: c,
    hash: a,
  };
}
function Ao(e = "") {
  const [t = "", n = "", r = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return { pathname: t, search: n, hash: r };
}
function Ju(e) {
  const t = e.pathname + (e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "") + e.hash;
  return e.protocol ? e.protocol + "//" + (e.auth ? e.auth + "@" : "") + e.host + t : t;
}
class Qu extends Error {
  constructor() {
    super(...arguments), (this.name = "FetchError");
  }
}
function Yu(e, t, n) {
  let r = "";
  t && (r = t.message),
    e && n ? (r = `${r} (${n.status} ${n.statusText} (${e.toString()}))`) : e && (r = `${r} (${e.toString()})`);
  const s = new Qu(r);
  return (
    Object.defineProperty(s, "request", {
      get() {
        return e;
      },
    }),
    Object.defineProperty(s, "response", {
      get() {
        return n;
      },
    }),
    Object.defineProperty(s, "data", {
      get() {
        return n && n._data;
      },
    }),
    Object.defineProperty(s, "status", {
      get() {
        return n && n.status;
      },
    }),
    Object.defineProperty(s, "statusText", {
      get() {
        return n && n.statusText;
      },
    }),
    Object.defineProperty(s, "statusCode", {
      get() {
        return n && n.status;
      },
    }),
    Object.defineProperty(s, "statusMessage", {
      get() {
        return n && n.statusText;
      },
    }),
    s
  );
}
const Xu = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function ko(e = "GET") {
  return Xu.has(e.toUpperCase());
}
function Zu(e) {
  if (e === void 0) return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean" || t === null
    ? !0
    : t !== "object"
    ? !1
    : Array.isArray(e)
    ? !0
    : (e.constructor && e.constructor.name === "Object") || typeof e.toJSON == "function";
}
const Gu = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
  ef = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function tf(e = "") {
  if (!e) return "json";
  const t = e.split(";").shift() || "";
  return ef.test(t) ? "json" : Gu.has(t) || t.startsWith("text/") ? "text" : "blob";
}
const nf = new Set([408, 409, 425, 429, 500, 502, 503, 504]);
function vl(e) {
  const { fetch: t, Headers: n } = e;
  function r(i) {
    const l = (i.error && i.error.name === "AbortError") || !1;
    if (i.options.retry !== !1 && !l) {
      let a;
      typeof i.options.retry == "number" ? (a = i.options.retry) : (a = ko(i.options.method) ? 0 : 1);
      const u = (i.response && i.response.status) || 500;
      if (a > 0 && nf.has(u)) return s(i.request, { ...i.options, retry: a - 1 });
    }
    const c = Yu(i.request, i.error, i.response);
    throw (Error.captureStackTrace && Error.captureStackTrace(c, s), c);
  }
  const s = async function (l, c = {}) {
      const a = { request: l, options: { ...e.defaults, ...c }, response: void 0, error: void 0 };
      a.options.onRequest && (await a.options.onRequest(a)),
        typeof a.request == "string" &&
          (a.options.baseURL && (a.request = qu(a.request, a.options.baseURL)),
          (a.options.query || a.options.params) &&
            (a.request = Vu(a.request, { ...a.options.params, ...a.options.query })),
          a.options.body &&
            ko(a.options.method) &&
            Zu(a.options.body) &&
            ((a.options.body = typeof a.options.body == "string" ? a.options.body : JSON.stringify(a.options.body)),
            (a.options.headers = new n(a.options.headers)),
            a.options.headers.has("content-type") || a.options.headers.set("content-type", "application/json"),
            a.options.headers.has("accept") || a.options.headers.set("accept", "application/json"))),
        (a.response = await t(a.request, a.options).catch(
          async (f) => ((a.error = f), a.options.onRequestError && (await a.options.onRequestError(a)), r(a))
        ));
      const u =
        (a.options.parseResponse ? "json" : a.options.responseType) || tf(a.response.headers.get("content-type") || "");
      if (u === "json") {
        const f = await a.response.text(),
          p = a.options.parseResponse || Tu;
        a.response._data = p(f);
      } else u === "stream" ? (a.response._data = a.response.body) : (a.response._data = await a.response[u]());
      return (
        a.options.onResponse && (await a.options.onResponse(a)),
        a.response.status >= 400 && a.response.status < 600
          ? (a.options.onResponseError && (await a.options.onResponseError(a)), r(a))
          : a.response
      );
    },
    o = function (l, c) {
      return s(l, c).then((a) => a._data);
    };
  return (o.raw = s), (o.native = t), (o.create = (i = {}) => vl({ ...e, defaults: { ...e.defaults, ...i } })), o;
}
const El = (function () {
    if (typeof globalThis < "u") return globalThis;
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("unable to locate global object");
  })(),
  rf = El.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),
  sf = El.Headers,
  of = vl({ fetch: rf, Headers: sf }),
  lf = of,
  cf = () => {
    var e;
    return ((e = window == null ? void 0 : window.__NUXT__) == null ? void 0 : e.config) || {};
  },
  tr = cf().app,
  af = () => tr.baseURL,
  uf = () => tr.buildAssetsDir,
  ff = (...e) => Sn(wl(), uf(), ...e),
  wl = (...e) => {
    const t = tr.cdnURL || tr.baseURL;
    return e.length ? Sn(t, ...e) : t;
  };
(globalThis.__buildAssetsURL = ff), (globalThis.__publicAssetsURL = wl);
function Yr(e, t = {}, n) {
  for (const r in e) {
    const s = e[r],
      o = n ? `${n}:${r}` : r;
    typeof s == "object" && s !== null ? Yr(s, t, o) : typeof s == "function" && (t[o] = s);
  }
  return t;
}
const df = { run: (e) => e() },
  hf = () => df,
  Cl = typeof console.createTask < "u" ? console.createTask : hf;
function pf(e, t) {
  const n = t.shift(),
    r = Cl(n);
  return e.reduce((s, o) => s.then(() => r.run(() => o(...t))), Promise.resolve());
}
function gf(e, t) {
  const n = t.shift(),
    r = Cl(n);
  return Promise.all(e.map((s) => r.run(() => s(...t))));
}
function xr(e, t) {
  for (const n of [...e]) n(t);
}
class mf {
  constructor() {
    (this._hooks = {}),
      (this._before = void 0),
      (this._after = void 0),
      (this._deprecatedMessages = void 0),
      (this._deprecatedHooks = {}),
      (this.hook = this.hook.bind(this)),
      (this.callHook = this.callHook.bind(this)),
      (this.callHookWith = this.callHookWith.bind(this));
  }
  hook(t, n, r = {}) {
    if (!t || typeof n != "function") return () => {};
    const s = t;
    let o;
    for (; this._deprecatedHooks[t]; ) (o = this._deprecatedHooks[t]), (t = o.to);
    if (o && !r.allowDeprecated) {
      let i = o.message;
      i || (i = `${s} hook has been deprecated` + (o.to ? `, please use ${o.to}` : "")),
        this._deprecatedMessages || (this._deprecatedMessages = new Set()),
        this._deprecatedMessages.has(i) || (console.warn(i), this._deprecatedMessages.add(i));
    }
    if (!n.name)
      try {
        Object.defineProperty(n, "name", { get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb", configurable: !0 });
      } catch {}
    return (
      (this._hooks[t] = this._hooks[t] || []),
      this._hooks[t].push(n),
      () => {
        n && (this.removeHook(t, n), (n = void 0));
      }
    );
  }
  hookOnce(t, n) {
    let r,
      s = (...o) => (typeof r == "function" && r(), (r = void 0), (s = void 0), n(...o));
    return (r = this.hook(t, s)), r;
  }
  removeHook(t, n) {
    if (this._hooks[t]) {
      const r = this._hooks[t].indexOf(n);
      r !== -1 && this._hooks[t].splice(r, 1), this._hooks[t].length === 0 && delete this._hooks[t];
    }
  }
  deprecateHook(t, n) {
    this._deprecatedHooks[t] = typeof n == "string" ? { to: n } : n;
    const r = this._hooks[t] || [];
    delete this._hooks[t];
    for (const s of r) this.hook(t, s);
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t);
    for (const n in t) this.deprecateHook(n, t[n]);
  }
  addHooks(t) {
    const n = Yr(t),
      r = Object.keys(n).map((s) => this.hook(s, n[s]));
    return () => {
      for (const s of r.splice(0, r.length)) s();
    };
  }
  removeHooks(t) {
    const n = Yr(t);
    for (const r in n) this.removeHook(r, n[r]);
  }
  removeAllHooks() {
    for (const t in this._hooks) delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(pf, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(gf, t, ...n);
  }
  callHookWith(t, n, ...r) {
    const s = this._before || this._after ? { name: n, args: r, context: {} } : void 0;
    this._before && xr(this._before, s);
    const o = t(n in this._hooks ? [...this._hooks[n]] : [], r);
    return o instanceof Promise
      ? o.finally(() => {
          this._after && s && xr(this._after, s);
        })
      : (this._after && s && xr(this._after, s), o);
  }
  beforeEach(t) {
    return (
      (this._before = this._before || []),
      this._before.push(t),
      () => {
        if (this._before !== void 0) {
          const n = this._before.indexOf(t);
          n !== -1 && this._before.splice(n, 1);
        }
      }
    );
  }
  afterEach(t) {
    return (
      (this._after = this._after || []),
      this._after.push(t),
      () => {
        if (this._after !== void 0) {
          const n = this._after.indexOf(t);
          n !== -1 && this._after.splice(n, 1);
        }
      }
    );
  }
}
function Rl() {
  return new mf();
}
function yf(e = {}) {
  let t,
    n = !1;
  const r = (i) => {
    if (t && t !== i) throw new Error("Context conflict");
  };
  let s;
  if (e.asyncContext) {
    const i = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    i ? (s = new i()) : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
  }
  const o = () => {
    if (s && t === void 0) {
      const i = s.getStore();
      if (i !== void 0) return i;
    }
    return t;
  };
  return {
    use: () => {
      const i = o();
      if (i === void 0) throw new Error("Context is not available");
      return i;
    },
    tryUse: () => o(),
    set: (i, l) => {
      l || r(i), (t = i), (n = !0);
    },
    unset: () => {
      (t = void 0), (n = !1);
    },
    call: (i, l) => {
      r(i), (t = i);
      try {
        return s ? s.run(i, l) : l();
      } finally {
        n || (t = void 0);
      }
    },
    async callAsync(i, l) {
      t = i;
      const c = () => {
          t = i;
        },
        a = () => (t === i ? c : void 0);
      Xr.add(a);
      try {
        const u = s ? s.run(i, l) : l();
        return n || (t = void 0), await u;
      } finally {
        Xr.delete(a);
      }
    },
  };
}
function _f(e = {}) {
  const t = {};
  return {
    get(n, r = {}) {
      return t[n] || (t[n] = yf({ ...e, ...r })), t[n], t[n];
    },
  };
}
const nr =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof global < "u"
      ? global
      : typeof window < "u"
      ? window
      : {},
  Oo = "__unctx__",
  bf = nr[Oo] || (nr[Oo] = _f()),
  vf = (e, t = {}) => bf.get(e, t),
  So = "__unctx_async_handlers__",
  Xr = nr[So] || (nr[So] = new Set());
function Zr(e) {
  const t = [];
  for (const s of Xr) {
    const o = s();
    o && t.push(o);
  }
  const n = () => {
    for (const s of t) s();
  };
  let r = e();
  return (
    r &&
      typeof r == "object" &&
      "catch" in r &&
      (r = r.catch((s) => {
        throw (n(), s);
      })),
    [r, n]
  );
}
const Tl = vf("nuxt-app"),
  Ef = "__nuxt_plugin";
function wf(e) {
  let t = 0;
  const n = {
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.4.3";
      },
      get vue() {
        return n.vueApp.version;
      },
    },
    payload: Je({ data: {}, state: {}, _errors: {}, ...(window.__NUXT__ ?? {}) }),
    static: { data: {} },
    isHydrating: !0,
    deferHydration() {
      if (!n.isHydrating) return () => {};
      t++;
      let o = !1;
      return () => {
        if (!o && ((o = !0), t--, t === 0)) return (n.isHydrating = !1), n.callHook("app:suspense:resolve");
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...e,
  };
  (n.hooks = Rl()),
    (n.hook = n.hooks.hook),
    (n.callHook = n.hooks.callHook),
    (n.provide = (o, i) => {
      const l = "$" + o;
      Un(n, l, i), Un(n.vueApp.config.globalProperties, l, i);
    }),
    Un(n.vueApp, "$nuxt", n),
    Un(n.vueApp.config.globalProperties, "$nuxt", n);
  {
    window.addEventListener("nuxt.preloadError", (i) => {
      n.callHook("app:chunkError", { error: i.payload });
    });
    const o = n.hook("app:error", (...i) => {
      console.error("[nuxt] error caught during app initialization", ...i);
    });
    n.hook("app:mounted", o);
  }
  const r = Je(n.payload.config),
    s = new Proxy(r, {
      get(o, i) {
        return i in o ? o[i] : o.public[i];
      },
      set(o, i, l) {
        return i === "public" || i === "app" ? !1 : ((o[i] = l), (o.public[i] = l), !0);
      },
    });
  return n.provide("config", s), n;
}
async function Cf(e, t) {
  if (typeof t != "function") return;
  const { provide: n } = (await Ge(e, t, [e])) || {};
  if (n && typeof n == "object") for (const r in n) e.provide(r, n[r]);
}
async function Rf(e, t) {
  for (const n of t) await Cf(e, n);
}
function Tf(e) {
  const t = [];
  for (const n of e) {
    if (typeof n != "function") continue;
    let r = n;
    n.length > 1 && (r = (s) => n(s, s.provide)), t.push(r);
  }
  return (
    t.sort((n, r) => {
      var s, o;
      return (
        (((s = n.meta) == null ? void 0 : s.order) || rr.default) -
        (((o = r.meta) == null ? void 0 : o.order) || rr.default)
      );
    }),
    t
  );
}
const rr = { pre: -20, default: 0, post: 20 };
function Pt(e, t) {
  var r;
  if (typeof e == "function") return Pt({ setup: e }, t);
  const n = (s) => {
    if ((e.hooks && s.hooks.addHooks(e.hooks), e.setup)) return e.setup(s);
  };
  return (
    (n.meta = {
      name: (t == null ? void 0 : t.name) || e.name || ((r = e.setup) == null ? void 0 : r.name),
      order: (t == null ? void 0 : t.order) || e.order || rr[e.enforce || "default"] || rr.default,
    }),
    (n[Ef] = !0),
    n
  );
}
function Ge(e, t, n) {
  const r = () => (n ? t(...n) : t());
  return Tl.set(e), r();
}
function _e() {
  const e = Tl.tryUse();
  if (!e) {
    const t = kn();
    if (!t) throw new Error("[nuxt] instance unavailable");
    return t.appContext.app.$nuxt;
  }
  return e;
}
function $s() {
  return _e().$config;
}
function Un(e, t, n) {
  Object.defineProperty(e, t, { get: () => n });
}
const Pf = Pt({ name: "nuxt:global-components" });
function xf(e) {
  return Array.isArray(e) ? e : [e];
}
const Pl = ["title", "script", "style", "noscript"],
  xl = ["base", "meta", "link", "style", "script", "noscript"],
  Af = [
    "title",
    "titleTemplate",
    "templateParams",
    "base",
    "htmlAttrs",
    "bodyAttrs",
    "meta",
    "link",
    "style",
    "script",
    "noscript",
  ],
  kf = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"],
  Of = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent"];
function Al(e) {
  let t = 9;
  for (let n = 0; n < e.length; ) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
  return ((t ^ (t >>> 9)) + 65536).toString(16).substring(1, 8).toLowerCase();
}
function Gr(e) {
  return Al(
    `${e.tag}:${e.textContent || e.innerHTML || ""}:${Object.entries(e.props)
      .map(([t, n]) => `${t}:${String(n)}`)
      .join(",")}`
  );
}
function Sf(e) {
  let t = 9;
  for (const n of e) for (let r = 0; r < n.length; ) t = Math.imul(t ^ n.charCodeAt(r++), 9 ** 9);
  return ((t ^ (t >>> 9)) + 65536).toString(16).substring(1, 8).toLowerCase();
}
function kl(e, t) {
  const { props: n, tag: r } = e;
  if (kf.includes(r)) return r;
  if (r === "link" && n.rel === "canonical") return "canonical";
  if (n.charset) return "charset";
  const s = ["id"];
  r === "meta" && s.push("name", "property", "http-equiv");
  for (const o of s)
    if (typeof n[o] < "u") {
      const i = String(n[o]);
      return t && !t(i) ? !1 : `${r}:${o}:${i}`;
    }
  return !1;
}
function Ho(e, t) {
  return e == null ? t || null : typeof e == "function" ? e(t) : e;
}
function Dn(e, t = !1, n) {
  const { tag: r, $el: s } = e;
  s &&
    (Object.entries(r.props).forEach(([o, i]) => {
      i = String(i);
      const l = `attr:${o}`;
      if (o === "class") {
        if (!i) return;
        for (const c of i.split(" ")) {
          const a = `${l}:${c}`;
          n && n(e, a, () => s.classList.remove(c)), s.classList.contains(c) || s.classList.add(c);
        }
        return;
      }
      n && !o.startsWith("data-h-") && n(e, l, () => s.removeAttribute(o)),
        (t || s.getAttribute(o) !== i) && s.setAttribute(o, i);
    }),
    Pl.includes(r.tag) &&
      (r.textContent && r.textContent !== s.textContent
        ? (s.textContent = r.textContent)
        : r.innerHTML && r.innerHTML !== s.innerHTML && (s.innerHTML = r.innerHTML)));
}
let rn = !1;
async function Hf(e, t = {}) {
  var p, b;
  const n = { shouldRender: !0 };
  if ((await e.hooks.callHook("dom:beforeRender", n), !n.shouldRender)) return;
  const r = t.document || e.resolvedOptions.document || window.document,
    s = (await e.resolveTags()).map(l);
  if (e.resolvedOptions.experimentalHashHydration && ((rn = rn || e._hash || !1), rn)) {
    const y = Sf(s.map((E) => E.tag._h));
    if (rn === y) return;
    rn = y;
  }
  const o = e._popSideEffectQueue();
  e.headEntries()
    .map((y) => y._sde)
    .forEach((y) => {
      Object.entries(y).forEach(([E, x]) => {
        o[E] = x;
      });
    });
  const i = (y, E, x) => {
    (E = `${y.renderId}:${E}`), y.entry && (y.entry._sde[E] = x), delete o[E];
  };
  function l(y) {
    const E = e.headEntries().find((v) => v._i === y._e),
      x = {
        renderId: y._d || Gr(y),
        $el: null,
        shouldRender: !0,
        tag: y,
        entry: E,
        markSideEffect: (v, g) => i(x, v, g),
      };
    return x;
  }
  const c = [],
    a = { body: [], head: [] },
    u = (y) => {
      (e._elMap[y.renderId] = y.$el),
        c.push(y),
        i(y, "el", () => {
          var E;
          (E = y.$el) == null || E.remove(), delete e._elMap[y.renderId];
        });
    };
  for (const y of s) {
    if ((await e.hooks.callHook("dom:beforeRenderTag", y), !y.shouldRender)) continue;
    const { tag: E } = y;
    if (E.tag === "title") {
      (r.title = E.textContent || ""), c.push(y);
      continue;
    }
    if (E.tag === "htmlAttrs" || E.tag === "bodyAttrs") {
      (y.$el = r[E.tag === "htmlAttrs" ? "documentElement" : "body"]), Dn(y, !1, i), c.push(y);
      continue;
    }
    if (
      ((y.$el = e._elMap[y.renderId]),
      !y.$el &&
        E.key &&
        (y.$el = r.querySelector(
          `${(p = E.tagPosition) != null && p.startsWith("body") ? "body" : "head"} > ${E.tag}[data-h-${E._h}]`
        )),
      y.$el)
    ) {
      y.tag._d && Dn(y), u(y);
      continue;
    }
    a[(b = E.tagPosition) != null && b.startsWith("body") ? "body" : "head"].push(y);
  }
  const f = { bodyClose: void 0, bodyOpen: void 0, head: void 0 };
  Object.entries(a).forEach(([y, E]) => {
    var v;
    if (!E.length) return;
    const x = (v = r == null ? void 0 : r[y]) == null ? void 0 : v.children;
    if (x) {
      for (const g of [...x].reverse()) {
        const R = g.tagName.toLowerCase();
        if (!xl.includes(R)) continue;
        const _ = g.getAttributeNames().reduce((P, j) => ({ ...P, [j]: g.getAttribute(j) }), {}),
          A = { tag: R, props: _ };
        g.innerHTML && (A.innerHTML = g.innerHTML);
        const M = Gr(A);
        let $ = E.findIndex((P) => (P == null ? void 0 : P.renderId) === M);
        if ($ === -1) {
          const P = kl(A);
          $ = E.findIndex((j) => (j == null ? void 0 : j.tag._d) && j.tag._d === P);
        }
        if ($ !== -1) {
          const P = E[$];
          (P.$el = g), Dn(P), u(P), delete E[$];
        }
      }
      E.forEach((g) => {
        const R = g.tag.tagPosition || "head";
        (f[R] = f[R] || r.createDocumentFragment()),
          g.$el || ((g.$el = r.createElement(g.tag.tag)), Dn(g, !0)),
          f[R].appendChild(g.$el),
          u(g);
      });
    }
  }),
    f.head && r.head.appendChild(f.head),
    f.bodyOpen && r.body.insertBefore(f.bodyOpen, r.body.firstChild),
    f.bodyClose && r.body.appendChild(f.bodyClose);
  for (const y of c) await e.hooks.callHook("dom:renderTag", y);
  Object.values(o).forEach((y) => y());
}
let Ar = null;
async function If(e, t = {}) {
  function n() {
    return (Ar = null), Hf(e, t);
  }
  const r = t.delayFn || ((s) => setTimeout(s, 10));
  return (Ar = Ar || new Promise((s) => r(() => s(n()))));
}
function Mf(e) {
  return {
    hooks: {
      "entries:updated": function (t) {
        if (typeof (e == null ? void 0 : e.document) > "u" && typeof window > "u") return;
        let n = e == null ? void 0 : e.delayFn;
        !n && typeof requestAnimationFrame < "u" && (n = requestAnimationFrame),
          If(t, { document: (e == null ? void 0 : e.document) || window.document, delayFn: n });
      },
    },
  };
}
function $f(e) {
  var t;
  return (
    ((t = e == null ? void 0 : e.head.querySelector('meta[name="unhead:ssr"]')) == null
      ? void 0
      : t.getAttribute("content")) || !1
  );
}
const Io = { critical: 2, high: 9, low: 12, base: -1, title: 1, meta: 10 };
function Mo(e) {
  if (typeof e.tagPriority == "number") return e.tagPriority;
  if (e.tag === "meta") {
    if (e.props.charset) return -2;
    if (e.props["http-equiv"] === "content-security-policy") return 0;
  }
  const t = e.tagPriority || e.tag;
  return t in Io ? Io[t] : 10;
}
const Lf = [
  { prefix: "before:", offset: -1 },
  { prefix: "after:", offset: 1 },
];
function Nf() {
  return {
    hooks: {
      "tags:resolve": (e) => {
        const t = (n) => {
          var r;
          return (r = e.tags.find((s) => s._d === n)) == null ? void 0 : r._p;
        };
        for (const { prefix: n, offset: r } of Lf)
          for (const s of e.tags.filter((o) => typeof o.tagPriority == "string" && o.tagPriority.startsWith(n))) {
            const o = t(s.tagPriority.replace(n, ""));
            typeof o < "u" && (s._p = o + r);
          }
        e.tags.sort((n, r) => n._p - r._p).sort((n, r) => Mo(n) - Mo(r));
      },
    },
  };
}
function Ff() {
  return {
    hooks: {
      "tags:resolve": (e) => {
        const { tags: t } = e;
        let n = t.findIndex((s) => s.tag === "titleTemplate");
        const r = t.findIndex((s) => s.tag === "title");
        if (r !== -1 && n !== -1) {
          const s = Ho(t[n].textContent, t[r].textContent);
          s !== null ? (t[r].textContent = s || t[r].textContent) : delete t[r];
        } else if (n !== -1) {
          const s = Ho(t[n].textContent);
          s !== null && ((t[n].textContent = s), (t[n].tag = "title"), (n = -1));
        }
        n !== -1 && delete t[n], (e.tags = t.filter(Boolean));
      },
    },
  };
}
function jf() {
  return {
    hooks: {
      "tag:normalise": function ({ tag: e }) {
        typeof e.props.body < "u" && ((e.tagPosition = "bodyClose"), delete e.props.body);
      },
    },
  };
}
const Bf = ["link", "style", "script", "noscript"];
function Uf() {
  return {
    hooks: {
      "tag:normalise": ({ tag: e, resolvedOptions: t }) => {
        t.experimentalHashHydration === !0 && (e._h = Gr(e)),
          e.key && Bf.includes(e.tag) && ((e._h = Al(e.key)), (e.props[`data-h-${e._h}`] = ""));
      },
    },
  };
}
const $o = ["script", "link", "bodyAttrs"];
function Df() {
  const e = (t, n) => {
    const r = {},
      s = {};
    Object.entries(n.props).forEach(([i, l]) => {
      i.startsWith("on") && typeof l == "function" ? (s[i] = l) : (r[i] = l);
    });
    let o;
    return (
      t === "dom" &&
        n.tag === "script" &&
        typeof r.src == "string" &&
        typeof s.onload < "u" &&
        ((o = r.src), delete r.src),
      { props: r, eventHandlers: s, delayedSrc: o }
    );
  };
  return {
    hooks: {
      "ssr:render": function (t) {
        t.tags = t.tags.map(
          (n) => (
            !$o.includes(n.tag) ||
              !Object.entries(n.props).find(([r, s]) => r.startsWith("on") && typeof s == "function") ||
              (n.props = e("ssr", n).props),
            n
          )
        );
      },
      "dom:beforeRenderTag": function (t) {
        if (
          !$o.includes(t.tag.tag) ||
          !Object.entries(t.tag.props).find(([o, i]) => o.startsWith("on") && typeof i == "function")
        )
          return;
        const { props: n, eventHandlers: r, delayedSrc: s } = e("dom", t.tag);
        Object.keys(r).length && ((t.tag.props = n), (t.tag._eventHandlers = r), (t.tag._delayedSrc = s));
      },
      "dom:renderTag": function (t) {
        const n = t.$el;
        if (!t.tag._eventHandlers || !n) return;
        const r = t.tag.tag === "bodyAttrs" && typeof window < "u" ? window : n;
        Object.entries(t.tag._eventHandlers).forEach(([s, o]) => {
          const i = `${t.tag._d || t.tag._p}:${s}`,
            l = s.slice(2).toLowerCase(),
            c = `data-h-${l}`;
          if ((t.markSideEffect(i, () => {}), n.hasAttribute(c))) return;
          const a = o;
          n.setAttribute(c, ""),
            r.addEventListener(l, a),
            t.entry &&
              (t.entry._sde[i] = () => {
                r.removeEventListener(l, a), n.removeAttribute(c);
              });
        }),
          t.tag._delayedSrc && n.setAttribute("src", t.tag._delayedSrc);
      },
    },
  };
}
const Kf = ["templateParams", "htmlAttrs", "bodyAttrs"];
function Wf() {
  return {
    hooks: {
      "tag:normalise": function ({ tag: e }) {
        ["hid", "vmid", "key"].forEach((r) => {
          e.props[r] && ((e.key = e.props[r]), delete e.props[r]);
        });
        const n = kl(e) || (e.key ? `${e.tag}:${e.key}` : !1);
        n && (e._d = n);
      },
      "tags:resolve": function (e) {
        const t = {};
        e.tags.forEach((r) => {
          const s = (r.key ? `${r.tag}:${r.key}` : r._d) || r._p,
            o = t[s];
          if (o) {
            let l = r == null ? void 0 : r.tagDuplicateStrategy;
            if ((!l && Kf.includes(r.tag) && (l = "merge"), l === "merge")) {
              const c = o.props;
              ["class", "style"].forEach((a) => {
                r.props[a] &&
                  c[a] &&
                  (a === "style" && !c[a].endsWith(";") && (c[a] += ";"), (r.props[a] = `${c[a]} ${r.props[a]}`));
              }),
                (t[s].props = { ...c, ...r.props });
              return;
            } else if (r._e === o._e) {
              (o._duped = o._duped || []), (r._d = `${o._d}:${o._duped.length + 1}`), o._duped.push(r);
              return;
            }
          }
          const i = Object.keys(r.props).length + (r.innerHTML ? 1 : 0) + (r.textContent ? 1 : 0);
          if (xl.includes(r.tag) && i === 0) {
            delete t[s];
            return;
          }
          t[s] = r;
        });
        const n = [];
        Object.values(t).forEach((r) => {
          const s = r._duped;
          delete r._duped, n.push(r), s && n.push(...s);
        }),
          (e.tags = n);
      },
    },
  };
}
function Kn(e, t) {
  function n(o) {
    if (["s", "pageTitle"].includes(o)) return t.pageTitle;
    let i;
    return (
      o.includes(".") ? (i = o.split(".").reduce((l, c) => (l && l[c]) || void 0, t)) : (i = t[o]),
      typeof i < "u" ? i || "" : !1
    );
  }
  let r = e;
  try {
    r = decodeURI(e);
  } catch {}
  return (
    (r.match(/%(\w+\.+\w+)|%(\w+)/g) || [])
      .sort()
      .reverse()
      .forEach((o) => {
        const i = n(o.slice(1));
        typeof i == "string" && (e = e.replaceAll(new RegExp(`\\${o}(\\W|$)`, "g"), `${i}$1`).trim());
      }),
    t.separator &&
      (e.endsWith(t.separator) && (e = e.slice(0, -t.separator.length).trim()),
      e.startsWith(t.separator) && (e = e.slice(t.separator.length).trim()),
      (e = e.replace(new RegExp(`\\${t.separator}\\s*\\${t.separator}`, "g"), t.separator))),
    e
  );
}
function qf() {
  return {
    hooks: {
      "tags:resolve": (e) => {
        var o;
        const { tags: t } = e,
          n = (o = t.find((i) => i.tag === "title")) == null ? void 0 : o.textContent,
          r = t.findIndex((i) => i.tag === "templateParams"),
          s = r !== -1 ? t[r].props : {};
        s.pageTitle = s.pageTitle || n || "";
        for (const i of t)
          if (["titleTemplate", "title"].includes(i.tag) && typeof i.textContent == "string")
            i.textContent = Kn(i.textContent, s);
          else if (i.tag === "meta" && typeof i.props.content == "string") i.props.content = Kn(i.props.content, s);
          else if (i.tag === "link" && typeof i.props.href == "string") i.props.href = Kn(i.props.href, s);
          else if (
            i.tag === "script" &&
            ["application/json", "application/ld+json"].includes(i.props.type) &&
            typeof i.innerHTML == "string"
          )
            try {
              i.innerHTML = JSON.stringify(JSON.parse(i.innerHTML), (l, c) => (typeof c == "string" ? Kn(c, s) : c));
            } catch {}
        e.tags = t.filter((i) => i.tag !== "templateParams");
      },
    },
  };
}
const Vf = typeof window < "u";
async function zf(e, t) {
  const n = { tag: e, props: {} };
  return e === "templateParams"
    ? ((n.props = t), n)
    : ["title", "titleTemplate"].includes(e)
    ? ((n.textContent = t instanceof Promise ? await t : t), n)
    : typeof t == "string"
    ? ["script", "noscript", "style"].includes(e)
      ? (e === "script" && (/^(https?:)?\/\//.test(t) || t.startsWith("/")) ? (n.props.src = t) : (n.innerHTML = t), n)
      : !1
    : ((n.props = await Qf(e, { ...t })),
      n.props.children && (n.props.innerHTML = n.props.children),
      delete n.props.children,
      Object.keys(n.props)
        .filter((r) => Of.includes(r))
        .forEach((r) => {
          (!["innerHTML", "textContent"].includes(r) || Pl.includes(n.tag)) && (n[r] = n.props[r]), delete n.props[r];
        }),
      ["innerHTML", "textContent"].forEach((r) => {
        if (
          n.tag === "script" &&
          typeof n[r] == "string" &&
          ["application/ld+json", "application/json"].includes(n.props.type)
        )
          try {
            n[r] = JSON.parse(n[r]);
          } catch {
            n[r] = "";
          }
        typeof n[r] == "object" && (n[r] = JSON.stringify(n[r]));
      }),
      n.props.class && (n.props.class = Jf(n.props.class)),
      n.props.content && Array.isArray(n.props.content)
        ? n.props.content.map((r) => ({ ...n, props: { ...n.props, content: r } }))
        : n);
}
function Jf(e) {
  return (
    typeof e == "object" && !Array.isArray(e) && (e = Object.keys(e).filter((t) => e[t])),
    (Array.isArray(e) ? e.join(" ") : e)
      .split(" ")
      .filter((t) => t.trim())
      .filter(Boolean)
      .join(" ")
  );
}
async function Qf(e, t) {
  for (const n of Object.keys(t)) {
    const r = n.startsWith("data-");
    t[n] instanceof Promise && (t[n] = await t[n]),
      String(t[n]) === "true"
        ? (t[n] = r ? "true" : "")
        : String(t[n]) === "false" && (r ? (t[n] = "false") : delete t[n]);
  }
  return t;
}
const Yf = 10;
async function Xf(e) {
  const t = [];
  return (
    Object.entries(e.resolvedInput)
      .filter(([n, r]) => typeof r < "u" && Af.includes(n))
      .forEach(([n, r]) => {
        const s = xf(r);
        t.push(...s.map((o) => zf(n, o)).flat());
      }),
    (await Promise.all(t))
      .flat()
      .filter(Boolean)
      .map((n, r) => ((n._e = e._i), (n._p = (e._i << Yf) + r), n))
  );
}
function Zf() {
  return [Wf(), Nf(), qf(), Ff(), Uf(), Df(), jf()];
}
function Gf(e = {}) {
  return [Mf({ document: e == null ? void 0 : e.document, delayFn: e == null ? void 0 : e.domDelayFn })];
}
function ed(e = {}) {
  const t = td({ ...e, plugins: [...Gf(e), ...((e == null ? void 0 : e.plugins) || [])] });
  return e.experimentalHashHydration && t.resolvedOptions.document && (t._hash = $f(t.resolvedOptions.document)), t;
}
function td(e = {}) {
  let t = [],
    n = {},
    r = 0;
  const s = Rl();
  e != null && e.hooks && s.addHooks(e.hooks),
    (e.plugins = [...Zf(), ...((e == null ? void 0 : e.plugins) || [])]),
    e.plugins.forEach((l) => l.hooks && s.addHooks(l.hooks)),
    (e.document = e.document || (Vf ? document : void 0));
  const o = () => s.callHook("entries:updated", i),
    i = {
      resolvedOptions: e,
      headEntries() {
        return t;
      },
      get hooks() {
        return s;
      },
      use(l) {
        l.hooks && s.addHooks(l.hooks);
      },
      push(l, c) {
        const a = { _i: r++, input: l, _sde: {} };
        return (
          c != null && c.mode && (a._m = c == null ? void 0 : c.mode),
          c != null && c.transform && (a._t = c == null ? void 0 : c.transform),
          t.push(a),
          o(),
          {
            dispose() {
              t = t.filter((u) => (u._i !== a._i ? !0 : ((n = { ...n, ...(u._sde || {}) }), (u._sde = {}), o(), !1)));
            },
            patch(u) {
              t = t.map((f) => (f._i === a._i && ((a.input = f.input = u), o()), f));
            },
          }
        );
      },
      async resolveTags() {
        const l = { tags: [], entries: [...t] };
        await s.callHook("entries:resolve", l);
        for (const c of l.entries) {
          const a = c._t || ((u) => u);
          if (((c.resolvedInput = a(c.resolvedInput || c.input)), c.resolvedInput))
            for (const u of await Xf(c)) {
              const f = { tag: u, entry: c, resolvedOptions: i.resolvedOptions };
              await s.callHook("tag:normalise", f), l.tags.push(f.tag);
            }
        }
        return await s.callHook("tags:resolve", l), l.tags;
      },
      _popSideEffectQueue() {
        const l = { ...n };
        return (n = {}), l;
      },
      _elMap: {},
    };
  return i.hooks.callHook("init", i), i;
}
function nd(e) {
  return typeof e == "function" ? e() : me(e);
}
function es(e, t = "") {
  if (e instanceof Promise) return e;
  const n = nd(e);
  return !e || !n
    ? n
    : Array.isArray(n)
    ? n.map((r) => es(r, t))
    : typeof n == "object"
    ? Object.fromEntries(
        Object.entries(n).map(([r, s]) => (r === "titleTemplate" || r.startsWith("on") ? [r, me(s)] : [r, es(s, r)]))
      )
    : n;
}
const rd = dl.startsWith("3"),
  sd = "usehead";
function od(e) {
  return {
    install(n) {
      rd && ((n.config.globalProperties.$unhead = e), (n.config.globalProperties.$head = e), n.provide(sd, e));
    },
  }.install;
}
function id(e = {}) {
  const t = ed({
    ...e,
    domDelayFn: (n) => setTimeout(() => Zt(() => n()), 10),
    plugins: [ld(), ...((e == null ? void 0 : e.plugins) || [])],
  });
  return (t.install = od(t)), t;
}
function ld() {
  return {
    hooks: {
      "entries:resolve": function (e) {
        for (const t of e.entries) t.resolvedInput = es(t.input);
      },
    },
  };
}
const cd = {
    meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }, { charset: "utf-8" }],
    link: [],
    style: [],
    script: [],
    noscript: [],
  },
  bp = !1,
  ts = !1,
  ad = !1,
  ud = "__nuxt",
  fd = !1,
  dd = Pt({
    name: "nuxt:head",
    setup(e) {
      const n = id();
      n.push(cd), e.vueApp.use(n);
      {
        let r = !0;
        const s = () => {
          (r = !1), n.hooks.callHook("entries:updated", n);
        };
        n.hooks.hook("dom:beforeRender", (o) => {
          o.shouldRender = !r;
        }),
          e.hooks.hook("page:start", () => {
            r = !0;
          }),
          e.hooks.hook("page:finish", s),
          e.hooks.hook("app:suspense:resolve", s);
      }
    },
  });
/*!
 * vue-router v4.2.0
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const It = typeof window < "u";
function hd(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const se = Object.assign;
function kr(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = Ue(s) ? s.map(e) : e(s);
  }
  return n;
}
const mn = () => {},
  Ue = Array.isArray,
  pd = /\/$/,
  gd = (e) => e.replace(pd, "");
function Or(e, t, n = "/") {
  let r,
    s = {},
    o = "",
    i = "";
  const l = t.indexOf("#");
  let c = t.indexOf("?");
  return (
    l < c && l >= 0 && (c = -1),
    c > -1 && ((r = t.slice(0, c)), (o = t.slice(c + 1, l > -1 ? l : t.length)), (s = e(o))),
    l > -1 && ((r = r || t.slice(0, l)), (i = t.slice(l, t.length))),
    (r = bd(r ?? t, n)),
    { fullPath: r + (o && "?") + o + i, path: r, query: s, hash: i }
  );
}
function md(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Lo(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function yd(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    r > -1 &&
    r === s &&
    Vt(t.matched[r], n.matched[s]) &&
    Ol(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Vt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ol(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!_d(e[n], t[n])) return !1;
  return !0;
}
function _d(e, t) {
  return Ue(e) ? No(e, t) : Ue(t) ? No(t, e) : e === t;
}
function No(e, t) {
  return Ue(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function bd(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/"),
    s = r[r.length - 1];
  (s === ".." || s === ".") && r.push("");
  let o = n.length - 1,
    i,
    l;
  for (i = 0; i < r.length; i++)
    if (((l = r[i]), l !== "."))
      if (l === "..") o > 1 && o--;
      else break;
  return n.slice(0, o).join("/") + "/" + r.slice(i - (i === r.length ? 1 : 0)).join("/");
}
var Tn;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Tn || (Tn = {}));
var yn;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(yn || (yn = {}));
function vd(e) {
  if (!e)
    if (It) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"), (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), gd(e);
}
const Ed = /^[^#]+#/;
function wd(e, t) {
  return e.replace(Ed, "#") + t;
}
function Cd(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return { behavior: t.behavior, left: r.left - n.left - (t.left || 0), top: r.top - n.top - (t.top || 0) };
}
const pr = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function Rd(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      s = typeof n == "string" ? (r ? document.getElementById(n.slice(1)) : document.querySelector(n)) : n;
    if (!s) return;
    t = Cd(s, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Fo(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const ns = new Map();
function Td(e, t) {
  ns.set(e, t);
}
function Pd(e) {
  const t = ns.get(e);
  return ns.delete(e), t;
}
let xd = () => location.protocol + "//" + location.host;
function Sl(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    o = e.indexOf("#");
  if (o > -1) {
    let l = s.includes(e.slice(o)) ? e.slice(o).length : 1,
      c = s.slice(l);
    return c[0] !== "/" && (c = "/" + c), Lo(c, "");
  }
  return Lo(n, e) + r + s;
}
function Ad(e, t, n, r) {
  let s = [],
    o = [],
    i = null;
  const l = ({ state: p }) => {
    const b = Sl(e, location),
      y = n.value,
      E = t.value;
    let x = 0;
    if (p) {
      if (((n.value = b), (t.value = p), i && i === y)) {
        i = null;
        return;
      }
      x = E ? p.position - E.position : 0;
    } else r(b);
    s.forEach((v) => {
      v(n.value, y, { delta: x, type: Tn.pop, direction: x ? (x > 0 ? yn.forward : yn.back) : yn.unknown });
    });
  };
  function c() {
    i = n.value;
  }
  function a(p) {
    s.push(p);
    const b = () => {
      const y = s.indexOf(p);
      y > -1 && s.splice(y, 1);
    };
    return o.push(b), b;
  }
  function u() {
    const { history: p } = window;
    p.state && p.replaceState(se({}, p.state, { scroll: pr() }), "");
  }
  function f() {
    for (const p of o) p();
    (o = []), window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", u);
  }
  return (
    window.addEventListener("popstate", l),
    window.addEventListener("beforeunload", u, { passive: !0 }),
    { pauseListeners: c, listen: a, destroy: f }
  );
}
function jo(e, t, n, r = !1, s = !1) {
  return { back: e, current: t, forward: n, replaced: r, position: window.history.length, scroll: s ? pr() : null };
}
function kd(e) {
  const { history: t, location: n } = window,
    r = { value: Sl(e, n) },
    s = { value: t.state };
  s.value ||
    o(r.value, { back: null, current: r.value, forward: null, position: t.length - 1, replaced: !0, scroll: null }, !0);
  function o(c, a, u) {
    const f = e.indexOf("#"),
      p = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + c : xd() + e + c;
    try {
      t[u ? "replaceState" : "pushState"](a, "", p), (s.value = a);
    } catch (b) {
      console.error(b), n[u ? "replace" : "assign"](p);
    }
  }
  function i(c, a) {
    const u = se({}, t.state, jo(s.value.back, c, s.value.forward, !0), a, { position: s.value.position });
    o(c, u, !0), (r.value = c);
  }
  function l(c, a) {
    const u = se({}, s.value, t.state, { forward: c, scroll: pr() });
    o(u.current, u, !0);
    const f = se({}, jo(r.value, c, null), { position: u.position + 1 }, a);
    o(c, f, !1), (r.value = c);
  }
  return { location: r, state: s, push: l, replace: i };
}
function Hl(e) {
  e = vd(e);
  const t = kd(e),
    n = Ad(e, t.state, t.location, t.replace);
  function r(o, i = !0) {
    i || n.pauseListeners(), history.go(o);
  }
  const s = se({ location: "", base: e, go: r, createHref: wd.bind(null, e) }, t, n);
  return (
    Object.defineProperty(s, "location", { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(s, "state", { enumerable: !0, get: () => t.state.value }),
    s
  );
}
function Od(e) {
  return (e = location.host ? e || location.pathname + location.search : ""), e.includes("#") || (e += "#"), Hl(e);
}
function Sd(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function Il(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const ct = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  Ml = Symbol("");
var Bo;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"), (e[(e.cancelled = 8)] = "cancelled"), (e[(e.duplicated = 16)] = "duplicated");
})(Bo || (Bo = {}));
function zt(e, t) {
  return se(new Error(), { type: e, [Ml]: !0 }, t);
}
function Ye(e, t) {
  return e instanceof Error && Ml in e && (t == null || !!(e.type & t));
}
const Uo = "[^/]+?",
  Hd = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Id = /[.+*?^${}()[\]/\\]/g;
function Md(e, t) {
  const n = se({}, Hd, t),
    r = [];
  let s = n.start ? "^" : "";
  const o = [];
  for (const a of e) {
    const u = a.length ? [] : [90];
    n.strict && !a.length && (s += "/");
    for (let f = 0; f < a.length; f++) {
      const p = a[f];
      let b = 40 + (n.sensitive ? 0.25 : 0);
      if (p.type === 0) f || (s += "/"), (s += p.value.replace(Id, "\\$&")), (b += 40);
      else if (p.type === 1) {
        const { value: y, repeatable: E, optional: x, regexp: v } = p;
        o.push({ name: y, repeatable: E, optional: x });
        const g = v || Uo;
        if (g !== Uo) {
          b += 10;
          try {
            new RegExp(`(${g})`);
          } catch (_) {
            throw new Error(`Invalid custom RegExp for param "${y}" (${g}): ` + _.message);
          }
        }
        let R = E ? `((?:${g})(?:/(?:${g}))*)` : `(${g})`;
        f || (R = x && a.length < 2 ? `(?:/${R})` : "/" + R),
          x && (R += "?"),
          (s += R),
          (b += 20),
          x && (b += -8),
          E && (b += -20),
          g === ".*" && (b += -50);
      }
      u.push(b);
    }
    r.push(u);
  }
  if (n.strict && n.end) {
    const a = r.length - 1;
    r[a][r[a].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"), n.end ? (s += "$") : n.strict && (s += "(?:/|$)");
  const i = new RegExp(s, n.sensitive ? "" : "i");
  function l(a) {
    const u = a.match(i),
      f = {};
    if (!u) return null;
    for (let p = 1; p < u.length; p++) {
      const b = u[p] || "",
        y = o[p - 1];
      f[y.name] = b && y.repeatable ? b.split("/") : b;
    }
    return f;
  }
  function c(a) {
    let u = "",
      f = !1;
    for (const p of e) {
      (!f || !u.endsWith("/")) && (u += "/"), (f = !1);
      for (const b of p)
        if (b.type === 0) u += b.value;
        else if (b.type === 1) {
          const { value: y, repeatable: E, optional: x } = b,
            v = y in a ? a[y] : "";
          if (Ue(v) && !E)
            throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);
          const g = Ue(v) ? v.join("/") : v;
          if (!g)
            if (x) p.length < 2 && (u.endsWith("/") ? (u = u.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${y}"`);
          u += g;
        }
    }
    return u || "/";
  }
  return { re: i, score: r, keys: o, parse: l, stringify: c };
}
function $d(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function Ld(e, t) {
  let n = 0;
  const r = e.score,
    s = t.score;
  for (; n < r.length && n < s.length; ) {
    const o = $d(r[n], s[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (Do(r)) return 1;
    if (Do(s)) return -1;
  }
  return s.length - r.length;
}
function Do(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Nd = { type: 0, value: "" },
  Fd = /[a-zA-Z0-9_]/;
function jd(e) {
  if (!e) return [[]];
  if (e === "/") return [[Nd]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(b) {
    throw new Error(`ERR (${n})/"${a}": ${b}`);
  }
  let n = 0,
    r = n;
  const s = [];
  let o;
  function i() {
    o && s.push(o), (o = []);
  }
  let l = 0,
    c,
    a = "",
    u = "";
  function f() {
    a &&
      (n === 0
        ? o.push({ type: 0, value: a })
        : n === 1 || n === 2 || n === 3
        ? (o.length > 1 &&
            (c === "*" || c === "+") &&
            t(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),
          o.push({
            type: 1,
            value: a,
            regexp: u,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?",
          }))
        : t("Invalid state to consume buffer"),
      (a = ""));
  }
  function p() {
    a += c;
  }
  for (; l < e.length; ) {
    if (((c = e[l++]), c === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        c === "/" ? (a && f(), i()) : c === ":" ? (f(), (n = 1)) : p();
        break;
      case 4:
        p(), (n = r);
        break;
      case 1:
        c === "(" ? (n = 2) : Fd.test(c) ? p() : (f(), (n = 0), c !== "*" && c !== "?" && c !== "+" && l--);
        break;
      case 2:
        c === ")" ? (u[u.length - 1] == "\\" ? (u = u.slice(0, -1) + c) : (n = 3)) : (u += c);
        break;
      case 3:
        f(), (n = 0), c !== "*" && c !== "?" && c !== "+" && l--, (u = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${a}"`), f(), i(), s;
}
function Bd(e, t, n) {
  const r = Md(jd(e.path), n),
    s = se(r, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function Ud(e, t) {
  const n = [],
    r = new Map();
  t = qo({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(u) {
    return r.get(u);
  }
  function o(u, f, p) {
    const b = !p,
      y = Dd(u);
    y.aliasOf = p && p.record;
    const E = qo(t, u),
      x = [y];
    if ("alias" in u) {
      const R = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const _ of R)
        x.push(se({}, y, { components: p ? p.record.components : y.components, path: _, aliasOf: p ? p.record : y }));
    }
    let v, g;
    for (const R of x) {
      const { path: _ } = R;
      if (f && _[0] !== "/") {
        const A = f.record.path,
          M = A[A.length - 1] === "/" ? "" : "/";
        R.path = f.record.path + (_ && M + _);
      }
      if (
        ((v = Bd(R, f, E)),
        p ? p.alias.push(v) : ((g = g || v), g !== v && g.alias.push(v), b && u.name && !Wo(v) && i(u.name)),
        y.children)
      ) {
        const A = y.children;
        for (let M = 0; M < A.length; M++) o(A[M], v, p && p.children[M]);
      }
      (p = p || v),
        ((v.record.components && Object.keys(v.record.components).length) || v.record.name || v.record.redirect) &&
          c(v);
    }
    return g
      ? () => {
          i(g);
        }
      : mn;
  }
  function i(u) {
    if (Il(u)) {
      const f = r.get(u);
      f && (r.delete(u), n.splice(n.indexOf(f), 1), f.children.forEach(i), f.alias.forEach(i));
    } else {
      const f = n.indexOf(u);
      f > -1 && (n.splice(f, 1), u.record.name && r.delete(u.record.name), u.children.forEach(i), u.alias.forEach(i));
    }
  }
  function l() {
    return n;
  }
  function c(u) {
    let f = 0;
    for (; f < n.length && Ld(u, n[f]) >= 0 && (u.record.path !== n[f].record.path || !$l(u, n[f])); ) f++;
    n.splice(f, 0, u), u.record.name && !Wo(u) && r.set(u.record.name, u);
  }
  function a(u, f) {
    let p,
      b = {},
      y,
      E;
    if ("name" in u && u.name) {
      if (((p = r.get(u.name)), !p)) throw zt(1, { location: u });
      (E = p.record.name),
        (b = se(
          Ko(
            f.params,
            p.keys.filter((g) => !g.optional).map((g) => g.name)
          ),
          u.params &&
            Ko(
              u.params,
              p.keys.map((g) => g.name)
            )
        )),
        (y = p.stringify(b));
    } else if ("path" in u)
      (y = u.path), (p = n.find((g) => g.re.test(y))), p && ((b = p.parse(y)), (E = p.record.name));
    else {
      if (((p = f.name ? r.get(f.name) : n.find((g) => g.re.test(f.path))), !p))
        throw zt(1, { location: u, currentLocation: f });
      (E = p.record.name), (b = se({}, f.params, u.params)), (y = p.stringify(b));
    }
    const x = [];
    let v = p;
    for (; v; ) x.unshift(v.record), (v = v.parent);
    return { name: E, path: y, params: b, matched: x, meta: Wd(x) };
  }
  return e.forEach((u) => o(u)), { addRoute: o, resolve: a, removeRoute: i, getRoutes: l, getRecordMatcher: s };
}
function Ko(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Dd(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Kd(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component },
  };
}
function Kd(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "boolean" ? n : n[r];
  return t;
}
function Wo(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Wd(e) {
  return e.reduce((t, n) => se(t, n.meta), {});
}
function qo(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function $l(e, t) {
  return t.children.some((n) => n === e || $l(e, n));
}
const Ll = /#/g,
  qd = /&/g,
  Vd = /\//g,
  zd = /=/g,
  Jd = /\?/g,
  Nl = /\+/g,
  Qd = /%5B/g,
  Yd = /%5D/g,
  Fl = /%5E/g,
  Xd = /%60/g,
  jl = /%7B/g,
  Zd = /%7C/g,
  Bl = /%7D/g,
  Gd = /%20/g;
function Ls(e) {
  return encodeURI("" + e)
    .replace(Zd, "|")
    .replace(Qd, "[")
    .replace(Yd, "]");
}
function eh(e) {
  return Ls(e).replace(jl, "{").replace(Bl, "}").replace(Fl, "^");
}
function rs(e) {
  return Ls(e)
    .replace(Nl, "%2B")
    .replace(Gd, "+")
    .replace(Ll, "%23")
    .replace(qd, "%26")
    .replace(Xd, "`")
    .replace(jl, "{")
    .replace(Bl, "}")
    .replace(Fl, "^");
}
function th(e) {
  return rs(e).replace(zd, "%3D");
}
function nh(e) {
  return Ls(e).replace(Ll, "%23").replace(Jd, "%3F");
}
function rh(e) {
  return e == null ? "" : nh(e).replace(Vd, "%2F");
}
function sr(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
function sh(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < r.length; ++s) {
    const o = r[s].replace(Nl, " "),
      i = o.indexOf("="),
      l = sr(i < 0 ? o : o.slice(0, i)),
      c = i < 0 ? null : sr(o.slice(i + 1));
    if (l in t) {
      let a = t[l];
      Ue(a) || (a = t[l] = [a]), a.push(c);
    } else t[l] = c;
  }
  return t;
}
function Vo(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = th(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Ue(r) ? r.map((o) => o && rs(o)) : [r && rs(r)]).forEach((o) => {
      o !== void 0 && ((t += (t.length ? "&" : "") + n), o != null && (t += "=" + o));
    });
  }
  return t;
}
function oh(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = Ue(r) ? r.map((s) => (s == null ? null : "" + s)) : r == null ? r : "" + r);
  }
  return t;
}
const ih = Symbol(""),
  zo = Symbol(""),
  Ns = Symbol(""),
  Fs = Symbol(""),
  ss = Symbol("");
function sn() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const s = e.indexOf(r);
        s > -1 && e.splice(s, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e, reset: n };
}
function ut(e, t, n, r, s) {
  const o = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () =>
    new Promise((i, l) => {
      const c = (f) => {
          f === !1
            ? l(zt(4, { from: n, to: t }))
            : f instanceof Error
            ? l(f)
            : Sd(f)
            ? l(zt(2, { from: t, to: f }))
            : (o && r.enterCallbacks[s] === o && typeof f == "function" && o.push(f), i());
        },
        a = e.call(r && r.instances[s], t, n, c);
      let u = Promise.resolve(a);
      e.length < 3 && (u = u.then(c)), u.catch((f) => l(f));
    });
}
function Sr(e, t, n, r) {
  const s = [];
  for (const o of e)
    for (const i in o.components) {
      let l = o.components[i];
      if (!(t !== "beforeRouteEnter" && !o.instances[i]))
        if (lh(l)) {
          const a = (l.__vccOpts || l)[t];
          a && s.push(ut(a, n, r, o, i));
        } else {
          let c = l();
          s.push(() =>
            c.then((a) => {
              if (!a) return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${o.path}"`));
              const u = hd(a) ? a.default : a;
              o.components[i] = u;
              const p = (u.__vccOpts || u)[t];
              return p && ut(p, n, r, o, i)();
            })
          );
        }
    }
  return s;
}
function lh(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Jo(e) {
  const t = Be(Ns),
    n = Be(Fs),
    r = Re(() => t.resolve(me(e.to))),
    s = Re(() => {
      const { matched: c } = r.value,
        { length: a } = c,
        u = c[a - 1],
        f = n.matched;
      if (!u || !f.length) return -1;
      const p = f.findIndex(Vt.bind(null, u));
      if (p > -1) return p;
      const b = Qo(c[a - 2]);
      return a > 1 && Qo(u) === b && f[f.length - 1].path !== b ? f.findIndex(Vt.bind(null, c[a - 2])) : p;
    }),
    o = Re(() => s.value > -1 && fh(n.params, r.value.params)),
    i = Re(() => s.value > -1 && s.value === n.matched.length - 1 && Ol(n.params, r.value.params));
  function l(c = {}) {
    return uh(c) ? t[me(e.replace) ? "replace" : "push"](me(e.to)).catch(mn) : Promise.resolve();
  }
  return { route: r, href: Re(() => r.value.href), isActive: o, isExactActive: i, navigate: l };
}
const ch = Gt({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: Jo,
    setup(e, { slots: t }) {
      const n = Je(Jo(e)),
        { options: r } = Be(Ns),
        s = Re(() => ({
          [Yo(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
          [Yo(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive,
        }));
      return () => {
        const o = t.default && t.default(n);
        return e.custom
          ? o
          : Ve(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              o
            );
      };
    },
  }),
  ah = ch;
function uh(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function fh(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == "string") {
      if (r !== s) return !1;
    } else if (!Ue(s) || s.length !== r.length || r.some((o, i) => o !== s[i])) return !1;
  }
  return !0;
}
function Qo(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Yo = (e, t, n) => e ?? t ?? n,
  dh = Gt({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = Be(ss),
        s = Re(() => e.route || r.value),
        o = Be(zo, 0),
        i = Re(() => {
          let a = me(o);
          const { matched: u } = s.value;
          let f;
          for (; (f = u[a]) && !f.components; ) a++;
          return a;
        }),
        l = Re(() => s.value.matched[i.value]);
      Dt(
        zo,
        Re(() => i.value + 1)
      ),
        Dt(ih, l),
        Dt(ss, s);
      const c = un();
      return (
        fn(
          () => [c.value, l.value, e.name],
          ([a, u, f], [p, b, y]) => {
            u &&
              ((u.instances[f] = a),
              b &&
                b !== u &&
                a &&
                a === p &&
                (u.leaveGuards.size || (u.leaveGuards = b.leaveGuards),
                u.updateGuards.size || (u.updateGuards = b.updateGuards))),
              a && u && (!b || !Vt(u, b) || !p) && (u.enterCallbacks[f] || []).forEach((E) => E(a));
          },
          { flush: "post" }
        ),
        () => {
          const a = s.value,
            u = e.name,
            f = l.value,
            p = f && f.components[u];
          if (!p) return Xo(n.default, { Component: p, route: a });
          const b = f.props[u],
            y = b ? (b === !0 ? a.params : typeof b == "function" ? b(a) : b) : null,
            x = Ve(
              p,
              se({}, y, t, {
                onVnodeUnmounted: (v) => {
                  v.component.isUnmounted && (f.instances[u] = null);
                },
                ref: c,
              })
            );
          return Xo(n.default, { Component: x, route: a }) || x;
        }
      );
    },
  });
function Xo(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Ul = dh;
function hh(e) {
  const t = Ud(e.routes, e),
    n = e.parseQuery || sh,
    r = e.stringifyQuery || Vo,
    s = e.history,
    o = sn(),
    i = sn(),
    l = sn(),
    c = Fr(ct);
  let a = ct;
  It && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = kr.bind(null, (C) => "" + C),
    f = kr.bind(null, rh),
    p = kr.bind(null, sr);
  function b(C, F) {
    let I, K;
    return Il(C) ? ((I = t.getRecordMatcher(C)), (K = F)) : (K = C), t.addRoute(K, I);
  }
  function y(C) {
    const F = t.getRecordMatcher(C);
    F && t.removeRoute(F);
  }
  function E() {
    return t.getRoutes().map((C) => C.record);
  }
  function x(C) {
    return !!t.getRecordMatcher(C);
  }
  function v(C, F) {
    if (((F = se({}, F || c.value)), typeof C == "string")) {
      const m = Or(n, C, F.path),
        w = t.resolve({ path: m.path }, F),
        T = s.createHref(m.fullPath);
      return se(m, w, { params: p(w.params), hash: sr(m.hash), redirectedFrom: void 0, href: T });
    }
    let I;
    if ("path" in C) I = se({}, C, { path: Or(n, C.path, F.path).path });
    else {
      const m = se({}, C.params);
      for (const w in m) m[w] == null && delete m[w];
      (I = se({}, C, { params: f(m) })), (F.params = f(F.params));
    }
    const K = t.resolve(I, F),
      re = C.hash || "";
    K.params = u(p(K.params));
    const d = md(r, se({}, C, { hash: eh(re), path: K.path })),
      h = s.createHref(d);
    return se({ fullPath: d, hash: re, query: r === Vo ? oh(C.query) : C.query || {} }, K, {
      redirectedFrom: void 0,
      href: h,
    });
  }
  function g(C) {
    return typeof C == "string" ? Or(n, C, c.value.path) : se({}, C);
  }
  function R(C, F) {
    if (a !== C) return zt(8, { from: F, to: C });
  }
  function _(C) {
    return $(C);
  }
  function A(C) {
    return _(se(g(C), { replace: !0 }));
  }
  function M(C) {
    const F = C.matched[C.matched.length - 1];
    if (F && F.redirect) {
      const { redirect: I } = F;
      let K = typeof I == "function" ? I(C) : I;
      return (
        typeof K == "string" && ((K = K.includes("?") || K.includes("#") ? (K = g(K)) : { path: K }), (K.params = {})),
        se({ query: C.query, hash: C.hash, params: "path" in K ? {} : C.params }, K)
      );
    }
  }
  function $(C, F) {
    const I = (a = v(C)),
      K = c.value,
      re = C.state,
      d = C.force,
      h = C.replace === !0,
      m = M(I);
    if (m) return $(se(g(m), { state: typeof m == "object" ? se({}, re, m.state) : re, force: d, replace: h }), F || I);
    const w = I;
    w.redirectedFrom = F;
    let T;
    return (
      !d && yd(r, K, I) && ((T = zt(16, { to: w, from: K })), De(K, K, !0, !1)),
      (T ? Promise.resolve(T) : D(w, K))
        .catch((k) => (Ye(k) ? (Ye(k, 2) ? k : rt(k)) : ne(k, w, K)))
        .then((k) => {
          if (k) {
            if (Ye(k, 2))
              return $(
                se({ replace: h }, g(k.to), { state: typeof k.to == "object" ? se({}, re, k.to.state) : re, force: d }),
                F || w
              );
          } else k = N(w, K, !0, h, re);
          return J(w, K, k), k;
        })
    );
  }
  function P(C, F) {
    const I = R(C, F);
    return I ? Promise.reject(I) : Promise.resolve();
  }
  function j(C) {
    const F = At.values().next().value;
    return F && typeof F.runWithContext == "function" ? F.runWithContext(C) : C();
  }
  function D(C, F) {
    let I;
    const [K, re, d] = ph(C, F);
    I = Sr(K.reverse(), "beforeRouteLeave", C, F);
    for (const m of K)
      m.leaveGuards.forEach((w) => {
        I.push(ut(w, C, F));
      });
    const h = P.bind(null, C, F);
    return (
      I.push(h),
      be(I)
        .then(() => {
          I = [];
          for (const m of o.list()) I.push(ut(m, C, F));
          return I.push(h), be(I);
        })
        .then(() => {
          I = Sr(re, "beforeRouteUpdate", C, F);
          for (const m of re)
            m.updateGuards.forEach((w) => {
              I.push(ut(w, C, F));
            });
          return I.push(h), be(I);
        })
        .then(() => {
          I = [];
          for (const m of C.matched)
            if (m.beforeEnter && !F.matched.includes(m))
              if (Ue(m.beforeEnter)) for (const w of m.beforeEnter) I.push(ut(w, C, F));
              else I.push(ut(m.beforeEnter, C, F));
          return I.push(h), be(I);
        })
        .then(
          () => (
            C.matched.forEach((m) => (m.enterCallbacks = {})), (I = Sr(d, "beforeRouteEnter", C, F)), I.push(h), be(I)
          )
        )
        .then(() => {
          I = [];
          for (const m of i.list()) I.push(ut(m, C, F));
          return I.push(h), be(I);
        })
        .catch((m) => (Ye(m, 8) ? m : Promise.reject(m)))
    );
  }
  function J(C, F, I) {
    for (const K of l.list()) j(() => K(C, F, I));
  }
  function N(C, F, I, K, re) {
    const d = R(C, F);
    if (d) return d;
    const h = F === ct,
      m = It ? history.state : {};
    I && (K || h ? s.replace(C.fullPath, se({ scroll: h && m && m.scroll }, re)) : s.push(C.fullPath, re)),
      (c.value = C),
      De(C, F, I, h),
      rt();
  }
  let z;
  function B() {
    z ||
      (z = s.listen((C, F, I) => {
        if (!Hn.listening) return;
        const K = v(C),
          re = M(K);
        if (re) {
          $(se(re, { replace: !0 }), K).catch(mn);
          return;
        }
        a = K;
        const d = c.value;
        It && Td(Fo(d.fullPath, I.delta), pr()),
          D(K, d)
            .catch((h) =>
              Ye(h, 12)
                ? h
                : Ye(h, 2)
                ? ($(h.to, K)
                    .then((m) => {
                      Ye(m, 20) && !I.delta && I.type === Tn.pop && s.go(-1, !1);
                    })
                    .catch(mn),
                  Promise.reject())
                : (I.delta && s.go(-I.delta, !1), ne(h, K, d))
            )
            .then((h) => {
              (h = h || N(K, d, !1)),
                h && (I.delta && !Ye(h, 8) ? s.go(-I.delta, !1) : I.type === Tn.pop && Ye(h, 20) && s.go(-1, !1)),
                J(K, d, h);
            })
            .catch(mn);
      }));
  }
  let ue = sn(),
    Z = sn(),
    te;
  function ne(C, F, I) {
    rt(C);
    const K = Z.list();
    return K.length ? K.forEach((re) => re(C, F, I)) : console.error(C), Promise.reject(C);
  }
  function Qe() {
    return te && c.value !== ct
      ? Promise.resolve()
      : new Promise((C, F) => {
          ue.add([C, F]);
        });
  }
  function rt(C) {
    return te || ((te = !C), B(), ue.list().forEach(([F, I]) => (C ? I(C) : F())), ue.reset()), C;
  }
  function De(C, F, I, K) {
    const { scrollBehavior: re } = e;
    if (!It || !re) return Promise.resolve();
    const d = (!I && Pd(Fo(C.fullPath, 0))) || ((K || !I) && history.state && history.state.scroll) || null;
    return Zt()
      .then(() => re(C, F, d))
      .then((h) => h && Rd(h))
      .catch((h) => ne(h, C, F));
  }
  const we = (C) => s.go(C);
  let xt;
  const At = new Set(),
    Hn = {
      currentRoute: c,
      listening: !0,
      addRoute: b,
      removeRoute: y,
      hasRoute: x,
      getRoutes: E,
      resolve: v,
      options: e,
      push: _,
      replace: A,
      go: we,
      back: () => we(-1),
      forward: () => we(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: l.add,
      onError: Z.add,
      isReady: Qe,
      install(C) {
        const F = this;
        C.component("RouterLink", ah),
          C.component("RouterView", Ul),
          (C.config.globalProperties.$router = F),
          Object.defineProperty(C.config.globalProperties, "$route", { enumerable: !0, get: () => me(c) }),
          It && !xt && c.value === ct && ((xt = !0), _(s.location).catch((re) => {}));
        const I = {};
        for (const re in ct) I[re] = Re(() => c.value[re]);
        C.provide(Ns, F), C.provide(Fs, Je(I)), C.provide(ss, c);
        const K = C.unmount;
        At.add(C),
          (C.unmount = function () {
            At.delete(C), At.size < 1 && ((a = ct), z && z(), (z = null), (c.value = ct), (xt = !1), (te = !1)), K();
          });
      },
    };
  function be(C) {
    return C.reduce((F, I) => F.then(() => j(I)), Promise.resolve());
  }
  return Hn;
}
function ph(e, t) {
  const n = [],
    r = [],
    s = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const l = t.matched[i];
    l && (e.matched.find((a) => Vt(a, l)) ? r.push(l) : n.push(l));
    const c = e.matched[i];
    c && (t.matched.find((a) => Vt(a, c)) || s.push(c));
  }
  return [n, r, s];
}
function vp() {
  return Be(Fs);
}
function Hr(e) {
  return e !== null && typeof e == "object";
}
function os(e, t, n = ".", r) {
  if (!Hr(t)) return os(e, {}, n, r);
  const s = Object.assign({}, t);
  for (const o in e) {
    if (o === "__proto__" || o === "constructor") continue;
    const i = e[o];
    i != null &&
      ((r && r(s, o, i, n)) ||
        (Array.isArray(i) && Array.isArray(s[o])
          ? (s[o] = [...i, ...s[o]])
          : Hr(i) && Hr(s[o])
          ? (s[o] = os(i, s[o], (n ? `${n}.` : "") + o.toString(), r))
          : (s[o] = i)));
  }
  return s;
}
function gh(e) {
  return (...t) => t.reduce((n, r) => os(n, r, "", e), {});
}
const mh = gh();
class is extends Error {
  constructor() {
    super(...arguments),
      (this.statusCode = 500),
      (this.fatal = !1),
      (this.unhandled = !1),
      (this.statusMessage = void 0);
  }
  toJSON() {
    const t = { message: this.message, statusCode: cs(this.statusCode, 500) };
    return (
      this.statusMessage && (t.statusMessage = Dl(this.statusMessage)), this.data !== void 0 && (t.data = this.data), t
    );
  }
}
is.__h3_error__ = !0;
function ls(e) {
  if (typeof e == "string") return new is(e);
  if (yh(e)) return e;
  const t = new is(e.message ?? e.statusMessage, e.cause ? { cause: e.cause } : void 0);
  if ("stack" in e)
    try {
      Object.defineProperty(t, "stack", {
        get() {
          return e.stack;
        },
      });
    } catch {
      try {
        t.stack = e.stack;
      } catch {}
    }
  if (
    (e.data && (t.data = e.data),
    e.statusCode
      ? (t.statusCode = cs(e.statusCode, t.statusCode))
      : e.status && (t.statusCode = cs(e.status, t.statusCode)),
    e.statusMessage ? (t.statusMessage = e.statusMessage) : e.statusText && (t.statusMessage = e.statusText),
    t.statusMessage)
  ) {
    const n = t.statusMessage;
    Dl(t.statusMessage) !== n &&
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future `statusMessage` will be sanitized by default."
      );
  }
  return e.fatal !== void 0 && (t.fatal = e.fatal), e.unhandled !== void 0 && (t.unhandled = e.unhandled), t;
}
function yh(e) {
  var t;
  return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.__h3_error__) === !0;
}
const _h = /[^\u0009\u0020-\u007E]/g;
function Dl(e = "") {
  return e.replace(_h, "");
}
function cs(e, t = 200) {
  return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)), e < 100 || e > 999) ? t : e;
}
function bh(...e) {
  const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
  typeof e[0] != "string" && e.unshift(t);
  const [n, r] = e;
  if (!n || typeof n != "string") throw new TypeError("[nuxt] [useState] key must be a string: " + n);
  if (r !== void 0 && typeof r != "function") throw new Error("[nuxt] [useState] init must be a function: " + r);
  const s = "$s" + n,
    o = _e(),
    i = Ai(o.payload.state, s);
  if (i.value === void 0 && r) {
    const l = r();
    if (ge(l)) return (o.payload.state[s] = l), l;
    i.value = l;
  }
  return i;
}
const en = () => {
    var e;
    return (e = _e()) == null ? void 0 : e.$router;
  },
  vh = () => (kn() ? Be("_route", _e()._route) : _e()._route),
  Eh = (e) => e,
  wh = () => {
    try {
      if (_e()._processingMiddleware) return !0;
    } catch {
      return !0;
    }
    return !1;
  },
  Ep = (e, t) => {
    e || (e = "/");
    const n = typeof e == "string" ? e : e.path || "/",
      r = (t == null ? void 0 : t.external) || On(n, { acceptRelative: !0 });
    if (r && !(t != null && t.external))
      throw new Error(
        "Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`."
      );
    if (r && hr(n).protocol === "script:") throw new Error("Cannot navigate to an URL with script protocol.");
    const s = wh();
    if (!r && s) return e;
    const o = en();
    return r
      ? (t != null && t.replace ? location.replace(n) : (location.href = n), Promise.resolve())
      : t != null && t.replace
      ? o.replace(e)
      : o.push(e);
  },
  gr = () => Ai(_e().payload, "error"),
  Mt = (e) => {
    const t = Kl(e);
    try {
      _e().callHook("app:error", t);
      const r = gr();
      r.value = r.value || t;
    } catch {
      throw t;
    }
    return t;
  },
  Ch = async (e = {}) => {
    const t = _e(),
      n = gr();
    t.callHook("app:error:cleared", e), e.redirect && (await en().replace(e.redirect)), (n.value = null);
  },
  Rh = (e) => !!(e && typeof e == "object" && "__nuxt_error" in e),
  Kl = (e) => {
    const t = ls(e);
    return (t.__nuxt_error = !0), t;
  },
  Th = "modulepreload",
  Ph = function (e, t) {
    return e.startsWith(".") ? new URL(e, t).href : e;
  },
  Zo = {},
  xh = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const s = document.getElementsByTagName("link");
    return Promise.all(
      n.map((o) => {
        if (((o = Ph(o, r)), o in Zo)) return;
        Zo[o] = !0;
        const i = o.endsWith(".css"),
          l = i ? '[rel="stylesheet"]' : "";
        if (!!r)
          for (let u = s.length - 1; u >= 0; u--) {
            const f = s[u];
            if (f.href === o && (!i || f.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${o}"]${l}`)) return;
        const a = document.createElement("link");
        if (
          ((a.rel = i ? "stylesheet" : Th),
          i || ((a.as = "script"), (a.crossOrigin = "")),
          (a.href = o),
          document.head.appendChild(a),
          i)
        )
          return new Promise((u, f) => {
            a.addEventListener("load", u),
              a.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${o}`)));
          });
      })
    ).then(() => t());
  },
  ft = (...e) =>
    xh(...e).catch((t) => {
      const n = new Event("nuxt.preloadError");
      throw ((n.payload = t), window.dispatchEvent(n), t);
    }),
  xe = {
    validate: async (e) => {
      const t = Object.keys(e.params).includes("slug"),
        n = Object.keys(e.query).length > 0,
        r = e.hash !== "";
      return console.log("hasHash", r), (t && /^[\d\s]+$/.test(e.params.slug)) || n || r;
    },
  },
  Go = [
    {
      name: "api-movies",
      path: "/api-movies",
      meta: {},
      alias: [],
      redirect: void 0,
      component: () =>
        ft(() => import("./index.b8ad5c25.js"), ["./index.b8ad5c25.js", "./layout.3af69fd1.js"], import.meta.url).then(
          (e) => e.default || e
        ),
    },
    {
      name: (xe == null ? void 0 : xe.name) ?? "contactos-slug",
      path: (xe == null ? void 0 : xe.path) ?? "/contactos/:slug(.*)*",
      meta: xe || {},
      alias: (xe == null ? void 0 : xe.alias) || [],
      redirect: (xe == null ? void 0 : xe.redirect) || void 0,
      component: () =>
        ft(() => import("./index.67212497.js"), ["./index.67212497.js", "./layout.3af69fd1.js"], import.meta.url).then(
          (e) => e.default || e
        ),
    },
    {
      name: "contactos-contacto",
      path: "/contactos/contacto",
      meta: {},
      alias: [],
      redirect: void 0,
      component: () =>
        ft(
          () => import("./contacto.40c8fe60.js"),
          ["./contacto.40c8fe60.js", "./layout.3af69fd1.js"],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "contactos",
      path: "/contactos",
      meta: {},
      alias: [],
      redirect: void 0,
      component: () =>
        ft(() => import("./index.acdde6d5.js"), ["./index.acdde6d5.js", "./layout.3af69fd1.js"], import.meta.url).then(
          (e) => e.default || e
        ),
    },
    {
      name: "index",
      path: "/",
      meta: {},
      alias: [],
      redirect: void 0,
      component: () =>
        ft(() => import("./index.f41a84b4.js"), ["./index.f41a84b4.js", "./layout.3af69fd1.js"], import.meta.url).then(
          (e) => e.default || e
        ),
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
  Ah = {
    scrollBehavior(e, t, n) {
      const r = _e();
      let s = n || void 0;
      if ((!s && t && e && e.meta.scrollToTop !== !1 && kh(t, e) && (s = { left: 0, top: 0 }), e.path === t.path)) {
        if (t.hash && !e.hash) return { left: 0, top: 0 };
        if (e.hash) return { el: e.hash, top: ei(e.hash) };
      }
      const o = (l) => !!(l.meta.pageTransition ?? ts),
        i = o(t) && o(e) ? "page:transition:finish" : "page:finish";
      return new Promise((l) => {
        r.hooks.hookOnce(i, async () => {
          await Zt(), e.hash && (s = { el: e.hash, top: ei(e.hash) }), l(s);
        });
      });
    },
  };
function ei(e) {
  try {
    const t = document.querySelector(e);
    if (t) return parseFloat(getComputedStyle(t).scrollMarginTop);
  } catch {}
  return 0;
}
function kh(e, t) {
  const n = e.matched[0] === t.matched[0];
  return !!(!n || (n && JSON.stringify(e.params) !== JSON.stringify(t.params)));
}
const Oh = {},
  Xe = { ...Oh, ...Ah },
  Sh = Eh(async (e) => {
    var c;
    let t, n;
    if (!((c = e.meta) != null && c.validate)) return;
    const r = _e(),
      s = en();
    if ((([t, n] = Zr(() => Promise.resolve(e.meta.validate(e)))), (t = await t), n(), t) === !0) return;
    const i = Kl({ statusCode: 404, statusMessage: `Page Not Found: ${e.fullPath}` }),
      l = s.beforeResolve((a) => {
        if ((l(), a === e)) {
          const u = s.afterEach(async () => {
            u(), await Ge(r, Mt, [i]), window.history.pushState({}, "", e.fullPath);
          });
          return !1;
        }
      });
  }),
  Hh = [Sh],
  _n = {};
function Ih(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    o = e.indexOf("#");
  if (o > -1) {
    const l = s.includes(e.slice(o)) ? e.slice(o).length : 1;
    let c = s.slice(l);
    return c[0] !== "/" && (c = "/" + c), xo(c, "");
  }
  return xo(n, e) + r + s;
}
const Mh = Pt(
    {
      name: "nuxt:router",
      enforce: "pre",
      async setup(e) {
        var y, E;
        let t,
          n,
          r = $s().app.baseURL;
        Xe.hashMode && !r.includes("#") && (r += "#");
        const s = ((y = Xe.history) == null ? void 0 : y.call(Xe, r)) ?? (Xe.hashMode ? Od(r) : Hl(r)),
          o = ((E = Xe.routes) == null ? void 0 : E.call(Xe, Go)) ?? Go,
          i = Ih(r, window.location),
          l = hh({ ...Xe, history: s, routes: o });
        e.vueApp.use(l);
        const c = Fr(l.currentRoute.value);
        l.afterEach((x, v) => {
          c.value = v;
        }),
          Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", { get: () => c.value });
        const a = Fr(l.resolve(i)),
          u = () => {
            a.value = l.currentRoute.value;
          };
        e.hook("page:finish", u),
          l.afterEach((x, v) => {
            var g, R, _, A;
            ((R = (g = x.matched[0]) == null ? void 0 : g.components) == null ? void 0 : R.default) ===
              ((A = (_ = v.matched[0]) == null ? void 0 : _.components) == null ? void 0 : A.default) && u();
          });
        const f = {};
        for (const x in a.value) f[x] = Re(() => a.value[x]);
        (e._route = Je(f)), (e._middleware = e._middleware || { global: [], named: {} });
        const p = gr();
        try {
          ([t, n] = Zr(() => l.isReady())), await t, n();
        } catch (x) {
          ([t, n] = Zr(() => Ge(e, Mt, [x]))), await t, n();
        }
        const b = bh("_layout");
        return (
          l.beforeEach(async (x, v) => {
            var R;
            (x.meta = Je(x.meta)),
              e.isHydrating && b.value && !Tt(x.meta.layout) && (x.meta.layout = b.value),
              (e._processingMiddleware = !0);
            const g = new Set([...Hh, ...e._middleware.global]);
            for (const _ of x.matched) {
              const A = _.meta.middleware;
              if (A)
                if (Array.isArray(A)) for (const M of A) g.add(M);
                else g.add(A);
            }
            for (const _ of g) {
              const A =
                typeof _ == "string"
                  ? e._middleware.named[_] ||
                    (await ((R = _n[_]) == null ? void 0 : R.call(_n).then(($) => $.default || $)))
                  : _;
              if (!A) throw new Error(`Unknown route middleware: '${_}'.`);
              const M = await Ge(e, A, [x, v]);
              if (!e.payload.serverRendered && e.isHydrating && (M === !1 || M instanceof Error)) {
                const $ = M || ls({ statusCode: 404, statusMessage: `Page Not Found: ${i}` });
                return await Ge(e, Mt, [$]), !1;
              }
              if (M || M === !1) return M;
            }
          }),
          l.onError(() => {
            delete e._processingMiddleware;
          }),
          l.afterEach(async (x, v, g) => {
            delete e._processingMiddleware,
              !e.isHydrating && p.value && (await Ge(e, Ch)),
              x.matched.length === 0 &&
                (await Ge(e, Mt, [ls({ statusCode: 404, fatal: !1, statusMessage: `Page not found: ${x.fullPath}` })]));
          }),
          e.hooks.hookOnce("app:created", async () => {
            try {
              await l.replace({ ...l.resolve(i), name: void 0, force: !0 });
            } catch (x) {
              await Ge(e, Mt, [x]);
            }
          }),
          { provide: { router: l } }
        );
      },
    },
    1
  ),
  Wn = {
    default: () =>
      ft(
        () => import("./default.2bdbc0b3.js"),
        ["./default.2bdbc0b3.js", "./nuxt-link.04970ece.js"],
        import.meta.url
      ).then((e) => e.default || e),
  },
  $h = Pt({
    name: "nuxt:prefetch",
    setup(e) {
      const t = en();
      e.hooks.hook("app:mounted", () => {
        t.beforeEach(async (n) => {
          var s;
          const r = (s = n == null ? void 0 : n.meta) == null ? void 0 : s.layout;
          r && typeof Wn[r] == "function" && (await Wn[r]());
        });
      }),
        e.hooks.hook("link:prefetch", (n) => {
          var i, l, c, a;
          if (On(n)) return;
          const r = t.resolve(n);
          if (!r) return;
          const s = (i = r == null ? void 0 : r.meta) == null ? void 0 : i.layout;
          let o = Array.isArray((l = r == null ? void 0 : r.meta) == null ? void 0 : l.middleware)
            ? (c = r == null ? void 0 : r.meta) == null
              ? void 0
              : c.middleware
            : [(a = r == null ? void 0 : r.meta) == null ? void 0 : a.middleware];
          o = o.filter((u) => typeof u == "string");
          for (const u of o) typeof _n[u] == "function" && _n[u]();
          s && typeof Wn[s] == "function" && Wn[s]();
        });
    },
  });
function Lh(e = {}) {
  const t = e.path || window.location.pathname;
  let n = {};
  try {
    n = JSON.parse(sessionStorage.getItem("nuxt:reload") || "{}");
  } catch {}
  if (e.force || (n == null ? void 0 : n.path) !== t || (n == null ? void 0 : n.expires) < Date.now()) {
    try {
      sessionStorage.setItem("nuxt:reload", JSON.stringify({ path: t, expires: Date.now() + (e.ttl ?? 1e4) }));
    } catch {}
    if (e.persistState)
      try {
        sessionStorage.setItem("nuxt:reload:state", JSON.stringify({ state: _e().payload.state }));
      } catch {}
    window.location.pathname !== t ? (window.location.href = t) : window.location.reload();
  }
}
const Nh = Pt({
  name: "nuxt:chunk-reload",
  setup(e) {
    const t = en(),
      n = $s(),
      r = new Set();
    t.beforeEach(() => {
      r.clear();
    }),
      e.hook("app:chunkError", ({ error: s }) => {
        r.add(s);
      }),
      t.onError((s, o) => {
        if (r.has(s)) {
          const l = "href" in o && o.href.startsWith("#") ? n.app.baseURL + o.href : Sn(n.app.baseURL, o.fullPath);
          Lh({ path: l, persistState: !0 });
        }
      });
  },
});
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
const Fh = -1,
  jh = -2,
  Bh = -3,
  Uh = -4,
  Dh = -5,
  Kh = -6;
function Wh(e, t) {
  return qh(JSON.parse(e), t);
}
function qh(e, t) {
  if (typeof e == "number") return s(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input");
  const n = e,
    r = Array(n.length);
  function s(o, i = !1) {
    if (o === Fh) return;
    if (o === Bh) return NaN;
    if (o === Uh) return 1 / 0;
    if (o === Dh) return -1 / 0;
    if (o === Kh) return -0;
    if (i) throw new Error("Invalid input");
    if (o in r) return r[o];
    const l = n[o];
    if (!l || typeof l != "object") r[o] = l;
    else if (Array.isArray(l))
      if (typeof l[0] == "string") {
        const c = l[0],
          a = t == null ? void 0 : t[c];
        if (a) return (r[o] = a(s(l[1])));
        switch (c) {
          case "Date":
            r[o] = new Date(l[1]);
            break;
          case "Set":
            const u = new Set();
            r[o] = u;
            for (let b = 1; b < l.length; b += 1) u.add(s(l[b]));
            break;
          case "Map":
            const f = new Map();
            r[o] = f;
            for (let b = 1; b < l.length; b += 2) f.set(s(l[b]), s(l[b + 1]));
            break;
          case "RegExp":
            r[o] = new RegExp(l[1], l[2]);
            break;
          case "Object":
            r[o] = Object(l[1]);
            break;
          case "BigInt":
            r[o] = BigInt(l[1]);
            break;
          case "null":
            const p = Object.create(null);
            r[o] = p;
            for (let b = 1; b < l.length; b += 2) p[l[b]] = s(l[b + 1]);
            break;
          default:
            throw new Error(`Unknown type ${c}`);
        }
      } else {
        const c = new Array(l.length);
        r[o] = c;
        for (let a = 0; a < l.length; a += 1) {
          const u = l[a];
          u !== jh && (c[a] = s(u));
        }
      }
    else {
      const c = {};
      r[o] = c;
      for (const a in l) {
        const u = l[a];
        c[a] = s(u);
      }
    }
    return r[o];
  }
  return s(0);
}
function ti(e, t = {}) {
  const n = Vh(e, t),
    r = _e(),
    s = (r._payloadCache = r._payloadCache || {});
  return s[n] || (s[n] = zh(n).then((o) => o || (delete s[n], null))), s[n];
}
const ni = "js";
function Vh(e, t = {}) {
  const n = new URL(e, "http://localhost");
  if (n.search) throw new Error("Payload URL cannot contain search params: " + e);
  if (n.host !== "localhost" || On(n.pathname, { acceptRelative: !0 }))
    throw new Error("Payload URL must not include hostname: " + e);
  const r = t.hash || (t.fresh ? Date.now() : "");
  return Sn($s().app.baseURL, n.pathname, r ? `_payload.${r}.${ni}` : `_payload.${ni}`);
}
async function zh(e) {
  try {
    return fd
      ? Qh(await fetch(e).then((t) => t.text()))
      : await ft(() => import(e), [], import.meta.url).then((t) => t.default || t);
  } catch (t) {
    console.warn("[nuxt] Cannot load payload ", e, t);
  }
  return null;
}
function Jh() {
  return !!_e().payload.prerenderedAt;
}
function Qh(e) {
  return Wh(e, _e()._payloadRevivers);
}
const Yh = Pt({
    name: "nuxt:payload",
    setup(e) {
      Jh() &&
        (e.hooks.hook("link:prefetch", async (t) => {
          hr(t).protocol || (await ti(t));
        }),
        en().beforeResolve(async (t, n) => {
          if (t.path === n.path) return;
          const r = await ti(t.path);
          r && Object.assign(e.static.data, r.data);
        }));
    },
  }),
  Xh = [Pf, dd, Mh, $h, Nh, Yh],
  Zh = (e, t) =>
    t.path
      .replace(/(:\w+)\([^)]+\)/g, "$1")
      .replace(/(:\w+)[?+*]/g, "$1")
      .replace(/:\w+/g, (n) => {
        var r;
        return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || "";
      }),
  Gh = (e, t) => {
    const n = e.route.matched.find((s) => {
        var o;
        return ((o = s.components) == null ? void 0 : o.default) === e.Component.type;
      }),
      r = t ?? (n == null ? void 0 : n.meta.key) ?? (n && Zh(e.route, n));
    return typeof r == "function" ? r(e.route) : r;
  },
  ep = (e, t) => ({ default: () => (e ? Ve(ca, e === !0 ? {} : e, t) : t) }),
  tp = Gt({
    name: "FragmentWrapper",
    setup(e, { slots: t }) {
      return () => {
        var n;
        return (n = t.default) == null ? void 0 : n.call(t);
      };
    },
  }),
  np = (e, t, n) => ({ default: () => (t ? Ve(e, t === !0 ? {} : t, n) : Ve(tp, {}, n)) }),
  rp = Gt({
    name: "NuxtPage",
    inheritAttrs: !1,
    props: {
      name: { type: String },
      transition: { type: [Boolean, Object], default: void 0 },
      keepalive: { type: [Boolean, Object], default: void 0 },
      route: { type: Object },
      pageKey: { type: [Function, String], default: null },
    },
    setup(e, { attrs: t }) {
      const n = _e();
      return () =>
        Ve(
          Ul,
          { name: e.name, route: e.route, ...t },
          {
            default: (r) => {
              if (!r.Component) return;
              const s = Gh(r, e.pageKey),
                o = n.deferHydration(),
                i = !!(e.transition ?? r.route.meta.pageTransition ?? ts),
                l =
                  i &&
                  op(
                    [
                      e.transition,
                      r.route.meta.pageTransition,
                      ts,
                      {
                        onAfterLeave: () => {
                          n.callHook("page:transition:finish", r.Component);
                        },
                      },
                    ].filter(Boolean)
                  );
              return np(
                Ms,
                i && l,
                ep(
                  e.keepalive ?? r.route.meta.keepalive ?? ad,
                  Ve(
                    Ni,
                    {
                      onPending: () => n.callHook("page:start", r.Component),
                      onResolve: () => {
                        Zt(() => n.callHook("page:finish", r.Component).finally(o));
                      },
                    },
                    { default: () => Ve(ip, { key: s, routeProps: r, pageKey: s, hasTransition: i }) }
                  )
                )
              ).default();
            },
          }
        );
    },
  });
function sp(e) {
  return Array.isArray(e) ? e : e ? [e] : [];
}
function op(e) {
  const t = e.map((n) => ({ ...n, onAfterLeave: sp(n.onAfterLeave) }));
  return mh(...t);
}
const ip = Gt({
  name: "RouteProvider",
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(e) {
    const t = e.pageKey,
      n = e.routeProps.route,
      r = {};
    for (const s in e.routeProps.route) r[s] = Re(() => (t === e.pageKey ? e.routeProps.route[s] : n[s]));
    return Dt("_route", Je(r)), () => Ve(e.routeProps.Component);
  },
});
const lp = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t) n[r] = s;
    return n;
  },
  cp = {};
function ap(e, t) {
  const n = rp;
  return Et(), St(n);
}
const up = lp(cp, [["render", ap]]),
  ri = {
    __name: "nuxt-root",
    setup(e) {
      const t = ia(() =>
          ft(
            () => import("./error-component.87266f02.js"),
            ["./error-component.87266f02.js", "./nuxt-link.04970ece.js", "./error-component.7dd250ba.css"],
            import.meta.url
          ).then((c) => c.default || c)
        ),
        n = () => null,
        r = _e(),
        s = r.deferHydration(),
        o = !1;
      Dt("_route", vh()), r.hooks.callHookWith((c) => c.map((a) => a()), "vue:setup");
      const i = gr();
      zi((c, a, u) => {
        if (
          (r.hooks.callHook("vue:error", c, a, u).catch((f) => console.error("[nuxt] Error in `vue:error` hook", f)),
          Rh(c) && (c.fatal || c.unhandled))
        )
          return Ge(r, Mt, [c]), !1;
      });
      const { islandContext: l } = !1;
      return (c, a) => (
        Et(),
        St(
          Ni,
          { onResolve: me(s) },
          {
            default: $i(() => [
              me(i)
                ? (Et(), St(me(t), { key: 0, error: me(i) }, null, 8, ["error"]))
                : me(l)
                ? (Et(), St(me(n), { key: 1, context: me(l) }, null, 8, ["context"]))
                : me(o)
                ? (Et(), St(ya(me(o)), { key: 2 }))
                : (Et(), St(me(up), { key: 3 })),
            ]),
            _: 1,
          },
          8,
          ["onResolve"]
        )
      );
    },
  };
globalThis.$fetch || (globalThis.$fetch = lf.create({ baseURL: af() }));
let si;
const fp = Tf(Xh);
(si = async function () {
  var s, o;
  const n = !!(
      ((s = window.__NUXT__) != null && s.serverRendered) ||
      ((o = document.getElementById("__NUXT_DATA__")) == null ? void 0 : o.dataset.ssr) === "true"
    )
      ? vu(ri)
      : bu(ri),
    r = wf({ vueApp: n });
  try {
    await Rf(r, fp);
  } catch (i) {
    await r.callHook("app:error", i), (r.payload.error = r.payload.error || i);
  }
  try {
    await r.hooks.callHook("app:created", n),
      await r.hooks.callHook("app:beforeMount", n),
      n.mount("#" + ud),
      await r.hooks.callHook("app:mounted", n),
      await Zt();
  } catch (i) {
    await r.callHook("app:error", i), (r.payload.error = r.payload.error || i);
  }
}),
  si().catch((e) => {
    console.error("Error while mounting app:", e);
  });
export {
  Re as A,
  Wn as B,
  bp as C,
  np as D,
  Ve as E,
  Oe as F,
  xs as G,
  St as H,
  On as I,
  As as J,
  pp as K,
  hr as L,
  $u as M,
  Du as N,
  _l as O,
  Ep as P,
  Ms as T,
  lp as _,
  cl as a,
  de as b,
  mp as c,
  al as d,
  yp as e,
  da as f,
  Vi as g,
  fn as h,
  me as i,
  Kl as j,
  kn as k,
  gp as l,
  vh as m,
  dp as n,
  Et as o,
  en as p,
  hp as q,
  un as r,
  ge as s,
  Ai as t,
  _e as u,
  _p as v,
  $i as w,
  Gt as x,
  Be as y,
  vp as z,
};
