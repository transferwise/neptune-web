(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"//SO":function(e,t,n){},"3IAW":function(e,t,n){"use strict";var a=n("ERkP"),o=n.n(a),r=n("O94r"),i=n.n(r),c=n("EUyq"),l=function(e){var t=e.theme,n=e.onGoBack;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:i()("logo","logo-3","hidden-xs",{"logo-primary":t===c.a.LIGHT,"logo-inverse":t===c.a.DARK})}),o.a.createElement("div",{className:i()("flag","flag-info","logo-3","visible-xs",{"flag--hidden":n})}))};l.defaultProps={theme:c.a.LIGHT,onGoBack:null};var s=l;t.a=s},"7CQW":function(e,t,n){"use strict";n("2G9S"),n("7x/C"),n("OZaJ"),n("DZ+c");var a=n("VrFO"),o=n.n(a),r=n("Y9Ll"),i=n.n(r),c=n("1Pcy"),l=n.n(c),s=n("5Yy7"),u=n.n(s),f=n("N+ot"),p=n.n(f),m=n("AuHH"),v=n.n(m),d=n("KEM+"),h=n.n(d),g=n("ERkP"),E=n.n(g),w=n("eKd8");n("7gtC");function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v()(e);if(t){var o=v()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return p()(this,n)}}var y=function(e){function t(){var e;return o()(this,t),e=n.call(this),h()(l()(e),"ensureHidden",(function(t){e.state.show||(t.stopPropagation(),e.hide())})),e.state={show:!1,tooltipId:null},e}u()(t,e);var n=b(t);return i()(t,[{key:"componentDidMount",value:function(){this.setState({tooltipId:Math.random().toString(36).substring(7)})}},{key:"show",value:function(){this.setState((function(){return{show:!0}}))}},{key:"hide",value:function(){this.setState((function(){return{show:!1}}))}},{key:"render",value:function(){var e=this,t=this.state.tooltipId,n=this.props,a=n.position,o=n.children,r=n.label,i=n.offset,c=this.elementReference&&this.tooltipReference?function(e,t,n,a){return n===w.b.TOP?{top:"".concat(e.offsetTop-t.offsetHeight-a,"px"),left:"".concat(e.offsetLeft+e.offsetWidth/2-t.offsetWidth/2,"px")}:n===w.b.LEFT?{top:"".concat(e.offsetTop+e.offsetHeight/2-t.offsetHeight/2,"px"),left:"".concat(e.offsetLeft-t.offsetWidth-a,"px")}:n===w.b.RIGHT?{top:"".concat(e.offsetTop+e.offsetHeight/2-t.offsetHeight/2,"px"),left:"".concat(e.offsetLeft+e.offsetWidth+a,"px")}:n===w.b.BOTTOM?{top:"".concat(e.offsetTop+e.offsetHeight+a,"px"),left:"".concat(e.offsetLeft+e.offsetWidth/2-t.offsetWidth/2,"px")}:{}}(this.elementReference,this.tooltipReference,a,i):{};return E.a.createElement("span",{onMouseOver:function(){return e.show()},onFocus:function(){return e.show()},onMouseOut:function(){return e.hide()},onBlur:function(){return e.hide()},ref:function(t){e.elementReference=t},"aria-describedby":t,className:"tw-tooltip-container"},E.a.createElement("div",{onMouseOver:this.ensureHidden,onFocus:this.ensureHidden,className:"tooltip fade ".concat(a," ").concat(this.state.show?"in":""),role:"tooltip",style:c,ref:function(t){e.tooltipReference=t},id:t},E.a.createElement("div",{className:"tooltip-arrow"}),E.a.createElement("div",{className:"tooltip-inner"},r)),o)}}]),t}(g.Component);y.Position=w.b,y.defaultProps={position:y.Position.TOP,offset:0};var N=y;t.a=N},"7gtC":function(e,t,n){},"7ndt":function(e,t,n){},"9YZu":function(e,t,n){"use strict";var a=n("ERkP"),o=n.n(a),r=n("O94r"),i=n.n(r),c=n("VehP"),l=n("EUyq"),s=(n("DGa2"),function(e){var t=e.backgroundColor,n=e.children,a=e.className,r=e.outlined,c=e.size,l=e.theme,s=e.type;return o.a.createElement("div",{className:i()("tw-avatar",a,"tw-avatar--".concat(c),"tw-avatar--".concat(s),"tw-avatar--".concat(l),{"tw-avatar--outlined":r})},o.a.createElement("div",{className:"tw-avatar__content",style:{backgroundColor:t||void 0}},n))});s.Size={SMALL:c.a.SMALL,MEDIUM:c.a.MEDIUM,LARGE:c.a.LARGE},s.Theme=l.a,s.Type={THUMBNAIL:"thumbnail",ICON:"icon",EMOJI:"emoji",INITIALS:"initials"},s.defaultProps={backgroundColor:null,children:null,className:null,outlined:!1,size:s.Size.MEDIUM,theme:l.a.LIGHT,type:s.Type.THUMBNAIL},t.a=s},DGa2:function(e,t,n){},EUyq:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={LIGHT:"light",DARK:"dark"}},FYta:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return G})),n.d(t,"default",(function(){return D}));var a=n("cxan"),o=n("HbGN"),r=n("ERkP"),i=n.n(r),c=n("ZVZ0"),l=n("Qi1R"),s=n("O94r"),u=n.n(s),f=n("Ohp4"),p=(n("z84I"),n("7x/C"),n("OZaJ"),n("DZ+c"),n("VrFO")),m=n.n(p),v=n("Y9Ll"),d=n.n(v),h=n("5Yy7"),g=n.n(h),E=n("N+ot"),w=n.n(E),b=n("AuHH"),y=n.n(b),N=n("KEM+"),S=n.n(N),k=n("05Xt");n("ePcE");function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=y()(e);if(t){var o=y()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return w()(this,n)}}var C=function(){return i.a.createElement("svg",{width:"20",height:"16",viewBox:"0 0 20 16",xmlns:"http://www.w3.org/2000/svg",className:"m-t-1"},i.a.createElement("title",null,"ICON: Back"),i.a.createElement("path",{d:"M0 8l8-8 1.5 1.5L4 7h16v2H4l5.5 5.5L8 16",fill:"#00B9FF",fillRule:"evenodd"}))},O=function(e){function t(e){var a;return m()(this,t),(a=n.call(this,e)).state={activeStep:e.activeStep,isMovingBackward:!1},a}g()(t,e);var n=T(t);return d()(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.steps,a=t.activeStep,o=t.onGoBack;return i.a.createElement("button",{type:"button",className:"btn-unstyled visible-xs tw-flow-navigation__back-button ".concat(o?"":"tw-flow-navigation__back-button--hidden"),onClick:function(){return o&&o()}},i.a.createElement("div",{className:"tw-flow-navigation__back-arrow"},i.a.createElement(C,null)),n.map((function(t,n){var o=t.label;return i.a.createElement(k.a,{key:n,in:n===a-1,timeout:450,classNames:"tw-flow-navigation__back-text",unmountOnExit:!0},i.a.createElement("span",{className:"tw-flow-navigation__back-text ".concat(e.state.isMovingBackward?"tw-flow-navigation__back-text--moving-backward":""),"aria-hidden":n!==a-1},o))})))}}]),t}(r.Component);S()(O,"getDerivedStateFromProps",(function(e,t){return{isMovingBackward:e.activeStep<t.activeStep,activeStep:e.activeStep}})),O.defaultProps={onGoBack:null};var R=O,M=n("f1t8"),P=n("3IAW"),x=n("ToGa"),L=n("Fr7r"),I=n("EUyq"),_=n("GW4H"),A=(n("7ndt"),function e(t){var n=t.steps,a=t.activeStep,o=t.avatarUrl,r=t.done,c=t.profileType,l=t.onClose,s=t.onGoBack,p=t.theme,m=r?null:i.a.createElement(M.a,{url:o,profileType:c}),v=l&&i.a.createElement(f.a,{onClick:l,className:u()("m-l-3",{"close-button-with-avatar":!r})});return i.a.createElement(L.a,{leftContent:i.a.createElement("div",{className:"m-lg-t-1"},i.a.createElement(P.a,{theme:p,onGoBack:s}),i.a.createElement(R,{steps:n,activeStep:a,onGoBack:s})),rightContent:i.a.createElement("div",{className:"tw-flow-navigation__right-content m-lg-t-1"},m,v),bottomContent:r||p===I.a.DARK?null:i.a.createElement("div",{className:"tw-flow-navigation__stepper m-lg-t-1"},i.a.createElement(x.a,{activeStep:a,steps:n})),className:u()("tw-flow-navigation","tw-flow-navigation__wrapper",{"tw-flow-navigation--done":r,"tw-flow-navigation--inverse":p===e.Theme.DARK})})});A.ProfileType=_.a,A.Theme=I.a,A.defaultProps={activeStep:0,avatarUrl:"",done:!1,profileType:A.ProfileType.PERSONAL,onGoBack:null,onClose:null,theme:I.a.LIGHT};var B=A,G=(i.a.createElement,{name:"FlowNavigation"}),H={meta:G};function D(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.a)("wrapper",Object(a.a)({},H,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)(l.b,{code:"() => {\n  const [activeStep, setActiveStep] = React.useState(1);\n  const updateActiveStep = (step) => () => setActiveStep(step);\n\n  return (\n    <FlowNavigation\n      activeStep={activeStep}\n      onClose={() => alert('Close clicked')}\n      avatarUrl=\"https://github.com/transferwise.png\"\n      done={false}\n      profileType={FlowNavigation.ProfileType.BUSINESS}\n      theme={FlowNavigation.Theme.LIGHT}\n      onGoBack={() => alert('If onGoBack is null, the arrow is replaced with a flag')}\n      showCloseButton\n      steps={[\n        {\n          label: 'Amount',\n          hoverLabel: (\n            <>\n              <div>\n                <strong>100 GBP</strong>\n              </div>\n              0.2351 ETH\n            </>\n          ),\n          onClick: updateActiveStep(0),\n        },\n        {\n          label: 'My details',\n          hoverLabel: (\n            <>\n              <div>\n                <strong>Diana Jaramillo</strong>\n              </div>\n              dianajarm123@gmail.com\n            </>\n          ),\n          onClick: updateActiveStep(1),\n        },\n        { label: 'Recipient', hoverLabel: 'Some person/dog', onClick: updateActiveStep(2) },\n        { label: 'Something', hoverLabel: 'Cool', onClick: updateActiveStep(3) },\n      ]}\n    />\n  );\n};\n",scope:{FlowNavigation:B},display:"vertical",mdxType:"LiveEditorBlock"}),Object(c.a)(l.a,{componentName:"FlowNavigation",mdxType:"GeneratePropsTable"}))}D.isMDXComponent=!0},Fr7r:function(e,t,n){"use strict";var a=n("ERkP"),o=n.n(a),r=n("O94r"),i=n.n(r),c=function(e){var t=e.leftContent,n=e.rightContent,a=e.bottomContent,r=e.className;return o.a.createElement("div",{className:i()(r)},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row p-t-3 "},o.a.createElement("div",{className:"col-lg-2 col-xs-6"},t),o.a.createElement("div",{className:"col-lg-2 col-xs-6 col-lg-push-8 text-xs-right"},n),o.a.createElement("div",{className:"col-xs-12 col-lg-6 col-lg-pull-2 col-lg-offset-1 p-x-0"},a))))};c.defaultProps={leftContent:null,rightContent:null,bottomContent:null,className:null},t.a=c},GW4H:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={BUSINESS:"BUSINESS",PERSONAL:"PERSONAL"}},Ohp4:function(e,t,n){"use strict";var a=n("ERkP"),o=n.n(a),r=n("O94r"),i=n.n(r),c=n("kQwz"),l=n("/Vl7"),s=n("BAoe"),u=Object(s.a)({ariaLabel:{id:"2xdm3a"}}),f=(n("ryiH"),function(e){var t=e.onClick,n=e.className,a=Object(c.a)();return o.a.createElement("button",{type:"button",className:i()("tw-close-button","btn-link","text-no-decoration",n),"aria-label":a.formatMessage(u.ariaLabel),onClick:t},o.a.createElement(l.h,{size:24}))});f.defaultProps={className:null};t.a=f},ToGa:function(e,t,n){"use strict";n("2G9S"),n("z84I");var a=n("ERkP"),o=n.n(a),r=(n("//SO"),n("7CQW"));n("7xRU"),n("iKE+"),n("KqXw"),n("DZ+c"),n("WNMA");function i(){return function(){var e=void 0!==window.ontouchstart,t="undefined"!=typeof navigator&&navigator.maxTouchPoints,n=window.DocumentTouch&&document instanceof window.DocumentTouch;return!!(e||t||n)}()||function(){var e=["android","iemobile","iphone","ipad","ipod","blackberry","bada"].map((function(e){return"(".concat(e,")")})).join("|"),t=new RegExp(e,"ig");return"undefined"!=typeof navigator&&!!navigator.userAgent.match(t)}()}var c=function(e){var t=e.steps,n=e.activeStep;if(0===t.length)return null;var a=function(e,t,n){return Math.max(Math.min(t,n),e)}(0,t.length-1,n),c=1/(t.length-1),l=a/(t.length-1),s=Math.max(l-c,0),u=Math.min(a,1)*c;return o.a.createElement("div",{className:"tw-stepper"},o.a.createElement("div",{className:"progress"},o.a.createElement("div",{className:"progress-bar-filler",style:{width:"".concat(100*s,"%")}}),o.a.createElement("div",{className:"progress-bar-ending",style:{width:"".concat(100*u,"%")}})),o.a.createElement("ul",{className:"tw-stepper-steps p-t-1 m-b-0"},t.map((function(e,t){var n=t===a,l=e.onClick&&!n,s=o.a.createElement("button",{type:"button",className:"btn-unstyled tw-stepper__step-label",disabled:!l,onClick:function(){return l&&e.onClick()}},o.a.createElement("small",null,e.label));return o.a.createElement("li",{key:t,style:{left:"".concat(t*c*100,"%")},className:"\n          hidden-xs\n          tw-stepper__step\n          ".concat(n?"tw-stepper__step--active":"","\n          ").concat(l?"tw-stepper__step--clickable":"","\n        ")},e.hoverLabel&&!i()?o.a.createElement(r.a,{position:r.a.Position.BOTTOM,label:e.hoverLabel},s):s)}))))};c.defaultProps={activeStep:0};var l=c;t.a=l},ePcE:function(e,t,n){},f1t8:function(e,t,n){"use strict";n("+KXO");var a=n("ddV6"),o=n.n(a),r=n("ERkP"),i=n.n(r),c=n("/Vl7"),l=n("9YZu"),s="BUSINESS",u="PERSONAL";function f(e){var t=e.url,n=e.profileType,a=Object(r.useState)(!1),u=o()(a,2),f=u[0],p=u[1],m=t&&!f,v=n===s;return Object(r.useEffect)((function(){return p(!1)}),[t]),i.a.createElement(i.a.Fragment,null,v&&i.a.createElement(l.a,{type:l.a.Type.ICON,size:l.a.Size.MEDIUM},i.a.createElement(c.b,null)),!v&&!m&&i.a.createElement(l.a,{type:l.a.Type.ICON,size:l.a.Size.MEDIUM},i.a.createElement(c.r,null)),!v&&m&&i.a.createElement(l.a,{type:l.a.Type.THUMBNAIL,size:l.a.Size.MEDIUM},m&&i.a.createElement("img",{src:t,alt:"avatar",onError:function(){return p(!0)}})))}f.defaultProps={url:"",profileType:u};t.a=f},ryiH:function(e,t,n){}}]);