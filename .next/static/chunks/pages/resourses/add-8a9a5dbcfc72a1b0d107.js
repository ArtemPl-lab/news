_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"5AO2":function(e,t,a){"use strict";a.r(t);var i=a("rePB"),n=a("nKUr"),r=a("Ji2X"),s=a("ofer"),o=a("r9w1"),c=a("Z3vd"),l=a("q1tI");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.default=function(){var e=Object(l.useState)({siteTitle:"",sitemapLink:"",regularTitle:"",regularContent:"",regularImg:"",checkingPeriod:""}),t=e[0],a=e[1],d=function(e){a((function(t){return u(u({},t),{},Object(i.a)({},e.target.name,e.target.value))}))};return Object(n.jsxs)(r.a,{maxWidth:"xl",children:[Object(n.jsx)(s.a,{children:Object(n.jsx)("h1",{children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u0430-\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430"})}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/api/resources/addResource",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)})},children:[Object(n.jsx)(o.a,{label:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u0430",variant:"outlined",name:"siteTitle",className:"add-title-field",value:t.siteTitle,onChange:d}),Object(n.jsx)(o.a,{label:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0443 \u0440\u0435\u0441\u0443\u0440\u0441\u0430",variant:"outlined",name:"sitemapLink",className:"add-title-field",value:t.sitemapLink,onChange:d}),Object(n.jsx)(o.a,{label:"\u0421\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430",variant:"outlined",name:"regularTitle",className:"add-title-field",value:t.regularTitle,onChange:d}),Object(n.jsx)(o.a,{label:"\u0421\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430",variant:"outlined",name:"regularContent",className:"add-title-field",value:t.regularContent,onChange:d}),Object(n.jsx)(o.a,{label:"\u0421\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043c\u0438\u043d\u0438\u0430\u0442\u044e\u0440\u044b",variant:"outlined",name:"regularImg",className:"add-title-field",value:t.regularImg,onChange:d}),Object(n.jsx)(o.a,{label:"\u041f\u0435\u0440\u0438\u043e\u0434 \u043e\u0431\u0445\u043e\u0434\u0430 \u0432 \u043c\u0438\u043d\u0443\u0442\u0430\u0445\u0445",variant:"outlined",name:"checkingPeriod",className:"add-title-field",value:t.checkingPeriod,onChange:d}),Object(n.jsx)(c.a,{variant:"contained",color:"primary",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})}},Ji2X:function(e,t,a){"use strict";var i=a("wx14"),n=a("Ff2n"),r=a("rePB"),s=a("q1tI"),o=(a("17x9"),a("iuhU")),c=a("H2TA"),l=a("NqtD"),d=s.forwardRef((function(e,t){var a=e.classes,r=e.className,c=e.component,d=void 0===c?"div":c,u=e.disableGutters,b=void 0!==u&&u,p=e.fixed,m=void 0!==p&&p,g=e.maxWidth,j=void 0===g?"lg":g,f=Object(n.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return s.createElement(d,Object(i.a)({className:Object(o.a)(a.root,r,m&&a.fixed,b&&a.disableGutters,!1!==j&&a["maxWidth".concat(Object(l.a)(String(j)))]),ref:t},f))}));t.a=Object(c.a)((function(e){return{root:Object(r.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var i=e.breakpoints.values[a];return 0!==i&&(t[e.breakpoints.up(a)]={maxWidth:i}),t}),{}),maxWidthXs:Object(r.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(r.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(r.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(r.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(r.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(d)},QWpg:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resourses/add",function(){return a("5AO2")}])}},[["QWpg",0,1,2,4,5,7,10,11,14]]]);