_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"1/Un":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=(s=(0,n.useState)((function(){return a(e,t)})),u=2,function(e){if(Array.isArray(e))return e}(s)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,i=!1,o=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(a){i=!0,o=a}finally{try{n||null==c.return||c.return()}finally{if(i)throw o}}return r}}(s,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),i=r[0],o=r[1];var s,u;return[i,function(t,r){o(t),c(e,t,r)}]},t.getCookie=t.setCookie=void 0;var n=r("q1tI");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s="undefined"!==typeof window,c=function(e,t,r){if(s){var n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({days:7,path:"/"},r),c=new Date(Date.now()+864e5*n.days).toUTCString();document.cookie=e+"="+encodeURIComponent(t)+"; expires="+c+"; path="+n.path}};t.setCookie=c;var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return s&&document.cookie.split("; ").reduce((function(t,r){var n=r.split("=");return n[0]===e?decodeURIComponent(n[1]):t}),"")||t};t.getCookie=a},L8J8:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),i=r.n(n),o=r("KQm4"),s=r("rePB"),c=r("HaE+"),a=r("ODXe"),u=r("nKUr"),p=r("Ji2X"),l=r("tRbT"),f=r("zpWg"),d=r("PGlZ"),h=r("iae6"),b=r("q1tI"),y=r("1/Un"),O=r.n(y),v=r("8Joa"),j=r("TyAF");function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=Object(j.a)((function(){var e=Object(v.useStore)().postsStore,t=Object(d.a)({threshold:0}),r=t.ref,n=t.inView,s=O()("likedPosts"),y=Object(a.a)(s,2),j=y[0],g=(y[1],Object(b.useState)(!1)),m=g[0],k=g[1],S=Object(b.useState)(0),P=S[0],V=S[1];return n&&function(){var t=Object(c.a)(i.a.mark((function t(){var r,n,s,c,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!j){t.next=21;break}if(r=JSON.parse(j),!(10*P<r.length)){t.next=21;break}if(console.log(10*P),console.log(r.length),m){t.next=21;break}return k(!0),n=r.slice(10*P,10*P+10),t.next=10,fetch("/api/news/likedNews",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({newsIdArray:n})});case 10:return s=t.sent,t.next=13,s.json();case 13:c=(c=t.sent).map((function(e){return w(w({},e),{},{isLiked:!0})})),c=Object(o.a)(new Set(c.map(JSON.stringify))).map(JSON.parse),a=c.concat(e.posts),a=Object(o.a)(new Set(a.map(JSON.stringify))).map(JSON.parse),e.posts=a,V((function(e){return e+1})),k(!1);case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),Object(u.jsxs)(p.a,{children:[Object(u.jsx)(l.a,{spacing:3,container:!0,children:e.posts.map((function(e){if(-1!=j.indexOf(e._id))return Object(u.jsx)(l.a,{item:!0,xs:12,md:3,sm:6,children:Object(u.jsx)(f.a,{post:e})},e.url)}))}),Object(u.jsx)("div",{ref:r,style:{display:"flex",justifyContent:"center",paddingTop:"15px"},children:m?Object(u.jsx)(h.a,{}):""})]})}))},PGlZ:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r("q1tI");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var o=new Map,s=new Map,c=0;function a(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(r=e.root)?(s.has(r)||(c+=1,s.set(r,c.toString())),s.get(r)):"0":e[t]);var r})).toString()}function u(e,t,r){if(void 0===r&&(r={}),!e)return function(){};var n=function(e){var t=a(e),r=o.get(t);if(!r){var n,i=new Map,s=new IntersectionObserver((function(t){t.forEach((function(t){var r,o=t.isIntersecting&&n.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(r=i.get(t.target))||r.forEach((function(e){e(o,t)}))}))}),e);n=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:s,elements:i},o.set(t,r)}return r}(r),i=n.id,s=n.observer,c=n.elements,u=c.get(e)||[];return c.has(e)||c.set(e,u),u.push(t),s.observe(e),function(){u.splice(u.indexOf(t),1),0===u.length&&(c.delete(e),s.unobserve(e)),0===c.size&&(s.disconnect(),o.delete(i))}}function p(e){return"function"!==typeof e.children}var l=function(e){var t,r;function o(t){var r;return(r=e.call(this,t)||this).node=null,r._unobserveCb=null,r.handleNode=function(e){r.node&&(r.unobserve(),e||r.props.triggerOnce||r.props.skip||r.setState({inView:!!r.props.initialInView,entry:void 0})),r.node=e||null,r.observeNode()},r.handleChange=function(e,t){e&&r.props.triggerOnce&&r.unobserve(),p(r.props)||r.setState({inView:e,entry:t}),r.props.onChange&&r.props.onChange(e,t)},r.state={inView:!!t.initialInView,entry:void 0},r}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var s=o.prototype;return s.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},s.componentWillUnmount=function(){this.unobserve(),this.node=null},s.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,r=e.root,n=e.rootMargin,i=e.trackVisibility,o=e.delay;this._unobserveCb=u(this.node,this.handleChange,{threshold:t,root:r,rootMargin:n,trackVisibility:i,delay:o})}},s.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},s.render=function(){if(!p(this.props)){var e=this.state,t=e.inView,r=e.entry;return this.props.children({inView:t,entry:r,ref:this.handleNode})}var o=this.props,s=o.children,c=o.as,a=o.tag,u=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(o,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(n.createElement)(c||a||"div",i({ref:this.handleNode},u),s)},o}(n.Component);function f(e){var t=void 0===e?{}:e,r=t.threshold,i=t.delay,o=t.trackVisibility,s=t.rootMargin,c=t.root,a=t.triggerOnce,p=t.skip,l=t.initialInView,f=Object(n.useRef)(),d=Object(n.useState)({inView:!!l}),h=d[0],b=d[1],y=Object(n.useCallback)((function(e){void 0!==f.current&&(f.current(),f.current=void 0),p||e&&(f.current=u(e,(function(e,t){b({inView:e,entry:t}),t.isIntersecting&&a&&f.current&&(f.current(),f.current=void 0)}),{root:c,rootMargin:s,threshold:r,trackVisibility:o,delay:i}))}),[Array.isArray(r)?r.toString():r,c,s,a,p,o,i]);Object(n.useEffect)((function(){f.current||!h.entry||a||p||b({inView:!!l})}));var O=[y,h.inView,h.entry];return O.ref=O[0],O.inView=O[1],O.entry=O[2],O}l.displayName="InView",l.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},hGCJ:function(e,t,r){"use strict";r.r(t);var n=r("nKUr"),i=r("Ji2X"),o=r("ofer"),s=r("L8J8").default;t.default=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(i.a,{children:Object(n.jsx)(o.a,{children:Object(n.jsx)("h1",{children:"\u041f\u043e\u043d\u0440\u0430\u0432\u0438\u0432\u0448\u0438\u0435\u0441\u044f \u043d\u043e\u0432\u043e\u0441\u0442\u0438"})})}),Object(n.jsx)(s,{})]})}},tQdd:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/liked",function(){return r("hGCJ")}])}},[["tQdd",0,1,9,2,4,3,6,5,7,8,13,14]]]);