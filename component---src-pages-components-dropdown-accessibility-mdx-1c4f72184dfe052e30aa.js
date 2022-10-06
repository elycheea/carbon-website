"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[29745],{28399:function(e,t,a){a.d(t,{Z:function(){return A}});var r=a(67294),n=a(88650),i=a.n(n),s=a(1597),l=a(64905),o=a(76902),c=a(75900),d=a.n(c);var m=e=>{let{title:t,theme:a,tabs:n=[]}=e;return r.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":n.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},r.createElement("div",{className:"cds--grid"},r.createElement("div",{className:"cds--row"},r.createElement("div",{className:"cds--col-lg-12"},r.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var u=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:l,branch:o}=a||n,c=`${i}/edit/${o}${l}/src/pages${t}`;return i?r.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},r.createElement("div",{className:"cds--col"},r.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=a(56328),h=a(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=i()(e,{lower:!0,strict:!0}),l=t===n,o=new RegExp(`${n}/?(#.*)?$`),c=a.replace(o,t);return r.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},r.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return r.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},r.createElement("div",{className:"cds--grid"},r.createElement("div",{className:"cds--row"},r.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},r.createElement("nav",{"aria-label":e},r.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(r.Component);var k=b,w=a(17680),g=a(75387),y=a(50041);var v=e=>{let{date:t}=e;const a=new Date(t);return t?r.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},r.createElement(y.sg,null,r.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var A=e=>{let{pageContext:t,children:a,location:n,Title:c}=e;const{frontmatter:d={},relativePagePath:h,titleType:b}=t,{tabs:y,title:A,theme:f,description:N,keywords:C,date:T}=d,{interiorTheme:E}=(0,g.Z)(),{site:{pathPrefix:L}}=(0,s.useStaticQuery)("2456312558"),S=L?n.pathname.replace(L,""):n.pathname,x=y?S.split("/").filter(Boolean).slice(-1)[0]||i()(y[0],{lower:!0}):"",R=f||E;return r.createElement(o.Z,{tabs:y,homepage:!1,theme:R,pageTitle:A,pageDescription:N,pageKeywords:C,titleType:b},r.createElement(m,{title:c?r.createElement(c,null):A,label:"label",tabs:y,theme:R}),y&&r.createElement(k,{title:A,slug:S,tabs:y,currentTab:x}),r.createElement(w.Z,{padded:!0},a,r.createElement(u,{relativePagePath:h}),r.createElement(v,{date:T})),r.createElement(p.Z,{pageContext:t,location:n,slug:S,tabs:y,currentTab:x}),r.createElement(l.Z,null))}},38711:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return w}});var r=a(45987),n=(a(67294),a(64983)),i=a(28399),s=a(28108);const l=["components"],o={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},d=c("PageDescription"),m=c("AnchorLinks"),u=c("AnchorLink"),p=c("Row"),h=c("Column"),b={_frontmatter:o},k=i.Z;function w(e){let{components:t}=e,a=(0,r.Z)(e,l);return(0,n.kt)(k,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(d,{mdxType:"PageDescription"},(0,n.kt)("p",null,"The dropdown React Carbon component has been tested against the latest\n",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG21/"},"W3C Web Content Accessibility Guidelines (WCAG) 2.1 Level A and AA success criteria"),"\nand violations have been identified as high priority issues. This document will\nbe updated when these accessibility issues are resolved.")),(0,n.kt)(m,{mdxType:"AnchorLinks"},(0,n.kt)(u,{mdxType:"AnchorLink"},"Accessibility considerations"),(0,n.kt)(u,{mdxType:"AnchorLink"},"Resources"),(0,n.kt)(u,{mdxType:"AnchorLink"},"Accessibility testing")),(0,n.kt)("h2",null,"Accessibility considerations"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Avoid very long option names to facilitate understandability and\nperceivability."),(0,n.kt)("li",{parentName:"ol"},"Do not use the same word or phrase at the beginning of a set of options."),(0,n.kt)("li",{parentName:"ol"},"Avoid options that contain headings and interactive elements such as links,\nbuttons, or checkboxes."),(0,n.kt)("li",{parentName:"ol"},"If the dropdown is a required field include the\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG20-TECHS/ARIA2.html"},"aria-required property")," and\nindicate that it is a required field and use the validation message for input\nerrors.")),(0,n.kt)("h2",null,"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices-1.1/#Listbox"},"W3C WAI-ARIA Authoring Practices Listbox Design Pattern"),"\ncovers the usage of ARIA names, state and roles, as well as the expected\nkeyboard interactions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/"},"IBM Accessibility Requirements"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#2_4_7"},"2.4.7 Focus Visible"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html"},"2.4.7"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#3_2_2"},"3.2.2 On Input"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/consistent-behavior-unpredictable-change.html"},"3.2.2"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#4_1_2"},"4.1.2 Name, Role, Value"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},"4.1.2"),")")))),(0,n.kt)("h2",null,"Accessibility testing"),(0,n.kt)("p",null,"Automated, manual and screen reader accessibility verification test has been\nperformed on the dropdown React Carbon Component.\n",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG21/"},"WCAG 2.1 Level A and AA success criteria")," issues\nhave been identified and the list of open accessibility violations is available\nin the Carbon Component GitHub repository."),(0,n.kt)("h3",null,"Automated test"),(0,n.kt)(p,{mdxType:"Row"},(0,n.kt)(h,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(s.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(s.StructuredListHead,{mdxType:"StructuredListHead"},(0,n.kt)(s.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(s.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),(0,n.kt)(s.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,n.kt)(s.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(s.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(s.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.2 with VoiceOver",(0,n.kt)("br",null),"- Chrome version 77.0.3865.90",(0,n.kt)("br",null),"- Dynamic Assessment Plugin (DAP) version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(s.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"DAP test:"),(0,n.kt)("br",null),"- Violations")))))))}w.isMDXComponent=!0}}]);