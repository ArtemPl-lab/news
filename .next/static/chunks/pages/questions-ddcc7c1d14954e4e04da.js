_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"1iKp":function(e,i,a){"use strict";var t=a("TqRt");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=t(a("q1tI")),r=(0,t(a("8/g6")).default)(o.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");i.default=r},"8/g6":function(e,i,a){"use strict";var t=a("TqRt");Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,i){var a=r.default.memo(r.default.forwardRef((function(i,a){return r.default.createElement(n.default,(0,o.default)({ref:a},i),e)})));0;return a.muiName=n.default.muiName,a};var o=t(a("pVnL")),r=t(a("q1tI")),n=t(a("UJJ5"))},JQEk:function(e,i,a){"use strict";var t=a("wx14"),o=a("ODXe"),r=a("Ff2n"),n=a("q1tI"),u=a("iuhU"),s=(a("17x9"),a("dRu9")),l=a("H2TA"),m=a("wpWl"),d=a("4Hym"),c=a("tr08"),p=a("bfFb"),b=n.forwardRef((function(e,i){var a=e.children,l=e.classes,b=e.className,q=e.collapsedHeight,f=void 0===q?"0px":q,v=e.component,g=void 0===v?"div":v,h=e.disableStrictModeCompat,x=void 0!==h&&h,j=e.in,O=e.onEnter,y=e.onEntered,E=e.onEntering,R=e.onExit,N=e.onExited,C=e.onExiting,w=e.style,T=e.timeout,A=void 0===T?m.b.standard:T,I=e.TransitionComponent,k=void 0===I?s.a:I,S=Object(r.a)(e,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),D=Object(c.a)(),L=n.useRef(),_=n.useRef(null),M=n.useRef(),P="number"===typeof f?"".concat(f,"px"):f;n.useEffect((function(){return function(){clearTimeout(L.current)}}),[]);var V=D.unstable_strictMode&&!x,H=n.useRef(null),B=Object(p.a)(i,V?H:void 0),$=function(e){return function(i,a){if(e){var t=V?[H.current,i]:[i,a],r=Object(o.a)(t,2),n=r[0],u=r[1];void 0===u?e(n):e(n,u)}}},Q=$((function(e,i){e.style.height=P,O&&O(e,i)})),z=$((function(e,i){var a=_.current?_.current.clientHeight:0,t=Object(d.a)({style:w,timeout:A},{mode:"enter"}).duration;if("auto"===A){var o=D.transitions.getAutoHeightDuration(a);e.style.transitionDuration="".concat(o,"ms"),M.current=o}else e.style.transitionDuration="string"===typeof t?t:"".concat(t,"ms");e.style.height="".concat(a,"px"),E&&E(e,i)})),F=$((function(e,i){e.style.height="auto",y&&y(e,i)})),U=$((function(e){var i=_.current?_.current.clientHeight:0;e.style.height="".concat(i,"px"),R&&R(e)})),J=$(N),K=$((function(e){var i=_.current?_.current.clientHeight:0,a=Object(d.a)({style:w,timeout:A},{mode:"exit"}).duration;if("auto"===A){var t=D.transitions.getAutoHeightDuration(i);e.style.transitionDuration="".concat(t,"ms"),M.current=t}else e.style.transitionDuration="string"===typeof a?a:"".concat(a,"ms");e.style.height=P,C&&C(e)}));return n.createElement(k,Object(t.a)({in:j,onEnter:Q,onEntered:F,onEntering:z,onExit:U,onExited:J,onExiting:K,addEndListener:function(e,i){var a=V?e:i;"auto"===A&&(L.current=setTimeout(a,M.current||0))},nodeRef:V?H:void 0,timeout:"auto"===A?null:A},S),(function(e,i){return n.createElement(g,Object(t.a)({className:Object(u.a)(l.container,b,{entered:l.entered,exited:!j&&"0px"===P&&l.hidden}[e]),style:Object(t.a)({minHeight:P},w),ref:B},i),n.createElement("div",{className:l.wrapper,ref:_},n.createElement("div",{className:l.wrapperInner},a)))}))}));b.muiSupportAuto=!0,i.a=Object(l.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(b)},"KYN/":function(e,i,a){"use strict";a.r(i),a.d(i,"default",(function(){return I}));var t=a("nKUr"),o=a("R/WZ"),r=a("wx14"),n=a("DSFK"),u=a("25BE"),s=a("BsWD"),l=a("PYwp");var m=a("ODXe"),d=a("Ff2n"),c=a("q1tI"),p=(a("TOwV"),a("17x9"),a("iuhU")),b=a("JQEk"),q=a("kKAo"),f=a("H2TA");var v=c.createContext({}),g=a("yCxk"),h=c.forwardRef((function(e,i){var a,t=e.children,o=e.classes,f=e.className,h=e.defaultExpanded,x=void 0!==h&&h,j=e.disabled,O=void 0!==j&&j,y=e.expanded,E=e.onChange,R=e.square,N=void 0!==R&&R,C=e.TransitionComponent,w=void 0===C?b.a:C,T=e.TransitionProps,A=Object(d.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),I=Object(g.a)({controlled:y,default:x,name:"Accordion",state:"expanded"}),k=Object(m.a)(I,2),S=k[0],D=k[1],L=c.useCallback((function(e){D(!S),E&&E(e,!S)}),[S,E,D]),_=c.Children.toArray(t),M=(a=_,Object(n.a)(a)||Object(u.a)(a)||Object(s.a)(a)||Object(l.a)()),P=M[0],V=M.slice(1),H=c.useMemo((function(){return{expanded:S,disabled:O,toggle:L}}),[S,O,L]);return c.createElement(q.a,Object(r.a)({className:Object(p.a)(o.root,f,S&&o.expanded,O&&o.disabled,!N&&o.rounded),ref:i,square:N},A),c.createElement(v.Provider,{value:H},P),c.createElement(w,Object(r.a)({in:S,timeout:"auto"},T),c.createElement("div",{"aria-labelledby":P.props.id,id:P.props["aria-controls"],role:"region"},V)))})),x=Object(f.a)((function(e){var i={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],i),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],i)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiAccordion"})(h),j=a("VD++"),O=a("PsDL"),y=c.forwardRef((function(e,i){var a=e.children,t=e.classes,o=e.className,n=e.expandIcon,u=e.IconButtonProps,s=e.onBlur,l=e.onClick,m=e.onFocusVisible,b=Object(d.a)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),q=c.useState(!1),f=q[0],g=q[1],h=c.useContext(v),x=h.disabled,y=void 0!==x&&x,E=h.expanded,R=h.toggle;return c.createElement(j.a,Object(r.a)({focusRipple:!1,disableRipple:!0,disabled:y,component:"div","aria-expanded":E,className:Object(p.a)(t.root,o,y&&t.disabled,E&&t.expanded,f&&t.focused),onFocusVisible:function(e){g(!0),m&&m(e)},onBlur:function(e){g(!1),s&&s(e)},onClick:function(e){R&&R(e),l&&l(e)},ref:i},b),c.createElement("div",{className:Object(p.a)(t.content,E&&t.expanded)},a),n&&c.createElement(O.a,Object(r.a)({className:Object(p.a)(t.expandIcon,E&&t.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},u),n))})),E=Object(f.a)((function(e){var i={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],i),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],i),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",i),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiAccordionSummary"})(y),R=c.forwardRef((function(e,i){var a=e.classes,t=e.className,o=Object(d.a)(e,["classes","className"]);return c.createElement("div",Object(r.a)({className:Object(p.a)(a.root,t),ref:i},o))})),N=Object(f.a)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiAccordionDetails"})(R),C=a("ofer"),w=a("1iKp"),T=a.n(w),A=Object(o.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}}));function I(){var e=A();return Object(t.jsxs)("div",{className:e.root,children:[Object(t.jsxs)(x,{children:[Object(t.jsx)(E,{expandIcon:Object(t.jsx)(T.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:Object(t.jsx)(C.a,{className:e.heading,children:"Question 1"})}),Object(t.jsx)(N,{children:Object(t.jsx)(C.a,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut non omnis iste animi? Voluptatum repudiandae magnam deserunt officiis quas, error inventore. Culpa debitis ipsam minus, sint delectus architecto quaerat rem quis consectetur in ducimus corporis praesentium perferendis dolorem ipsum soluta dolore iste sequi assumenda consequatur blanditiis at similique dignissimos! Similique fuga veritatis inventore sit voluptate enim quas deleniti, reprehenderit velit obcaecati, maxime ratione iure soluta eum iusto nostrum quia accusamus ducimus voluptatem. Placeat, maxime harum nisi deserunt explicabo suscipit. Velit, tempora laboriosam veritatis beatae tempore sint exercitationem molestiae iste eius! Animi qui consequatur beatae molestias fugiat consequuntur natus cumque pariatur ullam neque dolores quisquam quibusdam error optio ratione, sapiente eveniet sit voluptate rem dicta incidunt aliquid fuga illum omnis? Ducimus alias sed tempore veniam porro numquam tempora eius, corrupti velit! Assumenda reiciendis iusto error porro ipsa qui magnam doloribus eveniet quas eligendi, illum hic dolorum sequi magni autem dolor perspiciatis consequatur ullam illo non facere. Sequi pariatur facilis laudantium aliquid. Enim inventore minus doloribus animi minima deserunt ipsum laborum, expedita dolor explicabo corrupti similique eveniet asperiores corporis, voluptatibus, soluta in eos quisquam dolore. Officia mollitia atque minima doloremque vero, dolor quisquam officiis nam cupiditate commodi deserunt eveniet. Labore quaerat expedita maiores, neque ab cumque veritatis tempora sint eius quidem distinctio magni eaque possimus aperiam debitis voluptates repudiandae culpa minima vero nam obcaecati. Ullam sit voluptatem amet accusantium eveniet, error, autem tempora expedita aliquam iusto necessitatibus mollitia aut provident, culpa ipsum tempore? Minus quo voluptate unde ratione sapiente distinctio placeat, provident, beatae porro aspernatur totam sunt dolores cum? Non architecto quasi autem nesciunt nemo! Accusantium dolore in doloremque excepturi illo aperiam placeat est nostrum animi nemo quo corporis ut harum, ad, voluptas quae sit impedit ea non iste nobis ullam fugiat tempore aliquid. Iure, modi? Laborum, quam incidunt. Ipsum eaque ad recusandae nam totam similique illum ullam pariatur vero dolorum! Ea eaque aliquid quis consequuntur, voluptates laborum molestiae labore dignissimos nihil deleniti animi velit non rerum voluptas nesciunt. Explicabo magni exercitationem dolores ea totam rerum voluptate amet reiciendis in modi, esse maiores praesentium itaque quasi numquam eaque sequi tenetur vitae sint officiis laboriosam, possimus ipsum ex quidem? Vitae, vero eaque temporibus debitis autem pariatur illum perferendis! Ad amet optio exercitationem. Nostrum incidunt nulla ex eveniet esse distinctio tenetur quod vero repellendus dolorum, maiores quas atque doloribus voluptas dolorem? Totam enim voluptatem deserunt provident alias, aspernatur culpa labore laborum eaque perferendis saepe pariatur consequatur laboriosam debitis corporis fugiat perspiciatis, iste ea fugit. Quasi animi aspernatur sint sequi ipsum beatae molestias, est nemo incidunt asperiores, quaerat eius. Quidem illum atque optio aperiam dignissimos ducimus libero ex accusantium aspernatur quod laudantium, et neque non fuga doloremque maiores voluptas illo fugit qui! Cumque illo alias, itaque facere, mollitia expedita reprehenderit tenetur sint necessitatibus aspernatur saepe? Tenetur obcaecati asperiores voluptate est, maiores temporibus, quos aliquam voluptates veritatis quam dicta! Cumque deleniti nostrum aperiam optio dolores eum ipsam quas omnis magni. Officia optio repellendus esse alias numquam a porro itaque fuga, eum dolorem et, veritatis eaque magnam!"})})]}),Object(t.jsxs)(x,{children:[Object(t.jsx)(E,{expandIcon:Object(t.jsx)(T.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:Object(t.jsx)(C.a,{className:e.heading,children:"Question 2"})}),Object(t.jsx)(N,{children:Object(t.jsx)(C.a,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut non omnis iste animi? Voluptatum repudiandae magnam deserunt officiis quas, error inventore. Culpa debitis ipsam minus, sint delectus architecto quaerat rem quis consectetur in ducimus corporis praesentium perferendis dolorem ipsum soluta dolore iste sequi assumenda consequatur blanditiis at similique dignissimos! Similique fuga veritatis inventore sit voluptate enim quas deleniti, reprehenderit velit obcaecati, maxime ratione iure soluta eum iusto nostrum quia accusamus ducimus voluptatem. Placeat, maxime harum nisi deserunt explicabo suscipit. Velit, tempora laboriosam veritatis beatae tempore sint exercitationem molestiae iste eius! Animi qui consequatur beatae molestias fugiat consequuntur natus cumque pariatur ullam neque dolores quisquam quibusdam error optio ratione, sapiente eveniet sit voluptate rem dicta incidunt aliquid fuga illum omnis? Ducimus alias sed tempore veniam porro numquam tempora eius, corrupti velit! Assumenda reiciendis iusto error porro ipsa qui magnam doloribus eveniet quas eligendi, illum hic dolorum sequi magni autem dolor perspiciatis consequatur ullam illo non facere. Sequi pariatur facilis laudantium aliquid. Enim inventore minus doloribus animi minima deserunt ipsum laborum, expedita dolor explicabo corrupti similique eveniet asperiores corporis, voluptatibus, soluta in eos quisquam dolore. Officia mollitia atque minima doloremque vero, dolor quisquam officiis nam cupiditate commodi deserunt eveniet. Labore quaerat expedita maiores, neque ab cumque veritatis tempora sint eius quidem distinctio magni eaque possimus aperiam debitis voluptates repudiandae culpa minima vero nam obcaecati. Ullam sit voluptatem amet accusantium eveniet, error, autem tempora expedita aliquam iusto necessitatibus mollitia aut provident, culpa ipsum tempore? Minus quo voluptate unde ratione sapiente distinctio placeat, provident, beatae porro aspernatur totam sunt dolores cum? Non architecto quasi autem nesciunt nemo! Accusantium dolore in doloremque excepturi illo aperiam placeat est nostrum animi nemo quo corporis ut harum, ad, voluptas quae sit impedit ea non iste nobis ullam fugiat tempore aliquid. Iure, modi? Laborum, quam incidunt. Ipsum eaque ad recusandae nam totam similique illum ullam pariatur vero dolorum! Ea eaque aliquid quis consequuntur, voluptates laborum molestiae labore dignissimos nihil deleniti animi velit non rerum voluptas nesciunt. Explicabo magni exercitationem dolores ea totam rerum voluptate amet reiciendis in modi, esse maiores praesentium itaque quasi numquam eaque sequi tenetur vitae sint officiis laboriosam, possimus ipsum ex quidem? Vitae, vero eaque temporibus debitis autem pariatur illum perferendis! Ad amet optio exercitationem. Nostrum incidunt nulla ex eveniet esse distinctio tenetur quod vero repellendus dolorum, maiores quas atque doloribus voluptas dolorem? Totam enim voluptatem deserunt provident alias, aspernatur culpa labore laborum eaque perferendis saepe pariatur consequatur laboriosam debitis corporis fugiat perspiciatis, iste ea fugit. Quasi animi aspernatur sint sequi ipsum beatae molestias, est nemo incidunt asperiores, quaerat eius. Quidem illum atque optio aperiam dignissimos ducimus libero ex accusantium aspernatur quod laudantium, et neque non fuga doloremque maiores voluptas illo fugit qui! Cumque illo alias, itaque facere, mollitia expedita reprehenderit tenetur sint necessitatibus aspernatur saepe? Tenetur obcaecati asperiores voluptate est, maiores temporibus, quos aliquam voluptates veritatis quam dicta! Cumque deleniti nostrum aperiam optio dolores eum ipsam quas omnis magni. Officia optio repellendus esse alias numquam a porro itaque fuga, eum dolorem et, veritatis eaque magnam!"})})]}),Object(t.jsxs)(x,{children:[Object(t.jsx)(E,{expandIcon:Object(t.jsx)(T.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:Object(t.jsx)(C.a,{className:e.heading,children:"Question 3"})}),Object(t.jsx)(N,{children:Object(t.jsx)(C.a,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut non omnis iste animi? Voluptatum repudiandae magnam deserunt officiis quas, error inventore. Culpa debitis ipsam minus, sint delectus architecto quaerat rem quis consectetur in ducimus corporis praesentium perferendis dolorem ipsum soluta dolore iste sequi assumenda consequatur blanditiis at similique dignissimos! Similique fuga veritatis inventore sit voluptate enim quas deleniti, reprehenderit velit obcaecati, maxime ratione iure soluta eum iusto nostrum quia accusamus ducimus voluptatem. Placeat, maxime harum nisi deserunt explicabo suscipit. Velit, tempora laboriosam veritatis beatae tempore sint exercitationem molestiae iste eius! Animi qui consequatur beatae molestias fugiat consequuntur natus cumque pariatur ullam neque dolores quisquam quibusdam error optio ratione, sapiente eveniet sit voluptate rem dicta incidunt aliquid fuga illum omnis? Ducimus alias sed tempore veniam porro numquam tempora eius, corrupti velit! Assumenda reiciendis iusto error porro ipsa qui magnam doloribus eveniet quas eligendi, illum hic dolorum sequi magni autem dolor perspiciatis consequatur ullam illo non facere. Sequi pariatur facilis laudantium aliquid. Enim inventore minus doloribus animi minima deserunt ipsum laborum, expedita dolor explicabo corrupti similique eveniet asperiores corporis, voluptatibus, soluta in eos quisquam dolore. Officia mollitia atque minima doloremque vero, dolor quisquam officiis nam cupiditate commodi deserunt eveniet. Labore quaerat expedita maiores, neque ab cumque veritatis tempora sint eius quidem distinctio magni eaque possimus aperiam debitis voluptates repudiandae culpa minima vero nam obcaecati. Ullam sit voluptatem amet accusantium eveniet, error, autem tempora expedita aliquam iusto necessitatibus mollitia aut provident, culpa ipsum tempore? Minus quo voluptate unde ratione sapiente distinctio placeat, provident, beatae porro aspernatur totam sunt dolores cum? Non architecto quasi autem nesciunt nemo! Accusantium dolore in doloremque excepturi illo aperiam placeat est nostrum animi nemo quo corporis ut harum, ad, voluptas quae sit impedit ea non iste nobis ullam fugiat tempore aliquid. Iure, modi? Laborum, quam incidunt. Ipsum eaque ad recusandae nam totam similique illum ullam pariatur vero dolorum! Ea eaque aliquid quis consequuntur, voluptates laborum molestiae labore dignissimos nihil deleniti animi velit non rerum voluptas nesciunt. Explicabo magni exercitationem dolores ea totam rerum voluptate amet reiciendis in modi, esse maiores praesentium itaque quasi numquam eaque sequi tenetur vitae sint officiis laboriosam, possimus ipsum ex quidem? Vitae, vero eaque temporibus debitis autem pariatur illum perferendis! Ad amet optio exercitationem. Nostrum incidunt nulla ex eveniet esse distinctio tenetur quod vero repellendus dolorum, maiores quas atque doloribus voluptas dolorem? Totam enim voluptatem deserunt provident alias, aspernatur culpa labore laborum eaque perferendis saepe pariatur consequatur laboriosam debitis corporis fugiat perspiciatis, iste ea fugit. Quasi animi aspernatur sint sequi ipsum beatae molestias, est nemo incidunt asperiores, quaerat eius. Quidem illum atque optio aperiam dignissimos ducimus libero ex accusantium aspernatur quod laudantium, et neque non fuga doloremque maiores voluptas illo fugit qui! Cumque illo alias, itaque facere, mollitia expedita reprehenderit tenetur sint necessitatibus aspernatur saepe? Tenetur obcaecati asperiores voluptate est, maiores temporibus, quos aliquam voluptates veritatis quam dicta! Cumque deleniti nostrum aperiam optio dolores eum ipsam quas omnis magni. Officia optio repellendus esse alias numquam a porro itaque fuga, eum dolorem et, veritatis eaque magnam!"})})]})]})}},PsDL:function(e,i,a){"use strict";var t=a("wx14"),o=a("Ff2n"),r=a("q1tI"),n=(a("17x9"),a("iuhU")),u=a("H2TA"),s=a("ye/S"),l=a("VD++"),m=a("NqtD"),d=r.forwardRef((function(e,i){var a=e.edge,u=void 0!==a&&a,s=e.children,d=e.classes,c=e.className,p=e.color,b=void 0===p?"default":p,q=e.disabled,f=void 0!==q&&q,v=e.disableFocusRipple,g=void 0!==v&&v,h=e.size,x=void 0===h?"medium":h,j=Object(o.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return r.createElement(l.a,Object(t.a)({className:Object(n.a)(d.root,c,"default"!==b&&d["color".concat(Object(m.a)(b))],f&&d.disabled,"small"===x&&d["size".concat(Object(m.a)(x))],{start:d.edgeStart,end:d.edgeEnd}[u]),centerRipple:!0,focusRipple:!g,disabled:f,ref:i},j),r.createElement("span",{className:d.label},s))}));i.a=Object(u.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(s.b)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(d)},"R/WZ":function(e,i,a){"use strict";var t=a("wx14"),o=a("RD7I"),r=a("cNwE");i.a=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(o.a)(e,Object(t.a)({defaultTheme:r.a},i))}},TqRt:function(e,i){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},UJJ5:function(e,i,a){"use strict";a.r(i);var t=a("HR5l");a.d(i,"default",(function(){return t.a}))},pVnL:function(e,i){function a(){return e.exports=a=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},a.apply(this,arguments)}e.exports=a},s3Ng:function(e,i,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/questions",function(){return a("KYN/")}])},yCxk:function(e,i,a){"use strict";a.d(i,"a",(function(){return o}));var t=a("q1tI");function o(e){var i=e.controlled,a=e.default,o=(e.name,e.state,t.useRef(void 0!==i).current),r=t.useState(a),n=r[0],u=r[1];return[o?i:n,t.useCallback((function(e){o||u(e)}),[])]}}},[["s3Ng",0,1,2,4]]]);