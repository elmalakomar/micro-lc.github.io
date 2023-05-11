"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9764],{55858:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(76687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79693:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(76687),o=n(64923);const r={tabItem:"tabItem_ZBuY"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:n},t)}},51948:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(48792),o=n(76687),r=n(64923),i=n(69031),l=n(65722),c=n(30),s=n(10792),u=n(12735);function p(e){return function(e){var t,n;return null!=(t=null==(n=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,r=(0,l.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,c._X)(i),(0,o.useCallback)((function(e){if(i){var t=new URLSearchParams(r.location.search);t.set(i,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[i,r])]}function g(e){var t,n,a,r,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,s=e.groupId,p=m(e),g=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var o=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:i,tabValues:p})})),h=g[0],k=g[1],v=f({queryString:c,groupId:s}),b=v[0],y=v[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,u.Nk)(t),a=n[0],r=n[1],[a,(0,o.useCallback)((function(e){t&&r.set(e)}),[t,r])]),w=N[0],T=N[1],C=function(){var e=null!=b?b:w;return d({value:e,tabValues:p})?e:null}();return(0,o.useLayoutEffect)((function(){C&&k(C)}),[C]),{selectedValue:h,selectValue:(0,o.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);k(e),y(e),T(e)}),[y,T,p]),tabValues:p}}var h=n(50221);const k={tabList:"tabList_VS4l",tabItem:"tabItem_fBsV"};function v(e){var t=e.className,n=e.block,l=e.selectedValue,c=e.selectValue,s=e.tabValues,u=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==l&&(p(t),c(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var a,o=u.indexOf(e.currentTarget)+1;n=null!=(a=u[o])?a:u[0];break;case"ArrowLeft":var r,i=u.indexOf(e.currentTarget)-1;n=null!=(r=u[i])?r:u[u.length-1]}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return u.push(e)},onKeyDown:d,onClick:m},i,{className:(0,r.Z)("tabs__item",k.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue,r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=r.find((function(e){return e.props.value===a}));return i?(0,o.cloneElement)(i,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=g(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},o.createElement(v,(0,a.Z)({},e,t)),o.createElement(b,(0,a.Z)({},e,t)))}function N(e){var t=(0,h.Z)();return o.createElement(y,(0,a.Z)({key:String(t)},e))}},17557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=n(48792),o=n(91219),r=(n(76687),n(55858)),i=n(51948),l=n(79693),c=["components"],s={title:"Migrating from V1",description:"Migrate from version 1 to version 2 of micro-lc",sidebar_label:"Migrating from V1",sidebar_position:60},u=void 0,p={unversionedId:"docs/migrating-from-v1",id:"docs/migrating-from-v1",title:"Migrating from V1",description:"Migrate from version 1 to version 2 of micro-lc",source:"@site/docs/docs/migrating-from-v1.md",sourceDirName:"docs",slug:"/docs/migrating-from-v1",permalink:"/docs/migrating-from-v1",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/migrating-from-v1.md",tags:[],version:"current",lastUpdatedBy:"epessina",sidebarPosition:60,frontMatter:{title:"Migrating from V1",description:"Migrate from version 1 to version 2 of micro-lc",sidebar_label:"Migrating from V1",sidebar_position:60},sidebar:"docs",previous:{title:"Reuse third party libraries",permalink:"/docs/guides/reuse-third-party-libraries"},next:{title:"CHANGELOG",permalink:"/docs/CHANGELOG"}},m={},d=[{value:"Main differences",id:"main-differences",level:2},{value:"Migration process",id:"migration-process",level:2},{value:"<code>authentication.json</code>",id:"authenticationjson",level:4},{value:"<code>configuration.json</code>",id:"configurationjson",level:4},{value:"Element composer configurations",id:"element-composer-configurations",level:4},{value:"Automated migration",id:"automated-migration",level:2},{value:"Config Mode",id:"config-mode",level:3},{value:"<code>dir (-d)</code>",id:"dir--d",level:4},{value:"<code>elementComposerUrlRegex (-e)</code>",id:"elementcomposerurlregex--e",level:4},{value:"Compose Mode",id:"compose-mode",level:3},{value:"<code>dir (-d)</code>",id:"dir--d-1",level:4}],f={toc:d},g="wrapper";function h(e){var t=e.components,n=(0,o.Z)(e,c);return(0,r.kt)(g,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This doc guides you through migrating an existing ",(0,r.kt)("micro-lc",null)," 1 application to ",(0,r.kt)("micro-lc",null)," 2. We try\nto make this as easy as possible, and provide a migration CLI."),(0,r.kt)("h2",{id:"main-differences"},"Main differences"),(0,r.kt)("p",null,(0,r.kt)("micro-lc",null)," 1 was a React application built as a ",(0,r.kt)("strong",{parentName:"p"},"vertical micro-frontend orchestrator")," (i.e., each\nmicro-frontend corresponded to a specific route), which leverages another React application (the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/micro-lc/micro-lc-element-composer"},"element composer"),") to implement ",(0,r.kt)("strong",{parentName:"p"},"horizontal micro-frontend\norchestration")," (i.e., page composition). Moreover, ",(0,r.kt)("micro-lc",null)," 1 enforced a pre-defined and ever-present\ntop-bar/sidebar navigation layout."),(0,r.kt)("p",null,(0,r.kt)("micro-lc",null)," 2, rebuilt from the ground up, is a ",(0,r.kt)("a",{parentName:"p",href:"/api/micro-lc-web-component"},"web component")," that\nincludes both ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/routing"},"vertical")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/composition"},"horizontal")," with a much lower footprint\nin terms of bundle size and loading speed. Moreover, ",(0,r.kt)("micro-lc",null)," 2 leaves complete flexibility when it comes\nto building ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/layout"},"layouts"),", and implements some really useful features like\n",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/communication"},"internal communication")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/reuse-third-party-libraries"},"dependencies sharing"),"."),(0,r.kt)("h2",{id:"migration-process"},"Migration process"),(0,r.kt)("p",null,"To obtain a fully functional ",(0,r.kt)("micro-lc",null)," 2 application, you firstly need to update ",(0,r.kt)("micro-lc",null),"\n",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/microlc/micro-lc"},"Docker image")," version. Remember that the container can now\n",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started#deploy-docker-container"},"be tuned")," to cover some specific need."),(0,r.kt)("p",null,"Once the image has been updated, you need to adapt the configuration files to the new structure. Keep in mind that a\n",(0,r.kt)("a",{parentName:"p",href:"#automated-migration"},"CLI")," is provided to automate this migration, and that you can consult the new configuration\n",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/micro-lc/micro-lc/v2/main/packages/interfaces/schemas/v2/config.schema.json"},"JSON schema"),"\nfor reference."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We provide a ",(0,r.kt)("a",{parentName:"p",href:"/add-ons/backend/middleware"},"backend service")," to serve configurations with ACL and references resolution\nutilities.")),(0,r.kt)("p",null,(0,r.kt)("micro-lc",null)," 1 needed two configuration files to define its registered micro-frontend, theming options, and\nlayout preferences. In addition to them, it needed a configuration file for each plugin implementing the element\ncomposer for dynamic page composition."),(0,r.kt)("h4",{id:"authenticationjson"},(0,r.kt)("inlineCode",{parentName:"h4"},"authentication.json")),(0,r.kt)("p",null,"This file contained instructions on how to retrieve current user information and handle logout operations. This file\nis not needed in ",(0,r.kt)("micro-lc",null)," 2 as its content can be moved in\n",(0,r.kt)("a",{parentName:"p",href:"/add-ons/components/mlc-layout#usermenu"},(0,r.kt)("inlineCode",{parentName:"a"},"userMenu"))," key of default layout configuration."),(0,r.kt)("h4",{id:"configurationjson"},(0,r.kt)("inlineCode",{parentName:"h4"},"configuration.json")),(0,r.kt)("p",null,"This file contained the core configuration of the application, namely its plugins, theming, and addons. Its content can\nbe transferred in ",(0,r.kt)("micro-lc",null)," 2 ",(0,r.kt)("a",{parentName:"p",href:"/api/micro-lc-web-component#configuration"},"configuration file"),". The main\ndifferences can be roughly outlined as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("micro-lc",null)," 1 plugins became ",(0,r.kt)("a",{parentName:"li",href:"/api/micro-lc-web-component#applications"},"application")," definitions and\n\u2013 possibly \u2013 layout ",(0,r.kt)("a",{parentName:"li",href:"/add-ons/components/mlc-layout#menuitem"},"menu items"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("micro-lc",null)," 1 internal plugins became ",(0,r.kt)("a",{parentName:"li",href:"/api/micro-lc-web-component#applications"},"application"),"\ndefinitions, but do not appear on the layout."),(0,r.kt)("li",{parentName:"ul"},"initial loading animation must be ",(0,r.kt)("a",{parentName:"li",href:"/add-ons/components/mlc-loading-animation"},"added")," on your ",(0,r.kt)("inlineCode",{parentName:"li"},"index.html")," file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("micro-lc",null)," 1 right menu can be inserted in default layout ",(0,r.kt)("a",{parentName:"li",href:"/add-ons/components/mlc-layout#slots"},"slot"),". "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("micro-lc",null)," 1 theming configurations are spread in default layout\n",(0,r.kt)("a",{parentName:"li",href:"/add-ons/components/mlc-layout#properties-and-attributes"},"properties"),".")),(0,r.kt)("h4",{id:"element-composer-configurations"},"Element composer configurations"),(0,r.kt)("p",null,"While you can still use the element composer registering it as a ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/applications/parcels"},"parcel")," (in which\ncase configuration files stays the same), ",(0,r.kt)("micro-lc",null)," 2 offers\n",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/composition"},"composition functionalities")," out of the box."),(0,r.kt)("p",null,"To use them, just register the applications as ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose"},"compose")," and tweak the configuration\nfiles accordingly. The main differences can be roughly outlined as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"custom elements sources are put together in ",(0,r.kt)("inlineCode",{parentName:"li"},"sources")," properties."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("micro-lc",null)," 1 ",(0,r.kt)("inlineCode",{parentName:"li"},"busDiscriminator")," property is converted into a named\n",(0,r.kt)("a",{parentName:"li",href:"/docs/guides/applications/compose#eventbus"},(0,r.kt)("inlineCode",{parentName:"a"},"eventBus")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("micro-lc",null)," 1 rows and columns are converted into ",(0,r.kt)("inlineCode",{parentName:"li"},"<div>")," with appropriate styling."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$ref")," property becomes ",(0,r.kt)("inlineCode",{parentName:"li"},"definitions")," to align to JSON schema standard notation, and references in content changes from",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$ref": {\n    "referencesString": "bar"\n  },\n  "foo": {\n    "$ref": "referencesString"\n  }\n}\n')),"to",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "definitions": {\n    "referencesString": "bar"\n  },\n  "foo": {\n    "$ref": "#/definitions/referencesString"\n  }\n}\n')))),(0,r.kt)("h2",{id:"automated-migration"},"Automated migration"),(0,r.kt)("p",null,"The migration CLI can be used to automatically translate an application configurations from ",(0,r.kt)("micro-lc",null)," 1 to\n",(0,r.kt)("micro-lc",null)," 2."),(0,r.kt)(i.Z,{groupId:"pkg-manager",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx @micro-lc/middleware <args>\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"yarn 2+",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn dlx @micro-lc/middleware <args>\n")))),(0,r.kt)("p",null,"The CLI operates in two modes, ",(0,r.kt)("a",{parentName:"p",href:"#config-mode"},"config")," to translate old ",(0,r.kt)("inlineCode",{parentName:"p"},"authentication.json")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration.json"),"\nfiles to the new configuration file, and ",(0,r.kt)("a",{parentName:"p",href:"#compose-mode"},"compose")," to translate old element composer configuration\nfiles to new ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose"},"compose applications")," configurations."),(0,r.kt)("p",null,"The mode can be specified with flag ",(0,r.kt)("inlineCode",{parentName:"p"},"-m (--mode)")," which can have value ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," (default) or ",(0,r.kt)("inlineCode",{parentName:"p"},"compose"),"."),(0,r.kt)("h3",{id:"config-mode"},"Config Mode"),(0,r.kt)("p",null,"To invoke the CLI in this mode, it has to receive ",(0,r.kt)("strong",{parentName:"p"},"exactly two args"),", namely the absolute or relative path to\n",(0,r.kt)("inlineCode",{parentName:"p"},"authentication.json")," file ",(0,r.kt)("strong",{parentName:"p"},"followed")," by the absolute or relative path to ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration.json")," file."),(0,r.kt)(i.Z,{groupId:"pkg-manager",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx @micro-lc/middleware --mode config <path_to_authentication.json_file> <configuration.json_file>\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"yarn 2+",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn dlx @micro-lc/middleware --mode config <path_to_authentication.json_file> <configuration.json_file>\n")))),(0,r.kt)("p",null,"Available options are the following."),(0,r.kt)("h4",{id:"dir--d"},(0,r.kt)("inlineCode",{parentName:"h4"},"dir (-d)")),(0,r.kt)("div",{style:{paddingLeft:"1em"}},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"string"))),(0,r.kt)("p",null,"Absolute or relative path of the output directory. The output file will be called ",(0,r.kt)("inlineCode",{parentName:"p"},"config.json"),". If the specified\ndirectory does not exist, ",(0,r.kt)("strong",{parentName:"p"},"it will be created"),"."),(0,r.kt)("p",null,"If no output dir is specified, the resulting file ",(0,r.kt)("strong",{parentName:"p"},"will be printed in standard output"),".")),(0,r.kt)("h4",{id:"elementcomposerurlregex--e"},(0,r.kt)("inlineCode",{parentName:"h4"},"elementComposerUrlRegex (-e)")),(0,r.kt)("div",{style:{paddingLeft:"1em"}},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"RegExp"))),(0,r.kt)("p",null,"This option can be used to identify ",(0,r.kt)("micro-lc",null)," 1 plugins the uses the element composer and have to be\nconverted in ",(0,r.kt)("micro-lc",null)," 2 compose applications."),(0,r.kt)("p",null,"The regex specified with this option will be run against the ",(0,r.kt)("inlineCode",{parentName:"p"},"pluginUrl")," of each plugin with integration mode ",(0,r.kt)("inlineCode",{parentName:"p"},"qiankun"),".\nSo, for example, if you have a plugin lke this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "id": "my-element-composer-plugin",\n  "integrationMode": "qiankun",\n  "pluginRoute": "/foo",\n  // highlight-next-line\n  "pluginUrl": "/element-composer/"\n}\n')),(0,r.kt)("p",null,"and you want it to be transformed in a ",(0,r.kt)("inlineCode",{parentName:"p"},"compose")," application, the cli invocation would be"),(0,r.kt)(i.Z,{groupId:"pkg-manager",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'npx @micro-lc/middleware --m config -e "/element-composer/" <path_to_authentication.json_file> <configuration.json_file>\n'))),(0,r.kt)(l.Z,{value:"yarn",label:"yarn 2+",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'yarn dlx @micro-lc/middleware --m config -e "/element-composer/" <path_to_authentication.json_file> <configuration.json_file>\n'))))),(0,r.kt)("p",null,"For compatibility reasons, the config URL of ",(0,r.kt)("inlineCode",{parentName:"p"},"compose")," applications is set to\n",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v1/microlc/configuration/${oldPlugin.props.configurationName}.json"),". After the conversion, remember to change it\naccordingly to your specific setup. "),(0,r.kt)("h3",{id:"compose-mode"},"Compose Mode"),(0,r.kt)("p",null,"The CLI invoked in this mode can receive as many arguments as you want, each of them being a relative or absolute path\n(",(0,r.kt)("strong",{parentName:"p"},"glob syntax can be used"),") resolving to one or more files to be converted."),(0,r.kt)(i.Z,{groupId:"pkg-manager",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx @micro-lc/middleware --mode compose <paths_to_files...>\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"yarn 2+",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn dlx @micro-lc/middleware --mode compose <paths_to_files...>\n")))),(0,r.kt)("p",null,"Available options are the following."),(0,r.kt)("h4",{id:"dir--d-1"},(0,r.kt)("inlineCode",{parentName:"h4"},"dir (-d)")),(0,r.kt)("div",{style:{paddingLeft:"1em"}},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"string"))),(0,r.kt)("p",null,"Absolute or relative path of the output directory. The output files will be called as the respective input. If the\nspecified directory does not exist, ",(0,r.kt)("strong",{parentName:"p"},"it will be created"),"."),(0,r.kt)("p",null,"If no output dir is specified, the resulting files ",(0,r.kt)("strong",{parentName:"p"},"will be printed in standard output"),".")))}h.isMDXComponent=!0}}]);