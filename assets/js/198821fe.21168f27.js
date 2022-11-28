"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[266],{212:(e,t,n)=>{n.d(t,{Z:()=>y});var i=n(6687),a=n(4923),o=n(6967),r=n(7899),c=n(6752),l=n(9586);const s="cardContainer_GGLh",p="cardTitle_gVTD",m="cardDescription_JGLR";function d(e){var t=e.href,n=e.children;return i.createElement(r.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},n)}function u(e){var t=e.href,n=e.icon,o=e.title,r=e.description;return i.createElement(d,{href:t},i.createElement("h2",{className:(0,a.Z)("text--truncate",p),title:o},n," ",o),r&&i.createElement("p",{className:(0,a.Z)("text--truncate",m),title:r},r))}function f(e){var t=e.item,n=(0,o.Wl)(t);return n?i.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t,n=e.item,a=(0,c.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.xz)(null!=(t=n.docId)?t:void 0);return i.createElement(u,{href:n.href,icon:a,title:n.label,description:null==r?void 0:r.description})}function h(e){var t=e.item;switch(t.type){case"link":return i.createElement(g,{item:t});case"category":return i.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function k(e){var t=e.className,n=(0,o.jA)();return i.createElement(y,{items:n.items,className:t})}function y(e){var t=e.items,n=e.className;if(!t)return i.createElement(k,e);var r=(0,o.MN)(t);return i.createElement("section",{className:(0,a.Z)("row",n)},r.map((function(e,t){return i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(h,{item:e}))})))}},8281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>k,frontMatter:()=>m,metadata:()=>u,toc:()=>g});var i=n(6428),a=n(8920),o=(n(6687),n(5858)),r=n(406),c=n(2886),l=n(1276),s=n(212),p=["components"],m={title:"Applications",description:"Dynamic portion of micro-lc"},d=void 0,u={unversionedId:"docs/guides/applications/index",id:"docs/guides/applications/index",title:"Applications",description:"Dynamic portion of micro-lc",source:"@site/docs/docs/guides/applications/index.md",sourceDirName:"docs/guides/applications",slug:"/docs/guides/applications/",permalink:"/documentation/docs/guides/applications/",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/guides/applications/index.md",tags:[],version:"current",lastUpdatedBy:"Umberto Toniolo",frontMatter:{title:"Applications",description:"Dynamic portion of micro-lc"},sidebar:"docs",previous:{title:"Routing",permalink:"/documentation/docs/guides/routing"},next:{title:"iFrames",permalink:"/documentation/docs/guides/applications/iframes"}},f={},g=[{value:"Configuration",id:"configuration",level:2}],h={toc:g};function k(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Applications are micro-frontends rendered in the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/docs/concepts/separation-of-concerns"},"dynamic part")," of\n",(0,o.kt)("micro-lc",null),". Each application corresponds to a URL pathname, and ",(0,o.kt)("micro-lc",null)," is responsible to\nproperty handle ",(0,o.kt)("a",{parentName:"p",href:"/documentation/docs/guides/routing"},"routing")," between them."),(0,o.kt)("p",null,(0,o.kt)("micro-lc",null)," supports three different micro-frontend patterns to integrate applications:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/documentation/docs/guides/applications/iframes"},(0,o.kt)("inlineCode",{parentName:"a"},"iframe")),", where applications are embedded in an iframe tag providing full strict encapsulation,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/documentation/docs/guides/applications/compose"},(0,o.kt)("inlineCode",{parentName:"a"},"compose")),", where applications are dynamically composed of HTML5 elements or web components following a\nprovided configuration, and"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/documentation/docs/guides/applications/parcels"},(0,o.kt)("inlineCode",{parentName:"a"},"parcel")),", where the orchestrator is provided with the full scope of assets needed to start the applications\n(most of the time either an HTML file or JS scripts).")),(0,o.kt)("p",null,"There also exists a particular type of applications, ",(0,o.kt)("a",{parentName:"p",href:"/documentation/docs/guides/applications/error-pages"},"error pages"),", which differ in that have a fixed\nrouting pattern."),(0,o.kt)(s.Z,{mdxType:"DocCardList"}),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Applications are registered in the context of ",(0,o.kt)("micro-lc",null)," through\nconfiguration key ",(0,o.kt)("a",{parentName:"p",href:"/documentation/api/micro-lc-web-component#applications"},(0,o.kt)("inlineCode",{parentName:"a"},"applications")),", a map linking application\n",(0,o.kt)("strong",{parentName:"p"},"unique identifiers")," to specific information needed for the ",(0,o.kt)("strong",{parentName:"p"},"integration"),"."),(0,o.kt)(l.Z,{language:"typescript",mdxType:"CodeBlock"},"interface Applications {","\n","  ","[unique_id: string]: ",(0,o.kt)("a",{href:"./iframes"},"IFrameApplication")," | ",(0,o.kt)("a",{href:"./compose"},"ComposableApplication")," | ",(0,o.kt)("a",{href:"./parcels"},"ParcelApplication"),"\n","}"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example"),(0,o.kt)("div",null,(0,o.kt)(r.Z,{groupId:"configuration",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"0",label:"YAML",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="micro-lc.config.yaml"',title:'"micro-lc.config.yaml"'},'applications:\n  iFrame:\n    integrationMode: iframe\n    route: ./my-iframe-application\n    src: https://www.wikipedia.org/\n    attributes:\n      title: Wikipedia\n      \n  compose:\n    integrationMode: compose\n    route: ./my-compose-application\n    config:\n      - tag: div\n        attributes:\n          style: "color: red;"\n        content: Hello World!\n  \n  parcel:\n    integrationMode: parcel\n    route: ./my-parcel-application\n    entry: https://my-static-server/my-parcel-entry.html\n'))),(0,o.kt)(c.Z,{value:"1",label:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="micro-lc.config.json"',title:'"micro-lc.config.json"'},'{\n  "applications": {\n    "iFrame": {\n      "integrationMode": "iframe",\n      "route": "./my-iframe-application",\n      "src": "https://www.wikipedia.org/",\n      "attributes": {\n        "title": "Wikipedia"\n      }\n    },\n    "compose": {\n      "integrationMode": "compose",\n      "route": "./my-compose-application",\n      "config": [\n        {\n          "tag": "div",\n          "attributes": {\n            "style": "color: red;"\n          },\n          "content": "Hello World!"\n        }\n      ]\n    },\n    "parcel": {\n      "integrationMode": "parcel",\n      "route": "./my-parcel-application",\n      "entry": "https://my-static-server/my-parcel-entry.html"\n    }\n  }\n}\n')))))))}k.isMDXComponent=!0}}]);