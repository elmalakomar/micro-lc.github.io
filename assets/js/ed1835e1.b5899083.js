"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3796],{55858:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(76687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var r=n(1943),o=n(21576),a=(n(76687),n(55858)),i=["components"],p={title:"Routing",description:"Routing facilities",sidebar_label:"Routing",sidebar_position:30},l=void 0,s={unversionedId:"api/micro-lc-api/routing",id:"api/micro-lc-api/routing",title:"Routing",description:"Routing facilities",source:"@site/docs/api/micro-lc-api/routing.md",sourceDirName:"api/micro-lc-api",slug:"/api/micro-lc-api/routing",permalink:"/api/micro-lc-api/routing",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/api/micro-lc-api/routing.md",tags:[],version:"current",lastUpdatedBy:"Umberto Toniolo",sidebarPosition:30,frontMatter:{title:"Routing",description:"Routing facilities",sidebar_label:"Routing",sidebar_position:30},sidebar:"api",previous:{title:"Reactive communication",permalink:"/api/micro-lc-api/reactive-communication"},next:{title:"Extensions",permalink:"/api/micro-lc-api/extensions"}},c={},d=[{value:"<code>goTo</code>",id:"goto",level:2},{value:"<code>goToApplication</code>",id:"gotoapplication",level:2},{value:"<code>goToErrorPage</code>",id:"gotoerrorpage",level:2},{value:"<code>open</code>",id:"open",level:2},{value:"<code>pushState</code>",id:"pushstate",level:2},{value:"<code>replaceState</code>",id:"replacestate",level:2}],u={toc:d},m="wrapper";function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("micro-lc",null)," API offers a set of facilities for routing between sub-applications. Some methods are proxies of\nthe document window, offered to centralize the routing experience, while other are based on internal logic."),(0,a.kt)("h2",{id:"goto"},(0,a.kt)("inlineCode",{parentName:"h2"},"goTo")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface MicrolcApi {\n  router: {\n    // highlight-next-line\n    goTo: (url: string | URL | undefined) => void\n    // ...rest of the API\n  }\n  // ...rest of the API\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"goTo")," can be used to route the application to a specific URL. The behaviour of the method changes based on the\nrelation between the curren URL and the given URL."),(0,a.kt)("p",null,"If the new URL has a ",(0,a.kt)("strong",{parentName:"p"},"different ",(0,a.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/API/URL/origin"},"origin"))," than the current\nURL, ",(0,a.kt)("inlineCode",{parentName:"p"},"goTo")," behaves as a ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/open"},(0,a.kt)("inlineCode",{parentName:"a"},"window.open"))," with ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," ",(0,a.kt)("inlineCode",{parentName:"p"},"_self"),"."),(0,a.kt)("p",null,"If the new URL has ",(0,a.kt)("strong",{parentName:"p"},"same origin and same ",(0,a.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname"},"pathname")),"\nas the current URL, ",(0,a.kt)("inlineCode",{parentName:"p"},"goTo")," behaves as a ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState"},(0,a.kt)("inlineCode",{parentName:"a"},"history.replaceState")),"\n(useful, for example, if you just need to change query parameters)."),(0,a.kt)("p",null,"Finally, if the new URL has ",(0,a.kt)("strong",{parentName:"p"},"same origin and different pathname")," than the current URL, ",(0,a.kt)("inlineCode",{parentName:"p"},"goTo")," behaves as a\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/History/pushState"},(0,a.kt)("inlineCode",{parentName:"a"},"history.pushState")),"."),(0,a.kt)("h2",{id:"gotoapplication"},(0,a.kt)("inlineCode",{parentName:"h2"},"goToApplication")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface MicrolcApi {\n  router: {\n    // highlight-next-line\n    goToApplication<S = unknown>(id: string, data?: S): Promise<void>\n    // ...rest of the API\n  }\n  // ...rest of the API\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"goToApplication")," can be used to trigger a routing to a given sub-application (it behaves as\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/History/pushState"},(0,a.kt)("inlineCode",{parentName:"a"},"history.pushState")),"). Target application is defined\nby ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," argument, while ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," corresponds to the first argument of ",(0,a.kt)("inlineCode",{parentName:"p"},"history.pushState"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If provided ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," does not match any registered application, ",(0,a.kt)("inlineCode",{parentName:"p"},"goToApplication")," will route to 404\n",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/applications/error-pages"},"error page"),". ")),(0,a.kt)("h2",{id:"gotoerrorpage"},(0,a.kt)("inlineCode",{parentName:"h2"},"goToErrorPage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface MicrolcApi {\n  router: {\n    // highlight-next-line\n    goToErrorPage(statusCode?: number, reason?: string): void\n    // ...rest of the API\n  }\n  // ...rest of the API\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"goToErrorPage")," can be used to programmatically route to an ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/applications/error-pages"},"error page"),".\nArgument ",(0,a.kt)("inlineCode",{parentName:"p"},"statusCode")," is the error number (defaults to 404), and ",(0,a.kt)("inlineCode",{parentName:"p"},"reason")," is the cause of the error."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If provided ",(0,a.kt)("inlineCode",{parentName:"p"},"statusCode")," does not match any registered error page, ",(0,a.kt)("inlineCode",{parentName:"p"},"goToErrorPage")," will throw an error.")),(0,a.kt)("h2",{id:"open"},(0,a.kt)("inlineCode",{parentName:"h2"},"open")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface MicrolcApi {\n  router: {\n    // highlight-next-line\n    open: (url?: string | URL, target?: string, features?: string) => Window | null\n    // ...rest of the API\n  }\n  // ...rest of the API\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"open")," mirrors the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/open"},"browser native API"),"."),(0,a.kt)("h2",{id:"pushstate"},(0,a.kt)("inlineCode",{parentName:"h2"},"pushState")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface MicrolcApi {\n  router: {\n    // highlight-next-line\n    pushState: (data: any, unused: string, url?: string | URL | null) => void\n    // ...rest of the API\n  }\n  // ...rest of the API\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pushState")," mirrors the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/History/pushState"},"browser native API"),"."),(0,a.kt)("h2",{id:"replacestate"},(0,a.kt)("inlineCode",{parentName:"h2"},"replaceState")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface MicrolcApi {\n  router: {\n    // highlight-next-line\n    replaceState: (data: any, unused: string, url?: string | URL | null) => void\n    // ...rest of the API\n  }\n  // ...rest of the API\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"replaceState")," mirrors the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState"},"browser native API"),"."))}g.isMDXComponent=!0}}]);