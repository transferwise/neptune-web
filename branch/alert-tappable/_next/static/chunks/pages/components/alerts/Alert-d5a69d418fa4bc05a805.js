_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[54],{"+KRd":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={NEGATIVE:"negative",NEUTRAL:"neutral",POSITIVE:"positive",WARNING:"warning",INFO:"info",ERROR:"error",SUCCESS:"success"}},"+KXO":function(e,t,n){var r=n("ax0f"),a=n("N9G2"),o=n("DEeE");r({target:"Object",stat:!0,forced:n("ct80")((function(){o(1)}))},{keys:function(e){return o(a(e))}})},"2G9S":function(e,t,n){"use strict";var r=n("ax0f"),a=n("ct80"),o=n("xt6W"),i=n("dSaG"),c=n("N9G2"),s=n("tJVe"),l=n("2sZ7"),u=n("aoZ+"),f=n("GJtw"),d=n("fVMg"),p=n("T+0C"),b=d("isConcatSpreadable"),m=p>=51||!a((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),v=f("concat"),y=function(e){if(!i(e))return!1;var t=e[b];return void 0!==t?!!t:o(e)};r({target:"Array",proto:!0,forced:!m||!v},{concat:function(e){var t,n,r,a,o,i=c(this),f=u(i,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(y(o=-1===t?i:arguments[t])){if(d+(a=s(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<a;n++,d++)n in o&&l(f,d,o[n])}else{if(d>=9007199254740991)throw TypeError("Maximum allowed index exceeded");l(f,d++,o)}return f.length=d,f}})},"2sZ7":function(e,t,n){"use strict";var r=n("CD8Q"),a=n("q9+l"),o=n("lhjL");e.exports=function(e,t,n){var i=r(t);i in e?a.f(e,i,o(0,n)):e[i]=n}},"3g/d":function(e,t,n){"use strict";n("2G9S"),n("jQ3i"),n("+KXO"),n("1IsZ"),n("x4t0");var r=n("ddV6"),a=n.n(r),o=n("KEM+"),i=n.n(o),c=n("ERkP"),s=n.n(c),l=n("O94r"),u=n.n(l),f=(n("j+zR"),n("/Vl7")),d=n("+KRd"),p=n("VehP"),b=n("qGsU"),m=n("WXrh"),v=n("fO07"),y=n("97Jx"),O=n.n(y),h=n("UTRh"),j=[n("UlFz").a.STRONG],T=function(e){return s.a.createElement(h.a,O()({},e,{as:"span",allowList:j,blockList:void 0}))};T.defaultProps={className:void 0};var w,E,g,x=T,A=n("s+Iv"),S=(w={},i()(w,d.a.SUCCESS,d.a.POSITIVE),i()(w,d.a.INFO,d.a.NEUTRAL),i()(w,d.a.ERROR,d.a.NEGATIVE),w),R=(E={},i()(E,d.a.POSITIVE,f.f),i()(E,d.a.NEUTRAL,f.q),i()(E,d.a.WARNING,f.a),i()(E,d.a.NEGATIVE,f.k),E),N=function e(t){var n=Object(c.useState)(!1),r=a()(n,2),o=r[0],i=r[1],l=t.arrow,f=t.action,d=t.children,p=t.className,v=t.icon,y=t.onDismiss,O=t.message,h=t.type,j=Object(c.useRef)(null);if(l){var T=Object(m.a)(e,l);return s.a.createElement(T,t)}!function(e){var t=e.size,n=e.type;Object(A.b)("Alert no longer supports any possible variations in size. Please remove the `size` prop.",!!t),Object(A.b)("Alert has deprecated the ".concat(n," value for the `type` prop. Please update to ").concat(P[n],"."),L.includes(n))}(t);var w=S[h]||h,E=R[w],g=v?Object(c.cloneElement)(v,{size:24}):s.a.createElement(E,{size:24});return s.a.createElement("div",{role:"alert",className:u()("alert d-flex","alert-".concat(w),p),onTouchStart:function(){return i(!0)},onTouchEnd:function(e){null!==j&&void 0!==j&&j.current&&!j.current.contains(e.target)&&o&&null!==f&&void 0!==f&&f.href&&("_blank"===(null===f||void 0===f?void 0:f.target)?window.top.open(f.href):window.top.location.assign(f.href)),i(!1)},onTouchMove:function(){return i(!1)}},g,s.a.createElement("div",{className:"alert__message p-l-2 flex-grow-1"},s.a.createElement("div",null,d||s.a.createElement(x,null,O)),f&&s.a.createElement("a",{href:f.href,className:"m-t-1 d-inline-block","aria-label":f["aria-label"],target:f.target},f.text)),y&&s.a.createElement(b.a,{onClick:y,size:b.a.Size.SMALL,className:"m-l-2",ref:j}))},P=(g={},i()(g,d.a.SUCCESS,"Alert.Type.POSITIVE"),i()(g,d.a.INFO,"Alert.Type.NEUTRAL"),i()(g,d.a.ERROR,"Alert.Type.NEGATIVE"),g),L=Object.keys(S);N.ArrowPosition=v.a,N.Size={SMALL:p.a.SMALL,LARGE:p.a.LARGE},N.Type=d.a,N.defaultProps={action:void 0,arrow:void 0,className:void 0,dismissible:void 0,icon:void 0,type:N.Type.NEUTRAL};t.a=N},"56Cj":function(e,t,n){var r=n("ct80");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},"97Jx":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},GJtw:function(e,t,n){var r=n("ct80"),a=n("fVMg"),o=n("T+0C"),i=a("species");e.exports=function(e){return o>=51||!r((function(){var t=[];return(t.constructor={})[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},HbAC:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alerts/Alert",function(){return n("cZ+Q")}])},"KEM+":function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},KcoV:function(e,t,n){},N9G2:function(e,t,n){var r=n("cww3");e.exports=function(e){return Object(r(e))}},O94r:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},"T+0C":function(e,t,n){var r,a,o=n("9JhN"),i=n("ZORK"),c=o.process,s=c&&c.versions,l=s&&s.v8;l?a=(r=l.split("."))[0]+r[1]:i&&(!(r=i.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/))&&(a=r[1]),e.exports=a&&+a},TbR9:function(e,t,n){var r=n("56Cj");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},Ua7V:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}},VehP:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},WXrh:function(e,t,n){"use strict";var r=n("fO07");t.a=r.b},ZORK:function(e,t,n){var r=n("VCi3");e.exports=r("navigator","userAgent")||""},"aoZ+":function(e,t,n){var r=n("dSaG"),a=n("xt6W"),o=n("fVMg")("species");e.exports=function(e,t){var n;return a(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!a(n.prototype)?r(n)&&null===(n=n[o])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"cZ+Q":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return f})),n.d(t,"default",(function(){return p}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),i=n.n(o),c=n("ZVZ0"),s=n("Qi1R"),l=n("3g/d"),u=n("/Vl7"),f=(i.a.createElement,{name:"Alert"}),d={meta:f};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"Use Alert for contextual feedback messages for typical user actions with the handful of available and flexible alert messages."),Object(c.a)(s.b,{code:"() => {\n  const [dismissed, setDismissed] = React.useState(false);\n  return dismissed ? null : (\n    <Alert\n      action={{\n        'aria-label': 'Learn more about expected payment times',\n        text: 'Learn more',\n        href: 'https://www.transferwise.com',\n      }}\n      message=\"Payments sent to your bank details **today** might not arrive in time for the holidays.\"\n      onDismiss={() => setDismissed(true)}\n      type={Alert.Type.POSITIVE}\n    />\n  );\n};\n",scope:{Alert:l.a,Star:u.v},mdxType:"LiveEditorBlock"}),Object(c.a)(s.a,{componentName:"Alert",mdxType:"GeneratePropsTable"}),Object(c.a)("h2",{id:"types"},"Types"),Object(c.a)("table",{className:"docs-table table table-condensed"},Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"Name"),Object(c.a)("th",null,"Preview"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"Neutral"),Object(c.a)("td",null,Object(c.a)(l.a,{message:"Payments sent to your bank details **today** might not arrive in time for the holidays.",mdxType:"Alert"}))),Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"Warning"),Object(c.a)("td",null,Object(c.a)(l.a,{type:"warning",message:"Payments sent to your bank details **today** might not arrive in time for the holidays.",mdxType:"Alert"}))),Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"Positive"),Object(c.a)("td",null,Object(c.a)(l.a,{type:"positive",message:"Payments sent to your bank details **today** might not arrive in time for the holidays.",mdxType:"Alert"}))),Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"Negative"),Object(c.a)("td",null,Object(c.a)(l.a,{type:"negative",message:"Payments sent to your bank details **today** might not arrive in time for the holidays.",mdxType:"Alert"}))))),Object(c.a)("h2",{id:"content-options"},"Content options"),Object(c.a)("p",null,"You can customise the message text style and the icon. Use the default icons where you can - only provide a custom icon if it helps give the user more context as to the contents of the message."),Object(c.a)("table",{className:"table docs-table table-condensed"},Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"Description"),Object(c.a)("th",null,"Preview"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"The ",Object(c.a)("code",null,"message")," prop accepts both plain text and text with bolded elements. To bold words use the markdown style of ",Object(c.a)("code",null,"**two asterisks**"),"."),Object(c.a)("td",null,Object(c.a)(l.a,{message:"Payments sent to your bank details **today** might not arrive in time for the holidays.",mdxType:"Alert"}))),Object(c.a)("tr",null,Object(c.a)("td",null,"Example of an Alert with icon = ",Object(c.a)("code",null,"<Star />")),Object(c.a)("td",null,Object(c.a)(l.a,{icon:Object(c.a)(u.v,{mdxType:"Star"}),message:"Thank you for your rating, your feedback is important to us.",mdxType:"Alert"}))))))}p.isMDXComponent=!0},ddV6:function(e,t,n){var r=n("qPgQ"),a=n("Ua7V"),o=n("peMk"),i=n("f2kJ");e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||i()}},f2kJ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},f4p7:function(e,t,n){"use strict";var r=n("ct80");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},fO07:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n("2G9S");var r=n("97Jx"),a=n.n(r),o=n("ERkP"),i=n.n(o),c=n("O94r"),s=n.n(c),l={TOP_LEFT:"up-left",TOP:"up-center",TOP_RIGHT:"up-right",BOTTOM_LEFT:"down-left",BOTTOM:"down-center",BOTTOM_RIGHT:"down-right"};function u(e){if(e){var t=["arrow"],n=l.BOTTOM,r=l.BOTTOM_LEFT,a=l.BOTTOM_RIGHT,o=l.TOP,i=l.TOP_RIGHT,c=l.TOP_LEFT;switch(e){case n:return t.concat("arrow-bottom","arrow-center");case r:return t.concat("arrow-bottom","arrow-left");case a:return t.concat("arrow-bottom","arrow-right");case o:return t.concat("arrow-center");case i:return t.concat("arrow-right");case c:default:return t}}return""}t.b=function(e,t){var n=function(n){return i.a.createElement(e,a()({},n,{className:s()(n.className,u(t)),arrow:void 0}))};return n.defaultProps={className:void 0},n}},fVMg:function(e,t,n){var r=n("9JhN"),a=n("TN3B"),o=n("8aeu"),i=n("HYrn"),c=n("56Cj"),s=n("TbR9"),l=a("wks"),u=r.Symbol,f=s?u:u&&u.withoutSetter||i;e.exports=function(e){return o(l,e)||(c&&o(u,e)?l[e]=u[e]:l[e]=f("Symbol."+e)),l[e]}},iQ7j:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},"j+zR":function(e,t){e.exports=function(e,t){return function(n,r,a){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+a+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+a+". Validation failed.");var o=t(n)?e.isRequired:e;return o.apply(this,arguments)}}},"jl0/":function(e,t,n){var r=n("dSaG"),a=n("amH4"),o=n("fVMg")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==a(e))}},kQwz:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("ERkP"),a=n("ymT0"),o=n("yGPN");function i(){var e=r.useContext(a.a);return Object(o.c)(e),e}},peMk:function(e,t,n){var r=n("iQ7j");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},qGsU:function(e,t,n){"use strict";n("1IsZ");var r=n("ERkP"),a=n.n(r),o=n("O94r"),i=n.n(o),c=n("kQwz"),s=n("/Vl7"),l=n("BAoe"),u=Object(l.a)({ariaLabel:{id:"neptune.CloseButton.ariaLabel"}}),f=(n("KcoV"),a.a.forwardRef((function(e,t){var n=Object(c.a)(),r=e.onClick,o=e.className,l=e.size;return a.a.createElement("button",{ref:t,type:"button",className:i()("np-close-button close btn-link text-no-decoration",o),"aria-label":n.formatMessage(u.ariaLabel),onClick:r},a.a.createElement(s.j,{size:l}))})));f.Size={SMALL:16,LARGE:24},f.defaultProps={className:null,size:f.Size.LARGE};t.a=f},qPgQ:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},vrRf:function(e,t,n){"use strict";var r=n("ax0f"),a=n("H17f").indexOf,o=n("f4p7"),i=n("znGZ"),c=[].indexOf,s=!!c&&1/[1].indexOf(1,-0)<0,l=o("indexOf"),u=i("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:s||!l||!u},{indexOf:function(e){return s?c.apply(this,arguments)||0:a(this,e,arguments.length>1?arguments[1]:void 0)}})},xt6W:function(e,t,n){var r=n("amH4");e.exports=Array.isArray||function(e){return"Array"==r(e)}},znGZ:function(e,t,n){var r=n("1Mu/"),a=n("ct80"),o=n("8aeu"),i=Object.defineProperty,c={},s=function(e){throw e};e.exports=function(e,t){if(o(c,e))return c[e];t||(t={});var n=[][e],l=!!o(t,"ACCESSORS")&&t.ACCESSORS,u=o(t,0)?t[0]:s,f=o(t,1)?t[1]:void 0;return c[e]=!!n&&!a((function(){if(l&&!r)return!0;var e={length:-1};l?i(e,1,{enumerable:!0,get:s}):e[1]=1,n.call(e,u,f)}))}}},[["HbAC",0,1,2,6,3,5,11,12,4]]]);