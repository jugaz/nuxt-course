import { _ as D } from "./layout.3af69fd1.js";
import {
  u as b,
  r as _,
  t as w,
  f as k,
  g as v,
  h as P,
  i as B,
  j as C,
  k as O,
  l as z,
  c as E,
  b as M,
  a as f,
  o as N,
} from "./entry.bb92b787.js";
const R = () => null;
function j(...o) {
  var h;
  const c = typeof o[o.length - 1] == "string" ? o.pop() : void 0;
  typeof o[0] != "string" && o.unshift(c);
  let [a, l, t = {}] = o;
  if (typeof a != "string") throw new TypeError("[nuxt] [asyncData] key must be a string.");
  if (typeof l != "function") throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  (t.server = t.server ?? !0), (t.default = t.default ?? R), (t.lazy = t.lazy ?? !1), (t.immediate = t.immediate ?? !0);
  const e = b(),
    d = () => (e.isHydrating ? e.payload.data[a] : e.static.data[a]),
    m = () => d() !== void 0;
  e._asyncData[a] ||
    (e._asyncData[a] = {
      data: _(d() ?? ((h = t.default) == null ? void 0 : h.call(t)) ?? null),
      pending: _(!m()),
      error: w(e.payload._errors, a),
    });
  const n = { ...e._asyncData[a] };
  n.refresh = n.execute = (s = {}) => {
    if (e._asyncDataPromises[a]) {
      if (s.dedupe === !1) return e._asyncDataPromises[a];
      e._asyncDataPromises[a].cancelled = !0;
    }
    if (s._initial && m()) return d();
    n.pending.value = !0;
    const u = new Promise((r, i) => {
      try {
        r(l(e));
      } catch (g) {
        i(g);
      }
    })
      .then((r) => {
        if (u.cancelled) return e._asyncDataPromises[a];
        let i = r;
        t.transform && (i = t.transform(r)), t.pick && (i = A(i, t.pick)), (n.data.value = i), (n.error.value = null);
      })
      .catch((r) => {
        var i;
        if (u.cancelled) return e._asyncDataPromises[a];
        (n.error.value = r), (n.data.value = B(((i = t.default) == null ? void 0 : i.call(t)) ?? null));
      })
      .finally(() => {
        u.cancelled ||
          ((n.pending.value = !1),
          (e.payload.data[a] = n.data.value),
          n.error.value && (e.payload._errors[a] = C(n.error.value)),
          delete e._asyncDataPromises[a]);
      });
    return (e._asyncDataPromises[a] = u), e._asyncDataPromises[a];
  };
  const p = () => n.refresh({ _initial: !0 }),
    x = t.server !== !1 && e.payload.serverRendered;
  {
    const s = O();
    if (s && !s._nuxtOnBeforeMountCbs) {
      s._nuxtOnBeforeMountCbs = [];
      const r = s._nuxtOnBeforeMountCbs;
      s &&
        (k(() => {
          r.forEach((i) => {
            i();
          }),
            r.splice(0, r.length);
        }),
        v(() => r.splice(0, r.length)));
    }
    x && e.isHydrating && m()
      ? (n.pending.value = !1)
      : s && ((e.payload.serverRendered && e.isHydrating) || t.lazy) && t.immediate
      ? s._nuxtOnBeforeMountCbs.push(p)
      : t.immediate && p(),
      t.watch && P(t.watch, () => n.refresh());
    const u = e.hook("app:data:refresh", (r) => {
      if (!r || r.includes(a)) return n.refresh();
    });
    s && v(u);
  }
  const y = Promise.resolve(e._asyncDataPromises[a]).then(() => n);
  return Object.assign(y, n), y;
}
function A(o, c) {
  const a = {};
  for (const l of c) a[l] = o[l];
  return a;
}
const H = f(
    "div",
    {
      class:
        "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden",
    },
    [
      f("div", { class: "fixed left-0 right-0 bg-gradient z-10" }),
      f("div", { class: "max-w-520px text-center z-20" }, [
        f("h1", { class: "text-8xl sm:text-10xl font-medium mb-8" }, "api-movies"),
      ]),
    ],
    -1
  ),
  $ = {
    __name: "index",
    async setup(o) {
      let c, a;
      return (
        ([c, a] = z(() =>
          j(
            () => $fetch("https://api.themoviedb.org/3/movie/popular?api_key=79c34c1d1e174024b60e79aaa6157408&page=1"),
            "$qPRO0X19gh"
          )
        )),
        (c = await c),
        a(),
        (l, t) => {
          const e = D;
          return N(), E("div", null, [M(e, { name: "default", "title-default": "api-movies" }), H]);
        }
      );
    },
  };
export { $ as default };
