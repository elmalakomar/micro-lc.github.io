"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8524],{5858:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var i=t(6687);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),u=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=u(e.components);return i.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return t?i.createElement(g,r(r({ref:n},s),{},{components:t})):i.createElement(g,r({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=t[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7830:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var i=t(6428),a=t(8920),o=(t(6687),t(5858)),r=["components"],l={id:"plugin_configuration",title:"Plugin configuration",sidebar_label:"Plugin configuration"},p=void 0,u={unversionedId:"docs/plugin_configuration",id:"version-1.0.0/docs/plugin_configuration",title:"Plugin configuration",description:"This section will explain the different kind of integration modes, and how to make them work.",source:"@site/versioned_docs/version-1.0.0/docs/plugin_configuration.md",sourceDirName:"docs",slug:"/docs/plugin_configuration",permalink:"/documentation/1.0.0/docs/plugin_configuration",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/versioned_docs/version-1.0.0/docs/plugin_configuration.md",tags:[],version:"1.0.0",lastUpdatedBy:"Umberto Toniolo",frontMatter:{id:"plugin_configuration",title:"Plugin configuration",sidebar_label:"Plugin configuration"},sidebar:"docs",previous:{title:"General configuration",permalink:"/documentation/1.0.0/docs/general_configuration"},next:{title:"Core plugins",permalink:"/documentation/1.0.0/docs/core_plugins"}},s={},c=[{value:"href plugin",id:"href-plugin",level:2},{value:"Iframe plugin",id:"iframe-plugin",level:2},{value:"Qiankun plugin",id:"qiankun-plugin",level:2},{value:"Plugin communication",id:"plugin-communication",level:3}],m={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section will explain the different kind of integration modes, and how to make them work."),(0,o.kt)("p",null,"If you don't know where to place them, we suggest reading ",(0,o.kt)("a",{parentName:"p",href:"/documentation/1.0.0/docs/core_configuration"},"Core configuration")," first."),(0,o.kt)("h2",{id:"href-plugin"},"href plugin"),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"href")," plugin doesn't require any kind of adjustment to work with ",(0,o.kt)("inlineCode",{parentName:"p"},"micro-lc"),"."),(0,o.kt)("p",null,"This is the simplest plugin that ",(0,o.kt)("inlineCode",{parentName:"p"},"micro-lc")," supports. It allows you to redirect the user to another page,\nusing the same window or a different one, thanks to the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/1.0.0/docs/core_configuration#samewindow"},"sameWindow")," property."),(0,o.kt)("h2",{id:"iframe-plugin"},"Iframe plugin"),(0,o.kt)("p",null,"To work properly, ",(0,o.kt)("inlineCode",{parentName:"p"},"iframe")," needs the\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options"},(0,o.kt)("inlineCode",{parentName:"a"},"X-Frame-Options"))," header:\nthis must be configured on the web server in which the frontend application is exposed."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"For security reasons, we suggest configuring ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Frame-Options")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"ALLOW-FROM"),", instead of using a wildcard.")),(0,o.kt)("p",null,"This kind of plugin allows you to include a website ",(0,o.kt)("strong",{parentName:"p"},"without changing its implementation"),".\nHowever, there are also has some limitations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"an ",(0,o.kt)("inlineCode",{parentName:"li"},"iframe")," ",(0,o.kt)("strong",{parentName:"li"},"can't")," access the ",(0,o.kt)("inlineCode",{parentName:"li"},"css variables")," provided by ",(0,o.kt)("inlineCode",{parentName:"li"},"micro-lc"),";"),(0,o.kt)("li",{parentName:"ul"},"an ",(0,o.kt)("inlineCode",{parentName:"li"},"iframe")," ",(0,o.kt)("strong",{parentName:"li"},"doesn't")," support the properties injected by ",(0,o.kt)("inlineCode",{parentName:"li"},"micro-lc"),";"),(0,o.kt)("li",{parentName:"ul"},"inside an ",(0,o.kt)("inlineCode",{parentName:"li"},"iframe"),", it ",(0,o.kt)("strong",{parentName:"li"},"isn't")," possible to control the ",(0,o.kt)("inlineCode",{parentName:"li"},"micro-lc")," navigation flow.")),(0,o.kt)("p",null,"If you own the website to integrate, we advise you to use a ",(0,o.kt)("a",{parentName:"p",href:"#qiankun-plugin"},(0,o.kt)("inlineCode",{parentName:"a"},"Qiankun plugin")),"."),(0,o.kt)("h2",{id:"qiankun-plugin"},"Qiankun plugin"),(0,o.kt)("p",null,"To integrate this kind of plugins we rely on the ",(0,o.kt)("a",{parentName:"p",href:"https://qiankun.umijs.org/"},(0,o.kt)("inlineCode",{parentName:"a"},"qiankun"))," solution,\nthat requires most attention on the developer side."),(0,o.kt)("p",null,"To integrate a ",(0,o.kt)("inlineCode",{parentName:"p"},"qiankun")," plugin with ",(0,o.kt)("inlineCode",{parentName:"p"},"micro-lc"),", you must adapt your web application following the steps described\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/umijs/qiankun/blob/master/docs/guide/tutorial.md#micro-app"},"here"),":\nthe right procedure depends on the framework used to build the website."),(0,o.kt)("p",null,"If you want to create ",(0,o.kt)("strong",{parentName:"p"},"a plugin from scratch using ",(0,o.kt)("inlineCode",{parentName:"strong"},"React")),", consider to use\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mia-platform-marketplace/microlc-plugin-template"},"our template"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Depending on where you expose your plugin, you should configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin")," header."),(0,o.kt)("p",{parentName:"admonition"},"For security reasons, we discourage the use of a wildcard.")),(0,o.kt)("h3",{id:"plugin-communication"},"Plugin communication"),(0,o.kt)("p",null,"Each ",(0,o.kt)("inlineCode",{parentName:"p"},"qiankun")," plugin is able to ",(0,o.kt)("em",{parentName:"p"},"communicate")," with other ",(0,o.kt)("inlineCode",{parentName:"p"},"qiankun")," plugins, and to ",(0,o.kt)("em",{parentName:"p"},"navigate")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"qiankun")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"iframe")," plugins just using\nthe standard ",(0,o.kt)("inlineCode",{parentName:"p"},"window.history.push")," functionality: the parameters between plugins can be shared using the ",(0,o.kt)("inlineCode",{parentName:"p"},"window.location.search"),"."),(0,o.kt)("p",null,"An implementation example is available on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mia-platform/micro-lc/blob/main/example/src/App.jsx#L24"},"GitHub"),",\nas you can see:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let searchParams = new URLSearchParams(window.location.search);\n")),(0,o.kt)("p",null,"is used to parse the received parameters, while:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"window.history.pushState({}, `/${pluginRoute}`, `/${pluginRoute}?from=${from}`)\n")),(0,o.kt)("p",null,"is used to navigate to another plugin while it is passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," parameter."))}d.isMDXComponent=!0}}]);