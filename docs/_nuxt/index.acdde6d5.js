import { _ as n } from "./layout.3af69fd1.js";
import { m as o, c, b as l, i as e, a as s, n as r, o as i } from "./entry.bb92b787.js";
const d = {
    class:
      "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden",
  },
  u = s("div", { class: "fixed left-0 right-0 bg-gradient z-10" }, null, -1),
  _ = { class: "max-w-520px text-center z-20" },
  h = { class: "text-8xl sm:text-10xl font-medium mb-8" },
  y = {
    __name: "index",
    setup(m) {
      const t = o();
      return (x, f) => {
        const a = n;
        return (
          i(),
          c("div", null, [
            l(
              a,
              {
                name: "default",
                "title-default":
                  Object.keys(e(t).query).length > 0 ? "Query" : e(t).hash !== "" ? "Hash" : "El contacto",
              },
              null,
              8,
              ["title-default"]
            ),
            s("div", d, [
              u,
              s("div", _, [
                s(
                  "p",
                  h,
                  r(
                    Object.keys(e(t).query).length > 0
                      ? `Query ${JSON.stringify(e(t).query)}`
                      : e(t).hash !== ""
                      ? `Hash ${e(t).hash}`
                      : "El contacto"
                  ),
                  1
                ),
              ]),
            ]),
          ])
        );
      };
    },
  };
export { y as default };
