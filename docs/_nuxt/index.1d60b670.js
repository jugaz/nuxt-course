import{_ as m}from"./layout.253d42fe.js";import{g as l,f as p,c as u,b as g,a as t,u as a,t as o,F as h,o as f}from"./entry.5a3c8985.js";import{u as y}from"./fetch.1e360383.js";const b={class:"flex items-start justify-center py-4 md:py-8 flex-wrap"},x={class:"max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-4 mb-5"},v=["src"],w={class:"p-5"},k={class:"mb-3 font-normal text-gray-700 dark:text-gray-400"},B={class:"mb-3 font-normal text-gray-700 dark:text-gray-400"},V={__name:"index",async setup(F){let e,s;const r=l(),{data:n}=([e,s]=p(()=>y(`https://api.themoviedb.org/3/movie/${r.params.id}?api_key=79c34c1d1e174024b60e79aaa6157408&language=es-ES&page=1&without_genres=27,58`,"$uAs4wU8Gwf")),e=await e,s(),e),{value:{vote_average:c,overview:i,backdrop_path:_}}=n;return(N,A)=>{const d=m;return f(),u(h,null,[g(d,{name:"default","title-default":"api-movies"}),t("div",b,[t("div",x,[t("img",{class:"rounded-t-lg",src:"https://image.tmdb.org/t/p/w500"+a(_),alt:""},null,8,v),t("div",w,[t("h5",k,o(a(i)),1),t("p",B,"Clasificación: "+o(a(c)),1)])])])],64)}}};export{V as default};