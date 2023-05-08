"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7895],{55858:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var i=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,b=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?i.createElement(b,o(o({ref:t},s),{},{components:n})):i.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[m]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>b,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var i=n(557),r=n(61551),a=(n(76687),n(55858)),o=["components"],c={title:"Reactive communication",description:"Reactive state object manipulation",sidebar_label:"Reactive communication",sidebar_position:20},p=void 0,l={unversionedId:"api/micro-lc-api/reactive-communication",id:"api/micro-lc-api/reactive-communication",title:"Reactive communication",description:"Reactive state object manipulation",source:"@site/docs/api/micro-lc-api/reactive-communication.md",sourceDirName:"api/micro-lc-api",slug:"/api/micro-lc-api/reactive-communication",permalink:"/api/micro-lc-api/reactive-communication",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/api/micro-lc-api/reactive-communication.md",tags:[],version:"current",lastUpdatedBy:"Umberto Toniolo",sidebarPosition:20,frontMatter:{title:"Reactive communication",description:"Reactive state object manipulation",sidebar_label:"Reactive communication",sidebar_position:20},sidebar:"api",previous:{title:"Application state",permalink:"/api/micro-lc-api/application-state"},next:{title:"Routing",permalink:"/api/micro-lc-api/routing"}},s={},m=[{value:"<code>set</code>",id:"set",level:2},{value:"<code>subscribe</code>",id:"subscribe",level:2},{value:"<code>next</code>",id:"next",level:2}],u={toc:m},d="wrapper";function b(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)(d,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("micro-lc",null)," holds a state object which can be updated key-be-key at first level only. This means that clients\nof this API are responsible for merging anything that goes beyond the first level."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("micro-lc",null)," uses ",(0,a.kt)("inlineCode",{parentName:"p"},"rxjs@^7")," to dispatch reactive changes. In case of interoperability issues with\nother reactive libraries like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/baconjs/bacon.js"},"Bacon.js"),",\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/callbag/callbag"},"Callbags"),",\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kefirjs/kefir"},"Kefir"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/staltz/xstream"},"xstream"),", or rxjs lower versions like ",(0,a.kt)("inlineCode",{parentName:"p"},"^6"),",\nwe recommend to polyfill ",(0,a.kt)("inlineCode",{parentName:"p"},"Symbol.observable")," as reported ",(0,a.kt)("a",{parentName:"p",href:"https://ncjamieson.com/how-to-use-interop-observables/"},"here"),"."),(0,a.kt)("p",{parentName:"admonition"},"A polyfill, provided by ",(0,a.kt)("micro-lc",null),", is available by including in your ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," the following\nscript tag:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator/dist/polyfills/symbol-observable.js"><\/script>\n'))),(0,a.kt)("p",null,"State object can be updated with ",(0,a.kt)("a",{parentName:"p",href:"#set"},(0,a.kt)("inlineCode",{parentName:"a"},"set"))," method and consumed with ",(0,a.kt)("a",{parentName:"p",href:"#subscribe"},(0,a.kt)("inlineCode",{parentName:"a"},"subscribe"))," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'// Application 1 \u2935\nmicrolcApi.set({ userName: \'John Doe\' })\n\n// Application 2 \u2935\nmicrolcApi.subscribe((state) => console.log(JSON.stringify(state)))\n// output: {"userName":"John Doe"}\n\n// Application 1 \u2935\nmicrolcApi.set({ grants: [\'read\', \'write\'] })\n\n// Application 3 \u2935\nmicrolcApi.subscribe((state) => console.log(JSON.stringify(state)))\n// output: {"userName":"John Doe","grants":["read","write"]}\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you need to extend state with specific state management tools, like Redux, you can either add a specific key using\nthis API, or register your tool as an ",(0,a.kt)("a",{parentName:"p",href:"/api/micro-lc-api/extensions"},"extension"),".")),(0,a.kt)("h2",{id:"set"},(0,a.kt)("inlineCode",{parentName:"h2"},"set")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface MicrolcApi<E extends Record<string, unknown>> {\n  // highlight-next-line\n  readonly set: (event: Partial<E>) => void\n  // ...rest of the API\n}\n")),(0,a.kt)("h2",{id:"subscribe"},(0,a.kt)("inlineCode",{parentName:"h2"},"subscribe")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { Subscription } from 'rxjs'\n\nexport interface MicrolcApi<E extends Record<string, unknown>> {\n  // highlight-next-line\n  readonly subscribe: (next: (value: Partial<E>) => void) => Subscription\n  // ...rest of the API\n}\n")),(0,a.kt)("h2",{id:"next"},(0,a.kt)("inlineCode",{parentName:"h2"},"next")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This API will completely override the state. Use it with caution.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { Subscription } from 'rxjs'\n\nexport interface MicrolcApi<E extends Record<string, unknown>> {\n  // highlight-next-line\n  readonly next: (value: E) => void\n  // ...rest of the API\n}\n")))}b.isMDXComponent=!0}}]);