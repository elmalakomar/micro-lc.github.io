"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7375],{5858:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(6687);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(f,r(r({ref:t},p),{},{components:n})):o.createElement(f,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<a;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var o=n(6428),i=n(8920),a=(n(6687),n(5858)),r=["components"],c={title:"Communication",description:"Internal communication between micro-lc building blocks",sidebar_label:"Communication",sidebar_position:30},l=void 0,s={unversionedId:"docs/concepts/communication",id:"docs/concepts/communication",title:"Communication",description:"Internal communication between micro-lc building blocks",source:"@site/docs/docs/concepts/communication.md",sourceDirName:"docs/concepts",slug:"/docs/concepts/communication",permalink:"/documentation/docs/concepts/communication",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/concepts/communication.md",tags:[],version:"current",lastUpdatedBy:"Umberto Toniolo",sidebarPosition:30,frontMatter:{title:"Communication",description:"Internal communication between micro-lc building blocks",sidebar_label:"Communication",sidebar_position:30},sidebar:"docs",previous:{title:"Composition",permalink:"/documentation/docs/concepts/composition"},next:{title:"Guides",permalink:"/documentation/docs/guides/"}},p={},m=[{value:"micro-lc API",id:"micro-lc-api",level:2},{value:"Browser native API",id:"browser-native-api",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the classic, monolithic approach to frontend applications, each page, section, or domain resides in the same\ncontext (the application itself), which makes it easy enough to exchange data and information from one side to the other."),(0,a.kt)("p",null,"This task of cross-communication becomes a bit more troublesome when transitioning to micro-frontend world, since\nthe whole application is divided into multiple, smaller entities running independently with respect to one another."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://sharvishi9118.medium.com/cross-micro-frontend-communication-techniques-a10fedc11c59"},"Multiple techniques"),"\nare available to solve this issue. The approach of ",(0,a.kt)("micro-lc",null)," consists in ",(0,a.kt)("strong",{parentName:"p"},"discouraging global state\npattern in favour of event-driven communication"),". Moreover, contexts can be shared between applications and\ncontent applications by using either declarative tools or forcing state refresh by updating properties (React-like)."),(0,a.kt)("h2",{id:"micro-lc-api"},"micro-lc API"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Be sure to check out the ",(0,a.kt)("a",{parentName:"p",href:"../../api/micro-lc-api"},"detailed overview")," of the API capabilities.")),(0,a.kt)("p",null,"The primary mean of communication ",(0,a.kt)("micro-lc",null)," offers to application domains is an API injected into each\nelement composing the layout and as property of all applications rendered as content."),(0,a.kt)("p",null,"The API then serves as a bridge between the two sides of ",(0,a.kt)("micro-lc",null)," \u2014 layout and content \u2014 and between\ndifferent contents. Just to mention a few example, it is useful for sharing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"style,"),(0,a.kt)("li",{parentName:"ul"},"state,"),(0,a.kt)("li",{parentName:"ul"},"language"),(0,a.kt)("li",{parentName:"ul"},"functional utilities,"),(0,a.kt)("li",{parentName:"ul"},"current configuration,"),(0,a.kt)("li",{parentName:"ul"},"routing facilities.")),(0,a.kt)("p",null,(0,a.kt)("micro-lc",null)," API is extensible, meaning that either layout or content applications can add new state and new\nfunctional utilities. It also provides a reactive interface, acting as a Pub/Sub channel to enable event-driven refreshing\nof components or parts of the application."),(0,a.kt)("p",null,"It encourages using its own routing facilities instead of browser native ones to better handle transition from one\napplication to another whereas it's totally agnostic towards parts of the browser which do not concern routing, such\nas local storage, cookies, and so on."),(0,a.kt)("p",null,"To provide an example, while adding a custom web component to your layout or any composable application, a useful pattern\nto access the API would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=my-awesome-component.ts",title:"my-awesome-component.ts"},"import type { MicrolcApi } from '@micro-lc/orchestrator'\n\nclass MyAwesomeWebComponent extends HTMLElement {\n  // highlight-next-line\n  microlcApi?: MicrolcApi\n  \n  connectedCallback () {\n    console.log('Current micro-lc config: ', this.microlcApi?.getCurrentConfig())\n  }\n}\n\ncustomElements.define('my-awesome-component', MyAwesomeWebComponent)\n")),(0,a.kt)("h2",{id:"browser-native-api"},"Browser native API"),(0,a.kt)("p",null,"While independent from ",(0,a.kt)("micro-lc",null),", it is useful to point out that each component or content application have\naccess to the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document"},"DOM Document")," object, meaning that\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API"},"Web APIs")," are available for use (and ",(0,a.kt)("em",{parentName:"p"},"use is encouraged!"),")."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Before using APIs be sure to check ",(0,a.kt)("a",{parentName:"p",href:"https://caniuse.com/"},"browser compatibility"),".")),(0,a.kt)("p",null,"For example, you may use storage APIs (e.g., browser Locale Storage) to share data between micro-frontends implementing\nan asynchronous, Pub/Sub solution."))}d.isMDXComponent=!0}}]);