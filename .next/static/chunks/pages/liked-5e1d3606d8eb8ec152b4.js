_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"1/Un":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=(i=(0,n.useState)((function(){return s(e,t)})),u=2,function(e){if(Array.isArray(e))return e}(i)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(s){o=!0,c=s}finally{try{n||null==a.return||a.return()}finally{if(o)throw c}}return r}}(i,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),o=r[0],c=r[1];var i,u;return[o,function(t,r){c(t),a(e,t,r)}]},t.getCookie=t.setCookie=void 0;var n=r("q1tI");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i="undefined"!==typeof window,a=function(e,t,r){if(i){var n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({days:7,path:"/"},r),a=new Date(Date.now()+864e5*n.days).toUTCString();document.cookie=e+"="+encodeURIComponent(t)+"; expires="+a+"; path="+n.path}};t.setCookie=a;var s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return i&&document.cookie.split("; ").reduce((function(t,r){var n=r.split("=");return n[0]===e?decodeURIComponent(n[1]):t}),"")||t};t.getCookie=s},L8J8:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),o=r.n(n),c=r("KQm4"),i=r("rePB"),a=r("HaE+"),s=r("ODXe"),u=r("nKUr"),p=r("Ji2X"),f=r("tRbT"),l=r("zpWg"),O=r("PGlZ"),b=r("iae6"),j=r("q1tI"),d=r("1/Un"),y=r.n(d),h=r("8Joa"),w=r("TyAF");function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=Object(w.a)((function(){var e=Object(h.useStore)().postsStore,t=Object(O.a)({threshold:0}),r=t.ref,n=t.inView,i=y()("likedPosts"),d=Object(s.a)(i,2),w=d[0],g=(d[1],Object(j.useState)(!1)),m=g[0],P=g[1],x=Object(j.useState)(0),S=x[0],k=x[1];return n&&function(){var t=Object(a.a)(o.a.mark((function t(){var r,n,i,a,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!w){t.next=21;break}if(r=JSON.parse(w),!(10*S<r.length)){t.next=21;break}if(console.log(10*S),console.log(r.length),m){t.next=21;break}return P(!0),n=r.slice(10*S,10*S+10),t.next=10,fetch("/api/news/likedNews",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({newsIdArray:n})});case 10:return i=t.sent,t.next=13,i.json();case 13:a=(a=t.sent).map((function(e){return v(v({},e),{},{isLiked:!0})})),a=Object(c.a)(new Set(a.map(JSON.stringify))).map(JSON.parse),s=a.concat(e.posts),s=Object(c.a)(new Set(s.map(JSON.stringify))).map(JSON.parse),e.posts=s,k((function(e){return e+1})),P(!1);case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),Object(u.jsxs)(p.a,{children:[Object(u.jsx)(f.a,{spacing:3,container:!0,children:e.posts.map((function(e){if(-1!=w.indexOf(e._id))return Object(u.jsx)(f.a,{item:!0,xs:12,md:3,sm:6,children:Object(u.jsx)(l.a,{post:e})},e.url)}))}),Object(u.jsx)("div",{ref:r,style:{display:"flex",justifyContent:"center",paddingTop:"15px"},children:m?Object(u.jsx)(b.a,{}):""})]})}))},hGCJ:function(e,t,r){"use strict";r.r(t);var n=r("nKUr"),o=r("Ji2X"),c=r("ofer"),i=r("L8J8").default;t.default=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(o.a,{children:Object(n.jsx)(c.a,{children:Object(n.jsx)("h1",{children:"\u041f\u043e\u043d\u0440\u0430\u0432\u0438\u0432\u0448\u0438\u0435\u0441\u044f \u043d\u043e\u0432\u043e\u0441\u0442\u0438"})})}),Object(n.jsx)(i,{})]})}},tQdd:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/liked",function(){return r("hGCJ")}])}},[["tQdd",0,1,8,2,3,5,4,6,7,9,13,15]]]);