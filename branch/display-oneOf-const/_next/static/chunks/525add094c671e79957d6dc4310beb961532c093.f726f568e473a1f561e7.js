(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"3ZQK":function(e,a,t){"use strict";t.r(a),t.d(a,"defaultLocale",(function(){return U})),t.d(a,"localeOptions",(function(){return h})),t.d(a,"meta",(function(){return v})),t.d(a,"default",(function(){return T}));var n=t("cxan"),o=t("HbGN"),r=t("ERkP"),l=t.n(r),i=t("ZVZ0"),p=t("6sB8"),s=t("Qi1R"),u=t("mqq0"),c=t("RmhF"),d=t("sdb8"),g={en:t("p7AC"),de:t("l6dk"),es:t("I+G5"),fr:t("BAW9"),hu:t("RC/W"),id:t("vQkq"),it:t("PlQb"),ja:t("fiUL"),pl:t("elIb"),pt:t("LdYE"),ro:t("GLGp"),ru:t("cPsM"),tr:t("trZC"),zh:t("MshU")},f=t("AXuR"),m=t("BAoe"),b=Object(m.a)({ariaLabel:{id:"neptune.CloseButton.ariaLabel"}}),U=(l.a.createElement,"en-GB"),h=[U,"en-US","ja-JP","zh-HK","es","fr","ru","de","tr"].map((function(e){return{value:e,label:e}})),v={name:"Provider"},y={defaultLocale:U,meta:v};function T(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},y,t,{components:a,mdxType:"MDXLayout"}),Object(i.a)("p",null,"Provides contextual data such as translations to components. See the ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://transferwise.github.io/neptune-web/branch/i18y/about/Setup#translations-and-the-provider"}),"Provider usage guide")," for more."),Object(i.a)(s.b,{code:'() => {\n  const lang = getLangFromLocale(defaultLocale);\n  const [i18n, setI18n] = React.useState({\n    locale: defaultLocale,\n    messages: supportedLanguages[lang],\n  });\n  const [selectedLocale, setSelectedLocale] = React.useState(localeOptions[0]);\n\n  return (\n    <Provider i18n={i18n}>\n      Translated message: <FormattedMessage {...messages.ariaLabel} />\n      <br /><br />\n      Formatting example: <Money amount={1234.5678} currency="GBP" />\n      <br /><br />\n      <label htmlFor="locales">\n        Locales:\n      </label>\n      <Select\n        id="locales"\n        selected={selectedLocale}\n        onChange={(item) => {\n          const lang = getLangFromLocale(item.value);\n          setI18n({ locale: item.value, messages: supportedLanguages[lang] });\n          setSelectedLocale(item);\n        }}\n        options={localeOptions}\n      />\n    </Provider>\n  );\n}\n',scope:{getLangFromLocale:f.d,Provider:u.a,Select:c.a,Money:d.a,FormattedMessage:p.a,messages:b,supportedLanguages:g,localeOptions:h,defaultLocale:U},mdxType:"LiveEditorBlock"}),Object(i.a)(s.a,{componentName:"Provider",mdxType:"GeneratePropsTable"}))}T.isMDXComponent=!0},"6sB8":function(e,a,t){"use strict";var n=t("D57K"),o=t("ERkP"),r=t("ymT0"),l=t("yGPN"),i=t("nChe"),p=t.n(i).a||i,s=function(e){function a(){return null!==e&&e.apply(this,arguments)||this}return Object(n.b)(a,e),a.prototype.shouldComponentUpdate=function(e){var a=this.props,t=a.values,o=Object(n.c)(a,["values"]),r=e.values,l=Object(n.c)(e,["values"]);return!p(r,t)||!p(o,l)},a.prototype.render=function(){var e=this;return o.createElement(r.a.Consumer,null,(function(a){Object(l.c)(a);var t=a.formatMessage,r=a.textComponent,i=void 0===r?o.Fragment:r,p=e.props,s=p.id,u=p.description,c=p.defaultMessage,d=p.values,g=p.children,f=p.tagName,m=void 0===f?i:f,b=t({id:s,description:u,defaultMessage:c},d);return Array.isArray(b)||(b=[b]),"function"===typeof g?g(b):m?o.createElement.apply(o,Object(n.d)([m,null],b)):b}))},a.displayName="FormattedMessage",a}(o.Component);a.a=s},BAW9:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.MoneyInput.Select.placeholder":"Select an option...","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}","neptune.Upload.csButtonText":"Upload another file?","neptune.Upload.csFailureText":"Upload failed. Please, try again","neptune.Upload.csSuccessText":"Upload complete!","neptune.Upload.csTooLargeMessage":"Please provide a file smaller than 5MB","neptune.Upload.csWrongTypeMessage":"File type not supported. Please try again with a different file","neptune.Upload.psButtonText":"Cancel","neptune.Upload.psProcessingText":"Uploading...","neptune.Upload.usButtonText":"Or select a file","neptune.Upload.usDropMessage":"Drop file to start upload","neptune.Upload.usPlaceholder":"Drag and drop a file less than 5MB"}')},GLGp:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.MoneyInput.Select.placeholder":"Select an option...","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}","neptune.Upload.csButtonText":"Upload another file?","neptune.Upload.csFailureText":"Upload failed. Please, try again","neptune.Upload.csSuccessText":"Upload complete!","neptune.Upload.csTooLargeMessage":"Please provide a file smaller than 5MB","neptune.Upload.csWrongTypeMessage":"File type not supported. Please try again with a different file","neptune.Upload.psButtonText":"Cancel","neptune.Upload.psProcessingText":"Uploading...","neptune.Upload.usButtonText":"Or select a file","neptune.Upload.usDropMessage":"Drop file to start upload","neptune.Upload.usPlaceholder":"Drag and drop a file less than 5MB"}')},"I+G5":function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.MoneyInput.Select.placeholder":"Select an option...","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}","neptune.Upload.csButtonText":"Upload another file?","neptune.Upload.csFailureText":"Upload failed. Please, try again","neptune.Upload.csSuccessText":"Upload complete!","neptune.Upload.csTooLargeMessage":"Please provide a file smaller than 5MB","neptune.Upload.csWrongTypeMessage":"File type not supported. Please try again with a different file","neptune.Upload.psButtonText":"Cancel","neptune.Upload.psProcessingText":"Uploading...","neptune.Upload.usButtonText":"Or select a file","neptune.Upload.usDropMessage":"Drop file to start upload","neptune.Upload.usPlaceholder":"Drag and drop a file less than 5MB"}')},LdYE:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.MoneyInput.Select.placeholder":"Select an option...","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}","neptune.Upload.csButtonText":"Upload another file?","neptune.Upload.csFailureText":"Upload failed. Please, try again","neptune.Upload.csSuccessText":"Upload complete!","neptune.Upload.csTooLargeMessage":"Please provide a file smaller than 5MB","neptune.Upload.csWrongTypeMessage":"File type not supported. Please try again with a different file","neptune.Upload.psButtonText":"Cancel","neptune.Upload.psProcessingText":"Uploading...","neptune.Upload.usButtonText":"Or select a file","neptune.Upload.usDropMessage":"Drop file to start upload","neptune.Upload.usPlaceholder":"Drag and drop a file less than 5MB"}')},MshU:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.MoneyInput.Select.placeholder":"Select an option...","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"\u524d\u5f80\u7b2c{pageNumber} \u9801","neptune.PaginationLink.ariaLabel.inactive":"\u7576\u524d\u9801\u9762\uff0c\u7b2c{pageNumber} \u9801","neptune.Upload.csButtonText":"Upload another file?","neptune.Upload.csFailureText":"Upload failed. Please, try again","neptune.Upload.csSuccessText":"Upload complete!","neptune.Upload.csTooLargeMessage":"Please provide a file smaller than 5MB","neptune.Upload.csWrongTypeMessage":"File type not supported. Please try again with a different file","neptune.Upload.psButtonText":"Cancel","neptune.Upload.psProcessingText":"Uploading...","neptune.Upload.usButtonText":"Or select a file","neptune.Upload.usDropMessage":"Drop file to start upload","neptune.Upload.usPlaceholder":"Drag and drop a file less than 5MB"}')},PlQb:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.MoneyInput.Select.placeholder":"Select an option...","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}","neptune.Upload.csButtonText":"Upload another file?","neptune.Upload.csFailureText":"Upload failed. Please, try again","neptune.Upload.csSuccessText":"Upload complete!","neptune.Upload.csTooLargeMessage":"Please provide a file smaller than 5MB","neptune.Upload.csWrongTypeMessage":"File type not supported. Please try again with a different file","neptune.Upload.psButtonText":"Cancel","neptune.Upload.psProcessingText":"Uploading...","neptune.Upload.usButtonText":"Or select a file","neptune.Upload.usDropMessage":"Drop file to start upload","neptune.Upload.usPlaceholder":"Drag and drop a file less than 5MB"}')},"RC/W":function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.MoneyInput.Select.placeholder":"Select an option...","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}","neptune.Upload.csButtonText":"Upload another file?","neptune.Upload.csFailureText":"Upload failed. Please, try again","neptune.Upload.csSuccessText":"Upload complete!","neptune.Upload.csTooLargeMessage":"Please provide a file smaller than 5MB","neptune.Upload.csWrongTypeMessage":"File type not supported. Please try again with a different file","neptune.Upload.psButtonText":"Cancel","neptune.Upload.psProcessingText":"Uploading...","neptune.Upload.usButtonText":"Or select a file","neptune.Upload.usDropMessage":"Drop file to start upload","neptune.Upload.usPlaceholder":"Drag and drop a file less than 5MB"}')},cPsM:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c","neptune.MoneyInput.Select.placeholder":"Select an option...","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}","neptune.Upload.csButtonText":"Upload another file?","neptune.Upload.csFailureText":"Upload failed. Please, try again","neptune.Upload.csSuccessText":"Upload complete!","neptune.Upload.csTooLargeMessage":"Please provide a file smaller than 5MB","neptune.Upload.csWrongTypeMessage":"File type not supported. Please try again with a different file","neptune.Upload.psButtonText":"Cancel","neptune.Upload.psProcessingText":"Uploading...","neptune.Upload.usButtonText":"Or select a file","neptune.Upload.usDropMessage":"Drop file to start upload","neptune.Upload.usPlaceholder":"Drag and drop a file less than 5MB"}')},elIb:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.MoneyInput.Select.placeholder":"Select an option...","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}","neptune.Upload.csButtonText":"Upload another file?","neptune.Upload.csFailureText":"Upload failed. Please, try again","neptune.Upload.csSuccessText":"Upload complete!","neptune.Upload.csTooLargeMessage":"Please provide a file smaller than 5MB","neptune.Upload.csWrongTypeMessage":"File type not supported. Please try again with a different file","neptune.Upload.psButtonText":"Cancel","neptune.Upload.psProcessingText":"Uploading...","neptune.Upload.usButtonText":"Or select a file","neptune.Upload.usDropMessage":"Drop file to start upload","neptune.Upload.usPlaceholder":"Drag and drop a file less than 5MB"}')},fiUL:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.MoneyInput.Select.placeholder":"Select an option...","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}","neptune.Upload.csButtonText":"Upload another file?","neptune.Upload.csFailureText":"Upload failed. Please, try again","neptune.Upload.csSuccessText":"Upload complete!","neptune.Upload.csTooLargeMessage":"Please provide a file smaller than 5MB","neptune.Upload.csWrongTypeMessage":"File type not supported. Please try again with a different file","neptune.Upload.psButtonText":"Cancel","neptune.Upload.psProcessingText":"Uploading...","neptune.Upload.usButtonText":"Or select a file","neptune.Upload.usDropMessage":"Drop file to start upload","neptune.Upload.usPlaceholder":"Drag and drop a file less than 5MB"}')},l6dk:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.MoneyInput.Select.placeholder":"Select an option...","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}","neptune.Upload.csButtonText":"Upload another file?","neptune.Upload.csFailureText":"Upload failed. Please, try again","neptune.Upload.csSuccessText":"Upload complete!","neptune.Upload.csTooLargeMessage":"Please provide a file smaller than 5MB","neptune.Upload.csWrongTypeMessage":"File type not supported. Please try again with a different file","neptune.Upload.psButtonText":"Cancel","neptune.Upload.psProcessingText":"Uploading...","neptune.Upload.usButtonText":"Or select a file","neptune.Upload.usDropMessage":"Drop file to start upload","neptune.Upload.usPlaceholder":"Drag and drop a file less than 5MB"}')},mqq0:function(e,a,t){"use strict";t("2G9S");var n=t("ERkP"),o=t.n(n),r=t("ueEL"),l=t("rw2m"),i=t("AXuR");function p(e){var a,t=e.i18n,n=e.children,p=t.locale,s=t.messages,u=t.defaultRichTextElements,c=Object(i.b)(p);return null===c?(console.warn("Unsupported locale value was provided: '".concat(p,"', defaulting to '").concat(i.a,"'")),a={locale:i.a,messages:l}):a={locale:c,messages:s},o.a.createElement(r.a,{defaultLocale:i.a,locale:a.locale,messages:a.messages,defaultRichTextElements:u},n)}p.defaultProps={children:void 0},a.a=p},nChe:function(e,a,t){"use strict";e.exports=function(e,a){if(e===a)return!0;if(!e||!a)return!1;var t=Object.keys(e),n=Object.keys(a),o=t.length;if(n.length!==o)return!1;for(var r=0;r<o;r++){var l=t[r];if(e[l]!==a[l]||!Object.prototype.hasOwnProperty.call(a,l))return!1}return!0}},p7AC:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.MoneyInput.Select.placeholder":"Select an option...","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}","neptune.Upload.csButtonText":"Upload another file?","neptune.Upload.csFailureText":"Upload failed. Please, try again","neptune.Upload.csSuccessText":"Upload complete!","neptune.Upload.csTooLargeMessage":"Please provide a file smaller than 5MB","neptune.Upload.csWrongTypeMessage":"File type not supported. Please try again with a different file","neptune.Upload.psButtonText":"Cancel","neptune.Upload.psProcessingText":"Uploading...","neptune.Upload.usButtonText":"Or select a file","neptune.Upload.usDropMessage":"Drop file to start upload","neptune.Upload.usPlaceholder":"Drag and drop a file less than 5MB"}')},rw2m:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.MoneyInput.Select.placeholder":"Select an option...","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}","neptune.Upload.csButtonText":"Upload another file?","neptune.Upload.csFailureText":"Upload failed. Please, try again","neptune.Upload.csSuccessText":"Upload complete!","neptune.Upload.csTooLargeMessage":"Please provide a file smaller than 5MB","neptune.Upload.csWrongTypeMessage":"File type not supported. Please try again with a different file","neptune.Upload.psButtonText":"Cancel","neptune.Upload.psProcessingText":"Uploading...","neptune.Upload.usButtonText":"Or select a file","neptune.Upload.usDropMessage":"Drop file to start upload","neptune.Upload.usPlaceholder":"Drag and drop a file less than 5MB"}')},sdb8:function(e,a,t){"use strict";var n=t("ERkP"),o=t.n(n),r=t("kQwz"),l=t("b0Hy");a.a=function(e){var a=e.amount,t=e.currency,n=Object(r.a)().locale;return o.a.createElement(o.a.Fragment,null,Object(l.c)(a,t,n))}},trZC:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.MoneyInput.Select.placeholder":"Select an option...","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}","neptune.Upload.csButtonText":"Upload another file?","neptune.Upload.csFailureText":"Upload failed. Please, try again","neptune.Upload.csSuccessText":"Upload complete!","neptune.Upload.csTooLargeMessage":"Please provide a file smaller than 5MB","neptune.Upload.csWrongTypeMessage":"File type not supported. Please try again with a different file","neptune.Upload.psButtonText":"Cancel","neptune.Upload.psProcessingText":"Uploading...","neptune.Upload.usButtonText":"Or select a file","neptune.Upload.usDropMessage":"Drop file to start upload","neptune.Upload.usPlaceholder":"Drag and drop a file less than 5MB"}')},ueEL:function(e,a,t){"use strict";var n,o,r=t("D57K"),l=t("ERkP"),i=t("ymT0"),p=t("yGPN"),s=t("mUED"),u=t("mjvE"),c=t("LYaP");function d(e,a){return Object.keys(e).reduce((function(t,n){return t[n]=Object(r.a)({timeZone:a},e[n]),t}),{})}function g(e,a){return Object.keys(Object(r.a)(Object(r.a)({},e),a)).reduce((function(t,n){return t[n]=Object(r.a)(Object(r.a)({},e[n]||{}),a[n]||{}),t}),{})}function f(e,a){if(!a)return e;var t=u.a.formats;return Object(r.a)(Object(r.a)(Object(r.a)({},t),e),{date:g(d(t.date,a),d(e.date||{},a)),time:g(d(t.time,a),d(e.time||{},a))})}function m(e,a,t,o,l){var i=e.locale,p=e.formats,u=e.messages,d=e.defaultLocale,g=e.defaultFormats,m=e.onError,b=e.timeZone,U=e.defaultRichTextElements;void 0===t&&(t={id:""});var h=t.id,v=t.defaultMessage;Object(s.a)(!!h,"[@formatjs/intl] An `id` must be provided to format a message.");var y=String(h),T=u&&Object.prototype.hasOwnProperty.call(u,y)&&u[y];if(Array.isArray(T)&&1===T.length&&T[0].type===n.literal)return T[0].value;if(!o&&T&&"string"===typeof T&&!U)return T.replace(/'\{(.*?)\}'/gi,"{$1}");if(o=Object(r.a)(Object(r.a)({},U),o||{}),p=f(p,b),g=f(g,b),!T){if((!v||i&&i.toLowerCase()!==d.toLowerCase())&&m(new c.e(t,i)),v)try{return a.getMessageFormat(v,d,g,l).format(o)}catch(P){return m(new c.c('Error formatting default message for: "'+y+'", rendering default message verbatim',i,t,P)),"string"===typeof v?v:y}return y}try{return a.getMessageFormat(T,i,p,Object(r.a)({formatters:a},l||{})).format(o)}catch(P){m(new c.c('Error formatting message: "'+y+'", using '+(v?"default message":"id")+" as fallback.",i,t,P))}if(v)try{return a.getMessageFormat(v,d,g,l).format(o)}catch(P){m(new c.c('Error formatting the default message for: "'+y+'", rendering message verbatim',i,t,P))}return"string"===typeof T?T:"string"===typeof v?v:y}!function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"}(n||(n={})),function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"}(o||(o={}));var b=t("qiww"),U=["localeMatcher","style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay"];function h(e,a,t){var n=e.locale,o=e.formats,r=e.onError;void 0===t&&(t={});var l=t.format,i=l&&Object(b.e)(o,"number",l,r)||{};return a(n,Object(b.d)(t,U,i))}function v(e,a,t,n){void 0===n&&(n={});try{return h(e,a,n).format(t)}catch(o){e.onError(new c.a("FORMAT_ERROR","Error formatting number.",o))}return String(t)}function y(e,a,t,n){void 0===n&&(n={});try{return h(e,a,n).formatToParts(t)}catch(o){e.onError(new c.a("FORMAT_ERROR","Error formatting number.",o))}return[]}var T=t("EOOJ"),P=["numeric","style"];function L(e,a,t,n,o){void 0===o&&(o={}),n||(n="second"),Intl.RelativeTimeFormat||e.onError(new T.a('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',"MISSING_INTL_API"));try{return function(e,a,t){var n=e.locale,o=e.formats,r=e.onError;void 0===t&&(t={});var l=t.format,i=!!l&&Object(b.e)(o,"relative",l,r)||{};return a(n,Object(b.d)(t,P,i))}(e,a,o).format(t,n)}catch(r){e.onError(new c.c("Error formatting relative time.",r))}return String(t)}var M=["localeMatcher","formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","fractionalSecondDigits","calendar","numberingSystem"];function x(e,a,t,n){var o=e.locale,l=e.formats,i=e.onError,p=e.timeZone;void 0===n&&(n={});var s=n.format,u=Object(r.a)(Object(r.a)({},p&&{timeZone:p}),s&&Object(b.e)(l,a,s,i)),c=Object(b.d)(n,M,u);return"time"!==a||c.hour||c.minute||c.second||c.timeStyle||c.dateStyle||(c=Object(r.a)(Object(r.a)({},c),{hour:"numeric",minute:"numeric"})),t(o,c)}function O(e,a){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var o=t[0],r=t[1],l=void 0===r?{}:r,i="string"===typeof o?new Date(o||0):o;try{return x(e,"date",a,l).format(i)}catch(p){e.onError(new c.a("FORMAT_ERROR","Error formatting date.",p))}return String(i)}function S(e,a){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var o=t[0],r=t[1],l=void 0===r?{}:r,i="string"===typeof o?new Date(o||0):o;try{return x(e,"time",a,l).format(i)}catch(p){e.onError(new c.a("FORMAT_ERROR","Error formatting time.",p))}return String(i)}function B(e,a){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var o=t[0],r=t[1],l=t[2],i=void 0===l?{}:l,p=e.timeZone,s=e.locale,u=e.onError,d=Object(b.d)(i,M,p?{timeZone:p}:{});try{return a(s,d).formatRange(o,r)}catch(g){u(new c.a("FORMAT_ERROR","Error formatting date time range.",g))}return String(o)}function C(e,a){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var o=t[0],r=t[1],l=void 0===r?{}:r,i="string"===typeof o?new Date(o||0):o;try{return x(e,"date",a,l).formatToParts(i)}catch(p){e.onError(new c.a("FORMAT_ERROR","Error formatting date.",p))}return[]}function j(e,a){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var o=t[0],r=t[1],l=void 0===r?{}:r,i="string"===typeof o?new Date(o||0):o;try{return x(e,"time",a,l).formatToParts(i)}catch(p){e.onError(new c.a("FORMAT_ERROR","Error formatting time.",p))}return[]}var D=["localeMatcher","type"];function F(e,a,t,n){var o=e.locale,r=e.onError;void 0===n&&(n={}),Intl.PluralRules||r(new T.a('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',"MISSING_INTL_API"));var l=Object(b.d)(n,D);try{return a(o,l).select(t)}catch(i){r(new c.c("Error formatting plural.",i))}return"other"}var E=["localeMatcher","type","style"],N=Date.now();function R(e,a,t,n){var o=e.locale,r=e.onError;void 0===n&&(n={}),Intl.ListFormat||r(new T.a('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',"MISSING_INTL_API"));var l=Object(b.d)(n,E);try{var i={},p=t.map((function(e,a){if("object"===typeof e){var t=function(e){return N+"_"+e+"_"+N}(a);return i[t]=e,t}return String(e)}));return Object.keys(i).length?a(o,l).formatToParts(p).reduce((function(e,a){var t=a.value;return i[t]?e.push(i[t]):"string"===typeof e[e.length-1]?e[e.length-1]+=t:e.push(t),e}),[]):a(o,l).format(p)}catch(s){r(new c.a("FORMAT_ERROR","Error formatting list.",s))}return t}var w=["localeMatcher","style","type","fallback"];function k(e,a,t,n){var o=e.locale,r=e.onError;Intl.DisplayNames||r(new T.a('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',"MISSING_INTL_API"));var l=Object(b.d)(n,w);try{return a(o,l).of(t)}catch(i){r(new c.a("FORMAT_ERROR","Error formatting display name.",i))}}function I(e){var a=e?e[Object.keys(e)[0]]:void 0;return"object"===typeof a&&!!a}function G(e,a){var t=Object(b.b)(a),n=Object(r.a)(Object(r.a)({},b.a),e),o=n.locale,l=n.defaultLocale,i=n.onError;return o?!Intl.NumberFormat.supportedLocalesOf(o).length&&i?i(new c.d('Missing locale data for locale: "'+o+'" in Intl.NumberFormat. Using default locale: "'+l+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):!Intl.DateTimeFormat.supportedLocalesOf(o).length&&i&&i(new c.d('Missing locale data for locale: "'+o+'" in Intl.DateTimeFormat. Using default locale: "'+l+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):(i&&i(new c.b('"locale" was not configured, using "'+l+'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details')),n.locale=n.defaultLocale||"en"),function(e){e.defaultRichTextElements&&!I(e.messages||{})&&console.warn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')}(n),Object(r.a)(Object(r.a)({},n),{formatters:t,formatNumber:v.bind(null,n,t.getNumberFormat),formatNumberToParts:y.bind(null,n,t.getNumberFormat),formatRelativeTime:L.bind(null,n,t.getRelativeTimeFormat),formatDate:O.bind(null,n,t.getDateTimeFormat),formatDateToParts:C.bind(null,n,t.getDateTimeFormat),formatTime:S.bind(null,n,t.getDateTimeFormat),formatDateTimeRange:B.bind(null,n,t.getDateTimeFormat),formatTimeToParts:j.bind(null,n,t.getDateTimeFormat),formatPlural:F.bind(null,n,t.getPluralRules),formatMessage:m.bind(null,n,t),formatList:R.bind(null,n,t.getListFormat),formatDisplayName:k.bind(null,n,t.getDisplayNames),__addMessages:function(a){var t=I(n.messages),o=I(a);e.onError&&(t&&!o||!t&&o)&&e.onError(new c.b("Cannot mix AST & non-AST messages for locale "+n.locale)),n.messages=Object(r.a)(Object(r.a)({},n.messages),a)}})}var A=t("nChe"),_=t.n(A),J=t("9AS4"),W=_.a||A;function Z(e){return{locale:e.locale,timeZone:e.timeZone,formats:e.formats,textComponent:e.textComponent,messages:e.messages,defaultLocale:e.defaultLocale,defaultFormats:e.defaultFormats,onError:e.onError,wrapRichTextChunksInFragment:e.wrapRichTextChunksInFragment,defaultRichTextElements:e.defaultRichTextElements}}function q(e){return e?Object.keys(e).reduce((function(a,t){var n=e[t];return a[t]=Object(J.b)(n)?Object(p.b)(n):n,a}),{}):e}var Q=function(e,a,t,n){var o=m(e,a,t,q(n));return Array.isArray(o)?l.Children.toArray(o):o},K=function(e,a){var t=e.defaultRichTextElements,n=Object(r.c)(e,["defaultRichTextElements"]),o=q(t),l=G(Object(r.a)(Object(r.a)(Object(r.a)({},p.a),n),{defaultRichTextElements:o}),a);return Object(r.a)(Object(r.a)({},l),{formatMessage:Q.bind(null,{locale:l.locale,timeZone:l.timeZone,formats:l.formats,defaultLocale:l.defaultLocale,defaultFormats:l.defaultFormats,messages:l.messages,onError:l.onError,defaultRichTextElements:o},l.formatters)})},X=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return a.cache=Object(b.c)(),a.state={cache:a.cache,intl:K(Z(a.props),a.cache),prevConfig:Z(a.props)},a}return Object(r.b)(a,e),a.getDerivedStateFromProps=function(e,a){var t=a.prevConfig,n=a.cache,o=Z(e);return W(t,o)?null:{intl:K(o,n),prevConfig:o}},a.prototype.render=function(){return Object(p.c)(this.state.intl),l.createElement(i.b,{value:this.state.intl},this.props.children)},a.displayName="IntlProvider",a.defaultProps=p.a,a}(l.PureComponent);a.a=X},vQkq:function(e){e.exports=JSON.parse('{"neptune.CloseButton.ariaLabel":"Close","neptune.MoneyInput.Select.placeholder":"Select an option...","neptune.Pagination.ariaLabel":"Pagination navigation","neptune.PaginationLink.ariaLabel.active":"Go to page {pageNumber}","neptune.PaginationLink.ariaLabel.inactive":"Current page, page {pageNumber}","neptune.Upload.csButtonText":"Upload another file?","neptune.Upload.csFailureText":"Upload failed. Please, try again","neptune.Upload.csSuccessText":"Upload complete!","neptune.Upload.csTooLargeMessage":"Please provide a file smaller than 5MB","neptune.Upload.csWrongTypeMessage":"File type not supported. Please try again with a different file","neptune.Upload.psButtonText":"Cancel","neptune.Upload.psProcessingText":"Uploading...","neptune.Upload.usButtonText":"Or select a file","neptune.Upload.usDropMessage":"Drop file to start upload","neptune.Upload.usPlaceholder":"Drag and drop a file less than 5MB"}')}}]);