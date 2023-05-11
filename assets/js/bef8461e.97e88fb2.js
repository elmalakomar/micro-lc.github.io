"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2882],{55858:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(76687);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,r(r({ref:t},s),{},{components:n})):a.createElement(h,r({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(48792),i=n(91219),o=(n(76687),n(55858)),r=["components"],l={title:"Micro Launch Complex",sidebar_label:"Overview"},c=void 0,p={unversionedId:"docs/introduction",id:"version-1.0.0/docs/introduction",title:"Micro Launch Complex",description:"micro-lc is the open source solution for building flexible, multi-tenant frontend applications following the",source:"@site/versioned_docs/version-1.0.0/docs/introduction.md",sourceDirName:"docs",slug:"/docs/introduction",permalink:"/1.0.0/docs/introduction",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/versioned_docs/version-1.0.0/docs/introduction.md",tags:[],version:"1.0.0",lastUpdatedBy:"epessina",frontMatter:{title:"Micro Launch Complex",sidebar_label:"Overview"},sidebar:"docs",next:{title:"Authentication",permalink:"/1.0.0/docs/authentication"}},s={},d=[{value:"Architecture",id:"architecture",level:2},{value:"Frontend container",id:"frontend-container",level:2},{value:"Base layout",id:"base-layout",level:3},{value:"User management",id:"user-management",level:3},{value:"Plugin management",id:"plugin-management",level:3},{value:"Branding",id:"branding",level:3},{value:"Dark mode",id:"dark-mode",level:3},{value:"Analytics",id:"analytics",level:3},{value:"Backend configuration provider",id:"backend-configuration-provider",level:2},{value:"Plugins",id:"plugins",level:2}],m={toc:d},u="wrapper";function h(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)(u,(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"micro-lc")," is the open source solution for building flexible, multi-tenant frontend applications following the\n",(0,o.kt)("a",{parentName:"p",href:"https://micro-frontends.org/"},"Micro Frontend")," architecture."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"micro-lc")," consists of a core interface that loads, embeds, and orchestrates ",(0,o.kt)("strong",{parentName:"p"},"plugins")," (your individual frontend\napplications) at runtime, while providing configuration options and useful out-of-the-box features."),(0,o.kt)("p",null,"The project is open source, and it can be found on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/micro-lc/micro-lc"},"GitHub"),". The\ncore components are written in Typescript and React, but ",(0,o.kt)("inlineCode",{parentName:"p"},"micro-lc")," is ",(0,o.kt)("strong",{parentName:"p"},"technology-agnostic"),": this means that it integrates\nseamlessly with your favorite toolkit, being it Angular, React, Vue, or anything else you like - even Vanilla JavaScript!"),(0,o.kt)("p",null,"Take a look at the introduction about micro frontend and how ",(0,o.kt)("inlineCode",{parentName:"p"},"micro-lc")," works:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=QumadjC2krU"},(0,o.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/QumadjC2krU/0.jpg",alt:"micro-lc introduction video"}))),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Architecture",src:n(34360).Z,width:"2968",height:"2116"})),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"micro-lc")," is composed by three main blocks: ",(0,o.kt)("strong",{parentName:"p"},"fe-container"),", ",(0,o.kt)("strong",{parentName:"p"},"be-config")," and a varying number\nof ",(0,o.kt)("strong",{parentName:"p"},"plugins"),"."),(0,o.kt)("h2",{id:"frontend-container"},"Frontend container"),(0,o.kt)("p",null,"The frontend core of ",(0,o.kt)("inlineCode",{parentName:"p"},"micro-lc")," is the ",(0,o.kt)("strong",{parentName:"p"},"fe-container"),": a lightweight launcher written in ",(0,o.kt)("inlineCode",{parentName:"p"},"React")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Typescript"),". The ",(0,o.kt)("strong",{parentName:"p"},"fe-container"),"\nhas two main responsabilities: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"to render the plugins;"),(0,o.kt)("li",{parentName:"ul"},"providing the application a set of core functionalities.")),(0,o.kt)("p",null,"These functionalities are for the most part configurable through a ",(0,o.kt)("a",{parentName:"p",href:"/1.0.0/docs/core_configuration"},"core configuration"),"\nretrieved by the launcher at runtime. The choice of consuming this configuration at runtime makes the fe-container\n",(0,o.kt)("strong",{parentName:"p"},"multi tenant"),": multiple tenants can use the same instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"micro-lc")," controlling the rendered plugins and the\napplication theme through different configurations."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("strong",{parentName:"p"},"fe-container")," is also available as ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/miaplatform/microlc"},"Docker image"),".")),(0,o.kt)("p",null,"Below there is a list of the features offered and handled by the ",(0,o.kt)("strong",{parentName:"p"},"fe-container"),"."),(0,o.kt)("h3",{id:"base-layout"},"Base layout"),(0,o.kt)("p",null,"The launcher provides the core navigation layout composed by a top bar and a side menu. The top bar is responsible for\nthe top-level functionalities. The list of plugins and the routing capabilities are placed by default on the side menu,\nbut you can move them in the top bar."),(0,o.kt)("p",null,"While the top bar is always visible after the configuration load, the menu is designed as an overlay to leave as much space as possible to the\nplugins."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The plugins can implement their own sub-navigation with a dedicated side menu. Please note that the menu can be configured also on the topbar.\nThis will not graphically or logically interfere with ",(0,o.kt)("inlineCode",{parentName:"p"},"micro-lc"),", which will integrate seamlessly the plugin routing in the main one.")),(0,o.kt)("h3",{id:"user-management"},"User management"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"micro-lc")," doesn't provide any authentication system, but it can be plugged in using the procedure described in the ",(0,o.kt)("a",{parentName:"p",href:"/1.0.0/docs/authentication"},"Authentication section"),"."),(0,o.kt)("h3",{id:"plugin-management"},"Plugin management"),(0,o.kt)("p",null,"One of the most important responsibilities of the ",(0,o.kt)("strong",{parentName:"p"},"fe-container")," is the management of the plugins.",(0,o.kt)("br",{parentName:"p"}),"\n","Each plugin is fetched and added to the side menu ",(0,o.kt)("strong",{parentName:"p"},"at boot"),", while it is rendered and embedded into the launcher ",(0,o.kt)("strong",{parentName:"p"},"only when requested"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If needed, a new route is registered at boot for accessing the plugin.")),(0,o.kt)("p",null,"All the information about the plugins to render are retrieved from the ",(0,o.kt)("a",{parentName:"p",href:"/1.0.0/docs/core_configuration"},"Core configuration"),"."),(0,o.kt)("h3",{id:"branding"},"Branding"),(0,o.kt)("p",null,"Through the configuration, the ",(0,o.kt)("strong",{parentName:"p"},"fe-container")," handles the main branding of the application. Namely, it applies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the specified ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/1.0.0/docs/core_configuration#menulocation"},"menu location"))," of the menu (topBar/sideBar);"),(0,o.kt)("li",{parentName:"ul"},"the specified ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/1.0.0/docs/core_configuration#logo"},"logo"))," in the top bar;"),(0,o.kt)("li",{parentName:"ul"},"the specified ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/1.0.0/docs/core_configuration#favicon"},"favicon"))," and ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/1.0.0/docs/core_configuration#pagetitle"},"document title")),";"),(0,o.kt)("li",{parentName:"ul"},"the specified ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/1.0.0/docs/core_configuration#navigation_url"},"navigation url"))," to the logo;"),(0,o.kt)("li",{parentName:"ul"},"the specified ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/1.0.0/docs/core_configuration#primarycolor"},"primary color"))," to the different layout components.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"From the ",(0,o.kt)("strong",{parentName:"p"},"primary color")," is derived its ",(0,o.kt)("strong",{parentName:"p"},"89% tint"),", a mixture of the ",(0,o.kt)("strong",{parentName:"p"},"primary color")," with white: both are available using\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"},(0,o.kt)("inlineCode",{parentName:"a"},"css variables")),",\nrespectively named ",(0,o.kt)("inlineCode",{parentName:"p"},"--microlc-primary-color")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--microlc-primary-color-tint-89"),"."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"--microlc-primary-color-tint-89")," is used to color, for example, the selected menu entry.")),(0,o.kt)("h3",{id:"dark-mode"},"Dark mode"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"micro-lc")," is available the ",(0,o.kt)("strong",{parentName:"p"},"dark mode"),", where the colors are changed to darker tints.\nThe dark mode is managed using the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"},(0,o.kt)("inlineCode",{parentName:"a"},"css variables")),"\nmentioned above.\nIt is possible to configure a secondary icon link for the dark theme inside the field ",(0,o.kt)("inlineCode",{parentName:"p"},"url_dark_image")," of the logo object.\nIn the ",(0,o.kt)("inlineCode",{parentName:"p"},"url_dark_image")," field of the logo object you can configure the link to an alternative icon: this icon will be displayed when the dark mode is enabled."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"A ",(0,o.kt)("a",{parentName:"p",href:"/1.0.0/docs/plugin_configuration#qiankun-plugin"},"qiankun plugin")," can programmatically check the ",(0,o.kt)("inlineCode",{parentName:"p"},"dark-theme")," attribute,\non the ",(0,o.kt)("inlineCode",{parentName:"p"},"html")," node, to know if dark mode is enabled.")),(0,o.kt)("h3",{id:"analytics"},"Analytics"),(0,o.kt)("p",null,"The integration with ",(0,o.kt)("a",{parentName:"p",href:"https://analytics.google.com/"},"Google Analytics")," is available and described in the ",(0,o.kt)("a",{parentName:"p",href:"/1.0.0/docs/analytics"},"Analytics section"),"."),(0,o.kt)("h2",{id:"backend-configuration-provider"},"Backend configuration provider"),(0,o.kt)("p",null,"The configuration consumed by the ",(0,o.kt)("strong",{parentName:"p"},"fe-container")," is served by ",(0,o.kt)("strong",{parentName:"p"},"be-config"),", detailed in its ",(0,o.kt)("a",{parentName:"p",href:"/1.0.0/docs/backend"},"dedicated section"),"."),(0,o.kt)("h2",{id:"plugins"},"Plugins"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"plugins")," are the ",(0,o.kt)("inlineCode",{parentName:"p"},"micro-fronted")," that actually composes the end application.",(0,o.kt)("br",{parentName:"p"}),"\n","Each plugin is an ",(0,o.kt)("strong",{parentName:"p"},"independent"),", ",(0,o.kt)("strong",{parentName:"p"},"self-contained")," entity which can be written ",(0,o.kt)("strong",{parentName:"p"},"in any framework"),".\nPlugins can have their own dedicated backend, and they can be extended or configured at will at runtime."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"micro-lc")," offers different ways to integrate plugins, as outlined ",(0,o.kt)("a",{parentName:"p",href:"/1.0.0/docs/plugin_configuration"},"in this section"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Plugins can communicate with each other, or navigate to each other manipulating the history of the application:\nsee ",(0,o.kt)("a",{parentName:"p",href:"/1.0.0/docs/plugin_configuration#plugin-communication"},"Plugins communication")," section for a more detailed explanation."))}h.isMDXComponent=!0},34360:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/microlc_architecture-d97c9b42184310789e660bd602442877.png"}}]);