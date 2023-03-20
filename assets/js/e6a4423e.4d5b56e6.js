"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4966],{55858:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(76687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,h=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var a=n(557),o=n(61551),i=n(76687),r=n(55858),l=["components"],c={title:"\ud83d\uddbc mlc-loading-animation",description:"Beautiful loading animation",sidebar_label:"\ud83d\uddbc mlc-loading-animation",sidebar_position:20},s=void 0,d={unversionedId:"add-ons/components/mlc-loading-animation",id:"add-ons/components/mlc-loading-animation",title:"\ud83d\uddbc mlc-loading-animation",description:"Beautiful loading animation",source:"@site/docs/add-ons/components/mlc-loading-animation.md",sourceDirName:"add-ons/components",slug:"/add-ons/components/mlc-loading-animation",permalink:"/add-ons/components/mlc-loading-animation",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/add-ons/components/mlc-loading-animation.md",tags:[],version:"current",lastUpdatedBy:"Umberto Toniolo",sidebarPosition:20,frontMatter:{title:"\ud83d\uddbc mlc-loading-animation",description:"Beautiful loading animation",sidebar_label:"\ud83d\uddbc mlc-loading-animation",sidebar_position:20},sidebar:"add-ons",previous:{title:"\ud83d\uddbc mlc-layout",permalink:"/add-ons/components/mlc-layout"},next:{title:"\ud83d\uddbc mlc-antd-theme-manager",permalink:"/add-ons/components/mlc-antd-theme-manager"}},m={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"Usage",id:"usage",level:2},{value:"Properties &amp; attributes",id:"properties--attributes",level:2}],u={toc:p},h="wrapper";function g(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Web component to display a loading animation until one of its children has finished loading."),(0,r.kt)(i.Fragment,null),(0,r.kt)("example-frame",{base:"../../frames/components/mlc-loading-animation",height:"550px",showSource:!1,src:"/",title:"Overview"}),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"The web component works by hiding its children with a spinning animation until one of them declares its readiness."),(0,r.kt)("p",null,"Practically speaking, the component injects a method called ",(0,r.kt)("inlineCode",{parentName:"p"},"onload")," into each one of its children while hiding them setting\ntheir display style to ",(0,r.kt)("inlineCode",{parentName:"p"},"none"),". When each child invoked the ",(0,r.kt)("inlineCode",{parentName:"p"},"onload")," method, the component resets the\noriginal display style of the children and hides itself."),(0,r.kt)("p",null,"In most use cases, this component is used as a wrapper of ",(0,r.kt)("micro-lc",null)," itself, which will call ",(0,r.kt)("inlineCode",{parentName:"p"},"onload")," when its update\nlifecycle has ended upon connection and first render. It could also be useful when used as wrapper of ",(0,r.kt)("micro-lc",null),"\nand some ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," tags they must be loaded before to view the page content."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The component can be sourced from\n",(0,r.kt)("a",{parentName:"p",href:"https://cdn.jsdelivr.net/npm/@micro-lc/layout@latest/dist/mlc-loading-animation.js"},"jsDelivr CDN"),"."),(0,r.kt)("p",null,"To use the component in ",(0,r.kt)("micro-lc",null)," wrap the ",(0,r.kt)("inlineCode",{parentName:"p"},"micro-lc")," element tag in the HTML definition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"title=index.html",title:"index.html"},'<!doctype html>\n<html lang="en">\n<head>\n  <script async type="module" src="https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator@latest/dist/micro-lc.production.js"><\/script>\n  <script async type="module" src="https://cdn.jsdelivr.net/npm/@micro-lc/layout@latest/dist/mlc-loading-animation.js"><\/script>\n</head>\n<body>\n  <mlc-loading-animation primary-color="#25b864">\n    <micro-lc config-src="./config.json"></micro-lc>\n  </mlc-loading-animation>\n</body>\n')),(0,r.kt)("h2",{id:"properties--attributes"},"Properties & attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"primaryColor")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"primary-color")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Color of the animation. It can be Hex, 8-digit Hex, RGB, RGBA HSL, HSLA, HSV, HSVA, or CSS color name string.")))))}g.isMDXComponent=!0}}]);