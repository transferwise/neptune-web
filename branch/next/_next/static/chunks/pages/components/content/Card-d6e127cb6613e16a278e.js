_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[45],{Hi8P:function(e,t,n){"use strict";var a,i=n("KEM+"),r=n.n(i),l=(n("J/fC"),n("ERkP")),c=n.n(l),o=n("O94r"),s=n.n(o),d=n("/Vl7"),p=n("VehP"),u=n("eKd8"),m=(a={},r()(a,p.a.SMALL,16),r()(a,p.a.MEDIUM,24),a),f=function(e){var t=e.orientation,n=e.size,a=e.disabled,i=e.className,r={className:s()("tw-chevron",{"chevron-color":!a},"".concat([t]).toLowerCase(),i),size:m[n]};return c.a.createElement(d.g,r)};f.Orientation=u.b,f.Size=p.a,f.defaultProps={orientation:f.Orientation.BOTTOM,size:f.Size.SMALL,disabled:!1,className:null},t.a=f},"J/fC":function(e,t,n){},JCva:function(e,t,n){},"KEM+":function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},LdEA:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}},"Lw4+":function(e,t,n){"use strict";var a=n("ERkP"),i=n.n(a),r=n("O94r"),l=n.n(r),c=(n("j+zR"),n("X+z2"),function(e){var t=e.as,n=e.href,a=e.media,r=e.title,c=e.content,o=e.onClick,s=e.htmlFor,d=e.disabled,p=e.button,u=e.decision,m=e.complex,f=e.className,O=e.inverseMediaCircle,E=e.showMediaAtAllSizes,v=e.showMediaCircle;return i.a.createElement(t,{className:l()(f,"media",{"decision-complex":m,decision:u,disabled:d,"tw-option__sm-media":E}),href:n,onClick:o,htmlFor:s},a&&i.a.createElement("div",{className:"media-left"},v?i.a.createElement("div",{className:l()("circle circle-sm text-primary",{"circle-inverse":O})},a):i.a.createElement("div",{className:"tw-option__no-media-circle"},a)),i.a.createElement("div",{className:"media-body"},i.a.createElement("div",{className:"h5"},r),c),i.a.createElement("div",{className:"media-right"},p))});c.defaultProps={as:"label",media:"",content:null,htmlFor:null,disabled:!1,button:null,onClick:null,href:null,decision:!0,complex:!1,inverseMediaCircle:!0,className:null,showMediaAtAllSizes:!1,showMediaCircle:!0},t.a=c},O94r:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var l=i.apply(null,a);l&&e.push(l)}else if("object"===r)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()},OO3s:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Card",function(){return n("lE/t")}])},VehP:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},"X+z2":function(e,t,n){},eKd8:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var a={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},i={TOP_LEFT:"up-left",TOP:"up-center",TOP_RIGHT:"up-right",BOTTOM_LEFT:"down-left",BOTTOM:"down-center",BOTTOM_RIGHT:"down-right"}},"j+zR":function(e,t){e.exports=function(e,t){return function(n,a,i){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+i+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+i+". Validation failed.");var r=t(n)?e.isRequired:e;return r.apply(this,arguments)}}},"lE/t":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return b})),n.d(t,"default",(function(){return h}));var a=n("cxan"),i=n("HbGN"),r=n("ERkP"),l=n.n(r),c=n("ZVZ0"),o=n("Qi1R"),s=n("m3Bd"),d=n.n(s),p=(n("j+zR"),n("O94r")),u=n.n(p),m=n("Hi8P"),f=n("Lw4+"),O=(n("JCva"),function(e){var t=e.as,n=e.isExpanded,a=e.title,i=e.details,r=e.children,c=e.onClick,o=e.icon,s=e.id,p=e.className,O=d()(e,["as","isExpanded","title","details","children","onClick","icon","id","className"]),E=!(!n||!r);return l.a.createElement(t,{className:u()("tw-card list-group-item p-a-0",p,{active:E}),id:s,"data-testid":O["data-testid"]},l.a.createElement("div",{className:u()("p-a-panel tw-card__panel",{"tw-card__panel--inactive":!r}),role:r?"button":null,onClick:function(){return r&&c(!n)}},l.a.createElement(f.a,{as:"div",media:o,title:a,content:i,decision:!1,button:r&&l.a.createElement(m.a,{orientation:E?m.a.Orientation.TOP:m.a.Orientation.DOWN}),inverseMediaCircle:E})),E&&l.a.createElement("div",{className:"p-l-panel p-r-panel p-b-panel tw-card__content"},l.a.createElement("div",{className:"media"},l.a.createElement("div",{className:"media-left"},l.a.createElement("div",{className:"circle circle-sm circle-inverse circle-responsive invisible"})),l.a.createElement("div",{className:"media-body"},l.a.createElement("hr",{className:"m-t-0 hidden-xs hidden-sm"}),l.a.createElement("div",null,r)))))});O.defaultProps={as:"div",children:null,id:null,className:null,"data-testid":null};var E=O,v=n("/Vl7"),b=(l.a.createElement,{name:"Card"}),T={meta:b};function h(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.a)("wrapper",Object(a.a)({},T,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)(o.b,{code:'() => {\n  const [isExpanded, setIsExpanded] = React.useState(false);\n\n  return (\n    <Card\n      title="Title"\n      details="Some more context"\n      isExpanded={isExpanded}\n      onClick={isExpanded => setIsExpanded(isExpanded)}\n      icon={<FastFlagIcon size={24} />}\n    >\n      <div>Can be almost anything. Edit me :)</div>\n    </Card>\n  );\n};\n',scope:{Card:E,FastFlagIcon:v.k},mdxType:"LiveEditorBlock"}),Object(c.a)(o.a,{componentName:"Card",mdxType:"GeneratePropsTable"}),Object(c.a)("h2",{id:"group-of-cards"},"Group of cards"),Object(c.a)("p",null,"Cards rendered as ",Object(c.a)("inlineCode",{parentName:"p"},"li")," elements in a ",Object(c.a)("a",Object(a.a)({parentName:"p"},{href:"https://bootstrap.transferwise.com/components/#panels-list-group"}),"panel-list")," with ",Object(c.a)("inlineCode",{parentName:"p"},"list-group panel-list-group list-group-inactive")," class."),Object(c.a)("ul",{className:"list-group panel-list-group list-group-inactive"},Object(c.a)(E,{as:"li",title:"Collapsed card",details:"details",isExpanded:!1,onClick:function(){return alert("toggled")},icon:Object(c.a)(v.k,{mdxType:"FastFlagIcon"}),mdxType:"Card"},Object(c.a)("div",null)),Object(c.a)(E,{as:"li",title:"Expanded card",details:"details",isExpanded:!0,onClick:function(){return alert("toggled")},icon:Object(c.a)(v.k,{mdxType:"FastFlagIcon"}),mdxType:"Card"},"I am an expanded card."),Object(c.a)(E,{as:"li",title:"Empty card",details:"I do not have children",icon:Object(c.a)(v.k,{mdxType:"FastFlagIcon"}),mdxType:"Card"}),Object(c.a)(E,{as:"li",title:"Collapsed card",details:"details",isExpanded:!1,onClick:function(){return alert("toggled")},icon:Object(c.a)(v.k,{mdxType:"FastFlagIcon"}),mdxType:"Card"},Object(c.a)("div",null))))}h.isMDXComponent=!0},m3Bd:function(e,t,n){var a=n("LdEA");e.exports=function(e,t){if(null==e)return{};var n,i,r=a(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}}},[["OO3s",0,1,2,6,3,4]]]);