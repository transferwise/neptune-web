_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[63],{Hi8P:function(e,t,a){"use strict";var n,i=a("KEM+"),r=a.n(i),l=(a("J/fC"),a("ERkP")),c=a.n(l),o=a("O94r"),s=a.n(o),d=a("/Vl7"),p=a("VehP"),u=a("eKd8"),m=(n={},r()(n,p.a.EXTRA_SMALL,10),r()(n,p.a.SMALL,16),r()(n,p.a.MEDIUM,24),n),f=function(e){var t=e.className;return c.a.createElement("span",{className:s()("tw-icon","tw-icon-chevron",t),role:"presentation","aria-hidden":!0},c.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",focusable:"false"},c.a.createElement("path",{fillRule:"evenodd",d:"M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"})))};f.defaultProps={className:null};var E=function(e){var t=e.orientation,a=e.size,n=e.disabled,i=e.className,r=s()("tw-chevron",{"chevron-color":!n},"".concat([t]).toLowerCase(),i),l=m[a];return a===p.a.EXTRA_SMALL?c.a.createElement(f,{className:r}):c.a.createElement(d.i,{className:r,size:l})};E.Orientation=u.a,E.Size=p.a,E.defaultProps={orientation:E.Orientation.BOTTOM,size:E.Size.SMALL,disabled:!1,className:null},t.a=E},"J/fC":function(e,t,a){},"KEM+":function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},LdEA:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}},"Lw4+":function(e,t,a){"use strict";var n=a("ERkP"),i=a.n(n),r=a("O94r"),l=a.n(r),c=(a("j+zR"),a("X+z2"),function(e){var t=e.as,a=e.href,n=e.media,r=e.title,c=e.content,o=e.onClick,s=e.htmlFor,d=e.disabled,p=e.button,u=e.decision,m=e.complex,f=e.className,E=e.inverseMediaCircle,v=e.showMediaAtAllSizes,b=e.showMediaCircle;return i.a.createElement(t,{className:l()(f,"media",{"decision-complex":m,decision:u,disabled:d,"tw-option__sm-media":v}),href:a,onClick:o,htmlFor:s,disabled:d&&"button"===t},n&&i.a.createElement("div",{className:"media-left"},b?i.a.createElement("div",{className:l()("circle circle-sm text-primary",{"circle-inverse":E})},n):i.a.createElement("div",{className:"tw-option__no-media-circle"},n)),i.a.createElement("div",{className:"media-body"},i.a.createElement("div",{className:"h5"},r),c&&i.a.createElement("div",{className:"decision__content"},c)),i.a.createElement("div",{className:"media-right"},p))});c.defaultProps={as:"label",media:"",content:null,htmlFor:null,disabled:!1,button:null,onClick:null,href:null,decision:!0,complex:!1,inverseMediaCircle:!0,className:null,showMediaAtAllSizes:!1,showMediaCircle:!0},t.a=c},O94r:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var l=i.apply(null,n);l&&e.push(l)}else if("object"===r)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},OO3s:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Card",function(){return a("lE/t")}])},VehP:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},eKd8:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top",CENTER:"center"}},"j+zR":function(e,t){e.exports=function(e,t){return function(a,n,i){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+i+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+i+". Validation failed.");var r=t(a)?e.isRequired:e;return r.apply(this,arguments)}}},"lE/t":function(e,t,a){"use strict";a.r(t),a.d(t,"meta",(function(){return O})),a.d(t,"default",(function(){return x}));var n=a("cxan"),i=a("HbGN"),r=a("ERkP"),l=a.n(r),c=a("ZVZ0"),o=a("Qi1R"),s=a("m3Bd"),d=a.n(s),p=(a("j+zR"),a("O94r")),u=a.n(p),m=a("Hi8P"),f=a("Lw4+"),E=(a("JCva"),function(e){var t=e.as,a=e.isExpanded,n=e.title,i=e.details,r=e.children,c=e.onClick,o=e.icon,s=e.id,p=e.className,E=d()(e,["as","isExpanded","title","details","children","onClick","icon","id","className"]),v=!(!a||!r);return l.a.createElement(t,{className:u()("tw-card list-group-item p-a-0",p,{active:v}),id:s,"data-testid":E["data-testid"]},l.a.createElement("div",{className:u()("p-a-panel tw-card__panel",{"tw-card__panel--inactive":!r}),role:r?"button":null,onClick:function(){return r&&c(!a)}},l.a.createElement(f.a,{as:"div",media:o,title:n,content:i,decision:!1,button:r&&l.a.createElement(m.a,{orientation:v?m.a.Orientation.TOP:m.a.Orientation.DOWN}),inverseMediaCircle:v})),v&&l.a.createElement("div",{className:"p-l-panel p-r-panel p-b-panel tw-card__content"},l.a.createElement("div",{className:"media"},l.a.createElement("div",{className:"media-left"},l.a.createElement("div",{className:"circle circle-sm circle-inverse circle-responsive invisible"})),l.a.createElement("div",{className:"media-body"},l.a.createElement("hr",{className:"m-t-0 hidden-xs hidden-sm"}),l.a.createElement("div",null,r)))))});E.defaultProps={as:"div",children:null,id:null,className:null,"data-testid":null};var v=E,b=a("/Vl7"),O=(l.a.createElement,{name:"Card"}),h={meta:O};function x(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)(o.b,{code:'() => {\n  const [isExpanded, setIsExpanded] = React.useState(false);\n\n  return (\n    <Card\n      title="Title"\n      details="Some more context"\n      isExpanded={isExpanded}\n      onClick={isExpanded => setIsExpanded(isExpanded)}\n      icon={<FastFlagIcon size={24} />}\n    >\n      <div>Can be almost anything. Edit me :)</div>\n    </Card>\n  );\n};\n',scope:{Card:v,FastFlagIcon:b.m},mdxType:"LiveEditorBlock"}),Object(c.a)(o.a,{componentName:"Card",mdxType:"GeneratePropsTable"}),Object(c.a)("h2",{id:"group-of-cards"},"Group of cards"),Object(c.a)("p",null,"Cards rendered as ",Object(c.a)("inlineCode",{parentName:"p"},"li")," elements in a ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://bootstrap.transferwise.com/components/#panels-list-group"}),"panel-list")," with ",Object(c.a)("inlineCode",{parentName:"p"},"list-group panel-list-group list-group-inactive")," class."),Object(c.a)("ul",{className:"list-group panel-list-group list-group-inactive"},Object(c.a)(v,{as:"li",title:"Collapsed card",details:"details",isExpanded:!1,onClick:function(){return alert("toggled")},icon:Object(c.a)(b.m,{mdxType:"FastFlagIcon"}),mdxType:"Card"},Object(c.a)("div",null)),Object(c.a)(v,{as:"li",title:"Expanded card",details:"details",isExpanded:!0,onClick:function(){return alert("toggled")},icon:Object(c.a)(b.m,{mdxType:"FastFlagIcon"}),mdxType:"Card"},"I am an expanded card."),Object(c.a)(v,{as:"li",title:"Empty card",details:"I do not have children",icon:Object(c.a)(b.m,{mdxType:"FastFlagIcon"}),mdxType:"Card"}),Object(c.a)(v,{as:"li",title:"Collapsed card",details:"details",isExpanded:!1,onClick:function(){return alert("toggled")},icon:Object(c.a)(b.m,{mdxType:"FastFlagIcon"}),mdxType:"Card"},Object(c.a)("div",null))))}x.isMDXComponent=!0},m3Bd:function(e,t,a){var n=a("LdEA");e.exports=function(e,t){if(null==e)return{};var a,i,r=n(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}}},[["OO3s",0,1,2,6,3,4]]]);