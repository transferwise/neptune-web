_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[99],{"+KXO":function(t,e,n){var r=n("ax0f"),o=n("N9G2"),a=n("DEeE");r({target:"Object",stat:!0,forced:n("ct80")((function(){a(1)}))},{keys:function(t){return a(o(t))}})},"1IsZ":function(t,e,n){var r=n("ax0f"),o=n("YAkj").values;r({target:"Object",stat:!0},{values:function(t){return o(t)}})},"1Pcy":function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},"2G9S":function(t,e,n){"use strict";var r=n("ax0f"),o=n("ct80"),a=n("xt6W"),i=n("dSaG"),c=n("N9G2"),u=n("tJVe"),s=n("2sZ7"),l=n("aoZ+"),f=n("GJtw"),p=n("fVMg"),v=n("T+0C"),d=p("isConcatSpreadable"),m=v>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),y=f("concat"),g=function(t){if(!i(t))return!1;var e=t[d];return void 0!==e?!!e:a(t)};r({target:"Array",proto:!0,forced:!m||!y},{concat:function(t){var e,n,r,o,a,i=c(this),f=l(i,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(g(a=-1===e?i:arguments[e])){if(p+(o=u(a.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in a&&s(f,p,a[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(f,p++,a)}return f.length=p,f}})},"2gZs":function(t,e,n){var r=n("POz8"),o=n("amH4"),a=n("fVMg")("toStringTag"),i="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=Object(t),a))?n:i?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},"5BfY":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={EXTRA_SMALL:480,SMALL:576,MEDIUM:768,LARGE:992,EXTRA_LARGE:1200}},"5Yy7":function(t,e,n){var r=n("695J");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"695J":function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},"7CQW":function(t,e,n){"use strict";n("2G9S"),n("7x/C"),n("DZ+c");var r=n("VrFO"),o=n.n(r),a=n("Y9Ll"),i=n.n(a),c=n("1Pcy"),u=n.n(c),s=n("5Yy7"),l=n.n(s),f=n("N+ot"),p=n.n(f),v=n("AuHH"),d=n.n(v),m=n("KEM+"),y=n.n(m),g=n("ERkP"),h=n.n(g),b=n("eKd8");n("7gtC");function E(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d()(t);if(e){var o=d()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p()(this,n)}}var w=function(t){function e(){var t;return o()(this,e),t=n.call(this),y()(u()(t),"ensureHidden",(function(e){t.state.show||(e.stopPropagation(),t.hide())})),t.state={show:!1,tooltipId:null},t}l()(e,t);var n=E(e);return i()(e,[{key:"componentDidMount",value:function(){this.setState({tooltipId:Math.random().toString(36).substring(7)})}},{key:"show",value:function(){this.setState((function(){return{show:!0}}))}},{key:"hide",value:function(){this.setState((function(){return{show:!1}}))}},{key:"render",value:function(){var t=this,e=this.state.tooltipId,n=this.props,r=n.position,o=n.children,a=n.label,i=n.offset,c=this.elementReference&&this.tooltipReference?function(t,e,n,r){return n===b.a.TOP?{top:"".concat(t.offsetTop-e.offsetHeight-r,"px"),left:"".concat(t.offsetLeft+t.offsetWidth/2-e.offsetWidth/2,"px")}:n===b.a.LEFT?{top:"".concat(t.offsetTop+t.offsetHeight/2-e.offsetHeight/2,"px"),left:"".concat(t.offsetLeft-e.offsetWidth-r,"px")}:n===b.a.RIGHT?{top:"".concat(t.offsetTop+t.offsetHeight/2-e.offsetHeight/2,"px"),left:"".concat(t.offsetLeft+t.offsetWidth+r,"px")}:n===b.a.BOTTOM?{top:"".concat(t.offsetTop+t.offsetHeight+r,"px"),left:"".concat(t.offsetLeft+t.offsetWidth/2-e.offsetWidth/2,"px")}:{}}(this.elementReference,this.tooltipReference,r,i):{};return h.a.createElement("span",{onMouseOver:function(){return t.show()},onFocus:function(){return t.show()},onMouseOut:function(){return t.hide()},onBlur:function(){return t.hide()},ref:function(e){t.elementReference=e},"aria-describedby":e,className:"tw-tooltip-container"},h.a.createElement("div",{onMouseOver:this.ensureHidden,onFocus:this.ensureHidden,className:"tooltip fade ".concat(r," ").concat(this.state.show?"in":""),role:"tooltip",style:c,ref:function(e){t.tooltipReference=e},id:e},h.a.createElement("div",{className:"tooltip-arrow"}),h.a.createElement("div",{className:"tooltip-inner"},a)),o)}}]),e}(g.Component);w.Position=b.a,w.defaultProps={position:w.Position.TOP,offset:0};var x=w;e.a=x},"7x/C":function(t,e,n){var r=n("POz8"),o=n("uLp7"),a=n("UmhL");r||o(Object.prototype,"toString",a,{unsafe:!0})},"7xRU":function(t,e,n){"use strict";var r=n("ax0f"),o=n("g6a+"),a=n("N4z3"),i=n("f4p7"),c=[].join,u=o!=Object,s=i("join",",");r({target:"Array",proto:!0,forced:u||!s},{join:function(t){return c.call(a(this),void 0===t?",":t)}})},"8+RD":function(t,e,n){var r=n("dSaG");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"9YZu":function(t,e,n){"use strict";var r=n("ERkP"),o=n.n(r),a=n("O94r"),i=n.n(a),c=n("VehP"),u=n("EUyq"),s=(n("DGa2"),function(t){var e=t.backgroundColor,n=t.children,r=t.className,a=t.outlined,c=t.size,u=t.theme,s=t.type;return o.a.createElement("div",{className:i()("tw-avatar",r,"tw-avatar--".concat(c),"tw-avatar--".concat(s),"tw-avatar--".concat(u),{"tw-avatar--outlined":a})},o.a.createElement("div",{className:"tw-avatar__content",style:{backgroundColor:e||void 0}},n))});s.Size={SMALL:c.a.SMALL,MEDIUM:c.a.MEDIUM,LARGE:c.a.LARGE},s.Theme=u.a,s.Type={THUMBNAIL:"thumbnail",ICON:"icon",EMOJI:"emoji",INITIALS:"initials"},s.defaultProps={backgroundColor:null,children:null,className:null,outlined:!1,size:s.Size.MEDIUM,theme:u.a.LIGHT,type:s.Type.THUMBNAIL},e.a=s},AuHH:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},BAoe:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r,o,a=n("D57K"),i=n("ERkP"),c=n("yGPN"),u=n("ymT0");!function(t){t.formatDate="FormattedDate",t.formatTime="FormattedTime",t.formatNumber="FormattedNumber",t.formatList="FormattedList",t.formatDisplayName="FormattedDisplayName"}(r||(r={})),function(t){t.formatDate="FormattedDateParts",t.formatTime="FormattedTimeParts",t.formatNumber="FormattedNumberParts",t.formatList="FormattedListParts"}(o||(o={}));function s(t){var e=function(e){return i.createElement(u.a.Consumer,null,(function(n){Object(c.c)(n);var r=e.value,o=e.children,i=Object(a.c)(e,["value","children"]),u="string"===typeof r?new Date(r||0):r;return o("formatDate"===t?n.formatDateToParts(u,i):n.formatTimeToParts(u,i))}))};return e.displayName=o[t],e}function l(t){var e=function(e){return i.createElement(u.a.Consumer,null,(function(n){Object(c.c)(n);var r=e.value,o=e.children,u=Object(a.c)(e,["value","children"]),s=n[t](r,u);if("function"===typeof o)return o(s);var l=n.textComponent||i.Fragment;return i.createElement(l,null,s)}))};return e.displayName=r[t],e}function f(t){return t}l("formatDate"),l("formatTime"),l("formatNumber"),l("formatList"),l("formatDisplayName"),s("formatDate"),s("formatTime")},Ch6y:function(t,e,n){"use strict";var r=n("VCi3"),o=n("q9+l"),a=n("fVMg"),i=n("1Mu/"),c=a("species");t.exports=function(t){var e=r(t),n=o.f;i&&e&&!e[c]&&n(e,c,{configurable:!0,get:function(){return this}})}},DEeE:function(t,e,n){var r=n("yRya"),o=n("sX5C");t.exports=Object.keys||function(t){return r(t,o)}},"DZ+c":function(t,e,n){"use strict";var r=n("uLp7"),o=n("FXyv"),a=n("ct80"),i=n("q/0V"),c=RegExp.prototype,u=c.toString,s=a((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l="toString"!=u.name;(s||l)&&r(RegExp.prototype,"toString",(function(){var t=o(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in c)?i.call(t):n)}),{unsafe:!0})},EUyq:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={LIGHT:"light",DARK:"dark"}},FYta:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return A})),n.d(e,"default",(function(){return j}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),i=n.n(a),c=n("ZVZ0"),u=n("Qi1R"),s=(n("LW0h"),n("z84I"),n("+KXO"),n("ddV6")),l=n.n(s),f=n("O94r"),p=n.n(f),v=n("Fr7r"),d=n("ToGa"),m=(n("aDaW"),function(t){var e=t.activeLabel,n=t.className,r=t.labels,o=r.length-1;return i.a.createElement("div",{className:p()("np-animated-label",n)},r.map((function(t,n){var r=n-1;return i.a.createElement("div",{key:n,className:p()("text-xs-left",{"np-animated-label--in":n===e,"np-animated-label--out":r===e&&r!==o})},t)})))});m.defaultProps={className:void 0};var y=m,g=n("/Vl7"),h=(n("ePcE"),function(t){var e=t.label,n=t.className,r=t.onClick;return i.a.createElement("button",{type:"button",className:p()("np-back-button","align-items-center","btn-unstyled",n),onClick:r},i.a.createElement(g.c,{size:24}),e)});h.defaultProps={className:void 0,label:void 0};var b=h,E=n("qGsU"),w=n("5BfY"),x=n("EUyq"),O=n("Tz8v"),T=(n("7ndt"),{"np-flow-navigation--sm":w.a.SMALL,"np-flow-navigation--lg":w.a.LARGE}),N=function(t){var e=t.activeStep,n=t.avatar,r=t.logo,o=t.onClose,c=t.onGoBack,u=t.done,s=t.steps,f=Object(a.useRef)(null),m=Object(O.a)({ref:f}),g=l()(m,1)[0],h=o&&i.a.createElement(E.a,{onClick:o}),x=g<w.a.SMALL,N=u?null:n;return i.a.createElement("div",{ref:f,className:p()("np-flow-navigation d-flex align-items-center justify-content-center p-y-3",{"np-flow-navigation--border-bottom":!u})},i.a.createElement(v.a,{className:p()("np-flow-navigation__content p-x-3",{"np-flow-navigation--hidden":!g,"np-flow-navigation--xs-max":x},Object.keys(T).filter((function(t){return g>=T[t]}))),leftContent:x?function(){var t=c&&0<e;return i.a.createElement(i.a.Fragment,null,t&&i.a.createElement(b,{label:i.a.createElement(y,{className:"m-x-1",labels:s.map((function(t){return t.label})),activeLabel:e-1}),onClick:c}),i.a.createElement("div",{className:p()("np-flow-navigation--flag",{"np-flow-navigation--flag__hidden":t,"np-flow-navigation--flag__display":!t})}))}():r,rightContent:i.a.createElement(i.a.Fragment,null,N,N&&h&&i.a.createElement("span",{className:"separator"}),h),bottomContent:!u&&i.a.createElement(d.a,{activeStep:e,steps:s,className:p()("np-flow-navigation__stepper")}),layout:g<w.a.LARGE?v.a.Layout.VERTICAL:v.a.Layout.HORIZONTAL}))};N.Theme=x.a,N.defaultProps={activeStep:0,avatar:void 0,onGoBack:void 0,onClose:void 0,done:!1};var S=N,L=n("9YZu"),R=n("zutg"),A=(i.a.createElement,{name:"FlowNavigation"}),P={meta:A};function j(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(c.a)("wrapper",Object(r.a)({},P,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)(u.b,{code:"() => {\n  const [activeStep, setActiveStep] = React.useState(0);\n  const [closed, setClosed] = React.useState(false);\n\n  return !closed ? (\n    <FlowNavigation\n      done={false}\n      avatar={\n        <AvatarWrapper\n          url=\"https://github.com/transferwise.png\"\n          profileType={AvatarWrapper.ProfileType.PERSONAL}\n        />\n      }\n      logo={\n        <img\n          alt=\"logo\"\n          src=\"./../../static/assets/img/wise_logo.svg\"\n          width=\"138\"\n          height=\"24\"\n        />\n      }\n      onClose={() => setClosed(true)}\n      onGoBack={() => setActiveStep(activeStep - 1 > 0 ? activeStep - 1 : 0)}\n      steps={[\n        {\n          label: 'Amount',\n          hoverLabel: (\n            <>\n              <div>\n                <strong>100 GBP</strong>\n              </div>\n              0.2351 ETH\n            </>\n          ),\n          onClick: () => setActiveStep(0),\n        },\n        {\n          label: 'You',\n          hoverLabel: (\n            <>\n              <div>\n                <strong>Elena Durante</strong>\n              </div>\n              elenadurante@test.com\n            </>\n          ),\n          onClick: () => setActiveStep(1),\n        },\n        { label: 'Recipient', hoverLabel: 'Daniele Tomboro', onClick: () => setActiveStep(2) },\n        { label: 'Review', hoverLabel: 'Antonio Dozortevo', onClick: () => setActiveStep(3) },\n        {\n          label: 'Pay',\n          hoverLabel: 'Enrico Gusso II',\n          onClick: () => setActiveStep(4),\n        },\n      ]}\n      activeStep={activeStep}\n    />\n  ) : null;\n};\n",scope:{FlowNavigation:S,Avatar:L.a,BriefcaseIcon:g.e,ProfileIcon:g.v,AvatarWrapper:R.a},display:"vertical",mdxType:"LiveEditorBlock"}),Object(c.a)("p",null,"Use FlowNavigation to help a user navigate through a flow. If a Stepper does not need to be included please use ",Object(c.a)("a",Object(r.a)({parentName:"p"},{href:"/components/overlays/OverlayHeader"}),"OverflowHeader")," instead.\nThe current and recommended size for logo is width = 138px height=24px."),Object(c.a)(u.a,{componentName:"FlowNavigation",mdxType:"GeneratePropsTable"}))}j.isMDXComponent=!0},Fr7r:function(t,e,n){"use strict";var r=n("ERkP"),o=n.n(r),a=n("O94r"),i=n.n(a),c=o.a.forwardRef((function(t,e){var n=t.bottomContent,r=t.className,a=t.layout,u=t.leftContent,s=t.rightContent,l=a===c.Layout.VERTICAL;return o.a.createElement("div",{className:i()("np-header","d-flex","flex-wrap",r),ref:e},o.a.createElement("div",{className:i()("align-items-center","d-flex",{"flex__item--8":l})},u),o.a.createElement("div",{className:i()("align-items-center","d-flex","justify-content-end",{"flex__item--4 ":l,"order-2":!l})},s),o.a.createElement("div",{className:i()("align-items-center","d-flex","justify-content-center",{"flex__item--12":l,"order-1 flex-grow-1":!l})},n))}));c.Layout={VERTICAL:"VERTICAL",HORIZONTAL:"HORIZONTAL"},c.defaultProps={bottomContent:void 0,className:void 0,layout:c.Layout.HORIZONTAL,leftContent:void 0,rightContent:void 0},e.a=c},KcoV:function(t,e,n){},LW0h:function(t,e,n){"use strict";var r=n("ax0f"),o=n("0FSu").filter,a=n("GJtw"),i=n("znGZ"),c=a("filter"),u=i("filter");r({target:"Array",proto:!0,forced:!c||!u},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"N+ot":function(t,e,n){var r=n("T0aG"),o=n("1Pcy");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},O94r:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&t.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&t.push(c)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},POz8:function(t,e,n){var r={};r[n("fVMg")("toStringTag")]="z",t.exports="[object z]"===String(r)},T0aG:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},ToGa:function(t,e,n){"use strict";n("2G9S"),n("z84I");var r=n("ERkP"),o=n.n(r),a=n("O94r"),i=n.n(a),c=(n("//SO"),n("7CQW"));n("7xRU"),n("iKE+"),n("KqXw"),n("DZ+c"),n("WNMA");function u(){return function(){var t=void 0!==window.ontouchstart,e="undefined"!=typeof navigator&&navigator.maxTouchPoints,n=window.DocumentTouch&&document instanceof window.DocumentTouch;return!!(t||e||n)}()||function(){var t=["android","iemobile","iphone","ipad","ipod","blackberry","bada"].map((function(t){return"(".concat(t,")")})).join("|"),e=new RegExp(t,"ig");return"undefined"!=typeof navigator&&!!navigator.userAgent.match(e)}()}var s=function(t){var e=t.steps,n=t.activeStep,r=t.className;if(0===e.length)return null;var a=function(t,e,n){return Math.max(Math.min(e,n),t)}(0,e.length-1,n),s=1/(e.length-1),l=a/(e.length-1),f=Math.max(l-s,0),p=Math.min(a,1)*s;return o.a.createElement("div",{className:i()("tw-stepper",r)},o.a.createElement("div",{className:"progress"},o.a.createElement("div",{className:"progress-bar-filler",style:{width:"".concat(100*f,"%")}}),o.a.createElement("div",{className:"progress-bar-ending",style:{width:"".concat(100*p,"%")}})),o.a.createElement("ul",{className:"tw-stepper-steps p-t-1 m-b-0"},e.map((function(t,e){var n=e===a,r=t.onClick&&!n,i=o.a.createElement("button",{type:"button",className:"btn-unstyled tw-stepper__step-label",disabled:!r,onClick:function(){return r&&t.onClick()}},o.a.createElement("small",null,t.label));return o.a.createElement("li",{key:e,style:{left:"".concat(e*s*100,"%")},className:"\n          hidden-xs\n          tw-stepper__step\n          ".concat(n?"tw-stepper__step--active":"","\n          ").concat(r?"tw-stepper__step--clickable":"","\n        ")},t.hoverLabel&&!u()?o.a.createElement(c.a,{position:c.a.Position.BOTTOM,label:t.hoverLabel},i):i)}))))};s.defaultProps={activeStep:0,className:void 0};var l=s;e.a=l},Tz8v:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("ddV6"),o=n.n(r),a=n("ERkP"),i=n("XORh"),c=n.n(i),u=a.useLayoutEffect,s=function(t){var e=t.ref,n=t.throttleMs,r=void 0===n?100:n,i=Object(a.useState)(null),s=o()(i,2),l=s[0],f=s[1];return u((function(){var t=function(){e&&(e.innerWidth?f(e.innerWidth):e.current&&f(e.current.clientWidth))},n=c()(t,r);return window.addEventListener("resize",n,!0),t(),function(){return window.removeEventListener("resize",n,!0)}}),[]),[l]};s.THROTTLE_MS=100},Ua7V:function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}},UmhL:function(t,e,n){"use strict";var r=n("POz8"),o=n("2gZs");t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},VehP:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},VrFO:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},WNMA:function(t,e,n){"use strict";var r=n("lbJE"),o=n("FXyv"),a=n("tJVe"),i=n("cww3"),c=n("4/YM"),u=n("34wW");r("match",1,(function(t,e,n){return[function(e){var n=i(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var i=o(t),s=String(this);if(!i.global)return u(i,s);var l=i.unicode;i.lastIndex=0;for(var f,p=[],v=0;null!==(f=u(i,s));){var d=String(f[0]);p[v]=d,""===d&&(i.lastIndex=c(s,a(i.lastIndex),l)),v++}return 0===v?null:p}]}))},XORh:function(t,e,n){(function(e){var n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,i=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,s=c||u||Function("return this")(),l=Object.prototype.toString,f=Math.max,p=Math.min,v=function(){return s.Date.now()};function d(t,e,n){var r,o,a,i,c,u,s=0,l=!1,d=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(e){var n=r,a=o;return r=o=void 0,s=e,i=t.apply(a,n)}function b(t){return s=t,c=setTimeout(w,e),l?h(t):i}function E(t){var n=t-u;return void 0===u||n>=e||n<0||d&&t-s>=a}function w(){var t=v();if(E(t))return x(t);c=setTimeout(w,function(t){var n=e-(t-u);return d?p(n,a-(t-s)):n}(t))}function x(t){return c=void 0,g&&r?h(t):(r=o=void 0,i)}function O(){var t=v(),n=E(t);if(r=arguments,o=this,u=t,n){if(void 0===c)return b(u);if(d)return c=setTimeout(w,e),h(u)}return void 0===c&&(c=setTimeout(w,e)),i}return e=y(e)||0,m(n)&&(l=!!n.leading,a=(d="maxWait"in n)?f(y(n.maxWait)||0,e):a,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==c&&clearTimeout(c),s=0,r=u=o=c=void 0},O.flush=function(){return void 0===c?i:x(v())},O}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var c=o.test(t);return c||a.test(t)?i(t.slice(2),c?2:8):r.test(t)?NaN:+t}t.exports=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return m(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),d(t,e,{leading:r,maxWait:e,trailing:o})}}).call(this,n("lpmq"))},Y9Ll:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},YAkj:function(t,e,n){var r=n("1Mu/"),o=n("DEeE"),a=n("N4z3"),i=n("4Sk5").f,c=function(t){return function(e){for(var n,c=a(e),u=o(c),s=u.length,l=0,f=[];s>l;)n=u[l++],r&&!i.call(c,n)||f.push(t?[n,c[n]]:c[n]);return f}};t.exports={entries:c(!0),values:c(!1)}},ddV6:function(t,e,n){var r=n("qPgQ"),o=n("Ua7V"),a=n("peMk"),i=n("f2kJ");t.exports=function(t,e){return r(t)||o(t,e)||a(t,e)||i()}},eKd8:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",CENTER:"center",LEFT:"left",LEFT_TOP:"left-top",RIGHT:"right",RIGHT_TOP:"right-top",TOP:"top"}},f2kJ:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},gxsa:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation/FlowNavigation",function(){return n("FYta")}])},"iKE+":function(t,e,n){var r=n("1Mu/"),o=n("9JhN"),a=n("66wQ"),i=n("j6nH"),c=n("q9+l").f,u=n("ZdBB").f,s=n("jl0/"),l=n("q/0V"),f=n("L2rT"),p=n("uLp7"),v=n("ct80"),d=n("zc29").set,m=n("Ch6y"),y=n("fVMg")("match"),g=o.RegExp,h=g.prototype,b=/a/g,E=/a/g,w=new g(b)!==b,x=f.UNSUPPORTED_Y;if(r&&a("RegExp",!w||x||v((function(){return E[y]=!1,g(b)!=b||g(E)==E||"/a/i"!=g(b,"i")})))){for(var O=function(t,e){var n,r=this instanceof O,o=s(t),a=void 0===e;if(!r&&o&&t.constructor===O&&a)return t;w?o&&!a&&(t=t.source):t instanceof O&&(a&&(e=l.call(t)),t=t.source),x&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var c=i(w?new g(t,e):g(t,e),r?this:h,O);return x&&n&&d(c,{sticky:n}),c},T=function(t){t in O||c(O,t,{configurable:!0,get:function(){return g[t]},set:function(e){g[t]=e}})},N=u(g),S=0;N.length>S;)T(N[S++]);h.constructor=O,O.prototype=h,p(o,"RegExp",O)}m("RegExp")},iQ7j:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},j6nH:function(t,e,n){var r=n("dSaG"),o=n("waID");t.exports=function(t,e,n){var a,i;return o&&"function"==typeof(a=e.constructor)&&a!==n&&r(i=a.prototype)&&i!==n.prototype&&o(t,i),t}},kQwz:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("ERkP"),o=n("ymT0"),a=n("yGPN");function i(){var t=r.useContext(o.a);return Object(a.c)(t),t}},peMk:function(t,e,n){var r=n("iQ7j");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},qGsU:function(t,e,n){"use strict";n("1IsZ");var r=n("ERkP"),o=n.n(r),a=n("O94r"),i=n.n(a),c=n("kQwz"),u=n("/Vl7"),s=n("BAoe"),l=Object(s.a)({ariaLabel:{id:"neptune.CloseButton.ariaLabel"}}),f=(n("KcoV"),o.a.forwardRef((function(t,e){var n=Object(c.a)(),r=t.onClick,a=t.className,s=t.size;return o.a.createElement("button",{ref:e,type:"button",className:i()("np-close-button close btn-link text-no-decoration",{"np-close-button--large":s===f.Size.LARGE},a),"aria-label":n.formatMessage(l.ariaLabel),onClick:r},o.a.createElement(u.k,{size:s}))})));f.Size={SMALL:16,LARGE:24},f.defaultProps={className:null,size:f.Size.LARGE};e.a=f},qPgQ:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},waID:function(t,e,n){var r=n("FXyv"),o=n("8+RD");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(a){}return function(n,a){return r(n),o(a),e?t.call(n,a):n.__proto__=a,n}}():void 0)},z84I:function(t,e,n){"use strict";var r=n("ax0f"),o=n("0FSu").map,a=n("GJtw"),i=n("znGZ"),c=a("map"),u=i("map");r({target:"Array",proto:!0,forced:!c||!u},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},zutg:function(t,e,n){"use strict";var r=n("ddV6"),o=n.n(r),a=n("ERkP"),i=n.n(a),c=n("/Vl7"),u=n("9YZu"),s={BUSINESS:"BUSINESS",PERSONAL:"PERSONAL"};function l(t){var e=t.url,n=t.profileType,r=Object(a.useState)(!1),l=o()(r,2),f=l[0],p=l[1],v=e&&!f,d=n===s.BUSINESS;return Object(a.useEffect)((function(){return p(!1)}),[e]),v?i.a.createElement(u.a,{type:u.a.Type.THUMBNAIL,size:u.a.Size.MEDIUM},v&&i.a.createElement("img",{src:e,alt:"avatar",onError:function(){return p(!0)}})):i.a.createElement(u.a,{type:u.a.Type.ICON,size:u.a.Size.MEDIUM},d?i.a.createElement(c.e,null):i.a.createElement(c.v,null))}l.ProfileType=s,l.defaultProps={url:"",profileType:l.ProfileType.PERSONAL};e.a=l}},[["gxsa",0,1,2,6,3,5,8,7,4]]]);