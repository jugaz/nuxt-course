import{B as r,C as p,g as m,D as y,q as c,u as f,E as l,G as d,H as u,T as L,I as _}from"./entry.5a3c8985.js";const h=r({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(o,t){const e=await l[o.name]().then(a=>a.default||a);return()=>_(e,t.attrs,t.slots)}}),T=r({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(o,t){const e=p("_route"),a=e===m()?y():e,n=c(()=>f(o.name)??a.meta.layout??"default");return()=>{const s=n.value&&n.value in l,i=a.meta.layoutTransition??d;return u(L,s&&i,{default:()=>u(h,s&&{key:n.value,name:n.value,...t.attrs},t.slots).default()}).default()}}});export{T as _};