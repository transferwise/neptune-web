_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[73],{"+kY7":function(t,e,n){var r=n("q9+l").f,o=n("8aeu"),i=n("fVMg")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},"0Q6q":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={PROCESSING:"processing",FAILED:"failed",SUCCEEDED:"succeeded",HIDDEN:"hidden",DONE:"done",NOT_DONE:"notDone",PENDING:"pending"}},"1Pcy":function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},"1t7P":function(t,e,n){"use strict";var r=n("ax0f"),o=n("9JhN"),i=n("VCi3"),a=n("DpO5"),c=n("1Mu/"),s=n("56Cj"),l=n("TbR9"),u=n("ct80"),f=n("8aeu"),p=n("xt6W"),d=n("dSaG"),m=n("FXyv"),y=n("N9G2"),v=n("N4z3"),h=n("CD8Q"),g=n("lhjL"),b=n("guiJ"),O=n("DEeE"),E=n("ZdBB"),w=n("7lg/"),S=n("JAL5"),x=n("GFpt"),P=n("q9+l"),N=n("4Sk5"),T=n("WxKw"),j=n("uLp7"),C=n("TN3B"),D=n("MyxS"),k=n("1odi"),R=n("HYrn"),L=n("fVMg"),_=n("TkGI"),A=n("aokA"),I=n("+kY7"),M=n("zc29"),G=n("0FSu").forEach,F=D("hidden"),z=L("toPrimitive"),V=M.set,H=M.getterFor("Symbol"),W=Object.prototype,U=o.Symbol,X=i("JSON","stringify"),J=x.f,q=P.f,B=w.f,K=N.f,Q=C("symbols"),Y=C("op-symbols"),Z=C("string-to-symbol-registry"),$=C("symbol-to-string-registry"),tt=C("wks"),et=o.QObject,nt=!et||!et.prototype||!et.prototype.findChild,rt=c&&u((function(){return 7!=b(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=J(W,e);r&&delete W[e],q(t,e,n),r&&t!==W&&q(W,e,r)}:q,ot=function(t,e){var n=Q[t]=b(U.prototype);return V(n,{type:"Symbol",tag:t,description:e}),c||(n.description=e),n},it=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof U},at=function(t,e,n){t===W&&at(Y,e,n),m(t);var r=h(e,!0);return m(n),f(Q,r)?(n.enumerable?(f(t,F)&&t[F][r]&&(t[F][r]=!1),n=b(n,{enumerable:g(0,!1)})):(f(t,F)||q(t,F,g(1,{})),t[F][r]=!0),rt(t,r,n)):q(t,r,n)},ct=function(t,e){m(t);var n=v(e),r=O(n).concat(ft(n));return G(r,(function(e){c&&!st.call(n,e)||at(t,e,n[e])})),t},st=function(t){var e=h(t,!0),n=K.call(this,e);return!(this===W&&f(Q,e)&&!f(Y,e))&&(!(n||!f(this,e)||!f(Q,e)||f(this,F)&&this[F][e])||n)},lt=function(t,e){var n=v(t),r=h(e,!0);if(n!==W||!f(Q,r)||f(Y,r)){var o=J(n,r);return!o||!f(Q,r)||f(n,F)&&n[F][r]||(o.enumerable=!0),o}},ut=function(t){var e=B(v(t)),n=[];return G(e,(function(t){f(Q,t)||f(k,t)||n.push(t)})),n},ft=function(t){var e=t===W,n=B(e?Y:v(t)),r=[];return G(n,(function(t){!f(Q,t)||e&&!f(W,t)||r.push(Q[t])})),r};(s||(j((U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=R(t),n=function(t){this===W&&n.call(Y,t),f(this,F)&&f(this[F],e)&&(this[F][e]=!1),rt(this,e,g(1,t))};return c&&nt&&rt(W,e,{configurable:!0,set:n}),ot(e,t)}).prototype,"toString",(function(){return H(this).tag})),j(U,"withoutSetter",(function(t){return ot(R(t),t)})),N.f=st,P.f=at,x.f=lt,E.f=w.f=ut,S.f=ft,_.f=function(t){return ot(L(t),t)},c&&(q(U.prototype,"description",{configurable:!0,get:function(){return H(this).description}}),a||j(W,"propertyIsEnumerable",st,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:U}),G(O(tt),(function(t){A(t)})),r({target:"Symbol",stat:!0,forced:!s},{for:function(t){var e=String(t);if(f(Z,e))return Z[e];var n=U(e);return Z[e]=n,$[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(f($,t))return $[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!c},{create:function(t,e){return void 0===e?b(t):ct(b(t),e)},defineProperty:at,defineProperties:ct,getOwnPropertyDescriptor:lt}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:ut,getOwnPropertySymbols:ft}),r({target:"Object",stat:!0,forced:u((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(y(t))}}),X)&&r({target:"JSON",stat:!0,forced:!s||u((function(){var t=U();return"[null]"!=X([t])||"{}"!=X({a:t})||"{}"!=X(Object(t))}))},{stringify:function(t,e,n){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=e,(d(e)||void 0!==t)&&!it(t))return p(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),o[1]=e,X.apply(null,o)}});U.prototype[z]||T(U.prototype,z,U.prototype.valueOf),I(U,"Symbol"),k[F]=!0},"2G9S":function(t,e,n){"use strict";var r=n("ax0f"),o=n("ct80"),i=n("xt6W"),a=n("dSaG"),c=n("N9G2"),s=n("tJVe"),l=n("2sZ7"),u=n("aoZ+"),f=n("GJtw"),p=n("fVMg"),d=n("T+0C"),m=p("isConcatSpreadable"),y=d>=51||!o((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),v=f("concat"),h=function(t){if(!a(t))return!1;var e=t[m];return void 0!==e?!!e:i(t)};r({target:"Array",proto:!0,forced:!y||!v},{concat:function(t){var e,n,r,o,i,a=c(this),f=u(a,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(h(i=-1===e?a:arguments[e])){if(p+(o=s(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in i&&l(f,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");l(f,p++,i)}return f.length=p,f}})},"2sZ7":function(t,e,n){"use strict";var r=n("CD8Q"),o=n("q9+l"),i=n("lhjL");t.exports=function(t,e,n){var a=r(e);a in t?o.f(t,a,i(0,n)):t[a]=n}},"5Yy7":function(t,e,n){var r=n("695J");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"695J":function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},"6gor":function(t,e,n){"use strict";e.a={DOWN:40,UP:38,LEFT:37,RIGHT:39,ENTER:13,ESCAPE:27,TAB:9,SPACE:32,BACKSPACE:8}},"7lg/":function(t,e,n){var r=n("N4z3"),o=n("ZdBB").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(e){return a.slice()}}(t):o(r(t))}},"7xRU":function(t,e,n){"use strict";var r=n("ax0f"),o=n("g6a+"),i=n("N4z3"),a=n("f4p7"),c=[].join,s=o!=Object,l=a("join",",");r({target:"Array",proto:!0,forced:s||!l},{join:function(t){return c.call(i(this),void 0===t?",":t)}})},"7yHk":function(t,e,n){},"8+RD":function(t,e,n){var r=n("dSaG");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"99fE":function(t,e,n){"use strict";var r=n("ddV6"),o=n.n(r),i=n("ERkP"),a=n.n(i),c=n("7nmT");e.a=function(t){return function(e){var n=Object(i.useState)(!1),r=o()(n,2),s=r[0],l=r[1];return Object(i.useEffect)((function(){l(!0)}),[l]),s?Object(c.createPortal)(a.a.createElement(t,e),document.body):null}}},AuHH:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},BAoe:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r,o,i=n("D57K"),a=n("ERkP"),c=n("yGPN"),s=n("ymT0");!function(t){t.formatDate="FormattedDate",t.formatTime="FormattedTime",t.formatNumber="FormattedNumber",t.formatList="FormattedList",t.formatDisplayName="FormattedDisplayName"}(r||(r={})),function(t){t.formatDate="FormattedDateParts",t.formatTime="FormattedTimeParts",t.formatNumber="FormattedNumberParts",t.formatList="FormattedListParts"}(o||(o={}));function l(t){var e=function(e){return a.createElement(s.a.Consumer,null,(function(n){Object(c.c)(n);var r=e.value,o=e.children,a=Object(i.c)(e,["value","children"]),s="string"===typeof r?new Date(r||0):r;return o("formatDate"===t?n.formatDateToParts(s,a):n.formatTimeToParts(s,a))}))};return e.displayName=o[t],e}function u(t){var e=function(e){return a.createElement(s.a.Consumer,null,(function(n){Object(c.c)(n);var r=e.value,o=e.children,s=Object(i.c)(e,["value","children"]),l=n[t](r,s);if("function"===typeof o)return o(l);var u=n.textComponent||a.Fragment;return a.createElement(u,null,l)}))};return e.displayName=r[t],e}function f(t){return t}u("formatDate"),u("formatTime"),u("formatNumber"),u("formatList"),u("formatDisplayName"),l("formatDate"),l("formatTime")},Ch6y:function(t,e,n){"use strict";var r=n("VCi3"),o=n("q9+l"),i=n("fVMg"),a=n("1Mu/"),c=i("species");t.exports=function(t){var e=r(t),n=o.f;a&&e&&!e[c]&&n(e,c,{configurable:!0,get:function(){return this}})}},DEeE:function(t,e,n){var r=n("yRya"),o=n("sX5C");t.exports=Object.keys||function(t){return r(t,o)}},"DZ+c":function(t,e,n){"use strict";var r=n("uLp7"),o=n("FXyv"),i=n("ct80"),a=n("q/0V"),c=RegExp.prototype,s=c.toString,l=i((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),u="toString"!=s.name;(l||u)&&r(RegExp.prototype,"toString",(function(){var t=o(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in c)?a.call(t):n)}),{unsafe:!0})},GAp3:function(t,e,n){"use strict";n("2G9S"),n("vrRf"),n("KqXw"),n("Ysgh");var r,o=n("97Jx"),i=n.n(o),a=n("m3Bd"),c=n.n(a),s=n("VrFO"),l=n.n(s),u=n("Y9Ll"),f=n.n(u),p=n("1Pcy"),d=n.n(p),m=n("5Yy7"),y=n.n(m),v=n("N+ot"),h=n.n(v),g=n("AuHH"),b=n.n(g),O=n("KEM+"),E=n.n(O),w=n("ERkP"),S=n.n(w),x=n("O94r"),P=n.n(x),N=n("05Xt"),T=n("/Vl7"),j=n("6gor"),C=(n("2lU4"),n("eKd8")),D=n("VehP"),k=n("P8nL");function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=b()(t);if(e){var o=b()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h()(this,n)}}var L=function(t){function e(){var t;l()(this,e);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=n.call.apply(n,[this].concat(o)),E()(d()(t),"onEscape",(function(e){var n=t.props.onClose;e&&(e.keyCode===j.a.ESCAPE||"Escape"===e.key)&&n&&n(e)})),E()(d()(t),"handleOnClick",(function(e){var n=t.props,r=n.onClose,o=n.closeOnClick;e.target===e.currentTarget&&r&&o&&r(e)})),E()(d()(t),"checkSpecialClasses",(function(e){return-1!==t.props.className.split(" ").indexOf(e)})),t}y()(e,t);var n=R(e);return f()(e,[{key:"componentDidMount",value:function(){this.modalDialog&&this.modalDialog.focus(),document.addEventListener("keydown",this.onEscape)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onEscape)}},{key:"render",value:function(){var t=this,n=this.props,r=n.title,o=n.body,a=n.footer,s=n.onClose,l=n.className,u=n.open,f=(n.size,n.closeOnClick,n.scroll),p=n.position,d=c()(n,["title","body","footer","onClose","className","open","size","closeOnClick","scroll","position"]),m=this.checkSpecialClasses("compact"),y=this.checkSpecialClasses("no-divider");return S.a.createElement(k.a,{open:u,scrollable:f===e.Scroll.CONTENT},S.a.createElement(N.a,{appear:!0,in:u,classNames:{enterDone:"in"},timeout:150,unmountOnExit:!0},S.a.createElement("div",i()({className:P()("tw-modal","d-flex","justify-content-center",{"tw-modal--content":f===e.Scroll.CONTENT,"align-items-center":p===C.a.CENTER,"align-items-start":p===C.a.TOP},"fade",l),tabIndex:"-1",role:"presentation",ref:function(e){t.modalDialog=e},onKeyDown:this.onEscape,onClick:this.handleOnClick},d),S.a.createElement("div",{className:P()("tw-modal-dialog","d-flex",E()({},"tw-modal-".concat(this.props.size),this.props.size)),"aria-modal":!0,role:"dialog"},S.a.createElement("div",{className:P()("tw-modal-content","d-flex","flex-column","justify-content-between",{"tw-modal-compact":m,"tw-modal-no-title":!r})},S.a.createElement("div",{className:P()("tw-modal-header","d-flex","align-items-center","justify-content-between","flex-wrap",{"modal--withoutborder":!r||y})},S.a.createElement("h4",{className:"tw-modal-title"},r),S.a.createElement("button",{type:"button",onClick:s,className:"close","aria-label":"close"},S.a.createElement(T.j,{size:24}))),S.a.createElement("div",{className:"tw-modal-body"},o),a&&S.a.createElement("div",{className:P()("tw-modal-footer","d-flex","align-items-center","flex-wrap",{"modal--withoutborder":y})},a))))))}}]),e}(w.Component);E()(L,"Size",D.a),E()(L,"Scroll",{CONTENT:"content",VIEWPORT:"viewport"}),E()(L,"Position",(r={},E()(r,C.a.TOP.toUpperCase(),C.a.TOP),E()(r,C.a.CENTER.toUpperCase(),C.a.CENTER),r)),L.defaultProps={title:null,footer:null,size:L.Size.MEDIUM,className:"",closeOnClick:!0,scroll:L.Scroll.VIEWPORT,position:L.Position.CENTER},e.a=L},LKIi:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return R})),n.d(e,"default",(function(){return _}));var r=n("cxan"),o=n("HbGN"),i=n("ERkP"),a=n.n(i),c=n("ZVZ0"),s=(n("1t7P"),n("jQ/y"),n("KEM+")),l=n.n(s),u=n("O94r"),f=n.n(u),p=n("kQwz"),d=n("/Vl7"),m=(n("j+zR"),n("97Jx")),y=n.n(m),v=n("ddV6"),h=n.n(v),g=n("b1ss"),b=n("GAp3"),O=n("VehP"),E=(n("mSMe"),function t(e){var n=e.className,r=e.content,o=e.presentation,c=e.size,s=e.title,l=Object(i.useState)(!1),u=h()(l,2),p=u[0],m=u[1],v=o===t.Presentation.MODAL,O=c===t.Size.SMALL,E={"aria-label":e["aria-label"],className:"btn-unstyled",children:a.a.createElement(d.o,{size:O?16:24})};return a.a.createElement("span",{className:f()(n,"np-info",{"np-info__small":O,"np-info__large":!O})},v?a.a.createElement(a.a.Fragment,null,a.a.createElement("button",y()({type:"button",onClick:function(){return m(!0)}},E)),a.a.createElement(b.a,{body:r,onClose:function(){return m(!1)},open:p,title:s})):a.a.createElement(g.a,{content:r,preferredPlacement:g.a.Placement.BOTTOM_LEFT,title:s},a.a.createElement("button",y()({type:"button"},E))))});E.Presentation={POPOVER:"POPOVER",MODAL:"MODAL"},E.Size={SMALL:O.a.SMALL,LARGE:O.a.LARGE},E.defaultProps={"aria-label":void 0,className:void 0,content:void 0,presentation:E.Presentation.POPOVER,size:E.Size.SMALL,title:void 0};var w,S=E,x=n("0Q6q"),P=n("BAoe"),N=Object(P.a)({statusNotDone:{id:"neptune.Summary.statusNotDone"},statusPending:{id:"neptune.Summary.statusPending"},statusDone:{id:"neptune.Summary.statusDone"}}),T=(n("rrw+"),{done:d.f,pending:d.r}),j=(w={},l()(w,x.a.NOT_DONE,"statusNotDone"),l()(w,x.a.DONE,"statusDone"),l()(w,x.a.PENDING,"statusPending"),w),C=function(t){var e,n=t.action,r=t.as,o=t.className,c=t.content,s=t.description,l=void 0===s?c:s,u=t.help,d=t.icon,m=t.illustration,y=t.info,v=void 0===y?u:y,h=t.status,g=t.title,b=Object(p.a)(),O=m;d&&(O=24===(null===d||void 0===d||null===(e=d.props)||void 0===e?void 0:e.size)?d:Object(i.cloneElement)(d,{size:24}));var E=h&&T[h];return a.a.createElement(r,{className:f()("np-summary d-flex align-items-start",o),"aria-label":h&&b.formatMessage(N[j[h]])},a.a.createElement("div",{className:"np-summary__icon"},O,E&&a.a.createElement(E,{size:16,filled:!0,className:"np-summary-icon__".concat(h)})),a.a.createElement("div",{className:"np-summary__body m-l-2"},a.a.createElement("div",{className:"np-summary__title d-flex"},a.a.createElement("strong",null,g),v&&a.a.createElement(S,{"aria-label":v["aria-label"],className:"m-l-1 hidden-xs",content:v.content,presentation:v.presentation,title:v.title})),l&&a.a.createElement("div",{className:"np-summary__description"},l),n&&a.a.createElement("a",{href:n.href,target:n.target,onClick:n.onClick,className:"np-summary__action","aria-label":n["aria-label"]},n.text)),v&&a.a.createElement(S,{"aria-label":v["aria-label"],className:"m-l-2 hidden-sm hidden-md hidden-lg hidden-xl",content:v.content,presentation:v.presentation,size:S.Size.LARGE,title:v.title}))};C.Status={NOT_DONE:x.a.NOT_DONE,DONE:x.a.DONE,PENDING:x.a.PENDING},C.defaultProps={action:null,as:"div",className:null,content:null,help:null,illustration:null,status:null};var D=C,k=n("Qi1R"),R=(a.a.createElement,{name:"Summary"}),L={meta:R};function _(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(c.a)("wrapper",Object(r.a)({},L,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)("p",null,"For displaying a list of requirements, some instructions, or perhaps some general information. Always has an icon and title, can also have a content block and a help icon with some popover text."),Object(c.a)("div",null,Object(c.a)(k.b,{code:"<ul>\n  <Summary\n    action={{\n      text: 'Change address',\n      href: '#change-address',\n      'aria-label': ' Click here to change address',\n    }}\n    as=\"li\"\n    description=\"10 Downing Street, Westminster, London SW1A 2AA.\"\n    icon={<HomeIcon size={24} />}\n    title=\"Verify your address\"\n  />\n  <Summary\n    action={{\n      text: 'Change address',\n      href: '#change-address',\n      'aria-label': ' Click here to change address',\n    }}\n    as=\"li\"\n    description=\"10 Downing Street, Westminster, London SW1A 2AA.\"\n    info={{\n      title: 'You entered your address',\n      content: 'Your address has been verified, no more actions are required.',\n      'aria-label': 'Please click here to know more about your address update status',\n    }}\n    icon={<HomeIcon size={24} />}\n    title=\"You verified your address\"\n    status={Summary.Status.DONE}\n  />\n  <Summary\n    action={{\n      text: 'Change address',\n      href: '#change-address',\n      'aria-label': ' Click here to change address',\n    }}\n    as=\"li\"\n    description=\"10 Downing Street, Westminster, London SW1A 2AA.\"\n    info={{\n      title: 'Address verification pending',\n      content:\n        'Your address change is currently being processed. Please allow 48 hours for verification.',\n      presentation: 'MODAL',\n      'aria-label': 'Please click here to know more about your address update status',\n    }}\n    icon={<HomeIcon size={24} />}\n    title=\"We\u2019re verifying your address\"\n    status={Summary.Status.PENDING}\n  />\n</ul>;\n",scope:{Summary:D,HomeIcon:d.p},mdxType:"LiveEditorBlock"}),Object(c.a)(k.a,{componentName:"Summary",mdxType:"GeneratePropsTable"})))}_.isMDXComponent=!0},LxGA:function(t,e,n){},"N+ot":function(t,e,n){var r=n("T0aG"),o=n("1Pcy");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},P8nL:function(t,e,n){"use strict";var r=n("ERkP"),o=n.n(r),i=n("O94r"),a=n.n(i),c=n("05Xt"),s=n("99fE"),l=(n("7yHk"),n("6gor")),u=function(t){var e=t.open,n=t.children,r=t.scrollable,i=t.onClose,s=t.fadeContentOnExit,l=t.fadeContentOnEnter,u=function(t){i&&i(t)};return o.a.createElement(c.a,{in:e,appear:!0,timeout:{enter:0,exit:350},classNames:{enter:a()({"dimmer--enter-fade":l}),enterDone:a()("dimmer--enter-done",{"dimmer--enter-fade":l}),exit:a()("dimmer--exit",{"dimmer--exit-fade":s})},unmountOnExit:!0},o.a.createElement(f,{handleOnClose:u},o.a.createElement("div",{role:"presentation",className:a()("dimmer",{"dimmer--scrollable":r}),onClick:function(t){t.target===t.currentTarget&&u(t)}},n)))},f=function(t){var e=t.children,n=t.handleOnClose;return Object(r.useEffect)((function(){var t=function(t){t&&(t.keyCode===l.a.ESCAPE||"Escape"===t.key)&&n(t)};return document.body.classList.add("no-scroll"),document.addEventListener("keydown",t),function(){document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",t)}}),[]),e};u.defaultProps={scrollable:!1,open:!1,children:null,onClose:null,fadeContentOnExit:!1,fadeContentOnEnter:!1};e.a=Object(s.a)(u)},Qzre:function(t,e,n){var r=n("FXyv"),o=n("hpdy"),i=n("fVMg")("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||void 0==(n=r(a)[i])?e:o(n)}},T0aG:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},TkGI:function(t,e,n){var r=n("fVMg");e.f=r},Ua7V:function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}},VrFO:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},WNMA:function(t,e,n){"use strict";var r=n("lbJE"),o=n("FXyv"),i=n("tJVe"),a=n("cww3"),c=n("4/YM"),s=n("34wW");r("match",1,(function(t,e,n){return[function(e){var n=a(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var a=o(t),l=String(this);if(!a.global)return s(a,l);var u=a.unicode;a.lastIndex=0;for(var f,p=[],d=0;null!==(f=s(a,l));){var m=String(f[0]);p[d]=m,""===m&&(a.lastIndex=c(l,i(a.lastIndex),u)),d++}return 0===d?null:p}]}))},XksX:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));n("7xRU"),n("z84I"),n("iKE+"),n("KqXw"),n("DZ+c"),n("WNMA");function r(){var t=["iphone","ipad","ipod"].map((function(t){return"(".concat(t,")")})).join("|"),e=new RegExp(t,"ig");return"undefined"!=typeof navigator&&!!navigator.userAgent.match(e)}function o(){r()&&document.documentElement.classList.add("ios-click")}function i(){r()&&document.documentElement.classList.remove("ios-click")}},Y9Ll:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},Ysgh:function(t,e,n){"use strict";var r=n("lbJE"),o=n("jl0/"),i=n("FXyv"),a=n("cww3"),c=n("Qzre"),s=n("4/YM"),l=n("tJVe"),u=n("34wW"),f=n("QsUS"),p=n("ct80"),d=[].push,m=Math.min,y=!p((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(a(this)),i=void 0===n?4294967295:n>>>0;if(0===i)return[];if(void 0===t)return[r];if(!o(t))return e.call(r,t,i);for(var c,s,l,u=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,y=new RegExp(t.source,p+"g");(c=f.call(y,r))&&!((s=y.lastIndex)>m&&(u.push(r.slice(m,c.index)),c.length>1&&c.index<r.length&&d.apply(u,c.slice(1)),l=c[0].length,m=s,u.length>=i));)y.lastIndex===c.index&&y.lastIndex++;return m===r.length?!l&&y.test("")||u.push(""):u.push(r.slice(m)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=a(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,o,n):r.call(String(o),e,n)},function(t,o){var a=n(r,t,this,o,r!==e);if(a.done)return a.value;var f=i(t),p=String(this),d=c(f,RegExp),v=f.unicode,h=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(y?"y":"g"),g=new d(y?f:"^(?:"+f.source+")",h),b=void 0===o?4294967295:o>>>0;if(0===b)return[];if(0===p.length)return null===u(g,p)?[p]:[];for(var O=0,E=0,w=[];E<p.length;){g.lastIndex=y?E:0;var S,x=u(g,y?p:p.slice(E));if(null===x||(S=m(l(g.lastIndex+(y?0:E)),p.length))===O)E=s(p,E,v);else{if(w.push(p.slice(O,E)),w.length===b)return w;for(var P=1;P<=x.length-1;P++)if(w.push(x[P]),w.length===b)return w;E=O=S}}return w.push(p.slice(O)),w}]}),!y)},"Z0+U":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Summary",function(){return n("LKIi")}])},aokA:function(t,e,n){var r=n("PjZX"),o=n("8aeu"),i=n("TkGI"),a=n("q9+l").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},b1ss:function(t,e,n){"use strict";n.d(e,"a",(function(){return z}));var r=n("VrFO"),o=n.n(r),i=n("Y9Ll"),a=n.n(i),c=n("1Pcy"),s=n.n(c),l=n("5Yy7"),u=n.n(l),f=n("N+ot"),p=n.n(f),d=n("AuHH"),m=n.n(d),y=n("KEM+"),v=n.n(y),h=n("ERkP"),g=n.n(h),b=n("O94r"),O=n.n(b),E=n("eKd8");function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var S=E.a.TOP,x=E.a.RIGHT,P=E.a.BOTTOM,N=E.a.BOTTOM_RIGHT,T=E.a.BOTTOM_LEFT,j=E.a.LEFT,C=E.a.RIGHT_TOP,D=E.a.LEFT_TOP;function k(t,e){return t?function(t,e,n){var r=R(e,x,n),o=R(e,j,n);if(!r.overflowsRight&&!o.overflowsLeft)return t;if(r.overflowsRight&&o.overflowsLeft)return function(t,e){var n=R(t,P,e);return n.overflowsLeft&&!n.overflowsRight?N:n.overflowsRight&&!n.overflowsLeft?T:P}(e,n);if(r.overflowsRight){if(t===x)return j;if(t===C)return D;if(t===P||t===N)return T}if(o.overflowsLeft){if(t===j)return x;if(t===D)return C;if(t===P||t===T)return N}return t}(e,t,{right:document.documentElement.clientWidth,left:0}):""}function R(t,e,n){var r=function(t,e){return t?L(t,e,t.previousElementSibling.getBoundingClientRect()):{}}(t,e);return{overflowsRight:r.right>n.right,overflowsLeft:r.left<n.left}}function L(t,e,n){var r=t.offsetWidth,o=t.offsetHeight;return e===S?_({top:n.top-o,left:n.left+n.width/2-r/2},r):e===x?_({top:n.top+n.height/2-o/2,left:n.left+n.width},r):e===P?_({top:n.top+n.height,left:n.left+n.width/2-r/2},r):e===N?_({top:n.top+n.height,left:n.left+n.width/2-30},r):e===T?_({top:n.top+n.height,left:n.left+n.width/2-r+30},r):e===j?_({top:n.top+n.height/2-o/2,left:n.left-r},r):e===C?_({top:n.top+n.height/2-30,left:n.left+n.width},r):e===D?_({top:n.top+n.height/2-30,left:n.left-r},r):{}}function _(t,e){return function(t){for(var e,n=1;n<arguments.length;n++)e=null==arguments[n]?{}:arguments[n],n%2?w(Object(e),!0).forEach((function(n){v()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}({right:t.left+e},t)}var A=n("6gor"),I=n("XksX");n("LxGA");function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function G(t){for(var e,n=1;n<arguments.length;n++)e=null==arguments[n]?{}:arguments[n],n%2?M(Object(e),!0).forEach((function(n){v()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):M(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}function F(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m()(t);if(e){var o=m()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p()(this,n)}}var z=function(t){function e(){var t;return o()(this,e),t=n.call(this),v()(s()(t),"closePopoverOnOutsideClick",(function(e){var n=t.popoverElement.contains(e.target),r=t.triggerElement.contains(e.target);n||r||t.close()})),v()(s()(t),"handleKeyUp",(function(e){"BUTTON"!==e.target.nodeName&&e.keyCode===A.a.ENTER&&t.toggle()})),v()(s()(t),"open",(function(){t.setState({isOpen:!0}),Object(I.a)(),document.addEventListener("click",t.closePopoverOnOutsideClick,!0)})),v()(s()(t),"close",(function(){t.setState({isOpen:!1}),Object(I.b)(),document.removeEventListener("click",t.closePopoverOnOutsideClick,!0)})),v()(s()(t),"toggle",(function(){return t.state.isOpen?t.close():t.open()})),v()(s()(t),"createTrigger",(function(){var e=t.props,n=e.children,r=e.containsFocusableElement,o=t.state.isOpen,i=function(t){return function(t){return"string"==typeof t.type}(t)?t:g.a.createElement("span",null,t)}(n);return Object(h.cloneElement)(i,G(G({},!r&&{tabIndex:0,role:"button","aria-expanded":o}),{},{"data-toggle":"popover",onClick:t.toggle,onKeyUp:t.handleKeyUp,ref:function(e){t.triggerElement=e}}))})),v()(s()(t),"style",(function(e){return t.props.classNames[e]||e})),t.state={isOpen:!1},t}u()(e,t);var n=F(e);return a()(e,[{key:"componentWillUnmount",value:function(){this.close()}},{key:"render",value:function(){var t=this,e=this.props,n=e.title,r=e.content,o=e.preferredPlacement,i=this.state.isOpen,a=this.createTrigger(),c=k(this.popoverElement,o),s=O()("tw-popover",this.style("popover"),this.style("animate"),this.style("in"),v()({},this.style("scale-down"),!i),this.style(c)),l=function(t,e){if(!t)return{};var n=t.previousElementSibling;return L(t,e,{top:n.offsetTop,left:n.offsetLeft,width:n.offsetWidth,height:n.offsetHeight})}(this.popoverElement,c),u=l.top,f=l.left;return g.a.createElement(g.a.Fragment,null,a,g.a.createElement("div",{className:s,ref:function(e){t.popoverElement=e},style:{top:u,left:f}},n&&g.a.createElement("h3",{className:O()(this.style("popover-title"))},n),g.a.createElement("p",{className:O()(this.style("popover-content"),this.style("m-b-0"))},"function"==typeof r?r({isOpen:i,close:this.close.bind(this)}):r)))}}]),e}(h.Component);v()(z,"Placement",E.a),z.defaultProps={title:null,containsFocusableElement:!1,preferredPlacement:z.Placement.RIGHT,classNames:{}}},ddV6:function(t,e,n){var r=n("qPgQ"),o=n("Ua7V"),i=n("peMk"),a=n("f2kJ");t.exports=function(t,e){return r(t)||o(t,e)||i(t,e)||a()}},eKd8:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top",CENTER:"center"}},f2kJ:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},guiJ:function(t,e,n){var r,o=n("FXyv"),i=n("uZvN"),a=n("sX5C"),c=n("1odi"),s=n("kySU"),l=n("8r/q"),u=n("MyxS"),f=u("IE_PROTO"),p=function(){},d=function(t){return"<script>"+t+"<\/script>"},m=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(e){}m=r?function(t){t.write(d("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):function(){var t,e=l("iframe");return e.style.display="none",s.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F}();for(var t=a.length;t--;)delete m.prototype[a[t]];return m()};c[f]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[f]=t):n=m(),void 0===e?n:i(n,e)}},"iKE+":function(t,e,n){var r=n("1Mu/"),o=n("9JhN"),i=n("66wQ"),a=n("j6nH"),c=n("q9+l").f,s=n("ZdBB").f,l=n("jl0/"),u=n("q/0V"),f=n("L2rT"),p=n("uLp7"),d=n("ct80"),m=n("zc29").set,y=n("Ch6y"),v=n("fVMg")("match"),h=o.RegExp,g=h.prototype,b=/a/g,O=/a/g,E=new h(b)!==b,w=f.UNSUPPORTED_Y;if(r&&i("RegExp",!E||w||d((function(){return O[v]=!1,h(b)!=b||h(O)==O||"/a/i"!=h(b,"i")})))){for(var S=function(t,e){var n,r=this instanceof S,o=l(t),i=void 0===e;if(!r&&o&&t.constructor===S&&i)return t;E?o&&!i&&(t=t.source):t instanceof S&&(i&&(e=u.call(t)),t=t.source),w&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var c=a(E?new h(t,e):h(t,e),r?this:g,S);return w&&n&&m(c,{sticky:n}),c},x=function(t){t in S||c(S,t,{configurable:!0,get:function(){return h[t]},set:function(e){h[t]=e}})},P=s(h),N=0;P.length>N;)x(P[N++]);g.constructor=S,S.prototype=g,p(o,"RegExp",S)}y("RegExp")},iQ7j:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},"j+zR":function(t,e){t.exports=function(t,e){return function(n,r,o){if("function"!==typeof t)return new Error("Invalid react-required-if prop type supplied to "+o+". Validation failed.");if("function"!==typeof e)return new Error("Invalid react-required-if condition supplied to "+o+". Validation failed.");var i=e(n)?t.isRequired:t;return i.apply(this,arguments)}}},j6nH:function(t,e,n){var r=n("dSaG"),o=n("waID");t.exports=function(t,e,n){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==n&&r(a=i.prototype)&&a!==n.prototype&&o(t,a),t}},"jQ/y":function(t,e,n){"use strict";var r=n("ax0f"),o=n("1Mu/"),i=n("9JhN"),a=n("8aeu"),c=n("dSaG"),s=n("q9+l").f,l=n("tjTa"),u=i.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};l(p,u);var d=p.prototype=u.prototype;d.constructor=p;var m=d.toString,y="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;s(d,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=m.call(t);if(a(f,t))return"";var n=y?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},kQwz:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("ERkP"),o=n("ymT0"),i=n("yGPN");function a(){var t=r.useContext(o.a);return Object(i.c)(t),t}},kySU:function(t,e,n){var r=n("VCi3");t.exports=r("document","documentElement")},peMk:function(t,e,n){var r=n("iQ7j");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},qPgQ:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},uZvN:function(t,e,n){var r=n("1Mu/"),o=n("q9+l"),i=n("FXyv"),a=n("DEeE");t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=a(e),c=r.length,s=0;c>s;)o.f(t,n=r[s++],e[n]);return t}},vrRf:function(t,e,n){"use strict";var r=n("ax0f"),o=n("H17f").indexOf,i=n("f4p7"),a=n("znGZ"),c=[].indexOf,s=!!c&&1/[1].indexOf(1,-0)<0,l=i("indexOf"),u=a("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:s||!l||!u},{indexOf:function(t){return s?c.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},waID:function(t,e,n){var r=n("FXyv"),o=n("8+RD");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(i){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},z84I:function(t,e,n){"use strict";var r=n("ax0f"),o=n("0FSu").map,i=n("GJtw"),a=n("znGZ"),c=i("map"),s=a("map");r({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})}},[["Z0+U",0,1,2,6,3,5,7,8,9,4]]]);