(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"//SO":function(e,t,n){},"7CQW":function(e,t,n){"use strict";n("2G9S"),n("7x/C"),n("DZ+c");var a=n("VrFO"),o=n.n(a),r=n("Y9Ll"),i=n.n(r),c=n("1Pcy"),l=n.n(c),s=n("5Yy7"),u=n.n(s),f=n("N+ot"),p=n.n(f),d=n("AuHH"),v=n.n(d),m=n("KEM+"),h=n.n(m),g=n("ERkP"),E=n.n(g),b=n("eKd8");n("7gtC");function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v()(e);if(t){var o=v()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return p()(this,n)}}var w=function(e){function t(){var e;return o()(this,t),e=n.call(this),h()(l()(e),"ensureHidden",(function(t){e.state.show||(t.stopPropagation(),e.hide())})),e.state={show:!1,tooltipId:null},e}u()(t,e);var n=y(t);return i()(t,[{key:"componentDidMount",value:function(){this.setState({tooltipId:Math.random().toString(36).substring(7)})}},{key:"show",value:function(){this.setState((function(){return{show:!0}}))}},{key:"hide",value:function(){this.setState((function(){return{show:!1}}))}},{key:"render",value:function(){var e=this,t=this.state.tooltipId,n=this.props,a=n.position,o=n.children,r=n.label,i=n.offset,c=this.elementReference&&this.tooltipReference?function(e,t,n,a){return n===b.a.TOP?{top:"".concat(e.offsetTop-t.offsetHeight-a,"px"),left:"".concat(e.offsetLeft+e.offsetWidth/2-t.offsetWidth/2,"px")}:n===b.a.LEFT?{top:"".concat(e.offsetTop+e.offsetHeight/2-t.offsetHeight/2,"px"),left:"".concat(e.offsetLeft-t.offsetWidth-a,"px")}:n===b.a.RIGHT?{top:"".concat(e.offsetTop+e.offsetHeight/2-t.offsetHeight/2,"px"),left:"".concat(e.offsetLeft+e.offsetWidth+a,"px")}:n===b.a.BOTTOM?{top:"".concat(e.offsetTop+e.offsetHeight+a,"px"),left:"".concat(e.offsetLeft+e.offsetWidth/2-t.offsetWidth/2,"px")}:{}}(this.elementReference,this.tooltipReference,a,i):{};return E.a.createElement("span",{onMouseOver:function(){return e.show()},onFocus:function(){return e.show()},onMouseOut:function(){return e.hide()},onBlur:function(){return e.hide()},ref:function(t){e.elementReference=t},"aria-describedby":t,className:"tw-tooltip-container"},E.a.createElement("div",{onMouseOver:this.ensureHidden,onFocus:this.ensureHidden,className:"tooltip fade ".concat(a," ").concat(this.state.show?"in":""),role:"tooltip",style:c,ref:function(t){e.tooltipReference=t},id:t},E.a.createElement("div",{className:"tooltip-arrow"}),E.a.createElement("div",{className:"tooltip-inner"},r)),o)}}]),t}(g.Component);w.Position=b.a,w.defaultProps={position:w.Position.TOP,offset:0};var N=w;t.a=N},"7gtC":function(e,t,n){},"7ndt":function(e,t,n){},"9YZu":function(e,t,n){"use strict";var a=n("ERkP"),o=n.n(a),r=n("O94r"),i=n.n(r),c=n("VehP"),l=n("EUyq"),s=(n("DGa2"),function(e){var t=e.backgroundColor,n=e.children,a=e.className,r=e.outlined,c=e.size,l=e.theme,s=e.type;return o.a.createElement("div",{className:i()("tw-avatar",a,"tw-avatar--".concat(c),"tw-avatar--".concat(s),"tw-avatar--".concat(l),{"tw-avatar--outlined":r})},o.a.createElement("div",{className:"tw-avatar__content",style:{backgroundColor:t||void 0}},n))});s.Size={SMALL:c.a.SMALL,MEDIUM:c.a.MEDIUM,LARGE:c.a.LARGE},s.Theme=l.a,s.Type={THUMBNAIL:"thumbnail",ICON:"icon",EMOJI:"emoji",INITIALS:"initials"},s.defaultProps={backgroundColor:null,children:null,className:null,outlined:!1,size:s.Size.MEDIUM,theme:l.a.LIGHT,type:s.Type.THUMBNAIL},t.a=s},DGa2:function(e,t,n){},EUyq:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={LIGHT:"light",DARK:"dark"}},FYta:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return C})),n.d(t,"default",(function(){return I}));var a=n("cxan"),o=n("HbGN"),r=n("ERkP"),i=n.n(r),c=n("ZVZ0"),l=n("Qi1R"),s=(n("LW0h"),n("z84I"),n("+KXO"),n("ddV6")),u=n.n(s),f=n("O94r"),p=n.n(f),d=n("Fr7r"),v=n("ToGa"),m=(n("aDaW"),function(e){var t=e.activeLabel,n=e.className,a=e.labels,o=a.length-1;return i.a.createElement("div",{className:p()("np-animated-label",n)},a.map((function(e,n){var a=n-1;return i.a.createElement("div",{key:n,className:p()("text-xs-left",{"np-animated-label--in":n===t,"np-animated-label--out":a===t&&a!==o})},e)})))});m.defaultProps={className:void 0};var h=m,g=n("/Vl7"),E=(n("ePcE"),function(e){var t=e.label,n=e.className,a=e.onClick;return i.a.createElement("button",{type:"button",className:p()("np-back-button","align-items-center","btn-unstyled",n),onClick:a},i.a.createElement(g.c,{size:24}),t)});E.defaultProps={className:void 0,label:void 0};var b=E,y=n("qGsU"),w=n("5BfY"),N=n("EUyq"),T=n("Tz8v"),O=(n("7ndt"),{"np-flow-navigation--sm":w.a.SMALL,"np-flow-navigation--lg":w.a.LARGE}),L=function(e){var t=e.activeStep,n=e.avatar,a=e.logo,o=e.onClose,c=e.onGoBack,l=e.done,s=e.steps,f=Object(r.useRef)(null),m=Object(T.a)({ref:f}),g=u()(m,1)[0],E=o&&i.a.createElement(y.a,{onClick:o}),N=l?null:n;return i.a.createElement("div",{ref:f,className:p()("np-flow-navigation d-flex align-items-center justify-content-center p-y-3",{"np-flow-navigation--border-bottom":!l})},i.a.createElement(d.a,{className:p()("np-flow-navigation__content p-x-3",{"np-flow-navigation--hidden":!g,"np-flow-navigation--xs-max":g<w.a.SMALL},Object.keys(O).filter((function(e){return g>=O[e]}))),leftContent:i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"hidden-xs"},a),function(){var e=c&&0<t;return i.a.createElement("div",{className:"visible-xs"},e&&i.a.createElement(b,{label:i.a.createElement(h,{className:"m-x-1",labels:s.map((function(e){return e.label})),activeLabel:t}),onClick:c}),i.a.createElement("div",{className:p()("np-flow-navigation--flag",{"np-flow-navigation--flag__hidden":e,"np-flow-navigation--flag__display":!e})}))}()),rightContent:i.a.createElement(i.a.Fragment,null,N,N&&E&&i.a.createElement("span",{className:"separator"}),E),bottomContent:!l&&i.a.createElement(v.a,{activeStep:t,steps:s,className:p()("np-flow-navigation__stepper")}),layout:g<w.a.LARGE?d.a.Layout.VERTICAL:d.a.Layout.HORIZONTAL}))};L.Theme=N.a,L.defaultProps={activeStep:0,avatar:void 0,onGoBack:void 0,onClose:void 0,done:!1};var S=L,x=n("9YZu"),R=n("zutg"),C=(i.a.createElement,{name:"FlowNavigation"}),A={meta:C};function I(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.a)("wrapper",Object(a.a)({},A,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)(l.b,{code:"() => {\n  const [activeStep, setActiveStep] = React.useState(0);\n  const [closed, setClosed] = React.useState(false);\n\n  return !closed ? (\n    <FlowNavigation\n      done={false}\n      avatar={\n        <AvatarWrapper\n          url=\"https://github.com/transferwise.png\"\n          profileType={AvatarWrapper.ProfileType.PERSONAL}\n        />\n      }\n      logo={\n        <img\n          alt=\"logo\"\n          src=\"./../../static/assets/img/logo_full.svg\"\n          width=\"138\"\n          width=\"138\"\n          height=\"24\"\n        />\n      }\n      onClose={() => setClosed(true)}\n      onGoBack={() => setActiveStep(activeStep - 1 > 0 ? activeStep - 1 : 0)}\n      steps={[\n        {\n          label: 'Amount',\n          hoverLabel: (\n            <>\n              <div>\n                <strong>100 GBP</strong>\n              </div>\n              0.2351 ETH\n            </>\n          ),\n          onClick: () => setActiveStep(0),\n        },\n        {\n          label: 'You',\n          hoverLabel: (\n            <>\n              <div>\n                <strong>Elena Durante</strong>\n              </div>\n              elenadurante@test.com\n            </>\n          ),\n          onClick: () => setActiveStep(1),\n        },\n        { label: 'Recipient', hoverLabel: 'Daniele Tomboro', onClick: () => setActiveStep(2) },\n        { label: 'Review', hoverLabel: 'Antonio Dozortevo', onClick: () => setActiveStep(3) },\n        {\n          label: 'Pay',\n          hoverLabel: 'Enrico Gusso II',\n          onClick: () => setActiveStep(4),\n        },\n      ]}\n      activeStep={activeStep}\n    />\n  ) : null;\n};\n",scope:{FlowNavigation:S,Avatar:x.a,BriefcaseIcon:g.d,ProfileIcon:g.t,AvatarWrapper:R.a},display:"vertical",mdxType:"LiveEditorBlock"}),Object(c.a)("p",null,"Use FlowNavigation to help a user navigate through a flow. If a Stepper does not need to be included please use ",Object(c.a)("a",Object(a.a)({parentName:"p"},{href:"/components/overlays/OverlayHeader"}),"OverflowHeader")," instead.\nThe current and recommended size for logo is width = 138px height=24px."),Object(c.a)(l.a,{componentName:"FlowNavigation",mdxType:"GeneratePropsTable"}))}I.isMDXComponent=!0},Fr7r:function(e,t,n){"use strict";var a=n("ERkP"),o=n.n(a),r=n("O94r"),i=n.n(r),c=o.a.forwardRef((function(e,t){var n=e.bottomContent,a=e.className,r=e.layout,l=e.leftContent,s=e.rightContent,u=r===c.Layout.VERTICAL;return o.a.createElement("div",{className:i()("np-header","d-flex","flex-wrap",a),ref:t},o.a.createElement("div",{className:i()("align-items-center","d-flex",{"flex__item--8":u})},l),o.a.createElement("div",{className:i()("align-items-center","d-flex","justify-content-end",{"flex__item--4 ":u,"order-2":!u})},s),o.a.createElement("div",{className:i()("align-items-center","d-flex","justify-content-center",{"flex__item--12":u,"order-1 flex-grow-1":!u})},n))}));c.Layout={VERTICAL:"VERTICAL",HORIZONTAL:"HORIZONTAL"},c.defaultProps={bottomContent:void 0,className:void 0,layout:c.Layout.HORIZONTAL,leftContent:void 0,rightContent:void 0},t.a=c},ToGa:function(e,t,n){"use strict";n("2G9S"),n("z84I");var a=n("ERkP"),o=n.n(a),r=n("O94r"),i=n.n(r),c=(n("//SO"),n("7CQW"));n("7xRU"),n("iKE+"),n("KqXw"),n("DZ+c"),n("WNMA");function l(){return function(){var e=void 0!==window.ontouchstart,t="undefined"!=typeof navigator&&navigator.maxTouchPoints,n=window.DocumentTouch&&document instanceof window.DocumentTouch;return!!(e||t||n)}()||function(){var e=["android","iemobile","iphone","ipad","ipod","blackberry","bada"].map((function(e){return"(".concat(e,")")})).join("|"),t=new RegExp(e,"ig");return"undefined"!=typeof navigator&&!!navigator.userAgent.match(t)}()}var s=function(e){var t=e.steps,n=e.activeStep,a=e.className;if(0===t.length)return null;var r=function(e,t,n){return Math.max(Math.min(t,n),e)}(0,t.length-1,n),s=1/(t.length-1),u=r/(t.length-1),f=Math.max(u-s,0),p=Math.min(r,1)*s;return o.a.createElement("div",{className:i()("tw-stepper",a)},o.a.createElement("div",{className:"progress"},o.a.createElement("div",{className:"progress-bar-filler",style:{width:"".concat(100*f,"%")}}),o.a.createElement("div",{className:"progress-bar-ending",style:{width:"".concat(100*p,"%")}})),o.a.createElement("ul",{className:"tw-stepper-steps p-t-1 m-b-0"},t.map((function(e,t){var n=t===r,a=e.onClick&&!n,i=o.a.createElement("button",{type:"button",className:"btn-unstyled tw-stepper__step-label",disabled:!a,onClick:function(){return a&&e.onClick()}},o.a.createElement("small",null,e.label));return o.a.createElement("li",{key:t,style:{left:"".concat(t*s*100,"%")},className:"\n          hidden-xs\n          tw-stepper__step\n          ".concat(n?"tw-stepper__step--active":"","\n          ").concat(a?"tw-stepper__step--clickable":"","\n        ")},e.hoverLabel&&!l()?o.a.createElement(c.a,{position:c.a.Position.BOTTOM,label:e.hoverLabel},i):i)}))))};s.defaultProps={activeStep:0,className:void 0};var u=s;t.a=u},Tz8v:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("ddV6"),o=n.n(a),r=n("ERkP"),i=n("XORh"),c=n.n(i),l=r.useLayoutEffect,s=function(e){var t=e.ref,n=e.throttleMs,a=void 0===n?100:n,i=Object(r.useState)(null),s=o()(i,2),u=s[0],f=s[1],p=function(){t&&t.current&&f(t.current.clientWidth)};return l((function(){return window.addEventListener("resize",c()(p,a)),p(),function(){return window.removeEventListener("resize",p)}}),[]),[u]};s.THROTTLE_MS=100},XORh:function(e,t,n){(function(t){var n=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),u=Object.prototype.toString,f=Math.max,p=Math.min,d=function(){return s.Date.now()};function v(e,t,n){var a,o,r,i,c,l,s=0,u=!1,v=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function E(t){var n=a,r=o;return a=o=void 0,s=t,i=e.apply(r,n)}function b(e){return s=e,c=setTimeout(w,t),u?E(e):i}function y(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-s>=r}function w(){var e=d();if(y(e))return N(e);c=setTimeout(w,function(e){var n=t-(e-l);return v?p(n,r-(e-s)):n}(e))}function N(e){return c=void 0,g&&a?E(e):(a=o=void 0,i)}function T(){var e=d(),n=y(e);if(a=arguments,o=this,l=e,n){if(void 0===c)return b(l);if(v)return c=setTimeout(w,t),E(l)}return void 0===c&&(c=setTimeout(w,t)),i}return t=h(t)||0,m(n)&&(u=!!n.leading,r=(v="maxWait"in n)?f(h(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==c&&clearTimeout(c),s=0,a=l=o=c=void 0},T.flush=function(){return void 0===c?i:N(d())},T}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var c=o.test(e);return c||r.test(e)?i(e.slice(2),c?2:8):a.test(e)?NaN:+e}e.exports=function(e,t,n){var a=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return m(n)&&(a="leading"in n?!!n.leading:a,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:a,maxWait:t,trailing:o})}}).call(this,n("lpmq"))},aDaW:function(e,t,n){},ePcE:function(e,t,n){},zutg:function(e,t,n){"use strict";var a=n("ddV6"),o=n.n(a),r=n("ERkP"),i=n.n(r),c=n("/Vl7"),l=n("9YZu"),s={BUSINESS:"BUSINESS",PERSONAL:"PERSONAL"};function u(e){var t=e.url,n=e.profileType,a=Object(r.useState)(!1),u=o()(a,2),f=u[0],p=u[1],d=t&&!f,v=n===s.BUSINESS;return Object(r.useEffect)((function(){return p(!1)}),[t]),i.a.createElement(i.a.Fragment,null,v&&i.a.createElement(l.a,{type:l.a.Type.ICON,size:l.a.Size.MEDIUM},i.a.createElement(c.d,null)),!v&&!d&&i.a.createElement(l.a,{type:l.a.Type.ICON,size:l.a.Size.MEDIUM},i.a.createElement(c.t,null)),!v&&d&&i.a.createElement(l.a,{type:l.a.Type.THUMBNAIL,size:l.a.Size.MEDIUM},d&&i.a.createElement("img",{src:t,alt:"avatar",onError:function(){return p(!0)}})))}u.ProfileType=s,u.defaultProps={url:"",profileType:u.ProfileType.PERSONAL};t.a=u}}]);