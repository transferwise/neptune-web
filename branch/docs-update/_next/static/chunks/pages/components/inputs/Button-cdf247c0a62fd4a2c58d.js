_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[57],{"91IA":function(t,e,n){},"97Jx":function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},n.apply(this,arguments)}t.exports=n},"B/vg":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/inputs/Button",function(){return n("gqKJ")}])},LdEA:function(t,e){t.exports=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}},O94r:function(t,e,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var o=typeof a;if("string"===o||"number"===o)t.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&t.push(c)}else if("object"===o)for(var l in a)n.call(a,l)&&a[l]&&t.push(l)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(a=function(){return r}.apply(e,[]))||(t.exports=a)}()},SP0Y:function(t,e,n){"use strict";var a=n("97Jx"),r=n.n(a),o=n("m3Bd"),c=n.n(o),l=n("ERkP"),i=n.n(l),p=n("O94r"),u=n.n(p),s=(n("j+zR"),n("91IA"),{PRIMARY:"primary",PAY:"pay",SECONDARY:"secondary",DANGER:"danger",LINK:"link"}),b=n("VehP"),d=function(t){var e=t.className,n=t.block,a=t.children,o=t.disabled,l=t.htmlType,p=t.loading,d=t.size,y=t.type,f=c()(t,["className","block","children","disabled","htmlType","loading","size","type"]),m=u()("btn btn-".concat(d),"np-btn np-btn-".concat(d),{"btn-loading":p,"btn-primary":y===s.PRIMARY,"btn-success":y===s.PAY,"btn-default":y===s.SECONDARY,"btn-danger":y===s.DANGER,"btn-link":y===s.LINK,"btn-block np-btn-block":n},e);return b.a.EXTRA_SMALL,i.a.createElement("button",r()({type:l,className:m,disabled:o||p},f),a,p&&i.a.createElement("span",{className:u()("btn-loader",{"m-l-2":!n})}))};d.Type=s,d.Size={EXTRA_SMALL:b.a.EXTRA_SMALL,SMALL:b.a.SMALL,MEDIUM:b.a.MEDIUM,LARGE:b.a.LARGE},d.defaultProps={className:null,size:d.Size.MEDIUM,type:d.Type.PRIMARY,disabled:!1,block:!1,loading:!1,htmlType:"button"};e.a=d},VehP:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},gqKJ:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return u})),n.d(e,"default",(function(){return b}));var a=n("cxan"),r=n("HbGN"),o=n("ERkP"),c=n.n(o),l=n("ZVZ0"),i=n("Qi1R"),p=n("SP0Y"),u=(c.a.createElement,{name:"Button"}),s={meta:u};function b(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(l.a)("wrapper",Object(a.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(l.a)("p",null,"Simple wrapper component for all button types and their states."),Object(l.a)(i.b,{code:"<Button\n  size={Button.Size.MEDIUM}\n  type={Button.Type.PAY}\n  block={false}\n  className={''}\n  onClick={() => alert('clicked')}\n>\n  Pay me please\n</Button>;\n\n",scope:{Button:p.a},mdxType:"LiveEditorBlock"}),Object(l.a)(i.a,{componentName:"Button",mdxType:"GeneratePropsTable"}),Object(l.a)("h2",{id:"types"},"Types"),Object(l.a)("div",{className:"scroll-table"},Object(l.a)("table",{className:"docs-table table "},Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"Name"),Object(l.a)("th",null,"Preview"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("th",{scope:"row"},"Primary"),Object(l.a)("td",null,Object(l.a)(p.a,{size:"md",type:"primary",block:!0,mdxType:"Button"},"Continue"))),Object(l.a)("tr",null,Object(l.a)("th",{scope:"row"},"Pay"),Object(l.a)("td",null,Object(l.a)(p.a,{size:"md",type:"pay",block:!0,mdxType:"Button"},"Send money"))),Object(l.a)("tr",null,Object(l.a)("th",{scope:"row"},"Secondary"),Object(l.a)("td",null,Object(l.a)(p.a,{size:"md",type:"secondary",block:!0,mdxType:"Button"},"Manage my card")))," ",Object(l.a)("tr",null,Object(l.a)("th",{scope:"row"},"Danger"),Object(l.a)("td",null,Object(l.a)(p.a,{size:"md",type:"danger",block:!0,mdxType:"Button"},"Delete recipient"))),Object(l.a)("tr",null,Object(l.a)("th",{scope:"row"},"Link"),Object(l.a)("td",null,Object(l.a)(p.a,{size:"md",type:"link",block:!0,mdxType:"Button"},"Get help")))))))}b.isMDXComponent=!0},"j+zR":function(t,e){t.exports=function(t,e){return function(n,a,r){if("function"!==typeof t)return new Error("Invalid react-required-if prop type supplied to "+r+". Validation failed.");if("function"!==typeof e)return new Error("Invalid react-required-if condition supplied to "+r+". Validation failed.");var o=e(n)?t.isRequired:t;return o.apply(this,arguments)}}},m3Bd:function(t,e,n){var a=n("LdEA");t.exports=function(t,e){if(null==t)return{};var n,r,o=a(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}}},[["B/vg",0,1,2,3,4]]]);