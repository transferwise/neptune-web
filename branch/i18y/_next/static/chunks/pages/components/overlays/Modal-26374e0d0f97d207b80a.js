_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[81],{"+oxZ":function(e,t,n){var a=n("9JhN"),o=n("Ew2P"),r=n("6OVi"),c=n("WxKw");for(var i in o){var s=a[i],l=s&&s.prototype;if(l&&l.forEach!==r)try{c(l,"forEach",r)}catch(u){l.forEach=r}}},"/4xM":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/overlays/Modal",function(){return n("LR2r")}])},"6OVi":function(e,t,n){"use strict";var a=n("0FSu").forEach,o=n("f4p7"),r=n("znGZ"),c=o("forEach"),i=r("forEach");e.exports=c&&i?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},"91IA":function(e,t,n){},Ew2P:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},LR2r:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return G})),n.d(t,"default",(function(){return B}));var a=n("cxan"),o=n("HbGN"),r=n("ERkP"),c=n.n(r),i=n("ZVZ0"),s=n("Qi1R"),l=(n("2G9S"),n("vrRf"),n("7x/C"),n("OZaJ"),n("KqXw"),n("DZ+c"),n("Ysgh"),n("97Jx")),u=n.n(l),d=n("m3Bd"),p=n.n(d),m=n("VrFO"),f=n.n(m),h=n("Y9Ll"),E=n.n(h),b=n("1Pcy"),y=n.n(b),L=n("5Yy7"),k=n.n(L),v=n("N+ot"),S=n.n(v),M=n("AuHH"),N=n.n(M),R=n("KEM+"),O=n.n(R),w=n("O94r"),C=n.n(w),A=n("05Xt"),g=n("/Vl7"),D=n("6gor"),T=(n("2lU4"),n("bRoR")),P=n("VehP"),x=n("P8nL");function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=N()(e);if(t){var o=N()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return S()(this,n)}}var z=function(e){function t(){var e;f()(this,t);for(var a=arguments.length,o=Array(a),r=0;r<a;r++)o[r]=arguments[r];return e=n.call.apply(n,[this].concat(o)),O()(y()(e),"onEscape",(function(t){var n=e.props.onClose;t&&(t.keyCode===D.a.ESCAPE||"Escape"===t.key)&&n&&n(t)})),O()(y()(e),"handleOnClick",(function(t){var n=e.props,a=n.onClose,o=n.closeOnClick;t.target===t.currentTarget&&a&&o&&a(t)})),O()(y()(e),"handleOnEnter",(function(){Object(T.a)()})),O()(y()(e),"handleOnClose",(function(){Object(T.b)()})),O()(y()(e),"checkSpecialClasses",(function(t){return-1!==e.props.className.split(" ").indexOf(t)})),e}k()(t,e);var n=I(t);return E()(t,[{key:"componentDidMount",value:function(){this.modalDialog&&this.modalDialog.focus(),document.addEventListener("keydown",this.onEscape)}},{key:"componentWillUnmount",value:function(){this.props.open&&Object(T.b)(),document.removeEventListener("keydown",this.onEscape)}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.body,o=t.footer,r=t.onClose,i=t.className,s=t.open,l=(t.size,t.closeOnClick,p()(t,["title","body","footer","onClose","className","open","size","closeOnClick"])),d=this.checkSpecialClasses("compact"),m=this.checkSpecialClasses("no-divider");return c.a.createElement(x.a,{open:s},c.a.createElement(A.a,{appear:!0,in:s,onEnter:this.handleOnEnter,onExited:this.handleOnClose,classNames:{enterDone:"in"},timeout:150,unmountOnExit:!0},c.a.createElement("div",u()({className:"tw-modal fade ".concat(i),tabIndex:"-1",role:"presentation",ref:function(t){e.modalDialog=t},onKeyDown:this.onEscape,onClick:this.handleOnClick},l),c.a.createElement("div",{className:C()("tw-modal-dialog",O()({},"tw-modal-".concat(this.props.size),this.props.size)),"aria-modal":!0,role:"dialog"},c.a.createElement("div",{className:C()("tw-modal-content",{"tw-modal-compact":d,"tw-modal-no-title":!n})},c.a.createElement("div",{className:C()("tw-modal-header",{"modal--withoutborder":!n||m})},c.a.createElement("h4",{className:"tw-modal-title"},n),c.a.createElement("button",{type:"button",onClick:r,className:"close","aria-label":"close"},c.a.createElement(g.h,{size:24}))),c.a.createElement("div",{className:"tw-modal-body"},a),o&&c.a.createElement("div",{className:C()("tw-modal-footer",{"modal--withoutborder":m})},o))))))}}]),t}(r.Component);O()(z,"Size",P.a),z.defaultProps={title:null,footer:null,size:z.Size.MEDIUM,className:"",closeOnClick:!0};var V=z,_=n("SP0Y"),j=n("4cnL"),G=(c.a.createElement,{name:"Modal"}),Y={meta:G};function B(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},Y,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)(s.b,{code:'() => {\n  const [open, setOpen] = React.useState(false);\n  return (\n    <>\n      <Button onClick={() => setOpen(true)}>Open Modal</Button>\n      <Modal\n        body={\n          <>\n            <DateInput onChange={console && console.log} value={new Date()} />\n            <p className="m-t-4">\n              I\'m baby actually poke kickstarter, street art jean shorts bespoke chambray activated\n              charcoal ramps marfa shoreditch tumeric tumblr. Mixtape cred palo santo, cliche lyft\n              marfa ethical waistcoat poke jean shorts. Scenester readymade selvage disrupt pok pok.\n              La croix stumptown try-hard chartreuse. I\'m baby actually poke kickstarter, street art\n              jean shorts bespoke chambray activated charcoal ramps marfa shoreditch tumeric\n            </p>\n          </>\n        }\n        open={open}\n        onClose={() => setOpen(false)}\n        size={Modal.Size.MEDIUM}\n        title="I\'m a hipster!"\n        className=""\n        footer={\n          <Button block onClick={() => alert(\'clicked\')}>\n            Action\n          </Button>\n        }\n        closeOnClick\n      />\n    </>\n  );\n};\n',scope:{Modal:V,Button:_.a,DateInput:j.a},mdxType:"LiveEditorBlock"}),Object(i.a)(s.a,{componentName:"Modal",mdxType:"GeneratePropsTable"}))}B.isMDXComponent=!0},SP0Y:function(e,t,n){"use strict";var a=n("97Jx"),o=n.n(a),r=n("m3Bd"),c=n.n(r),i=n("ERkP"),s=n.n(i),l=n("O94r"),u=n.n(l),d=(n("j+zR"),n("91IA"),{PRIMARY:"primary",PAY:"pay",SECONDARY:"secondary",DANGER:"danger",LINK:"link"}),p=n("VehP"),m=function(e){var t=e.className,n=e.block,a=e.children,r=e.disabled,i=e.htmlType,l=e.loading,m=e.size,f=e.type,h=c()(e,["className","block","children","disabled","htmlType","loading","size","type"]),E=u()("btn btn-".concat(m),"np-btn np-btn-".concat(m),{"btn-loading":l,"btn-primary":f===d.PRIMARY,"btn-success":f===d.PAY,"btn-default":f===d.SECONDARY,"btn-danger":f===d.DANGER,"btn-link":f===d.LINK,"btn-block np-btn-block":n},t);return p.a.EXTRA_SMALL,s.a.createElement("button",o()({type:i,className:E,disabled:r||l},h),a,l&&s.a.createElement("span",{className:u()("btn-loader",{"m-l-2":!n})}))};m.Type=d,m.Size={EXTRA_SMALL:p.a.EXTRA_SMALL,SMALL:p.a.SMALL,MEDIUM:p.a.MEDIUM,LARGE:p.a.LARGE},m.defaultProps={className:null,size:m.Size.MEDIUM,type:m.Type.PRIMARY,disabled:!1,block:!1,loading:!1,htmlType:"button"};t.a=m},bRoR:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var a=function(){document.body.classList.add("no-scroll")},o=function(){document.body.classList.remove("no-scroll")}},"j+zR":function(e,t){e.exports=function(e,t){return function(n,a,o){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+o+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+o+". Validation failed.");var r=t(n)?e.isRequired:e;return r.apply(this,arguments)}}},jwue:function(e,t,n){"use strict";var a=n("ax0f"),o=n("6OVi");a({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})}},[["/4xM",0,1,2,6,3,5,7,8,9,10,11,4]]]);