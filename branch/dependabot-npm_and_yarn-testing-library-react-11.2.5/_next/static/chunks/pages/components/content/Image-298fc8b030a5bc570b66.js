_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[64],{"+oxZ":function(e,t,n){var r=n("9JhN"),o=n("Ew2P"),a=n("6OVi"),i=n("WxKw");for(var c in o){var s=r[c],l=s&&s.prototype;if(l&&l.forEach!==a)try{i(l,"forEach",a)}catch(u){l.forEach=a}}},"0FSu":function(e,t,n){var r=n("IRf+"),o=n("g6a+"),a=n("N9G2"),i=n("tJVe"),c=n("aoZ+"),s=[].push,l=function(e){var t=1==e,n=2==e,l=3==e,u=4==e,f=6==e,p=7==e,d=5==e||f;return function(h,m,g,b){for(var y,v,w=a(h),O=o(w),x=r(m,g,3),j=i(O.length),E=0,S=b||c,A=t?S(h,j):n||p?S(h,0):void 0;j>E;E++)if((d||E in O)&&(v=x(y=O[E],E,w),e))if(t)A[E]=v;else if(v)switch(e){case 3:return!0;case 5:return y;case 6:return E;case 2:s.call(A,y)}else switch(e){case 4:return!1;case 7:s.call(A,y)}return f?-1:l||u?u:A}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},"56Cj":function(e,t,n){var r=n("ct80");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},"6OVi":function(e,t,n){"use strict";var r=n("0FSu").forEach,o=n("f4p7"),a=n("znGZ"),i=o("forEach"),c=a("forEach");e.exports=i&&c?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},Ew2P:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},HFyK:function(e,t,n){"use strict";var r=n("ddV6"),o=n.n(r),a=n("ERkP"),i=n.n(a),c=n("O94r"),s=n.n(c),l=(n("jwue"),n("+oxZ"),{threshold:.1}),u=function(e){var t=e.elRef;if("eager"===e.loading)return[!1];var n=Object(a.useState)(!1),r=o()(n,2),i=r[0],c=r[1],s=function(e,n){e.forEach((function(e){e.isIntersecting&&(c(!0),n.unobserve(t.current))}))};return Object(a.useEffect)((function(){var e,n=!1;return window.IntersectionObserver&&t&&t.current?!n&&(e=new IntersectionObserver(s,l)).observe(t.current):c(!0),function(){n=!0,e&&e.unobserve(t.current)}}),[t]),[i]},f=(n("PkpH"),function(e){var t=e.id,n=e.src,r=e.alt,c=e.onLoad,l=e.onError,f=e.className,p=e.loading,d=e.stretch,h=e.shrink,m=Object(a.useRef)(),g=u({elRef:m,loading:p}),b=o()(g,1)[0],y=n,v=c;return"lazy"!==p||b||(y="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",v=null),i.a.createElement("img",{id:t,alt:r,src:y,className:s()(["tw-image",{"tw-image__stretch":d,"tw-image__shrink":h},f]),ref:m,onLoad:v,onError:l})});f.defaultProps={id:null,className:"",onLoad:function(){},onError:function(){},loading:"eager",stretch:!0,shrink:!0};t.a=f},"IRf+":function(e,t,n){var r=n("hpdy");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},N9G2:function(e,t,n){var r=n("cww3");e.exports=function(e){return Object(r(e))}},O94r:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},TbR9:function(e,t,n){var r=n("56Cj");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},Ua7V:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){o=!0,a=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}},"aoZ+":function(e,t,n){var r=n("dSaG"),o=n("xt6W"),a=n("fVMg")("species");e.exports=function(e,t){var n;return o(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[a])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},cIrB:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Image",function(){return n("qb6L")}])},ddV6:function(e,t,n){var r=n("qPgQ"),o=n("Ua7V"),a=n("peMk"),i=n("f2kJ");e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||i()}},f2kJ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},f4p7:function(e,t,n){"use strict";var r=n("ct80");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},fVMg:function(e,t,n){var r=n("9JhN"),o=n("TN3B"),a=n("8aeu"),i=n("HYrn"),c=n("56Cj"),s=n("TbR9"),l=o("wks"),u=r.Symbol,f=s?u:u&&u.withoutSetter||i;e.exports=function(e){return a(l,e)||(c&&a(u,e)?l[e]=u[e]:l[e]=f("Symbol."+e)),l[e]}},hpdy:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},iQ7j:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},jwue:function(e,t,n){"use strict";var r=n("ax0f"),o=n("6OVi");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},peMk:function(e,t,n){var r=n("iQ7j");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},qPgQ:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},qb6L:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),i=n.n(a),c=n("ZVZ0"),s=n("Qi1R"),l=n("HFyK"),u=(i.a.createElement,{name:"Image"}),f={meta:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,'Image component renders an img tag with some optional lazy load feature. "alt" and "src" props are required to enforce accessibility good practices.\nLazy loading functionality is currently not supported on IE11. If you are need this kind of functionality to be supported you\'ll need to add a polyfill for Observer window object.'),Object(c.a)(s.b,{code:'<Image\n  alt="test"\n  id="id1"\n  className="a-class-name"\n  src="https://placeholder.pics/svg/200/00b9ff/FFFFFF"\n  loading="lazy"\n  onLoad={() => console.log(\'image loaded\')}\n  onError={(errorEvent) => console.log(errorEvent)}\n  stretch={false}\n  shrink={true}\n/>;\n',scope:{Image:l.a},mdxType:"LiveEditorBlock"}),Object(c.a)(s.a,{componentName:"Image",mdxType:"GeneratePropsTable"}),Object(c.a)("p",null,"Image component provides an image which is ",Object(c.a)("strong",{parentName:"p"},"responsive by default"),". Responsive behaviours can be controlled by two props: ",Object(c.a)("inlineCode",{parentName:"p"},"shrink")," and ",Object(c.a)("inlineCode",{parentName:"p"},"stretch"),". When both of them are set to true the image will adapt to the parent whether the dimensions of the parent are bigger or smaller than native image sizes.\nWhen shrink or strecth are set to false the smallest/biggest dimensions will be set by the native original images sizes."),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},'Image shrink on smaller containers (width:"200px").',Object(c.a)("div",{style:{width:"200px",border:"1px solid var(--brand-navy)"},className:"p-a-1"},Object(c.a)(l.a,{alt:"test",id:"id2",className:"m-t-5",src:"https://placeholder.pics/svg/300/00b9ff/ffffff",loading:"lazy",onLoad:function(){return console.log("image loaded 1")},onError:function(e){return console.log(e)},stretch:!1,mdxType:"Image"})))),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},'Image strecth on bigger containers (width:"400px").',Object(c.a)("div",{style:{width:"400px",border:"1px solid var(--brand-navy)"},className:"p-a-1"},Object(c.a)(l.a,{alt:"test",id:"id2",src:"https://placeholder.pics/svg/300/00b9ff/ffffff",loading:"lazy",onLoad:function(){return console.log("image loaded 1")},onError:function(e){return console.log(e)},stretch:!0,mdxType:"Image"})))),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},'Image doesn\'t shrink (width:"200px").',Object(c.a)("div",{style:{width:"200px",border:"1px solid var(--brand-navy)"},className:"p-a-1"},Object(c.a)(l.a,{alt:"test",id:"id3",src:"https://placeholder.pics/svg/300/00b9ff/ffffff",loading:"lazy",onLoad:function(){return console.log("image loaded 2")},onError:function(e){return console.log(e)},stretch:!0,shrink:!1,mdxType:"Image"})))),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},'Image doesn\'t stretch (width:"400px")',Object(c.a)("div",{style:{width:"400px",border:"1px solid var(--brand-navy)"},className:"p-a-1"},Object(c.a)(l.a,{alt:"test",id:"id4",src:"https://placeholder.pics/svg/300/00b9ff/ffffff",loading:"lazy",onLoad:function(){return console.log("image loaded 2")},onError:function(e){return console.log(e)},stretch:!1,shrink:!1,mdxType:"Image"})))))}p.isMDXComponent=!0},xt6W:function(e,t,n){var r=n("amH4");e.exports=Array.isArray||function(e){return"Array"==r(e)}},znGZ:function(e,t,n){var r=n("1Mu/"),o=n("ct80"),a=n("8aeu"),i=Object.defineProperty,c={},s=function(e){throw e};e.exports=function(e,t){if(a(c,e))return c[e];t||(t={});var n=[][e],l=!!a(t,"ACCESSORS")&&t.ACCESSORS,u=a(t,0)?t[0]:s,f=a(t,1)?t[1]:void 0;return c[e]=!!n&&!o((function(){if(l&&!r)return!0;var e={length:-1};l?i(e,1,{enumerable:!0,get:s}):e[1]=1,n.call(e,u,f)}))}}},[["cIrB",0,1,2,3,5,4]]]);