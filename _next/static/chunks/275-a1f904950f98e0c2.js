(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[275],{2962:function(e,t,n){"use strict";n.d(t,{PB:function(){return c}});var r=n(9008),o=n.n(r),i=n(7294);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var s={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0,disableGooglebot:!1},u=function(e,t,n){void 0===t&&(t=[]);var r=void 0===n?{}:n,o=r.defaultWidth,a=r.defaultHeight;return t.reduce((function(t,n,r){return t.push(i.createElement("meta",{key:"og:"+e+":0"+r,property:"og:"+e,content:n.url})),n.alt&&t.push(i.createElement("meta",{key:"og:"+e+":alt0"+r,property:"og:"+e+":alt",content:n.alt})),n.secureUrl&&t.push(i.createElement("meta",{key:"og:"+e+":secure_url0"+r,property:"og:"+e+":secure_url",content:n.secureUrl.toString()})),n.type&&t.push(i.createElement("meta",{key:"og:"+e+":type0"+r,property:"og:"+e+":type",content:n.type.toString()})),n.width?t.push(i.createElement("meta",{key:"og:"+e+":width0"+r,property:"og:"+e+":width",content:n.width.toString()})):o&&t.push(i.createElement("meta",{key:"og:"+e+":width0"+r,property:"og:"+e+":width",content:o.toString()})),n.height?t.push(i.createElement("meta",{key:"og:"+e+":height"+r,property:"og:"+e+":height",content:n.height.toString()})):a&&t.push(i.createElement("meta",{key:"og:"+e+":height"+r,property:"og:"+e+":height",content:a.toString()})),t}),[])},p=function(e){var t,n,r,o=[];e.titleTemplate&&(s.templateTitle=e.titleTemplate);var l="";e.title?(l=e.title,s.templateTitle&&(l=s.templateTitle.replace(/%s/g,(function(){return l})))):e.defaultTitle&&(l=e.defaultTitle),l&&o.push(i.createElement("title",{key:"title"},l));var p,c,d=e.noindex||s.noindex||e.dangerouslySetAllPagesToNoIndex,f=e.nofollow||s.nofollow||e.dangerouslySetAllPagesToNoFollow,h=e.disableGooglebot||s.disableGooglebot||e.dangerouslyDisableGooglebot,m="";if(e.robotsProps){var y=e.robotsProps,v=y.nosnippet,g=y.maxSnippet,_=y.maxImagePreview,b=y.maxVideoPreview,k=y.noarchive,S=y.noimageindex,w=y.notranslate,G=y.unavailableAfter;m=(v?",nosnippet":"")+(g?",max-snippet:"+g:"")+(_?",max-image-preview:"+_:"")+(k?",noarchive":"")+(G?",unavailable_after:"+G:"")+(S?",noimageindex":"")+(b?",max-video-preview:"+b:"")+(w?",notranslate":"")}(e.dangerouslyDisableGooglebot&&(s.disableGooglebot=!0),d||f?(e.dangerouslySetAllPagesToNoIndex&&(s.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(s.nofollow=!0),o.push(i.createElement("meta",{key:"robots",name:"robots",content:(d?"noindex":"index")+","+(f?"nofollow":"follow")+m})),h||o.push(i.createElement("meta",{key:"googlebot",name:"googlebot",content:(d?"noindex":"index")+","+(f?"nofollow":"follow")+m}))):(o.push(i.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+m})),h||o.push(i.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"+m}))),e.description&&o.push(i.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&o.push(i.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){o.push(i.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&o.push(i.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&o.push(i.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&o.push(i.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&o.push(i.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),null!=(t=e.openGraph)&&t.title||e.title)&&o.push(i.createElement("meta",{key:"og:title",property:"og:title",content:(null==(p=e.openGraph)?void 0:p.title)||l}));(null!=(n=e.openGraph)&&n.description||e.description)&&o.push(i.createElement("meta",{key:"og:description",property:"og:description",content:(null==(c=e.openGraph)?void 0:c.description)||e.description}));if(e.openGraph){if((e.openGraph.url||e.canonical)&&o.push(i.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var E=e.openGraph.type.toLowerCase();o.push(i.createElement("meta",{key:"og:type",property:"og:type",content:E})),"profile"===E&&e.openGraph.profile?(e.openGraph.profile.firstName&&o.push(i.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&o.push(i.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&o.push(i.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&o.push(i.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===E&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){o.push(i.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&o.push(i.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&o.push(i.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){o.push(i.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===E&&e.openGraph.article?(e.openGraph.article.publishedTime&&o.push(i.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&o.push(i.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&o.push(i.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){o.push(i.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&o.push(i.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){o.push(i.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==E&&"video.episode"!==E&&"video.tv_show"!==E&&"video.other"!==E||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&o.push(i.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&o.push(i.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){o.push(i.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){o.push(i.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&o.push(i.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&o.push(i.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){o.push(i.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&o.push(i.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(s.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(s.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&o.push.apply(o,u("image",e.openGraph.images,{defaultWidth:s.defaultOpenGraphImageWidth,defaultHeight:s.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(s.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(s.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&o.push.apply(o,u("video",e.openGraph.videos,{defaultWidth:s.defaultOpenGraphVideoWidth,defaultHeight:s.defaultOpenGraphVideoHeight})),e.openGraph.locale&&o.push(i.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&o.push(i.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&o.push(i.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,n,r;o.push(i.createElement("meta",a({key:"meta:"+(null!=(t=null!=(n=null!=(r=e.keyOverride)?r:e.name)?n:e.property)?t:e.httpEquiv)},e)))})),null!=(r=e.additionalLinkTags)&&r.length&&e.additionalLinkTags.forEach((function(e){var t;o.push(i.createElement("link",a({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),o},c=(i.Component,function(e){function t(){return e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.noindex,r=void 0!==n&&n,a=e.nofollow,l=e.robotsProps,s=e.description,u=e.canonical,c=e.openGraph,d=e.facebook,f=e.twitter,h=e.additionalMetaTags,m=e.titleTemplate,y=e.mobileAlternate,v=e.languageAlternates,g=e.additionalLinkTags,_=e.disableGooglebot;return i.createElement(o(),null,p({title:t,noindex:r,nofollow:a,robotsProps:l,description:s,canonical:u,facebook:d,openGraph:c,additionalMetaTags:h,twitter:f,titleTemplate:m,mobileAlternate:y,languageAlternates:v,additionalLinkTags:g,disableGooglebot:_}))},t}(i.Component))},4019:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7942:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,i=n(7273).Z,a=o(n(7294)),l=n(4957),s=n(7995),u=n(647),p=n(1992),c=n(639),d=n(4019),f=n(227),h="undefined"!==typeof a.default.useTransition,m={};function y(e,t,n,r){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;m[t+"%"+n+(o?"%"+o:"")]=!0}}var v=a.default.forwardRef((function(e,t){var n,o=e.href,v=e.as,g=e.children,_=e.prefetch,b=e.passHref,k=e.replace,S=e.shallow,w=e.scroll,G=e.locale,E=e.onClick,x=e.onMouseEnter,T=e.onTouchStart,C=e.legacyBehavior,O=void 0===C?!0!==Boolean(!1):C,R=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,!O||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var j=!1!==_,A=h?a.default.useTransition():[],M=r(A,2)[1],I=a.default.useContext(u.RouterContext),F=a.default.useContext(p.AppRouterContext);F&&(I=F);var L,P=a.default.useMemo((function(){var e=l.resolveHref(I,o,!0),t=r(e,2),n=t[0],i=t[1];return{href:n,as:v?l.resolveHref(I,v):i||n}}),[I,o,v]),z=P.href,H=P.as,N=a.default.useRef(z),U=a.default.useRef(H);O&&(L=a.default.Children.only(n));var W=O?L&&"object"===typeof L&&L.ref:t,V=c.useIntersection({rootMargin:"200px"}),D=r(V,3),B=D[0],Z=D[1],q=D[2],K=a.default.useCallback((function(e){U.current===H&&N.current===z||(q(),U.current=H,N.current=z),B(e),W&&("function"===typeof W?W(e):"object"===typeof W&&(W.current=e))}),[H,W,z,q,B]);a.default.useEffect((function(){var e=Z&&j&&l.isLocalURL(z),t="undefined"!==typeof G?G:I&&I.locale,n=m[z+"%"+H+(t?"%"+t:"")];e&&!n&&y(I,z,H,{locale:t})}),[H,z,Z,G,j,I]);var $={ref:K,onClick:function(e){O||"function"!==typeof E||E(e),O&&L.props&&"function"===typeof L.props.onClick&&L.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a,s,u,p){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var c=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:a}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!p})};u?u(c):c()}}(e,I,z,H,k,S,w,G,F?M:void 0,j)},onMouseEnter:function(e){O||"function"!==typeof x||x(e),O&&L.props&&"function"===typeof L.props.onMouseEnter&&L.props.onMouseEnter(e),!j&&F||l.isLocalURL(z)&&y(I,z,H,{priority:!0})},onTouchStart:function(e){O||"function"!==typeof T||T(e),O&&L.props&&"function"===typeof L.props.onTouchStart&&L.props.onTouchStart(e),!j&&F||l.isLocalURL(z)&&y(I,z,H,{priority:!0})}};if(!O||b||"a"===L.type&&!("href"in L.props)){var Q="undefined"!==typeof G?G:I&&I.locale,J=I&&I.isLocaleDomain&&d.getDomainLocale(H,Q,I.locales,I.domainLocales);$.href=J||f.addBasePath(s.addLocale(H,Q,I&&I.defaultLocale))}return O?a.default.cloneElement(L,$):a.default.createElement("a",Object.assign({},R,$),n)}));t.default=v,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},639:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,u=e.disabled||!a,p=o.useState(!1),c=r(p,2),d=c[0],f=c[1],h=o.useState(null),m=r(h,2),y=m[0],v=m[1];o.useEffect((function(){if(a){if(u||d)return;if(y&&y.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:i,elements:o},s.push(n),l.set(n,t),t}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),l.delete(o);var t=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&s.splice(t,1)}}}(y,(function(e){return e&&f(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!d){var r=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(r)}}}),[y,u,n,t,d]);var g=o.useCallback((function(){f(!1)}),[]);return[v,d,g]};var o=n(7294),i=n(6286),a="function"===typeof IntersectionObserver,l=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8e3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext({});t.AmpStateContext=r},9470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},1992:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var i=r.default.createContext(null);t.LayoutRouterContext=i;var a=r.default.createContext(null);t.GlobalLayoutRouterContext=a},2717:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=p,t.default=void 0;var r=n(6495).Z,o=n(2648).Z,i=(0,n(1598).Z)(n(7294)),a=o(n(1585)),l=n(8e3),s=n(5850),u=n(9470);n(9475);function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){var n=t.inAmpMode;return e.reduce(c,[]).reverse().concat(p(n).reverse()).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var l=o.key.slice(o.key.indexOf("$")+1);e.has(l)?i=!1:e.add(l)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var s=0,u=d.length;s<u;s++){var p=d[s];if(o.props.hasOwnProperty(p))if("charSet"===p)n.has(p)?i=!1:n.add(p);else{var c=o.props[p],f=r[p]||new Set;"name"===p&&a||!f.has(c)?(f.add(c),r[p]=f):i=!1}}}return i}}()).reverse().map((function(e,t){var o=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var a=r({},e.props||{});return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,i.default.cloneElement(e,a)}return i.default.cloneElement(e,{key:o})}))}var h=function(e){var t=e.children,n=i.useContext(l.AmpStateContext),r=i.useContext(s.HeadManagerContext);return i.default.createElement(a.default,{reduceComponentsToState:f,headManager:r,inAmpMode:u.isInAmpMode(n)},t)};t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.headManager,n=e.reduceComponentsToState;function l(){if(t&&t.mountedInstances){var o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}if(o){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),l()}return i((function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}})),i((function(){return t&&(t._pendingUpdate=l),function(){t&&(t._pendingUpdate=l)}})),a((function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}})),null};var r=(0,n(1598).Z)(n(7294));var o=!1,i=o?function(){}:r.useLayoutEffect,a=o?function(){}:r.useEffect},3454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"===typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},7663:function(e){!function(){var t={229:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var l,s=[],u=!1,p=-1;function c(){u&&l&&(u=!1,l.length?s=l.concat(s):p=-1,s.length&&d())}function d(){if(!u){var e=a(c);u=!0;for(var t=s.length;t;){for(l=s,s=[];++p<t;)l&&l[p].run();p=-1,t=s.length}l=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new f(e,t)),1!==s.length||u||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},a=!0;try{t[e](i,i.exports,r),a=!1}finally{a&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},9008:function(e,t,n){e.exports=n(2717)},1664:function(e,t,n){e.exports=n(7942)},1163:function(e,t,n){e.exports=n(9898)},4207:function(e,t,n){var r=n(3454),o=n(7294);function i(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var a=i(o);function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s="undefined"!==typeof r&&r.env&&!0,u=function(e){return"[object String]"===Object.prototype.toString.call(e)},p=function(){function e(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,o=t.optimizeForSpeed,i=void 0===o?s:o;c(u(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",c("boolean"===typeof i,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=i,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var a="undefined"!==typeof window&&document.querySelector('meta[property="csp-nonce"]');this._nonce=a?a.getAttribute("content"):null}var t,n,r,o=e.prototype;return o.setOptimizeForSpeed=function(e){c("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},o.isOptimizeForSpeed=function(){return this._optimizeForSpeed},o.inject=function(){var e=this;if(c(!this._injected,"sheet already injected"),this._injected=!0,"undefined"!==typeof window&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(s||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},o.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},o.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},o.insertRule=function(e,t){if(c(u(e),"`insertRule` accepts only strings"),"undefined"===typeof window)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(o){return s||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},o.replaceRule=function(e,t){if(this._optimizeForSpeed||"undefined"===typeof window){var n="undefined"!==typeof window?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){s||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];c(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},o.deleteRule=function(e){if("undefined"!==typeof window)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];c(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},o.flush=function(){this._injected=!1,this._rulesCount=0,"undefined"!==typeof window?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},o.cssRules=function(){var e=this;return"undefined"===typeof window?this._serverSheet.cssRules:this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[])},o.makeStyleTag=function(e,t,n){t&&c(u(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r},t=e,(n=[{key:"length",get:function(){return this._rulesCount}}])&&l(t.prototype,n),r&&l(t,r),e}();function c(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}var d=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},f={};function h(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;return f[r]||(f[r]="jsx-"+d(e+"-"+n)),f[r]}function m(e,t){"undefined"===typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var n=e+t;return f[n]||(f[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),f[n]}var y=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,o=t.optimizeForSpeed,i=void 0!==o&&o;this._sheet=r||new p({name:"styled-jsx",optimizeForSpeed:i}),this._sheet.inject(),r&&"boolean"===typeof i&&(this._sheet.setOptimizeForSpeed(i),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),"undefined"===typeof window||this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=i,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.styles=function(e){return function(e,t){return void 0===t&&(t={}),e.map((function(e){var n=e[0],r=e[1];return a.default.createElement("style",{id:"__"+n,key:"__"+n,nonce:t.nonce?t.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})}))}(this.cssRules(),e)},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var o=h(r,n);return{styleId:o,rules:Array.isArray(t)?t.map((function(e){return m(o,e)})):[m(o,t)]}}return{styleId:h(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();var v=o.createContext(null);function g(){return new y}function _(){return o.useContext(v)}var b=a.default.useInsertionEffect||a.default.useLayoutEffect,k="undefined"!==typeof window?g():void 0;function S(e){var t=k||_();return t?"undefined"===typeof window?(t.add(e),null):(b((function(){return t.add(e),function(){t.remove(e)}}),[e.id,String(e.dynamic)]),null):null}S.dynamic=function(e){return e.map((function(e){return h(e[0],e[1])})).join(" ")},t.style=S},5988:function(e,t,n){e.exports=n(4207).style}}]);