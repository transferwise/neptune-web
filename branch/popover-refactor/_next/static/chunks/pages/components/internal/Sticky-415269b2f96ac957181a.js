_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[92],{"91IA":function(n,e,t){},I5Kg:function(n,e,t){"use strict";t.r(e),t.d(e,"meta",(function(){return f})),t.d(e,"default",(function(){return m}));var i=t("cxan"),o=t("HbGN"),a=t("ERkP"),r=t.n(a),c=t("ZVZ0"),l=t("Qi1R"),s=t("sob3"),d=function(n){var e=n.open,t=n.position,i=n.children;return r.a.createElement(s.a,{open:e,position:t,slidingPanelPositionFixed:!0,showSlidingPanelBorder:!0},i)};d.defaultProps={open:!0,position:"bottom",children:null};var u=d,p=t("SP0Y"),f=(r.a.createElement,{name:"Sticky"}),b={meta:f};function m(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(c.a)("wrapper",Object(i.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(c.a)("p",null,"This component is used inside other components, such as Drawer. Please do not use it directly."),Object(c.a)("div",null,Object(c.a)(l.b,{code:"() => {\n  const [open, setOpen] = React.useState(false);\n  return (\n    <>\n      <Button onClick={() => setOpen(!open)}>Open Sticky</Button>\n      <Sticky open={open} position={'bottom'} fullParentWidth={true}>\n        <div className={'d-flex justify-content-start align-items-start flex-wrap p-x-4 p-y-4'}>\n          <Button onClick={() => setOpen(!open)}>Close Sticky</Button>\n        </div>\n      </Sticky>\n    </>\n  );\n};\n",scope:{Sticky:u,Button:p.a},display:"vertical",mdxType:"LiveEditorBlock"}),Object(c.a)(l.a,{componentName:"Sticky",mdxType:"GeneratePropsTable"})))}m.isMDXComponent=!0},SP0Y:function(n,e,t){"use strict";var i=t("97Jx"),o=t.n(i),a=t("m3Bd"),r=t.n(a),c=t("ERkP"),l=t.n(c),s=t("O94r"),d=t.n(s),u=(t("j+zR"),t("s+Iv")),p=(t("91IA"),{PRIMARY:"primary",PAY:"pay",SECONDARY:"secondary",DANGER:"danger",LINK:"link"}),f=t("VehP"),b=function(n){var e=n.className,t=n.block,i=n.children,a=n.disabled,c=n.htmlType,s=n.loading,b=n.size,m=n.type,y=r()(n,["className","block","children","disabled","htmlType","loading","size","type"]),v=d()("btn btn-".concat(b),"np-btn np-btn-".concat(b),{"btn-loading":s,"btn-primary":m===p.PRIMARY,"btn-success":m===p.PAY,"btn-default":m===p.SECONDARY,"btn-danger":m===p.DANGER,"btn-link":m===p.LINK,"btn-block np-btn-block":t},e);return Object(u.b)("Button has deprecated the `Button.Size.EXTRA_SMALL` value for the `size` prop. Please use Button.Size.SMALL instead.",b===f.a.EXTRA_SMALL),l.a.createElement("button",o()({type:c,className:v,disabled:a||s},y),i,s&&l.a.createElement("span",{className:d()("btn-loader",{"m-l-2":!t})}))};b.Type=p,b.Size={EXTRA_SMALL:f.a.EXTRA_SMALL,SMALL:f.a.SMALL,MEDIUM:f.a.MEDIUM,LARGE:f.a.LARGE},b.defaultProps={className:null,size:b.Size.MEDIUM,type:b.Type.PRIMARY,disabled:!1,block:!1,loading:!1,htmlType:"button"};e.a=b},f4p7:function(n,e,t){"use strict";var i=t("ct80");n.exports=function(n,e){var t=[][n];return!!t&&i((function(){t.call(null,e||function(){throw 1},1)}))}},"j+zR":function(n,e){n.exports=function(n,e){return function(t,i,o){if("function"!==typeof n)return new Error("Invalid react-required-if prop type supplied to "+o+". Validation failed.");if("function"!==typeof e)return new Error("Invalid react-required-if condition supplied to "+o+". Validation failed.");var a=e(t)?n.isRequired:n;return a.apply(this,arguments)}}},"s+Iv":function(n,e,t){"use strict";(function(n){t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return o}));t("vrRf");function i(e){var t,i;0<=["development","test"].indexOf(null===(t=n)||void 0===t||null===(i=t.env)||void 0===i?void 0:"production")&&console.warn(e)}function o(n,e){e&&i(n)}}).call(this,t("F63i"))},sob3:function(n,e,t){"use strict";var i=t("97Jx"),o=t.n(i),a=t("m3Bd"),r=t.n(a),c=t("ERkP"),l=t.n(c),s=t("O94r"),d=t.n(s),u=t("05Xt"),p=(t("yiBs"),Object(c.forwardRef)((function(n,e){var t=n.children,i=n.className,a=n.open,c=n.position,s=n.showSlidingPanelBorder,p=n.slidingPanelPositionFixed,f=r()(n,["children","className","open","position","showSlidingPanelBorder","slidingPanelPositionFixed"]);return l.a.createElement(u.a,o()({},f,{in:a,timeout:{enter:0,exit:350},classNames:d()("sliding-panel--open-".concat(c),s&&"sliding-panel--border-".concat(c),{"sliding-panel--fixed":p},"sliding-panel"),appear:!0,unmountOnExit:!0}),l.a.createElement("div",{className:d()("sliding-panel",i),ref:e},t))})));p.defaultProps={children:null,className:void 0,open:!1,position:"left",showSlidingPanelBorder:!1,slidingPanelPositionFixed:!1},e.a=p},vrRf:function(n,e,t){"use strict";var i=t("ax0f"),o=t("H17f").indexOf,a=t("f4p7"),r=t("znGZ"),c=[].indexOf,l=!!c&&1/[1].indexOf(1,-0)<0,s=a("indexOf"),d=r("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:l||!s||!d},{indexOf:function(n){return l?c.apply(this,arguments)||0:o(this,n,arguments.length>1?arguments[1]:void 0)}})},yiBs:function(n,e,t){},yu9r:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/internal/Sticky",function(){return t("I5Kg")}])},znGZ:function(n,e,t){var i=t("1Mu/"),o=t("ct80"),a=t("8aeu"),r=Object.defineProperty,c={},l=function(n){throw n};n.exports=function(n,e){if(a(c,n))return c[n];e||(e={});var t=[][n],s=!!a(e,"ACCESSORS")&&e.ACCESSORS,d=a(e,0)?e[0]:l,u=a(e,1)?e[1]:void 0;return c[n]=!!t&&!o((function(){if(s&&!i)return!0;var n={length:-1};s?r(n,1,{enumerable:!0,get:l}):n[1]=1,t.call(n,d,u)}))}}},[["yu9r",0,1,2,3,5,9,4]]]);