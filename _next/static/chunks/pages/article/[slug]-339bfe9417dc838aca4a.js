_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"4O7A":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/[slug]",function(){return a("E99q")}])},E99q:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return A}));var n=a("wx14"),o=a("q1tI"),r=a.n(o),i=a("Ff2n"),c=a("vOnD"),l=a("ovZr"),d=r.a.createElement,p=Object(c.d)(l.a).withConfig({displayName:"article-markdowncomponent__StyledArticleMarkdown",componentId:"sc-1mhdma6-0"})((function(e){var t=e.theme;return Object(c.c)(["h1 + p{margin-top:0;line-height:1.3em;margin-bottom:1.8em;strong{display:block;font-family:",";}}h1:first-child + p + figure{margin-left:-40px;margin-right:-40px;@media only screen and (max-width:848px){margin-left:calc(calc(calc(100vw - 688px) / 2) * -1);margin-right:calc(calc(calc(100vw - 688px) / 2) * -1);}@media only screen and (max-width:768px){margin-left:-40px;margin-right:-40px;}@media only screen and (max-width:560px){margin-left:-30px;margin-right:-30px;}@media only screen and (max-width:320px){margin-left:-20px;margin-right:-20px;}figcaption{padding:0 40px;@media only screen and (max-width:848px){padding:0 calc(calc(100vw - 688px) / 2);}@media only screen and (max-width:768px){padding:0 40px;}@media only screen and (max-width:560px){padding:0 30px;}@media only screen and (max-width:320px){padding:0 20px;}}}"],t.fonts.sans)})),m=function(e){var t=e.children,a=Object(i.a)(e,["children"]);return d(p,a,t)},h=a("YFqc"),s=a.n(h),u=a("KEE8"),g=a("nkNA"),f=a("FUxi"),y=r.a.createElement,x=c.d.div.withConfig({displayName:"article-metadatacomponent__StyledContainer",componentId:"sc-1ie2bs3-0"})(["margin-bottom:30px;display:flex;align-items:center;font-size:16px;justify-content:space-between;@media only screen and (max-width:560px){margin-bottom:20px;}& > div{display:flex;align-items:center;margin-right:20px;}"]),b=c.d.a.withConfig({displayName:"article-metadatacomponent__AuthorThumbnailLink",componentId:"sc-1ie2bs3-1"})(["margin-right:15px;"]),w=Object(c.d)(u.a).withConfig({displayName:"article-metadatacomponent__AuthorThumbnail",componentId:"sc-1ie2bs3-2"})(["border-radius:40px;display:block;"]),v=Object(c.d)(g.a).withConfig({displayName:"article-metadatacomponent__AuthorName",componentId:"sc-1ie2bs3-3"})(["a{text-decoration:none;&:hover{text-decoration:underline;}}"]),_=Object(c.d)(f.a).withConfig({displayName:"article-metadatacomponent__Metadata",componentId:"sc-1ie2bs3-4"})((function(e){var t=e.theme;return Object(c.c)(["font-weight:normal;color:",";"],t.colors.textTertiary)})),k=c.d.a.withConfig({displayName:"article-metadatacomponent__CategoryLabel",componentId:"sc-1ie2bs3-5"})((function(e){var t=e.theme;return Object(c.c)(["display:block;padding:3px 5px;text-decoration:none;border-radius:2px;",";color:",";border:solid "," 1px;white-space:nowrap;&:focus,&:hover{background:",";border-color:",";color:#fff;}"],t.typography.h6,t.colors.textTertiary,t.colors.textTertiary,t.colors.primary,t.colors.primary)})),O=function(e){var t=e.publishedAt,a=e.category,n=e.author,o=e.readingTime;return y(x,null,y("div",null,y(s.a,{href:"/author/[slug]",as:n.url,passHref:!0},y(b,{rel:"author"},y(w,{alt:n.image.alt,src:n.image.sizes[100].url,dominantColor:n.image.dominantColor,width:40,height:40}))),y("div",null,y(v,{component:"h3",variant:"h6"},y(s.a,{href:"/author/[slug]",as:n.url},y("a",{rel:"author"},n.name))),y(_,{component:"p",variant:"h6"},t," • ",o))),y(s.a,{href:"/category/[slug]",as:a.url,passHref:!0},y(k,null,a.name)))},N=a("Eg1W"),j=a("1wtQ"),E=a("iNpI"),C=a("km4c"),I=r.a.createElement,T=c.d.article.withConfig({displayName:"page-articlecomponent__ArticleContainer",componentId:"sc-1piujbm-0"})(["max-width:688px;margin:0 auto;"]),A=!0;t.default=function(e){var t=e.article,a=t.title,o=t.lede,i=t.coverImage,c=t.publishedAt,l=t.category,d=t.author,p=t.htmlContent,h=t.readingTime,u=t.absoluteUrl,f=t.keywords,y=e.nextArticles;return I(r.a.Fragment,null,I(N.a,{title:"".concat(a," – ").concat(j.f),description:o,author:d.name,image:i.sizes[1600].absoluteUrl,imageAlt:i.alt,url:u,contentType:"article",ogType:"article",keywords:f}),I(T,null,I(O,{publishedAt:c,category:l,author:d,readingTime:h}),I(m,null,p)),!!y.length&&I("div",null,I(g.a,{component:"h3",variant:"h3",gutterBottom:!0},"More news about"," ",I(s.a,{href:"/category/[slug]",as:l.url},I("a",null,l.name))),I(C.a,null,y.map((function(e,t){return I(E.a,Object(n.a)({},e,{key:t}))})))))}},ovZr:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),i=a.n(r),c=a("vOnD"),l=a("nT29"),d=i.a.createElement,p=c.d.div.withConfig({displayName:"markdowncomponent__MarkdownContainer",componentId:"sc-18u6t9x-0"})((function(e){var t=e.theme;return Object(c.c)(["word-break:break-word;h1,h2,h3,h4,h5,h6,ul,ol,p,pre,figure{margin:1.8rem 0;ul,ol{margin:0;}}&& > *:last-child{margin-bottom:0;}h1{",";}h2{",";}h3{",";}h4{",";}h5{",";}h6{",";}p{",";}h1:first-child{margin-top:0;margin-bottom:0.3em;",";}figure{div{display:block;position:relative;overflow:hidden;background:#eee;-webkit-backface-visibility:hidden;-webkit-transform:translate3d(0,0,0);img{position:absolute;top:0;object-fit:cover;width:100%;height:100%;&.fadeInOnLoad{transition:opacity 0.25s ",";&:not(.hasLoaded){opacity:0;}}}}figcaption{margin-top:10px;",";}}ul,ol{padding:0 20px;}strong{color:",";}a{&:focus,&:hover{color:",";}}blockquote{padding-left:20px;border-left:solid #ccc 3px;p{",";}}code{",";}pre code{",";display:block;padding:20px;}"],t.typography.h1,t.typography.h2,t.typography.h3,t.typography.h4,t.typography.h6,t.typography.h6,t.typography.body,t.typography.h1,l.a,t.typography.caption,t.colors.textPrimary,t.colors.primary,t.typography.quote,t.typography.code,t.typography.code)})),m=function(e){var t=e.children,a=Object(o.a)(e,["children"]),i=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=i.current.querySelectorAll("img.fadeInOnLoad");return e.forEach((function(e){if(e.complete)return setTimeout((function(){return e.classList.add("hasLoaded")}),1);e.onload=function(){e.classList.add("hasLoaded")}})),function(){e.forEach((function(e){e.onload=null}))}}),[]),d(p,Object(n.a)({ref:i},a,{dangerouslySetInnerHTML:{__html:t}}))}}},[["4O7A",0,1,2,3,4]]]);