_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[62],{"1Pcy":function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},"5Yy7":function(t,e,n){var r=n("695J");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"695J":function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},"91IA":function(t,e,n){},"99fE":function(t,e,n){"use strict";var r=n("ddV6"),o=n.n(r),i=n("ERkP"),a=n.n(i),c=n("7nmT");e.a=function(t){return function(e){var n=Object(i.useState)(!1),r=o()(n,2),u=r[0],s=r[1];return Object(i.useEffect)((function(){s(!0)}),[s]),u?Object(c.createPortal)(a.a.createElement(t,e),document.body):null}}},AuHH:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},EUyq:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={LIGHT:"light",DARK:"dark"}},"KEM+":function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},"N+ot":function(t,e,n){var r=n("T0aG"),o=n("1Pcy");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},SP0Y:function(t,e,n){"use strict";var r=n("97Jx"),o=n.n(r),i=n("m3Bd"),a=n.n(i),c=n("ERkP"),u=n.n(c),s=n("O94r"),l=n.n(s),f=(n("j+zR"),n("s+Iv")),p=(n("91IA"),{PRIMARY:"primary",PAY:"pay",SECONDARY:"secondary",DANGER:"danger",LINK:"link"}),m=n("VehP"),b=function(t){var e=t.className,n=t.block,r=t.children,i=t.disabled,c=t.htmlType,s=t.loading,b=t.size,d=t.type,y=a()(t,["className","block","children","disabled","htmlType","loading","size","type"]),v=l()("btn btn-".concat(b),"np-btn np-btn-".concat(b),{"btn-loading":s,"btn-primary":d===p.PRIMARY,"btn-success":d===p.PAY,"btn-default":d===p.SECONDARY,"btn-danger":d===p.DANGER,"btn-link":d===p.LINK,"btn-block np-btn-block":n},e);return Object(f.b)("Button has deprecated the `Button.Size.EXTRA_SMALL` value for the `size` prop. Please use Button.Size.SMALL instead.",b===m.a.EXTRA_SMALL),u.a.createElement("button",o()({type:c,className:v,disabled:i||s},y),r,s&&u.a.createElement("span",{className:l()("btn-loader",{"m-l-2":!n})}))};b.Type=p,b.Size={EXTRA_SMALL:m.a.EXTRA_SMALL,SMALL:m.a.SMALL,MEDIUM:m.a.MEDIUM,LARGE:m.a.LARGE},b.defaultProps={className:null,size:b.Size.MEDIUM,type:b.Type.PRIMARY,disabled:!1,block:!1,loading:!1,htmlType:"button"};e.a=b},T0aG:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},Tb9U:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return C})),n.d(e,"default",(function(){return D}));var r=n("cxan"),o=n("HbGN"),i=n("ERkP"),a=n.n(i),c=n("ZVZ0"),u=n("Qi1R"),s=n("SP0Y"),l=n("VrFO"),f=n.n(l),p=n("Y9Ll"),m=n.n(p),b=n("1Pcy"),d=n.n(b),y=n("5Yy7"),v=n.n(y),h=n("N+ot"),x=n.n(h),S=n("AuHH"),k=n.n(S),E=n("KEM+"),O=n.n(E),R=n("05Xt"),A=n("99fE"),P=n("EUyq");n("pF4J");function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=k()(t);if(e){var o=k()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x()(this,n)}}var _=function(t){function e(){var t;return f()(this,e),t=n.call(this),O()(d()(t),"setLeaveTimeout",(function(){var e=t.props.timeout;t.timeout=setTimeout((function(){t.setState({visible:!1})}),e)})),t.state={visible:!1,text:""},t}v()(e,t);var n=T(e);return m()(e,[{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),clearTimeout(this.transitionTimeout)}},{key:"shouldComponentUpdate",value:function(t,e){return!!t.text&&(t.timestamp!==this.props.timestamp||e.visible!==this.state.visible||e.text!==this.state.text)}},{key:"componentDidUpdate",value:function(t){var e=this,n=this.props,r=n.action,o=n.text,i=n.theme,a=n.timestamp;t.text?t.timestamp!==a&&(clearTimeout(this.timeout),this.state.visible?this.setState({visible:!1},(function(){e.transitionTimeout=setTimeout((function(){e.setState({visible:!0,action:r,text:o,theme:i}),e.setLeaveTimeout()}),400)})):(this.setState({visible:!0,action:r,text:o,theme:i}),this.setLeaveTimeout())):this.setState({visible:!0,action:r,text:o,theme:i},(function(){e.setLeaveTimeout()}))}},{key:"render",value:function(){var t=this.state,e=t.action,n=t.text,r=t.theme,o=t.visible,i=this.props.timeout;return a.a.createElement("div",{className:"snackbar"},a.a.createElement(R.a,{in:o,classNames:"snackbar__text-container",timeout:{appear:0,enter:i,exit:400},unmountOnExit:!0},a.a.createElement("span",{className:"snackbar__text snackbar__text--".concat(r)},n,e?a.a.createElement("button",{type:"button",className:"snackbar__text__action",onClick:e.onClick},e.label):null)))}}]),e}(i.Component);_.defaultProps={action:null,theme:P.a.LIGHT};var w=Object(A.a)(_);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=k()(t);if(e){var o=k()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x()(this,n)}}var g=a.a.createContext(),L=g.Consumer,M=function(t){function e(){var t;return f()(this,e),t=n.call(this),O()(d()(t),"create",(function(e){var n=e.action,r=e.text,o=e.theme;t.setState({action:n,text:r,theme:o,timestamp:Date.now()})})),t.state={text:"",timestamp:0},t}v()(e,t);var n=j(e);return m()(e,[{key:"render",value:function(){var t=this.state,e=t.action,n=t.text,r=t.theme,o=t.timestamp;return a.a.createElement(g.Provider,{value:{createSnackbar:this.create}},a.a.createElement(w,{action:e,text:n,timestamp:o,timeout:this.props.timeout,theme:r}),this.props.children)}}]),e}(i.Component);M.defaultProps={timeout:4500};var N=M,C=(a.a.createElement,{name:"Snackbar"}),I={meta:C};function D(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(c.a)("wrapper",Object(r.a)({},I,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)(u.b,{code:"<SnackbarProvider>\n  <SnackbarConsumer>\n    {({ createSnackbar }) => (\n      <Button\n        block\n        onClick={() =>\n          createSnackbar({\n            text: <span>Some text</span>,\n            action: {\n              label: 'Bite me',\n              onClick: () => alert(\"I can't believe you've done this.\"),\n            },\n            theme: 'light', // or 'dark'\n          })\n        }\n      >\n        Show\n      </Button>\n    )}\n  </SnackbarConsumer>\n</SnackbarProvider>;\n",scope:{Button:s.a,SnackbarConsumer:L,SnackbarProvider:N},mdxType:"LiveEditorBlock"}),Object(c.a)(u.a,{componentName:"Snackbar",mdxType:"GeneratePropsTable"}))}D.isMDXComponent=!0},Ua7V:function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}},VrFO:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},Y9Ll:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},ddV6:function(t,e,n){var r=n("qPgQ"),o=n("Ua7V"),i=n("peMk"),a=n("f2kJ");t.exports=function(t,e){return r(t)||o(t,e)||i(t,e)||a()}},f2kJ:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},f4p7:function(t,e,n){"use strict";var r=n("ct80");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},iQ7j:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},"j+zR":function(t,e){t.exports=function(t,e){return function(n,r,o){if("function"!==typeof t)return new Error("Invalid react-required-if prop type supplied to "+o+". Validation failed.");if("function"!==typeof e)return new Error("Invalid react-required-if condition supplied to "+o+". Validation failed.");var i=e(n)?t.isRequired:t;return i.apply(this,arguments)}}},kujJ:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alerts/Snackbar",function(){return n("Tb9U")}])},peMk:function(t,e,n){var r=n("iQ7j");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},qPgQ:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},"s+Iv":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));n("vrRf");function r(e){var n,r;0<=["development","test"].indexOf(null===(n=t)||void 0===n||null===(r=n.env)||void 0===r?void 0:"production")&&console.warn(e)}function o(t,e){e&&r(t)}}).call(this,n("F63i"))},vrRf:function(t,e,n){"use strict";var r=n("ax0f"),o=n("H17f").indexOf,i=n("f4p7"),a=n("znGZ"),c=[].indexOf,u=!!c&&1/[1].indexOf(1,-0)<0,s=i("indexOf"),l=a("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:u||!s||!l},{indexOf:function(t){return u?c.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},znGZ:function(t,e,n){var r=n("1Mu/"),o=n("ct80"),i=n("8aeu"),a=Object.defineProperty,c={},u=function(t){throw t};t.exports=function(t,e){if(i(c,t))return c[t];e||(e={});var n=[][t],s=!!i(e,"ACCESSORS")&&e.ACCESSORS,l=i(e,0)?e[0]:u,f=i(e,1)?e[1]:void 0;return c[t]=!!n&&!o((function(){if(s&&!r)return!0;var t={length:-1};s?a(t,1,{enumerable:!0,get:u}):t[1]=1,n.call(t,l,f)}))}}},[["kujJ",0,1,2,3,5,9,4]]]);