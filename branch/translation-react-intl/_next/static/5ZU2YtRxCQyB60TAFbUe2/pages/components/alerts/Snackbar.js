(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"05Xt":function(t,e,n){"use strict";var r=n("cxan"),a=n("+wNj"),o=n("BFfR");n("aWzz");function i(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var s=n("ERkP"),c=n.n(s),u=n("sypB"),l=function(t,e){return t&&e&&e.split(" ").forEach((function(e){return r=e,void((n=t).classList?n.classList.remove(r):"string"===typeof n.className?n.className=i(n.className,r):n.setAttribute("class",i(n.className&&n.className.baseVal||"",r)));var n,r}))},p=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(t,n){e.removeClasses(t,"exit"),e.addClass(t,n?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(t,n)},e.onEntering=function(t,n){var r=n?"appear":"enter";e.addClass(t,r,"active"),e.props.onEntering&&e.props.onEntering(t,n)},e.onEntered=function(t,n){var r=n?"appear":"enter";e.removeClasses(t,r),e.addClass(t,r,"done"),e.props.onEntered&&e.props.onEntered(t,n)},e.onExit=function(t){e.removeClasses(t,"appear"),e.removeClasses(t,"enter"),e.addClass(t,"exit","base"),e.props.onExit&&e.props.onExit(t)},e.onExiting=function(t){e.addClass(t,"exit","active"),e.props.onExiting&&e.props.onExiting(t)},e.onExited=function(t){e.removeClasses(t,"exit"),e.addClass(t,"exit","done"),e.props.onExited&&e.props.onExited(t)},e.getClassNames=function(t){var n=e.props.classNames,r="string"===typeof n,a=r?""+(r&&n?n+"-":"")+t:n[t];return{baseClassName:a,activeClassName:r?a+"-active":n[t+"Active"],doneClassName:r?a+"-done":n[t+"Done"]}},e}Object(o.a)(e,t);var n=e.prototype;return n.addClass=function(t,e,n){var r=this.getClassNames(e)[n+"ClassName"];"appear"===e&&"done"===n&&(r+=" "+this.getClassNames("enter").doneClassName),"active"===n&&t&&t.scrollTop,this.appliedClasses[e][n]=r,function(t,e){t&&e&&e.split(" ").forEach((function(e){return r=e,void((n=t).classList?n.classList.add(r):function(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}(n,r)||("string"===typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r}))}(t,r)},n.removeClasses=function(t,e){var n=this.appliedClasses[e],r=n.base,a=n.active,o=n.done;this.appliedClasses[e]={},r&&l(t,r),a&&l(t,a),o&&l(t,o)},n.render=function(){var t=this.props,e=(t.classNames,Object(a.a)(t,["classNames"]));return c.a.createElement(u.a,Object(r.a)({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(c.a.Component);p.defaultProps={classNames:""},p.propTypes={};e.a=p},"2AZx":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"65gV":function(t,e,n){var r=n("tsxu"),a=n("dsLa");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?a(t):e}},"91IA":function(t,e,n){},"99fE":function(t,e,n){"use strict";var r=n("XsB/"),a=n.n(r),o=n("ERkP"),i=n.n(o),s=n("7nmT");e.a=function(t){return function(e){var n=Object(o.useState)(!1),r=a()(n,2),c=r[0],u=r[1];return Object(o.useEffect)((function(){u(!0)}),[u]),c?Object(s.createPortal)(i.a.createElement(t,e),document.body):null}}},BFfR:function(t,e,n){"use strict";function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return r}))},CQzt:function(t,e,n){var r=n("IMdU");t.exports=function(t,e){if(null==t)return{};var n,a,o=r(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}},FYE5:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},IMdU:function(t,e){t.exports=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}},O94r:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&t.push(i)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&t.push(s)}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()},PqPt:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},SP0Y:function(t,e,n){"use strict";var r=n("eS6V"),a=n.n(r),o=n("CQzt"),i=n.n(o),s=n("ERkP"),c=n.n(s),u=n("O94r"),l=n.n(u),p=(n("j+zR"),n("91IA"),{PRIMARY:"primary",PAY:"pay",SECONDARY:"secondary",DANGER:"danger",LINK:"link"}),f=n("VehP"),d=function(t){var e=t.className,n=t.block,r=t.children,o=t.disabled,s=t.htmlType,u=t.loading,d=t.size,m=t.type,b=i()(t,["className","block","children","disabled","htmlType","loading","size","type"]),h=l()("btn btn-".concat(d),"tw-btn tw-btn-".concat(d),{"btn-loading":u,"btn-primary":m===p.PRIMARY,"btn-success":m===p.PAY,"btn-default":m===p.SECONDARY,"btn-danger":m===p.DANGER,"btn-link":m===p.LINK,"btn-block tw-btn-block":n},e);return f.a.EXTRA_SMALL,c.a.createElement("button",a()({type:s,className:h,disabled:o||u},b),r,u&&c.a.createElement("span",{className:l()("btn-loader",{"m-l-2":!n})}))};d.Type=p,d.Size={EXTRA_SMALL:f.a.EXTRA_SMALL,SMALL:f.a.SMALL,MEDIUM:f.a.MEDIUM,LARGE:f.a.LARGE},d.defaultProps={className:null,size:d.Size.MEDIUM,type:d.Type.PRIMARY,disabled:!1,block:!1,loading:!1,htmlType:"button"};e.a=d},Tb9U:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return R})),n.d(e,"default",(function(){return I}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),i=n.n(o),s=n("ZVZ0"),c=n("Qi1R"),u=n("SP0Y"),l=n("nvWY"),p=n.n(l),f=n("oobO"),d=n.n(f),m=n("65gV"),b=n.n(m),h=n("cVsr"),x=n.n(h),v=n("dsLa"),E=n.n(v),y=n("brTf"),S=n.n(y),g=n("gC0r"),C=n.n(g),k=n("05Xt"),O=n("99fE"),N=(n("pF4J"),function(t){function e(){var t;return p()(this,e),t=b()(this,x()(e).call(this)),C()(E()(t),"setLeaveTimeout",(function(){var e=t.props.timeout;t.timeout=setTimeout((function(){t.setState({visible:!1})}),e)})),t.state={visible:!1,text:""},t}return S()(e,t),d()(e,[{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),clearTimeout(this.transitionTimeout)}},{key:"shouldComponentUpdate",value:function(t,e){return!!t.text&&(t.timestamp!==this.props.timestamp||e.visible!==this.state.visible||e.text!==this.state.text)}},{key:"componentDidUpdate",value:function(t){var e=this,n=this.props,r=n.text,a=n.timestamp,o=n.action;t.text?t.timestamp!==a&&(clearTimeout(this.timeout),this.state.visible?this.setState({visible:!1},(function(){e.transitionTimeout=setTimeout((function(){e.setState({text:r,action:o,visible:!0}),e.setLeaveTimeout()}),400)})):(this.setState({text:r,action:o,visible:!0}),this.setLeaveTimeout())):this.setState({visible:!0,text:r,action:o},(function(){e.setLeaveTimeout()}))}},{key:"render",value:function(){var t=this.state,e=t.text,n=t.visible,r=t.action,a=this.props.timeout;return i.a.createElement("div",{className:"snackbar"},i.a.createElement(k.a,{in:n,classNames:"snackbar__text-container",timeout:{appear:0,enter:a,exit:400},unmountOnExit:!0},i.a.createElement("span",{className:"snackbar__text"},e,r?i.a.createElement("button",{type:"button",className:"snackbar__text__action",onClick:r.onClick},r.label):null)))}}]),e}(o.Component));N.defaultProps={action:null};var T=Object(O.a)(N),P=i.a.createContext(),j=P.Consumer,w=function(t){function e(){var t;return p()(this,e),t=b()(this,x()(e).call(this)),C()(E()(t),"create",(function(e){var n=e.text,r=e.action;t.setState({text:n,timestamp:Date.now(),action:r})})),t.state={text:"",timestamp:0},t}return S()(e,t),d()(e,[{key:"render",value:function(){var t=this.state,e=t.text,n=t.timestamp,r=t.action;return i.a.createElement(P.Provider,{value:{createSnackbar:this.create}},i.a.createElement(T,{text:e,timestamp:n,timeout:this.props.timeout,action:r}),this.props.children)}}]),e}(o.Component);w.defaultProps={timeout:4500};var A=w,L="<SnackbarProvider>\n  <SnackbarConsumer>\n    {({ createSnackbar }) => (\n      <Button\n        block\n        onClick={() =>\n          createSnackbar({\n            text: <span>Some text</span>,\n            action: {\n              label: 'Bite me',\n              onClick: () => alert(\"I can't believe you've done this.\"),\n            },\n          })\n        }\n      >\n        Show\n      </Button>\n    )}\n  </SnackbarConsumer>\n</SnackbarProvider>;\n",R=(i.a.createElement,{name:"Snackbar"}),_={meta:R},M="wrapper";function I(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(s.a)(M,Object(r.a)({},_,n,{components:e,mdxType:"MDXLayout"}),Object(s.a)(c.b,{code:L,scope:{Button:u.a,SnackbarConsumer:j,SnackbarProvider:A},mdxType:"LiveEditorBlock"}),Object(s.a)(c.a,{componentName:"Snackbar",mdxType:"GeneratePropsTable"}))}I.isMDXComponent=!0},Ttzw:function(t,e,n){var r=n("FYE5");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},V8uO:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},VehP:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},"XsB/":function(t,e,n){var r=n("V8uO"),a=n("jPt+"),o=n("Ttzw"),i=n("2AZx");t.exports=function(t,e){return r(t)||a(t,e)||o(t,e)||i()}},brTf:function(t,e,n){var r=n("PqPt");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},cVsr:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},dsLa:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},eS6V:function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n.apply(this,arguments)}t.exports=n},gC0r:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},"j+zR":function(t,e){t.exports=function(t,e){return function(n,r,a){if("function"!==typeof t)return new Error("Invalid react-required-if prop type supplied to "+a+". Validation failed.");if("function"!==typeof e)return new Error("Invalid react-required-if condition supplied to "+a+". Validation failed.");var o=e(n)?t.isRequired:t;return o.apply(this,arguments)}}},"jPt+":function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=t[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}}},kujJ:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alerts/Snackbar",function(){return n("Tb9U")}])},nvWY:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},oobO:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},sypB:function(t,e,n){"use strict";var r=n("+wNj"),a=n("BFfR"),o=(n("aWzz"),n("ERkP")),i=n.n(o),s=n("7nmT"),c=n.n(s),u=!1,l=i.a.createContext(null),p="unmounted",f="exited",d="entering",m="entered",b=function(t){function e(e,n){var r;r=t.call(this,e,n)||this;var a,o=n&&!n.isMounting?e.enter:e.appear;return r.appearStatus=null,e.in?o?(a=f,r.appearStatus=d):a=m:a=e.unmountOnExit||e.mountOnEnter?p:f,r.state={status:a},r.nextCallback=null,r}Object(a.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===p?{status:f}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==d&&n!==m&&(e=d):n!==d&&n!==m||(e="exiting")}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,r=this.props.timeout;return t=e=n=r,null!=r&&"number"!==typeof r&&(t=r.exit,e=r.enter,n=void 0!==r.appear?r.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e){this.cancelNextCallback();var n=c.a.findDOMNode(this);e===d?this.performEnter(n,t):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===f&&this.setState({status:p})},n.performEnter=function(t,e){var n=this,r=this.props.enter,a=this.context?this.context.isMounting:e,o=this.getTimeouts(),i=a?o.appear:o.enter;!e&&!r||u?this.safeSetState({status:m},(function(){n.props.onEntered(t)})):(this.props.onEnter(t,a),this.safeSetState({status:d},(function(){n.props.onEntering(t,a),n.onTransitionEnd(t,i,(function(){n.safeSetState({status:m},(function(){n.props.onEntered(t,a)}))}))})))},n.performExit=function(t){var e=this,n=this.props.exit,r=this.getTimeouts();n&&!u?(this.props.onExit(t),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(t),e.onTransitionEnd(t,r.exit,(function(){e.safeSetState({status:f},(function(){e.props.onExited(t)}))}))}))):this.safeSetState({status:f},(function(){e.props.onExited(t)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,e.nextCallback=null,t(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e,n){this.setNextCallback(n);var r=null==e&&!this.props.addEndListener;t&&!r?(this.props.addEndListener&&this.props.addEndListener(t,this.nextCallback),null!=e&&setTimeout(this.nextCallback,e)):setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===p)return null;var e=this.props,n=e.children,a=Object(r.a)(e,["children"]);if(delete a.in,delete a.mountOnEnter,delete a.unmountOnExit,delete a.appear,delete a.enter,delete a.exit,delete a.timeout,delete a.addEndListener,delete a.onEnter,delete a.onEntering,delete a.onEntered,delete a.onExit,delete a.onExiting,delete a.onExited,"function"===typeof n)return i.a.createElement(l.Provider,{value:null},n(t,a));var o=i.a.Children.only(n);return i.a.createElement(l.Provider,{value:null},i.a.cloneElement(o,a))},e}(i.a.Component);function h(){}b.contextType=l,b.propTypes={},b.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},b.UNMOUNTED=0,b.EXITED=1,b.ENTERING=2,b.ENTERED=3,b.EXITING=4;e.a=b},tsxu:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n}},[["kujJ",0,1,2,3,4,5]]]);