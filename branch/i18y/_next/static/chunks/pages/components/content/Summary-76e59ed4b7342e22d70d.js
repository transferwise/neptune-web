_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[51],{"+KXO":function(t,e,n){var r=n("ax0f"),o=n("N9G2"),i=n("DEeE");r({target:"Object",stat:!0,forced:n("ct80")((function(){i(1)}))},{keys:function(t){return i(o(t))}})},"+kY7":function(t,e,n){var r=n("q9+l").f,o=n("8aeu"),i=n("fVMg")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},"+oxZ":function(t,e,n){var r=n("9JhN"),o=n("Ew2P"),i=n("6OVi"),a=n("WxKw");for(var c in o){var s=r[c],u=s&&s.prototype;if(u&&u.forEach!==i)try{a(u,"forEach",i)}catch(l){u.forEach=i}}},"0Q6q":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={PROCESSING:"processing",FAILED:"failed",SUCCEEDED:"succeeded",HIDDEN:"hidden",DONE:"done",PENDING:"pending"}},"1Pcy":function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},"1t7P":function(t,e,n){"use strict";var r=n("ax0f"),o=n("9JhN"),i=n("VCi3"),a=n("DpO5"),c=n("1Mu/"),s=n("56Cj"),u=n("TbR9"),l=n("ct80"),f=n("8aeu"),p=n("xt6W"),d=n("dSaG"),m=n("FXyv"),h=n("N9G2"),y=n("N4z3"),v=n("CD8Q"),g=n("lhjL"),b=n("guiJ"),O=n("DEeE"),E=n("ZdBB"),w=n("7lg/"),S=n("JAL5"),x=n("GFpt"),P=n("q9+l"),j=n("4Sk5"),L=n("WxKw"),N=n("uLp7"),T=n("TN3B"),C=n("MyxS"),k=n("1odi"),R=n("HYrn"),D=n("fVMg"),A=n("TkGI"),M=n("aokA"),_=n("+kY7"),G=n("zc29"),I=n("0FSu").forEach,V=C("hidden"),z=D("toPrimitive"),F=G.set,H=G.getterFor("Symbol"),J=Object.prototype,W=o.Symbol,Z=i("JSON","stringify"),B=x.f,X=P.f,q=w.f,U=j.f,K=T("symbols"),Y=T("op-symbols"),Q=T("string-to-symbol-registry"),$=T("symbol-to-string-registry"),tt=T("wks"),et=o.QObject,nt=!et||!et.prototype||!et.prototype.findChild,rt=c&&l((function(){return 7!=b(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=B(J,e);r&&delete J[e],X(t,e,n),r&&t!==J&&X(J,e,r)}:X,ot=function(t,e){var n=K[t]=b(W.prototype);return F(n,{type:"Symbol",tag:t,description:e}),c||(n.description=e),n},it=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},at=function(t,e,n){t===J&&at(Y,e,n),m(t);var r=v(e,!0);return m(n),f(K,r)?(n.enumerable?(f(t,V)&&t[V][r]&&(t[V][r]=!1),n=b(n,{enumerable:g(0,!1)})):(f(t,V)||X(t,V,g(1,{})),t[V][r]=!0),rt(t,r,n)):X(t,r,n)},ct=function(t,e){m(t);var n=y(e),r=O(n).concat(ft(n));return I(r,(function(e){c&&!st.call(n,e)||at(t,e,n[e])})),t},st=function(t){var e=v(t,!0),n=U.call(this,e);return!(this===J&&f(K,e)&&!f(Y,e))&&(!(n||!f(this,e)||!f(K,e)||f(this,V)&&this[V][e])||n)},ut=function(t,e){var n=y(t),r=v(e,!0);if(n!==J||!f(K,r)||f(Y,r)){var o=B(n,r);return!o||!f(K,r)||f(n,V)&&n[V][r]||(o.enumerable=!0),o}},lt=function(t){var e=q(y(t)),n=[];return I(e,(function(t){f(K,t)||f(k,t)||n.push(t)})),n},ft=function(t){var e=t===J,n=q(e?Y:y(t)),r=[];return I(n,(function(t){!f(K,t)||e&&!f(J,t)||r.push(K[t])})),r};(s||(N((W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=R(t),n=function(t){this===J&&n.call(Y,t),f(this,V)&&f(this[V],e)&&(this[V][e]=!1),rt(this,e,g(1,t))};return c&&nt&&rt(J,e,{configurable:!0,set:n}),ot(e,t)}).prototype,"toString",(function(){return H(this).tag})),N(W,"withoutSetter",(function(t){return ot(R(t),t)})),j.f=st,P.f=at,x.f=ut,E.f=w.f=lt,S.f=ft,A.f=function(t){return ot(D(t),t)},c&&(X(W.prototype,"description",{configurable:!0,get:function(){return H(this).description}}),a||N(J,"propertyIsEnumerable",st,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:W}),I(O(tt),(function(t){M(t)})),r({target:"Symbol",stat:!0,forced:!s},{for:function(t){var e=String(t);if(f(Q,e))return Q[e];var n=W(e);return Q[e]=n,$[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(f($,t))return $[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!c},{create:function(t,e){return void 0===e?b(t):ct(b(t),e)},defineProperty:at,defineProperties:ct,getOwnPropertyDescriptor:ut}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:lt,getOwnPropertySymbols:ft}),r({target:"Object",stat:!0,forced:l((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(h(t))}}),Z)&&r({target:"JSON",stat:!0,forced:!s||l((function(){var t=W();return"[null]"!=Z([t])||"{}"!=Z({a:t})||"{}"!=Z(Object(t))}))},{stringify:function(t,e,n){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=e,(d(e)||void 0!==t)&&!it(t))return p(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),o[1]=e,Z.apply(null,o)}});W.prototype[z]||L(W.prototype,z,W.prototype.valueOf),_(W,"Symbol"),k[V]=!0},"2G9S":function(t,e,n){"use strict";var r=n("ax0f"),o=n("ct80"),i=n("xt6W"),a=n("dSaG"),c=n("N9G2"),s=n("tJVe"),u=n("2sZ7"),l=n("aoZ+"),f=n("GJtw"),p=n("fVMg"),d=n("T+0C"),m=p("isConcatSpreadable"),h=d>=51||!o((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),y=f("concat"),v=function(t){if(!a(t))return!1;var e=t[m];return void 0!==e?!!e:i(t)};r({target:"Array",proto:!0,forced:!h||!y},{concat:function(t){var e,n,r,o,i,a=c(this),f=l(a,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(v(i=-1===e?a:arguments[e])){if(p+(o=s(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in i&&u(f,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");u(f,p++,i)}return f.length=p,f}})},"5Yy7":function(t,e,n){var r=n("695J");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"695J":function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},"6OVi":function(t,e,n){"use strict";var r=n("0FSu").forEach,o=n("f4p7"),i=n("znGZ"),a=o("forEach"),c=i("forEach");t.exports=a&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"6gor":function(t,e,n){"use strict";e.a={DOWN:40,UP:38,LEFT:37,RIGHT:39,ENTER:13,ESCAPE:27,TAB:9,SPACE:32,BACKSPACE:8}},"7lg/":function(t,e,n){var r=n("N4z3"),o=n("ZdBB").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(e){return a.slice()}}(t):o(r(t))}},"7xRU":function(t,e,n){"use strict";var r=n("ax0f"),o=n("g6a+"),i=n("N4z3"),a=n("f4p7"),c=[].join,s=o!=Object,u=a("join",",");r({target:"Array",proto:!0,forced:s||!u},{join:function(t){return c.call(i(this),void 0===t?",":t)}})},"7yHk":function(t,e,n){},"8+RD":function(t,e,n){var r=n("dSaG");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"97Jx":function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n.apply(this,arguments)}t.exports=n},"99fE":function(t,e,n){"use strict";var r=n("ddV6"),o=n.n(r),i=n("ERkP"),a=n.n(i),c=n("7nmT");e.a=function(t){return function(e){var n=Object(i.useState)(!1),r=o()(n,2),s=r[0],u=r[1];return Object(i.useEffect)((function(){u(!0)}),[u]),s?Object(c.createPortal)(a.a.createElement(t,e),document.body):null}}},AuHH:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},Ch6y:function(t,e,n){"use strict";var r=n("VCi3"),o=n("q9+l"),i=n("fVMg"),a=n("1Mu/"),c=i("species");t.exports=function(t){var e=r(t),n=o.f;a&&e&&!e[c]&&n(e,c,{configurable:!0,get:function(){return this}})}},Ew2P:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},FtHn:function(t,e,n){var r=n("ax0f"),o=n("1Mu/"),i=n("oD4t"),a=n("N4z3"),c=n("GFpt"),s=n("2sZ7");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){for(var e,n,r=a(t),o=c.f,u=i(r),l={},f=0;u.length>f;)void 0!==(n=o(r,e=u[f++]))&&s(l,e,n);return l}})},GAp3:function(t,e,n){"use strict";n("2G9S"),n("vrRf"),n("7x/C"),n("OZaJ"),n("KqXw"),n("DZ+c"),n("Ysgh");var r=n("97Jx"),o=n.n(r),i=n("m3Bd"),a=n.n(i),c=n("VrFO"),s=n.n(c),u=n("Y9Ll"),l=n.n(u),f=n("1Pcy"),p=n.n(f),d=n("5Yy7"),m=n.n(d),h=n("N+ot"),y=n.n(h),v=n("AuHH"),g=n.n(v),b=n("KEM+"),O=n.n(b),E=n("ERkP"),w=n.n(E),S=n("O94r"),x=n.n(S),P=n("05Xt"),j=n("/Vl7"),L=n("6gor"),N=(n("2lU4"),n("bRoR")),T=n("VehP"),C=n("P8nL");function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=g()(t);if(e){var o=g()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y()(this,n)}}var R=function(t){function e(){var t;s()(this,e);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=n.call.apply(n,[this].concat(o)),O()(p()(t),"onEscape",(function(e){var n=t.props.onClose;e&&(e.keyCode===L.a.ESCAPE||"Escape"===e.key)&&n&&n(e)})),O()(p()(t),"handleOnClick",(function(e){var n=t.props,r=n.onClose,o=n.closeOnClick;e.target===e.currentTarget&&r&&o&&r(e)})),O()(p()(t),"handleOnEnter",(function(){Object(N.a)()})),O()(p()(t),"handleOnClose",(function(){Object(N.b)()})),O()(p()(t),"checkSpecialClasses",(function(e){return-1!==t.props.className.split(" ").indexOf(e)})),t}m()(e,t);var n=k(e);return l()(e,[{key:"componentDidMount",value:function(){this.modalDialog&&this.modalDialog.focus(),document.addEventListener("keydown",this.onEscape)}},{key:"componentWillUnmount",value:function(){this.props.open&&Object(N.b)(),document.removeEventListener("keydown",this.onEscape)}},{key:"render",value:function(){var t=this,e=this.props,n=e.title,r=e.body,i=e.footer,c=e.onClose,s=e.className,u=e.open,l=(e.size,e.closeOnClick,a()(e,["title","body","footer","onClose","className","open","size","closeOnClick"])),f=this.checkSpecialClasses("compact"),p=this.checkSpecialClasses("no-divider");return w.a.createElement(C.a,{open:u},w.a.createElement(P.a,{appear:!0,in:u,onEnter:this.handleOnEnter,onExited:this.handleOnClose,classNames:{enterDone:"in"},timeout:150,unmountOnExit:!0},w.a.createElement("div",o()({className:"tw-modal fade ".concat(s),tabIndex:"-1",role:"presentation",ref:function(e){t.modalDialog=e},onKeyDown:this.onEscape,onClick:this.handleOnClick},l),w.a.createElement("div",{className:x()("tw-modal-dialog",O()({},"tw-modal-".concat(this.props.size),this.props.size)),"aria-modal":!0,role:"dialog"},w.a.createElement("div",{className:x()("tw-modal-content",{"tw-modal-compact":f,"tw-modal-no-title":!n})},w.a.createElement("div",{className:x()("tw-modal-header",{"modal--withoutborder":!n||p})},w.a.createElement("h4",{className:"tw-modal-title"},n),w.a.createElement("button",{type:"button",onClick:c,className:"close","aria-label":"close"},w.a.createElement(j.i,{size:24}))),w.a.createElement("div",{className:"tw-modal-body"},r),i&&w.a.createElement("div",{className:x()("tw-modal-footer",{"modal--withoutborder":p})},i))))))}}]),e}(E.Component);O()(R,"Size",T.a),R.defaultProps={title:null,footer:null,size:R.Size.MEDIUM,className:"",closeOnClick:!0},e.a=R},LKIi:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return S})),n.d(e,"default",(function(){return P}));var r=n("cxan"),o=n("HbGN"),i=n("ERkP"),a=n.n(i),c=n("ZVZ0"),s=(n("1t7P"),n("jQ/y"),n("O94r")),u=n.n(s),l=n("/Vl7"),f=(n("j+zR"),n("ddV6")),p=n.n(f),d=n("b1ss"),m=n("GAp3"),h=n("VehP"),y=(n("mSMe"),function t(e){var n=e.className,r=e.content,o=e.presentation,c=e.size,s=e.title,f=Object(i.useState)(!1),h=p()(f,2),y=h[0],v=h[1],g=o===t.Presentation.MODAL,b=c===t.Size.SMALL,O=a.a.createElement(l.n,{size:b?16:24});return a.a.createElement("span",{className:u()(n,"np-info",{"np-info__small":b,"np-info__large":!b})},g?a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{type:"button",onClick:function(){return v(!0)}},O),a.a.createElement(m.a,{body:r,onClose:function(){return v(!1)},open:y,title:s})):a.a.createElement(d.a,{content:r,preferredPlacement:d.a.Placement.BOTTOM_LEFT,title:s},O))});y.Presentation={POPOVER:"POPOVER",MODAL:"MODAL"},y.Size={SMALL:h.a.SMALL,LARGE:h.a.LARGE},y.defaultProps={className:null,content:null,presentation:y.Presentation.POPOVER,size:y.Size.SMALL,title:null};var v=y,g=n("0Q6q"),b=(n("rrw+"),{done:l.e,pending:l.q}),O=function(t){var e,n=t.action,r=t.as,o=t.className,c=t.content,s=t.description,l=void 0===s?c:s,f=t.help,p=t.icon,d=t.illustration,m=t.info,h=void 0===m?f:m,y=t.status,g=t.title,O=d;p&&(O=24===(null===p||void 0===p||null===(e=p.props)||void 0===e?void 0:e.size)?p:Object(i.cloneElement)(p,{size:24}));var E=y&&b[y];return a.a.createElement(r,{className:u()("np-summary d-flex align-items-start",o)},a.a.createElement("div",{className:"np-summary__icon"},O,y&&a.a.createElement(E,{size:16,filled:!0,className:"np-summary-icon__".concat(y)})),a.a.createElement("div",{className:"np-summary__body m-l-2"},a.a.createElement("div",{className:"np-summary__title d-flex"},a.a.createElement("strong",null,g),h&&a.a.createElement(v,{className:"m-l-1 hidden-xs",content:h.content,presentation:h.presentation,title:h.title})),l&&a.a.createElement("div",{className:"np-summary__description"},l),n&&a.a.createElement("a",{href:n.href,className:"np-summary__action","aria-label":n["aria-label"]},n.text)),h&&a.a.createElement(v,{className:"m-l-2 hidden-sm hidden-md hidden-lg hidden-xl",content:h.content,presentation:h.presentation,size:v.Size.LARGE,title:h.title}))};O.Status={DONE:g.a.DONE,PENDING:g.a.PENDING},O.defaultProps={action:null,as:"div",className:null,content:null,help:null,illustration:null,status:null};var E=O,w=n("Qi1R"),S=(a.a.createElement,{name:"Summary"}),x={meta:S};function P(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(c.a)("wrapper",Object(r.a)({},x,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)("p",null,"For displaying a list of requirements, some instructions, or perhaps some general information. Always has an icon and title, can also have a content block and a help icon with some popover text."),Object(c.a)("div",null,Object(c.a)(w.b,{code:"<ul>\n  <Summary\n    action={{\n      text: 'Change address',\n      href: '#change-address',\n      'aria-label': ' Click here to change address',\n    }}\n    as=\"li\"\n    description=\"10 Downing Street, Westminster, London SW1A 2AA.\"\n    icon={<HomeIcon size={24} />}\n    title=\"Verify your address\"\n  />\n  <Summary\n    action={{\n      text: 'Change address',\n      href: '#change-address',\n      'aria-label': ' Click here to change address',\n    }}\n    as=\"li\"\n    description=\"10 Downing Street, Westminster, London SW1A 2AA.\"\n    info={{\n      title: 'You entered your address',\n      content: 'Your address has been verified, no more actions are required.',\n    }}\n    icon={<HomeIcon size={24} />}\n    title=\"You verified your address\"\n    status={Summary.Status.DONE}\n  />\n  <Summary\n    action={{\n      text: 'Change address',\n      href: '#change-address',\n      'aria-label': ' Click here to change address',\n    }}\n    as=\"li\"\n    description=\"10 Downing Street, Westminster, London SW1A 2AA.\"\n    info={{\n      title: 'Address verification pending',\n      content:\n        'Your address change is currently being processed. Please allow 48 hours for verification.',\n      presentation: 'MODAL',\n    }}\n    icon={<HomeIcon size={24} />}\n    title=\"We\u2019re verifying your address\"\n    status={Summary.Status.PENDING}\n  />\n</ul>;\n",scope:{Summary:E,HomeIcon:l.o},mdxType:"LiveEditorBlock"}),Object(c.a)(w.a,{componentName:"Summary",mdxType:"GeneratePropsTable"})))}P.isMDXComponent=!0},LW0h:function(t,e,n){"use strict";var r=n("ax0f"),o=n("0FSu").filter,i=n("GJtw"),a=n("znGZ"),c=i("filter"),s=a("filter");r({target:"Array",proto:!0,forced:!c||!s},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},LdEA:function(t,e){t.exports=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}},"N+ot":function(t,e,n){var r=n("T0aG"),o=n("1Pcy");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},OZaJ:function(t,e,n){var r=n("ax0f"),o=n("VCi3"),i=n("hpdy"),a=n("FXyv"),c=n("dSaG"),s=n("guiJ"),u=n("zh11"),l=n("ct80"),f=o("Reflect","construct"),p=l((function(){function t(){}return!(f((function(){}),[],t)instanceof t)})),d=!l((function(){f((function(){}))})),m=p||d;r({target:"Reflect",stat:!0,forced:m,sham:m},{construct:function(t,e){i(t),a(e);var n=arguments.length<3?t:i(arguments[2]);if(d&&!p)return f(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(u.apply(t,r))}var o=n.prototype,l=s(c(o)?o:Object.prototype),m=Function.apply.call(t,l,e);return c(m)?m:l}})},P8nL:function(t,e,n){"use strict";var r=n("ERkP"),o=n.n(r),i=n("O94r"),a=n.n(i),c=n("05Xt"),s=n("99fE"),u=(n("7yHk"),n("6gor")),l=function(t){var e=t.open,n=t.children,i=t.onClose,s=t.fadeContentOnExit,l=t.fadeContentOnEnter;Object(r.useEffect)((function(){return function(){return d()}}),[]);var f=function(t){t&&(t.keyCode===u.a.ESCAPE||"Escape"===t.key)&&p(t)},p=function(t){d(),i&&i(t)},d=function(){document.removeEventListener("keydown",f)};return o.a.createElement(c.a,{in:e,appear:!0,timeout:{enter:0,exit:350},onEnter:function(){document.addEventListener("keydown",f)},onExited:p,classNames:{enter:a()({"dimmer--enter-fade":l}),enterDone:a()("dimmer--enter-done",{"dimmer--enter-fade":l}),exit:a()("dimmer--exit",{"dimmer--exit-fade":s})},unmountOnExit:!0},o.a.createElement("div",{role:"presentation",className:"dimmer",onClick:function(t){t.target===t.currentTarget&&p(t)}},n))};l.defaultProps={open:!1,children:null,onClose:null,fadeContentOnExit:!1,fadeContentOnEnter:!1},e.a=Object(s.a)(l)},Qzre:function(t,e,n){var r=n("FXyv"),o=n("hpdy"),i=n("fVMg")("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||void 0==(n=r(a)[i])?e:o(n)}},T0aG:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},TkGI:function(t,e,n){var r=n("fVMg");e.f=r},Ua7V:function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}},VrFO:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},WNMA:function(t,e,n){"use strict";var r=n("lbJE"),o=n("FXyv"),i=n("tJVe"),a=n("cww3"),c=n("4/YM"),s=n("34wW");r("match",1,(function(t,e,n){return[function(e){var n=a(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var a=o(t),u=String(this);if(!a.global)return s(a,u);var l=a.unicode;a.lastIndex=0;for(var f,p=[],d=0;null!==(f=s(a,u));){var m=String(f[0]);p[d]=m,""===m&&(a.lastIndex=c(u,i(a.lastIndex),l)),d++}return 0===d?null:p}]}))},XksX:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));n("7xRU"),n("z84I"),n("iKE+"),n("KqXw"),n("DZ+c"),n("WNMA");function r(){var t=["iphone","ipad","ipod"].map((function(t){return"(".concat(t,")")})).join("|"),e=new RegExp(t,"ig");return"undefined"!=typeof navigator&&!!navigator.userAgent.match(e)}function o(){r()&&document.documentElement.classList.add("ios-click")}function i(){r()&&document.documentElement.classList.remove("ios-click")}},Y9Ll:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},Ysgh:function(t,e,n){"use strict";var r=n("lbJE"),o=n("jl0/"),i=n("FXyv"),a=n("cww3"),c=n("Qzre"),s=n("4/YM"),u=n("tJVe"),l=n("34wW"),f=n("QsUS"),p=n("ct80"),d=[].push,m=Math.min,h=!p((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(a(this)),i=void 0===n?4294967295:n>>>0;if(0===i)return[];if(void 0===t)return[r];if(!o(t))return e.call(r,t,i);for(var c,s,u,l=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,h=new RegExp(t.source,p+"g");(c=f.call(h,r))&&!((s=h.lastIndex)>m&&(l.push(r.slice(m,c.index)),c.length>1&&c.index<r.length&&d.apply(l,c.slice(1)),u=c[0].length,m=s,l.length>=i));)h.lastIndex===c.index&&h.lastIndex++;return m===r.length?!u&&h.test("")||l.push(""):l.push(r.slice(m)),l.length>i?l.slice(0,i):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=a(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,o,n):r.call(String(o),e,n)},function(t,o){var a=n(r,t,this,o,r!==e);if(a.done)return a.value;var f=i(t),p=String(this),d=c(f,RegExp),y=f.unicode,v=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(h?"y":"g"),g=new d(h?f:"^(?:"+f.source+")",v),b=void 0===o?4294967295:o>>>0;if(0===b)return[];if(0===p.length)return null===l(g,p)?[p]:[];for(var O=0,E=0,w=[];E<p.length;){g.lastIndex=h?E:0;var S,x=l(g,h?p:p.slice(E));if(null===x||(S=m(u(g.lastIndex+(h?0:E)),p.length))===O)E=s(p,E,y);else{if(w.push(p.slice(O,E)),w.length===b)return w;for(var P=1;P<=x.length-1;P++)if(w.push(x[P]),w.length===b)return w;E=O=S}}return w.push(p.slice(O)),w}]}),!h)},"Z0+U":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Summary",function(){return n("LKIi")}])},aokA:function(t,e,n){var r=n("PjZX"),o=n("8aeu"),i=n("TkGI"),a=n("q9+l").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},b1ss:function(t,e,n){"use strict";n.d(e,"a",(function(){return z}));n("1t7P"),n("LW0h"),n("jwue"),n("daRM"),n("FtHn"),n("+KXO"),n("7x/C"),n("OZaJ"),n("DZ+c"),n("+oxZ");var r=n("VrFO"),o=n.n(r),i=n("Y9Ll"),a=n.n(i),c=n("1Pcy"),s=n.n(c),u=n("5Yy7"),l=n.n(u),f=n("N+ot"),p=n.n(f),d=n("AuHH"),m=n.n(d),h=n("KEM+"),y=n.n(h),v=n("ERkP"),g=n.n(v),b=n("O94r"),O=n.n(b),E=n("eKd8");function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var S=E.a.TOP,x=E.a.RIGHT,P=E.a.BOTTOM,j=E.a.BOTTOM_RIGHT,L=E.a.BOTTOM_LEFT,N=E.a.LEFT,T=E.a.RIGHT_TOP,C=E.a.LEFT_TOP;function k(t,e){return t?function(t,e,n){var r=R(e,x,n),o=R(e,N,n);if(!r.overflowsRight&&!o.overflowsLeft)return t;if(r.overflowsRight&&o.overflowsLeft)return function(t,e){var n=R(t,P,e);return n.overflowsLeft&&!n.overflowsRight?j:n.overflowsRight&&!n.overflowsLeft?L:P}(e,n);if(r.overflowsRight){if(t===x)return N;if(t===T)return C;if(t===P||t===j)return L}if(o.overflowsLeft){if(t===N)return x;if(t===C)return T;if(t===P||t===L)return j}return t}(e,t,{right:document.documentElement.clientWidth,left:0}):""}function R(t,e,n){var r=function(t,e){return t?D(t,e,t.previousElementSibling.getBoundingClientRect()):{}}(t,e);return{overflowsRight:r.right>n.right,overflowsLeft:r.left<n.left}}function D(t,e,n){var r=t.offsetWidth,o=t.offsetHeight;return e===S?A({top:n.top-o,left:n.left+n.width/2-r/2},r):e===x?A({top:n.top+n.height/2-o/2,left:n.left+n.width},r):e===P?A({top:n.top+n.height,left:n.left+n.width/2-r/2},r):e===j?A({top:n.top+n.height,left:n.left+n.width/2-30},r):e===L?A({top:n.top+n.height,left:n.left+n.width/2-r+30},r):e===N?A({top:n.top+n.height/2-o/2,left:n.left-r},r):e===T?A({top:n.top+n.height/2-30,left:n.left+n.width},r):e===C?A({top:n.top+n.height/2-30,left:n.left-r},r):{}}function A(t,e){return function(t){for(var e,n=1;n<arguments.length;n++)e=null==arguments[n]?{}:arguments[n],n%2?w(Object(e),!0).forEach((function(n){y()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}({right:t.left+e},t)}var M=n("6gor"),_=n("XksX");n("LxGA");function G(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function I(t){for(var e,n=1;n<arguments.length;n++)e=null==arguments[n]?{}:arguments[n],n%2?G(Object(e),!0).forEach((function(n){y()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):G(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}function V(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m()(t);if(e){var o=m()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p()(this,n)}}var z=function(t){function e(){var t;return o()(this,e),t=n.call(this),y()(s()(t),"closePopoverOnOutsideClick",(function(e){var n=t.popoverElement.contains(e.target),r=t.triggerElement.contains(e.target);n||r||t.close()})),y()(s()(t),"handleKeyUp",(function(e){"BUTTON"!==e.target.nodeName&&e.keyCode===M.a.ENTER&&t.toggle()})),y()(s()(t),"open",(function(){t.setState({isOpen:!0}),Object(_.a)(),document.addEventListener("click",t.closePopoverOnOutsideClick,!0)})),y()(s()(t),"close",(function(){t.setState({isOpen:!1}),Object(_.b)(),document.removeEventListener("click",t.closePopoverOnOutsideClick,!0)})),y()(s()(t),"toggle",(function(){return t.state.isOpen?t.close():t.open()})),y()(s()(t),"createTrigger",(function(){var e=t.props,n=e.children,r=e.containsFocusableElement,o=t.state.isOpen,i=function(t){return function(t){return"string"==typeof t.type}(t)?t:g.a.createElement("span",null,t)}(n);return Object(v.cloneElement)(i,I(I({},!r&&{tabIndex:0,role:"button","aria-expanded":o}),{},{"data-toggle":"popover",onClick:t.toggle,onKeyUp:t.handleKeyUp,ref:function(e){t.triggerElement=e}}))})),y()(s()(t),"style",(function(e){return t.props.classNames[e]||e})),t.state={isOpen:!1},t}l()(e,t);var n=V(e);return a()(e,[{key:"componentWillUnmount",value:function(){this.close()}},{key:"render",value:function(){var t=this,e=this.props,n=e.title,r=e.content,o=e.preferredPlacement,i=this.state.isOpen,a=this.createTrigger(),c=k(this.popoverElement,o),s=O()("tw-popover",this.style("popover"),this.style("animate"),this.style("in"),y()({},this.style("scale-down"),!i),this.style(c)),u=function(t,e){if(!t)return{};var n=t.previousElementSibling;return D(t,e,{top:n.offsetTop,left:n.offsetLeft,width:n.offsetWidth,height:n.offsetHeight})}(this.popoverElement,c),l=u.top,f=u.left;return g.a.createElement(g.a.Fragment,null,a,g.a.createElement("div",{className:s,ref:function(e){t.popoverElement=e},style:{top:l,left:f}},n&&g.a.createElement("h3",{className:O()(this.style("popover-title"))},n),g.a.createElement("p",{className:O()(this.style("popover-content"),this.style("m-b-0"))},"function"==typeof r?r({isOpen:i,close:this.close.bind(this)}):r)))}}]),e}(v.Component);y()(z,"Placement",E.a),z.defaultProps={title:null,containsFocusableElement:!1,preferredPlacement:z.Placement.RIGHT,classNames:{}}},bRoR:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(){document.body.classList.add("no-scroll")},o=function(){document.body.classList.remove("no-scroll")}},daRM:function(t,e,n){var r=n("ax0f"),o=n("ct80"),i=n("N4z3"),a=n("GFpt").f,c=n("1Mu/"),s=o((function(){a(1)}));r({target:"Object",stat:!0,forced:!c||s,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}})},ddV6:function(t,e,n){var r=n("qPgQ"),o=n("Ua7V"),i=n("peMk"),a=n("f2kJ");t.exports=function(t,e){return r(t)||o(t,e)||i(t,e)||a()}},eKd8:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"}},f2kJ:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"iKE+":function(t,e,n){var r=n("1Mu/"),o=n("9JhN"),i=n("66wQ"),a=n("j6nH"),c=n("q9+l").f,s=n("ZdBB").f,u=n("jl0/"),l=n("q/0V"),f=n("L2rT"),p=n("uLp7"),d=n("ct80"),m=n("zc29").set,h=n("Ch6y"),y=n("fVMg")("match"),v=o.RegExp,g=v.prototype,b=/a/g,O=/a/g,E=new v(b)!==b,w=f.UNSUPPORTED_Y;if(r&&i("RegExp",!E||w||d((function(){return O[y]=!1,v(b)!=b||v(O)==O||"/a/i"!=v(b,"i")})))){for(var S=function(t,e){var n,r=this instanceof S,o=u(t),i=void 0===e;if(!r&&o&&t.constructor===S&&i)return t;E?o&&!i&&(t=t.source):t instanceof S&&(i&&(e=l.call(t)),t=t.source),w&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var c=a(E?new v(t,e):v(t,e),r?this:g,S);return w&&n&&m(c,{sticky:n}),c},x=function(t){t in S||c(S,t,{configurable:!0,get:function(){return v[t]},set:function(e){v[t]=e}})},P=s(v),j=0;P.length>j;)x(P[j++]);g.constructor=S,S.prototype=g,p(o,"RegExp",S)}h("RegExp")},iQ7j:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},"j+zR":function(t,e){t.exports=function(t,e){return function(n,r,o){if("function"!==typeof t)return new Error("Invalid react-required-if prop type supplied to "+o+". Validation failed.");if("function"!==typeof e)return new Error("Invalid react-required-if condition supplied to "+o+". Validation failed.");var i=e(n)?t.isRequired:t;return i.apply(this,arguments)}}},j6nH:function(t,e,n){var r=n("dSaG"),o=n("waID");t.exports=function(t,e,n){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==n&&r(a=i.prototype)&&a!==n.prototype&&o(t,a),t}},"jQ/y":function(t,e,n){"use strict";var r=n("ax0f"),o=n("1Mu/"),i=n("9JhN"),a=n("8aeu"),c=n("dSaG"),s=n("q9+l").f,u=n("tjTa"),l=i.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(p,l);var d=p.prototype=l.prototype;d.constructor=p;var m=d.toString,h="Symbol(test)"==String(l("test")),y=/^Symbol\((.*)\)[^)]+$/;s(d,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=m.call(t);if(a(f,t))return"";var n=h?e.slice(7,-1):e.replace(y,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},jwue:function(t,e,n){"use strict";var r=n("ax0f"),o=n("6OVi");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},m3Bd:function(t,e,n){var r=n("LdEA");t.exports=function(t,e){if(null==t)return{};var n,o,i=r(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}},peMk:function(t,e,n){var r=n("iQ7j");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},qPgQ:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},vrRf:function(t,e,n){"use strict";var r=n("ax0f"),o=n("H17f").indexOf,i=n("f4p7"),a=n("znGZ"),c=[].indexOf,s=!!c&&1/[1].indexOf(1,-0)<0,u=i("indexOf"),l=a("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:s||!u||!l},{indexOf:function(t){return s?c.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},waID:function(t,e,n){var r=n("FXyv"),o=n("8+RD");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(i){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},z84I:function(t,e,n){"use strict";var r=n("ax0f"),o=n("0FSu").map,i=n("GJtw"),a=n("znGZ"),c=i("map"),s=a("map");r({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},zh11:function(t,e,n){"use strict";var r=n("hpdy"),o=n("dSaG"),i=[].slice,a={},c=function(t,e,n){if(!(e in a)){for(var r=[],o=0;o<e;o++)r[o]="a["+o+"]";a[e]=Function("C,a","return new C("+r.join(",")+")")}return a[e](t,n)};t.exports=Function.bind||function(t){var e=r(this),n=i.call(arguments,1),a=function(){var r=n.concat(i.call(arguments));return this instanceof a?c(e,r.length,r):e.apply(t,r)};return o(e.prototype)&&(a.prototype=e.prototype),a}}},[["Z0+U",0,1,2,6,3,5,7,8,4]]]);