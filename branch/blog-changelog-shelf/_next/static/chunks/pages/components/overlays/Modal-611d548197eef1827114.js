_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[102],{"/4xM":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/overlays/Modal",function(){return n("LR2r")}])},"91IA":function(e,t,n){},GAp3:function(e,t,n){"use strict";n("2G9S"),n("vrRf"),n("KqXw"),n("Ysgh");var o,a=n("97Jx"),l=n.n(a),c=n("m3Bd"),r=n.n(c),i=n("VrFO"),s=n.n(i),d=n("Y9Ll"),u=n.n(d),p=n("1Pcy"),m=n.n(p),f=n("5Yy7"),b=n.n(f),E=n("N+ot"),h=n.n(E),y=n("AuHH"),v=n.n(y),k=n("KEM+"),N=n.n(k),R=n("ERkP"),O=n.n(R),w=n("O94r"),C=n.n(w),M=n("05Xt"),T=n("/Vl7"),P=n("6gor"),S=(n("2lU4"),n("bRoR")),A=n("eKd8"),L=n("VehP"),x=n("P8nL");function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=v()(e);if(t){var a=v()(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return h()(this,n)}}var I=function(e){function t(){var e;s()(this,t);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return e=n.call.apply(n,[this].concat(a)),N()(m()(e),"onEscape",(function(t){var n=e.props.onClose;t&&(t.keyCode===P.a.ESCAPE||"Escape"===t.key)&&n&&n(t)})),N()(m()(e),"handleOnClick",(function(t){var n=e.props,o=n.onClose,a=n.closeOnClick;t.target===t.currentTarget&&o&&a&&o(t)})),N()(m()(e),"handleOnEnter",(function(){Object(S.a)()})),N()(m()(e),"handleOnClose",(function(){Object(S.b)()})),N()(m()(e),"checkSpecialClasses",(function(t){return-1!==e.props.className.split(" ").indexOf(t)})),e}b()(t,e);var n=g(t);return u()(t,[{key:"componentDidMount",value:function(){this.modalDialog&&this.modalDialog.focus(),document.addEventListener("keydown",this.onEscape)}},{key:"componentWillUnmount",value:function(){this.props.open&&Object(S.b)(),document.removeEventListener("keydown",this.onEscape)}},{key:"render",value:function(){var e=this,n=this.props,o=n.title,a=n.body,c=n.footer,i=n.onClose,s=n.className,d=n.open,u=(n.size,n.closeOnClick,n.scroll),p=n.position,m=r()(n,["title","body","footer","onClose","className","open","size","closeOnClick","scroll","position"]),f=this.checkSpecialClasses("compact"),b=this.checkSpecialClasses("no-divider");return O.a.createElement(x.a,{open:d,scrollable:u===t.Scroll.CONTENT},O.a.createElement(M.a,{appear:!0,in:d,onEnter:this.handleOnEnter,onExited:this.handleOnClose,classNames:{enterDone:"in"},timeout:150,unmountOnExit:!0},O.a.createElement("div",l()({className:C()("tw-modal","d-flex","justify-content-center",{"tw-modal--content":u===t.Scroll.CONTENT,"align-items-center":p===A.a.CENTER,"align-items-start":p===A.a.TOP},"fade",s),tabIndex:"-1",role:"presentation",ref:function(t){e.modalDialog=t},onKeyDown:this.onEscape,onClick:this.handleOnClick},m),O.a.createElement("div",{className:C()("tw-modal-dialog","d-flex",N()({},"tw-modal-".concat(this.props.size),this.props.size)),"aria-modal":!0,role:"dialog"},O.a.createElement("div",{className:C()("tw-modal-content","d-flex","flex-column","justify-content-between",{"tw-modal-compact":f,"tw-modal-no-title":!o})},O.a.createElement("div",{className:C()("tw-modal-header","d-flex","align-items-center","justify-content-between","flex-wrap",{"modal--withoutborder":!o||b})},O.a.createElement("h4",{className:"tw-modal-title"},o),O.a.createElement("button",{type:"button",onClick:i,className:"close","aria-label":"close"},O.a.createElement(T.j,{size:24}))),O.a.createElement("div",{className:"tw-modal-body"},a),c&&O.a.createElement("div",{className:C()("tw-modal-footer","d-flex","align-items-center","flex-wrap",{"modal--withoutborder":b})},c))))))}}]),t}(R.Component);N()(I,"Size",L.a),N()(I,"Scroll",{CONTENT:"content",VIEWPORT:"viewport"}),N()(I,"Position",(o={},N()(o,A.a.TOP.toUpperCase(),A.a.TOP),N()(o,A.a.CENTER.toUpperCase(),A.a.CENTER),o)),I.defaultProps={title:null,footer:null,size:I.Size.MEDIUM,className:"",closeOnClick:!0,scroll:I.Scroll.VIEWPORT,position:I.Position.CENTER},t.a=I},LR2r:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"default",(function(){return f}));var o=n("cxan"),a=n("HbGN"),l=n("ERkP"),c=n.n(l),r=n("ZVZ0"),i=n("Qi1R"),s=n("GAp3"),d=n("SP0Y"),u=n("4cnL"),p=(c.a.createElement,{name:"Modal"}),m={meta:p};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.a)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.a)(i.b,{code:'() => {\n  const [open, setOpen] = React.useState(false);\n  return (\n    <>\n      <Button onClick={() => setOpen(true)}>Open Modal</Button>\n      <Modal\n        body={\n          <>\n            <DateInput onChange={console && console.log} value={new Date()} />\n            <p className="m-t-4">\n              I\'m baby actually poke kickstarter, street art jean shorts bespoke chambray activated\n              charcoal ramps marfa shoreditch tumeric tumblr. Mixtape cred palo santo, cliche lyft\n              marfa ethical waistcoat poke jean shorts. Scenester readymade selvage disrupt pok pok.\n              La croix stumptown try-hard chartreuse. I\'m baby actually poke kickstarter, street art\n              jean shorts bespoke chambray activated charcoal ramps marfa shoreditch tumeric\n            </p>\n          </>\n        }\n        open={open}\n        scroll={Modal.Scroll.CONTENT}\n        position={Modal.Position.TOP}\n        onClose={() => setOpen(false)}\n        size={Modal.Size.MEDIUM}\n        title="I\'m a hipster!"\n        className=""\n        footer={\n          <Button block onClick={() => alert(\'clicked\')}>\n            Action\n          </Button>\n        }\n        closeOnClick\n      />\n    </>\n  );\n};\n',scope:{Modal:s.a,Button:d.a,DateInput:u.a},mdxType:"LiveEditorBlock"}),Object(r.a)(i.a,{componentName:"Modal",mdxType:"GeneratePropsTable"}))}f.isMDXComponent=!0},SP0Y:function(e,t,n){"use strict";var o=n("97Jx"),a=n.n(o),l=n("m3Bd"),c=n.n(l),r=n("ERkP"),i=n.n(r),s=n("O94r"),d=n.n(s),u=(n("j+zR"),n("s+Iv")),p=(n("91IA"),{PRIMARY:"primary",PAY:"pay",SECONDARY:"secondary",DANGER:"danger",LINK:"link"}),m=n("VehP"),f=function(e){var t=e.className,n=e.block,o=e.children,l=e.disabled,r=e.htmlType,s=e.loading,f=e.size,b=e.type,E=c()(e,["className","block","children","disabled","htmlType","loading","size","type"]),h=d()("btn btn-".concat(f),"np-btn np-btn-".concat(f),{"btn-loading":s,"btn-primary":b===p.PRIMARY,"btn-success":b===p.PAY,"btn-default":b===p.SECONDARY,"btn-danger":b===p.DANGER,"btn-link":b===p.LINK,"btn-block np-btn-block":n},t);return Object(u.b)("Button has deprecated the `Button.Size.EXTRA_SMALL` value for the `size` prop. Please use Button.Size.SMALL instead.",f===m.a.EXTRA_SMALL),i.a.createElement("button",a()({type:r,className:h,disabled:l||s},E),o,s&&i.a.createElement("span",{className:d()("btn-loader",{"m-l-2":!n})}))};f.Type=p,f.Size={EXTRA_SMALL:m.a.EXTRA_SMALL,SMALL:m.a.SMALL,MEDIUM:m.a.MEDIUM,LARGE:m.a.LARGE},f.defaultProps={className:null,size:f.Size.MEDIUM,type:f.Type.PRIMARY,disabled:!1,block:!1,loading:!1,htmlType:"button"};t.a=f},bRoR:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var o=function(){document.body.classList.add("no-scroll")},a=function(){document.body.classList.remove("no-scroll")}},"j+zR":function(e,t){e.exports=function(e,t){return function(n,o,a){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+a+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+a+". Validation failed.");var l=t(n)?e.isRequired:e;return l.apply(this,arguments)}}},"s+Iv":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));n("vrRf");function o(t){var n,o;0<=["development","test"].indexOf(null===(n=e)||void 0===n||null===(o=n.env)||void 0===o?void 0:"production")&&console.warn(t)}function a(e,t){t&&o(e)}}).call(this,n("F63i"))}},[["/4xM",0,1,2,6,3,5,7,8,9,10,11,13,4]]]);