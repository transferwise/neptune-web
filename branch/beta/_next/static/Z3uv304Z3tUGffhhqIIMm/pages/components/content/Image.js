(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"2AZx":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"4NyN":function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},"4im6":function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n("lpmq"))},"69bb":function(t,e,n){var r=n("MlVR"),o=n("UCKC"),i=n("pFnp");t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},AoMu:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},CrPR:function(t,e,n){var r=n("e1rg");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},D5ce:function(t,e,n){var r=n("4im6"),o=n("4NyN"),i=n("S3sS"),a=n("69bb");for(var c in o){var u=r[c],s=u&&u.prototype;if(s&&s.forEach!==i)try{a(s,"forEach",i)}catch(l){s.forEach=i}}},DZbC:function(t,e,n){var r=n("QKKh"),o=n("QOpd"),i=n("R/wC")("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},EZsP:function(t,e){t.exports=!1},FYE5:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},HFyK:function(t,e,n){"use strict";var r=n("XsB/"),o=n.n(r),i=n("ERkP"),a=n.n(i),c=n("O94r"),u=n.n(c),s=(n("D5ce"),{threshold:.1}),l=function(t){var e=t.elRef;if("eager"===t.loading)return[!1];var n=Object(i.useState)(!1),r=o()(n,2),a=r[0],c=r[1],u=function(t,n){t.forEach((function(t){t.isIntersecting&&(c(!0),n.unobserve(e.current))}))};return Object(i.useEffect)((function(){var t,n=!1;return window.IntersectionObserver&&e&&e.current?!n&&(t=new IntersectionObserver(u,s)).observe(e.current):c(!0),function(){n=!0,t&&t.unobserve(e.current)}}),[e]),[a]},f=(n("PkpH"),function(t){var e=t.id,n=t.src,r=t.alt,c=t.onLoad,s=t.onError,f=t.className,p=t.loading,d=t.stretch,h=t.shrink,m=Object(i.useRef)(),b=l({elRef:m,loading:p}),v=o()(b,1)[0],y=n,g=c;return"lazy"!==p||v||(y="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",g=null),a.a.createElement("img",{id:e,alt:r,src:y,className:u()(["tw-image",{"tw-image__stretch":d,"tw-image__shrink":h},f]),ref:m,onLoad:g,onError:s})});f.defaultProps={id:null,className:"",onLoad:function(){},onError:function(){},loading:"eager",stretch:!0,shrink:!0};e.a=f},JbFr:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},M12S:function(t,e,n){var r=n("4im6"),o=n("iW/6"),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},MlVR:function(t,e,n){var r=n("AoMu");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},O94r:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&t.push(a)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&t.push(c)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},PjUs:function(t,e,n){var r=n("fyTV"),o=n("xFK5"),i=n("k8sU"),a=n("QI0Q"),c=n("DZbC"),u=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,l=4==t,f=6==t,p=5==t||f;return function(d,h,m,b){for(var v,y,g=i(d),x=o(g),w=r(h,m,3),j=a(x.length),O=0,S=b||c,A=e?S(d,j):n?S(d,0):void 0;j>O;O++)if((p||O in x)&&(y=w(v=x[O],O,g),t))if(e)A[O]=y;else if(y)switch(t){case 3:return!0;case 5:return v;case 6:return O;case 2:u.call(A,v)}else if(l)return!1;return f?-1:s||l?l:A}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},PkpH:function(t,e,n){},QI0Q:function(t,e,n){var r=n("zKCV"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},QKKh:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},QOpd:function(t,e,n){var r=n("l9lp");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"R/wC":function(t,e,n){var r=n("4im6"),o=n("lEPA"),i=n("d3yh"),a=n("rdnw"),c=n("e1rg"),u=n("CrPR"),s=o("wks"),l=r.Symbol,f=u?l:l&&l.withoutSetter||a;t.exports=function(t){return i(s,t)||(c&&i(l,t)?s[t]=l[t]:s[t]=f("Symbol."+t)),s[t]}},S3sS:function(t,e,n){"use strict";var r=n("PjUs").forEach,o=n("u2c9"),i=n("jw1G"),a=o("forEach"),c=i("forEach");t.exports=a&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},SxpY:function(t,e,n){var r=n("QKKh");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},Ttzw:function(t,e,n){var r=n("FYE5");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},UCKC:function(t,e,n){var r=n("MlVR"),o=n("o+cr"),i=n("SxpY"),a=n("jzcl"),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=a(e,!0),i(n),o)try{return c(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},V8uO:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},"XsB/":function(t,e,n){var r=n("V8uO"),o=n("jPt+"),i=n("Ttzw"),a=n("2AZx");t.exports=function(t,e){return r(t)||o(t,e)||i(t,e)||a()}},cIrB:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Image",function(){return n("qb6L")}])},d3yh:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},e1rg:function(t,e,n){var r=n("AoMu");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},fyTV:function(t,e,n){var r=n("JbFr");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"iW/6":function(t,e,n){var r=n("4im6"),o=n("69bb");t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},"jPt+":function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}},jw1G:function(t,e,n){var r=n("MlVR"),o=n("AoMu"),i=n("d3yh"),a=Object.defineProperty,c={},u=function(t){throw t};t.exports=function(t,e){if(i(c,t))return c[t];e||(e={});var n=[][t],s=!!i(e,"ACCESSORS")&&e.ACCESSORS,l=i(e,0)?e[0]:u,f=i(e,1)?e[1]:void 0;return c[t]=!!n&&!o((function(){if(s&&!r)return!0;var t={length:-1};s?a(t,1,{enumerable:!0,get:u}):t[1]=1,n.call(t,l,f)}))}},jzcl:function(t,e,n){var r=n("QKKh");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},k8sU:function(t,e,n){var r=n("m8+a");t.exports=function(t){return Object(r(t))}},l9lp:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},lEPA:function(t,e,n){var r=n("EZsP"),o=n("M12S");(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"\xa9 2020 Denis Pushkarev (zloirock.ru)"})},"m8+a":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"o+cr":function(t,e,n){var r=n("MlVR"),o=n("AoMu"),i=n("ofnB");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},ofnB:function(t,e,n){var r=n("4im6"),o=n("QKKh"),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},pFnp:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},qb6L:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return f})),n.d(e,"default",(function(){return h}));var r=n("cxan"),o=n("HbGN"),i=n("ERkP"),a=n.n(i),c=n("ZVZ0"),u=n("Qi1R"),s=n("HFyK"),l='<Image\n  alt="test"\n  id="id1"\n  className="a-class-name"\n  src="https://placeholder.pics/svg/200/00b9ff/FFFFFF"\n  loading="lazy"\n  onLoad={() => console.log(\'image loaded\')}\n  onError={(errorEvent) => console.log(errorEvent)}\n  stretch={false}\n  shrink={true}\n/>;\n',f=(a.a.createElement,{name:"Image"}),p={meta:f},d="wrapper";function h(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(c.a)(d,Object(r.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)("p",null,'Image component renders an img tag with some optional lazy load feature. "alt" and "src" props are required to enforce accessibility good practices.\nLazy loading functionality is currently not supported on IE11. If you are need this kind of functionality to be supported you\'ll need to add a polyfill for Observer window object.'),Object(c.a)(u.b,{code:l,scope:{Image:s.a},mdxType:"LiveEditorBlock"}),Object(c.a)(u.a,{componentName:"Image",mdxType:"GeneratePropsTable"}),Object(c.a)("p",null,"Image component provides an image which is ",Object(c.a)("strong",{parentName:"p"},"responsive by default"),". Responsive behaviours can be controlled by two props: ",Object(c.a)("inlineCode",{parentName:"p"},"shrink")," and ",Object(c.a)("inlineCode",{parentName:"p"},"stretch"),". When both of them are set to true the image will adapt to the parent whether the dimensions of the parent are bigger or smaller than native image sizes.\nWhen shrink or strecth are set to false the smallest/biggest dimensions will be set by the native original images sizes."),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},'Image shrink on smaller containers (width:"200px").',Object(c.a)("div",{style:{width:"200px",border:"1px solid var(--brand-navy)"},className:"p-a-1"},Object(c.a)(s.a,{alt:"test",id:"id2",className:"m-t-5",src:"https://placeholder.pics/svg/300/00b9ff/ffffff",loading:"lazy",onLoad:function(){return console.log("image loaded 1")},onError:function(t){return console.log(t)},stretch:!1,mdxType:"Image"})))),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},'Image strecth on bigger containers (width:"400px").',Object(c.a)("div",{style:{width:"400px",border:"1px solid var(--brand-navy)"},className:"p-a-1"},Object(c.a)(s.a,{alt:"test",id:"id2",src:"https://placeholder.pics/svg/300/00b9ff/ffffff",loading:"lazy",onLoad:function(){return console.log("image loaded 1")},onError:function(t){return console.log(t)},stretch:!0,mdxType:"Image"})))),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},'Image doesn\'t shrink (width:"200px").',Object(c.a)("div",{style:{width:"200px",border:"1px solid var(--brand-navy)"},className:"p-a-1"},Object(c.a)(s.a,{alt:"test",id:"id3",src:"https://placeholder.pics/svg/300/00b9ff/ffffff",loading:"lazy",onLoad:function(){return console.log("image loaded 2")},onError:function(t){return console.log(t)},stretch:!0,shrink:!1,mdxType:"Image"})))),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},'Image doesn\'t stretch (width:"400px")',Object(c.a)("div",{style:{width:"400px",border:"1px solid var(--brand-navy)"},className:"p-a-1"},Object(c.a)(s.a,{alt:"test",id:"id4",src:"https://placeholder.pics/svg/300/00b9ff/ffffff",loading:"lazy",onLoad:function(){return console.log("image loaded 2")},onError:function(t){return console.log(t)},stretch:!1,shrink:!1,mdxType:"Image"})))))}h.isMDXComponent=!0},rdnw:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},u2c9:function(t,e,n){"use strict";var r=n("AoMu");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},xFK5:function(t,e,n){var r=n("AoMu"),o=n("l9lp"),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},zKCV:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}}},[["cIrB",0,1,2,3,4,5]]]);