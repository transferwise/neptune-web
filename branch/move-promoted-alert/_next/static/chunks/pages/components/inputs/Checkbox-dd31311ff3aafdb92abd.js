_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[78],{"7bnI":function(e,n,t){},"97Jx":function(e,n){function t(){return e.exports=t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},t.apply(this,arguments)}e.exports=t},LdEA:function(e,n){e.exports=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}},Nks8:function(e,n,t){"use strict";var r=t("ERkP"),a=t.n(r),c=t("O94r"),o=t.n(c),s=t("bby/"),l=function(e){var n=e.id,t=e.checked,r=e.required,c=e.disabled,l=e.readOnly,u=e.label,i=e.secondary,d=e.onChange,p=e.onFocus,b=e.onBlur,h=r&&!c&&!l&&!t,f=o()({checkbox:!0,"checkbox-lg":i,"has-error":h,disabled:c});return a.a.createElement("div",{id:n,className:f},a.a.createElement("label",null,u,r&&"*",i&&a.a.createElement("small",null,i),a.a.createElement(s.a,{className:o()({"has-error":h}),checked:t,onFocus:p,onChange:function(){return d(!t)},onBlur:b,disabled:c||l})))};l.defaultProps={id:null,checked:!1,required:!1,disabled:!1,readOnly:!1,secondary:null,onFocus:null,onBlur:null};var u=l;n.a=u},O94r:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===c)for(var s in r)t.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(e.exports=r)}()},VaOz:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/inputs/Checkbox",function(){return t("hr9p")}])},"bby/":function(e,n,t){"use strict";var r=t("97Jx"),a=t.n(r),c=t("m3Bd"),o=t.n(c),s=t("ERkP"),l=t.n(s),u=t("O94r"),i=t.n(u),d=(t("7bnI"),function(e){var n=e.checked,t=e.className,r=e.disabled,c=e.onChange,s=o()(e,["checked","className","disabled","onChange"]);return l.a.createElement("span",{className:i()("np-checkbox-button",t)},l.a.createElement("input",a()({},s,{type:"checkbox",disabled:r,checked:n,onChange:c})),l.a.createElement("span",{className:"tw-checkbox-button"},l.a.createElement("span",{className:"tw-checkbox-check"})))});d.defaultProps={"aria-label":void 0,checked:!1,className:void 0,disabled:!1},n.a=d},hr9p:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t("cxan"),a=t("HbGN"),c=t("ERkP"),o=t.n(c),s=t("ZVZ0"),l=t("Qi1R"),u=t("Nks8"),i=(o.a.createElement,{name:"Checkbox"}),d={meta:i};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.a)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(s.a)(l.b,{code:'() => {\n  const [checked, setChecked] = React.useState(true);\n  return (\n    <Checkbox\n      label="I agree to the terms and conditions"\n      onChange={(newState) => setChecked(newState)}\n      checked={checked}\n      required\n      disabled={false}\n    />\n  );\n};\n',scope:{Checkbox:u.a},mdxType:"LiveEditorBlock"}),Object(s.a)(l.a,{componentName:"Checkbox",mdxType:"GeneratePropsTable"}))}p.isMDXComponent=!0},m3Bd:function(e,n,t){var r=t("LdEA");e.exports=function(e,n){if(null==e)return{};var t,a,c=r(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}}},[["VaOz",0,1,2,3,4]]]);