import{_ as d}from"./layout.253d42fe.js";import{A as s,i as m,c as b,b as g,a as t,t as u,u as n,o as f}from"./entry.5a3c8985.js";const x=s("counter1",{state:()=>({count1:0}),actions:{increment1(){this.count1++,console.log(this.count1+1)},decrementar1:e=>e.count1--,reiniciar1:e=>e.count1=0},getters:{countInicial1:e=>e.count1}}),p=s("counter2",()=>{const e=m(0);return{count2:e,increment2:()=>{console.log({"count2.value":e.value,"count2.value++":e.value++})},decrementar2:()=>e.value--,reiniciar2:()=>e.value=0}}),_={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},v=t("div",{class:"fixed left-0 right-0 bg-gradient z-10"},null,-1),k=t("div",{class:"max-w-520px text-center z-20"},[t("p",{class:"text-8xl sm:text-10xl font-medium mb-8"},"Pinia")],-1),C={__name:"index",setup(e){const o=x(),r=p();return console.log({counter1:o,counter2:r}),(l,c)=>{const a=d;return f(),b("div",null,[g(a,{name:"default","title-default":"Pinia"}),t("div",_,[v,k,t("p",null,"counter1: "+u(n(o).count1),1),t("pre",null,u(n(o).$state),1),t("button",{onClick:c[0]||(c[0]=(...i)=>n(o).increment1&&n(o).increment1(...i)),class:"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}," Count1 Incrementar "),t("p",null,"counter2: "+u(n(r).count2),1),t("pre",null,u(n(r).$state),1),t("button",{onClick:c[1]||(c[1]=(...i)=>n(r).increment2&&n(r).increment2(...i)),class:"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}," Count1 Increment2 ")])])}}};export{C as default};
