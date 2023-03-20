"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4006],{65147:(e,n,t)=>{t.d(n,{Z:()=>f});var a=t(557);var i=t(76687),r=t(64923),l=t(61551),o=t(8643),c=t(85239);const s={details:"details_rf3i",isBrowser:"isBrowser_TTBx",collapsibleContent:"collapsibleContent_nKi4"};var m=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function u(e,n){return!!e&&(e===n||u(e.parentElement,n))}function p(e){var n=e.summary,t=e.children,p=(0,l.Z)(e,m),h=(0,o.Z)(),v=(0,i.useRef)(null),f=(0,c.u)({initialState:!p.open}),g=f.collapsed,E=f.setCollapsed,Z=(0,i.useState)(p.open),b=Z[0],N=Z[1];return i.createElement("details",(0,a.Z)({},p,{ref:v,open:b,"data-collapsed":g,className:(0,r.Z)(s.details,h&&s.isBrowser,p.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;d(n)&&u(n,v.current)&&(e.preventDefault(),g?(E(!1),N(!0)):E(!0))}}),null!=n?n:i.createElement("summary",null,"Details"),i.createElement(c.z,{lazy:!1,collapsed:g,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){E(e),N(!e)}},i.createElement("div",{className:s.collapsibleContent},t)))}const h={details:"details_W_s3"};var v="alert alert--info";function f(e){var n=Object.assign({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e));return i.createElement(p,(0,a.Z)({},n,{className:(0,r.Z)(v,h.details,n.className)}))}},81157:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(76687),i=t(79229),r=t(38104),l=t(557),o=t(61551),c=t(64923);const s={iconEdit:"iconEdit_ZH0g"};var m=["className"];function d(e){var n=e.className,t=(0,o.Z)(e,m);return a.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(s.iconEdit,n),"aria-hidden":"true"},t),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function u(e){var n=e.editUrl;return a.createElement("a",{href:n,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},a.createElement(d,null),a.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},70375:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(557),i=t(61551),r=t(76687),l=t(64923),o=t(79229),c=t(52166),s=t(83926);const m={anchorWithStickyNavbar:"anchorWithStickyNavbar_n1_P",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_rBeM"};var d=["as","id"];function u(e){var n=e.as,t=e.id,u=(0,i.Z)(e,d),p=(0,c.L)().navbar.hideOnScroll;if("h1"===n||!t)return r.createElement(n,(0,a.Z)({},u,{id:void 0}));var h=(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof u.children?u.children:t});return r.createElement(n,(0,a.Z)({},u,{className:(0,l.Z)("anchor",p?m.anchorWithHideOnScrollNavbar:m.anchorWithStickyNavbar,u.className),id:t}),u.children,r.createElement(s.Z,{className:"hash-link",to:"#"+t,"aria-label":h,title:h},"\u200b"))}},66286:(e,n,t)=>{t.d(n,{Z:()=>C});var a=t(557),i=t(76687),r=t(61551),l=t(45613),o=["mdxType","originalType"];var c=t(96323);var s=t(83926);var m=t(65147);var d=t(70375);function u(e){return i.createElement(d.Z,e)}var p=t(64923);const h={containsTaskList:"containsTaskList_wO8D"};const v={img:"img_NkVh"};var f=t(38104),g=t(79229);const E={admonition:"admonition_epLO",admonitionHeading:"admonitionHeading_IRhH",admonitionIcon:"admonitionIcon_RDp8",admonitionContent:"admonitionContent_t_xq"};var Z={note:{infimaClassName:"secondary",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:i.createElement(g.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 12 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:i.createElement(g.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 12 16"},i.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:i.createElement(g.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:i.createElement(g.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 16 16"},i.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:i.createElement(g.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},b={secondary:"note",important:"info",success:"tip",warning:"danger"};function N(e){var n,t=function(e){var n=i.Children.toArray(e),t=n.find((function(e){var n;return i.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(n=e.props)?void 0:n.mdxType)})),a=i.createElement(i.Fragment,null,n.filter((function(e){return e!==t})));return{mdxAdmonitionTitle:t,rest:a}}(e.children),a=t.mdxAdmonitionTitle,r=t.rest;return Object.assign({},e,{title:null!=(n=e.title)?n:a,children:r})}const C={head:function(e){var n=i.Children.map(e.children,(function(e){return i.isValidElement(e)?function(e){var n;if(null!=(n=e.props)&&n.mdxType&&e.props.originalType){var t=e.props,a=(t.mdxType,t.originalType,(0,r.Z)(t,o));return i.createElement(e.props.originalType,a)}return e}(e):e}));return i.createElement(l.Z,e,n)},code:function(e){var n=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return i.Children.toArray(e.children).every((function(e){var t;return"string"==typeof e&&!e.includes("\n")||(0,i.isValidElement)(e)&&n.includes(null==(t=e.props)?void 0:t.mdxType)}))?i.createElement("code",e):i.createElement(c.Z,e)},a:function(e){return i.createElement(s.Z,e)},pre:function(e){var n;return i.createElement(c.Z,(0,i.isValidElement)(e.children)&&"code"===(null==(n=e.children.props)?void 0:n.originalType)?e.children.props:Object.assign({},e))},details:function(e){var n=i.Children.toArray(e.children),t=n.find((function(e){var n;return i.isValidElement(e)&&"summary"===(null==(n=e.props)?void 0:n.mdxType)})),r=i.createElement(i.Fragment,null,n.filter((function(e){return e!==t})));return i.createElement(m.Z,(0,a.Z)({},e,{summary:t}),r)},ul:function(e){return i.createElement("ul",(0,a.Z)({},e,{className:(n=e.className,(0,p.Z)(n,(null==n?void 0:n.includes("contains-task-list"))&&h.containsTaskList))}));var n},img:function(e){return i.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(n=e.className,(0,p.Z)(n,v.img))}));var n},h1:function(e){return i.createElement(u,(0,a.Z)({as:"h1"},e))},h2:function(e){return i.createElement(u,(0,a.Z)({as:"h2"},e))},h3:function(e){return i.createElement(u,(0,a.Z)({as:"h3"},e))},h4:function(e){return i.createElement(u,(0,a.Z)({as:"h4"},e))},h5:function(e){return i.createElement(u,(0,a.Z)({as:"h5"},e))},h6:function(e){return i.createElement(u,(0,a.Z)({as:"h6"},e))},admonition:function(e){var n=N(e),t=n.children,a=n.type,r=n.title,l=n.icon,o=function(e){var n,t=null!=(n=b[e])?n:e,a=Z[t];return a||(console.warn('No admonition config found for admonition type "'+t+'". Using Info as fallback.'),Z.info)}(a),c=null!=r?r:o.label,s=o.iconComponent,m=null!=l?l:i.createElement(s,null);return i.createElement("div",{className:(0,p.Z)(f.k.common.admonition,f.k.common.admonitionType(e.type),"alert","alert--"+o.infimaClassName,E.admonition)},i.createElement("div",{className:E.admonitionHeading},i.createElement("span",{className:E.admonitionIcon},m),c),i.createElement("div",{className:E.admonitionContent},t))},mermaid:t(8063).Z}},24550:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(76687),i=t(55858),r=t(31560);function l(e){var n=e.children;return a.createElement(i.Zo,{components:r.Z},n)}},96058:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(76687),i=t(64923),r=t(83926);function l(e){var n=e.permalink,t=e.title,l=e.subLabel,o=e.isNext;return a.createElement(r.Z,{className:(0,i.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},t))}},2124:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(76687),i=t(64923),r=t(79229),l=t(83926);const o={tag:"tag_Cnvp",tagRegular:"tagRegular_hKKv",tagWithCount:"tagWithCount_Qmke"};function c(e){var n=e.permalink,t=e.label,r=e.count;return a.createElement(l.Z,{href:n,className:(0,i.Z)(o.tag,r?o.tagWithCount:o.tagRegular)},t,r&&a.createElement("span",null,r))}const s={tags:"tags_ByYZ",tag:"tag_BcBe"};function m(e){var n=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,i.Z)(s.tags,"padding--none","margin-left--sm")},n.map((function(e){var n=e.label,t=e.permalink;return a.createElement("li",{key:t,className:s.tag},a.createElement(c,{label:n,permalink:t}))}))))}}}]);