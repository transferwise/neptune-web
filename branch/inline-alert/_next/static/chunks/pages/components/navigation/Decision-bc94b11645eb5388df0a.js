_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[96],{"+kY7":function(t,e,n){var r=n("q9+l").f,i=n("8aeu"),o=n("fVMg")("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},"+oxZ":function(t,e,n){var r=n("9JhN"),i=n("Ew2P"),o=n("6OVi"),a=n("WxKw");for(var c in i){var l=r[c],s=l&&l.prototype;if(s&&s.forEach!==o)try{a(s,"forEach",o)}catch(u){s.forEach=o}}},"0FSu":function(t,e,n){var r=n("IRf+"),i=n("g6a+"),o=n("N9G2"),a=n("tJVe"),c=n("aoZ+"),l=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,u=4==t,f=6==t,d=7==t,p=5==t||f;return function(m,v,y,h){for(var b,S,g=o(m),E=i(g),O=r(v,y,3),w=a(E.length),M=0,L=h||c,T=e?L(m,w):n||d?L(m,0):void 0;w>M;M++)if((p||M in E)&&(S=O(b=E[M],M,g),t))if(e)T[M]=S;else if(S)switch(t){case 3:return!0;case 5:return b;case 6:return M;case 2:l.call(T,b)}else switch(t){case 4:return!1;case 7:l.call(T,b)}return f?-1:s||u?u:T}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},"1IsZ":function(t,e,n){var r=n("ax0f"),i=n("YAkj").values;r({target:"Object",stat:!0},{values:function(t){return i(t)}})},"1t7P":function(t,e,n){"use strict";var r=n("ax0f"),i=n("9JhN"),o=n("VCi3"),a=n("DpO5"),c=n("1Mu/"),l=n("56Cj"),s=n("TbR9"),u=n("ct80"),f=n("8aeu"),d=n("xt6W"),p=n("dSaG"),m=n("FXyv"),v=n("N9G2"),y=n("N4z3"),h=n("CD8Q"),b=n("lhjL"),S=n("guiJ"),g=n("DEeE"),E=n("ZdBB"),O=n("7lg/"),w=n("JAL5"),M=n("GFpt"),L=n("q9+l"),T=n("4Sk5"),A=n("WxKw"),x=n("uLp7"),N=n("TN3B"),k=n("MyxS"),C=n("1odi"),j=n("HYrn"),I=n("fVMg"),P=n("TkGI"),R=n("aokA"),z=n("+kY7"),_=n("zc29"),G=n("0FSu").forEach,V=k("hidden"),D=I("toPrimitive"),H=_.set,B=_.getterFor("Symbol"),U=Object.prototype,Z=i.Symbol,F=o("JSON","stringify"),J=M.f,X=L.f,q=O.f,K=T.f,W=N("symbols"),Y=N("op-symbols"),Q=N("string-to-symbol-registry"),$=N("symbol-to-string-registry"),tt=N("wks"),et=i.QObject,nt=!et||!et.prototype||!et.prototype.findChild,rt=c&&u((function(){return 7!=S(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=J(U,e);r&&delete U[e],X(t,e,n),r&&t!==U&&X(U,e,r)}:X,it=function(t,e){var n=W[t]=S(Z.prototype);return H(n,{type:"Symbol",tag:t,description:e}),c||(n.description=e),n},ot=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Z},at=function(t,e,n){t===U&&at(Y,e,n),m(t);var r=h(e,!0);return m(n),f(W,r)?(n.enumerable?(f(t,V)&&t[V][r]&&(t[V][r]=!1),n=S(n,{enumerable:b(0,!1)})):(f(t,V)||X(t,V,b(1,{})),t[V][r]=!0),rt(t,r,n)):X(t,r,n)},ct=function(t,e){m(t);var n=y(e),r=g(n).concat(ft(n));return G(r,(function(e){c&&!lt.call(n,e)||at(t,e,n[e])})),t},lt=function(t){var e=h(t,!0),n=K.call(this,e);return!(this===U&&f(W,e)&&!f(Y,e))&&(!(n||!f(this,e)||!f(W,e)||f(this,V)&&this[V][e])||n)},st=function(t,e){var n=y(t),r=h(e,!0);if(n!==U||!f(W,r)||f(Y,r)){var i=J(n,r);return!i||!f(W,r)||f(n,V)&&n[V][r]||(i.enumerable=!0),i}},ut=function(t){var e=q(y(t)),n=[];return G(e,(function(t){f(W,t)||f(C,t)||n.push(t)})),n},ft=function(t){var e=t===U,n=q(e?Y:y(t)),r=[];return G(n,(function(t){!f(W,t)||e&&!f(U,t)||r.push(W[t])})),r};(l||(x((Z=function(){if(this instanceof Z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=j(t),n=function(t){this===U&&n.call(Y,t),f(this,V)&&f(this[V],e)&&(this[V][e]=!1),rt(this,e,b(1,t))};return c&&nt&&rt(U,e,{configurable:!0,set:n}),it(e,t)}).prototype,"toString",(function(){return B(this).tag})),x(Z,"withoutSetter",(function(t){return it(j(t),t)})),T.f=lt,L.f=at,M.f=st,E.f=O.f=ut,w.f=ft,P.f=function(t){return it(I(t),t)},c&&(X(Z.prototype,"description",{configurable:!0,get:function(){return B(this).description}}),a||x(U,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:Z}),G(g(tt),(function(t){R(t)})),r({target:"Symbol",stat:!0,forced:!l},{for:function(t){var e=String(t);if(f(Q,e))return Q[e];var n=Z(e);return Q[e]=n,$[n]=e,n},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(f($,t))return $[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!l,sham:!c},{create:function(t,e){return void 0===e?S(t):ct(S(t),e)},defineProperty:at,defineProperties:ct,getOwnPropertyDescriptor:st}),r({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:ut,getOwnPropertySymbols:ft}),r({target:"Object",stat:!0,forced:u((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(v(t))}}),F)&&r({target:"JSON",stat:!0,forced:!l||u((function(){var t=Z();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))}))},{stringify:function(t,e,n){for(var r,i=[t],o=1;arguments.length>o;)i.push(arguments[o++]);if(r=e,(p(e)||void 0!==t)&&!ot(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ot(e))return e}),i[1]=e,F.apply(null,i)}});Z.prototype[D]||A(Z.prototype,D,Z.prototype.valueOf),z(Z,"Symbol"),C[V]=!0},"56Cj":function(t,e,n){var r=n("ct80");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},"5BfY":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={EXTRA_SMALL:480,SMALL:576,MEDIUM:768,LARGE:992,EXTRA_LARGE:1200}},"6OVi":function(t,e,n){"use strict";var r=n("0FSu").forEach,i=n("f4p7"),o=n("znGZ"),a=i("forEach"),c=o("forEach");t.exports=a&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"7lg/":function(t,e,n){var r=n("N4z3"),i=n("ZdBB").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(e){return a.slice()}}(t):i(r(t))}},"97Jx":function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n.apply(this,arguments)}t.exports=n},"9YZu":function(t,e,n){"use strict";var r=n("ERkP"),i=n.n(r),o=n("O94r"),a=n.n(o),c=n("VehP"),l=n("EUyq"),s=(n("DGa2"),function(t){var e=t.backgroundColor,n=t.children,r=t.className,o=t.outlined,c=t.size,l=t.theme,s=t.type;return i.a.createElement("div",{className:a()("tw-avatar",r,"tw-avatar--".concat(c),"tw-avatar--".concat(s),"tw-avatar--".concat(l),{"tw-avatar--outlined":o})},i.a.createElement("div",{className:"tw-avatar__content",style:{backgroundColor:e||void 0}},n))});s.Size={SMALL:c.a.SMALL,MEDIUM:c.a.MEDIUM,LARGE:c.a.LARGE},s.Theme=l.a,s.Type={THUMBNAIL:"thumbnail",ICON:"icon",EMOJI:"emoji",INITIALS:"initials"},s.defaultProps={backgroundColor:null,children:null,className:null,outlined:!1,size:s.Size.MEDIUM,theme:l.a.LIGHT,type:s.Type.THUMBNAIL},e.a=s},DEeE:function(t,e,n){var r=n("yRya"),i=n("sX5C");t.exports=Object.keys||function(t){return r(t,i)}},EUyq:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={LIGHT:"light",DARK:"dark"}},Ew2P:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},GJtw:function(t,e,n){var r=n("ct80"),i=n("fVMg"),o=n("T+0C"),a=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},Hi8P:function(t,e,n){"use strict";var r,i=n("KEM+"),o=n.n(i),a=(n("J/fC"),n("ERkP")),c=n.n(a),l=n("O94r"),s=n.n(l),u=n("/Vl7"),f=n("VehP"),d=n("eKd8"),p=(r={},o()(r,f.a.EXTRA_SMALL,10),o()(r,f.a.SMALL,16),o()(r,f.a.MEDIUM,24),r),m=function(t){var e=t.className;return c.a.createElement("span",{className:s()("tw-icon","tw-icon-chevron",e),role:"presentation","aria-hidden":!0},c.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",focusable:"false"},c.a.createElement("path",{fillRule:"evenodd",d:"M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"})))};m.defaultProps={className:null};var v=function(t){var e=t.orientation,n=t.size,r=t.disabled,i=t.className,o=s()("tw-chevron",{"chevron-color":!r},"".concat([e]).toLowerCase(),i),a=p[n];return n===f.a.EXTRA_SMALL?c.a.createElement(m,{className:o}):c.a.createElement(u.i,{className:o,size:a})};v.Orientation=d.a,v.Size=f.a,v.defaultProps={orientation:v.Orientation.BOTTOM,size:v.Size.SMALL,disabled:!1,className:null},e.a=v},"IRf+":function(t,e,n){var r=n("hpdy");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},"J/fC":function(t,e,n){},"KEM+":function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},LW0h:function(t,e,n){"use strict";var r=n("ax0f"),i=n("0FSu").filter,o=n("GJtw"),a=n("znGZ"),c=o("filter"),l=a("filter");r({target:"Array",proto:!0,forced:!c||!l},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"Lw4+":function(t,e,n){"use strict";var r=n("ERkP"),i=n.n(r),o=n("O94r"),a=n.n(o),c=(n("j+zR"),n("X+z2"),function(t){var e=t.as,n=t.href,r=t.media,o=t.title,c=t.content,l=t.onClick,s=t.htmlFor,u=t.disabled,f=t.button,d=t.decision,p=t.complex,m=t.className,v=t.inverseMediaCircle,y=t.showMediaAtAllSizes,h=t.showMediaCircle;return i.a.createElement(e,{className:a()(m,"media",{"decision-complex":p,decision:d,disabled:u,"tw-option__sm-media":y}),href:n,onClick:l,htmlFor:s,disabled:u&&"button"===e},r&&i.a.createElement("div",{className:"media-left"},h?i.a.createElement("div",{className:a()("circle circle-sm text-primary",{"circle-inverse":v})},r):i.a.createElement("div",{className:"tw-option__no-media-circle"},r)),i.a.createElement("div",{className:"media-body"},i.a.createElement("div",{className:"h5"},o),c&&i.a.createElement("div",{className:"decision__content"},c)),i.a.createElement("div",{className:"media-right"},f))});c.defaultProps={as:"label",media:"",content:null,htmlFor:null,disabled:!1,button:null,onClick:null,href:null,decision:!0,complex:!1,inverseMediaCircle:!0,className:null,showMediaAtAllSizes:!1,showMediaCircle:!0},e.a=c},N9G2:function(t,e,n){var r=n("cww3");t.exports=function(t){return Object(r(t))}},NAm9:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation/Decision",function(){return n("iRuI")}])},O94r:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)&&r.length){var a=i.apply(null,r);a&&t.push(a)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&t.push(c)}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(r=function(){return i}.apply(e,[]))||(t.exports=r)}()},"T+0C":function(t,e,n){var r,i,o=n("9JhN"),a=n("ZORK"),c=o.process,l=c&&c.versions,s=l&&l.v8;s?i=(r=s.split("."))[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(i=r[1]),t.exports=i&&+i},TbR9:function(t,e,n){var r=n("56Cj");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},TkGI:function(t,e,n){var r=n("fVMg");e.f=r},Tz8v:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("ddV6"),i=n.n(r),o=n("ERkP"),a=n("XORh"),c=n.n(a),l=o.useLayoutEffect,s=function(t){var e=t.ref,n=t.throttleMs,r=void 0===n?100:n,a=Object(o.useState)(null),s=i()(a,2),u=s[0],f=s[1],d=function(){e&&e.current&&f(e.current.clientWidth)};return l((function(){return window.addEventListener("resize",c()(d,r)),d(),function(){return window.removeEventListener("resize",d)}}),[]),[u]};s.THROTTLE_MS=100},Ua7V:function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}}},VehP:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},XORh:function(t,e,n){(function(e){var n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),u=Object.prototype.toString,f=Math.max,d=Math.min,p=function(){return s.Date.now()};function m(t,e,n){var r,i,o,a,c,l,s=0,u=!1,m=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=r,o=i;return r=i=void 0,s=e,a=t.apply(o,n)}function S(t){return s=t,c=setTimeout(E,e),u?b(t):a}function g(t){var n=t-l;return void 0===l||n>=e||n<0||m&&t-s>=o}function E(){var t=p();if(g(t))return O(t);c=setTimeout(E,function(t){var n=e-(t-l);return m?d(n,o-(t-s)):n}(t))}function O(t){return c=void 0,h&&r?b(t):(r=i=void 0,a)}function w(){var t=p(),n=g(t);if(r=arguments,i=this,l=t,n){if(void 0===c)return S(l);if(m)return c=setTimeout(E,e),b(l)}return void 0===c&&(c=setTimeout(E,e)),a}return e=y(e)||0,v(n)&&(u=!!n.leading,o=(m="maxWait"in n)?f(y(n.maxWait)||0,e):o,h="trailing"in n?!!n.trailing:h),w.cancel=function(){void 0!==c&&clearTimeout(c),s=0,r=l=i=c=void 0},w.flush=function(){return void 0===c?a:O(p())},w}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==u.call(t)}(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var c=i.test(t);return c||o.test(t)?a(t.slice(2),c?2:8):r.test(t)?NaN:+t}t.exports=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),m(t,e,{leading:r,maxWait:e,trailing:i})}}).call(this,n("lpmq"))},YAkj:function(t,e,n){var r=n("1Mu/"),i=n("DEeE"),o=n("N4z3"),a=n("4Sk5").f,c=function(t){return function(e){for(var n,c=o(e),l=i(c),s=l.length,u=0,f=[];s>u;)n=l[u++],r&&!a.call(c,n)||f.push(t?[n,c[n]]:c[n]);return f}};t.exports={entries:c(!0),values:c(!1)}},ZORK:function(t,e,n){var r=n("VCi3");t.exports=r("navigator","userAgent")||""},"aoZ+":function(t,e,n){var r=n("dSaG"),i=n("xt6W"),o=n("fVMg")("species");t.exports=function(t,e){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)?r(n)&&null===(n=n[o])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},aokA:function(t,e,n){var r=n("PjZX"),i=n("8aeu"),o=n("TkGI"),a=n("q9+l").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},bOjP:function(t,e,n){"use strict";var r=n("97Jx"),i=n.n(r),o=n("ERkP"),a=n.n(o),c=(n("j+zR"),n("O94r")),l=n.n(c),s=n("Hi8P"),u=n("Lw4+"),f=(n("41gN"),function(t){var e=t.as,n=t.media,r=t.href,o=t.title,c=t.content,f=t.onClick,d=t.complex,p=t.disabled,m=t.showMediaAtAllSizes,v=t.showMediaCircle,y=t.className,h={as:e,media:n,href:r,title:o,content:c,complex:d,disabled:p,showMediaAtAllSizes:m,showMediaCircle:v,className:l()("tw-navigation-option",y)};return r&&(h.as="a"),a.a.createElement(u.a,i()({},h,{onClick:function(t){p||f(t)},button:a.a.createElement(s.a,{orientation:s.a.Orientation.RIGHT,disabled:p,className:"d-block"})}))});f.defaultProps={as:"button",media:null,content:null,complex:!1,onClick:null,href:void 0,disabled:!1,showMediaAtAllSizes:!1,showMediaCircle:!0,className:null},e.a=f},ddV6:function(t,e,n){var r=n("qPgQ"),i=n("Ua7V"),o=n("peMk"),a=n("f2kJ");t.exports=function(t,e){return r(t)||i(t,e)||o(t,e)||a()}},eKd8:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top",CENTER:"center"}},f2kJ:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},f4p7:function(t,e,n){"use strict";var r=n("ct80");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},fVMg:function(t,e,n){var r=n("9JhN"),i=n("TN3B"),o=n("8aeu"),a=n("HYrn"),c=n("56Cj"),l=n("TbR9"),s=i("wks"),u=r.Symbol,f=l?u:u&&u.withoutSetter||a;t.exports=function(t){return o(s,t)||(c&&o(u,t)?s[t]=u[t]:s[t]=f("Symbol."+t)),s[t]}},guiJ:function(t,e,n){var r,i=n("FXyv"),o=n("uZvN"),a=n("sX5C"),c=n("1odi"),l=n("kySU"),s=n("8r/q"),u=n("MyxS"),f=u("IE_PROTO"),d=function(){},p=function(t){return"<script>"+t+"<\/script>"},m=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(e){}m=r?function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):function(){var t,e=s("iframe");return e.style.display="none",l.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F}();for(var t=a.length;t--;)delete m.prototype[a[t]];return m()};c[f]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(d.prototype=i(t),n=new d,d.prototype=null,n[f]=t):n=m(),void 0===e?n:o(n,e)}},hpdy:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},iQ7j:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},iRuI:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return T})),n.d(e,"default",(function(){return x}));var r=n("cxan"),i=n("HbGN"),o=n("ERkP"),a=n.n(o),c=n("ZVZ0"),l=n("Qi1R"),s=(n("1t7P"),n("jQ/y"),n("jwue"),n("z84I"),n("+oxZ"),n("j+zR"),n("O94r")),u=n.n(s),f=(n("LW0h"),n("1IsZ"),n("ddV6")),d=n.n(f),p=n("5BfY"),m=n("Tz8v"),v={COLUMN:"COLUMN"},y=function(t){var e=t.items;if(!e||!e.length)return null;var n=Object(o.useRef)(null),r=Object(m.a)({ref:n}),i=d()(r,1)[0],c=[];return i?c=e.filter((function(t){var e=t.breakpoint;return i>=(void 0===e?0:e)})).pop():c.items=e.map((function(t){var e=t.items;return Object.values(e)})),a.a.createElement("div",{className:u()("np-size-swapper d-flex",{"flex-column":c&&c.layout===v.COLUMN}),style:{visibility:i?"visible":"hidden"},ref:n},c&&c.items)};y.Breakpoint=p.a,y.Layout=v;var h=y,b=n("bOjP"),S=(n("vrRf"),{ENTER:"Enter",SPACE:[" ","Spacebar"]}),g=n("VehP"),E=(n("6XZG"),function t(e){var n=e.className,r=e.description,i=e.disabled,o=e.href,c=e.media,l=e.onClick,s=e.size,f=e.title,d=s===t.Size.SMALL;return a.a.createElement("a",{className:u()("decision","flex-column","np-tile","text-no-decoration","text-xs-center",n,{"p-y-5 p-x-4":!d,"np-tile--small p-a-2":d,disabled:i}),href:o,onClick:i?null:l,onKeyDown:i?null:function(t){var e=t.key;(e===S.ENTER||-1<S.SPACE.indexOf(e))&&l()},"aria-label":f},a.a.createElement("div",{className:"np-tile__media d-flex justify-content-center"},c),a.a.createElement("div",{className:"np-tile__title"},f),r&&a.a.createElement("div",{className:"np-tile__description"},r))});E.Size=g.a,E.defaultProps={className:"",description:null,disabled:!1,size:E.Size.MEDIUM};var O=E,w=(n("mMO2"),function t(e){var n=e.options,r=e.presentation,i=e.type,o=e.size;if(i===t.Type.NAVIGATION){if(r===t.Presentation.LIST_BLOCK){var c=o===t.Size.SMALL,l=[{items:[],layout:h.Layout.COLUMN},{items:[],breakpoint:c?h.Breakpoint.EXTRA_SMALL:h.Breakpoint.SMALL}];return n.forEach((function(t,e){var n=t.description,r=t.disabled,i=t.href,o=t.media,s=o.block,u=o.list,f=t.onClick,d=t.title;l[0].items.push(a.a.createElement(b.a,{complex:!1,content:n,disabled:r,href:i,key:"nav-".concat(e),media:u,onClick:f,showMediaAtAllSizes:!0,title:d})),l[1].items.push(a.a.createElement(O,{className:"np-decision__tile".concat(c?"--small":""),description:n,disabled:r,href:i,key:"tile-".concat(e),media:s,onClick:f,size:c?O.Size.SMALL:O.Size.MEDIUM,title:d}))})),a.a.createElement("div",{className:u()("np-decision",{"np-decision--small":c})},a.a.createElement(h,{items:l}))}return n.map((function(t,e){var n=t.title,r=t.description,i=t.disabled,o=t.href,c=t.media.list,l=t.onClick;return a.a.createElement(b.a,{complex:!1,content:r,disabled:i,href:o,key:"nav-".concat(e),media:c,onClick:l,showMediaAtAllSizes:!0,title:n})}))}return a.a.createElement(a.a.Fragment,null)});w.Size={SMALL:g.a.SMALL,MEDIUM:g.a.MEDIUM},w.Presentation={LIST:"LIST",LIST_BLOCK:"LIST_BLOCK"},w.Type={NAVIGATION:"NAVIGATION"},w.defaultProps={presentation:w.Presentation.LIST,size:w.Size.MEDIUM,type:w.Type.NAVIGATION};var M=w,L=n("9YZu"),T=(a.a.createElement,{name:"Decision"}),A={meta:T};function x(t){var e=t.components,n=Object(i.a)(t,["components"]);return Object(c.a)("wrapper",Object(r.a)({},A,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)("p",null,"Decision can be used for illustrating major decisions for the user.\nBecause blocks will not wrap onto multiple lines, we suggest keeping the number of options under four when using presentation ",Object(c.a)("inlineCode",{parentName:"p"},"LIST_BLOCK"),"."),Object(c.a)(l.b,{code:'() => (\n  <Decision\n    options={[\n      {\n        description:\n          "Click here to send money to Hank Miller. Money will be sent directly to Hank Miller\'s multi-currency account.",\n        onClick: () => console.log(\'clicked\'),\n        disabled: false,\n        href: \'#href1\',\n        media: {\n          block: (\n            <img\n              src="https://transferwise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"\n              alt="alt"\n            />\n          ),\n          list: (\n            <Avatar size="md" type="initials">\n              HM\n            </Avatar>\n          ),\n        },\n        title: \'Hank Miller\',\n      },\n      {\n        description:\n          "Click here to send money to Hank Miller. Money will be sent directly to Hank Miller\'s multi-currency account.",\n        onClick: () => console.log(\'clicked\'),\n        disabled: false,\n        href: \'#href2\',\n        media: {\n          block: (\n            <img\n              src="https://transferwise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"\n              alt="alt"\n            />\n          ),\n          list: (\n            <Avatar size="md" type="initials">\n              HM\n            </Avatar>\n          ),\n        },\n        title: \'Hank Miller\',\n      },\n      {\n        description:\n          "Click here to send money to Hank Miller. Money will be sent directly to Hank Miller\'s multi-currency account.",\n        onClick: () => console.log(\'clicked\'),\n        href: \'#href3\',\n        media: {\n          block: (\n            <img\n              src="https://transferwise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"\n              alt="alt"\n            />\n          ),\n          list: (\n            <Avatar size="md" type="initials">\n              HM\n            </Avatar>\n          ),\n        },\n        disabled: false,\n        title: \'Hank Miller\',\n      },\n    ]}\n    presentation={Decision.Presentation.LIST_BLOCK}\n    type={Decision.Type.NAVIGATION}\n  />\n);\n',scope:{Decision:M,Avatar:L.a},display:"vertical",mdxType:"LiveEditorBlock"}),Object(c.a)(l.a,{componentName:"Decision",mdxType:"GeneratePropsTable"}))}x.isMDXComponent=!0},"j+zR":function(t,e){t.exports=function(t,e){return function(n,r,i){if("function"!==typeof t)return new Error("Invalid react-required-if prop type supplied to "+i+". Validation failed.");if("function"!==typeof e)return new Error("Invalid react-required-if condition supplied to "+i+". Validation failed.");var o=e(n)?t.isRequired:t;return o.apply(this,arguments)}}},"jQ/y":function(t,e,n){"use strict";var r=n("ax0f"),i=n("1Mu/"),o=n("9JhN"),a=n("8aeu"),c=n("dSaG"),l=n("q9+l").f,s=n("tjTa"),u=o.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};s(d,u);var p=d.prototype=u.prototype;p.constructor=d;var m=p.toString,v="Symbol(test)"==String(u("test")),y=/^Symbol\((.*)\)[^)]+$/;l(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=m.call(t);if(a(f,t))return"";var n=v?e.slice(7,-1):e.replace(y,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},jwue:function(t,e,n){"use strict";var r=n("ax0f"),i=n("6OVi");r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},kySU:function(t,e,n){var r=n("VCi3");t.exports=r("document","documentElement")},peMk:function(t,e,n){var r=n("iQ7j");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},qPgQ:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},uZvN:function(t,e,n){var r=n("1Mu/"),i=n("q9+l"),o=n("FXyv"),a=n("DEeE");t.exports=r?Object.defineProperties:function(t,e){o(t);for(var n,r=a(e),c=r.length,l=0;c>l;)i.f(t,n=r[l++],e[n]);return t}},vrRf:function(t,e,n){"use strict";var r=n("ax0f"),i=n("H17f").indexOf,o=n("f4p7"),a=n("znGZ"),c=[].indexOf,l=!!c&&1/[1].indexOf(1,-0)<0,s=o("indexOf"),u=a("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:l||!s||!u},{indexOf:function(t){return l?c.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},xt6W:function(t,e,n){var r=n("amH4");t.exports=Array.isArray||function(t){return"Array"==r(t)}},z84I:function(t,e,n){"use strict";var r=n("ax0f"),i=n("0FSu").map,o=n("GJtw"),a=n("znGZ"),c=o("map"),l=a("map");r({target:"Array",proto:!0,forced:!c||!l},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},znGZ:function(t,e,n){var r=n("1Mu/"),i=n("ct80"),o=n("8aeu"),a=Object.defineProperty,c={},l=function(t){throw t};t.exports=function(t,e){if(o(c,t))return c[t];e||(e={});var n=[][t],s=!!o(e,"ACCESSORS")&&e.ACCESSORS,u=o(e,0)?e[0]:l,f=o(e,1)?e[1]:void 0;return c[t]=!!n&&!i((function(){if(s&&!r)return!0;var t={length:-1};s?a(t,1,{enumerable:!0,get:l}):t[1]=1,n.call(t,u,f)}))}}},[["NAm9",0,1,2,6,3,5,4]]]);