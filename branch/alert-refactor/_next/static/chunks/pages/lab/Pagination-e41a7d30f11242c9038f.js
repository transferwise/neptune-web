_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[91],{"+KXO":function(e,n,t){var r=t("ax0f"),a=t("N9G2"),i=t("DEeE");r({target:"Object",stat:!0,forced:t("ct80")((function(){i(1)}))},{keys:function(e){return i(a(e))}})},"0FSu":function(e,n,t){var r=t("IRf+"),a=t("g6a+"),i=t("N9G2"),o=t("tJVe"),c=t("aoZ+"),u=[].push,s=function(e){var n=1==e,t=2==e,s=3==e,l=4==e,f=6==e,p=5==e||f;return function(d,v,m,h){for(var E,x,O=i(d),b=a(O),y=r(v,m,3),g=o(b.length),T=0,w=h||c,N=n?w(d,g):t?w(d,0):void 0;g>T;T++)if((p||T in b)&&(x=y(E=b[T],T,O),e))if(n)N[T]=x;else if(x)switch(e){case 3:return!0;case 5:return E;case 6:return T;case 2:u.call(N,E)}else if(l)return!1;return f?-1:s||l?l:N}};e.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},"2G9S":function(e,n,t){"use strict";var r=t("ax0f"),a=t("ct80"),i=t("xt6W"),o=t("dSaG"),c=t("N9G2"),u=t("tJVe"),s=t("2sZ7"),l=t("aoZ+"),f=t("GJtw"),p=t("fVMg"),d=t("T+0C"),v=p("isConcatSpreadable"),m=d>=51||!a((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),h=f("concat"),E=function(e){if(!o(e))return!1;var n=e[v];return void 0!==n?!!n:i(e)};r({target:"Array",proto:!0,forced:!m||!h},{concat:function(e){var n,t,r,a,i,o=c(this),f=l(o,0),p=0;for(n=-1,r=arguments.length;n<r;n++)if(E(i=-1===n?o:arguments[n])){if(p+(a=u(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(t=0;t<a;t++,p++)t in i&&s(f,p,i[t])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(f,p++,i)}return f.length=p,f}})},"2sZ7":function(e,n,t){"use strict";var r=t("CD8Q"),a=t("q9+l"),i=t("lhjL");e.exports=function(e,n,t){var o=r(n);o in e?a.f(e,o,i(0,t)):e[o]=t}},"3g/d":function(e,n,t){"use strict";t("2G9S"),t("vrRf"),t("+KXO"),t("1IsZ");var r=t("97Jx"),a=t.n(r),i=t("KEM+"),o=t.n(i),c=t("ERkP"),u=t.n(c),s=t("O94r"),l=t.n(s),f=(t("j+zR"),t("/Vl7")),p=t("PFiD"),d=t("VehP"),v=t("Ohp4"),m={TOP_LEFT:"up-left",TOP:"up-center",TOP_RIGHT:"up-right",BOTTOM_LEFT:"down-left",BOTTOM:"down-center",BOTTOM_RIGHT:"down-right"};var h,E,x,O=function(e,n){var t=function(t){var r=l()(t.className,function(e){if(e){var n=["arrow"];switch(e){case m.BOTTOM:return n.concat("arrow-bottom","arrow-center");case m.BOTTOM_LEFT:return n.concat("arrow-bottom","arrow-left");case m.BOTTOM_RIGHT:return n.concat("arrow-bottom","arrow-right");case m.TOP:return n.concat("arrow-center");case m.TOP_RIGHT:return n.concat("arrow-right");case m.TOP_LEFT:default:return n}}return null}(n));return u.a.createElement(e,a()({},t,{className:r}))};return t.defaultProps={arrow:null,className:""},t},b=t("UTRh"),y=t("UlFz"),g=[y.a.EMPH,y.a.STRONG,y.a.TEXT],T=function(e){return u.a.createElement(b.a,a()({},e,{as:"span",allowList:g,blockList:void 0}))},w=t("s+Iv"),N=(h={},o()(h,p.a.SUCCESS,p.a.POSITIVE),o()(h,p.a.INFO,p.a.NEUTRAL),o()(h,p.a.ERROR,p.a.NEGATIVE),h),P=(E={},o()(E,p.a.POSITIVE,f.e),o()(E,p.a.NEUTRAL,f.q),o()(E,p.a.WARNING,f.a),o()(E,p.a.NEGATIVE,f.j),E),R=function e(n){var t=n.arrow,r=n.action,i=n.children,o=n.className,s=n.icon,f=n.onDismiss,p=n.message,d=n.type;if(I({arrow:t}),t){var m=O(e,t);return u.a.createElement(m,a()({},n,{arrow:void 0}))}I(n);var h=N[d]||d,E=P[h],x=s?Object(c.cloneElement)(s,{size:24}):u.a.createElement(E,{size:24});return u.a.createElement("div",{role:"alert",className:l()("alert d-flex","alert-".concat(h),o)},x,u.a.createElement("div",{className:"alert__message p-l-2 flex-grow-1"},u.a.createElement("div",null,i||u.a.createElement(T,null,p)),r&&u.a.createElement("a",{href:r.href,className:"m-t-1 d-inline-block","aria-label":r["aria-label"]},r.text)),f&&u.a.createElement(v.a,{onClick:f,size:16,className:"m-l-2 close"}))},A=(x={},o()(x,p.a.SUCCESS,"Alert.Type.POSITIVE"),o()(x,p.a.INFO,"Alert.Type.NEUTRAL"),o()(x,p.a.ERROR,"Alert.Type.NEGATIVE"),x),S=Object.keys(N);function I(e){var n=e.arrow,t=e.children,r=e.dismissible,a=e.size,i=e.type;Object(w.a)("Alert has deprecated the `arrow` prop. Please remove it.",!!n),Object(w.a)("Alert has deprecated the `dismissible` prop. The Alert will be considered dismissible if an `onDismiss` hander is present.",!!r),Object(w.a)("Alert has deprecated the use of `children`. Please use the `message` prop instead.",!!t),Object(w.a)("Alert no longer recognises the prop `size`. Please remove it.",!!a),Object(w.a)("Alert has deprecated the ".concat(i," value for the `type` prop. Please update to ").concat(A[i],"."),0<=S.indexOf(i))}R.ArrowPosition=m,R.Size={SMALL:d.a.SMALL,LARGE:d.a.LARGE},R.Type=p.a,R.defaultProps={action:void 0,arrow:void 0,className:"",dismissible:!1,icon:void 0,size:void 0,type:R.Type.NEUTRAL};n.a=R},"56Cj":function(e,n,t){var r=t("ct80");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},"97Jx":function(e,n){function t(){return e.exports=t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},t.apply(this,arguments)}e.exports=t},DEeE:function(e,n,t){var r=t("yRya"),a=t("sX5C");e.exports=Object.keys||function(e){return r(e,a)}},GJtw:function(e,n,t){var r=t("ct80"),a=t("fVMg"),i=t("T+0C"),o=a("species");e.exports=function(e){return i>=51||!r((function(){var n=[];return(n.constructor={})[o]=function(){return{foo:1}},1!==n[e](Boolean).foo}))}},"IRf+":function(e,n,t){var r=t("hpdy");e.exports=function(e,n,t){if(r(e),void 0===n)return e;switch(t){case 0:return function(){return e.call(n)};case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,a){return e.call(n,t,r,a)}}return function(){return e.apply(n,arguments)}}},"KEM+":function(e,n){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},N9G2:function(e,n,t){var r=t("cww3");e.exports=function(e){return Object(r(e))}},O94r:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)t.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(e.exports=r)}()},Ohp4:function(e,n,t){"use strict";var r=t("ERkP"),a=t.n(r),i=t("O94r"),o=t.n(i),c=t("/Vl7"),u=(t("ryiH"),function(e){var n=e.onClick,t=e.className,r=e.size;return a.a.createElement("button",{type:"button",className:o()("np-close-button",t),"aria-label":"Close",onClick:n},a.a.createElement(c.i,{size:r}))});u.defaultProps={className:null,size:(u.Size={SMALL:16,LARGE:24}).LARGE},n.a=u},PFiD:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={NEGATIVE:"negative",NEUTRAL:"neutral",POSITIVE:"positive",WARNING:"warning",INFO:"info",ERROR:"error",SUCCESS:"success"}},"T+0C":function(e,n,t){var r,a,i=t("9JhN"),o=t("ZORK"),c=i.process,u=c&&c.versions,s=u&&u.v8;s?a=(r=s.split("."))[0]+r[1]:o&&(!(r=o.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/))&&(a=r[1]),e.exports=a&&+a},TbR9:function(e,n,t){var r=t("56Cj");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},TryA:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return x})),t.d(n,"default",(function(){return b}));var r=t("cxan"),a=t("HbGN"),i=t("ERkP"),o=t.n(i),c=t("ZVZ0"),u=t("Qi1R"),s=(t("z84I"),t("O94r")),l=t.n(s),f=t("/Vl7"),p=function(e){var n=e.disabled,t=e.active,r=e.pageNumber,a=e.onClick,i=e.children,c=function(e){e.preventDefault(),n||t||a(r)},u=t?"Go to page ".concat(r):"Current page, page ".concat(r);return o.a.createElement("li",null,o.a.createElement("a",{href:"/",onClick:c,onKeyDown:function(e){"Enter"===e.key&&c(e)},"aria-label":u,"aria-current":t,className:l()({disabled:n,active:t})},i))};p.defaultProps={disabled:!1,active:!1};var d=p,v=(t("H6sZ"),{NUMBERS_ONLY:"numbersOnly",ARROWS_ONLY:"arrowsOnly",FULL:"full"}),m=function(e){var n=e.type,t=e.numberOfPages,r=e.currentPageIndex,a=e.onClick,i=e.canFetchMorePages,c=e.className,u=n!==v.NUMBERS_ONLY,s=[];if(n!==v.ARROWS_ONLY){switch(r){case 0:s.push({index:0,active:!0}),1<t&&s.push({index:1}),2<t&&s.push({index:2});break;case t-1:2<t&&s.push({index:t-3}),1<t&&s.push({index:t-2}),s.push({index:t-1,active:!0});break;default:s.push({index:r-1},{index:r,active:!0},{index:r+1})}var p=s[0].index;0<p&&(2<p?s.unshift({label:"...",index:p-1}):2===p&&s.unshift({index:1}),s.unshift({index:0}));var m=s[s.length-1].index;m<t-1&&(m<t-3?s.push({label:"...",index:m+1}):m===t-3&&s.push({index:t-2}),s.push({index:t-1})),i&&s.push({label:"...",index:t})}return o.a.createElement("nav",{role:"navigation","aria-label":"Pagination navigation"},o.a.createElement("ul",{className:l()("tw-pagination",c)},u&&o.a.createElement(d,{pageNumber:r-1,onClick:a,disabled:0===r},o.a.createElement(f.f,null)),s.map((function(e){var n=e.label||e.index+1;return o.a.createElement(d,{key:e.index,pageNumber:e.index,onClick:a,active:e.active},n)})),u&&o.a.createElement(d,{pageNumber:r+1,onClick:a,disabled:!i&&r===t-1},o.a.createElement(f.g,null))))};m.defaultProps={type:(m.Type=v).FULL,canFetchMorePages:!1,className:void 0};var h=m,E=t("3g/d"),x=(o.a.createElement,{name:"Pagination"}),O={meta:x};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},O,t,{components:n,mdxType:"MDXLayout"}),Object(c.a)(E.a,{type:E.a.Type.WARNING,mdxType:"Alert"},"Please note that this component is still in a testing phase and we do not guarantee that the API will remain the same. Please feel free to test it and provide us a feedback to help improve it before the final release."),Object(c.a)(u.b,{code:"() => {\n  const [currentPageIndex, setCurrentPageIndex] = React.useState(4);\n  return (\n    <Pagination\n      canFetchMorePages={false}\n      type={Pagination.Type.FULL}\n      numberOfPages={9}\n      currentPageIndex={currentPageIndex}\n      onClick={setCurrentPageIndex}\n    />\n  );\n};\n",scope:{Pagination:h},display:"vertical",mdxType:"LiveEditorBlock"}),Object(c.a)(u.a,{componentName:"Pagination",mdxType:"GeneratePropsTable"}))}b.isMDXComponent=!0},VehP:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},"Xzk+":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lab/Pagination",function(){return t("TryA")}])},ZORK:function(e,n,t){var r=t("VCi3");e.exports=r("navigator","userAgent")||""},"aoZ+":function(e,n,t){var r=t("dSaG"),a=t("xt6W"),i=t("fVMg")("species");e.exports=function(e,n){var t;return a(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!a(t.prototype)?r(t)&&null===(t=t[i])&&(t=void 0):t=void 0),new(void 0===t?Array:t)(0===n?0:n)}},f4p7:function(e,n,t){"use strict";var r=t("ct80");e.exports=function(e,n){var t=[][e];return!!t&&r((function(){t.call(null,n||function(){throw 1},1)}))}},fVMg:function(e,n,t){var r=t("9JhN"),a=t("TN3B"),i=t("8aeu"),o=t("HYrn"),c=t("56Cj"),u=t("TbR9"),s=a("wks"),l=r.Symbol,f=u?l:l&&l.withoutSetter||o;e.exports=function(e){return i(s,e)||(c&&i(l,e)?s[e]=l[e]:s[e]=f("Symbol."+e)),s[e]}},hpdy:function(e,n){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},"j+zR":function(e,n){e.exports=function(e,n){return function(t,r,a){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+a+". Validation failed.");if("function"!==typeof n)return new Error("Invalid react-required-if condition supplied to "+a+". Validation failed.");var i=n(t)?e.isRequired:e;return i.apply(this,arguments)}}},ryiH:function(e,n,t){},"s+Iv":function(e,n,t){"use strict";(function(e){function r(n,t){t&&function(n){var t,r;"development"===(null===(t=e)||void 0===t||null===(r=t.env)||void 0===r?void 0:"production")&&console.warn(n)}(n)}t.d(n,"a",(function(){return r}))}).call(this,t("F63i"))},vrRf:function(e,n,t){"use strict";var r=t("ax0f"),a=t("H17f").indexOf,i=t("f4p7"),o=t("znGZ"),c=[].indexOf,u=!!c&&1/[1].indexOf(1,-0)<0,s=i("indexOf"),l=o("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:u||!s||!l},{indexOf:function(e){return u?c.apply(this,arguments)||0:a(this,e,arguments.length>1?arguments[1]:void 0)}})},xt6W:function(e,n,t){var r=t("amH4");e.exports=Array.isArray||function(e){return"Array"==r(e)}},z84I:function(e,n,t){"use strict";var r=t("ax0f"),a=t("0FSu").map,i=t("GJtw"),o=t("znGZ"),c=i("map"),u=o("map");r({target:"Array",proto:!0,forced:!c||!u},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},znGZ:function(e,n,t){var r=t("1Mu/"),a=t("ct80"),i=t("8aeu"),o=Object.defineProperty,c={},u=function(e){throw e};e.exports=function(e,n){if(i(c,e))return c[e];n||(n={});var t=[][e],s=!!i(n,"ACCESSORS")&&n.ACCESSORS,l=i(n,0)?n[0]:u,f=i(n,1)?n[1]:void 0;return c[e]=!!t&&!a((function(){if(s&&!r)return!0;var e={length:-1};s?o(e,1,{enumerable:!0,get:u}):e[1]=1,t.call(e,l,f)}))}}},[["Xzk+",0,1,2,6,3,5,11,4]]]);