_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{RNiq:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return C}));var r=n("nKUr"),i=n("Ji2X"),a=n("tRbT"),o=n("zpWg"),c=n("TyAF"),s=n("8Joa"),u=n("PGlZ"),l=n("iae6"),d=Object(c.a)((function(){var t=Object(s.useStore)().postsStore,e=Object(u.a)({threshold:0}),n=e.ref;return e.inView&&t.loadPosts(),Object(r.jsxs)(i.a,{children:[Object(r.jsx)(a.a,{spacing:3,container:!0,children:t.posts.map((function(t){return t.isLiked?Object(r.jsx)(r.Fragment,{}):Object(r.jsx)(a.a,{item:!0,xs:12,md:3,sm:6,children:Object(r.jsx)(o.a,{post:t})},t.url)}))}),Object(r.jsx)("div",{ref:n,style:{display:"flex",justifyContent:"center",paddingTop:"15px"},children:t.load?Object(r.jsx)(l.a,{}):""})]})})),p=n("rePB"),m=n("q1tI"),b=n.n(m),h=n("viY9"),j=n("wx14"),f=n("TrhM");function v(t){return String(parseFloat(t)).length===String(t).length}function g(t){return parseFloat(t)}function O(t){return function(e,n){var r=String(e).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(r===n)return e;var i=g(e);if("px"!==r)if("em"===r)i=g(e)*g(t);else if("rem"===r)return i=g(e)*g(t),e;var a=i;if("px"!==n)if("em"===n)a=i/g(t);else{if("rem"!==n)return e;a=i/g(t)}return parseFloat(a.toFixed(5))+n}}function x(t){var e=t.size,n=t.grid,r=e-e%n,i=r+n;return e-r<i-e?r:i}function w(t){var e=t.lineHeight;return t.pixels/(e*t.htmlFontSize)}function y(t){var e=t.cssProperty,n=t.min,r=t.max,i=t.unit,a=void 0===i?"rem":i,o=t.breakpoints,c=void 0===o?[600,960,1280]:o,s=t.transform,u=void 0===s?null:s,l=Object(p.a)({},e,"".concat(n).concat(a)),d=(r-n)/c[c.length-1];return c.forEach((function(t){var r=n+d*t;null!==u&&(r=u(r)),l["@media (min-width:".concat(t,"px)")]=Object(p.a)({},e,"".concat(Math.round(1e4*r)/1e4).concat(a))})),l}var F=n("R/WZ"),k=(n("17x9"),n("OKji")),P=n("aXM8"),S=n("hfi/");var _=function(t){var e=t.children,n=t.theme,r=Object(P.a)(),i=b.a.useMemo((function(){var t=null===r?n:function(t,e){return"function"===typeof e?e(t):Object(j.a)(Object(j.a)({},t),e)}(r,n);return null!=t&&(t[S.a]=null!==r),t}),[n,r]);return b.a.createElement(k.a.Provider,{value:i},e)},z=n("kKAo"),E=n("ofer"),N=Object(h.a)();N=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.breakpoints,r=void 0===n?["sm","md","lg"]:n,i=e.disableAlign,a=void 0!==i&&i,o=e.factor,c=void 0===o?2:o,s=e.variants,u=void 0===s?["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]:s,l=Object(j.a)({},t);l.typography=Object(j.a)({},l.typography);var d=l.typography,p=O(d.htmlFontSize),m=r.map((function(t){return l.breakpoints.values[t]}));return u.forEach((function(t){var e=d[t],n=parseFloat(p(e.fontSize,"rem"));if(!(n<=1)){var r=n,i=1+(r-1)/c,o=e.lineHeight;if(!v(o)&&!a)throw new Error(Object(f.a)(6));v(o)||(o=parseFloat(p(o,"rem"))/parseFloat(n));var s=null;a||(s=function(t){return x({size:t,grid:w({pixels:4,lineHeight:o,htmlFontSize:d.htmlFontSize})})}),d[t]=Object(j.a)({},e,y({cssProperty:"fontSize",min:i,max:r,unit:"rem",breakpoints:m,transform:s}))}})),l}(N);var R=Object(F.a)((function(t){return{mainFeaturedPost:{position:"relative",backgroundColor:t.palette.grey[800],color:t.palette.common.white,marginBottom:t.spacing(4),backgroundImage:"url(https://ua.news/wp-content/uploads/2020/07/labusinessportal.jpg)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.5)"},mainFeaturedPostContent:Object(p.a)({position:"relative",padding:t.spacing(3)},t.breakpoints.up("md"),{padding:t.spacing(6),paddingRight:0})}}));function T(){var t=R();return Object(r.jsx)(_,{theme:N,children:Object(r.jsxs)(z.a,{className:t.mainFeaturedPost,children:[Object(r.jsx)("div",{className:t.overlay}),Object(r.jsx)(a.a,{container:!0,children:Object(r.jsx)(a.a,{item:!0,md:6,children:Object(r.jsxs)("div",{className:t.mainFeaturedPostContent,children:[Object(r.jsx)(E.a,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0,children:"\u0413\u043b\u0430\u0432\u043d\u044b\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438 \u0432 \u0441\u0444\u0435\u0440\u0435 \u0431\u0438\u0437\u043d\u0435\u0441\u0430 \u0438 \u0444\u0440\u0430\u043d\u0447\u0430\u0439\u0437\u0438\u043d\u0433\u0430"}),Object(r.jsx)(E.a,{variant:"h5",color:"inherit",paragraph:!0,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tenetur mollitia, nobis numquam veniam temporibus dolor alias. Est reprehenderit voluptatum ex animi cupiditate possimus asperiores autem odio, voluptas inventore. Officia!"})]})})})]})})}function C(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(T,{}),Object(r.jsx)(d,{})]})}},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,8,2,3,5,4,6,7,9,13,15]]]);