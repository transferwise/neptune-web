_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[78],{"91IA":function(t,e,n){},"97Jx":function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n.apply(this,arguments)}t.exports=n},"B/vg":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/inputs/Button",function(){return n("gqKJ")}])},LdEA:function(t,e){t.exports=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}},O94r:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&t.push(c)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&t.push(i)}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()},SP0Y:function(t,e,n){"use strict";var r=n("97Jx"),a=n.n(r),o=n("m3Bd"),c=n.n(o),i=n("ERkP"),l=n.n(i),u=n("O94r"),s=n.n(u),p=(n("j+zR"),n("s+Iv")),d=(n("91IA"),{PRIMARY:"primary",PAY:"pay",SECONDARY:"secondary",DANGER:"danger",LINK:"link"}),b=n("VehP"),f=function(t){var e=t.className,n=t.block,r=t.children,o=t.disabled,i=t.htmlType,u=t.loading,f=t.size,y=t.type,O=c()(t,["className","block","children","disabled","htmlType","loading","size","type"]),m=s()("btn btn-".concat(f),"np-btn np-btn-".concat(f),{"btn-loading":u,"btn-primary":y===d.PRIMARY,"btn-success":y===d.PAY,"btn-default":y===d.SECONDARY,"btn-danger":y===d.DANGER,"btn-link":y===d.LINK,"btn-block np-btn-block":n},e);return Object(p.b)("Button has deprecated the `Button.Size.EXTRA_SMALL` value for the `size` prop. Please use Button.Size.SMALL instead.",f===b.a.EXTRA_SMALL),l.a.createElement("button",a()({type:i,className:m,disabled:o||u},O),r,u&&l.a.createElement("span",{className:s()("btn-loader",{"m-l-2":!n})}))};f.Type=d,f.Size={EXTRA_SMALL:b.a.EXTRA_SMALL,SMALL:b.a.SMALL,MEDIUM:b.a.MEDIUM,LARGE:b.a.LARGE},f.defaultProps={className:null,size:f.Size.MEDIUM,type:f.Type.PRIMARY,disabled:!1,block:!1,loading:!1,htmlType:"button"};e.a=f},VehP:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},f4p7:function(t,e,n){"use strict";var r=n("ct80");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},gqKJ:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return s})),n.d(e,"default",(function(){return d}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),c=n.n(o),i=n("ZVZ0"),l=n("Qi1R"),u=n("SP0Y"),s=(c.a.createElement,{name:"Button"}),p={meta:s};function d(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(i.a)("wrapper",Object(r.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(i.a)("p",null,"Simple wrapper component for all button types and their states."),Object(i.a)(l.b,{code:"<Button\n  size={Button.Size.MEDIUM}\n  type={Button.Type.PRIMARY}\n  block={false}\n  className={''}\n  onClick={() => alert('clicked')}\n>\n  Continue\n</Button>;\n",scope:{Button:u.a},mdxType:"LiveEditorBlock"}),Object(i.a)(l.a,{componentName:"Button",mdxType:"GeneratePropsTable"}),Object(i.a)("h2",{id:"types"},"Types"),Object(i.a)("div",{className:"scroll-table"},Object(i.a)("table",{className:"docs-table table "},Object(i.a)("thead",null,Object(i.a)("tr",null,Object(i.a)("th",null,"Name"),Object(i.a)("th",null,"Preview"))),Object(i.a)("tbody",null,Object(i.a)("tr",null,Object(i.a)("th",{scope:"row"},"Primary"),Object(i.a)("td",null,Object(i.a)(u.a,{size:"md",type:"primary",block:!0,mdxType:"Button"},"Continue"))),Object(i.a)("tr",null,Object(i.a)("th",{scope:"row"},"Pay"),Object(i.a)("td",null,Object(i.a)(u.a,{size:"md",type:"pay",block:!0,mdxType:"Button"},"Send money"))),Object(i.a)("tr",null,Object(i.a)("th",{scope:"row"},"Secondary"),Object(i.a)("td",null,Object(i.a)(u.a,{size:"md",type:"secondary",block:!0,mdxType:"Button"},"Manage my card")))," ",Object(i.a)("tr",null,Object(i.a)("th",{scope:"row"},"Danger"),Object(i.a)("td",null,Object(i.a)(u.a,{size:"md",type:"danger",block:!0,mdxType:"Button"},"Delete recipient"))),Object(i.a)("tr",null,Object(i.a)("th",{scope:"row"},"Link"),Object(i.a)("td",null,Object(i.a)(u.a,{size:"md",type:"link",block:!0,mdxType:"Button"},"Get help")))))))}d.isMDXComponent=!0},"j+zR":function(t,e){t.exports=function(t,e){return function(n,r,a){if("function"!==typeof t)return new Error("Invalid react-required-if prop type supplied to "+a+". Validation failed.");if("function"!==typeof e)return new Error("Invalid react-required-if condition supplied to "+a+". Validation failed.");var o=e(n)?t.isRequired:t;return o.apply(this,arguments)}}},m3Bd:function(t,e,n){var r=n("LdEA");t.exports=function(t,e){if(null==t)return{};var n,a,o=r(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}},"s+Iv":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));n("vrRf");function r(e){var n,r;0<=["development","test"].indexOf(null===(n=t)||void 0===n||null===(r=n.env)||void 0===r?void 0:"production")&&console.warn(e)}function a(t,e){e&&r(t)}}).call(this,n("F63i"))},vrRf:function(t,e,n){"use strict";var r=n("ax0f"),a=n("H17f").indexOf,o=n("f4p7"),c=n("znGZ"),i=[].indexOf,l=!!i&&1/[1].indexOf(1,-0)<0,u=o("indexOf"),s=c("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:l||!u||!s},{indexOf:function(t){return l?i.apply(this,arguments)||0:a(this,t,arguments.length>1?arguments[1]:void 0)}})},znGZ:function(t,e,n){var r=n("1Mu/"),a=n("ct80"),o=n("8aeu"),c=Object.defineProperty,i={},l=function(t){throw t};t.exports=function(t,e){if(o(i,t))return i[t];e||(e={});var n=[][t],u=!!o(e,"ACCESSORS")&&e.ACCESSORS,s=o(e,0)?e[0]:l,p=o(e,1)?e[1]:void 0;return i[t]=!!n&&!a((function(){if(u&&!r)return!0;var t={length:-1};u?c(t,1,{enumerable:!0,get:l}):t[1]=1,n.call(t,s,p)}))}}},[["B/vg",0,1,2,3,5,4]]]);