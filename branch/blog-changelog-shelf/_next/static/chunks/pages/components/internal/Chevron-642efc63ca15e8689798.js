_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[89],{"7bnI":function(e,n,t){},"97Jx":function(e,n){function t(){return e.exports=t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},t.apply(this,arguments)}e.exports=t},Hi8P:function(e,n,t){"use strict";var r,a=t("KEM+"),o=t.n(a),c=(t("J/fC"),t("ERkP")),i=t.n(c),s=t("O94r"),l=t.n(s),u=t("/Vl7"),d=t("VehP"),p=t("eKd8"),f=(r={},o()(r,d.a.EXTRA_SMALL,10),o()(r,d.a.SMALL,16),o()(r,d.a.MEDIUM,24),r),h=function(e){var n=e.className;return i.a.createElement("span",{className:l()("tw-icon","tw-icon-chevron",n),role:"presentation","aria-hidden":!0},i.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",focusable:"false"},i.a.createElement("path",{fillRule:"evenodd",d:"M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"})))};h.defaultProps={className:null};var b=function(e){var n=e.orientation,t=e.size,r=e.disabled,a=e.className,o=l()("tw-chevron",{"chevron-color":!r},"".concat([n]).toLowerCase(),a),c=f[t];return t===d.a.EXTRA_SMALL?i.a.createElement(h,{className:o}):i.a.createElement(u.i,{className:o,size:c})};b.Orientation=p.a,b.Size=d.a,b.defaultProps={orientation:b.Orientation.BOTTOM,size:b.Size.SMALL,disabled:!1,className:null},n.a=b},"J/fC":function(e,n,t){},"KEM+":function(e,n){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},LdEA:function(e,n){e.exports=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}},Nks8:function(e,n,t){"use strict";var r=t("ERkP"),a=t.n(r),o=t("O94r"),c=t.n(o),i=t("bby/"),s=function(e){var n=e.id,t=e.checked,r=e.required,o=e.disabled,s=e.readOnly,l=e.label,u=e.secondary,d=e.onChange,p=e.onFocus,f=e.onBlur,h=r&&!o&&!s&&!t,b=c()({checkbox:!0,"checkbox-lg":u,"has-error":h,disabled:o});return a.a.createElement("div",{id:n,className:b},a.a.createElement("label",null,l,r&&"*",u&&a.a.createElement("small",null,u),a.a.createElement(i.a,{className:c()({"has-error":h}),checked:t,onFocus:p,onChange:function(){return d(!t)},onBlur:f,disabled:o||s})))};s.defaultProps={id:null,checked:!1,required:!1,disabled:!1,readOnly:!1,secondary:null,onFocus:null,onBlur:null};var l=s;n.a=l},O94r:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===o)for(var i in r)t.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(e.exports=r)}()},VehP:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},WxZm:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return d})),t.d(n,"default",(function(){return f}));var r=t("cxan"),a=t("HbGN"),o=t("ERkP"),c=t.n(o),i=t("ZVZ0"),s=t("Qi1R"),l=t("Hi8P"),u=t("Nks8"),d=(c.a.createElement,{name:"Chevron"}),p={meta:d};function f(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)("p",null,"This component is used inside other components, such as Select, Navigation Options, Accordion and others. Please do not use it directly."),Object(i.a)(s.b,{code:'() => {\n  const [isTop, setIsTop] = React.useState(true);\n  return (\n    <>\n      <Chevron\n        orientation={isTop ? Chevron.Orientation.TOP : Chevron.Orientation.BOTTOM}\n        size={Chevron.Size.MEDIUM}\n      />\n      <Checkbox\n        label="Check me to flip the chevron!"\n        onChange={() => setIsTop(!isTop)}\n        checked={isTop}\n      />\n    </>\n  );\n};\n',scope:{Chevron:l.a,Checkbox:u.a},mdxType:"LiveEditorBlock"}),Object(i.a)(s.a,{componentName:"Chevron",mdxType:"GeneratePropsTable"}))}f.isMDXComponent=!0},bZcn:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/internal/Chevron",function(){return t("WxZm")}])},"bby/":function(e,n,t){"use strict";var r=t("97Jx"),a=t.n(r),o=t("m3Bd"),c=t.n(o),i=t("ERkP"),s=t.n(i),l=t("O94r"),u=t.n(l),d=(t("7bnI"),function(e){var n=e.checked,t=e.className,r=e.disabled,o=e.onChange,i=c()(e,["checked","className","disabled","onChange"]);return s.a.createElement("span",{className:u()("np-checkbox-button",t)},s.a.createElement("input",a()({},i,{type:"checkbox",disabled:r,checked:n,onChange:o})),s.a.createElement("span",{className:"tw-checkbox-button"},s.a.createElement("span",{className:"tw-checkbox-check"})))});d.defaultProps={"aria-label":void 0,checked:!1,className:void 0,disabled:!1},n.a=d},eKd8:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top",CENTER:"center"}},m3Bd:function(e,n,t){var r=t("LdEA");e.exports=function(e,n){if(null==e)return{};var t,a,o=r(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}}},[["bZcn",0,1,2,6,3,4]]]);