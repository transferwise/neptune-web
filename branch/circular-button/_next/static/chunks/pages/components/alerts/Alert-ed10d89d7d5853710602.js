_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[54],{"+KRd":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={NEGATIVE:"negative",NEUTRAL:"neutral",POSITIVE:"positive",WARNING:"warning",INFO:"info",ERROR:"error",SUCCESS:"success"}},"+KXO":function(t,e,n){var r=n("ax0f"),a=n("N9G2"),o=n("DEeE");r({target:"Object",stat:!0,forced:n("ct80")((function(){o(1)}))},{keys:function(t){return o(a(t))}})},"2G9S":function(t,e,n){"use strict";var r=n("ax0f"),a=n("ct80"),o=n("xt6W"),i=n("dSaG"),c=n("N9G2"),s=n("tJVe"),u=n("2sZ7"),l=n("aoZ+"),f=n("GJtw"),d=n("fVMg"),m=n("T+0C"),p=d("isConcatSpreadable"),b=m>=51||!a((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),v=f("concat"),y=function(t){if(!i(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)};r({target:"Array",proto:!0,forced:!b||!v},{concat:function(t){var e,n,r,a,o,i=c(this),f=l(i,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(y(o=-1===e?i:arguments[e])){if(d+(a=s(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<a;n++,d++)n in o&&u(f,d,o[n])}else{if(d>=9007199254740991)throw TypeError("Maximum allowed index exceeded");u(f,d++,o)}return f.length=d,f}})},"2sZ7":function(t,e,n){"use strict";var r=n("CD8Q"),a=n("q9+l"),o=n("lhjL");t.exports=function(t,e,n){var i=r(e);i in t?a.f(t,i,o(0,n)):t[i]=n}},"3g/d":function(t,e,n){"use strict";n("2G9S"),n("jQ3i"),n("+KXO"),n("1IsZ"),n("x4t0");var r=n("ddV6"),a=n.n(r),o=n("KEM+"),i=n.n(o),c=n("ERkP"),s=n.n(c),u=n("O94r"),l=n.n(u),f=(n("j+zR"),n("/Vl7")),d=n("+KRd"),m=n("VehP"),p=n("qGsU"),b=n("WXrh"),v=n("fO07"),y=n("97Jx"),O=n.n(y),h=n("UTRh"),T=[n("UlFz").a.STRONG],j=function(t){return s.a.createElement(h.a,O()({},t,{as:"span",allowList:T,blockList:void 0}))};j.defaultProps={className:void 0};var E,g,w,x=j,A=n("s+Iv"),S=(E={},i()(E,d.a.SUCCESS,d.a.POSITIVE),i()(E,d.a.INFO,d.a.NEUTRAL),i()(E,d.a.ERROR,d.a.NEGATIVE),E),N=(g={},i()(g,d.a.POSITIVE,f.f),i()(g,d.a.NEUTRAL,f.q),i()(g,d.a.WARNING,f.a),i()(g,d.a.NEGATIVE,f.b),g),R=function t(e){var n=Object(c.useState)(!1),r=a()(n,2),o=r[0],i=r[1],u=e.arrow,f=e.action,d=e.children,m=e.className,v=e.icon,y=e.onDismiss,O=e.message,h=e.type,T=Object(c.useRef)(null);if(u){var j=Object(b.a)(t,u);return s.a.createElement(j,e)}!function(t){var e=t.size,n=t.type;Object(A.b)("Alert no longer supports any possible variations in size. Please remove the `size` prop.",!!e),Object(A.b)("Alert has deprecated the ".concat(n," value for the `type` prop. Please update to ").concat(P[n],"."),L.includes(n))}(e);var E=S[h]||h,g=N[E],w=v?Object(c.cloneElement)(v,{size:24}):s.a.createElement(g,{size:24});return s.a.createElement("div",{role:"alert",className:l()("alert d-flex","alert-".concat(E),m),onTouchStart:function(){return i(!0)},onTouchEnd:function(t){o&&f&&null!==T&&void 0!==T&&T.current&&!T.current.contains(t.target)&&("_blank"===(null===f||void 0===f?void 0:f.target)?window.top.open(f.href):window.top.location.assign(f.href)),i(!1)},onTouchMove:function(){return i(!1)}},w,s.a.createElement("div",{className:"alert__message p-l-2 flex-grow-1"},s.a.createElement("div",null,d||s.a.createElement(x,null,O)),f&&s.a.createElement("a",{href:f.href,className:"m-t-1 d-inline-block","aria-label":f["aria-label"],target:f.target},f.text)),y&&s.a.createElement(p.a,{onClick:y,size:p.a.Size.SMALL,className:"m-l-2",ref:T}))},P=(w={},i()(w,d.a.SUCCESS,"Alert.Type.POSITIVE"),i()(w,d.a.INFO,"Alert.Type.NEUTRAL"),i()(w,d.a.ERROR,"Alert.Type.NEGATIVE"),w),L=Object.keys(S);R.ArrowPosition=v.a,R.Size={SMALL:m.a.SMALL,LARGE:m.a.LARGE},R.Type=d.a,R.defaultProps={action:void 0,arrow:void 0,className:void 0,dismissible:void 0,icon:void 0,type:R.Type.NEUTRAL};e.a=R},"56Cj":function(t,e,n){var r=n("ct80");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},"97Jx":function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n.apply(this,arguments)}t.exports=n},BAoe:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r,a,o=n("D57K"),i=n("ERkP"),c=n("yGPN"),s=n("ymT0");!function(t){t.formatDate="FormattedDate",t.formatTime="FormattedTime",t.formatNumber="FormattedNumber",t.formatList="FormattedList",t.formatDisplayName="FormattedDisplayName"}(r||(r={})),function(t){t.formatDate="FormattedDateParts",t.formatTime="FormattedTimeParts",t.formatNumber="FormattedNumberParts",t.formatList="FormattedListParts"}(a||(a={}));function u(t){var e=function(e){return i.createElement(s.a.Consumer,null,(function(n){Object(c.c)(n);var r=e.value,a=e.children,i=Object(o.c)(e,["value","children"]),s="string"===typeof r?new Date(r||0):r;return a("formatDate"===t?n.formatDateToParts(s,i):n.formatTimeToParts(s,i))}))};return e.displayName=a[t],e}function l(t){var e=function(e){return i.createElement(s.a.Consumer,null,(function(n){Object(c.c)(n);var r=e.value,a=e.children,s=Object(o.c)(e,["value","children"]),u=n[t](r,s);if("function"===typeof a)return a(u);var l=n.textComponent||i.Fragment;return i.createElement(l,null,u)}))};return e.displayName=r[t],e}function f(t){return t}l("formatDate"),l("formatTime"),l("formatNumber"),l("formatList"),l("formatDisplayName"),u("formatDate"),u("formatTime")},GJtw:function(t,e,n){var r=n("ct80"),a=n("fVMg"),o=n("T+0C"),i=a("species");t.exports=function(t){return o>=51||!r((function(){var e=[];return(e.constructor={})[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},HbAC:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alerts/Alert",function(){return n("cZ+Q")}])},"KEM+":function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},KcoV:function(t,e,n){},N9G2:function(t,e,n){var r=n("cww3");t.exports=function(t){return Object(r(t))}},O94r:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&t.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&t.push(c)}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()},"T+0C":function(t,e,n){var r,a,o=n("9JhN"),i=n("ZORK"),c=o.process,s=c&&c.versions,u=s&&s.v8;u?a=(r=u.split("."))[0]+r[1]:i&&(!(r=i.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/))&&(a=r[1]),t.exports=a&&+a},TbR9:function(t,e,n){var r=n("56Cj");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},Ua7V:function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}},VehP:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},WXrh:function(t,e,n){"use strict";var r=n("fO07");e.a=r.b},ZORK:function(t,e,n){var r=n("VCi3");t.exports=r("navigator","userAgent")||""},"aoZ+":function(t,e,n){var r=n("dSaG"),a=n("xt6W"),o=n("fVMg")("species");t.exports=function(t,e){var n;return a(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!a(n.prototype)?r(n)&&null===(n=n[o])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"cZ+Q":function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return f})),n.d(e,"default",(function(){return m}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),i=n.n(o),c=n("ZVZ0"),s=n("Qi1R"),u=n("3g/d"),l=n("/Vl7"),f=(i.a.createElement,{name:"Alert"}),d={meta:f};function m(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(c.a)("wrapper",Object(r.a)({},d,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)("p",null,"Use Alert for contextual feedback messages for typical user actions with the handful of available and flexible alert messages."),Object(c.a)(s.b,{code:"() => {\n  const [dismissed, setDismissed] = React.useState(false);\n  return dismissed ? null : (\n    <Alert\n      action={{\n        'aria-label': 'Learn more about expected payment times',\n        text: 'Learn more',\n        href: 'https://www.transferwise.com',\n      }}\n      message=\"Payments sent to your bank details **today** might not arrive in time for the holidays.\"\n      onDismiss={() => setDismissed(true)}\n      type={Alert.Type.POSITIVE}\n    />\n  );\n};\n",scope:{Alert:u.a,Star:l.v},mdxType:"LiveEditorBlock"}),Object(c.a)(s.a,{componentName:"Alert",mdxType:"GeneratePropsTable"}),Object(c.a)("h2",{id:"types"},"Types"),Object(c.a)("table",{className:"docs-table table table-condensed"},Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"Name"),Object(c.a)("th",null,"Preview"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"Neutral"),Object(c.a)("td",null,Object(c.a)(u.a,{message:"Payments sent to your bank details **today** might not arrive in time for the holidays.",mdxType:"Alert"}))),Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"Positive"),Object(c.a)("td",null,Object(c.a)(u.a,{type:"positive",message:"Payments sent to your bank details **today** might not arrive in time for the holidays.",mdxType:"Alert"}))),Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"Warning"),Object(c.a)("td",null,Object(c.a)(u.a,{type:"warning",message:"Payments sent to your bank details **today** might not arrive in time for the holidays.",mdxType:"Alert"}))),Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"Negative"),Object(c.a)("td",null,Object(c.a)(u.a,{type:"negative",message:"Payments sent to your bank details **today** might not arrive in time for the holidays.",mdxType:"Alert"}))))),Object(c.a)("h2",{id:"content-options"},"Content options"),Object(c.a)("p",null,"You can customise the message text style and the icon. Use the default icons where you can - only provide a custom icon if it helps give the user more context as to the contents of the message."),Object(c.a)("table",{className:"table docs-table table-condensed"},Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"Description"),Object(c.a)("th",null,"Preview"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"The ",Object(c.a)("code",null,"message")," prop accepts both plain text and text with bolded elements. To bold words use the markdown style of ",Object(c.a)("code",null,"**two asterisks**"),"."),Object(c.a)("td",null,Object(c.a)(u.a,{message:"Payments sent to your bank details **today** might not arrive in time for the holidays.",mdxType:"Alert"}))),Object(c.a)("tr",null,Object(c.a)("td",null,"Example of an Alert with icon = ",Object(c.a)("code",null,"<Star />")),Object(c.a)("td",null,Object(c.a)(u.a,{icon:Object(c.a)(l.v,{mdxType:"Star"}),message:"Thank you for your rating, your feedback is important to us.",mdxType:"Alert"}))))))}m.isMDXComponent=!0},ddV6:function(t,e,n){var r=n("qPgQ"),a=n("Ua7V"),o=n("peMk"),i=n("f2kJ");t.exports=function(t,e){return r(t)||a(t,e)||o(t,e)||i()}},f2kJ:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},f4p7:function(t,e,n){"use strict";var r=n("ct80");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},fO07:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));n("2G9S");var r=n("97Jx"),a=n.n(r),o=n("ERkP"),i=n.n(o),c=n("O94r"),s=n.n(c),u={TOP_LEFT:"up-left",TOP:"up-center",TOP_RIGHT:"up-right",BOTTOM_LEFT:"down-left",BOTTOM:"down-center",BOTTOM_RIGHT:"down-right"};function l(t){if(t){var e=["arrow"],n=u.BOTTOM,r=u.BOTTOM_LEFT,a=u.BOTTOM_RIGHT,o=u.TOP,i=u.TOP_RIGHT,c=u.TOP_LEFT;switch(t){case n:return e.concat("arrow-bottom","arrow-center");case r:return e.concat("arrow-bottom","arrow-left");case a:return e.concat("arrow-bottom","arrow-right");case o:return e.concat("arrow-center");case i:return e.concat("arrow-right");case c:default:return e}}return""}e.b=function(t,e){var n=function(n){return i.a.createElement(t,a()({},n,{className:s()(n.className,l(e)),arrow:void 0}))};return n.defaultProps={className:void 0},n}},fVMg:function(t,e,n){var r=n("9JhN"),a=n("TN3B"),o=n("8aeu"),i=n("HYrn"),c=n("56Cj"),s=n("TbR9"),u=a("wks"),l=r.Symbol,f=s?l:l&&l.withoutSetter||i;t.exports=function(t){return o(u,t)||(c&&o(l,t)?u[t]=l[t]:u[t]=f("Symbol."+t)),u[t]}},iQ7j:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},"j+zR":function(t,e){t.exports=function(t,e){return function(n,r,a){if("function"!==typeof t)return new Error("Invalid react-required-if prop type supplied to "+a+". Validation failed.");if("function"!==typeof e)return new Error("Invalid react-required-if condition supplied to "+a+". Validation failed.");var o=e(n)?t.isRequired:t;return o.apply(this,arguments)}}},"jl0/":function(t,e,n){var r=n("dSaG"),a=n("amH4"),o=n("fVMg")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==a(t))}},kQwz:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("ERkP"),a=n("ymT0"),o=n("yGPN");function i(){var t=r.useContext(a.a);return Object(o.c)(t),t}},peMk:function(t,e,n){var r=n("iQ7j");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},qGsU:function(t,e,n){"use strict";n("1IsZ");var r=n("ERkP"),a=n.n(r),o=n("O94r"),i=n.n(o),c=n("kQwz"),s=n("/Vl7"),u=n("BAoe"),l=Object(u.a)({ariaLabel:{id:"neptune.CloseButton.ariaLabel"}}),f=(n("KcoV"),a.a.forwardRef((function(t,e){var n=Object(c.a)(),r=t.onClick,o=t.className,u=t.size;return a.a.createElement("button",{ref:e,type:"button",className:i()("np-close-button close btn-link text-no-decoration",{"np-close-button--large":u===f.Size.LARGE},o),"aria-label":n.formatMessage(l.ariaLabel),onClick:r},a.a.createElement(s.j,{size:u}))})));f.Size={SMALL:16,LARGE:24},f.defaultProps={className:null,size:f.Size.LARGE};e.a=f},qPgQ:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},vrRf:function(t,e,n){"use strict";var r=n("ax0f"),a=n("H17f").indexOf,o=n("f4p7"),i=n("znGZ"),c=[].indexOf,s=!!c&&1/[1].indexOf(1,-0)<0,u=o("indexOf"),l=i("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:s||!u||!l},{indexOf:function(t){return s?c.apply(this,arguments)||0:a(this,t,arguments.length>1?arguments[1]:void 0)}})},xt6W:function(t,e,n){var r=n("amH4");t.exports=Array.isArray||function(t){return"Array"==r(t)}},znGZ:function(t,e,n){var r=n("1Mu/"),a=n("ct80"),o=n("8aeu"),i=Object.defineProperty,c={},s=function(t){throw t};t.exports=function(t,e){if(o(c,t))return c[t];e||(e={});var n=[][t],u=!!o(e,"ACCESSORS")&&e.ACCESSORS,l=o(e,0)?e[0]:s,f=o(e,1)?e[1]:void 0;return c[t]=!!n&&!a((function(){if(u&&!r)return!0;var t={length:-1};u?i(t,1,{enumerable:!0,get:s}):t[1]=1,n.call(t,l,f)}))}}},[["HbAC",0,1,2,6,3,5,7,11,4]]]);