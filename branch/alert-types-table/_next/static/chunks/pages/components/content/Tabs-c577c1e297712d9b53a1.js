_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[69],{"+/eK":function(t,e){t.exports="\t\n\v\f\r \xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},"+KRd":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n={NEGATIVE:"negative",NEUTRAL:"neutral",POSITIVE:"positive",WARNING:"warning",INFO:"info",ERROR:"error",SUCCESS:"success"}},"+KXO":function(t,e,r){var n=r("ax0f"),o=r("N9G2"),a=r("DEeE");n({target:"Object",stat:!0,forced:r("ct80")((function(){a(1)}))},{keys:function(t){return a(o(t))}})},"0FSu":function(t,e,r){var n=r("IRf+"),o=r("g6a+"),a=r("N9G2"),i=r("tJVe"),c=r("aoZ+"),u=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,f=4==t,l=6==t,p=7==t,d=5==t||l;return function(v,m,y,b){for(var h,E,O=a(v),g=o(O),x=n(m,y,3),T=i(g.length),w=0,A=b||c,N=e?A(v,T):r||p?A(v,0):void 0;T>w;w++)if((d||w in g)&&(E=x(h=g[w],w,O),t))if(e)N[w]=E;else if(E)switch(t){case 3:return!0;case 5:return h;case 6:return w;case 2:u.call(N,h)}else switch(t){case 4:return!1;case 7:u.call(N,h)}return l?-1:s||f?f:N}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},"1Pcy":function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},"1iDD":function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Tabs",function(){return r("HhIw")}])},"2G9S":function(t,e,r){"use strict";var n=r("ax0f"),o=r("ct80"),a=r("xt6W"),i=r("dSaG"),c=r("N9G2"),u=r("tJVe"),s=r("2sZ7"),f=r("aoZ+"),l=r("GJtw"),p=r("fVMg"),d=r("T+0C"),v=p("isConcatSpreadable"),m=d>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),y=l("concat"),b=function(t){if(!i(t))return!1;var e=t[v];return void 0!==e?!!e:a(t)};n({target:"Array",proto:!0,forced:!m||!y},{concat:function(t){var e,r,n,o,a,i=c(this),l=f(i,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(b(a=-1===e?i:arguments[e])){if(p+(o=u(a.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,p++)r in a&&s(l,p,a[r])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(l,p++,a)}return l.length=p,l}})},"2sZ7":function(t,e,r){"use strict";var n=r("CD8Q"),o=r("q9+l"),a=r("lhjL");t.exports=function(t,e,r){var i=n(e);i in t?o.f(t,i,a(0,r)):t[i]=r}},"3g/d":function(t,e,r){"use strict";r("2G9S"),r("jQ3i"),r("+KXO"),r("1IsZ"),r("x4t0");var n=r("KEM+"),o=r.n(n),a=r("ERkP"),i=r.n(a),c=r("O94r"),u=r.n(c),s=(r("j+zR"),r("/Vl7")),f=r("+KRd"),l=r("VehP"),p=(r("EtY3"),function(t){var e=t.onClick,r=t.className,n=t.size;return i.a.createElement("button",{type:"button",className:u()("np-close-button close",r),"aria-label":"Close",onClick:e},i.a.createElement(s.j,{size:n}))});p.defaultProps={className:null,size:(p.Size={SMALL:16,LARGE:24}).LARGE};var d=p,v=r("WXrh"),m=r("fO07"),y=r("97Jx"),b=r.n(y),h=r("UTRh"),E=[r("UlFz").a.STRONG],O=function(t){return i.a.createElement(h.a,b()({},t,{as:"span",allowList:E,blockList:void 0}))};O.defaultProps={className:void 0};var g,x,T,w=O,A=r("s+Iv"),N=(g={},o()(g,f.a.SUCCESS,f.a.POSITIVE),o()(g,f.a.INFO,f.a.NEUTRAL),o()(g,f.a.ERROR,f.a.NEGATIVE),g),S=(x={},o()(x,f.a.POSITIVE,s.f),o()(x,f.a.NEUTRAL,s.q),o()(x,f.a.WARNING,s.a),o()(x,f.a.NEGATIVE,s.k),x),R=function t(e){var r=e.arrow,n=e.action,o=e.children,c=e.className,s=e.icon,f=e.onDismiss,l=e.message,p=e.type;if(r){var m=Object(v.a)(t,r);return i.a.createElement(m,e)}!function(t){var e=t.size,r=t.type;Object(A.b)("Alert no longer supports any possible variations in size. Please remove the `size` prop.",!!e),Object(A.b)("Alert has deprecated the ".concat(r," value for the `type` prop. Please update to ").concat(I[r],"."),_.includes(r))}(e);var y=N[p]||p,b=S[y],h=s?Object(a.cloneElement)(s,{size:24}):i.a.createElement(b,{size:24});return i.a.createElement("div",{role:"alert",className:u()("alert d-flex","alert-".concat(y),c)},h,i.a.createElement("div",{className:"alert__message p-l-2 flex-grow-1"},i.a.createElement("div",null,o||i.a.createElement(w,null,l)),n&&i.a.createElement("a",{href:n.href,className:"m-t-1 d-inline-block","aria-label":n["aria-label"],target:n.target},n.text)),f&&i.a.createElement(d,{onClick:f,size:d.Size.SMALL,className:"m-l-2"}))},I=(T={},o()(T,f.a.SUCCESS,"Alert.Type.POSITIVE"),o()(T,f.a.INFO,"Alert.Type.NEUTRAL"),o()(T,f.a.ERROR,"Alert.Type.NEGATIVE"),T),_=Object.keys(N);R.ArrowPosition=m.a,R.Size={SMALL:l.a.SMALL,LARGE:l.a.LARGE},R.Type=f.a,R.defaultProps={action:void 0,arrow:void 0,className:void 0,dismissible:void 0,icon:void 0,type:R.Type.NEUTRAL};e.a=R},"56Cj":function(t,e,r){var n=r("ct80");t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},"5Yy7":function(t,e,r){var n=r("695J");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},"695J":function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},"6U7i":function(t,e,r){"use strict";var n=r("1Mu/"),o=r("9JhN"),a=r("66wQ"),i=r("uLp7"),c=r("8aeu"),u=r("amH4"),s=r("j6nH"),f=r("CD8Q"),l=r("ct80"),p=r("guiJ"),d=r("ZdBB").f,v=r("GFpt").f,m=r("q9+l").f,y=r("Ya2h").trim,b=o.Number,h=b.prototype,E="Number"==u(p(h)),O=function(t){var e,r,n,o,a,i,c,u,s=f(t,!1);if("string"==typeof s&&s.length>2)if(43===(e=(s=y(s)).charCodeAt(0))||45===e){if(88===(r=s.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(s.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+s}for(i=(a=s.slice(2)).length,c=0;c<i;c++)if((u=a.charCodeAt(c))<48||u>o)return NaN;return parseInt(a,n)}return+s};if(a("Number",!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var g,x=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof x&&(E?l((function(){h.valueOf.call(r)})):"Number"!=u(r))?s(new b(O(e)),r,x):O(e)},T=n?d(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;T.length>w;w++)c(b,g=T[w])&&!c(x,g)&&m(x,g,v(b,g));x.prototype=h,h.constructor=x,i(o,"Number",x)}},"6gor":function(t,e,r){"use strict";e.a={DOWN:40,UP:38,LEFT:37,RIGHT:39,ENTER:13,ESCAPE:27,TAB:9,SPACE:32,BACKSPACE:8}},"8+RD":function(t,e,r){var n=r("dSaG");t.exports=function(t){if(!n(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"8Rd0":function(t,e,r){var n=r("amH4"),o=r("9JhN");t.exports="process"==n(o.process)},"97Jx":function(t,e){function r(){return t.exports=r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},r.apply(this,arguments)}t.exports=r},AuHH:function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(e)}t.exports=r},EtY3:function(t,e,r){},GJtw:function(t,e,r){var n=r("ct80"),o=r("fVMg"),a=r("T+0C"),i=o("species");t.exports=function(t){return a>=51||!n((function(){var e=[];return(e.constructor={})[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},HhIw:function(t,e,r){"use strict";r.r(e),r.d(e,"meta",(function(){return l})),r.d(e,"default",(function(){return d}));var n=r("cxan"),o=r("HbGN"),a=r("ERkP"),i=r.n(a),c=r("ZVZ0"),u=r("Qi1R"),s=r("inc5"),f=r("3g/d"),l=(i.a.createElement,{name:"Tabs"}),p={meta:l};function d(t){var e=t.components,r=Object(o.a)(t,["components"]);return Object(c.a)("wrapper",Object(n.a)({},p,r,{components:e,mdxType:"MDXLayout"}),Object(c.a)(u.b,{code:'() => {\n  const [open, setOpen] = React.useState(false);\n  return (\n    <Tabs\n      className="tabs-custom-class"\n      name="tabs-docs"\n      tabs={[\n        {\n          title: \'Title 1\',\n          disabled: false,\n          content: (\n            <Alert message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique" />\n          ),\n        },\n        {\n          title: \'Title 2\',\n          disabled: false,\n          content: (\n            <Alert\n              type="warning"\n              message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique"\n            />\n          ),\n        },\n        {\n          title: \'Title 3\',\n          disabled: true,\n          content: (\n            <Alert\n              type="negative"\n              message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique"\n            />\n          ),\n        },\n      ]}\n      selected={open}\n      onTabSelect={(index) => setOpen(index)}\n    />\n  );\n};\n',scope:{Tabs:s.a,Alert:f.a},display:"vertical",mdxType:"LiveEditorBlock"}),Object(c.a)(u.a,{componentName:"Tabs",mdxType:"GeneratePropsTable"}))}d.isMDXComponent=!0},"IRf+":function(t,e,r){var n=r("hpdy");t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},"KEM+":function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},KOtZ:function(t,e,r){"use strict";var n=r("ax0f"),o=r("mPOS").left,a=r("f4p7"),i=r("znGZ"),c=r("T+0C"),u=r("8Rd0"),s=a("reduce"),f=i("reduce",{1:0});n({target:"Array",proto:!0,forced:!s||!f||!u&&c>79&&c<83},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},LW0h:function(t,e,r){"use strict";var n=r("ax0f"),o=r("0FSu").filter,a=r("GJtw"),i=r("znGZ"),c=a("filter"),u=i("filter");n({target:"Array",proto:!0,forced:!c||!u},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},LdEA:function(t,e){t.exports=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}},"M+/F":function(t,e,r){"use strict";var n=r("ax0f"),o=r("dSaG"),a=r("xt6W"),i=r("mg+6"),c=r("tJVe"),u=r("N4z3"),s=r("2sZ7"),f=r("fVMg"),l=r("GJtw"),p=r("znGZ"),d=l("slice"),v=p("slice",{ACCESSORS:!0,0:0,1:2}),m=f("species"),y=[].slice,b=Math.max;n({target:"Array",proto:!0,forced:!d||!v},{slice:function(t,e){var r,n,f,l=u(this),p=c(l.length),d=i(t,p),v=i(void 0===e?p:e,p);if(a(l)&&("function"!=typeof(r=l.constructor)||r!==Array&&!a(r.prototype)?o(r)&&null===(r=r[m])&&(r=void 0):r=void 0,r===Array||void 0===r))return y.call(l,d,v);for(n=new(void 0===r?Array:r)(b(v-d,0)),f=0;d<v;d++,f++)d in l&&s(n,f,l[d]);return n.length=f,n}})},"N+ot":function(t,e,r){var n=r("T0aG"),o=r("1Pcy");t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!==typeof e?o(t):e}},N9G2:function(t,e,r){var n=r("cww3");t.exports=function(t){return Object(n(t))}},O94r:function(t,e,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var a=typeof n;if("string"===a||"number"===a)t.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&t.push(i)}else if("object"===a)for(var c in n)r.call(n,c)&&n[c]&&t.push(c)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},"T+0C":function(t,e,r){var n,o,a=r("9JhN"),i=r("ZORK"),c=a.process,u=c&&c.versions,s=u&&u.v8;s?o=(n=s.split("."))[0]+n[1]:i&&(!(n=i.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},T0aG:function(t,e){function r(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=r=function(t){return typeof t}:t.exports=r=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}t.exports=r},TbR9:function(t,e,r){var n=r("56Cj");t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},VehP:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},VrFO:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},WXrh:function(t,e,r){"use strict";var n=r("fO07");e.a=n.b},Y9Ll:function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},Ya2h:function(t,e,r){var n=r("cww3"),o="["+r("+/eK")+"]",a=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),c=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(a,"")),2&t&&(r=r.replace(i,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},ZORK:function(t,e,r){var n=r("VCi3");t.exports=n("navigator","userAgent")||""},"aoZ+":function(t,e,r){var n=r("dSaG"),o=r("xt6W"),a=r("fVMg")("species");t.exports=function(t,e){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[a])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},f4p7:function(t,e,r){"use strict";var n=r("ct80");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},fO07:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));r("2G9S");var n=r("97Jx"),o=r.n(n),a=r("ERkP"),i=r.n(a),c=r("O94r"),u=r.n(c),s={TOP_LEFT:"up-left",TOP:"up-center",TOP_RIGHT:"up-right",BOTTOM_LEFT:"down-left",BOTTOM:"down-center",BOTTOM_RIGHT:"down-right"};function f(t){if(t){var e=["arrow"],r=s.BOTTOM,n=s.BOTTOM_LEFT,o=s.BOTTOM_RIGHT,a=s.TOP,i=s.TOP_RIGHT,c=s.TOP_LEFT;switch(t){case r:return e.concat("arrow-bottom","arrow-center");case n:return e.concat("arrow-bottom","arrow-left");case o:return e.concat("arrow-bottom","arrow-right");case a:return e.concat("arrow-center");case i:return e.concat("arrow-right");case c:default:return e}}return""}e.b=function(t,e){var r=function(r){return i.a.createElement(t,o()({},r,{className:u()(r.className,f(e)),arrow:void 0}))};return r.defaultProps={className:void 0},r}},fVMg:function(t,e,r){var n=r("9JhN"),o=r("TN3B"),a=r("8aeu"),i=r("HYrn"),c=r("56Cj"),u=r("TbR9"),s=o("wks"),f=n.Symbol,l=u?f:f&&f.withoutSetter||i;t.exports=function(t){return a(s,t)||(c&&a(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},ho0z:function(t,e,r){var n=r("1Mu/"),o=r("q9+l").f,a=Function.prototype,i=a.toString,c=/^\s*function ([^ (]*)/;n&&!("name"in a)&&o(a,"name",{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},hpdy:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},iQ7j:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},"j+zR":function(t,e){t.exports=function(t,e){return function(r,n,o){if("function"!==typeof t)return new Error("Invalid react-required-if prop type supplied to "+o+". Validation failed.");if("function"!==typeof e)return new Error("Invalid react-required-if condition supplied to "+o+". Validation failed.");var a=e(r)?t.isRequired:t;return a.apply(this,arguments)}}},j6nH:function(t,e,r){var n=r("dSaG"),o=r("waID");t.exports=function(t,e,r){var a,i;return o&&"function"==typeof(a=e.constructor)&&a!==r&&n(i=a.prototype)&&i!==r.prototype&&o(t,i),t}},"jl0/":function(t,e,r){var n=r("dSaG"),o=r("amH4"),a=r("fVMg")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==o(t))}},mPOS:function(t,e,r){var n=r("hpdy"),o=r("N9G2"),a=r("g6a+"),i=r("tJVe"),c=function(t){return function(e,r,c,u){n(r);var s=o(e),f=a(s),l=i(s.length),p=t?l-1:0,d=t?-1:1;if(c<2)for(;;){if(p in f){u=f[p],p+=d;break}if(p+=d,t?p<0:l<=p)throw TypeError("Reduce of empty array with no initial value")}for(;t?p>=0:l>p;p+=d)p in f&&(u=r(u,f[p],p,s));return u}};t.exports={left:c(!1),right:c(!0)}},peMk:function(t,e,r){var n=r("iQ7j");t.exports=function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},vrRf:function(t,e,r){"use strict";var n=r("ax0f"),o=r("H17f").indexOf,a=r("f4p7"),i=r("znGZ"),c=[].indexOf,u=!!c&&1/[1].indexOf(1,-0)<0,s=a("indexOf"),f=i("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:u||!s||!f},{indexOf:function(t){return u?c.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},waID:function(t,e,r){var n=r("FXyv"),o=r("8+RD");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array}catch(a){}return function(r,a){return n(r),o(a),e?t.call(r,a):r.__proto__=a,r}}():void 0)},xt6W:function(t,e,r){var n=r("amH4");t.exports=Array.isArray||function(t){return"Array"==n(t)}},z84I:function(t,e,r){"use strict";var n=r("ax0f"),o=r("0FSu").map,a=r("GJtw"),i=r("znGZ"),c=a("map"),u=i("map");n({target:"Array",proto:!0,forced:!c||!u},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})}},[["1iDD",0,1,2,6,3,5,11,16,4]]]);