(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"3ZQK":function(e,t,a){"use strict";a.r(t),a.d(t,"defaultLocale",(function(){return w})),a.d(t,"meta",(function(){return L})),a.d(t,"default",(function(){return M}));var r={};a.r(r),a.d(r,"en",(function(){return f})),a.d(r,"de",(function(){return p})),a.d(r,"es",(function(){return d})),a.d(r,"fr",(function(){return b})),a.d(r,"hu",(function(){return v})),a.d(r,"id",(function(){return O})),a.d(r,"it",(function(){return h})),a.d(r,"ja",(function(){return y})),a.d(r,"pl",(function(){return j})),a.d(r,"pt",(function(){return N})),a.d(r,"ro",(function(){return E})),a.d(r,"ru",(function(){return R})),a.d(r,"tr",(function(){return S})),a.d(r,"zh_HK",(function(){return P}));var n=a("cxan"),o=a("HbGN"),i=a("ERkP"),s=a.n(i),l=a("ZVZ0"),u=a("6sB8"),c=a("Qi1R"),m=a("mqq0"),g=a("RmhF"),f=a("zgVw"),p=a("8OU3"),d=a("sfNv"),b=a("laaj"),v=a("NcCI"),O=a("TwBf"),h=a("gwVC"),y=a("o9ul"),j=a("jHxy"),N=a("G7iP"),E=a("KhZ1"),R=a("gEE1"),S=a("CIvc"),P=a("ymlD"),T=a("BAoe"),C=Object(T.a)({ariaLabel:{id:"np.CloseButton.aria-label"}}),w=(s.a.createElement,"en"),L={name:"Provider"},x={defaultLocale:w,meta:L};function M(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.a)("wrapper",Object(n.a)({},x,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)(c.b,{code:'() => {\n  const [i18n, setI18n] = React.useState({\n    locale: defaultLocale,\n    messages: supportedLanguages[defaultLocale],\n  });\n  const listOfLocales = [];\n  for (const [key] of Object.entries(supportedLanguages)) {\n    listOfLocales.push({ value: key, label: key });\n  }\n  const [selectedLocale, setSelectedLocale] = React.useState(listOfLocales[0]);\n  return (\n    <Provider i18n={i18n}>\n      Translated message: <FormattedMessage {...messages.ariaLabel} />\n      <br /><br />\n      <Select\n        selected={selectedLocale}\n        onChange={(item) => {\n          setI18n({ locale: item.value, messages: supportedLanguages[item.value] });\n          setSelectedLocale(item);\n        }}\n        placeholder="Select locale"\n        options={listOfLocales}\n      />\n    </Provider>\n  );\n}\n',scope:{Provider:m.a,Select:g.a,FormattedMessage:u.a,messages:C,supportedLanguages:r,defaultLocale:w},mdxType:"LiveEditorBlock"}),Object(l.a)(c.a,{componentName:"Provider",mdxType:"GeneratePropsTable"}))}M.isMDXComponent=!0},"6sB8":function(e,t,a){"use strict";var r=a("D57K"),n=a("ERkP"),o=a("ymT0"),i=a("yGPN"),s=a("nChe"),l=a.n(s).a||s,u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.b)(t,e),t.prototype.shouldComponentUpdate=function(e){var t=this.props,a=t.values,n=Object(r.c)(t,["values"]),o=e.values,i=Object(r.c)(e,["values"]);return!l(o,a)||!l(n,i)},t.prototype.render=function(){var e=this;return n.createElement(o.a.Consumer,null,(function(t){Object(i.c)(t);var a=t.formatMessage,o=t.textComponent,s=void 0===o?n.Fragment:o,l=e.props,u=l.id,c=l.description,m=l.defaultMessage,g=l.values,f=l.children,p=l.tagName,d=void 0===p?s:p,b=a({id:u,description:c,defaultMessage:m},g);return Array.isArray(b)||(b=[b]),"function"===typeof f?f(b):d?n.createElement.apply(n,Object(r.d)([d,null],b)):b}))},t.displayName="FormattedMessage",t}(n.Component);t.a=u},"8OU3":function(e){e.exports=JSON.parse('{"0SKBlf":"Go to page {pageNumber}","2xdm3a":"Close","OesMJh":"Current page, page {pageNumber}","nnpz2g":"Pagination navigation"}')},CIvc:function(e){e.exports=JSON.parse('{"0SKBlf":"Go to page {pageNumber}","2xdm3a":"Close","OesMJh":"Current page, page {pageNumber}","nnpz2g":"Pagination navigation"}')},G7iP:function(e){e.exports=JSON.parse('{"0SKBlf":"Go to page {pageNumber}","2xdm3a":"Close","OesMJh":"Current page, page {pageNumber}","nnpz2g":"Pagination navigation"}')},KhZ1:function(e){e.exports=JSON.parse('{"0SKBlf":"Go to page {pageNumber}","2xdm3a":"Close","OesMJh":"Current page, page {pageNumber}","nnpz2g":"Pagination navigation"}')},NcCI:function(e){e.exports=JSON.parse('{"0SKBlf":"Go to page {pageNumber}","2xdm3a":"Close","OesMJh":"Current page, page {pageNumber}","nnpz2g":"Pagination navigation"}')},TwBf:function(e){e.exports=JSON.parse('{"0SKBlf":"Go to page {pageNumber}","2xdm3a":"Close","OesMJh":"Current page, page {pageNumber}","nnpz2g":"Pagination navigation"}')},gEE1:function(e){e.exports=JSON.parse('{"0SKBlf":"Go to page {pageNumber}","2xdm3a":"Close","OesMJh":"Current page, page {pageNumber}","nnpz2g":"Pagination navigation"}')},gwVC:function(e){e.exports=JSON.parse('{"0SKBlf":"Go to page {pageNumber}","2xdm3a":"Close","OesMJh":"Current page, page {pageNumber}","nnpz2g":"Pagination navigation"}')},jHxy:function(e){e.exports=JSON.parse('{"0SKBlf":"Go to page {pageNumber}","2xdm3a":"Close","OesMJh":"Current page, page {pageNumber}","nnpz2g":"Pagination navigation"}')},laaj:function(e){e.exports=JSON.parse('{"0SKBlf":"Go to page {pageNumber}","2xdm3a":"Close","OesMJh":"Current page, page {pageNumber}","nnpz2g":"Pagination navigation"}')},mqq0:function(e,t,a){"use strict";a("jQ3i"),a("KqXw"),a("MvUL");var r=a("ERkP"),n=a.n(r),o=a("qiww"),i=a("ueEL"),s=a("ymT0"),l=a("zzRO"),u=["de","en","es","fr","hu","id","it","ja","pl","pt","ro","ru","tr","zh_HK"];function c(e){var t,a=e.i18n,r=e.children,c=Object(o.c)(),m=a.locale,g=a.messages;t=u.includes(m)?{locale:m.replace("_","-"),messages:g}:{locale:"en",messages:l};var f=Object(i.a)(t,c);return n.a.createElement(s.b,{value:f},r)}c.defaultProps={children:void 0},t.a=c},nChe:function(e,t,a){"use strict";e.exports=function(e,t){if(e===t)return!0;if(!e||!t)return!1;var a=Object.keys(e),r=Object.keys(t),n=a.length;if(r.length!==n)return!1;for(var o=0;o<n;o++){var i=a[o];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}},o9ul:function(e){e.exports=JSON.parse('{"0SKBlf":"Go to page {pageNumber}","2xdm3a":"Close","OesMJh":"Current page, page {pageNumber}","nnpz2g":"Pagination navigation"}')},sfNv:function(e){e.exports=JSON.parse('{"0SKBlf":"Go to page {pageNumber}","2xdm3a":"Test","OesMJh":"Current page, page {pageNumber}","nnpz2g":"Pagination navigation"}')},ueEL:function(e,t,a){"use strict";a.d(t,"a",(function(){return Z}));var r=a("D57K"),n=a("ERkP"),o=a("ymT0"),i=a("yGPN"),s=a("mUED"),l=a("mjvE"),u=a("LYaP"),c=a("PAjK");function m(e,t){return Object.keys(e).reduce((function(a,n){return a[n]=Object(r.a)({timeZone:t},e[n]),a}),{})}function g(e,t){return Object.keys(Object(r.a)(Object(r.a)({},e),t)).reduce((function(a,n){return a[n]=Object(r.a)(Object(r.a)({},e[n]||{}),t[n]||{}),a}),{})}function f(e,t){if(!t)return e;var a=l.a.formats;return Object(r.a)(Object(r.a)(Object(r.a)({},a),e),{date:g(m(a.date,t),m(e.date||{},t)),time:g(m(a.time,t),m(e.time||{},t))})}function p(e,t,a,n){var o=e.locale,i=e.formats,l=e.messages,m=e.defaultLocale,g=e.defaultFormats,p=e.onError,d=e.timeZone,b=e.defaultRichTextElements;void 0===a&&(a={id:""});var v=a.id,O=a.defaultMessage;Object(s.a)(!!v,"[@formatjs/intl] An `id` must be provided to format a message.");var h=String(v),y=l&&Object.prototype.hasOwnProperty.call(l,h)&&l[h];if(Array.isArray(y)&&1===y.length&&y[0].type===c.a.literal)return y[0].value;if(!n&&y&&"string"===typeof y&&!b)return y.replace(/'\{(.*?)\}'/gi,"{$1}");if(n=Object(r.a)(Object(r.a)({},b),n||{}),i=f(i,d),g=f(g,d),!y){if((!O||o&&o.toLowerCase()!==m.toLowerCase())&&p(new u.e(a,o)),O)try{return t.getMessageFormat(O,m,g).format(n)}catch(j){return p(new u.c('Error formatting default message for: "'+h+'", rendering default message verbatim',o,a,j)),"string"===typeof O?O:h}return h}try{return t.getMessageFormat(y,o,i,{formatters:t}).format(n)}catch(j){p(new u.c('Error formatting message: "'+h+'", using '+(O?"default message":"id")+" as fallback.",o,a,j))}if(O)try{return t.getMessageFormat(O,m,g).format(n)}catch(j){p(new u.c('Error formatting the default message for: "'+h+'", rendering message verbatim',o,a,j))}return"string"===typeof y?y:"string"===typeof O?O:h}var d=a("qiww"),b=["localeMatcher","style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay"];function v(e,t,a){var r=e.locale,n=e.formats,o=e.onError;void 0===a&&(a={});var i=a.format,s=i&&Object(d.e)(n,"number",i,o)||{};return t(r,Object(d.d)(a,b,s))}function O(e,t,a,r){void 0===r&&(r={});try{return v(e,t,r).format(a)}catch(n){e.onError(new u.a("FORMAT_ERROR","Error formatting number.",n))}return String(a)}function h(e,t,a,r){void 0===r&&(r={});try{return v(e,t,r).formatToParts(a)}catch(n){e.onError(new u.a("FORMAT_ERROR","Error formatting number.",n))}return[]}var y=a("EOOJ"),j=["numeric","style"];function N(e,t,a,r,n){void 0===n&&(n={}),r||(r="second"),Intl.RelativeTimeFormat||e.onError(new y.a('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',"MISSING_INTL_API"));try{return function(e,t,a){var r=e.locale,n=e.formats,o=e.onError;void 0===a&&(a={});var i=a.format,s=!!i&&Object(d.e)(n,"relative",i,o)||{};return t(r,Object(d.d)(a,j,s))}(e,t,n).format(a,r)}catch(o){e.onError(new u.c("Error formatting relative time.",o))}return String(a)}var E=["localeMatcher","formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","fractionalSecondDigits","calendar","numberingSystem"];function R(e,t,a,n){var o=e.locale,i=e.formats,s=e.onError,l=e.timeZone;void 0===n&&(n={});var u=n.format,c=Object(r.a)(Object(r.a)({},l&&{timeZone:l}),u&&Object(d.e)(i,t,u,s)),m=Object(d.d)(n,E,c);return"time"!==t||m.hour||m.minute||m.second||(m=Object(r.a)(Object(r.a)({},m),{hour:"numeric",minute:"numeric"})),a(o,m)}function S(e,t){for(var a=[],r=2;r<arguments.length;r++)a[r-2]=arguments[r];var n=a[0],o=a[1],i=void 0===o?{}:o,s="string"===typeof n?new Date(n||0):n;try{return R(e,"date",t,i).format(s)}catch(l){e.onError(new u.a("FORMAT_ERROR","Error formatting date.",l))}return String(s)}function P(e,t){for(var a=[],r=2;r<arguments.length;r++)a[r-2]=arguments[r];var n=a[0],o=a[1],i=void 0===o?{}:o,s="string"===typeof n?new Date(n||0):n;try{return R(e,"time",t,i).format(s)}catch(l){e.onError(new u.a("FORMAT_ERROR","Error formatting time.",l))}return String(s)}function T(e,t){for(var a=[],r=2;r<arguments.length;r++)a[r-2]=arguments[r];var n=a[0],o=a[1],i=a[2],s=void 0===i?{}:i,l=e.timeZone,c=e.locale,m=e.onError,g=Object(d.d)(s,E,l?{timeZone:l}:{});try{return t(c,g).formatRange(n,o)}catch(f){m(new u.a("FORMAT_ERROR","Error formatting date time range.",f))}return String(n)}function C(e,t){for(var a=[],r=2;r<arguments.length;r++)a[r-2]=arguments[r];var n=a[0],o=a[1],i=void 0===o?{}:o,s="string"===typeof n?new Date(n||0):n;try{return R(e,"date",t,i).formatToParts(s)}catch(l){e.onError(new u.a("FORMAT_ERROR","Error formatting date.",l))}return[]}function w(e,t){for(var a=[],r=2;r<arguments.length;r++)a[r-2]=arguments[r];var n=a[0],o=a[1],i=void 0===o?{}:o,s="string"===typeof n?new Date(n||0):n;try{return R(e,"time",t,i).formatToParts(s)}catch(l){e.onError(new u.a("FORMAT_ERROR","Error formatting time.",l))}return[]}var L=["localeMatcher","type"];function x(e,t,a,r){var n=e.locale,o=e.onError;void 0===r&&(r={}),Intl.PluralRules||o(new y.a('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',"MISSING_INTL_API"));var i=Object(d.d)(r,L);try{return t(n,i).select(a)}catch(s){o(new u.c("Error formatting plural.",s))}return"other"}var M=["localeMatcher","type","style"],F=Date.now();function D(e,t,a,r){var n=e.locale,o=e.onError;void 0===r&&(r={}),Intl.ListFormat||o(new y.a('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',"MISSING_INTL_API"));var i=Object(d.d)(r,M);try{var s={},l=a.map((function(e,t){if("object"===typeof e){var a=function(e){return F+"_"+e+"_"+F}(t);return s[a]=e,a}return String(e)}));return Object.keys(s).length?t(n,i).formatToParts(l).reduce((function(e,t){var a=t.value;return s[a]?e.push(s[a]):"string"===typeof e[e.length-1]?e[e.length-1]+=a:e.push(a),e}),[]):t(n,i).format(l)}catch(c){o(new u.a("FORMAT_ERROR","Error formatting list.",c))}return a}var I=["localeMatcher","style","type","fallback"];function J(e,t,a,r){var n=e.locale,o=e.onError;Intl.DisplayNames||o(new y.a('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',"MISSING_INTL_API"));var i=Object(d.d)(r,I);try{return t(n,i).of(a)}catch(s){o(new u.a("FORMAT_ERROR","Error formatting display name.",s))}}var k=a("nChe"),G=a.n(k),_=a("9AS4"),A=G.a||k;function B(e){return{locale:e.locale,timeZone:e.timeZone,formats:e.formats,textComponent:e.textComponent,messages:e.messages,defaultLocale:e.defaultLocale,defaultFormats:e.defaultFormats,onError:e.onError,wrapRichTextChunksInFragment:e.wrapRichTextChunksInFragment,defaultRichTextElements:e.defaultRichTextElements}}function K(e){return e?Object.keys(e).reduce((function(t,a){var r=e[a];return t[a]=Object(_.b)(r)?Object(i.b)(r):r,t}),{}):e}var z=function(e,t,a,r){var o=p(e,t,a,K(r));return Array.isArray(o)?n.Children.toArray(o):o},Z=function(e,t){var a=e.defaultRichTextElements,n=Object(r.c)(e,["defaultRichTextElements"]),o=K(a),s=function(e,t){var a=Object(d.b)(t),n=Object(r.a)(Object(r.a)({},d.a),e),o=n.locale,i=n.defaultLocale,s=n.onError;o?!Intl.NumberFormat.supportedLocalesOf(o).length&&s?s(new u.d('Missing locale data for locale: "'+o+'" in Intl.NumberFormat. Using default locale: "'+i+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):!Intl.DateTimeFormat.supportedLocalesOf(o).length&&s&&s(new u.d('Missing locale data for locale: "'+o+'" in Intl.DateTimeFormat. Using default locale: "'+i+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):(s&&s(new u.b('"locale" was not configured, using "'+i+'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details')),n.locale=n.defaultLocale||"en");var l=e.messages?e.messages[Object.keys(e.messages)[0]]:void 0;return e.defaultRichTextElements&&l&&"string"===typeof l&&console.warn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution'),Object(r.a)(Object(r.a)({},n),{formatters:a,formatNumber:O.bind(null,n,a.getNumberFormat),formatNumberToParts:h.bind(null,n,a.getNumberFormat),formatRelativeTime:N.bind(null,n,a.getRelativeTimeFormat),formatDate:S.bind(null,n,a.getDateTimeFormat),formatDateToParts:C.bind(null,n,a.getDateTimeFormat),formatTime:P.bind(null,n,a.getDateTimeFormat),formatDateTimeRange:T.bind(null,n,a.getDateTimeFormat),formatTimeToParts:w.bind(null,n,a.getDateTimeFormat),formatPlural:x.bind(null,n,a.getPluralRules),formatMessage:p.bind(null,n,a),formatList:D.bind(null,n,a.getListFormat),formatDisplayName:J.bind(null,n,a.getDisplayNames)})}(Object(r.a)(Object(r.a)(Object(r.a)({},i.a),n),{defaultRichTextElements:o}),t);return Object(r.a)(Object(r.a)({},s),{formatMessage:z.bind(null,{locale:s.locale,timeZone:s.timeZone,formats:s.formats,defaultLocale:s.defaultLocale,defaultFormats:s.defaultFormats,messages:s.messages,onError:s.onError,defaultRichTextElements:o},s.formatters)})};!function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.cache=Object(d.c)(),t.state={cache:t.cache,intl:Z(B(t.props),t.cache),prevConfig:B(t.props)},t}Object(r.b)(t,e),t.getDerivedStateFromProps=function(e,t){var a=t.prevConfig,r=t.cache,n=B(e);return A(a,n)?null:{intl:Z(n,r),prevConfig:n}},t.prototype.render=function(){return Object(i.c)(this.state.intl),n.createElement(o.b,{value:this.state.intl},this.props.children)},t.displayName="IntlProvider",t.defaultProps=i.a}(n.PureComponent)},ymlD:function(e){e.exports=JSON.parse('{"0SKBlf":"Go to page {pageNumber}","2xdm3a":"Close","OesMJh":"Current page, page {pageNumber}","nnpz2g":"Pagination navigation"}')},zgVw:function(e){e.exports=JSON.parse('{"np.CloseButton.aria-label":"Close","np.Pagination.aria-label":"Pagination navigation","np.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","np.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')},zzRO:function(e){e.exports=JSON.parse('{"np.CloseButton.aria-label":"Close","np.Pagination.aria-label":"Pagination navigation","np.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","np.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}"}')}}]);