_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[62],{"/d7r":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return X})),n.d(t,"default",(function(){return K}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),c=n.n(a),u=n("ZVZ0"),i=n("Qi1R"),s=(n("1t7P"),n("LW0h"),n("jwue"),n("vrRf"),n("tQbP"),n("6U7i"),n("ssvU"),n("daRM"),n("FtHn"),n("+KXO"),n("7x/C"),n("OZaJ"),n("DZ+c"),n("+oxZ"),n("RhWx")),l=n.n(s),p=n("VrFO"),h=n.n(p),f=n("Y9Ll"),m=n.n(f),d=n("1Pcy"),y=n.n(d),v=n("5Yy7"),g=n.n(v),b=n("N+ot"),C=n.n(b),N=n("AuHH"),O=n.n(N),F=n("KEM+"),E=n.n(F),A=n("O94r"),w=n.n(A),S=n("RmhF"),I=(n("y0C3"),n("VehP")),P=n("b0Hy"),M=(n("Ef13"),n("iKE+"),n("KqXw"),n("MvUL"),{BIF:0,BYR:0,CLP:0,DJF:0,GNF:0,JPY:0,KMF:0,KRW:0,MGA:0,PYG:0,RWF:0,VND:0,VUV:0,XAF:0,XOF:0,XPF:0,HUF:0,BHD:3,JOD:3,KWD:3,OMR:3,TND:3});function D(){return"1,234"===(1234..toLocaleString&&1234..toLocaleString("en-GB"))}function R(e,t,n){var r=function(e){try{var t=e.replace(/_/,"-");return Intl.NumberFormat(t),t}catch(e){return"en-GB"}}(n),o=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"").toUpperCase();return Object.prototype.hasOwnProperty.call(M,e)?M[e]:2}(t),a=D()?1e3.toLocaleString(r)[1]:",",c=function(e){return D()?1.1.toLocaleString(e)[1]:"."}(r),u=e.replace(/\s/g,"").replace(new RegExp("\\".concat(a),"g"),"").replace(new RegExp("\\".concat(c),"g"),"."),i=parseFloat(parseFloat(u).toFixed(o));return Math.abs(i)}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?T(Object(t),!0).forEach((function(n){E()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function U(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O()(e);if(t){var o=O()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return C()(this,n)}}var L=function(e,t,n){return"number"==typeof e?Object(P.a)(e,t,n):""},G=function(e){function t(e){var r;return h()(this,t),r=n.call(this,e),E()(y()(r),"onAmountChange",(function(e){var t=e.target.value;r.setState({formattedAmount:t});var n=R(t,r.props.selectedCurrency.currency,r.props.locale);Number.isNaN(n)||r.props.onAmountChange(n)})),E()(y()(r),"onAmountBlur",(function(){r.amountFocused=!1,r.setAmount()})),E()(y()(r),"onAmountFocus",(function(){r.amountFocused=!0})),E()(y()(r),"handleSelectChange",(function(e){r.handleSearchChange(""),r.props.onCustomAction&&"CUSTOM_ACTION"===e.value?r.props.onCustomAction():r.props.onCurrencyChange(e)})),E()(y()(r),"handleSearchChange",(function(e){r.setState({searchQuery:e}),r.props.onSearchChange&&r.props.onSearchChange({searchQuery:e,filteredOptions:_(r.props.currencies,e)})})),E()(y()(r),"style",(function(e){return r.props.classNames[e]||e})),r.state={searchQuery:"",formattedAmount:L(e.amount,e.selectedCurrency.currency,e.locale)},r}g()(t,e);var n=U(t);return m()(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.amountFocused||this.setState({formattedAmount:L(e.amount,e.selectedCurrency.currency,e.locale)})}},{key:"getSelectOptions",value:function(){var e=l()(_(this.props.currencies,this.state.searchQuery));return this.props.onCustomAction&&e.push({value:"CUSTOM_ACTION",label:this.props.customActionLabel}),e}},{key:"setAmount",value:function(){var e=this;this.setState((function(t){var n=R(t.formattedAmount,e.props.selectedCurrency.currency,e.props.locale);return Number.isNaN(n)?{formattedAmount:t.formattedAmount}:{formattedAmount:L(n,e.props.selectedCurrency.currency,e.props.locale)}}))}},{key:"render",value:function(){var e=this.props,t=e.selectedCurrency,n=e.onCurrencyChange,r=e.size,o=e.addon,a=this.getSelectOptions(),u=!this.state.searchQuery&&(1===a.length&&a[0].currency===t.currency||!n),i=!this.props.onAmountChange;return c.a.createElement("div",{className:w()(this.style("tw-money-input"),this.style("input-group"),this.style("input-group-".concat(r)))},c.a.createElement("input",{id:this.props.id,value:this.state.formattedAmount,type:"text",inputMode:"decimal",className:w()(this.style("form-control")),onChange:this.onAmountChange,onFocus:this.onAmountFocus,onBlur:this.onAmountBlur,disabled:i,placeholder:L(this.props.placeholder,this.props.selectedCurrency.currency,this.props.locale),autoComplete:"off"}),o&&c.a.createElement("span",{className:w()(this.style("input-group-addon"),this.style("input-".concat(r)),i?this.style("tw-money-input--disabled"):"")},o),u?c.a.createElement("div",{className:w()(this.style("input-group-addon"),this.style("input-".concat(r)),this.style("tw-money-input__fixed-currency"),i?this.style("tw-money-input--disabled"):"")},"lg"===r&&c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:w()(this.style("tw-money-input__keyline"))}),c.a.createElement("i",{className:w()(this.style("currency-flag"),this.style("currency-flag-".concat(t.currency.toLowerCase())),this.style("hidden-xs"),this.style("m-r-2"))})),c.a.createElement("span",{className:"lg"===r?this.style("m-r-1"):""},t.currency.toUpperCase())):c.a.createElement("span",{className:w()(this.style("input-group-btn"),this.style("amount-currency-select-btn"))},c.a.createElement(S.a,{classNames:this.props.classNames,options:a,selected:x(x({},t),{},{note:null}),onChange:this.handleSelectChange,placeholder:"Select an option...",searchPlaceholder:this.props.searchPlaceholder,onSearchChange:this.handleSearchChange,searchValue:this.state.searchQuery,size:r,required:!0,dropdownRight:"xs",dropdownWidth:"lg",inverse:!0})))}}]),t}(a.Component);function _(e,t){return t?function(e,t){return e.sort((function(e,n){var r=B(e.label,t),o=B(n.label,t);return r&&o?0:r?-1:o?1:0}))}(function(e){var t=[],n=[];return e.forEach((function(e){e.value&&-1===n.indexOf(e.value)&&(t.push(e),n.push(e.value))})),t}(e).filter((function(e){return function(e,t){return!!e.value&&(B(e.label,t)||B(e.searchable,t)||B(e.note,t))}(e,t)})),t):e}function B(e,t){return e&&-1!==e.toLowerCase().indexOf(t.toLowerCase())}G.Size={SMALL:I.a.SMALL,MEDIUM:I.a.MEDIUM,LARGE:I.a.LARGE},G.defaultProps={id:null,size:G.Size.LARGE,locale:"en-GB",addon:null,searchPlaceholder:"",onSearchChange:void 0,onCurrencyChange:null,placeholder:null,amount:null,onAmountChange:null,customActionLabel:"",onCustomAction:null,classNames:{}};var j=G,X=(c.a.createElement,{name:"MoneyInput"}),W={meta:X};function K(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(u.a)("wrapper",Object(r.a)({},W,n,{components:t,mdxType:"MDXLayout"}),Object(u.a)(i.b,{code:"<>\n  <label htmlFor=\"money-input\">Money input label</label>\n  <MoneyInput\n    id=\"money-input\"\n    amount={1000}\n    locale=\"en-GB\"\n    size=\"lg\"\n    onAmountChange={() => console.log('amount changed')}\n    onCurrencyChange={() => alert('currency changed')}\n    addon={null}\n    searchPlaceholder=\"Type a currency or country\"\n    onCustomAction={() => alert('Custom action')}\n    customActionLabel=\"Custom action label\"\n    currencies={[\n      {\n        header: 'Popular currencies',\n      },\n      {\n        value: 'EUR',\n        label: 'EUR',\n        note: 'Euro',\n        currency: 'eur',\n        searchable: 'Spain, Germany, France, Austria',\n      },\n      {\n        value: 'GBP',\n        label: 'GBP',\n        note: 'British pound',\n        currency: 'gbp',\n        searchable: 'England, Scotland, Wales',\n      },\n    ]}\n    selectedCurrency={{\n      value: 'EUR',\n      label: 'EUR',\n      note: 'Euro',\n      currency: 'eur',\n      searchable: 'Spain, Germany, France, Austria',\n    }}\n  />\n</>;\n",scope:{MoneyInput:j},display:"vertical",mdxType:"LiveEditorBlock"}),Object(u.a)(i.a,{componentName:"MoneyInput",mdxType:"GeneratePropsTable"}))}K.isMDXComponent=!0},Ef13:function(e,t,n){"use strict";var r=n("ax0f"),o=n("i7Kn"),a=n("W6AI"),c=n("ovzZ"),u=n("ct80"),i=1..toFixed,s=Math.floor,l=function(e,t,n){return 0===t?n:t%2===1?l(e,t-1,n*e):l(e*e,t/2,n)};r({target:"Number",proto:!0,forced:i&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!u((function(){i.call({})}))},{toFixed:function(e){var t,n,r,u,i=a(this),p=o(e),h=[0,0,0,0,0,0],f="",m="0",d=function(e,t){for(var n=-1,r=t;++n<6;)r+=e*h[n],h[n]=r%1e7,r=s(r/1e7)},y=function(e){for(var t=6,n=0;--t>=0;)n+=h[t],h[t]=s(n/e),n=n%e*1e7},v=function(){for(var e=6,t="";--e>=0;)if(""!==t||0===e||0!==h[e]){var n=String(h[e]);t=""===t?n:t+c.call("0",7-n.length)+n}return t};if(p<0||p>20)throw RangeError("Incorrect fraction digits");if(i!=i)return"NaN";if(i<=-1e21||i>=1e21)return String(i);if(i<0&&(f="-",i=-i),i>1e-21)if(n=(t=function(e){for(var t=0,n=e;n>=4096;)t+=12,n/=4096;for(;n>=2;)t+=1,n/=2;return t}(i*l(2,69,1))-69)<0?i*l(2,-t,1):i/l(2,t,1),n*=4503599627370496,(t=52-t)>0){for(d(0,n),r=p;r>=7;)d(1e7,0),r-=7;for(d(l(10,r,1),0),r=t-1;r>=23;)y(1<<23),r-=23;y(1<<r),d(1,1),y(2),m=v()}else d(0,n),d(1<<-t,0),m=v()+c.call("0",p);return m=p>0?f+((u=m.length)<=p?"0."+c.call("0",p-u)+m:m.slice(0,u-p)+"."+m.slice(u-p)):f+m}})},IA75:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/inputs/MoneyInput",function(){return n("/d7r")}])},W6AI:function(e,t,n){var r=n("amH4");e.exports=function(e){if("number"!=typeof e&&"Number"!=r(e))throw TypeError("Incorrect invocation");return+e}},b0Hy:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return i}));var r,o={TYPE:"SignificantDigits",MIN_PRECISION:1,MAX_PRECISION:21},a={TYPE:"FractionDigits",MIN_PRECISION:0,MAX_PRECISION:20},c={};function u(e,t){var n=t?""+e+Object.entries(t):e;return c[n]||(c[n]=t?new Intl.NumberFormat(e,t):new Intl.NumberFormat(e)),c[n]}function i(e,t,n,c){if(void 0===t&&(t="en-GB"),void 0===c&&(c="FractionDigits"),!e&&0!==e)return"";"string"==typeof e&&Number(e)&&(e=Number(e));var i=c===o.TYPE?o:a,s=null!=n&&"number"==typeof n&&n>=i.MIN_PRECISION&&n<=i.MAX_PRECISION,l=function(e){try{var t=e.replace(/_/,"-");return Intl.NumberFormat(t),t}catch(e){return"en-GB"}}(t);return function(e){return void 0===r&&(r="object"==typeof Intl&&void 0!==Intl&&"function"==typeof Intl.NumberFormat&&Intl.NumberFormat&&"function"==typeof Intl.NumberFormat.supportedLocalesOf&&Intl.NumberFormat.supportedLocalesOf&&1===Intl.NumberFormat.supportedLocalesOf(e).length),r}(l)?(s?u(l,function(e,t){var n;return(n={})["minimum"+t]=e,n["maximum"+t]=e,n}(n,c)):u(l)).format(e):s?function(e,t,n){return n===o.TYPE?e.toPrecision(t):e.toFixed(t)}(e,n,c):""+e}var s={BIF:0,BYR:0,CLP:0,DJF:0,GNF:0,JPY:0,KMF:0,KRW:0,MGA:0,PYG:0,RWF:0,VND:0,VUV:0,XAF:0,XOF:0,XPF:0,HUF:0,UGX:0,KES:0,BHD:3,JOD:3,KWD:3,OMR:3,TND:3};function l(e,t,n,r){void 0===n&&(n="en-GB"),void 0===r&&(r={alwaysShowDecimals:!1});var o=function(e,t,n){return function(e){return e%1==0}(e)&&!n?0:function(e){void 0===e&&(e="");var t=e.toUpperCase();return Object.prototype.hasOwnProperty.call(s,t)?s[t]:2}(t)}(e,t,r.alwaysShowDecimals),a=e<0,c=i(Math.abs(e),n,o);return a?"- "+c:c}function p(e,t,n,r){return void 0===n&&(n="en-GB"),void 0===r&&(r={alwaysShowDecimals:!1}),l(e,t,n,r)+" "+(t||"").toUpperCase()}var h;var f={},m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],y={};function v(e,t,n){return void 0===t&&(t="en-GB"),void 0===h&&(h=function(){try{var e=new Date(2018,11,1);return"01/12/2018"===new Intl.DateTimeFormat("en-GB").format(e)}catch(e){return!1}}()),h?function(e,t){return y[e]||(y[e]=new Map),y[e].has(t)||y[e].set(t,new Intl.DateTimeFormat(e,t)),y[e].get(t)}(function(e){return function(e){return void 0===f[e]&&(f[e]=function(e){try{return Intl.DateTimeFormat.supportedLocalesOf([e]).length>0}catch(e){return!1}}(e)),f[e]}(e)?e:"en-GB"}(t),n).format(e):function e(t,n){void 0===n&&(n={});var r="UTC"===n.timeZone,o=[];if(n.day&&o.push(r?t.getUTCDate():t.getDate()),n.month){var a=function(e,t,n){return"short"===e.month?d[t?n.getUTCMonth():n.getMonth()]:(t?n.getUTCMonth():n.getMonth())+1}(n,r,t);!function(e){return"short"===e.month}(n)?o.push(a):o.unshift(a)}n.year&&o.push(t.getUTCFullYear());var c=function(e){return"short"===e.month?" ":"/"}(n),u=o.join(c);if(n.weekday){var i=m[r?t.getUTCDay():t.getDay()];u=u?i+", "+u:i}return u||e(t,{timeZone:n.timeZone,day:"true",month:"true",year:"true"})}(e,n)}var g;!function(e){e.SECOND="second",e.MINUTE="minute",e.HOUR="hour"}(g||(g={}))},ovzZ:function(e,t,n){"use strict";var r=n("i7Kn"),o=n("cww3");e.exports="".repeat||function(e){var t=String(o(this)),n="",a=r(e);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(t+=t))1&a&&(n+=t);return n}}},[["IA75",0,1,2,6,3,5,7,8,9,10,12,4]]]);