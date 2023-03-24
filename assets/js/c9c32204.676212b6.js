"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1399],{55858:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(76687);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(r),p=o,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},66448:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(76687),o=r(64923),i=r(48145),c=r(29139),a=r(67387),l=r(96902);const s={cardContainer:"cardContainer__MZX",cardTitle:"cardTitle_c_ZQ",cardDescription:"cardDescription_CYPu"};function u(e){var t=e.href,r=e.children;return n.createElement(c.Z,{href:t,className:(0,o.Z)("card padding--lg",s.cardContainer)},r)}function d(e){var t=e.href,r=e.icon,i=e.title,c=e.description;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",s.cardTitle),title:i},r," ",i),c&&n.createElement("p",{className:(0,o.Z)("text--truncate",s.cardDescription),title:c},c))}function m(e){var t,r=e.item,o=(0,i.Wl)(r);return o?n.createElement(d,{href:o,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function p(e){var t,r,o=e.item,c=(0,a.Z)(o.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=o.docId)?t:void 0);return n.createElement(d,{href:o.href,icon:c,title:o.label,description:null!=(r=o.description)?r:null==l?void 0:l.description})}function f(e){var t=e.item;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.className,r=(0,i.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){var t=e.items,r=e.className;if(!t)return n.createElement(y,e);var c=(0,i.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},c.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e}))})))}},96514:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var n=r(557),o=r(61551),i=(r(76687),r(55858)),c=r(66448),a=["components"],l={title:"Guides",description:"Curated collection of guides to get you started with micro-lc"},s=void 0,u={unversionedId:"docs/guides/index",id:"docs/guides/index",title:"Guides",description:"Curated collection of guides to get you started with micro-lc",source:"@site/docs/docs/guides/index.md",sourceDirName:"docs/guides",slug:"/docs/guides/",permalink:"/docs/guides/",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/guides/index.md",tags:[],version:"current",lastUpdatedBy:"Umberto Toniolo",frontMatter:{title:"Guides",description:"Curated collection of guides to get you started with micro-lc"},sidebar:"docs",previous:{title:"Communication",permalink:"/docs/concepts/communication"},next:{title:"Layout",permalink:"/docs/guides/layout"}},d={},m=[],p={toc:m},f="wrapper";function y(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Curated collection of guides to get you started with ",(0,i.kt)("micro-lc",null),"!"),(0,i.kt)(c.Z,{mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);