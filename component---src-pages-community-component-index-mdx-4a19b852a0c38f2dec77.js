"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[90688],{28399:function(e,t,a){a.d(t,{Z:function(){return P}});var n=a(67294),r=a(88650),l=a.n(r),s=a(1597),o=a(64905),c=a(76902),i=a(75900),m=a.n(i);var d=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var u=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:o,branch:c}=a||r,i=`${l}/edit/${c}${o}/src/pages${t}`;return l?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:i},"Edit this page on GitHub"))):null},p=a(56328),g=a(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),o=t===r,c=new RegExp(`${r}/?(#.*)?$`),i=a.replace(c,t);return n.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":o},"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${i}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},t}(n.Component);var E=b,h=a(17680),v=a(75387),y=a(50041);var f=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var P=e=>{let{pageContext:t,children:a,location:r,Title:i}=e;const{frontmatter:m={},relativePagePath:g,titleType:b}=t,{tabs:y,title:P,theme:k,description:N,keywords:w,date:T}=m,{interiorTheme:x}=(0,v.Z)(),{site:{pathPrefix:C}}=(0,s.useStaticQuery)("2456312558"),D=C?r.pathname.replace(C,""):r.pathname,Z=y?D.split("/").filter(Boolean).slice(-1)[0]||l()(y[0],{lower:!0}):"",B=k||x;return n.createElement(c.Z,{tabs:y,homepage:!1,theme:B,pageTitle:P,pageDescription:N,pageKeywords:w,titleType:b},n.createElement(d,{title:i?n.createElement(i,null):P,label:"label",tabs:y,theme:B}),y&&n.createElement(E,{title:P,slug:D,tabs:y,currentTab:Z}),n.createElement(h.Z,{padded:!0},a,n.createElement(u,{relativePagePath:g}),n.createElement(f,{date:T})),n.createElement(p.Z,{pageContext:t,location:r,slug:D,tabs:y,currentTab:Z}),n.createElement(o.Z,null))}},55679:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return p}});var n=a(45987),r=(a(67294),a(64983)),l=a(28399),s=a(76268);const o=["components"],c={},i=(m="PageDescription",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const d={_frontmatter:c},u=l.Z;function p(e){let{components:t}=e,a=(0,n.Z)(e,o);return(0,r.kt)(u,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i,{mdxType:"PageDescription"},(0,r.kt)("p",null,"These components are developed and maintained by members of the IBM Carbon\ncommunity and are currently only accessible to IBMers. They may change over\ntime, and they may be incomplete or experimental. For support, please contact\nthe contributors listed on each page.")),(0,r.kt)(s.Z,{mdxType:"ComponentIndexPage"}))}p.isMDXComponent=!0}}]);