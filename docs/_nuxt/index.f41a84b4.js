import { _ as d } from "./layout.3af69fd1.js";
import {
  p as i,
  r as c,
  c as u,
  b as m,
  a as e,
  q as p,
  v as x,
  i as f,
  s as b,
  F as _,
  o as g,
} from "./entry.bb92b787.js";
const k = {
    class:
      "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden",
  },
  h = e("div", { class: "fixed left-0 right-0 bg-gradient z-10" }, null, -1),
  v = { class: "max-w-520px text-center z-20" },
  y = e("h1", { class: "text-8xl sm:text-10xl font-medium mb-8" }, "Home", -1),
  w = { class: "w-full flex items-center justify-center mt-4" },
  V = {
    __name: "index",
    setup(B) {
      const a = i(),
        t = c(""),
        n = (o) => {
          console.log("item", o), a.push(`contactos/${o} ${t.value}`);
        };
      return (o, r) => {
        const l = d;
        return (
          g(),
          u(
            _,
            null,
            [
              m(l, { name: "default", "title-default": "Home" }),
              e("div", k, [
                h,
                e("div", v, [
                  y,
                  p(
                    e(
                      "input",
                      {
                        id: "default-input",
                        "onUpdate:modelValue": r[0] || (r[0] = (s) => (b(t) ? (t.value = s) : null)),
                        placeholder: "Escribir parametro",
                        type: "text",
                        class:
                          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                      },
                      null,
                      512
                    ),
                    [[x, f(t)]]
                  ),
                  e("div", w, [
                    e(
                      "button",
                      {
                        class: "btn-demo text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer mr-2",
                        onClick: r[1] || (r[1] = (s) => n(123)),
                      },
                      " Enviar Parametro "
                    ),
                  ]),
                ]),
              ]),
            ],
            64
          )
        );
      };
    },
  };
export { V as default };
