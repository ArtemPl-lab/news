_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"/qGT":function(e,t,n){"use strict";var o=n("q1tI"),r=n("5AJ6");t.a=Object(r.a)(o.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},"0WXJ":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/add",function(){return n("1tu8")}])},"1tu8":function(e,t,n){"use strict";n.r(t);var o,r=n("ODXe"),i=n("rePB"),a=n("Ff2n"),l=n("nKUr"),c=n("R/WZ"),s=n("bXiM"),u=n("wx14"),d=n("q1tI"),p=n.n(d),f=(n("TOwV"),n("17x9")),b=n("iuhU"),h=n("l3Wi"),v=n("g+pH");function m(){if(o)return o;var e=document.createElement("div");return e.appendChild(document.createTextNode("ABCD")),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),o="reverse",e.scrollLeft>0?o="default":(e.scrollLeft=1,0===e.scrollLeft&&(o="negative")),document.body.removeChild(e),o}function g(e,t){var n=e.scrollLeft;if("rtl"!==t)return n;switch(m()){case"negative":return e.scrollWidth-e.clientWidth+n;case"reverse":return e.scrollWidth-e.clientWidth-n;default:return n}}function y(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var j={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function O(e){var t=e.onChange,n=Object(a.a)(e,["onChange"]),o=d.useRef(),r=d.useRef(null),i=function(){o.current=r.current.offsetHeight-r.current.clientHeight};return d.useEffect((function(){var e=Object(h.a)((function(){var e=o.current;i(),e!==o.current&&t(o.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[t]),d.useEffect((function(){i(),t(o.current)}),[t]),d.createElement("div",Object(u.a)({style:j,ref:r},n))}var w=n("H2TA"),x=n("NqtD"),C=d.forwardRef((function(e,t){var n=e.classes,o=e.className,r=e.color,i=e.orientation,l=Object(a.a)(e,["classes","className","color","orientation"]);return d.createElement("span",Object(u.a)({className:Object(b.a)(n.root,n["color".concat(Object(x.a)(r))],o,"vertical"===i&&n.vertical),ref:t},l))})),E=Object(w.a)((function(e){return{root:{position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},colorPrimary:{backgroundColor:e.palette.primary.main},colorSecondary:{backgroundColor:e.palette.secondary.main},vertical:{height:"100%",width:2,right:0}}}),{name:"PrivateTabIndicator"})(C),S=n("/qGT"),k=n("mymT"),N=n("VD++"),I=d.createElement(S.a,{fontSize:"small"}),R=d.createElement(k.a,{fontSize:"small"}),T=d.forwardRef((function(e,t){var n=e.classes,o=e.className,r=e.direction,i=e.orientation,l=e.disabled,c=Object(a.a)(e,["classes","className","direction","orientation","disabled"]);return d.createElement(N.a,Object(u.a)({component:"div",className:Object(b.a)(n.root,o,l&&n.disabled,"vertical"===i&&n.vertical),ref:t,role:null,tabIndex:null},c),"left"===r?I:R)})),D=Object(w.a)({root:{width:40,flexShrink:0,opacity:.8,"&$disabled":{opacity:0}},vertical:{width:"100%",height:40,"& svg":{transform:"rotate(90deg)"}},disabled:{}},{name:"MuiTabScrollButton"})(T),L=n("Ovef"),B=n("tr08"),P=d.forwardRef((function(e,t){var n=e["aria-label"],o=e["aria-labelledby"],r=e.action,l=e.centered,c=void 0!==l&&l,s=e.children,p=e.classes,f=e.className,j=e.component,w=void 0===j?"div":j,x=e.indicatorColor,C=void 0===x?"secondary":x,S=e.onChange,k=e.orientation,N=void 0===k?"horizontal":k,I=e.ScrollButtonComponent,R=void 0===I?D:I,T=e.scrollButtons,P=void 0===T?"auto":T,M=e.selectionFollowsFocus,A=e.TabIndicatorProps,W=void 0===A?{}:A,F=e.TabScrollButtonProps,z=e.textColor,H=void 0===z?"inherit":z,_=e.value,q=e.variant,U=void 0===q?"standard":q,K=Object(a.a)(e,["aria-label","aria-labelledby","action","centered","children","classes","className","component","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant"]),V=Object(B.a)(),X="scrollable"===U,$="rtl"===V.direction,G="vertical"===N,J=G?"scrollTop":"scrollLeft",Z=G?"top":"left",Q=G?"bottom":"right",Y=G?"clientHeight":"clientWidth",ee=G?"height":"width";var te=d.useState(!1),ne=te[0],oe=te[1],re=d.useState({}),ie=re[0],ae=re[1],le=d.useState({start:!1,end:!1}),ce=le[0],se=le[1],ue=d.useState({overflow:"hidden",marginBottom:null}),de=ue[0],pe=ue[1],fe=new Map,be=d.useRef(null),he=d.useRef(null),ve=function(){var e,t,n=be.current;if(n){var o=n.getBoundingClientRect();e={clientWidth:n.clientWidth,scrollLeft:n.scrollLeft,scrollTop:n.scrollTop,scrollLeftNormalized:g(n,V.direction),scrollWidth:n.scrollWidth,top:o.top,bottom:o.bottom,left:o.left,right:o.right}}if(n&&!1!==_){var r=he.current.children;if(r.length>0){var i=r[fe.get(_)];0,t=i?i.getBoundingClientRect():null}}return{tabsMeta:e,tabMeta:t}},me=Object(L.a)((function(){var e,t=ve(),n=t.tabsMeta,o=t.tabMeta,r=0;if(o&&n)if(G)r=o.top-n.top+n.scrollTop;else{var a=$?n.scrollLeftNormalized+n.clientWidth-n.scrollWidth:n.scrollLeft;r=o.left-n.left+a}var l=(e={},Object(i.a)(e,Z,r),Object(i.a)(e,ee,o?o[ee]:0),e);if(isNaN(ie[Z])||isNaN(ie[ee]))ae(l);else{var c=Math.abs(ie[Z]-l[Z]),s=Math.abs(ie[ee]-l[ee]);(c>=1||s>=1)&&ae(l)}})),ge=function(e){!function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},i=o.ease,a=void 0===i?y:i,l=o.duration,c=void 0===l?300:l,s=null,u=t[e],d=!1,p=function(){d=!0},f=function o(i){if(d)r(new Error("Animation cancelled"));else{null===s&&(s=i);var l=Math.min(1,(i-s)/c);t[e]=a(l)*(n-u)+u,l>=1?requestAnimationFrame((function(){r(null)})):requestAnimationFrame(o)}};u===n?r(new Error("Element already at target position")):requestAnimationFrame(f)}(J,be.current,e)},ye=function(e){var t=be.current[J];G?t+=e:(t+=e*($?-1:1),t*=$&&"reverse"===m()?-1:1),ge(t)},je=function(){ye(-be.current[Y])},Oe=function(){ye(be.current[Y])},we=d.useCallback((function(e){pe({overflow:null,marginBottom:-e})}),[]),xe=Object(L.a)((function(){var e=ve(),t=e.tabsMeta,n=e.tabMeta;if(n&&t)if(n[Z]<t[Z]){var o=t[J]+(n[Z]-t[Z]);ge(o)}else if(n[Q]>t[Q]){var r=t[J]+(n[Q]-t[Q]);ge(r)}})),Ce=Object(L.a)((function(){if(X&&"off"!==P){var e,t,n=be.current,o=n.scrollTop,r=n.scrollHeight,i=n.clientHeight,a=n.scrollWidth,l=n.clientWidth;if(G)e=o>1,t=o<r-i-1;else{var c=g(be.current,V.direction);e=$?c<a-l-1:c>1,t=$?c>1:c<a-l-1}e===ce.start&&t===ce.end||se({start:e,end:t})}}));d.useEffect((function(){var e=Object(h.a)((function(){me(),Ce()})),t=Object(v.a)(be.current);return t.addEventListener("resize",e),function(){e.clear(),t.removeEventListener("resize",e)}}),[me,Ce]);var Ee=d.useCallback(Object(h.a)((function(){Ce()})));d.useEffect((function(){return function(){Ee.clear()}}),[Ee]),d.useEffect((function(){oe(!0)}),[]),d.useEffect((function(){me(),Ce()})),d.useEffect((function(){xe()}),[xe,ie]),d.useImperativeHandle(r,(function(){return{updateIndicator:me,updateScrollButtons:Ce}}),[me,Ce]);var Se=d.createElement(E,Object(u.a)({className:p.indicator,orientation:N,color:C},W,{style:Object(u.a)({},ie,W.style)})),ke=0,Ne=d.Children.map(s,(function(e){if(!d.isValidElement(e))return null;var t=void 0===e.props.value?ke:e.props.value;fe.set(t,ke);var n=t===_;return ke+=1,d.cloneElement(e,{fullWidth:"fullWidth"===U,indicator:n&&!ne&&Se,selected:n,selectionFollowsFocus:M,onChange:S,textColor:H,value:t})})),Ie=function(){var e={};e.scrollbarSizeListener=X?d.createElement(O,{className:p.scrollable,onChange:we}):null;var t=ce.start||ce.end,n=X&&("auto"===P&&t||"desktop"===P||"on"===P);return e.scrollButtonStart=n?d.createElement(R,Object(u.a)({orientation:N,direction:$?"right":"left",onClick:je,disabled:!ce.start,className:Object(b.a)(p.scrollButtons,"on"!==P&&p.scrollButtonsDesktop)},F)):null,e.scrollButtonEnd=n?d.createElement(R,Object(u.a)({orientation:N,direction:$?"left":"right",onClick:Oe,disabled:!ce.end,className:Object(b.a)(p.scrollButtons,"on"!==P&&p.scrollButtonsDesktop)},F)):null,e}();return d.createElement(w,Object(u.a)({className:Object(b.a)(p.root,f,G&&p.vertical),ref:t},K),Ie.scrollButtonStart,Ie.scrollbarSizeListener,d.createElement("div",{className:Object(b.a)(p.scroller,X?p.scrollable:p.fixed),style:de,ref:be,onScroll:Ee},d.createElement("div",{"aria-label":n,"aria-labelledby":o,className:Object(b.a)(p.flexContainer,G&&p.flexContainerVertical,c&&!X&&p.centered),onKeyDown:function(e){var t=e.target;if("tab"===t.getAttribute("role")){var n=null,o="vertical"!==N?"ArrowLeft":"ArrowUp",r="vertical"!==N?"ArrowRight":"ArrowDown";switch("vertical"!==N&&"rtl"===V.direction&&(o="ArrowRight",r="ArrowLeft"),e.key){case o:n=t.previousElementSibling||he.current.lastChild;break;case r:n=t.nextElementSibling||he.current.firstChild;break;case"Home":n=he.current.firstChild;break;case"End":n=he.current.lastChild}null!==n&&(n.focus(),e.preventDefault())}},ref:he,role:"tablist"},Ne),ne&&Se),Ie.scrollButtonEnd)})),M=Object(w.a)((function(e){return{root:{overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},vertical:{flexDirection:"column"},flexContainer:{display:"flex"},flexContainerVertical:{flexDirection:"column"},centered:{justifyContent:"center"},scroller:{position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},fixed:{overflowX:"hidden",width:"100%"},scrollable:{overflowX:"scroll",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},scrollButtons:{},scrollButtonsDesktop:Object(i.a)({},e.breakpoints.down("xs"),{display:"none"}),indicator:{}}}),{name:"MuiTabs"})(P),A=d.forwardRef((function(e,t){var n=e.classes,o=e.className,r=e.disabled,i=void 0!==r&&r,l=e.disableFocusRipple,c=void 0!==l&&l,s=e.fullWidth,p=e.icon,f=e.indicator,h=e.label,v=e.onChange,m=e.onClick,g=e.onFocus,y=e.selected,j=e.selectionFollowsFocus,O=e.textColor,w=void 0===O?"inherit":O,C=e.value,E=e.wrapped,S=void 0!==E&&E,k=Object(a.a)(e,["classes","className","disabled","disableFocusRipple","fullWidth","icon","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"]);return d.createElement(N.a,Object(u.a)({focusRipple:!c,className:Object(b.a)(n.root,n["textColor".concat(Object(x.a)(w))],o,i&&n.disabled,y&&n.selected,h&&p&&n.labelIcon,s&&n.fullWidth,S&&n.wrapped),ref:t,role:"tab","aria-selected":y,disabled:i,onClick:function(e){v&&v(e,C),m&&m(e)},onFocus:function(e){j&&!y&&v&&v(e,C),g&&g(e)},tabIndex:y?0:-1},k),d.createElement("span",{className:n.wrapper},p,h),f)})),W=Object(w.a)((function(e){var t;return{root:Object(u.a)({},e.typography.button,(t={maxWidth:264,minWidth:72,position:"relative",boxSizing:"border-box",minHeight:48,flexShrink:0,padding:"6px 12px"},Object(i.a)(t,e.breakpoints.up("sm"),{padding:"6px 24px"}),Object(i.a)(t,"overflow","hidden"),Object(i.a)(t,"whiteSpace","normal"),Object(i.a)(t,"textAlign","center"),Object(i.a)(t,e.breakpoints.up("sm"),{minWidth:160}),t)),labelIcon:{minHeight:72,paddingTop:9,"& $wrapper > *:first-child":{marginBottom:6}},textColorInherit:{color:"inherit",opacity:.7,"&$selected":{opacity:1},"&$disabled":{opacity:.5}},textColorPrimary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled}},textColorSecondary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.secondary.main},"&$disabled":{color:e.palette.text.disabled}},selected:{},disabled:{},fullWidth:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},wrapped:{fontSize:e.typography.pxToRem(12),lineHeight:1.5},wrapper:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",flexDirection:"column"}}}),{name:"MuiTab"})(A),F=n("ofer"),z=n("hlFM"),H=n("r9w1"),_=function(){return(_=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},q={onActivate:f.func,onAddUndo:f.func,onBeforeAddUndo:f.func,onBeforeExecCommand:f.func,onBeforeGetContent:f.func,onBeforeRenderUI:f.func,onBeforeSetContent:f.func,onBeforePaste:f.func,onBlur:f.func,onChange:f.func,onClearUndos:f.func,onClick:f.func,onContextMenu:f.func,onCopy:f.func,onCut:f.func,onDblclick:f.func,onDeactivate:f.func,onDirty:f.func,onDrag:f.func,onDragDrop:f.func,onDragEnd:f.func,onDragGesture:f.func,onDragOver:f.func,onDrop:f.func,onExecCommand:f.func,onFocus:f.func,onFocusIn:f.func,onFocusOut:f.func,onGetContent:f.func,onHide:f.func,onInit:f.func,onKeyDown:f.func,onKeyPress:f.func,onKeyUp:f.func,onLoadContent:f.func,onMouseDown:f.func,onMouseEnter:f.func,onMouseLeave:f.func,onMouseMove:f.func,onMouseOut:f.func,onMouseOver:f.func,onMouseUp:f.func,onNodeChange:f.func,onObjectResizeStart:f.func,onObjectResized:f.func,onObjectSelected:f.func,onPaste:f.func,onPostProcess:f.func,onPostRender:f.func,onPreProcess:f.func,onProgressState:f.func,onRedo:f.func,onRemove:f.func,onReset:f.func,onSaveContent:f.func,onSelectionChange:f.func,onSetAttrib:f.func,onSetContent:f.func,onShow:f.func,onSubmit:f.func,onUndo:f.func,onVisualAid:f.func},U=_({apiKey:f.string,id:f.string,inline:f.bool,init:f.object,initialValue:f.string,onEditorChange:f.func,outputFormat:f.oneOf(["html","text"]),value:f.string,tagName:f.string,cloudChannel:f.string,plugins:f.oneOfType([f.string,f.array]),toolbar:f.oneOfType([f.string,f.array]),disabled:f.bool,textareaName:f.string,tinymceScriptSrc:f.string,scriptLoading:f.shape({async:f.bool,defer:f.bool,delay:f.number})},q),K=function(e){return"function"===typeof e},V=function(e){return e in q},X=function(e,t,n){(function(e){return Object.keys(e).filter(V).filter((function(t){return K(e[t])})).map((function(t){return{handler:e[t],eventName:t.substring(2)}}))})(t).forEach((function(t){var o=n[t.eventName];K(o)&&e.off(t.eventName,o);var r=function(n){return t.handler(n,e)};n[t.eventName]=r,e.on(t.eventName,r)}))},$=0,G=function(e){var t=Date.now();return e+"_"+Math.floor(1e9*Math.random())+ ++$+String(t)},J=function(e){return"undefined"===typeof e||""===e?[]:Array.isArray(e)?e:e.split(" ")},Z=function(){return{listeners:[],scriptId:G("tiny-script"),scriptLoading:!1,scriptLoaded:!1}},Q=function(){var e=Z();return{load:function(t,n,o,r,i,a){var l=function(){return function(e,t,n,o,r,i){var a=t.createElement("script");a.referrerPolicy="origin",a.type="application/javascript",a.id=e,a.src=n,a.async=o,a.defer=r;var l=function(){a.removeEventListener("load",l),i()};a.addEventListener("load",l),t.head&&t.head.appendChild(a)}(e.scriptId,t,n,o,r,(function(){e.listeners.forEach((function(e){return e()})),e.scriptLoaded=!0}))};e.scriptLoaded?a():(e.listeners.push(a),e.scriptLoading||(e.scriptLoading=!0,i>0?setTimeout(l,i):l()))},reinitialize:function(){e=Z()}}}(),Y=n("4le0"),ee=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),te=function(){return(te=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},ne=function(e){function t(t){var n,o,r,i=e.call(this,t)||this;return i.handleEditorChange=function(e){var t,n=i.editor;if(n){var o=n.getContent({format:i.props.outputFormat});o!==i.currentContent&&(i.currentContent=o,K(i.props.onEditorChange)&&i.props.onEditorChange(null!==(t=i.currentContent)&&void 0!==t?t:"",n))}},i.handleInit=function(e){var t=i.editor;t&&(t.setContent(i.getInitialValue()),K(i.props.onEditorChange)&&t.on("change keyup setcontent",i.handleEditorChange),K(i.props.onInit)&&i.props.onInit(e,t),X(t,i.props,i.boundHandlers))},i.initialise=function(){var e=i.elementRef.current;if(e){var t=Object(Y.a)();if(!t)throw new Error("tinymce should have been loaded into global scope");var n,o,r,a=te(te({},i.props.init),{selector:void 0,target:e,readonly:i.props.disabled,inline:i.inline,plugins:(n=i.props.init&&i.props.init.plugins,o=i.props.plugins,J(n).concat(J(o))),toolbar:i.props.toolbar||i.props.init&&i.props.init.toolbar,setup:function(e){i.editor=e,e.on("init",i.handleInit),i.props.init&&K(i.props.init.setup)&&i.props.init.setup(e)}});null!==(r=i.elementRef.current)&&"textarea"===r.tagName.toLowerCase()&&(i.elementRef.current.style.visibility=""),t.init(a)}},i.id=i.props.id||G("tiny-react"),i.elementRef=d.createRef(),i.inline=null!==(r=null!==(n=i.props.inline)&&void 0!==n?n:null===(o=i.props.init)||void 0===o?void 0:o.inline)&&void 0!==r&&r,i.boundHandlers={},i}return ee(t,e),t.prototype.componentDidUpdate=function(e){var t;this.editor&&this.editor.initialized&&(X(this.editor,this.props,this.boundHandlers),this.currentContent=null!==(t=this.currentContent)&&void 0!==t?t:this.editor.getContent({format:this.props.outputFormat}),"string"===typeof this.props.value&&this.props.value!==e.value&&this.props.value!==this.currentContent&&this.editor.setContent(this.props.value),"boolean"===typeof this.props.disabled&&this.props.disabled!==e.disabled&&this.editor.setMode(this.props.disabled?"readonly":"design"))},t.prototype.componentDidMount=function(){var e,t,n,o,r,i;null!==Object(Y.a)()?this.initialise():this.elementRef.current&&this.elementRef.current.ownerDocument&&Q.load(this.elementRef.current.ownerDocument,this.getScriptSrc(),null!==(t=null===(e=this.props.scriptLoading)||void 0===e?void 0:e.async)&&void 0!==t&&t,null!==(o=null===(n=this.props.scriptLoading)||void 0===n?void 0:n.defer)&&void 0!==o&&o,null!==(i=null===(r=this.props.scriptLoading)||void 0===r?void 0:r.delay)&&void 0!==i?i:0,this.initialise)},t.prototype.componentWillUnmount=function(){var e=this,t=this.editor;t&&(t.off("init",this.handleInit),t.initialized&&(t.off("change keyup setcontent",this.handleEditorChange),Object.keys(this.boundHandlers).forEach((function(n){t.off(n,e.boundHandlers[n])})),this.boundHandlers={}),t.remove())},t.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},t.prototype.renderInline=function(){var e=this.props.tagName,t=void 0===e?"div":e;return d.createElement(t,{ref:this.elementRef,id:this.id})},t.prototype.renderIframe=function(){return d.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},t.prototype.getScriptSrc=function(){if("string"===typeof this.props.tinymceScriptSrc)return this.props.tinymceScriptSrc;var e=this.props.cloudChannel;return"https://cdn.tiny.cloud/1/"+(this.props.apiKey?this.props.apiKey:"no-api-key")+"/tinymce/"+e+"/tinymce.min.js"},t.prototype.getInitialValue=function(){return"string"===typeof this.props.value?this.props.value:"string"===typeof this.props.initialValue?this.props.initialValue:""},t.propTypes=U,t.defaultProps={cloudChannel:"5"},t}(d.Component),oe=n("Z3vd"),re=n("8Joa"),ie=n("TyAF"),ae=n("nOHt");function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function se(e){var t=e.children,n=e.value,o=e.index,r=Object(a.a)(e,["children","value","index"]);return Object(l.jsx)("div",ce(ce({role:"tabpanel",hidden:n!==o,id:"simple-tabpanel-".concat(o),"aria-labelledby":"simple-tab-".concat(o)},r),{},{children:n===o&&Object(l.jsx)(z.a,{p:3,children:Object(l.jsx)(F.a,{children:t})})}))}function ue(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var de=Object(c.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));t.default=Object(ie.a)((function(){var e=de(),t=p.a.useState(0),n=Object(r.a)(t,2),o=n[0],i=n[1],a=Object(re.useStore)().user,c=Object(ae.useRouter)();return Object(d.useEffect)((function(){a.userToken||c.push("/")}),[a.userToken]),Object(l.jsxs)("div",{className:e.root,children:[Object(l.jsx)(s.a,{position:"static",children:Object(l.jsxs)(M,{value:o,onChange:function(e,t){i(t)},"aria-label":"simple tabs example",variant:"scrollable",scrollButtons:"auto",children:[Object(l.jsx)(W,ce({label:"\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"},ue(0))),Object(l.jsx)(W,ce({label:"\u0414\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u0438\u043a\u043e\u0432"},ue(1))),Object(l.jsx)(W,ce({label:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"},ue(2)))]})}),Object(l.jsxs)(se,{value:o,index:0,children:[Object(l.jsx)(H.a,{id:"outlined-basic",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",variant:"outlined",className:"add-title-field"}),Object(l.jsx)(ne,{initialValue:"<p>Initial content</p>",init:{height:500,menubar:!1,plugins:["advlist autolink lists link image","charmap print preview anchor help","searchreplace visualblocks code","insertdatetime media table paste wordcount"],toolbar:"undo redo | formatselect | bold italic |                     alignleft aligncenter alignright |                     bullist numlist outdent indent | help"},onChange:function(e){console.log("Content was updated:",e.target.getContent())},apiKey:"llye9u61s05d1t8wpej0br4kyuqomj0ioj0g97bqkdnqxszo"}),Object(l.jsx)(oe.a,{variant:"contained",color:"primary",className:"btn-sub-add",children:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"})]}),Object(l.jsx)(se,{value:o,index:1,children:"Item Two"}),Object(l.jsx)(se,{value:o,index:2,children:"Item Three"})]})}))},"4le0":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r}));var o=function(){return"undefined"!==typeof window?window:e},r=function(){var e=o();return e&&e.tinymce?e.tinymce:null}}).call(this,n("yLpj"))},bXiM:function(e,t,n){"use strict";var o=n("wx14"),r=n("Ff2n"),i=n("q1tI"),a=(n("17x9"),n("iuhU")),l=n("H2TA"),c=n("NqtD"),s=n("kKAo"),u=i.forwardRef((function(e,t){var n=e.classes,l=e.className,u=e.color,d=void 0===u?"primary":u,p=e.position,f=void 0===p?"fixed":p,b=Object(r.a)(e,["classes","className","color","position"]);return i.createElement(s.a,Object(o.a)({square:!0,component:"header",elevation:4,className:Object(a.a)(n.root,n["position".concat(Object(c.a)(f))],n["color".concat(Object(c.a)(d))],l,"fixed"===f&&"mui-fixed"),ref:t},b))}));t.a=Object(l.a)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(u)},mymT:function(e,t,n){"use strict";var o=n("q1tI"),r=n("5AJ6");t.a=Object(r.a)(o.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")}},[["0WXJ",0,1,7,2,3,5,4,6,8,9,10,13]]]);