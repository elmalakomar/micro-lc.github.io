"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2566],{5858:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(6687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var r=n(6428),a=n(8920),o=(n(6687),n(5858)),i=["components"],c={id:"backend",title:"Back-end",sidebar_label:"Back-end"},l=void 0,s={unversionedId:"docs/backend",id:"version-1.0.0/docs/backend",title:"Back-end",description:"The be-config exposes the endpoints used to configure the fe-container:",source:"@site/versioned_docs/version-1.0.0/docs/backend.md",sourceDirName:"docs",slug:"/docs/backend",permalink:"/documentation/1.0.0/docs/backend",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/versioned_docs/version-1.0.0/docs/backend.md",tags:[],version:"1.0.0",lastUpdatedBy:"Umberto Toniolo",frontMatter:{id:"backend",title:"Back-end",sidebar_label:"Back-end"},sidebar:"docs",previous:{title:"Analytics",permalink:"/documentation/1.0.0/docs/analytics"},next:{title:"Base tag configuration",permalink:"/documentation/1.0.0/docs/base_tag_configuration"}},p={},d=[{value:"Configurations loading",id:"configurations-loading",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"be-config")," exposes the endpoints used to configure the ",(0,o.kt)("strong",{parentName:"p"},"fe-container"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"/authentication")," endpoint which receives ",(0,o.kt)("inlineCode",{parentName:"li"},"GET")," requests and responds with the ",(0,o.kt)("strong",{parentName:"li"},"user configuration")," in JSON format;"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"/configuration")," endpoint which receives ",(0,o.kt)("inlineCode",{parentName:"li"},"GET")," requests and responds with the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"micro-lc")," configuration")," in JSON format;"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"/configuration/:configurationName")," endpoint, for which we suggest to read the ",(0,o.kt)("a",{parentName:"li",href:"/documentation/1.0.0/docs/general_configuration"},"dedicated section"),".")),(0,o.kt)("p",null,"Both are written using ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Fastify"),", with the support of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mia-platform/custom-plugin-lib"},"Mia service Node.js library"),"."),(0,o.kt)("h2",{id:"configurations-loading"},"Configurations loading"),(0,o.kt)("p",null,"The configuration returned by each endpoint is read from a JSON file that ",(0,o.kt)("strong",{parentName:"p"},"must be accessible")," from the ",(0,o.kt)("strong",{parentName:"p"},"be-config")," instance."),(0,o.kt)("p",null,"The path where each JSON is stored can be configured using the following environment variables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"AUTHENTICATION_CONFIGURATION_PATH")),", for ",(0,o.kt)("a",{parentName:"li",href:"/documentation/1.0.0/docs/authentication#example"},"authentication"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"MICROLC_CONFIGURATION_PATH")),", for ",(0,o.kt)("a",{parentName:"li",href:"/documentation/1.0.0/docs/core_configuration#example"},"core"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"be-config")," is available as ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/miaplatform/microlc-config-manager"},"Docker image"),":\nusing ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run")," the JSON files can be mounted as ",(0,o.kt)("inlineCode",{parentName:"p"},"volumes"),". On Kubernetes the JSON files can be inserted in a ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigMap"),".")))}m.isMDXComponent=!0}}]);