"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2836],{5858:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var o=t(6687);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return t?o.createElement(y,i(i({ref:n},c),{},{components:t})):o.createElement(y,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<r;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2886:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(6687),a=t(4923);const r="tabItem_EP2U";function i(e){var n=e.children,t=e.hidden,i=e.className;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,i),hidden:t},n)}},406:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(6428),a=t(6687),r=t(4923),i=t(3634),p=t(6844),l=t(3667),s=t(3107);const c="tabList_jxcF",m="tabItem_Lqs7";function u(e){var n,t,i=e.lazy,u=e.block,d=e.defaultValue,y=e.values,f=e.groupId,b=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=y?y:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,p.l)(g,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(n=null!=d?d:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:k[0].props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),C=N.tabGroupChoices,w=N.setTabGroupChoices,T=(0,a.useState)(v),j=T[0],O=T[1],P=[],A=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var x=C[f];null!=x&&x!==j&&g.some((function(e){return e.value===x}))&&O(x)}var S=function(e){var n=e.currentTarget,t=P.indexOf(n),o=g[t].value;o!==j&&(A(n),O(o),null!=f&&w(f,String(o)))},M=function(e){var n,t=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":var o,a=P.indexOf(e.currentTarget)+1;t=null!=(o=P[a])?o:P[0];break;case"ArrowLeft":var r,i=P.indexOf(e.currentTarget)-1;t=null!=(r=P[i])?r:P[P.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},b)},g.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:j===n?0:-1,"aria-selected":j===n,key:n,ref:function(e){return P.push(e)},onKeyDown:M,onClick:S},i,{className:(0,r.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":j===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(k.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==j})}))))}function d(e){var n=(0,i.Z)();return a.createElement(u,(0,o.Z)({key:String(n)},e))}},1085:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>m,toc:()=>d});var o=t(6428),a=t(8920),r=(t(6687),t(5858)),i=t(406),p=t(2886),l=["components"],s={title:"Compose",description:"Composition of HTML tags",sidebar_label:"Compose",sidebar_position:20},c=void 0,m={unversionedId:"docs/guides/applications/compose",id:"docs/guides/applications/compose",title:"Compose",description:"Composition of HTML tags",source:"@site/docs/docs/guides/applications/compose.md",sourceDirName:"docs/guides/applications",slug:"/docs/guides/applications/compose",permalink:"/documentation/docs/guides/applications/compose",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/guides/applications/compose.md",tags:[],version:"current",lastUpdatedBy:"Umberto Toniolo",sidebarPosition:20,frontMatter:{title:"Compose",description:"Composition of HTML tags",sidebar_label:"Compose",sidebar_position:20},sidebar:"docs",previous:{title:"iFrames",permalink:"/documentation/docs/guides/applications/iframes"},next:{title:"Parcels",permalink:"/documentation/docs/guides/applications/parcels"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"Plugin configuration",id:"plugin-configuration",level:2},{value:"Content definition",id:"content-definition",level:2},{value:"Component representation",id:"component-representation",level:2},{value:"Properties injection",id:"properties-injection",level:2},{value:"User-supplied properties",id:"user-supplied-properties",level:3},{value:"Interpolated properties",id:"interpolated-properties",level:3},{value:"<code>microlcApi</code>",id:"microlcapi",level:4},{value:"<code>composerApi</code>",id:"composerapi",level:4},{value:"<code>eventBus</code>",id:"eventbus",level:4},{value:"<code>currentUser</code>",id:"currentuser",level:4},{value:"Shared properties",id:"shared-properties",level:4}],y={toc:d};function f(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"/documentation/docs/concepts/composition"},"composable")," application is a pseudo-HTML document enhanced with JavaScript properties\ndynamically injected by the ",(0,r.kt)("a",{parentName:"p",href:"/documentation/api/composer-api"},"composer application"),". "),(0,r.kt)("p",null,"The resulting DOM tree is constructed on the basis of a specific configuration, which can be directly provided, or sourced\nfrom an external JSON or YAML file."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Declare an application with integration mode ",(0,r.kt)("inlineCode",{parentName:"p"},"compose")," in ",(0,r.kt)("micro-lc",null)," configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'interface ComposableApplication {\n  integrationMode: "compose"\n  config: PluginConfiguration | string // See explanation below\n  route: string // Path on which the composable application will be rendered\n}\n')),(0,r.kt)("p",null,"The application configuration has to be supplied with the ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," key, which may be either a full\n",(0,r.kt)("a",{parentName:"p",href:"#plugin-configuration"},"configuration object")," or a URL string from which a configuration with the same structure can\nbe downloaded."),(0,r.kt)("h2",{id:"plugin-configuration"},"Plugin configuration"),(0,r.kt)("p",null,"The configuration of a composable application is the blueprint used by ",(0,r.kt)("micro-lc",null)," composer (being it the\ndefault one or a ",(0,r.kt)("a",{parentName:"p",href:"/documentation/api/micro-lc-web-component#composeruri"},"custom implementation"),") to dynamically construct\nthe page at runtime."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface PluginConfiguration {\n  $schema: string\n  sources?:\n    | string\n    | string[]\n    | {\n        uris: string | string[]\n        importmap?: ImportMap\n      }\n  content: Content\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Key ",(0,r.kt)("inlineCode",{parentName:"p"},"$schema")," can be used to reference ",(0,r.kt)("micro-lc",null)," plugin configuration\n",(0,r.kt)("a",{parentName:"p",href:"https://cdn.jsdelivr.net/npm/@micro-lc/interfaces@latest/schemas/v2/plugin.schema.json"},"JSON schema")," to greatly ease\nthe writing process by constantly validating the JSON or YAML content against it.")),(0,r.kt)("p",null,"The actual page structure is provided in ",(0,r.kt)("inlineCode",{parentName:"p"},"content")," key, and building blocks are HTML5 elements or custom web components.\nIn the letter case, sources have to be provided for custom components, and one can do so with the ",(0,r.kt)("inlineCode",{parentName:"p"},"sources")," key."),(0,r.kt)("p",null,"By polymorphism, ",(0,r.kt)("inlineCode",{parentName:"p"},"sources")," can be a string or an array of strings if just JavaScript asset entries have to be provided.\nIf an ",(0,r.kt)("a",{parentName:"p",href:"/documentation/docs/guides/reuse-third-party-libraries"},"importmap")," is needed, ",(0,r.kt)("inlineCode",{parentName:"p"},"sources")," can become an object housing JavaScript asset\nentry URIs (key ",(0,r.kt)("inlineCode",{parentName:"p"},"uris"),") and importmap definition (key ",(0,r.kt)("inlineCode",{parentName:"p"},"importmap"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="micro-lc.conf.yaml"',title:'"micro-lc.conf.yaml"'},"applications:\n\n  # Single JavaScript asset entry URI\n  app-1:\n    sources: https://my-static-server/my-web-component.js\n    content: ...\n\n  # Multiple JavaScript asset entry URIs\n  app-2:\n    sources: \n      - https://my-static-server/my-web-component-1.js\n      - https://my-static-server/my-web-component-2.js\n    content: ...\n\n  # Importmap\n  app-3:\n    sources:\n      uris: https://my-static-server/my-web-component.js\n      importmap:\n        imports: ...\n        scopes: ...\n    content: ...\n")),(0,r.kt)("h2",{id:"content-definition"},"Content definition"),(0,r.kt)("p",null,"A composable application content is a representation of a pseudo-DOM tree written in a markup language (namely JSON\nor YAML) that undergoes a ",(0,r.kt)("a",{parentName:"p",href:"/documentation/docs/concepts/composition"},"series of processes")," to be transformed into a valid, appendable\nDOM."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Content = string | number | Component | (Component | number | string)[]\n")),(0,r.kt)("p",null,"A valid content can assume different shapes, as long as it is a valid HTML element or a convertible representation of\none. It may be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a primitive (",(0,r.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),")",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'content: "A string is a valid HTML element!"\n'))),(0,r.kt)("li",{parentName:"ul"},"a stringified DOM tree#stringified-dom-tree, particularly powerful when used in YAML files, since it can benefit\nfrom ",(0,r.kt)("a",{parentName:"li",href:"https://yaml-multiline.info/"},"YAML block scalars")," to greatly enhance readability",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'content: |\n  <div .classname=${"my-class"} .microlcApi=${microlcApi}>\n    <p style="color: red;">\n      This is written as a single string\n    </p>\n  </div>\n'))),(0,r.kt)("li",{parentName:"ul"},"a single ",(0,r.kt)("a",{parentName:"li",href:"#component-representation"},"component representation"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'content:\n  tag: div\n  attributes:\n    style: "color: red;"\n  properties:\n    classname: my-class\n  content: This structure is transformed into a valid HTML element\n'))),(0,r.kt)("li",{parentName:"ul"},"a list of the above",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'content:\n  - "String element"\n  - 12\n  - tag: div\n')))),(0,r.kt)("h2",{id:"component-representation"},"Component representation"),(0,r.kt)("p",null,"A component corresponds to an HTML node, being it an HTML5 element or a custom web component. Practically speaking,\na component is an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Component {\n  /** HTML node tag name */\n  tag: string\n  \n  /** HTML5 attribute applied using setAttribute API */\n  attributes?: Record<string, string>\n  \n  /** HTML5 boolean attribute applied using setAttribute API */\n  booleanAttributes?: string | string[]\n  \n  /** DOM element property applied as object property after creating an element */\n  properties?: Record<string, unknown>\n\n  /** Node children */\n  content?: Content\n}\n")),(0,r.kt)("p",null,"The type is recursive as ",(0,r.kt)("inlineCode",{parentName:"p"},"content")," is a ",(0,r.kt)("a",{parentName:"p",href:"#content-definition"},"content definition")," which may itself take the form of a\n",(0,r.kt)("inlineCode",{parentName:"p"},"Component"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'content:\n  tag: button\n  attributes:\n    style: "color: red;"\n  booleanAttributes: disabled\n  content: Click me!\n\n# Output: <button disabled style="color: red;">Click me!</button>\n\n---\n\ncontent:\n  tag: my-component\n  attributes:\n    class: my-class\n    my-numeric-attribute: 2\n  properties:\n    myCustomProperty: some-value\n  content:\n    tag: span\n    content: Hello World!\n\n# Output: \ud83d\udc47\n#   <my-component class="my-class" my-numeric-attribute="2">\n#     <span>Hello World!</span>\n#   </my-component>\n#\n#   document.querySelector("my-component").myCustomProperty \ud83d\udc49 "some-value"\n')),(0,r.kt)("h2",{id:"properties-injection"},"Properties injection"),(0,r.kt)("p",null,"When composing a content, the constructed nodes can receive two types of properties: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"user-supplied properties ",(0,r.kt)("strong",{parentName:"li"},"explicitly declared")," in configuration, and"),(0,r.kt)("li",{parentName:"ul"},"a set of ",(0,r.kt)("strong",{parentName:"li"},"special properties")," interpolated and injected directly by ",(0,r.kt)("micro-lc",null)," composer.")),(0,r.kt)("h3",{id:"user-supplied-properties"},"User-supplied properties"),(0,r.kt)("p",null,"User-supplied properties can be declared using the ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," property of\n",(0,r.kt)("a",{parentName:"p",href:"#component-representation"},"component interface"),", or through a special ",(0,r.kt)("em",{parentName:"p"},"dotted notation"),"\n(",(0,r.kt)("inlineCode",{parentName:"p"},".property_name=${property_value}"),") if relying on the stringified DOM tree representation. Either case, any\n",(0,r.kt)("strong",{parentName:"p"},"valid JSON value")," is acceptable as property and injected into components context as is."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"0",label:"Objective representation",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'content:\n  tag: my-component\n  properties:\n    stringProp: foo\n    numberProp: 3\n    arrayProp:\n      - foo\n      - bar\n    objectProp:\n      foo: bar\n\n# myComponent.stringProp \ud83d\udc49 Output: "foo"\n# myComponent.numberProp \ud83d\udc49 Output: 3\n# myComponent.arrayProp  \ud83d\udc49 Output: ["foo", "bar"]\n# myComponent.objectProp \ud83d\udc49 Output: {foo: "bar"}\n'))),(0,r.kt)(p.Z,{value:"1",label:"Stringified representation",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'layout:\n  content: |\n    <div\n      .stringProp=${"foo"}\n      .numberProp=${4}\n      .arrayProp=${["foo", "bar"]}\n      .objectProp=${{"foo": "bar"}}\n    ></div>\n\n# myComponent.stringProp \ud83d\udc49 Output: "foo"\n# myComponent.numberProp \ud83d\udc49 Output: 3\n# myComponent.arrayProp  \ud83d\udc49 Output: ["foo", "bar"]\n# myComponent.objectProp \ud83d\udc49 Output: {foo: "bar"}\n')))),(0,r.kt)("h3",{id:"interpolated-properties"},"Interpolated properties"),(0,r.kt)("p",null,(0,r.kt)("micro-lc",null)," injects a series of special properties into each DOM node it creates. These properties are\nautomatically interpolated, and therefore they need to be marked by ",(0,r.kt)("strong",{parentName:"p"},"reserved keywords")," for ",(0,r.kt)("micro-lc",null)," to\nrecognize them and assign them the correct value (always in a secure manner without ",(0,r.kt)("inlineCode",{parentName:"p"},"eval")," or similar structures)."),(0,r.kt)("p",null,"When using ",(0,r.kt)("em",{parentName:"p"},"object component representation"),", interpolated properties ",(0,r.kt)("strong",{parentName:"p"},"do not need to be explicitly declared"),". However,\nif they are, the key used must match the reserved one, and the value must be equal to the key. On the other hand, when\nusing ",(0,r.kt)("em",{parentName:"p"},"stringified DOM tree representation"),", properties you want to be injected need to be ",(0,r.kt)("strong",{parentName:"p"},"explicitly declared")," with\nthe correct key and value."),(0,r.kt)("p",null,"For example, let's consider the special property ",(0,r.kt)("inlineCode",{parentName:"p"},"microlcApi")," and different scenarios."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"0",label:"Objective representation",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"content:\n  tag: my-component\n\n# myComponent.microlcApi is defined and correctly set\n\n---\n\ncontent:\n  tag: my-component\n  properties:\n    stringProp: foo\n\n# myComponent.microlcApi is defined and correctly set\n\n---\n\ncontent:\n  tag: my-component\n  properties:\n    microlcApi: microlcApi\n    \n# myComponent.microlcApi is defined and correctly set\n\n---\n\ncontent:\n  tag: my-component\n  properties:\n    microlcApi: foo\n\n# myComponent.microlcApi is undefined\n"))),(0,r.kt)(p.Z,{value:"1",label:"Stringified representation",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"layout:\n  content: |\n    <my-component></my-component>\n\n# myComponent.microlcApi is undefined\n\n---\n\nlayout:\n  content: |\n    <my-component .microlcApi=${microlcApi}></my-component>\n\n# myComponent.microlcApi is defined and correctly set\n\n---\n\nlayout:\n  content: |\n    <my-component .microlcApi=${foo}></my-component>\n\n# myComponent.microlcApi is undefined\n")))),(0,r.kt)("p",null,"The special properties injected by ",(0,r.kt)("micro-lc",null)," are the following."),(0,r.kt)("h4",{id:"microlcapi"},(0,r.kt)("inlineCode",{parentName:"h4"},"microlcApi")),(0,r.kt)("div",{style:{paddingLeft:"1em"}},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Object"))),(0,r.kt)("p",null,"Common ",(0,r.kt)("a",{parentName:"p",href:"../../../api/micro-lc-api"},"API")," offered by ",(0,r.kt)("micro-lc",null)," as\n",(0,r.kt)("a",{parentName:"p",href:"/documentation/docs/concepts/communication#micro-lc-api"},"mean of communication"),".")),(0,r.kt)("h4",{id:"composerapi"},(0,r.kt)("inlineCode",{parentName:"h4"},"composerApi")),(0,r.kt)("div",{style:{paddingLeft:"1em"}},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Object"))),(0,r.kt)("p",null,"Common ",(0,r.kt)("a",{parentName:"p",href:"/documentation/api/composer-api"},"API")," offered by ",(0,r.kt)("micro-lc",null)," composer to achieve\n",(0,r.kt)("a",{parentName:"p",href:"/documentation/docs/concepts/composition"},"composition"),".")),(0,r.kt)("h4",{id:"eventbus"},(0,r.kt)("inlineCode",{parentName:"h4"},"eventBus")),(0,r.kt)("div",{style:{paddingLeft:"1em"}},(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Composed ",(0,r.kt)("a",{parentName:"p",href:"/documentation/docs/guides/layout#build-a-layout"},"layouts")," and ",(0,r.kt)("a",{parentName:"p",href:"/documentation/docs/guides/layout#mount-point"},"mount points")," ",(0,r.kt)("strong",{parentName:"p"},"do not have access")," to\nthis property.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface EventBus<T = unknown> extends rxjs.ReplaySubject<T> {\n  [index: number]: rxjs.ReplaySubject<T>\n  pool: Record<string, rxjs.ReplaySubject<T>>\n}\n")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://rxjs.dev/api/index/class/ReplaySubject"},"RxJS ReplaySubject")," useful to establish a reactive communication\nbetween components of the same application."),(0,r.kt)("p",null,"The property gives component the ability to spawn multiple ReplaySubjects, allowing multichannel communication.\n",(0,r.kt)("inlineCode",{parentName:"p"},"eventBus")," itself is a ReplaySubject, but calling ",(0,r.kt)("inlineCode",{parentName:"p"},"eventBus[0]")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"eventBus.pool.foo")," will create two other \u2013\ncompletely different \u2013 ReplaySubject entities."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=micro-lc.config.yaml",title:"micro-lc.config.yaml"},"content:\n  tag: my-component\n  \n# myComponent.eventBus !== myComponent.eventBus[0] !== myComponent.eventBus.pool.foo\n"))),(0,r.kt)("h4",{id:"currentuser"},(0,r.kt)("inlineCode",{parentName:"h4"},"currentUser")),(0,r.kt)("div",{style:{paddingLeft:"1em"}},(0,r.kt)("admonition",{title:"Deprecation notice",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"This property will be removed in future versions. Use ",(0,r.kt)("micro-lc",null)," API\n",(0,r.kt)("a",{parentName:"p",href:"/documentation/api/micro-lc-api/reactive-communication#subscribe"},"subscribe method")," instead.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"rxjs.Observable"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://rxjs.dev/guide/observable"},"RxJS Observable")," taken from ",(0,r.kt)("micro-lc",null)," API\n",(0,r.kt)("a",{parentName:"p",href:"/documentation/api/micro-lc-api/reactive-communication#subscribe"},"Pub/Sub channel")," containing information on the current\napplication user.")),(0,r.kt)("h4",{id:"shared-properties"},"Shared properties"),(0,r.kt)("div",{style:{paddingLeft:"1em"}},(0,r.kt)("p",null,"Content of ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," key of configuration key ",(0,r.kt)("a",{parentName:"p",href:"/documentation/api/micro-lc-web-component#shared"},(0,r.kt)("inlineCode",{parentName:"a"},"shared")),". ",(0,r.kt)("inlineCode",{parentName:"p"},"properties"),"\nkey is spread and each of its property is injected independently."),(0,r.kt)("p",null,"Example:"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"0",label:"Objective representation",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'shared:\n  properties:\n    foo: bar\n\nlayout:\n  content:\n    tag: my-component\n\n# myComponent.foo \ud83d\udc49 Output: "bar"\n'))),(0,r.kt)(p.Z,{value:"1",label:"Stringified representation",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'shared:\n  properties:\n    foo: bar\n\nlayout:\n  content: |\n    <div id="my-div" .foo=${foo}></div>\n\n# myComponent.foo \ud83d\udc49 Output: "bar"\n'))))))}f.isMDXComponent=!0}}]);