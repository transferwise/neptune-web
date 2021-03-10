_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[113],{"+wNj":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},"6UoK":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lab/About",function(){return n("fNbh")}])},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("+wNj");function o(e,t){if(null==e)return{};var n,o,a=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("ERkP"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(n),b=r,d=f["".concat(c,".").concat(b)]||f[b]||p[b]||a;return n?o.a.createElement(d,i(i({ref:t},l),{},{components:n})):o.a.createElement(d,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"===typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},fNbh:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),c=n.n(a),i=n("ZVZ0"),u=(c.a.createElement,{name:"About Lab"}),l={meta:u};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"Welcome to the lab!"),Object(i.a)("h3",{id:"first-things-first-what-is-the-lab"},"First things first! What is the lab?"),Object(i.a)("p",null,"The lab is our space where we implement and test new features. These features are already really good but not fully baked yet so we need your feedback to make them production ready."),Object(i.a)("p",null,"The lab's features move fast! Actually faster than the core components. Breaking changes may (or may not) be released whenever an improvment needs to be made."),Object(i.a)("h3",{id:"why-should-i-use-the-lab-then"},"Why should I use the lab then?"),Object(i.a)("p",null,"Based on your feedback and demands we'll decide whether or not a component can go to production or be deprecated. So if you like one of these new shiny components please let us know and show your interest and we'll do our best to push it through the release process."),Object(i.a)("h3",{id:"im-in-how-should-i-use-a-lab-component"},"I'm in! How should I use a lab component?"),Object(i.a)("p",null,"We decided to keep the lab inside the core components, so all you have to do is:"),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"yarn add @transferwise/components")),Object(i.a)("p",null,"and then you can import your component from"),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"import { ComponentName } from '@transferwise/components/build/es/{polyfill|no-polyfill}/lab';")),Object(i.a)("p",null,"In this initial stage we're not offering a umd build yet, but let us know if you need one and we'll think about it"))}s.isMDXComponent=!0}},[["6UoK",0,1]]]);