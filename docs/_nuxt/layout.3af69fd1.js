import { x as r, y as p, m, z as y, A as c, i as f, B as i, C as d, D as u, T as L, E as _ } from "./entry.bb92b787.js";
const h = r({
    name: "LayoutLoader",
    inheritAttrs: !1,
    props: { name: String },
    async setup(o, t) {
      const e = await i[o.name]().then((a) => a.default || a);
      return () => _(e, t.attrs, t.slots);
    },
  }),
  T = r({
    name: "NuxtLayout",
    inheritAttrs: !1,
    props: { name: { type: [String, Boolean, Object], default: null } },
    setup(o, t) {
      const e = p("_route"),
        a = e === m() ? y() : e,
        n = c(() => f(o.name) ?? a.meta.layout ?? "default");
      return () => {
        const s = n.value && n.value in i,
          l = a.meta.layoutTransition ?? d;
        return u(L, s && l, {
          default: () => u(h, s && { key: n.value, name: n.value, ...t.attrs }, t.slots).default(),
        }).default();
      };
    },
  });
export { T as _ };
