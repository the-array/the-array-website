_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"4O7A":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/[slug]",function(){return n("E99q")}])},BsWD:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("a3WO");function r(t,e){if(t){if("string"==typeof t)return Object(a.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(t,e):void 0}}},E99q:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return C}));var a=n("wx14"),r=n("ODXe"),o=n("q1tI"),i=n.n(o),c=n("pTio"),l=n("Ff2n"),d=n("vOnD"),s=n("nT29"),p=i.a.createElement,u=d.d.div.withConfig({displayName:"article-markdowncomponent__MarkdownContainer",componentId:"sc-1mhdma6-0"})((function(t){var e=t.theme;return Object(d.c)(["word-break:break-word;max-width:688px;h1,h2,h3,h4,h5,h6,ul,ol,p,pre code,figure{margin:1.8rem 0;ul,ol{margin:0;}}h1{",";}h2{",";}h3{",";}h4{",";}h5{",";}h6{",";}p{",";}h1:first-child{margin-top:0;margin-bottom:0.3em;",";}h1 + p{margin-top:0;line-height:1.3em;margin-bottom:1.8em;strong{display:block;font-family:",";}}h1:first-child + p + figure{margin-left:-40px;margin-right:-40px;@media only screen and (max-width:848px){margin-left:calc(calc(calc(100vw - 688px) / 2) * -1);margin-right:calc(calc(calc(100vw - 688px) / 2) * -1);}@media only screen and (max-width:768px){margin-left:-40px;margin-right:-40px;}@media only screen and (max-width:560px){margin-left:-30px;margin-right:-30px;}@media only screen and (max-width:320px){margin-left:-20px;margin-right:-20px;}div{img{width:100%;}@media only screen and (max-width:848px){border-radius:0;}}figcaption{padding:0 40px;@media only screen and (max-width:848px){padding:0 calc(calc(100vw - 688px) / 2);}@media only screen and (max-width:768px){padding:0 40px;}@media only screen and (max-width:560px){padding:0 30px;}@media only screen and (max-width:320px){padding:0 20px;}}}figure{div{display:block;position:relative;overflow:hidden;background:#eee;border-radius:5px;-webkit-backface-visibility:hidden;-webkit-transform:translate3d(0,0,0);img{position:absolute;top:0;object-fit:cover;width:100%;height:100%;&.fadeInOnLoad{transition:opacity 0.25s ",";&:not(.hasLoaded){opacity:0;}}}}figcaption{margin-top:10px;",";}}ul,ol{padding:0 20px;}strong{color:",";}a{&:focus,&:hover{color:",";}}blockquote{padding-left:20px;border-left:solid #ccc 3px;p{",";}}code{",";}pre code{",";display:block;padding:20px;}"],e.typography.h1,e.typography.h2,e.typography.h3,e.typography.h4,e.typography.h6,e.typography.h6,e.typography.body,e.typography.h1,e.fonts.sans,s.a,e.typography.caption,e.colors.textPrimary,e.colors.primary,e.typography.quote,e.typography.code,e.typography.code)})),m=function(t){var e=t.children,n=Object(l.a)(t,["children"]),r=Object(o.useRef)(null);return Object(o.useEffect)((function(){var t=r.current.querySelectorAll("img.fadeInOnLoad");return t.forEach((function(t){if(t.complete)return setTimeout((function(){t.classList.add("hasLoaded")}),10);t.onload=function(){t.classList.add("hasLoaded")}})),function(){t.forEach((function(t){t.onload=null}))}}),[]),p(u,Object(a.a)({ref:r},n,{dangerouslySetInnerHTML:{__html:e}}))},h=n("YFqc"),f=n.n(h),g=n("KEE8"),y=n("nkNA"),b=n("FUxi"),x=i.a.createElement,w=d.d.div.withConfig({displayName:"article-metadatacomponent__StyledContainer",componentId:"sc-1ie2bs3-0"})(["margin-bottom:30px;display:flex;align-items:center;font-size:16px;justify-content:space-between;@media only screen and (max-width:560px){margin-bottom:20px;}& > div{display:flex;align-items:center;margin-right:20px;}"]),v=d.d.a.withConfig({displayName:"article-metadatacomponent__AuthorThumbnail",componentId:"sc-1ie2bs3-1"})(["margin-right:15px;img{width:40px;height:40px;border-radius:40px;display:block;}"]),O=Object(d.d)(y.a).withConfig({displayName:"article-metadatacomponent__AuthorName",componentId:"sc-1ie2bs3-2"})(["a{text-decoration:none;&:hover{text-decoration:underline;}}"]),_=Object(d.d)(b.a).withConfig({displayName:"article-metadatacomponent__Metadata",componentId:"sc-1ie2bs3-3"})((function(t){var e=t.theme;return Object(d.c)(["font-weight:normal;color:",";"],e.colors.textTertiary)})),j=d.d.a.withConfig({displayName:"article-metadatacomponent__CategoryLabel",componentId:"sc-1ie2bs3-4"})((function(t){var e=t.theme;return Object(d.c)(["display:block;padding:3px 5px;text-decoration:none;border-radius:2px;",";color:",";border:solid "," 1px;white-space:nowrap;&:focus,&:hover{background:",";border-color:",";color:#fff;}"],e.typography.h6,e.colors.textTertiary,e.colors.textTertiary,e.colors.primary,e.colors.primary)})),k=function(t){var e=t.publishedAt,n=t.category,a=t.author,r=t.readingTime;return x(w,null,x("div",null,x(f.a,{href:"/author/[slug]",as:a.url,passHref:!0},x(v,{rel:"author"},x(g.a,{alt:"A photo of ".concat(a.name),src:a.thumbnailUrl}))),x("div",null,x(O,{component:"h3",variant:"h5"},x(f.a,{href:"/author/[slug]",as:a.url,passHref:!0},x(v,{rel:"author"},a.name))),x(_,{component:"p",variant:"h5"},e," • ",r))),x(f.a,{href:"/category/[slug]",as:n.url,passHref:!0},x(j,null,n.name)))},I=n("Eg1W"),N=n("1wtQ"),E=n("iNpI"),A=n("km4c"),S=i.a.createElement,T=d.d.article.withConfig({displayName:"page-articlecomponent__ArticleContainer",componentId:"sc-1piujbm-0"})(["max-width:688px;margin:0 auto;"]),C=!0;e.default=function(t){var e=t.article,n=e.title,o=e.lede,l=e.images,d=e.publishedAt,s=e.category,p=e.author,u=e.htmlContent,h=e.readingTime,g=e.absoluteUrl,b=e.keywords,x=t.nextArticles,w=Object(r.a)(l,1)[0];return S(i.a.Fragment,null,S(I.a,{title:"".concat(n," – ").concat(N.f),description:o,author:p.name,image:w.sizes.large.absoluteUrl,imageAlt:w.alt,url:g,contentType:"article",ogType:"article",keywords:b}),S(c.a,null,S(T,null,S(k,{publishedAt:d,category:s,author:p,readingTime:h}),S(m,null,u)),!!x.length&&S(i.a.Fragment,null,S(y.a,{component:"h3",variant:"h2",gutterBottom:!0},"More news about"," ",S(f.a,{href:"/category/[slug]",as:s.url},S("a",null,s.name))),S(A.a,null,x.map((function(t,e){return S(E.a,Object(a.a)({},t,{key:e}))}))))))}},KEE8:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var a=n("wx14"),r=n("Ff2n"),o=n("q1tI"),i=n.n(o),c=n("vOnD"),l=n("nT29"),d=i.a.createElement,s=c.d.img.withConfig({displayName:"imagecomponent__StyledImage",componentId:"sc-1l6zfdu-0"})((function(t){var e=t.hasLoaded;return Object(c.c)(["background:#eee;width:auto;height:auto;transition:opacity 0.25s ",";",""],l.a,!e&&Object(c.c)(["opacity:0;"]))})),p=function(t){var e=t.alt,n=t.src,i=t.srcSet,c=t.className,l=Object(r.a)(t,["alt","src","srcSet","className"]),p=Object(o.useRef)(null),u=Object(o.useState)(!1),m=u[0],h=u[1],f=null==i?void 0:i.map((function(t){var e=t.src,n=t.width;return"".concat(e," ").concat(n,"w")})).join(", ");return Object(o.useEffect)((function(){p.current.complete&&setTimeout((function(){return h(!0)}),10)}),[]),d(s,Object(a.a)({ref:p,src:n,loading:"lazy",alt:e},l,{onLoad:function(){return h(!0)},hasLoaded:m,srcSet:f,className:"".concat(c," fadeInOnLoad")}))}},ODXe:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("BsWD");function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);a=!0);}catch(t){r=!0,o=t}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}}(t,e)||Object(a.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},a3WO:function(t,e,n){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}n.d(e,"a",(function(){return a}))},iNpI:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var a=n("ODXe"),r=n("q1tI"),o=n.n(r),i=n("vOnD"),c=n("YFqc"),l=n.n(c),d=n("KEE8"),s=n("nkNA"),p=n("FUxi"),u=o.a.createElement,m=i.d.a.withConfig({displayName:"article-cardcomponent__StyledArticleCard",componentId:"sc-17xb5kw-0"})(["text-decoration:none;"]),h=Object(i.d)(d.a).withConfig({displayName:"article-cardcomponent__Thumbnail",componentId:"sc-17xb5kw-1"})(["border-radius:5px;width:100%;margin-top:5px;display:block;"]),f=Object(i.d)(p.a).withConfig({displayName:"article-cardcomponent__Description",componentId:"sc-17xb5kw-2"})((function(t){var e=t.theme;return Object(i.c)(["border-radius:5px;font-family:",";color:",";font-weight:normal;"],e.fonts.serif,e.colors.textSecondary)})),g=function(t){var e=t.title,n=t.lede,r=t.url,o=t.images,i=Object(a.a)(o,1)[0];return u("article",null,u(l.a,{href:"/article/[slug]",as:r,passHref:!0},u(m,null,u(s.a,{component:"h2",variant:"h3",gutterBottom:!0},e),u(f,{component:"p",gutterBottom:!0,variant:"h4"},n),u(h,{alt:i.alt,src:i.sizes.small.url,srcSet:[{src:i.sizes.small.url,width:i.sizes.small.width},{src:i.sizes.medium.url,width:i.sizes.medium.width},{src:i.sizes.small.url,width:i.sizes.large.width}]}))))}},km4c:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n("q1tI"),r=n.n(a),o=n("vOnD"),i=r.a.createElement,c=o.d.div.withConfig({displayName:"article-listcomponent__StyledArticleList",componentId:"v5r0j6-0"})(["display:grid;grid-column-gap:30px;grid-row-gap:30px;grid-template-columns:1fr 1fr 1fr;@media only screen and (max-width:768px){grid-template-columns:1fr 1fr;}@media only screen and (max-width:550px){grid-template-columns:1fr;}"]),l=function(t){var e=t.children;return i(c,null,e)}},nT29:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a="cubic-bezier(0.77, 0, 0.175, 1)"}},[["4O7A",0,1,2,3,4]]]);