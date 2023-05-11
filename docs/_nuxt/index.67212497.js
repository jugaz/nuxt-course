import { _ as s } from "./layout.3af69fd1.js";
import { m as o, c as n, b as r, a as t, n as c, i, o as l } from "./entry.bb92b787.js";
const d = {
    class:
      "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden",
  },
  _ = t("div", { class: "fixed left-0 right-0 bg-gradient z-10" }, null, -1),
  m = { class: "max-w-520px text-center z-20" },
  u = { class: "text-8xl sm:text-10xl font-medium mb-8" },
  k = {
    __name: "index",
    setup(x) {
      const e = o().params.slug;
      return (f, h) => {
        const a = s;
        return (
          l(),
          n("div", null, [
            r(a, { name: "default", "title-default": "Parametros" }),
            t("div", d, [_, t("div", m, [t("h1", u, " Parametros " + c(i(e)), 1)])]),
          ])
        );
      };
    },
  };
export { k as default };
