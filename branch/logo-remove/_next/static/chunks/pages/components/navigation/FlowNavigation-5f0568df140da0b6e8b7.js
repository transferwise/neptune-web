_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[94],{"1Pcy":function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},"2G9S":function(t,e,n){"use strict";var o=n("ax0f"),r=n("ct80"),a=n("xt6W"),i=n("dSaG"),c=n("N9G2"),s=n("tJVe"),u=n("2sZ7"),l=n("aoZ+"),f=n("GJtw"),p=n("fVMg"),v=n("T+0C"),d=p("isConcatSpreadable"),m=v>=51||!r((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),h=f("concat"),y=function(t){if(!i(t))return!1;var e=t[d];return void 0!==e?!!e:a(t)};o({target:"Array",proto:!0,forced:!m||!h},{concat:function(t){var e,n,o,r,a,i=c(this),f=l(i,0),p=0;for(e=-1,o=arguments.length;e<o;e++)if(y(a=-1===e?i:arguments[e])){if(p+(r=s(a.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<r;n++,p++)n in a&&u(f,p,a[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");u(f,p++,a)}return f.length=p,f}})},"2gZs":function(t,e,n){var o=n("POz8"),r=n("amH4"),a=n("fVMg")("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=o?r:function(t){var e,n,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=Object(t),a))?n:i?r(e):"Object"==(o=r(e))&&"function"==typeof e.callee?"Arguments":o}},"2sZ7":function(t,e,n){"use strict";var o=n("CD8Q"),r=n("q9+l"),a=n("lhjL");t.exports=function(t,e,n){var i=o(e);i in t?r.f(t,i,a(0,n)):t[i]=n}},"5BfY":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={EXTRA_SMALL:480,SMALL:576,MEDIUM:768,LARGE:992,EXTRA_LARGE:1200}},"5Yy7":function(t,e,n){var o=n("695J");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},"695J":function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},"7CQW":function(t,e,n){"use strict";n("2G9S"),n("7x/C"),n("DZ+c");var o=n("VrFO"),r=n.n(o),a=n("Y9Ll"),i=n.n(a),c=n("1Pcy"),s=n.n(c),u=n("5Yy7"),l=n.n(u),f=n("N+ot"),p=n.n(f),v=n("AuHH"),d=n.n(v),m=n("KEM+"),h=n.n(m),y=n("ERkP"),g=n.n(y),b=n("eKd8");n("7gtC");function E(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=d()(t);if(e){var r=d()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return p()(this,n)}}var w=function(t){function e(){var t;return r()(this,e),t=n.call(this),h()(s()(t),"ensureHidden",(function(e){t.state.show||(e.stopPropagation(),t.hide())})),t.state={show:!1,tooltipId:null},t}l()(e,t);var n=E(e);return i()(e,[{key:"componentDidMount",value:function(){this.setState({tooltipId:Math.random().toString(36).substring(7)})}},{key:"show",value:function(){this.setState((function(){return{show:!0}}))}},{key:"hide",value:function(){this.setState((function(){return{show:!1}}))}},{key:"render",value:function(){var t=this,e=this.state.tooltipId,n=this.props,o=n.position,r=n.children,a=n.label,i=n.offset,c=this.elementReference&&this.tooltipReference?function(t,e,n,o){return n===b.a.TOP?{top:"".concat(t.offsetTop-e.offsetHeight-o,"px"),left:"".concat(t.offsetLeft+t.offsetWidth/2-e.offsetWidth/2,"px")}:n===b.a.LEFT?{top:"".concat(t.offsetTop+t.offsetHeight/2-e.offsetHeight/2,"px"),left:"".concat(t.offsetLeft-e.offsetWidth-o,"px")}:n===b.a.RIGHT?{top:"".concat(t.offsetTop+t.offsetHeight/2-e.offsetHeight/2,"px"),left:"".concat(t.offsetLeft+t.offsetWidth+o,"px")}:n===b.a.BOTTOM?{top:"".concat(t.offsetTop+t.offsetHeight+o,"px"),left:"".concat(t.offsetLeft+t.offsetWidth/2-e.offsetWidth/2,"px")}:{}}(this.elementReference,this.tooltipReference,o,i):{};return g.a.createElement("span",{onMouseOver:function(){return t.show()},onFocus:function(){return t.show()},onMouseOut:function(){return t.hide()},onBlur:function(){return t.hide()},ref:function(e){t.elementReference=e},"aria-describedby":e,className:"tw-tooltip-container"},g.a.createElement("div",{onMouseOver:this.ensureHidden,onFocus:this.ensureHidden,className:"tooltip fade ".concat(o," ").concat(this.state.show?"in":""),role:"tooltip",style:c,ref:function(e){t.tooltipReference=e},id:e},g.a.createElement("div",{className:"tooltip-arrow"}),g.a.createElement("div",{className:"tooltip-inner"},a)),r)}}]),e}(y.Component);w.Position=b.a,w.defaultProps={position:w.Position.TOP,offset:0};var x=w;e.a=x},"7x/C":function(t,e,n){var o=n("POz8"),r=n("uLp7"),a=n("UmhL");o||r(Object.prototype,"toString",a,{unsafe:!0})},"8+RD":function(t,e,n){var o=n("dSaG");t.exports=function(t){if(!o(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"9YZu":function(t,e,n){"use strict";var o=n("ERkP"),r=n.n(o),a=n("O94r"),i=n.n(a),c=n("VehP"),s=n("EUyq"),u=(n("DGa2"),function(t){var e=t.backgroundColor,n=t.children,o=t.className,a=t.outlined,c=t.size,s=t.theme,u=t.type;return r.a.createElement("div",{className:i()("tw-avatar",o,"tw-avatar--".concat(c),"tw-avatar--".concat(u),"tw-avatar--".concat(s),{"tw-avatar--outlined":a})},r.a.createElement("div",{className:"tw-avatar__content",style:{backgroundColor:e||void 0}},n))});u.Size={SMALL:c.a.SMALL,MEDIUM:c.a.MEDIUM,LARGE:c.a.LARGE},u.Theme=s.a,u.Type={THUMBNAIL:"thumbnail",ICON:"icon",EMOJI:"emoji",INITIALS:"initials"},u.defaultProps={backgroundColor:null,children:null,className:null,outlined:!1,size:u.Size.MEDIUM,theme:s.a.LIGHT,type:u.Type.THUMBNAIL},e.a=u},AuHH:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},Ch6y:function(t,e,n){"use strict";var o=n("VCi3"),r=n("q9+l"),a=n("fVMg"),i=n("1Mu/"),c=a("species");t.exports=function(t){var e=o(t),n=r.f;i&&e&&!e[c]&&n(e,c,{configurable:!0,get:function(){return this}})}},EUyq:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={LIGHT:"light",DARK:"dark"}},FYta:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return R})),n.d(e,"default",(function(){return M}));var o=n("cxan"),r=n("HbGN"),a=n("ERkP"),i=n.n(a),c=n("ZVZ0"),s=n("Qi1R"),u=(n("z84I"),n("ddV6")),l=n.n(u),f=n("O94r"),p=n.n(f),v=n("Fr7r"),d=n("ToGa"),m=(n("aDaW"),function(t){var e=t.activeLabel,n=t.className,o=t.labels,r=o.length-1;return i.a.createElement("div",{className:p()("np-animated-label",n)},o.map((function(t,n){var o=n-1;return i.a.createElement("div",{key:n,className:p()("text-xs-left",{"np-animated-label--in":n===e,"np-animated-label--out":o===e&&o!==r})},t)})))});m.defaultProps={className:void 0};var h=m,y=n("/Vl7"),g=(n("ePcE"),function(t){var e=t.label,n=t.className,o=t.onClick;return i.a.createElement("button",{type:"button",className:p()("np-back-button","align-items-center","btn-unstyled",n),onClick:o},i.a.createElement(y.c,{size:24}),e)});g.defaultProps={className:void 0,label:void 0};var b=g,E=n("qGsU"),w=n("EUyq"),x=(n("xPve"),function t(e){var n,o=e.className,r=e.theme;return e.type===t.Type.FLAG?n=["flag","flag-info"]:(n=["logo","logo-3"],r===t.Theme.DARK?n.push("logo-inverse"):n.push("logo-primary")),i.a.createElement("div",{className:p()("np-logo",n,o)})});x.Theme=w.a,x.Type={FULL:"FULL",FLAG:"FLAG"},x.defaultProps={className:void 0,theme:w.a.LIGHT,type:x.Type.FULL};var T=x,O=n("5BfY"),L=n("Tz8v"),N=(n("7ndt"),function(t){var e=t.activeStep,n=t.avatar,o=t.logo,r=t.onClose,c=t.onGoBack,s=t.steps,u=Object(a.useRef)(null),f=Object(L.a)({ref:u}),m=l()(f,1)[0],y=r&&i.a.createElement(E.a,{onClick:r}),g=m<O.a.MEDIUM;return i.a.createElement(v.a,{ref:u,className:p()("np-flow-navigation",{"np-flow-navigation--hidden":!m,"np-flow-navigation--large":!g,"np-flow-navigation--small":g}),leftContent:i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"hidden-xs"},o),i.a.createElement("div",{className:"visible-xs"},c&&0<e&&i.a.createElement(b,{label:i.a.createElement(h,{className:"m-x-1",labels:s.map((function(t){return t.label})),activeLabel:e}),onClick:c}),i.a.createElement(T,{className:p()("np-flow-navigation--logo",{"np-flow-navigation--logo__hidden":e,"np-flow-navigation--logo__display":!e})}))),rightContent:i.a.createElement(i.a.Fragment,null,n,n&&y&&i.a.createElement("span",{className:"separator"}),y),bottomContent:i.a.createElement(d.a,{activeStep:e,steps:s,className:p()("np-flow-navigation__stepper m-t-1")}),layout:g?v.a.Layout.VERTICAL:v.a.Layout.HORIZONTAL})});N.Theme=w.a,N.defaultProps={activeStep:0,avatar:void 0,onGoBack:void 0,onClose:void 0};var S=N,A=n("9YZu"),R=(i.a.createElement,{name:"FlowNavigation"}),_={meta:R};function M(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(c.a)("wrapper",Object(o.a)({},_,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)(s.b,{code:"() => {\n  const [activeStep, setActiveStep] = React.useState(0);\n  const [closed, setClosed] = React.useState(false);\n\n  return !closed ? (\n    <FlowNavigation\n      avatar={\n        <Avatar type={Avatar.Type.ICON} size={Avatar.Size.MEDIUM}>\n          <ProfileIcon />\n        </Avatar>\n      }\n      logo={\n        <img\n          alt=\"logo\"\n          src=\"https://transferwise.com/public-resources/assets/logos/transferwise/logo.svg\"\n          width=\"138\"\n          height=\"24\"\n        />\n      }\n      onClose={() => setClosed(true)}\n      onGoBack={() => setActiveStep(activeStep - 1 > 0 ? activeStep - 1 : 0)}\n      steps={[\n        {\n          label: 'Amount',\n          hoverLabel: (\n            <>\n              <div>\n                <strong>100 GBP</strong>\n              </div>\n              0.2351 ETH\n            </>\n          ),\n          onClick: () => setActiveStep(0),\n        },\n        {\n          label: 'You',\n          hoverLabel: (\n            <>\n              <div>\n                <strong>Elena Durante</strong>\n              </div>\n              elenadurante@test.com\n            </>\n          ),\n          onClick: () => setActiveStep(1),\n        },\n        { label: 'Recipient', hoverLabel: 'Daniele Tomboro', onClick: () => setActiveStep(2) },\n        { label: 'Review', hoverLabel: 'Antonio Dozortevo', onClick: () => setActiveStep(3) },\n        {\n          label: 'Pay',\n          hoverLabel: 'Enrico Gusso II',\n          onClick: () => setActiveStep(4),\n        },\n      ]}\n      activeStep={activeStep}\n    />\n  ) : null;\n};\n",scope:{FlowNavigation:S,Avatar:A.a,BriefcaseIcon:y.d,ProfileIcon:y.t},display:"vertical",mdxType:"LiveEditorBlock"}),Object(c.a)("p",null,"Use FlowNavigation to help a user navigate through a flow. If a Stepper does not need to be included please use ",Object(c.a)("a",Object(o.a)({parentName:"p"},{href:"/components/overlays/OverlayHeader"}),"OverflowHeader")," instead."),Object(c.a)(s.a,{componentName:"FlowNavigation",mdxType:"GeneratePropsTable"}))}M.isMDXComponent=!0},Fr7r:function(t,e,n){"use strict";var o=n("ERkP"),r=n.n(o),a=n("O94r"),i=n.n(a),c=r.a.forwardRef((function(t,e){var n=t.bottomContent,o=t.className,a=t.layout,s=t.leftContent,u=t.rightContent,l=a===c.Layout.VERTICAL;return r.a.createElement("div",{className:i()("np-header","d-flex","flex-wrap",o),ref:e},r.a.createElement("div",{className:i()("align-items-center","d-flex",{"flex__item--8":l})},s),r.a.createElement("div",{className:i()("align-items-center","d-flex","justify-content-end",{"flex__item--4 ":l,"order-2":!l})},u),r.a.createElement("div",{className:i()("align-items-center","d-flex","justify-content-center",{"flex__item--12":l,"order-1 flex-grow-1":!l})},n))}));c.Layout={VERTICAL:"VERTICAL",HORIZONTAL:"HORIZONTAL"},c.defaultProps={bottomContent:void 0,className:void 0,layout:c.Layout.HORIZONTAL,leftContent:void 0,rightContent:void 0},e.a=c},"N+ot":function(t,e,n){var o=n("T0aG"),r=n("1Pcy");t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?r(t):e}},O94r:function(t,e,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var a=typeof o;if("string"===a||"number"===a)t.push(o);else if(Array.isArray(o)&&o.length){var i=r.apply(null,o);i&&t.push(i)}else if("object"===a)for(var c in o)n.call(o,c)&&o[c]&&t.push(c)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(o=function(){return r}.apply(e,[]))||(t.exports=o)}()},POz8:function(t,e,n){var o={};o[n("fVMg")("toStringTag")]="z",t.exports="[object z]"===String(o)},T0aG:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},ToGa:function(t,e,n){"use strict";n("2G9S"),n("z84I");var o=n("ERkP"),r=n.n(o),a=n("O94r"),i=n.n(a),c=(n("//SO"),n("7CQW"));n("7xRU"),n("iKE+"),n("KqXw"),n("DZ+c"),n("WNMA");function s(){return function(){var t=void 0!==window.ontouchstart,e="undefined"!=typeof navigator&&navigator.maxTouchPoints,n=window.DocumentTouch&&document instanceof window.DocumentTouch;return!!(t||e||n)}()||function(){var t=["android","iemobile","iphone","ipad","ipod","blackberry","bada"].map((function(t){return"(".concat(t,")")})).join("|"),e=new RegExp(t,"ig");return"undefined"!=typeof navigator&&!!navigator.userAgent.match(e)}()}var u=function(t){var e=t.steps,n=t.activeStep,o=t.className;if(0===e.length)return null;var a=function(t,e,n){return Math.max(Math.min(e,n),t)}(0,e.length-1,n),u=1/(e.length-1),l=a/(e.length-1),f=Math.max(l-u,0),p=Math.min(a,1)*u;return r.a.createElement("div",{className:i()("tw-stepper",o)},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar-filler",style:{width:"".concat(100*f,"%")}}),r.a.createElement("div",{className:"progress-bar-ending",style:{width:"".concat(100*p,"%")}})),r.a.createElement("ul",{className:"tw-stepper-steps p-t-1 m-b-0"},e.map((function(t,e){var n=e===a,o=t.onClick&&!n,i=r.a.createElement("button",{type:"button",className:"btn-unstyled tw-stepper__step-label",disabled:!o,onClick:function(){return o&&t.onClick()}},r.a.createElement("small",null,t.label));return r.a.createElement("li",{key:e,style:{left:"".concat(e*u*100,"%")},className:"\n          hidden-xs\n          tw-stepper__step\n          ".concat(n?"tw-stepper__step--active":"","\n          ").concat(o?"tw-stepper__step--clickable":"","\n        ")},t.hoverLabel&&!s()?r.a.createElement(c.a,{position:c.a.Position.BOTTOM,label:t.hoverLabel},i):i)}))))};u.defaultProps={activeStep:0,className:void 0};var l=u;e.a=l},Tz8v:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var o=n("ddV6"),r=n.n(o),a=n("ERkP"),i=n("XORh"),c=n.n(i),s=a.useLayoutEffect,u=function(t){var e=t.ref,n=t.throttleMs,o=void 0===n?100:n,i=Object(a.useState)(null),u=r()(i,2),l=u[0],f=u[1],p=function(){e&&e.current&&f(e.current.clientWidth)};return s((function(){return window.addEventListener("resize",c()(p,o)),p(),function(){return window.removeEventListener("resize",p)}}),[]),[l]};u.THROTTLE_MS=100},Ua7V:function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,r=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(o=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);o=!0);}catch(s){r=!0,a=s}finally{try{o||null==c.return||c.return()}finally{if(r)throw a}}return n}}},UmhL:function(t,e,n){"use strict";var o=n("POz8"),r=n("2gZs");t.exports=o?{}.toString:function(){return"[object "+r(this)+"]"}},VehP:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},VrFO:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},WNMA:function(t,e,n){"use strict";var o=n("lbJE"),r=n("FXyv"),a=n("tJVe"),i=n("cww3"),c=n("4/YM"),s=n("34wW");o("match",1,(function(t,e,n){return[function(e){var n=i(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,n):new RegExp(e)[t](String(n))},function(t){var o=n(e,t,this);if(o.done)return o.value;var i=r(t),u=String(this);if(!i.global)return s(i,u);var l=i.unicode;i.lastIndex=0;for(var f,p=[],v=0;null!==(f=s(i,u));){var d=String(f[0]);p[v]=d,""===d&&(i.lastIndex=c(u,a(i.lastIndex),l)),v++}return 0===v?null:p}]}))},XORh:function(t,e,n){(function(e){var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,i=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,u=c||s||Function("return this")(),l=Object.prototype.toString,f=Math.max,p=Math.min,v=function(){return u.Date.now()};function d(t,e,n){var o,r,a,i,c,s,u=0,l=!1,d=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,a=r;return o=r=void 0,u=e,i=t.apply(a,n)}function b(t){return u=t,c=setTimeout(w,e),l?g(t):i}function E(t){var n=t-s;return void 0===s||n>=e||n<0||d&&t-u>=a}function w(){var t=v();if(E(t))return x(t);c=setTimeout(w,function(t){var n=e-(t-s);return d?p(n,a-(t-u)):n}(t))}function x(t){return c=void 0,y&&o?g(t):(o=r=void 0,i)}function T(){var t=v(),n=E(t);if(o=arguments,r=this,s=t,n){if(void 0===c)return b(s);if(d)return c=setTimeout(w,e),g(s)}return void 0===c&&(c=setTimeout(w,e)),i}return e=h(e)||0,m(n)&&(l=!!n.leading,a=(d="maxWait"in n)?f(h(n.maxWait)||0,e):a,y="trailing"in n?!!n.trailing:y),T.cancel=function(){void 0!==c&&clearTimeout(c),u=0,o=s=r=c=void 0},T.flush=function(){return void 0===c?i:x(v())},T}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var c=r.test(t);return c||a.test(t)?i(t.slice(2),c?2:8):o.test(t)?NaN:+t}t.exports=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return m(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),d(t,e,{leading:o,maxWait:e,trailing:r})}}).call(this,n("lpmq"))},Y9Ll:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},ddV6:function(t,e,n){var o=n("qPgQ"),r=n("Ua7V"),a=n("peMk"),i=n("f2kJ");t.exports=function(t,e){return o(t)||r(t,e)||a(t,e)||i()}},eKd8:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top",CENTER:"center"}},f2kJ:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},gxsa:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation/FlowNavigation",function(){return n("FYta")}])},"iKE+":function(t,e,n){var o=n("1Mu/"),r=n("9JhN"),a=n("66wQ"),i=n("j6nH"),c=n("q9+l").f,s=n("ZdBB").f,u=n("jl0/"),l=n("q/0V"),f=n("L2rT"),p=n("uLp7"),v=n("ct80"),d=n("zc29").set,m=n("Ch6y"),h=n("fVMg")("match"),y=r.RegExp,g=y.prototype,b=/a/g,E=/a/g,w=new y(b)!==b,x=f.UNSUPPORTED_Y;if(o&&a("RegExp",!w||x||v((function(){return E[h]=!1,y(b)!=b||y(E)==E||"/a/i"!=y(b,"i")})))){for(var T=function(t,e){var n,o=this instanceof T,r=u(t),a=void 0===e;if(!o&&r&&t.constructor===T&&a)return t;w?r&&!a&&(t=t.source):t instanceof T&&(a&&(e=l.call(t)),t=t.source),x&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var c=i(w?new y(t,e):y(t,e),o?this:g,T);return x&&n&&d(c,{sticky:n}),c},O=function(t){t in T||c(T,t,{configurable:!0,get:function(){return y[t]},set:function(e){y[t]=e}})},L=s(y),N=0;L.length>N;)O(L[N++]);g.constructor=T,T.prototype=g,p(r,"RegExp",T)}m("RegExp")},iQ7j:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}},j6nH:function(t,e,n){var o=n("dSaG"),r=n("waID");t.exports=function(t,e,n){var a,i;return r&&"function"==typeof(a=e.constructor)&&a!==n&&o(i=a.prototype)&&i!==n.prototype&&r(t,i),t}},kQwz:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("ERkP"),r=n("ymT0"),a=n("yGPN");function i(){var t=o.useContext(r.a);return Object(a.c)(t),t}},peMk:function(t,e,n){var o=n("iQ7j");t.exports=function(t,e){if(t){if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}},qGsU:function(t,e,n){"use strict";var o=n("ERkP"),r=n.n(o),a=n("O94r"),i=n.n(a),c=n("kQwz"),s=n("/Vl7"),u=n("BAoe"),l=Object(u.a)({ariaLabel:{id:"neptune.CloseButton.ariaLabel"}}),f=(n("KcoV"),function(t){var e=t.onClick,n=t.className,o=Object(c.a)();return r.a.createElement("button",{type:"button",className:i()("np-close-button","btn-link","text-no-decoration",n),"aria-label":o.formatMessage(l.ariaLabel),onClick:e},r.a.createElement(s.j,{size:24}))});f.defaultProps={className:null};e.a=f},qPgQ:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},waID:function(t,e,n){var o=n("FXyv"),r=n("8+RD");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(a){}return function(n,a){return o(n),r(a),e?t.call(n,a):n.__proto__=a,n}}():void 0)},z84I:function(t,e,n){"use strict";var o=n("ax0f"),r=n("0FSu").map,a=n("GJtw"),i=n("znGZ"),c=a("map"),s=i("map");o({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})}},[["gxsa",0,1,2,6,3,5,7,13,4]]]);