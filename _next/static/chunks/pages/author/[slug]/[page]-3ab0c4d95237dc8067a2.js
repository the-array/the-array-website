_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{BsWD:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("a3WO");function a(t,e){if(t){if("string"==typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},KEE8:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n("wx14"),a=n("Ff2n"),i=n("q1tI"),o=n.n(i),c=n("vOnD"),l=n("nT29"),u=o.a.createElement,s=c.d.figure.withConfig({displayName:"imagecomponent__ImageContainer",componentId:"sc-1l6zfdu-0"})((function(t){var e=t.imageRatio,n=t.width,r=t.height,a=t.dominantColor;return Object(c.c)(["background:",";display:inline-block;position:relative;width:","px;height:",'px;overflow:hidden;-webkit-backface-visibility:hidden;-webkit-transform:translate3d(0,0,0);&:before{content:"";display:block;padding-top:',"%;}"],a||"#eee",n,r,e)})),d=c.d.img.withConfig({displayName:"imagecomponent__StyledImage",componentId:"sc-1l6zfdu-1"})((function(t){var e=t.hasLoaded;return Object(c.c)(["position:absolute;top:0;object-fit:cover;width:100%;height:100%;transition:opacity 0.25s ",";",""],l.a,!e&&Object(c.c)(["opacity:0;"]))})),m=function(t){var e=t.alt,n=t.src,o=t.width,c=t.height,l=t.dominantColor,m=t.srcSet,f=t.className,p=Object(a.a)(t,["alt","src","width","height","dominantColor","srcSet","className"]),h=Object(i.useRef)(null),g=Object(i.useState)(!1),w=g[0],b=g[1],v=null==m?void 0:m.map((function(t){var e=t.src,n=t.width;return"".concat(e," ").concat(n,"w")})).join(", "),y=c/o*100,O=l?(.5,l.replace("rgb","rgba").replace(")",", ".concat(.5,")"))):void 0;return Object(i.useEffect)((function(){h.current.complete&&setTimeout((function(){return b(!0)}),1)}),[]),u(s,{className:f,imageRatio:y,width:o,height:c,dominantColor:O},u(d,Object(r.a)({},p,{ref:h,src:n,loading:"lazy",alt:e,onLoad:function(){return b(!0)},hasLoaded:w,srcSet:v,className:"fadeInOnLoad"})))}},ODXe:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("BsWD");function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){a=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},Ocwo:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return a}));var r=n("zKTv"),a=!0;e.default=r.a},a3WO:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},iNpI:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var r=n("ODXe"),a=n("q1tI"),i=n.n(a),o=n("vOnD"),c=n("YFqc"),l=n.n(c),u=n("KEE8"),s=n("nkNA"),d=n("FUxi"),m=i.a.createElement,f=o.d.a.withConfig({displayName:"article-cardcomponent__StyledArticleCard",componentId:"sc-17xb5kw-0"})(["text-decoration:none;"]),p=Object(o.d)(u.a).withConfig({displayName:"article-cardcomponent__Thumbnail",componentId:"sc-17xb5kw-1"})(["border-radius:5px;width:100%;height:auto;margin-top:5px;display:block;"]),h=Object(o.d)(d.a).withConfig({displayName:"article-cardcomponent__Description",componentId:"sc-17xb5kw-2"})((function(t){var e=t.theme;return Object(o.c)(["border-radius:5px;font-family:",";color:",";font-weight:normal;"],e.fonts.serif,e.colors.textSecondary)})),g=function(t){var e=t.title,n=t.lede,a=t.url,i=t.images,o=Object(r.a)(i,1)[0];return m("article",null,m(l.a,{href:"/article/[slug]",as:a,passHref:!0},m(f,null,m(s.a,{component:"h2",variant:"h3",gutterBottom:!0},e),m(h,{component:"p",gutterBottom:!0,variant:"h4"},n),m(p,{alt:o.alt,src:o.sizes.small.url,srcSet:[{src:o.sizes.small.url,width:o.sizes.small.width},{src:o.sizes.medium.url,width:o.sizes.medium.width},{src:o.sizes.small.url,width:o.sizes.large.width}],dominantColor:o.dominantColor,width:100,height:100}))))}},km4c:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("q1tI"),a=n.n(r),i=n("vOnD"),o=a.a.createElement,c=i.d.div.withConfig({displayName:"article-listcomponent__StyledArticleList",componentId:"v5r0j6-0"})(["display:grid;grid-column-gap:30px;grid-row-gap:30px;grid-template-columns:1fr 1fr 1fr;@media only screen and (max-width:768px){grid-template-columns:1fr 1fr;}@media only screen and (max-width:550px){grid-template-columns:1fr;}"]),l=function(t){var e=t.children;return o(c,null,e)}},nT29:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r="cubic-bezier(0.77, 0, 0.175, 1)"},xjeJ:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/author/[slug]/[page]",function(){return n("Ocwo")}])},zKTv:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var r=n("wx14"),a=n("q1tI"),i=n.n(a),o=n("YFqc"),c=n.n(o),l=n("pTio"),u=n("nkNA"),s=n("KEE8"),d=n("iNpI"),m=n("km4c"),f=n("Eg1W"),p=n("1wtQ"),h=i.a.createElement,g=function(t){var e=t.articles,n=t.author,a=t.previousPageIndex,o=t.nextPageIndex;return h(i.a.Fragment,null,h(f.a,{title:"".concat(n.name," – ").concat(p.f),contentType:"contributor"}),h(l.a,null,h(u.a,{component:"h1"},h(s.a,{alt:n.image.alt,src:n.image.sizes.small.url,dominantColor:n.image.dominantColor,width:100,height:100}),n.name),h(m.a,null,e.map((function(t,e){return h(d.a,Object(r.a)({},t,{key:e}))}))),null!==a&&h(c.a,{href:"/author/[slug]/[page]",as:"".concat(n.url,"/").concat(a)},h("a",{rel:"prev"},"Previous page")),null!==o&&h(c.a,{href:"/author/[slug]/[page]",as:"".concat(n.url,"/").concat(o)},h("a",{rel:"next"},"Next page"))))}}},[["xjeJ",0,1,2,3,4]]]);