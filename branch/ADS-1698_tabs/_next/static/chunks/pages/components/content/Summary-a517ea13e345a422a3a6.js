_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[51],{"+KXO":function(t,e,n){var r=n("ax0f"),o=n("N9G2"),i=n("DEeE");r({target:"Object",stat:!0,forced:n("ct80")((function(){i(1)}))},{keys:function(t){return i(o(t))}})},"+kY7":function(t,e,n){var r=n("q9+l").f,o=n("8aeu"),i=n("fVMg")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},"+oxZ":function(t,e,n){var r=n("9JhN"),o=n("Ew2P"),i=n("6OVi"),c=n("WxKw");for(var a in o){var u=r[a],f=u&&u.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(s){f.forEach=i}}},"1Pcy":function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},"1t7P":function(t,e,n){"use strict";var r=n("ax0f"),o=n("9JhN"),i=n("VCi3"),c=n("DpO5"),a=n("1Mu/"),u=n("56Cj"),f=n("TbR9"),s=n("ct80"),l=n("8aeu"),p=n("xt6W"),y=n("dSaG"),h=n("FXyv"),d=n("N9G2"),m=n("N4z3"),v=n("CD8Q"),g=n("lhjL"),b=n("guiJ"),O=n("DEeE"),w=n("ZdBB"),E=n("7lg/"),T=n("JAL5"),S=n("GFpt"),P=n("q9+l"),j=n("4Sk5"),x=n("WxKw"),L=n("uLp7"),_=n("TN3B"),N=n("MyxS"),R=n("1odi"),G=n("HYrn"),M=n("fVMg"),k=n("TkGI"),F=n("aokA"),D=n("+kY7"),I=n("zc29"),C=n("0FSu").forEach,H=N("hidden"),A=M("toPrimitive"),V=I.set,B=I.getterFor("Symbol"),J=Object.prototype,Z=o.Symbol,z=i("JSON","stringify"),K=S.f,X=P.f,W=E.f,U=j.f,Y=_("symbols"),q=_("op-symbols"),Q=_("string-to-symbol-registry"),$=_("symbol-to-string-registry"),tt=_("wks"),et=o.QObject,nt=!et||!et.prototype||!et.prototype.findChild,rt=a&&s((function(){return 7!=b(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=K(J,e);r&&delete J[e],X(t,e,n),r&&t!==J&&X(J,e,r)}:X,ot=function(t,e){var n=Y[t]=b(Z.prototype);return V(n,{type:"Symbol",tag:t,description:e}),a||(n.description=e),n},it=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Z},ct=function(t,e,n){t===J&&ct(q,e,n),h(t);var r=v(e,!0);return h(n),l(Y,r)?(n.enumerable?(l(t,H)&&t[H][r]&&(t[H][r]=!1),n=b(n,{enumerable:g(0,!1)})):(l(t,H)||X(t,H,g(1,{})),t[H][r]=!0),rt(t,r,n)):X(t,r,n)},at=function(t,e){h(t);var n=m(e),r=O(n).concat(lt(n));return C(r,(function(e){a&&!ut.call(n,e)||ct(t,e,n[e])})),t},ut=function(t){var e=v(t,!0),n=U.call(this,e);return!(this===J&&l(Y,e)&&!l(q,e))&&(!(n||!l(this,e)||!l(Y,e)||l(this,H)&&this[H][e])||n)},ft=function(t,e){var n=m(t),r=v(e,!0);if(n!==J||!l(Y,r)||l(q,r)){var o=K(n,r);return!o||!l(Y,r)||l(n,H)&&n[H][r]||(o.enumerable=!0),o}},st=function(t){var e=W(m(t)),n=[];return C(e,(function(t){l(Y,t)||l(R,t)||n.push(t)})),n},lt=function(t){var e=t===J,n=W(e?q:m(t)),r=[];return C(n,(function(t){!l(Y,t)||e&&!l(J,t)||r.push(Y[t])})),r};(u||(L((Z=function(){if(this instanceof Z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=G(t),n=function(t){this===J&&n.call(q,t),l(this,H)&&l(this[H],e)&&(this[H][e]=!1),rt(this,e,g(1,t))};return a&&nt&&rt(J,e,{configurable:!0,set:n}),ot(e,t)}).prototype,"toString",(function(){return B(this).tag})),L(Z,"withoutSetter",(function(t){return ot(G(t),t)})),j.f=ut,P.f=ct,S.f=ft,w.f=E.f=st,T.f=lt,k.f=function(t){return ot(M(t),t)},a&&(X(Z.prototype,"description",{configurable:!0,get:function(){return B(this).description}}),c||L(J,"propertyIsEnumerable",ut,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:Z}),C(O(tt),(function(t){F(t)})),r({target:"Symbol",stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(Q,e))return Q[e];var n=Z(e);return Q[e]=n,$[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l($,t))return $[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!a},{create:function(t,e){return void 0===e?b(t):at(b(t),e)},defineProperty:ct,defineProperties:at,getOwnPropertyDescriptor:ft}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:st,getOwnPropertySymbols:lt}),r({target:"Object",stat:!0,forced:s((function(){T.f(1)}))},{getOwnPropertySymbols:function(t){return T.f(d(t))}}),z)&&r({target:"JSON",stat:!0,forced:!u||s((function(){var t=Z();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}))},{stringify:function(t,e,n){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=e,(y(e)||void 0!==t)&&!it(t))return p(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),o[1]=e,z.apply(null,o)}});Z.prototype[A]||x(Z.prototype,A,Z.prototype.valueOf),D(Z,"Symbol"),R[H]=!0},"5Yy7":function(t,e,n){var r=n("695J");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"695J":function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},"6OVi":function(t,e,n){"use strict";var r=n("0FSu").forEach,o=n("f4p7"),i=n("znGZ"),c=o("forEach"),a=i("forEach");t.exports=c&&a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"6gor":function(t,e,n){"use strict";e.a={DOWN:40,UP:38,LEFT:37,RIGHT:39,ENTER:13,ESCAPE:27,TAB:9,SPACE:32,BACKSPACE:8}},"7lg/":function(t,e,n){var r=n("N4z3"),o=n("ZdBB").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(e){return c.slice()}}(t):o(r(t))}},"7xRU":function(t,e,n){"use strict";var r=n("ax0f"),o=n("g6a+"),i=n("N4z3"),c=n("f4p7"),a=[].join,u=o!=Object,f=c("join",",");r({target:"Array",proto:!0,forced:u||!f},{join:function(t){return a.call(i(this),void 0===t?",":t)}})},"8+RD":function(t,e,n){var r=n("dSaG");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},AuHH:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},Ch6y:function(t,e,n){"use strict";var r=n("VCi3"),o=n("q9+l"),i=n("fVMg"),c=n("1Mu/"),a=i("species");t.exports=function(t){var e=r(t),n=o.f;c&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},Ew2P:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},FtHn:function(t,e,n){var r=n("ax0f"),o=n("1Mu/"),i=n("oD4t"),c=n("N4z3"),a=n("GFpt"),u=n("2sZ7");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){for(var e,n,r=c(t),o=a.f,f=i(r),s={},l=0;f.length>l;)void 0!==(n=o(r,e=f[l++]))&&u(s,e,n);return s}})},LKIi:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return d})),n.d(e,"default",(function(){return v}));var r=n("cxan"),o=n("HbGN"),i=n("ERkP"),c=n.n(i),a=n("ZVZ0"),u=n("O94r"),f=n.n(u),s=n("/Vl7"),l=n("b1ss"),p=(n("rrw+"),function(t){var e=t.as,n=t.className,r=t.icon,o=t.title,i=t.help,a=t.content;return c.a.createElement(e,{className:f()("summary",n)},c.a.createElement("div",{className:"summary__main"},c.a.createElement("div",{className:"summary__icon m-r-2"},r),c.a.createElement("div",{className:"summary__body"},c.a.createElement("div",{className:"summary__title"},c.a.createElement("strong",null,o),i&&c.a.createElement("div",{className:"summary__help m-l-2"},c.a.createElement(l.a,{preferredPlacement:"bottom-left",title:i.title,content:i.content},c.a.createElement(s.m,null)))),a&&c.a.createElement("div",{className:"summary__content"},a))))});p.defaultProps={as:"div",content:null,help:null,className:null};var y=p,h=n("Qi1R"),d=(c.a.createElement,{name:"Summary"}),m={meta:d};function v(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(a.a)("wrapper",Object(r.a)({},m,n,{components:e,mdxType:"MDXLayout"}),Object(a.a)("p",null,"For displaying a list of requirements, some instructions, or perhaps some general information. Always has an icon and title, can also have a content block and a help icon with some popover text."),Object(a.a)("div",null,Object(a.a)(h.b,{code:'<div>\n  <Summary\n    icon={<MoneyIcon size={24} />}\n    title="Add money to your account"\n    help={{\n      title: \'Add money to your account\',\n      content: (\n        <>\n          To open your account, you\u2019ll need to add money to it at least once.\n          <br />\n          This isn\u2019t a fee \u2014 it\u2019s still your money. It just means that you\u2019re ready to go once\n          you\u2019re verified.\n        </>\n      ),\n    }}\n  />\n  <Summary icon={<IdIcon size={24} />} title="You uploaded you identity documents" />\n  <Summary\n    icon={<HomeIcon size={24} />}\n    title="You entered your card delivery address"\n    content={\n      <>\n        Flat 3 Chaplin House, Shepperton Road\n        <br />\n        London N1 2NE\n        <br />\n        <a href="#foo">Edit address</a>\n      </>\n    }\n    help={{\n      title: \'Enter your card address\',\n      content: \'When your card is ready we\u2019ll post it to your home address.\',\n    }}\n  />\n</div>;\n',scope:{Summary:y,MoneyIcon:s.p,IdIcon:s.o,HomeIcon:s.n},mdxType:"LiveEditorBlock"}),Object(a.a)(h.a,{componentName:"Summary",mdxType:"GeneratePropsTable"})))}v.isMDXComponent=!0},LW0h:function(t,e,n){"use strict";var r=n("ax0f"),o=n("0FSu").filter,i=n("GJtw"),c=n("znGZ"),a=i("filter"),u=c("filter");r({target:"Array",proto:!0,forced:!a||!u},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},LxGA:function(t,e,n){},"N+ot":function(t,e,n){var r=n("T0aG"),o=n("1Pcy");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},O94r:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&t.push(c)}else if("object"===i)for(var a in r)n.call(r,a)&&r[a]&&t.push(a)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},OZaJ:function(t,e,n){var r=n("ax0f"),o=n("VCi3"),i=n("hpdy"),c=n("FXyv"),a=n("dSaG"),u=n("guiJ"),f=n("zh11"),s=n("ct80"),l=o("Reflect","construct"),p=s((function(){function t(){}return!(l((function(){}),[],t)instanceof t)})),y=!s((function(){l((function(){}))})),h=p||y;r({target:"Reflect",stat:!0,forced:h,sham:h},{construct:function(t,e){i(t),c(e);var n=arguments.length<3?t:i(arguments[2]);if(y&&!p)return l(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(f.apply(t,r))}var o=n.prototype,s=u(a(o)?o:Object.prototype),h=Function.apply.call(t,s,e);return a(h)?h:s}})},T0aG:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},TkGI:function(t,e,n){var r=n("fVMg");e.f=r},VrFO:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},WNMA:function(t,e,n){"use strict";var r=n("lbJE"),o=n("FXyv"),i=n("tJVe"),c=n("cww3"),a=n("4/YM"),u=n("34wW");r("match",1,(function(t,e,n){return[function(e){var n=c(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var c=o(t),f=String(this);if(!c.global)return u(c,f);var s=c.unicode;c.lastIndex=0;for(var l,p=[],y=0;null!==(l=u(c,f));){var h=String(l[0]);p[y]=h,""===h&&(c.lastIndex=a(f,i(c.lastIndex),s)),y++}return 0===y?null:p}]}))},XksX:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));n("7xRU"),n("z84I"),n("iKE+"),n("KqXw"),n("DZ+c"),n("WNMA");function r(){var t=["iphone","ipad","ipod"].map((function(t){return"(".concat(t,")")})).join("|"),e=new RegExp(t,"ig");return"undefined"!=typeof navigator&&!!navigator.userAgent.match(e)}function o(){r()&&document.documentElement.classList.add("ios-click")}function i(){r()&&document.documentElement.classList.remove("ios-click")}},Y9Ll:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},"Z0+U":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Summary",function(){return n("LKIi")}])},aokA:function(t,e,n){var r=n("PjZX"),o=n("8aeu"),i=n("TkGI"),c=n("q9+l").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},b1ss:function(t,e,n){"use strict";n.d(e,"a",(function(){return A}));n("1t7P"),n("LW0h"),n("jwue"),n("daRM"),n("FtHn"),n("+KXO"),n("7x/C"),n("OZaJ"),n("DZ+c"),n("+oxZ");var r=n("VrFO"),o=n.n(r),i=n("Y9Ll"),c=n.n(i),a=n("1Pcy"),u=n.n(a),f=n("5Yy7"),s=n.n(f),l=n("N+ot"),p=n.n(l),y=n("AuHH"),h=n.n(y),d=n("KEM+"),m=n.n(d),v=n("ERkP"),g=n.n(v),b=n("O94r"),O=n.n(b),w=n("eKd8");function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var T=w.b.TOP,S=w.b.RIGHT,P=w.b.BOTTOM,j=w.b.BOTTOM_RIGHT,x=w.b.BOTTOM_LEFT,L=w.b.LEFT,_=w.b.RIGHT_TOP,N=w.b.LEFT_TOP;function R(t,e){return t?function(t,e,n){var r=G(e,S,n),o=G(e,L,n);if(!r.overflowsRight&&!o.overflowsLeft)return t;if(r.overflowsRight&&o.overflowsLeft)return function(t,e){var n=G(t,P,e);return n.overflowsLeft&&!n.overflowsRight?j:n.overflowsRight&&!n.overflowsLeft?x:P}(e,n);if(r.overflowsRight){if(t===S)return L;if(t===_)return N;if(t===P||t===j)return x}if(o.overflowsLeft){if(t===L)return S;if(t===N)return _;if(t===P||t===x)return j}return t}(e,t,{right:document.documentElement.clientWidth,left:0}):""}function G(t,e,n){var r=function(t,e){return t?M(t,e,t.previousElementSibling.getBoundingClientRect()):{}}(t,e);return{overflowsRight:r.right>n.right,overflowsLeft:r.left<n.left}}function M(t,e,n){var r=t.offsetWidth,o=t.offsetHeight;return e===T?k({top:n.top-o,left:n.left+n.width/2-r/2},r):e===S?k({top:n.top+n.height/2-o/2,left:n.left+n.width},r):e===P?k({top:n.top+n.height,left:n.left+n.width/2-r/2},r):e===j?k({top:n.top+n.height,left:n.left+n.width/2-30},r):e===x?k({top:n.top+n.height,left:n.left+n.width/2-r+30},r):e===L?k({top:n.top+n.height/2-o/2,left:n.left-r},r):e===_?k({top:n.top+n.height/2-30,left:n.left+n.width},r):e===N?k({top:n.top+n.height/2-30,left:n.left-r},r):{}}function k(t,e){return function(t){for(var e,n=1;n<arguments.length;n++)e=null==arguments[n]?{}:arguments[n],n%2?E(Object(e),!0).forEach((function(n){m()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):E(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}({right:t.left+e},t)}var F=n("6gor"),D=n("XksX");n("LxGA");function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e,n=1;n<arguments.length;n++)e=null==arguments[n]?{}:arguments[n],n%2?I(Object(e),!0).forEach((function(n){m()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):I(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}function H(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var o=h()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p()(this,n)}}var A=function(t){function e(){var t;return o()(this,e),t=n.call(this),m()(u()(t),"closePopoverOnOutsideClick",(function(e){var n=t.popoverElement.contains(e.target),r=t.triggerElement.contains(e.target);n||r||t.close()})),m()(u()(t),"handleKeyUp",(function(e){"BUTTON"!==e.target.nodeName&&e.keyCode===F.a.ENTER&&t.toggle()})),m()(u()(t),"open",(function(){t.setState({isOpen:!0}),Object(D.a)(),document.addEventListener("click",t.closePopoverOnOutsideClick,!0)})),m()(u()(t),"close",(function(){t.setState({isOpen:!1}),Object(D.b)(),document.removeEventListener("click",t.closePopoverOnOutsideClick,!0)})),m()(u()(t),"toggle",(function(){return t.state.isOpen?t.close():t.open()})),m()(u()(t),"createTrigger",(function(){var e=t.props,n=e.children,r=e.containsFocusableElement,o=t.state.isOpen,i=function(t){return function(t){return"string"==typeof t.type}(t)?t:g.a.createElement("span",null,t)}(n);return Object(v.cloneElement)(i,C(C({},!r&&{tabIndex:0,role:"button","aria-expanded":o}),{},{"data-toggle":"popover",onClick:t.toggle,onKeyUp:t.handleKeyUp,ref:function(e){t.triggerElement=e}}))})),m()(u()(t),"style",(function(e){return t.props.classNames[e]||e})),t.state={isOpen:!1},t}s()(e,t);var n=H(e);return c()(e,[{key:"componentWillUnmount",value:function(){this.close()}},{key:"render",value:function(){var t=this,e=this.props,n=e.title,r=e.content,o=e.preferredPlacement,i=this.state.isOpen,c=this.createTrigger(),a=R(this.popoverElement,o),u=O()("tw-popover",this.style("popover"),this.style("animate"),this.style("in"),m()({},this.style("scale-down"),!i),this.style(a)),f=function(t,e){if(!t)return{};var n=t.previousElementSibling;return M(t,e,{top:n.offsetTop,left:n.offsetLeft,width:n.offsetWidth,height:n.offsetHeight})}(this.popoverElement,a),s=f.top,l=f.left;return g.a.createElement(g.a.Fragment,null,c,g.a.createElement("div",{className:u,ref:function(e){t.popoverElement=e},style:{top:s,left:l}},n&&g.a.createElement("h3",{className:O()(this.style("popover-title"))},n),g.a.createElement("p",{className:O()(this.style("popover-content"),this.style("m-b-0"))},"function"==typeof r?r({isOpen:i,close:this.close.bind(this)}):r)))}}]),e}(v.Component);m()(A,"Placement",w.b),A.defaultProps={title:null,containsFocusableElement:!1,preferredPlacement:A.Placement.RIGHT,classNames:{}}},daRM:function(t,e,n){var r=n("ax0f"),o=n("ct80"),i=n("N4z3"),c=n("GFpt").f,a=n("1Mu/"),u=o((function(){c(1)}));r({target:"Object",stat:!0,forced:!a||u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},eKd8:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));var r={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},o={TOP_LEFT:"up-left",TOP:"up-center",TOP_RIGHT:"up-right",BOTTOM_LEFT:"down-left",BOTTOM:"down-center",BOTTOM_RIGHT:"down-right"}},"iKE+":function(t,e,n){var r=n("1Mu/"),o=n("9JhN"),i=n("66wQ"),c=n("j6nH"),a=n("q9+l").f,u=n("ZdBB").f,f=n("jl0/"),s=n("q/0V"),l=n("L2rT"),p=n("uLp7"),y=n("ct80"),h=n("zc29").set,d=n("Ch6y"),m=n("fVMg")("match"),v=o.RegExp,g=v.prototype,b=/a/g,O=/a/g,w=new v(b)!==b,E=l.UNSUPPORTED_Y;if(r&&i("RegExp",!w||E||y((function(){return O[m]=!1,v(b)!=b||v(O)==O||"/a/i"!=v(b,"i")})))){for(var T=function(t,e){var n,r=this instanceof T,o=f(t),i=void 0===e;if(!r&&o&&t.constructor===T&&i)return t;w?o&&!i&&(t=t.source):t instanceof T&&(i&&(e=s.call(t)),t=t.source),E&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var a=c(w?new v(t,e):v(t,e),r?this:g,T);return E&&n&&h(a,{sticky:n}),a},S=function(t){t in T||a(T,t,{configurable:!0,get:function(){return v[t]},set:function(e){v[t]=e}})},P=u(v),j=0;P.length>j;)S(P[j++]);g.constructor=T,T.prototype=g,p(o,"RegExp",T)}d("RegExp")},j6nH:function(t,e,n){var r=n("dSaG"),o=n("waID");t.exports=function(t,e,n){var i,c;return o&&"function"==typeof(i=e.constructor)&&i!==n&&r(c=i.prototype)&&c!==n.prototype&&o(t,c),t}},jwue:function(t,e,n){"use strict";var r=n("ax0f"),o=n("6OVi");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"rrw+":function(t,e,n){},waID:function(t,e,n){var r=n("FXyv"),o=n("8+RD");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(i){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},z84I:function(t,e,n){"use strict";var r=n("ax0f"),o=n("0FSu").map,i=n("GJtw"),c=n("znGZ"),a=i("map"),u=c("map");r({target:"Array",proto:!0,forced:!a||!u},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},zh11:function(t,e,n){"use strict";var r=n("hpdy"),o=n("dSaG"),i=[].slice,c={},a=function(t,e,n){if(!(e in c)){for(var r=[],o=0;o<e;o++)r[o]="a["+o+"]";c[e]=Function("C,a","return new C("+r.join(",")+")")}return c[e](t,n)};t.exports=Function.bind||function(t){var e=r(this),n=i.call(arguments,1),c=function(){var r=n.concat(i.call(arguments));return this instanceof c?a(e,r.length,r):e.apply(t,r)};return o(e.prototype)&&(c.prototype=e.prototype),c}}},[["Z0+U",0,1,2,6,3,5,7,4]]]);